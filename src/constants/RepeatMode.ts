import { NativeModules } from 'react-native'
const { TrackPlayerModule: TrackPlayer } = NativeModules

export enum RepeatMode {
  Off = TrackPlayer.REPEAT_OFF,
  Track = TrackPlayer.REPEAT_TRACK,
  Queue = TrackPlayer.REPEAT_QUEUE,
}
