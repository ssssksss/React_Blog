import React from 'react';
import './LsideMenuStyle.css';

const ReactList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('reactbasic') }}> react 기초 </button>
                <button onClick={() => { send('reactjavascript') }}> 자바스크립트 사용방법 </button>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default ReactList;