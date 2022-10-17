import { Link } from 'react-router-dom';
import '../style/item.css'
import React,{useContext} from 'react';
import { cartContext } from '../context/CartContext';


const Item = ({base}) => {
  const nombre = useContext(cartContext);
   console.log(nombre);

  return(
    <div className="col-lg-4 film">
      <div className=" pt-2 pb-2">
        <Link to={`/detalle/${base.id}`} className="thumb-lg member-thumb mx-auto title">
          <img src={base.img} alt=" " className=" img-thumbnail"/>
          <h4 className='title'>{base.nombre}</h4>
        </Link>
      </div>
      
    </div>
  );
};
export default Item;

