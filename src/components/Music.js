import React, { useState, useEffect } from 'react'
import MusicElement from "./MusicElement"


function Music({ida,lis,src}) {
  const [data, setData] = useState([]);
  const [llave, setLlave] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/advancedsearch.php?q=creator%3A%22lucas+y+su+computadora%22&fl%5B%5D=collection&fl%5B%5D=identifier&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=300&page=1&output=json`);
      const datas = await response.json();
      setData(datas.response.docs);
    }
    fetchData();
  }
    , [])

  const arr = data.filter(a => a.collection[0] === "opensource_audio")

  //.filter(a => a.identifier !== "randomcycle")
  // console.log(arr) onClick={()=> setLlave(llave === true ? false : true) }
  console.log(llave) 
  return (
  
  <div>

   <div className="music__tswitch"> <h2 >MUSIC 音楽  </h2>
   <div className="onoffswitch">
    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" 
    onClick={()=> setLlave(llave === true ? false : true)}/>
    <label className="onoffswitch-label" for="myonoffswitch">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>
</div>
      
      </div>
    <div className="music">
      {arr.map(a => <MusicElement
        key={a.identifier}
        id={a.identifier}
        title={a.title}
        ids={(ids) => ida(ids)}
        list={(list) => lis(list)}
        song={(song) => src(song)}
        llave={llave}
      />)}
    </div>
  </div>
  )
}

export default Music
