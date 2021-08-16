import React from 'react';
import './LsideMenuStyle.css';

const JspServletList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="jspservletlist">
            <button onClick={() => { send('jspservletinformation') }}> JSP&amp;Servlet 정보 </button>
            <button onClick={() => { send('jspservletbasic') }}> JSP&amp;Servlet 코드 </button>
            <button onClick={() => { send('jspservletbulletinboard') }}> JSP&amp;Servlet 게시판만들기 </button>
            <button onClick={() => { send('jspservletjstl') }}> JSP JSTL </button>
            <button onClick={() => { send('jspservletel') }}> JSP EL </button>
            <button onClick={() => { send('테스트') }}> 테스트 </button>
            <button onClick={() => { send('jdbc') }}> JDBC </button>
        </div>
    );
}

export default JspServletList;