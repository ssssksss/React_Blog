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
            </div>
            <div className="menu menu2">
                <button onClick={() => { send('mobaxterm') }}> MobaXterm </button>
                <button onClick={() => { send('vimeditor') }}> VimEditor </button>
            </div>
        </div>
    );
}

export default LinuxList;