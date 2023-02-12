import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./style/link.css";

function Root() {
  const key = "0000000000000000000000001";
  const movePage = useNavigate();
  return (
    <>
      <Link to="/signUp">회원 가입</Link>
      <br />
      <Link to="/login">로그인</Link>
      <br />
    </>
  );
}

export default Root;
