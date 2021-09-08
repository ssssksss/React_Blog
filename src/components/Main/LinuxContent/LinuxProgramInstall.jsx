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
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설치 </span>
                  <span className="mblock">
                    <li> CentOS 설치
                      <li> yum -y --skip-broken install php-* </li>
                    </li>
                    <li>  <small> </small>  </li>
                    <li>  <small> </small>  </li>
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
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 워드프레스 설치 </span>
                  <span className="mblock">
                    <li> CentOS 설치
                      <li> <a href="https://ko.wordpress.org/download/" target="_blank">
                        https://ko.wordpress.org/download/ </a> 로 가서 워프레스 5.@ 다운로드 우측클릭 - 링크주소복사 </li>
                      <small> https://ko.wordpress.org/latest-ko_KR.zip </small>
                      <li> cd /var/www/html  </li>
                      <li> wget 링크주소URL -O wordpress.zip </li>
                      <li> unzip wordpress.zip </li>
                      <li> chmod 707 wordpress </li>
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
                <summary className="stitle"> ▶ unzip 설치 <small>  </small>
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
                      <li> </li>
                      <li> </li>
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
                <summary className="stitle"> ▶ xpressengine 설치 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
                <summary className="stitle"> ▶ C언어 설치 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
        </ul>
      </div>
    </>
  );
}

export default LinuxProgramInstall;