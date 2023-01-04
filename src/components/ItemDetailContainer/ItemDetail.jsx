import React from "react";
import{ useState, useContext} from 'react';
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from '../storage/cartContext';
import "./itemdetail.css";

const ItemDetail = ({ producto }) => {

  const [countInCart, setCountInCart] = useState(0);
  

  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count){
    // 1. Guardar la cantidad en un estado
     setCountInCart(count);
     addToCart(producto, count);
     
    // 2. ocultar el itemCount
    
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.nombre}</h1>
        <h4 className="priceTag">USD {producto.precio}</h4>
      </div>
      <ItemCount onAddToCart={handleAddToCart}/>

      <button onClick={() => removeItem(producto.id)}>X</button>
      <Link to="/cartWidgetList">Ir al carrito</Link>
    </div>
  );
};

export default ItemDetail;
