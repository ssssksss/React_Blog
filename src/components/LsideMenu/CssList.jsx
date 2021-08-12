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
                <button onClick={() => { send('ex blur business card') }}> ex blur business card </button>
            </div>
        </div>
    );
}

export default CssList;