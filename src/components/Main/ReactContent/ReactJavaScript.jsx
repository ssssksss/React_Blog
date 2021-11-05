import React, { useEffect, useRef } from 'react';

const ReactJavascript = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 외부에 자바스크립트 파일을 생성하고 react 태그 내부에서 함수 실행하기  </summary>
                        <div className='block2'>

                            <h2> 📌 test.js </h2>
                            <li> {' export function f1() { '}
                                <li> {' 	alert("test"); '} </li>
                            </li>
                            <li> {' } '} </li>

                            <h2> 📌 react.jsx </h2>
                            <li> import * as Test1 from './test.js'; </li>
                            <li> {' const Test = (props) => { '}
                                <li> return (
                                    <li> {' <button onClick={() => Test1.f1()} style={{ width: "200px" }}> 123 </button> '} </li>
                                </li>
                                <li> ) </li>
                            </li>
                            <li> {'}'} </li>
                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 제목 </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className="block3">
                                    <li> <h3>  </h3>
                                        <li>  </li>
                                        <div className='block4'>
                                            <li> </li>
                                        </div>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default ReactJavascript;