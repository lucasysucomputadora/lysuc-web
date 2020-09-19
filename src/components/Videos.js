
import React, { useState, useEffect } from 'react'
import VideoElement from "./VideoElement";
import data from "../data.json";
import "../App.css"



function Videos({pause}) {

  const [vid, setVid] = useState()


  return (
    <div >

      <h2>VIDEO ビデオ</h2>


      <div className="videos">
        {data.items.map((a) => {
          return <VideoElement
            key={a.id.videoId}
            id={a.id.videoId}
            title={a.snippet.title}
            img={a.snippet.thumbnails.medium.url}
            kind={a.kind}
            pause={(pse) => pause(pse)} />
        })}
      </div>
    </div>
  )
}

export default Videos

