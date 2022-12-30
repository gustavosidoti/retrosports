import { createContext, useState } from 'react';


// 1. Iniciamos nuestro Context
const cartContext = createContext([]); // inicializamos un array vacio puede ser objeto
// 2. Extraemos el componente Provider
const Provider = cartContext.Provider; // qué componentes van a acceder al context

// 

// 3. Creamos nuestro propio provider
function CartContextProvider(props){

    let [cart, setCart] = useState([]);
    let saludo = "Hola desde context";

    function addToCart(item, count){

        // Creo una copia del carro
        const newCart = [...cart];

        // No permitir duplicados en el carro con some: retorna boolean
        //let isItemInCart = cart.some( itemInContext => itemInContext.id === item.id )

        // No permitir duplicados en el carro con findIndex: retorna la posición sino -1
        let indexItemInCart = cart.findIndex (itemInContext => itemInContext.id === item.id )
        let isItemInCart = indexItemInCart !== -1;


        if ( isItemInCart ){
            // si existe actualizamos la cantidad
            newCart[indexItemInCart].count += count;
            setCart(newCart);

        } else {

        // sino existe lo agregamos    

        // 1- vamos a ver una forma de agregar con map
        // const newCart = cart.map( item => item )

        // 2 - otra forma de llenarlo con spread
        

        /*const newItem = item;
        newItem.count = count; // agrego la propiedad count al objeto
       */ 
        
        newCart.push({...item, count: count});
        setCart(newCart);
        }
    }

    function totalItemsInCart(){
        let totalItemInCart = 0;
        cart.forEach( item => totalItemInCart += item.count );

        return totalItemInCart;

    }

    function totalPriceInCart (){
        // similar a la de los items

    }

    function removeItem (id) {
        // hacer un filter que saque el id recibido

    }

    function emptyCart () {
        setCart([]);
    }

    /*function getQuantityInCart(){
        return (cart.length);
    }*/

    return(
        <Provider value={ {
            cart, 
            saludo,
            addToCart,
            totalItemsInCart,
            totalPriceInCart,
            removeItem,
            emptyCart
            }}>
            {props.children}
        </Provider>
    )

}

export { cartContext, CartContextProvider };