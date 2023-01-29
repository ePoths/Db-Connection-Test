import * as React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H3 = styled.h3``;

function Sigin() {
  const movePage = useNavigate();
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
        movePage("/login");
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>회원가입</h3>
        <input
          type="email"
          placeholder="이메일"
          onChange={OnChangeEmail}
          required={true}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={OnChangePassword}
          minLength={6}
          maxLength={10}
          required={true}
        />
        <button>계정 생성</button>
      </Form>
    </Container>
  );
}
export default Sigin;
