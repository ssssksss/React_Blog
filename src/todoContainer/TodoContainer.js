import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import TodoMain from '../todoContainer/components/TodoMain';
import TodoList from '../todoContainer/components/TodoList';
import TodoStudy from '../todoContainer/components/TodoStudy';
import TodoStatistics from '../todoContainer/components/TodoStatistics';
import Private from '../AuthContainer/Private';

// 440, 960, 1440
const Container = styled.div`
  min-width: 460px;
  background-clip: content-box;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  border-radius: 10px;

`;
const Container1 = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #C4C4C4;
`;
const Container2 = styled.div`
  display: flex;
  height: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  flex-flow: wrap row;
`;
const TitleContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: #C0B4FA;
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: 'Cafe24Ssurround';
  `;
const Title = styled.h2`
  line-height: 50px;
  text-align: center;
`;
const SideContainer = styled.div`
  width: 40px;
  margin-right: 10px;
  height: calc(100% - 60px);
  text-align: center;
  line-height: 40px;
  font-family: 'GangwonEduPowerExtraBoldA';
  font-size: 1.8rem;
  position: relative;
  overflow: scroll;
  
`;
const rotation = keyframes`
  50% {
    transform: rotate3d(0, 1, 0, -90deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
`;
const LinkStyle = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  background-color: #C0B4FA;
  border-radius: 10px;
  margin-bottom: 10px;
  line-height: 40px;
  text-align: center;
  &:hover {
    animation: ${rotation} 1s linear infinite;
    width: 40px;
  }
`;

const TodoContainer = () => {
  return (
    <Container>
      <Container1>
        <Container2>
          <TitleContainer> <Title> 투두 메인 화면 </Title>  </TitleContainer>
          <Private>
            <SideContainer>
              <LinkStyle to="main"> 메인 </LinkStyle>
              <LinkStyle to="list"> 목록 </LinkStyle>
              <LinkStyle to="study"> 공부 </LinkStyle>
              <LinkStyle to="statistics" > 통계 </LinkStyle>
            </SideContainer>
            <Routes>
              <Route path={"/"} element={<TodoMain />} />
              <Route path={"/main"} element={<TodoMain />} />
              <Route path={"/list"} element={<TodoList />} />
              <Route path={"/study"} element={<TodoStudy />} />
              <Route path={"/statistics"} element={<TodoStatistics />} />
            </Routes>
          </Private>
        </Container2>
      </Container1>
    </Container>
  );
};

export default TodoContainer;