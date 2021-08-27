import React, { useEffect, useRef, useState } from 'react';

const BackendSolid = (props) => {

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
                        <details>
                            <summary className="stitle"> ▶ Solid 5대 원칙 <a name="Solid 5대 원칙" style={{ visibility: "hidden" }}> Solid 5대 원칙 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 유지보수, 확장이 쉬운 소프트웨어를 만드는 방식 </span>
                                <span className="mblock">
                                    <span className="sblock">
                                        <span className="sstitle"> SRP(Single Responsibility Principle) , 단일 책임 원칙 </span>
                                        <li> 모든 클래스는 하나의 책임만 가진다. , 여러기능을 가지는 것은 좋지 않음 </li>
                                        <li> 한개의 관심사만을 갖는다. </li>
                                        <li> 여러개의 기능이 모여 있을 경우 한개의 기능을 수정하였을 때 다른 기능까지 망가질 수 있음 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sblock">
                                        <span className="sstitle"> OCP(Open-Close Principle) , 개방 폐쇄 원칙 </span>
                                        <li> 소프트웨어 개체는 확장에 개방적이고, 수정에 대해서는 폐쇄적이어야 함 </li>
                                        <li> 개체 하나를 수정하였는데 그 개체와 관계된 개체들을 모두 수정하게 되는것을 잘못된 방식 </li>
                                        <li> 추상화(인터페이스)를 이용하여 확장에는 개방적으로 접근할 수 있음 </li>
                                    </span>
                                    {/*  */}
                                    <span className="sblock">
                                        <span className="sstitle"> LSP(Liskov Substitution Principle) , 리스코프 치환 원칙 </span>
                                        <li> 참조되는 기반클래스는 파생클래스의 객체를 상세히 알지 못해도 사용할 수 있어야 한다. </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sblock">
                                        <span className="sstitle"> DIP(Dependency Inversion Principle) , 의존 역전 원칙 </span>
                                        <li> 상위 모듈이 하위 모듈에 의존해서는 안되는 방식 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sblock">
                                        <span className="sstitle"> ISP(Interface Segregation Principle) , 인터페이스 분리 원칙 </span>
                                        <li> 역할을 하나의 인터페이스가 모두 담당하는 것이 아니라 역할을 여러 작은 단위의 인터페이스
                                            로 분리하여 사용하는 방식 </li>
                                        <li> 모두 추상화에 의존해야 한다. </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default BackendSolid;