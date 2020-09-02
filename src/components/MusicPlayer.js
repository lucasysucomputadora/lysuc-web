import React from 'react'
import Player from "./Player"

export default function MusicPlayer({id,song}) {
 // console.log(song)
 return (
  <div className="musicPlayer">
   <h5>OPA</h5>
   {/* <Player url={`https://archive.org/download/${id}/${song}`}/> */}
   {/* <audio controls>
    <source src={`https://archive.org/download/${id}/${song}`} type="audio/flac"/>
   </audio> */}
  </div>
 )
}
