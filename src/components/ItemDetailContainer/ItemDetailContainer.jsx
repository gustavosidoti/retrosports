import React from 'react';
import{ useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firebase";
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import Loader from '../Loader/Loader';


const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let {id} = useParams();

    
    async function getData() {
        let respuesta = await getSingleItem(id);
        setProducto(respuesta);
        setIsLoading(false);
    }

    useEffect(() =>{
        
            getData();
        
    }, []);
    

    return (
        <>
        {
        isLoading? 
        <Loader />
         :
         <ItemDetail producto={producto}/>
        }   
        </>
    );
  
}

export default ItemDetailContainer