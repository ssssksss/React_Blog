import React from 'react';
import { Link } from 'react-router-dom';

const KeyMapList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/keymap_intellij"> Intellij 단축키, 설정 </Link>
        <Link to="/keymap_vscode"> VScode 단축키, 설정 </Link>
        <Link to="/keymap_eclipse"> Eclipse 단축키 및 설정 </Link>
        <Link to="/keymap_sublimetext"> SublimeText 단축키 및 설정 </Link>
      </div>
      <div className="menu menu2">
        <Link to="/keymap_window"> Window 단축키 및 설정 </Link>
        <Link to="/keymap_browser"> Browser 단축키 및 설정 </Link>
      </div>
    </div>
  );
}

export default KeyMapList;