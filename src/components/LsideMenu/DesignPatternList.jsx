import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const DesignPatternList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/dp_mvc2"> MVC2 </Link>
                <Link to="/dp_mvp">  MVP  </Link>
            </div>
            <div className="menu menu2">
                <Link to="/dp_mvvm"> MVVM </Link>
            </div>
        </div>
    );
}

export default DesignPatternList;