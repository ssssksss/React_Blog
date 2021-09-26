import React from 'react';
import { Link } from 'react-router-dom';

const DatabaseList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/db_oraclebasic"> OreacleDB 공부 </Link>
                <Link to="/db_mysqlbasic"> Mysql 공부 </Link>
                <Link to="/db_variablename"> Database 변수 이름 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/db_mariabasic"> MariaDB 공부 </Link>
                <Link to="/db_error"> Database 에러 </Link>
                <Link to="/db_table"> Database 테이블 예시 </Link>
            </div>
        </div>
    );
}

export default DatabaseList;