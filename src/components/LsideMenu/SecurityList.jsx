import React from 'react';

const BlankList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('jwt') }}> JWT 토큰 </button>
                <button onClick={() => { send('hmac') }}> HMAC 알고리즘 </button>
                <button onClick={() => { send('hash') }}> HASH </button>
                <button onClick={() => { send('encodingdecoding') }}> 암호화 복호화 </button>
                <button onClick={() => { send('hackingattack') }}> 해킹 공격 </button>
                <button onClick={() => { send('ipspoofing') }}> IP Spoofing </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('') }}>  </button>
            </div>
        </div>
    );
}

export default BlankList;