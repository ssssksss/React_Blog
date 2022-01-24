import React from 'react';
import { Link } from 'react-router-dom';

const DatabaseList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/db_oraclebasic"> OreacleDB 공부 </Link>
                <Link to="/db_mysqlbasic"> Mysql 공부 </Link>
                <Link to="/db_namingconvention"> Database 네이밍컨벤션 </Link>
                <Link to="/db_erd"> ERD </Link>
                <Link to="/db_mariabasic"> MariaDB 공부 </Link>
                <Link to="/db_error"> Database 에러 </Link>
                <Link to="/db_table"> Database 테이블 예시 </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default DatabaseList;