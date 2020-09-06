import React, { useState, useEffect } from 'react';
import AudioPlayers from 'react-h5-audio-player';
import './player.css';

function AudioPlayer({ song, list, ids }) {

  const [track, setTrack] = useState(song)

  useEffect(() => {
    setTrack(song);
  }, [song])
  let arr = list.map(a => `https://archive.org/download/${ids}/${a.name}`)
  let arr2 = list.map(a => ids + "/" + a.name)

  return (
    <div>
      <div className="tit">
        <a style={{color:"white"}} href={arr[track]}>{arr2[track]}</a></div>
      <AudioPlayers

        showSkipControls
        onEnded={() => setTrack((track + 1) % arr.length)}
        showJumpControls={false}
        onClickPrevious={() => setTrack(track > 0 ? (track - 1) : (arr.length - 1))}
        onClickNext={() => setTrack((track + 1) % arr.length)} src={arr[track]} />
    </div>
  )
}

export default AudioPlayer

