import React from 'react';
import './LsideMenuStyle.css';

const JavaSciptList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('javascriptstudy') }}> JavaScript 공부 </button>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default JavaSciptList;