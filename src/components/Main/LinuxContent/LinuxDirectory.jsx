import React, { useEffect, useRef } from 'react';

const LinuxDirectory = (props) => {

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
              <summary className="stitle"> ▶ 리눅스 디렉토리 계층 구조 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ 최상위 디렉토리 / </summary>
                  <span className="mblock">
                    <li> 뿌리 , 윈도우의 C드라이브 같은거 , 디렉토리의 최상단 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ dev </summary>
                  <span className="mblock">
                    <li> 장치 파일이 담긴 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ home </summary>
                  <span className="mblock">
                    <li> 사용자가 사용하는 홈 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ media </summary>
                  <span className="mblock">
                    <li> CD, USB 등 외부장치(마운트)를 사용하는 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ opt </summary>
                  <span className="mblock">
                    <li> 추가 패키지가 설치되는 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ root - [시작시실행파일설정] </summary>
                  <span className="mblock">
                    <li> root계정의 홈 디렉토리, / 와는 다름 </li>
                    <li> .bashrc : 실행될 때 작동하는 파일 , alias 설정을 해놓는 파일
                      <li> alias [별칭]='[명령어] [옵션]' , [su 사용자명] 명령어로 재로그인 해야 설정적용 </li>
                    </li>
                    <small> .bashrc 파일에 alias설정을 해놓으면 우선순위로 적용되어 다른 옵션을 무시하게 된다. </small>
                    <li> </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ sys </summary>
                  <span className="mblock">
                    <li> 리눅스 커널과 관련된 파일이 있는 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ usr </summary>
                  <span className="mblock">
                    <li> 기본 실행 파일과 라이브러리 파일, 헤더 파일 등 많은 파일이 있다. </li>
                    <li> /bin/sh </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ boot </summary>
                  <span className="mblock">
                    <li> 부팅에 필요한 커널 파일을 가지고 있다. </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ etc </summary>
                  <span className="mblock">
                    <li> 리눅스 설정을 위한 각종 파일을 가지고 있다. </li>
                    {/*  */}
                    <li> /passwd : 시스템에 등록된 사용자의 정보들이 감겨있는 파일
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶  [사용자계정 | 패스워드 | UID | GID | comment | 홈디렉토리 | 로그인쉘] </summary>
                          <li> 사용자계정 :   </li>
                          <li> 패스워드 : [ x:shadow에암호화되어저장 | ]  </li>
                          <li> UID : 사용자의 User ID </li>
                          <li> GID : 사용자의 Group ID </li>
                          <li> comment : 기타 정보(일반적으로는 사용자의 이름) </li>
                          <li> 홈디렉토리 : 사용자의 홈 디렉토리 </li>
                          <li> 로그인쉘 : 사용자가 로그인시 사용하는 쉘(bash로 끝나지 않으면 로그인이 불필요한 계정)  </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /shadow : 시스템에 등록된 사용자의 암호화된 패스워드를 저장하는 파일
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ [사용자계정 | 암호화된 패스워드 | ]  </summary>
                          <li> 사용자계정 :   </li>
                          <li> 암호화된 패스워드 : $algorithm_id$salt$encrypted_password
                            <span className="mblock">
                              <li> algorithm_id : 해시 알고리즘 [1:MD5, 2:BlowFish, 5:SHA-256, 6:SHA-512 ] </li>
                              <li> salt : 해쉬 암호화에 추가되는 랜덤값 </li>
                              <li> encrypted_password :
                                <li> * : 패스워드가 잠긴 상태이고  로그인 불가 </li>
                                <li> ! : 패스워드가 잠신 상태이고 로그인 불가 또는 사용자를 생성하고 패스워드를 설정하지 않은 상태 </li>
                                <li> empty : 패스워드가 설정되지 않았지만 로그인이 가능 </li>
                              </li>
                              <li>  </li>
                            </span>
                          </li>
                          <li> 마지막 비번 변경 날짜 : 1970년 1월 1일 이후를 기준으로 며칠이 지났는지 표시  </li>
                          <li> 패스워드 최소 사용기간 : 변경한 후에 최소 사용기간 동안 사용하지 않으면 변경불가  </li>
                          <li> 패스워드 최대 사용기간 : 패스워드의 만료기간  </li>
                          <li> 경고 : 패스워드 만료되기전에 경고할 일수  </li>
                          <li> 비활성화 : 패스워드 만료된후에 비활성화 일수, 기간이 지나면 잠김  </li>
                          <li> 만료일 : 계정 만료일 , 1970년 1월 1일 기준  </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /securetty : 루트가 로그인이 가능한 터미널 목록을 정의해둔 파일
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ /bin/login 프로세스가 현재 파일을 참조하여 사용  </summary>
                          <small>  </small>
                          <li> tty(TeleTYpewriter) : 콘솔이나 터미널을 의미 </li>
                          <li> pts(Pseudo TTY Slave) : 네트워크를 통해 원격접속 했을때 열리는 터미널 </li>
                          <li> ttyS : 시리얼 라인 또는 모뎀을 통했을때 허용하는 터미널 </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /ssh/sshd_config
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ ssh의 설정을 가진 파일  </summary>
                          <li>  PermitRootLoing yes #root로그인을 막는 설정 </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /group
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ 사용자의 그룹들을 모아놓은 파일  </summary>
                          <li> sudo groupadd 그룹명 , #그룹을 생성 </li>
                          <li> sudo groupdel 그룹명 , #그룹을 삭제  </li>
                          <li> sudo gpasswd 그룹명 , #그룹의 암호를 설정(사용자가 그룹에 로그인하기 위해 설정)  </li>
                          <li> sudo gpasswd -r 그룹명 , #그룹의 암호를 제거  </li>
                          <li> sudo gpasswd -A 사용자명 그룹명 , #그룹의 관리자를 사용자로 설정  </li>
                          <li> sudo gpasswd -a 사용자명 그룹명 , #그룹에 사용자를 포함시킴  </li>
                          <li> sudo gpasswd -d 사용자명 그룹명 , #그룹에서 사용자를 제외 시킴  </li>
                          <li> sudo usermod -a -g 사용자명 그룹명 , #사용자의 그룹을 변경  </li>
                          <li> sudo usermod -a -G 사용자명 그룹명 , #사용자의 주 그룹 + 그룹을 하나 추가  </li>
                          <li> newgrp 그룹명 , #다른 그룹으로 로그인  </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /etc/default/useradd
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ 사용자 생성 설정  </summary>
                          <li> GROUP : 기본등록 그룹의 GID , 100 </li>
                          <li> HOME : 생성될 홈 디렉토리의 위치 , /home </li>
                          <li> INACTIVE : 패스워드 만료 이후의 유효기간 설정 , 1  </li>
                          <li> EXPIRE : 계정 종료일 지정 , 1 </li>
                          <li> SHELL : 기본 사용 쉘 지정 , /bin/bash </li>
                          <li> SKEL : 홈 디렉토리에 복사할 기본환경파일위치(사용자가 생성될 때 자동으로 홈 디렉토리에 자동으로 추가되는 파일들을 담은 폴더) , /etc/skel </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /etc/login.defs
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶ 사용자 계정 설정과 관련된 기본 값을 정의한 파일 </summary>
                          <li> MAIL_DIR : 기본 메일 디렉토리 , # /var/spool/mail  </li>
                          <li> PASS_MAX_DAYS : 패스퉈드 최대 사용일 , # 99999 </li>
                          <li> PASS_MIN_DAYS : 패스워드 최소 사용일 , # 0 </li>
                          <li> PASS_MIN_LEN	 : 패스워드 최소 길이 , # 5 </li>
                          <li> PASS_WARN_AGE : 패스워드 만료 경고일 , # 7 </li>
                          <li> UID_MIN , UID_MAX : 사용자 계정 UID범위 , # 1000,60000 </li>
                          <li> SYS_UID_MIN , SYS_UID_MAX : 시스템 계정 UID범위 , # 210 , 999 </li>
                          <li> GID_MIN , GID_MAX : 사용자 계정 GID범위 , # 1000,60000 </li>
                          <li> SYS_GID_MIN , SYS_GID_MAX : 시스템 계정 GID범위 , # 210 , 999 </li>
                          <li> CREATE_HOME : 홈 디렉토리 생성 여부 , # yes  </li>
                          <li> UMASK : umask 값 설정(권한설정) , # 077 , 허가권=777-unmask값 </li>
                          <li> USERGROUPS_ENAB : 사용자 계정 삭제시 그룹 삭제 여부 , # yes  </li>
                          <li> ENCRYPT_METHOD : 암호화 기법 , # SHA512  </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                    <li> /
                      <span className="sblock">
                        <details>
                          <summary className="sstitle"> ▶   </summary>
                          <li>   </li>
                          <li>   </li>
                        </details>
                      </span>
                    </li>
                    {/*  */}
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ lost+found </summary>
                  <span className="mblock">
                    <li> 파일 시스템에 문제가 발생하여 복구할 경우 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ mnt </summary>
                  <span className="mblock">
                    <li> 파일 시스템을 임시로 마운팅 하는 디렉토리 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ proc </summary>
                  <span className="mblock">
                    <li> 프로세스 정보 등 커널 관련 정보가 저장되는 디렉토리 </li>
                    <li> ls -la /proc : 현재 작동되는 프로세스들을 보여줌 </li>
                    <li> ls -la /proc/PID번호 : PID번호에 맞는 프로세스 파일들을 보여줌 </li>
                    <li> ls -la /proc/$$/fd : 파일 디스크립터  </li>
                    <li> exec 0&lt;&amp;- : 0번 표준입력을 꺼버림 , 문제가 발생  </li>
                    <li> exec 1&lt;&amp;- : 1번 표준입력을 꺼버림 , 문제가 발생  </li>
                    <li> exec 2&lt;&amp;- : 2번 표준입력을 꺼버림 , 문제가 발생  </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ run </summary>
                  <span className="mblock">
                    <li> 실행 중인 서비스와 관련된 파일이 저장 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ srv </summary>
                  <span className="mblock">
                    <li> FTP나 Web 등 시스템에서 제공하는 서비스의 데이터가 저장된다. </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ tmp </summary>
                  <span className="mblock">
                    <li> 시스템에 사용중에 발생하는 임시데이터 저장공간, 재부팅 되면 모두 삭제 </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ var </summary>
                  <span className="mblock">
                    <li> 시스템 운영 중에 발생하는 데이터나 로그 등이 저장되는 디렉토리 </li>
                  </span>
                </details>
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

export default LinuxDirectory;