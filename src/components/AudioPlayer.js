import React, { useState, useEffect } from 'react'
// import AudioPlayers from "react-audio-player"
// import MusicElement from "./MusicElement"
// import { usePlayerContext } from '@cassette/hooks';
// import Playlist from "./playlist"
import AudioPlayers from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// import { MediaPlayerControls } from '@cassette/player';
// import { PlayerContextProvider, playerContextFilter } from '@cassette/core';

// import '@cassette/player/dist/css/cassette-player.css';

function AudioPlayer({ song, list, ids }) {

  const [track, setTrack] = useState(song)
  // num = ()=> setTrack(src)
  useEffect(() =>{
    setTrack(song);
  },[song])
 let arr = list.map(a =>  `https://archive.org/download/${ids}/${a.name}`)


 console.log(track)
 console.log(arr[track])
 return (
  <div>
    <div className="tit">{arr[track]}</div>
    <AudioPlayers layout='horizontal-reverse'showSkipControls onEnded={() => setTrack((track + 1)% arr.length)  }showJumpControls={false} onClickPrevious={() => setTrack((track -1)% arr.length)} onClickNext={()=> setTrack((track + 1)% arr.length)} src={arr[track]}/>
  </div>
 )
}

export default AudioPlayer

