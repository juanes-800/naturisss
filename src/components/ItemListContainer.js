import ItemContador from './ItemCount';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';
import {product} from './producto'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) =>{
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect(()=> {
        const getData = new Promise(resolve =>{
            resolve(product); 
        });
        if(categoriaId){
            getData.then(res => setData(res.filter( product => product.category === categoriaId)));  
        } else{
            getData.then(res => setData(res));    
        }

    },[categoriaId]);

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