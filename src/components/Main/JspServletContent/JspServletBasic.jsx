import React from 'react';

const JspServletBasic = (props) => {

    return (
        <>
            <span className="lblock">
                <span className="mtitle"> <a name="JSP커스텀태그"> JSP 커스텀태그 </a> </span>
                <a href="https://gangzzang.tistory.com/entry/JSP-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%83%9C%EA%B7%B8Custom-Tag" target="_blank"> 참고사이트</a>
                <p> 1. WEB-INF - tags 폴더 - 태그파일명.tag파일 </p>
                <p> 2. .tag에서 커스텀태그 정의 </p>
                <span className="mblock">
                    <p> <i> &lt;%@tag language="java" pageEncoding="UTF-8" body-content="empty"%&gt;</i> : 태그 파일의 정보 명시</p>
                    <span className="sblock">
                        <p> <i> body-content = </i>  empty: 몸체가 없음 , scriptless: (스트립틀릿,스크립팅,선언문)은 올수없음, tagdependent: 태그를 몸체로 사용
                            ,JSP: JSP에 들어가는 내용이면 모두 가능
                        </p>
                    </span>
                    <p> <i> &lt;%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%&gt; </i>
                        :  태그파일에서 사용할 태그라이브러리 명시</p>
                    <p> <i> &lt;%@ tag import ="java.util.Arraylist" %&gt;</i> : 자바 클래스 임포트 </p>
                    <p> <i> &lt;%@ attribute name="매개변수"%&gt;</i> : JSP에서 매개변수로 받아와 {"${매개변수}"}와 같이 사용 </p>
                    <p> 나머지는 HTML 코드 작성 </p>
                </span>
                <p> 3. JSP에서 커스텀태그 사용 </p>
                <span className="mblock">
                    <p> &lt;%@ prefix="사용할커스텀태그이름 taglib tagdir="/WEB-INF/tags""%&gt; </p>
                    <p> &lt;사용할커스텀태그이름:태그파일명 매개변수="값"/&gt; </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSP커스텀태그2 tld방식">JSP커스텀태그2 tld방식 </a> </span>
                <p> 1. WEB-INF - tld 폴더 - 태그파일명.tld파일 </p>
                <p> 2. .tld에서 커스텀태그 참고 </p>
                <span className="mblock">
                    <p> {"<taglib>"} </p>
                    <p> {"<tag>"} </p>
                    <p> &nbsp;&nbsp;{"<name>student</name>"} </p>
                    <p> &nbsp;&nbsp;{"<tag-class>패키지.TagHandler클래스</tag-class>"} </p>
                    <p> &nbsp;&nbsp;{"<body-content>scriptless</body-content>"} </p>
                    <p> &nbsp;&nbsp;{"<attribute>"} </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;{"<name>border</name>"} </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;{"<required>true</required>"} </p>
                    <p> &nbsp;&nbsp;{"</attribute>"} </p>
                    <p> {"</tag>"} </p>
                    <p> {"/taglib"} </p>
                </span>
                <p> 3. jsp에서 커스텀태그 사용 </p>
                <span className="mblock">
                    <p> <i> &lt;taglib uri="/WEB-INF/tld/stutag.tld" prefix="mytag"%&gt; </i>
                        :  태그파일에서 사용할 태그라이브러리 명시</p>
                    <p> <i> &lt;mytag:student border="10"&gt;학생 목록&lt;/mytag:student&gt;</i> : 자바 클래스 임포트 </p>
                </span>
                <p> 4. .java 정의 </p>
                <p> 파일명은 TagHandler 처럼 사용하는 것 같다</p>
                <span className="mblock">
                    <p> SimpleTagSupport 클래스 상속</p>
                    <p> public void doTag()에 정의하고 사용</p>
                    <p> 추가 사용방법은 나중에 인터넷 참고 </p>
                </span>
            </span>
        </>
    );
}

export default JspServletBasic;