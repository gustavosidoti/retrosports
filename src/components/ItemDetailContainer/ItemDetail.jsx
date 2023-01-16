import React from "react";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount/ItemCount";
import BtnDetailPanel from "./BtnDetailPanel/BtnDetailPanel";
import { cartContext } from "../../storage/cartContext";
import "./itemdetail.css";

const ItemDetail = ({ producto }) => {
  const [countInCart, setCountInCart] = useState(0);
  const [stock, setStock] = useState(producto.stock);

  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    setStock(stock - count);

    setCountInCart(count);

    addToCart(producto, count);
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={producto.img} alt={producto.name} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.name}</h1>
        <small>Categoría: {producto.category}</small>
        <h4 className="priceTag">Precio: USD {producto.price}</h4>
        <h5 className="priceTag">Stock: {stock} unidades</h5>
      </div>
      {
        /* ocultar el itemCount y mostrar un Link al carrito */
        stock > 0 && !countInCart ? (
          <ItemCount onAddToCart={handleAddToCart} stock={producto.stock} />
        ) : (
          <BtnDetailPanel></BtnDetailPanel>
        )
      }
    </div>
  );
};

export default ItemDetail;
