import React, { useState, useEffect } from 'react';
import DrawUnit from "./DrawUnit";

export default function DrawsElement({ id, ids }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://archive.org/metadata/${id}`);
      const datas = await response.json();
      setData(datas.files.filter(a => a.name.endsWith("thumb.jpg")).filter(a => !a.name.endsWith("_ia_thumb.jpg")))
    }
    fetchData();
  }
    , [id])

  return (
    <div>
      <h2>{id}</h2>
      <div className="img">

        {data.map(a => <DrawUnit key={a.md5} id={id} name={a.name} original={a.original} />)}
      </div>

    </div>
  )
}
