import React,{useState, useEffect} from 'react';
import DrawsElement from "./DrawsElement"
import Img from "./Img"

function Draws() {
 const [data, setData] = useState([]);
 const [draw, setDraw] = useState();
 // const [collection, setCollection] = useState([]);
 useEffect(() => {
   async function fetchData() {
     const response = await fetch(
       `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json`);
     const datas = await response.json();
     // console.log(datas)
     setData(datas.response.docs);
     // setCollection(data.collection)
   }
   
   // https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&sort%5B%5D=addeddate+asc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json
  fetchData();
  // data(files)
  // console.log(datas)

 }
, [])

const arr = data.filter(a => a.collection[0] === "opensource_image")
 return (
  <div>
   <h1>DRAWS 図面</h1>
   {/* <Img id={draw} onClick={() => console.log(draw)}/> */}
   <div >
   {arr.map(a => <DrawsElement key={a.identifier} id={a.identifier} />)}
   
   </div>
  </div>
 )
}

export default Draws
