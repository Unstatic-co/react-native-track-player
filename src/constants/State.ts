import { NativeModules } from 'react-native'
const { TrackPlayerModule: TrackPlayer } = NativeModules

export enum State {
  None = TrackPlayer.STATE_NONE,
  Ready = TrackPlayer.STATE_READY,
  Playing = TrackPlayer.STATE_PLAYING,
  Paused = TrackPlayer.STATE_PAUSED,
  Stopped = TrackPlayer.STATE_STOPPED,
  Buffering = TrackPlayer.STATE_BUFFERING,
  Connecting = TrackPlayer.STATE_CONNECTING,
}
