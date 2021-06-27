import React from 'react';

const PhpList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="phplist">
            <button onClick={() => { send('php') }}> PHP 기본 문법 </button>
        </div>
    );
}

export default PhpList;