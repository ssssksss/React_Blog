import React from 'react';

const ReactReduxSaga = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> redux-saga  </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설치 </h2>
                        <li> npm install redux-saga @types/redux-saga </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> <a href="https://redux-advanced.vlpt.us/2/05.html" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
                        <li> 비동기작업같이 순수하지 않은 작업들을 처리하기 위한 리덕스 미들웨어 입니다. </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈  </h3>
                                <div className='block4'>
                                    <li> {" import { createStore, applyMiddleware } from 'redux'; "} </li>
                                    <li> {" import rootReducer from '../reducers'; "} </li>
                                    <li> {" import createSagaMiddleware from 'redux-saga'; "} </li>
                                    <li> {" import rootSaga from '../sagas'; "} </li>
                                    <li> {" const sagaMiddleware = createSagaMiddleware(); "} </li>
                                    <li> {" const configureStore = () => { "}
                                        <li> {"   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); "} </li>
                                        <li> {"   sagaMiddleware.run(rootSaga); "} </li>
                                        <li> {"   return store; "} </li>
                                    </li>
                                    <li> {" }; "} </li>
                                    <li> {" export default configureStore; "} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> createSagaMiddleware() </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 사가 미들웨어를 생성하는 함수 </li>
                        <li> 만들어서 createStore함수의 2번째 인자의 applyMiddleware에 넣어서 사용한다. </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> import createSagaMiddleware from 'redux-saga'; </li>
                                    <li> import rootSaga from '../sagas'; </li>
                                    <li> const sagaMiddleware = createSagaMiddleware(); </li>
                                    <li> {" const configureStore = () => { "}
                                        <li> const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); </li>
                                        <li> sagaMiddleware.run(rootSaga); </li>
                                        <li> return store; </li>
                                    </li>
                                    <li> {"};"} </li>
                                    <li> export default configureStore; </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> rootSaga 생성 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {" export function* rootSaga() { "}
                                        <li> {"   yield all([counterSaga()]); "} </li>
                                    </li>
                                    <li> {" } "} </li>
                                </div>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {" import { all, fork } from 'redux-saga/effects'; "} </li>
                                    <li> {" import {authSaga} from './auth'; "} </li>
                                    <li> {" import {placeSaga} from './place'; "} </li>
                                    <li> {" export default function* rootSaga() { "}
                                        <li> {"   yield all([ "}
                                            <li> {"     fork(authSaga), "} </li>
                                            <li> {"     fork(placeSaga) "} </li>
                                        </li>
                                        <li> {"   ]); "} </li>
                                    </li>
                                    <li> {" } "} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 커스텀 saga 생성 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> put : 새로운 액션을 dispatch 한다. </li>
                        <li> delay : 작업을 지연시킨다.  </li>
                        <li> takeEvery: 액션을 모니터링해서, 발생하면 특정 함수를 실행시킨다. </li>
                        <li> createAction : 액션을 생성자로 일일히 귀찮게 만들지 않고 간단하게 만들어주는 함수 </li>
                        <li> handleActions :  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {" import { delay } from 'redux-saga'; "} </li>
                                    <li> {" import { put, takeEvery } from 'redux-saga/effects'; "} </li>
                                    <li> {" import { handleActions, createAction } from 'redux-actions'; "} </li>
                                    <li> const INCREMENT = 'INCREMENT'; </li>
                                    <li> export const increment = createAction(INCREMENT); </li>
                                    <li> {" function* incrementAsyncSaga() { "}
                                        <li> {"   yield delay(1000); "} </li>
                                        <li> {"   yield put(increment()); "} </li>
                                    </li>
                                    <li> {" } "} </li>
                                    <li> {" export function* counterSaga() { "}
                                        <li> {"   yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga); "} </li>
                                    </li>
                                    <li> {" } "} </li>
                                    <li> {" export default handleActions( "}
                                        <li> {"   { "}
                                            <li> {"     [INCREMENT]: (state, action) => state + 1, "} </li>
                                        </li>
                                        <li> {"   }, "} </li>
                                        <li> {"   1 "} </li>
                                    </li>
                                    <li> {" ); "} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> createAction, handleActions </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 createAction </h2>
                        <li> 액션을 생성자로 일일히 귀찮게 만들지 않고 간단하게 만들어주는 함수 </li>
                        <li> 기존 방법
                            <div className="block4">
                                <li> {" export const increment = (index) => ({ "}
                                    <li> {"     type: types.INCREMENT, "} </li>
                                    <li> {"     index "} </li>
                                </li>
                                <li> {" }); "} </li>
                            </div>
                        </li>
                        <li> createAction 함수 사용
                            <div className="block4">
                                <li> export const increment = createAction(types.INCREMENT); </li>
                                <li> {" 사용할 때는 increment({상태: 상태값, 상태: 상태값}) "}
                                    <small> 이와 같이 사용하면 알아서 들어간다. , 단 무슨 값이 들어가야하는지 모름으로 주석을 달아주어야 한다. </small> </li>
                            </div>
                        </li>

                        <h2 className='h2'> 📌 handleActions(아직 모르겠다.) </h2>
                        <li> 리듀서에서 액션을 switch문을 이용해서 처리하는 것을 대신해주는 함수 </li>
                        <div className="block4">
                            <li> export default handleActions {"({"}
                                <li> [액션명]: (state, action) {"=> {"}
                                    <li> const 상태 = state.get("상태키"); </li>
                                    <li> return state.set('상태키',상태.push(??) </li>
                                    <li> return state.set('상태키',상태.pop() </li>
                                    <li> return state.set('상태키',상태.update(??) </li>
                                    <li> )) </li>
                                </li>
                                <li> {"}, "} </li>
                            </li>
                            <li> {"}, initialState); "} </li>
                        </div>
                        <li>  </li>


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

export default ReactReduxSaga;