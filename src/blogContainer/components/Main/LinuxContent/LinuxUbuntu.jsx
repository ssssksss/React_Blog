import React from 'react';

const LinuxUbuntu = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 초기 root 계정 접속 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> hostnamectl <small> 우분투 버전 확인 </small> </li>
              <li> sudo passwd root 입력 </li>
              <li> 새로운 패스워드 입력 </li>
              <li> 새로운 패스워드 재입력 </li>
              <li> su root </li>
              <li> 비밀번호 입력 </li>
            </div>

            <h2 className='h2'> 📌 root계정을 ssh로 접속하기(테스트 해보지 않음) </h2>
            <div className='block4'>
              <li> vi /etc/ssh/sshd_config </li>
              <li> #PermitRootLogin prohibit-password <small> 34번째 줄 </small> </li>
              <li> PermitRootLogin yes </li>
              <li> systemctl restart sshd </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] docker </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 우분투 20.04(LTS)에서 설치 </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

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
                  <li> {'        log_on_failure += USERID '} #접속실패했을때 유저의 아이디를 로그로 남겨라</li>
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
            <summary className="stitle"> ▶ dhcp 서버 설치하는 방법 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <span className="sblock">
              <span className="sstitle"> dhcp 서버란? </span>
              <span className="mblock">
                <li> Dynamic Host Configuration Protocol </li>
                <li> 자신의 네트워크 안에 클라이언트 컴퓨터가 부팅될 때 자동으로 IP주소, 서브넷마스크, 게이트웨이 주소, DNS 서버 주소를
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
                <li> apt-get -y install isc-dhcp-server , # LOCK이 걸려있으면 아래 명령어 참고  </li>
                <small> rm /var/lib/apt/lists/lock </small> <br />
                <small> rm /var/cache/apt/archives/lock </small> <br />
                <small> rm /var/lib/dpkg/lock* </small> <br />
                <li> apt install net-tools , # ifconfig를 지원하지 않아 설치 </li>
                <li> systemctl restart isc-dhcp-server </li>
                <li> lsof -i upd:67 </li>
                <li>  </li>

              </span>
              {/*  */}
              <span className="sstitle"> dhcp 서버 설정 </span>
              <span className="mblock">
                <li> /etc/dhcp/dhcpd.conf 에 아래와 같은 내용을 넣어 주면 된다.  </li>
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
                <li> max-lease-time 172800; , # 클라이언트에게 준 동일한 IP의 최대 시간을 초단위로 설정, 오랜기간 사용하면 악용의 소지때문에 제한  </li>
                <li> {'}'}  </li>
                <li>  </li>
                <li>  </li>
              </span>
              {/*  */}
              <span className="sstitle"> dhcp 클라이언트 설정 </span>
              <span className="mblock">
                <li> vi /etc/netplan/01-network-manager-all.yaml </li>
                <li> netplan apply </li>
                <li> ip route , # 아무것도 나오지 않으면 아래 참고 </li>
                <small>  우분트 우측 상단 - 전원 버튼 - 유선으로 관리되지 않음 - 연결 , 이래도 안되면 아래방법 참고  </small> <br />
                <small>    </small> <br />
                <li> vi /etc/netplan/01-network-manager-all.yaml
                  <li> renderer: ~~~~ 아래부터 작성 </li>
                  <li> ethernets: </li>
                  <li> &nbsp;ens33: , # ls /sys/class/net 참고 </li>
                  <li> &nbsp;&nbsp;dhcp4: yes </li>
                </li>
                <li> systemctl restart isc-dhcp-server </li>
                <li> lsof -i udp:67  </li>
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
  );
}

export default LinuxUbuntu;