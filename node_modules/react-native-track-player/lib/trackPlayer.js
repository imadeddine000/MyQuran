import { AppRegistry, DeviceEventEmitter, NativeEventEmitter, NativeModules, Platform, } from 'react-native';
// @ts-expect-error because resolveAssetSource is untyped
import { default as resolveAssetSource } from 'react-native/Libraries/Image/resolveAssetSource';
const { TrackPlayerModule: TrackPlayer } = NativeModules;
const emitter = Platform.OS !== 'android'
    ? new NativeEventEmitter(TrackPlayer)
    : DeviceEventEmitter;
// MARK: - Helpers
function resolveImportedPath(path) {
    if (!path)
        return undefined;
    return resolveAssetSource(path) || path;
}
// MARK: - General API
/**
 * Initializes the player with the specified options.
 */
async function setupPlayer(options = {}) {
    return TrackPlayer.setupPlayer(options || {});
}
/**
 * Register the playback service. The service will run as long as the player runs.
 */
function registerPlaybackService(factory) {
    if (Platform.OS === 'android') {
        // Registers the headless task
        AppRegistry.registerHeadlessTask('TrackPlayer', factory);
    }
    else {
        // Initializes and runs the service in the next tick
        setImmediate(factory());
    }
}
function addEventListener(event, listener) {
    return emitter.addListener(event, listener);
}
/**
 * @deprecated This method should not be used, most methods reject when service is not bound.
 */
function isServiceRunning() {
    return TrackPlayer.isServiceRunning();
}
// MARK: - Queue API
/**
 * Adds one or more tracks to the queue.
 */
async function add(tracks, insertBeforeIndex = -1) {
    // Clone the array before modifying it
    if (Array.isArray(tracks)) {
        tracks = [...tracks];
    }
    else {
        tracks = [tracks];
    }
    if (tracks.length < 1)
        return;
    for (let i = 0; i < tracks.length; i++) {
        // Clone the object before modifying it
        tracks[i] = { ...tracks[i] };
        // Resolve the URLs
        tracks[i].url = resolveImportedPath(tracks[i].url);
        tracks[i].artwork = resolveImportedPath(tracks[i].artwork);
    }
    return TrackPlayer.add(tracks, insertBeforeIndex);
}
/**
 * Removes one or more tracks from the queue.
 */
async function remove(tracks) {
    if (!Array.isArray(tracks)) {
        tracks = [tracks];
    }
    return TrackPlayer.remove(tracks);
}
/**
 * Clears any upcoming tracks from the queue.
 */
async function removeUpcomingTracks() {
    return TrackPlayer.removeUpcomingTracks();
}
/**
 * Skips to a track in the queue.
 */
async function skip(trackIndex, initialPosition = -1) {
    return TrackPlayer.skip(trackIndex, initialPosition);
}
/**
 * Skips to the next track in the queue.
 */
async function skipToNext(initialPosition = -1) {
    return TrackPlayer.skipToNext(initialPosition);
}
/**
 * Skips to the previous track in the queue.
 */
async function skipToPrevious(initialPosition = -1) {
    return TrackPlayer.skipToPrevious(initialPosition);
}
// MARK: - Control Center / Notifications API
/**
 * Updates the configuration for the components.
 */
async function updateOptions(options = {}) {
    options = { ...options };
    // Resolve the asset for each icon
    options.icon = resolveImportedPath(options.icon);
    options.playIcon = resolveImportedPath(options.playIcon);
    options.pauseIcon = resolveImportedPath(options.pauseIcon);
    options.stopIcon = resolveImportedPath(options.stopIcon);
    options.previousIcon = resolveImportedPath(options.previousIcon);
    options.nextIcon = resolveImportedPath(options.nextIcon);
    options.rewindIcon = resolveImportedPath(options.rewindIcon);
    options.forwardIcon = resolveImportedPath(options.forwardIcon);
    return TrackPlayer.updateOptions(options);
}
/**
 * Updates the metadata of a track in the queue. If the current track is updated,
 * the notification and the Now Playing Center will be updated accordingly.
 */
