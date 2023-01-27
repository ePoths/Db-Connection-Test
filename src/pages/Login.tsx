import * as React from "react";
import { useState } from "react";

function Login() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

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

  return (
    <div>
      <div>
        <h3>로그인</h3>
        <input type="email" placeholder="이메일" onChange={OnChangeEmail} />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={OnlogInPassword}
        />
        <button>로그인</button>
      </div>
    </div>
  );
}
const login = async () => {};
export default Login;
