import React, { useEffect, useRef } from 'react';

const LinuxStudy = (props) => {

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
              <summary className="stitle"> ▶ 리눅스 다운로드 <a name="" style={{ visibility: "hidden" }}> 리눅스 다운로드 </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 7-zip 다운로드 </span>
                <span className="mblock">
                  <li> <a href="https://www.7-zip.org/download.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                  <li> .exe 64-bit x64 다운로드하기 </li>
                  <li> 실행해서 설치하기 </li>
                </span>
                {/*  */}
                <span className="sstitle"> MobaXterm 다운로드 </span>
                <span className="mblock">
                  <li> <a href="https://mobaxterm.mobatek.net/download.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
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
                  <li> <a href="https://www.vmware.com/kr/products/workstation-pro/workstation-pro-evaluation.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                  <li> Windows용 Workstation 16 Pro 지금 다운로드 </li>
                  <li> Custom Setup 2개다 체크해제 </li>
                  <li> User Experience Settings 2개다 체크해제 </li>
                  <li> 인증 키 넣어주기 #개인이 알아서 찾아보기를... </li>
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
              <summary className="stitle"> ▶ VMware에 CentOS 설치하는 방법 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> <a href="https://www.centos.org/download/" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                  <li> CentOS Linux 7 ISO x86_64 클릭 </li>
                  <li> <a href="http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/" target="_blank" rel="noreferrer"> http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/ 파일 다운로드 </a>  </li>
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
                  <li> Test this media &amp; install CentOS 7 클릭  </li>
                  <li> 스크롤로 내려서 한국어 누르고 계속 진행 </li>
                  <li> 키보드 - '+'키 클릭 -  english검색하고 영어(미국) 추가</li>
                  <li> 소프트웨어 설치 - 개발 및 창조를 위한 워크스테이션 - 완료  </li>
                  <small> GUI 등을 추가하기 위해서 선택 </small>
                  <li> 설치대상 - 상단에 VMware 아이콘 체크박스를 클릭하고 다시한번더 클릭해서 인식되게 만듬 </li>
                  <li> KDUMP 활성화는 비활성화 #메모리를 좀더 절약하기 위해서 </li>
                  <li> 네트워크 및 호스트명 끔 → 켬  - 완료 </li>
                  <li> 설치 시작 </li>
                  <li> root 암호 : P@ssw0rd! </li>
                  <li> 사용자 생성 : 영어로된아이디나이름 </li>
                  <li> 라이센스 동의 - 완료     </li>
                  <li> 한국 - 한국어(Hangul) - 다음  - 위치정보 끔 - 다음 - 건너뛰기 - 시작 </li>
                  <li> 라이센스 동의 해주기 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ CentOS 설정 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 네트워크가 연결이 잘 안되는것 같을 때 </span>
                <span className="mblock">
                  <li> 좌측 라이브러리에서 CentOS 우측클릭 - Settings - Network Adapter - Custom설정을 VMnet8(NAT)로 변경 </li>
                  <li> Edit - Virtual Network Editor - 기존의 VMnet8 제거 - Add Network로 VMnet8 추가  </li>
                  <li> 이어서 VMnet8 클릭 - VMnet Information에서 NAT로 변경 그리고 Use local DHCP service to distrubute IP address to VMs 체크박스 체크 </li>
                  <small> 체크하는 이유는 DHCP서버를 이용하겠다라는 의미 </small>
                  <li>  </li>
                </span>
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
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
              <summary className="stitle"> ▶ 리눅스의 탄생과 역사 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 리눅스의 탄생 </span>
                <span className="mblock">
                  <li>  1970년도 이전의 컴퓨터는 공장에 맞는 고유의 운영체제를 가지고 있어서
                    하나의 운영체제로 운영이 불가능 그래서 벨 연구소에서 유닉스라는 운영체제를 개발하기 시작 후에 C언어도 개발 </li>
                  <li> 리눅스는 1991년 핀란드 헬싱키 대학의 리누스 토발즈(Linus Benedict Torvalds)라는 학생에 의해 만들어진 운영체제  </li>
                  <li> 리눅스의 첫 시작은 유닉스 호환 운영체제를 목표로 하는 GNU 프로젝트(모두가 공유할 수 있는 소프트웨어) </li>
                  <li> 유닉스 운영체제로 학교에서 하나의 컴퓨터를 놓고 여러사람이 입력장치와 출력장치를 연결해서 사용하고
                    복제,변경,소스코드사용제한에 불만을 가져 리눅스를 만들어버림(레드햇이나 우분투같은 배포판 OS가 아닌
                    커널만 존재하는 초기의 리눅스)  </li>
                  <li>   </li>
                  <li>   </li>
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
              <summary className="stitle"> ▶ 리눅스 구조 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 1. Hardware(CPU,RAM) </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 2. 커널 </span>
                <span className="mblock">
                  <li> 하드웨어와 소프트웨어 사이에서 제어 역할을 해주는 곳 </li>
                  <li> <span className="sstitle"> 커널의 기능 </span>
                    <li> 1. 메모리가 어디에서 무엇을 저장하는 데 얼마나 사용되는지를 확인 </li>
                    <li> 2. 프로세스가 CPU를 언제 얼마나 사용할지 결정 </li>
                    <li> 3. 하드웨어와 프로세스 사이에서 중재자의 역할 </li>
                    <li> 4. 프로세스의 서비스 요청을 수신 </li>
                    <li>  </li>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 1. Task 관리  </span>
                      <li> 물리적인 자원을 task라는 추상적인 자원으로 제공 </li>
                      <li> task의 생성, 실행, 스케줄링, 프로세스간 통신등의 서비스를 제공 </li>
                      <li> Task : 컴퓨터 상에서 하나의 작업 </li>
                      <li> Process : 컴퓨터 상에서 하나의 작업을 이루는 과정 </li>
                      <li> Thread : 프로세스를 이루는 하나 하나의 개별 작업 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 2. 메모리 관리 </span>
                      <li> 메모리를 세그먼트나 페이지라는 개념으로 제공 </li>
                      <li> 물리 메모리 관리, 가상메모리 관리 그리고 이들을 위한 세그멘테이션, 페이징,
                        페이지 부재 결함 처리등의 서비스를 제공 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 3. 파일시스템관리 </span>
                      <li> 디스크를 파일이라는 개념으로 제공 </li>
                      <li> 파일의 생성, 접근 제어, inode관리? , 디렉토리 관리, 수퍼 블록 관리 등의
                        서비스를 제공 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 4. 디바이스 관리 </span>
                      <li> 각종 장치를 디바이스 드라이버를 통해 일관되게 접속하도록 해줌 </li>
                      <li> 디스크 터미널, CD, 네트워크 카드 등과 같은 주변 장치를 구동하는 드라이버들로 구성 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 5. 네트워크 관리 </span>
                      <li> 네트워크 장치를 소켓이라는 개념으로 제공해줌 </li>
                      <li> 소켓 인터페이스, TCP/IP 같은 통신 프로토콜 등의 서비스를 제공함 </li>
                    </p>
                    {/*  */}
                  </li>
                  <li> <span className="sstitle"> 커널의 종류? </span>
                    <li> 모놀리식 커널(단일형커널) </li>
                    <li> 마이크로 커널 </li>
                    <li> 하이브리드 커널(혼합형커널) </li>
                    <li> 나노 커널 </li>
                    <li> 엑소 커널 </li>
                  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 3. 쉘(sh, csh, bash) </span>
                <small> sh : 최초의 쉘 , bash : 현재 리눅스에서 표준으로 채택된 쉘 , csh : C언어 기반으로 만들어진 쉘 </small>
                <span className="mblock">
                  <li> 사용자가 컴퓨터에게 명령하는 것을 해석하는 곳 , 명령어 해석기, 명령어와 커널의 대화 통로 </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 4. 응용프로그램 </span>
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
              <summary className="stitle"> ▶ 리눅스 파일의 종류와 특징 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 1. 일반 파일 </span>
                <span className="mblock">
                  <li> 데이터를 저장하는 데 주로 사용, 텍스트파일, 실행파일, 이미지파일 등 대다수 파일 </li>
                  <li> 실행파일이나 이미지 파일은 바이너리 형태로 저장이 된다. 그리고 보려면은 응용프로그램이 필요 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 2. 디렉터리 </span>
                <span className="mblock">
                  <li> 해당 디렉터리에 저장된 파일이나 하위 디렉터리에 대한 정보를 저장 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 3. 심볼릭 링크 </span>
                <span className="mblock">
                  <li> 윈도우의 바로가기와 비슷 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 장치 파일 </span>
                <span className="mblock">
                  <li> 하드디스크나 키보드 같은 장치도 파일로 취급 </li>
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
                  <li> native방식의 하이퍼바이저 : 이미 설치가 되어있는 윈도우나 리눅스가 바로 운영체제가 클릭이 되는것 </li>
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

export default LinuxStudy;