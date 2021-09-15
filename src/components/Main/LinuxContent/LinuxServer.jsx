import React from 'react';

const LinuxServer = (props) => {
  return (
    <>
      <div className="common_style">
        <ul>
          <span className="lblock">
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 네트워크 연결 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 초기 연결 </span>
                  <span className="mblock">
                    <li> <h3> CentOS7 </h3>
                      <li> ping 8.8.8.8 #연결이 되었는지 확인 </li>
                      <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33 에서 코드를 변경하거나 추가
                        <li> BOOTPROTO="dhcp"에서 BOOTPROTO="static" 으로 변경 # ip주소를 고정해주겠다. </li>
                        <li> IPADDR=고정IP주소 (ex 192.168.10.80)  </li>
                        <li> PREFIX=24 #24까지가 네트워크 대역이다라고 알려주는것 </li>
                        <li> GATEWAY=192.168.10.2 (ex 게이트 웨이 주소) </li>
                        <li> DNS1=8.8.8.8 (ex DNS서버 주소 , default값 168.126.63.1)  </li>
                      </li>
                      <li> <h4> 방화벽 설정 </h4>
                        <li> firewall-cmd --list-all  # 방화벽 리스트 확인 </li>
                        <li> firewall-cmd --permanent --add-port=포트번호/tcp  # 방화벽 포트 허용 </li>
                        <li> firewall-cmd --reload  # 방화벽 재시작 </li>
                      </li>
                      <li> systemctl restart network </li>
                      <li>  </li>
                    </li>
                    <li> <h3> Ubuntu </h3>
                      <li>  </li>
                    </li>
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
                <summary className="stitle"> ▶ httpd 서버 <small> </small>
                  <a name="httpd 서버" style={{ visibility: "hidden" }}> httpd 서버 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> httpd 서버 설치 </span>
                  <span className="mblock">
                    <li>  <h3> CentOS7 </h3>
                      <li> yum install -y libjpeg* libpng* freetype* gd-* gcc gcc-c++ gdbm-devel libtermcap-devel
                        <small> 의존성 라이브러리 설치 </small></li>
                      <li> yum install httpd* <small> 설치 명령어 </small> </li>
                      <li> systemctl status httpd <small> 설치 확인 명령어 </small></li>
                      <li> systemctl start httpd <small> 서비스 시작 명령어 </small></li>
                      <li> systemctl stop httpd <small> 서비스 중지 명령어 </small></li>
                      <li> systemctl restart httpd <small> 서비스 재시작 명령어 </small></li>
                      <li> firewall-cmd --list-all <small> 방화벽 리스트 확인 </small></li>
                      <li> firewall-cmd --permanent --add-port=80/tcp <small> 방화벽 포트80번 허용 </small></li>
                      <li> firewall-cmd --reload <small> 방화벽 재시작 </small></li>
                      <li> vi /etc/httpd/conf/httpd.conf 에서 :set nu 입력 그리고
                        151번째 줄 AllowOverride ALL 로 변경 <small>  </small></li>
                      <li>  <small>  </small></li>
                      <li>  <small>  </small></li>
                    </li>
                    <li> <h3> Ubuntu  </h3>
                      <li> apt-get install apache2 </li>
                      <li> service apache2 status <small> 설치 확인 명령어 </small></li>
                      <li> service apache2 start <small> 서비스 시작 명령어 </small></li>
                      <li> service apache2 stop <small> 서비스 중지 명령어 </small></li>
                      <li> service apache2 restart <small> 서비스 재시작 명령어 </small></li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> httpd 서버 디렉토리 </span>
                  <span className="mblock">
                    <li> /var/www/html <small> index.html이 있는 경로(없으면 만들어서 사용) </small></li>
                    <li> /etc/httpd/conf <small> MIME 형식을 지정하기 위한 파일인 magic 파일이 있는곳 </small></li>
                    <small> MIME(Multipurpose Internet Mail Extensions) : 과거에는 메일  </small>
                    <li> /etc/httpd/conf.d <small>  아파치의 주요설정을 분리해서 저장하는 곳 </small></li>
                    <li> /etc/httpd/conf.modules.d <small> 아파치 모듈 설치 디렉토리 </small></li>
                    <li> /etc/httpd/modules <small> 아파치 모듈 설치 디렉토리 </small></li>
                    <li> /etc/httpd/logs <small> 로그 파일 저장 위치 </small></li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> httpd 서버 로그 </span>
                  <span className="mblock">
                    <li> cat /var/log/httpd/error_log
                      <span className='sblock'>
                        <li> <span className='sstitle'> client denied by server configuration </span> </li>
                        <li> 폴더 경로가 잘 잡혔는지 확인 </li>
                        <li>  </li>
                      </span>
                    </li>
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
                <summary className="stitle"> ▶ ftp 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> ftp 서버 설치 </span>
                  <span className="mblock">
                    <li> <h3> CentOS </h3>
                      <li> yum -y install vsftpd </li>
                      <li> systemctl enable vsftpd <small> 시스템을 꺼도 작동되게함 </small> </li>
                      <li> systemctl restart vsftpd <small>  </small> </li>
                      <li> netstat -tnlp 로 21번포트가 존재하는지 검색 <small>  </small> </li>
                      <li> firewall-cmd --permanent --add-port=21/tcp </li>
                      <li> firewall-cmd --permanent --add-port=20/tcp </li>
                      <li> firewall-cmd --reload </li>
                      <li> vi /etc/vsftpd/ftpusers에서 root를 지움 (이곳에 등록된 유저는 패스워드를 확인후 접근 불가) </li>
                      <li> vi /etc/vsftpd/user_list에서 root를 지움 (이곳에 등록된 유저는 접속 불가) </li>
                      <li> 구글에 winscp 검색 다운로드 , ftp 서버에 접속하는 프로그램  </li>
                      <li> winscp 다음 누르다가 FTP로 변경, 호스트이름은 IP주소 , root , 본인비번 입력 </li>
                      <li> 고급 - 연결 - 패시브모드 체크 해제  </li>
                      <li>  </li>
                      <li>  </li>
                    </li>
                    <li> <h3> Ubuntu </h3>
                      <li>  </li>
                    </li>
                    <li>  </li>
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
                <summary className="stitle"> ▶ dns 서버 <small> 도메인을 IP주소로 바꿔주는 서버 </small>
                  <a name="dns 서버" style={{ visibility: "hidden" }}> dns 서버 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설명 </span>
                  <span className="mblock">
                    <li> 기본포트 53번 포트 </li>
                    <li> zone 영역 :
                      <li> 정방향(IP주소를 문자로)과 역방향(문자를 IP주소로)이 있다. </li>
                      <li> <h3> zone 파일의 구조 </h3> <small> 최초 TTL(Time To Live) 값 설정 이후 레코드가 나뉨 </small>
                        <li> <h4> SOA 레코드  </h4>
                          <li> nameserver = dns서버의호스트명.도메인명.루트도메인. (ex host.test.com ) </li>
                          <li> contact_email_address = 계정.도메인.루트도메인. (ex root.test.com) </li>
                          <li> serial = 0 , YYYYMMDDNN형식으로 기입(NN은 수정횟수) </li>
                          <li> refresh = 1D , 2차 DNS서버가 정보를 업데이트 하는 주기(초단위) </li>
                          <li> retry = 1H , 2차 DNS서버가 주 DNS서버로 접속 실패했을 경우 재시도하는 주기 </li>
                          <li> expire = 1W , 2차 DNS서버가 주 DNS서버로 접속 실패했을 경우 만기되는 시간 </li>
                          <li> minimum = 3H , zone파일 정보의 최소 보관 시간 설정 </li>
                        </li>
                        <li> <h4> 자원 레코드 </h4>
                          <li> IN : 네트워킹 주소 클래스 </li>
                          <li> NS : 도메인의 네임서버 정보 </li>
                          <li> MX : 도메인의 Mail 서버로, MX 다음 숫자는 메일처리의 우선순위를 명시한 것. </li>
                          <li> A : 해당 도메인의 실제 IP주소(IPv4)를 설정 하는 레코드 </li>
                          <li> CNAME : 별칭으로 부여된 name (서브도메인을 사용하기 위해 지정) </li>
                          <li> HINFO : 호스트의 CPU정보와 운영체제 정보 </li>
                          <li> MINFO : 메일박스와 메일 리스트 정보  </li>
                          <li> PTR : IP주소에 대한 호스트명 </li>
                          <li> TXT : 호스트에 대한 텍스트 정보 </li>
                          <li> UINFO : 사용자 정보 </li>
                          <li> ANY : 호스트에 관련된 모든 레코드들의 정보 </li>
                        </li>
                      </li>
                      <li>  </li>
                    </li>
                    <li> 리졸빙(resolving) : 데이터베이스를 검색하는 역할 </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> <h3> CentOS - bind(DNS서버 프로그램) </h3>
                      <li> yum -y install bind bind-chroot </li>
                      <li> vi /etc/named.conf
                        <span className="sblock">
                          <li> options
                            <li> listen-on port 53 {'{ any; }'} , #누구든 접속할 수 있게 허용(default=127.0.0.1) </li>
                            <li> listen-on-v6 port 53 {'{ none; }'} , #ipv6를 사용 유무(default=;;1) </li>
                            <li> directory  , #zone파일의 위치 </li>
                            <li> dump-file , #named정보가 갱신될 때 dump파일에 저장이 되므로 dump파일의 생성위치 및 파일명 </li>
                            <li> statistics-file , # 네임서버의 통계파일의 생성위치 및 파일명 </li>
                            <li> memstatistics-file , # 네임서버의 메모리 통계파일의 생성위치 및 파일명 </li>
                            <li> allow-query {' {none;} '} , #질의문 허용 유무(default=localhost) </li>
                            <li> datasize 512M; , # DNS 관련 정보를 캐싱하는데 사용하는 메모리 제한 </li>
                            <li> recursion yes; , # 하위도메인 검색 가능 유무 </li>
                            {/*  */}
                            <li> zone "test.com" IN {'{'}  <small>  # 정방향 </small>
                              <li> type [master | slave | hint ]; , # master는 본인이 관리,  </li>
                              <li> file "zone파일명.zone"; </li>
                              <li> allow-update {'{none;}'}; </li>
                              <li> allow-transfer {'{192.168.10.81;}'}; ,# 서브 도메인 서버를 사용할 경우 </li>
                            </li>
                            <li> {'};'} </li>
                            <li> zone "0.168.80.in-addr.arpa" IN {'{'} <small>  # 역방향 </small>
                              <li> type [master | slave | hint ]; , # master는 본인이 관리,  </li>
                              <li> file "zone파일명.rev.zone"; </li>
                              <li> allow-update {'{none;}'}; </li>
                            </li>
                            <li> {'};'} </li>
                            <li> zone "test.com" IN {'{'} <small>  # 서브도메인에다가 정의 </small>
                              <li> type slave;  </li>
                              <li> file "slaves/test.zone"; </li>
                              <li> masters{'{192.168.10.80;}'}; </li>
                              <li> masterfile-format text; </li>
                            </li>
                            <li> {'};'} </li>
                            <small> zone영역은 include로 다른 파일에서 관리할 수도 있다. </small>
                          </li>
                        </span>
                      </li>
                      <li> cd /var/named </li>
                      <li> vi zone파일명.zone ( ex test.zone , /etc/named.conf 에서 생성한 zone파일명을 사용해야 한다. )
                        <span className="sblock">
                          <li>
                            <span> $TTL </span>
                            <span className="tab_4"> 3H </span>
                          </li>
                          <li>
                            <span> @ </span>
                            <span className="tab_4"> SOA </span>
                            <span className="tab_4"> @ </span>
                            <span className="tab_4"> root. </span>
                            <span className="tab_4"> (20201111 1D 1H 1W 1H) <small> root는 파일을만든사용자이름,
                              뒤에는 생성 날짜 </small></span>
                          </li>
                          <li>
                            <span> 공백 </span>
                            <span className="tab_4"> IN </span>
                            <span className="tab_4"> NS </span>
                            <span className="tab_4"> @ <small> 메인 DNS서버의 있다고 알려줌? , NS는 네임서버 </small></span>
                          </li>
                          <li>
                            <span> 공백 </span>
                            <span className="tab_4"> IN </span>
                            <span className="tab_4"> NS </span>
                            <span className="tab_4"> ns2. <small> 서브 DNS서버의 있다고 알려줌? </small></span>
                          </li>
                          <li>
                            <span> 공백 </span>
                            <span className="tab_4"> IN </span>
                            <span className="tab_4"> A </span>
                            <span className="tab_4"> 192.168.10.80 <small> DNS서버의 IP주소가 뭔지를 알려줌 , A는 주소? </small> </span>
                          </li>
                          <li>
                            <span> 공백 </span>
                            <span className="tab_4"> ns </span>
                            <span className="tab_4"> A </span>
                            <span className="tab_4"> 192.168.10.80 <small> 메인 DNS서버의 IP주소가 뭔지를 알려줌 </small> </span>
                          </li>
                          <li>
                            <span> 공백 </span>
                            <span className="tab_4"> ns2 </span>
                            <span className="tab_4"> A </span>
                            <span className="tab_4"> 192.168.10.81 <small> 서브 DNS서버의 IP주소가 뭔지를 알려줌 </small> </span>
                          </li>
                          <li>
                            <span> 호스트주소 ( ex www , ftp 등) </span>
                            <span className="tab_4"> IN (파일형식?) </span>
                            <span className="tab_4"> A </span>
                            <span className="tab_4"> 알려줄 IP 주소 (ex 192.168.10.80) <small> 호스트.test.com 파일의 IP주소를 알려줌 </small> </span>
                          </li>
                          <li>
                            <span> www </span>
                            <span className="tab_4"> IN </span>
                            <span className="tab_4"> A </span>
                            <span className="tab_4"> 192.168.10.80 <small> www.test.com 파일의 IP주소를 알려줌 </small> </span>
                          </li>
                        </span>
                      </li>
                      <li> named-checkconf /etc/named.conf </li>
                      <li> named-checkconf /etc/named.rfc1912.zones </li>
                      <li> named-checkzone zone파일명.com zone파일명.zone (com,zone순서대로 안하면 에러) </li>
                      <li> <small> 위에 코드가 되지 않는다면 아래와 같이 입력 </small>
                        <span className="sblock">
                          <li> cp /var/named/zone파일명.zone /var/named/chroot/var/named/ </li>
                          <li> named-checkzone zone파일명.com zone파일명.zone (com,zone순서대로 안하면 에러) </li>
                        </span>
                      </li>
                      {/*<li> named-checkzone zone파일명.rev.zone </li>*/}
                      <li> 실행 - ncpa.cpl - 사용하는 네트워크(이더넷이나 와이파이) 우측 클릭 후 속성 - 2개 (인터넷프로토콜버전4,VMwareNetwork Adapter VMnet8)
                        속성 -  기본설정 DNS 서버의 포트를 DNS설정(192.168.10.80)으로 전환 ,   </li>
                      <li> systemctl enabled named </li>
                      <li> systemctl restart named </li>
                      <li> systemctl stop firewalld </li>
                      {/*<li> vim /etc/resolv.conf <small> DNS 서버의 주소 IP를 설정 </small> </li>*/}
                    </li>
                    <li> <h3> CentOS</h3>
                      <li>  </li>
                      <li>  </li>
                    </li>
                    <li> <h3> Ubuntu </h3>
                      <li>  </li>
                    </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> dns 서버 디렉토리 </span>
                  <span className="mblock">
                    <li> <h3> bind(DNS서버 프로그램) </h3>
                      <li> /etc/hosts </li>
                      <li> /etc/resolv.conf </li>
                      <li> /etc/named.conf : 환경설정 담당 파일 , 서버에서 사용하는 zone파일을 지정 </li>
                      <li> /etc/named.rfc1912.zones : 사용자의 도메인 zone이 참조 </li>
                      <li> /var/named : 루트도메인서버 정보가 담긴 파일(named.ca) 과 사용자가 선언하는 zone파일 등이 위치 </li>
                      <li> /etc/rc.d/init.d/named : DNS서버 가동을 위한 스크립트, named 데몬을 제어 </li>
                      <li> /var/named/named.empty : 도메인 데이터베이스 파일 양식 </li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> dns 보안 </span>
                  <span className="mblock">
                    <li> <h3> CentOS , zone파일 암호화키 생성 </h3>
                      <li> /var/named/keys 폴더만들기 </li>
                      <li> dnssec-keygen -a NSEC3RSASHA1 - r /dev/urandom -b 1024 -n ZONE test.com </li>
                      <li> dnssec-keygen -a NSEC3RSASHA1 - r /dev/urandom -b 2048 -n ZONE -f KSK test.com </li>
                      <li> DNS서버의 /var/named/test.zone 파일 내부에 아래 내용 추가
                        <li> $INCLUDE /var/named/keys/test.com. +123+12345. key , # 공개키 붙여넣기(경로만 절대경로)   </li>
                        <li> $INCLUDE /var/named/keys/test.com. +123+12345. key , # 공개키 붙여넣기(경로만 절대경로)  </li>
                      </li>
                      <li> dnssec-signzone -S -K /var/named/keys/ -3 96e920 -o test.com. /var/named/test.zone  </li>
                      <li> /var/named/named.conf 에 가서 존 부분을 보면
                        <li> file "test.zone"; 이 부분을 file "test.zone.signed"; 로 변경 </li>
                        <li>  </li>
                      </li>
                      <li>  </li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ ssh 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> ssh 서버 설명 </span>
                  <span className="mblock">
                    <li> 포트 22번 </li>
                    <li> 암호화 방식 사용(텔넷 방식보다 좋은 이유) </li>
                    <li> 원격접속 서비스 </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> ssh 서버 설치</span>
                  <span className="mblock">
                    <li> <h3> CentOS </h3>
                      <li> 0. rpm -qa openssh-server # ssh 서버 설치 확인</li>
                      <li> 0. systemctl status sshd  # sshd 데몬이 동작중인지 확인 </li>
                      <li> 1. yum -y install openssh-server openssh-clients openssh-askpass </li>
                      <li> 2. firewall-cmd --list-services # 방화벽 허용 리스트</li>
                      <li> 3. firewall-cmd --permanent --zone=public --add-port=22/tcp # 22번 포트 방화벽 해제 </li>
                      <li> 3. firewall-cmd --reload </li>
                      <li> 4. systemctl start sshd </li>
                      <li> 5. systemctl enable sshd </li>
                      <li> 6. netstat -ntlp | grep sshd </li>
                      <li> 7. service sshd status </li>
                      <li> 8. vim /etc/ssh/sshd_config
                        <li> Port 22 # 이 부분 주석해제 , 17번째 줄 </li>
                      </li>
                      <li> 9. 끝 </li>
                    </li>
                    <li> <h3> Ubuntu (미완성) </h3>
                      <li> 0. dpkg --get-selections | grep ssh # ssh 서버 설치 확인 </li>
                      <li> 0. service ssh status # sshd 데몬이 동작중인지 확인  </li>
                      <li> 추가작성 필요~~ </li>
                      <li> ufw allow 22/tcp  # 방화벽 허용 </li>
                      <li> service ssh restart </li>
                      <li> service ssh status </li>
                      <li> netstat -ntlp | grep sshd </li>
                      <li>  </li>
                    </li>
                    <li> <h3>  </h3>
                      <li>  </li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> ssh 서버 디렉토리 </span>
                  <span className="mblock">
                    <li> vim /etc/ssh/sshd_config  # ssh 설정 파일
                      <li> Port 포트번호 # 포트번호 변경시 사용 </li>
                      <li> PermitRootLogin yes # 루트 계정 로그인 허용 </li>
                      <li> ListenAddress 0.0.0.0 # 모든 네트워크 접속 허용(그냥 주석으로 놔두기) </li>
                      <li> ListenAddress IP #  네트워크 접속 허용(그냥 주석으로 놔두기) </li>
                      <li> HostKey ~~~ # 호스트를 구분할 때 사용되는 공개키 </li>
                      <li> UsePrivilegeSeparation yes # 권한 분리 설정 여부 </li>
                      <li> LoginGraceTime  # 로그인 제한 시간 기본 120 </li>
                      <li> PubkeyAuthentication yes # 공개키 사용 옵션 </li>
                      <li> AuthorizedKeysFile # 공개키 사용시 저장 위치 </li>
                      <li> PermitEmptyPasswords no # 패스워드 인증 시 비어있는 패스워드 허용 여부 </li>
                      <li> PasswordAuthentication yes  #패스워드 인증 사용 여부 </li>
                    </li>
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
                <summary className="stitle"> ▶ raid 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> raid 서버 설명 </span>
                  <span className="mblock">
                    <li> 디스크의 용량이 부족할 때 데이터 손실 없이 증가 시킬 때 사용 </li>
                    <li> 여러개의 디스크를 배열하여 속도의 증대, 안정성의 증대, 효율성, 가용성의 증대를 하는데 사용 </li>
                    <li> 비용 절감 (하나의 좋은 하드디스크보다 여러개의 싼 디스크를 이어서 사용하면 좋음)  </li>
                    <li> 하드웨어 RAID (전문업체에서 만든 장비, 안정적이지만 비쌈)  </li>
                    <li> 소프트웨어 RAID (운영체제를 이용해서 사용하므로 저가) </li>
                    <li> 관련 용어:
                      <li> 패리티: </li>
                      <li> 마운트: 리눅스에서는 하드디스크나 USB를 인식하게 하기위해서는 마운트라는 작업을 해야함 </li>
                      <li>  </li>
                    </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> raid의 종류 </span>
                  <span className="mblock">
                    <li> 단순 불륨 (디스크 1개) </li>
                    <li> Linear RAID (컴퓨터처럼 하드, SSD 장착하는 것처럼 순서대로, 2개이상) </li>
                    <li> RAID0: 2개 이상 동시 저장 하는 방식, Stripping 방식, 공간(N)
                      <li> 1개의 데이터를 여러개의 공간에 분산해서 저장하는 방식 </li>
                      <li> 저장 속도가 빠른다.하지만 하나가 고장나면 원본 데이터의 손실이 발생하여 신뢰성이 적다.</li>
                    </li>
                    <li> RAID1: 2개 동시저장 느림, 결함 허용 제공, Mirroring 방식, 공간(N/2)
                      <li> 1개의 데이터를 여러개의 공간에 복사해서 각각 저장 </li>
                      <li> 데이터의 저장 용량이 2배 필요, 하나가 고장나도 원본데이터를 가지고 있어 신뢰성이 높음 </li>
                      <li> 저장속도는 똑같음, 즉 데이터의 손실을 방지할 경우에 사용 </li>
                    </li>
                    <li> RAID5: 3개 이상, 결함 허용 제공, 공간 효율 좋음, 패리티 정보 사용, 공간(N-1)
                      <li> 1개의 디스크 공간에는 나머지 다른 디스크에서 분산된 패리티 데이터를 조합한 값을 저장  </li>
                      <li> 4개의 공간이 있다면 1 + 1 + 0 +?와 같이 이진수로 나누어서 데이터를 넣어서 총합이 짝수가 나오게 함
                        그러므로?에는 0이 들어감  </li>
                      <li> 위와 같이 조합을 하면 1개의 디스크가 고장나도 값을 유추할 수 있지만 2개가 고장나면 복구 불가 </li>
                      <li> 속도는 raid1 {'<'} raid5 {'<'} raid0, 신뢰성 raid0 {'<'} raid5 {'<'} raid1 </li>
                    </li>
                    <li> RAID6: 4개 이상, RAID5의 개선, 결함 허용 제공, 중복 패리티 정보 사용, 공간(N-2)
                      <li> 홀수 패리티와 짝수 패리티 2개의 공간을 이용해서 신뢰성을 보장하는 방법 </li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> raid 서버 설치 </span>
                  <span className="mblock">
                    <li> <h3> CentOS </h3>
                      <li> CentOS 설정 하는 부분에서 ram은 2gb에서 3gb로 변경 </li>
                      <li> Virtual Machine Settings에서 하드디스크(SCSI)가 1개 있으므로 아래
                        add버튼 클릭해서 추가 - 하드디스크(SCSI) 5gb, Store virtual disk as a single file로 7개 추가하기  </li> <br />
                      <li> ls -la /dev/sd* # 디스크 목록 보기 </li>
                      <li> fdisk -l | more # 현재 디스크 및 파티션 확인 명령어 </li>
                      <li> fdisk /dev/sdb # sdb디스크 설정하기
                        <li> m: 명령어들의 목록을 보여줌 </li>
                        <li> p: 파티션을 보여줌 </li>
                        <li> n: 파티션을 생성 (p: 주 영역, e: 보조 영역), 섹터를 작게하면 신뢰성이 떨어짐
                          섹터하나가 고장나면 전체가 고장 </li>
                        <li> t: 파일 시스템을 변경 (l 을 입력해서 hex code보기), rd: (rinux raid auto) </li>
                        <li> w: 현재 까지 설정한 내용을 저장 </li>
                      </li>
                      <li> sfdisk--help | grep '\-d' </li>
                      <li> sfdisk -d /dev/sdb </li>
                      <li> sfdisk -d /dev/sdb {'>'} /tmp/sdb.tmp # 설정 파일 복사 </li>
                      <li> sfdisk--force /dev/sdc {'<'} /tmp/sdb.dmp # sdc에 덮어쓰기 </li>
                      <li> sfdisk--force /dev/sdd {'<'} /tmp/sdb.dmp # sdd에 덮어쓰기 </li>
                      <li> sfdisk--force /dev/sde {'<'} /tmp/sdb.dmp # sde에 덮어쓰기 </li>
                      <li> sfdisk--force /dev/sdf {'<'} /tmp/sdb.dmp # sdf에 덮어쓰기 </li>
                      <li> sfdisk--force /dev/sdg {'<'} /tmp/sdb.dmp # sdg에 덮어쓰기 </li>
                      <li> sfdisk--force /dev/sdh {'<'} /tmp/sdb.dmp # sdh에 덮어쓰기 </li> <br />

                      <li> <h4> 레이드0 방식 </h4> </li>
                      <li> mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sdb1 /dev/sdc1 #
                        레이드 공간을 2개를 사용, level: 레이드방식설정 </li>
                      <li> mdadm--detail /dev/md0 # 만들어진 레이드공간을 본다</li>
                      <li> cat /proc/mdstat # 레이드들에 대한 정보를 볼 수 있음 </li>
                      <li> mkfs.ext4 /dev/md0 # 새로 만들어진 공간에 대해서도 리눅스가 아는 파일포맷 설정 </li>
                      <li> mkdir /data1 </li>
                      <li> mount /dev/md0 /data1 </li>
                      <li> df -Th # 마운트가 된 리스트를 확인 </li> <br />
                      <li> <h4> 레이드1 방식 </h4> </li>
                      <li> mdadm --create /dev/md1 --level=1 --raid-devices=2 /dev/sdd1 /dev/sde1
                        <li> 미러링을 할것이냐고 물음: Y </li>
                      </li>
                      <li> mkfs.ext4 /dev/md1 </li>
                      <li> mkdir /data2 </li>
                      <li> mount /dev/md1 /data2 </li> <br />

                      <li> <h4> 레이드5 방식 </h4> </li>
                      <li> mdadm --create /dev/md5 --level=5 --raid-devices=3 /dev/sdf1 /dev/sdg1 /dev/sdh1 </li>
                      <li> mdadm --detail /dev/md5 # Consistency Policy 100% 가 된 후에 사용가능 </li>
                      <li> mkfs.ext4 /dev/md5 </li>
                      <li> mkdir /data3 </li>
                      <li> mount /dev/md5 /data3 </li> <br />

                      <li> <h4> 레이드6 방식 </h4> </li>
                      <li> mdadm --create /dev/md6 --level=6 --raid-devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1 </li>
                      <li> mdadm --detail /dev/md6 # Consistency Policy 100% 가 된 후에 사용가능 </li>
                      <li> mkfs.ext4 /dev/md6 </li>
                      <li> mkdir /data6 </li>
                      <li> mount /dev/md6 /data6 </li> <br />

                      <li> <h4> 레이드(1+0) 방식 </h4> </li>
                      <li> mdadm --create /dev/md1 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1 </li>
                      <li> mdadm --create /dev/md2 --level=1 --raid-devices=2 /dev/sdd1 /dev/sde1 </li>
                      <li> mdadm --detail /dev/md1 # Consistency Policy 100% 가 된 후에 사용가능 </li>
                      <li> mdadm --detail /dev/md2 # Consistency Policy 100% 가 된 후에 사용가능 </li>
                      <li> cat /proc/mdstat # 레이드가 묶인것을 확인 </li>
                      <li> mdadm--create /dev/md10 --level=0 --raid-devices=2 /dev/md1 /dev/md2 </li>
                      <li> mkfs.ext4 /dev/md10 </li>
                      <li> mkdir /data10 </li> <br />
                      <li> mount /dev/md1 #이거 왜하는거지? </li> <br />
                      <li> mount /dev/md10 /data10 </li> <br />

                      <li> 리눅스에서는 재부팅을 하면 마운트가 자동으로 풀려서 오토마운트라는 것을 사용해야됨 </li>
                      <li> /etc/fstab 라는 곳을 보고 리눅스가 자동으로 마운트를 해준다.</li>
                      <li> vi /etc/fstab
                        <li> /dev/md0 /data1 ext4 defaults 0 0 # 위에 줄여 적혀있는 내용에 탭 간격으로 구분해주기!! </li>
                        <li> /dev/md1 /data2 ext4 defaults 0 0  </li>
                        <li> /dev/md5 /data3 ext4 defaults 0 0  </li>
                      </li>
                      <li> 이제부터 잘못하면 부팅이 안되므로 주의 </li>
                      <li> mount -a # 입력해서 뭐가 나오면 잘못됨 그러므로 수정필요 </li>
                      {/*  */}
                      <li> cp /boot/vmlinuz ~~~~ /data1 </li>
                      <li> cp /boot/vmlinuz ~~~~ /data2 </li>
                      <li> cp /boot/vmlinuz ~~~~ /data3 </li>
                      <li> shutdown -h now  </li>
                      <li> 기존에 있는 하드디스크 중에 6번,4번,2번 하드디스크 삭제 </li>
                      <li> 그리고 부팅하면 부팅이 안된다 (설정해놓은 마운트가 실행되야 되는데 망가져서 안되기 때문) </li>
                      <li> 그러므로 실행을 하고 검은 화면에서 e 버튼을 누르면 안전모드로 부팅 가능 </li>
                      <li> centos-root r\o rd.lvm 부분을 centos-root r\w rd.lvm으로 변경 </li>
                      <li> swap rhgb quiet 부분을 swap init=\bin\bash 으로 변경 </li>
                      <li> ctrl + x </li>
                      <li> vi /etc/fastab
                        <li> 마운트했던 부분들을 모두 #으로 주석처리하고 강제로 재부팅시키기(명령어가 안먹힘) </li>
                      </li>
                      <li> ls -la /dev/sd*  # 하드디스크를 순차적으로 인식하므로 sdh가 sde가 되어있다.</li>
                      <li> cat /proc/mdstat </li>
                      <li> madam--detail /dev/md0 </li>
                      <li> madam--detail /dev/md1 </li>
                      <li> madam--detail /dev/md5 </li>
                      <li> madam--run /dev/md0 # 레이드0은 고장이나서 사용할 수 없다고 나옴 </li>
                      <li> madam--run /dev/md1 </li>
                      <li> madam--run /dev/md5 </li>
                      <li> 다시 삭제한 만큼의 수의 디스크를 만든다.</li>
                      <li> sfdisk--force /dev/sdb {'<'} /tmp/sdb.dmp </li>
                      <li> sfdisk--force /dev/sdd {'<'} /tmp/sdb.dmp </li>
                      <li> sfdisk--force /dev/sdf {'<'} /tmp/sdb.dmp </li>
                      <li> ls -la /dev/sd* </li>
                      <li> mdadm /dev/md1--add /dev/sdb1 </li>
                      <li> madam--detail /dev/md1 # 100% 될 때 까지 확인 </li>
                      <li> mdadm /dev/md5--add /dev/sdf1 </li>
                      <li> madam--detail /dev/md5 # 100% 될 때 까지 확인 </li>
                      <li> vi /etc/fastab
                        <li> md1,md5에 주석처리를 한것을 해제 </li>
                      </li>
                      <li> mount -a # 에러가 없다면 성공 </li>
                      <li>  </li>
                      <li>  </li>
                      <li>  </li>
                      <li>  </li> <br />
                    </li>
                    <li> <h3> Ubuntu </h3>
                      <li>  </li>
                    </li>
                    <li> <h3>  </h3>
                      <li>  </li>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> raid 서버 해제 </span>
                  <span className="mblock">
                    <li> <h3> CentOS </h3>
                      <li> cd / </li>
                      <li> vi /etc/fstab # 마운트된것을 주석처리(해제가 되는것은 아님) </li>
                      <li> mount -a  </li>
                      <li> df -Th </li>
                      <li> umount /dev/md1 # 마운트 해제</li>
                      <li> umount /dev/md5 </li>
                      <li> df -Th </li>
                      <li> mdadm --misc --stop /dev/md0 # 강제적으로 동기화 중지 </li>
                      <li> mdadm --stop /dev/md1 # 동기화 중지 </li>
                      <li> mdadm --stop /dev/md5 </li>
                      <li> fdisk -l | grep -v sda | grep sd </li>
                      <li> cat /proc/mdstat # 현재 레이드를 볼 수 있음 </li>
                      <li> mdadm --zero-superblock /dev/sdb1 </li>
                      <li> mdadm --zero-superblock /dev/sdc1 </li>
                      <li> mdadm --zero-superblock /dev/sdd1 </li>
                      <li> mdadm --zero-superblock /dev/sde1 </li>
                      <li> mdadm --zero-superblock /dev/sdf1 </li>
                      <li> mdadm --zero-superblock /dev/sdg1 </li>
                      <li> mdadm --zero-superblock /dev/sdh1 </li>
                      <li>  </li>
                    </li>
                    <li> <h3> Ubuntu </h3>
                      <li>  </li>
                    </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> raid 서버 디렉토리 </span>
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
                <summary className="stitle"> ▶ mail 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 메일 서버 설명 </span>
                  <span className="mblock">
                    <li> SMTP(25번 포트) 프로토콜을 이용하여 메일서버로 보냄 </li>
                    <li> POP3 , IMAP 프로토콜을 이용하여 메일서버에서 받음 </li>
                    <li> MUA(Mail User Agent) : 유저 </li>
                    <li> MTA(Mail Transfer Agent) : 메일 서버 </li>
                    <li> MDA(Mail Delivery Agent) 메일 송신,수신 프로그램? </li>
                    <li> MRA(Mail Retrieval Agent) : 유저에게 메일을 전달해주는 프로그램(dovecot) </li>
                    <li> 메일 박스 : 메일을 보관하는 공간 </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> 메일 서버 설치 </span>
                  <span className="mblock">
                    <li> <h4> CentOS - Server (DNS서버 설정 필요) </h4>
                      <span className="sblock">
                        <li> cd /var/named </li>
                        <li> DNS 서버 설정에서 vi test.zone
                          <li> $TTL 3H  </li>
                          <li> 공백 @ SOA @ root. (20201111 1D 1H 1W 1H)  </li>
                          <li> 공백 IN NS @  </li>
                          <li> 공백 IN A 192.168.10.80  </li>
                          <li> 공백 IN MX 10 (탭여백) mail.test.com.  </li>
                          <li> mail IN A 192.168.10.80 </li>
                        </li>
                        <li> named-checkzone test.com test.zone </li>
                        <li> cp test.zone linux.zone </li>
                        <li> vi linux.zone
                          <li> $TTL 3H  </li>
                          <li> 공백 @ SOA @ root. (20201111 1D 1H 1W 1H)  </li>
                          <li> 공백 IN NS @  </li>
                          <li> 공백 IN A 192.168.10.80  </li>
                          <li> 공백 IN MX 10 (탭여백) mail.linux.com.  </li>
                          <li> mail IN A 192.168.10.111 # 클라이언트의 IP 주소를 적어야 함</li>
                        </li> <br />
                        <li> <h4> 메일 서버 설치 </h4> </li>
                        <span className="mblock">
                          <li> yum -y install sendmail sendmail-cf dovecot </li> <br />
                          <li> vi /etc/mail/sendmail.cf
                            <li> Cwtest.com # 85번 째 줄 변경 </li>
                            <li> O DaemonPortOptions=Port=smtp, Name=MTA # 264번째 addr 지워주기  </li>
                          </li> <br />
                          <li> systemctl restart sendmail </li> <br />
                          <li> vi /etc/mail/access #접근 권한 설정
                            <li> ssssksss.com                            RELAY </li>
                            <li> linux.com                               RELAY </li>
                            <li> 192.168.10                             RELAY </li>
                          </li> <br />
                          <li> {' makemap hash /etc/mail/access < /etc/mail/access'} # DB로 만들어서 사용해야함 </li>
                          <li> ls -la /etc/mail </li>
                          <li> cat /etc/mail/access.db # 새로 생성이 됨 </li>
                          <li> strings /etc/mail/access.db # DB파일로 생성이 된것을 볼 수 있음</li> <br />
                          <li> vi /etc/dovecot/conf.d/10-ssl.conf # 송수신하는 설정파일
                            <li> ssl = required를 ssl = yes 로 변경 # 8번째 줄</li>
                          </li> <br />
                          <li> vi /etc/dovecot/conf.d/10-mail.conf
                            <li> mail_location = mbox:~/mail:INBOX=/var/mail/%u # 25줄 주석해제, 메일이 저장되는 위치 </li>
                            <li> mail_access_groups = mail # 121번째 줄 주석해제 및 수정 </li>
                            <li> lock_method = fcntl # 166번째 줄 주석해제 </li>
                          </li> <br />
                          <li> vi /etc/dovecot/conf.d/10-auth.conf
                            <li> disable_plaintext_auth = no # 평문으로 보내지 못하게 하는 설정 , SSH설정이 복잡해서 일단 넘어감 </li>
                          </li> <br />
                          <li> vi /etc/hostname
                            <li> localhost.localdomain 삭제하고 mail.test.com 추가 </li>
                          </li> <br />
                          <li> vi /etc/mail/local-host-names
                            <li> 주석내용 삭제하고 mail.test.com 추가 </li>
                          </li> <br />
                          <li> vi /etc/sysconfig/network
                            <li> HOSTNAME=mail.test.com </li>
                          </li> <br />
                          <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33  # 네트워크 설정 파일
                            <li> DNS1=192.168.10.80 # 본인의 IP주소로 변경 </li>
                          </li> <br />
                          <li> useradd service </li>
                          <li> echo -e "1234\n1234" | passwd service </li>
                          <li> systemctl restart named </li>
                          <li> systemctl restart sendmail </li>
                          <li> systemctl restart dovecot </li>
                          <li> systemctl enable named </li>
                          <li> systemctl enable sendmail </li>
                          <li> systemctl enable dovecot </li>
                          <li> systemctl disable firewalld # 포트를 개방할 것이 너무 많아서 그냥 중단 </li>
                          <li> setenforce 0  # se리눅스 끄기</li>
                          <li> systemctl restart network </li>
                          <li> cat /etc/resolv.conf # 본인의 네임서버  확인 </li>
                          <li> 끝 , 이제 클라이언트 설정 </li> <br />
                        </span>
                      </span>
                    </li>
                    <li> <h4> CentOS - Client  </h4>
                      <span className="sblock">
                        <li> <h4> 메일 서버 설치 </h4> </li>
                        <li> yum -y install thunderbird </li>
                        <li> yum -y install sendmail sendmail-cf dovecot </li> <br />
                        <li> vi /etc/mail/sendmail.cf
                          <li> Cwlinux.com # 85번 째 줄 변경 </li>
                          <li> O DaemonPortOptions=Port=smtp, Name=MTA # 264번째 addr 지워주기 </li>
                        </li> <br />
                        <li> vi /etc/mail/access
                          <li> test.com RELAY </li>
                          <li> linux.com RELAY </li>
                          <li> 192.168.10 RELAY </li>
                        </li> <br />
                        <li> {' makemap hash /etc/mail/access < /etc/mail/access '} </li>
                        <li> strings /etc/mail/access.db </li>
                        <li> vi /etc/dovecot/conf.d/10-ssl.conf # 송수신하는 설정파일
                          <li> ssl = required를 ssl = yes 로 변경 # 8번째 줄</li>
                        </li> <br />
                        <li> vi /etc/dovecot/conf.d/10-mail.conf
                          <li> mail_location = mbox:~/mail:INBOX=/var/mail/%u # 25줄 주석해제, 메일이 저장되는 위치 </li>
                          <li> mail_access_groups = mail # 121번째 줄 주석해제 및 수정 </li>
                          <li> lock_method = fcntl # 166번째 줄 주석해제 </li>
                        </li> <br />
                        <li> vi /etc/dovecot/conf.d/10-auth.conf
                          <li> disable_plaintext_auth = no # 10번째 줄 평문으로 보내지 못하게 하는 설정 , SSH설정이 복잡해서 일단 넘어감 </li>
                        </li> <br />
                        <li> vi /etc/hostname
                          <li> localhost.localdomain 삭제하고 mail.linux.com 추가 </li>
                        </li> <br />
                        <li> vi /etc/mail/local-host-names
                          <li> 주석내용 삭제하고 mail.linux.com 추가 </li>
                        </li> <br />
                        <li> vi /etc/sysconfig/network
                          <li> HOSTNAME=mail.linux.com </li>
                        </li> <br />
                        <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33  # 네트워크 설정 파일
                          <li> DNS1=192.168.10.80 # 본인이 만든 DNS서버의 IP주소로 변경 </li>
                        </li> <br />
                        <li> useradd admin </li>
                        <li> echo -e "1234\n1234" | passwd admin </li>
                        <li> systemctl restart sendmail </li>
                        <li> systemctl restart dovecot </li>
                        <li> systemctl enable sendmail </li>
                        <li> systemctl enable dovecot </li>
                        <li> systemctl disable firewalld  </li>
                        <li> systemctl stop firewalld # 포트를 개방할 것이 너무 많아서 그냥 중단 </li>
                        <li> setenforce 0  # se리눅스 끄기</li>
                        <li> systemctl restart network </li>
                        <li> cat /etc/resolv.conf # 본인의 네임서버 주소 확인 </li>
                        <li> 끝 </li> <br />
                        <li> thunderbird &amp; # 시간이 조금 걸림 </li>
                        <li> server에 service라는 계정으로 접속
                          <span className="mblock">
                            <li> 이름 : service </li>
                            <li> 메일주소 : service@test.com </li>
                            <li> 비밀번호 : 1234 </li>
                            <li> 수동으로 구성 클릭 </li>
                          </span>
                          <span className="mblock">
                            <li> 프로토콜 : POP3 </li>
                            <li> 서버 : mail.test.com , mail.test.com </li>
                            <li> 포트 : 110 , 25 </li>
                            <li> SSL : 암호화 안함 , 암호화 안함 </li>
                            <li> 인증 방법 : 평문 비밀번호 , 인증 없음 </li>
                            <li> 아이디 : service </li> <br />
                            <li> 접속이 되지 않는 다면 nslookup mail.ssssksss.com 해보기
                              <li> 서버의 방화벽 제거 , 서버로 이동 , systemctl stop firewalld </li>
                              <li> 유저가 추가되있지 않아서 해결이 안되어 있을 수도 있음 </li>
                            </li>
                          </span>
                        </li>
                        <li> 좌측에 이메일 계정 우측클릭 설정 - 좌측 하단에 계정작업 - 메일 계정 추가
                          <span className="mblock">
                            <li> 이름 : admin </li>
                            <li> 메일주소 : admin@linux.com </li>
                            <li> 비밀번호 : 1234 </li>
                            <li> 수동으로 구성 클릭 </li>
                          </span>
                          <span className="mblock">
                            <li> 프로토콜 : POP3 </li>
                            <li> 서버 : mail.linux.com , mail.linux.com </li>
                            <li> 포트 : 110 , 25 </li>
                            <li> SSL : 암호화 안함 , 암호화 안함 </li>
                            <li> 인증 방법 : 평문 비밀번호 , 인증 없음 </li>
                            <li> 아이디 : admin </li> <br />
                            <li> 접속이 되지 않는 다면 nslookup mail.linux.com 해보기
                              <li> 클라이언트의 방화벽 제거 , systemctl stop firewalld </li>
                              <li> 유저가 추가되있지 않아서 해결이 안되어 있을 수도 있음 </li>
                            </li>
                          </span>
                        </li>
                        <li> 좌측에 계정이 2개 있는 것을 볼 수 있음 </li>
                        <li> 좌측에 계정이 2개 있는 것을 볼 수 있음 , 보내기를 테스트 해보고 안된다면 서버 재시작 </li>
                        <li> 양쪽 서버에 setenforce 0  </li>
                        <li>  </li>
                      </span>
                    </li>
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> 메일 서버 디렉토리 </span>
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
                <summary className="stitle"> ▶ 레포지토리 서버(미완성) <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle">  </span>
                  <span className="mblock">
                    <li> yum -y install createrepo # 저장소 생성을 위한 패키지 </li>
                    <li> yum -y install httpd # 웹서버를 이용해서 rpm파일을 배포하기위해 httpd서버 설치 </li>
                    <li> mkdir -p /app/repo  </li>
                    <li> createrepo /app/repo # rpm파일을 yum을 통해 배포할수 있는 공간으로 지정 </li>
                    <li> ls -la  /app/repo/repodata # 의존성에 대한 다양한 정보가 보관된다고 이해 </li>
                    <li> vi /etc/httpd/conf/httpd.conf
                      <div className="sblock">
                        <li> 제일 마지막 줄에 추가 </li>
                        <li> <a href="https://httpd.apache.org/docs/2.4/en/mod/core.html#directory"
                          target="_blank" rel="noopener noreferrer"> Directory 아파치 문서 참조 </a> </li> <br />
                        <li> Alias /repo "/app/repo" # 도메인/repo 으로이동하면 /app/repo로 이동하라는 의미  </li>
                        <li> {' <Directory "/app/repo"> '}
                          <li> {' 	Options FollowSymLinks '} </li>
                          <li> {' 	DirectoryIndex index.html index.jsp *.jsp '} </li>
                          <li> {' 	Order allow,deny '} # 모두 접근 허용 </li>
                          <li> {' 	Allow from all '} # 모두 접근 허용 </li>
                          <li> {' 	Require all granted '} # 모두 접근 가능하게 하겠다. </li>
                        </li>
                        <li> {' </Directory> '} </li>
                      </div>
                    </li>
                    <li> systemctl stop firewalld </li>
                    <li> systemctl start httpd </li>
                    <li> cd /app/repo </li>
                    <li> yum install --downloadonly --downloaddir=/app/repo vsftpd # 다운만받고 설치까지는 하지 않음 </li>
                    <li> yum install --downloadonly --downloaddir=/app/repo net-snmp # 다운만받고 설치까지는 하지 않음 </li>
                    {/*<li> cp /root/rpmbuild/RPMS/x86_64/hello-1.0.0-1.el7.x86_64.rpm /app/repo #개인적으로 만든 rpm파일 </li>*/}
                    <li> setenforce 0 # se리눅스 끄기 </li>
                    <li> ls -la </li>
                    <li> 인터넷에서 URL에 localhost/repo/파일명.rpm # 인터넷창 아래쪽에 다운이 되면 성공
                      <div className="sblock">
                        <li> You don't have permission to access ~~~ 에러 발생</li>
                        <li> 1. 아파치가 접근 할 수 있는 권한 문제 , 경로에 읽기 권한이 있는지 한번 확인 </li>
                        <li> 2. 만약에 되지 않는 다면 vi /etc/httpd/conf/httpd.conf
                          <li> 104번 째 줄 </li>
                          <li> #Require all denied # 주석처리해주고 </li>
                          <li> Require all granted # 내용을 추가해준다. </li>
                        </li>
                      </div>
                    </li>
                    <li> createrepo --update /app/repo # rpm파일들이 있다고 repodata에 알려주어야 한다. </li>
                    <li> yum clean all </li>
                    <li> ls -la /etc/yum.repos.d/ # yum install 사이트들의 목록을 가지고 있는 공간 </li>
                    <li> cat CentOS-Base.repd # 그중에 하나 열어보면 다운로드 받는 경로들의 위치가 있다는 것을 보여준다. </li>
                    {/* 여기까지 진행함 1:57:00 강의 참고 */}
                    <li> mkdir /etc/yum.repos.d/backup  </li>
                    <li> mv /etc/yum.repos.d/*.repo /etc/yum.repos.d/backup/ #기존에 있던 yum 다운 지원을 하는 repo파일을 다른곳으로 옮김 </li>
                    <li> yum -y install vsftpd # 에러가 발생함 이유는 다운받는 repo 경로가 하나도 없음 </li>
                    <li> vi repo-server.repo  # repo 서버를 만듬
                      <div className="sblock">
                        <li> [repo-server] </li>
                        <li> name=Repository Server </li>
                        <li> {' baseurl=file:///app/repo '} </li>
                        <li> enabled=1 </li>
                        <li> gpgcheck=0 </li>
                      </div>
                    </li>
                    <li> yum clean all </li>
                    <li> yum install net-snmp # 기존에 사용하던 yum파일들이 모여있는 경로는 없지만
                      아까 /app/repo 파일에 다운을 받아놓았기 때문에 설치가 가능   </li> <br />
                    <li> 클라이언트 CentOS 열기 - 레포지토리서버에서 받아오기 테스트
                      <li> cd /etc/yum.repos.d/ </li>
                      <li> mkdir /etc/yum.repos.d/backup </li>
                      <li> mv /etc/yum.repos.d/*.repo /etc/yum.repos.d/backup </li>
                      <li> vi repo-server.repo
                        <span className='sblock'>
                          <li> [repo-server] </li>
                          <li> name=Repository Server </li>
                          <li> {' baseurl=file://192.168.10.80/repo '} </li>
                          <li> enabled=1 </li>
                          <li> gpgcheck=1 </li>
                        </span>
                      </li>
                      <li> yum clean all </li>
                      <li> 만약 yum lock이 있다면 , 반복 시도
                        <span className='sblock'>
                          <li> ps -ef | grep yum  </li>
                          <li> kill -9 PID번호 </li>
                          <li> yum clean all </li>
                        </span>
                      </li>
                      <li> cat /root/RPM-GPG-KEY 의 내용을 모두 복사 </li>
                      <li> vi /tmp/key 에 복사한 내용을 넣어주기 </li>
                      <li> yum install net-snmp # 설치할 필요는 없음 , 되는지만 확인 안되면
                        <li> vi repo-server.repo 에 가서 gpgcheck=0으로 변경 </li>
                      </li>
                      <li> rpm --import /tmp/key # 공개키를 임포트를 함 </li>
                      <li>  </li>
                      <li>  </li>
                    </li>
                    <li> <div className="sstitle"> 의존성을 고려한 파일 만들고 배포하기 </div> </li>
                    <li> yum deplist net-snmp | grep "dependency:" # net-snmp 파일에 필요한 의존성파일들을 볼 수 있는 방법 </li>
                    <li> cd /app/script </li>
                    <li> vi lyum.sh
                      <div className="sblock">
                        <li> #!/bin/bash </li>
                        <li> yum install --downloadonly --downloaddir=/app/repo $1 #매개변수를 전달하여 의존성 파일 다운 </li>
                        <li> yum reinstall --downloadonly --downloaddir=/app/repo $1 #이미 파일이 깔려있어도 다운받게 한다 </li>
                        <li> yum deplist $1 | grep "dependency:" | awk '{'{print $2}'}' | awk -F "(" '{'{print $1}'}' | xargs
                          yum install --downloadonly --downloaddir=/app/repo  </li>
                        <li> yum deplist $1 | grep "dependency:" | awk '{'{print $2}'}' | awk -F "(" '{'{print $1}'}' | xargs
                          yum reinstall --downloadonly --downloaddir=/app/repo  </li>
                        <li> createrepo --update /app/repo # repodata라는 db파일에 어떠한 rpm파일들이 있는지 알수 있는 공간인데
                          이 공간에 업데이트
                        </li>
                        <li> yum clean all </li>

                      </div>
                    </li>
                    <li> chmod 755 lyum/sh </li>
                    <li> /app/script/lyum.sh net-snmp </li>
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
                <summary className="stitle"> ▶ 톰캣 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설명 </span>
                  <span className="mblock">
                    <li> 아파치는 웹서버 </li>
                    <li> 톰캣(아파치톰캣)은 아파치 재단 하위에 있는 웹서버+어플리케이션서버 </li>
                    <li>  </li>
                  </span>
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> <a href="https://tomcat.apache.org/download-80.cgi"
                      target="_blank" rel="noopener noreferrer"> 아파치 톰캣 다운 주소 </a> </li>
                    <li> Core tar.gz 파일의 링크 주소를 복사  </li>
                    <li> mkdir -p /app/install </li>
                    <li> cd /app/install </li>
                    <li> mkdir -p /app/server/tomcat </li>
                    <li> wget https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.70/bin/apache-tomcat-8.5.70.tar.gz -O /app/install/tomcat8.5.tar.gz </li>
                    <li> tar xvfz /app/install/tomcat8.5.tar.gz -C /app/server/tomcat --strip-components=1
                      # --strip-components=1 상위 n번쨰 이후 폴더부터 압축해제  </li>
                    <li> cd /app/server/tomcat/bin  </li>
                    <li> vim startup.bat </li>
                    <li> ./startup.sh </li>
                    <li> systemctl stop firewalld </li>
                    <li> setenforce=0 </li>
                    <li> java -version </li>
                    <li> which java </li>
                    <li> 구글에 "자바 오라클 아카이브" 검색 </li>
                    <li> 자바 다운로드 주소
                      <li> <a href="https://www.oracle.com/kr/java/technologies/javase/javase8-archive-downloads.html"
                        target="_blank" rel="noopener noreferrer"> 자바 다운로드 주소 </a> </li>
                    </li>
                    <li> mkdir -p /app/install/dkit/jdk </li>
                    <li> cd /app/install/dkit/jdk </li>
                    <li> 리눅스 x64버전 다운로드(로그인 필요)  </li>
                    <li> 리눅스 내부 브라우저에서 직접 다운 받아서 /app/install/dkit/jdk/ 에 다운파일(jdk-8u202-linux-x64.tar.gz) 설치해주기
                      <li> 하다가 하는 방법을 몰라서 mobaxterm을 이용해서 넣어주었다. </li>
                    </li>
                    <li> 이거는 별개인데 md5sum 파일명 # 해쉬값이 나오는데 동일하면 같은 파일 </li>
                    <li> mkdir -p /app/dkit/jdk/1.8.0 </li>
                    {/*<li> cd /app/install/dkit/jdk </li>*/}
                    <li> tar xvfz /app/install/dkit/jdk/jdk-8u202-linux-x64.tar.gz -C /app/dkit/jdk/1.8.0 --strip-components=1 </li>
                    <li> java -version </li>
                    <li> cd /app/dkit/jdk </li>
                    <li> ln -Tfs /app/dkit/jdk/1.8.0 /app/dkit/jdk/release </li>
                    <li> ls -la /usr/bin/java </li>
                    <li> ln -Tfs /app/dkit/jdk/release/bin/java /usr/bin/java </li> <br />
                    <li> cd /etc/systemd/system </li>
                    <li> ll /usr/lib/systemd/system | grep firewalld #서비스 목록 , 방화벽 서비스 </li>
                    <li> vi /usr/lib/systemd/system/firewalld.service # 안을 보면 실행을 어떻게 하는지 볼수있음 </li>
                    <li> cd /etc/systemd/system </li>
                    <li> vi tomcat.service
                      <span className='sblock'>
                        <li> [Unit] </li>
                        <li> Description=Apache Tomcat Web Application Container </li>
                        <li> After=syslog.target network.target </li>
                        <li> [Service] </li>
                        <li> Type=forking </li>
                        <li> Enviroment=JAVA_HOME=/app/dkit/jdk/release </li>
                        <li> Enviroment=CATALINA_PID=/app/server/tomcat/temp/tomcat.pid </li>
                        <li> Enviroment=CATALINA_HOME=/app/server/tomcat </li>
                        <li> Enviroment=CATALINA_BASE=/app/server/tomcat </li>
                        <li> Enviroment='CATALINA_OPTS=Xms512M -Xmx1024M -server -XX:+UseParallelGC' </li>
                        <li> Enviroment='JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom' </li>
                        <li> ExecStart=/app/server/tomcat/bin/startup.sh </li>
                        <li> ExecStop=/bin/kill -15 $MAINPID </li>
                        <li> User=root </li>
                        <li> Group=root </li>
                        <li> [Install] </li>
                        <li> WantedBy=multi-user.target </li>
                      </span>
                    </li>
                    <li> systemctl restart tomcat </li>
                    <li> netstat -tnlp # 8080포트를 보면 자바를 볼 수 있다. </li>
                    <li> cd /app/server/tomcat/conf </li>
                    <li> vi tomcat-users.xml
                      <span className='sblock'>
                        <li> {' <role rolename="admin-gui"/> '} </li>
                        <li> {' <role rolename="manager-gui"/> '} </li>
                        <li> {' <role rolename="manager-script"/> '} </li>
                        <li> {' <role rolename="manager-status"/> '} </li>
                        <li> {' <role rolename="manager-jmx"/> '} </li>
                        <li> {'<user username="tomcat" password="tomcat" roles="adming-gui,manager-gui,manager-script,manager-status,manager-jmx"/> '}
                          # 다른 사용자가 접근 가능하게 , 56번쨰 줄에 추가 </li>
                      </span>
                    </li>
                    <li> vi /app/server/tomcat/conf/Catalina/localhost/manager.xml
                      <span className='sblock'>
                        <li> {' <Context privileged="true" antiResourceLocking="false" docBase="${catalina.home}/webapps/manager"> '} </li>
                        <li> {' <Valve className="org.apache.catalina.valves.RemoteAddrValve" allow="^.*$" /> '} </li>
                        <li> {' </Context> '} </li>
                      </span>
                    </li>
                    <li> systemctl restart tomcat </li>
                    <li> 브라우저에 192.168.10.80:8080 에서 manager app을 클릭 #에러 발생 </li>
                    <li> yum -y install httpd </li>
                    <li> systemctl restart httpd </li>
                    <li> yum -y install gcc gcc-c++ httpd-devel libtool make # 아파치 확장 파일 httpd-devel </li>
                    <li> 구글에서 톰캣에 들어가 톰캣 커넥터 파일 리눅스.tar.gz 링크복사
                      <li> <a href="http://tomcat.apache.org/download-connectors.cgi" target="_blank"
                        rel="noopener noreferrer"> 아파치 커넥터 사이트 </a> </li>
                      <li> <a href="https://dlcdn.apache.org/tomcat/tomcat-connectors/jk/tomcat-connectors-1.2.48-src.tar.gz"
                        target="_blank" rel="noopener noreferrer"> 아파치 커넥터 JK 1.2.48 </a> </li>
                    </li>
                    <li> mkdir -p /app/temp/mod_jk </li>
                    <li> wget https://dlcdn.apache.org/tomcat/tomcat-connectors/jk/tomcat-connectors-1.2.48-src.tar.gz -O /app/install/tomcat-connectors-1.2.48-src.tar.gz </li>
                    <li> tar xvfz /app/install/tomcat-connectors-1.2.48-src.tar.gz -C /app/temp/mod_jk/
                      --strip-components=1 </li>
                    <li> cd /app/temp/mod_jk/native </li>
                    <li> ./configure --with-apxs=/usr/bin/apxs #configure는 설치파일 </li>
                    <li> make </li>
                    <li> make install </li>
                    <li> chcon -u system_u -r object_r -t httpd_modules_t /etc/httpd/modules/mod_jk.so # se리눅스에서 권한을 주는 방법
                      몰라도 된다.. </li>
                    <li> cd /etc/httpd/conf </li>
                    <li> mkdir /etc/httpd/conf/extra </li>
                    <li> touch /etc/httpd/conf/extra/httpd-ssl.conf </li>
                    <li> cat httpd.conf | grep conf </li>
                    <li> vi /etc/httpd/conf/workers.properties
                      <span className='sblock'>
                        <li> worker.list=worker1 #아파치와-톰캣이 여러개 일 수 있으므로 이름지정 </li>
                        <li> worker.worker1.port=8009 #아파치-톰캣 포트 연동 </li>
                        <li> worker.worker1.host=localhost #아파치 서버의 위치  </li>
                        <li> worker.worker1.type=ajp13 #아파치-톰캣 프로토콜? 연동 </li>
                        <li> worker.worker1.lbfactor=1 #  </li>
                      </span>
                    </li>
                    <li> vi /etc/httpd/conf/uriworkermap.properties
                      <span className='sblock'>
                        <li> /*=worker1 #서브 디렉토리를 모두 worker1이라는 곳에서 참조해라 </li>
                      </span>
                    </li>
                    <li> vi /etc/httpd/conf/httpd.conf
                      <span className='sblock'>
                        <li> "/var/www/html"을 "/app/server/tomcat/webapps" 이걸로 변경 #119번쨰줄 </li>
                      </span>
                    </li>
                    <li> ls -la /app/server/tomcat/webapps #(루트경로처럼 사용) </li>
                    <li> 따라 하지 않아도됨 , sed -i "s/^\s*#.//g" /etc/httpd/conf/httpd.conf # 파일안에 주석을 모두 제거 </li>
                    <li> 따라 하지 않아도됨 , sed -i "/^$/d" /etc/httpd/conf/httpd.conf # 파일안에 공백제거  </li>
                    <li> vim /etc/httpd/conf/httpd.conf
                      <span className='sblock'>
                        <li> {' <Directory /> '} 이부분의 denied 를 granted로 변경 </li>
                        <li> {' <Directory /var/www> <Directory /var/html> '} 이 두부분은 필요가 없음 </li>
                        <li> LoadModule jk_module modules/mod_jk.so #가장 아래쪽에 추가 </li>
                        <li> {'<IfModule jk_module>'}
                          <li> JkWorkersFile conf/workers.properties </li>
                          <li> JkLogFile logs/mod_jk.log </li>
                          <li> JkLogLevel info </li>
                          <li> JkLogStampFormat "[%y %m %d %H:%M:%S]" </li>
                          <li> JkShmFile logs/mod_jk.shm </li>
                          <li> JkMountFile conf/uriworkermap.properties </li>
                          <li> JkUnMount /mail/* worker1 </li>
                          <li> JkUnMount /*.php worker1 </li>
                        </li>
                        <li> {'<IfModule>'} </li>
                      </span>
                    </li>
                    <li> systemctl restart httpd  </li>
                    <li> vi /app/server/tomcat/conf/server.xml
                      <li> 117번 AJP부분을 보면 주석 처리가 되어있음 </li>
                      <li> 위아래에 주석을 해제  </li>
                      <li> address="::1" 을 "0.0.0.0" 으로 수정 </li>
                      <li> secretRequired="false" # 추가 </li>
                    </li>
                    <li> systemctl restart tomcat  </li>
                    <li> netstat -tnlp에서 8009번포트가 열렸는지 확인 </li>
                    <li>   </li>
                    <li>   </li>
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
                <summary className="stitle"> ▶ PXE 서버 <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설명 </span>
                  <span className="mblock">
                    <li> 여러대의 컴퓨터의 프로그램을 동시에 설치하는 방법 </li>
                    <li> DHCP, TFTP , syslinux 부팅파일, FTP나 웹서버  </li>
                    <li>  </li>
                  </span>
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> ps -ef | grep yum | grep -v grep | awk '{'{print $2}'}' | xargs kill -9 2{'>'}/dev/null  </li>
                    <li> yum -y install syslinux tftp-server vsftpd dhcp xinetd  </li>
                    <li> vi /etc/dhcp/dhcpd.conf </li>
                    <li>   </li>
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
                <summary className="stitle"> ▶ <small> </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle">  </span>
                  <span className="mblock">
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
          </span>
        </ul >
      </div >
    </>
  );
}

export default LinuxServer;