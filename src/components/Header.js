import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";


function Header() {
 return (
  <div className="cabeza">


   <Link className="linkos " to="/">
    <h1>Lucas y su<br/> computadora</h1>
    
    </Link>

      

  </div>
 )
}

export default Header
