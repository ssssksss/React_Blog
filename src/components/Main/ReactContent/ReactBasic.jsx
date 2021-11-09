import React from 'react';

const ReactBasic = (props) => {

  return (
    <>
      <div className="common_style">
        <span className="lblock">
          <span className="mtitle"> <a name="">  리액트 공부  </a> </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> React 설치방법 <a name="React 설치방법" style={{ visibility: "hidden" }}>  React 설치방법 </a> </summary>
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
              <summary className="stitle"> 리액트 기초 설명 <a name="리액트 기초 설명" style={{ visibility: "hidden" }}> 리액트 기초 설명 </a> </summary>
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
              <summary className="stitle"> 리액트 깃허브
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
              <summary className="stitle"> 리액트 코드 돌려보기 <a name="리액트 코드 돌려보기" style={{ visibility: "hidden" }}> 리액트 코드 돌려보기 </a> </summary>
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
              <summary className="stitle"> React Directory <a name="React Directory" style={{ visibility: "hidden" }}>  React Directory </a> </summary>
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
              <summary className="stitle"> React 함수 <a name="React 함수" style={{ visibility: "hidden" }}> React 함수 </a> </summary>
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
              <summary className="stitle">  React 조건문 <a name="React 조건문" style={{ visibility: "hidden" }}> React 조건문 </a> </summary>
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
              <summary className="stitle"> React 반복문 <a name="React 반복문" style={{ visibility: "hidden" }}> React 반복문 </a> </summary>
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
              <summary className="stitle"> React Props <small> 컴포넌트간에 state값이나 변수를 주고 받는 방법 </small>
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
              <summary className="stitle"> React Class Component
                <a name="React Component" style={{ visibility: "hidden" }}> React Component </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 클래스 컴포넌트의 장단점 </span>
                <span className="mblock">
                  <li className="col_be"> state관리와 라이프 사이클의 사용때문에 기존에 사용 </li>
                  <li className="col_be">  </li>
                  <li className="col_r"> 코드가 길고 복잡  </li>
                  <li className="col_r"> 부분적인 재사용이 어려움  </li>
                  <li className="col_r">   </li>
                </span>
                {/*  */}
                <span className="sstitle"> 클래스 컴포넌트 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React, {Component} from "react"; '} </li> <br />
                    <li> class App extends React,Component {'{'}
                      <li> render() {'{'}
                        <li> return(
                          <li> {' <div> </div>'} </li>
                        </li>
                        <li> ); </li>
                      </li>
                      <li> {'}'} </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Class - React Context <small> 하위 컴포넌트에 state값을 props를 이용하지 않고 주기 </small>
                <a name="React Class - React Context" style={{ visibility: "hidden" }}> React Class - React Context </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 클래스 컨텍스트 예시 </span> <br />
                <span className="sstitle"> App.js </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React, {Component} from "react"; '} </li> <br />
                    <li> class App extends React,Component {'{'}
                      <li> render() {'{'}
                        <li> return(
                          <li> {' <div> </div>'} </li>
                        </li>
                        <li> ); </li>
                      </li>
                      <li> {'}'} </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Hooks - functional Component
                <a name="React Hooks" style={{ visibility: "hidden" }}> React Hooks </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 함수형 컴포넌트 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {' <div> </div>'} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Hooks - useState
                <a name="React useState" style={{ visibility: "hidden" }}> React useState </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li> 컴포넌트에서 동적인 상태값을 이용할 때 사용  </li>
                  <li> const [state값,setState값] = useState(0); <small> 첫번쨰 값은 저장 변수, 두번쨰 값은 갱신함수 </small>  </li>
                  <li> set상태값 이 변하게 되면 하위 컴포넌트까지 re-rendering이 된다.  </li>
                  <li> set상태 함수는 비동기로 동작 , 아래와 같은경우 1번만 증가
                    <li>  set상태값(상태값+1) </li>
                    <li>  set상태값(상태값+1) </li>
                    <li>  아래와 같이 사용하면 문제 해결 </li>
                    <li>  set상태값({'prev상태값 => prev상태값 + 1'}) </li>
                    <li>  set상태값({'prev상태값 => prev상태값 + 1'}) </li>
                  </li>
                  <li>   </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 - 버튼을 클릭하면 1씩 증가 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> const [count,setCount] = useState(0); </li>
                      <li> return(
                        <li> {'<> '}
                          <li> {'<button onClick={()=>setCount(count+1)}> +1증가 버튼 </button>'} </li>
                          <li> {'카운트 : {count}'} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
                </span>
                {/*  */}
                <span className="sstitle"> 예시2 - 2개의 입력값을 받았을 때 변경 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> {' const [inputs,setInputs] = useState({ '}
                        <li> input1: '', </li>
                        <li> input2: ''  </li>
                      </li>
                      <li> {' }); '} </li> <br />
                      <li> {' const {input1, input2} = inputs; '} <small> inputs 상태값을 변수로 만듬 </small> </li> <br />
                      <li> {' const onChange = (e) => { '}
                        <li> {' const { name , value } = e.target; '}
                        </li>
                        <li> {'setInputs({ '}
                          <li> ...inputs, </li>
                          <li> [name]: value </li>
                        </li>
                        <li> {''} </li>
                        <li> {'});'} </li>
                      </li>
                      <li> {' }; '} </li> <br />
                      <li> {' const onReset = () => { '}
                        <li> {'setInputs({ '}
                          <li> input1: '', </li>
                          <li> input2: '', </li>
                        </li>
                        <li> {'})'} </li>
                      </li>
                      <li> {' }; '} </li> <br />
                      <li> return(
                        <li> {'<> '}
                          <li> {' <input name="input1" onChange={onChange} value={input1} />  '} </li>
                          <li> {' <input name="input2" onChange={onChange} value={input2} />  '} </li>
                          <li> {' <button onClick={onReset} > 초기화 </button> '} </li>
                          <li> {' <div>  {input1} : {input2} </div> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Hooks -  useRef
                <a name="React useRef" style={{ visibility: "hidden" }}> React useRef </a> </summary>
              <span className="sblock">
                <span className="sstitle"> React useRef 설명 </span>
                <span className="mblock">
                  <li> 특정 DOM을 선택할 때 사용 </li>
                  <li> input이나 textarea 등에 focus() 를 할 때 사용 </li>
                  <li> 득정 DOM의 스크롤 위치를 가져올 때 </li>
                  <li> 외부 라이브러리를 사용할 때   </li>
                  <li> Ref의 사용은 최대한 안하는 것이 좋다. </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React, {useRef } from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> const inputRef = useRef(); </li>
                      <li> return(
                        <li> {'<> '}
                          <li> {' <input ref={inputRef} /> '} </li>
                          <li> {' <button onClick={()=> {inputRef.current.focus() }}> 버튼1 </button> '} </li>
                          <li> {' <button onClick={()=> {inputRef.current.value="123"; }}> 버튼2 </button> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> React Class - useEffect
                <a name="React useEffect" style={{ visibility: "hidden" }}> React useEffect </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Hooks - useEffect <small> 상태값이 변할 때 렌더링 </small>
                <a name="React useEffect" style={{ visibility: "hidden" }}> React useEffect </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li> 랜더링이 될 때마다 실행이 된다. </li>
                  <li> useEffect [상태값 등]배열에 값이 변할 때 마다 렌더링을 하게 해준다. 만약에 비워두면
                    처음에 렌더링 될 때만 실행되고 이후에는 실행되지 않는다.  </li>
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {'import React, { useState, useEffect } from "react"; '} </li> <br />
                    <li> {'const [num,setNum] = useState(0); '} </li>
                    <li> {' useEffect(()=>{ '}
                      <li> {' console.log("test useeffct"); '} </li>
                      <li> {' return() => { '} </li>
                      <li> {'   console.log("test end useeffct"); '} </li>
                      <li> {' }; '} </li>
                    </li>
                    <li> {'},[num]);'} </li>
                    <li> const App = () {'=> {'}
                      <li>  </li>
                      <li> return(
                        <li> {'<> '}
                          <li> {' <p> 숫자 : {num} </p> '} </li>
                          <li> {' <button onClick={()=>{setNum(prevNum => prevNum + 1)}}> 1 </button> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Router - React library
                <a name="React Router" style={{ visibility: "hidden" }}> React Router </a> </summary>
              <span className="sblock">
                <span className="sstitle"> React Router 설치 </span>
                <span className="mblock">
                  <li> npm install react-router-dom </li>
                  <li> yarn add react-router-dom </li>
                </span>
                {/*  */}
                <span className="sstitle"> React Router 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> import React, {'{ Component }'} from 'react'; </li>
                    <li> import {'{ BrowserRouter, Route, Switch, Link }'} from 'react-router-dom'; </li>
                    <li> import Home from './inc/home.js' </li>
                    <li> import Home1 from './inc/Home1.js' </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {' <div className="App">'}
                          <li> {' <BrowserRouter> '}
                            <li> {'<p> <Link to="/">Home</Link> </p>'} </li>
                            <li> {'<p> <Link to="/home1">Home1</Link> </p>'} </li>
                            <li> {' <Switch> '}
                              <li> {' <Route path="/" exact component={Home}></Route> '} </li>
                              <li> {' <Route path="/home1" component={Home1}></Route> '} </li>
                            </li>
                            <li> {' </Switch> '} </li>
                          </li>
                          <li> {' </BrowserRouter> '} </li>
                        </li>
                        <li> {'     </div> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> React Emmet
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
              <summary className="stitle"> React Redux - library
                <a name="React Redux" style={{ visibility: "hidden" }}> React Redux </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li> npm i react-redux redux </li>
                  <li> yarn add redux react-redux redux-devtools-extension redux-logger </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li> 상위 디렉토리에서 1단계 하위디렉토리가 아닌 몇 단계 디렉토리에 state값을 줄 수 있음 </li>
                  <li> 바뀌는 값들을 버전을 관리하는 것처럼 볼 수 있음 </li>
                  <li> action, component, reducer, store 폴더로 구성
                    <li> action : store에 직접 접근 , 컴포넌트에서 바로 store로 접근 불가능
                      <li> 모든 액션 객체는 type이라는 값을 가져야 한다. </li>
                      <li>  </li>
                    </li>
                    <li> store : state를 모아놓은 공간</li>
                    <li> reducer : 문지기 역할
                      <li> old state + action = new state를 하는 과정 </li>
                      <li> {' const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>) '} </li>
                      <li> state와 action객체를 인자로 받아서 new state 객체를 반환하는 함수 </li>
                      <li> reducer함수는 old state와 action객체를 인자로 받아서 new state를 반환하는 함수 </li>
                      <li> dispatch 함수는 컴포넌트에서 action객체를 받아 reducer함수에 넘김 </li>
                      <li> action객체는 type(어떤 행동인지) + data(행동과 관련되 데이터) </li>
                      <li> {' component(old state) -> action -> dispatch -> reducer -> component(new state) '} </li>
                    </li>
                    <li> component :  </li>
                  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> React Event
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
              <summary className="stitle"> React Css <a name="React Css" style={{ visibility: "hidden" }}>  React Css </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li>
                    <li> {' import "./style.css"; '}  </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> {' <button> 버튼 </button> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
                </span>
                {/*  */}
                <span className="sstitle"> 예시2 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> {' const 스타일명 = { '}
                        <li> width: 100px, </li>
                        <li> height: 100px </li>
                      </li>
                      <li> {' }; '} </li>
                      <li> return(
                        <li> {'<> '}
                          <li> {' <button style={스타일명}> 버튼 </button> '} </li>
                          <li> {' <button style={{height: "100px"}}> 버튼 </button> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle"> styled-components - React library
                <a name="styled-components" style={{ visibility: "hidden" }}> styled-components </a> </summary>
              <span className="sblock">
                <span className="sstitle"> styled-components 설치 </span>
                <span className="mblock">
                  <li> npm i styled-components </li>
                </span>
                {/*  */}
                <span className="sstitle"> styled-components 설명 </span>
                <span className="mblock">
                  <li> css 파일을 이용하지 않고 jsx파일에서 태그나 컴포넌트에 스타일을 주는 방법 </li>
                  <li> Css in Js </li>
                  <li> ` (Back quoto) 기호 사용 </li>
                </span>
                {/*  */}
                <span className="sstitle"> styled-components 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li>
                    <li> {' import styled from "styled-components"; '} </li>
                    <li> {' import 컴포넌트 from "./경로"; '} </li> <br />
                    <li> const App = (props) {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li>  {' <컴포넌트> </컴포넌트> '} </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li> <br />
                    <li> const 컴포넌트 = styled.태그`
                      <li> width: 100%; </li>
                      <li> height: 100%; </li>
                      <li> color: {'${(props) => props.color || "red" }; '} </li>
                      <small> props로 color값을 받아오면 받아온 색을 아니면 정해놓은 색을 사용 </small> <br />
                      <li> {' ${(props) => props.color && css` '}
                        <li> color: white; </li>
                        <li> background: white; </li>
                      </li>
                      <li> {' `}`; '} </li>
                    </li>
                    <li> `; </li>
                    <li> const 컴포넌트 = styled(컴포넌트)`
                      <li> width: 100%; </li>
                      <li> height: 100%; </li>
                    </li>
                    <li> `; </li>
                    <li> styled.태그명`
                      <li> width: 100%; </li>
                      <li> height: 100%; </li>
                    </li>
                    <li> `; </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle">
                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle">
                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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
              <summary className="stitle">
                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 설치 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 설명 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 예시 </span>
                <span className="mblock">
                  <ul style={{ listStyle: "none" }}>
                    <li> {' import React from "react"; '} </li> <br />
                    <li> const App = () {'=> {'}
                      <li> return(
                        <li> {'<> '}
                          <li> </li>
                        </li>
                        <li> {'</> '} </li>
                      </li>
                      <li> ); </li>
                    </li>
                    <li> {'}'} </li>
                    <li> export default App; </li>
                  </ul>
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