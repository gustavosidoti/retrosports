import React from "react";
import{ useState, useContext} from 'react';
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from '../../storage/cartContext';
import "./itemdetail.css";

const ItemDetail = ({ producto }) => {

  const [countInCart, setCountInCart] = useState(0);
  

  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count){
    // 1. Guardar la cantidad en un estado
     setCountInCart(count);
    // 2. ocultar el itemCount
    addToCart(producto, count);
    
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={producto.img} alt={producto.name} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.name}</h1>
        <h4 className="priceTag">USD {producto.price}</h4>
      </div>
      {/* 3. ocultar el itemCount y mostrar un Link al carrito */
      !countInCart?
      <ItemCount onAddToCart={handleAddToCart}/>
      :
      <Link to="/cartWidgetList">Ir al carrito</Link>
      }
    </div>
  );
};

export default ItemDetail;
