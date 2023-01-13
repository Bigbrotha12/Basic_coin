/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  VRFConsumerBase,
  VRFConsumerBaseInterface,
} from "../../../../contracts/D_Oracle_Contract/TestCoordinator.sol/VRFConsumerBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class VRFConsumerBase__factory {
  static readonly abi = _abi;
  static createInterface(): VRFConsumerBaseInterface {
    return new utils.Interface(_abi) as VRFConsumerBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFConsumerBase {
    return new Contract(address, _abi, signerOrProvider) as VRFConsumerBase;
  }
}
