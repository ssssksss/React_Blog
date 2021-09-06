import React from 'react';
import { Link } from 'react-router-dom';

const CssList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/css_basic"> CSS 기본 문법 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/css_blur business card"> 명함 불러 만들기</Link>
                <Link to="/css_text and video"> 글씨 뒤로 비디오 효과주기 </Link>
            </div>
        </div>
    );
}

export default CssList;