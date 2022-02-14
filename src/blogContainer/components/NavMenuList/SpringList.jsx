import React from 'react';
import { Link } from 'react-router-dom';

const SpringList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu75vw">
        <Link to="spring_error"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Error_icon.svg'} /> 스프링 오류 </Link>
        <Link to="spring_basic"> 스프링 기초 </Link>
        <Link to="spring_thymeleaf"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Thymeleaf_icon.svg'} /> Thymeleaf </Link>
        <Link to="spring_lombok"> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Lombok_icon.svg'} /> Lombok, Annotation </Link>
        <Link to="spring_yml"> 스프링 yml(properties) </Link>
        <Link to="spring_dao_dto"> 스프링 DaoDto </Link>
        <Link to="spring_oauth2">  스프링 OAuth2  </Link>
        <Link to="spring_security"> 스프링 Security </Link>
        <Link to="spring_controller"> 스프링 Controller </Link>
        <Link to="spring_validator"> 스프링 Validator </Link>
        <Link to="spring_aop"> 스프링 AOP </Link>
        <Link to="spring_jackson"> 스프링 Jackson </Link>
        <Link to="spring_service"> 스프링 Service </Link>
        <Link to="spring_communication"> 스프링 통신 </Link>
        <Link to="spring_converter"> 스프링 Converter </Link>
        <Link to="spring_jpa"> 스프링 JPA </Link>
        <Link to="spring_exception"> 스프링 Exception </Link>
        <Link to="spring_testcode"> 스프링 TestCode </Link>
      </div>
      <div className="menu25vw">
        <Link to="spring_securityexcode1"> 스프링 로그인폼 테스트 </Link>
        <Link to="spring_securityexcode2"> MySQL - Login </Link>
        <Link to="spring_securityexcode3"> MySQL - Login - Security </Link>
        <Link to="spring_basic_ex1"> 스프링 기본 세팅1 </Link>
      </div>
    </div>
  );
}

export default SpringList;