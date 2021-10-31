import React, { useState, useEffect } from 'react'

function MusicElement({ id, song, list, ids, title }) {

  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/metadata/${id}`);
      const datas = await response.json();
      setData(datas.files);
      setDate(datas.metadata.date)
    }
    fetchData();
  }
    , [id])
  const arr = data.filter(a => a.name.endsWith(".flac"))
  console.log(arr)


  return (
    <div onClick={() => list(arr)}>
      <div onClick={() => ids(id)}>
        <div className="music__title"
          onClick={() => song(0)}>
          <h3 >{title} <div style={{fontSize: "13px"}}>{date}</div></h3>
        </div>
        <div className="music__element">
          {arr.map(a => <p className="music__unit"
            key={a.name}
            onClick={() => song(arr.indexOf(a))} >{a.name.substr(0, a.name.length - 5)}</p>)}
        </div>
      </div>
    </div>
  )
}

export default MusicElement
