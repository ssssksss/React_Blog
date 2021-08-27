import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const SpringList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/spring_error"> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Error_icon.svg'} /> 스프링 오류 </Link>
                <Link to="/spring_code"> 스프링 코드 정리 </Link>
                <Link to="/spring_basic"> 스프링 기초 </Link>
                <Link to="/spring_thymeleaf"> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Thymeleaf_icon.svg'} /> Thymeleaf </Link>
                <Link to="/spring_jpa"> 스프링 JPA </Link>
                <Link to="/spring_lombok"> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Lombok_icon.svg'} /> Lombok </Link>
                <Link to="/spring_annotation"> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Annotation_icon.svg'} /> Annotation </Link>
                <Link to="/spring_setting"> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Settings_icon.svg'} /> 외부 설정 파일 </Link>
                <Link to="/spring_api"> 스프링 관련 API </Link>
                <Link to="/spring_oauth2">  스프링 OAuth2  </Link>
                <Link to="/spring_security"> 스프링 Security </Link>

            </div>
            <div className="menu menu2">
                <Link to="/spring_securityexcode1"> 스프링 로그인폼 테스트 </Link>
                <Link to="/spring_securityexcode2"> MySQL - Login </Link>
                <Link to="/spring_securityexcode3"> MySQL - Login - Security </Link>
                <Link to="/spring_securityexcode4"> 스프링 Security ExCode4 </Link>
            </div>
        </div>
    );
}

export default SpringList;