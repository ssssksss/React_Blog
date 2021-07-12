import React from 'react';
import './LsideMenuStyle.css';

const SpringList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('springerror') }}> Spring 오류 </button>
                <button onClick={() => { send('springcode') }}> Spring 코드 정리 </button>
                <button onClick={() => { send('springstudy') }}> Spring 공부 </button>
                <button onClick={() => { send('springinitsetting') }}> Spring 초기 설정 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('springsecurityexcode1') }}> Spring Security ExCode1 </button>
                <button onClick={() => { send('springsecurityexcode2') }}> Spring Security ExCode2 </button>
                <button onClick={() => { send('springsecurityexcode3') }}> Spring Security ExCode3 </button>
                <button onClick={() => { send('springsecurityexcode4') }}> Spring Security ExCode4 </button>
                <button onClick={() => { send('springsecurityexcode5') }}> Spring Security ExCode5 </button>
                <button onClick={() => { send('springsecurityexcode6') }}> Spring Security ExCode6 </button>
            </div>
        </div>
    );
}

export default SpringList;