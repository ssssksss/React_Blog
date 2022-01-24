import React from 'react';
import { Link } from 'react-router-dom';

const CodingTestList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/codingtest_baekjoon"> 백준 알고리즘 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/">  </Link>
            </div>
        </div>
    );
}

export default CodingTestList;