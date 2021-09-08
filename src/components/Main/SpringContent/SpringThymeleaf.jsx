import React from 'react';

const SpringThymeleaf = (props) => {

    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="참고"> 참고 </a> </span>
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
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="thymeleaf 속성"> thymeleaf 속성 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> thymeleaf 속성 종류 </span>
                            <span className="mblock">
                                <li> th:text #텍스트를 삽입 </li>
                                <li> th:value="${'{}'}" #값을 삽입 </li>
                                <li> th:with="" </li>
                                <li> th:href="@{'{http://www.naver.com}'}"" </li>
                                <li> th:if="${'{파라미터}'} == '조건'{'}'}" #if 조건문 </li>
                                <li> th:unless="${'{파라미터}'} == '조건'{'}'}" #else 조건문 </li>
                                <li> th:attr="css속성추가" #html태그에 css속성 추가하는 방법 </li>
                                <li> th:each="리스트객체 : ${'{파라미터}'}" </li>
                                <li> th: </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="thymeleaf 사용방법"> thymeleaf 사용방법 </a> </span>
                        <small> {' <html xmlns:th="http://www.thymeleaf.org"> '} #상단에 선언 </small>
                        <span className="sblock">
                            <small> {'Map<String,String> map객체명 = new HashMap<String, String>(); '} </small> <br />
                            <small> {' map객체명.put("data1","data1값");'} </small> <br />
                            <small> {' map객체명.put("data2","data2값");'} </small> <br />
                            <small> {'model.addAttribute("map객체key값,map객체명"); '} </small> <br />
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
                            {/*  */}
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default SpringThymeleaf;