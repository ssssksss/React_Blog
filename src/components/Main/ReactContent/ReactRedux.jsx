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
     <summary> redux 설치 </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> npm i redux react-redux redux-logger </li>
      <li> npm i -D redux-devtools <small> # (개발단계에서사용)크롬 익스텐션과 연동하려고 설치  </small> </li>

      <h2 className='h2'> 📌 추가 설치 </h2>
      <li> redux-devtools-extension으로 크롬 확장 프로그램 redux dev tools에서 redux추적 가능 </li>
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
  </div>
 );
}

export default ReactRedux;