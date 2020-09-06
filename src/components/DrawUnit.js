import React, { useState } from 'react'
import { Link } from "react-router-dom"


function DrawUnit({ id, name, original }) {

  const [ids, setIds] = useState(`https://archive.org/download/${id}/${name}`)
  return (
    <div>
      <div >
        <img className={ids === `https://archive.org/download/${id}/${name}` ? "img__unit" : "img__exp"}
          onClick={
            ids === `https://archive.org/download/${id}/${name}` ?
              () => setIds(`https://archive.org/download/${id}/${original}`) :
              () => setIds(`https://archive.org/download/${id}/${name}`)
          }
          src={ids}
          alt={id} />

      </div>
    </div>
  )
}

export default DrawUnit
