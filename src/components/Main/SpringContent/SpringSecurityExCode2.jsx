import React, { useEffect, useRef, useState } from 'react';

const SpringSecurityExCode2 = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.innerWidth);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[1].style.left = null;
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
                        <a href="#Spring Security ExCode1" className="col_b"> <b> Spring Security ExCode2 </b> </a>
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
                                                <a href="#UserMvcConfig" className="col_p"> UserMvcConfig </a>
                                                <a href="#WebSecurityConfig" className="col_p"> WebSecurityConfig </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> controller </summary>
                                                <a href="#UserController" className="col_p"> UserController </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> domain </summary>
                                                <a href="#UserEntity" className="col_p"> UserEntity </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> dto </summary>
                                                <a href="#UserDto" className="col_p"> UserDto </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> repository </summary>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                        </details>
                                    </details>
                                    <details>
                                        <summary> resources </summary>
                                        <details>
                                            <summary className="col_g"> static </summary>
                                            <a href="#index" className="col_p"> index </a>
                                        </details>
                                        <details>
                                            <summary className="col_g"> templates </summary>
                                            <a href="#login" className="col_p"> login </a>
                                            <a href="#main" className="col_p"> main </a>
                                            <a href="#signup" className="col_p"> signup </a>
                                        </details>
                                        <p> <a className="col_p" href="#application.yml"> application.yml </a> </p>
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
                    <span className="mtitle"> <a name="Spring Security ExCode1">  Spring Security ExCode2 </a> </span>
                    <p> <small> 스프링 시큐리티 기능보다는 mysql에 데이터를 저장하고 로그인을 해보는 테스트 그리고 thymeleaf로 화면에 간단한 유저 정보 보여주기 </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="spring initializr"> spring initializr</a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/SpringSecurityStart.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="WebSecurityConfig"> WebSecurityConfig </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/WebSecurityConfig.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserMvcConfig"> UserMvcConfig </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/UserMvcConfig.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserController"> UserController </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/UserController.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserEntity"> UserEntity </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/UserEntity.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserDto"> UserDto </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/UserDto.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserRepository"> UserRepository </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/UserRepository.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"><a name="index"> index </a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/index.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"><a name="login"> login </a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/login.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"><a name="main"> main </a>  </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/main.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="signup"> signup </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/signup.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="application.yml"> application.yml </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/application.yml.png'} alt='' /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> 결과 </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="view.login"> view.login </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/view.login.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="view.signup"> view.signup </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/view.signup.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="dosignup"> dosignup </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/dosignup.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="mysql"> mysql </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/mysql.png'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="dologin"> dologin </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode2/dologin.png'} alt='' /> </p>
                    </span>
                </span>
            </div>
        </>
    );
}
export default SpringSecurityExCode2;

