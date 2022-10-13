
import ItemDetail from "./ItemDetail";
import React,{useEffect, useState} from "react";
import {product} from './producto';
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{
    const [data, setData] = useState({});
    const {detalleId} = useParams()
    
    useEffect(()=> {
        const getData = new Promise(resolve =>{
            resolve(product); 
        });
         getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
        
    },[detalleId]);
    return(
        <ItemDetail data={data}/>
           
    );
}
export default ItemDetailContainer;