
import ItemDetail from "./ItemDetail";
import React,{useEffect, useState} from "react";
import {product} from './producto'



const ItemDetailContainer = () =>{
    const [data, setData] = useState({});

    useEffect(()=> {
        const getData = new Promise(resolve =>{
            resolve(product.find( (element) => (element.id === 2))); 
        });
        getData.then(res => setData(res));
    },[]);
    return(
        <ItemDetail data={data}/>
           
    );
}
export default ItemDetailContainer;