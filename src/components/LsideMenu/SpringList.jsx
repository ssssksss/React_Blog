import React from 'react';

const SpringList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="springlist">
            <button onClick={() => { send('springinformation') }}> Spring 프레임워크 정보 </button>
            <button onClick={() => { send('springbasic') }}> Spring 기초 </button>
            <button onClick={() => { send('springlibrary') }}> Spring 라이브러리 </button>
            <button onClick={() => { send('springerror') }}> Spring 오류 </button>
            <button onClick={() => { send('springcode') }}> Spring 코드 </button>
            <button onClick={() => { send('springexcode1') }}> Spring 예제코드1 </button>
        </div>
    );
}

export default SpringList;