import React from "react";
import Item from "../Item/Item";

const ItemList = ({productos}) => {


    return (
        <div> 
        {productos.map(producto => (
            <Item producto= {producto} key={producto.id}/> 
        ))}
            
        </div>
    );
};

        

export default ItemList