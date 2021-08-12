import React, { useEffect, useRef, useState } from 'react';

const Thymeleaf = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 목록 </summary>
                            <details open>
                                <summary className="col_g"> 세부 목록 </summary>
                                <a href="#참고" className="col_p"> 참고 </a>
                                <a href="#thymeleaf 속성" className="col_p"> thymeleaf 속성 </a>
                                <a href="#thymeleaf 사용방법" className="col_p"> thymeleaf 사용방법 </a>
                                <a href="#" className="col_p">  </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
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

export default Thymeleaf;