import React from 'react';
import { Link } from "react-router-dom";
import "./btndetailpanel.css";

function BtnDetailPanel() {
  return (
    <div>
       <Link to="/cartWidgetList" className="fccBtn">Ir al carrito</Link>
       <Link to="/" className="SCBtn">Seguir comprando</Link>  
    </div>
  )
}

export default BtnDetailPanel