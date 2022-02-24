import React from 'react';

const TypeScriptBasic = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] tsconfig.js </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 없어도 .ts파일 사용가능 </li>
              <li> 한번에 여러개의 파일에 설정이 가능하므로 만들어서 사용 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설정 명령어 </h2>
            <div className='block4'>
              <li> <a href="https://velog.io/@sooran/tsconfig.json-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
              " target="_blank" rel="noopener noreferrer"> 나중에 다시 참고 </a> </li>
              <li> {"{"}
                <li> "compilerOptions": {"{"}
                  <li> "baseUrl": "src", </li>
                  <li> "paths": {"{"}
                    <li> "app/*" : ["app/*"], </li>
                    <li> "config/*" : ["config/*"], </li>
                    <li> "lib/*" : ["lib/*"], </li>
                    <li> "tests/*" : ["tests/*"], </li>
                  </li>
                  <li> {"},"} </li>
                  <li> "target": "es5", <small> es5로 컴파일 </small> </li>
                  <li> "module": "es2015", <small> require문법("commonjs"), import문법("es2015",esnext")을 사용할지 설정 </small> </li>
                  <li> "allowJs": true, <small> js파일 ts에서 import로 사용가능 여부 </small> </li>
                  <li> "checkJs": true, <small> js파일에서 에러체크 여부 </small> </li>
                  <li> "jsx": "preserve", <small> tsx에서 jsx로 어떻게 컴파일할지, 'preserve', 'react-native', 'react' </small> </li>
                  <li> "declaration": true, <small> 컴파일할 때 .d.ts파일도 자동생성 </small> </li>
                  <li> "removeComments": true, <small> 컴파일시 주석제거 </small> </li>
                  <li> "strict": true, <small> strict, noimplicit 등 관련모드 사용 </small> </li>
                  <li> "outFile": "./", <small> 모든 ts파일을 js파일 1개로 컴파일, module: none,amd,system일때 사용가능 </small> </li>
                  <li> "outDir": "./", <small> js파일 output 경로 </small> </li>
                  <li> "rootDir": "./", <small> root경로 output 경로 설정 </small> </li>
                  <li> "emitDeclarationOnly": true, </li>.
                  <li> "isolatedModules": true, <small> 각각의 소스코드 파일을 모듈(import,export)로 만들게 강제한다. 안하면 에러발생?,
                    babel같이 외부도구를 사용하면 true로 설정하는 것이 좋다. </small> </li>
                  <li> "noImplicitAny": true, <small> any라는 타입이 발생할 경우 에러를 띄워준다. </small> </li>
                  <li> "strictNullChecks": true, <small> null,undefined 타입에 조작하면 에러를 띄워준다. </small> </li>
                  <li> "strictFunctionTypes": true, <small> 함수 파라미터 타입 강하게 검사 </small> </li>
                  <li> "noImplicitThis": true, <small> this 키워드가 any일 경우 에러 발생 </small> </li>
                  <li> "alwaysStrict": true, <small> 자바스크립트 use strict 모드 사용 </small> </li>
                  <li> "noUnusedLocals": true, <small> 쓰지 않는 지역변수 있으면 에러 발생 </small> </li>
                  <li> "noUnusedParameters": true, <small> 쓰지 않는 파라미터 있으면 에러 발생 </small> </li>
                  <li> "noImplicitReturns": true, <small> 함수에 리턴이 없으면 에러 발생 </small> </li>
                  <li> "noFallthroughCasesInSwitch": true, <small> 스위치 문에 이상이 있으면 에러 발생 </small> </li>
                  <li> "strictPropertyInitialization": true <small> 클래스 구조체 타입 강하게 검사 </small> </li>
                  <li>  </li>
                </li>
                <li> {"},"} </li>
                <li> "files": [
                  <li> "원하는파일.ts", <small> 이와 같이 특정 파일에만 처리가능하다. </small> </li>
                  <li> "원하는파일.ts"  </li>
                </li>
                <li> ] </li>
              </li>
              <li> {"}"} </li>
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
          <summary> 타입스크립트 기본 문법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 타입 </h2>
            <div className="block4">
              <li> string </li>
              <li> boolean </li>
              <li> number[] </li>
              <li> string[] </li>
              <li> any 혹은 any[] </li>
              <li> string | number </li>
              <li> string | undefined </li>
              <li> number | null </li>
              <li> 특정 값 <small> # 이외의 값이 들어오면 에러 </small> </li>
              <li> 'red' | 'yellow' | 'orange' </li>
              <li> (x: number, y:number) : number </li>
              <li> interface 인터페이스명 {" { 키 : 타입, 키: 타입} "} </li>
              <li> readonly 타입 <small> # 읽기 전용 </small> </li>
              <li> ReadonlyArray{"<타입>"} <small> # 읽기 전용 </small> </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> const 변수 : 타입 = "값"; </li>
              <li> function(매개변수: 타입,매개변수: 타입):리턴타입 ; </li>
              <li> const 배열명: 인터페이스명[]  </li>
              <li> const tuple: [타입,타입]; , tuple=[타입값,타입값] </li>
              <li> 단, tuple의 할당된 타입들은 push를 사용했을때 가능하다. </li>
              <li>  </li>
              <li>  </li>
            </div>

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