import { Event, EventsPayloadByEvent, Progress, State } from './interfaces';
/** Get current playback state and subsequent updates  */
export declare const usePlaybackState: () => State;
/**
 * Attaches a handler to the given TrackPlayer events and performs cleanup on unmount
 * @param events - TrackPlayer events to subscribe to
 * @param handler - callback invoked when the event fires
 */
export declare const useTrackPlayerEvents: <T extends Event[], H extends (data: EventsPayloadByEvent[T[number]]) => void>(events: T, handler: H) => void;
/**
 * Poll for track progress for the given interval (in miliseconds)
 * @param updateInterval - ms interval
 */
export declare function useProgress(updateInterval?: number): Progress;
