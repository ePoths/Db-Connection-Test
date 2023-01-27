import * as React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Sigin() {
  const [registerEmail, setEegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");

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
    setEegisterEmail(value);
  };

  const register = async () => {
    try{
  }.catch(error){
    console.log(error)
  };
  return (
    <div>
      <div>
        <h3>회원가입</h3>
        <form action="">
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

const login = async () => {};
const logout = async () => {};
