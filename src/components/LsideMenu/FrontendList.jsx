import React from 'react';
import './LsideMenuStyle.css';

const FrontendList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('frontend') }}> 프론트 개발 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('frontendbrowserdevtool') }}> 브라우저 개발자 도구 </button>
            </div>
        </div>
    );
}

export default FrontendList;