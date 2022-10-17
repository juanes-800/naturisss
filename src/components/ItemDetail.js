import "../style/itemDetail.css";
import ItemCount from './ItemCount';
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

 const ItemDetail = ({ data }) =>{
    const[goTocart, setGoToCart] = useState(false);

    const onAdd = ()=>{
        setGoToCart(true)
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={data.img}  className="detailImage" alt=""/>
                <div className="content">
                    <h1>{data.nombre}</h1>
                    <p>{data.precio}</p>

                    {
                        goTocart? <button className="boton contador"><NavLink  to='/cart'>Terminar Compra</NavLink ></button> :  <ItemCount inicial={1} stock={20} onAdd={onAdd} />
                    }
                </div>
            </div>
            
        </div>
       
    );
}
export default ItemDetail;