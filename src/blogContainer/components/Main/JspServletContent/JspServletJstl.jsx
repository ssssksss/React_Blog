const JspServletJstl = (props) => {

    return (
        <>
            {/* <a href="https://gangzzang.tistory.com/entry/JSP-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%83%9C%EA%B7%B8Custom-Tag" target="_blank"> 참고사이트</a> */}
            <span className="lblock">
                <p> <a href="https://velog.io/@ye050425/JSP-JSTL-%EC%A0%95%EB%A6%AC" target="_blank">참고사이트</a> </p>
                <p> JSTL: 커스텀태그 기술을 이용해서 일반적으로 많이 사용되는 기능들을 표준화한것 </p>
                <p> 접근 가능한 내장 객체 4종류 : application,session,request,page </p>
                <span className="mtitle"> <a name="JSTL core tag">  1. JSTL core tag </a> </span>
                <p> &lt;%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %&gt; </p>
                <p> 변수지원, URL관리, 흐름 제어 등</p>
                <span className="mblock">
                    <span className="stitle"> <a name="JSTL c:out">  1. JSTL c:out </a> </span>
                    <p> HTML 화면에 출력 </p>
                    <span className="sblock">
                        <p> &lt; c:out value="${"{"}출력할 내용{"}"}" &gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:if">  2. JSTL c:if </a> </span>
                    <span className="sblock">
                        <p> &lt; c:if test="${"{"}조건식{"}"}" &gt;</p>
                        <p> &lt; /c:if &gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:choose,when,otherwise">  3. JSTL c:choose,when,otherwise </a> </span>
                    <span className="sblock">
                        <p> &lt; c:choose &gt;</p>
                        <p> &nbsp;&nbsp;&lt; c:when test="${"{"}조건식{"}"}" &gt;</p>
                        <p> &nbsp;&nbsp;&lt; /c:when &gt;</p>
                        <p> &nbsp;&nbsp;&lt; c:when test="${"{"}조건식{"}"}" &gt;</p>
                        <p> &nbsp;&nbsp;&lt; /c:when &gt;</p>
                        <p> &nbsp;&nbsp;&lt; c:otherwise&gt;</p>
                        <p> &nbsp;&nbsp;&lt; /c:otherwise &gt;</p>
                        <p> &lt; /c:choose &gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:foreach">  4. JSTL c:foreach </a> </span>
                    <span className="sblock">
                        <p> &lt; c:forEach var="i" begin="1" end="2" step="1" &gt;</p>
                        <p> &lt; /c:forEach&gt;</p>
                    </span>
                    <span className="sblock">
                        <p> &lt; c:forEach var="i" items="${"키"}" &gt;</p>
                        <p> &lt; /c:forEach&gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:param">  5. JSTL c:param </a> </span>
                    <p> URL 매개변수를 추가 </p>
                    <span className="sblock">
                        <p> &lt; c:url value="/경로" var="URL경로값(get방식으로출력)" &gt;</p>
                        <p> &lt; c:param name="키" value="값" / &gt;</p>
                        <p> &lt; c:param name="키" value="값" / &gt;</p>
                        <p> &lt; /c:url  &gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:set">  6. JSTL c:set </a> </span>
                    <span className="sblock">
                        <p> &lt; c:set var="키" scope="session" value="${"{"}값{"}"}" /&gt;</p>
                        <p> &lt; c:out value="${"{"}키{"}"}" /&gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:import">  7. JSTL c:import </a> </span>
                    <p> jsp에 inlcude와 비슷 </p>
                    <span className="sblock">
                    </span>
                    <span className="stitle"> <a name="JSTL c:forTokens">  8. JSTL c:forTokens </a> </span>
                    <p> 문자열을 토큰으로 분리하여 사용, foreach와 비슷 </p>
                    <span className="sblock">
                        <p> &lt; c:forTokens items="문자열" delims="구분문자" var="키"  &gt;</p>
                        <p> &lt; /c:forTokens &gt;</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:catch">  9. JSTL c:catch </a> </span>
                    <p> 에러가 발생할 경우 예외처리 </p>
                    <span className="sblock">
                        <p> &lt; c:catch var="키" &gt;</p>
                        <p> &lt; /c:catch  &gt;</p>
                        <p> c:if test="${"{"} 예외키 != null {"}"}"</p>
                    </span>
                    <span className="stitle"> <a name="JSTL c:redirect">  10. JSTL c:redirect </a> </span>
                    <p> 리다이렉트 처리 </p>
                    <span className="sblock">
                        <p> &lt; c:redirect url="주소" &gt;</p>
                        <p> &lt; c:param name="" &gt; 값 &lt; /c:param&gt; </p>
                        <p> &lt; /c:redirect &gt;</p>
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSTL function tag">  2. JSTL function tag </a> </span>
                <p> </p>
                <span className="mblock">
                    <span className="stitle"> <a name="">  </a> </span>
                    <span className="sblock">
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSTL formatting tag "> 3. JSTL formatting tag </a> </span>
                <p> </p>
                <span className="mblock">
                    <span className="stitle"> <a name="">   </a> </span>
                    <span className="sblock">
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSTL XML tag "> 4. JSTL XML tag </a> </span>
                <p> </p>
                <span className="mblock">
                    <span className="stitle"> <a name="">   </a> </span>
                    <span className="sblock">
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSTL SQL tag"> 5. JSTL SQL tag </a> </span>
                <p> </p>
                <span className="mblock">
                    <span className="stitle"> <a name="">   </a> </span>
                    <span className="sblock">
                    </span>
                </span>
            </span>
        </>
    );
}

export default JspServletJstl;