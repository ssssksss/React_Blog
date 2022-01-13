import React from 'react';

const TypeScriptBasic = (props) => {
    return (
        <div className="common_style">
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
            {/* 끝 */}
        </div>
    );
}

export default TypeScriptBasic;