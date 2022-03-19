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
const SpringList = () => {

  return (
    <div>
      <Title> 스프링 </Title>
      <BlogCategoryLinkList>

        <LinkStyle to="spring_error"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Error_icon.svg'} /> 스프링 오류 </LinkStyle>
        <LinkStyle to="spring_basic"> 스프링 기초 </LinkStyle>
        <LinkStyle to="spring_thymeleaf"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Thymeleaf_icon.svg'} /> Thymeleaf </LinkStyle>
        <LinkStyle to="spring_lombok"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Lombok_icon.svg'} /> Lombok, Annotation </LinkStyle>
        <LinkStyle to="spring_yml"> 스프링 yml(properties) </LinkStyle>
        <LinkStyle to="spring_dao_dto"> 스프링 DaoDto </LinkStyle>
        <LinkStyle to="spring_oauth2">  스프링 OAuth2  </LinkStyle>
        <LinkStyle to="spring_security"> 스프링 Security </LinkStyle>
        <LinkStyle to="spring_controller"> 스프링 Controller </LinkStyle>
        <LinkStyle to="spring_validator"> 스프링 Validator </LinkStyle>
        <LinkStyle to="spring_aop"> 스프링 AOP </LinkStyle>
        <LinkStyle to="spring_jackson"> 스프링 Jackson </LinkStyle>
        <LinkStyle to="spring_service"> 스프링 Service </LinkStyle>
        <LinkStyle to="spring_communication"> 스프링 통신 </LinkStyle>
        <LinkStyle to="spring_converter"> 스프링 Converter </LinkStyle>
        <LinkStyle to="spring_jpa"> 스프링 JPA </LinkStyle>
        <LinkStyle to="spring_exception"> 스프링 Exception </LinkStyle>
        <LinkStyle to="spring_testcode"> 스프링 TestCode </LinkStyle>
        <LinkStyle to="spring_securityexcode1"> 스프링 로그인폼 테스트 </LinkStyle>
        <LinkStyle to="spring_securityexcode2"> MySQL - Login </LinkStyle>
        <LinkStyle to="spring_securityexcode3"> MySQL - Login - Security </LinkStyle>
        <LinkStyle to="spring_basic_ex1"> 스프링 기본 세팅1 </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}


export default SpringList;