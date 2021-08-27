import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const DatabaseList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (


        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/db_oraclebasic"> OreacleDB 공부 </Link>
                <Link to="/db_mysqlbasic"> Mysql 공부 </Link>
                <Link to="/db_variablename"> Database 변수 이름 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default DatabaseList;