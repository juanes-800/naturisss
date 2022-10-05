
const Item = ({base}) => {
    return(
        <div className="col-lg-4">
        <div className="text-center card-box">
          <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto">
              <img
                src={base.img}
                className="rounded-circle img-thumbnail"
                alt=" "
              />
            </div>
            <div className="">
              <h4>{base.nombre}</h4>
              <p className="text-muted">{base.precio}</p>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Item;



