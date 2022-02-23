import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트

const Container = styled.div`
  background: white;
  max-width: 1400px;
  margin: auto;
`;
const Title = styled.div`
  background: #aeaeae;
  height: 400px;
`;
const Introduction = styled.div`
  background: white;
  height: 400px;
`;
const Stack = styled.div`
  background: #FFBB6D;
  min-height: 800px;
  padding: 0px 20px;
  `;
const StackTitle = styled.div`
  height: 60px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: wrap row;
`;
const StackMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StackMenuButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 2rem;
  box-shadow: 0px 0px 5px 0px white; 
  font-weight: 800;
  &:hover {
    color: white;
    box-shadow: 0px 0px 10px 2px white; 
  }
`;
const StackMain = styled.div`
  background: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  min-height: 540px;
`;
const StackGrid = styled.div`
  display: grid;
  grid-template-columns: 245px 100%;
  `;
const StackGridList = styled.div`
  width: 245px;
  grid-gap: 15px;
  display: grid;
  grid-template-columns: 100px 100px;
`;
const StackItem = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 4px 2px 2px black, 0px -1px 1px 1px #6f6f6f;
`;
const StackImg = styled.img`
  width: 80px;
  height: 80px;
`;
const StackDescription = styled.div`
border-left: solid 3px #aeaeae;
`;
const Project = styled.div`
  background: white;
  height: 800px;
`;
const Career = styled.div`
  min-height: 100px;
  background: #aeaeae;
`;

const PortfolioContainer = () => {

  const [stackItem, setStackItem] = useState('frontend');

  return (
    <Container>
      <Title>
        <h2> 표지 </h2>
      </Title>
      <Introduction>
        이름 : 이수경
        나이 : 1995년생
        이메일 : ssssksss@naver.com
      </Introduction>
      <Stack>
        <StackTitle> <h1> 기술/스택 </h1> </StackTitle>
        <StackMenu>
          <StackMenuButton onClick={() => setStackItem("frontend")}>프론트엔드</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("backend")}>백엔드</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("server")}>서버</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("database")}>DB</StackMenuButton>
        </StackMenu>
        <br />
        <StackMenu>
          <StackMenuButton onClick={() => setStackItem("cicd")}>CI/CD</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("configuration_management")}>형상관리</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("communication_tool")}>협업도구</StackMenuButton>
          <StackMenuButton onClick={() => setStackItem("etc")}>기타</StackMenuButton>
        </StackMenu>
        <StackMain>
          {
            stackItem === "frontend" &&
            <>
              <h2> 프론트엔드 </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/html.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/css.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/javascript.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/react.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/reactRouter.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/redux.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/typescript.svg'} />
                  </StackItem>
                  <StackItem>
                    <StackImg alt="" src={'/img/stackIcon/styleComponent.svg'} />
                  </StackItem>
                </StackGridList>
                <StackDescription>
                  설명
                </StackDescription>
              </StackGrid>
            </>
          }
          {
            stackItem === "backend" &&
            <>
              <h2> 백엔드 </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Java </p>
                  <p> Spring Boot </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "server" &&
            <>
              <h2> 서버 </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Linux </p>
                  <p> CentOS </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "database" &&
            <>
              <h2> Database </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Mysql </p>
                  <p>  </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "cicd" &&
            <>
              <h2> CICD </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Jenkins </p>
                  <p> Github Action </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "configuration_management" &&
            <>
              <h2> 형상관리 </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Git </p>
                  <p> Github </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "communication_tool" &&
            <>
              <h2> 협업도구 </h2>
              <hr size="3" color="#aeaeae" />
              <StackGrid>
                <StackGridList>
                  <p> Figma </p>
                  <p> Slack </p>
                  <p> Notion </p>
                  <p> Gather </p>
                  <p>  </p>
                </StackGridList>
                <div>
                  설명
                </div>
              </StackGrid>
            </>
          }
          {
            stackItem === "etc" &&
            <>
              <h2>  </h2>
              <hr size="3" color="#aeaeae" />
              <p>  </p>
              <p>  </p>
            </>
          }
        </StackMain>
      </Stack>
      <Project>
        프로젝트
      </Project>
      <Career>
        경력
      </Career>
      <div>
        풋터
      </div>
    </Container>
  );

};

export default PortfolioContainer;