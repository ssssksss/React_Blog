import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogCategoryLinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3,1fr);
  }
`;
const Title = styled.div`
  height: 40px;
  line-height: 40px;
  color: white;
  font-family: 'SBAggroB';
  font-size: 1.8rem;
  background: #ffa946;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  grid-column-start: 1;
  grid-column-end: 5;
`;
const LinkStyle = styled(Link)`
  text-align: center;
  height: 24px;
  line-height: 24px;
  box-shadow: 2px 2px 1px 1px grey;
  font-family: 'SBAggroB';
  background: #ffa946;
  color: white;
  font-size: 120%;
  overflow:hidden;
  text-overflow:ellipsis;
  &:hover {
    color: #ffbb6d;
    background: white;
  }
`;
const BackendList = () => {


  return (
    <div>
      <Title> 백엔드 개발자 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="backend_basic"> 백엔드 개발 </LinkStyle>
        <LinkStyle to="backend_solid"> Solid 5대 원칙 </LinkStyle>
        <LinkStyle to="backend_sctcache"> 세션 쿠키 토큰 캐시 </LinkStyle>
        <LinkStyle to="backend_browserdevtool"> 브라우저 개발자 도구 </LinkStyle>
        <LinkStyle to="backend_compiler_interpreter"> 컴파일러 와 인터프리터 </LinkStyle>
        <LinkStyle to="backend_codingconvention"> 코딩 컨벤션 </LinkStyle>
      </BlogCategoryLinkList>
    </div >
  );
}

export default BackendList;