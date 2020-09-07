import React, { useState, useEffect } from 'react';
import DrawsElement from "./DrawsElement"


function Draws() {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json`);
      const datas = await response.json();
      setData(datas.response.docs.filter(a => a.collection[0] === "opensource_image"));
    }
    fetchData();
  }
    , [])

  return (
    <div style={{zIndex:"0"}}>
      <h1>DRAWS 図面</h1>
  

      <div className="draws__buttons">
      <button className="btn" onClick={() => setCounter(counter > 0 ? (counter -1): (data.length - 1))}> - </button>
      <button className="btn" onClick={() => setCounter((counter + 1)% data.length)}> + </button>
     {"..."} <h2 >   {data ? data[counter].identifier: ""}   </h2>
      </div>
      <div >

        {data ? <DrawsElement key={data[counter].identifier} id={data[counter].identifier} /> : <h1>loading...</h1>}

        <br />
        <br />
      </div>
    </div>
  )
}

export default Draws

