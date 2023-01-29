import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/sigin">회원 가입</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
        <Link to="/home">홈</Link>
      </div>
    </div>
  );
}
export default HomePage;
