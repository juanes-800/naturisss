import { useCartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Carry from "./Carry";
import { Button } from "react-bootstrap";

const Cart = () =>{
    const{cart, totalPrice,contextUsed, clearCart} = useCartContext(); 

    const order = {
        buyer:{
            name: contextUsed.nombre,
            email: contextUsed.email,
            phone: contextUsed.telefono,
            password: contextUsed.contraseña
        },
        items: cart.map(product =>({id: product.id, name: product.name, price: product.price, cantidad:product.cantidad})) ,
        total: totalPrice(),
    }
    const usuarios = {
        name: contextUsed.nombre,
        email: contextUsed.email,
        phone: contextUsed.telefono,
        password: contextUsed.contraseña
    }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
         .then(({id}) => console.log( 'id compra:',id))
         const ordenUsuarios = collection(db, "usuarios")
         addDoc(ordenUsuarios, usuarios)
         .then(({id}) => console.log("id compra:", id))
         clearCarts()
         
    }

    const clearCarts = ()=>{
        clearCart()
    }
    
   
    if(cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
             <Button variant="secondary"><NavLink to='/'> Realizar compras</NavLink></Button>
            </>
        )
    }
    if (contextUsed.length === 0)
        return(
            <Carry>

            </Carry>
        )
    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p> total: $ {totalPrice()}</p>

        <div>
        <Button variant="secondary" onClick={handleClick}>Generar Compra</Button>
        <Button variant="secondary" onClick={clearCarts}> Borrar carrito</Button>
        </div>

        </>
    )
}
export default Cart