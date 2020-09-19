import React, { useState, useEffect } from 'react';
import DrawsElement from "./DrawsElement"


function Draws({cnt, count}) {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json`);
      const datas = await response.json();
      setData(datas.response.docs.filter(a => a.collection[0] === "opensource_image"));
        

    }
    fetchData();
    // return function cleanup() {
    //   // console.log(data)
    //   setData(null)
    // }
  }
    , [])
 
    const handleClickRest = () => setCounter(counter > 0 ? (counter -1): (data.length - 1))
    const handleClickPlus = () => setCounter((counter + 1)% data.length);
    const pico = () => cnt((counter + 1) % data.length )

  return (
    <div style={{zIndex:"0"}}>
      <h2>DRAWS 図画</h2>
  

      <div className="draws__buttons">
      <button className="btn" onClick={() => {handleClickRest(); pico()}}> - </button>
      <button className="btn" onClick={() =>{handleClickPlus(); pico() }}> + </button>
     {"..."} <h3 >   {data ? data[counter].identifier: ""}   </h3>
      </div>
      <div >

        {data ? <DrawsElement key={data[counter].identifier} id={data[counter].identifier} /> : <h3>loading...</h3>}

        <br />
        <br />
      </div>
    </div>
  )
}

export default Draws

