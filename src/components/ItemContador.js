import '../style/itemContador.css'

import React, { useState, useEffect } from 'react';

const ItemContador = ({inicial, stock, onAdd}) =>{
    const[ contador, setContador] = useState(parseInt(inicial));
    const suma = () => setContador( contador + 1);
    const resta = () => setContador( contador - 1);

    useEffect(()=>{
        setContador(parseInt(inicial))
    },[inicial]);

    return (
        <div className='contador'>
            <button className='boton' disabled={contador <= 1}  onClick= {resta}>-</button>
            <span className='boton'>{contador}</span> 
            <button className='boton' disabled={contador >= stock} onClick= {suma}>+</button>
            <div>
                <button className='boton' disabled={stock <= 0} onClick={ () => onAdd(contador)}  > Agregar alcarrito</button>
            </div>
        </div>
        
    )
} 

export default ItemContador;