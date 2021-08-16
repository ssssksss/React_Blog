import React from 'react';
import './LsideMenuStyle.css';

const DesignPatternList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('mvc2') }}> MVC2 </button>
                <button onClick={() => { send('mvp') }}> MVP </button>
                <button onClick={() => { send('mvvm') }}> MVVM </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default DesignPatternList;