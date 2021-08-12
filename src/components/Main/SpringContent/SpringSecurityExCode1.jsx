import React, { useEffect, useRef, useState } from 'react';

const SpringSecurityExCode1 = (props) => {
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
        if (window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            document.documentElement.scrollTop < elementHeight ?
                blockRef.current[0].style.top = (elementHeight + 30) + "px" :
                blockRef.current[0].style.top = "10px";
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
                        <a href="#Spring Security ExCode1" className="col_b"> <b> Spring Security ExCode1 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';

                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> demo </summary>
                            <details open>
                                <summary> src</summary>
                                <details open>
                                    <summary className="col_r"> main </summary>
                                    <details>
                                        <summary> java</summary>
                                        <details>
                                            <summary> 패키지명 </summary>
                                            <details>
                                                <summary className="col_g"> config </summary>
                                                <a href="#WebSecurityConfig" className="col_p"> WebSecurityConfig </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> controller </summary>
                                                <a href="#UserController" className="col_p"> UserController </a>
                                            </details>
                                        </details>
                                    </details>
                                    <details>
                                        <summary> resources </summary>
                                        <details>
                                            <summary className="col_g"> templates </summary>
                                            <a href="#login" className="col_p"> login </a>
                                            <a href="#loginsuccess" className="col_p"> loginsuccess </a>
                                        </details>
                                        <p> <a className="col_p" href="#application.properties"> application.properties </a> </p>
                                    </details>
                                    {/* <a href="#build.gradle" className="col_p"> build.gradle </a> */}
                                </details>

                                {/* <details>
                                    <summary className="col_r"> test </summary>
                                    <details>
                                        <summary> java </summary>
                                    </details>
                                </details> */}
                            </details>
                        </details>
                        <details>
                            <summary> 결과 </summary>
                            <a href="#view.login" className="col_p"> view.login </a>
                            <a href="#view.loginsuccess" className="col_p"> view.loginsuccess </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="Spring Security ExCode1">  Spring Security ExCode1 </a> </span>
                    <p> <small> 스프링 시큐리티 loginform 기능만 테스트하는 예제 </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="spring initializr"> spring initializr</a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/SpringSecurityStart.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="WebSecurityConfig"> WebSecurityConfig </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/WebSecurityConfig.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserController"> UserController </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/UserController.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"><a name="login"> login </a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/login.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="loginsuccess"> loginsuccess </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/loginsuccess.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="application.properties"> application.properties </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/application.properties.png'} alt='' /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mblock">
                        <span className="stitle"> <a name="view.login"> view.login </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/view.login.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="view.loginsuccess"> view.loginsuccess </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode1/view.loginsuccess.png'} alt='' /> </p>
                    </span>
                </span>
            </div>
        </>
    );
}
export default SpringSecurityExCode1;

