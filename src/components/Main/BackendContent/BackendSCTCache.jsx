import React, { useEffect, useRef, useState } from 'react';

const BackendSCTCache = (props) => {

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
                            <summary className="stitle"> ▶ 세션 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 서버가 가지고 있는 사용자 정보 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 보관이 되는곳 </span>
                                <span className="mblock">
                                    <li> 서버에서 지정한 세션 저장소 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 쿠키 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 클라이언트가 서버에서 발급된 세션을 이용하기 위한 키값을 가지고 있음 (세션 ID) </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 보관이 되는곳 </span>
                                <span className="mblock">
                                    <li> 브라우저에서 설정한 클라이언트 저장소 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 장단점 </span>
                                <span className="mblock">
                                    <li className="col_be"> 서버의 자원을 사용하지 않음, 회원정보를 일일히 확인하지 않고 쿠기만 보고
                                        사용자가 누구인지 파악할 수 있으므로 보안에 상관없는 설정에는 유용하게 사용( ex:자동로그인) </li>
                                    <li className="col_r"> 보안에 취약,  </li>
                                    <li className="">  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 토큰 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 보관이 되는곳 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 캐시 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 보관이 되는곳 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default BackendSCTCache;