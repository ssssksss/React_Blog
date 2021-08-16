import React, { useEffect, useRef, useState } from 'react';

const LinuxCommand = (props) => {

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);

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
              <details>
                <summary className="col_g"> ls , mkdir </summary>
                <a href="#" className="col_p">  </a>
                <a href="#ls 명령어" className="col_p"> ls 명령어 #디렉토리,파일 정보출력 </a>
                <a href="#mkdir 명령어" className="col_p"> mkdir 명령어 #디렉토리 생성  </a>
                <a href="#cp 명령어" className="col_p"> cp 명령어 #파일이나 디렉토리 복사 </a>
                <a href="#" className="col_p">  </a>
                {/* <a href="#" className="col_p"> </a> */}
              </details>
              {/*  */}
              <details open>
                <summary className="col_g">  </summary>
                <a href="#" className="col_p">  </a>
                <a href="#" className="col_p">  </a>
                <a href="#" className="col_p">  </a>
                <a href="#" className="col_p">  </a>
                {/* <a href="#" className="col_p"> </a> */}
              </details>
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
              <summary className="stitle"> ▶ 리눅스 명령어  <a name="리눅스 명령어" style={{ visibility: "hidden" }}> 리눅스 명령어 </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 리눅스 명령어 </span>
                <span className="mblock">
                  <li> command [-단일문자옵션] [--다중문자옵션] </li>
                  <li> su - : 루트 계정으로 접속하는 방법 </li>
                  <li> su 계정명 : 원하는 계정으로 접속하는 방법 </li>
                  <li> dir : 현재 디렉토리에 파일 목록을 조회 </li>
                  <li> clear : 터미널창을 초기화 </li>
                  <li> cd [경로] : 지정한 경로로 이동 </li>
                  <li> cd . : 현재 폴더로 이동 </li>
                  <li> cd ../경로 : 상위디렉토리를 표시하고 이동 </li>
                  <li> cd - : 디렉토리 뒤로가기 </li>
                  <li> pwd : 현재 위치한 디렉토리를 절대경로 표현으로 출력 </li>
                  <li> rmdir : 지정한 디렉토리가 빈 폴더면 삭제 가능 </li>
                  <li> rm 파일명 , rm -i 파일명 : 파일 지우기를 물어보고 지움 #복구가 안됨 </li>
                  <li> rm -f : 강제적으로 지움 </li>
                  <li> rm -r : 디렉토리를 지울 때 사용 </li>
                  <li> rm -rf : 강제적으로 디렉토리 및 모든 파일을 강제로 삭제 </li>
                  <small> testdisk라는 프로그램으로 복구가 가능하다고 한다. (포렌식에서 사용) </small>
                  <li> chmod 777 abc.text : 접근 권한 부여 #소유자/그룹/게스트 777 = r(4),w(2),x(1) </li>
                  <li> chmod ugo+rx abc.text : 접근 권한 부여 user,group,others에 읽기,쓰기 권한을 추가 </li>
                  <li> chmod ugo-rx abc.text : 접근 권한 제거 user,group,others에 읽기,쓰기 권한을 제거 </li>
                  <li> chmod 777 * : 현재 위치한 파일에 모두 접근 권한 부여  </li>
                  <li> chmod -R 777 디렉토리 : 디렉토리 하위에 위치한 모든 파일 접근 권한 부여 #소유자/그룹/게스트 777 = r(4),w(2),x(1) </li>
                  <li> chown 소유자 변경할파일 : 파일의 소유자를 변경하는 방법 </li>
                  <li> chown 소유자:소유그룹 변경할파일 : 파일의 소유자,소유그룹을 변경하는 방법 </li>
                  <li> chown -R 소유자:소유그룹 디렉토리 --from=nobody:nobody # </li>
                  <li> touch 파일명 : 파일을 생성 </li>
                  <li> file [파일명,디렉토리] : 파일의 종류를 알려줌 </li>
                  <li> cat [파일명] : 파일의 내용을 보여줌 </li>
                  <li> cat -n [파일명] : 파일의 내용을 행번호를 붙여서 보여줌 </li>
                  <li> 탭키 : 자동완성 </li>
                  <li> 탭 2번 연속 : 입력가능한 파일 목록을 보여줌 </li>
                  <li> more [디렉토리] : 화면의 크기를 계산해서 일정 %로 보여주고 엔터를 눌러서 한줄씩 더 볼수 있음 </li>
                  <li> less [디렉토리] : 화면의 크기를 계산해서 일정부분 보여준다. </li>
                  <small> j: 한줄씩 다음행, k: 한줄씩 이전행, spacebar : 다음화면 , b : 이전화면 , q : 종료 </small>
                  <small> cat -n [디렉토리] | more이나less 사용 가능 </small>
                  <li> tail [디렉토리] : 디렉토리 파일에서 뒷부분의 10줄을 읽어준다. </li>
                  <li> tail -n : 디렉토리 파일에서 뒷부분의 n줄을 읽어준다. </li>
                  <li> tail -f : 파일 출력이 종료되지 않고 주기적으로 계속 출력된다. </li>
                  <li> head : 디렉토리 파일에서 앞부분의 10줄을 읽어준다. </li>
                  <li> cp 파일명/디렉토리 파일명/디렉토리 : 파일이나 디렉토리를 복사한다. </li>
                  <li> cp -i : 기존에 존재하면 덮어쓸 것인지를 물어봄  </li>
                  <li> cp -f : 강제로 덮어쓰기? , 상대경로일때는 안먹히는 것 같다. </li>
                  <li> cp -r :  </li>
                  <li> mv  </li>
                  <li>  </li>
                  <li>  </li>
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
                <span className="sstitle"> 디렉토리의 내용을 출력 </span>
                <span className="mblock">
                  <li className="sstitle"> ls [옵션s] [파일명]  </li>
                  <li> -a : 숨겨진 파일까지 출력 , .을 포함하여 경로 안의 모든 내용을 출력 </li>
                  <li> -A : 숨겨진 파일까지 출력 ,  .과 ..을 제외한 모든 내용을 출력 </li>
                  <li> -l : 파일의 상세정보 까지 출력
                    <span className="sblock">
                      <details> {/* [file,user,group,guest] | link | user | group | size | date | name  */}
                        <summary className="sstitle"> ▶ [file,user,group,guest] | link | user | group | size | date | name </summary>
                        <li> [file] : d(directory) , c(character special), b(block special), p(fifo), l(symbolic link), s(socket) </li>
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
                    <li> ls -al </li>
                    <li> ls -alt  </li>
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
              <summary className="stitle"> ▶  명령어 <small>  </small>
                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="mblock">
                  <li className="sstitle">  [옵션s] [파일명]  </li>
                  <li> 소제목 </li>
                  {/*  */}
                  <li> 소제목
                    <span className="sblock">
                      <details>
                        <summary className="sstitle"> ▶ 설명  </summary>
                        <li>  </li>
                      </details>
                    </span>
                  </li>
                  {/*  */}
                  <li> 소제목 </li>
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
    </>
  );
}

export default LinuxCommand;