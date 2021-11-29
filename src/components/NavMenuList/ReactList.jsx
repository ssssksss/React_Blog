import React from 'react';
import { Link } from 'react-router-dom';

const ReactList = () => {

    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/react_basic"> React Basic </Link>
                <Link to="/react_javascript"> React Javascript </Link>
                <Link to="/react_class"> React Class </Link>
                <Link to="/react_hooks"> React Hooks </Link>
                <Link to="/react_redux"> React Redux </Link>
                <Link to="/react_recoil"> React Recoil </Link>
                <Link to="/react_router"> React Router </Link>
                <Link to="/react_animation"> React Animation </Link>
            </div>
            <div className="menu menu2">
                <Link to="/react_vscode"> 리액트 Vscode 익스텐션 </Link>
            </div>
        </div>
    );
}

export default ReactList;