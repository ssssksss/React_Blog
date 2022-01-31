import React from 'react';
import { Link } from 'react-router-dom';

const TypeScriptList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/typescript_basic"> 타입스크립트 기본 문법 </Link>
      </div>
      <div className="menu menu2">
        {/*<Link to="/">  </Link>*/}
      </div>
    </div>
  );
}

export default TypeScriptList;