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
const JavaScriptList = () => {

  return (
    <div>
      <Title> 자바스크립트 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="javascript_basic"> JavaScript 기초 </LinkStyle>
        <LinkStyle to="javascript_basic2"> JavaScript 기초2 </LinkStyle>
        <LinkStyle to="javascript_document"> JavaScript Document </LinkStyle>
        <LinkStyle to="javascript_element"> JavaScript Element </LinkStyle>
        <LinkStyle to="javascript_event"> JavaScript Event </LinkStyle>
        <LinkStyle to="javascript_event_object"> JavaScript EventObject </LinkStyle>
        <LinkStyle to="javascript_attribute"> JavaScript Attribute </LinkStyle>
        <LinkStyle to="javascript_window"> JavaScript Window </LinkStyle>
        <LinkStyle to="javascript_location"> JavaScript Location </LinkStyle>
        <LinkStyle to="javascript_style"> JavaScript Style </LinkStyle>
        <LinkStyle to="javascript_ajax">  Ajax </LinkStyle>
        <LinkStyle to="javascript_drag">  JavaScript Drag </LinkStyle>
        <LinkStyle to="javascript_table"> JavaScript Table </LinkStyle>
        <LinkStyle to="javascript_scroll"> JavaScript Scroll </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default JavaScriptList;