import { Debug } from 'debug';

import * as C from './Constants';
import * as Exceptions from './Exceptions';
import * as Grammar from './Grammar';
import * as Utils from './Utils';

export { C, Exceptions, Grammar, Utils };

export { UA } from './UA';
export type {
	UAConfiguration,
	CallOptions,
	UnRegisterOptions,
	RTCSessionEvent,
	ConnectingEvent,
	ConnectedEvent,
	DisconnectEvent,
	RegisteredEvent,
	UnRegisteredEvent,
} from './UA';
export { URI } from './URI';
export { NameAddrHeader } from './NameAddrHeader';
export { WebSocketInterface } from './WebSocketInterface';
export { Socket, WeightedSocket } from './Socket';
export { RTCSession } from './RTCSession';
export type {
	AnswerOptions,
	RejectOptions,
	TerminateOptions,
	ReferOptions,
	HoldOptions,
	RenegotiateOptions,
	DTMFOptions,
	SessionDirection,
	Originator,
	RTCSessionEventMap,
} from './RTCSession';

export const debug: Debug;
export const name: string;
export const version: string;
