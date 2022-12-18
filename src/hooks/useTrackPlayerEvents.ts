import { useEffect, useRef } from 'react'

import { addEventListener } from '../trackPlayer'
import { Event } from '../constants'
import type { EventsPayloadByEvent } from '../interfaces'

/**
 * Attaches a handler to the given TrackPlayer events and performs cleanup on unmount
 * @param events - TrackPlayer events to subscribe to
 * @param handler - callback invoked when the event fires
 */
export const useTrackPlayerEvents = <T extends Event[], H extends (data: EventsPayloadByEvent[T[number]]) => void>(
  events: T,
  handler: H,
) => {
  const savedHandler = useRef(handler)
  savedHandler.current = handler

  useEffect(() => {
    if (__DEV__) {
      const allowedTypes = Object.values(Event)
      const invalidTypes = events.filter((type) => !allowedTypes.includes(type))
      if (invalidTypes.length) {
        console.warn(
          'One or more of the events provided to useTrackPlayerEvents is ' +
            `not a valid TrackPlayer event: ${invalidTypes.join("', '")}. ` +
            'A list of available events can be found at ' +
            'https://react-native-track-player.js.org/docs/api/events',
        )
      }
    }

    const subs = events.map((type) =>
      addEventListener(type, (payload) => {
        // @ts-expect-error
        savedHandler.current({ ...payload, type })
      }),
    )

    return () => subs.forEach((sub) => sub.remove())
  }, [events])
}
