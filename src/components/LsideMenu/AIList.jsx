import React from 'react';
import './LsideMenuStyle.css';


const AIList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('aistudy') }}> 인공지능 공부 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default AIList;