import React from 'react';
import { Link } from 'react-router-dom';

const CicdList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="cicd_jenkins"> 젠킨스 </Link>
        <Link to="cicd_gitlab"> GitLab </Link>
        <Link to="cicd_github_action"> 깃허브액션 </Link>
      </div>
      <div className="menu menu2">
      </div>
    </div>
  );
}

export default CicdList;