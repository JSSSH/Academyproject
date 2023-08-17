import { useNavigate } from "react-router-dom";
import '../css/Card.css';

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
      <div className="Card" onClick={() => {
        navigate(`/detail/${data.id}`);
      }} style={{cursor: 'pointer'}}>
        <div><img src={`img/${data.name}.jpg`} width='100%' /></div><br />
        <div><h3>{data.title}</h3></div>
        <div><h6>{data.price}원</h6></div>
      </div>
  );
}

export default Card;