import React from 'react';
import { Link } from 'react-router-dom';

const CssList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/css_basic"> CSS 기본 문법 </Link>
        <Link to="/css_basic2"> CSS 기본 문법2 </Link>
        <Link to="/css_use"> CSS 응용 </Link>
        <Link to="/css_scss"> CSS Scss </Link>
        <Link to="/css_animation"> CSS Animation </Link>
      </div>
      <div className="menu menu2">
        <Link to="/css_blur business card"> 명함 불러 만들기</Link>
        <Link to="/css_text and video"> 글씨 뒤로 비디오 효과주기 </Link>
      </div>
    </div>
  );
}

export default CssList;