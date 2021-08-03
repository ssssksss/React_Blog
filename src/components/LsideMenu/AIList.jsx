import React from 'react';

const AIList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="ailist">
            <button onClick={() => { send('aistudy') }}> 인공지능 공부 </button>
        </div>
    );
}

export default AIList;