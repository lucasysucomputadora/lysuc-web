import React, { useState } from 'react'
// import AudioPlayers from "react-responsive-audio-player"
import { MediaPlayer } from '@cassette/player'
import { PlayerContextProvider, playerContextFilter } from '@cassette/core';
import { usePlayerContext } from '@cassette/hooks';

import '@cassette/player/dist/css/cassette-player.css';

function AudioPlayer({ src, list, ids }) {

 let arr = list.map(a => ({
  url: `https://archive.org/download/${ids}/${a.name}`,
  title: a.name
 }))
 let newArr = arr.slice(src, arr.length).concat(arr.slice(0, src));
 

 return (
  <div>
   <MediaPlayer
    playlist={newArr} controls={[
     "backskip",
     'spacer',
     'playpause',
     'forwardskip',
     'volume',
     'spacer',
     'progress'
    ]} 
   />
  </div>
 )
}

export default AudioPlayer
