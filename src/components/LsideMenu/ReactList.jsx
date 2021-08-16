import React from 'react';
import './LsideMenuStyle.css';

const ReactList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="reactlist">
            <button onClick={() => { send('reactbasic') }}> react 기초 </button>
        </div>
    );
}

export default ReactList;