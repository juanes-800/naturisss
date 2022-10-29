import { useCartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Carry from "./Carry";

const Cart = () =>{
    const{cart, totalPrice,contextUsed, removeProduct} = useCartContext(); 

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
         removeProduct()
    }

    
    
   
    if(cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <NavLink to='/'> Realizar compras</NavLink>
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
        <button onClick={handleClick}
        >Generar Compra</button>
      

        </>
    )
}
export default Cart