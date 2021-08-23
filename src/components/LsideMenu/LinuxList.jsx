import React from 'react';
import './LsideMenuStyle.css';

const LinuxList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <button onClick={() => { send('linuxstudy') }}> 리눅스 공부 </button>
                <button onClick={() => { send('linuxcommand') }}> 리눅스 명령어 </button>
                <button onClick={() => { send('linuxdirectory') }}> 리눅스 디렉토리 구조 </button>
                <button onClick={() => { send('linuxshellscript') }}> 쉘 스크립트 </button>
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('linuxubuntu') }}> 리눅스 우분투 </button>
                <button onClick={() => { send('linuxcentos7') }}> 리눅스 CentOS7 </button>
                <button onClick={() => { send('mobaxterm') }}> MobaXterm </button>
                <button onClick={() => { send('linuxvimeditor') }}> VimEditor </button>
                <button onClick={() => { send('linuxshell') }}> 리눅스 셸 </button>
            </div>
        </div>
    );
}

export default LinuxList;