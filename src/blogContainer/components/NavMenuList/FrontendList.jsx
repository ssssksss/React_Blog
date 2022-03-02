import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogCategoryLinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5px;
  padding: 10px;
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
const FrontendList = () => {

  return (
    <div>
      <Title> 프론트엔드 개발자 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="frontend_prettier"> prettier </LinkStyle>
        <LinkStyle to="frontend_basic"> 프론트 개발 </LinkStyle>
        <LinkStyle to="frontend_regex"> 프론트 정규표현식 </LinkStyle>
        <LinkStyle to="frontend_buildname"> 프론트 이름 짓기  </LinkStyle>
        <LinkStyle to="frontend_http"> 프론트 HTTP </LinkStyle>
        <LinkStyle to="frontend_browserdevtool"> 브라우저 개발자 도구 </LinkStyle>
      </BlogCategoryLinkList>
    </div >
  );
}

export default FrontendList;