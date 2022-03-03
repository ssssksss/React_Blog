import React from 'react';

const ReactStyledComponent = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] react styled-components 설치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
            <div className='block4'>
              <li> npm i styled-components </li>
              <li> npm install --save styled-reset <small> css 초기화 </small> </li>
            </div>

            <h2 className='h2'> 📌 리액트+타입스크립트 </h2>
            <div className='block4'>
              <li> npm i styled-components </li>
              <li> npm i -D @types/styled-components </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] 기본사용방법(스타일컴포넌트,css스타일컴포넌트) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 스타일 컴포넌트 </h2>
            <div className="block4">
              <li> import styled from 'styled-components'; </li>
              <li> const 컴포넌트명 = styled.태그명`
                <li> <small> css 코드작성 </small> </li>
              </li>
              <li> `;` </li>
            </div>

            <h2 className='h2'> 📌 css 스타일 컴포넌트 </h2>
            <div className='block4'>
              <li> import {"{css}"} from 'styled-components'; <small> # import 필요 </small> </li>
              <li> const 컴포넌트명 = css`
                <li> <small> css 코드작성 </small> </li>
              </li>
              <li> `; </li>
              <li> 다른 스타일컴포넌트에 {"${스타일 컴포넌트}"} 넣으면 적용이 된다.  </li>
              <li> 다른 스타일컴포넌트에 {"${스타일 컴포넌트} { css코드작성 }"} 넣고 일부 css 코드 수정 가능  </li>
            </div>


            <h2 className='h2'> 📌 스니펫 사용 </h2>
            <div className="block4">
              <li> ismc <small> 컴포넌트 import하는 곳에 사용 </small> </li>
              <li> sc <small> const 어쩌구 저쩌구 만들어줌 </small> </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] ThemeProvider 공통 스타일 관리 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
            <div className='block4'>
              <li> <small> index.js(트리의 최상단에 배치 필요) </small> </li>
              <li> {' import { ThemeProvider } from "styled-components"; '}  </li>
              <li> import theme from "/경로/theme.js"; <small> theme.js 생성 필요 </small> </li>
              <li>  </li> <br />
              <li> {' <ThemeProvider theme={theme}> '}
                <li> {' <컴포넌트1/> '} </li>
                <li> {' <컴포넌트2/> '} </li>
              </li>
              <li> {' </ThemeProvider> '} </li>
            </div>
            <h2 className='h2'> 📌 theme.js </h2>
            <div className='block4'>
              <li> import styled from "styled-components"; </li>
              <li> <small> 스타일 값 규칙들을 정해놓는다. </small> </li>
              <li>  </li> <br />
              <li> {' const calcRem = (size) => `${size / 10}rem`; '} </li>
              <li> const tempStyle1 = {"{"}
                <li> color1: "#aeaeae"; </li>
              </li>
              <li> {"};"} </li>
              <li> const tempStyle2 = {"{"}
                <li> flexCenter: `
                  <li> display: flex; </li>
                  <li> justify-contents: center; </li>
                  <li> align-items: center; </li>
                </li>
                <li> `, </li>
              </li>
              <li> {"};"} </li>
              <li> const list = {"{"}
                <li> sizeS: "100px", </li>
              </li>
              <li> {"};"} </li>
              <li> const tempStyle3 = {"{"}
                <li> {' width: `${list.sizeS}+100`, '} </li>
              </li>
              <li> {"};"} </li>
              <li> const theme = {"{"}
                <li> tempStyle1, </li>
                <li> tempStyle2, </li>
                <li> tempStyle3, </li>
              </li>
              <li> {"};"} </li>
              <li> export default theme; </li>
            </div>

            <h2 className='h2'> 📌 theme.js에서 만든것 사용하는 방법 </h2>
            <div className='block4'>
              <li> const Container = styled.div` <small> 스타일 컴포넌트 정의 </small>
                <li> {' color: ${({ theme }) => theme.tempStyle1.color1}; '} </li>
                <li> {' ${({ theme }) => theme.tempStyle2.flexCenter}; '} </li>
              </li>
              <li> `; </li>
            </div>

            <h2 className='h2'> 📌 리액트+타입스크립트 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 컴포넌트의 Props에 따라 스타일 변경 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 조건에 따라 스타일 주기   </h2>
            <div className='block4'>
              <li> {' ${(props) => (조건문 ? css속성을가진컴포넌트 : css속성을가진컴포넌트) } '} </li>
              <li> {' color = ${(props) => (props.color=="black" ? "black" : props.color ) } '} </li>
              <li> {' color = ${(props) => (props.color || "black" ) } '} <small> props.color가 없으면 black, 있으면 props.color </small> </li>
            </div>

            <h2 className='h2'> 📌 일반적인 기본값설정 </h2>
            <div className='block4'>
              <li> const 스타일컴포넌트 = styled.태그
                <li> {' ${(props) => '}
                  <li> {'   props.primary && css`'} </li>
                  <li> <small> css코드 작성 </small> </li>
                </li>
                <li> {'   `} '} </li> <br />
                <li> {' ${(props) => '}
                  <li> {'   props.secondary && css`'} </li>
                  <li> <small> css코드 작성 </small> </li>
                </li>
                <li> {'   `} '} </li>
              </li>
              <li> `;` </li>
            </div>


            <h2 className='h2'> 📌 애니메이션 css 할 때 사용하는거?  </h2>
            <div className='block4'>
              <li> {' ${(props) => { '}
                <li> {"if(props.애니메이션명) { "}
                  <li> return css`
                    <li> css스타일 코드 작성 </li>
                  </li>
                  <li> `; </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> {"}}"} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] createGlobalStyle(전역 css 설정) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 전역적인 스타일을 설정해놓는 컴포넌트 </li>
            </div>

            <h2 className='h2'> 📌 GlobalStyle.js </h2>
            <div className='block4'>
              <li> {" import { createGlobalStyle } from 'styled-components'; "} </li>
              <li> {" import reset from 'styled-reset'; "} </li>
              <li> const GlobalStyle = createGlobalStyle`
                <li> {' ${reset} '} </li>
                <li> *, *::before, *::after {"{"} </li>
                <li> {"}"} </li>
                <li> body {"{"}
                  <li> <small> 아래처럼 theme을 사용하려면 {" <ThemeProvider theme={theme}> </ThemeProvider>"}
                    안에 GlobalStyle를 선언해야한다. </small> </li>
                  <li> {' color: ${({ theme }) => theme.tempstyle1.color}; '} </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> `; </li>
              <li> export default GlobalStyle; </li>
            </div>

            <h2 className='h2'> 📌 index.js </h2>
            <div className='block4'>
              <li> {"<React.StrictMode>"}
                <li> {" <GlobalStyle/> "} </li>
              </li>
              <li> {"</React.StrictMode>"} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] React Router Dom의 Link태그에 스타일 주기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> const LinkStyle = styled(Link)`
                <li> <small> css 코드 작성 </small> </li>
              </li>
              <li> `; </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [6] 미디어 쿼리, css이벤트 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 미디어 쿼리 </h2>
            <div className='block4'>
              <li> const 스타일컴포넌트 = styled.div`
                <li>  </li>
                <li> @media only screen and (max-width: 768px) {"{"}
                  <li> <small> css 코드 작성 </small> </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> `; </li>
            </div>

            <h2 className='h2'> 📌 css 이벤트 </h2>
            <div className='block4'>
              <li> <small> &연산자는 본인(태그)을 의미 </small> </li>
              <li> const 컴포넌트명 = styled.div`
                <li> css스타일 코드 작성 </li>
                <li> &:hover {"{"}
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> `; </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [7] 자식,형제 등 css선택자  </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components 상속하기,가져오기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 컴포넌트B에 컴포넌트A를 상속한 후 추가 CSS주기 </h3>
              <div className='block4'>
                <li> const 컴포넌트A = styled.div`
                  <li> width: 100px; </li>
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> `; </li>
              </div>
              <div className='block4'>
                <li> const 컴포넌트B = styled(컴포넌트A)`
                  <li> width: 100px; </li>
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> `; </li>
              </div>
              <h3 className='h3'> 🎈 컴포넌트B에 컴포넌트A를 CSS스타일 가져오기 </h3>
              <div className='block4'>
                <li> const 컴포넌트A = styled.div`
                  <li> width: 100px; </li>
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> `; </li>
              </div>
              <div className='block4'>
                <li> const 컴포넌트B = styled(컴포넌트A.withComponent("태그"))`
                  <li> 추가적으로 css 스타일 코드 작성 </li>
                </li>
                <li> `; </li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components html태그 속성 이용하기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" const InputText = styled.input.attrs({ "}
                    <li> {"   type: 'text', "} </li>
                    <li> {"   placeholder: props => props.placeholder || 'Please fill', "} </li>
                  </li>
                  <li> {" })` "}
                    <li> {"   padding: 6px 12px;  "} </li>
                  </li>
                  <li> {" `; "} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components animation </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" const rotation = keyframes` "}
                    <li> {" from{ "}
                      <li> {"transform: rotate(0deg); "} </li>
                    </li>
                    <li> {" } "} </li>
                    <li> {" to{ "}
                      <li> {"transform: rotate(360deg); "} </li>
                    </li>
                    <li> {" } "} </li>
                  </li>
                  <li> {"  `; "} </li>
                  <li>  </li> <br />
                  <li> {"  ${props => { "}
                    <li> {" if (props.rotateAni) { "}
                      <li> {" return css` "}
                        <li> {"animation: ${rotation} ${props.duration}s linear infinite; "} </li>
                      </li>
                      <li> {" `; "} </li>
                    </li>
                    <li> {" } "} </li>
                  </li>
                  <li> {"  }} "} </li>
                  <li>  </li> <br />
                  <li> {"  <Button color='red' rotateAni duration={2}> "}
                    <li> {" 버튼2 "} </li>
                  </li>
                  <li> {"  </Button> "} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> styled-components 태그에 커스텀 속성 주기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> const 컴포넌트명 = styled.태그명.속성명({"{"}
                    <li> 속성: 값, </li>
                    {"})"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> styled-components 중첩 적용 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> const 부모컴포넌트명 = styled.태그명`
                    <li> css스타일 </li>
                    <li> {"${자식컴포넌트명} {"}
                      <li> css스타일 </li>
                    </li>
                    <li>  </li>
                  </li>
                  <li> ` </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components Mixin </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> const 컴포넌트명 = (param1,param2="디폴트값") {" => css` "}
                    <li> css스타일 작성 </li>
                    <li> width: {" ${param1 * 2}px; "} </li>
                  </li>
                  <li> `; </li>
                  <li>  </li> <br />
                  <li> 다른 컴포넌트 css스타일에서 {" ${컴포넌트(param1,param2)}; "} 와 같이 사용 </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components 설치 </summary>
          <div className='block2'>

            <li> cd 설치할폴더경로 </li>
            <li> npm create react-app 프로젝트명 --template typescript </li>
            <li> cd 프로젝트명 </li>
            <li> npm run start <small> 시작이 되는지 테스트 해보기 </small> </li>
            <li> npm i --save-dev install -g typescript </li>
            <li> npm install -D gh-pages </li>
            <li> npm install --save-dev styled-components @types/styled-components babel-plugin-styled-components cross-env</li>
            <div className="block3">
              <li> styled-components <small> 스타일컴포넌트 설치 </small> </li>
              <li> @types/styled-components <small> 타입스크립트를 사용하기 위한 설정 </small> </li>
              <li> babel-plugin-styled-components <small> 디버그 할 때 랜덤 해쉬값이 생성되는데 접두사를 설정할 수 있음 </small> </li>
              <li> 바벨 플러그인에 추가 <small> "plugins": ["babel-plugin-styled-components"] </small> </li>
              <li> cross-env <small> 윈도우와 맥에서 동일한 명령어로 환경 변수를 설정하기 위해 사용 </small> </li>
            </div>
            <div className="block3">
              <li> <h3> package.json </h3> </li>
              <li> "scripts": {"{"}
                <li>   "start": "cross-env NODE_ENV=development webpack-dev-server --open", </li>
                <li>   "prebuild": "rimraf dist", </li>
                <li>   "build": "cross-env NODE_ENV=production webpack --progress" </li>
              </li>
              <li> {"}"}, </li>
            </div>
            <li> <h3> webpack.config.js </h3> </li>
            <div className="block3">
              <li> module.exports = {"{"}
                <li> mode: process.env.NODE_ENV, </li>
              </li>
              <li> {"};"} </li>
            </div>
            <li> <h3> .babelrc </h3> </li>
            <div className="block3">
              <li> "env":{"{"}
                <li> "development": {"{"} <small> 환경변수를 development에서 production으로 바꾸면 사람이 알아보기 어려워짐 </small>
                  <li> "plugins": ["babel-plugin-styled-components"] </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> {"}"} </li>
            </div>

          </div>
        </details>
      </div>

      {/* 끝 */}
    </div>
  );
}

export default ReactStyledComponent;