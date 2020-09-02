import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom"
import DrawUnit from "./DrawUnit"


export default function DrawsElement({id, ids}) {
 const [data, setData] = useState([]);
 const [draw, setDraw] = useState()

 useEffect(() => {
   async function fetchData() {
     const response = await fetch(
       `https://archive.org/metadata/${id}`);
     const datas = await response.json();
     setData(datas.files)
   }

 
  fetchData();
  // data(files)
  // console.log(datas)

 }
, [id])
// const arr = data.filter(a => a.format ==="JPEG" || a.format ==="PNG" || a.format ===" JPEG Thumb")
const arr = data.filter(a => a.name.endsWith("thumb.jpg")).filter(a => !a.name.endsWith("_ia_thumb.jpg"))
// const arr1 = data.filter(a => a.format === "JPEG" || a.format === "PNG")
// console.log(arr1)
// console.log(arr);
// const arr1 = arr
 return (
  <div>
   <h2>{id}</h2>
   <div className="img">

     {arr.map(a => <DrawUnit key={a.md5} id={id} name={a.name} ids={(draw)=> ids(draw)} original={a.original}/>)}
    </div>

  </div>
 )
}
