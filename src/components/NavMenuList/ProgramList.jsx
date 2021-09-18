import React from 'react';
import { Link } from 'react-router-dom';

const ProgramList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/program_recdev"> 개발자 추천 프로그램 </Link>
                <Link to="/program_recwin"> 윈도우 추천 프로그램 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/">  </Link>
            </div>
        </div>
    );
}

export default ProgramList;