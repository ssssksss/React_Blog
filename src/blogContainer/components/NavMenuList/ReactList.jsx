import React from 'react';
import { Link } from 'react-router-dom';

const ReactList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu75vw">
        <Link to="react_basic"> Basic </Link>
        <Link to="react_javascript"> Javascript </Link>
        <Link to="react_class"> Class </Link>
        <Link to="react_hooks"> Hooks </Link>
        <Link to="react_redux"> Redux </Link>
        <Link to="react_redux_saga"> ReduxSaga </Link>
        <Link to="react_recoil"> Recoil </Link>
        <Link to="react_router"> Router </Link>
        <Link to="react_animation"> Animation </Link>
        <Link to="react_modal"> Modal </Link>
        <Link to="react_styledcomponent"> StyledComponent </Link>
        <Link to="react_ajax"> Ajax </Link>
        <Link to="react_fetchapi"> FetchAPI </Link>
        <Link to="react_axios"> Axios </Link>
      </div>
      <div className="menu menu25vw">
      </div>
    </div>
  );
}

export default ReactList;