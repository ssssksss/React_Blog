import React from 'react';
import './LsideMenuStyle.css';

const TermList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="csslist">
            <button onClick={() => { send('term') }}> 용어 </button>
        </div>
    );
}

export default TermList;