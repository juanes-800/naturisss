import React from "react";

export const cartContext= React.createContext([]);

const CartProvider = ({Children}) => {
    return (
        <cartContext.Provider value = 'juan'>
            {Children}
        </cartContext.Provider>

    )
}
export default CartProvider;