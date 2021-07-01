import React, { useEffect, useRef, useState } from 'react';

const SpringExCode1 = (props) => {
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
                        <a href="#" className="col_b"> <b> Intellij-Gradle-JPA-MySQL </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';

                        }}> ❌ </button>
                    </span>
                    <p className="hyperlink">
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
                                                <summary className="col_g"> controller </summary>
                                                <a href="#UserController" className="col_p"> UserController </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> entity </summary>
                                                <a href="#Users" className="col_p"> User </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> repository </summary>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> service </summary>
                                                <details>
                                                    <summary className="col_g"> serviceImpl </summary>
                                                    <a href="#UserService" className="col_p"> UserService</a>
                                                </details>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                            <p> <a href="#DemoApplication" className="col_p"> DemoApplication </a> </p>
                                        </details>
                                    </details>
                                    <details>
                                        <summary> resources </summary>
                                        <details>
                                            <summary className="col_g"> static </summary>
                                        </details>
                                        <details>
                                            <summary className="col_g"> templates </summary>
                                        </details>
                                        <p> <a className="col_p" href="#application.properties"> application.properties </a> </p>
                                    </details>
                                    <a href="#build.gradle" className="col_p"> build.gradle </a>
                                </details>
                                <details>
                                    <summary className="col_r"> test </summary>
                                    <details>
                                        <summary> java </summary>
                                    </details>
                                </details>
                            </details>
                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="">  Intellij-Gradle-JPA-MySQL </a> </span>
                    <p> <small> 스프링 Gradel을 이용하여 MySQL에 넣어보는 예제 Postman을 사용하여 파라미터를 입력하여
                        MySQL에 저장하고 삭제하는 것 까지
                    </small> </p>
                    <span className="mblock">
                        <span className="stitle"> 기초설정 </span>
                        <p> File - Settings - Build,Execution,Deployment - Build Tools - Gradle - Build and run using,Run tests using
                            칸에 Gradle을 Intellij IDEA로 변경 </p>
                        <p> 만약에 디렉토리 폴더에 빨간줄이 뜨면 프로젝트폴더 우클릭 - git add 해주기 </p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/StartSpring_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Directory">  Directory </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserController">  controller/UserController.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserController_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Users">  entity/Users.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Users_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserRepository">  repository/UserRepository.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserRepository_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserServiceImpl">  service/serviceImpl/UserServiceImpl.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserServiceImpl_1.PNG'} alt='' /> </p>
                        <span className="sblock">
                            <p> 1. UserRepository 인터페이스 빈 객체를 userRepository로 사용 </p>
                            <p> 2. getAllUsers() 메소드에서 return 값으로 userRepository.findAll()을 반환하는데</p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserService">  service/UserService.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserService_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="application.properties"> resources/application.properties </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/application.properties_1.PNG'} alt='' /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="build.gradle">  build.gradle </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/build.gradle_1.PNG'} alt='' /> </p>
                    </span>
                </span>
            </div>
        </>
    );
}
export default SpringExCode1;

