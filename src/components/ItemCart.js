import { useCartContext } from '../context/CartContext'
import '../style/itemCart.css'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className='itemCart'>
            <img src = { product.img} alt ={product.title}/>
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio und.: {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price} </p>
                <button onClick={() => removeProduct( product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart