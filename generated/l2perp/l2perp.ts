// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FinalizedImplementation extends ethereum.Event {
  get params(): FinalizedImplementation__Params {
    return new FinalizedImplementation__Params(this);
  }
}

export class FinalizedImplementation__Params {
  _event: FinalizedImplementation;

  constructor(event: FinalizedImplementation) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ImplementationAdded extends ethereum.Event {
  get params(): ImplementationAdded__Params {
    return new ImplementationAdded__Params(this);
  }
}

export class ImplementationAdded__Params {
  _event: ImplementationAdded;

  constructor(event: ImplementationAdded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get initializer(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get finalize(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ImplementationRemoved extends ethereum.Event {
  get params(): ImplementationRemoved__Params {
    return new ImplementationRemoved__Params(this);
  }
}

export class ImplementationRemoved__Params {
  _event: ImplementationRemoved;

  constructor(event: ImplementationRemoved) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogNewGovernorAccepted extends ethereum.Event {
  get params(): LogNewGovernorAccepted__Params {
    return new LogNewGovernorAccepted__Params(this);
  }
}

export class LogNewGovernorAccepted__Params {
  _event: LogNewGovernorAccepted;

  constructor(event: LogNewGovernorAccepted) {
    this._event = event;
  }

  get acceptedGovernor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogNominatedGovernor extends ethereum.Event {
  get params(): LogNominatedGovernor__Params {
    return new LogNominatedGovernor__Params(this);
  }
}

export class LogNominatedGovernor__Params {
  _event: LogNominatedGovernor;

  constructor(event: LogNominatedGovernor) {
    this._event = event;
  }

  get nominatedGovernor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogNominationCancelled extends ethereum.Event {
  get params(): LogNominationCancelled__Params {
    return new LogNominationCancelled__Params(this);
  }
}

export class LogNominationCancelled__Params {
  _event: LogNominationCancelled;

  constructor(event: LogNominationCancelled) {
    this._event = event;
  }
}

export class LogRemovedGovernor extends ethereum.Event {
  get params(): LogRemovedGovernor__Params {
    return new LogRemovedGovernor__Params(this);
  }
}

export class LogRemovedGovernor__Params {
  _event: LogRemovedGovernor;

  constructor(event: LogRemovedGovernor) {
    this._event = event;
  }

  get removedGovernor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class l2perp extends ethereum.SmartContract {
  static bind(address: Address): l2perp {
    return new l2perp("l2perp", address);
  }

  MAIN_DISPATCHER_SAFEGUARD_SLOT(): Bytes {
    let result = super.call(
      "MAIN_DISPATCHER_SAFEGUARD_SLOT",
      "MAIN_DISPATCHER_SAFEGUARD_SLOT():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_MAIN_DISPATCHER_SAFEGUARD_SLOT(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MAIN_DISPATCHER_SAFEGUARD_SLOT",
      "MAIN_DISPATCHER_SAFEGUARD_SLOT():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PROXY_GOVERNANCE_TAG(): string {
    let result = super.call(
      "PROXY_GOVERNANCE_TAG",
      "PROXY_GOVERNANCE_TAG():(string)",
      []
    );

    return result[0].toString();
  }

  try_PROXY_GOVERNANCE_TAG(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "PROXY_GOVERNANCE_TAG",
      "PROXY_GOVERNANCE_TAG():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  UPGRADE_DELAY_SLOT(): Bytes {
    let result = super.call(
      "UPGRADE_DELAY_SLOT",
      "UPGRADE_DELAY_SLOT():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_UPGRADE_DELAY_SLOT(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "UPGRADE_DELAY_SLOT",
      "UPGRADE_DELAY_SLOT():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getUpgradeActivationDelay(): BigInt {
    let result = super.call(
      "getUpgradeActivationDelay",
      "getUpgradeActivationDelay():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getUpgradeActivationDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUpgradeActivationDelay",
      "getUpgradeActivationDelay():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isNotFinalized(): boolean {
    let result = super.call("isNotFinalized", "isNotFinalized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isNotFinalized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isNotFinalized", "isNotFinalized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proxyIsGovernor(testGovernor: Address): boolean {
    let result = super.call(
      "proxyIsGovernor",
      "proxyIsGovernor(address):(bool)",
      [ethereum.Value.fromAddress(testGovernor)]
    );

    return result[0].toBoolean();
  }

  try_proxyIsGovernor(testGovernor: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "proxyIsGovernor",
      "proxyIsGovernor(address):(bool)",
      [ethereum.Value.fromAddress(testGovernor)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get upgradeActivationDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddImplementationCall extends ethereum.Call {
  get inputs(): AddImplementationCall__Inputs {
    return new AddImplementationCall__Inputs(this);
  }

  get outputs(): AddImplementationCall__Outputs {
    return new AddImplementationCall__Outputs(this);
  }
}

export class AddImplementationCall__Inputs {
  _call: AddImplementationCall;

  constructor(call: AddImplementationCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get finalize(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class AddImplementationCall__Outputs {
  _call: AddImplementationCall;

  constructor(call: AddImplementationCall) {
    this._call = call;
  }
}

export class ProxyAcceptGovernanceCall extends ethereum.Call {
  get inputs(): ProxyAcceptGovernanceCall__Inputs {
    return new ProxyAcceptGovernanceCall__Inputs(this);
  }

  get outputs(): ProxyAcceptGovernanceCall__Outputs {
    return new ProxyAcceptGovernanceCall__Outputs(this);
  }
}

export class ProxyAcceptGovernanceCall__Inputs {
  _call: ProxyAcceptGovernanceCall;

  constructor(call: ProxyAcceptGovernanceCall) {
    this._call = call;
  }
}

export class ProxyAcceptGovernanceCall__Outputs {
  _call: ProxyAcceptGovernanceCall;

  constructor(call: ProxyAcceptGovernanceCall) {
    this._call = call;
  }
}

export class ProxyCancelNominationCall extends ethereum.Call {
  get inputs(): ProxyCancelNominationCall__Inputs {
    return new ProxyCancelNominationCall__Inputs(this);
  }

  get outputs(): ProxyCancelNominationCall__Outputs {
    return new ProxyCancelNominationCall__Outputs(this);
  }
}

export class ProxyCancelNominationCall__Inputs {
  _call: ProxyCancelNominationCall;

  constructor(call: ProxyCancelNominationCall) {
    this._call = call;
  }
}

export class ProxyCancelNominationCall__Outputs {
  _call: ProxyCancelNominationCall;

  constructor(call: ProxyCancelNominationCall) {
    this._call = call;
  }
}

export class ProxyNominateNewGovernorCall extends ethereum.Call {
  get inputs(): ProxyNominateNewGovernorCall__Inputs {
    return new ProxyNominateNewGovernorCall__Inputs(this);
  }

  get outputs(): ProxyNominateNewGovernorCall__Outputs {
    return new ProxyNominateNewGovernorCall__Outputs(this);
  }
}

export class ProxyNominateNewGovernorCall__Inputs {
  _call: ProxyNominateNewGovernorCall;

  constructor(call: ProxyNominateNewGovernorCall) {
    this._call = call;
  }

  get newGovernor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProxyNominateNewGovernorCall__Outputs {
  _call: ProxyNominateNewGovernorCall;

  constructor(call: ProxyNominateNewGovernorCall) {
    this._call = call;
  }
}

export class ProxyRemoveGovernorCall extends ethereum.Call {
  get inputs(): ProxyRemoveGovernorCall__Inputs {
    return new ProxyRemoveGovernorCall__Inputs(this);
  }

  get outputs(): ProxyRemoveGovernorCall__Outputs {
    return new ProxyRemoveGovernorCall__Outputs(this);
  }
}

export class ProxyRemoveGovernorCall__Inputs {
  _call: ProxyRemoveGovernorCall;

  constructor(call: ProxyRemoveGovernorCall) {
    this._call = call;
  }

  get governorForRemoval(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProxyRemoveGovernorCall__Outputs {
  _call: ProxyRemoveGovernorCall;

  constructor(call: ProxyRemoveGovernorCall) {
    this._call = call;
  }
}

export class RemoveImplementationCall extends ethereum.Call {
  get inputs(): RemoveImplementationCall__Inputs {
    return new RemoveImplementationCall__Inputs(this);
  }

  get outputs(): RemoveImplementationCall__Outputs {
    return new RemoveImplementationCall__Outputs(this);
  }
}

export class RemoveImplementationCall__Inputs {
  _call: RemoveImplementationCall;

  constructor(call: RemoveImplementationCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveImplementationCall__Outputs {
  _call: RemoveImplementationCall;

  constructor(call: RemoveImplementationCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get finalize(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}
