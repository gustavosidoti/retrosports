import React, {useContext} from 'react';
import { cartContext } from '../storage/cartContext'; 


// 1- traer el array del context
// 2- desglosar o mapear los ítems

const CartWidgetList = () => {

const {cart, removeItem} = useContext(cartContext);


// 3- render condicional -> "carrito vacío", volvé al inicio

  return (
    <div>
      <h1>Tu carrito</h1>
      {
        cart.map( producto =>
          <div>
            <h3>{producto.nombre}</h3>
            <p>cantidad: {producto.count}</p>
            <p>$ {producto.precio}</p>
            <h4>total: ${}</h4>
            <button>Eliminar</button>
          </div>
          )
      }
    </div>
  )
}

export default CartWidgetList