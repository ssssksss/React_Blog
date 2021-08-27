import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const BlankList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/security_basic"> 보안 공부 </Link>
                <Link to="/security_jwt"> JWT 토큰 </Link>
                <Link to="/security_hmac"> HMAC 알고리즘 </Link>
                <Link to="/security_hash"> HASH </Link>
                <Link to="/security_encryption"> 암호화</Link>
                <Link to="/security_hackingattack"> 해킹 공격 </Link>
                <Link to="/security_ipspoofing"> IP Spoofing </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default BlankList;