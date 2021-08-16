import React from 'react';
import './LsideMenuStyle.css';

const HtmlList = (props) => {

    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="htmllist">
            <button onClick={() => { send('htmlbasic'); }}> HTML 기본 문법 </button>
            <button onClick={() => { send('htmldom'); }}> HTML DOM </button>
        </div>
    );
}

export default HtmlList;