import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const FrontendList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/frontend_basic"> 프론트 개발 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/frontend_browserdevtool"> 브라우저 개발자 도구 </Link>
            </div>
        </div>
    );
}

export default FrontendList;