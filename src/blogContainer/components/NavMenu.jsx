import React, { useState } from 'react';
import './NavMenu.css';

const NavMenu = (props) => {

  function send(page) {
    props.onChangePage(page)
  }

  return (
    <div className="nav-menu">
      <div className="nav-menu__container1 menu">
        <p> 프론트엔드 </p>
        <button onClick={() => { send("html") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Html_icon.png'} /> HTML </button>
        <button onClick={() => { send("css") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Css_icon.svg'} /> CSS </button>
        <button onClick={() => { send("bootstrap") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Bootstrap_icon.svg'} /> <span> Bootstrap </span> </button>
        {/*<button  onClick={() => { send("typescript") }}> TypeScript </button>*/}
        <button onClick={() => { send("javascript") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Javascript_icon.svg'} /> <span> JavaScript</span> </button>
        <button onClick={() => { send("typescript") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Typescript_icon.svg'} /> <span> TypeScript</span> </button>
        <button onClick={() => { send("react") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/React_icon.svg'} /> React </button>
        <button onClick={() => { send("frontend") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Frontenddvl_icon.svg'} /> <span> 프론트 개발자 </span> </button>
      </div>
      <div className="nav-menu__container2 menu">
        <p> 백엔드 </p>
        <button onClick={() => { send("java") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Java_icon.png'} /> JAVA </button>
        {/*<button  onClick={() => { send("php") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Php_icon.svg'} /> PHP </button>*/}
        {/*<button  onClick={() => { send("nodejs") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Nodejs_icon.png'} /> Node.js </button>*/}
        <button onClick={() => { send("spring") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Spring_icon.svg'} /> Spring </button>
        <button onClick={() => { send("jspservlet") }}> JSP&amp;servlet </button>
        <button onClick={() => { send("backend") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Backenddvl_icon.svg'} /> <span> 백엔드 개발자 </span> </button>
      </div>
      <div className="nav-menu__container3 menu">
        <p> 서버,DB </p>
        <button onClick={() => { send("database") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Database_icon.svg'} /> DB </button>
        <button onClick={() => { send("cloud") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Cloud_icon.svg'} /> 클라우드 </button>
        <button onClick={() => { send("linux") }}>   <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Linux_icon.svg'} /> Linux </button>
        <button onClick={() => { send("collaborationtool") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Github_icon.svg'} /> 협업도구 </button>
        {/*<button  onClick={() => { send("python") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Python_icon.svg'} /> Python </button>*/}
        {/*<button  onClick={() => { send("ai") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Ai_icon.svg'} /> 인공지능 </button>*/}
        {/*<button  onClick={() => { send("algorithm") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Algorithm_icon.svg'} /> 알고리즘 </button>*/}
        <button onClick={() => { send("api") }}>  API </button>
      </div>
      <div className="nav-menu__container3 menu">
        <p> 기타 </p>
        <button onClick={() => { send("designpattern") }}> 디자인패턴 </button>
        <button onClick={() => { send("security") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Security_icon.svg'} /> 보안</button>
        <button onClick={() => { send("network") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Network_icon.svg'} /> 네트워크</button>
        <button onClick={() => { send("window") }}>  <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/Window_icon.svg'} /> window</button>
        <button onClick={() => { send("contructdata") }}> <img alt="" src={process.env.PUBLIC_URL + '/img/NavMenu/DataStructure_icon.svg'} /> 자료구조 </button>
        <button onClick={() => { send("term") }}> 용어 </button>
        <button onClick={() => { send("keymap") }}> 단축키&amp;설정 </button>
        <button onClick={() => { send("refblog") }}> 참고 블로그 </button>
        {/*<button  onClick={() => { send("blockchain") }}>  블록체인 </button>*/}
        <button onClick={() => { send("codingtest") }}>  코딩테스트 </button>
        <button onClick={() => { send("program") }}>  추천 프로그램 </button>
        <button onClick={() => { send("figma") }}>  Figma </button>
        <button onClick={() => { send("refactoring") }}>  Refactoring </button>
      </div>
    </div>
  );
}

export default NavMenu;