import React from 'react';
import { Link } from 'react-router-dom';

const KeyMapList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/keymap_intellij"> 인텔리제이 단축키 및 설정 </Link>
                <Link to="/keymap_vscode"> 비쥬얼코드 단축키 및 설정 </Link>
                <Link to="/keymap_eclipse"> 이클립스 단축키 및 설정 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/keymap_window"> 윈도우 단축키 및 설정 </Link>
                <Link to="/keymap_browser"> 브라우저 단축키 및 설정 </Link>
            </div>
        </div>
    );
}

export default KeyMapList;