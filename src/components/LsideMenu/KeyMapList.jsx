import React from 'react';

const KeyMapList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('intellijkeymap') }}> Intellj 단축키 및 설정 </button>
                <button onClick={() => { send('eclipsekeymap') }}> Eclipse 단축키 및 설정 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('vscodekeymap') }}> VSCode 단축키 및 설정 </button>
                <button onClick={() => { send('windowkeymap') }}> Window 단축키 및 설정 </button>
            </div>
        </div>
    );
}

export default KeyMapList;