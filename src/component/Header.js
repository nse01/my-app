import React from "react";
import {Link} from "react-router-dom";

export default function Header (){


  return(
    <div>
      <h1 style={{marginBottom:15}}><Link to="/">Home</Link></h1>
    </div>
  )
}