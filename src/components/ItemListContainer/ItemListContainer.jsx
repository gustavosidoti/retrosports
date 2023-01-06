import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";

import { getItems, getItemsCategory } from "../../services/firebase";

import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {categoryId} = useParams();

    

    useEffect(() =>{
        if(categoryId === undefined) {
            getItems().then((respuesta)=> {
            setProductos(respuesta);    
            setIsLoading(false);
            });
        } else {
            getItemsCategory(categoryId).then((respuestaFiltrada) => {
            setProductos(respuestaFiltrada);
            setIsLoading(false);
        });
      } 
    }, [categoryId]);

    if(isLoading){
        return <Loader/>;
    }

    
    return (
        <div> 
         <ItemList productos={productos}/>    
        </div>
    );
    
};

export default ItemListContainer