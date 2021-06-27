import React from 'react';

const KeyMapList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="keymaplist">
            <button onClick={() => { send('keymap') }}> 단축키 </button>
        </div>
    );
}

export default KeyMapList;