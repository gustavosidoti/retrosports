import React from "react";
import "./itemdetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.nombre}</h1>
        <h4 className="priceTag">USD {producto.precio}</h4>
      </div>
    </div>
  );
};

export default ItemDetail;
