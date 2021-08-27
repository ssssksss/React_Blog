import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const LinuxList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/keymap_basic"> 리눅스 공부 </Link>
                <Link to="/keymap_command"> 리눅스 명령어 </Link>
                <Link to="/keymap_directory"> 리눅스 디렉토리 구조 </Link>
                <Link to="/keymap_shellscript"> 리눅스 쉘 스크립트 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/keymap_ubuntu"> 리눅스 우분투 </Link>
                <Link to="/keymap_centos7"> 리눅스 CentOS7 </Link>
                <Link to="/keymap_mobaxterm"> 리눅스 MobaXterm </Link>
                <Link to="/keymap_vimeditor"> 리눅스 VimEditor </Link>
                <Link to="/keymap_shell"> 리눅스 쉘 </Link>
            </div>
        </div>
    );
}

export default LinuxList;