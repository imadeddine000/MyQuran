import { NativeModules } from 'react-native';
const { TrackPlayerModule: TrackPlayer } = NativeModules;
export var IOSCategory;
(function (IOSCategory) {
    /**
     * The category for playing recorded music or other sounds that are central
     * to the successful use of your app.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616509-playback
     **/
    IOSCategory["Playback"] = "playback";
    /**
     * The category for recording (input) and playback (output) of audio, such as
     * for a Voice over Internet Protocol (VoIP) app.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616568-playandrecord
     **/
    IOSCategory["PlayAndRecord"] = "playAndRecord";
    /**
     * The category for routing distinct streams of audio data to different
     * output devices at the same time.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616484-multiroute
     **/
    IOSCategory["MultiRoute"] = "multiRoute";
    /**
     * The category for an app in which sound playback is nonprimary — that is,
     * your app also works with the sound turned off.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616560-ambient
     **/
    IOSCategory["Ambient"] = "ambient";
    /**
     * The default audio session category.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616488-soloambient
     **/
    IOSCategory["SoloAmbient"] = "soloAmbient";
    /**
     * The category for recording audio while also silencing playback audio.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616451-record
     **/
    IOSCategory["Record"] = "record";
})(IOSCategory || (IOSCategory = {}));
export var IOSCategoryMode;
(function (IOSCategoryMode) {
    /**
     * The default audio session mode.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616579-default
     **/
    IOSCategoryMode["Default"] = "default";
    /**
     * A mode that the GameKit framework sets on behalf of an application that
     * uses GameKit’s voice chat service.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616511-gamechat
     **/
    IOSCategoryMode["GameChat"] = "gameChat";
    /**
     * A mode that indicates that your app is performing measurement of audio
     * input or output.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616608-measurement
     **/
    IOSCategoryMode["Measurement"] = "measurement";
    /** A mode that indicates that your app is playing back movie content.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616623-movieplayback
     **/
    IOSCategoryMode["MoviePlayback"] = "moviePlayback";
    /** A mode used for continuous spoken audio to pause the audio when another
     * app plays a short audio prompt. See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616510-spokenaudio */
    IOSCategoryMode["SpokenAudio"] = "spokenAudio";
    /**
     * A mode that indicates that your app is engaging in online video conferencing.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616590-videochat
     **/
    IOSCategoryMode["VideoChat"] = "videoChat";
    /**
     * A mode that indicates that your app is recording a movie.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616535-videorecording
     **/
    IOSCategoryMode["VideoRecording"] = "videoRecording";
    /**
     * A mode that indicates that your app is performing two-way voice communication,
     * such as using Voice over Internet Protocol (VoIP).
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616455-voicechat
     **/
    IOSCategoryMode["VoiceChat"] = "voiceChat";
    /**
     * A mode that indicates that your app plays audio using text-to-speech.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/2962803-voiceprompt
     **/
    IOSCategoryMode["VoicePrompt"] = "voicePrompt";
})(IOSCategoryMode || (IOSCategoryMode = {}));
export var IOSCategoryOptions;
(function (IOSCategoryOptions) {
    /**
     * An option that indicates whether audio from this session mixes with audio
     * from active sessions in other audio apps.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers
     **/
    IOSCategoryOptions["MixWithOthers"] = "mixWithOthers";
    /**
     * An option that reduces the volume of other audio sessions while audio from
     * this session plays.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616618-duckothers
     **/
    IOSCategoryOptions["DuckOthers"] = "duckOthers";
    /**
     * An option that determines whether to pause spoken audio content from other
     * sessions when your app plays its audio.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616534-interruptspokenaudioandmixwithot
     **/
    IOSCategoryOptions["InterruptSpokenAudioAndMixWithOthers"] = "interruptSpokenAudioAndMixWithOthers";
    /**
     * An option that determines whether Bluetooth hands-free devices appear as
     * available input routes.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616518-allowbluetooth
     **/
    IOSCategoryOptions["AllowBluetooth"] = "allowBluetooth";
    /**
     * An option that determines whether you can stream audio from this session
     * to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771735-allowbluetootha2dp
     **/
    IOSCategoryOptions["AllowBluetoothA2DP"] = "allowBluetoothA2DP";
    /**
     * An option that determines whether you can stream audio from this session
     * to AirPlay devices.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771736-allowairplay
     **/
    IOSCategoryOptions["AllowAirPlay"] = "allowAirPlay";
    /**
     * An option that determines whether audio from the session defaults to the
     * built-in speaker instead of the receiver.
     * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616462-defaulttospeaker
     **/
    IOSCategoryOptions["DefaultToSpeaker"] = "defaultToSpeaker";
})(IOSCategoryOptions || (IOSCategoryOptions = {}));
export var RatingType;
(function (RatingType) {
    RatingType[RatingType["Heart"] = TrackPlayer.RATING_HEART] = "Heart";
    RatingType[RatingType["ThumbsUpDown"] = TrackPlayer.RATING_THUMBS_UP_DOWN] = "ThumbsUpDown";
    RatingType[RatingType["ThreeStars"] = TrackPlayer.RATING_3_STARS] = "ThreeStars";
    RatingType[RatingType["FourStars"] = TrackPlayer.RATING_4_STARS] = "FourStars";
    RatingType[RatingType["FiveStars"] = TrackPlayer.RATING_5_STARS] = "FiveStars";
    RatingType[RatingType["Percentage"] = TrackPlayer.RATING_PERCENTAGE] = "Percentage";
})(RatingType || (RatingType = {}));
export var Capability;
(function (Capability) {
    Capability[Capability["Play"] = TrackPlayer.CAPABILITY_PLAY] = "Play";
    Capability[Capability["PlayFromId"] = TrackPlayer.CAPABILITY_PLAY_FROM_ID] = "PlayFromId";
    Capability[Capability["PlayFromSearch"] = TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH] = "PlayFromSearch";
    Capability[Capability["Pause"] = TrackPlayer.CAPABILITY_PAUSE] = "Pause";
    Capability[Capability["Stop"] = TrackPlayer.CAPABILITY_STOP] = "Stop";
    Capability[Capability["SeekTo"] = TrackPlayer.CAPABILITY_SEEK_TO] = "SeekTo";
    Capability[Capability["Skip"] = TrackPlayer.CAPABILITY_SKIP] = "Skip";
    Capability[Capability["SkipToNext"] = TrackPlayer.CAPABILITY_SKIP_TO_NEXT] = "SkipToNext";
    Capability[Capability["SkipToPrevious"] = TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS] = "SkipToPrevious";
    Capability[Capability["JumpForward"] = TrackPlayer.CAPABILITY_JUMP_FORWARD] = "JumpForward";
    Capability[Capability["JumpBackward"] = TrackPlayer.CAPABILITY_JUMP_BACKWARD] = "JumpBackward";
    Capability[Capability["SetRating"] = TrackPlayer.CAPABILITY_SET_RATING] = "SetRating";
    Capability[Capability["Like"] = TrackPlayer.CAPABILITY_LIKE] = "Like";
    Capability[Capability["Dislike"] = TrackPlayer.CAPABILITY_DISLIKE] = "Dislike";
    Capability[Capability["Bookmark"] = TrackPlayer.CAPABILITY_BOOKMARK] = "Bookmark";
})(Capability || (Capability = {}));
/**
 * Define how the audio playback should behave to removing the app from recents (killing it). Default is `ContinuePlayback`.
 */
