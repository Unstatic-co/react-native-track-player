import { NativeModules } from 'react-native'
const { TrackPlayerModule: TrackPlayer } = NativeModules

export enum PitchAlgorithm {
  Linear = TrackPlayer.PITCH_ALGORITHM_LINEAR,
  Music = TrackPlayer.PITCH_ALGORITHM_MUSIC,
  Voice = TrackPlayer.PITCH_ALGORITHM_VOICE,
}
