
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


    return(
        <>
        <p>{props.greeting}</p>
        <ItemList data={data}></ItemList>
        </>
    )
        
}
export default ItemListContainer;