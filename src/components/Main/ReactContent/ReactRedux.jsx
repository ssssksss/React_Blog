import React from 'react';

const ReactRedux = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> Redux란 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 공식문서 사이트 </h2>
                        <li> <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer"> react redux </a> </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1. 상태를 1곳에서 관리할 수 있어 상태의 변경이나 추적이 용이하다. </li>
                        <li> 2. store 폴더에 state를 넣고 관리한다. </li>
                        <li> 3. Action Dispatch(함수) Store View </li>
                        <li>  </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> redux-devtools-extension으로 크롬 확장 프로그램 redux dev tools에서 redux추적 가능 </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> redux 설치 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> npm i redux react-redux redux-logger </li>
                        <li> npm i -D redux-devtools <small> # (개발단계에서사용)크롬 익스텐션과 연동하려고 설치  </small> </li>
                        <li> 3 </li>
                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> redux 예시 </summary>
                    <div className='block2'>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 index.js </h3>
                                <div className='block4'>
                                    <li> {" import {Provider} from 'react-redux'; "} </li>
                                    <li> {" import {createStore} from 'redux'; "} </li>
                                    <li>  </li> <br />
                                    <li> {" let store = createStore(()=>{ return [{id: 0, name : '멋진신발', quan : 2}] }); "} </li>
                                    <li> render (
                                        <li> {' <Provider store={store}> '}
                                            <li> {' <App/> '} </li>
                                        </li>
                                        <li> {' <Provider> '} </li>
                                    </li>
                                    <li> ); </li>
                                </div>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default ReactRedux;