import React, { useEffect, useRef } from 'react';

const CssBasic = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> width(너비), height(높이) </summary>
                        <div className='block2'>
                            <h2 className='h2'> 📌 width(너비) 설명 </h2>
                            <li> inline css 스타일에는 적용이 되지 않는다. </li>

                            <h2 className='h2'> 📌 width(너비) css 스타일 </h2>
                            // TODO: min-width 나중에 한번 알아볼 것 <br />
                            <li> min-width를 사용할 때 1px정도의 여백?이 발생하는 일이 있다 </li>
                            <li> min-width: 500px; <small> #박스의 최소 길이 설정  </small>  </li>
                            <li> max-width: 500px; <small> #박스의 최대 길이 설정  </small>  </li>
                            <li> min-width: 100%;  <small> #박스의 최소 길이 설정 , 부모요소를 기준 </small>  </li>
                            <li> max-width: 100%;  <small> #박스의 최대 길이 설정 , 부모요소를 기준 </small>  </li>
                            <li> width: 100px, 100% <small> # 너비 크기 설정 </small> </li>

                            <h2 className='h2'> 📌 height(높이) 설명 </h2>
                            <li> inlinecss 스타일에는 적용이 되지 않는다. </li>

                            <h2 className='h2'> 📌 height(높이) css 스타일 </h2>
                            <li> min-height: 500px; <small> #박스의 최소 길이 설정  </small>  </li>
                            <li> max-height: 500px; <small> #박스의 최대 길이 설정  </small>  </li>
                            <li> min-height: 100%;  <small> #박스의 최소 길이 설정 , 부모요소를 기준 </small>  </li>
                            <li> max-height: 100%;  <small> #박스의 최대 길이 설정 , 부모요소를 기준 </small>  </li>
                            <li> height: 100px, 100% <small> # 높이 길이 설정 </small> </li>
                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> border(테두리라인) border-radius(테두리 필렛) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 테두리의 스타일을 설정 </li>

                            <h2 className='h2'> 📌 css 스타일 - 테두리 선모양 </h2>
                            <li> border: 5px; <small> # [상하좌우], [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ] </small> </li>
                            <li> border-style: none;  #선 제거 , 주변에 테두리가 존재하면 선을 그림 </li>
                            <li> border-style: hidden;  #선 숨김 , 주변에 테두리가 존재해도 선을 숨김</li>
                            <li> border-style: dotted;  #점선 , 점의 간격을 너비의 절반 </li>
                            <li> border-style: dashed;  #직사각형 모양 </li>
                            <li> border-style: solid;  #직선 </li>
                            <li> border-style: double;  #2줄 직선 </li>
                            <li> border-style: groove;  #테두리 파임 </li>
                            <li> border-style: ridge;  #테두리가 튀어나온 것처럼 </li>
                            <li> border-style: inset;  #요소가 파인것처럼 </li>
                            <li> border-style: outset;  #요소가 튀어나온것처럼 </li>

                            <h2 className='h2'> 📌 css 스타일 - 테두리 필렛 </h2>
                            <li> border-radius: 5px; <small> # [상하좌우], [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ] </small> </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> margin(외부 간격), padding(내부 간격) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 margin(외부 간격) 설명 </h2>
                            <li> block요소에만 사용가능 </li>

                            <h2 className='h2'> 📌 padding(내부 간격) css 스타일 </h2>
                            <li> margin: 5px; <small> # [상하좌우], [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ] </small> </li>
                            <li> margin-left: 5px; </li>
                            <li> margin-right: 5px; </li>
                            <li> margin-top: 5px; </li>
                            <li> margin-bottom: 5px; </li>

                            <h2 className='h2'> 📌 padding(내부 간격) 설명 </h2>
                            <li> block요소에만 사용가능 </li>

                            <h2 className='h2'> 📌 padding(내부 간격) css 스타일 </h2>
                            <li> padding: 5px; <small> # [상하좌우], [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ] </small> </li>
                            <li> padding-left: 5px; </li>
                            <li> padding-right: 5px; </li>
                            <li> padding-top: 5px; </li>
                            <li> padding-bottom: 5px; </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> box-sizing(요소 크기 범위 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 요소 박스의 크기를 지정할때의 크기를 각각 따로 구분을 할지 안할지의 차이 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> box-sizing: border-box; #(요소+안쪽 여백+테두리) 크기, 일반적으로 많이 사용 </li>
                            <li> box-sizing: content-box; #요소 크기 + 안쪽 여백 크기 + 테두리 크기  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> overflow(흘러내림 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 블록 요소안의 컨텐츠가 블록보다 클 때 어떻게 텍스트를 보여줄지 처리하는 방법 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> overflow-x: <small> #가로만 처리</small> </li>
                            <li> overflow-y: <small> #세로만 처리</small> </li>
                            <li> overflow: visible;  <small> #블록 요소를 넘어서 보여준다.</small> </li>
                            <li> overflow: hidden; <small> #블록 요소보다 넘치는 부분은 숨긴다.</small> </li>
                            <li> overflow: clip; <small> #hidden과 비슷하지만 코드를 추가하여 어떠한 스크롤도 사용 불가</small> </li>
                            <li> overflow: scroll; <small> #블록요소 보다 크면 내부 스크롤을 생성한다.</small> </li>
                            <li> overflow: auto; <small> #알아서 처리(스크롤 바)</small> </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> text-overflow </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> overflow 속성과 white-space 속성을 같이 사용해야 된다. </li>
                            <li> text-overflow: ellipsis <small> # ...으로 처리한다. </small> </li>
                            <li> text-overflow: clip <small> # 잘라서 처리한다. </small> </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className='h3'> 🎈 </h3>
                                    <div className='block4'>
                                        <li> white-space: nowrap; </li>
                                        <li> overflow: hidden; </li>
                                        <li> text-overflow:ellipsis; </li>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> background(배경) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 배경을 어떻게 처리할지 선택하는 방법 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> background-repeat: no-repeat; <small> #반복하지 않음 </small> </li>
                            <li> background-repeat: repeat-x; <small> #가로 방향으로만 반복  </small> </li>
                            <li> background-repeat: repeat-y; <small> #세로 방향으로만 반복  </small> </li>
                            <li> background-repeat: repeat;   <small> #가로와 세로 모두 반복 </small> </li>
                            <li> background-repeat: space; <small> #반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 </small> </li>
                            <li> background-repeat: round; <small> #반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분   </small></li> <br />

                            <li> background-image: url("http:// ~~~~~.png"); <small> # 이미지 불러오기 </small> </li>
                            <li> background-image: url(""); <small> # 이미지 불러오기 </small> </li> <br />

                            <li> background-size: cover; <small> #이미지가 잘리지 않게 가로세로크기를 조정, 최대한 큰 크기의 이미지를 유지 </small>      </li>
                            <li> background-size: contain; <small> #요소 사이즈에 맞게 이미지의 크기를 조정  </small>       </li>
                            <li> background-size: auto; <small> #이미지의 원본크기를 유지 </small>       </li>
                            <li> background-size: 100%; </li>
                            <li> background-size: 200px 200px; </li> <br />

                            <li> background-position: top; </li>
                            <li> background-position: bottom; </li>
                            <li> background-position: left; </li>
                            <li> background-position: right; </li>
                            <li> background-position: center; </li>
                            <li> background-position: 50% 50%; #부모 요소의 가로 세로 비율 </li>
                            <li> background-position: right 50% bottom 50%;  </li> <br />

                            <li> 배경의 원점을 부모의 테두리,내부간격,컨텐츠에 맞출지를 정함 </li>
                            <li> background-origin: border-box; </li>
                            <li> background-origin: padding-box; </li>
                            <li> background-origin: content-box; </li> <br />

                            <li> background-color: #ffffff; #16진수로 RGB </li>
                            <li> background-color: red; #이름이 있는 색깔 </li>
                            <li> background-color: rgb(255,255,255); </li>
                            <li> background-color: rgba(255,255,255,0.5); # RGB + 명도 </li>
                            <li> background-color: hsl(50, 33%, 25%); # HSL(색조[0-360] ,채도(회색),명도)  </li> <br />

                            <li> 요소의 배경을 채우는 공간 설정 </li>
                            <li> background-clip: border-box; </li>
                            <li> background-clip: padding-box; </li>
                            <li> background-clip: content-box; <small> # padding 구역을 제외하고 배경색을 준다. </small> </li>
                            <li> background-clip: text; <small> #글자 뒤로 이미지를 보여줌 , color: transparent; -webkit-background-clip: text; </small>  </li> <br />

                            <li> 배경을 뷰포트와 요소 어디에 고정할지 선택, 뷰포트는 브라우저의 스크롤, 요소는 요소내부 스크롤 </li>
                            <li> background-attachment: scroll; #배경을 요소에 고정  </li>
                            <li> background-attachment: fixed; #배경을 뷰포트에 고정 </li>
                            <li> background-attachment: local; #배경을 콘텐츠에 고정</li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 선택자 ( 수정 필요 )  </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> .class{'{ }'} #클래스 , 아이디 선택자 보다 사용을 권장 </li>
                            <li> #id{'{ }'} #아이디 , 우선순위가 높음, 하지만 사용을 하는것이 좋지 않음 </li>
                            <li> 부모선택자 자식선택자{'{ }'} #자식 선택자, 공백으로 구분하며 부모아래의 모든 자식선택자에게 적용   </li>
                            <li> 부모선택자&gt;자식선택자{'{ }'} #직속 자식 선택자, 부모 아래 다른 선택자를 거치지 않은 선택자들에게 적용 </li>
                            <li> 선택자, 선택자{'{ }'} #복수 선택자, 한번에 여러개의 선택자에게 적용 </li>
                            <li> 선택자:[first-child,last-child,not(:lastchild), not(:first-child)]{'{ }'}, 여러개의 요소들중에 선택(가상클래스) </li>
                            <li> button:hover{'{ }'} #button 요소 위에 올라갈때  </li>
                            <li> :is(header,nav) button #header와nav태그 자식 버튼에 적용  </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> vertical-align(수직정렬) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> inline 속성이나 table 셀에서 수직 정렬 , block요소는 되지 않음 </li>
                            <li> 대체적으로 이미지와 텍스트를 같은 위치에 배치하기 위해 사용된다.  </li>
                            <li> 텍스트에는 line-height를 주고 이미지에는 vertical-align 주고서 처리하면 거의 일치 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> vertical-align: baseline; </li>
                            <li> vertical-align: sub; </li>
                            <li> vertical-align: super; </li>
                            <li> vertical-align: text-top; </li>
                            <li> vertical-align: text-bottom; </li>
                            <li> vertical-align: middle; </li>
                            <li> vertical-align: top; # </li>
                            <li> vertical-align: bottom; </li>
                            <li> vertical-align: </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> float(띄워서배치) (정리필요)  </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> position(요소위치) (정리 필요) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> position : static; #문서를 기준으로 배치? </li>
                            <li> position : relative; #본인 요소를 기준으로 배치 </li>
                            <li> position : absolute; #부모요소에 relative를 하고 사용하면 요소의 기준점에서 배치  </li>
                            <li> position : sticky; #스크롤 할 때 부모 요소의 끝까지 따라 움직인다.. </li>
                            <li> top: 10px; #요소를 上로 10px이동해서 배치</li>
                            <li> bottom: 10px; #요소를 下로 10px이동해서 배치</li>
                            <li> left: 10px; #요소를 左로 10px이동해서 배치</li>
                            <li> right: 10px; #요소를 右로 10px이동해서 배치</li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> text-decoration(텍스트장식) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> text-decoration : underline dotted red 4px; #4px의 빨간 점선 밑줄</li>
                            <li> text-decoration : red wavy underline; #꾸불꾸불한 밑줄 </li>
                            <li> text-decoration : overline; #글자 위줄에 밑줄</li>
                            <li> text-decoration : line-through; #글자 중앙에 밑줄</li>
                            <li> text-decoration : underline; #글자 아래에 밑줄</li>
                            <li> text-decoration : none; #밑줄을 사용하지 않음, a태그에 밑줄제거하는데 사용</li>
                            <li> text-decoration : blink; #브라우저에 따라 깜빡거림, 사용권장하지않음</li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> text-align(글자위치조정) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 부모 요소를 기준으로 위치를 잡음, block요소에 적용이 가능하고 정렬되는 것은 block요소안에 inline요소에적용이 가능하다. </li>
                            <li> block요소나 표에서 사용 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> text-align: left(default) </li>
                            <li> text-align: center</li>
                            <li> text-align: right</li>
                            <li> text-align: justify #가운데를 기준으로 좌우로 정렬</li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> font(폰트) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 폰트 url 불러오기 </h2>
                            <li>  </li>
                            <li>  </li>

                            <h2 className='h2'> 📌 폰트 파일 </h2>
                            <li> @font-face {'{'}
                                <li> font-family: "CUSTOM_NAME"; </li>
                                <li> src: url("../파일경로.확장자명") format("truetype") </li>
                            </li>
                            <li> {'}'} </li> <br />
                            <li> tag {'{ font-family: "CUSTOM_NAME" }'} </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> color: red, #ffffff , rgba(255,255,255); #폰트의 색깔 설정 </li>
                            <li> font-size: 10px, 1em, 1rem, 10%; #폰트의 크기 지정 </li>
                            <li> font-weight: 900; #폰트의 굵기 설정 </li>

                        </div>
                    </details>
                </div>


                <div className='block1'>
                    <details>
                        <summary> box-shadow(그림자) ( 내용 추가 필요 ) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> box-shadow: x-position y-position blur spread color | inset  </li>
                            <li> blur : 값이 클수록 흐려짐 </li>
                            <li> spread : +(그림자확장), -(그림자축소) </li>
                            <li> inset : 요소 안에 그림자 생성 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> box-shadow: x만큼이동 | y만큼이동 | color; </li>
                            <li> box-shadow: x만큼이동 | y만큼이동 | blur-radius | color; </li>
                            <li> box-shadow: x만큼이동 | y만큼이동 | blur-radius | spread-radius | color; </li>
                            <li> box-shadow: inset | x만큼이동 | y만큼이동 | color; </li>
                            <li> box-shadow: 그림자1, 그림자2, ... </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @support ( 내용 추가 필요 ) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 브라우저가 지원이 되면 css적용하는 방법 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> @supports(display:grid) {'{ css코드 }'} </li>
                            <li> @supports not (display:grid) {'{ css코드 }'} </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> snap-scroll (공부 필요) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 스크롤을 내리면 부드럽게 내려가는 것이 아니라 어떤 요소들에 걸리면서 내려감,
                                모바일? 느낌이 나게 해줌 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 부모css에 scroll-snap-type: y mandatory; </li>
                            <li> 자식css에 scroll-snap-align: center; </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> aspect-ratio(화면 비율 조정) (공부 필요) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 화면 비율 조정, 이미지태그나 동영상태그에 적용 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> img {'{ aspect-ratio: 16/9; }'} </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> line-height(텍스트행사이의거리) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 선 상자의 높이를 설정 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li>  line-height: [normal , 3, 3em, 30%]; </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> list-style(목록태그설정) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 목록 태그에 적용되는 속성 , li태그에서 앞에 있는 아이콘을 설정 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> list-style: ; #이렇게 사용 </li>
                            <li> list-style-type: square; #사각형 </li>
                            <li> list-style-type: circle; #원형 </li>
                            <li> list-style-type: decimal; </li>
                            <li> list-style-type: georgian; </li>
                            <li> list-style-type: trad-chinese-informal; </li>
                            <li> list-style-type: kannada; </li>
                            <li> list-style-type: disc; </li>
                            <li> list-style-type: '-'; </li>
                            <li> list-style-type: "\1F44D"; #이모티콘 엄지척 </li>
                            <li> list-style-type: none; #거의 없애는 것을 많이 사용 </li>
                            <li> list-style-image: url('../img/.png'); </li>
                            <li> list-style-position: inside; </li>
                            <li> list-style-position: outside; #우측에 배치 되는데 어떻게 사용할지는... </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> letter-spacing(글자사이간격조정) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 글자 가로 사이 간격 조정 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> letter-spacing: [normal , 1em , 1px, .1px , -1px] ; </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> white-space(공백문자처리) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 글자를 줄바꿈을 어떻게 할지 설정하는 속성 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> white-space: normal;  </li>
                            <li> white-space: nowrap; #공백유지x , 줄바꿈은 br태그에서만 일어남 </li>
                            <li> white-space: pre; #공백유지, 줄바꿈은 개행문자와 br태그에서만 일어남 </li>
                            <li> white-space: pre-wrap; #공백유지, 줄바꿈은 개행문자와 br태그에서만 일어나지만 너무 길면 줄을 바꾸어줌 </li>
                            <li> white-space: pre-line; #공백유지x, 줄바꿈은 개행문자와 br태그에서만 일어나지만 너무 길면 줄을 바꾸어줌</li>
                            <li> white-space: break-spaces; #pre-wrap과 유사, 공백유지, 공백을유지하면서도 줄바꿈 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> word-break(단어분리처리여부) (좀더 알아볼것) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> (중국 일본 한국 등)아시아권 글자에 허용 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> word-break: normal;  </li>
                            <li> word-break: break-all; #강제로 줄바꿈 </li>
                            <li> word-break: keep-all; #줄바꿀때 단어를 끊지 않음 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> word-wrap(요소를넘은글자처리여부) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> word-wrap: normal; </li>
                            <li> word-wrap: brea-word; #넘어가면 줄바꿈 </li>
                            <li> word-wrap: </li>
                            <li> word-wrap: </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> display(요소디스플레이속성) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> display속성에 따라 레이아웃(배치)를 하는 방법이 바뀜 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> display: inline; </li>
                            <li> display: block; </li>
                            <li> display: inline-block; </li>
                            <li> display: none; </li>
                            <li> display: visible; </li>
                            <li> display: flex; </li>
                            <li> display: hidden; </li>
                            <li> display:  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> transform(회전,크기,기울기,이동) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 요소를 회전,크기,기울기,이동 해주는 스타일 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> transform : rotate(0.5turn); #시계방향으로 회전</li>
                            <li> transform : rotate(1, 2.0, 3.0, 10deg);  </li>
                            <li> transform : rotateX(10deg); #x축으로 회전  </li>
                            <li> transform : rotateY(10deg); #y축으로 회전  </li>
                            <li> transform : rotateZ(10deg); #z축으로 회전  </li>
                            <li> transform : translate(10px, 10px); #x축,y축이동 </li>
                            <li> transform : translate3d(10px, 10px, 10px); #x축,y축,z축 이동  </li>
                            <li> transform : translateX(10px) #x축 이동 </li>
                            <li> transform : translateY(10px) #y축 이동 </li>
                            <li> transform : translateZ(10px) #z축 이동 </li>
                            <li> transform : scale(10, 0.1); #가로, 세로 확대 </li>
                            <li> transform : scale3d(2, 2, 2); #너비,깊이,높이 확대  </li>
                            <li> transform : scaleX(2); #너비 2배 확대  </li>
                            <li> transform : scaleY(2); #깊이 2배 확대  </li>
                            <li> transform : scaleZ(2); #높이 2배 확대  </li>
                            <li> transform : skew(30deg, 30deg);   </li>
                            <li> transform : skewX(30deg); #左上은 왼쪽으로, 右下을 오른쪽으로 기울어짐  </li>
                            <li> transform : skewY(30deg); #左上은 위쪽으로, 右下은 아래쪽으로 기울어짐  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> transition (애니메이션 효과) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 가만히 놔둔다고 작동이 되지는 않는다. hover 등 특수한 경우가 발생해야 된다. </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> transition [요소속성(background,border,all등등) property duration timing-function]
                            </li>
                            <li>  transition-delay   : 효과가 나타나기 전 시간</li>
                            <li> transition-duration  : 효과가 지속되는 시간(s,ms단위) </li>
                            <li> transition-property : 추가할 효과를 설정</li>
                            <li> transition-timine-function : 전환효과를 설정
                                <div className="block4" style={{ listStyle: "none" }}>
                                    <li> transition-timine-function: linear 일정한 속도</li>
                                    <li> transition-timine-function: ease : 기본값 , 느리게 빠르게 마지막은 느리게 끝남 </li>
                                    <li> transition-timine-function: ease-in : 느리게시작 </li>
                                    <li> transition-timine-function: ease-out : 느리게 끝남</li>
                                    <li> transition-timine-function: ease-in-out : 느리게 시작해서 느리게 끝남 </li>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>



                <div className='block1'>
                    <details>
                        <summary> gradient (2개 이상의 색을 배치하는 방법) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 예제 </h2>
                            <li> background: linear-gradient(90deg, #833ab4 33%, #fd1d1d 66%, #fcb045 100%); </li>
                            <li>  </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> linear-gradient(각도, color 10%, color 90% ...);
                                <li> 각도 = 45deg , 90deg </li>
                            </li>
                            <li> linear-gradient(회전, color 차지비율 ,color 차지비율 ...);
                                <li> 회전 = 0.25turn </li>
                            </li>
                            <li> linear-gradient(방향, color 차지비율 ,color 차지비율...);
                                <li> 방향 = [right | left | top | bottom | to 방향1 방향2 | to 방향1 ] </li>
                            </li>
                            <li> radial-gradient(모양 color, color);
                                <li> 필요할 때 검색해보기 </li>
                            </li>
                            <li> conic-gradient(모양 color, color);
                                <li> 필요할 때 검색해보기 </li>
                            </li>

                        </div>
                    </details>
                </div>



                <div className='block1'>
                    <details>
                        <summary> filter(필터효과) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> filter: url("filters.svg#filter-id"); </li>
                            <li> filter: blur(10px); #픽셀로 흐리게 한다..</li>
                            <li> filter: brightness(0.5); #밝기</li>
                            <li> filter: contrast(100%); #대비</li>
                            <li> filter: drop-shadow(10px 10px 10px blue); </li>
                            <li> filter: grayscale(50%); #흑백</li>
                            <li> filter: hue-rotate(90deg); </li>
                            <li> filter: invert(10%); #반전</li>
                            <li> filter: opacity(10%); </li>
                            <li> filter: saturate(10%); </li>
                            <li> filter: sepia(10%); </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> variable(변수) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> --변수명:  ; #최소한 공백이라도 들어가여 변수 선언 </li>
                            <li> transform: rotate(--변수명,default값); #변수값 </li>
                            <li> transform: rotate(--변수명); #변수명 만 선언하고 변수값 삽입 가능 </li>
                            <small> {'style="--변수명:넣을값;'} #html에서 요소속성에 이렇게 정의하면 0이라는 값이 들어감 </small>
                            <li> calc(90deg * var(--i))과 같이 calc를 사용하여 값을 css 속성값에 넣어야 제대로 작동 </li>
                            <li> css변수에 값이 잘못들어갈경우 default 값이 들어간다. </li>
                            <li>  </li>
                            <li>  <p > 아래와 같이 변수를 정의하고 변수를 사용하는 방법 </p>
                                <li> {' :root { '} </li>
                                <li> {' --clr-color: 204, 100%, 30%; '} 또는 {' --clr-color: 204 100% 30%; '} </li>
                                <li> {' } '} </li>
                                <li> {' .class { '} </li>
                                <li> {' background: hsl(var(--clr-color), .95); '} 또는 {' background: hsl(var(--clr-color) / .95); '} </li>
                                <li> {' } '} </li>
                            </li>
                            <li>  </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 미디어 쿼리 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 매체유형과 크기마다 반응하는 웹페이지를 만들 때 사용 </li>
                            <li> {'<link rel="" media="screen and (max-width: 768px)" href=".css" '} #조건에 맞으면 css 파일을 불러옴 </li>
                            <li> 매체 유형
                                <li> all, screen, tv, projection, handler(휴대용장치), speech(스크린리더), aural(화면을소리출력장치) </li>
                                <li> embossed(점자인쇄장치) , tty(디스플레이제한장치) , braille(점자표시장치) , width(웹페이지)  </li>
                                <li> height(웹페이지) , device-width , device-height, orientaion(기기화면방향, landscape, portrait)  </li>
                                <li> aspect-ratio(화면비율), device-aspect-ratio, color(기기의비트수?) , color-index(기기의색상수?)  </li>
                                <li> monochrome(흑백일때픽셀당비트수) , resolution(기기해상도) , scan(tv스캔방식), grid(기기 비트맵,그리드) </li>
                            </li>
                            <li> 화면크기
                                <li> 320 ~ 768 , 769 ~ 1024 , 1024 ~ </li>
                                <li>  </li>
                            </li>
                            <li> 논리 연산자
                                <li> @media only | not 미디어유형 and | , (조건문) {'{}'} </li>
                                <li> 논리연산자 : and, not, ,(or) , only(미디어쿼리지원하는브라우저만) </li>
                            </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> @media screen and (max-width: 768px){'{}'} #768px보다 화면이 작을때 적용 </li>
                            <li> @media screen and (min-width: 768px){'{}'} #768px보다 화면이 클때 적용 </li>
                            <li> @media screen (min-width:320px) and (max-width:768px){'{}'} #320~768px일때 적용 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 밴더 프리픽스(vender prefix) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <small> 크롬,사파리 </small>
                            <li> {' 속성: -webkit-스타일; '} </li>
                            <small> 파이어폭스 </small>
                            <li> {' 속성: -moz-transform: translate(90px,90px); '} </li>
                            <small> 오페라 </small>
                            <li> {' 속성: -o-linear-gradient(); '} </li>
                            <small> 익스플로러 </small>
                            <li> {' 속성: -ms-linear-gradient(); '} </li>
                            <small> 표준 </small>
                            <li> {' 속성: 스타일; '} </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 기타 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> opactiry : 0.5; #요소의 명암을 조절 </li>
                            <li> content #html 코드 추가 </li>
                            <li> z-index #화면에 보일 때 우선순위 </li>
                            <li> font-variant #폰트의 특성 부여(첨자 등) </li>
                            <li> !important #우선순위 </li>
                            <li> text-indent:10px; #들여쓰기 </li>
                            <li> visibility: [visible, hidden, collapse] #레이아웃을 변경하지 않고 요소를 보이거나 숨김 </li>
                            <li> pointer-events: [none, auto, inherit] #이벤트 요소를 제어 </li>
                            <li> order : 플렉스 요소들의 순서를 설정 </li>
                            <li> :empty : 비어있는지 확인 </li>
                            <li> disabled : 사용못하게 막음 </li>

                            <h2 className='h2'> 📌 css 스타일 </h2>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>



            </div>
        </>
    );
}

export default CssBasic;