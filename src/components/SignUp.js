import { useDispatch, useSelector } from "react-redux";
import { changeRegistry, setUserId, setUserPw } from "../redux/store";
import '../css/SignUp.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.sign);

  return(
    <div className="SignUp">
      <div>
        {
        sign.registry
        ? <p>회원가입이 완료되었습니다.</p>
        : 
          <div className="">
            <div>
              <span>회원가입</span>
            </div>
            <input
              type="text"
              placeholder=" 사용 아이디 입력"
              value={sign.userId}
              onChange={(e) => dispatch(setUserId(e.target.value))}
            />
            <input
              type="password"
              placeholder=" 사용 비밀번호 입력"
              value={sign.userPw}
              onChange={(e) => dispatch(setUserPw(e.target.value))}
            />
            <button onClick={() => dispatch(changeRegistry())}>회원가입</button>
          </div>
        }
      </div>
    </div>
  );
}

export default SignUp;