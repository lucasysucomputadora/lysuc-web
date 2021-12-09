import React,{useState, useEffect} from 'react';

function VideoElement({ id, title,  pause}) {
     const [ids, setIds] = useState("")
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
       const vid = data.filter(a => a.name.endsWith(".mp4"))
       
//	console.log(vid);
     return (
          <div className="card">
               <div className="titulo" onClick={() => setIds("")}>
                    {ids === "" ?
			  title :
			  <h3 
			    style={{backgroundColor:"#333"}} >
			    closeVideo
			    </h3>
		    } 
               </div>
               <div 
	     	  className={"formating"}  
	          onClick={(id) => setIds(id)}>
                   {ids === ""? 
			   <img width={"400"} height={"200"} src={`https://archive.org/download/${id}/__ia_thumb.jpg`}
			        alt={id} 
			        onLoad={() => pause(false)} />:
			   <div className={"v"}>
          		   <video
			   	width={"100%"}
	                        src={`https://www.archive.org/download/${id}/${vid[0].name}`} 
			        controls/>
			   </div>
			   //         <iframe 
            //       className={"formating2"} 
            //       src={`https://www.archive.org/embed/${id}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay onLoad={() => pause(true)}></iframe> 
                   	} 
               </div>
          </div>
     )
}

export default VideoElement

