import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 60px);
  border-radius: 10px;
  overflow: scroll;
`;
const ToDoTodayContainer = styled.div`
  min-height: 240px;
  height: calc(33% - 10px);  
  background-color: #FFBB6D;
  border-radius: 10px;
  margin-bottom: 10px;
  `;
const ToDoListContainer = styled.div`
  min-height: 240px;
  height: calc(33% - 10px);
  background-color: #FFF3E3;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const ToDoStudyContainer = styled.div`
  min-height: 240px;
  height: calc(34%);
  background-color: #E3FFD3;
  border-radius: 10px;
`;

const TodoMain = () => {
  return (
    <MainContainer>
      <ToDoTodayContainer>
      </ToDoTodayContainer>
      <ToDoListContainer>
      </ToDoListContainer>
      <ToDoStudyContainer>
      </ToDoStudyContainer>
    </MainContainer>
  );
};

export default TodoMain;