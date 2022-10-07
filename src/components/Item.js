import '../style/item.css'
const Item = ({base}) => {
  return(
    <div className="col-lg-4 film">
      <div className=" pt-2 pb-2">
        <div className="thumb-lg member-thumb mx-auto">
          <img
            src={base.img}
            className=" img-thumbnail"
            alt=" "
          />
        </div>
        <div className="">
          <h4>{base.nombre}</h4>
        </div>
      </div>
      
    </div>
  );
};
export default Item;



