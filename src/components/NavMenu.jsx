import React, { useState } from 'react';
import './NavMenu.css';

const NavMenu = (props) => {

    function send(page) {
        props.onChangePage(page)
    }

    return (
        <div className="navMenu">
            <div className="firstMenu menu">
                <p> 백엔드 </p>
                <button onClick={() => { send("java") }}> JAVA </button>
                <button onClick={() => { send("php") }}> PHP </button>
                <button onClick={() => { send("nodejs") }}> Node.js </button>
                <button onClick={() => { send("spring") }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/SpringBoot_icon.png'} /> Spring </button>
                <button onClick={() => { send("jspservlet") }}> JSP&amp;servlet </button>
            </div>
            <div className="secondMenu menu">
                <p> 프론트엔드 </p>
                <button onClick={() => { send("html") }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Html_icon.png'} /> HTML </button>
                <button onClick={() => { send("css") }}> CSS </button>
                <button onClick={() => { send("typescript") }}> TypeScipt </button>
                <button onClick={() => { send("javascript") }}> JavaScipt </button>
                <button onClick={() => { send("react") }}> React </button>
            </div>
            <div className="thirdMenu menu">
                <p> 기타 </p>
                <button onClick={() => { send("database") }}> DataBase </button>
                <button onClick={() => { send("designpattern") }}> 디자인패턴 </button>
                <button onClick={() => { send("security") }}> 보안</button>
                <button onClick={() => { send("network") }}> 네트워크</button>
                <button onClick={() => { send("algorithm") }}> 알고리즘 </button>
                <button onClick={() => { send("contructdata") }}> 자료구조 </button>
                <button onClick={() => { send("aws") }}> AWS </button>
                <button onClick={() => { send("prettier") }}> prettier </button>
                <button onClick={() => { send("window") }}> window</button>
                <button onClick={() => { send("term") }}> 용어 </button>
                <button onClick={() => { send("keymap") }}> 단축키 </button>
                <button onClick={() => { send("github") }}> 깃허브 </button>
                <button onClick={() => { send("refblog") }}> 참고 블로그 </button>
                <button onClick={() => { send("python") }}> Python </button>
            </div>
        </div>
    );
}

export default NavMenu;