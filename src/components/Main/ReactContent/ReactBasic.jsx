import React from 'react';

const ReactBasic = (props) => {


  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> React 설치방법 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> Node.js 설치를하고 cmd에서 설치되었는지 확인, node -v , npm -v </li>
              <li> Vscode 설치 </li>
              <li> Vscode 터미널에서 cd React시작할폴더명(\Users\sk\Desktop\git_ssssksss\CODE) , # 이와같이 입력 </li>
              <li> yarn create react-app 리액트폴더 혹은 npm create react-app 리액트폴더명 (폴더생성됨,폴더의이름은 모두 소문자)</li>
              <li> 만약에 yarn이 설치되지 않는다면 npm install -g yarn </li>
              <li> cd 리액트폴더명 </li>
            </div>
            <li>  npm start  입력하여서 잘 작동되나 확인 </li>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 리액트 기초 설명 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> 자바스크립트만 이용하여 작동을 하려면 많은 이벤트 처리와 DOM에 접근이 필요하다.
                그렇게 되면 복잡해지고 속도가 느려질수도 있다. 그래서 나온 것들인 Angular, React, Vue 등이 있다.  </li>
              <li> 1. React는 프레임워크가 아닌 JavaScript를 이용한 라이브러리이다. </li>
              <li> 2. React는 실제 DOM을 이용하지 않고 가상 DOM을 사용 </li>
              <li> 3. React는 컴포넌트 단위로 구분해서 사용하여 UI를 만들기 유용하다. </li>
              <li> 4. Facebook에서 만든 오픈 소스 자바스크립트 UI라이브러리 </li>
              <li> 5. SSR과 CSR을 2개다 지원한다. </li>
              <li> 6. React DOM 파일이 실제 DOM에 랜더링을 시킨다 <small> # // TODO: 무슨말인지 좀더 자세히 알아볼 것 </small> </li>
              <li> 7. Babel : 자바스크립트 컴파일러 ( ES6 {'->'} ES5 로 바꾸어 준다.) <small> # // TODO: Babel에 대해서 좀더 자세히 알아볼 것 </small> </li>
              <li> 8. React 컴포넌트는 소문자가 아닌 대문자로 시작하여 HTML태그와 구분을 한다. </li>
              <li> 9. JSX(Javascript XML)파일은 JavaScript에서 HTML형식을 사용할 수 있게해준다.(Babel이 JSX Loader를 사용해서 JSX를 native JavaScript로 변환) </li>
              <li> 10. React는 SPA(Single Page Application)이므로 한번에 모든 페이지를 불러오면 딜레이가 생겨 렌더링을 부분적으로 일어나게 만들어야 한다. </li>
              <li> 11. JSX 코드는 무조건 태그로 감싼 컨테이너 형태로 작동이 된다.  </li>
            </div>

            <h2 className='h2'> 📌 Babel </h2>
            <li> 자바스크립트 컴파일러 </li>
            <li> ES6 {'->'} ES5로 변환시켜준다. </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> JSX </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Module </h2>
            <li> import React from 'react'; <small> #  jsx문법 사용 모듈 </small></li>
            <li> import ReactDOM from 'react-dom'; <small> #  브라우저, 서버사이드용 렌더링 메소드 지원,
              React앱 진입점에서 최초 렌더링 하기 위해서 사용 </small></li>
            <li> import COMPONENT from './경로'; <small> #  컴포넌트를 가져오는 방법</small> </li>
            <li> import reportWebVitals from './reportWebVitals'; <small> # React 성능을 측정하기 위한 것 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Native(공부 보류) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1. 모바일 앱을 React로 만들 수 있게 도와주는 프레임 워크 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> native JavaScript </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <li> JSX를 사용하지 않고서 컴포넌트를 만드는 방법 </li>
            <li> JavaScript로만 React를 구현할 수 있지만 굳이 그럴필요는 없을 것 같다. </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 컴포넌트 처럼 사용하면 된다.
              <div className='block3'>
                <h3 className='h3'> 🎈 정의 </h3>
                <div className='block4'>
                  <li> var c = React.createElement; </li>
                  <li> c = ("div",null,"hello world"); </li>
                </div>
                <h3 className='h3'> 🎈 사용 </h3>
                <div className='block4'>
                  <li> {' {c} '} <small> # hello world 출력 </small> </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 리액트 깃허브 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트 파일을 깃허브에 올리기 </h2>
            <div className="block3">
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
              <li> 다음부터는 7,9~12 번만 반복하여서 사용</li>
            </div>

            <h2 className='h2'> 📌 리액트 깃허브 에러 </h2>
            <div className="block3">
              <li> LF will be replaced by CRLF in.gitignore. The file will have its original line endings in your working directory </li>
              <li> 해석: LF가 CRLF도 대체 될거다.파일은 당신의 작업 디렉토리 끝에 줄에 있다.</li>
              <li>LF(Line-Feed) Mac,Linux \n, CR(Carriage-Return) Mac \r, CRLF(Carriage-Return+Line-Feed) Windows,DOS \r\n  </li>
              <li> 경고가 발생한 이유: Git이 OS마다 줄바꿈 문자열이 달라서 뭘 사용할지 몰라서 </li>
              <li> 해결방안: Window, DOS에서는 git config--global core.autocrlf true </li>
              <li> 해결방안: Linux, MAC에서는 git config--global core.autocrlf input </li>
            </div>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> React Directory(정리 보류) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> src폴더 : 사용할 코드들을 저장할 장소 </li>
            <li> public폴더 : static 자원을 모아놓을 공간(img 등) </li>
            <li> index.js : virtual dom을 랜더링하는 파일 (index.html에서 변경해서 사용이 가능하지만 굳이 그럴필요는 없을 것 같다.) </li>
            <li> App.js : 처음에 있는 컴포넌트 지우고 새로운 컴포넌트를 만들어서 사용해도 문제가 없다. </li>
            <li> package-json : 설치하는 모듈, 스크립트 등이 설정되있는 파일 <small> // TODO: # 정확히는 안 들여보아서 나중에 보아야 겠다. </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> src/components: 컴포넌트들이 위치하는 디렉토리입니다. </li>
            <li> src/pages: 각 라우트들이 위치하는 디렉토리 입니다. </li>
            <li> src/client: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기
              때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다. </li>
            <li> src/server: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다. </li>
            <li> src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다. </li>
            <li> src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다. </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Class Component </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <li> state관리와 라이프 사이클의 사용때문에 기존에 사용 </li>
            <li> 코드가 길고 복잡  </li>
            <li> 부분적인 재사용이 어려움  </li>
            <li> 3 </li>
          </div>

          <h2 className='h2'> ✔ 예시 </h2>
          <li> 소제목
            <div className='block3'>
              <h3 className='h3'> 🎈 </h3>
              <div className='block4'>
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
              </div>
            </div>
          </li>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Class - React Context </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 하위 컴포넌트에 state값을 props를 이용하지 않고 주기 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks - functional Component </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {' import React from "react"; '} </li> <br />
                  <li> const App = () {'=> {'}
                    <li> return(
                      <li> {' <div> </div>'} </li>
                    </li>
                    <li> ); </li>
                  </li>
                  <li> {'}'} </li>
                  <li> export default App; </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks - useState </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
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

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
                <h3 className='h3'> 🎈 </h3>
                <div className="block4">
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
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks -  useRef </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 특정 DOM을 선택할 때 사용 </li>
            <li> input이나 textarea 등에 focus() 를 할 때 사용 </li>
            <li> 득정 DOM의 스크롤 위치를 가져올 때 </li>
            <li> 외부 라이브러리를 사용할 때   </li>
            <li> Ref의 사용은 최대한 안하는 것이 좋다. </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks - useEffect </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 상태값이 변할 때 렌더링 </li>
            <li> 랜더링이 될 때마다 실행이 된다. </li>
            <li> useEffect [상태값 등]배열에 값이 변할 때 마다 렌더링을 하게 해준다. 만약에 비워두면
              처음에 렌더링 될 때만 실행되고 이후에는 실행되지 않는다.  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Router - React library </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 React Router 설치 </h2>
            <li> npm install react-router-dom </li>
            <li> yarn add react-router-dom </li>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ React Router 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Redux - library </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <li> npm i react-redux redux </li>
            <li> yarn add redux react-redux redux-devtools-extension redux-logger </li>

            <h2 className='h2'> 📌 설명 </h2>
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

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Event </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Mouse </h2>
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

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Css </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
                <h3 className='h3'> 🎈 </h3>
                <div className="block4">
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
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components - React library </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <li> npm i styled-components </li>

            <h2 className='h2'> 📌 styled-components 설명 </h2>
            <li> css 파일을 이용하지 않고 jsx파일에서 태그나 컴포넌트에 스타일을 주는 방법 </li>
            <li> Css in Js </li>
            <li> ` (Back quoto) 기호 사용 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>
    </div>
  );
}

export default ReactBasic;