import React from 'react';
import { Link } from 'react-router-dom';

const JavaSciptList = () => {


    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/javascript_basic"> JavaScript 공부 </Link>
                <Link to="/javascript_ajax">  Ajax </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default JavaSciptList;