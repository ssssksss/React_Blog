import React from 'react';
import { Link } from 'react-router-dom';

const PtyhonList = () => {


  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="python_basic"> Python 공부 </Link>
        <Link to="python_regex"> Python 정규표현식 </Link>
      </div>
      <div className="menu menu2">

      </div>
    </div>
  );
}

export default PtyhonList;