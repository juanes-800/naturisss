import '../style/navBar.css';
import {useCartContext} from '../context/CartContext'

 export const  CartWidget = () => {
    const {totalProducts} = useCartContext();
    
    return(
        <>
        <span> <i className="bi bi-cart3" ></i></span>
        <span>{totalProducts() || ''}</span>
        </>

        
    )
}
export default CartWidget;