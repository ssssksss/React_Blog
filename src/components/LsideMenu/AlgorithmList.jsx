import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const AlgorithmList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/algorithm_basic"> 알고리즘 공부 </Link>
                <Link to="/algorithm_basic"> 알고리즘 공부 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default AlgorithmList;