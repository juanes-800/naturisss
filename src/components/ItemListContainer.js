
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import{getFirestore,collection,getDocs,query, where} from 'firebase/firestore';

const ItemListContainer = (props) =>{
    const [data, setData] = useState([]);
    const {categoriaId} = useParams()
    useEffect(()=> {
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'product');
        
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category','==',categoriaId))
            getDocs(queryFilter)
             .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))))
        } else{
            getDocs(queryCollection)
             .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))))
            
             
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