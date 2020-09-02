import React from 'react'
import { MediaPlayer } from '@cassette/player'




function AudioReproductor({playlist}) {


 return (
  <div>
   <MediaPlayer 
    // startingTrackIndex=
    // onSelectTrackIndex={(src) => parseInt(src)}
   playlist={playlist} controls={[
    "backskip",
    'spacer',
    'playpause',
    'forwardskip',
    'volume',
    'spacer',
    'progress'
   ]} defaultVolume={1} 
   />
  </div>
 )
}

export default AudioReproductor
