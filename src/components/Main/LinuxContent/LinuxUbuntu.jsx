import React, { useEffect, useRef } from 'react';

const LinuxUbuntu = (props) => {

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
                            <summary className="stitle"> ▶ VMware에 Ubuntu 설치하는 방법 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> <a href="https://ubuntu.com/download/desktop/thank-you?version=20.04.2.0&amp;architecture=amd64" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                                    <li> CentOS-7-x86_64-DVD-2009.iso 다운로드 </li>
                                    <li> VMware Workstation 실행 </li>
                                    <li> Create a New Virtual Machine </li>
                                    <li> Typical 클릭 </li>
                                    <li> I will install the operation system later 클릭 </li>
                                    <li> Linux , CentOS 7 64-bit 클릭 </li>
                                    <li> Virtual machine name: CentOS7_Server 이름으로 바꾸기 (안바꾸어도 상관은 없음) </li>
                                    <li> 20GB , Split virtual disk into multiple files 클릭 </li>
                                    <li> Customize Hardware... 클릭 </li>
                                    <li> Memory : 가상 램은 2GB(2048MB)로 변경 </li>
                                    <li> New CD/DVD (IDE) : Use ISO image file:에 아까받은 CentOS7 넣기 </li>
                                    <li> Network Adapter : Custom 부분에 VMnet8(NAT)로 선택 </li>
                                    <li> Sound Card, Printer는 remove (아래쪽에 버튼이 있음) </li>
                                    <li> close하고 finish </li>
                                    <li> 한국어 선택하고 Ubuntu 설치  </li>
                                    <li> 키보드 레이아웃 선택: Korean 하고 101/104 선택하고 계속하기 </li>
                                    <li> 건드리지 않고 계속하기 클릭 </li>
                                    <li> 디스크를 지우고 Ubuntu설치 클릭 - 지금 설치 - 계속하기 </li>
                                    <li> 거주지역 Seoul </li>
                                    <li> 이름 : 이름 </li>
                                    <li> 컴퓨터 이름 : 이름.com </li>
                                    <li> 사용자 이름 선택 : </li>
                                    <li> 암호 선택 : P@ssw0rd! </li>
                                    <li>  </li>
                                    <li> 프로그램 - 시스템 도구 - 설정 - 개인 정보 - 화면잠금 - 끔 </li>
                                    <li> 프로그램 - 시스템 도구 - 설정 - 전원 - 빈화면 - 안함 </li>
                                    <li> 프로그램 - 시스템 도구 - 설정 - 터미널   </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ Ubuntu 터미널 명령어 <a name="Ubuntu 터미널 명령어" style={{ visibility: "hidden" }}> Ubuntu 터미널 명령어 </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> sudo passwd root #루트의 비번을 변경 </li>
                                    <li> su - root #루트로 접속 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 네트워크 설정 </span>
                                <span className="mblock">
                                    <li> ls -la /etc/netplan : 우분투에서 네트워크 설정이 있는 경로에서 파일보기  </li>
                                    <li> cd /etc/netplan 경로이동 - vi 01-network-manager-all.yaml </li>
                                    <li> ethernets:  </li>
                                    <li> &nbsp;ens33:  </li>
                                    <li> &nbsp;&nbsp;addresses: [192.168.10.90/24] </li>
                                    <li> &nbsp;&nbsp;gateway4: 192.168.10.2 </li>
                                    <li> &nbsp;&nbsp;nameservers: </li>
                                    <li> &nbsp;&nbsp;&nbsp;addresses: [168.126.63.1,8.8.8.8] </li>
                                    <li> &nbsp;&nbsp;dhcp4: no </li>
                                    <li> cat 01-network-manager-all.yaml 으로 확인 </li>
                                    <li> netplan apply #netplan이 관리해서 적용한다?</li>
                                    <li> ip route #확인해보면 ip가 변경된 것을 볼 수 있음 </li>
                                    <li> 참고 구글에 winmerge 검색하고 다운로드 하고 실행</li>
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
                            <summary className="stitle"> ▶ telnet 서버 설치하는 방법 <a name="telnet 서버 설치하는 방법" style={{ visibility: "hidden" }}> telnet 서버 설치하는 방법 </a> </summary>
                            <span className="sblock">
                                <small> 텔넷서버: 원격 접속을 지원하는 프로그램, 보안에 취약해서 대분분 SSH를 사용 </small>
                                <span className="sstitle"> 방법1 </span>
                                <span className="mblock">
                                    <li> 0. sudo passwd root </li>
                                    <li> 0. su - # 루트 계정으로 접속하는 방법 </li>
                                    <li> 1. apt-get install xinetd </li>
                                    <li> 2. apt-get install telnetd </li>
                                    <li> 3. vi /etc/xinetd.conf
                                        <li> {'service telnet '} </li>
                                        <li> {'{ '} </li>
                                        <li> {'        disable = no '} #서비스를 사용하지 않을것인지 no면 사용한다는 의미</li>
                                        <li> {'        flags = REUSE '} #재사용한다는 의미</li>
                                        <li> {'        socket_type = stream '} #소켓형태 스트림</li>
                                        <li> {'        wait = no '} #바로 서버를 사용?</li>
                                        <li> {'        user = root '} #접속할수 있는 유저</li>
                                        <li> {'        server = /usr/sbin/in.telnetd '} #텔넷서버에 대한 명령어 </li>
                                        <li> {'        log_on_failure += USERID '} #접속실패했을떄 유저의 아이디를 로그로 남겨라</li>
                                        <li> {'} '} </li>
                                    </li>
                                    <li> /etc/init.d/xinetd restart </li>
                                    <li> apt-get install net-tools # netstat 보려고 다운 </li>
                                    <li> netstat -tnlp #tcp에 대한 포트를 보겠다? , 우분투에서는 없음</li>
                                    <li> ufw enable #방화벽 활설화? </li>
                                    <li> ufw statue #방확벽의 활성화 여부 확인 </li>
                                    <li> ufw allow 23/tcp #tcp23포트를 방화벽에서 허용 </li>
                                    <li> vi /etcpam.d/login로 가서 10번쨰 줄 정도에 auth required pam_securetty.so 추가  </li>
                                    <li> systemctl restart xinetd </li>
                                    <li> vi etc/securetty </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 쉘 설치하기 <a name="쉘 설치하기" style={{ visibility: "hidden" }}> 쉘 설치하기 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> csh 설치하기 </span>
                                <span className="mblock">
                                    <li> 과거에 사용한 C기반의 쉘 </li>
                                    <li> apt-get install csh </li>
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

export default LinuxUbuntu;