import React from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import "./itemlist.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlist">
      <Flex>
        {productos.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </Flex>
    </div>
  );
};

export default ItemList;
