import React from 'react';

const AlgorithmList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="algorithmlist">
            <button onClick={() => { send('algorithmstudy') }}> 알고리즘 공부 </button>
        </div>
    );
}

export default AlgorithmList;