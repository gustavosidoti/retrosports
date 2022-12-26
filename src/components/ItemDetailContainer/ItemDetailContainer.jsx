import React from 'react';
import{ useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import ItemDetail from '../ItemDetailContainer/ItemDetail';

const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState({});

    const {id} = useParams();

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() =>{
        
            promesa.then(
                setProducto(data.find((item) => item.id === parseInt(id)))     
            );
        
    }, [id]);

    return (
        <>
        <div> 
         <ItemDetail producto={producto}/>    
        </div>
        </>
    );
  
}

export default ItemDetailContainer