import React from 'react';

const JavaList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="Javalist">
            <button onClick={() => { send('javabasic') }}> JAVA 문법 </button>
        </div>
    );
}

export default JavaList;