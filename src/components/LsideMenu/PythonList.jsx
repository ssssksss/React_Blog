import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const PtyhonList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/python_basic"> Python 공부 </Link>
            </div>
            <div className="menu menu2">

            </div>
        </div>
    );
}

export default PtyhonList;