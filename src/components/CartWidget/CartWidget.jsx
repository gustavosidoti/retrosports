import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div className="App" style={{fontSize: "2em", color:"#FF5733"}}>
    <FontAwesomeIcon icon={faCartShopping} />
    </div>
  )
}

export default CartWidget