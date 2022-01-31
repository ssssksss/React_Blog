import React from 'react';
import { Link } from 'react-router-dom';

const JavaScriptList = () => {


  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/javascript_basic"> JavaScript 기초 </Link>
        <Link to="/javascript_basic2"> JavaScript 기초2 </Link>
        <Link to="/javascript_document"> JavaScript Document </Link>
        <Link to="/javascript_element"> JavaScript Element </Link>
        <Link to="/javascript_event"> JavaScript Event </Link>
        <Link to="/javascript_event_object"> JavaScript EventObject </Link>
        <Link to="/javascript_attribute"> JavaScript Attribute </Link>
        <Link to="/javascript_window"> JavaScript Window </Link>
        <Link to="/javascript_location"> JavaScript Location </Link>
        <Link to="/javascript_style"> JavaScript Style </Link>
        <Link to="/javascript_ajax">  Ajax </Link>
      </div>
      <div className="menu menu2">
        <Link to="/javascript_table"> JavaScript Table </Link>
        <Link to="/javascript_scroll"> JavaScript Scroll </Link>
      </div>
    </div>
  );
}

export default JavaScriptList;