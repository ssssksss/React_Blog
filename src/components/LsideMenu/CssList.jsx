import React from 'react';
import './LsideMenuStyle.css';

const CssList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('cssbasic') }}> CSS 기본 문법 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('css blur business card') }}> 명함 불러 만들기 </button>
                <button onClick={() => { send('css text and video') }}> 글씨 뒤로 비디오 효과주기 </button>
            </div>
        </div>
    );
}

export default CssList;