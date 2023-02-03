import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

function Root() {
  const key = "0000000000000000000000001";
  const movePage = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem(key) === null) {
      alert("아직 회원 가입을 하지 않으셨습니다.");
      movePage("/signUp");
    } else {
      movePage("/login");
    }
  });
  return <div>1</div>;
}

export default Root;
