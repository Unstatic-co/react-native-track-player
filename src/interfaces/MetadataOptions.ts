import type { RatingType, Capability } from '../constants'
import type { FeedbackOptions } from './FeedbackOptions'
import type { ResourceObject } from './ResourceObject'

export interface MetadataOptions {
  ratingType?: RatingType
  forwardJumpInterval?: number
  backwardJumpInterval?: number
  progressUpdateEventInterval?: number // in seconds

  // ios
  likeOptions?: FeedbackOptions
  dislikeOptions?: FeedbackOptions
  bookmarkOptions?: FeedbackOptions

  capabilities?: Capability[]

  // android
  stoppingAppPausesPlayback?: boolean
  alwaysPauseOnInterruption?: boolean
  notificationCapabilities?: Capability[]
  compactCapabilities?: Capability[]

  icon?: ResourceObject
  playIcon?: ResourceObject
  pauseIcon?: ResourceObject
  stopIcon?: ResourceObject
  previousIcon?: ResourceObject
  nextIcon?: ResourceObject
  rewindIcon?: ResourceObject
  forwardIcon?: ResourceObject
  color?: number
}
