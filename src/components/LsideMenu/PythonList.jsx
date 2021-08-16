import React from 'react';
import './LsideMenuStyle.css';

const PtyhonList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="databaselist">
            <button onClick={() => { send('pythonstudy') }}> Python 공부 </button>
        </div>
    );
}

export default PtyhonList;