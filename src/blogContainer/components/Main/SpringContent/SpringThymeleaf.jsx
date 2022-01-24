import React, { useEffect, useRef } from 'react';

const SpringThymeleaf = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> thymeleaf란 </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 설명 </h2>
                            <li> thymeleaf 공식 사이트: https://www.thymeleaf.org/ </li>
                            <li> <a href="https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#standard-expression-syntax" target="_blank">    thymeleaf 예제 튜토리얼 </a> </li>
                            <li> 스프링부트 메뉴얼: https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/
                                html/spring-boot-features.html#boot-features-spring-mvc-template-engines </li>
                            <li> spring에서 추천하는 템플릿 엔진 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> thymeleaf 기본 코드 </summary>
                        <div className='block2'>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 기본 형식
                                <div className='block3'>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li> <h3 className="h3">  </h3>
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
                                        </li> <br />
                                    </ul>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> thymeleaf에 live server 적용하기 (FW.Intellij) </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 설명 </h2>
                            <li> Gradle에 compileOnly "org.springframework.boot:spring-boot-devtools"  </li>
                            <li> application.properties 나 application.yml에 아래코드 추가
                                <div className="block3">
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
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> thymeleaf 문법 (아직 정리 필요) </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 기본 속성 (정리 필요) </h2>
                            <li> {' ${변수명} '} # 변수를 출력 </li>
                            <li> {' *{}'} # 선택 변수 표현식
                                <div className='block3'>
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

                            <h2 className="h2"> ✔ 설명 {'&'} 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3 className="h3"> th:text th:utext </h3>
                                        <li>  th:text : 서버에서 객체에 html태그를 담아 보내면 객체를 텍스트로 인식해서 출력</li>
                                        <li>  th:utext : 서버에서 객체에 html태그를 담아 보내면 객체를 html태그로 인식해서 출력</li>
                                        <li> {' <div th:text="${객체명}"> </div> '} </li>
                                        <li> {' <div th:utext="${객체명}"> </div> '} </li>
                                        <div className="block4">
                                            <li> {' <div th:text="${user.id}"> </div> '} <small> # user라는 객체의 id 필드 출력 </small> </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:value (확인필요) </h3>
                                        <li> th:value : input태그에 값을 넣어줄때 사용 , + 기호로 여러개를 넣어줄 수 있음 </li>
                                        <li> {' <div th:value="${객체명}+'}'문자열넣기'{'+${객체명}"> </div> '} </li>
                                        <div className="block4">
                                            <li>  </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:with (with를 이용하여 변수를 만들면 범위가 어디까지인지 확인할 것) </h3>
                                        <li> 변수값으로 지정해서 사용 , 객체를 변수에 넣고 변수를 text방식으로 출력 </li>
                                        <li> {' <div th:with="변수명=${객체명}" th:text="${변수명}"> </div> '} </li>
                                        <div className="block4">
                                            <li> {' <div th:with="name=${user.name}" th:text="${name}"> </div> '}  </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:switch , th:case (객체값이 존재하지 않는다면 에러가 나는지 안나는지 확인) </h3>
                                        <li> switch - case 문 사용방법 </li>
                                        <li> {' <div th:switch="${객체명}"> </div> '}
                                            <li> {' <div th:case="'}'조건값'{'"> </div> '} </li>
                                            <li> {' <div th:case="'}'객체명'{'"> </div> '} </li>
                                            <li> {' <div th:case="*"> </div> '} # 나머지 모든 경우 </li>
                                        </li>
                                        <li> {'</div>'} </li>
                                        <div className="block4">
                                            <li> {' <div th:switch="${user.name}"> </div> '}
                                                <li> {' <div th:case="'}'mike'{'"> 사용자는 mike 입니다. </div> '} </li>
                                                <li> {' <div th:case="'}'sam'{'"> 사용자는 sam 입니다.</div> '} </li>
                                                <li> {' <div th:case="*"> 사용자는 ???입니다. </div> '} # 나머지 모든 경우 </li>
                                            </li>
                                            <li> {'</div>'} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:if (else 사용방법에 대해 테스트 해보기, 일단 추측으로 적어놓음) </h3>
                                        <li> if,if else문 </li>
                                        <li> {' <div th:if="${객체명}=='}'조건값'"{' th:text="${객체명}"> </div> '} </li>
                                        <li> {' <div th:unless="${객체명}=='}'조건값'"{' th:text="${객체명}"> </div> '} </li>
                                        <div className="block4">
                                            <li> {' <div th:if="${user.name}=='}'mike'"{' th:text="${mike}"> </div> '} </li>
                                            <li> {' <div th:unless="${user.name}=='}'sam'"{' th:text="${sam}"> </div> '} </li>
                                            <li> {' <div th:unless="true" th:text="${user.name}"> </div> '} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:each </h3>
                                        <li> 리스트 객체를 받아와서 foreach문 처럼 처리 </li>
                                        <li> {' <div th:each="사용할변수명:${리스트객체}"> </div> '}
                                            <li> {' <div th:text="${사용할변수명.리스트객체의멤버변수명}"> </div> '} </li>
                                        </li>
                                        <div className="block4">
                                            <li> {' <div th:each="user:${users}"> </div> '} <small> # {'List<User> users'} </small>
                                                <li> {' <div th:text="${user.name}"> </div> '} </li>
                                            </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:action (context-path가 뭔지는 알았지만 나중에 테스트를 좀 해봐야할 것 같다.) </h3>
                                        <li> th:action은 context-path를 생략할 수 있다 </li>
                                        <div className="block4">
                                            <li> {' <form th:action ="{@{/경로}}"> </form> '} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:href </h3>
                                        <li> html의 a태그의 href 속성이다. </li>
                                        <li> {' <a th:href="@{url주소나 경로}"> </a> '} </li>
                                        <div className="block4">
                                            <li> {' <a th:href="@{http://www.naver.com}"> </a> '} </li>
                                            <li> {' <a th:href="@{/naver/news}"> </a> '} </li>
                                            <li> {' <a th:href="@{/naver/news(id=1,name='}'test'{')}"> </a> '} </li>
                                            <li> {' <a th:href="@{/naver/news(id=${user.id})}"> </a> '} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:attr (알아 볼것) </h3>
                                        <li>  </li>
                                        <div className="block4">
                                            <li> </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:object </h3>
                                        <li> form 태그에서 submit으로 보낼때 객체로 설정 </li>
                                        <li> 객체를 받아와서 뿌려줄수도 있고, 폼태그와 같이 객체를 담아서 다시 보낼수도 있다. </li>
                                        <li> {'<form action="@{주소나 경로}" th:object="${사용할객체명 혹은 값을 받은 객체명}"> method="post" '} </li>
                                        <li> {' </form>'} </li>
                                        <div className="block4">
                                            <li> {'<form action="@{/userlogin}" th:object="${user}"> method="post" '}
                                                <li> {' <input type="text" th:field="*{id}" /> '} <small> # *은 상단에 보이는 객체의 필드라는 뜻 </small> </li>
                                                <li> {' <input type="password" th:field="*{password}" /> '} <small> # {' *{password} 와 ${user.password} 같은의미 '} </small> </li>
                                            </li>
                                            <li> {' </form>'} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:fragement th:insert th:replace (확인필요)  </h3>
                                        <li> th:fragement : 공통으로 사용되는 html태그를 통째로 가져옴 </li>
                                        <li> th:insert : th:fragement로 정의한 태그 덩어리를 지정한 태그 내부에 불러옴 </li>
                                        <li> th:insert : th:fragement로 정의한 태그 덩어리를 지정한 태그를 제거하고 불러옴 </li>
                                        <li> {' <div th:fragment="fragment참조이름">  </div> '} </li> <small> # 선언한 div 태그 안에 태그들까지 전부 참조 </small>
                                        <li> {' <div th:insert="~{/common :: fragment참조이름}"> </div>'} </li>
                                        <div className="block4">
                                            <li>  <small> templates/common.html에 div 태그라고 가정 </small>
                                                <li> {' <div th:fragment="fragment참조이름"> <span> div태그 내부의 span태그도 참조됩니다. </span> </div> '} </li>
                                            </li> <br />
                                            <li> <small> common.html에 태그 불러오기  </small>
                                                <li> {'<div th:insert="~{/common :: fragment참조이름}"></div>'}  </li>
                                                <li> {'<div th:replace="~{/common :: fragment참조이름}"></div>'}  </li>
                                            </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:classappend (사용방법 좀 더 알아보기) </h3>
                                        <li> html 태그에 속성을 추가 할 수 있다. </li>
                                        <li> {' <div th:classappend="'}'추가할 속성'{'"> </div> '} </li>
                                        <li> 추가할 속성 : 'disabled' ,  </li>
                                        <div className="block4">
                                            <li> {' <div th:classappend="${currentPage} == 0 ? '}'disabled'{'"> </div> '} </li>
                                        </div>
                                    </li> <br />

                                    <li> <h3 className="h3"> th:errors (사용방법 좀 더 알아보기) </h3>
                                        <li> 에러를 필드에 담아서 보내서 에러가 있는 객체가 있으면 에러 발생, 아마 get 파라미터에 error이 오는것으로 알고는 있음 </li>
                                        <li> {' <div th:errors="${}"> </div> '} </li>
                                        <div className="block4">
                                            <li> {' <div th:errors="${user}"> </div> '} </li>
                                        </div>
                                    </li> <br />

                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> thymeleaf 와 spring security </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 thymeleaf sec 사용조건 </h2>
                            <li> sec:를 사용하려면
                                <div className="block3">
                                    <li> {'<html lang="UTF-8" xmlns:th="http://www.thymeleaf.org"  xmlns:sec="http://www.thymeleaf.org/extras/spring-security">'} <small> # html 상단에 추가 </small> </li>
                                    <li> implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity5' <small> # build.gradle dependencies에 추가 </small> </li>
                                </div>
                            </li>

                            <h2 className="h2"> ✔ 설명 {'&'} 예시</h2>
                            <div className="block3">

                                <li> <h3 className="h3"> sec:authorize (나중에 확인) </h3>
                                    <li> 권한과 관련된 내용을 처리할 수 있다. </li>
                                    <div className='block4'>
                                        <li> {' <div sec:authorize="isAnonymous()"> </div> '} </li>
                                        <li> {' <div sec:authorize="isAuthenticated()"> </div> '} </li>
                                        <li> {' <div sec:authorize="!isAuthenticated()"> </div> '} </li>
                                        <li> {' <div sec:authorize="hasRole('}'ROLE_USER'{')"> </div> '} </li>
                                        <li> {' <div sec:authorize="!hasRole('}'ROLE_USER'{')"> </div> '} </li>
                                        <li> {' <div sec:authorize="hasAnyRole('}'ROLE_USER','ROLE_ADMIN'{')"> </div> '} </li>
                                    </div>
                                </li> <br />

                                <li> <h3 className="h3"> sec:authentication (확인필요, jsp에서 사용되는 것이 spring에는 적용이 되지 않음 다시한번 확인 할것!!) </h3>
                                    <li>  </li>
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
                                    <div className='block4'>
                                        <li> </li>
                                    </div>
                                </li> <br />

                                <li> <h3 className="h3"> #authorization ( 나중에 더 알아보기 )</h3>
                                    <li> sec:authentication에서 인증된 객체의 이름을 가져오려고 했으나 되지를 않아 방법을 찾던 도중 발견 </li>
                                    <li> 시큐리티 메소드를 가져와서 사용하는 것 같아서 편리함 </li>
                                    <li> 인증되지 않은 객체가 접근하면 에러를 발생시키므로 authorization.getAuthentication() != null로 먼저 확인하고 사용한다. </li>
                                    <li> {' <div th:text="${#authorization.getAuthentication()}"> </div> '} <small> # authorization 정보 출력 </small> </li>
                                    <li> {' <div th:text="${#authorization.getAuthentication().getPrincipal()}"> </div> '} <small> # 인증 객체 정보 출력 </small> </li>
                                    <li> {' <div th:text="${#authorization.expression('}'isAuthenticated()'{')}" }>  </div> '} <small> # true 출력 </small>  </li>
                                    <div className='block4'>
                                        <li> {' <div th:if="${#authorization.getAuthentication().getPrincipal().getUsername() == board.client.username} </div> '} </li>
                                    </div>
                                </li> <br />

                            </div>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default SpringThymeleaf;