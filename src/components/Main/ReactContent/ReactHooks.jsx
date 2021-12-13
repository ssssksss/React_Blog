import React from 'react';

const ReactHooks = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> useState </summary>
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
                                    <li>  </li>
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
        </div>
    );
}

export default ReactHooks;