import React from 'react';
import { Link } from 'react-router-dom';

const BackendList = () => {


    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/BackendBasic"> 백엔드 개발 </Link>
                <Link to="/BackendSolid"> Solid 5대 원칙 </Link>
                <Link to="/BackendSCTCache"> 세션 쿠키 토큰 캐시 </Link>
                <Link to="/BackendBrowserDevTool"> 브라우저 개발자 도구 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default BackendList;