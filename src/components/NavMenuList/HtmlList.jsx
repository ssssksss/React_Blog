import React from 'react';
import { Link } from 'react-router-dom';

const HtmlList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/html_basic"> HTML 기본 문법 </Link>
                <Link to="/html_dom"> HTML DOM </Link>
                <Link to="/html_error"> HTML 에러 </Link>
                <Link to="/html_test"> test </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default HtmlList;