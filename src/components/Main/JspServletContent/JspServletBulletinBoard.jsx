import React from 'react';

const JspServletBulletinBoard = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 서블릿과 JSP(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#서블릿 실행하기">1. 서블릿 실행하기 </a>
                    </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="서블릿 실행하기"> 1. MVC2 모델 설계 </a> </span>
                <p> 게시판을 만들기 위하여 설계를 먼저 대략하고 진행 </p>
                <span className="mblock">
                    {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
                </span>
            </span>
        </div>
    );
}

export default JspServletBulletinBoard;