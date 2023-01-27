import * as React from "react";
import { useState } from "react";

function Login() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInpasword, setLogInPasword] = useState("");

  const login = async () => {};

  return (
    <div>
      <div>
        <h3>로그인</h3>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </div>
    </div>
  );
}
export default Login;
