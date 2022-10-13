import { useState } from "react";
import "../style/itemDetail.css";
import ItemCount from './ItemCount';

 const ItemDetail = ({data}) =>{


    const onAdd = (cantidad )=>{
        console.log(`compraste ${cantidad} unidades`);
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={data.img}  className="detailImage" alt=""/>
                <div className="content">
                    <h1>{data.nombre}</h1>
                    <ItemCount inicial={1} stock={20} onAdd={onAdd} ></ItemCount>
                </div>
            </div>
            
        </div>
       
    );
}
export default ItemDetail;