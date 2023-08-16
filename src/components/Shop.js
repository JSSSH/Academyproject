import { useNavigate } from "react-router-dom";
import '../css/Shop.css';
import Card from "./Card";

const Shop = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="Shop">
      {
        product.map((data, i) => {
          return(
            <Card data={data} key={i}/>
          );
        })
      }
    </div>
  );
}

export default Shop;