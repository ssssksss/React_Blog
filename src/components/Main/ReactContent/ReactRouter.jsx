import React from 'react';

const ReactRouter = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> react-router-dom version 5 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> react-router-dom version 6 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설치 </h2>
                        <li> npm install react-router-dom --save </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> Link는 a태그의 속성을 가지고 있다. (css에서 a태그로 인식) </li>
                        <li> Route 컴포넌트를 이용하면 props 속성으로 match,location,history 3개를 같이 보내준다. </li>

                        <h2 className='h2'> ✔ react-router-dom version 6 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 react-router-dom version 6 예시 </h3>
                                <div className='block4'>
                                    <li> {" import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; "} </li>
                                    <li> </li> <br />
                                    <li> {' <BrowserRouter> '}
                                        <li> {' <Link to="/경로> 경로클릭 </Link>  '} </li>
                                        <li>  </li> <br />
                                        <li> {' <Routes> '}
                                            <li> {' <Route path="/경로" element={<컴포넌트/>} />'} </li>
                                        </li>
                                        <li> {' </Routes> '} </li>
                                    </li>
                                    <li> {' </BrowserRouter> '} </li>
                                </div>
                            </div>
                        </li>
                        {/*<li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>*/}

                    </div>
                </details>
            </div>


        </div>
    );
}

export default ReactRouter;