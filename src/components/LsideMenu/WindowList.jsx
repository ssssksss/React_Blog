import React from 'react';

const WindowList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="windowlist">
            <button onClick={() => { send('windowcommand') }}> 윈도우 명령어 </button>
        </div>
    );
}

export default WindowList;