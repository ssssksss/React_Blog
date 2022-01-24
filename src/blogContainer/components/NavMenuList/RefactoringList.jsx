import React from 'react';
import { Link } from 'react-router-dom';

const RefactoringList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/refactoring_basic"> 기초 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/">  </Link>
            </div>
        </div>
    );
}

export default RefactoringList;