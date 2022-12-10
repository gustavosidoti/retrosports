import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { data } from "../../data/data";
import {useParams} from "react-router-dom";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() =>{
        if(categoryId === undefined) {
            promesa.then(setProductos(data));
        } else {
            promesa.then(setProductos(data.filter(item => item.categoria === categoryId)));
        }
    }, [categoryId]);

    

    return (
        <div> 
         <ItemList productos={productos}/>    
        </div>
    );
};

export default ItemListContainer