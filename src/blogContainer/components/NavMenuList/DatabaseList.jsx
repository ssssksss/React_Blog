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
const DatabaseList = () => {

  return (
    <div>
      <Title> 데이터베이스 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="db_oraclebasic"> OreacleDB 공부 </LinkStyle>
        <LinkStyle to="db_mysqlbasic"> Mysql 공부 </LinkStyle>
        <LinkStyle to="db_namingconvention"> Database 네이밍컨벤션 </LinkStyle>
        <LinkStyle to="db_erd"> ERD </LinkStyle>
        <LinkStyle to="db_mariabasic"> MariaDB 공부 </LinkStyle>
        <LinkStyle to="db_error"> Database 에러 </LinkStyle>
        <LinkStyle to="db_table"> Database 테이블 예시 </LinkStyle>
      </BlogCategoryLinkList>
    </div >
  );
}

export default DatabaseList;