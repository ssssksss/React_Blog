import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const JavaList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/java_basic"> JAVA 공부 </Link>
                <Link to="/java_serializable"> 직렬화 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/java_modifier"> 한정자 </Link>
            </div>
        </div>
    );
}

export default JavaList;