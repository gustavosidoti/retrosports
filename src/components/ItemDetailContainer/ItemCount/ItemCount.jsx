import React, { useState } from "react";
import Button from "../../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
        
      <div className="itemcount_control">
        <Button color="red" onButtonTouch={handleSubstract}>
          -
        </Button>
        <span>{count}</span>
        <Button color="green" onButtonTouch={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <button className="BtnAgregar"
          disabled={(stock == 0)}  
          onClick={()=> onAddToCart(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;