import React from "react";
import { Link } from "react-router-dom";
import "./item.css";


const Item = ({producto}) => {
    return (
        <Link to={`/item/${producto.id}`} style={{ textDecoration: 'none' }}>
            <div className="card">
                <div className="card-img">
                    <img src={producto.imagen} alt="imagen producto" />
                </div>
                <div className="card-detail">
                    <h5>{producto.nombre}</h5>
                    <h4 className="priceTag">USD {producto.precio}</h4> 
                </div>
            </div>
        </Link>    
    );
};

export default Item