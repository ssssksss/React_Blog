import React from 'react';
import styled from 'styled-components';
import AxiosInstance from '../util/AxiosInstance';

const Container = styled.div`
  width:100%;
  height:calc(100vh - 180px);
  border-radius: solid black 1px;
  box-sizing: content-box;
  padding: 10px;
  font-size: 2rem;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  background-color: #c0b4fa;
  border-radius: 10px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Cafe24Ssurround';
`;
const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-content: center;
  margin: 10px 0px;
`;
const InputLabel = styled.label`
  display: flex;
  align-items: center; 
`;
const EmailInput = styled.input`
  
`;
const PasswordInput = styled.input`
  
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #c0b4fa;
  border-radius: 10px;
  font-family: 'Cafe24Ssurround';

`;

const SignupPage = () => {
  const submitSignup = async () => {
    await AxiosInstance({
      url: '/ssssksss/user/signup',
      method: 'POST',
      data: {
        email: document.getElementsByName("email")[0].value,
        password: document.getElementsByName("password")[0].value
      }
    })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <React.StrictMode>
      <Header>
        회원가입 페이지
      </Header>
      <Container>
        <InputContainer>
          <InputLabel>
            이메일 : <EmailInput type="text" name="email" placeholder="이메일을 입력하세요" />
          </InputLabel>
        </InputContainer>
        <InputContainer>
          <InputLabel>
            패스워드 : <PasswordInput type="password" name="password" placeholder="패스워드를 입력하세요" />
          </InputLabel>
        </InputContainer>
        <SubmitButton onClick={submitSignup}> 제출 </SubmitButton>
      </Container>
    </React.StrictMode>
  );
};

export default SignupPage;