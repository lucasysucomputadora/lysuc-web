import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom"
import DrawUnit from "./DrawUnit"


export default function DrawsElement({id, ids}) {
 const [data, setData] = useState([]);
 const [draw, setDraw] = useState([])
const[count, setCount] = useState(0)
 useEffect(() => {
   async function fetchData() {
     const response = await fetch(
       `https://archive.org/metadata/${id}`);
     const datas = await response.json();
     setData(datas.files.filter(a => a.name.endsWith("thumb.jpg")).filter(a => !a.name.endsWith("_ia_thumb.jpg")))
   }
     
 
  fetchData();
  // data(files)
  // console.log(datas)

 }
, [id])
// const arr = data.filter(a => a.format ==="JPEG" || a.format ==="PNG" || a.format ===" JPEG Thumb")
//  setData(data.filter(a => a.name.endsWith("thumb.jpg")).filter(a => !a.name.endsWith("_ia_thumb.jpg")))
// const arr1 = data.filter(a => a.format === "JPEG" || a.format === "PNG")
// console.log(arr1)
// console.log(arr);
// const arr1 = arr
console.log(data)
 return (
  <div>
   <h2>{id}</h2>
   <div className="img">
   
  {data.map(a => <DrawUnit key={a.md5} id={id} name={a.name}  original={a.original}/>)}
    </div>
    <button onClick={() => setCount(count -1)}> - </button>
  <button onClick={() => setCount(count +1)}> + </button>
  </div>
 )
}

// {data  ? <DrawUnit key={data[count].md5} id={id} name={data[count].name}  original={data[count].original}/> : <h1>loading...</h1>}