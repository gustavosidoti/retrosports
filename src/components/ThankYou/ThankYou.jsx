import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import { cartContext } from '../../storage/cartContext';
import './thankyou.css';

function ThankYou() {

    const {orderID, name} = useParams();
    const {emptyCart} = useContext(cartContext);

    emptyCart();

  return (
    <div className='Grax'>
        <h1>{name} Gracias por tu compra</h1>
        <h4>Se generó la orden correctamente ✅ </h4>
        <p> tu número de ticket es: {orderID} </p>  
    </div>
  )
}

export default ThankYou