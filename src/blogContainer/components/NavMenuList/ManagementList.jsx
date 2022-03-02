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
const ManagementList = () => {

  return (
    <div>
      <Title> 형상관리, 협업 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="management_github"> 깃허브 공부 </LinkStyle>
        <LinkStyle to="management_slack"> 슬랙 </LinkStyle>
        <LinkStyle to="management_diagram"> 다이어그램 </LinkStyle>
        <LinkStyle to="management_markdown"> 마크다운 </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default ManagementList;