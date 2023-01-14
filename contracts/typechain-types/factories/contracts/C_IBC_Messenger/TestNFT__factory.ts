/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestNFT,
  TestNFTInterface,
} from "../../../contracts/C_IBC_Messenger/TestNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "IBC_ENDPOINT",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "_ibc",
        type: "address",
      },
    ],
    name: "initEndpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f9938038062002f998339818101604052810190620000379190620001fa565b818181600090816200004a9190620004ca565b5080600190816200005c9190620004ca565b5050505050620005b1565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d08262000085565b810181811067ffffffffffffffff82111715620000f257620000f162000096565b5b80604052505050565b60006200010762000067565b9050620001158282620000c5565b919050565b600067ffffffffffffffff82111562000138576200013762000096565b5b620001438262000085565b9050602081019050919050565b60005b838110156200017057808201518184015260208101905062000153565b60008484015250505050565b6000620001936200018d846200011a565b620000fb565b905082815260208101848484011115620001b257620001b162000080565b5b620001bf84828562000150565b509392505050565b600082601f830112620001df57620001de6200007b565b5b8151620001f18482602086016200017c565b91505092915050565b6000806040838503121562000214576200021362000071565b5b600083015167ffffffffffffffff81111562000235576200023462000076565b5b6200024385828601620001c7565b925050602083015167ffffffffffffffff81111562000267576200026662000076565b5b6200027585828601620001c7565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d257607f821691505b602082108103620002e857620002e76200028a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000313565b6200035e868362000313565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003ab620003a56200039f8462000376565b62000380565b62000376565b9050919050565b6000819050919050565b620003c7836200038a565b620003df620003d682620003b2565b84845462000320565b825550505050565b600090565b620003f6620003e7565b62000403818484620003bc565b505050565b5b818110156200042b576200041f600082620003ec565b60018101905062000409565b5050565b601f8211156200047a576200044481620002ee565b6200044f8462000303565b810160208510156200045f578190505b620004776200046e8562000303565b83018262000408565b50505b505050565b600082821c905092915050565b60006200049f600019846008026200047f565b1980831691505092915050565b6000620004ba83836200048c565b9150826002028217905092915050565b620004d5826200027f565b67ffffffffffffffff811115620004f157620004f062000096565b5b620004fd8254620002b9565b6200050a8282856200042f565b600060209050601f8311600181146200054257600084156200052d578287015190505b620005398582620004ac565b865550620005a9565b601f1984166200055286620002ee565b60005b828110156200057c5784890151825560018201915060208501945060208101905062000555565b868310156200059c578489015162000598601f8916826200048c565b8355505b6001600288020188555050505b505050505050565b6129d880620005c16000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806342842e0e116100a257806395d89b411161007157806395d89b41146102b4578063a22cb465146102d2578063b88d4fde146102ee578063c87b56dd1461030a578063e985e9c51461033a5761010b565b806342842e0e1461021c57806342966c68146102385780636352211e1461025457806370a08231146102845761010b565b8063095ea7b3116100de578063095ea7b3146101ac57806323b872dd146101c8578063258e99ab146101e457806340c10f19146102005761010b565b806301ffc9a71461011057806303b974aa1461014057806306fdde031461015e578063081812fc1461017c575b600080fd5b61012a60048036038101906101259190611bd1565b61036a565b6040516101379190611c19565b60405180910390f35b61014861044c565b6040516101559190611c75565b60405180910390f35b610166610472565b6040516101739190611d20565b60405180910390f35b61019660048036038101906101919190611d78565b610504565b6040516101a39190611c75565b60405180910390f35b6101c660048036038101906101c19190611dd1565b61054a565b005b6101e260048036038101906101dd9190611e11565b610661565b005b6101fe60048036038101906101f99190611e64565b6106c1565b005b61021a60048036038101906102159190611dd1565b610705565b005b61023660048036038101906102319190611e11565b6107a3565b005b610252600480360381019061024d9190611d78565b6107c3565b005b61026e60048036038101906102699190611d78565b61085f565b60405161027b9190611c75565b60405180910390f35b61029e60048036038101906102999190611e64565b6108e5565b6040516102ab9190611ea0565b60405180910390f35b6102bc61099c565b6040516102c99190611d20565b60405180910390f35b6102ec60048036038101906102e79190611ee7565b610a2e565b005b6103086004803603810190610303919061205c565b610a44565b005b610324600480360381019061031f9190611d78565b610aa6565b6040516103319190611d20565b60405180910390f35b610354600480360381019061034f91906120df565b610b0e565b6040516103619190611c19565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610445575061044482610ba2565b5b9050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080546104819061214e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ad9061214e565b80156104fa5780601f106104cf576101008083540402835291602001916104fa565b820191906000526020600020905b8154815290600101906020018083116104dd57829003601f168201915b5050505050905090565b600061050f82610c0c565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105558261085f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bc906121f1565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105e4610c57565b73ffffffffffffffffffffffffffffffffffffffff16148061061357506106128161060d610c57565b610b0e565b5b610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990612283565b60405180910390fd5b61065c8383610c5f565b505050565b61067261066c610c57565b82610d18565b6106b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a890612315565b60405180910390fd5b6106bc838383610dad565b505050565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90612381565b60405180910390fd5b61079f82826110a6565b5050565b6107be83838360405180602001604052806000815250610a44565b505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084a90612381565b60405180910390fd5b61085c816112c3565b50565b60008061086b83611411565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d3906123ed565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094c9061247f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546109ab9061214e565b80601f01602080910402602001604051908101604052809291908181526020018280546109d79061214e565b8015610a245780601f106109f957610100808354040283529160200191610a24565b820191906000526020600020905b815481529060010190602001808311610a0757829003601f168201915b5050505050905090565b610a40610a39610c57565b838361144e565b5050565b610a55610a4f610c57565b83610d18565b610a94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8b90612315565b60405180910390fd5b610aa0848484846115ba565b50505050565b6060610ab182610c0c565b6000610abb611616565b90506000815111610adb5760405180602001604052806000815250610b06565b80610ae58461162d565b604051602001610af69291906124db565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610c15816116fb565b610c54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4b906123ed565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cd28361085f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d248361085f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d665750610d658185610b0e565b5b80610da457508373ffffffffffffffffffffffffffffffffffffffff16610d8c84610504565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dcd8261085f565b73ffffffffffffffffffffffffffffffffffffffff1614610e23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1a90612571565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8990612603565b60405180910390fd5b610e9f838383600161173c565b8273ffffffffffffffffffffffffffffffffffffffff16610ebf8261085f565b73ffffffffffffffffffffffffffffffffffffffff1614610f15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0c90612571565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110a18383836001611862565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611115576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110c9061266f565b60405180910390fd5b61111e816116fb565b1561115e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611155906126db565b60405180910390fd5b61116c60008383600161173c565b611175816116fb565b156111b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ac906126db565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112bf600083836001611862565b5050565b60006112ce8261085f565b90506112de81600084600161173c565b6112e78261085f565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461140d816000846001611862565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b390612747565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115ad9190611c19565b60405180910390a3505050565b6115c5848484610dad565b6115d184848484611868565b611610576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611607906127d9565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161163c846119ef565b01905060008167ffffffffffffffff81111561165b5761165a611f31565b5b6040519080825280601f01601f19166020018201604052801561168d5781602001600182028036833780820191505090505b509050600082602001820190505b6001156116f0578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816116e4576116e36127f9565b5b0494506000850361169b575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661171d83611411565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561185c57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146117d05780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117c89190612857565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461185b5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611853919061288b565b925050819055505b5b50505050565b50505050565b60006118898473ffffffffffffffffffffffffffffffffffffffff16611b42565b156119e2578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118b2610c57565b8786866040518563ffffffff1660e01b81526004016118d49493929190612914565b6020604051808303816000875af192505050801561191057506040513d601f19601f8201168201806040525081019061190d9190612975565b60015b611992573d8060008114611940576040519150601f19603f3d011682016040523d82523d6000602084013e611945565b606091505b50600081510361198a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611981906127d9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119e7565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a4d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a4357611a426127f9565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611a8a576d04ee2d6d415b85acef81000000008381611a8057611a7f6127f9565b5b0492506020810190505b662386f26fc100008310611ab957662386f26fc100008381611aaf57611aae6127f9565b5b0492506010810190505b6305f5e1008310611ae2576305f5e1008381611ad857611ad76127f9565b5b0492506008810190505b6127108310611b07576127108381611afd57611afc6127f9565b5b0492506004810190505b60648310611b2a5760648381611b2057611b1f6127f9565b5b0492506002810190505b600a8310611b39576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611bae81611b79565b8114611bb957600080fd5b50565b600081359050611bcb81611ba5565b92915050565b600060208284031215611be757611be6611b6f565b5b6000611bf584828501611bbc565b91505092915050565b60008115159050919050565b611c1381611bfe565b82525050565b6000602082019050611c2e6000830184611c0a565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c5f82611c34565b9050919050565b611c6f81611c54565b82525050565b6000602082019050611c8a6000830184611c66565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cca578082015181840152602081019050611caf565b60008484015250505050565b6000601f19601f8301169050919050565b6000611cf282611c90565b611cfc8185611c9b565b9350611d0c818560208601611cac565b611d1581611cd6565b840191505092915050565b60006020820190508181036000830152611d3a8184611ce7565b905092915050565b6000819050919050565b611d5581611d42565b8114611d6057600080fd5b50565b600081359050611d7281611d4c565b92915050565b600060208284031215611d8e57611d8d611b6f565b5b6000611d9c84828501611d63565b91505092915050565b611dae81611c54565b8114611db957600080fd5b50565b600081359050611dcb81611da5565b92915050565b60008060408385031215611de857611de7611b6f565b5b6000611df685828601611dbc565b9250506020611e0785828601611d63565b9150509250929050565b600080600060608486031215611e2a57611e29611b6f565b5b6000611e3886828701611dbc565b9350506020611e4986828701611dbc565b9250506040611e5a86828701611d63565b9150509250925092565b600060208284031215611e7a57611e79611b6f565b5b6000611e8884828501611dbc565b91505092915050565b611e9a81611d42565b82525050565b6000602082019050611eb56000830184611e91565b92915050565b611ec481611bfe565b8114611ecf57600080fd5b50565b600081359050611ee181611ebb565b92915050565b60008060408385031215611efe57611efd611b6f565b5b6000611f0c85828601611dbc565b9250506020611f1d85828601611ed2565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f6982611cd6565b810181811067ffffffffffffffff82111715611f8857611f87611f31565b5b80604052505050565b6000611f9b611b65565b9050611fa78282611f60565b919050565b600067ffffffffffffffff821115611fc757611fc6611f31565b5b611fd082611cd6565b9050602081019050919050565b82818337600083830152505050565b6000611fff611ffa84611fac565b611f91565b90508281526020810184848401111561201b5761201a611f2c565b5b612026848285611fdd565b509392505050565b600082601f83011261204357612042611f27565b5b8135612053848260208601611fec565b91505092915050565b6000806000806080858703121561207657612075611b6f565b5b600061208487828801611dbc565b945050602061209587828801611dbc565b93505060406120a687828801611d63565b925050606085013567ffffffffffffffff8111156120c7576120c6611b74565b5b6120d38782880161202e565b91505092959194509250565b600080604083850312156120f6576120f5611b6f565b5b600061210485828601611dbc565b925050602061211585828601611dbc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061216657607f821691505b6020821081036121795761217861211f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006121db602183611c9b565b91506121e68261217f565b604082019050919050565b6000602082019050818103600083015261220a816121ce565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061226d603d83611c9b565b915061227882612211565b604082019050919050565b6000602082019050818103600083015261229c81612260565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006122ff602d83611c9b565b915061230a826122a3565b604082019050919050565b6000602082019050818103600083015261232e816122f2565b9050919050565b7f546573744e46543a20556e617574686f72697a65640000000000000000000000600082015250565b600061236b601583611c9b565b915061237682612335565b602082019050919050565b6000602082019050818103600083015261239a8161235e565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006123d7601883611c9b565b91506123e2826123a1565b602082019050919050565b60006020820190508181036000830152612406816123ca565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612469602983611c9b565b91506124748261240d565b604082019050919050565b600060208201905081810360008301526124988161245c565b9050919050565b600081905092915050565b60006124b582611c90565b6124bf818561249f565b93506124cf818560208601611cac565b80840191505092915050565b60006124e782856124aa565b91506124f382846124aa565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061255b602583611c9b565b9150612566826124ff565b604082019050919050565b6000602082019050818103600083015261258a8161254e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125ed602483611c9b565b91506125f882612591565b604082019050919050565b6000602082019050818103600083015261261c816125e0565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612659602083611c9b565b915061266482612623565b602082019050919050565b600060208201905081810360008301526126888161264c565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006126c5601c83611c9b565b91506126d08261268f565b602082019050919050565b600060208201905081810360008301526126f4816126b8565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612731601983611c9b565b915061273c826126fb565b602082019050919050565b6000602082019050818103600083015261276081612724565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006127c3603283611c9b565b91506127ce82612767565b604082019050919050565b600060208201905081810360008301526127f2816127b6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061286282611d42565b915061286d83611d42565b925082820390508181111561288557612884612828565b5b92915050565b600061289682611d42565b91506128a183611d42565b92508282019050808211156128b9576128b8612828565b5b92915050565b600081519050919050565b600082825260208201905092915050565b60006128e6826128bf565b6128f081856128ca565b9350612900818560208601611cac565b61290981611cd6565b840191505092915050565b60006080820190506129296000830187611c66565b6129366020830186611c66565b6129436040830185611e91565b818103606083015261295581846128db565b905095945050505050565b60008151905061296f81611ba5565b92915050565b60006020828403121561298b5761298a611b6f565b5b600061299984828501612960565b9150509291505056fea26469706673582212207d9cd83b653ed71d71da3d8b8f9dced4dd4154dd2b1ef64d80e76c2a70f1b6db64736f6c63430008110033";

type TestNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestNFT__factory extends ContractFactory {
  constructor(...args: TestNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestNFT> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestNFT>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestNFT {
    return super.attach(address) as TestNFT;
  }
  override connect(signer: Signer): TestNFT__factory {
    return super.connect(signer) as TestNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestNFTInterface {
    return new utils.Interface(_abi) as TestNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestNFT {
    return new Contract(address, _abi, signerOrProvider) as TestNFT;
  }
}