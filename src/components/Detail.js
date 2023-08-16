import { useParams } from "react-router-dom";
import '../css/Detail.css';

const Detail = ({ product }) => {
  const {id} = useParams();

  return(
    <div className="Detail">
      <div className="imgBox">
        <img src={`${process.env.PUBLIC_URL}/img/${product[id].name}.jpg`} />
      </div>
      <div className="textWrapper">
        <div className="textBox">
          <p className="title">{product[id].title}</p>
          <p className="price">{product[id].price}</p>
        </div>
        <div>
          <p>{product[id].content}</p><br />
          <p>*결정이 있는 유약으로, 유약 발색이 기물마다 상이할 수 있는 점 참고 부탁드립니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;