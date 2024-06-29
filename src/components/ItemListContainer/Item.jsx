import { Link} from "react-router-dom";

const Item = ({ product }) => {
    return (
      <div>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <Link to={"/detalle/" + product.id}>Ver detalles</Link>
      </div>
    );
  };
  
  export default Item;
  