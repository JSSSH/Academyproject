import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="Login">
      <div className="Login_logoimg" onClick={() => { navigate('/') }}>
        <img style={{ cursor: "pointer" }} className="logo" width='200px' height='100px' src={`${process.env.PUBLIC_URL}/img/logo.png`} />
      </div>
      <form className='Login_form' method='get'>
        <div className='Login_text'>
          <label>아이디</label>
            <input id='Login_id' type='text' placeholder='  ID'></input>
          <label>비밀번호</label>
            <input id='Login_pw' type='password' placeholder='  PW'></input>
        </div>
        <div className='Login_btns'>
          <button className='Login_btn'>로그인</button>
        </div>
      </form>
      <p className='sign' style={{ cursor : 'pointer'}} onClick={() => { navigate('/signup') }}>회원가입</p>
    </div>
  );
}

export default Login;