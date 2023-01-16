import React from 'react';
import { Link } from "react-router-dom";
import "./cartWidget.css";

function CartEmpty() {
  return (
    <div className='contenedorVacio'>
        <div>
            <h3>Tu carrito se encuentra vacío</h3>
            <Link to="/" className='BtnComprar'>Ir a Comprar </Link>
        </div>
        

    </div>
  )
}

export default CartEmpty