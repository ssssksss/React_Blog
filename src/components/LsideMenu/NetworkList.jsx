import React from 'react';

const NetworkList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('networkstudy') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Study_icon.svg'} /> 네트워크 공부 </button>
                <button onClick={() => { send('networkcommand') }}> 네트워크 관련 명령어 </button>
                <button onClick={() => { send('networkwireshark') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Wireshark_icon.svg'} /> wireshark </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default NetworkList;