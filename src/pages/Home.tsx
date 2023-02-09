import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const movePage = useNavigate();
  const key = "0000000000000000000000001";
  useEffect(() => {
    if (window.localStorage.getItem(key) === null) {
      alert("아직 회원 가입을 하지 않으셨습니다.");
      movePage("/sigin");
    } else {
      movePage("/login");
    }
  });
  return (
    <div>
      <div>
        <Link to="/sigin">회원 가입</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
        <Link to="/">홈</Link>
      </div>
    </div>
  );
}
export default HomePage;
