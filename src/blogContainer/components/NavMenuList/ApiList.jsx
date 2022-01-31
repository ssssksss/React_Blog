import React from 'react';
import { Link } from 'react-router-dom';

const ApiList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        {/*<Link to="/api_naverai"> 네이버 ai </Link>*/}
        <Link to="/api_naver"> 네이버 API </Link>
        <Link to="/api_kakao"> 카카오 API </Link>
        <Link to="/api_google"> 구글 API </Link>
        <Link to="/api_facebook"> 페이스북 API </Link>
      </div>
      <div className="menu menu2">
      </div>
    </div>
  );
}

export default ApiList;