import React from 'react';
import './LsideMenuStyle.css';

const DatabaseList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="databaselist">
            <button onClick={() => { send('oracledbstudy') }}> OreacleDB 공부 </button>
            <button onClick={() => { send('mysqlstudy') }}> Mysql 공부 </button>
            <button onClick={() => { send('databasename') }}> Database 변수 이름 </button>
        </div>
    );
}

export default DatabaseList;