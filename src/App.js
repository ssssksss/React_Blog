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
  width: 200px;
  margin: 200px auto;
  background-color: white;
  flex-flow: wrap row;
  justify-content: center;

`;
const MenuButton = styled.button`
  width: 100px;
  height: 100px;  
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
          <MenuButton onClick={() => { { componentChange(2) } }}  > 2번 </MenuButton>
          <MenuButton onClick={() => { { componentChange(3) } }}  > 3번 </MenuButton>
          <MenuButton onClick={() => { { componentChange(4) } }}  > 블로그 창고 </MenuButton>
        </MenuContainer>
      }
      {
        num !== 0 &&
        <HomeButton onClick={() => { { componentChange(0) } }}  > 홈 </HomeButton>
      }
      {
        {
          "4": <BlogContainer />,
        }[num]
      }

      <button className="btn_top"> <a href="#">
        <img src={process.env.PUBLIC_URL + '/img/NavMenu/UpArrow_icon.svg'} />  </a>
      </button>

    </div>

  );
}

export default App;

