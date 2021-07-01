import React from 'react';

const SpringList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="springlist">
            <button onClick={() => { send('springlibrary') }}> Spring 라이브러리 </button>
            <button onClick={() => { send('springerror') }}> Spring 오류 </button>
            <button onClick={() => { send('springcode') }}> Spring 코드 정리 </button>
            <button onClick={() => { send('springexcode1') }}> 예제1:Intellj,Gradle,JPA,MySQL </button>
            <button onClick={() => { send('springexcode2') }}> 예제2:Eclipse Bean Xml Injection </button>
            <button onClick={() => { send('springstudy') }}> Spring 공부 </button>
            <button onClick={() => { send('springinitsetting') }}> Spring 초기 설정 </button>
        </div>
    );
}

export default SpringList;