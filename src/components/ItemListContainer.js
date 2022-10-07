import ItemContador from './ItemCount';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';

const product = [ 
    {id:1, nombre:'Te verde', precio:'24500', cantidad:1,img:'../img/1.webp'},
    {id:2, nombre:'Te forma', precio:'14800', cantidad:1, img:'img/2.webp'},
    {id:3, nombre:'Te relaxnat', precio:'14800', cantidad:1, img:'../img/3.webp'},
    {id:4, nombre:'Biotin', precio:'61000', cantidad:1, img:'../img/4.webp'},
    {id:5, nombre:'Clorofila purrcell', precio:'20850', cantidad:1, img:'../img/5.webp'},
    {id:6, nombre:'Esencia ansioff', precio:'12500', cantidad:1, img:'../img/6.webp'},
    {id:7, nombre:' Te meishen limón', precio:'29000', cantidad:1, img:'../img/7.webp'},
    {id:8, nombre:'Levadura de cerveza', precio:'40000', cantidad:1, img:'../img/8.webp'},
    {id:9, nombre:'Garcinia', precio:'50000', cantidad:1, img:'../img/9.webp'},
    {id:10,nombre:'Echinacea', precio:'60000', cantidad:1, img:'../img/10.webp'},
    {id:11, nombre:'Vitacer', precio:'70000', cantidad:1, img:'../img/11.webp'},
    {id:12, nombre:'Amalaki', precio:'20000', cantidad:1, img:'../img/12.webp'},
]; 

const ItemListContainer = (props) =>{
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve( product);
            },)
            
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