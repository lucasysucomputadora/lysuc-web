import React from 'react';
import {Link} from "react-router-dom"
import "./SidebarElement.css"

function SidebarElement({title}) {
 return (
  <div className="sidebar__title">
   <Link  to={`/${title}`} className="links">
   {title} 
   </Link>
  </div>
 )
}

export default SidebarElement
