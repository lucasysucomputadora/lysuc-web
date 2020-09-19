import React,{useState, useEffect} from 'react';

function VideoElement({ id, title, img, kind, pause}) {
     const [ids, setIds] = useState("")
    
     return (
          <div className="card">
               <div className="titulo" onClick={() => setIds("")}>
                    {ids === "" ? title : <h3 style={{backgroundColor:"#333"}} >closeVideo</h3>} 
               </div>
               <div className={"formating"}  onClick={(id) => setIds(id)}>
                   {ids === ""? <img src={img} alt={id} onLoad={() => pause(false)} />:
                    <iframe 
                   className={"formating2"} 
                   src={kind === "youtube#searchResult"?`https://www.youtube.com/embed/${id}?autoplay=1`:`https://player.vimeo.com/video/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay onLoad={() => pause(true)}></iframe> 
                   } 
               </div>
          </div>
     )
}

export default VideoElement

