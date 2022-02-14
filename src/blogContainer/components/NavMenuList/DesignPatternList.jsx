import React from 'react';
import { Link } from 'react-router-dom';

const DesignPatternList = () => {

  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="dp_gof"> Gof </Link>
      </div>
      <div className="menu menu2">
        <Link to="dp_mvc2"> MVC2 </Link>
        <Link to="dp_mvp">  MVP  </Link>
        <Link to="dp_mvvm"> MVVM </Link>
      </div>
    </div>
  );
}

export default DesignPatternList;