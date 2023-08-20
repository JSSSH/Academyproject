import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { useEffect, useState } from 'react';

const User = {
  email: 'test@projct.com',
  pw: 'test12@'
}

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailTest, setEmailTest] = useState(false);
  const [pwTest, setPwTest] = useState(false);
  const [notAllTrue, setNotAllTrue] = useState(true);

  useEffect(() => {
    if (emailTest && pwTest) 
      setNotAllTrue(false);
  }, [emailTest, pwTest]);

  const handleEmail = (e) => { // 이메일 onChange일때 입력값 정규식검사
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(e.target.value)) {
      setEmailTest(true);
    } else {
      setEmailTest(false);
    }
  };
  const handlePw = (e) => { // 비밀번호 onChange일때 입력값 정규식검사
    setPw(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    if (regex.test(e.target.value)) {
      setPwTest(true);
    } else {
      setPwTest(false);
    }
  };
  const confirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.');
      navigate('/');
    } else {
      alert("존재하지 않는 이메일 또는 패스워드 입니다.");
    }
  }

  return (
    <div className="Login">
      <div className="Login_logoimg" onClick={() => { navigate('/') }}>
        <img style={{ cursor: "pointer" }} className="logo" width='200px' height='100px' src={`${process.env.PUBLIC_URL}/img/logo.png`} />
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일</div>

        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder=" 이메일 형식"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="error_wrapper"> 
          {!emailTest && email.length > 0 && ( // 정규식검사 안맞거나 한글자이상 쓰면
            <div>이메일 형식에 맞게 입력해주세요.</div>
          )}
        </div>

        <div className="inputTitle">비밀번호</div>

        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder=" 영문, 숫자, 특수문자 포함 6자 이상"
            value={pw}
            onChange={handlePw}
          />

        </div>
        <div className="error_wrapper">
          {!pwTest && pw.length > 0 && ( // 정규식검사 안맞거나 한글자이상 쓰면
            <div>영문, 숫자, 특수문자 포함 6자 이상 입력해주세요.</div>
          )}
        </div>
        <button onClick={confirmButton} disabled={notAllTrue} className="Login_btn">
          확인
        </button>
      </div>
    </div>
  );
}

export default Login;