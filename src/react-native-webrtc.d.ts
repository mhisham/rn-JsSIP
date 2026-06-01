declare module 'react-native-webrtc' {
	export function registerGlobals(): void;

	export const RTCPeerConnection: typeof globalThis.RTCPeerConnection;
}
