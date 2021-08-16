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
         <summary className="sstitle"> 최상위 디렉토리 / </summary>
         <span className="mblock">
          <li> 뿌리 , 윈도우의 C드라이브 같은거 , 디렉토리의 최상단 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> dev </summary>
         <span className="mblock">
          <li> 장치 파일이 담긴 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> home </summary>
         <span className="mblock">
          <li> 사용자가 사용하는 홈 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> media </summary>
         <span className="mblock">
          <li> CD, USB 등 외부장치(마운트)를 사용하는 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> opt </summary>
         <span className="mblock">
          <li> 추가 패키지가 설치되는 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> root </summary>
         <span className="mblock">
          <li> root계정의 홈 디렉토리, / 와는 다름 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> sys </summary>
         <span className="mblock">
          <li> 리눅스 커널과 관련된 파일이 있는 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> usr </summary>
         <span className="mblock">
          <li> 기본 실행 파일과 라이브러리 파일, 헤더 파일 등 많은 파일이 있다. </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> boot </summary>
         <span className="mblock">
          <li> 부팅에 필요한 커널 파일을 가지고 있다. </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> etc </summary>
         <span className="mblock">
          <li> 리눅스 설정을 위한 각종 파일을 가지고 있다. </li>
          <li> /passwd : 리눅스의 사용자 정보를 저장하는 파일 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> lost+found </summary>
         <span className="mblock">
          <li> 파일 시스템에 문제가 발생하여 복구할 경우 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> mnt </summary>
         <span className="mblock">
          <li> 파일 시스템을 임시로 마운팅 하는 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> proc </summary>
         <span className="mblock">
          <li> 프로세스 정보 등 커널 관련 정보가 저장되는 디렉토리 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> run </summary>
         <span className="mblock">
          <li> 실행 중인 서비스와 관련된 파일이 저장 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> srv </summary>
         <span className="mblock">
          <li> FTP나 Web 등 시스템에서 제공하는 서비스의 데이터가 저장된다. </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> tmp </summary>
         <span className="mblock">
          <li> 시스템에 사용중에 발생하는 임시데이터 저장공간, 재부팅 되면 모두 삭제 </li>
         </span>
        </details>
        {/*  */}
        <details>
         <summary className="sstitle"> var </summary>
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