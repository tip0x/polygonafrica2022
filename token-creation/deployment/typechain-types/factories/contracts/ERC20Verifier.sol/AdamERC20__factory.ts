/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AdamERC20,
  AdamERC20Interface,
} from "../../../contracts/ERC20Verifier.sol/AdamERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimalUnits",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "childChainManagerProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newChildChainManagerProxy",
        type: "address",
      },
    ],
    name: "updateChildChainManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e1938038062000e1983398101604081905262000034916200015a565b3360009081526020819052604090208490556002849055600362000059848262000278565b506004805460ff191660ff8416179055600562000077828262000278565b5050600780546001600160a01b031916331790555062000344915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000bd57600080fd5b81516001600160401b0380821115620000da57620000da62000095565b604051601f8301601f19908116603f0116810190828211818310171562000105576200010562000095565b816040528381526020925086838588010111156200012257600080fd5b600091505b8382101562000146578582018301518183018401529082019062000127565b600093810190920192909252949350505050565b600080600080608085870312156200017157600080fd5b845160208601519094506001600160401b03808211156200019157600080fd5b6200019f88838901620000ab565b94506040870151915060ff82168214620001b857600080fd5b606087015191935080821115620001ce57600080fd5b50620001dd87828801620000ab565b91505092959194509250565b600181811c90821680620001fe57607f821691505b6020821081036200021f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200027357600081815260208120601f850160051c810160208610156200024e5750805b601f850160051c820191505b818110156200026f578281556001016200025a565b5050505b505050565b81516001600160401b0381111562000294576200029462000095565b620002ac81620002a58454620001e9565b8462000225565b602080601f831160018114620002e45760008415620002cb5750858301515b600019600386901b1c1916600185901b1785556200026f565b600085815260208120601f198616915b828110156200031557888601518255948401946001909101908401620002f4565b5085821015620003345787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ac580620003546000396000f3fe6080604052600436106100e15760003560e01c806362f629e71161007f578063a9059cbb11610059578063a9059cbb14610280578063cf2c52cb146102a0578063d5f39488146102c0578063dd62ed3e146102e057600080fd5b806362f629e7146101fd57806370a082311461023557806395d89b411461026b57600080fd5b806323b872dd116100bb57806323b872dd1461016f5780632e1a7d4d1461018f578063313ce567146101b1578063445a6797146101dd57600080fd5b806306fdde03146100f0578063095ea7b31461011b57806318160ddd1461014b57600080fd5b366100eb57600080fd5b600080fd5b3480156100fc57600080fd5b50610105610326565b604051610112919061083f565b60405180910390f35b34801561012757600080fd5b5061013b6101363660046108a9565b6103b4565b6040519015158152602001610112565b34801561015757600080fd5b5061016160025481565b604051908152602001610112565b34801561017b57600080fd5b5061013b61018a3660046108d3565b610421565b34801561019b57600080fd5b506101af6101aa36600461090f565b61055f565b005b3480156101bd57600080fd5b506004546101cb9060ff1681565b60405160ff9091168152602001610112565b3480156101e957600080fd5b506101af6101f8366004610928565b6105c4565b34801561020957600080fd5b5060065461021d906001600160a01b031681565b6040516001600160a01b039091168152602001610112565b34801561024157600080fd5b50610161610250366004610928565b6001600160a01b031660009081526020819052604090205490565b34801561027757600080fd5b5061010561069b565b34801561028c57600080fd5b5061013b61029b3660046108a9565b6106a8565b3480156102ac57600080fd5b506101af6102bb366004610943565b61075b565b3480156102cc57600080fd5b5060075461021d906001600160a01b031681565b3480156102ec57600080fd5b506101616102fb3660046109c6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60038054610333906109f9565b80601f016020809104026020016040519081016040528092919081815260200182805461035f906109f9565b80156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061040f9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b038316600090815260208190526040812054821180159061046c57506001600160a01b03841660009081526001602090815260408083203384529091529020548211155b80156104785750600082115b15610554576001600160a01b038316600090815260208190526040812080548492906104a5908490610a49565b90915550506001600160a01b038416600090815260208190526040812080548492906104d2908490610a5c565b90915550506001600160a01b03841660009081526001602090815260408083203384529091528120805484929061050a908490610a5c565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610a708339815191528460405161054491815260200190565b60405180910390a3506001610558565b5060005b9392505050565b3360009081526020819052604090205461057a908290610a5c565b33600090815260208190526040902055600254610598908290610a5c565b6002556040518181526000903390600080516020610a708339815191529060200160405180910390a350565b6001600160a01b03811661062a5760405162461bcd60e51b815260206004820152602260248201527f426164204368696c64436861696e4d616e6167657250726f7879206164647265604482015261737360f01b60648201526084015b60405180910390fd5b6007546001600160a01b031633146106795760405162461bcd60e51b8152602060048201526012602482015271165bdd49dc99481b9bdd08185b1b1bddd95960721b6044820152606401610621565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60058054610333906109f9565b3360009081526020819052604081205482118015906106c75750600082115b156107535733600090815260208190526040812080548492906106eb908490610a5c565b90915550506001600160a01b03831660009081526020819052604081208054849290610718908490610a49565b90915550506040518281526001600160a01b038416903390600080516020610a708339815191529060200160405180910390a350600161041b565b50600061041b565b6006546001600160a01b031633146107b55760405162461bcd60e51b815260206004820152601d60248201527f596f75277265206e6f7420616c6c6f77656420746f206465706f7369740000006044820152606401610621565b60006107c38284018461090f565b9050806002546107d39190610a49565b6002556001600160a01b0384166000908152602081905260409020546107fa908290610a49565b6001600160a01b03851660008181526020818152604080832094909455925184815291929091600080516020610a70833981519152910160405180910390a350505050565b600060208083528351808285015260005b8181101561086c57858101830151858201604001528201610850565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146108a457600080fd5b919050565b600080604083850312156108bc57600080fd5b6108c58361088d565b946020939093013593505050565b6000806000606084860312156108e857600080fd5b6108f18461088d565b92506108ff6020850161088d565b9150604084013590509250925092565b60006020828403121561092157600080fd5b5035919050565b60006020828403121561093a57600080fd5b6105588261088d565b60008060006040848603121561095857600080fd5b6109618461088d565b9250602084013567ffffffffffffffff8082111561097e57600080fd5b818601915086601f83011261099257600080fd5b8135818111156109a157600080fd5b8760208285010111156109b357600080fd5b6020830194508093505050509250925092565b600080604083850312156109d957600080fd5b6109e28361088d565b91506109f06020840161088d565b90509250929050565b600181811c90821680610a0d57607f821691505b602082108103610a2d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561041b5761041b610a33565b8181038181111561041b5761041b610a3356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122066c87c00241586dca95bbeeb5691de3f9833d56747734505fdcc2deb2288232564736f6c63430008110033";

type AdamERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdamERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdamERC20__factory extends ContractFactory {
  constructor(...args: AdamERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialAmount: PromiseOrValue<BigNumberish>,
    _tokenName: PromiseOrValue<string>,
    _decimalUnits: PromiseOrValue<BigNumberish>,
    _tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdamERC20> {
    return super.deploy(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      overrides || {}
    ) as Promise<AdamERC20>;
  }
  override getDeployTransaction(
    _initialAmount: PromiseOrValue<BigNumberish>,
    _tokenName: PromiseOrValue<string>,
    _decimalUnits: PromiseOrValue<BigNumberish>,
    _tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      overrides || {}
    );
  }
  override attach(address: string): AdamERC20 {
    return super.attach(address) as AdamERC20;
  }
  override connect(signer: Signer): AdamERC20__factory {
    return super.connect(signer) as AdamERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdamERC20Interface {
    return new utils.Interface(_abi) as AdamERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdamERC20 {
    return new Contract(address, _abi, signerOrProvider) as AdamERC20;
  }
}
