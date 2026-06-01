import { Socket } from './Socket';

export class WebSocketInterface extends Socket {
	constructor(url: string, headers?: Record<string, string>);
}
