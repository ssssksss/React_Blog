import React from 'react';

const JavaScriptBasic2 = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] Date </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Date([1900년도 기준],[0~11],일,시,분,초,밀리초) </h2>
            <div className='block4'>
              <li> new Date() , Thu Oct MM YYYY HH:MM:SS GMT+0000  </li>
              <li> Date(21,7,16) <small> 1921년 8월 16일 </small> </li>
              <li> Date(2021,7,16) <small> 2021년 8월 16일 </small> </li>
              <li> Date(2022,7,16,11,11) <small> 2022년 8월 16일 11:11:00 </small> </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getFullYear() : 년 </h2>
            <div className='block4'>
              <li> new Date().getFullYear(); <small> 결과 : {new Date().getFullYear()} </small> </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getMonth() : 현재 월 - 1 </h2>
            <div className='block4'>
              <li> new Date().getMonth(); <small> 결과 : {new Date().getMonth()} </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getDate() : 일 </h2>
            <div className='block4'>
              <li> new Date().getDate(); <small> 결과 : {new Date().getDate()} </small>  </li>
              <li> let preDay = new Date(현재년도,0~11,0).getDate()  <small> 저번달 마지막 날짜 구하기 </small> </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getDay() : 요일, 0(일요일) ~ 6(토요일) </h2>
            <div className='block4'>
              <li> let preDayW = new Date(현재년도,0~11,0).getDay()  <small> 마지막 요일 구하기 </small>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getHours() : 시 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getMinutes() : 분 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Data객체.getSeconds() : 초 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] 자주 사용하는 함수(slice,splice) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 splice </h2>
            <div className='block4'>
              <li> 요소를 제거할 경우는 반환 원본 배열의 값은 변경이 된다. </li>
              <li> splice의 2가지 역할은 배열에서 중간에 끼워 넣거나 중간에 있는 요소를 빼는 것이다.  </li>
              <li> 배열.splice(인덱스,0,넣을값1,넣을값2,...); <small> 배열[인덱스] 에 추가하고 나머지요소는 뒤로 밀려난다. </small> </li>
              <li> 배열.splice(인덱스,제거할요소의개수); <small> 배열[인덱스] 에 있는 요소 제거 </small> </li>
              <li> 배열.splice(인덱스,제거할요소의개수,넣을값1,...); <small> 배열[인덱스] 에 있는 요소 제거하고 추가하기 </small> </li>
              <li> ex{")"} array = [0,1,2,3,4] </li>
              <li> array.splice(1,0,5)의 결과는 [0,5,1,2,3,4] </li>
              <li> array.splice(1,0,5,6)의 결과는 [0,5,6,1,2,3,4] </li>
              <li> array.splice(1,1)의 결과는 [0,2,3,4] </li>
              <li> array.splice(1,2)의 결과는 [0,3,4] </li>
              <li> array.splice(1,2,5,6)의 결과는 [0,5,6,3,4] </li>
              <li> let removeArr = array.splice(1,2,5,6)의 결과는 [1,2]반환 </li>
            </div>

            <h2 className='h2'> 📌 slice </h2>
            <div className='block4'>
              <li> 배열의 일부를 잘라서 반환, 그리고 원본 배열은 변경이 되지 않는다. </li>
              <li> slice에도 2가지 기능이 존재한다. 앞에서부터 자른 나머지 반환, 뒤에서 자른것을 반환  </li>
              <li> 배열.slice(양수인덱스) <small> 인덱스만큼 자르고 나머지 반환 </small> </li>
              <li> 배열.slice(음수인덱스) <small> 뒤에서 인덱스만큼 자른것을 반환 </small> </li>
              <li> ex{")"} array = [0,1,2,3,4] </li>
              <li> array.slice(2)의 결과는 [2,3,4] 반환, 원본배열은 그대로 </li>
              <li> array.slice(-2)의 결과는 [3,4] 반환, 원본배열은 그대로 </li>
              <li> 시간, 날짜 등에서 0을 붙이는 방법 </li>
              <li> ("0"+month).slice(-2) <small> 이와 같이 하면 한자리이면 0이 붙어서 반환 </small> </li>
            </div>

            <h2 className='h2'> 📌  </h2>
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
          <summary> [2] 사용자 정의 태그 속성 사용하기 (data-*) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 data-* </h2>
            <div className='block4'>
              <li> html에서 정해진 태그 속성 외에 사용자가 원하는 속성을 지정하는 방법 </li>
              <li> getAttribute등 사용가능 </li>
              <li> data-사용자정의속성명="값" <small> 사용자정의속성명은 소문자로만 사용해야 한다. </small> </li>
              <li> ex{")"} 예시 </li>
              <li> {' <div data-index-number="1"> 사용자정의 속성 </div>  '} </li>
              <li> dataset으로 불러올 경우 앞에 data를 뺀 카멜표기법사용 <small> 타겟.dataset.사용자정의속성명 </small> </li>
              <li> ex{")"} 예시 </li>
              <li> this.dataset.indexNumber </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 지정한 태그의 속성 등을 가져오는 방법 (dataset) </summary>
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
          <summary> [4] 문자열에서 원하는 구간 추출하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 시작과 길이 </h2>
            <div className='block4'>
              <li> 문자열.substr(시작인덱스,길이); <small> 자른 문자열 반환 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".substr(0,2); <small> 자바 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".substr(2,3); <small> 스크립 </small> </li>
              <li> 문자열.substr(시작인덱스); <small> 자른 문자열 반환 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".substr(3); <small> 크립트 </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 시작과 끝 </h2>
            <div className='block4'>
              <li> 문자열.substring(시작인덱스,끝인덱스); </li>
              <li> {" ex) "} const str = "자바스크립트".substring(2,3); <small> 스 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".substring(-1,3); <small> 자바스 (음수는 0으로 치환, 0~3과 같음) </small> </li>
              <li> {" ex) "} const str = "자바스크립트".substring(5,-3); <small> 자바스크립 (음수는 0으로 치환, 앞뒤과 바뀜, 0~5와 같음) </small> </li>
              <li> 문자열.substring(시작인덱스); </li>
              <li> {" ex) "} const str = "자바스크립트".substring(3); <small> 크립트 </small> </li>
            </div>

            <h2 className='h2'> 📌 잘라서 사용 (subString보다 상위호환) </h2>
            <div className='block4'>
              <li> 음수 인덱스를 지원하기 때문에 상위호환 </li>
              <li> 문자열.slice(시작인덱스,끝인덱스); </li>
              <li> {" ex) "} const str = "자바스크립트".slice(2,3); <small> 스 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".slice(4,-1); <small> 립 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".slice(-3,5); <small> 크립 </small> </li>
              <li> 문자열.slice(시작인덱스); </li>
              <li> {" ex) "} const str = "자바스크립트".slice(3); <small> 크립트 </small> </li>
              <li> {" ex) "} const str = "자바스크립트".slice(-4); <small> 스크립트 </small> </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 구분자로 자르기 </h2>
            <div className='block4'>
              <li> 배열로 반환된다. , 구분자 앞쪽을 기준으로 반환한다. </li>
              <li> 문자열.split("구분자"); <small> 구분자 = , ! / 등등 </small> </li>
              <li> 문자열.split("구분자",숫자); <small> 숫자만큼 자른 배열 반환 </small> </li>
              <li> 문자열.substring(문자열.indexOf("구분자"),문자열.indexOf("구분자")) </li>
              <li> 문자열.substring(문자열.indexOf("구분자"),문자열.lastIndexOf("구분자")) </li>
              <li> 문자열.substring(문자열.indexOf("구분자")+3) </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] pakage.json </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> {' {} 중괄호로 시작한다.  '} </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 속성 </h2>
            <div className='block4'>
              <li> "name": "", <small> 패키지 이름 </small> </li>
              <li> "version": "", <small> 버전이름 , 0.1.1 </small> </li>
              <li> "description": "", <small> 설명 </small> </li>
              <li> "homepage": "", <small> 홈페이지 주소 </small> </li>
              <li> "license": "", <small> 라이센스 </small> </li>
              <li> "contributors": [ <small> 기여자 </small>
                <li> {'{'}
                  <li> "name": <small> 기여자 이름 </small> </li>
                  <li> "url": <small> 기여자 깃허브 주소 등 </small> </li>
                  <li> "githubUsername": <small> 깃허브 유저 이름 </small> </li>
                </li>
                <li> {'}'}, </li>
              </li>
              <li> ], </li>
              <li> "main" : "" <small>  </small> </li>
              <li> "types": "index.d.ts", <small> 파일의 타입 명시? </small> </li>
              <li> "repository": {'{'} <small>  </small>
                <li> "type": "git" <small> 저장소의 타입명 </small> </li>
                <li> "url": ".git" <small> 깃주소 </small> </li>
                <li> "directory": "types/" <small> 깃허브에 디렉토리명인것 같다. </small> </li>
              </li>
              <li> {'}'}, </li>
              <li> "scripts": {'{}'}, <small>  </small> </li>
              <li> "dependencies": {'{'} <small> 의존성 </small>
                <li> "@types/react": "*" <small> 모든 react 타입스크립트 버전에 의존한다. </small> </li>
                <li> "immutable": "~3.7.4" <small> immutable 3.7.4이하 버전에 의존한다. </small> </li>
              </li>
              <li> {'}'}, </li>
              <li> "typesPublisherContentHash": "해쉬값" <small>  </small> </li>
              <li> "typeScriptVersion": "" <small> 타입스크립트 버전 </small> </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [6] readme.md </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> # Installation </li>
              <li> # Summary </li>
              <li> # Details </li>
              <li> ### Additional Details </li>
              <li> # Credits </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [7] 웹팩 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li> {' module.exports = { '}
                <li> {' output: { '}
                  <li> {' filename: "bundle.js", '} </li>
                  <li> {' path: "./dist", '} </li>
                </li>
                <li> {' }, '} </li>
              </li>
              <li> {' } '} </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
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
          <summary> [8] serialize, serializeArray, JSON.stringify, JSON.parse </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 serialize </h2>
            <div className='block4'>
              <li> 폼태그요소.serialize(); </li>
              <li> name=value&name=value&name=value 와 같이 반환 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 serializeArray </h2>
            <div className='block4'>
              <li> 폼태그요소.serializeArray() 는 [JSON 객체 형식으로 반환] </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 JSON.stringify </h2>
            <div className='block4'>
              <li> JSON.stringify(value[, replacer[, space]]) </li>
              <li> JSON.stringify() <small> JS나 객체를 JSON문자열로 변환 </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 JSON.parse() </h2>
            <div className='block4'>
              <li> JSON.parse(text[, reviver]) </li>
              <li> JSON형태를 자바스크립트 값이나 객체로 반환 </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [9] Object </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> {'const cloneObj = Object.assign({},Obj)'} <small> Object 깊은복사 </small> </li>
              <li> {'const cloneObj = Object.assign({name:"name"},Obj)'} <small> 초기값 설정 + Object 깊은복사 </small> </li>
              <li> Object.keys(객체) <small> 객체의 키 배열 반환 </small> </li>
              <li> Object.values(객체) <small> 객체의 값 배열 반환 </small> </li>
              <li> Object.entries(객체) <small> 객체의 키,값 배열 반환 </small> </li>
              <li> Object.fromEntries(배열(키,값)) <small> 배열에 키,값을 객체로 반환 </small> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

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