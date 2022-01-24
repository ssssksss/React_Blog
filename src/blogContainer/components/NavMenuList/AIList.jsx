import React from 'react';
import { Link } from 'react-router-dom';

const AIList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/ai_basic"> 인공지능 공부 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default AIList;