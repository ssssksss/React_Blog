import React from 'react';

const RinuxList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('rinuxstudy') }}> 리눅스 공부 </button>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default RinuxList;