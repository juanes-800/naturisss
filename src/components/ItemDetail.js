import "../style/itemDetail.css";
import ItemCount from './ItemCount';
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

 const ItemDetail = ({ data }) =>{
    const[goTocart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (cantidad)=>{
        setGoToCart(true);
        addProduct(data, cantidad);
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={data.img}  className="detailImage" alt=""/>
                <div className="content">
                    <h1>{data.name}</h1>
                    <p>{data.price} $</p>
                    <p>{data.description} </p>

                    {
                        goTocart? <button className="boton contador"><NavLink  to='/cart'>Terminar Compra</NavLink ></button> :  <ItemCount inicial={1} stock={20} onAdd={onAdd} />
                    }
                </div>
            </div>
            
        </div>
       
    );
}
export default ItemDetail;