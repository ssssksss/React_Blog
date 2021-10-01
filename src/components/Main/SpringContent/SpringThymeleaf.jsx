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
                                    <li> {' @{} '} # URL 표현식
                                        <li>  </li>
                                        <li>  </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li>
                                    <li> {' ~{} '} </li>
                                    <li> 삼항연산 : x = f() ? f() : g() 이거와 같은 식 x = f() ?: g() </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> th:text </div>
                                <div className='mblock'>
                                    <li> 서버에서 객체에 html태그를 담아 보내면 </li>
                                    <li> {' <div th:text="${객체명}"> </div> '} </li>
                                    <li> 결과 : 객체를 텍스트로 인식해서 출력 </li>
                                </div>
                                <div className='sstitle'> th:utext </div>
                                <div className='mblock'>
                                    <li> 서버에서 객체에 html태그를 담아 보내면 </li>
                                    <li> {' <div th:utext="${객체명}"> </div> '} </li>
                                    <li> 결과 : 객체를 태그로 인식해서 출력 </li>
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
                                    <li> 해당 경로로 요청을 보냄 </li>
                                    <li>  </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
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
                                    <li>  </li>
                                    <li> {'<form action="@{/userlogin}" th:object ="${user}"> method="post" '}
                                        <li> {' <input type="text" th:field="*{userid}" /> '} </li>
                                        <li> {' <input type="password" th:field="*{userpwd}" /> '} </li>
                                    </li>
                                    <li> {' </form>'} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:fragement </div>
                                <div className='mblock'>
                                    <li> header나 footer등 공통으로 사용되는 태그 ,  </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:insert </div>
                                <div className='mblock'>
                                    <li> 공부 필요 </li>
                                    <li> {' <div th:insert="fragments.html :: content" </div> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'> th:replace </div>
                                <div className='mblock'>
                                    <li> 공부 필요 </li>
                                    <li> {' <head th:replace="fragments.html :: head"></head> '} </li>
                                    <li> 결과 :  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> {' <div th: ="${}"> </div> '} </li>
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
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
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
                                    <li> </li>
                                    <li> </li>
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