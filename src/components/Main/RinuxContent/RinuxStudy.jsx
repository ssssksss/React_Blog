import React, { useEffect, useRef, useState } from 'react';

const RinuxStudy = (props) => {

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
                            <summary className="stitle"> ▶ 리눅스 다운로드 <a name="" style={{ visibility: "hidden" }}> 리눅스 다운로드 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> CentOS 다운로드 </span>
                                <span className="mblock">
                                    <li> <a href="https://www.centos.org/download/" target="_blank"> 다운로드 페이지 </a> </li>
                                    <li> CentOS Linux 7 ISO x86_64 클릭 </li>
                                    <li> <a href="http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/" target="_blank"> http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/ </a>  </li>
                                    <li> CentOS-7-x86_64-DVD-2009.iso 다운로드 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 7-zip 다운로드 </span>
                                <span className="mblock">
                                    <li> <a href="https://www.7-zip.org/download.html" target="_blank"> 다운로드 페이지 </a> </li>
                                    <li> .exe 64-bit x64 다운로드하기 </li>
                                    <li> 실행해서 설치하기 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> MobaXterm 다운로드 </span>
                                <span className="mblock">
                                    <li> <a href="https://mobaxterm.mobatek.net/download.html" target="_blank"> 다운로드 페이지 </a> </li>
                                    <li> Home Edition - Portable edition 다운로드 </li>
                                    <li> 알집파일 우측클릭 - 7-zip - ""에 풀고 폴더명을 MobaXterm으로 바꾸기   </li>
                                    <li> C드라이브 - app - 새폴더로 Run과 Terminal 이라고 만들기   </li>
                                    <li> Terminal 폴더안에 MobaXterm폴더를 이동시키기  </li>
                                    <li> MobaXterm폴더에 들어가서 MobaXterm_Personal.exe파일 바로가기 생성하기  </li>
                                    <li> 바로가기 생성한 파일을 Ctrl+X를 이용해서 잘라내기 그리고 잘라낸 파일 Ctrl+C로 복사  </li>
                                    <li> 복사한 파일을 아까 만들었던 상위폴더 Run에 Ctrl+V   </li>
                                    <li> 시스템 환경 변수 편집 - 고급 - 환경 변수 - 사용자 변수 Path 더블클릭   </li>
                                    <li> 새로만들기 - C:\app\Run 넣어주기  </li>
                                    <li> 그리고 Win + R 누르고 mob입력했을 때 실행되면 성공   </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> VMware Workstation Pro 다운로드 </span>
                                <span className="mblock">
                                    <li> <a href="https://www.vmware.com/kr/products/workstation-pro/workstation-pro-evaluation.html" target="_blank"> 다운로드 페이지 </a> </li>
                                    <li> Windows용 Workstation 16 Pro 지금 다운로드 </li>
                                    <li> Custom Setup 2개다 체크해제 </li>
                                    <li> User Experience Settings 2개다 체크해제 </li>
                                    <li> 인증 키 넣어주기 #개인이 알아서 찾아보기를... </li>
                                    <li> VMware Workstation 실행 </li>
                                    <li> Create a New Virtual Machine </li>
                                    <li>  </li>
                                    <li>  </li>
                                    <li> 가상 램은 2GB로 변경 </li>
                                    <li> New CD/DVD (IDE) , Use ISO image file: 에 CentOS7 넣기 </li>
                                    <li> Network Adapter , Custom 부분에 VMnet8 (NAT)로 변경 </li>
                                    <li> Sound Card, Printer는 remove </li>
                                    <li> close하고 finish </li>
                                    <li> Test Install  </li>
                                    <li>  </li>
                                    <li> 키보드에 영어도 추가 </li>
                                    <li> 소프트웨어 설치 - 개발 및 창조를 위한 워크스테이션 -  </li>
                                    <li> 설치대상 - VMware 체크박스를 클릭하고 다시한번더 클릭해서 인식되게 만듬 </li>
                                    <li> 네트워크 및 호스트명 꺼진거 켜주기 </li>
                                    <li> 설치 시작 </li>
                                    <li> root 암호 : P@ssw0rd </li>
                                    <li> 사용자 생성 : hmwoo </li>
                                    <li>  cv     </li>
                                    <li>  </li>
                                    <li> 라이센스 동의 해주기 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Ubuntu Desktop </span>
                                <span className="mblock">
                                    <li> <a href="https://ubuntu.com/download/desktop/thank-you?version=20.04.2.0&amp;architecture=amd64" target="_blank"> 다운로드 페이지 </a> </li>
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
                            <summary className="stitle"> ▶리눅스 용어 공부 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> 하이퍼바이저 : 호스트 컴퓨터에서 다수의 OS를 사용하기 위한 플랫폼(가상) </li>
                                    <li> native방식의 하이퍼바이저 : 이미 설치가 되어있는 윈도우나 리눅스가 바로 운영체제가 선택이 되는것 </li>
                                    <li> hosted방식의 하이퍼바이저 : 일반 프로그램처럼 VM으로 운영을 하는 방식 </li>
                                    <li> KVM :  </li>
                                    <li> XEN </li>
                                    <li> Vmware : </li>
                                    <li> HyperV : ms에서 제공하는 상용 하이퍼바이저 , window를 실행하는데 가장 우수함 </li>
                                    <li> Docker </li>
                                    <li> 커널 : </li>
                                    <li> 쉘 : </li>
                                    <li> 레드햇 리눅스 :  </li>
                                    <li> CentOs 리눅스 : </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 리눅스 명령어  <a name="리눅스 명령어" style={{ visibility: "hidden" }}> 리눅스 명령어 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 리눅스 명령어 </span>
                                <span className="mblock">
                                    <li> command [-단일문자옵션] [--다중문자옵션] </li>
                                    <li> dir : 현재 디텍로티에 파일 목록을 조회 </li>
                                    <li> cls :  </li>
                                    <li> cd [경로] : 지정한 디렉토리로 이동 </li>
                                    <li> pwd : 현재 위치한 디렉토리를 절대경로 표현으로 출력 </li>
                                    <li> rmdir : 지정한 디렉토리가 빈 폴더면 삭제 가능 </li>
                                    <li> mkdir [폴더명] : 폴더를 생성 , -p 명령어는 기존에 폴더가 없으면 폴더를 전부 생성해준다.  </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Is #목록을 출력</span>
                                <span className="mblock">
                                    <li> -a : 숨겨진 파일까지 출력 </li>
                                    <li> -l : 파일의 상세정보 까지 출력 </li>
                                    <li> -r : 하위 디렉토리까지 출력 </li>
                                    <li> -h : 사람이 보기쉽게 파일의 크기를 출력 </li>
                                    <li> -k : kb단위로 크기 출력 </li>
                                    <li> -i :  </li>
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
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}> </a> </summary>
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

export default RinuxStudy;