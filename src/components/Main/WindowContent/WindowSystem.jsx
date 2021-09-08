import React from 'react';

const WindowSystem = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ Wifi <a name="Wifi" style={{ visibility: "hidden" }}> Wifi </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 인터넷 속도 측정 사이트 </span>
                                <span className="mblock">
                                    <li> <a href="https://www.speedtest.net/" target="_blank"> Speedtest.net </a> </li>
                                    <li> 100정도가 안나오면 문제가 있을 수도 있음 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 인터넷 속도 증가 하는 방법 </span>
                                <span className="mblock">
                                    <li> 실행창 - gpedit.msc - 컴퓨터 구성 - 관리 템플릿 - 네트워크 - qos 패킷 스케줄러
                                        - 예약대역폭제한 - 사용 - 100% </li>
                                    <small> 기본이 80%이지만 개인 사용자는 상관 없음 ( 20%는 서비스 등으로 사용되는것 같음 ) </small>
                                    <li> 와이파이 아이콘 우측클릭 - 네트워크 및 인터넷 설정 열기 - 어댑터 옵션 변경 -
                                        사용하는 네트워크 우측클릭 속성 - 인터넷 프로토콜 버전 4 속성 - 다음 DNS 서버 주소 사용
                                        - 기본 설정 DNS 서버 8.8.8.8 , 보조 DNS 서버 8.8.8.4 (Google)혹은
                                        1.1.1.1, 1.0.0.1 (Cloudflare)사용 </li>
                                    <li> cmd - ipconfig/displaydns - ipconfig/flushdns </li>
                                    <li> 브라우저 옵션 초기화(캐시나 쿠키)등등 지워주기  </li>
                                    <li> 고클린 설치 - 인터넷이 느려질때 </li>
                                    <li> 실행창 - regedit - 컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile
                                        - NetworkThrottlingIndex - 10진수, 70으로 변경 </li>
                                    <li> cmd - netsh interface tcp set global autotuninglevel=highlyrestricted </li>
                                    <small> 더 안좋아지면 원상태로 복구 netsh interface tcp set global autotuninglevel=normal </small>
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