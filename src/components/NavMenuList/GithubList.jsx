import React from 'react';
import { Link } from 'react-router-dom';

const GithubList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/github_basic"> 깃허브 공부 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default GithubList;