/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FamiliarLogic,
  FamiliarLogicInterface,
} from "../../../contracts/G_Upgradable_NFT/FamiliarLogic";

const _abi = [
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenBlueprint",
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
        internalType: "bytes[]",
        name: "_data",
        type: "bytes[]",
      },
    ],
    name: "init",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
        name: "_tokenId",
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
  "0x608060405234801561001057600080fd5b50612d78806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636352211e11610097578063b88d4fde11610066578063b88d4fde146102be578063c87b56dd146102da578063e985e9c51461030a578063f703af791461033a57610100565b80636352211e1461022457806370a082311461025457806395d89b4114610284578063a22cb465146102a257610100565b806323b872dd116100d357806323b872dd1461019f5780632a55205a146101bb57806342842e0e146101ec578063459fb2ad1461020857610100565b806301ffc9a71461010557806306fdde0314610135578063081812fc14610153578063095ea7b314610183575b600080fd5b61011f600480360381019061011a91906119ea565b61036a565b60405161012c9190611a32565b60405180910390f35b61013d61044c565b60405161014a9190611add565b60405180910390f35b61016d60048036038101906101689190611b35565b6104de565b60405161017a9190611ba3565b60405180910390f35b61019d60048036038101906101989190611bea565b610524565b005b6101b960048036038101906101b49190611c2a565b61062d565b005b6101d560048036038101906101d09190611c7d565b610686565b6040516101e3929190611ccc565b60405180910390f35b61020660048036038101906102019190611c2a565b610870565b005b610222600480360381019061021d9190611d5a565b610890565b005b61023e60048036038101906102399190611b35565b610985565b60405161024b9190611ba3565b60405180910390f35b61026e60048036038101906102699190611da7565b610a36565b60405161027b9190611dd4565b60405180910390f35b61028c610aed565b6040516102999190611add565b60405180910390f35b6102bc60048036038101906102b79190611e1b565b610b7f565b005b6102d860048036038101906102d39190611f8b565b610b8e565b005b6102f460048036038101906102ef9190611b35565b610be9565b6040516103019190611add565b60405180910390f35b610324600480360381019061031f919061200e565b610d3f565b6040516103319190611a32565b60405180910390f35b610354600480360381019061034f9190611b35565b610dd3565b6040516103619190611add565b60405180910390f35b60007f459fb2ad000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043557507f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610445575061044482610ec0565b5b9050919050565b60606002805461045b9061207d565b80601f01602080910402602001604051908101604052809291908181526020018280546104879061207d565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b5050505050905090565b60006104e982610fa2565b6007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061052f82610985565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361059f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059690612120565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105df57506105de8133610d3f565b5b61061e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610615906121b2565b60405180910390fd5b6106288383610fed565b505050565b61063733826110a6565b610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d90612244565b60405180910390fd5b61068183838361113b565b505050565b6000806000600a60008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff160361081b5760096040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff168152505090505b60006108256113a1565b6bffffffffffffffffffffffff1682602001516bffffffffffffffffffffffff16866108519190612293565b61085b9190612304565b90508160000151819350935050509250929050565b61088b83838360405180602001604052806000815250610b8e565b505050565b600b60149054906101000a900460ff166108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d6906123a7565b60405180910390fd5b818160018181106108f3576108f26123c7565b5b90506020028101906109059190612405565b6002918261091492919061261f565b5081816002818110610929576109286123c7565b5b905060200281019061093b9190612405565b6003918261094a92919061261f565b508181600381811061095f5761095e6123c7565b5b90506020028101906109719190612405565b6004918261098092919061261f565b505050565b6000806005600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a249061273b565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9d906127cd565b60405180910390fd5b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060038054610afc9061207d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b289061207d565b8015610b755780601f10610b4a57610100808354040283529160200191610b75565b820191906000526020600020905b815481529060010190602001808311610b5857829003601f168201915b5050505050905090565b610b8a3383836113ab565b5050565b610b9833836110a6565b610bd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bce90612244565b60405180910390fd5b610be384848484611517565b50505050565b6060610bf482611573565b610c33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2a9061285f565b60405180910390fd5b6000610ce760006004600160008781526020019081526020016000208054610c5a9061207d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c869061207d565b8015610cd35780601f10610ca857610100808354040283529160200191610cd3565b820191906000526020600020905b815481529060010190602001808311610cb657829003601f168201915b50505050506115df9092919063ffffffff16565b90506000610cf36116d5565b90506000815111610d135760405180602001604052806000815250610d36565b8082604051602001610d26929190612953565b6040516020818303038152906040525b92505050919050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6060610dde82611573565b610e1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e149061285f565b60405180910390fd5b600160008381526020019081526020016000208054610e3b9061207d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e679061207d565b8015610eb45780601f10610e8957610100808354040283529160200191610eb4565b820191906000526020600020905b815481529060010190602001808311610e9757829003601f168201915b50505050509050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f8b57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610f9b5750610f9a82611767565b5b9050919050565b610fab81611573565b610fea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe19061273b565b60405180910390fd5b50565b816007600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661106083610985565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806110b283610985565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110f457506110f38185610d3f565b5b8061113257508373ffffffffffffffffffffffffffffffffffffffff1661111a846104de565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661115b82610985565b73ffffffffffffffffffffffffffffffffffffffff16146111b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a8906129ff565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121790612a91565b60405180910390fd5b61122b8383836117d1565b611236600082610fed565b6001600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112869190612ab1565b925050819055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112dd9190612ae5565b92505081905550816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461139c8383836117d6565b505050565b6000612710905090565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611419576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141090612b65565b60405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161150a9190611a32565b60405180910390a3505050565b61152284848461113b565b61152e848484846117db565b61156d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156490612bf7565b60405180910390fd5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6060600083836115ef9190612ab1565b67ffffffffffffffff81111561160857611607611e60565b5b6040519080825280601f01601f19166020018201604052801561163a5781602001600182028036833780820191505090505b50905060008490505b838110156116c95785818151811061165e5761165d6123c7565b5b602001015160f81c60f81b8286836116769190612ab1565b81518110611687576116866123c7565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806116c190612c17565b915050611643565b50809150509392505050565b6060600480546116e49061207d565b80601f01602080910402602001604051908101604052809291908181526020018280546117109061207d565b801561175d5780601f106117325761010080835404028352916020019161175d565b820191906000526020600020905b81548152906001019060200180831161174057829003601f168201915b5050505050905090565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b505050565b505050565b60006117fc8473ffffffffffffffffffffffffffffffffffffffff1661195b565b1561194e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02338786866040518563ffffffff1660e01b81526004016118409493929190612cb4565b6020604051808303816000875af192505050801561187c57506040513d601f19601f820116820180604052508101906118799190612d15565b60015b6118fe573d80600081146118ac576040519150601f19603f3d011682016040523d82523d6000602084013e6118b1565b606091505b5060008151036118f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ed90612bf7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611953565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6119c781611992565b81146119d257600080fd5b50565b6000813590506119e4816119be565b92915050565b600060208284031215611a00576119ff611988565b5b6000611a0e848285016119d5565b91505092915050565b60008115159050919050565b611a2c81611a17565b82525050565b6000602082019050611a476000830184611a23565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a87578082015181840152602081019050611a6c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611aaf82611a4d565b611ab98185611a58565b9350611ac9818560208601611a69565b611ad281611a93565b840191505092915050565b60006020820190508181036000830152611af78184611aa4565b905092915050565b6000819050919050565b611b1281611aff565b8114611b1d57600080fd5b50565b600081359050611b2f81611b09565b92915050565b600060208284031215611b4b57611b4a611988565b5b6000611b5984828501611b20565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b8d82611b62565b9050919050565b611b9d81611b82565b82525050565b6000602082019050611bb86000830184611b94565b92915050565b611bc781611b82565b8114611bd257600080fd5b50565b600081359050611be481611bbe565b92915050565b60008060408385031215611c0157611c00611988565b5b6000611c0f85828601611bd5565b9250506020611c2085828601611b20565b9150509250929050565b600080600060608486031215611c4357611c42611988565b5b6000611c5186828701611bd5565b9350506020611c6286828701611bd5565b9250506040611c7386828701611b20565b9150509250925092565b60008060408385031215611c9457611c93611988565b5b6000611ca285828601611b20565b9250506020611cb385828601611b20565b9150509250929050565b611cc681611aff565b82525050565b6000604082019050611ce16000830185611b94565b611cee6020830184611cbd565b9392505050565b600080fd5b600080fd5b600080fd5b60008083601f840112611d1a57611d19611cf5565b5b8235905067ffffffffffffffff811115611d3757611d36611cfa565b5b602083019150836020820283011115611d5357611d52611cff565b5b9250929050565b60008060208385031215611d7157611d70611988565b5b600083013567ffffffffffffffff811115611d8f57611d8e61198d565b5b611d9b85828601611d04565b92509250509250929050565b600060208284031215611dbd57611dbc611988565b5b6000611dcb84828501611bd5565b91505092915050565b6000602082019050611de96000830184611cbd565b92915050565b611df881611a17565b8114611e0357600080fd5b50565b600081359050611e1581611def565b92915050565b60008060408385031215611e3257611e31611988565b5b6000611e4085828601611bd5565b9250506020611e5185828601611e06565b9150509250929050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e9882611a93565b810181811067ffffffffffffffff82111715611eb757611eb6611e60565b5b80604052505050565b6000611eca61197e565b9050611ed68282611e8f565b919050565b600067ffffffffffffffff821115611ef657611ef5611e60565b5b611eff82611a93565b9050602081019050919050565b82818337600083830152505050565b6000611f2e611f2984611edb565b611ec0565b905082815260208101848484011115611f4a57611f49611e5b565b5b611f55848285611f0c565b509392505050565b600082601f830112611f7257611f71611cf5565b5b8135611f82848260208601611f1b565b91505092915050565b60008060008060808587031215611fa557611fa4611988565b5b6000611fb387828801611bd5565b9450506020611fc487828801611bd5565b9350506040611fd587828801611b20565b925050606085013567ffffffffffffffff811115611ff657611ff561198d565b5b61200287828801611f5d565b91505092959194509250565b6000806040838503121561202557612024611988565b5b600061203385828601611bd5565b925050602061204485828601611bd5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061209557607f821691505b6020821081036120a8576120a761204e565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061210a602183611a58565b9150612115826120ae565b604082019050919050565b60006020820190508181036000830152612139816120fd565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b600061219c603e83611a58565b91506121a782612140565b604082019050919050565b600060208201905081810360008301526121cb8161218f565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b600061222e602e83611a58565b9150612239826121d2565b604082019050919050565b6000602082019050818103600083015261225d81612221565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061229e82611aff565b91506122a983611aff565b92508282026122b781611aff565b915082820484148315176122ce576122cd612264565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061230f82611aff565b915061231a83611aff565b92508261232a576123296122d5565b5b828204905092915050565b7f46616d696c6961724c6f6769633a20556e617574686f72697a656420696e697460008201527f69616c697a6174696f6e00000000000000000000000000000000000000000000602082015250565b6000612391602a83611a58565b915061239c82612335565b604082019050919050565b600060208201905081810360008301526123c081612384565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112612422576124216123f6565b5b80840192508235915067ffffffffffffffff821115612444576124436123fb565b5b6020830192506001820236038313156124605761245f612400565b5b509250929050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026124d57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612498565b6124df8683612498565b95508019841693508086168417925050509392505050565b6000819050919050565b600061251c61251761251284611aff565b6124f7565b611aff565b9050919050565b6000819050919050565b61253683612501565b61254a61254282612523565b8484546124a5565b825550505050565b600090565b61255f612552565b61256a81848461252d565b505050565b5b8181101561258e57612583600082612557565b600181019050612570565b5050565b601f8211156125d3576125a481612473565b6125ad84612488565b810160208510156125bc578190505b6125d06125c885612488565b83018261256f565b50505b505050565b600082821c905092915050565b60006125f6600019846008026125d8565b1980831691505092915050565b600061260f83836125e5565b9150826002028217905092915050565b6126298383612468565b67ffffffffffffffff81111561264257612641611e60565b5b61264c825461207d565b612657828285612592565b6000601f8311600181146126865760008415612674578287013590505b61267e8582612603565b8655506126e6565b601f19841661269486612473565b60005b828110156126bc57848901358255600182019150602085019450602081019050612697565b868310156126d957848901356126d5601f8916826125e5565b8355505b6001600288020188555050505b50505050505050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612725601883611a58565b9150612730826126ef565b602082019050919050565b6000602082019050818103600083015261275481612718565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006127b7602983611a58565b91506127c28261275b565b604082019050919050565b600060208201905081810360008301526127e6816127aa565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612849602f83611a58565b9150612854826127ed565b604082019050919050565b600060208201905081810360008301526128788161283c565b9050919050565b600081905092915050565b600061289582611a4d565b61289f818561287f565b93506128af818560208601611a69565b80840191505092915050565b7f2f496d616765732f000000000000000000000000000000000000000000000000600082015250565b60006128f160088361287f565b91506128fc826128bb565b600882019050919050565b7f2e706e6700000000000000000000000000000000000000000000000000000000600082015250565b600061293d60048361287f565b915061294882612907565b600482019050919050565b600061295f828561288a565b915061296a826128e4565b9150612976828461288a565b915061298182612930565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006129e9602583611a58565b91506129f48261298d565b604082019050919050565b60006020820190508181036000830152612a18816129dc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612a7b602483611a58565b9150612a8682612a1f565b604082019050919050565b60006020820190508181036000830152612aaa81612a6e565b9050919050565b6000612abc82611aff565b9150612ac783611aff565b9250828203905081811115612adf57612ade612264565b5b92915050565b6000612af082611aff565b9150612afb83611aff565b9250828201905080821115612b1357612b12612264565b5b92915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612b4f601983611a58565b9150612b5a82612b19565b602082019050919050565b60006020820190508181036000830152612b7e81612b42565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612be1603283611a58565b9150612bec82612b85565b604082019050919050565b60006020820190508181036000830152612c1081612bd4565b9050919050565b6000612c2282611aff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c5457612c53612264565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000612c8682612c5f565b612c908185612c6a565b9350612ca0818560208601611a69565b612ca981611a93565b840191505092915050565b6000608082019050612cc96000830187611b94565b612cd66020830186611b94565b612ce36040830185611cbd565b8181036060830152612cf58184612c7b565b905095945050505050565b600081519050612d0f816119be565b92915050565b600060208284031215612d2b57612d2a611988565b5b6000612d3984828501612d00565b9150509291505056fea2646970667358221220da4d438d6fed130a97aa54e03775b4a648a05be100052f3481d575dd9cf3a66364736f6c63430008110033";

type FamiliarLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FamiliarLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FamiliarLogic__factory extends ContractFactory {
  constructor(...args: FamiliarLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FamiliarLogic> {
    return super.deploy(overrides || {}) as Promise<FamiliarLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FamiliarLogic {
    return super.attach(address) as FamiliarLogic;
  }
  override connect(signer: Signer): FamiliarLogic__factory {
    return super.connect(signer) as FamiliarLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FamiliarLogicInterface {
    return new utils.Interface(_abi) as FamiliarLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FamiliarLogic {
    return new Contract(address, _abi, signerOrProvider) as FamiliarLogic;
  }
}
