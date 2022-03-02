import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;
const Title = styled.div`
  background: #7e57c2;
  color: white;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 2rem;
  font-family: 'SBAggroB';
`;
const BlogCategoryLinkList = styled.div`
  width: 100%;
  background: #b085f5;
  display: grid;
  padding: 10px 0px;
  grid-template-rows: repeat(20px);
  grid-template-columns: 90%;
  grid-gap: 5px;
  justify-content: center;
`;
const LinkStyle = styled(Link)`
  box-shadow: 1px 1px 0px 0px grey, -2px -2px 1px 1px grey, inset 1px 1px grey;
  font-size: 120%;
  color: white;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;
  font-family: 'SBAggroB';

  &:hover {
    color: #b085f5;
    background: white;
    box-shadow: 0px 0px 1px 1px grey, inset 1px 1px grey;
    transform: translate(-2px,-2px);
  }
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const BlogCategory1Links = (props) => {

  return (
    <Container>
      <Title style={{ borderRadius: "10px 0px 0px 0px" }}> 프론트엔드 </Title>
      <Title> 백엔드 </Title>
      <Title> 서버,DB </Title>
      <Title style={{ borderRadius: "0px 10px 0px 0px" }}> 기타 </Title>
      <BlogCategoryLinkList style={{ borderRadius: "0px 0px 0px 10px" }}>
        <LinkStyle to="html"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Html_icon.svg'} /> HTML </LinkStyle>
        <LinkStyle to="css"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Css_icon.svg'} /> CSS </LinkStyle>
        <LinkStyle to="bootstrap"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Bootstrap_icon.svg'} /> <span> Bootstrap </span> </LinkStyle>
        <LinkStyle to="javascript"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Javascript_icon.svg'} /> <span> JavaScript</span> </LinkStyle>
        <LinkStyle to="typescript"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Typescript_icon.svg'} /> <span> TypeScript</span> </LinkStyle>
        <LinkStyle to="react"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/React_icon.svg'} /> React </LinkStyle>
        <LinkStyle to="frontend"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Frontenddvl_icon.svg'} /> <span> 프론트 개발자 </span> </LinkStyle>
      </BlogCategoryLinkList>
      <BlogCategoryLinkList>
        <LinkStyle to="java"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Java_icon.svg'} /> JAVA </LinkStyle>
        {/*<LinkStyle  to="php"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Php_icon.svg'} /> PHP </LinkStyle>*/}
        {/*<LinkStyle  to="nodejs"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Nodejs_icon.png'} /> Node.js </LinkStyle>*/}
        <LinkStyle to="spring"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Spring_icon.svg'} /> Spring </LinkStyle>
        <LinkStyle to="jspservlet"> JSP </LinkStyle>
        <LinkStyle to="api">  API </LinkStyle>
        <LinkStyle to="backend"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Backenddvl_icon.svg'} /> <span> 백엔드 개발자 </span> </LinkStyle>
      </BlogCategoryLinkList>
      <BlogCategoryLinkList>
        <LinkStyle to="database"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Database_icon.svg'} /> DB </LinkStyle>
        <LinkStyle to="cloud"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Cloud_icon.svg'} /> 클라우드 </LinkStyle>
        <LinkStyle to="linux">   <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Linux_icon.svg'} /> Linux </LinkStyle>
        <LinkStyle to="management"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Github_icon.svg'} /> 협업도구 </LinkStyle>
        <LinkStyle to="docker"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Docker_icon.svg'} /> Docker </LinkStyle>
        <LinkStyle to="cicd"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/DevOps_icon.svg'} /> CI/CD </LinkStyle>
      </BlogCategoryLinkList>
      <BlogCategoryLinkList style={{ borderRadius: "0px 0px 10px 0px" }}>
        {/*<LinkStyle  to="python"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Python_icon.svg'} /> Python </LinkStyle>*/}
        {/*<LinkStyle  to="ai"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Ai_icon.svg'} /> 인공지능 </LinkStyle>*/}
        {/*<LinkStyle  to="algorithm"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Algorithm_icon.svg'} /> 알고리즘 </LinkStyle>*/}
        {/*<LinkStyle  to="blockchain">  블록체인 </LinkStyle>*/}
        <LinkStyle to="designpattern"> 디자인패턴 </LinkStyle>
        <LinkStyle to="security"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Security_icon.svg'} /> 보안</LinkStyle>
        <LinkStyle to="network"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Network_icon.svg'} /> 네트워크</LinkStyle>
        <LinkStyle to="window">  <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/Window_icon.svg'} /> window</LinkStyle>
        {/*<LinkStyle to="contructdata"> <Img alt="" src={process.env.PUBLIC_URL + '/img/BlogCategory1Links/DataStructure_icon.svg'} /> 자료구조 </LinkStyle>*/}
        <LinkStyle to="term"> 용어 </LinkStyle>
        <LinkStyle to="keymap"> 단축키&amp;설정 </LinkStyle>
        <LinkStyle to="refblog"> 참고 블로그 </LinkStyle>
        <LinkStyle to="codingtest">  코딩테스트 </LinkStyle>
        <LinkStyle to="program">  추천 프로그램 </LinkStyle>
        <LinkStyle to="figma">  Figma </LinkStyle>
        {/*<LinkStyle to="refactoring">  리팩토링 </LinkStyle>*/}
      </BlogCategoryLinkList>
    </Container>
  );
}

export default BlogCategory1Links;