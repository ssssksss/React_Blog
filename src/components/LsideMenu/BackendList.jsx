import React from 'react';

const BackendList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('backend') }}> 백엔드 개발 </button>
                <button onClick={() => { send('solid') }}> Solid 5대 원칙 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('sctcache') }}> 세션 쿠키 토큰 캐시 </button>
                <button onClick={() => { send('backendbrowserdevtool') }}> 브라우저 개발자 도구 </button>
            </div>
        </div>
    );
}

export default BackendList;