
import React, { useState, useEffect } from 'react'
import VideoElement from "./VideoElement";
import data from "../data.json";
import "../App.css"



function Videos({pause}) {
  const [data, setData] = useState([]);
  const [llave, setLlave] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=200&page=1&output=json`);
      const datas = await response.json();
      setData(datas.response.docs);
    }
    fetchData();
  }
    , [])

  const arr = data.filter(a => a.collection[0] === "opensource_movies")




  return (
    <div >

      <h2>VIDEOs ビデオ</h2>


      <div className="videos">
        {arr.map((a) => {
          return <VideoElement
            key={a.identifier}
            id={a.identifier}
            title={a.title}
            pause={(pse) => pause(pse)} />
        })}
      </div>
    </div>
  )
}

export default Videos

