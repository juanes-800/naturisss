import { Button } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext'
import '../style/itemCart.css'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className='itemCart'>
            <img src = { product.img} alt ={product.title}/>
            <div>
                <p>{product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio und: {product.price}</p>
                <p>Subtotal: {product.cantidad * product.price}$</p>
                <Button variant="secondary" onClick={() => removeProduct( product.id)}>Eliminar</Button>
            </div>
        </div>
    )
}
export default ItemCart