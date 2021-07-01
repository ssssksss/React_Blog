import React, { useEffect, useRef, useState } from 'react';

const SpringExCode2 = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.innerWidth);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
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
                        <a href="#" className="col_b"> <b> Eclipse Bean Xml Injection </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <p className="hyperlink">
                        <details open>
                            <summary> 프로젝트 </summary>
                            <details open>
                                <summary className="col_r"> src/main/java </summary>
                                <details >
                                    <summary className="col_g"> springtest </summary>
                                    <a href="#TestBean.class" className="col_p"> TestBean.class </a>
                                    <a href="#TestInterface.interface" className="col_p"> TestInterface.interface </a>
                                    <a href="#TestRun.class" className="col_p"> TestRun.class </a>
                                    <a href="#UserInjection.class" className="col_p"> UserInjection.class</a>
                                    <a href="#UserInterface.interface" className="col_p"> UserInterface.interface </a>
                                </details>
                            </details>
                            <details open>
                                <summary className="col_r"> src/main/resources </summary>
                                <a href="#applicationContext.xml" className="col_p"> applicationContext.xml </a>
                            </details>
                            <details open>
                                <summary className="col_r"> src/test/java </summary>
                            </details>
                            <details open>
                                <summary className="col_r"> src/test/resources </summary>
                            </details>

                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name=""> Eclipse Bean Xml Injection  </a> </span>
                    <p> <small> applicationContext.xml을 이용하여 Bean 객체를 생성하고, 생성된 Bean 객체로 생성자주입 방법 사용하기 </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="TestBean.class">  TestBean.class </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/TestInterface.interface_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="TestInterface.interface">  TestInterface.interface </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/TestInterface.interface_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="TestRun.class">  TestRun.class </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/TestRun.class_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserInjection.class">  UserInjection.class </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/UserInjection.class_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserInterface.interface">  UserInterface.interface </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/UserInterface.interface_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="applicationContext.xml">  applicationContext.xml </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode2/applicationContext.xml_1.PNG'} alt='' /> </p>
                        </span>
                    </span>
                </span>
            </div>
        </>
    );
}

export default SpringExCode2;