import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const key = "000000000000001";
  const onClick = () => {
    alert("!");
  };

  return (
    <div>
      <div>
        <Link to="/sigin">회원 가입</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
        <Link to="/">홈</Link>
        <button onClick={onClick}>test</button>
      </div>
    </div>
  );
}
export default HomePage;
