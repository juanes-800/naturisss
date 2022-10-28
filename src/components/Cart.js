import { useCartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
const Cart = () =>{
    const{cart, totalPrice} = useCartContext(); 

    const order = {
        buyer:{
            name: 'juan esteban Alzate',
            email: 'juanealzate@800gmail.com',
            phone:'3197416825',
            address:'crr24#9a-35'
        },
        items: cart.map(product =>({id: product.id, name: product.name, price: product.price, cantidad:product.cantidad})) ,
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
         .then(({id}) => console.log(id))
    }
    console.log(order)
   
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
        <button onClick={handleClick}>Generar Compra</button>

        </>
    )
}
export default Cart