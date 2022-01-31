import React from 'react';
import { Link } from 'react-router-dom';

const JspServletList = () => {


  return (
    <div className="navMenuContainer2">
      <div className="menu menu1">
        <Link to="/jspservlet_basic"> JSP,Servlet 기초 </Link>
        <Link to="/jspservlet_information"> JSP,Servlet 정보 </Link>
        <Link to="/jspservlet_bulletinboard"> JSP,Servlet 게시판만들기 </Link>
      </div>
      <div className="menu menu2">
        <Link to="/jspservlet_jstl"> JSP JSTL </Link>
        <Link to="/jspservlet_el"> JSP EL </Link>
        <Link to="/jspservlet_jdbc"> JDBC </Link>
      </div>
    </div>
  );
}

export default JspServletList;