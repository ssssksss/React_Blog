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
const JspServletList = () => {


  return (
    <div>
      <Title> HTML </Title>
      <BlogCategoryLinkList>

        <LinkStyle to="jspservlet_basic"> JSP,Servlet 기초 </LinkStyle>
        <LinkStyle to="jspservlet_information"> JSP,Servlet 정보 </LinkStyle>
        <LinkStyle to="jspservlet_bulletinboard"> JSP,Servlet 게시판만들기 </LinkStyle>
        <LinkStyle to="jspservlet_jstl"> JSP JSTL </LinkStyle>
        <LinkStyle to="jspservlet_el"> JSP EL </LinkStyle>
        <LinkStyle to="jspservlet_jdbc"> JDBC </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default JspServletList;