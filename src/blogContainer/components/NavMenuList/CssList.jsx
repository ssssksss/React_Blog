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
const CssList = () => {

  return (
    <div>
      <Title> CSS </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="css_basic"> CSS 기본 문법 </LinkStyle>
        <LinkStyle to="css_basic2"> CSS 기본 문법2 </LinkStyle>
        <LinkStyle to="css_use"> CSS 응용 </LinkStyle>
        <LinkStyle to="css_scss"> CSS Scss </LinkStyle>
        <LinkStyle to="css_animation"> CSS Animation </LinkStyle>
        <LinkStyle to="css_blur business card"> 명함 불러 만들기</LinkStyle>
        <LinkStyle to="css_text and video"> 글씨 뒤로 비디오 효과주기 </LinkStyle>
      </BlogCategoryLinkList>
    </div >
  );
}

export default CssList;