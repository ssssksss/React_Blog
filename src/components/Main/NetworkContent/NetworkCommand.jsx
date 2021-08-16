import React, { useEffect, useRef, useState } from 'react';

const NetworkCommand = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);


        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
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
                            <summary className="stitle"> ▶ 관련 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <span className="sstitle"> ipconfig </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> netstat </span>
                                <small> network statistics </small>
                                <span className="mblock">
                                    <li> 전송 제어 프로토콜, 라우팅 테이블, 수많은 네트워크 인터페이스, 네트워크 프로토콜 통계를 위한 네트워크 연결을 보여주는 명령 도구  </li>
                                    <li> 1. 프로토콜 : 사용한 프로토콜 </li>
                                    <li> 2. 로컬주소 : 사용자 컴퓨터의 IP / 호스트 이름과 포트번호 </li>
                                    <li> 3. 외부주소 : 사용자 컴퓨터에 접속되어 있는 IP / 호스트이름과 포트번호 </li>
                                    <li className="sblock">  <span className="sstitle"> 4. 상태 : 연결상태 </span>
                                        <li> LISTENING : 서비스 대기중 </li>
                                        <li> ESTABLISHED : 다른PC와 연결된 상태 </li>
                                        <li> SVN_SENT : 클라이언트가 SYN요청후 대기상태 </li>
                                        <li> SYN_RECV : 서버가 SYN+ACK발신 후 ACK 수신 대기 상태 </li>
                                        <li> TIME_WAIT : 연결 종료하고 일정시간 열린 상태 </li>
                                        <li> CLOSE_WAIT : 원격 연결 요청을 받은 상태이며 , 연결 종료를 기다리는 상태 </li>
                                        <li> LAST_ACK : 연결이 종료되었고, 승인을 기다리는 상태 </li>
                                        <li> CLOSED : 연결 종료 </li>
                                    </li>
                                    <li className="sblock">  <span className="sstitle"> 명령어 옵션(Window) </span>
                                        <li> netstat -? 로 사용(?에 대입) </li>
                                        <li> -a : 모든 연결 및 수신 대기 포트를 표시합니다. </li>
                                        <li> -a | find "찾을내용" : 찾는 내용을 보여줌 </li>
                                        <li> -b : 현재 연결이 어떤 프로그램을 사용하는지 표시 <small> 권한이 없다고 하면 관리자 권한으로 실행 , 시간이 약간 걸림 </small>  </li>
                                        <li> -e : 이더넷 통계를 표시 </li>
                                        <li> -f : 외부 주소의 FQDN(정규화된 도메인 이름)을 표시합니다. , 시간이 약간 걸림 </li>
                                        <li> -n : 주소 및 포트 번호를 숫자 형식으로 표시합니다. </li>
                                        <li> -o : 각 연결의 소유자 프로세스 ID를 표시합니다. </li>
                                        <li> -p 프로토콜 : 모든 연결, 수신 대기 포트 및 바인딩된 비수신 대기 TCP 포트를 표시합니다. </li>
                                        <li> -r : 라우팅 테이블을 표시합니다. </li>
                                        <li> -s : 프로토콜별 통계를 표시합니다. </li>
                                        <li> -t : 현재 연결 오프로드 상태를 표시합니다. </li>
                                        <li> -x : NetworkDirect 연결, 수신기 및 공유 끝점을 표시합니다. </li>
                                        <li> -y : 모든 연결에 대한 TCP 연결 템플릿을 표시합니다. </li>
                                        <li> -an : 네트워크의 연결상태를 알아보는 옵션 , -a + -n 을 합친 명령어 </li>
                                        <li>  :  </li>
                                    </li>
                                    <li className="sblock">  <span className="sstitle"> 명령어 옵션(Rinux) </span>
                                        <li>  :  </li>
                                    </li>
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

export default NetworkCommand;