import React from 'react';
import { Link } from 'react-router-dom';

const ReactList = () => {

  return (
    <div className="nav-menu2__inner-box">
      <div className="menu menu75vw">
        <Link to="/react_basic"> React Basic </Link>
        <Link to="/react_javascript"> React Javascript </Link>
        <Link to="/react_class"> React Class </Link>
        <Link to="/react_hooks"> React Hooks </Link>
        <Link to="/react_redux"> React Redux </Link>
        <Link to="/react_redux_saga"> React ReduxSaga </Link>
        <Link to="/react_recoil"> React Recoil </Link>
        <Link to="/react_router"> React Router </Link>
        <Link to="/react_animation"> React Animation </Link>
        <Link to="/react_modal"> React Modal </Link>
        <Link to="/react_stylecomponent"> React StyledComponent </Link>
        <Link to="/react_ajax"> React Ajax </Link>
        <Link to="/react_fetchapi"> React FetchAPI </Link>
        <Link to="/react_axios"> React Axios </Link>
      </div>
      <div className="menu menu25vw">
        <Link to="/react_vscode"> 리액트 Vscode 익스텐션 </Link>
      </div>
    </div>
  );
}

export default ReactList;