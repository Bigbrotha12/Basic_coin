/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Registration,
  RegistrationInterface,
} from "../../../../../contracts/G_Upgradable_NFT/IMXBridge/IMX_Bridge.sol/Registration";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMX",
        name: "_imx",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "imx",
    outputs: [
      {
        internalType: "contract IMX",
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
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "registerAndDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantizedAmount",
        type: "uint256",
      },
    ],
    name: "registerAndDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAndDepositNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
    ],
    name: "registerAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAndWithdrawNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "registerAndWithdrawNftTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "registerAndWithdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "mintingBlob",
        type: "bytes",
      },
    ],
    name: "regsiterAndWithdrawAndMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017f2380380620017f28339818101604052810190620000379190620000fc565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200012e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b6000620000c482620000a3565b9050919050565b620000d681620000b7565b8114620000e257600080fd5b50565b600081519050620000f681620000cb565b92915050565b6000602082840312156200011557620001146200007e565b5b60006200012584828501620000e5565b91505092915050565b6116b4806200013e6000396000f3fe6080604052600436106100915760003560e01c80634627d598116100595780634627d59814610165578063579a69881461018e5780638bdb9f80146101cb578063ea864adf146101e7578063ef4ae27f1461021057610091565b80630a9c3beb146100965780630f08025f146100bf5780631259cc6c146100ea578063352eb84c146101135780634280d50a1461013c575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610e4c565b610239565b005b3480156100cb57600080fd5b506100d4610364565b6040516100e19190610f67565b60405180910390f35b3480156100f657600080fd5b50610111600480360381019061010c9190610f82565b610388565b005b34801561011f57600080fd5b5061013a60048036038101906101359190611031565b6104b3565b005b34801561014857600080fd5b50610163600480360381019061015e91906110cb565b6105db565b005b34801561017157600080fd5b5061018c6004803603810190610187919061117a565b610706565b005b34801561019a57600080fd5b506101b560048036038101906101b09190611214565b61082e565b6040516101c2919061125c565b60405180910390f35b6101e560048036038101906101e09190611031565b610900565b005b3480156101f357600080fd5b5061020e60048036038101906102099190611277565b610af9565b005b34801561021c57600080fd5b50610237600480360381019061023291906110cb565b610c1e565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4888888886040518563ffffffff1660e01b8152600401610298949392919061137b565b600060405180830381600087803b1580156102b257600080fd5b505af11580156102c6573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d91443b7878585856040518563ffffffff1660e01b815260040161032994939291906113bb565b600060405180830381600087803b15801561034357600080fd5b505af1158015610357573d6000803e3d6000fd5b5050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4888888886040518563ffffffff1660e01b81526004016103e7949392919061137b565b600060405180830381600087803b15801561040157600080fd5b505af1158015610415573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ebef0fd0878585856040518563ffffffff1660e01b815260040161047894939291906113fb565b600060405180830381600087803b15801561049257600080fd5b505af11580156104a6573d6000803e3d6000fd5b5050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4878787876040518563ffffffff1660e01b8152600401610512949392919061137b565b600060405180830381600087803b15801561052c57600080fd5b505af1158015610540573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663019b417a8684846040518463ffffffff1660e01b81526004016105a193929190611440565b600060405180830381600087803b1580156105bb57600080fd5b505af11580156105cf573d6000803e3d6000fd5b50505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4888888886040518563ffffffff1660e01b815260040161063a949392919061137b565b600060405180830381600087803b15801561065457600080fd5b505af1158015610668573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ae1cdde6878585856040518563ffffffff1660e01b81526004016106cb9493929190611477565b600060405180830381600087803b1580156106e557600080fd5b505af11580156106f9573d6000803e3d6000fd5b5050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4878787876040518563ffffffff1660e01b8152600401610765949392919061137b565b600060405180830381600087803b15801561077f57600080fd5b505af1158015610793573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314cd70e48684846040518463ffffffff1660e01b81526004016107f4939291906114bc565b600060405180830381600087803b15801561080e57600080fd5b505af1158015610822573d6000803e3d6000fd5b50505050505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631dbd1da7846040518263ffffffff1660e01b81526004016108a091906114f3565b602060405180830381865afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e19190611523565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4878787876040518563ffffffff1660e01b815260040161095f949392919061137b565b600060405180830381600087803b15801561097957600080fd5b505af115801561098d573d6000803e3d6000fd5b5050505060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16348785856040516024016109e193929190611440565b6040516020818303038152906040527eaeef8a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610a6a91906115c1565b60006040518083038185875af1925050503d8060008114610aa7576040519150601f19603f3d011682016040523d82523d6000602084013e610aac565b606091505b5050905080610af0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae790611635565b60405180910390fd5b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4868686866040518563ffffffff1660e01b8152600401610b58949392919061137b565b600060405180830381600087803b158015610b7257600080fd5b505af1158015610b86573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663441a3e7085836040518363ffffffff1660e01b8152600401610be5929190611655565b600060405180830381600087803b158015610bff57600080fd5b505af1158015610c13573d6000803e3d6000fd5b505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd2414d4888888886040518563ffffffff1660e01b8152600401610c7d949392919061137b565b600060405180830381600087803b158015610c9757600080fd5b505af1158015610cab573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632505c3d9878585856040518563ffffffff1660e01b8152600401610d0e9493929190611477565b600060405180830381600087803b158015610d2857600080fd5b505af1158015610d3c573d6000803e3d6000fd5b5050505050505050505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d7e82610d53565b9050919050565b610d8e81610d73565b8114610d9957600080fd5b50565b600081359050610dab81610d85565b92915050565b6000819050919050565b610dc481610db1565b8114610dcf57600080fd5b50565b600081359050610de181610dbb565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610e0c57610e0b610de7565b5b8235905067ffffffffffffffff811115610e2957610e28610dec565b5b602083019150836001820283011115610e4557610e44610df1565b5b9250929050565b600080600080600080600060a0888a031215610e6b57610e6a610d49565b5b6000610e798a828b01610d9c565b9750506020610e8a8a828b01610dd2565b965050604088013567ffffffffffffffff811115610eab57610eaa610d4e565b5b610eb78a828b01610df6565b95509550506060610eca8a828b01610dd2565b935050608088013567ffffffffffffffff811115610eeb57610eea610d4e565b5b610ef78a828b01610df6565b925092505092959891949750929550565b6000819050919050565b6000610f2d610f28610f2384610d53565b610f08565b610d53565b9050919050565b6000610f3f82610f12565b9050919050565b6000610f5182610f34565b9050919050565b610f6181610f46565b82525050565b6000602082019050610f7c6000830184610f58565b92915050565b600080600080600080600060c0888a031215610fa157610fa0610d49565b5b6000610faf8a828b01610d9c565b9750506020610fc08a828b01610dd2565b965050604088013567ffffffffffffffff811115610fe157610fe0610d4e565b5b610fed8a828b01610df6565b955095505060606110008a828b01610dd2565b93505060806110118a828b01610dd2565b92505060a06110228a828b01610d9c565b91505092959891949750929550565b60008060008060008060a0878903121561104e5761104d610d49565b5b600061105c89828a01610d9c565b965050602061106d89828a01610dd2565b955050604087013567ffffffffffffffff81111561108e5761108d610d4e565b5b61109a89828a01610df6565b945094505060606110ad89828a01610dd2565b92505060806110be89828a01610dd2565b9150509295509295509295565b600080600080600080600060c0888a0312156110ea576110e9610d49565b5b60006110f88a828b01610d9c565b97505060206111098a828b01610dd2565b965050604088013567ffffffffffffffff81111561112a57611129610d4e565b5b6111368a828b01610df6565b955095505060606111498a828b01610dd2565b935050608061115a8a828b01610dd2565b92505060a061116b8a828b01610dd2565b91505092959891949750929550565b60008060008060008060a0878903121561119757611196610d49565b5b60006111a589828a01610d9c565b96505060206111b689828a01610dd2565b955050604087013567ffffffffffffffff8111156111d7576111d6610d4e565b5b6111e389828a01610df6565b945094505060606111f689828a01610dd2565b925050608061120789828a01610d9c565b9150509295509295509295565b60006020828403121561122a57611229610d49565b5b600061123884828501610dd2565b91505092915050565b60008115159050919050565b61125681611241565b82525050565b6000602082019050611271600083018461124d565b92915050565b60008060008060006080868803121561129357611292610d49565b5b60006112a188828901610d9c565b95505060206112b288828901610dd2565b945050604086013567ffffffffffffffff8111156112d3576112d2610d4e565b5b6112df88828901610df6565b935093505060606112f288828901610dd2565b9150509295509295909350565b61130881610d73565b82525050565b61131781610db1565b82525050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b600061135a838561131d565b935061136783858461132e565b6113708361133d565b840190509392505050565b600060608201905061139060008301876112ff565b61139d602083018661130e565b81810360408301526113b081848661134e565b905095945050505050565b60006060820190506113d0600083018761130e565b6113dd602083018661130e565b81810360408301526113f081848661134e565b905095945050505050565b6000608082019050611410600083018761130e565b61141d602083018661130e565b61142a604083018561130e565b61143760608301846112ff565b95945050505050565b6000606082019050611455600083018661130e565b611462602083018561130e565b61146f604083018461130e565b949350505050565b600060808201905061148c600083018761130e565b611499602083018661130e565b6114a6604083018561130e565b6114b3606083018461130e565b95945050505050565b60006060820190506114d1600083018661130e565b6114de602083018561130e565b6114eb60408301846112ff565b949350505050565b6000602082019050611508600083018461130e565b92915050565b60008151905061151d81610d85565b92915050565b60006020828403121561153957611538610d49565b5b60006115478482850161150e565b91505092915050565b600081519050919050565b600081905092915050565b60005b83811015611584578082015181840152602081019050611569565b60008484015250505050565b600061159b82611550565b6115a5818561155b565b93506115b5818560208601611566565b80840191505092915050565b60006115cd8284611590565b915081905092915050565b600082825260208201905092915050565b7f4465706f736974204661696c6564000000000000000000000000000000000000600082015250565b600061161f600e836115d8565b915061162a826115e9565b602082019050919050565b6000602082019050818103600083015261164e81611612565b9050919050565b600060408201905061166a600083018561130e565b611677602083018461130e565b939250505056fea26469706673582212201a23619ae814ffd088a9b13c18373676bd1fe6b29a0bba31a48ddc42af45bff564736f6c63430008110033";

type RegistrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RegistrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Registration__factory extends ContractFactory {
  constructor(...args: RegistrationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _imx: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Registration> {
    return super.deploy(_imx, overrides || {}) as Promise<Registration>;
  }
  override getDeployTransaction(
    _imx: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_imx, overrides || {});
  }
  override attach(address: string): Registration {
    return super.attach(address) as Registration;
  }
  override connect(signer: Signer): Registration__factory {
    return super.connect(signer) as Registration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegistrationInterface {
    return new utils.Interface(_abi) as RegistrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registration {
    return new Contract(address, _abi, signerOrProvider) as Registration;
  }
}
