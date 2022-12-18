export interface PlaybackMetadataReceivedEvent {
  source: string
  title: string | null
  url: string | null
  artist: string | null
  album: string | null
  date: string | null
  genre: string | null
}
