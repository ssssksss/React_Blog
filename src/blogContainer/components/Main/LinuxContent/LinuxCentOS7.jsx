import React from 'react';

const LinuxCentOS7 = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] 초기 root 계정 접속 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> sudo passwd root 입력 </li>
              <li> 새로운 패스워드 입력 </li>
              <li> su root 명령어 입력 </li>
              <li> 비밀번호 입력 </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] 방화벽 설정하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 시작 </h2>
            <div className="block4">
              <li> firewall-cmd --state <small> running </small> </li>
              <li> systemctl disable firewalld </li>
              <li> systemctl stop firewalld </li>
            </div>

            <h2 className='h2'> 📌 방화벽 명령어  </h2>
            <div className="block4">
              <li> firewall-cmd --reload <small> 방화벽 적용(변경할 때 마다 사용!!!!!!!!!!!!!!!!!!) </small> </li>
              <li> firewall-cmd --state <small> 방화벽 상태 </small> </li>
              <li> firewall-cmd --list-ports <small> 방화벽 개방 목록 </small> </li>
              <li> firewall-cmd --list-all <small> 방화벽 설정 상태 </small> </li>
              <li> firewall-cmd --get-zones </li>
              <li> firewall-cmd --list-all-zones </li> <br />
              <li> systemctl start firewalld <small> 방화벽 시작 </small> </li>
              <li> systemctl enable firewalld <small> 재부팅시 자동 설정 </small> </li>
              <li> systemctl stop firewalld <small> 방화벽 중지 </small> </li>
              <li> systemctl disable firewall <small> 재부팅시 자동 설정x </small> </li>
            </div>

            <h2 className='h2'> 📌 방화벽 허용 </h2>
            <div className="block4">
              <li> firewall-cmd --permanent --add-port=[포트번호]/[프로토콜(ex) tcp] <small> # 방화벽 포트번호 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-port=[포트번호 포트번호-포트번호]/[프로토콜(ex) tcp)] </li>
              <li> firewall-cmd --permanent --add-service=[서비스명(ex) http https] </li>
              <li> firewall-cmd --permanent --remove-service=[서비스명] </li>
              <li> firewall-cmd --permanent --add-source=[IP주소]  <small> # 특정 IP 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-source=[IP주소]  <small> # 특정 IP 제거 </small> </li>
              <li> firewall-cmd --permanent --add-source=[IP주소/서브넷마스크]  <small> # 특정 IP대역 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-source=[IP주소/서브넷마스크]  <small> # 특정 IP대역 제거 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] reject' <small> # 특정IP 접근 막기 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] drop' <small> # 특정IP 접근 막기 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] reject' <small> # 특정IP 접근 막기 제거 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] drop' <small> # 특정IP 접근 막기 제거 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP에 특정Port 허용</small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP에 특정Port 허용 제거</small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소/서브넷마스크] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP대역에 특정Port 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소/서브넷마스크] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP대역에 특정Port 허용 제거 </small> </li>
            </div>

            <h2 className='h2'> 📌 방화벽 설정 파일? </h2>
            <div className="block4">
              <li> vi /usr/lib/systemd/system/firewalld.service </li>
            </div>

            <h2 className='h2'> 📌 방화벽 관련 에러 </h2>
            <div className="block4">
              <li className="col_red"> 에러 : FirewallD is not running </li>
              <li className="col_blue"> 해결 : systemctl start firewalld </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] SELinux </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> sestatus <small> selinux 모드 확인 </small>   </li>
              <li> setenforce [0,1] <small> 0은 끄기, 1은 켜기, 재부팅하면 다시 활성화(그러므로 영구적으로 설정 필요) </small> </li>
              <li> vi /etc/selinux/config
                <li> SELINUX=[enforcing] <small> 영구켜기 </small> </li>
                <li> SELINUX=[disabled] <small> 영구끄기, 이와 같이 변경해주기 </small> </li>
              </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] IP, 네트워크 (고정 IP 설정하기) (완벽하지 않음) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 모든 설정을 할 필요는 없다. </h2>
            <div className='block4'>
              <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33 <small> 뒤에 숫자는 다를 수 있으므로 확인해보기 </small>
                <div className="block3">
                  <li> BOOTPROTO=static <small> [static=IP고정, dhcp=동적, bootp=?, none] </small> </li>
                  <li> PREFIX=24 <small> #24까지가 네트워크 대역이다라고 알려주는것, 서브넷 마스크? </small> </li>
                  <li> IPADDR=[고정할IP주소] <small> (ex 192.168.10.20), 고정할 IP주소 </small>  </li>
                  <li> DNS1=[DNS서버주소] <small> (ex 8.8.8.8, 168.126.63.1) </small> (ex 168.126.63.1) </li>
                  <li> GATEWAY=[게이트웨이주소] <small> (ex 192.168.10.2), 게이트웨이 주소 </small> </li> <br />
                  <li> ONBOOT=yes <small> 부팅시 설정 활성화 여부 </small> </li>
                  <li> BROADCAST=@.@.@.255 <small> 브로드캐스드 주소 </small> </li>
                  <li> DEVICE=ens33 <small> 대충 느낌으로는 알겠지만 잘 모르겠다. </small> </li>
                  <li> HWADDR=@:@:@:@:@:@ <small> MAC주소 </small> </li>
                  <li> NETMASK <small> 넷마스크 주소 </small> </li>
                  <li> NETWORK <small> 네트워크 주소 </small> </li>
                  <li> PEERDNS=yes <small> dhcp서버의 dns정보를 resolv.conf에 저장할지 말지 </small> </li>
                  <li> DNS1 </li>
                  <li> DNS2 </li>
                  <li> USERCTL=no <small> 일반 유저가 설정 가능 여부 </small> </li>
                </div>
              </li>
            </div>

            <h2 className='h2'> 📌 네트워크 명령어 </h2>
            <div className='block4'>
              <li> systemctl restart network <small> 네트워크 재시작 </small>  </li>
              <li> ping [IP주소] <small> IP주소로 ping을 보내서 인터넷이 연결이 되었는지
                확인하는 방법 , 168.126.63.1(KT) </small>  </li>
              <li> ifconfig <small> 네트워크 인터페이스 정보 확인 </small> </li>
              <li> ip route <small> 본인 컴퓨터의 ip만 출력 </small>  </li>
              <li> ip addr </li>
              <li> vi /etc/resolv.conf <small> nameserver 설정파일 </small> </li>
              <li> netstat -lntp </li>
              <li> netstat -antp </li>
              <li> netstat -antp | grep LISTEN </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] Yum, Rpm </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 yum 명령어 </h2>
            <div className='block4'>
              <li> yum update 혹은 yum -y install </li>
              <li> yum remove </li>
              <li> yum erase 패키지명 </li>
              <li> yum info 패키지명 <small> 설치여부확인, yum info로 입력시 엄청 많이 나온다. </small> </li>
              <li> yum clean all <small> cash에 있는 저장소 비우기 </small> </li>
              <li> yum check -update </li>
              <li> yum update 패키지명 </li>
              <li> yum upgrade 패키지명 </li>
              <li> yum reinstall 패키지명 </li>
              <li> yum install 패키지명 </li>
              <li> yum localinstall 패키지명 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 yum 폴더 경로 </h2>
            <div className='block4'>
              <li> /etc/yum </li>
              <li> /etc/yum.conf </li>
              <li> /etc/yum.repos.d </li>
              <li> /etc/resolv.conf </li>
            </div>

            <h2 className='h2'> 📌 yum 레포지토리 경로 변경(필수 아님) </h2>
            <div className='block4'>
              <li> 외국 repo서버에 문제가 있거나 느린경우 국내 repo서버를 이용하는 방법  </li>
              <li> vi /etc/yum.repos.d/CentOS-Base.repos
                <div className="block4">
                  <li> mirrorlist.centos.org {"=>"} mirror.kakao.com </li>
                </div>
              </li>
            </div>

            <h2 className='h2'> 📌 rpm 명령어 </h2>
            <div className='block4'>
              <li> rpm -Uvh 패키지명.rpm <small> rpm 패키지 설치 </small> </li>
              <li> rpm -e 패키지명 <small> rpm 패키지 삭제 </small> </li>
              <li> rpm -qa 패키지명 <small> 설치 여부 확인 </small> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] Unzip </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> yum install unzip </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [6] Java </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 명령어 </h2>
            <div className='block4'>
              <li> java -version <small> 자바 버전 확인, 없으면 안나옴 </small> </li>
              <li> which javac <small> 자바 위치 </small> </li>
              <li> yum list installed | grep java <small> 설치된 자바 버전 확인 </small> </li>
              <li> 설치할 폴더로 이동(/usr/lib나 /usr/local/lib나 폴더를 만들어서 이용) </li>
              <li> 자바에서 리눅스 jdk 설치파일 경로를 가져온다.(서버에서는 jre로 가능하지만 그냥 jdk) </li>
              <li> 버전에 맞는 파일 경로 복사하기 (32,64 버전 확인은 getconf LONG_BIT 명령어를 사용하면된다.) </li>
              <li> yum remove -y java-1.8.0-openjdk.x86_64 <small> 자바 설치 제거 </small> </li>
              <li> yum remove -y java-1.8.0-openjdk-headless.x86_64 <small> 자바 설치 제거 </small> </li>
            </div>

            <h2 className='h2'> 📌 yum으로 자바 1.8 설치 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 yum으로 자바 11 설치 </h2>
            <div className='block4'>
              <li> cd /usr/lib </li>
              <li> yum install java-11-openjdk-devel.x86_64 </li>
              <li> java --version  </li>
              <li> which javac <small> 설치 경로 확인 </small> </li>
              <li> readlink -f /bin/javac <small> 설치된 자바 파일 경로 </small> </li>
              <li> vi /etc/profile <small> 환경변수 설정 </small>
                <div className="block3">
                  <li> export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.14.0.9-1.el7_9.x86_64 <small> 마지막에 추가 그리고 파일명 정확히 확인하기.. </small> </li>
                </div>
              </li>
              <li> source /etc/profile </li>
              <li> echo $JAVA_HOME <small> 경로가 잘 설정되었는지 확인 </small> </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [7] Nginx </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> Apache와 달리 구성 시스템이 없어 빠른 속도 </li>
              <li> Request 에 대해 Event-Driven 방식으로 동작 </li>
              <li>정적 파일에 대해 Apache 요청의 2배량을 제공  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> vi /etc/yum.repos.d/nginx.repo
                <div className="block3">
                  <li> [nginx] </li>
                  <li> name=nginx repo </li>
                  <li> baseurl=http://nginx.org/packages/centos/7/$basearch/ </li>
                  <li> gpgcheck=0 </li>
                  <li> enabled=1 </li>
                </div>
              </li>
              <li> yum install nginx </li>
              <li> systemctl start nginx </li>
              <li> systemctl enable nginx </li>
              <li> systemctl status nginx </li>
            </div>

            <h2 className='h2'> 📌 추가 명령어 </h2>
            <div className='block4'>
              <li> yum list installed ngnix <small> # nginx yum 설치 여부 </small> </li>
              <li> yum remove [설치된패키지이름] <small> # nginx 패키지 삭제 </small> </li>
            </div>

            <h2 className='h2'> 📌 경로 </h2>
            <div className='block4'>
              <li> /etc/nginx/conf.d/default.conf <small> 초기 설정 </small> </li>
              <li> /usr/share/nginx/html <small> html 파일 경로가 있는곳 </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 배포 설정 </h2>
            <div className='block4'>
              <li> vi /etc/nginx/conf.d/default.conf 내부 전부 주석처리하고 아래 2줄 넣어주기 </li>
              <div className="block3">
                <li> include /etc/nginx/conf.d/*.conf; </li>
                <li> include /etc/nginx/sites-enabled/*.conf; </li>
              </div>
              <li> mkdir /etc/nginx/sites-available </li>
              <li> mkdir /etc/nginx/sites-enabled </li>
              <li> vi /etc/nginx/sites-available/앱이름.conf </li>
              <div className="block3">
                <li> server {"{"}
                  <li> listen 80; </li>
                  <li> location / {"{"}
                    <li> root /app/ssssksss-server-react/build; </li>
                    <li> index index.html index.htm; </li>
                    <li> try_files $uri $uri/ /index.html; </li>
                  </li>
                  <li> {"}"} </li>
                </li>
                <li> {"}"} </li>
              </div>
              <li> ln -s /etc/nginx/sites-available/앱이름.conf /etc/nginx/sites-enabled/앱이름.conf </li>
              <li> nginx -t <small> ok 나 successful이 나오면된다. </small> </li>
              <li> systemctl stop nginx </li>
              <li> systemctl start nginx </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [8] Tomcat8 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 톰캣 8.5.7 설치 </h2>
            <div className='block4'>
              <li> <a href="http://archive.apache.org/dist/tomcat/tomcat-8/" target="_blank" rel="noopener noreferrer"> 톰캣 설치 이동 </a> </li>
              <li> 버전 클릭 - bin/ - (아파치톰캣-버전.tar.gz) 우측클릭해서 링크 주소 복사 </li>
              <li> cd /home으로 이동 , mkdir download 명령어로 폴더를 생성 </li>
              <li> cd /home/download </li>
              <li> wget http://archive.apache.org/dist/tomcat/tomcat-8/v8.5.70/bin/apache-tomcat-8.5.70.tar.gz
                <div className="block3">
                  <li> yum install -y wget <small> 웹서버에서 콘텐츠를 가져오는 프로그램(없다면은 설치) </small> </li>
                </div>
              </li>
              <li> tar zxvf apache-tomcat-8.5.70.tar.gz </li>
              <li> mv apache-tomcat-8.5.70 /usr/local/tomcat8 </li>
              <li> vi /usr/local/tomcat8/conf/server.xml <small> 70번째 줄, 포트, 인코딩 설정 가능 </small>
                <div className="block3">
                  <li> URIEncoding="UTF-8" <small> 71번째 줄 정도에 추가해주기 </small> </li>
                </div>
              </li>
              <li> vi /etc/profile
                <div className="block3">
                  <li> export JAVA_HOME=~~~ <small> # 이미 위에서 설정을 해놓았다. </small> </li>
                  <li> export CATALINA_HOME=/usr/local/tomcat8 <small> # 톰캣 폴더 경로 </small> </li>
                  <li> export CLASSPATH=$JAVA_HOME/jre/lib:$JAVA_HOME/lib/tools.jar:$CATALINA_HOME/lib-jsp-api.jar:$CATALINA_HOME/lib/servlet-api.jar </li>
                  <li> export PATH=$PATH:$JAVA_HOME/bin:/bin:/sbin </li>
                </div>
              </li>
              <li> source /etc/profile </li>
              <li> vi /usr/local/tomcat8/conf/server.xml </li>
              <li> $CATALINA_HOME/bin/startup.sh <small> JAVA_HOME 관련 에러가 발생하면 jdk 설치와 JAVA_HOME 경로가 설정이 되지 않아서 그럴 것이다. </small> </li>
              <li> ps -ef | grep tomcat <small> 톰캣 프로세스 확인 </small> </li>
              <li> netstat -tln <small> 톰캣 포트 8080 확인 </small> </li>
              <li> vi /etc/systemd/system/tomcat8.service
                <div className="block3">
                  <li> [Unit] </li>
                  <li> Description=Apache Tomcat Web Application Container </li>
                  <li> After=syslog.target network.target </li>
                  <li>  </li>
                  <li> [Service] </li>
                  <li> Type=forking </li>
                  <li> Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.14.0.9-1.el7_9.x86_64" </li>
                  <li> Environment="CATALINA_HOME=/usr/local/tomcat8" </li>
                  <li> Environment="CATALINA_BASE=/usr/local/tomcat8" </li>
                  <li> Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC" </li>
                  <li> Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom" </li>
                  <li> ExecStart=/usr/local/tomcat8/bin/startup.sh </li>
                  <li> ExecStop=/usr/local/tomcat8/bin/shutdown.sh </li>
                  <li> User=root </li>
                  <li> Group=root </li>
                  <li> UMask=0007 </li>
                  <li> RestartSec=10 </li>
                  <li> Restart=always </li>
                  <li> [Install] </li>
                  <li> WantedBy=multi-user.target </li>
                </div>
              </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [9] Mysql </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              {/*<li> yum install wget <small> # 웹서버에서 컨텐츠를 가져올 수 있는 프로그램 </small> </li>*/}
              <li> <a href="https://dev.mysql.com/downloads/repo/yum/" target="_blank" rel="noopener noreferrer"> mysql yum 다운로드 저장소 사이트 </a> </li>
              <li> sudo yum localinstall https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm <small> 위에 사이트 주소에서 최신 버전으로 다운받기 </small> </li>
              <li> sudo yum install mysql-community-server <small>  용량 500MB </small> </li>
              <li> sudo systemctl enable mysqld </li>
              <li> sudo systemctl start mysqld <small>  5초이상 걸림 </small> </li>
              <li> sudo systemctl status mysqld <small>  상태확인 </small> </li>
              <li> sudo grep 'temporary password' /var/log/mysqld.log <small>  끝에 이러한 비번(dn0eRWYvj,eZ) 복사해놓기 바로사용 </small> </li>
              <li> sudo mysql_secure_installation <small>  mysql 보안 설정 </small>
                <li> 1. Enter password for user root: <small>  이러한 비번(dn0eRWYvj,eZ) 넣기 </small> </li>
                <li> 2. New password: 새로운비번넣기(8자리이상,대문자,소문자,특수문자 섞어서 넣어주기) </li>
                <li> 3. Re-enter new password: 새로운비번넣기(8자리이상,대문자,소문자,특수문자 섞어서 넣어주기) </li>
                <li> 4. Change the password for root ? : y </li>
                <li> 5. New password: 새로운비번넣기(8자리이상,대문자,소문자,특수문자 섞어서 넣어주기) </li>
                <li> 6. Re-enter new password: 새로운비번넣기(8자리이상,대문자,소문자,특수문자 섞어서 넣어주기) </li>
                <li> 7. Do you wish to continue with the password provided? : y</li>
                <li> 8. Remove anonymous users? : y </li>
                <li> 9. Disallow root login remotely? n </li>
                <li> 10. Remove test database and access to it?  : y </li>
                <li> 11. Reload privilege tables now? : y  </li>
              </li>
              <li> vi /etc/my.cnf <small>  mysql 설정 </small>
                <li> port=[포트] <small>  원하는 포트로 변경, 디폴트가 3306 </small> </li>
              </li>
              <li> mysql -u root -p <small>  mysql 접속 </small> </li>
              <li> 외부에서 접속하려면 IP권한을 열어주어야 하는 등의 설정이 필요하다. </li>
            </div>
            <h2 className='h2'> 📌 완전 삭제 </h2>
            <div className="block4">
              <li> yum list installed | grep mysql
                <div className="block3">
                  <li> mysql-community-client.x86_64          8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-client-plugins.x86_64  8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-common.x86_64          8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-icu-data-files.x86_64  8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-libs.x86_64            8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-libs-compat.x86_64     8.0.28-1.el7 @mysql80-community </li>
                  <li> mysql-community-server.x86_64          8.0.28-1.el7 @mysql80-community </li>
                </div>
              </li>
              <li> yum remove -y mysql-community-* </li>
              <li> rm -rf /var/lib/mysql </li>
              <li> rpm -qa | grep mysql </li>
              <li> rpm -e mysql80-community-release <small> rpm -qa | grep mysql 에서 뭐가 있으면 삭제 </small> </li>
              <li> find / -name 'mysql*rpm' </li>
              <li> rm -rf 위에서나온것들붙여넣기 <small> find / -name 'mysql*rpm' 에서 나오는 내용 복사 붙여넣기 </small> </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [10] Gradle 설치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> <a href="https://services.gradle.org/distributions" target="_blank" rel="noopener noreferrer">
                gradle 다운 페이지 </a> </li>
              <li> wget https://services.gradle.org/distributions/gradle-7.0.2-bin.zip </li>
              <li> mkdir /opt/gradle </li>
              <li> unzip -d /opt/gradle gradle-7.0.2-bin.zip </li>
              <li> vi /etc/profile.d/gradle.sh </li>
              <div className="block3">
                <li> {" export GRADLE_HOME=/opt/gradle/gradle-7.0.2 "} </li>
                <li> {" export PATH=${GRADLE_HOME}/bin:${PATH} "} </li>
              </div>
              <li> chmod +x /etc/profile.d/gradle.sh </li>
              <li> source /etc/profile.d/gradle.sh </li>
              <li> gradle -v </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [11] Jenkins 설치(보류) </summary>
          <div className="block2">

            <div className="h2"> 설명 </div>
            <div className="block4">
              <li>  </li>
            </div>

            <div className="h2"> 설치 </div>
            <div className="block4">
              <li> <a href="https://jenkins.io/download/" target="_blank" rel="noopener noreferrer"> 젠킨스 다운로드 홈페이지 </a> </li>
              <li> wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo </li>
              <li> rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key </li>
              <li> yum install jenkins </li>
              <li> vi /etc/sysconfig/jenkins <small> 기본포트 8080이라서 변경필요 </small> </li>
              <div className="block3">
                <li> JENKINS_PORT="9090" 58번째줄에 변경 </li>
              </div>
              <li> service jenkins start <small> 젠킨스 시작 </small> </li>
              <li> service enable jenkins <small> 젠킨스 재시작시 자동 시작 </small> </li>
              <li> service jenkins stop <small> 젠킨스 중단 </small> </li>
              <li> service jenkins restart <small> 젠킨스 재시작 </small> </li>
              <li> vi /var/lib/jenkins/secrets/initialAdminPassword <small> 젠킨스 초기 비번 </small> </li>
              <li> IP주소:9090 으로 접속 </li>
              <li> 비번 입력 - Install Suggested Plugins </li>
              <li> Jenkins 관리 - Global Tool Configuration - JDK - Add JDK - Install automatically </li>
              <li> echo $JAVA_HOME 에서 나오는 빈폴더 이전 경로까지 넣기, 만약에 틀리면 경고메시지가 보임 </li>
              <li> Git - Path to Git executable에 which git 명령어에 나오는 코드 넣기 </li>
              <li> /opt/gradle/gradle-7.0.2/bin <small> echo $GRADLE_HOME에서 나오는 경로에 /bin 추가 </small> </li>
              <li> Save 클릭 </li>
              <li> Jenkins 관리 - 시스템 설정  </li>
              <div className="block3">

                <li> Jenkins URL : 공인 IP 넣기 </li>
                <li> Github_Server </li>
                <li> - Name :  </li>
                <li> - API URL : https://api.github.com </li>
                <li> - Credentials : add 클릭하고 아래 정보 입력후 none에서 jenkins로 변경
                  <div className="block3">
                    <li> Domain : Global credentials (unrestricted) </li>
                    <li> Kind : Secret text </li>
                    <li> Scope : Global (Jenkins, nodes, items, all ....) </li>
                    <li> Secret : 깃허브 토큰 값 </li>
                    <div className="block3">
                      <li> github - settings - Developer settings - Personal access tokens - Generate new token </li>
                      <li> Note에 Jenkins 입력 </li>
                      <li> repo 클릭, admin:repo_hook 클릭, 토큰 생성 클릭 </li>
                      <li> Personal access tokens 값 저장해놓기(다시 확인 불가)  </li>
                      <li>  </li>
                    </div>
                    <li> ID : 커스텀 식별자 넣기 <small> github_cred_id </small> </li>
                    <li> Description : jenkins </li>
                  </div>
                </li>
              </div>
              <li> Test connection 클릭 , Credentials verified for user ~ 와 같이 나오면 성공 </li>
              <li> Manage hooks 체크박스 클릭 <small> 이거는 잘 모르겠음 </small> </li>
              <li> apply 하고 저장 </li>
              <div className="h3"> 젠킨스 프로젝트 생성 </div>
              <li> 새로운 Item - jenkins_test 입력 - Freestyle project - 대시보드 - jenkins_test 클릭 - 구성
                GitHub project 클릭 - Project url에 깃허브 프로젝트 URL 넣기 - 아래쪽에 Git 클릭 - Repository URL에
                깃허브저장소.git 경로 복사해서 넣기 - Credentials에 깃허브 계정정보를 담아서 생성(깃허브 계정 아이디와
                패스워드를 넣어준다) </li>
              <li> GitHub hook trigger for GITScm polling 체크 </li>
              <li> Add build step 클릭 - Invoke Gradle script클릭 - Use Gradle Wrapper 클릭 - Make gradlew executable 클릭
                -  Tasks에 build 입력 - apply - 저장 </li>
              <li> Build Now -  </li>
              <li> /var/lib/jenkins/workspace/jenkins_test/build/libs에 뭐가 있다는데 없다..  </li>
              <li> <a href="https://galid1.tistory.com/466?category=772172" target="_blank" rel="noopener noreferrer">
                무엇인가가 잘못되었다. 다시 찾아보기 </a> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [12] npm 설치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 빌드용도로 npm을 설치하였다. </li>
              <li> yum install npm </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> ========================================= </summary>
        </details>
      </div>

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
          <summary> Apache Tomcat 설치하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 아파치는 웹서버 </li>
            <li> 톰캣(아파치톰캣)은 아파치 재단 하위에 있는 웹서버+어플리케이션서버 </li>

            <h2 className='h2'> 📌 설정 파일 </h2>
            <li> app이라는 폴더는 스스로 만든 폴더이므로 참고  </li>
            <li> /app/server/tomcat/conf/server.xml </li>
            <li> /app/server/tomcat/webapps <small> # html코드 등이 들어있는 공간 </small> </li>
            <li> /app/server/tomcat/bin <small> # tomcat을 실행하고 중단할 수 있는 쉘 스크립트가 있는 공간 </small> </li>

            <h2 className='h2'> 📌 명령어 </h2>
            <li> systemctl enable tomcat.service </li>
            <li> systemctl start tomcat.service </li>
            <li> systemctl stop tomcat.service </li>
            <li> systemctl disable tomcat.service </li>
            <li> systemctl status tomcat.service </li>

            <h2 className='h2'> 📌 아파치 톰캣 v8.5.70 설치 과정 </h2>
            <div className="block4">
              <li> <a href="https://tomcat.apache.org/download-80.cgi" target="_blank" rel="noopener noreferrer"> 아파치 톰캣 다운 주소 </a> </li>
              <li> 1. Core tar.gz 파일을 우측클릭하여 링크 주소를 복사  </li>
              <li> 2. mkdir -p /app/install <small> # tar.gz파일을 저장할 폴더 만들기 </small> </li>
              <li> 3. cd /app/install </li>
              <li> 4. mkdir -p /app/server/tomcat  </li>
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
            <li> 만약에 안된다면 httpd -v <small> httpd가 설치되었는지 확인 </small> </li>

            <h2 className='h2'> 📌 톰캣 삭제 </h2>
            <div className="block4">
              <li> rpm -qa httpd</li>
              <li> rpm -qa | grep http </li>
              <li> yum remove -y httpd </li>
              <li> rpm -qa httpd </li>
              <li>  </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Tomcat 서버(정리) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
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
                <div className="block3">
                  <li> worker.list=worker1 #아파치와-톰캣이 여러개 일 수 있으므로 이름지정 </li>
                  <li> worker.worker1.port=8009 #아파치-톰캣 포트 연동 </li>
                  <li> worker.worker1.host=localhost #아파치 서버의 위치  </li>
                  <li> worker.worker1.type=ajp13 #아파치-톰캣 프로토콜? 연동 </li>
                  <li> worker.worker1.lbfactor=1 #  </li>
                </div>
              </li>
              <li> vi /etc/httpd/conf/uriworkermap.properties
                <div className="block3">
                  <li> /*=worker1 #서브 디렉토리를 모두 worker1이라는 곳에서 참조해라 </li>
                </div>
              </li>
              <li> vi /etc/httpd/conf/httpd.conf
                <div className="block3">
                  <li> "/var/www/html"을 "/app/server/tomcat/webapps" 이걸로 변경 #119번쨰줄 </li>
                </div>
              </li>
              <li> ls -la /app/server/tomcat/webapps #(루트경로처럼 사용) </li>
              <li> 따라 하지 않아도됨 , sed -i "s/^\s*#.//g" /etc/httpd/conf/httpd.conf # 파일안에 주석을 모두 제거 </li>
              <li> 따라 하지 않아도됨 , sed -i "/^$/d" /etc/httpd/conf/httpd.conf # 파일안에 공백제거  </li>
              <li> vim /etc/httpd/conf/httpd.conf
                <div className="block3">
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
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> CentOS7에 아파치 서버 설치하는 방법(정리 필요) </summary>
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
          <summary> telnet 서버 설치하는 방법 </summary>
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

      <ul>
        <span className="lblock">
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ php 설치
              </summary>
              <span className="sblock">
                <h2 className='h2'> 📌 설치 </h2>
                <span className="mblock">
                  <li> yum install gcc glibc glibc-common gd gd-devel -y
                    <li> ps -ef | grep yum | grep -v grep | awk '{'{print $2}'}' | xargs kill -9 2{'>'}/dev/null </li>
                  </li>
                  <li>  yum -y install libxml2-devel </li>
                  <li>  yum -y install sqlite-devel </li>
                  <li>  yum -y install make </li>
                  <li>  mkdir -p /app/install </li>
                  <li>  wget https://www.php.net/distributions/php-8.0.10.tar.gz -O /app/install/php-8.0.10.tar.gz
                    <li>  <a href="https://www.php.net/downloads.php" target="_blank" rel="noopener noreferrer"></a> php설치 주소 </li>
                  </li>
                  <li> mkdir -p /app/temp/php/8.0.10  </li>
                  <li> tar xvfz /app/install/php-8.0.10.tar.gz -C /app/temp/php/8.0.10 --strip-components=1  </li>
                  <li> cd /app/temp/php/8.0.10  </li>
                  <li> ./configure --prefix=/app/dkit/php/8.0.10  </li>
                  <li> make {'&&'} make install  # 매우 오래 걸림 </li>
                  <li> ls -la /app/dkit/php/8.0.10/  </li>
                  <li> /app/dkit/php/8.0.10/bin/php -version  </li>
                  <li> 환경변수 등록하기  </li>
                  <li> cd /app/dkit/php/  </li>
                  <li> ln -Tfs /app/dkit/php/8.0.10 /app/dkit/php/release  </li>
                  <li> rm -rf /app/temp/php/8.0.10  </li>
                  <li> ls -la /usr/bin #윈도우의 환경변수같음  </li>
                  <li> ln -Tfs /app/dkit/php/release/bin/php /usr/bin/php  </li>
                  <li> php -version  </li>
                  <li> ls -la /usr/bin/php  </li>
                  <li>   </li>
                  <li>   </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 워드프레스 설치
              </summary>
              <span className="sblock">
                <h2 className='h2'> 📌 워드프레스 설치 </h2>
                <span className="mblock">
                  <li> pkgs.org 에 가보면 php 5.4나 7까지만 지원 </li>
                  <li> yum -y install epel-release # yum에 올라온 공식적인 패키지가 아닌 unofficial에서
                    third party에 대한 repo서버의 정보가 필요한데 대표적인 사람들의 정보가 존재? </li>
                  <li> yum -y install httpd mariadb mariadb-server </li>
                  <li> yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm #remi 파일에 대해 설치 필요
                    <li> 안된다면 아래와 같이 입력 </li>
                    <li> yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm </li>
                    <li> 안된다면 아래와 같이 한번 받고나서 다시 위에 명령어 입력 </li>
                    <li> rpm -Uvh install http://rpms.remirepo.net/enterprise/remi-release-7.rpm </li>
                  </li>
                  <li> yum -y install php80-php php80-php-mysql </li>
                  <li> systemctl restart mariadb </li>
                  <li> mysql -e "CREATE DATABASE wordpress;" # 데이터베이스 생성 </li>
                  <li> mysql -e "GRANT ALL PRIVILEGES ON wordpress.* TO test@localhost IDENTIFIED BY 'P@ssw0rd"'!'"';" </li>
                  <li> mysql -e "FLUSH PRIVILEGES;" </li>
                  <li> mysql -e "SELECT User,Host FROM mysql.user;"
                    <li> 아래는 할 필요 없음 실수로 비번을 잘못입력하고 워드프레스에 비번 잘못 입력해서 사용 </li>
                    <li> mysql -e "SELECT User,Password From mysql.user;" # 테이블의 유저,유저비번 조회 </li>
                    <li> mysql -e "UPDATE mysql.user Set Password=Password('P@ssw0rd"'!'"') WHERE User='test';" #유저 비번 바꾸기</li>
                    <li> mysql -e "SHOW DATABASES;" </li>
                    <li> mysql -e "DROP DATABASE wordpress;" </li>
                    <li>  </li>
                  </li>
                  <li> vi /etc/httpd/conf/httpd.conf
                    <span className='sblock'>
                      <li> 164번째 줄 index.html 뒤에 index.php 추가 </li>
                      <li> 가장 아래에 추가 </li>
                      <li> AddType application/x-httpd-php .php .html .htm .inc </li>
                      <li> AddType application/x-httpd-php-source .phps </li>
                    </span>
                  </li>
                  <li> systemctl restart httpd </li>
                  <li> mkdir -p /app/install </li>
                  <li> <a href="https://ko.wordpress.org/download/" target="_blank" rel="noopener noreferrer"></a> 워드프레스 홈페이지 </li>
                  <li> wget https://ko.wordpress.org/latest-ko_KR.tar.gz -O /app/install/wordpress.tar.gz </li>
                  <li> mkdir -p /var/www/html/wordpress </li>
                  <li> tar xvfz /app/install/wordpress.tar.gz -C /var/www/html/wordpress --strip-components=1 </li>
                  <li> cd /var/www/html/wordpress/ </li>
                  <li> cd wp-content </li>
                  <li> mkdir uploads # 워드프레스 메뉴얼에 적혀져 있음 </li>
                  <li> cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php </li>
                  <li> vi /var/www/html/wordpress/wp-config.php
                    <span className='sblock'>
                      <li> 'database_name_here' 에 'wordpress' 입력 #데이터베이스 입력 </li>
                      <li> 'username_here' 에 'test' 입력 # DB 사용자 입력 </li>
                      <li> 'password_here' 에 'P@ssw0rd!' 입력 # DB 사용자 비번 입력 </li>
                    </span>
                  </li>
                  <li> systemctl restart httpd </li>
                  <li> setenforce 0 </li>
                  <li> systemctl stop firewalld </li>
                  <li> 브라우저에 192.168.10.80/wordpress 입력해서 나와야 함 </li>
                  <li> 그리고 정보를 입력(비밀번호 바꿀것)  </li>
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ mariaDB 설치 <small>  </small>
              </summary>
              <span className="sblock">
                <h2 className='h2'> 📌  </h2>
                <span className="mblock">
                  <li> CentOS 설치
                    <li> yum -y install mariadb mariadb-server </li>
                    <li> yum -y install php-mysqlnd <small> php와 mariadb를 연동 </small> </li>
                    <li> systemctl restart mariadb </li>
                    <li> mysql <small> mariadb 실행 </small> </li>
                    <li> GRANT ALL PRIVILEGES ON xeDB.* TO xeUser@localhost IDENTIFIED BY '1234'; </li>
                    <li> exit </li>
                    <li>  </li>
                    <li>  </li>
                  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <h2 className='h2'> 📌 사용 </h2>
                <span className="mblock">
                  <li> mysql -u 유저명 -p비번 </li>
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ xpressengine 설치  </summary>
              <span className="sblock">
                <h2 className='h2'> 📌 xpressengine 설치 </h2>
                <span className="mblock">
                  <li> CentOS 설치
                    <li> <a href="https://www.xpressengine.com/download" target="_blank">
                      https://www.xpressengine.com/download </a> 로 가서 xe core 다운로드 - 다운로드 우측클릭 링크 주소 복사 </li>
                    <small> http://download.xpressengine.com/download/18325662/22756225 </small>
                    <li> cd /var/www/html  </li>
                    <li> wget 링크주소URL -O xe.zip </li>
                    <li> unzip xe.zip </li>
                    <li> chmod 707 xe </li>
                    <li> 브라우저 URL에 ip주소/xe 입력 (localhost/xe 입력도 가능) </li>
                    <li> setenforce 0 , 리눅스 보안 끔(일시적, 아래방법은 영구적) </li>
                    <li> <small> vim /etc/sysconfig/selinux , SELINUX=disabled (default=enforcing)로 변경 </small> </li>
                    <li> 창이 나오면 한국어 - 동의 - 다음 - 제일위에 mysql 선택 -  </li>
                    <li> 만약에 퍼미션 에러가 나온다면 chmod 707문제거나 selinux문제이다. 꼭 setenforce 0 해주기 </li>
                    <li> DB아이디, DB비밀번호, DB이름 적어주기 </li>
                    <li> 한국시간으로 설정 Korea Standard Time, Japan Standard Time </li>
                    <li> 이메일주소는 실제 이메일주소를 입력하지 않아도 됨 test@test.com </li>
                    <li> 그러면 사이트가 만들어짐 </li>
                    <li> ftp서버를 설정한 후에는 아래 과정 가능 </li>
                    <li> 우측 관리(톱니바퀴) - 사이트 제작/편집 - 사이트 디자인 설정 - 다른 레이아웃 설치
                      - 이나 Paper 레이아웃 다운로드 버튼 클릭 - 확인(FTP 설정 어쩌구) - 아이디와 비번 입력하고
                      - 고급 아래 화살표 클릭 - 에러발생 - 다시 xe로 접속해서 이나 Paper 레이아웃 다운로드 -
                      이나레이아웃으로 설정하고 저장 한후에 다시 xe로 접속하면 완료 </li>
                  </li>
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
              <summary className="stitle"> ▶ C언어 설치  </summary>
              <span className="sblock">
                <h2 className='h2'> 📌 설치 </h2>
                <span className="mblock">
                  <li> yum install gcc glibc glibc-common gd gd-devel -y </li>
                  <li>  </li>
                </span>
                {/*  */}
                <h2 className='h2'> 📌  </h2>
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
              <summary className="stitle"> ▶ 파이썬 설치
              </summary>
              <span className="sblock">
                <h2 className='h2'> 📌  </h2>
                <span className="mblock">
                  <li> <a href="https://www.python.org/downloads/source/" target="_blank" rel="noopener noreferrer">
                    https://www.python.org/downloads/source/ </a> </li>
                  <li> https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz # 3.9.6 버전 Gzipped 우측클릭 링크복사 </li>
                  <li> mkdir -p /app/temp </li>
                  <li> cd /app/temp </li>
                  <li> wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz </li>
                  <li> ls -la # 파일 확인  </li>
                  <li> tar xvfz ./Python-3.9.6.tgz </li>
                  <li> 설치를 진행하기 위해서는 C언어, make가 설치되어 있어야 한다..
                    <li> yum install gcc glibc glibc-common gd gd-devel -y </li>
                    <li> yum -y install make </li>
                  </li>
                  <li> mkdir -p /app/dkit/python/3.9.6 </li>
                  <li> ./configure --prefix=/app/dkit/python/3.9.6 # 의존성 파일이 있는지 검사 </li>
                  <li> ls -la ./Makefile </li>
                  <li> make # 의존성 파일을 가지고 빌드 파일로 만들어 주는 역할 </li>
                  <li> make install # 빌드 파일을 가지고 실제 설치를 해주는 역할 </li>
                  <li> ls -la /app/dkit/python/3.9.6/bin/ </li>
                  <li> cd /app/dkit/python/3.9.6/bin </li>
                  <li> cd / </li>
                  <li> python --version # 설치한 버전이 다르다는 것을 볼 수 있음(기본적으로 설치된 버전) </li>
                  <li> ls -ld /usr/bin/python
                    <li> 권한을 보면 제일 앞에 l(심볼릭 링크,바로가기)로 되어있는것을 볼 수 있다. </li>
                  </li>
                  <li> cd /app/dkit/python/3.9.6/bin </li>
                  <li> ./python3 --version </li>
                  <li> cd /app/dkit/python </li>
                  <li> ln -Tfs /app/dkit/python/3.9.6/bin/python3 /usr/bin/python3 #전역변수에 바로가기 생성 </li>
                  <li> ln -Tfs /usr/bin/python3 /usr/bin/python </li>
                  <li> python # 파이썬 실행 , exit()를 입력해서 나올 수 있음 </li>
                  <li> yum -y install vsftpd (ftp서버를 설치하려 하지만 에러 발생) </li>
                  <li> vi /usr/bin/yum # 배쉬가 python으로 변경이 된것을 볼 수 있음 </li>
                  <li> 파이썬 2는 지원하나 파이썬 3에서는 yum을 지원하지 않음 </li>
                  <li> 파이썬 버전을 바꾸어주는 쉘 스크립트 만들기
                    <li> mkdir -p /app/script </li>
                    <li> cd /app/script </li>
                    <li> <h2 className='h2'> 📌 vi chvpython.sh </h2>
                      <span className="sblock">
                        <li> #!/bin/bash </li>
                        <li> if [ -n "$1" ]  #공백인지 검사 </li>
                        <li> then
                          <li> PYTHON_VERSION=$1 </li>
                        </li>
                        <li> else
                          <li> echo "Input Change Python Version(2 or 3) :" </li>
                          <li> read PYTHON_VERSION </li>
                        </li>
                        <li> fi </li> <br />
                        <li> {'if [ "${PYTHON_VERSION}" == "2" ]'} </li>
                        <li> then
                          <li> ln -Tfs /usr/bin/python2 /usr/bin/python </li>
                        </li>
                        <li> {'elif [ "${PYTHON_VERSION}" == "3" ]'} </li>
                        <li> then
                          <li> ln -Tfs /usr/bin/python3 /usr/bin/python </li>
                        </li>
                        <li> else
                          <li> echo "Input Vaild Python Version(2 or 3)" </li>
                        </li>
                        <li> fi </li> <br />
                        <li> python --version </li>
                      </span>
                    </li>
                  </li>
                  <li> chmod 755 chvpython.sh </li>
                  <li> ./chvpython  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
        </span>
      </ul>


    </div>
  );
}

export default LinuxCentOS7;