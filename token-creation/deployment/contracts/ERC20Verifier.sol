// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Imports
// ========================================================
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./lib/GenesisUtils.sol";
import "./interfaces/ICircuitValidator.sol";
import "./verifiers/ZKPVerifier.sol";

interface Token {

    function totalSupply() external view returns (uint256 supply);
    function balanceOf(address _owner) external view returns (uint256 balance);
    function transfer(address _to, uint256 _value) external returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
    function approve(address _spender, uint256 _value) external returns (bool success);
    function allowance(address _owner, address _spender) external returns (uint256 remaining);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
interface IChildToken {
    function deposit(address user, bytes calldata depositData) external;
}


contract StandardToken is Token {

    function transfer(address _to, uint256 _value) external override returns (bool success) {

        if (balances[msg.sender] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            emit Transfer(msg.sender, _to, _value);
            return true;
        } else { return false; }
    }

    function transferFrom(address _from, address _to, uint256 _value) external override returns (bool success) {
       
        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0) {
            balances[_to] += _value;
            balances[_from] -= _value;
            allowed[_from][msg.sender] -= _value;
            emit Transfer(_from, _to, _value);
            return true;
        } else { return false; }
    }

    function balanceOf(address _owner) public override view returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value) external override returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) external override view returns (uint256 remaining) {
      return allowed[_owner][_spender];
    }

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;
    uint256 public override totalSupply;
}


contract AdamERC20 is StandardToken, IChildToken {

    receive() external payable {
        //if ether is sent to this address, send it back.
        revert();
    }

    /* Public variables of the token */
    string public name;                   //Token Name
    uint8 public decimals;                //1e18 = 1 Eth
    string public symbol;                 //Token Symbol     
    address public childChainManagerProxy;  //Calls deposit function if bridged to rootChain
    address public deployer;


    constructor(
        uint256 _initialAmount,
        string memory _tokenName,
        uint8 _decimalUnits,
        string memory _tokenSymbol
        ) {
        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
        totalSupply = _initialAmount;                        // Update total supply
        name = _tokenName;                                   // Set the name for display purposes
        decimals = _decimalUnits;                            // Amount of decimals for display purposes
        symbol = _tokenSymbol;                               // Set the symbol for display purposes    
        deployer = msg.sender;
        // Can't mint here, because minting in child chain smart contract's constructor not allowed if POS bridge asset mapping would be considered eventually
    
    }

    // being proxified smart contract, childChainManagerProxy contract's address

    function updateChildChainManager(address newChildChainManagerProxy) external {
        require(newChildChainManagerProxy != address(0), "Bad ChildChainManagerProxy address");
        require(msg.sender == deployer, "You're not allowed");

        childChainManagerProxy = newChildChainManagerProxy;
    }

    function deposit(address user, bytes calldata depositData) external override {
        require(msg.sender == childChainManagerProxy, "You're not allowed to deposit");
        uint256 amount = abi.decode(depositData, (uint256));

        totalSupply = totalSupply + amount;
        balances[user] = balances[user]+amount;
        
        emit Transfer(address(0), user, amount);
    }

    function withdraw(uint256 amount) external {
        balances[msg.sender] = balances[msg.sender]-amount;
        totalSupply = totalSupply-amount;
        
        emit Transfer(msg.sender, address(0), amount);
    }
}

abstract contract ERC20Verifier is ERC20, ZKPVerifier {

    uint64 public constant TRANSFER_REQUEST_ID = 1;
    uint256 public TOKEN_AMOUNT_FOR_AIRDROP_PER_ID =
        5 * 10**uint256(decimals());
    mapping(uint256 => address) public idToAddress;
    mapping(address => uint256) public addressToId;

    function _beforeProofSubmit(
        uint64, /* requestId */
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that challenge input of the proof is equal to the msg.sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        require(
            _msgSender() == addr,
            "address in proof is not a sender address"
        );
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        require(
            requestId == TRANSFER_REQUEST_ID && addressToId[_msgSender()] == 0,
            "proof can not be submitted more than once"
        );

        uint256 id = inputs[validator.getChallengeInputIndex()];
        // execute the airdrop
        if (idToAddress[id] == address(0)) {
            super._mint(_msgSender(), TOKEN_AMOUNT_FOR_AIRDROP_PER_ID);
            addressToId[_msgSender()] = id;
            idToAddress[id] = _msgSender();
        }
    }

    function _beforeTokenTransfer(
        address, /* from */
        address to,
        uint256 /* amount */
    ) internal view override {
        require(
            proofs[to][TRANSFER_REQUEST_ID] == true,
            "only identities who provided proof are allowed to receive tokens"
        );
    }
}
