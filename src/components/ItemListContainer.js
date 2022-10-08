import ItemContador from './ItemCount';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';
import {product} from './producto'

const ItemListContainer = (props) =>{
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = new Promise(resolve =>{
            resolve(product); 
        });
        getData.then(res => setData(res));
    },[]);

    const onAdd = (cantidad )=>{
        console.log(`compraste ${cantidad} unidades`);
    }
    return(
        <>
        <p>{props.greeting}</p>
        <ItemContador inicial={1} stock={20} onAdd={onAdd} ></ItemContador>
        <ItemList data={data}></ItemList>

        </>
    )
        
}
export default ItemListContainer;