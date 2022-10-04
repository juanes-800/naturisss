import '../style/navBar.css';
const  CartWidget = () => {
    return(
     <button  className="carrito"><i className="fas fa-shopping-cart "></i><span id="contadorCarrito">0</span></button>
    )
}
export default CartWidget;