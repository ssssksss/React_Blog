import React, { useEffect, useRef, useState } from 'react';

const ReactBasic = (props) => {
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
      <a href="#main" className="col_b"> <b>  </b> </a>
      <button className="lblocknav_btn2" onClick={() => {
       document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
       document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
      }}> ❌ </button>
     </span>
     <div className="hyperlink">
      <details open>
       <span className="mtitle"> 리액트 공부 </span>
       <summary>  </summary>
       <a href="#React 설치방법"> React 설치방법 </a>
       <a href="#리액트 기초 설명">  리액트 기초 설명 </a>
       <a href="#리액트 깃허브"> 리액트 깃허브 </a>
       <a href="#리액트의 구조"> 리액트의 구조 </a>
       <a href="#">   </a>
       <a href="#">   </a>
      </details>
     </div>
    </div>
   </div>

   <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
    <span className="lblock">
     <span className="mtitle"> <a name="">  리액트 공부  </a> </span>
     {/*  */}
     <span className="mblock">
      <details>
       <summary className="stitle"> ▶ React 설치방법 <a name="React 설치방법" style={{ visibility: "hidden" }}>  React 설치방법 </a> </summary>
       <span className="sblock">
        <span className="sstitle">  </span>
        <span className="mblock">
         <ol>
          <li>  Node.js 설치를하고 cmd에서 설치되었는지 확인, node -v , npm -v </li>
          <li>  Vscode 설치 </li>
          <li>  Vscode 터미널에서 cd React시작할폴더명(\Users\sk\Desktop\git_ssssksss\CODE) , # 이와같이 입력 </li>
          <li>  yarn create react-app 리액트폴더 혹은 npm create react-app 리액트폴더명 (폴더생성됨,폴더의이름은 모두 소문자)</li>
          <li>  만약에 yarn이 설치되지 않는다면 npm install -g yarn </li>
          <li>  cd 리액트폴더명 </li>
          <li>  npm start  입력하여서 잘 작동되나 확인 </li>
         </ol>
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
       <summary className="stitle"> ▶ 리액트 기초 설명 <a name="리액트 기초 설명" style={{ visibility: "hidden" }}> 리액트 기초 설명 </a> </summary>
       <span className="sblock">
        <span className="sstitle">  </span>
        <span className="mblock">
         <ol>
          <li> JSX파일로 JS파일과는 차이가 있다. </li>
          <li> 페이스북에서 만든 오픈 소스 자바스크립트 UI라이브러리 </li>
          <li> 컴포넌트 형태로 사용이된다. </li>
          <li> HTML class를 className , for을  htmlFor 와 같이 약간의 차이가 있다. </li>
          <li> lower Camel Case 방식을 사용한다. </li>
          <li> .jsx파일은 대문자로 시작한다. </li>
          <li> {"{"}{"}"} 중괄호를 이용하면 변수들을 처리한다. </li>
          <li> 컴포넌트에서 사용한 리소스를 회수하는 것이 중요하다. </li>
          <li> 싱글 페이지이므로 렌더링을 부분적으로 일어나게 해야한다.</li>
         </ol>
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
       <summary className="stitle"> ▶ 리액트 깃허브
        <a name="리액트 깃허브" style={{ visibility: "hidden" }}> 리액트 깃허브 </a> </summary>
       <span className="sblock">
        <span className="sstitle"> 리액트 깃허브에 올리기 </span>
        <span className="mblock">
         <ol>
          <li> github에 가서 저장소를 하나 만들기 (read.me 파일없이만들기)</li>
          <li> 만든 상태로 창을 가만히 놔두기( 복붙할 내용이 존재함)</li>
          <li> 리액트로 돌아와서 npm install gh-pages --save-dev 입력 </li>
          <li> 리액트 폴더에 pakage.json 파일을 열어서 아래와 같이 넣어주기</li>
          <li> 위쪽에 name위에 "homepage": "http://깃허브유저명.github.io/저장소이름"</li>
          <li> "scripts: 부분 안에 "predeploy": "npm run build",  "deploy": "gh-pages -d build",</li>
          <li className="col_r"> 터미널 창에 git init 입력 (깃폴더 생성됨)</li>
          <li> 깃허브 창에서 git remote ~ 부분을 복붙해서 붙여넣기 </li>
          <li className="col_r"> npm run deploy <small> build 하는 과정 </small> </li>
          <li className="col_r">  git add . <small> 깃허브에 올릴 깃을 만드는 과정? </small> </li>
          <li className="col_r">  git commit -m "커밋내용" <small>커밋</small> </li>
          <li className="col_r">  git push -u origin master <small> 깃허브에 master 브랜치에 push </small> </li>
          <p> 다음부터는 7,9~12 번만 반복하여서 사용</p>
         </ol>
        </span>
        {/*  */}
        <span className="sstitle"> 리액트 깃허브 에러 </span>
        <span className="mblock">
         <li> LF will be replaced by CRLF in .gitignore.
          The file will have its original line endings in your working directory
          <span className="sblock">
           <li> 해석 : LF가 CRLF도 대체 될거다. 파일은 당신의 작업 디렉토리 끝에 줄에 있다. </li>
           <li>LF(Line-Feed) Mac,Linux \n , CR(Carriage-Return) Mac \r , CRLF(Carriage-Return+Line-Feed) Windows,DOS \r\n  </li>
           <li> 경고가 발생한 이유 : Git이 OS마다 줄바꿈 문자열이 달라서 뭘 사용할지 몰라서 </li>
           <li> 해결방안 : Window, DOS에서는 git config --global core.autocrlf true </li>
           <li> 해결방안 : Linux, MAC에서는 git config --global core.autocrlf input </li>
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
       </span>
      </details>
     </span>
     {/*  */}
     <span className="mblock">
      <details>
       <summary className="stitle"> ▶ 리액트 코드 돌려보기 <a name="리액트 코드 돌려보기" style={{ visibility: "hidden" }}> 리액트 코드 돌려보기 </a> </summary>
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
       <summary className="stitle"> ▶ React Directory <a name="React Directory" style={{ visibility: "hidden" }}>  React Directory </a> </summary>
       <span className="sblock">
        <span className="sstitle">  </span>
        <span className="mblock">
         <li> src/components: 컴포넌트들이 위치하는 디렉토리입니다. </li>
         <li> src/pages: 각 라우트들이 위치하는 디렉토리 입니다. </li>
         <li> src/client: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기
          때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다. </li>
         <li> src/server: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다. </li>
         <li> src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다. </li>
         <li> src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다. </li>
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
       <summary className="stitle"> ▶ React Css <a name="React Css" style={{ visibility: "hidden" }}>  React Css </a> </summary>
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
       <summary className="stitle"> ▶ React 함수 <a name="React 함수" style={{ visibility: "hidden" }}> React 함수 </a> </summary>
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
       <summary className="stitle"> ▶  React 조건문 <a name="React 조건문" style={{ visibility: "hidden" }}> React 조건문 </a> </summary>
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
       <summary className="stitle"> ▶ React 반복문 <a name="React 반복문" style={{ visibility: "hidden" }}> React 반복문 </a> </summary>
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
       <summary className="stitle"> ▶ React Component <a name="React Component" style={{ visibility: "hidden" }}> React Component </a> </summary>
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
       <summary className="stitle"> ▶ React Props
        <a name="React Props" style={{ visibility: "hidden" }}> React Props </a> </summary>
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
       <summary className="stitle"> ▶ React useState
        <a name="React useState" style={{ visibility: "hidden" }}> React useState </a> </summary>
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
       <summary className="stitle"> ▶ React useRef
        <a name="React useRef" style={{ visibility: "hidden" }}> React useRef </a> </summary>
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
       <summary className="stitle"> ▶ React useEffect
        <a name="React useEffect" style={{ visibility: "hidden" }}> React useEffect </a> </summary>
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
       <summary className="stitle"> ▶ React Hook
        <a name="React Hook" style={{ visibility: "hidden" }}> React Hook </a> </summary>
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
       <summary className="stitle"> ▶ React Router
        <a name="React Router" style={{ visibility: "hidden" }}> React Router </a> </summary>
       <span className="sblock">
        <span className="sstitle"> React Router 설치 </span>
        <span className="mblock">
         <li> npm install react-router-dom </li>
         <li> yarn add react-router-dom </li>
        </span>
        {/*  */}
        <span className="sstitle"> App.js에 선언 </span>
        <span className="mblock">
         <li> import React, {'{ Component }'} from 'react'; </li>
         <li> import {'{ BrowserRouter, Route, Switch, Link }'} from 'react-router-dom;' </li>
         <li> import Home from './inc/home.js' </li>
         <li> import Home1 from './inc/Home1.js' </li>
         <li> {'function App() {'} </li>
         <li> &nbsp;{'  return ('} </li>
         <li> &nbsp;&nbsp;{'    <div className="App">'} </li>
         <li> &nbsp;&nbsp;&nbsp;{' <BrowserRouter> '} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;{'<p> <Link to="/">Home</Link> </p>'} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;{'<p> <Link to="/home1">Home1</Link> </p>'} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;{' <Switch> '} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' <Route path="/" exact component={Home}></Route> '} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' <Route path="/home1" component={Home1}></Route> '} </li>
         <li> &nbsp;&nbsp;&nbsp;&nbsp;{' </Switch> '} </li>
         <li> &nbsp;&nbsp;&nbsp;{' </BrowserRouter> '} </li>
         <li> &nbsp;&nbsp;{'     </div> '} </li>
         <li> &nbsp;{'   ); '} </li>
         <li> {' } '} </li>
         <li> {' export default App;'} </li>
        </span>
        {/*  */}
       </span>
      </details>
     </span>
     {/*  */}
     <span className="mblock">
      <details>
       <summary className="stitle"> ▶ React Emmet
        <a name="React Emmet" style={{ visibility: "hidden" }}> React Emmet </a> </summary>
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
       <summary className="stitle"> ▶ React Redux
        <a name="React Redux" style={{ visibility: "hidden" }}> React Redux </a> </summary>
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
       <summary className="stitle"> ▶ React Event
        <a name="React Event" style={{ visibility: "hidden" }}> React Event </a> </summary>
       <span className="sblock">
        <span className="sstitle"> Mouse </span>
        <span className="mblock">
         <li> onClick </li>
         <li> onContentMenu </li>
         <li> onDoubleClick </li>
         <li> onDrag </li>
         <li> onDragEnd </li>
         <li> onDragEnter </li>
         <li> onDragExit </li>
         <li> onDragLeave </li>
         <li> onDragOver </li>
         <li> onDragStart </li>
         <li> onDrop </li>
         <li> onMouseDown </li>
         <li> onMouseEnter </li>
         <li> onMouseLeave </li>
         <li> onMouseMove </li>
         <li> onMouseOut </li>
         <li> onMouseOver </li>
         <li> onMouseUp </li>
         <li>  </li>
        </span>
        {/*  */}
        <span className="sstitle"> Keyboard</span>
        <span className="mblock">
         <li>  </li>
        </span>
        {/*  */}
        <span className="sstitle">  Event </span>
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
       <summary className="stitle"> ▶
        <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
       <summary className="stitle"> ▶
        <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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

export default ReactBasic;