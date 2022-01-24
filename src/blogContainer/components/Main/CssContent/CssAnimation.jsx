import React from 'react';
//import styled from 'styled-components';

const CssAnimation = (props) => {

    return (
        <div className="common_style" >

            <div className='block1'>
                <details>
                    <summary> 애니메이션 설명 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 한줄 코드 </h2>
                        <li> animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state ... </li>

                        <h2 className='h2'> 📌 animation-name , 애니메이션 적용할 이름 </h2>
                        <li> animation-name: 애니메이션이름; , 숫자,특수문자 시작 작동x </li>

                        <h2 className='h2'> 📌 animation-duration , 애니메이션 1싸이클 주기설정 </h2>
                        <li> animation-duration: 5s; </li>

                        <h2 className='h2'> 📌 animation-delay , 애니메이션 초기 대기시간 </h2>
                        <li> animation-delay: 0s; , 바로시작 </li>
                        <li> animation-delay: 5s; , 5초뒤에 시작 </li>
                        <li> animation-delay: 5ms; , 0.005초 뒤에 시작 </li>
                        <li> animation-delay: -5s; , 5초뒤의 프레임부터 시작 </li>

                        <h2 className='h2'> 📌 animation-iteration-count , 애니메이션 반복횟수 지정 </h2>
                        <li> animation-iteration-count: 5; </li>
                        <li> animation-iteration-count: infinite; </li>

                        <h2 className='h2'> 📌 animation-direction , 애니메이션 종료후 방향 지정(여러번 반복할 때 사용) </h2>
                        <li> animation-direction: normal; , 순방향</li>
                        <li> animation-direction: alternate; , 순방향과 역방향을 번갈아가면서 진행(각각 횟수 포함)</li>
                        <li> animation-direction: reverse; , 역방향 </li>
                        <li> animation-direction: alternate-reverse , 역방향과 순방향을 번갈아가면서 진행 </li>

                        <h2 className='h2'> 📌 animation-play-state ,  </h2>
                        <li> animation-play-state: running , 재생 </li>
                        <li> animation-play-state: paused , 정지 </li>

                        <h2 className='h2'> 📌 animation-timing-function , 진행 가속도 설정 </h2>
                        <li> animation-timing-function : linear , 속도 일정</li>
                        <li> animation-timing-function : ease , 느리게 빨라졌다가 느리게 </li>
                        <li> animation-timing-function : ease-in , 느리게 시작 </li>
                        <li> animation-timing-function : ease-out , 느리게 끝남</li>
                        <li> animation-timing-function : ease-in-out , 느리게 시작 빨라졌다가 다시 느리게 </li>
                        <li> animation-timing-function : step-start , 마지막 프레임으로 이동 </li>
                        <li> animation-timing-function : step-end , 첫프레임으로 이동 </li>
                        <li> animation-timing-function : steps(정수,end) , 0~(끝-1) 정수값 단계로 진행되게 한다. </li>
                        <li> animation-timing-function : steps(정수,start) , 1~끝 정수값 단계로 진행되게 한다. </li>
                        <li> animation-timing-function : cubic-bezier(x1,y1,x2,y2) , 제어점 위치로 제어 </li>

                        <h2 className='h2'> 📌 animation-fill-mode , 애니메이션 시작전이나 끝난 후 어떤 값 적용할지 </h2>
                        <li> animation-fill-mode: none , 기존css스타일 유지 </li>
                        <li> animation-fill-mode: forwards , 마지막 애니메이션 키프레임 css 스타일 유지 </li>
                        <li> animation-fill-mode: backwards , 첫번째 애니메이션 키프레임 css 스타일 유지  </li>
                        <li> animation-fill-mode: both , 시작전에는 첫 프레임, 끝난후 마지막 프레임 스타일 유지 </li>

                        <h2 className='h2'> 📌 @Keyframes 애니메이션이름 </h2>
                        <li> 0% ~ 100% </li>
                        <li> from ~ to </li>
                        <li> from ~ 0% ~ 50% ~ 100% ~ to </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 Object(태그,클래스,아이디) </h3>
                                <div className='block4'>
                                    <li> Object{"{"}
                                        <li> animation-name: 애니메이션이름; </li>
                                        <li> animation-duration: 5s; </li>
                                        <li> animation-delay: 5s; </li>
                                        <li> animation-duration: leaner; </li>
                                        <li> animation-iteration-count: 5; </li>
                                        <li> animation-direction: alternate; </li>
                                        <li> animation-fill-mode: forwards; </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                            </div>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 Animation </h3>
                                <div className='block4'>
                                    <li> @Keyframes 애니메이션이름 {"{"}
                                        <li> 0% {"{"}
                                            <li> css코드 작성 </li>
                                        </li>
                                        <li> 100%{"{"}
                                            <li> css코드 작성 </li>
                                        </li>
                                        <li> {"}"} </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </div>


    );
}

export default CssAnimation;