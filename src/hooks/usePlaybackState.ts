import { useState, useRef, useEffect } from 'react'

import { getState, addEventListener } from '../trackPlayer'
import { Event, State } from '../constants'

/** Get current playback state and subsequent updates  */
export const usePlaybackState = () => {
  const [state, setState] = useState(State.None)
  const isUnmountedRef = useRef(true)

  useEffect(() => {
    isUnmountedRef.current = false
    return () => {
      isUnmountedRef.current = true
    }
  }, [])

  useEffect(() => {
    async function setPlayerState() {
      try {
        const playerState = await getState()

        // If the component has been unmounted, exit
        if (isUnmountedRef.current) return

        setState(playerState)
      } catch {} // getState only throw while you haven't yet setup, ignore failure.
    }

    // Set initial state
    setPlayerState()

    const sub = addEventListener<Event.PlaybackState>(Event.PlaybackState, (data) => {
      setState(data.state)
    })

    return () => sub.remove()
  }, [])

  return state
}
