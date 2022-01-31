import React from 'react';

const LinuxProgramInstall = (props) => {

  return (
    <>
      <div className="common_style">
        <ul>
          <span className="lblock">
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ php 설치
                </summary>
                <span className="sblock">
                  <span className="sstitle"> 설치 </span>
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
                <summary className="stitle"> ▶ 워드프레스 설치
                </summary>
                <span className="sblock">
                  <span className="sstitle"> 워드프레스 설치 </span>
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
                <summary className="stitle"> ▶ unzip 설치 <small>  </small>
                </summary>
                <span className="sblock">
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> CentOS 설치
                      <li> yum install unzip </li>
                    </li>
                    <li>  </li>
                  </span>
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ mariaDB 설치 <small>  </small>
                </summary>
                <span className="sblock">
                  <span className="sstitle">  </span>
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
                  <span className="sstitle"> 사용 </span>
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
                  <span className="sstitle"> xpressengine 설치 </span>
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
                <summary className="stitle"> ▶ C언어 설치  </summary>
                <span className="sblock">
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> yum install gcc glibc glibc-common gd gd-devel -y </li>
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
                <summary className="stitle"> ▶ 파이썬 설치
                </summary>
                <span className="sblock">
                  <span className="sstitle">  </span>
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
                      <li> <span className="sstitle"> vi chvpython.sh </span>
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
                <summary className="stitle"> ▶  </summary>
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
        </ul>
      </div>
    </>
  );
}

export default LinuxProgramInstall;