import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";


function VideoPlayer() {

 const { id } = useParams()
 return (
  <div className="vid">
   <iframe className="vid" width="720" height="480" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
 )
}

export default VideoPlayer
