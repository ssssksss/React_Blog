import React from 'react';
import { Link } from 'react-router-dom';

const JavaScriptList = () => {


    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/javascript_basic"> JavaScript 공부 </Link>
                <Link to="/javascript_document"> JavaScript Document </Link>
                <Link to="/javascript_element"> JavaScript Element </Link>
                <Link to="/javascript_event"> JavaScript Event </Link>
                <Link to="/javascript_event_object"> JavaScript EventObject </Link>
                <Link to="/javascript_attribute"> JavaScript Attribute </Link>
                <Link to="/javascript_window"> JavaScript Window </Link>
                <Link to="/javascript_location"> JavaScript Location </Link>
                <Link to="/javascript_style"> JavaScript Style </Link>
                <Link to="/javascript_ajax">  Ajax </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default JavaScriptList;