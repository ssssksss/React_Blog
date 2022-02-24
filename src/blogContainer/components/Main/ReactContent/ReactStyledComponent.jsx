import React from 'react';

const ReactStyledComponent = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] styled-components 설치 </summary>
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

      <div className='block1'>
        <details>
          <summary> styled-components 기본사용방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> import styled from 'styled-components'; </li>
              <li> const 컴포넌트명 = styled.태그명`
                <li> width: 100px; </li>
                <li> css스타일 코드 작성 </li>
              </li>
              <li> `;` </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components 미디어 쿼리 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> const 스타일 = styled.div`
                <li>  </li>
                <li> @media only screen and (max-width: 768px) {"{"}
                  <li>  </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> ``; </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components 전역 스타일 설정하기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 GlobalStyle.js </h3>
                <div className='block4'>
                  <li> import {"{createGlobalStyle"} from "styled-components"; </li>
                  <li> import reset from 'styled-reset'; </li>
                  <li> export const GlobalStyle = createGlobalStyle`
                    <li> {"${reset}"} </li>
                    <li> 스타일 css작성하기 </li>
                  </li>
                  <li> `; </li>
                </div>
              </div>
              <div className='block3'>
                <h3 className='h3'> 🎈 App.js </h3>
                <div className='block4'>
                  <li> import {"{ GlobalStyle }"} from /경로 </li>
                  <li> {"<App>"}
                    <li> {"<GlobalStyle/>"} </li>
                  </li>
                  <li> {"</App>"} </li>
                </div>
              </div>
            </li>
            <h2 className='h2'> ✔ 예시 </h2>
            <h3 className='h3'> 🎈 조상 컴포넌트에서 아래로 스타일 주기 </h3>
            <div className='block4'>
              <li> {" import { createGlobalStyle } from 'styled-components'; "} </li>
              <li>  </li> <br />
              <li> const 컴포넌트명 = createGlobalStyle`
                <li> *{" {  "}
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> {" } "} </li>
              </li>
              <li> `; </li>
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
          <summary> styled-components css 이벤트 사용  </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
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
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components css 스타일 컴포넌트 만들기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 </h3>
              <div className='block4'>
                <li> import {"{css}"} from 'styled-components'; <small> # import 필요 </small> </li>
                <li>  </li> <br />
                <li> const 컴포넌트명 = css`
                  <li> width: 100px; </li>
                  <li> css스타일 코드 작성 </li>
                </li>
                <li> `; </li>
                <li>  </li> <br />
                <li> 다른 컴포넌트 css스타일 안에 {"${스타일 컴포넌트}"} 넣으면 적용이 된다.  </li>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components props 이용하기 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 </h3>
              <div className='block4'>
                <li> const 컴포넌트명 = styled.컴포넌트`
                  <li> width: 100px; </li>
                  <li> css스타일 코드 작성 </li>
                  <li> {" ${(props) => (props.props속성명 ? css속성을가진컴포넌트 : css속성을가진컴포넌트) }"} </li>
                  <li> {" ${(props) => (props.props속성명 || css속성을가진컴포넌트) }"} </li>
                  <li> css스타일: {" ${(props) => (props.props속성명 || css스타일) }"} </li>
                  <li>  </li> <br />

                  <li> color: {'${(props) => props.color || "red" }; '} </li>
                  <small> props로 color값을 받아오면 받아온 색을 아니면 정해놓은 색을 사용 </small> <br />
                  <li> {' ${(props) => props.color && css` '}
                    <li> color: white; </li>
                    <li> background: white; </li>
                  </li>
                </li>
                <li> `; </li>
                <li> {" ${props => { "}
                  <li> {" if (props.애니메이션명) { "}
                    <li> {"return css` "}
                      <li> css스타일 코드 작성 </li>
                    </li>
                    <li> {"`; "} </li>
                    <li> {" } "} </li>
                  </li>
                </li>
                <li> {"}} "} </li>

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
          <summary> React Router Dom의 Link태그에 스타일 주기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> const LinkStyle = styled(Link)` </li>
              <li> 스타일 작성 </li>
              <li> `; </li>
            </div>

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
                  <li> const 컴포넌므여 = styled.태그명.속성명({"{"}
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
          <summary> styled-components ThemeProvider(정리완료) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 정해진 스타일 규격을 만들 수 있다. </li>
            <li> Context API와 같이 동작 </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈theme.js 커스텀 컴포넌트  </h3>
                <div className='block4'>
                  <li> {" const calcRem = (size) => `${size / 16}rem` "} </li>
                  <li> const fontSizes = {"{"}
                    <li> small: calcRem(14); </li>
                    <li> base: calcRem(16); </li>
                  </li>
                  <li> {"};"} </li>
                  <li> const theme {"{"}
                    <li> fontSizes, </li>
                    <li> 위와 같이 추가로 생성해서 만들면된다. </li>
                  </li>
                  <li> {"}"} </li>
                  <li> export default theme; </li>
                </div>
                <h3 className='h3'> 🎈 app.js 같은 최상단 렌더링 구역 </h3>
                <div className='block4'>
                  <li> {"<ThemeProvider theme={theme컴포넌트}>"}
                    <li> 최상단 렌더링 </li>
                  </li>
                  <li> {"</ThemeProvider>"} </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> styled-components createGlobalStyle(정리완료) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 전역적인 스타일을 설정해놓는 컴포넌트 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 GlobalStyle.js </h3>
                <div className='block4'>
                  <li> {" import { createGlobalStyle } from 'styled-components'; "} </li>
                  <li> const GlobalStyle = createGlobalStyle`
                    <li> css코드 작성 </li>
                  </li>
                  <li> `; </li>
                  <li> export default GlobalStyle; </li>
                </div>
                <h3 className='h3'> 🎈 app.js </h3>
                <div className='block4'>
                  <li> {"<>"} </li>
                  <li> {" <GlobalStyle/> "} </li>
                  <li> 코드작성 </li>
                  <li> {"</>"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> styled-components theme(나중에 찾아보기) </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
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

      {/* 끝 */}
    </div>
  );
}

export default ReactStyledComponent;