import React, { useEffect, useRef, useState } from 'react';

const WindowSystem = (props) => {

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
                                <a href="#Wifi" className="col_p"> Wifi </a>
                                <a href="#알약 광고 제거" className="col_p"> 알약 광고 제거 </a>
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
                            <summary className="stitle"> ▶ Wifi <a name="Wifi" style={{ visibility: "hidden" }}> Wifi </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 노트북 와이파이 연결에 문제가 있을 때 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 컴퓨터가 전원절약하기 위해서 장치를 끄지 못하게 하는 방법  </span>
                                <small> 오류 : 무선 어댑터 또는 액세스 지점 문제 </small>
                                <span className="mblock">
                                    <li> "제어판" - "하드웨어 및 소리" - "장치 관리자" - "네트워크 어댑터" - 랜 관련 네크워크 우측클릭 - 속성 - 전원관리 -
                                        "전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수 있음" 체크해제 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 알약 광고 제거 <a name="알약 광고 제거" style={{ visibility: "hidden" }}> 알약 광고 제거 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 알약 광고 제거 </span>
                                <span className="mblock">
                                    <li> 환경설정 - 작업설정 - 업데이트 설정 - 업데이트 완료 메시지 보기, 업데이트 실패 알림 메시지 보기 2개 항목 체크해제 </li>
                                    <li> 환경설정 - 기타설정 - 게임모드 - 업데이트 연기, 예약작업 연기, 알림메시지 보지않음 3개 항목 모두 체크되었는지 확인 </li>
                                    <li> 환경설정 - 기타설정 - 기타 - 보안 안내 메시지 보기, 인터넷 연결 알림 메시지 보기, 알약 알리미 보기 3개 항목 체크 해제 </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 윈도우 10 관리자 권한 실행창 없애는 방법 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 관리자 권한을 사용하는 이유 </span>
                                <span className="mblock">
                                    <li> 사용자 컴퓨터 레지스트리에 접근이 필요한 경우 , 레지스트리는 윈도우 시스템의 모든 설정 데이터를 모아두는 중앙 저장소 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 윈도우 10 관리자 권한 실행창 없애는 방법  </span>
                                <span className="mblock">
                                    <li> 돋보기 검색 "사용자 계정 컨트롤 설정 변경" - </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 관리자 권한으로 실행하기 1 </span>
                                <span className="mblock">
                                    <li> 실행 프로그램 우측클릭해서 관리자 권한으로 실행하기 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 관리자 권한으로 실행하기 2 </span>
                                <span className="mblock">
                                    <li> 실행 프로그램 우측클릭해서 속성 - 고급 - 관리자 권한으로 실행 체크 </li>
                                </span>
                                <span className="sstitle"> 관리자 권한으로 실행하기 3 (권장x) </span>
                                <span className="mblock">
                                    <li> 실행(Win+R) - regedit - EnableLUA 항목 찾아서 0으로 만들면 되는데 그냥 모르느게 편함  </li>
                                    <small>  경로 : 컴퓨터 - 키로컬머신 - 소프트웨어  - 마이크로소프트 - 윈도우즈 - 현재버전 - 정책들 - 시스템 </small>
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
                            <summary className="stitle"> ▶ 컴퓨터에 문제가 생겼을 때 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> chkdsk /f </li>
                                    <li> sfc /scannow  </li>
                                    <li> DISM.exe/Online/Cleanup-image/Restorehealth </li>
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

export default WindowSystem;