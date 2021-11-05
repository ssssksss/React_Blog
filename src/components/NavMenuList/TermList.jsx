import React from 'react';
import { Link } from 'react-router-dom';

const TermList = () => {

    return (

        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/term"> 용어 </Link>
            </div>
            <div className="menu menu2">

            </div>
        </div>
    );
}

export default TermList;