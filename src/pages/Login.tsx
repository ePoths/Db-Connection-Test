import * as React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { Link, useNavigate } from "react-router-dom";

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
        movePage("/userPage");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div>
      <form action="" onSubmit={LogInSubmit}>
        <h3>로그인</h3>
        <input
          type="email"
          placeholder="이메일"
          onChange={OnChangeEmail}
          required={true}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={OnlogInPassword}
          minLength={6}
          maxLength={10}
          required={true}
        />
        <button>로그인</button>
      </form>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default Login;
