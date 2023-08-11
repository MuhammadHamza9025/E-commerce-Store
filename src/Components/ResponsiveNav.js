import React, { useState } from 'react'
import Res from './Res.css'
import { Link } from 'react-router-dom';


export default function ResponsiveNav({size}) {
    const [showmedia,set]=useState(false);
  return (
    <nav className="main">
        <div className="logo">
            <h3><span>M</span>uhammad<span>H</span>amza</h3>
</div>
<div className="menu-link">
    <ul className={showmedia ? "active" : "ul"}>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="About">About</Link></li>
        <li><Link to="Services">Products</Link></li>
        
    </ul>
  
</div>
<div className="carticon"><Link to="Contact"><i className="fa fa-shopping-cart"></i>
        
        <sup>{size}</sup></Link></div>

 
        <div className="hammenu" onClick={()=>set(!showmedia) }>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
    </nav>
    
  )
}
