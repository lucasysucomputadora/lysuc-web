import React from 'react'
import SidebarElement from "./SidebarElement"
import "./Sidebar.css"

function Sidebar() {
 return (
  <div className="side">
   <SidebarElement title="music"/>
   <SidebarElement title="draws"/>
   <SidebarElement title="videos"/>
  </div>
 )
}

export default Sidebar
