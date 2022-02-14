import React from 'react';

const LinuxServer = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> 서버 실행전에 확인할 것들 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1. 방화벽 </li>
            <li> 2. selinux 같은것(centos에서 사용되는거) </li>
            <li> 3. 서비스가 enable인지 </li>
            <li> 4. 서비스가 실행되고 있는지 </li>
            <li> 5. 클라우드에서 포트가 열려있는지 </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> nginx 서버 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 nginx 설명 </h2>
            <li> HTTP 프록시와 웹 서버 기능 </li>
            <li> 정적 파일과 인덱스 파일 표현, 자동 인덱싱 기능. </li>
            <li> 캐싱을 통한 리버스 프록시 </li>
            <li> 로드 밸런싱 </li>
            <li> 고장 진단 </li>
            <li> SSL 지원 </li>
            <li> 캐싱을 통한 FastCGI 지원 </li>
            <li> Name-, IP-기반 가상서버 </li>
            <li> FLV 스트리밍 </li>
            <li> MP4 스트리밍 모듈을 이용한 MP4 스트리밍 </li>
            <li> 웹페이지 접근 인증 </li>
            <li> gzip 압축 </li>
            <li> 10000개의 동시 접속을 처리할 수 있는 능력 </li>
            <li> URL 다시쓰기 (URL rewriting) </li>
            <li> 맞춤 로깅 </li>
            <li> 서버 사이드 기능 포함 </li>
            <li> WebDAV </li>
            <li> SMTP, POP3, IMAP 프록시 </li>
            <li> STARTTLS 지원 </li>
            <li> SSL 지원 </li>

            <h2 className='h2'> 📌 centos7 </h2>
            <li> 서버 설치 <span className='command'> dnf install nginx  </span> </li>
            <li> 프로세스 확인  <span className='command'> ps -ef | grep nginx </span>  </li>
            <li> 서버 가동  <span className='command'> (sudo) nginx </span> </li>
            <li> 서버 시작  <span className='command'> systemctl start nginx  </span> </li>
            <li> 서비스 상태 확인 <span className='command'> sudo systemctl status nginx </span> </li>
            <li> 서비스 중지 <span className='command'>  systemctl stop nginx </span> </li>
            <li> 서비스 재시작 <span className='command'>  systemctl restart nginx </span> </li>
            <li> 설정 반영 <span className='command'>  systemctl reload nginx </span> </li>
            <li> 서비스 재로드1  <span className='command'> sudo systemctl reload nginx </span> </li>
            <li> 서비스 재로드2  <span className='command'> sudo service nginx reload  </span> </li>
            <li> 버전 확인 <span className='command'> sudo nginx -v </span> </li>
            <li> 버전 + 구성 옵션 확인 <span className='command'> sudo nginx -V </span> </li>
            <li> 구성 테스트(구성 파일 변경하거나 서비스 재로드하기전에 테스트) <span className='command'> sudo nginx -t</span> </li>
            <li>  <span className='command'>   </span> </li>
            <li>  <span className='command'>   </span> </li>
            <li>  <span className='command'>   </span> </li>
            <li>  <span className='command'>   </span> </li>



            <h2 className='h2'> 📌 conf 같은 설정 </h2>
            <li> <a href="https://architectophile.tistory.com/12" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
            <li>  </li>
            <li> /etc/nginx/conf.d/커스텀파일.d
              <div className="block4">
                <li> server {"{"}
                  <li> listen 포트; </li>
                  <li> listen [::]:포트; </li>
                  <li> server_name www.example.com; <small> 이주소를 입력하면 www.example.com:포트에 대해서 모두 받아들임 </small> </li>
                  <li> location / {"{"}
                    <li> return 301 http://example.com;$request_uri; <small> 보내버림 </small> </li>
                    <li> return 301 https://$host$request_uri; <small> 보내버림 </small> </li>
                    <li> proxy_pass http://example:포트/경로; <small> 이동시켜줌 </small> </li>
                  </li>
                  <li> {"}"} </li>
                </li>
                <li> {"}"} </li>
              </div>
            </li>



          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> dhcp 서버란? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Dynamic Host Configuration Protocol </li>
            <li> 호스트의 IP주소와 각종 TCP/IP 프로토콜의 기본 설정을 자동적으로 클라이언트에게 제공해주는 프로토콜 </li>
            <li> 자신의 네트워크 안에 클라이언트 컴퓨터가 부팅될 때 자동으로 IP주소, 서브넷마스크, 게이트웨이 주소, DNS 서버 주소를 할당해주는 것 </li>
            <li> 일반 사용자는 IP에 관련된 어려운 정보를 알지 못해도 사용을 하는데 문제가 없음 </li>
            <li> dhcp 서버는 관리가 편하고 이용자도 편함 </li>
            <li> 한정된 IP주소를 가지고 더많은 IP주소가 있는 것처럼 사용하여 여러명의 사용자가 사용할 수 있게 함 </li>
            <li> 단점 : 서버가 중단되면 IP할당이 제대로 되지 않는다.  </li>

            <h2 className='h2'> 📌 dhcp 서버 작동원리 </h2>
            <li> 1. dhcp클라이언트 컴퓨터 부팅 </li>
            <li> 2. 자동으로 IP 주소를 dhcp서버로 요청 </li>
            <li> 3. dhcp서버에 있는 할당 되지 않은 IP를 선택하고 할당됨으로 변경 </li>
            <li> 4. IP주소를 dhcp클라이언트에게 할당 </li>
            <li> 5. dhcp클라이언트는 dhcp서버에게 받은 IP로 인터넷을 이용  </li>
            <li> 6. dhcp클라이언트가 접속을 종료하게 되면 dhcp서버에 IP주소를 반납 </li>
            <li> 7. dhcp서버에 있는 IP주소 목록에서 반납된 IP주소를 다시 할당해제를 시켜준다. </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> git 서버 구축 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git --version <small> 깃 버전 확인 </small> </li>
            <li> yum install http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-1.noarch.rpm </li>
            <li> yum remove git </li>
            <li> yum install git </li>
            <li> git --version <small> 깃 버전 확인 </small> </li>
            <li> mkdir -p /opt/git/project.git </li>
            <li> git init --bare /opt/git/project.git/ </li>
            <li> useradd git </li>
            <li> echo 'git:비밀번호입력' | chpasswd </li>
            <li> chown -R git:git /opt/git/ </li>
            <li> cd /home/git/ </li>
            <li> ll ~/.ssh/id_rsa* <small> ssh키 있는지 확인 </small> </li>
            <li> ssh-keygen , 엔터 누르다보면 키가 나온다. </li>
            <li> sshpass -p "위에서입력한비밀번호" ssh-copy-id git@ssssksss </li>
            <li> yum --enablerepo=epel -y install sshpass <small> sshpass 설치 </small> </li>
            <li> 서버에서 git 사용자가 서버 쉘에 접근하는것을 막는방법(일단은 적용하지 않음)
              <div className="block4">
                <li> which git-shell </li>
                <li> chsh git -s /usr/bin/git-shell </li>
                <li> cat /etc/passwd | grep git </li>
                <li> (클라이언트키 추가 등록하는 방법) chsh git -s /bin/bash <small> 입력하고 나서 위에 3개를 다시 반복해야한다. </small> </li>
              </div>
            </li>
            <li> git clone 깃주소 <small> 불러올 폴더에다가 하기 </small> </li>
            <li>  </li> <br />
            <li> PROJECT=프로젝트명 </li>
            <li> mkdir -p /opt/git/$PROJECT.git </li>
            <li> git init --bare /opt/git/$PROJECT.git </li>
            <li> rm -rf /opt/git/프로젝트명.git </li>
            <li>  </li>

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
      {/* 끝 */}

      <span className="lblock">
        {/*  */}
        <span className="mblock">
          <details>
            <summary className="stitle">  httpd 서버 <small> </small>
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
                  <div className="sblock">
                    <li> <span className='sstitle'> client denied by server configuration </span> </li>
                    <li> 폴더 경로가 잘 잡혔는지 확인 </li>
                    <li>  </li>
                  </div>
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
            <summary className="stitle">  ftp 서버 <small> </small>
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
            <summary className="stitle">  dns 서버 <small> 도메인을 IP주소로 바꿔주는 서버 </small>
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
                  <li> systemctl stop firewalld | setenforce 0 </li>
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
            <summary className="stitle">  ssh 서버 <small> </small>
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
            <summary className="stitle">  raid 서버 <small> </small>
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
            <summary className="stitle">  mail 서버 <small> </small>
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
                    <li> systemctl stop firewalld | setenforce 0 </li>
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
                          <li> 서버의 방화벽 제거 , 서버로 이동 , systemctl stop firewalld | setenforce 0 </li>
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
                          <li> 클라이언트의 방화벽 제거 , systemctl stop firewalld | setenforce 0 </li>
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
            <summary className="stitle">  Repositoy 서버(미완성) <small> </small>
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
                <li> systemctl stop firewalld | setenforce 0 </li>
                <li> systemctl start httpd </li>
                <li> cd /app/repo </li>
                <li> yum install --downloadonly --downloaddir=/app/repo vsftpd # 다운만받고 설치까지는 하지 않음 </li>
                <li> yum install --downloadonly --downloaddir=/app/repo net-snmp # 다운만받고 설치까지는 하지 않음 </li>
                {/*<li> cp /root/rpmbuild/RPMS/x86_64/hello-1.0.0-1.el7.x86_64.rpm /app/repo #개인적으로 만든 rpm파일 </li>*/}
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
                    <div className="sblock">
                      <li> [repo-server] </li>
                      <li> name=Repository Server </li>
                      <li> {' baseurl=file://192.168.10.80/repo '} </li>
                      <li> enabled=1 </li>
                      <li> gpgcheck=1 </li>
                    </div>
                  </li>
                  <li> yum clean all </li>
                  <li> 만약 yum lock이 있다면 , 반복 시도
                    <div className="sblock">
                      <li> ps -ef | grep yum | grep -v grep | awk '{'{'}print $2{'}'}' | xargs kill -9 2{'>'}/dev/null </li>
                    </div>
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
            <summary className="stitle">  PXE 서버 <small> </small>
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
                {/* 여기까지 진행 */}
                <li> vi /etc/dhcp/dhcpd.conf
                  <li> subnet 192.168.10.0 netmask 255.255.255.0 {'{'}
                    <li> option routers 192.168.10.2;  </li>
                    <li> option subnet-mask 255.255.255.0;  </li>
                    <li> range dynamic-bootp 192.168.10.30 192.168.10.50;  </li>
                    <li> option domain-name-servers 8.8.8.8;  </li>
                    <li> allow booting;  </li>
                    <li> allow bootp;  </li>
                    <li> next-server 192.168.10.80;  </li>
                    <li> filename "pxelinux.0";  </li>
                  </li>
                  <li> {'}'}  </li>
                </li>
                <li> systemctl restart dhcpd </li>
                <li> vim /etc/xinetd.d/tftp
                  <li> disable = yes 를 disable = no로 변경 </li>
                </li>
                <li> df # 현재 마운트 목록을 보여줌  </li>
                <li> USB 등이 꽂혀있는 공간을 삭제하고 다시 만들기 </li>
                <li> umount /dev/cdrom # 연결 usb가 꽂혀 있는 공간을 비움 </li>
                <li> mkdir /mnt/cdrom </li>
                <li> mount /dev/cdrom /mnt/cdrom # /dev/cdrom 에 있는 것을 /mnt/cdrom 마운트 한다.
                  <li> mount: no medium found on /dev/sr0 이렇게 나온다면 꽂혀있는 CD가 없다는 이야기</li>
                  <li> 좌측에 실행중인 CentOS 우측클릭 - Settings - CD/DVD - Connected 체크 </li>
                </li>
                <li> df </li>
                <li> umount /dev/cdrom  </li>
                <li> mount /dev/cdrom /mnt/cdrom  </li>
                <li> ls -la /mnt/cdrom </li>
                <li> cp -r /mnt/cdrom/* /var/ftp/pub # 시간 오래걸림 </li>
                <li> ls -la /var/ftp/pub </li>
                <li> umount /dev/cdrom </li>
                <li> chmod 777 /var/ftp/pub </li>
                <li> ls -la /var/lib/tftpboot </li>
                <li> cp /var/ftp/pub/images/pxeboot/vmlinuz /var/lib/tftpboot/ </li>
                <li> cp /var/ftp/pub/images/pxeboot/initrd.img /var/lib/tftpboot/ </li>
                <li> cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/ </li>
                <li> mkdir /var/lib/tftpboot/pxelinux.cfg </li>
                <li> cd /var/lib/tftpboot/pxelinux.cfg/ </li>
                <li> vim default
                  <div className="sblock">
                    <li> DEFAULT CentOS7_Auto_Install # pxe서버에서 기본적으로 설치할 파일</li>
                    <li> LABEL CentOS7_Auto_Install # 설치할 파일에 대한 내용
                      <li> kernel vmlinuz </li>
                      <li> APPEND initrd=initrd.img repo=ftp://192.168.10.80/pub </li>
                    </li>
                  </div>
                </li>
                <li> ps -ef | grep dnsmasq # 기본적으로 설치하지 않아도 실행되는 dhcp서버 </li>
                <li> kill -9 1955 # 사람마다 다름 </li>
                <li> systemctl restart dhcpd  </li>
                <li> systemctl restart vsftpd </li>
                <li> systemctl restart xinetd </li>
                <li> systemctl enable dhcpd   </li>
                <li> systemctl enable vsftpd  </li>
                <li> systemctl enable xinetd  </li>
                <li> systemctl stop firewalld | setenforce 0 </li>
                <li> systemctl disable firewalld  </li>
                <li> Virtual Network Editor에서 Use local DHCP service to distribute IP address to VMs 체크해제
                  # 사용하고 있는 dhcp 끄기 </li>
                <li> 새롭게 PXE_Client CentOS를 생성 , 단 CD ROOM은 넣지 않고 설치하면 설치가 가능 </li>
                <li> 전부 설치하지 말고 언어 설정 나오면 잠시 중지 </li>
                <li> 이제 언어 등 설정까지 다 해주는 킥스타트  </li>
                <li> yum -y install system-config-kickstart system-config-keyborard </li>
                <li> system-config-kickstart
                  <div className="sblock">
                    <li> 기본설정 - 언어 - 한국어 </li>
                    <li> 기본설정 - 시간대 - Asia/Seoul </li>
                    <li> 기본설정 - 암호 - P@ssw0rd! </li>
                    <li> 기본설정 - 고급설정 - "설치후 시스템 재부팅" 체크 </li>
                    <li> 설치 방법 - FTP - FTP 서버 192.168.10.80 </li>
                    <li> 설치 방법 - FTP - FTP 디렉토리 : pub </li>
                    <li> 부트로더 옵션 - 설치유형 - 새로운 부트로더 설치 </li>
                    <li> 파티션 정보 - 마스터 부트 레코드 - 마스터 부트 레코드 내용 삭제 , 디스크레이블 - 디스크레이블 초기화 </li>
                    <li> 파티션 정보 - 디스크레이블 - 디스크레이블 초기화 </li>
                    <li> 파티션 정보 - 레이아웃 추가 - 파일시스템 유형 swap , 크기옵션 수정된용량 2048  </li>
                    <li> 파티션 정보 - 레이아웃 추가 - 마운트할 지점 / , 크기옵션 사용안된 디스크 공간 모두 채움  </li>
                    <li> 좌측 상단 - 파일 - 저장 - 파일시스템 - var - ftp - centos.ks 라는 파일로 저장 </li>
                    <li> 좌측 상단 - 파일 - 끝내기 </li>
                  </div>
                </li>
                <li> cd /var/ftp </li>
                <li> ls -la . </li>
                <li> vi centos.ks
                  <div className="sblock">
                    <li> 제일 아래에 아래내용 추가 </li>
                    <li> %packages </li>
                    <li> @base </li>
                    <li> @core </li>
                    <li> @directory-client </li>
                    <li> @fonts </li>
                    <li> @gnome-desktop </li>
                    <li> @input-methods </li>
                    <li> @internet-browser </li>
                    <li> @java-platform </li>
                    <li> @multimedia </li>
                    <li> @network-file-system-client </li>
                    <li> @x11 </li>
                    <li> %end </li>
                  </div>
                </li>
                <li> vim /var/lib/tftpboot/pxelinux.cfg/default
                  <li> 192.168.10.80/pub 뒤쪽에 ks=ftp://192.168.10.80/centos.ks 추가 </li>
                </li>
                <li> systemctl restart dhcpd  </li>
                <li> systemctl restart vsftpd </li>
                <li> systemctl restart xinetd </li>
                <li> 그리고 다시 미설치된 PXE_Client CentOS 재실행 </li>
                <li> root , P@ssw0rd! 입력 </li>
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
            <summary className="stitle">  svn 서버
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <span className="sblock">
              <span className="sstitle"> 설명 </span>
              <span className="mblock">
                <li> git 이전의 사용하던 형상관리 서버 </li>
                <li>  </li>
              </span>
              <span className="sstitle"> 설치 </span>
              <span className="mblock">
                <li> yum install -y subversion </li>
                <li> mkdir -p /app/repo/svn </li>
                <li> vim /etc/sysconfig/svnserve
                  <div className="sblock">
                    <li> OPTIONS="-r /var/svn" 을 "--threads --root /app/repo/svn" 으로 변경 </li>
                  </div>
                </li>
                <li> firewall-cmd --permanent --zone=public --add-port=3690/tcp </li>
                <li> firewall-cmd --reload </li>
                <li> cd /app/repo/svn </li>
                <li> mkdir proj1 </li>
                <li> cd proj1 </li>
                <li> svnadmin create --fs-type fsfs /app/repo/svn/proj1 </li>
                <li> ls -la </li>
                <li> cd conf </li>
                <li> vi svnserve.conf
                  <div className="sblock">
                    <li> 19번째 줄 주석해제하고 anon-access = read 를 anon-access = none 로 변경 </li>
                    <li> 20번째 줄 주석해제 anon-access = write </li>
                    <li> 27번째 줄 주석해제 password-db = passwd </li>
                    <li> 34번째 줄 주석해제 authz-db = authz </li>
                    <li> 39번째 줄 주석해제 realm = My First Repository 를 project1 으로 변경 </li>
                  </div>
                </li>
                <li> vi passwd
                  <div className="sblock">
                    <li> test = P@ssw0rd! # 내용 추가 </li>
                  </div>
                </li>
                <li> vi authz
                  <div className="sblock">
                    <li> {'[/]'} </li>
                    <li> test = rw </li>
                  </div>
                </li>
                <li> systemctl restart svnserve </li>
                <li> systemctl stop firewalld | setenforce 0 </li>
                <li> chkconfig svnserve on </li>
                <li> 윈도우에서 구글에 tortoisesvn 검색 </li>
                <li> <a href="https://osdn.net/projects/tortoisesvn/storage/1.14.1/Application/TortoiseSVN-1.14.1.29085-x64-svn-1.14.1.msi/"
                  target="_blank" rel="noopener noreferrer"> tortoisesvn 64비트 1.14.1 다운로드 사이트 </a> </li>
                <li> <a href={process.env.PUBLIC_URL + '/Download/TortoiseSVN-1.14.1.29085-x64-svn-1.14.1.msi'}
                  download="TortoiseSVN-1.14.1.29085-x64-svn-1.14.1.msi" > TortoiseSVN-1.14.1.29085-x64-svn-1.14.1.msi </a> </li>
                <li> msi 설치 </li>
                <li> svn1 snv2 새폴더 2개 만들기 </li>
                <li> svn1 폴더 우측클릭해서 SVN Checkout 클릭 </li>
                <li> URL에 svn://192.168.10.80/proj1 </li>
                <li> test , P@ss0wrd! 입력하기 </li>
                <li> 윈도우 검색에 TortoiseSVN Repository Browser 실행 </li>
                <li> 윈도우에서 svn1 폴더로 가서 README.txt 파일 만들고 svn1 폴더 우측클릭하고 SVN Commit 클릭 </li>
                <li> svn2 폴더 우측클릭해서 SVN Checkout 클릭 </li>
                <li> svn2 폴더 우측클릭해서 update 하면 svn1폴더에서 작성했던 README.txt 파일이 생성되는 것을 볼 수 있다. </li>
              </span>
            </span>
          </details>
        </span>
        {/*  */}
        <span className="mblock">
          <details>
            <summary className='stitle'>  Kerberos 서버
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <span className="sblock">
              <span className="sstitle"> 설명 </span>
              <span className="mblock">
                <li> 커버로스에서 나온 유래 , 문지기 </li>
                <li> 인증을 처리해주는 서버 </li>
                <li> kDC서버에서 인증, 승인을 처리하고 신분 증명서를 발급 해주는 서버 </li>
                <li> <a href="https://web.mit.edu/kerberos/krb5-devel/doc/index.html"
                  target="_blank" rel="noopener noreferrer"> 커버로스 공식문서 </a> </li>
                <li> <span className='sstitle'> 티켓에 담긴 정보 </span>
                  <div className="sblock">
                    <li> 유저 아이디 </li>
                    <li> 유저 호스트 IP 주소 </li>
                    <li> 타임 스탬프 ( 시간 기록 ) </li>
                    <li> 티켓 수명 </li>
                    <li> 세션 키 </li>
                  </div>
                </li>
                <li> <span className='sstitle'> 커버로스 동작 과정 </span>
                  <div className="sblock">
                    <li> AS서버는 TGS비밀키를 알고있고, TGS서버는 SS의비밀키를 알고 있다 </li>
                    <li> 1. 유저가 암호화 되지 않는 아이디를 AS서버에 보낸다. </li>
                    <li> 2. AS서버에서 DB에 저장된 아이디가 유효하면 DB에 저장되어 있는 사용자의 PW로 암호화한 TGS 세션키를 생성 </li>
                    <li> 3. AS서버에서 사용자의PW암호화된TGS세션키( enc_key : 사용자의 PW 비밀키 , enc_data : TGS 세션키 ) , TGT( enc_key : TSG비밀키 , enc_data : 유저ID,주소,유효시간,TGS세션키) 을 발송</li>
                    <li> 4. 사용자가 받은 TGS세션키를 사용자PW를 이용하여 복호화하여 TGS세션키를 얻을 수 있음 </li>
                    <li> 5. 사용자가 Authenticator( enc_key : TGS 세션키 , enc_data : 유저ID,타임스탬프 ) , TGT( enc_key : TSG비밀키 , enc_data : 유저ID,주소,유효시간,TGS세션키) 을 발송</li>
                    <li> 6. TGS서버에서(Ticket Granting Service) Authenticator와 TGT 정보를 이용해서 TGS 세션키를 이용해 SS 세션키를 생성  </li>
                    <li> 7. TGS서버에서 사용자에게 사용자의TGS로암호화된SS세션키(enc_key : TGS세션키 , enc_data : SS세션키) , Ticket(enc_key : SS비밀키 , enc_data : 유저ID,주소,유효기간,SS세션키) 을 발송 </li>
                    <li> 8. 사용자가 TGS세션키를 이용해서 SS세션키를 얻어냄 </li>
                    <li> 9. 사용자가 Authenticator( enc_key : SS 세션키 , enc_data : 유저ID,주소,타임스탬프 ) , Ticket( enc_key : SS비밀키 , enc_data : 유저ID,주소,유효시간,SS세션키)를 실제 서비스 서버에 보낸다. </li>
                    <li> 10. 서비스 서버에서는 티켓이 있으니 접근을 허용 </li>
                  </div>
                </li>
                <li> <span className='sstitle'> 커버로스 단점 </span>
                  <div className="sblock">
                    <li> 서버가 다운되면 기존 유저들을 제외한 나머지는 로그인 불가 </li>
                    <li> AS,TGS,SS 가 비밀키를 서로 알고 있어야 하는 문제점 </li>
                    <li> 티겟이 유저에게 보관이 되므로 탈취가 될 가능성이 존재 </li>
                    <li>  </li>
                  </div>
                </li>
              </span>
              <details>
                <summary className="sstitle"> 명령어 </summary>
                <span className="mblock">
                  <span className="sstitle"> kdb5_util 명령어 </span>
                  <span className="sblock">
                    <li> kdb5_util create -r TEST.COM -s # 커버로스DB영역 생성하고 실행 , -s : stash 파일 생성 , -r : 인증영역을 지정  , 이미 존재하면 실패 </li>
                    <li> kdb5_util [-f] destroy -r TEST.COM # 커버로스DB영역 삭제 </li>
                    <li>  </li>
                  </span>
                  <li>  </li>
                </span>
              </details>
              <span className="sstitle"> 설치 </span>
              <span className="mblock">
                <li> hostname # 리눅스 시스템의 이름을 확인</li>
                <li> hostnamectl --static set-hostname kdc.test.com # --static 대소문자 구분, 서버의 이름 변경 </li>
                <li> yum -y install bind bind-chroot # dns 서버 설치 , 테스트 해보려고? </li>
                <li> vi /etc/named.conf
                  <div className="sblock">
                    <li> 127.0.0.1을 any로 변경 # 13번 째 줄 </li>
                    <li> ::1을 none로 변경 # 14번 째 줄 </li>
                    <li> localhost를 any로 변경 # 21번 째 줄 </li>
                    <li> zone "test.com" IN {'{'} 59번 째 줄
                      <li> type master; </li>
                      <li> file "test.zone"; </li>
                      <li> allow-update {'{none;};'} </li>
                    </li>
                    <li> {'};'} </li>
                  </div>
                </li>
                <li> named-checkconf # named.conf 파일을 검사하는 명령어 </li>
                <li> cd /var/named  </li>
                <li> vi test.zone
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
                      <span className="tab_4"> A </span>
                      <span className="tab_4"> 192.168.10.80 <small> DNS서버의 IP주소가 뭔지를 알려줌 , A는 주소? </small> </span>
                    </li>
                    <li>
                      <span> kdc </span>
                      <span className="tab_4"> IN </span>
                      <span className="tab_4"> A </span>
                      <span className="tab_4"> 192.168.10.80 </span>
                    </li>
                  </span>
                </li>
                <li> yum -y install krb5-server krb5-workstation pam_krb5 # KDC 서버 설치하는 방법
                  <li> krb5-libs , krb5-auth-dialog # 나중에 알아보기  </li>
                </li>
                <li> vi /etc/krb5.conf  # KDC 설정파일
                  <div className="sblock">
                    <li> default_realm = EXAMPLE.COM 을 TEST.COM  으로 변경 # 16번째 줄 주석처리 제거하고 수정 </li>
                    <li> EXAMPLE.COM 을 TEST.COM 으로 변경# 20번째 주석해제 및 수정,  영역이름 </li>
                    <li> kdc = kerberos.example.com 을 kdc.test.com 으로 변경 # 21번째 줄 주석해제, 마스터 KDC  </li>
                    <li> admin_server = kerberos.example.com 을 kdc.test.com 으로 변경 # 22번 째 줄 주석해제, 인증 서버  </li>
                    <li> .example.com = EXAMPLE.COM 을 .test.com = TEST.COM 변경 # 주석해제 </li>
                    <li> example.com = EXAMPLE.COM 을 test.com = TEST.COM 변경  # 주석해제  </li>
                  </div>
                </li>
                <li> vi /var/kerberos/krb5kdc/kadm5.acl
                  <div className="sblock">
                    <li> */admin@EXAMPLE.COM 을 */admin@TEST.COM 변경 </li>
                  </div>
                </li>
                <li> vi /var/kerberos/krb5kdc/kdc.conf
                  <div className="sblock">
                    <li> #master_key_type = aes256-cts # 주석 처리되어 있는 부분 제거  </li>
                    <li> EXAMPLE.COM 을 TEST.COM으로 변경  </li>
                  </div>
                </li>
                <li> kdb5_util create -r TEST.COM -s # 커버로스 관리프로그램(kdb5_util)
                  <div className="sblock">
                    <li> 비번입력 </li>
                    <li> 비번입력확인  </li>
                  </div>
                </li>
                <li> systemctl restart kadmin krb5kdc  </li>
                <li> kadmin.local # DB Principal 관리?
                  <div className="sblock">
                    <li> add_principal root/admin # Principal 추가(티겟을 할당할 수 있는 고유ID 추가)
                      <span className='mblock'>
                        <li> 비번입력 </li>
                        <li> 비번입력확인  </li>
                      </span>
                    </li>
                    <li> add_principal krbuser
                      <span className='mblock'>
                        <li> 비번입력 </li>
                        <li> 비번입력확인  </li>
                      </span>
                    </li>
                    <li> listprincs # 모든 Principal 조회 </li>
                    <li> ktadd -k /var/kerberos/krb5kdc/kadm5.keytab kadmin/admin  </li>
                    <li> ktadd -k /var/kerberos/krb5kdc/kadm5.keytab kadmin/changepw #패스워드 권한도 kadmin에게 준다? </li>
                    <li> addprinc -randkey host/kdc.test.com  </li>
                    <li> ktadd host/kdc.test.com  </li>
                    <li> quit  </li>
                  </div>
                </li>
                <li> vi /etc/ssh/sshd_config
                  <div className="sblock">
                    <li> GSSAPIAuthentication # 79번째 줄이 yes로 되있으면 된다. </li>
                    <li> GSSAPICleanupCredentials no # 80번째 줄이 no로 되있으면 된다. </li>
                  </div>
                </li>
                <li> vi /etc/ssh/ssh_config
                  <div className="sblock">
                    <li> GSSAPIAuthentication yes # 59번째 줄 </li>
                    <li> GSSAPIDelegateCredentials yes # 아래에 내용추가 ,   </li>
                  </div>
                </li>
                <li> systemctl restart sshd  </li>
                <li> systemctl restart krb5kdc </li>
                <li> systemctl restart kadmin</li>
                <li> useradd krbuser  </li>
                <li> systemctl stop firewalld | setenforce 0 </li> <br />

                <li> <div className="sstitle"> CentOS 클라이언트로 이동 </div>   </li>
                <li> ps -ef | grep yum | grep -v grep | awk '{'{'}print $2{'}'}' | xargs kill -9 2{'>'}/dev/null </li>
                <li> yum -y install krb5-workstation pam_krb5  </li>
                <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33
                  <div className="sblock">
                    <li> DNS1=192.168.10.80  # 추가 </li>
                  </div>
                </li>
                <li> systemctl restart network  </li>
                <li> cat /etc/resolv.conf </li>
                <li> scp root@test.com:/etc/krb5.conf /etc/krb5.conf # 서버에있는 파일을 가져와서 덮어쓰기 작동이 안됨
                  {/*<div className="sblock">
                        <li> default_realm = EXAMPLE.COM 을 TEST.COM  으로 변경 # 16번째 줄 주석처리 제거하고 수정 </li>
                        <li> EXAMPLE.COM 을 TEST.COM 으로 변경# 20번째 주석해제 및 수정,  영역이름 </li>
                        <li> kdc = kerberos.example.com 을 kdc.test.com 으로 변경 # 21번째 줄 주석해제, 마스터 KDC  </li>
                        <li> admin_server = kerberos.example.com 을 kdc.test.com 으로 변경 # 22번 째 줄 주석해제, 인증 서버  </li>
                        <li> .example.com = EXAMPLE.COM 을 .test.com = TEST.COM 변경 # 주석해제 </li>
                        <li> example.com = EXAMPLE.COM 을 test.com = TEST.COM 변경  # 주석해제  </li>
                      </div>*/}
                </li>
                <li> vi /etc/ssh/sshd_config
                  <div className="sblock">
                    <li> GSSAPIAuthentication yes # 79번 째줄 </li>
                  </div>
                </li>
                <li>  vi /etc/ssh/ssh_config
                  <div className="sblock">
                    <li> GSSAPIAuthentication yes # 59번째 줄 </li>
                    <li> GSSAPIDelegateCredentials yes # 아래에 내용추가 ,   </li>
                  </div>
                </li>
                <li> kinit krbuser # kinit는 티겟 발급 명령어, krbuser 라는 티겟을 받겠다.  </li>
                <li> klist </li>
                <li> ssh krbuser@kdc.test.com # 티겟을 가지고 접속 , 비번 없이 접속 가능 </li>
                <li> exit  </li>
                <li>   </li>
                <li>   </li>
              </span>
            </span>
          </details>
        </span>
        {/*  */}
        <span className="mblock">
          <details>
            <summary className="stitle">  Proxy 서버 <small> </small>
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <span className="sblock">
              <span className="sstitle"> 설명 </span>
              <span className="mblock">
                <li> 포트번호 3128  </li>
                <li> 캐시를 사용하여 리소스를 빠르게 접근하기 위해서  </li>
                <li> 웹 프록시는 웹 서버의 웹 페이지를 캐시로 저장하는데 사용  </li>
                <li> 익명으로 컴퓨터 유지  </li>
                <li> 사용률을 기록하기 위해  </li>
                <li> 밖으로 나가는 내용을 검사하기 위해 </li>
                <li>   </li>
                <li> 보안 밎 통제를 나가기 위해  </li>
                <li> IP추적을 피하기 위해  </li>
                <li> 지역 제한을 우회하기 위해서  </li>
              </span>
              <span className="sstitle"> squid 설치 </span>
              <span className="mblock">
                <li> ps -ef | grep yum | grep -v grep | awk '{'{'}print $2{'}'}' | xargs kill -9 2{'>'}/dev/null </li>
                <li> yum -y install squid </li>
                <li> vi /etc/squid/squid.conf
                  <div className='sblock'>
                    <li> acl centos7 src 192.168.10.0/255.255.255.0 #26번째 줄 추가   </li>
                    <li> http_access allow centos7 # 55번째 줄 추가, 프록시 서버에 접근을 허용해주겠다. </li>
                    <li> cache_dir ufs /var/spool/squid 1000 16 256 # 64번 째 줄주석 해제 및 수정 , 캐시를 얼마만큼의
                      용량으로 저장 하겠느냐 , 뒤에 숫자 3개 [MB 자주쓰는폴더디렉토리갯수 하위디렉토리갯수]  </li>
                    <li> cache_access_log /var/log/squid/access.log # , 프록시 서버에 접근할 때 생기는 로그 </li>
                    <li> cache_log /var/log/squid/cache.log # 프록시 서버에서 발생하는 로그 </li>
                    <li> cache_store_log /var/log/squid/store.log # 발생하는 세부정보를 store에 저장하는 로그 </li>
                    <li> cache_mem 8 MB </li>
                    <li> visible_hostname centos7 # 마지막줄에 추가 , 프록시서버의 이름을 지정  </li>
                  </div>
                </li>
                <li> systemctl restart squid  </li>
                <li> cd /var/spool/squid | ll # 00 ~ 0F 는 사이트라고 생각하면 된다. 아까 지정한 16 의미 </li>
                <li> find * -type f # 현재 파일에서 모든 파일을 검사 , 처음에는 없음  </li>
                <li> systemctl stop firewalld | setenforce 0 </li>
                <li> <div className="sstitle"> CentOS 클라이언트로 이동 </div>  </li>
                <li> firefox 열기  </li>
                <li> 우측 위에 메뉴 - 환경 설정 - 일반 - 네트워크 설정으로 이동 </li>
                <li> 수동 프록시 설정, HTTP 프록시 192.168.10.80  포트  3128 , 모든 프로토콜에 위의 프록시 설정 사용 체크  </li>
                <li> 네이버로 가서 여러개를 눌러보기 , 그리고 서버로 이동해서 프록시 서버의 캐시를 보기  </li>
                <li> <div className="sstitle"> CentOS 서버로 이동 </div>  </li>
                <li> find * -type f </li>
                <li> 보다보면 css 파일로 저장되어있는 것을 볼 수 있음  </li>
                <li> cat /var/log/squid/access.log # 접근한 사이트에 대해서 볼 수 있음  </li>
                <li> cat /var/log/squid/cache.log # 캐시 파일이 언제 만들어졌는지 등 </li>
                <li> cat /var/log/squid/store.log # 어떤 캐시파일이 저장되었는지 알 수 있음  </li>
                <li> 윈도우 실행창 에서 inetcpl.cpl - 연결 - LAN 설정 - 사용자 프록시 서버 사용 체크 -
                  192.168.10.80 , 3128 이라고 설정하면 CentOS에서 확인 가능(다시 설정해두지 않으면 인터넷이 안됨)  </li>
                <li> tail -f /var/log/squid/access.log </li>
                <li> 회사에서 프록시 서버를 이용해서 막아버리면 통제가능 </li>
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
            <summary className="stitle"> Ldap 서버
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <div className="sblock">
              <div className='sstitle'> 설명 </div>
              <div className='mblock'>
                <li> Lightweight Directory Access Protocol </li>
                <li> 로그인 인증을 처리해주는 서버 </li>
                <li>  </li>
              </div>
              <div className='sstitle'> 설치 </div>
              <div className='mblock'>
                <li> DNS_SERVER_IP=$(ifconfig | grep -A 2 ens | grep "inet " | awk '{'{'} print $2 {'}'}') </li>
                <li> DOMAIN_NAME=test.com </li>
                <li> yum -y install bind bind-chroot </li>
                <li> sed -i "s/^\s*listen-on port 53.*/\tlisten-on port 53 {'{'} any; {'}'};/g" /etc/named.conf </li>
                <li> sed -i "s/^\s*listen-on-v6 port 53.*/\tlisten-on-v6 port 53 {'{'}none; {'}'};/g" /etc/named.conf </li>
                <li> sed -i "s/^\s*allow-query.*/\tallow-query\t{'{'} any; {'}'};/g" /etc/named.conf </li>
                <li>  </li>
                <li>  </li>
                <li>  </li>
              </div>
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </span>
        {/*  */}
        <span className="mblock">
          <details>
            <summary className="stitle"> NFS 서버
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <div className="sblock">
              <div className='sstitle'> 설명 </div>
              <div className='mblock'>
                <li> Network File System </li>
                <li> 리눅스끼리 저장공간을 공유할 수 있도록 하는 시스템 </li>
                <li> 서버의 디렉토리는 본인의 디렉토리와 연결하여 사용 </li>
                <li>  </li>
              </div>
              <div className='sstitle'> 설치 </div>
              <div className='mblock'>
                <div className='sstitle'> NFS 서버 </div>
                <div className='sblock'>
                  <li> yum -y install nfs-utils  </li>
                  <li> systemctl start nfs-server  </li>
                  <li> systemctl start rpcbind  </li>
                  <li> systemctl enable nfs-server  </li>
                  <li> systemctl enbale rpcbind  </li>
                  <li> mkdir /nfsfolder  </li>
                  <li> chmod 700 /nfsfolder  </li>
                  <li> vi /etc/exports # NFS 설정 파일 </li>
                  <li> /nfsfolder 192.168.0.*(rw,no_root_squash,rync) #no_root_squash , 클라이언트가 서버의 root계정으로
                    접근하면 서버의 root와 같은 권한을 가지게됨, 보안 취약 </li>
                  <li> system restart nfs-server  </li>
                  <li> firewall-cmd --permanent --add-service=nfs  </li>
                  <li> exportfs -v </li>
                  <li>   </li>
                </div>
                <div className='sstitle'> NFS 클라이언트 </div>
                <div className='sblock'>
                  <li> yum -y install nfs-utils  </li>
                  <li> systemctl start nfs-server  </li>
                  <li> systemctl enable nfs-server  </li>
                  <li> mkdir /nfsfolder </li>
                  <li> chmod 700 /nfsfolder  </li>
                  <li> mount -t nfs IP:/nfsfolder /nfsfolder # 외부 nfs폴더를 로컬 nfs폴더와 연결  </li>
                  <li> vi /etc/fstab
                    <li> IP:/서버폴더 /클라폴더 nfs hard 0 0  </li>
                    <li> hard : 연결이 되지 않아도 연결 지속 시도, 성능 영향  </li>
                    <li> soft : 연결할 수 없으면 오류 응답, 성능 영향 적음, 트랜잭션 중 중단되면 데이터 손상  </li>
                    <li>   </li>
                  </li>
                  <li> df # 마운트 상태 확인  </li>
                  <li>   </li>
                </div>
              </div>
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </span>
        {/*  */}
        <span className="mblock">
          <details>
            <summary className="stitle">
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <div className="sblock">
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </span>
        {/*  */}
        <span className="mblock">
          <details>
            <summary className="stitle">
              <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
            <div className="sblock">
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
              <div className='sstitle'>  </div>
              <div className='mblock'>
                <li>  </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </span>
        {/*  */}
      </span>
    </div >
  );
}

export default LinuxServer;