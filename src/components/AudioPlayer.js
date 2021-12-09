import React, { useState, useEffect,useRef } from 'react';
import AudioPlayers from 'react-h5-audio-player';
import './player.css';

function AudioPlayer({ song, list, ids, pause }) {

  const [track, setTrack] = useState(song)
  const player = useRef();
  useEffect(() => {
    setTrack(song);
  }, [song])
  const play = () => {
    player.current.audio.current.play();
  };
  const pauses = ()=>{
    player.current.audio.current.pause();
  }
  console.log(pause)
  const togglePause= (p) =>{
    p? pauses(): play();
  }

  let arr = list.map(a => `https://archive.org/download/${ids}/${a.name}`)
  let arr2 = list.map(a => ids + "/" + a.name + " (download here)")

  // console.log(arr.join(" "))
  return (
    <div>
      <div className="tit">
        {/* <a href="https://archive.org/download/alguito/alguito.png" download target="_black">aaa</a> */}
        <a style={{color:"white"}} href={arr[track]}target="_black" download>{arr2[track]}</a> </div>
      <AudioPlayers
        showSkipControls
        onEnded={() => setTrack((track + 1) % arr.length)}
        showJumpControls={false}
        onClickPrevious={() => setTrack(track > 0 ? (track - 1) : (arr.length - 1))}
        onClickNext={() => setTrack((track + 1) % arr.length)} 
        src={arr[track]} 
        ref={player}/>
    </div>
  )
}

export default AudioPlayer

