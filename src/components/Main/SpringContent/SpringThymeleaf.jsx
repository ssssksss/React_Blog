import React from 'react';

const SpringThymeleaf = (props) => {

    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> thymeleaf 사이트
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 참고 </span>
                                <span className="mblock">
                                    <li> thymeleaf 공식 사이트: https://www.thymeleaf.org/ </li>
                                    <li> <a href="https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#standard-expression-syntax" target="_blank">    thymeleaf 예제 튜토리얼 </a> </li>
                                    <li> 스프링부트 메뉴얼: https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/
                                        html/spring-boot-features.html#boot-features-spring-mvc-template-engines </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> thymeleaf 기본 코드
                                <a name='thymeleaf 사용방법' style={{ visibility: 'hidden' }}> thymeleaf 기본 코드 </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> {'<!DOCTYPE html>'} </li>
                                    <li> {'<html lang="UTF-8" xmlns:th="http://www.thymeleaf.org">'} </li>
                                    <li> {'<head>'}
                                        <li> {'	<meta charset="UTF-8">'} </li>
                                        <li> {'	<meta http-equiv="X-UA-Compatible" content="IE=edge">'} </li>
                                        <li> {'	<meta name="viewport" content="width=device-width, initial-scale=1.0">'} </li>
                                        <li> {'	<title> 제목 </title>'} </li>
                                    </li>
                                    <li> {'</head>'} </li>
                                    <li> {'<body>'} </li>
                                    <li> {'</body>'} </li>
                                    <li> {'</html>'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> thymeleaf + 스프링(인텔리제이) live server
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설정하기 </div>
                                <div className='mblock'>
                                    <li> Gradle에 compileOnly "org.springframework.boot:spring-boot-devtools"  </li>
                                    <li> application.properties 나 application.yml 에추가
                                        <div className='sblock'>
                                            <li> spring.devtools.livereload.enabled=true  </li>
                                            <li> spring.resources.static-locations=file:src/main/resources/static/  </li>
                                            <li> spring.thymeleaf.cache=false  </li>
                                            <li> spring.thymeleaf.prefix=file:src/main/resources/templates/  </li>
                                        </div>
                                    </li>
                                    <li> Ctrl + Shift + A - regi 입력 Registry... -
                                        compiler.automake.allow.when.app.running 체크
                                    </li>
                                    <li> Ctrl + Alt + S - Build, Execution, Deployment - Compiler
                                        - Build project automatically 체크  </li>
                                    <li> <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei"
                                        target="_blank" rel="noopener noreferrer"> Browser Extension인 Live Reload 설치 </a>  </li>
                                    <li> 마지막으로 주의 : 서버 배포시 라이브 서버 관련내용들은 반드시 삭제해야함  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> thymeleaf 문법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> {' ${변수명} '} # 변수를 출력 </li>
                                    <li> {' *{}'} # 선택 변수 표현식
                                        <div className="sblock">
                                            <li> {'<div th:object="${user}">'}
                                                <li> {'<p th:text="*{name}"> </p>'} </li>
                                                <li> {'<p th:text="*{password}"> </p>'} </li>
                                            </li>
                                            <li> {'</div>'} </li>
                                        </div>
                                    </li>
                                    <li> {' #{} '} # 메시지 표현식 </li>
                                    <li> {' @{} '} # URL 표현식 </li>
                                    <li> {' ~{} '} </li>
                                    <li> 삼항연산 : x = f() ? f() : g() 이거와 같은 식 x = f() ?: g() </li>
                                    <li> {'${param.name} '} <small> html에서 name=""에 있는 변수를 가져와서 사용 가능 </small>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> th:text th:utext </div>
                                <div className='mblock'>
                                    <li>  th:text : 서버에서 객체에 html태그를 담아 보내면 객체를 텍스트로 인식해서 출력</li>
                                    <li>  th:utext : 서버에서 객체에 html태그를 담아 보내면 객체를 html태그로 인식해서 출력</li>
                                    <li> {' <div th:text="${객체명}"> </div> '} </li>
                                    <li> {' <div th:utext="${객체명}"> </div> '} </li>
                                </div>
                                <div className='sstitle'> th:value </div>
                                <div className='mblock'>
                                    <li> input태그에 값을 넣어줄때 사용 , + 기호로 여러개를 넣어줄 수 있음 </li>
                                    <li> {' <div th:value="${객체명}+'}'문자열넣기'{'+${객체명}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:with </div>
                                <div className='mblock'>
                                    <li> 변수값으로 지정해서 사용 </li>
                                    <li> {' <div th:with="변수명=${객체명}" th:text="${변수명}"> </div> '} </li>
                                    <li> 결과 : 객체를 변수에 넣고 변수를 text방식으로 출력 </li>
                                </div>
                                <div className='sstitle'> th:switch , th:case </div>
                                <div className='mblock'>
                                    <li> switch - case 문 사용방법 </li>
                                    <li> {' <div th:switch="${객체명}"> </div> '}
                                        <li> {' <div th:case="'}'조건값'{'"> </div> '} </li>
                                        <li> {' <div th:case="'}'객체명'{'"> </div> '} </li>
                                        <li> {' <div th:case="*"> </div> '} # 나머지 모든 경우 </li>
                                    </li>
                                    <li> {'</div>'} </li>
                                    <li> 결과 : case문 조건에 맞게 출력 </li>
                                </div>
                                <div className='sstitle'> th:if </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> {' <div th:if="${객체명}=='}'조건값'{'th:text="${객체명}"> </div> '} </li>
                                    <li> {' <div th:unless="${객체명}=='}'조건값'{'th:text="${객체명}"> </div> '} </li>
                                    <li> 결과 : if,if else문 </li>
                                </div>
                                <div className='sstitle'> th:each </div>
                                <div className='mblock'>
                                    <li> 리스트 객체를 받아와서 반복문처럼 처리 </li>
                                    <li> {' <div th:each="사용할변수명:${리스트객체}"> </div> '}
                                        <li> {' <div th:text="${사용할변수명.리스트객체의멤버변수명}"> </div> '} </li>
                                    </li>
                                    <li> {' <div th:each="${}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:action </div>
                                <div className='mblock'>
                                    <li> <small> th:action은 context-path를 생략할 수 있다. </small>  </li>
                                    <li>  </li>
                                    <li> {' <form th:action ="{@{/경로}}"> </form> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:href </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> {' <a th:href="@{http://www.naver.com}"> </a> '} </li>
                                    <li> {' <a th:href="@{/naver/news}"> </a> '} </li>
                                    <li> {' <a th:href="@{/naver/news(id=1,name='}'test'{')}"> </a> '} </li>
                                    <li> {' <a th:href="@{/naver/news(id=${user.id})}"> </a> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:attr </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:object </div>
                                <div className='mblock'>
                                    <li> form 태그에서 submit으로 보낼때 객체로 설정 </li>
                                    <li> 객체를 받아와서 뿌려줄수도 있고, 폼태그와 같이 객체를 담아서 다시 보낼수도 있다. </li>
                                    <li> {'<form action="@{/userlogin}" th:object ="${user}"> method="post" '}
                                        <li> {' <input type="text" th:field="*{userid}" /> '} </li>
                                        <li> {' <input type="password" th:field="*{userpwd}" /> '} </li>
                                    </li>
                                    <li> {' </form>'} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:fragement th:insert th:replace </div>
                                <div className='mblock'>
                                    <li> header나 footer등 공통으로 사용되는 태그를 다른 html에서 가져오는 방법 </li>
                                    <li>  <small> templates/index.html에 div 태그라고 가정 </small>
                                        <li> {' <div th:fragment="fragment참조이름"> 여러 내용~~~ </div> '} </li>
                                    </li> <br />
                                    <li> <small> index.html에 태그 불러오기 , insert는 div태그 내부에 선언이고, replace는 div태그를 제거하고 그대로 모든 태그를 가져와서 배치하는 것인것 같다(확인필요) </small>
                                        <li> {'<div th:insert="~{/index :: fragment참조이름}"></div>'}  </li>
                                        <li> {'<div th:replace="~{/index :: fragment참조이름}"></div>'}  </li>
                                    </li>
                                </div>

                                <div className='sstitle'> th:classappend </div>
                                <div className='mblock'>
                                    <li> <small> 조건에 따라서 html 클래스에 추가하게 할 수 있다. </small> </li>
                                    <li> {' <div th:classappend="${currentPage} == 0 ? '}'disabled'{'"> </div> '} </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>

                                <div className='sstitle'> th:errors </div>
                                <div className='mblock'>
                                    <li> <small> 에러를 필드에 담아서 보내서 에러가 있는 객체가 있으면 에러 발생 </small> </li>
                                    <li> {' <div th:errors ="${boardTitle}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}


                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> thymeleaf에서 spring security
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> sec:를 사용하려면
                                        <li> {'<html lang="UTF-8" xmlns:th="http://www.thymeleaf.org"  xmlns:sec="http://www.thymeleaf.org/extras/spring-security">'} </li>
                                        <li> build.gradle dependencies에 추가
                                            <li> implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity5' </li>
                                        </li>
                                    </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> sec:authorize </div>
                                <div className='mblock'>
                                    <li> {' <div sec:authorize="isAnonymous()"> </div> '} </li>
                                    <li> {' <div sec:authorize="isAuthenticated()"> </div> '} </li>
                                    <li> {' <div sec:authorize="!isAuthenticated()"> </div> '} </li>
                                    <li> {' <div sec:authorize="hasRole('}'ROLE_USER'{')"> </div> '} </li>
                                    <li> {' <div sec:authorize="!hasRole('}'ROLE_USER'{')"> </div> '} </li>
                                    <li> {' <div sec:authorize="hasAnyRole('}'ROLE_USER','ROLE_ADMIN'{')"> </div> '} </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> sec:authentication </div>
                                <div className='mblock'>
                                    <li> {' <div class="nav-item" sec:authorize="isAuthenticated()"> '}
                                        <li> {' <span sec:authentication="name">  </span> '} <small> 사용자 접속 이름 </small> </li>
                                        <li> {' <span sec:authentication property="principal" var="">  </span> '} </li>
                                        <li> {' <span sec:authentication property="principal.authorities" var="">  </span> '} <small> # 사용자 권한 </small> </li>
                                        <li> {' <span sec:authentication property="principal.username" var="">  </span> '} <small> #사용자 접속 이름 </small> </li>
                                        <li> {' <span sec:authentication property="principal.password" var="">  </span> '} </li>
                                        <li> {' <span sec:authentication property="principal.email" var="">  </span> '} </li>
                                        <li> {' <span sec:authentication property="principal.enabled" var="">  </span> '} </li>
                                        <li> {' <span sec:authentication property="principal.accountNonExpired" var="">  </span> '} </li>
                                        <li>  </li>
                                    </li>
                                    <li> {' </div> '} </li>
                                </div>
                                <div className='sstitle'> #authorization </div>
                                <div className='mblock'>
                                    <li> {' <div th:text="${#authorization.getAuthentication()}"> </div> '} <small> # 인증객체에 대한 설명 </small> </li>
                                    <li> {' <div th:text="${#authorization.expression('}'isAuthenticated()'{')}" }>  </div> '} <small> # true 출력 </small>
                                        <li> 단, 인증되지 않은 객체가 접근하면 에러를 발생시키므로 authorization.getAuthentication() != null로 먼저 확인하고 사용한다.  </li>
                                    </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default SpringThymeleaf;