import React from 'react';
import { Link } from 'react-router-dom';

const FrontendList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/frontend_basic"> 프론트 개발 </Link>
                <Link to="/frontend_regex"> 프론트 정규표현식 </Link>
                <Link to="/frontend_buildname"> 프론트 이름 짓기  </Link>
                <Link to="/frontend_http"> 프론트 HTTP </Link>
            </div>
            <div className="menu menu2">
                <Link to="/frontend_browserdevtool"> 브라우저 개발자 도구 </Link>
            </div>
        </div>
    );
}

export default FrontendList;