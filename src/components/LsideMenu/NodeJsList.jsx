import React from 'react';

const NodeJsList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="nodejslist">
            <button onClick={() => { send('nodejs') }}> NodeJs 기본 문법 </button>
        </div>
    );
}

export default NodeJsList;