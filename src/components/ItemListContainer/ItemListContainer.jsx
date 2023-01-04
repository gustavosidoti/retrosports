import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { data } from "../../data/data";
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {categoryId} = useParams();

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() =>{
        if(categoryId === undefined) {
            promesa.then(setProductos(data));
            setIsLoading(false);
        } else {
            promesa.then(setProductos(data.filter(item => item.categoria === categoryId)));
            setIsLoading(false);
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