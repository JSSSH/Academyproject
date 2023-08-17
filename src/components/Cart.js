import { useDispatch, useSelector } from 'react-redux';
import '../css/Cart.css';
import { Table } from 'react-bootstrap';
import { addCount, removeCart, subCount } from '../redux/store';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return(
    <div className="Cart">
      <Table className='Cart_table'>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((data , i) => {
              return(
                <tr key={i}>
                  <td>{data.title}</td>
                  <td>{data.price * data.count}원</td>
                  <td>
                    <button className='Cart_btn' onClick={() => {
                      dispatch(subCount(data.id));
                    }}>-</button>
                    &nbsp;&nbsp;{data.count}&nbsp;&nbsp;
                    <button className='Cart_btn' onClick={() => {
                      dispatch(addCount(data.id));
                    }}>+</button>
                  </td>
                  <td>
                    <button className='Cart_btn' onClick={() => {
                      dispatch(removeCart(data.id));
                    }}>삭제</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
    </Table>
    </div>
  );
}

export default Cart;