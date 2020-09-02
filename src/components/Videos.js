// import React from 'react';
import React, { useState} from 'react'
import VideoElement from "./VideoElement";
import data from "../data.json"; 
import "../App.css"



function Videos() {

  const [vid, setVid] = useState()
  return (
    <div >
    
   <h1>VIDEO ビデオ</h1>
  
 
   <div className="videos">
   {data.items.map((a)=> {return <VideoElement 
    key={a.id.videoId}
    id={a.id.videoId} 
    title={a.snippet.title} 
    img={a.snippet.thumbnails.medium.url}
    ids={(vid)=> setVid(vid) } />})}
   </div>
   </div>
 )
}

export default Videos

// const [VideoElementData,setVideoElement] = useState([]);
// const fetchData = () => {
  
  //   fetch("https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCW8lccrAIZTuob48xn550jg&maxResults=100&order=date&key=AIzaSyAk1DgKV8PTszvK8wwRWnRHvVRqgSG96wo")
  //   .then(res =>res.json())
  //   .then(data =>{
    //     // console.log(data)
//     setVideoElement(data.items)
//   })

// }
// fetchData() 



// export default class Videos extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       error:null,
//       isLoaded: false,
//       post:[]
//     }
//   }

//   componentDidMount() {
//    // I will use fake api from jsonplaceholder website
//    // this return 100 posts 
//    fetch("https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCW8lccrAIZTuob48xn550jg&maxResults=100&order=date&key=AIzaSyAk1DgKV8PTszvK8wwRWnRHvVRqgSG96wo")
//    .then( response => response.json())
//    .then(
//        // handle the result
//        (result) => {
//            this.setState({
//                isLoaded : true,
//                post : result
//            });
//        },
  
//        // Handle error 
//        (error) => {
//            this.setState({
//                isLoaded: true,
//                error
//            })
//        },
//    )
//   }
  
//   render() {
//     const data = this.state.post

//     return (
//       <div>
//         {console.log(data.items.id.videoId)}
//       </div>
//     )
//   }
// }


// async function Testing(url =""){
//  const response = await fetch(url);
//  return response.json();
// }
// let urls = "https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCW8lccrAIZTuob48xn550jg&maxResults=100&order=date&key=AIzaSyAk1DgKV8PTszvK8wwRWnRHvVRqgSG96wo";

// let datas = Testing(urls);
// console.log(datas)

// let datas = fetch(urls)
//   .then(function (response) {
//     return response.json()
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
//   console.log(datas)

// const [value,setValue] = useState("")

// console.log(VideoElementData)