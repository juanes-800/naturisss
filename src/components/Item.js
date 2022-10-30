import { Link } from 'react-router-dom';
import '../style/item.css';



const Item = ({base}) => {


  return(
    <div className="col-lg-4 film">
      <div className=" pt-2 pb-2">
        <Link to={`/detalle/${base.id}`} className="thumb-lg member-thumb mx-auto title">
          <div className='card'>
            <img src={base.img} alt=" " className="img-thumbnail"/>
            <div><h2 >{base.name}</h2></div>
          </div>
        </Link>
      </div>
      
    </div>
  );
};
export default Item;

