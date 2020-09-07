import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function DrawUnit({ id, name, original }) {

  const [ids, setIds] = useState(`https://archive.org/download/${id}/${name}`)
  const [cla, setCla] = useState(`https://archive.org/download/${id}/${name}`)

  return (
    <div>
      <div className="img__container">
        {ids === `https://archive.org/download/${id}/${original}` && cla === `https://archive.org/download/${id}/${original}` ?
          <div className="loading">
            loading...
          </div> : <div></div>}
        <img className={cla === `https://archive.org/download/${id}/${original}` ? "img__unit" : "img__exp"}
          onClick={
            ids === `https://archive.org/download/${id}/${name}` ?
              () => setIds(`https://archive.org/download/${id}/${original}`) :
              () => setIds(`https://archive.org/download/${id}/${name}`)
          }
          onLoad={ids === `https://archive.org/download/${id}/${name}` ?
            () => setCla(`https://archive.org/download/${id}/${original}`) :
            () => setCla(`https://archive.org/download/${id}/${name}`)}
          src={ids}
          alt={id} />

      </div>
    </div>
  )
}

export default DrawUnit

// cla === `https://archive.org/download/${id}/${name}` ? "img__unit" : 