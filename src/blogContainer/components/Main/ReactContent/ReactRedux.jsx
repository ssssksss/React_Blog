import React from 'react';

const ReactRedux = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] redux 설치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> npm i redux react-redux redux-logger </li>
              <li> npm i -D redux-devtools <small> # (개발단계에서사용)크롬 익스텐션과 연동하려고 설치, 크롬 확장 프로그램 redux dev tools에서 redux추적 가능  </small> </li>
            </div>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> [1] redux 기본 테스트 예시 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h2 className='h2'> 📌 npm 설치  </h2>
                <div className='block4'>
                  <li> npm i redux react-redux redux-logger </li>
                  <li> npm install react-router-dom --save </li>
                  {/*<li> npm install --save history </li>*/}
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
          <summary> redux 예시 </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 index.js </h3>
                <div className='block4'>
                  <li> const redux = require('redux'); </li>
                  <li> const createStore = redux.crateStore; </li>
                  <li> const ADD_TYPE = "ADD_TYPE"; </li>
                  <li> // action은 타입을 가진 Object를 반환 </li>
                  <li> const addAction = () {"=> {"}
                    <li> return {"{"}
                      <li> type : ADD_TYPE </li>
                    </li>
                    <li> {"}"} </li>
                  </li>
                  <li> {"}"} </li> <br />
                  <li> const initialState = {"{"}
                    <li> defaultState = 300 </li>
                  </li>
                  <li> {"}"} </li>
                  <li> const reducer = (state=initialState, action) {"=> {"}
                    <li> switch(action.type) {"{"}
                      <li> case ADD_TYPE:
                        <li> return {"{"}
                          <li> ...state, </li>
                          <li> defaultState = state.defaultState + 1 </li>
                        </li>
                        <li> {"}"} </li>
                        <li> default: return state; </li>
                      </li>
                    </li>
                    <li> {"}"} </li>
                  </li>
                  <li> {"}"} </li>
                  <li>  </li> <br />
                  <li> const store = createStore(reducer); </li>
                  <li> store.dispatch(addAction()); </li>
                  <li> store.subscribe((){"=>{"})
                    <li> console.log(store.getState()); </li>
                  </li>
                  <li> {"}"} </li>
                  <li> store.dispatch(addAction()); </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 리덕스 함수 - useSelector </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 useSelector </h2>
            <div className='block4'>
              <li> 리액트에서 리덕스 상태를 조회할때 사용 </li>
              <li> 상태를 조회해서 상태가 변하지 않으면 리렌더링을 하지 않음 </li>
              <li> useSelector의 2번째 인자는 equalityFn으로 이전값과 같으면 true, 다른면 false(리렌더링) </li>
              <li> 2번째 인자로 shallowEqual을 사용하면 객체 내부에 제일 첫번째로 겉에 있는 값들만 검사한다. </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> const test = useSelector(state {"=>"} state.test); </li>
              <li> {" const {test1,test2} = useSelector(state => ({ test1: state.test1, test2: state.test2 })); "}
                <small> 이와 같은 방법을 사용하면 배먼 새로운 객체를 만들어서 무조건 리렌더링이 된다. </small>
                <div className="block4">
                  <li> 해결방법1 </li>
                  <li> {" const {test1,test2} = useSelector(state => ({ test1: state.test1, test2: state.test2 }),shallowEqual); "}  </li>
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
          <summary> 3. 액션 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 상태값이 어떤 상황에 따라 값이 변하게 하는 방식 </li>
            <li> type은 필수로 1개 있어야 한다. </li>
            <li> 액션을 함수로 만들어서 다른 파일에 보관하고 불러와서 사용하나. </li>
            <li>  </li>

            <h2 className='h2'> 📌 createAction </h2>
            <li> 액션을 간단하게 만들어준다. </li>
            <li> {" import {createAction } from 'redux-actions';"} </li>
            <div className="block4">
              <li> {" export const increment = (index: string) => ({ "}
                <li> {"  type: INCREMENT, "} </li>
                <li> {"  value: index "} </li>
              </li>
              <li> {" }); "} </li>
              <li> increment(3); </li>
            </div>
            <div className="block4">
              <li> export const setAction = createAction(SET_ACTION,{"({index,index1,index2})=>({index,index1,index2})"}); <small> 여러개 넣는 방법 </small> </li>
              <li> setAction({"{index:5,index1:5,index2:5}"}); <small> 여러개 넣는 방법 </small> </li>
              <li> setAction(); </li>
            </div>
            <li>  </li>
            <li>  </li>
            <h2 className='h2'> 📌 handleActions </h2>
            <li> {" import { handleActions } from 'redux-actions';"} </li>
            <li> const reducer = handleAction({"{"}
              <li> {" INCREMENT: (state, action) => ({ "}
                <li> counter: state.counter + action.payload </li>
              </li>
              <li> {"  }), "} </li>
            </li>
            <li> {"}, {counter: 0});"} </li>
            <h2 className='h2'> 📌 액션 구성 </h2>
            <div className="block4">
              <li> type: "액션명" </li>
              <li> data: {"{"}
                <li> 키 : 값, </li>
                <li> 키 : 값, </li>
              </li>
              <li> {"}"} </li>
            </div>
            <h2 className='h2'> 📌 액션을 함수로 만들기 </h2>
            <div className="block4">
              <li> export function Action(data) {"{"}
                <li> return {"{"}
                  <li> type: "액션명" </li>
                  <li> data: {"{"}
                    <li> 키 : 값, </li>
                    <li> data </li>
                  </li>
                  <li> {"}"} </li>
                </li>
                <li> {"};"} </li>
              </li>
              <li> {"}"} </li>
            </div>
            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 </h3>
              <div className='block4'>
                <li> const CHANGE_INPUT_EXAM = "CHANGE_INPUT_EXAM"; </li>
                <li> {" export const setInputExam = (input: string) => ({ "}
                  <li> {" 	type: CHANGE_INPUT_EXAM, "} </li>
                  <li> {" 	payload: input "} </li>
                </li>
                <li> {" }); "} </li>
                <li>  </li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 4. 리듀서 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 액션값을 받아서 이전 상태값과 액션을 발생시키는 함수 </li>
            <li> 마지막 default: 에는 에러 처리 구문을 넣는다고 한다. </li>
            <li> 여러개의 리듀서를 하나로 합친 루트 리듀서가 있다.  </li>
            <h2 className='h2'> 📌 리듀서 구성 </h2>
            <div className="block4">
              <li> type 커스텀액션타입명 = | {" ReturnType<typeof 액션함수명> | ReturnType<typeof 액션함수명>; "} </li>
              <li> interface StateInterface {" { 상태: 타입; 상태: 타입; } "} </li>
              <li> const initialState: StateInterface = {" {상태: '타입에맞는초기값', 상태: '타입에맞는초기값'}; "} </li>
              <li> function reducer(state: StateInterface =initialState, action: 커스텀액션타입명) {"{"}
                <li> switch(action.type) {"{"}
                  <li> case 'TYPE명1':
                    <li> return {" { ...state, 상태: action.액션함수내의키명(출력은 상태와 같아야한다?) }; "}; </li>
                  </li>
                  <li> case 'TYPE명2':
                    <li> return {" { ...state, abc: action.output(abc) }; "}; <small> 액션함수 내부에 output: abc </small>  </li>
                  </li>
                  <li> default:
                    <li> return 상태값반환; </li>
                  </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> {"}"} </li>
            </div>
            <h2 className='h2'> 📌 루트 리듀서  </h2>
            <div className="block4">
              <li> {" import { combineReducers } from 'redux'; "} </li>
              <li> {" import {리듀서1} from './경로'; "} </li>
              <li> {" import {리듀서2} from './경로'; "} </li>
              <li> {" const rootReducer = combineReducers({ "}
                <li> {"별칭: 리듀서1, "} </li>
                <li> {"별칭: 리듀서2, "} </li>
              </li>
              <li> {" }); "} </li>
              <li> {" export default rootReducer; "} </li>
              <li> {" export type RootState = ReturnType<typeof rootReducer>; "}
                <small> 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 스토어에서
                  관리하고 있는 상태를 조회하기 위해서
                  useSelector를 사용 할 때 필요로 합니다. (타입스크립트에서 필요) </small> </li>
            </div>
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
          <summary> 5. 스토어 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1개의 어플리케이션에 1개의 스토어를 만든다. </li>
            <li> 스토어에는 현재 앱의 상태와, 리듀서 그리고 내장함수가 있다. </li>
            <li>  </li>
            <h2 className='h2'> 📌 스토어 구성 </h2>
            <li>  </li>
            <h2 className='h2'> 📌  </h2>
            <li>  </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import {createStore} from 'redux' "} </li>
                  <li> const 스토어 = createStore(리듀서) </li>
                  <li> const state = 스토어.getState(); </li>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 2. 디스패치 그리고 사용 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 스토어의 내장함수 중 하나 </li>
            <li> 디스패치가 상태 이벤트를 감지하는 역할을 한다고 보면된다. </li>
            <li> </li>

            <h2 className='h2'> 📌 디스패치 구성 </h2>
            <li> {" () => { "}
              <li> {"return { "}
                <li> {"  type: “액션명”; "} </li>
              </li>
              <li> {"} "} </li>
            </li>
            <li> {" } "} </li>

            <h2 className='h2'> 📌 디스패치 구조 </h2>
            <li> store.dispatch(액션함수() </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { useDispatch, useSelector } from 'react-redux'; "} </li>
                  <li> {" import { 액션함수, RootState } from '../../store'; "} </li>
                  <li> {" interface I컴포넌트Props { "} </li>
                  <li> {" } "} </li>
                  <li> {" const 컴포넌트명: React.FunctionComponent<I컴포넌트Props> = ()  => {"}
                    <li> const dispatch = useDispatch(); </li>
                    <li> {" const 이벤트핸들러메소드 = (e: any) => dispatch(액션함수(e.target.value)); "} </li>
                    <li>  </li> <br />
                    <li> {" const { 상태 } = useSelector((state: RootState)) => ({ "} <small> {" export type RootState = ReturnType<typeof rootReducer>; "} </small>
                      <li> {" 상태: state.루트리듀서내부의리듀스.상태 "} </li>
                    </li>
                    <li> {"}));"} </li>
                  </li>
                  <li> {"};"} </li>
                  <li> export default 컴포넌트명 </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 구독 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 스토어의 내장 함수중 하나 </li>
            <li> 함수 형태의 값을 파라미터로 받아옴 </li>
            <li> 구독 함수에 특정 함수를 전달해주면, 액션이 디스패치 될때 전달해준 함수가 호출되게 한다. </li>
            <li> store.dispatch(액션함수()); 를 호출할 때마다 스토어에서 만든 함수가 호출된다. </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> const unsubscribe = store.subscribe(스토어에서 만든 함수){"=>{"}
                    <li> console.log(store.getState()); </li>
                  </li>
                  <li> {"}"} </li>
                </div>
              </div>
            </li>

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

      <div className='block1'>
        <details>
          <summary> Redux+Persist (좀 더 알아보기) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <div className='block4'>
              <li> 장점 : 캐시를 이용하여 상태를 유지하기 쉬워진다. </li>
              <li> 단점 : 캐시에 모든 상태값들이 저장되므로 불필요한 메모리들이 낭비가 된다. </li>
            </div>

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

export default ReactRedux;