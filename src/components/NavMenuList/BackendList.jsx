import React from 'react';
import { Link } from 'react-router-dom';

const BackendList = () => {


    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/backend_basic"> 백엔드 개발 </Link>
                <Link to="/backend_solid"> Solid 5대 원칙 </Link>
                <Link to="/backend_sctcache"> 세션 쿠키 토큰 캐시 </Link>
                <Link to="/backend_browserdevtool"> 브라우저 개발자 도구 </Link>
                <Link to="/backend_compiler_interpreter"> 컴파일러 와 인터프리터 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default BackendList;