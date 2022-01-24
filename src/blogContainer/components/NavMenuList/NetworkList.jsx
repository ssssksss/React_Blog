import React from 'react';
import { Link } from 'react-router-dom';

const NetworkList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/network_basic"> 네트워크 기초 </Link>
                <Link to="/network_command"> 네트워크 명령어 </Link>
                <Link to="/network_arpprotocol"> 네트워크 ARP 프로토콜 </Link>
                <Link to="/network_osi7layer"> 네트워크 OSI 7 계층 </Link>
                <Link to="/network_threewayhandshake"> 네트워크 3WayHandshake </Link>
            </div>
            <div className="menu menu2">
                <Link to="/network_device"> 네트워크 관련 장치 </Link>
                <Link to="/network_wireshark"> 네트워크 와이어샤크 </Link>
                <Link to="/network_protocol"> 네트워크 프로토콜 </Link>
            </div>
        </div>
    );
}

export default NetworkList;