/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface TestCoordinatorInterface extends utils.Interface {
  functions: {
    "answerTestQuery(uint256,uint256,address)": FunctionFragment;
    "requestRandomWords(bytes32,uint64,uint16,uint32,uint32)": FunctionFragment;
    "result(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "answerTestQuery" | "requestRandomWords" | "result"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "answerTestQuery",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "result",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "answerTestQuery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "result", data: BytesLike): Result;

  events: {};
}

export interface TestCoordinator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestCoordinatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    answerTestQuery(
      _queryId: PromiseOrValue<BigNumberish>,
      _desiredResult: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { requestId: BigNumber }>;

    result(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  answerTestQuery(
    _queryId: PromiseOrValue<BigNumberish>,
    _desiredResult: PromiseOrValue<BigNumberish>,
    _target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    keyHash: PromiseOrValue<BytesLike>,
    subId: PromiseOrValue<BigNumberish>,
    minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
    callbackGasLimit: PromiseOrValue<BigNumberish>,
    numWords: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  result(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    answerTestQuery(
      _queryId: PromiseOrValue<BigNumberish>,
      _desiredResult: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    result(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    answerTestQuery(
      _queryId: PromiseOrValue<BigNumberish>,
      _desiredResult: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    result(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    answerTestQuery(
      _queryId: PromiseOrValue<BigNumberish>,
      _desiredResult: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    result(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}