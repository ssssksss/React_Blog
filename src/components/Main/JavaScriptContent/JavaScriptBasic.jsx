import React from 'react';

const JavaScriptBasic = (props) => {

    return (
        <>
            <div className="common_style">



                <div className='block1'>
                    <details>
                        <summary> 자바스크립트란 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 호이스팅 : JS에서는 변수나 함수를 호출하는 코드보다 아래에 변수나 함수의 정의를
                                적어놓아도 JS엔진이 평가 단계에서 선언된 값을 찾아준다. </li>
                            <li> 스코프 체인 : 외부에서는 내부함수의 값에 접근 할 수 없다.(당연한 말이다.) </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 자바스크립트 엔진 </h2>
                            <li> 평가 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li>  </li>
                            <li> 2 </li>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 선언 및 정의 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 선언 : 자바스크립트 엔진에 변수나메소드 등을 사용하겠다고 알려줌 </li>
                            <li> 정의 : 변수나 메소드에 값을 넣어서 만드는 것(아무것도 넣지 않으면 자바스크립트에서는
                                undefined가 default값으로 들어간다. ) </li>
                            <div className="block4">
                                <li> var x = 10; </li>
                            </div>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 주석 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> // , /* */ </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 변수, 상수 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> var로 변수를 정의하는 것은 코드를 작성할 때 헷갈리게 만든다. </li>
                            <li> 이벤트로 var변수를 불러오면 반복문이 끝난결과의 값을 가져오기도 한다. </li>
                            <li> var로 선언한 변수를 let으로 다시 재선언하게되면 에러가 발생한다. </li>
                            <li> var x=0; <small> # 전역변수로 선언 </small> </li>
                            <li> let x=0; <small> # 지역변수 </small> </li>
                            <div className="block4">
                                <li> let 변수명;  변수명 = 값; #var도 사용이 가능하지만 전역변수이므로 권장하지 않음 </li>
                                <li> let 변수명 = {'{"key":"value", "key":"value"};'} </li>
                            </div>
                            <li> const x=0; <small> # 상수 </small> </li>
                            <div className="block4">
                                <li> const 상수명 = 값; </li>
                                <li> const 상수명 = true, false; </li>
                                <li> const 심볼명 = Symbol("문자열"); #유일하고 변경 불가능한 기본값, 상수와는 또다름 , 독립적인값, 왜 필요한지느 모르겠음 </li>
                                <small> null,undefined일 경우 ?? 사용 , 매개변수로 받는 default연산자는 null에서는 null값을 출력하는 차이가 있음 </small>
                            </div>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Scope </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 동일한 이름의 변수가 존재한다면 스코프의 범위가 더 좁은 변수의 값이 적용된다. </li>
                            <li> 정적 스코프 : 미리 정의된 범위, 초기에 설정해둔 변수나 함수 등 </li>
                            <li> 동적 스코프 : </li>
                            <li> 전역 스코프 : 전역 범위 </li>
                            <li> 지역 스코프 : 지역 범위 </li>
                            <li> 함수 스코프 : 함수안에서만 작동되는 범위 </li>
                            <li> 블럭 스코프 : </li>


                            <h3 className="h3"> 잘못된 예시 </h3>
                            <div className="block3">
                                <li> 1. function에서의 var </li>
                                <div className="block4">
                                    <li> {' function f1() { '}
                                        <li> {' 	var var1 = "test"; '} </li>
                                    </li>
                                    <li> {' } '} </li>
                                    <li> ❌ {' console.log(var1); '} </li>
                                </div>
                                <li> var 과 let </li>
                                <div className="block4">
                                    <li> let var1 = "test1"; </li>
                                    <li> ❌ var var1 = ""; <small> # Syntax Error 발생, let ↔ var로 재선언 불가능 </small> </li>
                                    <li> console.log(var1); </li>
                                </div>

                            </div>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 데이터 타입 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 원시타입 </h2>
                            <li> Call By Value </li>
                            <li> 숫자, 문자, 문자열, Boolean, null, undefined, Symbol, NaN 등 </li>
                            <div className="block4">
                                <li> x = 1; y=x; </li>
                            </div>

                            <h2 className='h2'> 📌 객체타입 </h2>
                            <li> Call By Reference , 값을 heap 공간에 저장하고 그 주소를 참조하는 값을 갖는다. </li>
                            <li> Array, Map, Set, Date, RegExp, WeakMap, WeakSet 등 </li>
                            <div className="block4">
                                <li> x = [1,2,3]; y = x; </li>
                            </div>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 자바스크립트는 타입이 고정이 되있지 않아서 원하는 값을 바로 넣어줄 수 있고 변경도
                                바로 가능하다.</li>
                            <div className="block4">
                                <li> let a = 10; , a = "문자열"; (o) </li>
                            </div>
                            <li> 단 타입이 다른 값들끼리 연산이 되지는 않는다. </li>
                            <li> undefined는 타입이 정해지지 않은 것, 값을 넣지 않을 경우 </li>
                            <div className="block4">
                                <li> var x; <small> # var x = undefined; </small> </li>
                            </div>
                            <li> null은 값이 정해지지 않은 경우, null을 넣어주어야함 </li>
                            <div className="block4">
                                <li> var x = null; </li>
                            </div>
                            <li> NaN은 값이 표현될 수 없는 경우 <small> # 0을 나누거나 문자열과숫자의 연산 등 </small>

                            </li>
                            <div className="block4">
                                <li> var x = 0/1;  </li>
                            </div>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 데이터 변환 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> Number() : 문자를 숫자로 변환</li>
                            <div className="block4">
                                <li> Number("10" + "5") <small> # 105 </small> </li>
                                <li> Number(10 * "55") <small> # 550 </small> </li>
                                <li> Number(10 + "55") <small> # 1055 </small> </li>
                                <li> Number(true+true); <small> # 2 </small> </li>
                                <li> Number(arr객체); <small> # NaN </small> </li>
                            </div>
                            <li> toString() : 숫자나 불린등을 문자형으로 변환 </li>
                            <div className="block4">
                                <li> x=[1,2,3]; y = x.toString(); <small> # "1,2,3" </small>  </li>
                                <li> x=true; y = x.toString(); <small> # "true" </small>  </li>
                                <li> ❌ undefined.toString(); null.toString() NaN.toString() <small> # 에러발생 </small> </li>
                            </div>
                            <li> Boolean() : 문자나 숫자등을 불린형으로 변환 </li>
                            <div className="block">
                                <li> Boolean('false'), Boolean({'{}'}), Boolean([]), Boolean(1) <small> # true </small> </li>
                                <li> Boolean(''), Boolean(NaN), Boolean(null), Boolean(0), Boolean(undefined) <small> # false </small> </li>
                            </div>
                            <li> Object() : 모든 자료형을 객체형으로 변환 </li>
                            <li> parseInt(문자) : 문자형을 int형으로 변환 </li>
                            <li> parseFloat(문자) : 문자형을 float형으로 변환 </li>
                            <li> typeof(객체나 변수명 등) : 객체의 타입을 볼 수 있음 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 연산자 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 산술연산자 : + - * / % **  </li>
                            <div className="block4">
                                <li> "10" + "5" <small> # 105 </small> </li>
                                <li> 10 * "55" <small> # 550 </small> </li>
                                <li> 10 + "55" <small> # 1055 </small> </li>
                                <li> true+true; <small> # 2 </small> </li>
                            </div>
                            <li> 비교연산자 : {'> < >= <= == === != !=='}  </li>
                            <li> 대입연산자 : =   </li>
                            <li> 증감연산자 : ++변수 변수++ --변수 변수--   </li>
                            <li> 논리연산자 : and({'&&'}) or({'||'}) not(!)  </li>
                            <li> 비트연산자 : {' & | ^ << >> '}  </li>
                            <li> 삼항연산자 : 변수 = 조건식 ? 참일때 리턴값 : 거짓일때 리턴값  </li>
                            <li> null병합연산자 : const 변수1 = 변수2 ?? 값(변수2의 값이 null,undefined일경우) </li>
                            <li> null병합연산자 : 변수나메소드 ?? 변수2 ?? 변수3 ?? "비어있음"  </li>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 조건문, 반복문 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 조건문 : if() , else if() , else </li>
                            <li> 조건문 : swithc(변수)( case 변수값1: 실행문장; break; .... default: 실행문장;   ) </li>
                            <li> 반복문 : while(조건) </li>
                            <li> 반복문 : for(초기값; 조건식; 증감식) </li>
                            <li> 반복문 : continue; #반복문 횟수는 완료되고 반복문의 조건으로 다시 실행  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 배열 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
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

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 함수 </summary>
                        <div className='block2'>
                            <h2 className='h2'> 📌 설명 </h2>
                            <li> function 사용자정의함수명(매개변수) {'{  }'} #함수 정의(함수 선언식) , 함수 선언식으로 만들면 호이스팅(위치에 상관없이 함수가 에러발생하지 않음)됨 </li>
                            <li> const 함수명 = function(매개변수) {'{ }'} {'{  }'} #함수 정의 및 선언(함수 표현식) ,
                                함수표현식으로 작성하면 호이스팅이 되지 않음, 상단에 미리 선언 필요 </li>
                            <li> 함수명(); #함수 사용 </li>
                            <h4 className="h4"> 함수 예시 </h4>
                            <div className="block4">
                                <li> function f1(var, array, map) {'{'}
                                    <li> console.log(var); <small> # 일반변수 </small> </li>
                                    <li> console.log(array[0]); <small> # 배열 </small> </li>
                                    <li> console.log(map.key); <small> # Map객체 </small> </li>
                                </li>
                                <li> {'}'} </li> <br />

                                <li> var add_value = function add(num1,num2) {'{ return num1+num2; }'} </li> <br />
                            </div>
                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Closure </summary>
                        <div className='block2'>

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
                        <summary> 프로토타입 (알아볼 것) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
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

                        </div>
                    </details>
                </div>


                <div className='block1'>
                    <details>
                        <summary> Math객체 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> min() : 최솟값 리턴 </li>
                            <li> max() : 최대값 리턴</li>
                            <li> round() : 소수점 첫째자리 반올림 </li>
                            <li> floor() : 소수점 첫째자리 내림 </li>
                            <li> ceil() : 소수점 첫째자리 올림 </li>
                            <li> random() : 0~1 리턴 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> String 객체 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
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

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Data 객체 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
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

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> window 객체 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 객체 = window.setTimeout(메소드명,ms); #ms시간 뒤에 메소드 실행 </li>
                            <li> clearTimeout(객체); #setTimeout 메소드를 취소시킴 </li>
                            <li> 객체 = window.setInterval(메소드명,ms); #ms시간 마다 메소드 실행 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> location 객체</summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> href : </li>
                            <li> protocol :  </li>
                            <li> hostname : </li>
                            <li> pathname : </li>

                        </div>
                    </details>
                </div>



                <div className='block1'>
                    <details>
                        <summary> HTML DOM Element </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> document.createElement("TAG") <small> # 태그 요소를 생성 </small> </li>
                            <li> document.createTextNode() <small> # 텍스트 노드를 생성 </small> </li>
                            <li> document.write() <small> #  </small> </li>
                            <li> document.요소.onclick = function() {'{}'} <small> # 요소를 클릭했을 때 함수를 실행시킴 </small> </li>
                            <li> document.요소.appendChild(노드) <small> # 요소의 자식 노드의 마지막에 삽입 </small> </li>
                            <li> document.요소.prepend(노드) <small> # 요소의 자식 노드의 제일 앞에 삽입 </small> </li>
                            <li> document.요소.insertBefore(노드1,자식노드1) <small> # 요소의 자식노드1 앞에 노드1을 배치함 </small> </li>
                            <div className="block4">
                                <li> var crebtn = document.createElement('button'); </li>
                                <li> var btntext = document.createTextNode("BUTTON"); </li>
                                <li> crebtn.appendChild(btntext); </li>
                                <li> document.body.appendChild(crebtn); </li>
                            </div>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className='h3'> 🎈 </h3>
                                    <div className='block4'>
                                        <li> {' <body> '}
                                            <li> {' 	<div class="div1">1 '}
                                                <li> {' 		<div class="div1-1"> 1-1 </div> '} </li>
                                                <li> {' 		<div class="div1-2"> 1-2 </div> '} </li>
                                            </li>
                                            <li> {' 	</div> '} </li>
                                            <li> {' 	<div class="div2">2</div> '} </li>
                                            <li> {' 	<div class="div3">3</div> '} </li>
                                            <li> {' 	<div class="div4">4</div> '} </li>
                                            <li> {' 	<div class="div5">5</div> '} </li>
                                            <li> {' </body> '} </li>
                                        </li>
                                        <li> {' <script> '}
                                            <li> {' 	var crebtn = document.createElement("button"); '} </li>
                                            <li> {' 	var btntext = document.createTextNode("BUTTON"); '} </li>
                                            <li> {' 	var btntext1 = document.create '} </li>
                                            <li> {' 	crebtn.appendChild(btntext); '} </li>
                                            <li> {' 	document.body.appendChild(crebtn); '} </li>
                                            <li> {' 	var div1 = document.getElementsByClassName("div1")[0]; '} </li>
                                            <li> {' 	var div1_1 = document.getElementsByClassName("div1-1")[0]; '} </li>
                                            <li> {' 	var div1_2 = document.getElementsByClassName("div1-2")[0]; '} </li>
                                            <li> {' 	var div3 = document.getElementsByClassName("div3")[0]; '}  </li>
                                            <li> {' 	div1.appendChild(div3); '} <small> # div1 내부태그의 마지막에 배치 </small> </li>
                                            <li> {' 	var div4 = document.getElementsByClassName("div4")[0]; '}  </li>
                                            <li> {' 	div1.prepend(div4) '} <small> # div1 내부태그의 제일 앞에 배치 </small> </li>
                                            <li> {' 	var div5 = document.getElementsByClassName("div5")[0]; '} </li>
                                            <li> {' 	div1.insertBefore(div5, div1_2); '} <small> # div1.div1-2 태그 앞쪽에 배치 </small> </li>
                                            <li> {' 	crebtn.onclick = function () { alert("버튼!!!") }; '} </li>
                                        </li>
                                        <li> {' </script> '} </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 자바스크립트 html출력 </summary>
                        <div className='block2'>
                            <h2 className='h2'> 📌 설명 </h2>
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

            </div>
        </>
    );
}

export default JavaScriptBasic;