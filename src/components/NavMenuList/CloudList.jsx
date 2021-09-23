import React from 'react';
import { Link } from 'react-router-dom';

const CloudList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/cloud_oracle"> 클라우드 오라클 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/">  </Link>
            </div>
        </div>
    );
}

export default CloudList;