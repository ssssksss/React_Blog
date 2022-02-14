import React from 'react';
import styled from 'styled-components';
import AxiosInstance from '../util/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../store/auth/actions';
import { useEffect } from 'react';

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
const RememberCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #c0b4fa;
  border-radius: 10px;
  font-family: 'Cafe24Ssurround';
`;

const LoginPage = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const submitLogin = () => {
    AxiosInstance({
      url: '/ssssksss/user/login',
      method: 'POST',
      data: {
        email: document.getElementsByName("email")[0].value,
        password: document.getElementsByName("password")[0].value
      }
    })
      .then(res => {
        window.localStorage.setItem('accessToken', res.data.accessToken);
        dispatch(isLogin(true));
        alert("로그인에 성공하였습니다.");
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    const rememberCheckbox = window.localStorage.getItem('rememberCheckbox');
    if (rememberCheckbox) {
      document.getElementsByName("rememberCheckbox")[0].checked = "checked";
      document.getElementsByName("email")[0].value = JSON.parse(rememberCheckbox).id;
    }
  }, []);

  const rememberCheck = () => {
    if (document.getElementsByName("rememberCheckbox")[0].checked) {
      window.localStorage.setItem('rememberCheckbox', JSON.stringify({ check: true, id: document.getElementsByName("email")[0].value }));
    } else {
      window.localStorage.removeItem('rememberCheckbox');
    }
  }

  return (
    <React.StrictMode>
      <Container>
        <Header>
          {
            auth.isLogin ? <>로그아웃 페이지</> : <>로그인 페이지</>
          }
        </Header>
        <InputContainer>
          <InputLabel>
            이메일 : <input type="text" name="email" placeholder="이메일을 입력하세요" />
          </InputLabel>
        </InputContainer>
        <InputContainer>
          <InputLabel>
            패스워드 : <input type="password" name="password" placeholder="패스워드를 입력하세요" />
          </InputLabel>
        </InputContainer>
        <RememberCheckbox type="checkbox" name="rememberCheckbox" onChange={rememberCheck} /> 아이디 기억하기
        <SubmitButton onClick={submitLogin}> 제출 </SubmitButton>
      </Container>
    </React.StrictMode>
  );
};

export default LoginPage;