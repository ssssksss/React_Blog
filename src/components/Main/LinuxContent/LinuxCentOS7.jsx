import React, { useEffect, useRef } from 'react';

const LinuxCentOS7 = (props) => {

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
                <a href="#VMware에 CentOS7 설치하는 방법" className="col_p"> VMware에 CentOS7 설치하는 방법 </a>
                <a href="#CentOS7 관련 명령어" className="col_p"> CentOS7 관련 명령어 </a>
                <a href="telnet 서버 설치하는 방법#" className="col_p"> telnet 서버 설치하는 방법 </a>
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
              <summary className="stitle"> ▶ VMware에 CentOS7 설치하는 방법 <a name="VMware에 CentOS7 설치하는 방법" style={{ visibility: "hidden" }}> VMware에 CentOS7 설치하는 방법 </a> </summary>
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
              <summary className="stitle"> ▶ CentOS7 관련 명령어 <a name="CentOS7 관련 명령어" style={{ visibility: "hidden" }}> CentOS7 관련 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                  <li> su - : 루트 계정으로 접속하는 방법 </li>
                  <li> su 계정명 : 원하는 계정으로 접속하는 방법 </li>
                  <li> netstat -tnlp , 텔넷은 23번포트트 사용한다. </li>
                  <li> cd /etc/xinetd.d/ 그리고 vi telnet
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
                  <li> systemctl restart xinetd </li>
                  <li> centos7 client에서 centos7 server로 접속하기
                    <li> ping 168.126.63.1 </li>
                    <li> ping 192.168.10.2 </li>
                    <li> ip route </li>
                    <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33 </li>
                    <li> firewall-cmd --permanent --add-port=23/tcp #방화벽을 열음 </li>
                    <li> firewall-cmd --reload </li>
                    <li> tty : 현재 접속중인 터미널 번호 </li>
                    <li> echo$$ </li>
                    <li> vi /etc/securetty :  </li>
                    <li>  </li>
                    <li> yum install xinetd telnet #client에서 설치하는 거 </li>
                    <li> telnet l root 192.168.10.1 </li>
                    <li> ip route </li>
                    <li>  </li>
                  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ telnet 서버 설치하는 방법 <a name="telnet 서버 설치하는 방법" style={{ visibility: "hidden" }}> telnet 서버 설치하는 방법 </a> </summary>
              <span className="sblock">
                <small> 텔넷서버: 원격 접속을 지원하는 프로그램, 보안에 취약해서 대분분 SSH를 사용 </small>
                <span className="sstitle"> 설치 방법 </span>
                <span className="mblock">
                  <li> 0. su - # 루트 계정으로 접속하는 방법 </li>
                  <li> 1. yum -y install telnet-server # telnet서버 설치 1번방법 </li>
                  <li> 1-1. yum install xinetd telnet-server # telnet서버 설치 2번방법 </li>
                  <li> 2. rpm -qa telnet-server , rpm -qa | grep telnet # 설치가 잘 되었는지 확인 </li>
                  <li> 3. systemctl start telnet.socket # 서버를 가동 </li>
                  <li> 4. systemctl status telnet.socket # 서버가 잘 가동 되었는지 확인 </li>
                  <li> 5. firewall-config - 메뉴 - 설정은 영구적으로 변경, 영역 - public - 서비스 -telnet 체크박스 체크  # 방화벽 해제 </li>
                  <li> 6. 이어서 옵션 - firewalld 다시 불러오기 - 창닫기 </li>
                  <li> 6-1. firewall-cmd --permanent --add-port=23/tcp #방확벽에서 23포트 오픈  </li>
                  <li> 6-2. firewall-cmd --permanent --add-service=telnet   </li>
                  <li> 7. firewall-cmd --reload  #방화벽 설정 적용 </li>
                  <li> 8. systemctl enable telnet.socket #재부팅 후에도 텔넷 서버가 돌아가도록 만듬 </li>
                  <li>  </li>
                  <li> 0. adduser 사용자명, passwd 사용자명 </li>
                  <li> 1. yum -y install telnet </li>
                  <li> 2. 제어판 - Window 기능 켜기/끄기 - 텔넷 클라이언트 체크박스 체크 </li>
                  <li> 3. ping telnet서버IP주소  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ ssh 서버 설치하는 방법 <a name="ssh 서버 설치하는 방법" style={{ visibility: "hidden" }}> ssh 서버 설치하는 방법 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 방법 </span>
                <span className="mblock">
                  <li> yum -y install openssh-server #버전을 일치하기 위해서 다시 설치 </li>
                  <li> firewall-cmd --list-services #방화벽 허용 리스트</li>
                  <li>  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ dhcp 서버 설치하는 방법 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> dhcp 서버란? </span>
                <span className="mblock">
                  <li> Dynamic Host Configuration Protocol </li>
                  <li> 자신의 네트워크 안에 클라이언트 컴퓨터가 부팅될 떄 자동으로 IP주소, 서브넷마스크, 게이트웨이 주소, DNS 서버 주소를
                    할당해주는 것 </li>
                  <li> 일반 사용자는 IP에 관련된 어려운 정보를 알지 못해도 사용을 하는데 문제가 없음 </li>
                  <li> dhcp 서버는 관리가 편하고 이용자도 편함 </li>
                  <li> 한정된 IP주소를 가지고 더많은 IP주소가 있는 것처럼 사용하여 여러명의 사용자가 사용할 수 있게 함 </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> dhcp 서버 작동원리 </span>
                <span className="mblock">
                  <li> 1. dhcp클라이언트 컴퓨터 부팅 </li>
                  <li> 2. 자동으로 IP 주소를 dhcp서버로 요청 </li>
                  <li> 3. dhcp서버에 있는 할당 되지 않은 IP를 선택하고 할당됨으로 변경 </li>
                  <li> 4. IP주소를 dhcp클라이언트에게 할당 </li>
                  <li> 5. dhcp클라이언트는 dhcp서버에게 받은 IP로 인터넷을 이용  </li>
                  <li> 6. dhcp클라이언트가 접속을 종료하게 되면 dhcp서버에 IP주소를 반납 </li>
                  <li> 7. dhcp서버에 있는 IP주소 목록에서 반납된 IP주소를 다시 할당해제를 시켜준다. </li>
                </span>
                {/*  */}
                <span className="sstitle"> dhcp 서버 설치 </span>
                <span className="mblock">
                  <li> yum install dhcp  </li>
                  <li> r pm -qa | grep dhcp , # dhcp서버 설치되었는지 확인  </li>
                  <li> systemctl restart dhcpd </li>
                  <li> lsof -i updL67 </li>
                  <li> dnsmasq라는 간소화된 dhcp/dns서버가 설치 되어있다. 그러므로 제거가 필요 </li>
                  <li> ps -ef | grep dnsmasq | grep -v grep | xargs kill -9 </li>
                  <li> systemctl disable libvirtd </li>
                </span>
                {/*  */}
                <span className="sstitle"> dhcp 서버 설정 </span>
                <span className="mblock">
                  <li> subnet 192.168.10.0 netmask 255.255.255.0 , # netmask는 앞에 9자리가 네트워크 대역이라는 것을 알려줌 </li>
                  <li> {'{'}  </li>
                  <li> host client1  </li>
                  <li> {'{'}  </li>
                  <li> option host-name "client1";  </li>
                  <li> hardware ethernet 하드웨어주소; , # ifconfig에서 ether 주소를 참조 </li>
                  <li> fixed-address 102.168.10.251;  </li>
                  <li> {'}'}  </li>
                  <li> option routers 192.168.10.2; , #dhcp서버가 보는 나의 게이트웨이 주소  </li>
                  <li> option subnet-mask 255.255.255.0;  , # 네트워크 대역을 255로 알려줘  </li>
                  <li> range dynamic-bootp 192.168.10.30 192.168.10.50; , #30~50번 IP를 나누어 준다.   </li>
                  <li> option domain-name-servers 8.8.8.8;  , # 도메인 주소를 설정 </li>
                  <li> default-lease-time 86400; , # 클라이언트에게 준 IP의 시간을 초단위로 설정  </li>
                  <li> max-lease-time 172800; , # 클라이언트에게 준 동일한 IP의 최대 시간을 초단위로 설정, 오랜기간 사용하면 악용의 소지떄문에 제한  </li>
                  <li> {'}'}  </li>
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> dhcp 클라이언트 설정 </span>
                <span className="mblock">
                  <li>  </li>
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

export default LinuxCentOS7;