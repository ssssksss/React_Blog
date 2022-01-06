import React from 'react';
import { Link } from 'react-router-dom';

const JavaList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/java_basic"> JAVA 공부 </Link>
                <Link to="/java_basic2"> JAVA 공부 2 </Link>
                <Link to="/java_annotation"> JAVA 어노테이션 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/java_serializable"> 직렬화 </Link>
                <Link to="/java_modifier"> 한정자 </Link>
            </div>
        </div>
    );
}

export default JavaList;