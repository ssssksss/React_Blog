import React from 'react';
import { Link } from 'react-router-dom';

const BootstrapList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="bootstrap_basic"> bootstrap 기초 </Link>
        <Link to="bootstrap_table"> bootstrap 테이블 </Link>
      </div>
      <div className="menu menu2">
        <Link to="">  </Link>
      </div>
    </div>
  );
}

export default BootstrapList;