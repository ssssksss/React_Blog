import React, { useState } from 'react';
import styled from 'styled-components';
import CustomModal from '../../util/CustomModal';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const MainContainer = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 60px);
  border-radius: 10px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #C0B4FA;
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: 'Cafe24Ssurround';
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

const TodoListContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);  
  background-color: #FFBB6D;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: scroll;
  padding: 10px;
`;

const TodoList = () => {

  let [list, setList] = useState([
    { id: 1, name: "1" },
  ]);

  return (
    <MainContainer>
      <ModalContainer>
        <CustomModal header="추가하기">
          <TodoInput> </TodoInput>
        </CustomModal>
      </ModalContainer>
      <TodoListContainer>
        {list.map((i) => <TodoItem date={""} check={""} content={""}> {i} </TodoItem>)}
      </TodoListContainer>
    </MainContainer>
  );
};

export default TodoList;