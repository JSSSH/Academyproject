import '../css/Main.css';

const Main = () => {
  return(
    <div className="Main">
      <div className="main_text">
        <div className="first_text_box">
          <p>Monuand wants to deliver unchanging values to individual space.</p>
          <p>We offer a variety of items that can fill up everyday life, focusing on ceramics.</p>
        </div>
        <div className="second_text_box">
          <p>모누앤드는 오래도록 변하지 않는 가치를 개인의 공간에 전달하고자 합니다.</p>
          <p>도자기를 중심으로 일상에 스며들 수 있는 다양한 아이템을 선보입니다.</p>
        </div>
      </div>
      <div className="main_img">
        <img src='img/m1.png'/>
        <img src='img/m2.png'/>
        <img src='img/m3.png'/>
        <img src='img/m4.png'/>
      </div>
      
    </div>
  );
}

export default Main;