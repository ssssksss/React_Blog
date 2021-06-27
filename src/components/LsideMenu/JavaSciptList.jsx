import React from 'react';

const JavaSciptList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="javasciptlist">
            <button onClick={() => { send('javascript') }}> JS 기본 문법 </button>
        </div>
    );
}

export default JavaSciptList;