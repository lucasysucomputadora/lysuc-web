import React from 'react'

function Img({id}) {
 // const [ids, setIds] = useState(id)
 return (
  <div>
   <img src={id} alt={id} ></img>
  </div>
 )
}

export default Img
