import React from 'react';

const CssList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="csslist">
            <button onClick={() => { send('cssbasic') }}> CSS 기본 문법 </button>
        </div>
    );
}

export default CssList;