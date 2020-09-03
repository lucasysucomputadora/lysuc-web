import React, { useState, useEffect } from 'react'
// import axios from "axios"
import Playlist from "./playlist"
import MusicPlayer from "./MusicPlayer"
import { Switch, Route, Link } from "react-router-dom";
import {playerContextFilter, PlayerContextProvide} from "@cassette/core"

// import { cleanup } from '@testing-library/react';

function MusicElement({ id, song, list, ids }) {

  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [key, setKey] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/metadata/${id}`);
      const datas = await response.json();
      setData(datas.files);
      setDate(datas.metadata.date)
    }


    fetchData();
    // data(files)
    // console.log(datas)

  }
    , [id])
  // console.log(data[2])
  const arr = data.filter(a => a.name.endsWith(".flac"))
  
  let playlist = arr.map(a => ({
    url: `https://archive.org/download/${ids}/${a.name}`,
    title: a.name
   }))
  //  console.log(playlist)

  // let PlaylistMenu = playerContextFilter(Playlist, [
  //   'playlist',
  //   'activeTrackIndex',
  //   'onSelectTrackIndex'
  //  ]);
  //  Playlist(playlist)
  //  let x = 0;
  //  console.log(x)
  return (

    <div onClick={() => list(arr)}>
      <div onClick={() => ids(id)}>

        <div className="music__title" onClick={() => song(0)}>
          <h3 >{id} - <span>{date}</span></h3>
        </div>
        <div className="music__element">
    
      


    {arr.map(a => <p className="music__unit" key={a.name} onClick={() => song(arr.indexOf(a))} >{a.name.substr(0, a.name.length - 5)}</p>)}
 
 {/* {key ? arr.map(a => <div onClick={() => setKey(false)}><p className="music__unit" key={a.name} onClick={() => song(arr.indexOf(a))} >{a.name.substr(0, a.name.length - 5)}</p></div>):<Playlist playlist={playlist}/>} */}
 
 
 {/* {key ? arr.map(a => <p className="music__unit" key={a.name} onClick={() => setKey(false)} >{a.name.substr(0, a.name.length - 5)}</p>):<PlaylistMenu/>} */}

          {/* {arr.map(a => <MusicPlayer key={a.name} id={id} song={a.name} />)} */}

        </div>
      </div>
      {/* <br/> */}
    </div>
  )
}

export default MusicElement
// &list_height=150
// webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen
