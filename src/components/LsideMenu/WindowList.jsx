import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const WindowList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/window_command"> 윈도우 명령어 </Link>
                <Link to="/window_system"> 윈도우 시스템 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default WindowList;