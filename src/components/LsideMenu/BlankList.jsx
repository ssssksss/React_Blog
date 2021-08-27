import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const BlankList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('') }}>  </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default BlankList;