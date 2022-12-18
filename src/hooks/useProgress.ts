import { useState, useRef, useEffect } from 'react'

import { getPosition, getDuration, getBufferedPosition } from '../trackPlayer'

import { State } from '../constants'
import type { Progress } from '../interfaces'
import { usePlaybackState } from './usePlaybackState'

/**
 * Poll for track progress for the given interval (in miliseconds)
 * @param interval - ms interval
 */
export function useProgress(updateInterval?: number) {
  const [state, setState] = useState<Progress>({ position: 0, duration: 0, buffered: 0 })
  const playerState = usePlaybackState()
  const stateRef = useRef(state)
  const isUnmountedRef = useRef(true)

  useEffect(() => {
    isUnmountedRef.current = false
    return () => {
      isUnmountedRef.current = true
    }
  }, [])

  const getProgress = async () => {
    try {
      const [position, duration, buffered] = await Promise.all([getPosition(), getDuration(), getBufferedPosition()])

      // If the component has been unmounted, exit
      if (isUnmountedRef.current) return

      // If there is no change in properties, exit
      if (
        position === stateRef.current.position &&
        duration === stateRef.current.duration &&
        buffered === stateRef.current.buffered
      )
        return

      const state = { position, duration, buffered }
      stateRef.current = state
      setState(state)
    } catch {} // these method only throw while you haven't yet setup, ignore failure.
  }

  useEffect(() => {
    if (playerState === State.None) {
      setState({ position: 0, duration: 0, buffered: 0 })
      return
    }

    // Set initial state
    getProgress()

    // Create interval to update state periodically
    const poll = setInterval(getProgress, updateInterval || 1000)
    return () => clearInterval(poll)
  }, [playerState, updateInterval])

  return state
}
