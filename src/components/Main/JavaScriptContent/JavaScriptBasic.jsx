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
                            <li> 메소드는 blocking 싱글 쓰레드로 작동이된다. </li>
                            <li> 변수나 메소드에 값을 아무것도 넣지 않으면 자바스크립트에서는
                                undefined가 default값으로 들어간다. </li>
                            <li> stack방식(선입후출)으로 함수를 호출한다. </li>

                            <h2 className='h2'> 📌 자바스크립트 엔진 </h2>
                            <li> Event Loop : Call Stack과 Task Queue가 비어있는지 여부를 확인하는 역할 </li>
                            <li> Call Stack : 실행된 코드들이 있는 공간, 함수를 호출하면 Stack에 저장된다. </li>
                            <li> Heap : 메모리가 할당이 되는 공간 </li>
                            <li> Web API : Ajax, Request HTTP 등 브라우저에서 사용할 수 있는 API </li>
                            <li> Task Queue : 비동기로 처리된 함수들의 Callback 함수들이 잠시 보관되는 공간 </li>


                            <h2 className='h2'> 📌 자바스크립트가 비동기로 작동되는 과정 </h2>
                            <li> - 동기 함수는 Execution Context를 생성해서 Stack에 Push한다. </li>
                            <li> 1. Execution Context를 생성 </li>
                            <li> 2. Stack에 함수가 모두 사용되면 Execution Context를 Pop시킨다. 이때를 Stack이 완전히 비어있다고 판단한다. </li>
                            <li> 3. setTimeout(), 이벤트 핸들러, Ajax, Request HTTP 등 Web API를 요청하면 Callback 함수를 같이 보낸다.  </li>
                            <li> 4. Web API가 완료가 되면 Task Queue에 Callback 함수를 Task Queue공간에 넣는다. </li>
                            <li> 5. JS Engine에 Event Loop가 Stack이 완전히 비어있는지 확인을 하고 비어있다면 Task Queue공간에 Callback함수가 있는지 판단을 하고
                                있다면 Stack공간으로 이동시킨다. </li>
                            <li>  </li>


                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 모듈 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li>  </li>
                            <li> import <small> # 우선적으로 파싱이 된다. </small> </li>
                            <li> require() <small> # 런타임 중에 필요할때 로드된다. </small> </li>

                            <h2 className='h2'> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
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

                            <h2 className='h2'> 📌 추가 상식 </h2>
                            <li> var로 선언한 변수는 호이스팅 되어 변수 공간이 생성, 단 값이 들어가지 않으면 undefined </li>
                            <li> let로 선언한 변수는 호이스팅이 되지 않아 let변수를 사용하게 호출하게 되면 ReferenceError 발생 </li>

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
                            <li> 블럭 스코프 : const, let , {'{}괄호 안에 있으면 {}괄호가 스코프'} </li>


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
                            <li> string, number, boolean, null, undefined, symbol, NaN 등 </li>

                            <h2 className='h2'> 📌 symbol </h2>
                            <li> 다른 값과 중복되지 않는 고유한 값 </li>
                            <li> symbol타입은 열거를 할 때 나열할 수 없다. </li>
                            <li> symbol타입으로 만들면 Unique해져서 ===연산자를 사용하여 똑같은 Symbol을 비교하여도 false </li>
                            <li> Symbol("test")===Symbol("test") <small> # false </small> </li>
                            <li> Symbol() 함수를 이용해서 생성 </li>
                            <li> 심볼 값은 문자열,숫자로는 변환되지 않고, boolean타입으로는 가능하다 </li>
                            <li> Symbol('내용').description <small> # 내용 출력 </small> </li>
                            <li> Symbol('내용').toString() <small> # Symbol('내용') 출력 </small> </li>
                            <li> Symbol.for('내용') <small> # 내용에 해당하는 symbol을 찾는다. </small> </li>
                            <li> Symbol.keyFor(Symbol.for('내용')) <small> # 내용을 출력 </small> </li>

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
                            <li> Number() : 문자를 숫자로 변환, 숫자가 아닌 객체타입!!! </li>
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
                            <li> 대입연산자 : =</li>
                            <li> 증감연산자 : ++변수 변수++ --변수 변수--</li>
                            <li> 논리연산자 : and({'&&'}) or({'||'}) not(!)  </li>
                            <li> 비트연산자 : {' & | ^ << >> '}  </li>
                            <li> 삼항연산자 : 변수 = 조건식 ? 참일때 리턴값 : 거짓일때 리턴값  </li>
                            <li> null병합연산자 : const 변수1 = 변수2 ?? 값(변수2의 값이 null,undefined일경우) </li>
                            <li> null병합연산자 : 변수나메소드 ?? 변수2 ?? 변수3 ?? "비어있음"  </li>
                            <li> delete연산자 : boolean값 반환, var,const,let은 지울수 없음 </li>

                            <h2 className='h2'> 📌 추가 상식 </h2>
                            <li> == : 값만 같으면 된다. </li>
                            <li> === : 값과 타입까지 같아야 한다. </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 조건문, 반복문 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 조건문 : if() , else if() , else </li>
                            <li> 조건문 : swithc(변수)( case 변수값1: 실행문장; break; .... default: 실행문장;) </li>
                            <li> 반복문 : while(조건) </li>
                            <li> 반복문 : for(초기값; 조건식; 증감식) </li>
                            <li> 반복문 : continue; #반복문 횟수는 완료되고 반복문의 조건으로 다시 실행  </li>
                            <li> for(let 임시변수 in 배열) : 배열의 키나 인덱스를 출력 </li>
                            <li> for(let 임시변수 of 배열) : 배열의 값을 출력 </li>

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
                            <li> 배열.push(값) #원본 배열에 마지막에 요소 추가, 리턴값으로 배열의 길이를 출력한다. </li>
                            <li> 배열.shift() #배열에 첫번째값을 제거</li>
                            <li> 배열.pop() #배열 뒤쪽에 값을 제거</li>
                            <li> 배열1.concat(배열2) #2개의 배열을 합침 </li>
                            <li> 배열.join("요소사이에삽입할 문자열") #배열 요소 사이에 원하는 문자를 삽입해서 문자열?로 리턴 </li>
                            <li> 배열.reverse() #배열을 역순으로 배치 </li>
                            <li> 배열.sort() #배열을 오름차순으로 정렬 </li>
                            <li> //TODO: 아래 내용 추가적으로 공부하기 </li>
                            <li> 배열.reduce((누산기?,y) {'=>'} console.log(x,y)); <small> # 리턴값을 주어야 누산기에 누적이 되고 값이 없으면 배열의 첫번째 요소가 누산기값이 된다. </small> </li>
                            <li> 배열반복문 : for(let i in 배열) #배열의 수만큼 반복을 한다. , i는 배열의 인덱스를 가리키는 값이라고 생각 </li>
                            <li> 배열반복문 : 배열.foreach(function(item, index, arr)) {'{ }'} #배열 요소의 갯수 만큼 반복 , item은 배열값 , arr은 자기자신의배열을 가져옴 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 문자열 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 메소드 </h2>
                            <li> 문자열객체.padStart(NUM) <small> # 전달된배열길이보다 NUM이 클때만 사용되고 왼쪽공간에 패딩이 (NUM-길이)만큼 생성된다.  </small> </li>
                            <li>  </li>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Function </summary>
                        <div className='block2'>
                            <h2 className='h2'> 📌 설명 </h2>
                            <li> function 사용자정의함수명(매개변수) {'{  }'} #함수 정의(함수 선언식) , 함수 선언식으로 만들면 호이스팅(위치에 상관없이 함수가 에러발생하지 않음)됨 </li>
                            <li> const 함수명 = function(매개변수) {'{ }'} {'{  }'} #함수 정의 및 선언(함수 표현식) ,
                                함수표현식으로 작성하면 호이스팅이 되지 않음, 상단에 미리 선언 필요 </li>
                            <li> 함수명(); #함수 사용 </li>
                            <li> 자바스크립트에서는 함수도 객체여서 속성을 가질수 있다. FUNCTION.prop="123"; 함수여도
                                문제가 없다는 소리이다. </li>

                            <h2 className='h2'> 📌 속성 </h2>
                            <li> arguments : 매개변수의 배열 </li>

                            <h2 className='h2'> 📌 메모라이제이션 함수 </h2>
                            <li> 로컬 캐쉬 기술 중 하나, 메모리에 특정정보를 기록하고 가져오는 방법 </li>
                            <li> 로컬캐쉬를 개선하는 것이 목적 </li>
                            <li> 불필요한 반복적인 계산을 피하려는 함수 </li>

                            <h2 className='h2'> 📌 제네레이터 함수 </h2>
                            <li> function* 함수명() {'{'}
                                <li> const abc = yield "abc"; <small> # yield로 추가 </small> </li>
                            </li>
                            <li> {'}'} </li> <br />
                            <li> const aaa = 함수명(); </li>
                            <li> aaa.next().value <small> # 순서대로 출력 </small> </li>

                            <h2 className='h2'> 📌 화살표 함수, 람다식 </h2>
                            <li> {' function [함수명]([매개변수]) => { //코드작성 } '} </li>
                            <li> 주의할 점 : 람다식에서 this를 사용하게 되면 window를 가리키게 된다. 이럴때는 .bind()를 사용해서
                                this가 window가 아닌 본인을 가리킨다는 것을 알려주어야 한다. </li>

                            <h2 className='h2'> 📌 FUNCTION.call(OBJECT,매개변수) </h2>
                            <li> OBJECT1.FUNCTION.call(OBJECT2)은 OBJECT2.FUNCTION()와 같다. </li>
                            <li> OBJECT2.FUNCTION()을 실행한다.  </li>

                            <h2 className='h2'> 📌 FUNCTION.apply(OBJECT,매개변수배열) </h2>
                            <li> OBJECT1.FUNCTION.apply(OBJECT2,매개변수배열)은 OBJECT2.FUNCTION(매개변수배열)와 같다. </li>
                            <li> OBJECT2.FUNCTION(매개변수배열)을 실행한다.  </li>
                            <li> .call()과 유사하만 매개변수를 유사배열로 만든다. </li>
                            <li> 배열이 아니므로 배열 메소드를 사용하면 에러가 발생한다. </li>

                            <h2 className='h2'> 📌 FUNCTION.bind(OBJECT,매개변수1...) </h2>
                            <li> let bind_object = OBJECT1.FUNCTION.bind(OBJECT2); <small> = OBJECT2.FUNCTION()를 반환 </small> </li>
                            <li> bind는 this가 가리키는 것을 바꾼다. </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className='h3'> 🎈 일반 함수 예시 </h3>
                                    <div className='block4'>
                                        <li> function f1(var, array, map) {'{'}
                                            <li> console.log(var); <small> # 일반변수 </small> </li>
                                            <li> console.log(array[0]); <small> # 배열 </small> </li>
                                            <li> console.log(map.key); <small> # Map객체 </small> </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> var add_value = function add(num1,num2) {'{ return num1+num2; }'} </li> <br />
                                    </div>
                                    <h3 className='h3'> 🎈 call, apply, bind 예시 </h3>
                                    <div className='block4'>
                                        <li> var obj1 = {'{'}
                                            <li> value: "123", </li>
                                            <li> name: "obj1", </li>
                                            <li> method1: function (x) {'{'}
                                                <li> console.log(this.value); </li>
                                                <li> console.log(this.name); </li>
                                                <li> console.log(x); </li>
                                            </li>
                                            <li>{'}'} </li>
                                        </li>
                                        <li>  {'}'}; </li>
                                        <li> var obj2 = {'{'}
                                            <li> value: "456", </li>
                                            <li> name: "obj2", </li>
                                        </li>
                                        <li>  {'}'}; </li>
                                        <li>  var obj_test = obj1.method1.bind(obj2, "2"); </li>
                                    </div>
                                    <div className="block4">
                                        <li> {' { obj1.method1.call(obj2) }; '} <small> # </small> </li>
                                        <li> {' { obj1.method1.apply(obj2, [1, 2, 3, 4, 5, 6, 7, 8]) }; '} </li>
                                        <li> {' { obj_test() } '} </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> CLASS </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 클래스에 static으로 메소드를 선언하면 정적 메소드가 되어서 자식들은 상속받을수
                                없고 내부에서만 클래스 내부에서만? 사용가능
                            </li>
                            <li> 클래스의 인스턴스를 이용해서 메소드를 호출하면 TypeError가 발생한다. 그러므로
                                CLASS.prototype.METHOD 와 같이 클래스 프로토타입을 사용하여야 한다. </li>
                            <li> 부모클래스에 상속받은 파생클래스에서 this를 사용하기 위해서는 super() 메소드를 사용하여야 가능하다. </li>


                            <h2 className='h2'> 📌 래퍼클래스 </h2>
                            <li> String.raw`그대로출력되는코드` </li>
                            <li>  </li>


                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className='h3'> 🎈 </h3>
                                    <div className='block4'>
                                        <li> class CLASS {'{'}
                                            <li> static METHOD(매개변수) {'{'}
                                                <li> //코드 작성  </li>
                                                <li> return 리턴값; </li>
                                            </li>
                                            <li> {'}'} </li>
                                            <li> constructor({'{'}매개변수='디폴트값'{'}'} = {'{}'}) {'{'}
                                                <li> this.멤버변수 = 매개변수; </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Map </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> ARRAY.map(callbackFunction(currentValue, currentIndex, array), thisArg); </li>
                            <li> 모든 배열에 함수를 실행하는 메소드 </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 사용 방법 </h2>
                            <li>  </li>
                            <li>  </li>
                            <li> 1. const Var = ARRAY.map((data) {"=>"} "{'${data}'}"); </li>
                            <li> 2. const Var = ARRAY.map((data,index) {"=>"} "{'${data}'}"); </li>
                            <li> 3. const Var = ARRAY.map(function(data) {'{'}
                                <li> return data; </li>
                            </li>
                            <li> {'}'}); </li>
                            <li> 4. const Var = ARRAY.map(FUNCTION); </li>
                            <li> 5. const Var = ARRAY.map((data) {"=>"} "{'${data.id}'}"); <small> # Array가 일반 배열이 아닌
                                Object객체일때 사용 </small> </li>
                            <li> 6. const Var = ARRAY.map((data) {"=>"} "{'${data}'}").reverse();  </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
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
                        <summary> 기본 객체 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 기본 객체 </h2>
                            <li> 1. 사용자가 만든 객체 </li>
                            <li> 2. new키워드를 사용하며 만든 객체 </li>
                            <li> 기본객체는 프로토타입을 가지지 않고 이외의 객체는 모두 프로토타입을 가진다. 그러므로
                                클래스 인스턴스를 만들어서 사용할 때 prototype속성을 이용하여 접근이 가능한것 같다. </li>

                            <h2 className='h2'> 📌 Object 객체 </h2>
                            <li> Object.defineProperty(객체명,"KEY",{'{value: 값}'}) <small> # 기존 객체에 있는 속성을 추가로 정의하거나 수정 가능 </small> </li>
                            <li> Object.keys(객체명) <small> # 객체가 가진 Key값들을 반환 </small> </li>
                            <li> Object.freeze(객체명); <small> # 객체에 속성을 추가,수정,삭제를 못하게 막는다. </small> </li>
                            <li> Object.isFrozen(객체명); <small> # 객체의 동결여부 </small> </li>
                            <li> Object.entries(객체명); <small> # 객체의 속성의 각각의 키와값들을 각각 배열로 만든다 </small> </li>
                            <li> Object. <small> #  </small> </li>
                            <li> Object. <small> #  </small> </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

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
                            <li> 객체 = window.setTimeout(메소드명,ms); <small> # ms시간 뒤에 메소드 실행 </small> </li>
                            <li> clearTimeout(객체); #setTimeout 메소드를 취소시킴 </li>
                            <li> 객체 = window.setInterval(메소드명,ms); #ms시간 마다 메소드 실행 </li>

                            <h2 className='h2'> 📌 추가 상식 </h2>
                            <li> setTimeout의 콜백함수는 루프가 실행된 후에 호출된다. 그래서 반복문에 var변수를 사용하게 되면
                                마지막 반복문값만 호출이 된다. , let으로 반복문을 돌리면 문제가 없다. </li>
                            <li>  </li>

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

                <div className='block1'>
                    <details>
                        <summary> JSON </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> jSON.stringify(json형태의 객체,REPLACER); <small> # </small>
                                <li> REPLACER = 함수, 배열, 배열의 일부 키값
                                    <li>  </li>
                                    <li>  </li>
                                </li>
                            </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
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

            </div>
        </>
    );
}

export default JavaScriptBasic;