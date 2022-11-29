// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
import "./lib/GenesisUtils.sol";
import "./interfaces/ICircuitValidator.sol";
import "./verifiers/ZKPVerifier.sol";
import "./StandardToken.sol";

abstract contract ERC20Verifier is StandardToken, ZKPVerifier {

    receive() external payable {
        //if ether is sent to this address, send it back.
        revert();
    }

    /* Public variables of the token */
    uint64 public constant TRANSFER_REQUEST_ID = 1;
    uint256 public TOKEN_AMOUNT_FOR_AIRDROP_PER_ID;
    mapping(uint256 => address) public idToAddress;
    mapping(address => uint256) public addressToId;
    string public name;                   //Token Name
    string public symbol;                  //Token Symbol     
    uint256 private decimals;
    uint256 private _totalSupply;


    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _decimalUnits,
        uint256 _initialAmount,
        uint256 _airdrop
        
        ) {
        TOKEN_AMOUNT_FOR_AIRDROP_PER_ID = _airdrop;
        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
        totalSupply = _initialAmount;                        // Update total supply
        name = _tokenName;                                   // Set the name for display purposes
        decimals = _decimalUnits;                            // Amount of decimals for display purposes
        symbol = _tokenSymbol;                               // Set the symbol for display purposes  
    }


    /**
     * @dev _beforeProofSubmit
     */
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
    
    /**
     * @dev _afterProofSubmit
     */
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

    /**
     * @dev _beforeTokenTransfer
     */
    function _beforeTokenTransfer(
        address, /* from */
        address to,
        uint256 /* amount */
    ) internal override view {
        require(
            proofs[to][TRANSFER_REQUEST_ID] == true,
            "only identities who provided proof are allowed to receive tokens"
        );
    }
}