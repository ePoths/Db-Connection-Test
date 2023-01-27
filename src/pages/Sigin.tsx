import * as React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";

function Sigin() {
  const [registerEmail, setEegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  //
  const OnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEegisterEmail(value);
  };

  const OnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRegisterPassword(value);
  };

  //
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerpassword)
      .then(() => {
        alert("회원 가입 성공");
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div>
      <div>
        <h3>회원가입</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder="이메일" onChange={OnChangeEmail} />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={OnChangePassword}
          />
          <button>계정 생성</button>
        </form>
      </div>
    </div>
  );
}
export default Sigin;
