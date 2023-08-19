import { useNavigate, useParams } from "react-router-dom";
import '../css/Detail.css';
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/store";

const Detail = ({ product }) => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return(
    <div className="Detail">
      <div className="imgBox">
        <img src={`${process.env.PUBLIC_URL}/img/${product[id].name}.jpg`} />
      </div>
      <div className="textWrapper">
        <div className="textBox">
          <p className="Detail_title">{product[id].title}</p>
          <p className="Detail_price">{product[id].price}원</p>
        </div>
        <div>
          <p>{product[id].content}</p>
          <p>*결정이 있는 유약으로, 유약 발색이 기물마다 상이할 수 있는 점 참고 부탁드립니다.</p><br />
          <button className="btn" onClick={() => {
            dispatch(addCart({id : Number(id), title : product[id].title, price : product[id].price, count : 1}));
            let confirm = window.confirm('상품을 장바구니에 추가했습니다, 장바구니로 이동하시겠습니까?');
            if (confirm) {
              navigate('/cart');
            }
          }}>장바구니에 추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;