import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { createBuyOrderWithStockControl } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./cartWidget.css";
import CartEmpty from "./CartEmpty";
import CheckoutForm from "./InputForm/CheckoutForm";

const CartWidgetList = () => {
  let navigateTo = useNavigate();

  const { cart, removeItem, emptyCart, totalPriceInCart } =
    useContext(cartContext);
  const [order, setOrder] = useState(false);

  function handleCheckout(buyerData) {
    const order = {
      buyer: buyerData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderWithStockControl(order).then((id) => {
      setOrder(id);

      navigateTo(`/thankyou/${id}/${buyerData.name}`);
    });
  }

  const eliminarItem = (product_id) => {
    removeItem(product_id);
  };

  const vaciarCarro = () => {
    emptyCart();
  };

  // render condicional -> "carrito vacío", redirecciona al inicio

  if (cart.length == 0) {
    return <CartEmpty></CartEmpty>;
  }

  return (
    <div>
      <div className="container">
        <h1>Tu carrito</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Elemento</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.img} alt={item.title} />
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    className="btnRemove"
                    onClick={() => eliminarItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
                <th>$ {item.price * item.count}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onButtonTouch={vaciarCarro} color="red">
          Vaciar carrito
        </Button>
        <div>
          <h4>El total de tu compra es $ {totalPriceInCart()} </h4>
          <CheckoutForm onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default CartWidgetList;
