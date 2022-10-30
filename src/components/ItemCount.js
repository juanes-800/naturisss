import '../style/itemContador.css'

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({inicial, stock, onAdd}) =>{
    const[ contador, setContador] = useState(parseInt(inicial));
    const suma = () => setContador( contador + 1);
    const resta = () => setContador( contador - 1);

    useEffect(()=>{
        setContador(parseInt(inicial))
    },[inicial]);

    return (
        <div className='contador'>
            <Button variant="secondary"  disabled={contador <= 1}  onClick= {resta}>-</Button>
            <span className='boton'>{contador}</span> 
            <Button variant="secondary"  disabled={contador >= stock} onClick= {suma}>+</Button>
            <div>
                <Button variant="secondary"  className='space' disabled={stock <= 0} onClick={ () => onAdd(contador)}  > Agregar alcarrito</Button>
            </div>
        </div>
        
    )
} 

export default ItemCount;
