import React from 'react';

const ReactHooks = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [1] useContext </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> props를 글로벌하게 사용가능 해준다 </li>
            </div>

            <h2 className='h2'> 📌 TestContextProvider </h2>
            <div className='block4'>
              <li> {'import { createContext } from "react"; '} </li>
              <li> {' export const TestContext = createContext({ '}
                <li> props1명: props값, </li>
                <li> props2명: props값, </li>
              </li>
              <li> {' )}; '} </li>
              <li> {' const TestContextProvider = ({children}) => { '}
                <li> {' return ( '}
                  <li> {' <TestContext.Provider value={{props1,props2}}> '}
                    <li> {' {children} '} </li>
                  </li>
                  <li> {' </TestContext.Provider> '} </li>
                </li>
                <li> {' ); '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default TestContextProvider; '} </li>
            </div>

            <h2 className='h2'> 📌 App.js </h2>
            <div className='block4'>
              <li> import TestContextProvider from ~~~ </li>
              <li> {' const App = () => { '}
                <li> {' return ( '}
                  <li> {' <TestContextProvider> '}
                    <li> {' <div className="App"> </div> '} </li>
                  </li>
                  <li> {' </TestContextProvider> '} </li>
                </li>
                <li> {' ); '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default App; '} </li>
            </div>

            <h2 className='h2'> 📌 사용 </h2>
            <div className='block4'>
              <li> {' import { useContext } from "react; '} </li>
              <li> {' import { TestContext } from "경로"; '} </li>
              <li> {' const { props1, props2 } = useContext(TestContext);  '} </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] useRef </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> DOM의 특정 엘리먼트를 선택할 때 사용 </li>
              <li> input이나 textarea 등에 focus() 를 할 때 주로 사용 </li>
              <li> 득정 DOM의 스크롤 위치를 가져올 때 </li>
              <li> 외부 라이브러리를 사용할 때   </li>
              <li> Ref의 사용은 최대한 안하는 것이 좋다. </li>
              <li> 리렌더링이 되지는 않는다. </li>
              <li> .current 프로퍼티에 저장하고 사용한다. </li>
              <li> .current를 바로 수정하지 못하는 경우가 있다.(타입이 안맞는 등) </li>
            </div>

            <h2 className='h2'> 📌 사용 방법 </h2>
            <div className='block4'>
              <li> {' const Ref명 = useRef<HTMLInputElement>(); '} <small> 타입을 맞추고 초기값을 주게되면 그 타입만 사용해야한다. </small> </li>
              <li> const Ref명 = useRef(); <small> 선언 </small> </li>
              <li> Ref명.current.focus(); <small> 메소드 같은 곳에 사용 </small> </li>
              <li> {' <태그 ref={Ref명} /> '} <small> 태그에 참조를 할 수 있게 선언 </small> </li>
            </div>

            <h2 className='h2'> 📌 예시 </h2>
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
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] useState </summary>
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

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 1. 버튼을 누르면 값이 증가하는 상황 </h3>
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
                <h3 className='h3'> 🎈 2. 배열로 받아와서 값을 덮어쓰기하는것 같은데.. </h3>
                <div className="block4">
                  <li> {' import React from "react"; '} </li> <br />
                  <li> const App = () {'=> {'}
                    <li> {' const [inputs,setInputs] = useState({ '}
                      <li> input1: '', </li>
                      <li> input2: ''  </li>
                    </li>
                    <li> {' }); '} </li> <br />
                    <li> {' const {input1, input2} = inputs; '} <small> # inputs 상태값을 변수로 만듬 </small> </li> <br />
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
          <summary> [4] useMemo </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 연산된 값을 보관 </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li> {' import React, { useMemo } from "react"; '} </li>
              <li> {' const test = useMemo(()=>함수(x,y),[x,y]); '} <small> x,y가 변할때만 작동됨  </small> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] typesciprt useState </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> {' type 타입명 = { '} </li>
              <li> {' }; '} </li>
              <li> {' const [a,setA] = useState<타입>(); '} </li>
              <li> {' const [a,setA] = useState([] as 타입); '} <small> Type Assertion 문법 </small> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks - useContext </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> props를 전역적으로 사용가능하게 해준다. </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 기본 컴포넌트 </h3>
                <div className='block4'>
                  <h4 className='h4'> 🎈 1. Context 컴포넌트를 만든다. </h4>
                  <li> export const ABContext = createContext {" ({ "}
                    <li> a: "", </li>
                    <li> {" b: ()=>{}, "} </li>
                  </li>
                  <li> {"});"} </li>
                  <h4 className='h4'> 🎈 2. 컴포넌트로 감싼다. </h4>
                  <li> const 컴포넌트 = (){"=> {"}
                    <li> {" const value = useMemo(()=> ({a,b}),[a,b]); "} <small> 안해주면 이 데이터를 사용하는
                      컴포넌트가 모두 렌더링이 된다고 한다. </small> </li>
                    <li> {" <ABContext.Provider value={{a,b}}> "}
                      <li> 컴포넌트 작성~~ </li>
                    </li>
                    <li> {" </ABContext.Provider> "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li> export default 컴포넌트; </li>
                </div>
                <h3 className='h3'> 🎈 3. 불러온다 (다른파일)  </h3>
                <div className='block4'>
                  <li> {" import { ABContext } from './'; "} </li>
                  <li> const 컴포넌트 = (){"=> {"}
                    <li> {" const { a,b } = useContext(ABContext); "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li> export default 컴포넌트; </li>
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
            <li> 랜더링이 될 때마다 실행이 된다. 단, []안에 들어가는 의존성 값에 따라 달라진다. </li>
            <li> react가 화면을 다 보여주고 나서 실행(에러 발생이 덜 날듯) </li>
            <li> return을 반환해서 종료도 가능하다. </li>
            <li> useEffect 내부에 addEventListener를 넣고 setState로 렌더링을 발생시키고 return으로 이벤트를 삭제해주면
              초기의 useEffect로 다시 만들수 있음 </li>
            <li> useEffect [상태값 등]배열에 값이 변할 때 마다 렌더링을 하게 해준다. 만약에 비워두면
              처음에 렌더링 될 때만 실행되고 이후에는 실행되지 않는다.  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 useEffect(함수,렌더링 의존할 값) </h3>
                <div className='block4'>
                  <li> {'import React, { useState, useEffect } from "react"; '} </li> <br />
                  <li> {'const [num,setNum] = useState(0); '} </li>
                  <li> </li> <br />
                  <li> {' useEffect(()=>{ '}
                    <li> {' console.log("test useeffct"); '} </li>
                    <li> {' return() => { '} </li>
                    <li> {'   console.log("test end useeffct"); '} </li>
                    <li> {' }; '} </li>
                  </li>
                  <li> {'},[num]);'} </li>
                  <li> </li> <br />
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
          <summary> Functional Component </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {' import React from "react"; '} </li> <br />
                  <li> function App() {'{'}
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
          <summary> useCallback(정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 함수를 재사용가능하게 해준다. </li>
            <li>  </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> const 함수 = userCallback({"()=>{"}
                    <li>  </li>
                  </li>
                  <li> {"},[상태]);"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> React Hooks Event </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default ReactHooks;