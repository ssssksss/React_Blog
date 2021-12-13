import React from 'react';

const ReactRouter = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> react-router-dom 6 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> npm install react-router-dom --save </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> 📌 5버전에서 6버전으로 바뀐 것 </h2>
                        <li> {'<Switch> -> <Routes> '} </li>
                        <li> {'<Route compenent={COMPONENT}/> -> <Route element={<COMPONENT/>}/> '} </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ react-router-dom 5 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> import {'{BrowserRouter}'}  from 'react-router-dom'; </li>
                                    <li>  </li> <br />
                                    <li> {'<BrowserRouter>'}
                                        <li> 여기에 코드 </li>
                                    </li>
                                    <li> {'</BrowserRouter>'} </li>
                                </div>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> import {'{ Route, Switch }'} from 'react-router-dom'; </li>
                                    <li>  </li> <br />
                                    <li> {'<Switch>'}
                                        <li> {' <Route path="/DIRECTORY" component={COMPONENT}></Route> '} </li>
                                    </li>
                                    <li> {'</Switch>'} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default ReactRouter;