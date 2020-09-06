
import React, { useState} from 'react'
import VideoElement from "./VideoElement";
import data from "../data.json"; 
import "../App.css"



function Videos() {

  const [vid, setVid] = useState()
  return (
    <div >
    
   <h1>VIDEO ビデオ</h1>
  
 
   <div className="videos">
   {data.items.map((a)=> {return <VideoElement 
    key={a.id.videoId}
    id={a.id.videoId} 
    title={a.snippet.title} 
    img={a.snippet.thumbnails.medium.url}
    ids={(vid)=> setVid(vid) } />})}
   </div>
   </div>
 )
}

export default Videos

