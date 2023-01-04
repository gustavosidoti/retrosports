import React from 'react';
import{ useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import Loader from '../Loader/Loader';


const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() =>{
        
            promesa.then(
                setProducto(data.find((item) => item.id === parseInt(id))),
                setIsLoading(false)   
            );
        
    }, [id]);
    

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