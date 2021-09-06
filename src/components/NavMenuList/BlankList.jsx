import React from 'react';
import { Link } from 'react-router-dom';

const BlankList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/">  </Link>
            </div>
            <div className="menu menu2">
                <Link to="/">  </Link>
            </div>
        </div>
    );
}

export default BlankList;