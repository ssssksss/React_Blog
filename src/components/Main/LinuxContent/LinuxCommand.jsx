import React, { useEffect, useRef } from 'react';

const LinuxCommand = (props) => {

  function logit() {

    //위치 계산
    let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
    let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
      document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
    let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
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
            <a href="#main" className="col_b"> <b> 리눅스 명령어 </b> </a>
            <button className="lblocknav_btn2" onClick={() => {
              document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
              document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
            }}> ❌ </button>
          </span>
          <div className="hyperlink">
            <details open>
              <summary> 목록 </summary>
              {/*  */}
              <summary className="col_g"> cd,ls,mkdir,cp,mv,rm,pwd,halt,shutdown </summary>
              <a href="#기타 명령어" className="col_p"> 기타 명령어 </a>
              <a href="#cd 명령어" className="col_p"> cd 명령어 #디렉토리 위치로 이동 </a>
              <a href="#ls 명령어" className="col_p"> ls 명령어 #디렉토리,파일 정보출력 </a>
              <a href="#mkdir 명령어" className="col_p"> mkdir 명령어 #디렉토리 생성  </a>
              <a href="#cp 명령어" className="col_p"> cp 명령어 #파일이나 디렉토리 복사 </a>
              <a href="#mv 명령어" className="col_p">  mv 명령어 #(파일,디렉토리) 이동,이름변경 </a>
              <a href="#rm 명령어" className="col_p"> rm 명령어 #파일이나 디렉토리를 삭제 </a>
              <a href="#pwd 명령어 " className="col_p"> pwd 명령어 #현재 위치 절대경로 출력 </a>
              <a href="#halt 명령어" className="col_p"> halt 명령어 #리눅스 시스템 종료 </a>
              <a href="#shutdown 명령어" className="col_p"> shutdown 명령어 #리눅스 시스템 종료 </a>
              <a href="#w 명령어" className="col_p"> w 명령어 # 서버에 접속한 사용자 접속,작업 정보 </a>
              <a href="#grep 명령어" className="col_p"> grep 명령어 #파일들에서 하나이상의 내용을 검색  </a>
              <a href="#find 명령어" className="col_p"> find 명령어 #파일,디렉토리를 검색 </a>
              <a href="#group 명령어" className="col_p"> group 명령어 </a>
              <a href="#user 명령어" className="col_p"> user 명령어 </a>
              <a href="#AWK 명령어" className="col_p"> AWK 명령어 </a>
              <a href="#sed 명령어" className="col_p"> sed 명령어 </a>
              <a href="#lasttr 명령어" className="col_p"> lasttr 명령어 </a>
              <a href="#chattr 명령어" className="col_p"> chattr 명령어 </a>
              <a href="#echo 명령어" className="col_p"> echo 명령어 </a>
              <a href="#chmod 명령어" className="col_p"> chmod 명령어 #파일 사용권한 변경 </a>
              <a href="#chown 명령어" className="col_p"> chown 명령어 #파일,디렉토리의 소유자 변경 </a>
              <a href="#rpm 명령어" className="col_p"> rpm 명령어 </a>
              <a href="#yum 명령어" className="col_p"> yum 명령어 </a>
              <a href="#lsof 명령어" className="col_p"> lsof 명령어 </a>
              <a href="#" className="col_p">  </a>
              {/*  */}
            </details>
          </div>
        </div>
      </div>
      <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
        <span className="lblock">
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 기타 명령어  <a name="기타 명령어" style={{ visibility: "hidden" }}> 기타 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 기타 명령어 </span>
                <span className="mblock">
                  <li> command [-단일문자옵션] [--다중문자옵션] </li>
                  <li> dir : 현재 디렉토리에 파일 목록을 조회 </li>
                  <li> clear : 터미널창을 초기화 </li>
                  <li> history : 입력했던 값들을 볼수 있음 (grep으로 이용해서 찾으면 편함) </li>
                  <li> touch 파일명 : 파일을 생성 </li>
                  <li> file [파일명,디렉토리] : 파일의 종류를 알려줌 </li>
                  <li> cat [파일명] : 파일의 내용을 보여줌 </li>
                  <li> cat -n [파일명] : 파일의 내용을 행번호를 붙여서 보여줌 </li>
                  <li> df -k : 분할된 영역이나 사용량을 볼 수 있는 명령어? </li>
                  <li> HEREDOC (sh,csh,Tcsh,ksh,bash,zsh에서 지원 , 별도의 파일인 것처럼 동작 , 표준입력으로 동작, 주석의 용도로 사용)
                    <li> &lt;&lt;[구문문자 식별자] </li>
                    <li> [내용] </li>
                    <li> [구문문자 식별자] </li>
                    <li></li>
                    <li> &lt;&lt;["구문문자 식별자"] , # 쌍따옴표로 감쌀경우 특수문자가 일반문자로 인식이 된다. </li>
                    <li> [$내용] </li>
                    <li> $(printf '\t') </li>
                    <li> [구문문자 식별자] </li>
                  </li>
                  <li> 탭키 : 자동완성 </li>
                  <li> 탭 2번 연속 : 입력가능한 파일 목록을 보여줌 </li>
                  <li> ./test.sh 매개변수(start, stop, restart) , #이와 같이 사용 </li>
                  <li> 리다이렉션
                    <li> [내용] &gt; [파일명] : 파일이 생성되면서 내용이 추가됨 , 기존의 파일이 존재하면 덮어쓰기됨 </li>
                    <li> [내용] &gt;&gt; [파일명] : 파일이 생성되면서 내용이 추가됨 , 기존의 파일이 존재한다면 하단에 추가됨 </li>
                    <li> cat [파일] 1&gt; [파일명]  : 파일이 생성되면서 표준출력이 추가됨 , 기존의 파일이 존재하면 덮어쓰기됨 </li>
                    <li> cat [파일] 2&gt; [파일명] : 파일이 생성되면서 표준에러가 추가됨 , 기존의 파일이 존재하면 덮어쓰기됨 </li>
                    <li> cat [파일] 1&gt; [파일명] 2&gt;&amp;1  : 표준출력과 에러가 추가됨 , 기존의 파일이 존재하면 덮어쓰기됨 </li>
                    <li> cat [파일] 1&gt; [파일명] 2&gt;/dev/null  : 표준출력 추가, 표준에러 버림 , 기존의 파일이 존재하면 덮어쓰기됨 </li>
                  </li>
                  <li>  </li>
                  <li> more [디렉토리] : 화면의 크기를 계산해서 일정 %로 보여주고 엔터를 눌러서 한줄씩 더 볼수 있음 </li>
                  <li> less [디렉토리] : 화면의 크기를 계산해서 일정부분 보여준다. </li>
                  <small> j: 한줄씩 다음행, k: 한줄씩 이전행, spacebar : 다음화면 , b : 이전화면 , q : 종료 </small>
                  <small> cat -n [디렉토리] | more이나less 사용 가능 </small>
                  <li> tail [디렉토리] : 디렉토리 파일에서 뒷부분의 10줄을 읽어준다. </li>
                  <li> tail -n : 디렉토리 파일에서 뒷부분의 n줄을 읽어준다. </li>
                  <li> tail -f : 파일 출력이 종료되지 않고 주기적으로 계속 출력된다. </li>
                  <li> head : 디렉토리 파일에서 앞부분의 10줄을 읽어준다. </li>
                  <li> ps -ef | head -10 </li>
                  <li> --color=[none,auto,always] #ansi escape 색을 따름? </li>
                  <small> echo $GREP COLOR (grep색깔확인) , export GREP_COLOR=22 (grep색깔변경</small>
                  <li> passwd 계정명 : 계정의 패스워드를 설정 </li>
                  <li> umask -S, umask : 기본 퍼미션을 보는방법  </li>
                  <li> umask 022 : 기본 퍼미션값을 변경 (보안 권고사항 022 이상의 숫자사용) </li>
                  <li> stat [파일명] : 파일에 대한 정보를 알려줌
                    <li> atime이 변할 때 : cat와 같이 접근을 하면 변경 </li>
                    <li> mtime이 변할 때 : vi편집기로 수정을 했다면 변경 </li>
                    <li> ctime이 변할 때 : Inode가 변경될 떄 변경 <small> Inode가 변할 때 : chmod, chown이 변경될 때 </small> </li>
                  </li>
                  <li>  </li>
                  <li> alias
                    <span className="sblock">
                      <span className="sstitle"> alias 명령어='명령어 옵션' </span>
                      <small> 재시작하면 유지가 되지 않음 </small>
                      <small> ls -ld /root/.bashrc #이곳에서 설정을 추가해야 영구적 </small>
                      <li> alias cat='cat -n' #정보를 출력할 때 줄번호를 붙여줌 </li>
                      <li>  </li>
                    </span>
                  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 단축키 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> Ctrl + A,E : 커서를 줄 앞뒤로 이동 </li>
                  <li> Ctrl + F,B : 커서를 글자 앞뒤로 이동  </li>
                  <li> ALT + F,B : 커서를 단어 앞뒤로 이동 </li>
                  <li> Ctrl+ P,N : 커서를 위아래로 이동 </li>
                  <li> Ctrl + L : 화면을 지우고 커서를 제일 왼쪽으로 </li>
                  <li> Ctrl + D : 현재 글자 지우기 </li>
                  <li> Ctrl + K : 현재부터 그 줄 끝까지 지우기 </li>
                  <li> Ctrl + U : 현재부터 그 줄 처음까지 지우기 </li>
                  <li> ALT + D :  </li>
                  <li> ALT + BackSpace : 현재 위치부터 그 단어 앞까지 삭제 </li>
                  <li> Ctrl + Y : 잘라낸 텍스트를 현재 위치에 삽입 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ cd 명령어 <small> 지정한 디렉토리 위치로 이동  </small>
                <a name="cd 명령어" style={{ visibility: "hidden" }}> cd 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> cd [디렉토리경로]  </li>
                  <li> - : 이전의 경로로 이동  </li>
                  <li> . : 현재 디렉토리로 이동 </li>
                  <li> .. : 상위 디렉토리로 이동  </li>
                  <li> ~ : 현재 계정의 홈 디렉토리로 이동 </li>
                  <li> / : 최상위 디렉토리로 이동 </li>
                  <li> /경로1/경로2 : 절대경로로 찾아서 이동 </li>
                  <li> /경로1/경로* : 조건을 만족하는 첫번째 경로로 이동 </li>
                  <li> 경로1* : 상대경로로 찾아서 이동 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ ls 명령어 <small> 디렉토리,파일 정보출력  </small>
                <a name="ls 명령어" style={{ visibility: "hidden" }}> ls 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> ls [옵션s] [파일명]  </li>
                  <li> -a : 숨겨진 파일까지 출력 , .을 포함하여 경로 안의 모든 내용을 출력 </li>
                  <li> -A : 숨겨진 파일까지 출력 ,  .과 ..을 제외한 모든 내용을 출력 </li>
                  <li> -l : 파일의 상세정보 까지 출력
                    <span className="sblock">
                      <details> {/* [file,user,group,guest] | link | user | group | size | date | name  */}
                        <summary className="stitle"> ▶ [file,user,group,guest] | link | user | group | size | date | name </summary>
                        <li> [file] : -(일반파일), d(다랙토리) , c(character 장치파일), b(block 장치파일), p(명명된파이프), l(심볼릭링크파일), s(소켓파일) </li>
                        <li> [user,group,guest] : 사용자권한, 그룹권한, 그외권한, rwx(읽기쓰기실행) </li>
                        <li> link : 연결된 링크수</li>
                        <li> user : 사용자 이름 </li>
                        <li> group : 그룹 이름 </li>
                        <li> size : 크기 </li>
                        <li> date : 생성날짜 </li>
                        <li> name : 파일명 </li>
                      </details>
                    </span>
                  </li>
                  <li> -d(+l) : 현재 디렉토리의 상세정보를 표시 </li>
                  <li> -h(+l) : 사람이 보기쉽게 파일의 크기를 출력 </li>
                  <li> -r : 하위 디렉토리까지 출력 </li>
                  <li> -R : 하위 디렉토리의 내용까지 출력 </li>
                  <li> -k , -s : kb단위로 크기 출력 </li>
                  <li> -m : 쉼표로 구분하여 출력 </li>
                  <li> -i : 첫 번째 행에 inode 번호를 출력 </li>
                  <li> -r : 역순으로 출력 </li>
                  <li> -t : 최종수정시간 순서로 출력 </li>
                  <li> -u(+l) : 최종엑세스시간 순서로 출력 </li>
                  <li> -F : 디렉토리에 있는 파일의 종류와 내용을 출력한다. ( * : 실행파일 , / : 디렉토리 파일 , @ : 심벌릭 링크)  </li>
                  <li> -L : 심볼릭 링크 파일의 경우 원본 파일의 정보를 출력  </li>
                  <li> -ld 파일명 : 파일명을 조회해서 자세한 정보를 출력  </li>
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> ls -al 파일명,디렉토리 </li>
                    <li> ls -l --time-style="+%Y%m%d" | awk '{'{print $6" "$7}'}' , 파일,디렉토리 생성일을 년월일로 보여준다. </li>
                  </span>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ mkdir 명령어 <small> 디렉토리 생성 </small>
                <a name="mkdir 명령어" style={{ visibility: "hidden" }}> mkdir 명령어 </a>  </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> mkdir [옵션s] [생성할디렉토리명]  </li>
                  <li> -m [777] : 디렉토리생성할 때 권한생성 , default=755 </li>
                  <li> -p /경로/경로 : 상위 경로가 존재하지 않으면 한꺼번에 생성 </li>
                  <li> -v : 디렉토리를 생성후에 메시지를 출력 </li>
                  <li> --version : mkdir의 버전 출력 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ cp 명령어 <small> 파일이나 디렉토리 복사 </small>
                <a name="cp 명령어" style={{ visibility: "hidden" }}> cp 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> cp [옵션s] [파일명] [파일명] , [파일명s] [디렉토리] , [디렉토리] [디렉토리] </li>
                  <li> [파일명1] [파일명2] [디렉토리2] : 파일명1,파일명2를 디렉토리2로 복사한다. </li>
                  <li> -i [파일명1] [파일명2] : 복사를 하면 물어봄 </li>
                  <li> -f [파일명1] [파일명2] : 강제적으로 복사 , 이미 존재하면 덮어쓰기 </li>
                  <li> -r [디렉토리1] [디렉토리2] : 디렉토리1에 있는 파일을 모두 디렉토리2로 복사한다. </li>
                  <li> -l : 심볼릭링크 형식으로 복사 </li>
                  <li> -P : 원본 파일명에 디렉토리 경로도 같이 입력했다면 경로 그대로 복사 </li>
                  <li> -p : 원본파일의 사용자,그룹,권한,시간 정보들을 그대로 복사 </li>
                  <li> -v : 복사 상태를 출력 </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> cp file1 file2 </li>
                    <li> cp /test/test1/file1 /test/test2  </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ mv 명령어  <small> (파일,디렉토리) 이동,이름변경 </small>
                <a name="mv 명령어" style={{ visibility: "hidden" }}> mv 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> mv [옵션s] [파일명]  </li>
                  <li> -f : 강제로 이동 </li>
                  <li> [파일명1] [파일명1] : 파일명1을 파일명2로 이름을 바꾸기 </li>
                  <li> [디렉토리1] [디렉토리2] : 로 이름을 바꾸기 </li>
                  <li> -t : 전체 원본 파일을 대상 디렉토리로 이동 </li>
                  <li> -n : 존재하는 파일을 덮어쓰지 않음 </li>
                  <li> -v : 이동이나 이름바꾸는 정보를 출력 </li>
                  <li> -i : 존재하는 파일을 덮어쓸 경우 물어봄 </li>
                  <li>  </li>
                  {/*  */}
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> mv test1.txt test2.txt #파일의 이름을 바꿈 </li>
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ rm 명령어 <small> 파일이나 디렉토리를 삭제 </small>
                <a name="rm 명령어" style={{ visibility: "hidden" }}> rm 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> rm [옵션s] [파일명]  </li>
                  <small> testdisk라는 프로그램으로 복구가 가능하다고 한다. (포렌식에서 사용) </small>
                  <li> -r , -R : 디렉토리를 삭제하는 방법 , 이 옵션을 추가하지 않으면 디렉토리를 삭제할 수 없음 </li>
                  <li> -d : 빈 디렉토리만 제거 </li>
                  <small> rmdir이라는 명령어는 빈 디렉토리를 삭제하는 명령어이지만 안전하게 빈 디렉토리들만을 삭제하는 데 유용하지만
                    잘 사용하지는 않는다.  </small>
                  <li> -f : 강제로 파일이나 디렉토리를 삭제 </li>
                  <li> -i : 삭제할 때 마다 물어봄 </li>
                  <li> -v : 지워지는 파일의 정보를 출력 </li>
                  <li> [파일명1] [파일명2] .. : 파일명1, 파일명2를 삭제  </li>
                  {/*  */}
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> rm -rf ab* : ab이름으로 시작하는 모든 파일과 디렉토리를 삭제 </li>
                    <li> rm -rf ./* : 현재 경로에 있는 모든 파일과 디렉토리를 삭제 </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ pwd 명령어  <small> 현재 위치 절대경로 출력 </small>
                <a name="pwd 명령어" style={{ visibility: "hidden" }}> pwd 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> pwd [옵션]  </li>
                  <li> -L : 심볼릭 포함, pwd 환경변수 사용</li>
                  <li> -P : 심볼릭 정보를 포함 </li>
                  {/*  */}
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ halt 명령어 <small> 리눅스 시스템 종료 </small>
                <a name="halt 명령어" style={{ visibility: "hidden" }}> halt 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> halt [옵션s]  </li>
                  <li> -f : 강제로 종료 </li>
                  <li> -d : wtmp 파일에 로그를 남기지 않음 </li>
                  <li> -n : 종료할 때 싱크를 하지 않음 </li>
                  <li> -w : /var/log/wtmp에 파일에 로그를 남기고 , 실제 종료를 하지 않음 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ shutdown 명령어 <small> 리눅스 시스템 종료 </small>
                <a name="shutdown 명령어" style={{ visibility: "hidden" }}> shutdown 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> shutdown [옵션s] [시간]  </li>
                  <li> -r [+시간] : 시스템 종료후 재부팅 , 단위는 분 </li>
                  <li> -h : shutdown이 완료된후 시스템을 종료 </li>
                  <li> -k : 경고메세지만 출력 , 실제로 종료되지 않음 </li>
                  <li> -f : 재부팅을 빠르게 진행 </li>
                  <li> -c : 시스템 종료/재시작 예약 취소  </li>
                  <li> 시간 : +m(분) , hh:mm(시분) , now(지금) </li>
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> shutdown -h 1 #1분뒤 종료</li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ w 명령어 <small> 서버에 접속한 사용자 접속,작업 정보 </small>
                <a name="w 명령어" style={{ visibility: "hidden" }}> w 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> w [옵션s] [파일명]  </li>
                  {/*  */}
                  <li> w 명령어
                    <span className="sblock">
                      <details>
                        <summary className="stitle"> ▶ USER | TTY | FROM | LOGIN@ | IDLE | JCPU | PCPU | WHAT  </summary>
                        <small> 현재시간 현재 접속한 사용자, 시스템 실행 시간 , 1,5,15분 동안 시스템 로드 평균시간 </small>
                        <li> USER : 서버 접속 계정 </li>
                        <li> TTY : 접속 TTY 명 </li>
                        <li> FROM : 접속한 IP 주소 </li>
                        <li> LOGIN@ : 접속자 로그인 시간 </li>
                        <li> IDLE : 최종 명령 수행 후의 대기시간 </li>
                        <li> JCPU : TTY필드에서 사용하는 장치의 모든 프로세스의 CPU 사용시간 출력 </li>
                        <li> PCPU : what필드에 나타나는 프로세스의 CPU 총 사용시간을 출력 </li>
                        <li> WHAT : 접속자 현재 사용 명령어 </li>
                      </details>
                    </span>
                  </li>
                  {/*  */}
                  <li> -h : 헤더를 제외하고 출력 </li>
                  <li> -s : LOGIN@ , JCPU, PCPU 를 제외한 값 출력 </li>
                  <li> -f : from을 제외한 값 출력 </li>
                  <li> -i : 호스트 이름 일 때 from에 IP주소로 표기  </li>
                  <li> -o : IDLE,JCPU,PCPU에 값이 1분 보다 작으면 빈칸으로 출력 </li>
                  <li> - :  </li>
                  {/*  */}
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ grep 명령어 <small> 파일들에서 하나이상의 내용을 검색 </small>
                <a name="grep 명령어" style={{ visibility: "hidden" }}>  grep 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <small>  </small>
                  <li className="sstitle"> grep [옵션s] [검색내용] [파일명]  </li>
                  <li> -i : 대소문자 구분없이 검색 </li>
                  <li> -l : 검색패턴과 일치하면 파일명을 출력 </li>
                  <li> -n :  검색패턴과 일치하면 출력 값에 줄 번호를 붙여서 출력 </li>
                  <li> -v :  검색내용을 제외한 정보 출력 </li>
                  <li> -c :  패턴과 일치하는 라인 수 출력 </li>
                  <li> -w :  단어단위의 패턴을 사용하여 검색 </li>
                  <li> --color=[none,auto,always] "찾을내용" 파일명 : 찾는 내용을 컬러로 표현해줌 </li>
                  <li> -E : 정규식을 사용하겠다.  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> cat /etc/passwd | grep "14" #표준출력을 파일로 만들지 않고도 파이프(|)를 이용해서 원하는 내용을 찾음 </li>
                    <li> grep --help | grep -E '\-.,' # \:정규식문자로 사용하겠다. , .:모든문자 ,: 모르겠다. </li>
                    <li> grep --help | grep --color=always -E '\-.,' | head -10 #always로 해야 파이프로 넘겼을 때 색깔로 표시가됨 </li>
                    <li> 문장~~~ | grep -E "^abc" , # "abc"로 시작하는 문장을 찾음 </li>
                    <li> 문장~~~ | grep -E "abc$" , # "abc"로 끝나는 문장을 찾음 </li>
                    <li> 문장~~~ | grep -E "[12]" , # 1이나 2가 들어간 문장을 찾음 </li>
                    <li> 문장~~~ | grep -E "{'a{2,3}'}" , # a가 2나3회 입력이 된 문장을 찾음 </li>
                    <li> ifconfig | grep -A 2 ens | grep "inet " | awk ' {'{ printf $2 }'} , #본인의 IP주소만을 가져옴 </li>
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ find 명령어 <small> 지정한 위치에서 조건에 맞는 파일을 찾는다. </small>
                <a name="find 명령어" style={{ visibility: "hidden" }}> find 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> find [경로] [옵션] [정규식/표현] </li>
                  <li> -name 파일명 : 파일이름으로 검색  </li>
                  <li> -type 파일종류 : 파일종류로 검색 </li>
                  <small> d:디렉토리, f:일반파일, l:링크파일, b:블록디바이스, c:캐릭터디바이스, p:파이프디바이스, s:소켓파일 </small>
                  <li> -user 사용자ID : 사용자가 소유한 모든 파일을 검색  </li>
                  <li> -perm 775 : 접근권한과 일치하는 파일을 검색 </li>
                  <li> -group : 그룹 소유의 모든 파일이나 디렉토리를 검색  </li>
                  <li> -uid : UID소유의 파일이나 디렉토리를 검색(아이디번호로) </li>
                  <li> -gid : UID소유의 파일이나 디렉토리를 검색(그룹번호로) </li>
                  <li> -atime [n,+n,-n] : n일 이전, n보다 오래된, 지금부터 n일내로 접근한 파일들을 검색 </li>
                  <li> -ctime n : 퍼미션(권한 등)이 변경되었을 때 </li>
                  <li> -mtime n : 내부 내용이 수정된 시간 기준으로 검색 </li>
                  <li> -mmin n : 분(시간)을 기준으로 검색 </li>
                  <li> -empty : 빈 파일을 찾음 </li>
                  <li> -size n : n블록 길이의 파일을 검색 </li>
                  <li> -exec :  </li>랴
                  <li> -ls : ls -l </li>
                  <li> -inum n :  </li>
                  <li> -iname :  </li>
                  <li> -maxdepth n : 현재 디렉토리부터 n깊이 만큼 디렉토리를 검색 </li>
                  <li> -mindepth n : n번째 하위디렉토리부터 하위디렉토리르 검색 </li>
                  <li> -prune :  </li>
                  <li> -newer :  </li>
                  <li> -cnewer :  </li>
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li> find /app -name "abc.*" #app경로에 abc.으로 시작하는 폴더를 검색 </li>
                    <li> find /app -name "abc.*" type -d #app경로에 abc.으로 시작하고 파일유형이 디렉토리인 폴더를 검색 </li>
                    <li> find /app "abc.*" | head -10  </li>
                    <li> find . -name "*.txt" -mtime +10 -delete #수정시간이 10일이상된 오래된 파일을 삭제 </li>
                    <li> find . -size +100k #파일100kb이상 검색 </li>
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ group 명령어 <small> 권한 그룹 </small>
                <a name="group 명령어" style={{ visibility: "hidden" }}>  group 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> groups [사용자]  </li>
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
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ user 명령어 <small>  </small>
                <a name="user 명령어" style={{ visibility: "hidden" }}>  user 명령어 </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle"> useradd [옵션s] [계정이름] , useradd [계정이름] , adduser [옵션s] [계정이름] , adduser [계정이름] </li>
                  <li> [계정이름] : 계정을 생성 </li>
                  <li> -p :  </li>
                  <li> -d : 홈 디렉토리를 지정할 떄 사용, 중간 경로는 생성을 해주지 않는다. </li>
                  <li> -u : 사용자 추가시 UID 지정 </li>
                  <small> useradd -u UID번호 계정명 </small>
                  <li> -g : 그룹(GID)을 지정할 때 사용 </li>
                  <li> -G : 2번쨰 그룹(GID)을 지정할 때 사용 </li>
                  <li> -c : 사용자 생성 시 사용자에 대한 설명을 설정 </li>
                  <li> -s : 사용자 생성 시 사용자가 사용할 셸을 지정 </li>
                  <li> -D : /etc/default/useradd에 설정된 유저 추가와 관련된 기본 사항들을 보여준다. </li>
                  <li> -m : 사용자 생성시 홈 디렉토리를 생성해주는 옵션 </li>
                  <li> -k : 사용자 생성 시 제공되는 파일은 기본적으로 /etc/skel에 있는데 이외으 디렉토리를 지정할 때 사용  </li>
                  <li> -f : 패스워드의 만기일을 날짜로 지정 </li>
                  <li> -e : 계정의 만기일을 YYYY-MM-DD 형식으로 지정 </li>
                  <small>  </small>
                  <li> </li>
                  {/*  */}
                  <li> 소제목
                    <span className="sblock">
                      <details>
                        <summary className="stitle"> ▶   </summary>
                        <li>   </li>
                      </details>
                    </span>
                  </li>
                  {/*  */}
                  <li> - :  </li>
                  {/*  */}
                </span>
                {/*  */}
                <span className="mblock">
                  <span className="sstitle"> 사용 예시 </span>
                  <span className="sblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 네트워크 설정 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle">vi /etc/sysconfig/network-scripts/ifcfg-ens33  </span>
                <span className="mblock">
                  <li> BOOTPROTO="dhcp" #dhcp서버를 이용 </li>
                  <li> ONBOOT="yes" #부팅을 할 때 자동으로 시작을 할 것인지 설정 </li>
                </span>
                {/*  */}
                <span className="sstitle"> systemctl restart network </span>
                <span className="mblock">
                  <li> 네트워크 재시작 </li>
                </span>
                {/*  */}
                <span className="sstitle"> ifconfig </span>
                <span className="mblock">
                  <li> 네트워크 인터페이스 확인 , ip, mac 등등 </li>
                </span>
                {/*  */}
                <span className="sstitle"> ip addr </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> ip route </span>
                <span className="mblock">
                  <li> 본인 컴퓨터의 ip만 출력 </li>
                </span>
                {/*  */}
                <span className="sstitle"> ping IP주소 </span>
                <span className="mblock">
                  <li> IP주소로 ping을 보내서 인터넷이 연결이 되었는지 확인하는 방법 , 168.126.63.1(KT) </li>
                </span>
                {/*  */}
                <span className="sstitle"> vi /etc/sysconfig/network-scripts/ifcfg-ens33  </span>
                <span className="mblock">
                  <li> 고정IP만들기  </li>
                  <li> BOOTPROTO="static" 으로 변경  </li>
                  <li> IPADDR=고정IP주소  </li>
                  <li> PREFIX=24 #24까지가 네트워크 대역이다라고 알려주는것 </li>
                  <li> GATEWAY=게이트웨이주소  </li>
                  <li> DNS1=구글에서 통신사 DNS 서버 치고 통신사에 맞는 주소 넣기ㅔ  </li>
                </span>
                {/*  */}
                <span className="sstitle">  </span>
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
              <summary className="stitle"> ▶ AWK 명령어 <small> 스크립트 파일을 필터,추가,행과열로 출력 </small>
                <a name="AWK 명령어" style={{ visibility: "hidden" }}> AWK 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> awk {'{action}'} </span>
                <span className="mblock">
                  <li> -F "구분자": 일반적으로는 공백으로 열을 구분하지만 구분자를 설정해서 바꿈 </li>
                  <li> {'{\'print("name: " $1)\'}'}  </li>
                  <li> {'{\'if($1 >= 10) print("name: " $1)\'}'}  </li>
                  <li> '/문자열/' 파일명 , #파일에 abc라는 문자열이 포함된 레코드를 출력  </li>
                  <li> {'{\'print("name: " length($1) )\'}'} #length 내장함수 </li>
                  <li> {'{\'print("name: " substr($1,0,3) )\'}'} #substr 내장함수 </li>
                  <li> {'{\' for(i=0;i<10;i++) print("name: " $1)\'}'} #반복문  </li>
                  <li> 변수 사용하는 방법
                    <span className="sblock">
                      <li> 'BEGIN {' {a=0 b=0} '} </li>
                      <li>  {' {a+=$1 b++} '} </li>
                      <li> END {' {avg=a/b print() }'}' 파일명 </li>
                    </span>
                  </li>
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
              <summary className="stitle"> ▶ sed 명령어 <small> vi편집기가 아닌 원본 텍스트 파일을 편집할수 있는 유용한 명령어 </small>
                <a name="sed 명령어" style={{ visibility: "hidden" }}> sed 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> sed [스크립트] [명령어] </span>
                <span className="mblock">
                  <small> 패턴버퍼에 내용을 가져오고 데이터의 변형과 추가하기 위해 홀드 버퍼를 사용하고 패턴버퍼에 그
                    임시결과를 저장한다. 그리고 실제 저장할 때  </small>
                  <li> -n : 해당하는 행만 출력 </li>
                  <li> -e : 스크립트를 여러개 사용할 수 있도록 한다. </li>
                  <small> sed -n -e '1p' -e '3p' 파일명 , #1번행과 3번행 출력 </small> <br />
                  <li> -i : 파일을 실제로 수정하도록 한다. </li>
                  <li> 'p' : 행을 출력해주는 명령어 </li>
                  <li> 'm,np' : m번째에서 n번째 까지 행을 출력 </li>
                  <li> 'n,%p' : n번째에서 마지막 까지 행을 출력 </li>
                  <li> '/정규식/p' : 정규식  사용   </li>
                  <small> sed '/[Rr]oot/p' 파일명  </small>
                  <li> 'nd' : n번째 행을 제외하고 출력 </li>
                  <li> 'n,md' : n번째에서 마지막 까지 제외하고 행을 출력 </li>
                  <li> 'n,$d' : n번째째부터 마지막까지 제외하고 출력 </li>
                  <li> 's/오래된단어/바꿀단어/' : 오래된 단어 첫번째만? 바꿈 </li>
                  <li> 's/오래된단어/바꿀단어/g' : 오래된 단어 전체를 바꿈 </li>
                  <li> 's/오래된단어/바꿀단어/gi' : 오래된 단어 전체를 대소문자 상관없이 바꿈 </li>
                  <li> 's/^오래된단어/바꿀단어/gi' : 오래된단어로 시작하는 줄의 단어를 바꾼다 </li>
                  <li> 's/오래된단어$/바꿀단어/gi' : 오래된단어로 끝나는 줄의 단어를 바꾼다. </li>
                  <li> 'n,/정규식/p' : n번째 정규식에 해당하는 행을 발견할 때 까지 행을 출력   </li>
                  <li> '/root/,'/root1/p' : root,root1 이라는 내용 있으면 출력   </li>
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
              <summary className="stitle"> ▶ lasttr 명령어 <small> 파일의 속성 확인 </small>
                <a name="lasttr 명령어" style={{ visibility: "hidden" }}> lasttr 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> lasttr [옵션] [파일,디렉토리] </span>
                <span className="mblock">
                  <li> -d [디렉토리] : 파일 형식으로 출력  </li>
                  <li> -R [디렉토리] : 하위 모든 파일에 대한 속성 표시 </li>
                  <li> -a [디렉토리] : 숨긴 파일 출력 </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ chattr 명령어 <small> 파일의 속성을 추가 </small>
                <a name="chattr 명령어" style={{ visibility: "hidden" }}> chattr 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> chattr [+옵션] [파일] </span>
                <span className="mblock">
                  <li> a : 추가 모드로만 오픈 가능 </li>
                  <li> i : 변경, 삭제, 링크 금지 </li>
                  <li> s : 안전한 삭제 </li>
                  <li> A : atime 갱신 불가 </li>
                  <li> c : 커널에 의해서 압출 상태로 저장 </li>
                  <li> d : dump 명령으로 백업 금지 </li>
                  <li> j : 저널링 </li>
                  <li> t : 하위 결합 불가 </li>
                  <li> u : 삭제시 내용 저장 </li>
                  <li> D : 디렉토리 실시간 동기화 </li>
                  <li> S : 파일 수정 시 실시간 동기화 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ echo 명령어 <small> 문자열이나 파일의 내용을 화면에 출력 </small>
                <a name="echo 명령어" style={{ visibility: "hidden" }}> echo 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> echo [옵션] [문자열] </span>
                <span className="mblock">
                  <li> echo 문자열 </li>
                  <li> echo $"문자열" &gt;&gt; 파일명.txt , # 입력한 문자열을 파일로 저장 </li>
                  <li> echo $(expr $요소1 + $요소2) , #연산식에서 사용 , 공백 필요 , 특수문자( (,),*,$ )을 사용하려면 \를 붙여야 사용이 가능하다. </li>
                  <li> echo -n 내용 : 후행 줄 바꿈을 생략하는데 사용  </li>
                  <li>  <span className="sstitle">  echo -e 내용 : 정규표현식을 사용할 수 있는 옵션 </span>
                    <span className="sblock">
                      <li> \b : 공백을 지움 </li>
                      <li> \c : 줄 바꿈을 억제 </li>
                      <li> \n : 줄 바꿈  </li>
                      <li> \t : 수평 탭 공간을 만듬  </li>
                      <li> \r : 이후에 출력할 위치를 지정  </li>
                      <li> \v : 수직 탭 공간을 만듬  </li>
                      <li> \a : 경고음이 울림  </li>
                      <li> \\ : 역슬래시  </li>
                    </span>
                  </li>
                  <li> <span className="sstitle">  echo 이미지정된변수 </span>
                    <span className="sblock">
                      <li> $USER, $USERNAME : 현재 사용자 이름 </li>
                      <li> $PWD :  현재 디렉토리 </li>
                      <li> $OSTYPE : 현재 운영체제를 알려줌 </li>
                      <li> $PATH : 실행 파일을 찾는 디렉토리 경로</li>
                      <li> $SHELL : 로그인해서 사용하는 셸 </li>
                      <li> $HOME : 현재 사용자의 홈 디렉토리 </li>
                      <li> $HOSTNAME : 호스트 이름 </li>
                      <li> $LANG : 사용가능한 언어 </li>
                      <li> $LOGNAME : 로그인 이름 </li>
                      <li> $TERM : 로그인 터미널 타입 </li>
                      <li> $COLUMNS : 현재 터미널 컬럼수  </li>
                      <li> $BASH : bash 셸의 경로 </li>
                      <li> $PS1 : 1차 명령 프롬프트 변수 </li>
                      <li> $HISTFILE : 히스토리 파일의 경로 </li>
                      <li> $MAIL : 메일을 보관하는 경로 </li>
                      <li> $DISPLAY : X 디스플레이 이름 </li>
                      <li> $LINES : 현재 터미널 라인수  </li>
                      <li> $PS2 : 2차 명령 프롬프트 </li>
                      <li> $BASH_VERSION : bash 버전 </li>
                      <li> $HISTSIZE : 히스토리 파일에 저장되는 개수 </li>
                      <li> $LS_COLORS : 'ls' 명령어의 확장자 색상 옵션 </li>
                      <li> $$ : 사용되는 PID 출력 </li>
                      <li> export PATH=$PATH:/경로/ : PATH경로에 추가하는 방법(재부팅시 초기화) </li>
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
              <summary className="stitle"> ▶ chmod 명령어 <small> 파일 사용권한 변경 </small>
                <a name="chmod 명령어" style={{ visibility: "hidden" }}> chmod 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> chmod [옵션] [모드] [파일명] </span>
                <span className="mblock">
                  <small> 퍼미션 = #소유자(u)/그룹(g)/게스트(o),모두(a) 777 = r(4),w(2),x(1) , t(Sticky bit) , X(실행권한적용) , s(SUID) </small>
                  <li> chmod 퍼미션(755) 파일명 , 파일명에 권한을 준다. </li>
                  <li> chmod ugo+rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 준다.  </li>
                  <li> chmod ugo=rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 지정  </li>
                  <li> chmod ugo-rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 제거한다.  </li>
                  <li> chmod ug=w,o=r 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 제거한다.  </li>
                  <li> chmod 퍼미션(775) * , #현재 위치한 파일에 모두 접근 권한 부여 </li>
                  <li> chmod 퍼미션(1775) * , #현재 위치한 파일에 모두 접근 권한 부여 , 단 소유자만이 삭제가능(Sticky bit)  </li>
                  <li> chmod 퍼미션(4775) * , #현재 위치한 파일에 모두 접근 권한 부여 ,
                    SUID, {'유저 -> 파일1 (가능)'} | {'유저 -> 파일2(불가능)'} | {'유저->파일1->파일2(가능하게 해줌)'} 실행 권한이 없을때 다른 파일을 거쳐서 실행을 가능하게 해준다. </li>
                  <li> chmod -R 퍼미션 디렉토리 , #디렉토리 하위에 위치한 모든 파일 접근 권한 부여 </li>
                  <li> chmod -c 퍼미션 파일명 : 기존 파일 모드가 변경되는 경우만 진단 메시지 출력 </li>
                  <li> chmod -f 퍼미션 파일명 : 에러 메시지를 출력하지 않음 </li>
                  <li> chmod -v 퍼미션 파일명 : 모든 파일에 대해 모드가 적용되는 진단 메시지 출력 </li>
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
              <summary className="stitle"> ▶ chown 명령어 <small> 파일,디렉토리의 소유자 변경 </small>
                <a name="chown 명령어" style={{ visibility: "hidden" }}> chown 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> chown [소유자] [파일명] , # 파일의 소유자를 변경하는 방법 </li>
                  <li> chown [소유자]:[소유그룹] 변경할파일 , # 파일의 소유자,소유그룹을 변경하는 방법 </li>
                  <li> chown -R [소유자]:[소유그룹] [디렉토리] , # 하위 디렉토리도 변경</li>
                  <li> chown -h [소유자] [심볼릭링크] , # 심볼릭 링크의 소유자를 변경  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ rpm 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> rpm -qa : 시스템에 설치된 모든 패키지명 </li>
                  <li> rpm -qi 패키지명 : 시스템에 설치된 모든 패키지명 </li>
                  <li> rpm -ql 패키지명 : 패키지의 파일 리스트 </li>
                  <li> rpm -qf 파일명 : 지정한 파일이 포함된 패키지  </li>
                  <li> rpm -ivh rpm파일경로 : 직접 rpm파일을 직접 설치하지만 문제가 많아 권장하지 않음 </li>
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
              <summary className="stitle"> ▶ yum 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> yum -y install 파일명 </span>
                <span className="mblock">
                  <li> yum -y install wireshark wireshark-gnome , #wireshark , wiresharkgui 설치 </li>
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
              <summary className="stitle"> ▶ lsof 명령어 <small> 열려있는 파일 정보 </small>
                <a name="lsof 명령어" style={{ visibility: "hidden" }}> lsof 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> lsof -i udp:67 , # ip기반의 67번 포트에 접속을 확인  </li>
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
              <summary className="stitle"> ▶ ps 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> ps -ef | grep dnsmasq , # dnsmasq dns서버 프로세스를 확인 </li>
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
              <summary className="stitle"> ▶ xargs 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> | 파이프 명령어 앞에 서 받은 파라미터를 하나씩 넘겨주는 </span>
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
              <summary className="stitle"> ▶ firewall 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> firewall-cmd --list-services , # 방화벽을 허용한 리스트 </li>
                  <li> firewall-cmd --info-service=요소 , # 방화벽을 허용한 리스트중에 알고싶은 요소의 정보 </li>
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
              <summary className="stitle"> ▶ dirname,basename 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> dirname 명령어 </span>
                <span className="mblock">
                  <li> dirname /경로1/경로2 , #최상위 경로인 /경로1 출력  </li>
                </span>
                {/*  */}
                <span className="sstitle"> basename 명령어 </span>
                <span className="mblock">
                  <li> basename /경로1/경로2/ , #하위경로의 상위 경로인 경로2 출력 </li>
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
        </span>
      </div>
    </>
  );
}

export default LinuxCommand;