import React from 'react';
import { Link } from 'react-router-dom';

const ApiList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                {/*<Link to="/api_naverai"> 네이버 ai </Link>*/}
                <Link to="/api_naverapplicationservice"> 네이버 application service </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default ApiList;