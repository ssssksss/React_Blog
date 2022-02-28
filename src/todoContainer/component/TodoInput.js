import React, { useEffect } from 'react';
import styled from 'styled-components';
import AxiosInstance from '../../util/AxiosInstance';

const Container = styled.div`
  width: calc(100%-20px);
  height: 40px;
  border-radius: 10px;
  background-color: #C0B4FA;
  font-family: 'Cafe24Ssurround';
  text-align: center;
  line-height: 40px;
  font-size: 1.8rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  position: relative;
`;
const InputColor = styled.input`
  width: 50%;
  height: 100%;
  flex-flow: nowrap column;
  margin-right: 5px;
`;
const InputDate = styled.input`
  width: 50%;
  font-size: 2rem;
`;
const InputText = styled.textarea`
  display: block;
  border: solid black 1px;  
  width: 100%;
  border-radius: 10px;
  min-height: 300px;
  padding: 10px;
`;
const FooterContainer = styled.div`
  width: 100%;
  bottom: 40px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Button = styled.button`
  text-align: center;
  width: 100%;
  height: 30px;
  background: #c0b4fa;
  border-radius: 10px;
  font-size: 2rem;
`;

const TodoInput = () => {

  const addTodo = () => {
    AxiosInstance({
      url: '/ssssksss/add/todo',
      method: 'POST',
      data: {
        color: document.getElementsByName("color")[0].value,
        date: document.getElementsByName("date")[0].value,
        content: document.getElementsByName("content")[0].value
      }
    })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log("에러");
      });
  }

  useEffect(() => {
    document.getElementById("date").value = new Date().toISOString().substring(0, 10);
  }, []);

  return (
    <React.StrictMode>
      <Container>
        <InputColor type="color" id="color" name="color" />
        <InputDate type="date" id="date" name="date" />
      </Container>
      <InputText type="text" name="content" placeholder="내용입력" />
      <FooterContainer>
        <Button onClick={addTodo}> 저장 </Button>
      </FooterContainer>
    </React.StrictMode>
  );
};

export default TodoInput;