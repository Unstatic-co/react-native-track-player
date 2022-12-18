import type { TrackMetadataBase } from './TrackMetadataBase'
import type { ResourceObject } from './ResourceObject'
import type { TrackType, PitchAlgorithm } from '../constants'

export interface Track extends TrackMetadataBase {
  url: string | ResourceObject
  type?: TrackType
  userAgent?: string
  contentType?: string
  pitchAlgorithm?: PitchAlgorithm
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: { [key: string]: any }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
