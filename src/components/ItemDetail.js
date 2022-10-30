import "../style/itemDetail.css";
import ItemCount from './ItemCount';
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

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
                    <h4>{data.price} $</h4>
                    <p>{data.description} </p>

                    {
                        goTocart?  <Button variant="secondary"><NavLink  to='/cart'>Terminar Compra</NavLink ></Button>  :  <ItemCount inicial={1} stock={20} onAdd={onAdd} />
                    }
                </div>
            </div>
            
        </div>
       
    );
}
export default ItemDetail;  