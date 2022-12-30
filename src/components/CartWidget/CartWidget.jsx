import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
// importamos el context
import { cartContext } from "../storage/cartContext";
import "./cartWidget.css";

function CartWidget() {
  
  // inicializamos con el contenido actual del context
  const valueContext = useContext(cartContext);
  const cantidad = valueContext.totalItemInCart();
  return (
    <div className="App" style={{fontSize: "2em", color:"#FF5733"}}>
    <FontAwesomeIcon icon={faCartShopping} />
    {cantidad}
    </div>
  )
}

export default CartWidget