import React from 'react';

const WindowList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('windowcommand') }}> 윈도우 명령어 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('windowsystem') }}> 윈도우 시스템 </button>
            </div>
        </div>
    );
}

export default WindowList;