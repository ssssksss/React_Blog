import React from 'react';
import { Link } from 'react-router-dom';

const LinuxList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/linux_basic"> 리눅스 공부 </Link>
                <Link to="/linux_command"> 리눅스 명령어 </Link>
                <Link to="/linux_directory"> 리눅스 디렉토리 구조 </Link>
                <Link to="/linux_shellscript"> 리눅스 쉘 스크립트 </Link>
                <Link to="/linux_server"> 리눅스 서버 </Link>
                <Link to="/linux_programinstall"> 리눅스 프로그램 설치 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/linux_ubuntu"> 리눅스 우분투 </Link>
                <Link to="/linux_centos7"> 리눅스 CentOS7 </Link>
                <Link to="/linux_mobaxterm"> 리눅스 MobaXterm </Link>
                <Link to="/linux_vimeditor"> 리눅스 VimEditor </Link>
                <Link to="/linux_shell"> 리눅스 쉘 </Link>
            </div>
        </div>
    );
}

export default LinuxList;