import React from 'react';

const LinuxCentOS7 = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> Apache Tomcat 설치하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 아파치는 웹서버 </li>
            <li> 톰캣(아파치톰캣)은 아파치 재단 하위에 있는 웹서버+어플리케이션서버 </li>
            <li>  </li>

            <h2 className='h2'> 📌 아파치 톰캣 v8.5.70 설치 과정 </h2>
            <div className="block4">
              <li> <a href="https://tomcat.apache.org/download-80.cgi" target="_blank" rel="noopener noreferrer"> 아파치 톰캣 다운 주소 </a> </li>
              <li> 1. Core tar.gz 파일을 우측클릭하여 링크 주소를 복사 <small> #  </small> </li>
              <li> 2. mkdir -p /app/install <small> # tar.gz파일을 저장할 폴더 만들기 </small> </li>
              <li> 3. cd /app/install </li>
              <li> 4. mkdir -p /app/server/tomcat <small> #  </small> </li>
              <li> 5. yum install -y wget <small> # 웹서버에서 콘텐츠를 가져오는 프로그램(없다면은 설치) </small> </li>
              <li> 6. wget https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.73/bin/apache-tomcat-8.5.73.tar.gz -O /app/install/tomcat8.5.tar.gz <small> # 버전이 조금씩 변경되어서 복붙하지말고 홈페이지가서 주소복사 할것 !!! </small>  </li>
              <li> 7. tar xvfz /app/install/tomcat8.5.tar.gz -C /app/server/tomcat --strip-components=1 <small> # --strip-components=1 상위 n번쨰 이후 폴더부터 압축해제 </small> </li>
              <li> 8. cd /app/server/tomcat/bin </li>
              <li> 9. ./startup.sh <small> # JAVA_HOME 관련 에러가 발생하면 jdk 설치와 JAVA_HOME 경로가 설정이 되지 않아서 그럴 것이다. </small>
                <div className="block4">
                  <li> 1. mkdir -p /app/install/dkit/jdk </li>
                  <li> 2. cd /app/install/dkit/jdk </li>
                  <li> <a href="https://www.oracle.com/kr/java/technologies/javase/javase8-archive-downloads.html" target="_blank" rel="noopener noreferrer"> 3. 자바 다운로드 주소(다운 받으려면 로그인 필요) </a> </li>
                  <li> 4. /app/install/dkit/jdk/ 에 다운파일(jdk-8u202-linux-x64.tar.gz) 설치해주기 <small> # 하다가 하는 방법을 몰라서 mobaxterm을 이용해서 넣어주었다. </small>
                    <div className="block4">
                      <li> 1. 좌측 상단 Session 클릭 </li>
                      <li> 2. SFTP 클릭 </li>
                      <li> 3. Remote host에 (클라우드)공인IP주소 입력, Username에 유저명 입력 <small> # 유저명은 확실하지는 않지만 관리하는 사람의 이름을 입력하는 것 같다. </small>  </li>
                      <li> 4. 원하는 리눅스 폴더에 윈도우에 있는 파일 옮기기 </li>
                      <li> MobaXterm으로 SFTP로 옮기는 데 Permission Denied 에러가 발생할 때 </li>
                      <li> 5. chown -R [계정]:[계정] [파일을 옮기려는 폴더 경로] <small> # 하위 디렉토리 전부에 소유자를 변경, // TODO: 보안문제에 대해서는 좀더 알아보야할 방법 </small> </li>
                    </div>
                  </li>
                  <li> 5. mkdir -p /app/dkit/jdk/1.8.0 </li>
                  <li> 6. tar xvfz /app/install/dkit/jdk/jdk-8u202-linux-x64.tar.gz -C /app/dkit/jdk/1.8.0 --strip-components=1  </li>
                  <li> 7. ln -Tfs /app/dkit/jdk/1.8.0 /app/dkit/jdk/release <small> # t: 링크파일 생성할 디렉토리 지정, f: 대상 파일이 존재하면 지우고 생성, s: 심볼릭 링크 생성 </small> </li>
                  <li> 8. ln -Tfs /app/dkit/jdk/release/bin/java /usr/bin/java </li>
                  <li> 9. vi /etc/systemd/system/tomcat.service
                    <div className="block4">
                      <li> [Unit] </li>
                      <li> Description=Apache Tomcat Web Application Container </li>
                      <li> After=syslog.target network.target </li>
                      <li> [Service] </li>
                      <li> Type=forking </li>
                      <li> Enviroment=JAVA_HOME=/app/dkit/jdk/release <small> 자바 홈 환경변수 설정 </small> </li>
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
                    </div>
                  </li>
                  <li> 10. java -version   </li>
                  <li> 11. systemctl restart tomcat </li>
                  <li> 12. netstat -tnlp <small> # 8080포트를 보면 자바를 볼 수 있다. </small> </li>
                </div>
              </li>
              <li> 10. vi /app/server/tomcat/conf/tomcat-users.xml
                <div className="block4">
                  <li> {' <role rolename="admin-gui"/> '} </li>
                  <li> {' <role rolename="manager-gui"/> '} </li>
                  <li> {' <role rolename="manager-script"/> '} </li>
                  <li> {' <role rolename="manager-status"/> '} </li>
                  <li> {' <role rolename="manager-jmx"/> '} </li>
                  <li> {'<user username="tomcat" password="tomcat" roles="adming-gui,manager-gui,manager-script,manager-status,manager-jmx"/> '}
                    <small> # 다른 사용자가 접근 가능하게 , 56번쨰 줄에 추가 </small> </li>
                </div>
              </li>
              <li> 11. vi /app/server/tomcat/conf/Catalina/localhost/manager.xml
                <div className="block4">
                  <li> {' <Context privileged="true" antiResourceLocking="false" docBase="${catalina.home}/webapps/manager"> '}
                    <li> {' <Valve className="org.apache.catalina.valves.RemoteAddrValve" allow="^.*$" /> '} </li>
                  </li>
                  <li> {' </Context> '} </li>
                </div>
              </li>
              <li> 12. systemctl restart tomcat </li>
              <li>  </li>
            </div>

            <li> 10. systemctl stop firewalld | setenforce  </li>
          </div>
        </details>
      </div>

      {/*  */}
      <span className="mblock">
        <details>
          <summary className="stitle">  Tomcat 서버  </summary>
          <span className="sblock">
            <span className="sstitle"> 설치 </span>
            <span className="mblock">
              <li> vim startup.bat </li>
              <li> which java </li>
              <li> 이거는 별개인데 md5sum 파일명 # 해쉬값이 나오는데 동일하면 같은 파일 </li>

              <li> 브라우저에 192.168.10.80:8080 에서 manager app을 클릭 #에러 발생 </li>
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
                <div className="sblock">
                  <li> worker.list=worker1 #아파치와-톰캣이 여러개 일 수 있으므로 이름지정 </li>
                  <li> worker.worker1.port=8009 #아파치-톰캣 포트 연동 </li>
                  <li> worker.worker1.host=localhost #아파치 서버의 위치  </li>
                  <li> worker.worker1.type=ajp13 #아파치-톰캣 프로토콜? 연동 </li>
                  <li> worker.worker1.lbfactor=1 #  </li>
                </div>
              </li>
              <li> vi /etc/httpd/conf/uriworkermap.properties
                <div className="sblock">
                  <li> /*=worker1 #서브 디렉토리를 모두 worker1이라는 곳에서 참조해라 </li>
                      </div>
                    </li>
                    <li> vi /etc/httpd/conf/httpd.conf
                      <div className="sblock">
                        <li> "/var/www/html"을 "/app/server/tomcat/webapps" 이걸로 변경 #119번쨰줄 </li>
                      </div>
                    </li>
                    <li> ls -la /app/server/tomcat/webapps #(루트경로처럼 사용) </li>
                    <li> 따라 하지 않아도됨 , sed -i "s/^\s*#.//g" /etc/httpd/conf/httpd.conf # 파일안에 주석을 모두 제거 </li>
                    <li> 따라 하지 않아도됨 , sed -i "/^$/d" /etc/httpd/conf/httpd.conf # 파일안에 공백제거  </li>
                    <li> vim /etc/httpd/conf/httpd.conf
                      <div className="sblock">
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
                      </div>
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

      <div className='block1'>
        <details>
          <summary> VMware에 CentOS7 설치하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> <a href="https://www.centos.org/download/" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
              <li> CentOS Linux 7 ISO x86_64 클릭 </li>
              <li> <a href="http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/" target="_blank" rel="noreferrer"> http://ftp.kaist.ac.kr/CentOS/7.9.2009/isos/x86_64/ 파일 다운로드 </a>  </li>
              <li> CentOS-7-x86_64-DVD-2009.iso 다운로드 </li>
              <li> VMware Workstation 실행 </li>
              <li> Create a New Virtual Machine </li> <br />

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
              <li> close하고 finish </li> <br />

              <li> Test this media &amp; install CentOS 7 클릭  </li>
              <li> 스크롤로 내려서 한국어 누르고 계속 진행 </li>
              <li> 키보드 - '+'키 클릭 -  english검색하고 영어(미국) 추가</li>
              <li> 소프트웨어 설치 - 개발 및 창조를 위한 워크스테이션 - 완료 <small> GUI 등을 추가하기 위해서 선택 </small> </li>
              <li> 설치대상 - 상단에 VMware 아이콘 체크박스를 클릭하고 다시한번더 클릭해서 인식되게 만듬 </li>
              <li> KDUMP 활성화는 비활성화 #메모리를 좀더 절약하기 위해서 </li>
              <li> 네트워크 및 호스트명 끔 → 켬  - 완료 </li>
              <li> 설치 시작 </li>
              <li> root 암호 : P@ssw0rd! </li>
              <li> 사용자 생성 : 영어로된아이디나이름 </li>
              <li> 라이센스 동의 - 완료     </li>
              <li> 한국 - 한국어(Hangul) - 다음  - 위치정보 끔 - 다음 - 건너뛰기 - 시작 </li>
              <li> 라이센스 동의 해주기 </li> <br />

              <li> 프로그램 - 시스템 도구 - 설정 - 알림 - 알림팝업,잠근화면알림 끄기 </li>
              <li> 프로그램 - 시스템 도구 - 설정 - 전원 - 빈화면 안함으로 바꿈 </li>
              <li> 프로그램 - 시스템 도구 - 개인 정보 - 화면 잠금 끄기 </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> CentOS7에 아파치 서버 설치하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <li> yum install httpd <small> # http demon, http를 처리해주는 서비스 </small> </li>

            <h2 className='h2'> 📌 시작,중단,실행확인 </h2>
            <li> systemctl enable httpd <small> # httpd 실행 허용 </small> </li>
            <li> systemctl start httpd <small> # httpd 실행 시작 </small> </li>
            <li> systemctl restart httpd <small> # httpd 실행 재시작 </small> </li>
            <li> systemctl stop httpd <small> # httpd 실행 중단 </small> </li>
            <li> systemctl status httpd <small> # httpd 실행 상태 확인 </small> </li>
            <li> httpd -v <small> # httpd 버전 확인 </small> </li>
            <li> service httpd start <small> # 아파치 실행 </small> </li>
            <li> ps -ef | grep httpd <small> # httpd가 정상 실행 되는지 확인 </small> </li>

            <h2 className='h2'> 📌 방화벽 </h2>
            <li> systemctl enable firewalld <small> # 방화벽 실행 허용 </small> </li>
            <li> firewall-cmd --reload <small> # 방화벽 재시작 </small> </li>
            <li> firewall-cmd --permanent --add-service=http </li>
            <li> firewall-cmd --permanent --add-service=https </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> CentOS7 관련 명령어 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> su - : 루트 계정으로 접속하는 방법 </li>
            <li> su 계정명 : 원하는 계정으로 접속하는 방법 </li>
            <li> netstat -tnlp , 텔넷은 23번포트트 사용한다. </li>
            <li> cd /etc/xinetd.d/ 그리고 vi telnet </li> <br />
            <li> {'service telnet {'}
              <li> {' disable = no '} <small> #서비스를 사용하지 않을것인지 no면 사용한다는 의미 </small> </li>
              <li> {' flags = REUSE '}   <small> #재사용한다는 의미 </small></li>
              <li> {' socket_type = stream '}   <small> #소켓형태 스트림 </small></li>
              <li> {' wait = no '}   <small> #바로 서버를 사용? </small></li>
              <li> {' user = root '}   <small> #접속할수 있는 유저 </small></li>
              <li> {' server = /usr/sbin/in.telnetd '}   <small> #텔넷서버에 대한 명령어 </small> </li>
              <li> {' log_on_failure += USERID '}   <small> #접속실패했을때 유저의 아이디를 로그로 남겨라 </small></li>
            </li>
            <li> {'} '} </li> <br />
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
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> telnet 서버 설치하는 방법 </summary>ㅈㅈㅈㅈㅈㅈㅈㅈㅈㅈㅈㅈ
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 텔넷서버: 원격 접속을 지원하는 프로그램, 보안에 취약해서 대분분 SSH를 사용 </li>
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
            <li>  </li> <br />
            <li> 0. adduser 사용자명, passwd 사용자명 </li>
            <li> 1. yum -y install telnet </li>
            <li> 2. 제어판 - Window 기능 켜기/끄기 - 텔넷 클라이언트 체크박스 체크 </li>
            <li> 3. ping telnet서버IP주소  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> dhcp 서버 설치하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 dhcp 서버란? </h2>
            <li> Dynamic Host Configuration Protocol </li>
            <li> 자신의 네트워크 안에 클라이언트 컴퓨터가 부팅될 때 자동으로 IP주소, 서브넷마스크, 게이트웨이 주소, DNS 서버 주소를
              할당해주는 것 </li>
            <li> 일반 사용자는 IP에 관련된 어려운 정보를 알지 못해도 사용을 하는데 문제가 없음 </li>
            <li> dhcp 서버는 관리가 편하고 이용자도 편함 </li>
            <li> 한정된 IP주소를 가지고 더많은 IP주소가 있는 것처럼 사용하여 여러명의 사용자가 사용할 수 있게 함 </li>
            <li>  </li>

            <h2 className='h2'> 📌 dhcp 서버 작동원리 </h2>
            <li> 1. dhcp클라이언트 컴퓨터 부팅 </li>
            <li> 2. 자동으로 IP 주소를 dhcp서버로 요청 </li>
            <li> 3. dhcp서버에 있는 할당 되지 않은 IP를 선택하고 할당됨으로 변경 </li>
            <li> 4. IP주소를 dhcp클라이언트에게 할당 </li>
            <li> 5. dhcp클라이언트는 dhcp서버에게 받은 IP로 인터넷을 이용  </li>
            <li> 6. dhcp클라이언트가 접속을 종료하게 되면 dhcp서버에 IP주소를 반납 </li>
            <li> 7. dhcp서버에 있는 IP주소 목록에서 반납된 IP주소를 다시 할당해제를 시켜준다. </li>

            <h2 className='h2'> 📌 dhcp 서버 설치 </h2>
            <li> yum install dhcp  </li>
            <li> r pm -qa | grep dhcp , # dhcp서버 설치되었는지 확인  </li>
            <li> systemctl restart dhcpd </li>
            <li> lsof -i updL67 </li>
            <li> dnsmasq라는 간소화된 dhcp/dns서버가 설치 되어있다. 그러므로 제거가 필요 </li>
            <li> ps -ef | grep dnsmasq | grep -v grep | xargs kill -9 </li>
            <li> systemctl disable libvirtd </li>

            <h2 className='h2'> 📌 dhcp 서버 설정 </h2>
            <li> subnet 192.168.10.0 netmask 255.255.255.0 <small> netmask는 앞에 9자리가 네트워크 대역이라는 것을 알려줌 </small> </li>
            <li> {'{'}
              <li> host client1  </li>
              <li> {'{'}
                <li> option host-name "client1";  </li>
                <li> hardware ethernet 하드웨어주소; , # ifconfig에서 ether 주소를 참조 </li>
                <li> fixed-address 102.168.10.251;  </li>
              </li>
              <li> {'}'}  </li>
              <li> option routers 192.168.10.2; <small> # dhcp서버가 보는 나의 게이트웨이 주소 </small> </li>
              <li> option subnet-mask 255.255.255.0; <small> # 네트워크 대역을 255로 알려줘 </small> </li>
              <li> range dynamic-bootp 192.168.10.30 192.168.10.50;  <small> #30~50번 IP를 나누어 준다. </small>  </li>
              <li> option domain-name-servers 8.8.8.8;  <small> # 도메인 주소를 설정 </small> </li>
              <li> default-lease-time 86400; <small> # 클라이언트에게 준 IP의 시간을 초단위로 설정 </small>  </li>
              <li> max-lease-time 172800; <small> # 클라이언트에게 준 동일한 IP의 최대 시간을 초단위로 설정, 오랜기간 사용하면 악용의 소지때문에 제한 </small>  </li>
            </li>
            <li> {'}'}  </li>
          </div>
        </details>
      </div>

     
    </div>
  );
}

export default LinuxCentOS7;