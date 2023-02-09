import * as React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { Link, useNavigate } from "react-router-dom";
import "../style/LogInStyle.css";

function Login() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const movePage = useNavigate();

  const OnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setLogInEmail(value);
  };
  const OnlogInPassword = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setLogInPassword(value);
  };

  const LogInSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, logInEmail, logInPassword)
      .then(() => {
        movePage("/mainpage");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" action="" onSubmit={LogInSubmit}>
        <h3 className="loginH3">로그인</h3>
        <input
          className="loginInputEmail"
          type="email"
          placeholder="이메일"
          onChange={OnChangeEmail}
          required={true}
        />
        <input
          className="loginInputPassword"
          type="password"
          placeholder="비밀번호"
          onChange={OnlogInPassword}
          minLength={6}
          maxLength={10}
          required={true}
        />
        <button className="loginBtn">로그인</button>
        <Link className="lPsiginup" to="/signup">
          회원가입
        </Link>
      </form>
    </div>
  );
}

export default Login;
