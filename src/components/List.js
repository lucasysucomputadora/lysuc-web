import React from 'react';
const List = (props)=> {
    return (
        
<div className="pringado" style={{textAlign: "center"}}>
    <input  type="checkbox"/>
    <p>{props.mambos.names}</p>
</div>

    )
}
export default List
