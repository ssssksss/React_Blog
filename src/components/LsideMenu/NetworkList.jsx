import React from 'react';
import './LsideMenuStyle.css';

const NetworkList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('networkstudy') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Study_icon.svg'} /> 네트워크 공부 </button>
                <button onClick={() => { send('networkcommand') }}> 네트워크 관련 명령어 </button>
                <button onClick={() => { send('wireshark') }}> <img src={process.env.PUBLIC_URL + '/img/NavMenu/Wireshark_icon.svg'} />  Wireshark </button>
                <button onClick={() => { send('arpprotocol') }}>  ArpProtocol </button>
                <button onClick={() => { send('osi7layer') }}>  OSI7Layer </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('threewayhandshake') }}> 3WayHandshake </button>
                <button onClick={() => { send('networkdevice') }}> 네트워크 관련 기기 </button>
                <button onClick={() => { send('network3') }}> network3 </button>
                <button onClick={() => { send('network4') }}> network4 </button>
            </div>
        </div>
    );
}

export default NetworkList;