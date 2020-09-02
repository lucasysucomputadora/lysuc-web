import React, { useState, useEffect } from 'react'
// import music from "../music.json";
import MusicElement from "./MusicElement"
// import Player from "./Player"
// import Fechin from "./Fechin"
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "./AudioPlayer"
//...



function Music({ida,lis,src}) {
  const [data, setData] = useState([]);
  const [songs, setSongs] = useState("");
  const [list, setList] = useState([]);
  const [ids, setIds] = useState()
  // const [ids, setIds] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json`);
      const datas = await response.json();
      setData(datas.response.docs);
    }
    fetchData();
  }
    , [])

  const arr = data.filter(a => a.collection[0] === "opensource_audio").filter(a => a.identifier !== "randomcycle")
  return (<div>

    <h2 style={{ paddingLeft: "20px" }}>MUSIC 音楽</h2>
 
    <div className="player">
      <div >
        {/* <h3>{songs.substr(0, songs.length - 5)}</h3> */}
        {/* <img width="100%" style={{border:"solid"}} height="50px" src={`https://archive.org/download/${songs.substr(0, songs.length - 5)}.png`}/> */}
      </div>
    </div>

    <div className="music">
      {arr.map(a => <MusicElement
        key={a.identifier}
        id={a.identifier}
        ids={(ids) => ida(ids)}
        list={(list) => lis(list)}
        song={(song) => src(song)}
      />)}
    </div>
  </div>
  )
}

export default Music
