import React, { useEffect, useRef } from 'react';

const LinuxProgramInstall = (props) => {

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