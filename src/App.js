import React, { useState } from 'react';
import BlogContainer from './blogContainer/BlogContainer'
import './App.css';
import styled from 'styled-components';
import Cube from './AtomicDesignComponent/Molecules/Cube.js';

const HomeButton = styled.button`
  position: fixed;
  right: 0px;
  top: 240px;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  z-index: 10;
`;
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: wrap row;
  align-content: space-evenly;

  `;
const AppContainerRow = styled.div`
  width: 100vw;  
  display: flex;
  justify-content: space-evenly;
`
const AppButton = styled.button`
  width: 100px;
  height: 100px;
  border: 0px;
  border-radius: 15px;
  position: relative;
  background: transparent;
  font-size: 2rem;
  text-ali
  `;
const AbsText = styled.span`
  width: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-weight: 800px;
  font-family: 'GangwonEduPowerExtraBoldA';
  word-break: keep-all;
  padding: 10px;

  ${(props) => (props.isAvailable ? { color: "red" } : { color: "white" })}

`;

const App = () => {

  const [num, setNum] = useState(0);

  const componentChange = (number) => {
    setNum(number);
  }
  return (

    <div className="app">
      {num === 0 &&
        <AppContainer>
          <AppContainerRow>
            <AppButton onClick={() => { { componentChange(1) } }} disabled> <Cube> </Cube> <AbsText isAvailable> 블로그 <br /> (제작예정) </AbsText> </AppButton>
            <AppButton onClick={() => { { componentChange(2) } }} disabled> <Cube> </Cube> <AbsText isAvailable> API 작성 <br /> (제작예정) </AbsText> </AppButton>
          </AppContainerRow>
          <AppContainerRow>
            <AppButton onClick={() => { { componentChange(3) } }}  > <Cube> </Cube> <AbsText> 블로그 <br /> 창고 </AbsText> </AppButton>
            <AppButton onClick={() => { { componentChange(4) } }} disabled> <Cube> </Cube> <AbsText isAvailable> 할일 <br /> (제작예정) </AbsText> </AppButton>
          </AppContainerRow>
          <AppContainerRow>
            <AppButton onClick={() => { { componentChange(5) } }} disabled> <Cube> </Cube> <AbsText isAvailable> 포트폴리오 <br /> (제작예정) </AbsText> </AppButton>
            <AppButton onClick={() => { { componentChange(6) } }} disabled> <Cube> </Cube> <AbsText isAvailable> 프로젝트 <br /> (제작예정) </AbsText> </AppButton>
          </AppContainerRow>
        </AppContainer>
      }
      {
        num !== 0 &&
        <HomeButton onClick={() => { { componentChange(0) } }}>  홈 </HomeButton>
      }
      {
        {
          "3": <BlogContainer />,
        }[num]
      }

      <button className="btn_top">
        <a href="#!">
          <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/UpArrow_icon.svg'} />
        </a>
      </button>

    </div>

  );
}

export default App;

