import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const JspServletList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/jspservlet_information"> JSP,Servlet 정보 </Link>
                <Link to="/jspservlet_basic"> JSP,Servlet 공부 </Link>
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