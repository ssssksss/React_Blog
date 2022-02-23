import React, { useEffect, useState } from 'react';
import BlogContainer from './blogContainer/BlogContainer';
import TodoContainer from './todoContainer/TodoContainer';
import PortfolioContainer from './portfolioContainer/PortfolioContainer';
import './App.css';
import styled from 'styled-components';
import Cube from './AtomicDesignComponent/Molecules/Cube.js';
import { Link, Route, Routes } from 'react-router-dom';
import { enumGradientColor } from './util/CustomColor';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomModal from './util/CustomModal';
import LoginPage from './userContainer/LoginPage';
import SignupPage from './userContainer/SignupPage';
import ReactModal from 'react-modal';
import { isLogin } from './store/auth/actions';
import jwt from 'jsonwebtoken';

const HomeButton = styled.button`
  position: fixed;
  right: 0px;
  top: 240px;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${enumGradientColor[2]};
`;
const TopButton = styled.button`
  position: fixed;
  right: 0px;
  top: 200px;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${enumGradientColor[2]};
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
  font-family: 'GangwonEduPowerExtraBoldA';
  font-weight: 800;
  word-break: keep-all;
  padding: 10px;
  border-radius: 10px;

  ${(props) => (props.isAvailable ? { color: "red" } : { color: "black" })}
`;
const StyleDiv = styled.div`
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  background: ${enumGradientColor[8]};
  margin: 5px;
  font-size: 1.4rem;
`;
const Nav = styled.div`
  font-size: 2rem;
  position : relative;
  font-family: 'Cafe24Ssurround';
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
ReactModal.setAppElement('#root');


const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let todayDate = new Date();
  //let todayFullYear = todayDate.getFullYear;
  let todayFullYear = todayDate.getFullYear();
  let todayMonth = todayDate.getMonth() + 1;
  let todayDay = todayDate.getDate();

  const LogoutHandler = () => {
    dispatch(isLogin(false));
    window.localStorage.removeItem('accessToken');
  }

  const Home = (home) => {
    navigate('/');
  }
  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      var tokenDate = new Date(jwt.decode(token).exp * 1000);
      if (tokenDate > new Date()) {
        dispatch(isLogin(true));
      }
    }
    else {
      // null이 나오니까 처리하기
      console.log("아무것도 없으니 에러");
    }
    console.log("어떤 경로에서든 새로고침할때마다 렌더링");
  }, []);

  return (
    <div className="app">
      <Nav>
        <StyleDiv> v 1.0.0 , {todayFullYear}년 {todayMonth}월 {todayDay}일 </StyleDiv>
        <div>
          {
            auth.isLogin ?
              <>
                <StyleDiv>
                  <button onClick={LogoutHandler}> 로그아웃 </button>
                </StyleDiv>
              </>
              :
              <>
                <StyleDiv>
                  <CustomModal header="로그인">
                    <LoginPage />
                  </CustomModal>
                </StyleDiv>
                <StyleDiv>
                  <CustomModal header="회원가입">
                    <SignupPage />
                  </CustomModal>
                </StyleDiv>
              </>
          }
        </div>
      </Nav>
      {location.pathname === "/" &&
        <AppContainer>
          <AppContainerRow>
            <AppButton disabled>
              <Link to="/blog">
                <Cube> </Cube> <AbsText isAvailable> 블로그 <br /> (제작예정) </AbsText>
              </Link>
            </AppButton>
            <AppButton disabled>
              <Link to="/api_document">
                <Cube> </Cube> <AbsText isAvailable> API 작성 <br /> (제작예정) </AbsText>
              </Link>
            </AppButton>
          </AppContainerRow>
          <AppContainerRow>
            <AppButton >
              <Link to="/blog_container">
                <Cube> </Cube> <AbsText> 블로그 <br /> 창고 </AbsText>
              </Link>
            </AppButton>
            <AppButton >
              <Link to="/todo">
                <Cube> </Cube> <AbsText> 할일 <br /> (제작예정) </AbsText>
              </Link>
            </AppButton>
          </AppContainerRow>
          <AppContainerRow>
            <AppButton disabled>
              <Link to="portfolio">
                <Cube> </Cube> <AbsText isAvailable> 포트폴리오 <br /> (제작예정) </AbsText>
              </Link>
            </AppButton>
            <AppButton disabled>
              <Link to="/todo">
                <Cube> </Cube> <AbsText isAvailable> 프로젝트 <br /> (제작예정) </AbsText>
              </Link>
            </AppButton>
          </AppContainerRow>
        </AppContainer>
      }
      {location.pathname !== "/" &&
        <Routes>
          <Route path="/blog_container/*" element={<BlogContainer />} />
          <Route path="/todo/*" element={<TodoContainer />} />
          <Route path="/portfolio/*" element={<PortfolioContainer />} />
        </Routes>
      }
      <HomeButton onClick={() => { Home(true) }}> 홈 </HomeButton>
      <TopButton onClick={() => { (document.documentElement.scrollTop = 0); }}>
        <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/UpArrow_icon.svg'} />
      </TopButton>
    </div >
  );
}

export default App;

