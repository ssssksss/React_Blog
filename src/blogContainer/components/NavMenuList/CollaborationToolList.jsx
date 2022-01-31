import React from 'react';
import { Link } from 'react-router-dom';

const CollaborationToolList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/collaboration_github"> 깃허브 공부 </Link>
        <Link to="/collaboration_slack"> 슬랙 </Link>
        <Link to="/collaboration_diagram"> 다이어그램 </Link>
        <Link to="/Collaboration_markdown"> 마크다운 </Link>
      </div>
      <div className="menu menu2">
      </div>
    </div>
  );
}

export default CollaborationToolList;