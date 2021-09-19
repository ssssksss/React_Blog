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
                            <summary className='stitle'> thymeleaf 속성
                                <a name='thymeleaf 속성' style={{ visibility: 'hidden' }}> thymeleaf 속성 </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> thymeleaf 속성 종류 </div>
                                <div className='mblock'>
                                    <li> th:text #텍스트를 삽입 </li>
                                    <li> th:value="${'{}'}" #값을 삽입 </li>
                                    <li> th:with="" </li>
                                    <li> th:href="@{'{http://www.naver.com}'}"" </li>
                                    <li> th:if="${'{파라미터}'} == '조건'{'}'}" #if 조건문 </li>
                                    <li> th:unless="${'{파라미터}'} == '조건'{'}'}" #else 조건문 </li>
                                    <li> th:attr="css속성추가" #html태그에 css속성 추가하는 방법 </li>
                                    <li> th:each="리스트객체 : ${'{파라미터}'}" </li>
                                </div>
                            </div>
                        </details>
                    </div>
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
                                <span className="sstitle"> 변수 파라미터 받아오기 , ${'{}'} </span>
                                <span className="mblock">
                                    <li> {'<p th:text="${data1}">  </p>'} #data1라는 파라미터를 받아와서 출력을 해준다. </li>
                                    <li> {'<p th:text="${map객체key값.data1}">  </p>'} #data1라는 파라미터를 받아와서 출력을 해준다. </li>
                                    <li> {'<p th:text="${map객체key값.data2}">  </p>'} #data2라는 파라미터를 받아와서 출력을 해준다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 변수 파라미터 받아오기 , ${'{}'} , *{'{}'} </span>
                                <span className="mblock">
                                    <li> {' <tr th:object="${map객체key값}"> '} </li>
                                    <li> &nbsp;{' <td th:text="*{data1}"> '} </li>
                                    <li> &nbsp;{' <td th:text="*{data2}"> '} </li>
                                    <li> {' </tr> '} </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 반복문 사용 </span>
                                <span className="mblock">
                                    <li> {' <tr th:each="반복변수명 : ${파라미터}"> '} </li>
                                    <li> &nbsp;{'   <td th:text="${반복변수명.파라미터}"> '} </li>
                                    <li> &nbsp;{'   <td th:value="${반복변수명.파라미터}"> '} </li>
                                    <li> {' </tr> '} </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 메시지가 있으면 출력, 없으면 key값 출력 , #{'{}'}</span>
                                <span className="mblock">
                                    <li> {' <p th:text="#{map객체key값.DATA1}">  </p> '} </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 링크 표현식 </span>
                                <span className="mblock">
                                    <li> {' <a th:href="@{http://www.naver.com}"> naver </a> '} </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
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