async function updateMetadataForTrack(trackIndex, metadata) {
    // Clone the object before modifying it
    metadata = Object.assign({}, metadata);
    // Resolve the artwork URL
    metadata.artwork = resolveImportedPath(metadata.artwork);
    return TrackPlayer.updateMetadataForTrack(trackIndex, metadata);
}
function clearNowPlayingMetadata() {
    return TrackPlayer.clearNowPlayingMetadata();
}
function updateNowPlayingMetadata(metadata) {
    // Clone the object before modifying it
    metadata = Object.assign({}, metadata);
    // Resolve the artwork URL
    metadata.artwork = resolveImportedPath(metadata.artwork);
    return TrackPlayer.updateNowPlayingMetadata(metadata);
}
// MARK: - Player API
/**
 * Resets the player stopping the current track and clearing the queue.
 */
async function reset() {
    return TrackPlayer.reset();
}
/**
 * Plays or resumes the current track.
 */
async function play() {
    return TrackPlayer.play();
}
/**
 * Pauses the current track.
 */
async function pause() {
    return TrackPlayer.pause();
}
/**
 * Seeks to a specified time position in the current track.
 */
async function seekTo(position) {
    return TrackPlayer.seekTo(position);
}
/**
 * Sets the volume of the player.
 */
async function setVolume(level) {
    return TrackPlayer.setVolume(level);
}
/**
 * Sets the playback rate.
 */
async function setRate(rate) {
    return TrackPlayer.setRate(rate);
}
/**
 * Sets the repeat mode.
 */
async function setRepeatMode(mode) {
    return TrackPlayer.setRepeatMode(mode);
}
// MARK: - Getters
/**
 * Gets the volume of the player (a number between 0 and 1).
 */
async function getVolume() {
    return TrackPlayer.getVolume();
}
/**
 * Gets the playback rate, where 1 is the regular speed.
 */
async function getRate() {
    return TrackPlayer.getRate();
}
/**
 * Gets a track object from the queue.
 */
async function getTrack(trackIndex) {
    return TrackPlayer.getTrack(trackIndex);
}
/**
 * Gets the whole queue.
 */
async function getQueue() {
    return TrackPlayer.getQueue();
}
/**
 * Gets the index of the current track.
 */
async function getCurrentTrack() {
    return TrackPlayer.getCurrentTrack();
}
/**
 * Gets the duration of the current track in seconds.
 */
async function getDuration() {
    return TrackPlayer.getDuration();
}
/**
 * Gets the buffered position of the current track in seconds.
 */
async function getBufferedPosition() {
    return TrackPlayer.getBufferedPosition();
}
/**
 * Gets the position of the current track in seconds.
 */
async function getPosition() {
    return TrackPlayer.getPosition();
}
/**
 * Gets the playback state of the player.
 */
async function getState() {
    return TrackPlayer.getState();
}
/**
 * Gets the repeat mode.
 */
async function getRepeatMode() {
    return TrackPlayer.getRepeatMode();
}
export default {
    // MARK: - General API
    setupPlayer,
    registerPlaybackService,
    addEventListener,
    isServiceRunning,
    // MARK: - Queue API
    add,
    remove,
    removeUpcomingTracks,
    skip,
    skipToNext,
    skipToPrevious,
    // MARK: - Control Center / Notifications API
    updateOptions,
    updateMetadataForTrack,
    clearNowPlayingMetadata,
    updateNowPlayingMetadata,
    // MARK: - Player API
    reset,
    play,
    pause,
    seekTo,
    setVolume,
    setRate,
    setRepeatMode,
    // MARK: - Getters
    getVolume,
    getRate,
    getTrack,
    getQueue,
    getCurrentTrack,
    getDuration,
    getBufferedPosition,
    getPosition,
    getState,
    getRepeatMode,
};
