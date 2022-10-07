import "../style/itemDetail.css"

const ItemDetail = ({data}) =>{
    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.img} alt=""/>
                <div className="content">
                    <h1>{data.nombre}</h1>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;