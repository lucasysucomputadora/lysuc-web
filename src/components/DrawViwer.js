import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";

function DrawViwer() {
 const {id, original} = useParams()
 // const {original } = useParams()
 // const {name} = useParams()
 console.log(original);
 // console.log("HOHOHO")
 return (
  <div>
   <h1>{original}</h1>
   <img className="img__view" src={`https://archive.org/download/${id}/${original}`} alt="bab"/>

  </div>
 )
}

export default DrawViwer
