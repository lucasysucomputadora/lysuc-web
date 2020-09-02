import React, { useState, useEffect } from 'react'
// import axios from "axios"
import MusicPlayer from "./MusicPlayer"
import {Switch, Route, Link} from "react-router-dom";

// import { cleanup } from '@testing-library/react';

function MusicElement({id, song, list, ids}) {

  const [data, setData] = useState([]);
  const [date, setDate] = useState();
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
  // const arr = data.filter(a =>  a.source === "original" && a.format ==="Flac" || a.format === "WAVE")
  // const arr2 = arr.map(a => a.name.substr(0, a.name.length - 5))
  // console.log(arr2)
  // console.log(arr)
  // console.log(id)
  // const url = `https://archive.org/metadata/${id}`
  // const data = fetch(url).then(res => res.json()).then(res => res)
  // console.log(data)
  // console.log(arr)
  return (

    <div onClick={() => list(arr)}>
      <div onClick={() => ids(id)}>

        <div className="music__title">
          <h3 >{id} - <span>{date}</span></h3>
        </div>
        <div className="music__element">

          {arr.map(a => <p className="music__unit" key={a.name} onClick={() => song(arr.indexOf(a))} >{a.name.substr(0, a.name.length - 5)}</p>)}


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
