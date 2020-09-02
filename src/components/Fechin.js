// import React from "react"
import React, { useState, useEffect } from 'react'

export default function Fechin( id ) {

 const [data, setData] = useState([]);
 useEffect(() => {
   async function fetchData() {
     const response = await fetch(
       `https://archive.org/metadata/${id}`);
     const datas = await response.json();
     setData(datas.files)
   }

 
  fetchData();
  // data(files)
  // console.log(datas)

 }
, [id])
 // console.log(data[2])
 return data.filter(a => a.name.endsWith(".flac"))
}