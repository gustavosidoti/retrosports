import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";


const Item = ({producto}) => {

    /*let stylePrice = {
        color: producto.discount? "green" : "grey"
    }*/

    let classNamePrice = producto.discount? "offerTag" : "priceTag"
    let classNameNew = producto.newProduct && "item-new";
    return (
        <Link to={`/item/${producto.id}`} style={{ textDecoration: 'none', color:"black" }}>
            <div className="card">
                <ToggleButton icon="♥" />
                <div className="card-img">
                    <img src={producto.img} alt="img producto" />
                </div>
                <div className="card-detail">
                    <h5>{producto.name}</h5>
                    <h4 className={classNamePrice}>
                        USD {producto.price}
                        <br />
                        {producto.discount !== 0 && <small>{producto.discount}% OFF</small> }
                        <br />
                        {producto.newProduct && <small className={classNameNew}> new</small> }
                    </h4> 
                </div>
            </div>
        </Link>    
    );
};

export default Item