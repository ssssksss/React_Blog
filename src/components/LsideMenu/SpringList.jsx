import React from 'react';
import './LsideMenuStyle.css';

const SpringList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('springerror') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Error_icon.svg'} /> Spring 오류 </button>
                <button onClick={() => { send('springcode') }}> Spring 코드 정리 </button>
                <button onClick={() => { send('springstudy') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Study_icon.svg'} /> Spring 공부 </button>
                <button onClick={() => { send('thymeleaf') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Thymeleaf_icon.svg'} /> Thymeleaf </button>
                <button onClick={() => { send('lombok') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Lombok_icon.svg'} /> Lombok </button>
                <button onClick={() => { send('annotation') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Annotation_icon.svg'} /> Annotation </button>
                <button onClick={() => { send('springsetting') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Settings_icon.svg'} />  <span> 외부 설정 파일 </span> </button>
                <button onClick={() => { send('springjpa') }}>  Spring JPA </button>
                <button onClick={() => { send('springapi') }}>  Spring 관련 API </button>
                <button onClick={() => { send('springoauth2') }}>  Spring OAuth2 </button>
                <button onClick={() => { send('springsecurity') }}>  Spring Security </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('springsecurityexcode1') }}> 스프링 로그인폼 테스트 </button>
                <button onClick={() => { send('springsecurityexcode2') }}> MySQL - Login </button>
                <button onClick={() => { send('springsecurityexcode3') }}> MySQL - Login - Security </button>
                <button onClick={() => { send('springsecurityexcode4') }}> Spring Security ExCode4 </button>
                <button onClick={() => { send('springsecurityexcode5') }}> Spring Security ExCode5 </button>
                <button onClick={() => { send('springsecurityexcode6') }}> Spring Security ExCode6 </button>
            </div>
        </div>
    );
}

export default SpringList;