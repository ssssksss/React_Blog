import React, { useState } from 'react';
import BlogContainer from './blogContainer/BlogContainer'
import './App.css';
import styled from 'styled-components';

const HomeButton = styled.button`
  position: fixed;
  right: 0px;
  top: 240px;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #aeaeae;
  z-index: 10;
`;
const MenuContainer = styled.div`
  display: flex;
  margin: 200px auto;
  background-color: none;
  flex-flow: wrap row;
  justify-content: center;

`;
const MenuButton = styled.button`
  width: 300px;
  height: 150px;  
`;

const App = () => {

  const [num, setNum] = useState(0);

  const componentChange = (number) => {
    setNum(number);
  }
  return (

    <div className="app">
      {num === 0 &&
        <MenuContainer>
          <MenuButton onClick={() => { { componentChange(1) } }}  > 블로그(제작예정) </MenuButton>
          <MenuButton onClick={() => { { componentChange(2) } }}  > API 작성 프로그램(제작예정) </MenuButton>
          <MenuButton onClick={() => { { componentChange(3) } }}  > 블로그 창고 </MenuButton>
          <MenuButton onClick={() => { { componentChange(4) } }}  > 일정(제작예정) </MenuButton>
          <MenuButton onClick={() => { { componentChange(5) } }}  > 포트폴리오(제작예정) </MenuButton>
          <MenuButton onClick={() => { { componentChange(6) } }}  > 프로젝트소개(제작예정) </MenuButton>
        </MenuContainer>
      }
      {
        num !== 0 &&
        <HomeButton onClick={() => { { componentChange(0) } }}  > 홈 </HomeButton>
      }
      {
        {
          "3": <BlogContainer />,
        }[num]
      }

      <button className="btn_top"> <a href="#">
        <img src={process.env.PUBLIC_URL + '/img/NavMenu/UpArrow_icon.svg'} />  </a>
      </button>

    </div>

  );
}

export default App;

