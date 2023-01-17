import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// importamos el context
import { cartContext } from "../../storage/cartContext";
import "./cartWidget.css";

function CartWidget() {
  // inicializamos con el contenido actual del context
  const valueContext = useContext(cartContext);
  const condicion = valueContext.totalItemsInCart() > 0;
  return (
    <div style={{ fontSize: "2em", color: "#FF5733", textDecoration: "none" }}>
      <FontAwesomeIcon icon={faCartShopping} className="enlaces" />
      {condicion && <span>{valueContext.totalItemsInCart()}</span>}
    </div>
  );
}

export default CartWidget;
