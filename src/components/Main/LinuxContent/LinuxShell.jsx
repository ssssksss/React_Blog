import React, { useEffect, useRef } from 'react';

const LinuxShell = (props) => {

    function logit() {

        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            document.documentElement.scrollTop < elementHeight1 ?
                blockRef.current[0].style.top = elementHeight1 + "px" :
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
        else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight2 + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
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
                                <a href="#rsh(remote shell)" className="col_p"> rsh(remote shell) </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#" className="col_p">  </a>
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
                            <summary className="stitle"> ▶ rsh(remote shell) <a name="rsh(remote shell)" style={{ visibility: "hidden" }}> rsh(remote shell) </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li> 컴퓨터 네트워크의 다른 컴퓨터에서 다른 사용자로 셸 명령을 실행할 수 있는 명령줄 컴퓨터 프로그램 </li>
                                    <li> rsh 연결시 원격 시스템은 rsh 데몬을 실행 , rsh데몬은 전송제어프로토콜(TCP) 포트 514를 사용 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 장단점 </span>
                                <span className="mblock">
                                    <li className="col_r"> rsh 프로토콜은 네트워크 용도로 안전하지 않음, 암호화되지 않음 정보를 전송함  </li>
                                    <li className="col_be">  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 장단점 </span>
                            <span className="mblock">
                                <li className="col_r">  </li>
                                <li className="col_be">  </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 장단점 </span>
                            <span className="mblock">
                                <li className="col_r">  </li>
                                <li className="col_be">  </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 장단점 </span>
                            <span className="mblock">
                                <li className="col_r">  </li>
                                <li className="col_be">  </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 장단점 </span>
                            <span className="mblock">
                                <li className="col_r">  </li>
                                <li className="col_be">  </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 정의 및 설명 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 사용 방법 및 실행 및 삭제 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 장단점 </span>
                            <span className="mblock">
                                <li className="col_r">  </li>
                                <li className="col_be">  </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default LinuxShell;