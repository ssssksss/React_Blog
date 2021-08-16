import React from 'react';
import './LsideMenuStyle.css';

const JavaList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('javabasic') }}> JAVA 문법 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('serializable') }}> serializable </button>
                <button onClick={() => { send('modifier') }}> modifier </button>
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default JavaList;