export var AppKilledPlaybackBehavior;
(function (AppKilledPlaybackBehavior) {
    /**
     * This option will continue playing audio in the background when the app is removed from recents. The notification remains. This is the default.
     */
    AppKilledPlaybackBehavior["ContinuePlayback"] = "continue-playback";
    /**
     * This option will pause playing audio in the background when the app is removed from recents. The notification remains and can be used to resume playback.
     */
    AppKilledPlaybackBehavior["PausePlayback"] = "pause-playback";
    /**
     * This option will stop playing audio in the background when the app is removed from recents. The notification is removed and can't be used to resume playback. Users would need to open the app again to start playing audio.
     */
    AppKilledPlaybackBehavior["StopPlaybackAndRemoveNotification"] = "stop-playback-and-remove-notification";
})(AppKilledPlaybackBehavior || (AppKilledPlaybackBehavior = {}));
export var Event;
(function (Event) {
    /** Fired when the state of the player changes. */
    Event["PlaybackState"] = "playback-state";
    /** Fired when a playback error occurs. */
    Event["PlaybackError"] = "playback-error";
    /** Fired after playback has paused due to the queue having reached the end. */
    Event["PlaybackQueueEnded"] = "playback-queue-ended";
    /**
     * Fired when another track has become active or when there no longer is an
     * active track.
     **/
    Event["PlaybackTrackChanged"] = "playback-track-changed";
    /**
     * Fired when the current track receives metadata encoded in. (e.g. ID3 tags,
     * Icy Metadata, Vorbis Comments or QuickTime metadata).
     **/
    Event["PlaybackMetadataReceived"] = "playback-metadata-received";
    /**
     * Fired when playback progress has been updated.
     * See https://react-native-track-player.js.org/docs/api/events#playbackprogressupdated
     **/
    Event["PlaybackProgressUpdated"] = "playback-progress-updated";
    /**
     * Fired when the user presses the play button.
     * See https://react-native-track-player.js.org/docs/api/events#remoteplay
     **/
    Event["RemotePlay"] = "remote-play";
    /**
     * Fired when the user presses the pause button.
     * See https://react-native-track-player.js.org/docs/api/events#remotepause
     **/
    Event["RemotePause"] = "remote-pause";
    /**
     * Fired when the user presses the stop button.
     * See https://react-native-track-player.js.org/docs/api/events#remotestop
     **/
    Event["RemoteStop"] = "remote-stop";
    /**
     * Fired when the user presses the next track button.
     * See https://react-native-track-player.js.org/docs/api/events#remotenext
     **/
    Event["RemoteNext"] = "remote-next";
    /**
     * Fired when the user presses the previous track button.
     * See https://react-native-track-player.js.org/docs/api/events#remoteprevious
     **/
    Event["RemotePrevious"] = "remote-previous";
    /**
     * Fired when the user presses the jump forward button.
     * See https://react-native-track-player.js.org/docs/api/events#remotejumpforward
     **/
    Event["RemoteJumpForward"] = "remote-jump-forward";
    /**
     * Fired when the user presses the jump backward button.
     * See https://react-native-track-player.js.org/docs/api/events#remotejumpbackward
     **/
    Event["RemoteJumpBackward"] = "remote-jump-backward";
    /**
     * Fired when the user changes the position of the timeline.
     * See https://react-native-track-player.js.org/docs/api/events#remoteseek
     **/
    Event["RemoteSeek"] = "remote-seek";
    /**
     * Fired when the user changes the rating for the track remotely.
     * See https://react-native-track-player.js.org/docs/api/events#remotesetrating
     **/
    Event["RemoteSetRating"] = "remote-set-rating";
    /**
     * Fired when the app needs to handle an audio interruption.
     * See https://react-native-track-player.js.org/docs/api/events#remoteduck
     **/
    Event["RemoteDuck"] = "remote-duck";
    /**
     * (iOS only) Fired when the user presses the like button in the now playing
     * center.
     * See https://react-native-track-player.js.org/docs/api/events#remotelike-ios-only
     **/
    Event["RemoteLike"] = "remote-like";
    /**
     * (iOS only) Fired when the user presses the dislike button in the now playing
     * center.
     * See https://react-native-track-player.js.org/docs/api/events#remotedislike-ios-only
     **/
    Event["RemoteDislike"] = "remote-dislike";
    /** (iOS only) Fired when the user presses the bookmark button in the now
     * playing center.
     * See https://react-native-track-player.js.org/docs/api/events#remotebookmark-ios-only
     **/
    Event["RemoteBookmark"] = "remote-bookmark";
    /**
     * (Android only) Fired when the user selects a track from an external device.
     * See https://react-native-track-player.js.org/docs/api/events#remoteplayid
     **/
    Event["RemotePlayId"] = "remote-play-id";
    /**
     * (Android only) Fired when the user searches for a track (usually voice search).
     * See https://react-native-track-player.js.org/docs/api/events#remoteplaysearch
     **/
    Event["RemotePlaySearch"] = "remote-play-search";
    /**
     * (Android only) Fired when the user presses the skip button.
     * See https://react-native-track-player.js.org/docs/api/events#remoteskip
     **/
    Event["RemoteSkip"] = "remote-skip";
})(Event || (Event = {}));
export var TrackType;
(function (TrackType) {
    TrackType["Default"] = "default";
    TrackType["Dash"] = "dash";
    TrackType["HLS"] = "hls";
    TrackType["SmoothStreaming"] = "smoothstreaming";
})(TrackType || (TrackType = {}));
export var RepeatMode;
(function (RepeatMode) {
    /** Playback stops when the last track in the queue has finished playing. */
    RepeatMode[RepeatMode["Off"] = TrackPlayer.REPEAT_OFF] = "Off";
    /** Repeats the current track infinitely during ongoing playback. */
    RepeatMode[RepeatMode["Track"] = TrackPlayer.REPEAT_TRACK] = "Track";
    /** Repeats the entire queue infinitely. */
    RepeatMode[RepeatMode["Queue"] = TrackPlayer.REPEAT_QUEUE] = "Queue";
})(RepeatMode || (RepeatMode = {}));
export var PitchAlgorithm;
(function (PitchAlgorithm) {
    /**
     * A high-quality time pitch algorithm that doesn’t perform pitch correction.
     * */
    PitchAlgorithm[PitchAlgorithm["Linear"] = TrackPlayer.PITCH_ALGORITHM_LINEAR] = "Linear";
    /**
     * A highest-quality time pitch algorithm that’s suitable for music.
     **/
    PitchAlgorithm[PitchAlgorithm["Music"] = TrackPlayer.PITCH_ALGORITHM_MUSIC] = "Music";
    /**
     * A modest quality time pitch algorithm that’s suitable for voice.
     **/
    PitchAlgorithm[PitchAlgorithm["Voice"] = TrackPlayer.PITCH_ALGORITHM_VOICE] = "Voice";
})(PitchAlgorithm || (PitchAlgorithm = {}));
export var State;
(function (State) {
    /** Indicates that no media is currently loaded */
    State[State["None"] = TrackPlayer.STATE_NONE] = "None";
    /** Indicates that the player is ready to start playing */
    State[State["Ready"] = TrackPlayer.STATE_READY] = "Ready";
    /** Indicates that the player is currently playing */
    State[State["Playing"] = TrackPlayer.STATE_PLAYING] = "Playing";
    /** Indicates that the player is currently paused */
    State[State["Paused"] = TrackPlayer.STATE_PAUSED] = "Paused";
    /** Indicates that the player is currently stopped */
    State[State["Stopped"] = TrackPlayer.STATE_STOPPED] = "Stopped";
    /** Indicates that the player is currently buffering (in "play" state) */
    State[State["Buffering"] = TrackPlayer.STATE_BUFFERING] = "Buffering";
    /** Indicates that the player is currently buffering (in "pause" state) */
    State[State["Connecting"] = TrackPlayer.STATE_CONNECTING] = "Connecting";
})(State || (State = {}));
