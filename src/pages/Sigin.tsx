import * as React from "react";
import { useState } from "react";

function Sigin() {
  const [registerEmail, setEegisterEmail] = useState("");
  const [registerpasword, setRegisterPasword] = useState("");

  const register = async () => {};
  const login = async () => {};
  const logout = async () => {};
  return (
    <div>
      <div>
        <h3>회원가입</h3>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button>계정 생성</button>
      </div>
    </div>
  );
}
export default Sigin;
