import Item from './Item';

const ItemList = ({data = []}) => {
    return (
        <div className="row">
         {data.map( product => <Item key={product.id}  base={product}/>)}
        </div>
       
    )
}
export default ItemList;