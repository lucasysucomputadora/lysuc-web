import React, {useState} from 'react'
import {Link } from "react-router-dom"
import Img from "./Img"

function DrawUnit({id, name, original}) {
 // console.log(original)
  const [ids, setIds] = useState(`https://archive.org/download/${id}/${name}`)
 return (
  <div>
       <div >
     {/* <Link to={`/drawViwer/${id}/${original}`}> */}
     <img className={ids === `https://archive.org/download/${id}/${name}`? "img__unit": "img__exp" } 
     onClick={
       ids === `https://archive.org/download/${id}/${name}`?
        ()=> setIds(`https://archive.org/download/${id}/${original}`) :
        ()=> setIds(`https://archive.org/download/${id}/${name}`)
      } 
     src={ids} 
     alt={id}/> 

     {/* </Link> */}
       </div>

  </div>
 )
}

export default DrawUnit

// setIds(`https://archive.org/download/${id}/${original}`)