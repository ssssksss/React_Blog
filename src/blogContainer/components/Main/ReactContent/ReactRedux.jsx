import React from 'react';

const ReactRedux = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] redux 설치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 자바스크립트 설치 </h2>
            <div className='block4'>
              <li> npm i redux react-redux redux-logger </li>
              <li> npm i -D redux-devtools <small> # (개발단계에서사용)크롬 익스텐션과 연동하려고 설치, 크롬 확장 프로그램 redux dev tools에서 redux추적 가능  </small> </li>
              <li> npm i --save redux-actions </li>
            </div>

            <h2 className='h2'> 📌 타입스크립트 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li> npm i --save-dev @types/redux-actions </li>
            </div>


            <h2 className='h2'> 📌 문서나 설명 참고 </h2>
            <div className='block4'>
              <a href="https://ko.redux.js.org/" target="_blank" rel="noopener noreferrer"> 리덕스 공식 문서 </a>
              <a href="https://lunit.gitbook.io/redux-in-korean/" target="_blank" rel="noopener noreferrer"> 한국사람을 위한 리덕스 공식 문서 설명? </a>
            </div>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> [1] redux + 자바스크립트 기본 예시 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h2 className='h2'> 📌 npm 설치  </h2>
                <div className='block4'>
                  <li> npm i redux react-redux redux-logger </li>
                  <li> npm i react-router-dom --save </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/index.js </h2>
                <div className='block4'>
                  <li> {" import { createStore } from 'redux'; "} </li>
                  <li> {" import rootReducer from './reducer'; "} </li>
                  <li> {" const store = createStore(rootReducer); "} </li>
                  <li> {" export default store; "} </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/reducer.js </h2>
                <div className='block4'>
                  <li> {" import { combineReducers } from 'redux'; "} </li>
                  <li> {" import authReducer from './auth/reducer'; "} </li>
                  <li> {" const rootReducer = combineReducers({ "}
                    <li> {"auth: authReducer "} </li>
                  </li>
                  <li> {" }); "} </li>
                  <li> {" export default rootReducer; "} </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/auth/index.js </h2>
                <div className='block4'>
                  <li> export * from "./actions" </li>
                  <li> export * from "./reducer" </li>
                  <li> export * from "./type" </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/auth/action.js </h2>
                <div className='block4'>
                  <li> {" import { IS_LOGIN } from './type'; "} </li>
                  <li> {" export const isLogin = (payload) => { "}
                    <li> {"return { "}
                      <li> {"  type: IS_LOGIN, "} </li>
                      <li> {"  payload: payload "} </li>
                    </li>
                    <li> {"} "} </li>
                  </li>
                  <li> {" }; "} </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/auth/reducer.js </h2>
                <div className='block4'>
                  <li> {" import { IS_LOGIN } from './types'; "} </li>
                  <li> {" const initialState = { "}
                    <li> {"isLogin: false "} </li>
                  </li>
                  <li> {" }; "} </li>
                  <li> {" const authReducer = (state = initialState, action) => { "}
                    <li> {"switch (action.type) { "}
                      <li> {"  case IS_LOGIN: "} </li>
                      <li> {" return { "}
                        <li> {"...state, "} </li>
                        <li> {"isLogin: action.payload "} </li>
                      </li>
                      <li> {" } "} </li>
                      <li> {"  default: "}
                        <li> {" return state; "} </li>
                      </li>
                    </li>
                    <li> {"} "} </li>
                  </li>
                  <li> {" }; "} </li>
                  <li> {" export default authReducer; "} </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 store/auth/type.js </h2>
                <div className='block4'>
                  <li> export const IS_LOGIN = "IS_LOGIN"; </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 index.js </h2>
                <div className='block4'>
                  <li> {" import { BrowserRouter } from 'react-router-dom'; "} </li>
                  <li> {" import { Provider } from 'react-redux'; "} </li>
                  <li> {" import store from './store/index'; "} </li>
                  <li> {" import history from './util/history'; "} </li>
                  <li> {" <Provider store={store}> "}
                    <li> {"<BrowserRouter history={history}> "}
                      <li> {"  <App /> "} </li>
                    </li>
                    <li> {"</BrowserRouter> "} </li>
                  </li>
                  <li> {" </Provider> "} </li>
                </div>
              </div>
              <div className="block3">
                <h2 className='h2'> 📌 util/history.js </h2>
                <div className='block4'>
                  <li> {" import { createBrowserHistory } from 'history' "} </li>
                  <li> {" const history = createBrowserHistory(); "} </li>
                  <li> {" export default history "} </li>
                </div>
              </div>
              <div className='block3'>
                <h2 className='h2'> 📌 적용할.js </h2>
                <div className='block4'>
                  <li> {" import { isLogin } from '../store/auth/action'; "} </li>
                  <li> {" import { useDispatch, useSelector } from 'react-redux'; "} </li>
                  <li> <small> 아래 3줄은 메소드 내에 선언하면 안된다. </small> </li>
                  <li> const dispatch = useDispatch(); </li>
                  <li> dispatch(isLogin(true)); <small> import로 액션함수 불러오기 </small> </li>
                  <li> {" const isLogin = useSelector((state) => state.auth); "} </li>
                  <li> <small> auth는 store/reducer.js에 auth: authReducer, 즉 authReducer를 뜻하는 것이고 </small> </li>
                  <li> <small> isLogin는 store/auth/reducer.js에서 state인 isLogin을 뜻한다. </small> </li>
                  <li> console.log(auth.isLogin); <small> = authReducer.isLogin </small> </li>
                  <li> {/* //dispatch({ type: "IS_LOGIN", payload: true }); */} <small> 이렇게도 가능 </small> </li>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] redux + 타입스크립트 기본 예시(좀 더 개선 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 store/index.ts </h2>
            <div className='block4'>
              <li> {' import { createStore } from "redux"; '} </li>
              <li> {' import rootReducer from "./reducers"; '} </li>
              <li> {' export const store = createStore(rootReducer); '} </li>
            </div>

            <h2 className='h2'> 📌 store/reducers.ts </h2>
            <div className='block4'>
              <li> {' import { combineReducers } from "redux"; '} </li>
              <li> {' import { authReducer } from "./auth"; '} </li>
              <li> {' const rootReducer = combineReducers({ '}
                <li> {'   auth: authReducer, '} </li>
              </li>
              <li> {' }); '} </li>
              <li> {' export default rootReducer; '} </li>
              <li> {' export type RootState = ReturnType<typeof rootReducer>; '} </li>
            </div>

            <h2 className='h2'> 📌 store/auth/index.ts </h2>
            <div className='block4'>
              <li> export * from "./actions" </li>
              <li> export * from "./reducers" </li>
              <li> export * from "./types" </li>
            </div>

            <h2 className='h2'> 📌 store/auth/actions.ts </h2>
            <div className='block4'>
              <li> {' import { TYPE_NAME } from "./types"; '} </li>
              <li> {' type ACTION_PAYLOAD = { '}
                <li> {'   auth1: string; '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export const ACTION_FUNC = (payload: ACTION_PAYLOAD) => { '}
                <li> {'   return { '}
                  <li> {'     type: TYPE_NAME, '} </li>
                  <li> {'     payload: payload.auth1, '} </li>
                </li>
                <li> {'   }; '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export type ACTION_INSTANCE = ReturnType<typeof ACTION_FUNC>; '} </li>
            </div>

            <h2 className='h2'> 📌 store/auth/reducers.ts </h2>
            <div className='block4'>
              <li> {' import * as actions from "./actions"; '} </li>
              <li> {' const initialState = { '}
                <li> {'   auth1: "user", '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export const authReducer = ( '}
                <li> {'   state = initialState, '} </li>
                <li> {'   action: actions.ACTION_INSTANCE '} </li>
                <li> {' ) => { '}
                  <li> {'   switch (action.type) { '}
                    <li> {'     case "auth/TYPE_NAME": '}
                      <li> {'       return { ...state, auth1: action.payload }; '} </li>
                    </li>
                    <li> {'     default: '}
                      <li> {'       return state; '} </li>
                    </li>
                  </li>
                </li>
                <li> {'   } '} </li>
              </li>
              <li> {' }; '} </li>
            </div>

            <h2 className='h2'> 📌 store/auth/types.ts </h2>
            <div className='block4'>
              <li> export const TYPE_NAME = "auth/TYPE_NAME"; </li>
            </div>

            <h2 className='h2'> 📌 _app.ts  </h2>
            <div className='block4'>
              <li> {' import { Provider } from "react-redux"; '} </li>
              <li> {' import { store } from "store/index"; '} </li>
              <li> {' <Provider store={store}> '}
                <li> {' <GlobalStyle /> '} </li>
                <li> {' <App /> '} </li>
              </li>
              <li> {' </Provider> '} </li>
            </div>

            <h2 className='h2'> 📌 /Private1.ts  </h2>
            <div className='block4'>
              <li> {' import { ACTION_FUNC } from "@/store/auth/actions"; '} </li>
              <li> {' import * as React from "react"; '} </li>
              <li> {' import { useDispatch, useSelector } from "react-redux"; '} </li>
              <li> {' import { RootState } from "store/reducers"; '} </li>
              <li> {' interface IPrivate1Props {} '} </li>
              <li> {' const Private1: React.FunctionComponent<IPrivate1Props> = () => { '}
                <li> {'   const dispatch = useDispatch(); '} </li>
                <li> {'   let test = useSelector((state: RootState) => state.auth.auth1); '} </li>
                <li> {'   const TestHandler = () => { '}
                  <li> {'     dispatch(ACTION_FUNC({ auth1: "admin" })); '} </li>
                </li>
                <li> {'   }; '} </li>
                <li> {'   return ( '}
                  <li> {'     <> '}
                    <li> {'       <button onClick={() => TestHandler()}> 버튼 </button> '} </li>
                    <li> {'       {test} '} </li>
                  </li>
                  <li> {'     </> '} </li>
                </li>
                <li> {'   ); '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default Private1; '} </li>
            </div>

            <h2 className='h2'> 📌 tsconfig.json </h2>
            <div className='block4'>
              <li> {' { '}
                <li> {'  "target": "es5", '} </li>
                <li> {'  "baseUrl": ".", '} </li>
                <li> {'  "paths": { '}
                  <li> {' "@/store/*": ["store/*"] '} </li>
                </li>
                <li> {' }, '} </li>
              </li>
              <li> {' } '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] redux-persist (나중에 다시 알아보기) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm install --save redux-persist </li>
              <li> npm install --save @types/redux-persist </li>
            </div>

            <h2 className='h2'> 📌 store/reducers.tsx </h2>
            <div className='block4'>
              <li>  </li>
              <li> {' import { persistReducer } from "redux-persist"; '} </li>
              <li> import storage from "redux-persist/lib/storage" <small> 로컬스토리지 </small> </li>
              <li> import storageSession from "redux-persist/lib/storage/session" <small> 세션스토리지 </small> </li>
              <li> {' const persistConfig = { '}
                <li> {'   key: "root", '} </li>
                <li> {'   storage, '} </li>
                <li> {'   whitelist: ["리듀서"] '} <small> 선택한 리듀서만 스토리지에 저장 </small> </li>
                <li> {'   blacklist: ["리듀서"] '} <small> 선택한 리듀서만 스토리지에 제외하고 저장 </small> </li>
              </li>
              <li> {' }; '} </li>
              <li> {' const rootReducer = combineReducers({ '}
                <li> {'   category: categoryReducer, '} </li>
              </li>
              <li> {' }); '} </li>
              <li> {' export default persistReducer(persistConfig, rootReducer); '} </li>
              <li> {' export type RootState = ReturnType<typeof persistReducer>; '} </li>
            </div>

            <h2 className='h2'> 📌 _app.tsx </h2>
            <div className='block4'>
              <li> {' import { persistStore } from "redux-persist"; '} </li>
              <li> {' import { PersistGate } from "redux-persist/integration/react"; '} </li>
              <li> {' const persistor = persistStore(store); '} </li>
              <li> return (
                <li> {' <PersistGate loading={null} persistor={persistor}> '}
                  <li> {'<App/> '} </li>
                </li>
                <li> {' </PersistGate> '} </li>
              </li>
              <li> ); </li>
            </div>



          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux store </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트(/store/index.js) </h2>
            <div className='block4'>
              <li> <small> 프로젝트에 오직 단 1개만 존재해야한다. </small> </li>
              <li> {' import {createStore} from "redux" '} </li>
              <li> import rootReducer from './reducer'; <small> 리듀서 생성 필요 </small> </li>
              <li> const store = createStore(rootReducer); </li>
              <li> export default store; </li>
            </div>

            <h2 className='h2'> 📌 store 메소드 </h2>
            <div className='block4'>
              <li> store.getState() <small> store의 상태값을 가져옴 </small> </li>
              <li> store.subscribe(함수?) </li>
              <li> store.dispatch(액션함수()) </li>
              <li> store.replaceReducer <small> 사용중인 리듀서를 교체하는 메소드? </small> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux action </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 원하는 액션에 따라 상태값을 원하는 대로 변경가능하게 해준다. </li>
              <li> type을 무조건 선언을 해주어야한다. </li>
            </div>

            <h2 className='h2'> 📌 리액트+자바스크립트(기본), store/temp/action.js </h2>
            <div className='block4'>
              <li> {' import { 액션타입명 } from "./type"; '} <small> 타입을 상단에 선언 및 정의 </small> </li>
              <li> export const 액션메소드명 = (payload) {' => { '}
                <li> return {' { '}
                  <li> type: 액션타입명, </li>
                  <li> payload: payload </li>
                </li>
                <li> {' } '} </li>
              </li>
              <li> {' }; '} </li>
            </div>

            <h2 className='h2'> 📌 리액트+자바스크립트(redux-actions) </h2>
            <div className='block4'>
              <li> {' import { createAction } from "redux-actions"; '} </li>
              <li> {' const 액션타입명 = "/temp/액션타입명" '} <small> user는 폴더 경로였나? </small> </li>
              <li> {' export const 액션메소드명 = createAction(액션타입명); '} </li>
              <li> {' export const 액션메소드명 = createAction(액션타입명, 액션데이터 => 액션데이터값 ); '} <small> 1개일 때 </small> </li>
              <li> {' export const customActionName = createAction(액션타입명, {액션데이터1,액션데이터2,액션데이터3})=>({액션데이터1값,액션데이터2값,액션데이터3값})); '} <small> 여러개일 때 </small> </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux reducer </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트(루트리듀서), /store/reducer.js </h2>
            <div className='block4'>
              <li> {' import { combineReducers } from "redux"; '} </li>
              <li> {' import {리듀서명} from "./경로"; '} </li>
              <li> {' const rootReducer = combineReducers({ '}
                <li> {' 리듀서별칭: 리듀서명, '} </li>
                <li> {' 리듀서명, '} </li>
              </li>
              <li> {' }); '} </li>
              <li> export default rootReducer; </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 리액트+자바스크립트(기본), /store/temp/reducer.js </h2>
            <div className='block4'>
              <li> {" import { 액션타입 } from './types'; "} </li>
              <li> {" const initialState = { "}
                <li> {" 상태명: 상태값 "} </li>
              </li>
              <li> {" }; "} </li>
              <li> {" const 리듀서명 = (state = initialState, action) => { "}
                <li> {"switch (action.type) { "}
                  <li> {"  case 액션타입: "} </li>
                  <li> {" return { "}
                    <li> {" ...state, "} </li>
                    <li> {" 상태명: action.액션데이터 "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li> {"  default: "}
                    <li> {" return state; "} </li>
                  </li>
                </li>
                <li> {"} "} </li>
              </li>
              <li> {" }; "} </li>
              <li> {" export default 리듀서명; "} </li>
            </div>

            <h2 className='h2'> 📌 리액트+자바스크립트(redux-action), 나중에 다시 찾아보기 </h2>
            <div className='block4'>
              <li> {' import { handleActions } from "redux-actions"; '} </li>
              <li> {' const reducer = handleActions({ '}
                <li> {' 액션타입명: (state,action) => {{...state, user=action.payload }} '} </li>
              </li>
              <li> {' }); '} </li>
            </div>

            <h2 className='h2'> 📌 리액트+타입스크립트(루트리듀서), /store/reducer.ts </h2>
            <div className='block4'>
              <li> {' import { combineReducers } from "redux"; '} </li>
              <li> {' import {리듀서} from "./경로"; '} </li>
              <li> {' const rootReducer = combineReducers({ '}
                <li> {' 리듀서별칭: 리듀서, '} </li>
              </li>
              <li> {' }); '} </li>
              <li> export default rootReducer; </li>
              <li> {' export type RootState = ReturnType<typeof rootReducer>; '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux dispatch </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
            <div className='block4'>
              <li> {' import { useDispatch } from "react-redux"; '} </li>
              <li> const dispatch = useDispatch(); </li>
              <li> dispatch(액션메소드명(인자값));  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux useSelector </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 리액트에서 리덕스 상태를 조회할때 사용 </li>
              <li> 상태를 조회해서 상태가 변하지 않으면 리렌더링을 하지 않음 </li>
              <li> useSelector의 2번째 인자는 equalityFn으로 이전값과 같으면 true, 다른면 false(리렌더링) </li>
              <li> 2번째 인자로 shallowEqual을 사용하면 객체 내부에 제일 첫번째로 겉에 있는 값들만 검사한다. </li>
            </div>


            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
            <div className="block4">
              <li> let 변수명 = useSelector(state {"=>"} state.리듀서명); </li>
              <li> {" const {var1,var2} = useSelector(state => ({ var1: state.리듀서명.상태명, var2: state.리듀서명.상태명 })); "}
                <small> 이와 같은 방법을 사용하면 배먼 새로운 객체를 만들어서 무조건 리렌더링이 된다. </small>
                <div className="block4">
                  <li> 해결방법1 </li>
                  <li> {" const {var1,var2} = useSelector(state => ({ var1: state.리듀서명.상태명, var2: state.리듀서명.상태명 }),shallowEqual); "}  </li>
                  <li> 해결방법2 </li>
                  <li> useSelector를 여러번 사용한다. </li>
                </div>
              </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] redux middleware </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
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
          <summary> [] redux subscribe </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
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
          <summary> [] redux persist </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
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
          <summary> [] redux connect </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 리액트+자바스크립트 </h2>
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
          <summary> [] Redux Toolkit </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm install @reduxjs/toolkit </li>
              <li>  </li>
              <li>  </li>
            </div>

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
          <summary> [] Redux Toolkit configureStore </summary>
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
          <summary> [] Redux Toolkit createReducer </summary>
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
          <summary> [] Redux Toolkit createAction </summary>
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
          <summary> [] Redux Toolkit createSlice </summary>
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
          <summary> [] Redux Toolkit createAsyncThunk </summary>
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
          <summary> [] Redux Toolkit createEntityAdapter </summary>
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
          <summary> [] Redux Toolkit createSelector  </summary>
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
          <summary> Redux란 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 공식문서 사이트 </h2>
            <li> <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer"> react redux </a> </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1. 상태를 1곳에서 관리할 수 있어 상태의 변경이나 추적이 용이하다. </li>
            <li> 2. store 폴더에 state를 넣고 관리한다. </li>
            <li> 3. Action Dispatch(함수) Store View </li>
            <li> 4. store는 1개만 만든다.(여러개의 스토어 사용 지양) </li>
            <li> 5. 기존의 상태값들은 건드리지 않고 새로운 상태를 만들어서 업데이트를 해준다. </li>
            <li> 6. 똑같은 값일 때 인풋과 아웃풋은 같아야 한다. </li>
            <li> 7. ACTION_TYPE은 대문자로 적는다. </li>
            <li> 8. Ducks패턴(액션,액션함수,리듀서 등을 하나의 파일에서 관리하는 패턴)
              <div className="block4">
                <li> reducer 는 export default로 내보낸다. </li>
                <li> action 은 export로 내보낸다. </li>
              </div>
            </li>
            <li>  </li> <br />
            <li> 자꾸에러가 나서 아래와 같이 설치 된다는 보장은 없음.. </li>
            <li> npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties </li>
            <li>  </li>

            <h2 className='h2'> 📌 해석 </h2>
            <li> Store = createStore(리듀서) </li>
            <li> Store.dispatch(액션함수) {"<-"} 디스패치함수() {"<-"} 사용자이벤트 </li>
            <h2 className='h2'> 📌 리덕스 작동 과정 </h2>
            <li> component - dispatch - action - handle - reducer - update - store - subscribe </li>
            <li> 컴포넌트에서 값이 변동 </li>
            <li> action을 dispatch로 작동 </li>
            <li> action이 reducer를 작동 </li>
            <li> reducer가 액션에 맞는 값을 store에 저장 </li>
            <li> store에 저장된 값을 컴포넌트에 반영 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 미들 웨어 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 클로저를 이용한 구조로 작동 </li>
            <li> 클로저로 store,next를 외부에서 접근할 수 없고 오로지 action으로만 제어 가능한 구조 </li>
            <li>  </li>

            <h2 className='h2'> 📌 미들웨어 구조 </h2>
            <div className="block4">
              <li> {" const middleware1 = store = next = action =>{ "}
                <li> {"return next(action); "} </li>
              </li>
              <li> {" } "} </li>
            </div>
            <div className="block4">
              <li> {" const middleware1 = store =>{ "}
                <li> {"return next=>{ "}
                  <li> {" return action=>{ "}
                    <li> {"return next(action); "} </li>
                  </li>
                  <li> {" } "} </li>
                </li>
                <li> {"} "} </li>
              </li>
              <li> {" } "} </li>
            </div>

            <h2 className='h2'> 📌 applyMiddleware </h2>
            <li>  </li>
            <li>  </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 커넥터 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Provider 컴포넌트 하위에 있는 컴포넌트가 Store에 접근할 수 있게 해준다. </li>
            <li>  </li>
            <h2 className='h2'> 📌 mapStateToProps </h2>
            <li> store가 업데이트 될 때 자동으로 호출하게 한다. , null이나 undefined를 주면 자동으로 호출이 되지 않는다.(아직 모르겠음) </li>
            <li> connect()의 첫번째 인자로 사용 </li>
            <div className="block4">
              <li> const mapStateToProps = (state, 객체) {" => ({ "}
                <li> todo: state.todos <small> , 1번 방법(위에 매개변수에서 객체 제거) </small> </li>
                <li> todo: state.todos[객체.키] <small> , 2번 방법 </small> </li>
              </li>
              <li> {" }) "} </li>
              <li> export default connect(mapStateToProps)(컴포넌트명) </li>
            </div>
            <h2 className='h2'> 📌 mapDispatchToProps </h2>
            <li> store에 접근한 컴포넌트가 store의 상태를 바꾸기 위해 dispatch를 사용할 수 있게 해준다. </li>
            <li> connect()의 두번째 인자로 사용 </li>
            <h2 className='h2'> 📌  </h2>
            <li>  </li>
            <h2 className='h2'> 📌  </h2>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { connect } from 'react-redux' "} </li>
                  <li> 컴포넌트 만들어서 사용 </li>
                  <li> export default connect()(컴포넌트명); </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 카운터 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 프리젠테이셔널 컴포넌트 </li>
            <li> 리덕스 스토어에 직접 접근하지 않고 필요한 값만 받아와서 사용하는 컴포넌트 </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 Counter.js - 보조(실제 보여지는 화면) </h3>
                <div className='block4'>
                  <li> const 컴포넌트 = () {" => { param1,param2,param3 } {"}
                    <li>  </li>
                    <li> return ({"<>"}
                      <li> {"<button onClick={param1}>버튼</button>"} </li>
                      <li> {"<button onClick={param2}>버튼</button>"} </li>
                      <li> {"<button onClick={param3}>버튼</button>"} </li>
                    </li>
                    <li> {"</> );"} </li>
                  </li>
                  <li> {"}"} </li>
                  <li> export default 컴포넌트 </li>
                </div>
                <h3 className='h3'> 🎈 컨테이너.js - 실제 사용 </h3>
                <div className='block4'>
                  <li> const {"{상태,상태}"}= useSelector(state {" => ({ "})  <small> , useSelector은 스토어의 상태를 조회하는 hook  </small>
                    <li> 상태 : state.값 </li>
                    <li> 상태 : state.값 </li>
                    <li>  </li>
                  </li>
                  <li> {"}"} </li>
                  <li> const dispatch = useDispatch(); <small> 스토어의 dispatch함수를 사용하게 해주는 hook, store.dispatch </small> </li>
                  <li> const 디스패치함수1 = () {" => dispatch(액션함수1()) "} </li>
                  <li> const 디스패치함수2 = () {" => dispatch(액션함수2()) "} </li>
                  <li> const 디스패치함수3 = () {" => dispatch(액션함수3()) "} </li>
                  <li> return (
                    <li> {"<Counter>"}
                      <li> {"param1 = {디스패치함수1}"} </li>
                      <li> {"param2 = {디스패치함수2}"} </li>
                      <li> {"param3 = {디스패치함수3}"} </li>
                    </li>
                    <li> {"</Counter> );"} </li>
                  </li>
                  <li>  </li>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Redux Provider , Provider </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 리덕스를 사용할 공간을 설정 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {"<Provider store={store}>"}
                    <li>  </li>
                  </li>
                  <li> {"</Provider>"} </li>
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

export default ReactRedux;