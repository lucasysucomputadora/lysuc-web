import React from "react"

const Parragraf = (props) => {
    return (<div style={{ border:"solid", width : "300px", textAlign:"center"}}>
        <input 
            type="checkbox"
            checked={props.item.vitalidad}
            onChange={()=> props.handleData(props.item.id)} />
        <p style={props.item.vitalidad? {fontSize : "50px"} : {fontSize : "10px"}}>{props.item.nombre}</p>

    </div>
        

    )
}

export default Parragraf