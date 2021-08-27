import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const PhpList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (


        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/php_basic"> PHP 기본 문법 </Link>
            </div>
            <div className="menu menu2">

            </div>
        </div>
    );
}

export default PhpList;