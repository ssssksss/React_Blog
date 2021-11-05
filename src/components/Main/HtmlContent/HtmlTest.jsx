import React, { useEffect, useRef } from 'react';
import * as Test1 from './test.js';

const HtmlTest = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 정리 보류..... </summary>
                        <div className='block2'>
                            <button onClick={() => Test1.f1()} style={{ width: "200px" }}> 123 </button>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 주석 : // , /**/ </li>
                            <li> let 변수명;  변수명 = 값; #var도 사용이 가능하지만 전역변수이므로 권장하지 않음 </li>
                            <li> 자바스크립트에서 undefined는 타입이 정해지지 않은 것, 값을 넣지 않을 경우  </li>
                            <li> 자바스크립트에서 null은 값이 정해지지 않은 경우, null을 넣어주어야함  </li>
                            <li> 자바스크립트에서 NaN은 값이 표현될 수 없는 경우 #0을 나누거나 문자열과숫자의 연산 등  </li>
                            <li> const 상수명 = 값; </li>
                            <li> const 상수명 = true, false; </li>
                            <li> let 변수명 = {'{"key":"value", "key":"value"};'} </li>
                            <li> const 심볼명 = Symbol("문자열"); #유일하고 변경 불가능한 기본값, 상수와는 또다름 , 독립적인값, 왜 필요한지느 모르겠음 </li>
                            <li> let a = 10; , a = "문자열";  #자바스크립트는 타입이 고정이 되있지 않아서 원하는 값을 바로 넣어줄 수 있다. </li>
                            <li> 단 타입이 다른 값들끼리 연산이 되지는 않는다. </li>
                            <li> Number() : 문자를 숫자로 변환 , Number("10"+"5")(x) </li>
                            <li> String() : 숫자나 불린등을 문자형으로 변환 </li>
                            <li> Boolean() : 문자나 숫자등을 불린형으로 변환 </li>
                            <li> Object() : 모든 자료형을 객체형으로 변환 </li>
                            <li> parseInt() : 문자형을 int형으로 변환 </li>
                            <li> parseFloat() : 문자형을 float형으로 변환 </li>
                            <li> 산술연산자 : + - * / % **  </li>
                            <li> 비교연산자 : {'> < >= <= == === != !=='}  </li>
                            <li> 대입연산자 : =   </li>
                            <li> 증감연산자 : ++변수 변수++ --변수 변수--   </li>
                            <li> 논리연산자 : and({'&&'}) or({'||'}) not(!)  </li>
                            <li> 비트연산자 : {' & | ^ << >> '}  </li>
                            <li> 삼항연산자 : 변수 = 조건식 ? 참일때 리턴값 : 거짓일때 리턴값  </li>
                            <li> null병합연산자 : const 변수1 = 변수2 ?? 값(변수2의 값이 null,undefined일경우) </li>
                            <li> null병합연산자 : 변수나메소드 ?? 변수2 ?? 변수3 ?? "비어있음"  </li>
                            <small> null,undefined일 경우 ?? 사용 , 매개변수로 받는 default연산자는 null에서는 null값을 출력하는 차이가 있음 </small>
                            <li> 문자열과 문자열을 더하게 되면 하나의 문자열로 만들어진다. </li>
                            <li> ${'{변수명}'} #이와 같이 사용을 해서 변수를 출력하게 만듬 </li>
                            <li> 조건문 : if() , else if() , else </li>
                            <li> 조건문 : swithc(변수)( case 변수값1: 실행문장; break; .... default: 실행문장;   ) </li>
                            <li> 반복문 : while(조건) </li>
                            <li> 반복문 : for(초기값; 조건식; 증감식) </li>
                            <li> 반복문 : continue; #반복문 횟수는 완료되고 반복문의 조건으로 다시 실행  </li>
                            <li> 배열 : 배열명 = [값1,값2, 값3]; </li>
                            <li> let 배열명 = new Array(값1, 값2, 값3) </li>
                            <li> let 배열명 = ["문자열",숫자,true] #배열에 여러가지 데이터 타입이 혼합되어 있어도 문제가 발생하지 않는다.`` </li>
                            <li> let 배열명; 배열[0] = 1; 배열[3] =2; #이와 같이 하여도 배열이 생성이 되고 나머지는 값이 빈 배열 만들어짐 </li>
                            <li> 배열[인덱스값] #배열 인덱싱 </li>
                            <li> 배열.length #배열 길이 </li>
                            <li> 배열.push(값) #배열 마지막에 요소 추가 </li>
                            <li> 배열.shift() #배열에 첫번째값을 제거</li>
                            <li> 배열.pop() #배열 뒤쪽에 값을 제거</li>
                            <li> 배열1.concat(배열2) #2개의 배열을 합침 </li>
                            <li> 배열.join("요소사이에삽입할 문자열") #배열 요소 사이에 원하는 문자를 삽입해서 문자열?로 리턴 </li>
                            <li> 배열.reverse() #배열을 역순으로 배치 </li>
                            <li> 배열.sort() #배열을 오름차순으로 정렬 </li>
                            <li> 배열반복문 : for(let i in 배열) #배열의 수만큼 반복을 한다. , i는 배열의 인덱스를 가리키는 값이라고 생각 </li>
                            <li> 배열반복문 : 배열.foreach(function(item, index, arr)) {'{ }'} #배열 요소의 갯수 만큼 반복 , item은 배열값 , arr은 자기자신의배열을 가져옴 </li>
                            <li> function 사용자정의함수명(매개변수) {'{  }'} #함수 정의(함수 선언식) , 함수 선언식으로 만들면 호이스팅(위치에 상관없이 함수가 에러발생하지 않음)됨 </li>
                            <li> const 함수명 = function(매개변수) {'{ }'} {'{  }'} #함수 정의 및 선언(함수 표현식) ,
                                함수표현식으로 작성하면 호이스팅이 되지 않음, 상단에 미리 선언 필요 </li>
                            <li> 함수명(); #함수 사용 </li>
                            <li> 프로토타입(클래스라고 생각) : 만들어지면 Object 타입도 같이 상속을 받음 </li>
                            <li> function 프로토타입(멤버변수, 멤버변수, 멤버변수) {'{ this.변수 = 변수 ... }'} #프로토타입을 정의? </li>
                            <li> const 객체1 = Object.assign(객체2,객체3); , #객체2,3의 필드를 객체1에 넣어서 하나로 만듬 </li>
                            <li> const 객체1 = (...객체2,...객체3); , #객체2,3의 필드를 객체1에 넣어서 하나로 만듬(Spread Syntax) </li>
                            <li> const 프로토타입객체 = new 클래스?(1,2,3); </li>
                            <li> const 값 = 객체.필드?.(필드의필드); (Optional Chanining) </li>
                            <li> const {'{멤버변수1,멤버변수2} = 매개변수(객체) '} , #객체에 있는 멤버변수의 이름에 맞춰 멤버변수에 값이 들어간다. </li>
                            <li> 프로토타입객체.필드명 = 값; #자동으로 프로토타입객체에 필드와 값이 추가가 된다. </li>
                            <li> 프로토타입.prototype.필드명 = 값 #프로토타입에 필드를 추가하는 방법 </li>
                            <li> 프로토타입.prototype.메소드명 = function() {'{ 메소드내용 } '} #프로토 타입에 메소드 추가 생성 </li>
                            <li > <span > Math객체 </span>
                                <li> min() : 최솟값 리턴 </li>
                                <li> max() : 최대값 리턴</li>
                                <li> round() : 소수점 첫째자리 반올림 </li>
                                <li> floor() : 소수점 첫째자리 내림 </li>
                                <li> ceil() : 소수점 첫째자리 올림 </li>
                                <li> random() : 0~1 리턴 </li>
                            </li>
                            <li > <span > String 객체 </span>
                                <li> length : 문자열 길이 </li>
                                <li> indexOf(문자열) : 매개변수가 처음으로 등장하는 위치를 리턴 </li>
                                <li> charAt(index) : 매개변수로 전달된 인덱스에 위치한 문자를 리턴  </li>
                                <li> includes(문자열) : 매개변수로 전달된 문자열이 포함되어 있는지 여부 Boolean 리턴 </li>
                                <li> substring(start_index,end_index) : 시작~종료 인덱스까지 문자열 추출 리턴 </li>
                                <li> substr(start_index,cout) : 시작인데스부터 원하는 갯수까지 문자열 추출 리턴 </li>
                                <li> split(구분자) : 문자열을 구분자 를 기준으로 추출해서 배열로 리턴 </li>
                                <li> replace() : 원본 문자열을 매개변수로 전달된 문자열로 변경 </li>
                                <li> trim() : 문자열의 앞뒤 공백을 제거 </li>
                                <li> toUpperCase() : 문자열을 모두 대문자로 변환 </li>
                                <li> toLowerCase() : 문자열을 모두 소문자로 변환 </li>
                            </li>
                            <li > <span > Data 객체 </span>
                                <small> 객체이므로 new Data()로 사용 </small>
                                <li> Date(21,7,16) #1921년 8월 16일 </li>
                                <li> Date(2021,7,16) #2021년 8월 16일 </li>
                                <li> Date([1900년도 기준],[0~11],일,시,분,초,밀리초)  </li>
                                <li> Data객체.getFullYear() : 년</li>
                                <li> Data객체.getMonth() : 월</li>
                                <li> Data객체.getDate() : 일</li>
                                <li> Data객체.getHours() : 시</li>
                                <li> Data객체.getMinutes() : 분</li>
                                <li> Data객체.getSeconds() : 초</li>
                            </li>
                            <li > <span > window 객체 </span>
                                <li> 객체 = window.setTimeout(메소드명,ms); #ms시간 뒤에 메소드 실행 </li>
                                <li> clearTimeout(객체); #setTimeout 메소드를 취소시킴 </li>
                                <li> 객체 = window.setInterval(메소드명,ms); #ms시간 마다 메소드 실행 </li>
                            </li>
                            <li > <span > location 객체 </span>
                                <li> href : </li>
                                <li> protocol :  </li>
                                <li> hostname : </li>
                                <li> pathname : </li>
                            </li>
                            <li > <span > document 객체 </span>
                                <li> getElementsByTagName() : 해당 태그이름의 요소를 모두 선택 </li>
                                <li> getElementById : 해당 아이디 요소를 선택</li>
                                <li> getElementsByClassName() : 해당 클래스 요소를 모두 선택 </li>
                                <li> getElementsByName() : 해당 name 요소를 모두 선택 </li>
                                <li> querySelectorAll(css요소 입력) : 해당 선택자 요소를 모두 선택 </li>
                                <li>  </li>
                            </li>
                            <li> 자바스크립트 html출력 </li>
                            <li> document.write() #body에 출력 </li>
                            <li> console.log() #브라우저 콘솔창에 출력 </li>
                            <li> {'<script src="경로.js"> </script> '} </li>
                            <li> 'use strict'; #strict mode를 사용, 문법적으로 맞게끔 설정 </li>
                            <li> alert() 또는 window.alert() : 사용자에게 메세지를 보여주고, 확인을 기다립니다. </li>
                            <li> confirm() 또는 window.confirm() : 사용자에게 메세지를 보여주고, 확인이나 취소를 누르면 그 결과를 불리언값으로 리턴합니다. </li>
                            <li> prompt() 또는 window.prompt() : 사용자에게 메세지를 보여주고, 사용자가 입력한 문자열을 리턴합니다. </li>

                        </div>
                    </details>
                </div>



                <div className='block1'>
                    <details>
                        <summary> 자바스크립트란 </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 자바스크립트 확장 프레임워크 </h2>
                            <li> Express, Fastify, Koa </li>
                            <li> React, Vue.js, Angular.js, Ember.js, Svelte </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 자바스크립트 설치 </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 익스텐션 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 익스텐션 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

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

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default HtmlTest;