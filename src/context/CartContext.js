import React, {useState, useContext} from 'react'
const cartContext= React.createContext([]);
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    const addProduct = (item, cantidad) =>{
     if(isInCart(item.id)){
        setCart(cart.map(product =>{
            return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
        }));
     } else {
        setCart([...cart, { ...item, cantidad}]);
     }

    }

    const totalPrice = () =>{
        return cart.reduce((prev,act) => prev + act.cantidad * act.price, 0);
    } 


    const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.cantidad,0);
    
    const clearCart = () =>setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id)? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    

    return (
        <cartContext.Provider value = {{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </cartContext.Provider>

    )
}
export default CartProvider;