import React, { useEffect, useRef, useState } from 'react';

const SpringSecurityExCode3 = (props) => {

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
                        <a href="#main" className="col_b"> <b> 스프링 공부 </b> </a>
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
                                    <details open>
                                        <summary> java</summary>
                                        <details open>
                                            <summary> 패키지명 </summary>
                                            <details open>
                                                <summary className="col_g"> auth </summary>
                                                <a href="#CustomUserDetails" className="col_p"> CustomUserDetails </a>
                                                <a href="#CustomUserDetailsService" className="col_p"> CustomUserDetailsService </a>
                                            </details>
                                            <details open>
                                                <summary className="col_g"> config </summary>
                                                <a href="#CustomWebMvcConfig" className="col_p"> CustomWebMvcConfig </a>
                                                <a href="#CustomWebSecurityConfig " className="col_p"> CustomWebSecurityConfig  </a>
                                            </details>
                                            <details open>
                                                <summary className="col_g"> controller </summary>
                                                <a href="#UserController" className="col_p"> UserController </a>
                                            </details>
                                            <details open>
                                                <summary className="col_g"> entity </summary>
                                                <a href="#User" className="col_p"> User </a>
                                            </details>
                                            <details open>
                                                <summary className="col_g"> repository </summary>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                        </details>
                                    </details>
                                    <details open>
                                        <summary> resources </summary>
                                        <details>
                                            <summary className="col_g"> static </summary>
                                        </details>
                                        <details open>
                                            <summary className="col_g"> templates </summary>
                                            <a href="#admin.html" className="col_p"> admin.html </a>
                                            <a href="#index.html" className="col_p"> index.html </a>
                                            <a href="#joinForm.html" className="col_p"> joinForm.html </a>
                                            <a href="#loginForm.html" className="col_p"> loginForm.html </a>
                                            <a href="#member.html" className="col_p"> member.html </a>
                                            <a href="#user.html" className="col_p"> user.html </a>
                                        </details>
                                        <p> <a className="col_p" href="#application.yml"> application.yml </a> </p>
                                    </details>
                                    <details open>
                                        <summary> 결과 </summary>
                                        <a href="#result" className="col_p"> result </a>
                                    </details>

                                    {/* <details open>
                                    <summary className="col_r"> test </summary>
                                    <details open>
                                        <summary> java </summary>
                                    </details>
                                </details> */}
                                </details>
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p> */}
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >

                <ul>
                    <span className="lblock">
                        <span className="mtitle"> Spring Security Excode3 </span>
                        <small> JPA를 이용한 회원가입 , DB의 정보를 가지고 로그인을 해보고 인증과 권한 유무에 따라 특정 URL에 접속이 가능한지 불가능한지 테스트 하는 예제</small>
                        <span className="mblock">
                            <span className="stitle"> <a name="spring initializr"> spring initializr </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/SpringSecurityStart.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="directory"> directory </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/directory.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="application.yml"> application.yml </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/application.yml.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="CustomUserDetails"> CustomUserDetails </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomUserDetails.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="CustomUserDetailsService"> CustomUserDetailsService </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomUserDetailsService.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="CustomWebMvcConfig"> CustomWebMvcConfig </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomWebMvcConfig.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="CustomWebSecurityConfig"> CustomWebSecurityConfig </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomWebSecurityConfig.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="UserController"> UserController  </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/UserController.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="User"> User </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/User.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="UserRepository"> UserRepository </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/UserRepository.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="admin.html"> admin.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/admin.html.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="index.html"> index.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/index.html.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="joinForm.html"> joinForm.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/joinForm.html.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="loginForm.html"> loginForm.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/loginForm.html.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="member.html"> member.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/member.html.png'} alt='' />
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="user.html"> user.html </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/user.html.png'} alt='' />
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="result"> result </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result1.png'} alt='' />
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result2.png'} alt='' />
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result3.png'} alt='' />
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result4.png'} alt='' />
                        </span>
                        {/*  */}
                        {/* <span className="mblock">
                            <span className="stitle"> <a name="">  </a> </span>
                            <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/.png'} alt='' />
                        </span> */}
                        {/*  */}
                    </span>
                </ul>
            </div>
        </>
    );
}
export default SpringSecurityExCode3;