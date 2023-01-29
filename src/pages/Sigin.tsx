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
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`;
const SignInBox = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H3 = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
`;
const InputEmail = styled.input`
  width: 300px;
  height: 100px;
`;

const InputPassword = styled.input`
  width: 300px;
  height: 100px;
  margin-top: 10px;
`;

const Btn = styled.button``;

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
      <SignInBox>
        <Form onSubmit={handleSubmit}>
          <H3>회원가입</H3>
          <InputEmail
            type="email"
            placeholder="이메일"
            onChange={OnChangeEmail}
            required={true}
          />
          <InputPassword
            type="password"
            placeholder="비밀번호"
            onChange={OnChangePassword}
            minLength={6}
            maxLength={10}
            required={true}
          />
          <Btn>계정 생성</Btn>
        </Form>
      </SignInBox>
    </Container>
  );
}
export default Sigin;
