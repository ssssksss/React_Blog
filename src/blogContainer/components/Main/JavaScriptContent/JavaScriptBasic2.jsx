import React from 'react';

const JavaScriptBasic2 = (props) => {

    return (
        <div className="common_style">


            <div className='block1'>
                <details>
                    <summary> Closure - <small> # 조금더 공부가 필요한 부분 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 클로져란? </h2>
                        <li> 외부 함수의 실행이 끝나도 외부 함수 안에 있는 변수를 사용할 수 있게 해준다. </li>
                        <li> 함수에서 리턴값안에 리턴값을 넣어서 외부에서 사용할 수 있게 해주는 방법이다. </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> JS에서는 함수를 함수에 대입할 수 있다. var f1 = function f2 {' { return function f3() { retrun 1; } } '} <small> var f1 = {' function f3() { retrun 1; } '} </small> </li>
                        <li> JS에서 함수1을 함수2에 대입했을 때 그때 당시의 함수1에 들어있는 지역변수 등의 환경을 기억해서 가지고 있는 함수2를 클로저라 한다. </li>
                        <h4 className="h4"> 클로저 예시 </h4>
                        <div className="block4">
                            <li> {' function f1(x,y) { '}
                                <li> {' 	return function(z) { '}
                                    <li> {' 		return x*y+z; '} </li>
                                </li>
                                <li> {' 	}; '} </li>
                            </li>
                            <li> {' } '} </li> <br />
                            <li> {' var f2 = f1(1,1); '} <small> # 클로저 , f2 = function(z) {' { return 1*1+z } '}; </small> </li>
                            <li> {' var f3 = f1(2,2); '} <small> # 클로저 , f3 = function(z) {' { return 2*2+z } '}; </small> </li>
                            <li> {' console.log(f2(1)); '} <small> # 1*1+1 </small>  </li>
                            <li> {' console.log(f3(1)); '} <small> # 2*2+2 </small>  </li>

                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Promise </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 비동기 처리에 사용되는 객체 </li>

                        <h2 className='h2'> 📌 사용 이유 </h2>
                        <li> 어떠한 일을 완료가 되기전에 진행하면 안되므로 완벽하게 끝나고 완료된 상태를 사용하기 위해서 </li>
                        <li> 콜백중첩을 방지 할 수 있다. </li>

                        <h2 className='h2'> 📌 Promise 상태 </h2>
                        <li> 1. pending : 초기상태나 완료전 상태 </li>
                        <li> 2. fulfilled : 성공적으로 완료한 상태 </li>
                        <li> 3. rejected : 실패한 상태 </li>

                        <h2 className='h2'> 📌 Promise 전부 완료후 실행 </h2>
                        <li> Promise.all([PROMISE1,PROMISE2,...]).then(FUNCTION) </li>

                        <h2 className='h2'> 📌 예외처리 </h2>
                        <li> .catch(e {'=>'} {'{'}
                            <li> console.log(e); </li>
                        </li>
                        <li> {')};'} </li>

                        <h2 className='h2'> 📌 Promise 체이닝 </h2>
                        <li> .then(FUCNTION)(return new Promise.then(FUCNTION){'{return new Promise 무한 반복 가능}'} ) </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 promise 예시 </h3>
                                <div className='block4'>
                                    <li> const PROMISE = function(param){'{'}
                                        <li> return new Promise(function(resolve,reject){'{'}
                                            <li> if(param) {'{ resolve(""); }'}; </li>
                                            <li> else(param) {'{ reject(""); }'}; </li>
                                        </li>
                                        <li> {'}'}); </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <li>  </li> <br />
                                    <li> PROMISE(true).then(function(success){'{'}
                                        <li> console.log("success"); </li>
                                    </li>
                                    <li> {'}'}, function(failure) {'{'}
                                        <li> console.log("failure"); </li>
                                    </li>
                                    <li> {'});'} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> async/await </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 async 설명 </h2>
                        <li> async를 이용하여 함수를 async함수로 만들어준다. </li>
                        <li> async는 리턴값으로 Promise 객체를 리턴한다. </li>

                        <h2 className='h2'> 📌 예시 </h2>
                        <li> 아래와 같이 비동기함수를 만들면 fulfill상태가 되므로 .then을 붙여서 사용 </li>
                        <li> function FUNCTION() {' {return "test"}; '} <small> # 일반함수 </small> </li>
                        <li> async FUNCTION() {' {return "test"}; '} <small> # 비동기함수 </small> </li>
                        <li> async () {'=>'} {' {return "test"}; '} <small> # 비동기함수 </small> </li>

                        <h2 className='h2'> 📌 await </h2>
                        <li> await는 async함수 내에서만 사용가능하다. </li>
                        <li> promise에서 .then으로 처리하는 것을 await를 이용하여 처리가 가능하다. </li>
                        <li> 코드가 .then으로 쓰는것보다 보기 좋다. </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 예시 </h3>
                                <div className='block4'>
                                    <li>  </li>
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

export default JavaScriptBasic2;