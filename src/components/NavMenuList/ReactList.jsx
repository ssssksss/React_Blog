import React from 'react';
import { Link } from 'react-router-dom';

const ReactList = () => {

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/react_basic"> 리액트 기초 </Link>
                <Link to="/react_javascript"> 리액트 자바스크립트 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/react_vscode"> 리액트 Vscode 익스텐션 </Link>
            </div>
        </div>
    );
}

export default ReactList;