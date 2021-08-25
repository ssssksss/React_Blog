import React, { useEffect, useRef } from 'react';

const LinuxShellScript = (props) => {

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
              <summary className="stitle"> ▶ 쉘 스크립트의 기본 설명 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 주석 </span>
                <span className="mblock">
                  <li> # </li>
                </span>
                {/*  */}
                <span className="sstitle"> #!(Shebang) </span>
                <span className="mblock">
                  <li> 스크립트를 처리할 인터프리터 </li>
                  <li> 처리할 인터프리터 종류
                    <li> #!/bin/sh (Bourne Shell) </li>
                    <li> #!/bin/csh (C Shell) </li>
                    <li> #!/bin/ksh (Korn Shell) </li>
                    <li> #!/bin/bash (Bash Shell) </li>
                    <li> #!/usr/bin/perl (Perl)</li>
                    <li> #!/usr/bin/python (Python) </li>
                  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 공백(띄어쓰기) </span>
                <span className="mblock">
                  <li> 스크립트에서 공백은 무시할 수 없는 중요한 요소이다. </li>
                </span>
                {/*  */}
                <span className="sstitle"> 쉘 스크립트를 사용하는 이유 </span>
                <span className="mblock">
                  <li> 여러개의 명령을 작업하는 것보다 여러개의 명령어를 하나의 공간(스크립트)에 담아서
                    하나의 스크립트만을 실행하여 작업하는 것이 편해서 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 쉘 스크립트 사용하는 방법 </span>
                <span className="mblock">
                  <li> 1. vi 파일명.sh 로 스크립트를 생성 </li>
                  <li> 2. #!/bin/bash , 파일의 최상단에 선언(스크립트를 무슨 인터프리터로 사용해서 처리하겠다.) </li>
                  <li> 3. 코드를 작성 </li>
                  <li> 4. 코드를 다 작성하고 실행해서 실행이 되지 않으면 chmod 명령어로 실행권한을 준다. </li>
                  <li> 5. ./파일명.sh  를 사용해서 실행 가능 , bash쉘은 sh 파일명.sh 로도 실행 가능 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 쉘 스크립트 실행하고 입력값 넣는방법 </span>
                <span className="mblock">
                  <li> read 변수명  을 쉡 스크립트 안에 써놓으면 사용할 때 입력값을 넣을 수 있다. </li>
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
              <summary className="stitle"> ▶ 변수 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 변수 정의 </span>
                <span className="mblock">
                  <li> 변수명="문자열" , # 공백이 존재하면 안됨, 특수문자나숫자로 변수명이 시작하면 안됨 </li>
                  <li> 변수명=변수값 , # 공백이 존재하면 안됨, 특수문자나숫자로 변수명이 시작하면 안됨 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 변수 사용 </span>
                <span className="mblock">
                  <li> ${'{변수명}'} : 변수 출력 </li>
                  <li> ${'{변수명^}'} : 제일 앞에 글자만 대문자로 변경 </li>
                  <li> ${'{변수명^^}'} : 모든 글자 대문자로 변경 </li>
                  <li> ${'{변수명,}'} : 제일 앞에 글자만 소문자로 변경 </li>
                  <li> ${'{변수명,,}'} : 모든 글자 소문자로 변경 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 변수 다른 쉡 스크립트에서 사용하기  </span>
                <span className="mblock">
                  <li> export 변수명="변수값" </li>
                  <li> ./@.sh , # 다른 쉘 스크립트 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 내부에서 정의한 변수를 매개변수(파라미터)처럼 사용하는 방법  </span>
                <span className="mblock">
                  <li> set $(변수)  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 매개변수 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 매개변수 사용 </span>
                <span className="mblock">
                  <li> ${0} , ${1} , ${2} : 매개변수가 들어온 순서대로 사용 , 0번은 실행된 스크립트 </li>
                  <li> ${'{#}'} ,매개변수의 갯수 </li>
                  <li> ${'{*}'} ,매개변수의 모든 값  </li>
                  <li> ${'{@}'} ,매개변수의 모든 값 </li>
                  <li> ${'{매개변수명:start:count}'} : 시작인덱스 부터 갯수만큼 출력 </li>
                  <li> ${'{배열[index]}'} : 인덱스값에 맞는 배열값을 출력 </li>
                  <li> ${'{$!}'} ,  </li>
                  <li> ${'{$$}'} , 쉘 스크립트의 PID </li>
                  <li> ${'{$?}'} , 실행한 뒤의 반환값 </li>
                  <li> ${'{$_}'} , 지난 명령의 마지막 인자로 설정된 특수 변수 </li>
                  <li> ${'{$-}'} , 현재 Shell이 호출될 때 사용한 옵션들 </li>
                  <li> ${'{#매개변수명}'} : 매개변수의 길이 출력 </li>
                  <li> ${'{#배열[*]}'} : 배열의 길이 출력 </li>
                  <li> ${'{매개변수명:start:count}'} : 시작인덱스 부터 갯수만큼 출력 </li>
                  <li> ${'{매개변수명:="값"'} #값이 존재한다면 그대로 사용하고 없으면 추가 </li>
                  <li> ${'{매개변수명+"값"'} #값이 존재한다면 저장하지 않고 값만 출력만 해줌 </li>
                  <li> ${'{매개변수명-"값"'} #값이 존재한다면 원래 값을 출력 값이 없다면 값만 출력 해준다. </li>
                  <li> ${'{#매개변수명#입력값}'} : 입력값을 제일앞에서부터 첫번째 것을 찾음  </li>
                  <li> ${'{#매개변수명##입력값}'} : 입력값을 제일앞에서부터 마지막 것을 찾음  </li>
                  <li> ${'{#매개변수명%입력값}'} : 입력값을 제일뒤에서부터 첫번째 것을 찾음   </li>
                  <li> ${'{#매개변수명%%입력값}'} : 입력값을 제일뒤에서부터 마지막 것을 찾음 </li>
                  <li> ${'{#매개변수명/입력값/변경값}'} : 입력값과 첫번째로 일치하는 값을 변경 </li>
                  <li> ${'{#매개변수명//입력값/변경값}'} : 입력값과 일치하는 모든 값을 변경 </li>
                  <li> ${'{#매개변수명/#입력값/변경값}'} : 제일 앞에 있는 값이 입력값과 같을 경우만 변경 </li>
                  <li> ${'{#매개변수명/%입력값/변경값}'} : 제일 뒤에 있는 값이 입력값과 같을 경우만 변경 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 매개변수 인자 전달하는 방법 </span>
                <span className="mblock">
                  <li> ./@.sh 매개변수1 매개변수2 매개변수3 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 매개변수를 한칸씩 밀어내는 방법 </span>
                <span className="mblock">
                  <li> shift , #반복문에서 이용을 하면 S1이 사라지는 것을 볼 수 있을 것이다.  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 시스템 변수 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 시스템 변수 종류 </span>
                <span className="mblock">
                  <li> HOME : 사용자 홈 디렉토리 </li>
                  <li> PATH : 실행 파일의 경로 </li>
                  <li> LANG : 실행시 사용되는 언어 </li>
                  <li> UID : 사용자의 UID </li>
                  <li> SHELL : 로그인시 실행되는 쉘 </li>
                  <li> USER : 사용자 계정 </li>
                  <li> FUNCNAME : 현재 실행되고 있는 함수 이름 </li>
                  <li> TERM : 로그인 터미널 </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 조건문 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> if 조건문 정의 </span>
                <span className="mblock">
                  <li> if  조건문 {'&&'} 조건문 {'||'} 조건문 ; then </li>
                  <li> 내용 </li>
                  <li> elif [조건문] ; then </li>
                  <li> 내용 </li>
                  <li> else </li>
                  <li> 내용 </li>
                  <li> fi </li>
                </span>
                {/*  */}
                <span className="sstitle"> else 조건문 정의 </span>
                <span className="mblock">
                  <li> case ${'{1}'} in </li>
                  <li> 값1 | 값2) 내용 ;; </li>
                  <li> [fF]*{')'} 내용 ;; </li>
                  <li> *{')'} 내용 ;; </li>
                  <li> esac </li>
                </span>
                {/*  */}
                <span className="sstitle"> 조건문 연산자 </span>
                <span className="mblock">
                  <li> -a : AND </li>
                  <li> -o : OR </li>
                </span>
                {/*  */}
                <span className="sstitle"> 조건문 종류 , []괄호 사용 </span>
                <span className="mblock">
                  <li> if [ ${'{요소1}'} -eq  ${'{요소2}'} ]; , # equal(=)</li>
                  <li> if [ ${'{요소1}'} -ne  ${'{요소2}'} ]; , # not equal(!=)</li>
                  <li> if [ ${'{요소1}'} -gt  ${'{요소2}'} ]; , # greater(&gt;) </li>
                  <li> if [ ${'{요소1}'} -ge  ${'{요소2}'} ]; , # greater or equal(&lt;)</li>
                  <li> if [ ${'{요소1}'} -lt  ${'{요소2}'} ]; , # little(&lt;)</li>
                  <li> if [ ${'{요소1}'} -le  ${'{요소2}'} ]; , # little or equal(&lt;=)</li>
                  <li> if [ -n  문자열 ]; , # 문자열의 길이가 0이 아닌경우 </li>
                  <li> if [ -z  문자열 ]; , # 문자열이 길이가 0인 경우 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 파일과 관련된 조건문 종류 . []괄호 사용 </span>
                <span className="mblock">
                  <li> if [  -d $(요소) ]; , # 디렉토리가 존재하면 참 </li>
                  <li> if [ ! -d $(요소)];  , # 디렉토리가 존재하지 않으면 참 </li>
                  <li> if [  -e $(요소) ]; , # 파일이 존재하면 참 </li>
                  <li> if [ ! -e $(요소)];  , # 파일이 존재하지 않으면 참 </li>
                  <li> if [  -L $(요소) ]; , # 파일이 심볼릭 링크이면 참 </li>
                  <li> if [  -S $(요소) ]; , # 파일이 소켓이면 참 </li>
                  <li> if [  -s $(요소) ]; , # 파일이 크기가 0보다 크면 참 </li>
                  <li> if [  -r $(요소) ]; , # 파일을 읽을 수 있으면 참 </li>
                  <li> if [  -w $(요소) ]; , # 파일을 쓸 수 있으면 참 </li>
                  <li> if [  -x $(요소) ]; , # 파일을 실행 할 수 있으면 참 </li>
                  <li> if [  -f $(요소) ]; , # 파일이 정규 파일이면 참 </li>
                  <li> if [  -c $(요소) ]; , # 파일이 문자 장치이면 참 </li>
                  <li> if [  -g $(요소) ]; , # 파일에 set-user-id가 설정되면 참 </li>
                  <li> if [ $(요소1) -nt $(요소2) ]; , # 요소1이 더 최신이면 참 </li>
                  <li> if [ $(요소1) -os $(요소2) ]; , # 요소1이 더 오래되면 참 </li>
                  <li> if [ $(요소1) -ef $(요소2) ]; , # 요소1,요소2가 동일하면 참 </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 반복문 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> for 반복문 정의 </span>
                <span className="mblock">
                  <li> for 반복문조건; </li>
                  <li> do </li>
                  <li> 내용 </li>
                  <li> done </li>
                </span>
                {/*  */}
                <span className="sstitle"> while 반복문 정의 (거짓이면 반복되는 until도 존재는 한다.) </span>
                <span className="mblock">
                  <li> while ((반복문조건)); , while [ true ] , while [ $i -le 10 ] </li>
                  <li> do</li>
                  <li> 내용</li>
                  <li> ((숫자와 변수의 연산 내용))</li>
                  <li> `expr $i + 1`  , # backtick, backquoto , grave accent, 억음부호 </li>
                  <li> done </li>
                </span>
                {/*  */}
                <span className="sstitle"> 반복문조건 </span>
                <span className="mblock">
                  <li> for i in 1 2 3 4 5 </li>
                  <li> for i in ${'{list}'} , list = "1 2 3 4 5" </li>
                  <li> for i in {'{1..5}'} . # 1~5 </li>
                  <li> for i in {'{1..5..2}'} , # 1,3,5 </li>
                  <li> for i in `seq 1 2 10` , # 1,3,5,7,9 </li>
                  <li> for i in `seq 10 -2 1` , # 10,8,6,4,2 </li>
                  <li> for i in ${'{arr[@]}'} , arr = (1 2 3 4 5) </li>
                  <li> for ((i=0; i&gt;5; i++)); </li>
                  <li> for i in * .*  , # 현재 폴더에 모든 숨긴 파일</li>
                  <li> for i in f*  , # f로 시작하는 모든파일 </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 배열 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 배열 선언 및 정의 </span>
                <span className="mblock">
                  <li> 배열 = (요소1 요소2 요소3)  </li>
                  <li> 1. 공백으로 구분 </li>
                  <li> 2. 1차원 배열만 지원 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 배열 요소 바꾸기 </span>
                <span className="mblock">
                  <li> 배열[인덱스] = 값  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 배열 요소 삭제 </span>
                <span className="mblock">
                  <li> unset 배열[인덱스]  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 배열 사용 </span>
                <span className="mblock">
                  <li> ${'{배열[@]}'} , # 배열의 모든 요소 </li>
                  <li> ${'{배열[인덱스]}'} </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 함수 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 함수 정의 </span>
                <span className="mblock">
                  <li> function 함수명(){'{'} </li>
                  <li> 내용 </li>
                  <li> {'}'} </li>
                </span>
                {/*  */}
                <span className="sstitle"> 함수 사용 </span>
                <span className="mblock">
                  <li> 함수명 매개변수 매개변수 , # 스크립트 내부에서 사용 </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ printf <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> printf "%5.2f" \n\n \t %s \n" $var1 "$var2" </li>
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
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 기타  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> sleep 초(시간) </li>
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
              <summary className="stitle"> ▶  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
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
        </span>
      </div>
    </>
  );
}

export default LinuxShellScript;