import React from 'react';

const TypeScriptBasic = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [1] 타입스크립트 기본 문법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 리턴값, 매개변수에 타입을 넣어주어야 한다.  </li>
            </div>

            <h2 className='h2'> 📌 타입 종류 </h2>
            <div className='block4'>
              <li> let test : boolean = true; </li>
              <li> let test : undefined = undefined; </li>
              <li> let test : null = null; </li>
              <li> let test : number = 10; </li>
              <li> let test : string = "test"; </li>
              <li> let test : number[] = [1,2,3,4]; </li>
              <li> {' let test : Array<string> = ["1","2"]; '} </li>
              <li> let test : any[] = [1,"1"]; </li>
              <li> let test : [number,string] = [1,"1"]; <small> tuple </small> </li>
              <li> let test : [number,string][] = [[1,"1"],[2,"2"]]; <small> tuple 2차원 </small> </li>
              <li> let test : any = 123; </li>
              <li> let test : number|string = "123"; </li>
            </div>

            <h2 className='h2'> 📌 인터페이스나 타입 사용 </h2>
            <div className='block4'>
              <li> {' interface Test { '}
                <li> {' test1: number, '} </li>
                <li> {' test2: boolean '} </li>
              </li>
              <li> {' } '} </li>
              <li> {' let test: Test = { '}
                <li> {' test1: 10, '} </li>
                <li> {' test2: true '} </li>
              </li>
              <li> {' } '} </li>
            </div>

            <h2 className='h2'> 📌 읽기 전용으로 만들기 </h2>
            <div className='block4'>
              <li> let test: readonly number[] = [1,2,3]; </li>
              <li> {' let test: ReadonlyArray<number> = [1,2,3]; '} </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 매개변수, 리턴 형식 예시 </h2>
            <div className='block4'>
              <li> {' const func = (x: number, y: number): number { '}
                <li> {' return x+y; '} </li>
              </li>
              <li> {' } '} </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] 리액트 관련 타입 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> children: React.ReactNode </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 타입스크립트에서 import 하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 npm에서 install 하지 않을 때 </h2>
            <div className='block4'>
              <li> test.js 파일에 함수가 있다고 가정 </li>
              <div className="block3">
                <li> {' module.exports = { '}
                  <li> {' 별명: function(매개변수1) {return 함수명(매개변수1);}  '} </li>
                </li>
                <li> {' }; '} </li>
                <li> {' function 함수명(매개변수) { '}
                  <li> {' return "test"+매개변수; '} </li>
                </li>
                <li> {' } '} </li>
              </div>
              <li> 이름.d.ts파일 만들기 </li>
              <div className="block3">
                <li> import '/test.js'; <small> 파일만 잘 불러오고 </small> </li>
                <li> declare function 함수명(): string; <small> 타입만 잘 설정해주면 된다. </small> </li>
              </div>
              <li> import * as test from './test'; </li>
              <li> console.log(test.별명("123")); </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 설치 및 실행 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> npm i --save-dev install -g typescript </li>
            <li> npm create react-app 프로젝트명 --template typescript </li>
            <li> tsconfig.json
              <div className="block4">
                <li> target : 컴파일 환경 설정(es5, es6) </li>
                <li> module : 컴파일된 코드가 어떤 모듈을 사용하게 할지, 설정에 따라서
                  컴파일된 코드가 변경이 된다. </li>
                <li> strict : 모든 타입을 체킹한다. </li>
                <li> 이외에도 여러가지 설정이 존재 </li>
              </div>
            </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 컴파일을 하게 되면 타입을 선언한 코드들은 전부 사라짐 </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 타입스크립트 React.FC 와 function 방식 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> props 타입을 제너릭으로 넣어서 사용가능 </li>
            <li> defaultProps에 기본값을 넣어도 작동이 안됨, {"{변수,mark='!'를 넣어주어야 한다.}"} </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 React.FC </h3>
              <div className='block4'>
                <li> interface 컴포넌트Props {"{ param: 타입 }"} </li>
                <li> const 컴포넌트: React.FC{"<컴포넌트Props> = ({param}) => { return }"} </li>
                <li>  </li>
              </div>
              <h3 className='h3'> 🎈 React.FC 말고 function방식 </h3>
              <div className='block4'>
                <li> interface 컴포넌트Props {"{ param: 타입 }"} </li>
                <li> function 컴포넌트{"{param}:컴포넌트Props"} {"{return}"} </li>
                <li> 컴포넌트.defaultProps = {"{param: '!', }; "} </li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> HTMLInputElement </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 자바스크립트에서 사용하는 document.getElements 관련을 사용할 때 처리방법  </li>
              <li> 변수로 한번 만들고 사용해야 하는데 아직 잘 몰르겠다. </li>
              <li> let rememberCheckbox: any = document.getElementsByName("rememberCheckbox") </li>
              <li>  </li>
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

export default TypeScriptBasic;