import React from "react";
import { Link } from "react-router-dom";


const Item = ({producto}) => {
    return (
        <>
            <div> 
            {producto.nombre}
            </div>
            <Link to={`/item/${producto.id}`}> 
                <button>Ir Al Detalle</button> 
            </Link>
        </>
    )
};

export default Item