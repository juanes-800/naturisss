import { useCartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
const Cart = () =>{
    const{cart, totalPrice} = useCartContext();
   
    if(cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <NavLink to='/'> Realizar compras</NavLink>
            </>
        )
    }
    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p> total: {totalPrice()}</p>

        </>
    )
}
export default Cart