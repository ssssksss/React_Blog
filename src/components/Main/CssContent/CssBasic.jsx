import React, { useEffect, useRef, useState } from 'react';

const CssBasic = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 목록 </summary>
                            <details open>
                                <summary className="col_g"> 세부 목록 </summary>
                                <a href="#width(너비)" className="col_p"> width(너비) </a>
                                <a href="#height(높이)" className="col_p"> height(높이) </a>
                                <a href="#border(테두리라인)" className="col_p"> border(테두리라인) </a>
                                <a href="#margin(외부 간격)" className="col_p"> margin(외부 간격) </a>
                                <a href="#padding(내부 간격)" className="col_p"> padding(내부 간격) </a>
                                <a href="#overflow(흘러내림)" className="col_p"> overflow(흘러내림) </a>
                                <a href="#background(배경)" className="col_p"> background(배경) </a>
                                <a href="#선택자" className="col_p"> 선택자 </a>
                                <a href="#vertical-align(수직정렬) " className="col_p"> vertical-align(수직정렬)  </a>
                                <a href="#float(띄워서배치)" className="col_p"> float(띄워서배치) </a>
                                <a href="#position(요소위치)" className="col_p"> position(요소위치) </a>
                                <a href="#media-queries(미디어 쿼리)" className="col_p"> media-queries(미디어 쿼리) </a>
                                <a href="#폰트 추가하는 방법" className="col_p"> 폰트 추가하는 방법 </a>
                                <a href="#text-decoration(텍스트장식)" className="col_p"> text-decoration(텍스트장식) </a>
                                <a href="#text-align(글자위치조정)" className="col_p"> text-align(글자위치조정) </a>
                                <a href="#font(폰트)" className="col_p"> font(폰트) </a>
                                <a href="#box-shadow(그림자) " className="col_p"> box-shadow(그림자)  </a>
                                <a href="#aspect-ratio(화면 비율 조정)" className="col_p"> aspect-ratio(화면 비율 조정) </a>
                                <a href="#line-height(텍스트행사이의거리)" className="col_p"> line-height(텍스트행사이의거리) </a>
                                <a href="#list-style(목록태그설정)" className="col_p"> list-style(목록태그설정) </a>
                                <a href="#text-align(가로정렬)" className="col_p"> text-align(가로정렬) </a>
                                <a href="#letter-spacing(글자사이간격조정)" className="col_p"> letter-spacing(글자사이간격조정) </a>
                                <a href="#white-space(공백문자처리)" className="col_p"> white-space(공백문자처리) </a>
                                <a href="#word-break(단어분리처리여부)" className="col_p"> word-break(단어분리처리여부) </a>
                                <a href="#word-wrap(요소를넘은글자처리여부)" className="col_p"> word-wrap(요소를넘은글자처리여부) </a>
                                <a href="#display(요소디스플레이속성)" className="col_p"> display(요소디스플레이속성) </a>
                                <a href="#transform(회전,크기,기울기,이동)" className="col_p"> transform(회전,크기,기울기,이동) </a>
                                <a href="#flex(이어서?배치)" className="col_p"> flex(이어서?배치) </a>
                                <a href="#flex-direction(플렉스요소배치))" className="col_p"> flex-direction(플렉스요소배치) </a>
                                <a href="#align-content(F,G의 라인을 정렬)" className="col_p"> align-content(F,G의 라인을 정렬) </a>
                                <a href="#justify-content(F,G 요소가로축배치)" className="col_p"> justify-content(F,G 요소가로축배치) </a>
                                <a href="#align-items(F,G 라인을기준으로 아이템세로축정렬)" className="col_p"> align-items(line을기준으로 세로축정렬) </a>
                                <a href="#filter(필터효과)" className="col_p"> filter(필터효과) </a>
                                <a href="#variable(변수)" className="col_p"> variable(변수) </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#기타" className="col_p"> 기타 </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="width(너비)"> width(너비) </a> </span>
                        <span className="sblock">
                            <small> inline속성에는 적용이 되지 않는다.  </small>
                            <span className="sstitle"> width 속성 </span>
                            <span className="mblock">
                                <li> min-width: 500px;  #박스의 최소 길이 설정 </li>
                                <li> max-width: 500px;  #박스의 최대 길이 설정 </li>
                                <li> min-width: 100%;  #박스의 최소 길이 설정 , 부모요소를 기준 </li>
                                <li> max-width: 100%;  #박스의 최대 길이 설정 , 부모요소를 기준 </li>
                                <li> width: 100px, 100%  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="height(높이)"> height(높이) </a> </span>
                        <span className="sblock">
                            <small> inline속성에는 적용이 되지 않는다.  </small>
                            <span className="sstitle"> height 속성 </span>
                            <span className="mblock">
                                <li> min-height: 500px; #박스의 최소 길이 설정 </li>
                                <li> max-height: 500px; #박스의 최대 길이 설정 </li>
                                <li> min-height: 100%; #박스의 최소 길이 설정 , 부모요소를 기준 </li>
                                <li> max-height: 100%; #박스의 최대 길이 설정 , 부모요소를 기준 </li>
                                <li> height: 100px, 100% </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="border(테두리라인)"> border(테두리라인) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> border 속성 </span>
                            <span className="mblock">
                                <li> border: [선두께 선모양 색깔]; #block요소의 테두리(변)를 두께 5px로 지정
                                    <span className="sblock">
                                        <span className="sstitle"> 선모양 </span>
                                        <li> [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ] </li>
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
                                    </span>
                                </li>
                                <li> border-radius: [모서리둥글게만드는크기];
                                    <span className="sblock">
                                        <span className="sstitle"> 선 모서리 </span>
                                        <li> [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ]  </li>
                                        <li> border-radius: 5px; #4개의 모서리를 둥글게 만듬 </li>
                                    </span>
                                </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="margin(외부 간격)"> margin(외부 간격) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> margin 속성 </span>
                            <small> block요소에만 사용가능? </small>  <br />
                            <small> margin은 잘못 배치하면 밀리기도해서 계산을 하여 배치하여야 한다. </small>
                            <li> [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ]  </li>
                            <li> margin: 5px 10px 5px; </li>
                            <li> margin-left: 10px; </li>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="padding(내부 간격)"> padding(내부 간격) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> padding 속성 </span>
                            <small> block요소에만 사용가능? </small> <br />
                            <small> padding은 잘못 배치하면 밀리기도해서 계산을 하여 배치하여야 한다. </small>
                            <span className="mblock">
                                <li> [ 세로 | 가로 ] , [ 위 | 가로 | 아래 ] , [ 위 | 우측 | 아래 | 좌측 ]  </li>
                                <li> padding: 5px 10px 5px;  </li>
                                <li> padding-right: 10px;  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="box-sizing"> box-sizing </a> </span>
                        <span className="sblock">
                            <small> 요소 박스의 크기를 지정할때의 크기를 각각 따로 구분을 할지 안할지의 차이</small>
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> box-sizing: border-box; #(요소+안쪽 여백+테두리) 크기, 일반적으로 많이 사용 </li>
                                <li> box-sizing: content-box; #요소 크기 + 안쪽 여백 크기 + 테두리 크기  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">  <a name="overflow(흘러내림)"> overflow(흘러내림) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> overflow 속성 </span>
                            <small> 블록 요소안의 컨텐츠가 블록보다 클 때 어떻게 볼 지 처리하는 방법  </small>
                            <span className="mblock">
                                <li> overflow-x: #가로만 처리 </li>
                                <li> overflow-y: #세로만 처리 </li>
                                <li> overflow: visible; #블록 요소를 넘어서 보여준다. </li>
                                <li> overflow: hidden; #블록 요소보다 넘치는 부분은 숨긴다. </li>
                                <li> overflow: clip; #hidden과 비슷하지만 코드를 추가하여 어떠한 스크롤도 사용 불가 </li>
                                <li> overflow: scroll; #블록요소 보다 크면 내부 스크롤을 생성한다. </li>
                                <li> overflow: auto; #알아서 처리(스크롤 바) </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="background(배경)"> background(배경) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> background 속성 </span>
                            <span className="mblock">
                                <span className="sstitle"> background repeat </span>
                                <li> background-repeat: no-repeat; #반복하지 않음 </li>
                                <li> background-repeat: repeat-x; #가로 방향으로만 반복 </li>
                                <li> background-repeat: repeat-y; #세로 방향으로만 반복 </li>
                                <li> background-repeat: repeat;  #가로와 세로 모두 반복 </li>
                                <li> background-repeat: space; #반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 </li>
                                <li> background-repeat: round; #반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-image </span>
                                <li> background-image: url("http:// ~~~~~.png"); , 이미지 불러오기</li>
                                <li> background-image: url(""); , 이미지 불러오기</li>
                                <li>  </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-size </span>
                                <li> background-size: cover; #이미지가 잘리지 않게 가로세로크기를 조정, 최대한 큰 크기의 이미지를 유지      </li>
                                <li> background-size: contain; #요소 사이즈에 맞게 이미지의 크기를 조정        </li>
                                <li> background-size: auto; #이미지의 원본크기를 유지       </li>
                                <li> background-size: 100%; </li>
                                <li> background-size: 200px 200px; </li>
                                <li>  </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-position </span>
                                <small> 배경의 배치를 어떻게 할지 결정 </small>
                                <li> background-position: top; </li>
                                <li> background-position: bottom; </li>
                                <li> background-position: left; </li>
                                <li> background-position: right; </li>
                                <li> background-position: center; </li>
                                <li> background-position: 50% 50%; #부모 요소의 가로 세로 비율 </li>
                                <li> background-position: right 50% bottom 50%;  </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-origin </span>
                                <small> 배경의 원점을 부모의 테두리,내부간격,컨텐츠에 맞출지를 정함 </small>
                                <li> background-origin: border-box; </li>
                                <li> background-origin: padding-box; </li>
                                <li> background-origin: content-box; </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-color </span>
                                <li> background-color: #ffffff; #16진수로 RGB </li>
                                <li> background-color: red; #이름이 있는 색깔 </li>
                                <li> background-color: rgb(255,255,255); </li>
                                <li> background-color: rgba(255,255,255,0.5); # RGB + 명도 </li>
                                <li> background-color: hsl(50, 33%, 25%); # HSL(색조[0-360] ,채도(회색),명도)  </li>
                                <li>  </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-clip </span>
                                <small> 요소의 배경을 채우는 공간 설정 </small>
                                <li> background-clip: border-box; </li>
                                <li> background-clip: padding-box; </li>
                                <li> background-clip: content-box; </li>
                                <li> background-clip: text; #글자 뒤로 이미지를 보여줌 , color: transparent; -webkit-background-clip: text;  </li>
                            </span>
                            {/*  */}
                            <span className="mblock">
                                <span className="sstitle"> background-attachment </span>
                                <small> 배경을 뷰포트와 요소 어디에 고정할지 선택, 뷰포트는 브라우저의 스크롤, 요소는 요소내부 스크롤 </small>
                                <li> background-attachment: scroll; #배경을 요소에 고정  </li>
                                <li> background-attachment: fixed; #배경을 뷰포트에 고정 </li>
                                <li> background-attachment: local; #배경을 콘텐츠에 고정</li>
                            </span>
                            {/*  */}
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="선택자"> 선택자 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 선택자 종류 </span>
                            <span className="mblock">
                                <li> .class{'{ }'} #클래스 , 아이디 선택자 보다 사용을 권장 </li>
                                <li> #id{'{ }'} #아이디 , 우선순위가 높음, 하지만 사용을 하는것이 좋지 않음 </li>
                                <li> 부모선택자 자식선택자{'{ }'} #자식 선택자, 공백으로 구분하며 부모아래의 모든 자식선택자에게 적용   </li>
                                <li> 부모선택자&gt;자식선택자{'{ }'} #직속 자식 선택자, 부모 아래 다른 선택자를 거치지 않은 선택자들에게 적용 </li>
                                <li> 선택자, 선택자{'{ }'} #복수 선택자, 한번에 여러개의 선택자에게 적용 </li>
                                <li> 선택자:[first-child,last-child,not(:lastchild), not(:first-child)]{'{ }'}, 여러개의 요소들중에 선택(가상클래스) </li>
                                <li> button:hover{'{ }'} #button 요소 위에 올라갈때  </li>
                                <li> :is(header,nav) button #header와nav태그 자식 버튼에 적용  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="vertical-align(수직정렬)"> vertical-align(수직정렬) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> vertical-align 속성 </span>
                            <span className="mblock">
                                <small> inline 속성이나 table 셀에서 수직 정렬 , block요소는 되지 않음 </small> <br />
                                <small> 대체적으로 이미지와 텍스트를 같은 위치에 배치하기 위해 사용된다.  </small> <br />
                                <small> 텍스트에는 line-height를 주고 이미지에는 vertical-align 주고서 처리하면 거의 일치  </small>
                                <li> vertical-align: baseline; </li>
                                <li> vertical-align: sub; </li>
                                <li> vertical-align: super; </li>
                                <li> vertical-align: text-top; </li>
                                <li> vertical-align: text-bottom; </li>
                                <li> vertical-align: middle; </li>
                                <li> vertical-align: top; # </li>
                                <li> vertical-align: bottom; </li>
                                <li> vertical-align: </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="float(띄워서배치)"> float(띄워서배치) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="position(요소위치)"> position(요소위치) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> position : static; #문서를 기준으로 배치? </li>
                                <li> position : relative; #본인 요소를 기준으로 배치 </li>
                                <li> position : absolute; #부모요소에 relative를 하고 사용하면 요소의 기준점에서 배치  </li>
                                <li> position : sticky; #스크롤 할 때 부모 요소의 끝까지 따라 움직인다.. </li>
                                <li> top: 10px; #요소를 上로 10px이동해서 배치</li>
                                <li> bottom: 10px; #요소를 下로 10px이동해서 배치</li>
                                <li> left: 10px; #요소를 左로 10px이동해서 배치</li>
                                <li> right: 10px; #요소를 右로 10px이동해서 배치</li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="media-queries(미디어 쿼리)"> media-queries(미디어 쿼리) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 미디어쿼리 사용 </span>
                            <span className="mblock">
                                <li> {'<link rel="" media="screen and (max-width: 768px)" href=".css" '} #조건에 맞으면 css 파일을 불러옴 </li>
                                <li> 320 ~ 768 , 769 ~ 1024 , 1024 ~ </li>
                                <li> 논리연산자 : and, not, ,(or) , only(미디어쿼리지원하는브라우저만) </li>
                                <li> all, screen, tv, projection, handler(휴대용장치), speech(음성출력), aural(화면을소리출력장치) </li>
                                <li> embossed(점자인쇄장치) , tty(디스플레이제한장치) , braille(점자표시장치) , width(웹페이지)  </li>
                                <li> height(웹페이지) , device-width , device-height, orientaion(기기화면방향, landscape, portrait)  </li>
                                <li> aspect-ratio(화면비율), device-aspect-ratio, color(기기의비트수?) , color-index(기기의색상수?)  </li>
                                <li> monochrome(흑백일때픽셀당비트수) , resolution(기기해상도) , scan(tv스캔방식), grid(기기 비트맵,그리드) </li>
                                <li> @media only | not 미디어유형 and | , (조건문) {'{}'} </li>
                                <li> @media screen and (max-width: 768px){'{}'} #768px보다 화면이 작을때 적용 </li>
                                <li> @media screen and (min-width: 768px){'{}'} #768px보다 화면이 클때 적용 </li>
                                <li> @media screen (min-width:320px) and (max-width:768px){'{}'} #320~768px일때 적용 </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="폰트 추가하는 방법"> 폰트 추가하는 방법 </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="text-decoration(텍스트장식)"> text-decoration(텍스트장식) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> text-decoration 속성 </span>
                            <span className="mblock">
                                <li> text-decoration : underline dotted red 4px; #4px의 빨간 점선 밑줄</li>
                                <li> text-decoration : red wavy underline; #꾸불꾸불한 밑줄 </li>
                                <li> text-decoration : overline; #글자 위줄에 밑줄</li>
                                <li> text-decoration : line-through; #글자 중앙에 밑줄</li>
                                <li> text-decoration : underline; #글자 아래에 밑줄</li>
                                <li> text-decoration : none; #밑줄을 사용하지 않음, a태그에 밑줄제거하는데 사용</li>
                                <li> text-decoration : blink; #브라우저에 따라 깜빡거림, 사용권장하지않음</li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="text-align(글자위치조정)"> text-align(글자위치조정) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <small> 부모 요소를 기준으로 위치를 잡음,
                                    block요소에 적용이 가능하고 정렬되는 것은 block요소안에 inline요소에적용이 가능하다. </small>
                                <li> text-align: left(default) </li>
                                <li> text-align: center</li>
                                <li> text-align: right</li>
                                <li> text-align: justify #가운데를 기준으로 좌우로 정렬</li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="font(폰트)"> font(폰트) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> font 속성 </span>
                            <span className="mblock">
                                <li> color: red, #ffffff , rgba(255,255,255); #폰트의 색깔 설정 </li>
                                <li> font-size: 10px, 1em, 1rem, 10%; #폰트의 크기 지정 </li>
                                <li> font-weight: 900; #폰트의 굵기 설정 </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="box-shadow(그림자) "> box-shadow(그림자) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@support"> @support </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <small> 브라우저가 지원이 되면 css적용하는 방법 </small>
                            <span className="mblock">
                                <li> @supports(display:grid) {'{ css코드 }'} </li>
                                <li> @supports not (display:grid) {'{ css코드 }'} </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="snap-scroll"> snap-scroll </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> snap-scroll 속성 </span>
                            <small> 스크롤을 내리면 부드럽게 내려가는 것이 아니라 어떤 요소들에 걸리면서 내려감,
                                모바일? 느낌이 나게 해줌 </small>
                            <span className="mblock">
                                <li> 부모css에 scroll-snap-type: y mandatory; </li>
                                <li> 자식css에 scroll-snap-align: center; </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="aspect-ratio(화면 비율 조정)"> aspect-ratio(화면 비율 조정) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> aspect-ratio </span>
                            <small> 이미지태그나 동영상태그에 적용 </small>
                            <span className="mblock">
                                <li> img {'{ aspect-ratio: 16/9; }'} </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="line-height(텍스트행사이의거리)"> line-height(텍스트행사이의거리) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> line-height 속성 </span>
                            <span className="mblock">
                                <small> 선 상자의 높이를 설정 </small>
                                <li> line-height: normal , 3, 3em, 30%; </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="list-style(목록태그설정)"> list-style(목록태그설정) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <small> 목록 태그에 적용되는 속성 , li태그에서 앞에 있는 아이콘을 설정 </small>
                            <span className="mblock">
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
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="text-align(가로정렬)"> text-align(가로정렬) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <small> block요소나 표에서 사용 </small>
                                <li> text-align: left; </li>
                                <li> text-align: right; </li>
                                <li> text-align: center; </li>
                                <li> text-align: justify; </li>
                                <li> text-align: justify-all; </li>
                                <li> text-align: start; </li>
                                <li> text-align: end; </li>
                                <li> text-align: match-parent; </li>
                                <li> text-align: "."; </li>
                                <li> text-align: "." center; </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="letter-spacing(글자사이간격조정)"> letter-spacing(글자사이간격조정) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> letter-spacing 속성 </span>
                            <span className="mblock">
                                <small> 글자 가로 사이 간격 </small>
                                <li> letter-spacing: normal , 1em , 1px, .1px , -1px ; </li>
                                <li>  </li>
                                <li>  </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="white-space(공백문자처리)"> white-space(공백문자처리) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <small> 글자를 줄바꿈을 어떻게 할지 설정하는 속성 </small>
                                <li> white-space: normal;  </li>
                                <li> white-space: nowrap; #공백유지x , 줄바꿈은 br태그에서만 일어남 </li>
                                <li> white-space: pre; #공백유지, 줄바꿈은 개행문자와 br태그에서만 일어남 </li>
                                <li> white-space: pre-wrap; #공백유지, 줄바꿈은 개행문자와 br태그에서만 일어나지만 너무 길면 줄을 바꾸어줌 </li>
                                <li> white-space: pre-line; #공백유지x, 줄바꿈은 개행문자와 br태그에서만 일어나지만 너무 길면 줄을 바꾸어줌</li>
                                <li> white-space: break-spaces; #pre-wrap과 유사, 공백유지, 공백을유지하면서도 줄바꿈 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="word-break(단어분리처리여부)"> word-break(단어분리처리여부) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> word-break 속성 </span>
                            <span className="mblock">
                                <small> CJK아시아권 글자에 허용 </small>
                                <li> word-break: normal;  </li>
                                <li> word-break: break-all; #강제로 줄바꿈 </li>
                                <li> word-break: keep-all; #줄바꿀때 단어를 끊지 않음 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="word-wrap(요소를넘은글자처리여부)"> word-wrap(요소를넘은글자처리여부) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> word-wrap: normal; </li>
                                <li> word-wrap: brea-word; #넘어가면 줄바꿈 </li>
                                <li> word-wrap: </li>
                                <li> word-wrap: </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="display(요소디스플레이속성)"> display(요소디스플레이속성) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> display 속성 </span>
                            <span className="mblock">
                                <small> display속성에 따라 레이아웃(배치)를 하는 방법이 바뀜 </small>
                                <li> display: inline; </li>
                                <li> display: block; </li>
                                <li> display: inline-block; </li>
                                <li> display: none; </li>
                                <li> display: visible; </li>
                                <li> display: flex; </li>
                                <li> display: hidden; </li>
                                <li> display:  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="transform(회전,크기,기울기,이동)"> transform(회전,크기,기울기,이동) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> transform 속성 </span>
                            <span className="mblock">
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
                                <li> transform :   </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="flex(이어서?배치)"> flex(이어서?배치) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> display: flex; </li>
                                <li> gap: 10px 5px; #flex요소들 사이에 간격을 조정할 수 있음 margin사용을 하지 않아도 됨 </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="flex-direction(플렉스요소배치)"> flex-direction(플렉스요소배치) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> flex-direction </span>
                            <span className="mblock">
                                <li> flex-direction: column; #플렉스요소들을 세로로 배치 </li>
                                <li> flex-direction: column-reverse; #플렉스요소들을 세로로 역순으로 배치 </li>
                                <li> flex-direction: row; #플렉스요소들을 가로로 배치 </li>
                                <li> flex-direction: row-reverse; #플렉스요소들을 가로로 역순으로 배치 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="align-content(F,G의 라인을 정렬)"> align-content(F,G의 라인을 정렬) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> align-content 속성 </span>
                            <span className="mblock">
                                <small> flex박스나 grid에서 사용하는 배치 방법 </small> <br />
                                <small> flex-line을 정렬 </small>
                                <li> align-content: center;     </li>
                                <li> align-content: start;      </li>
                                <li> align-content: end;        </li>
                                <li> align-content: flex-start; </li>
                                <li> align-content: flex-end;   </li>
                                <li> align-content: normal;   </li>
                                <li> align-content: baseline;   </li>
                                <li> align-content: first baseline;   </li>
                                <li> align-content: last baseline;   </li>
                                <li> align-content: space-between;   </li>
                                <li> align-content: space-around;   </li>
                                <li> align-content: space-evenly;   </li>
                                <li> align-content: stretch;   </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="justify-content(F,G 요소가로축배치)"> justify-content(F,G 요소가로축배치) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> justify-content: center;      </li>
                                <li> justify-content: start;       </li>
                                <li> justify-content: end;          </li>
                                <li> justify-content: flex-start;   </li>
                                <li> justify-content: flex-end;    </li>
                                <li> justify-content: left;        </li>
                                <li> justify-content: right;       </li>
                                <li> justify-content: space-between; #요소들 사이에 동일한 간격</li>
                                <li> justify-content: space-around; #요소 주위에 동일한 간격 </li>
                                <li> justify-content: space-evenly; #전부 균등하게</li>
                                <li> justify-content: stretch;       </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="align-items(F,G 라인을기준으로 아이템세로축정렬)"> align-items(F,G 라인을기준으로 아이템세로축정렬) </a> </span>
                        <span className="sblock">
                            <small> flex-line을 기준으로 아이템을 정렬 </small>
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> align-items: center;      </li>
                                <li> align-items: start;       </li>
                                <li> align-items: end;          </li>
                                <li> align-items: flex-start;   </li>
                                <li> align-items: flex-end;    </li>
                                <li> align-items: left;        </li>
                                <li> align-items: right;       </li>
                                <li> align-items: space-between; #요소들 사이에 동일한 간격</li>
                                <li> align-items: space-around; #요소 주위에 동일한 간격 </li>
                                <li> align-items: space-evenly; #전부 균등하게</li>
                                <li> align-items: stretch;       </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="filter(필터효과)"> filter(필터효과) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
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
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="variable(변수)"> variable(변수) </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> variable 속성 </span>
                            <span className="mblock">
                                <li> --변수명:  ; #최소한 공백이라도 들어가여 변수 선언 </li>
                                <li> transform: rotate(--변수명,default값); #변수값 </li>
                                <li> transform: rotate(--변수명); #변수명 만 선언하고 변수값 삽입 가능 </li>
                                <small> {'style="--변수명:넣을값;'} #html에서 요소속성에 이렇게 정의하면 0이라는 값이 들어감 </small>
                                <li> calc(90deg * var(--i))과 같이 calc를 사용하여 값을 css 속성값에 넣어야 제대로 작동 </li>
                                <li> css변수에 값이 잘못들어갈경우 default 값이 들어간다. </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="기타"> 기타 </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> opactiry : 0.5; #요소의 명암을 조절 </li>
                                <li> content #html 코드 추가 </li>
                                <li> z-index #화면에 보일 때 우선순위 </li>
                                <li> font-variant #폰트의 특성 부여(첨자 등) </li>
                                <li> !important #우선순위 </li>
                                <li> text-indent:10px; #들여쓰기 </li>
                                <li> visibility: [visible, hidden, collapse] #레이아웃을 변경하지 않고 요소를 보이거나 숨김 </li>
                                <li> pointer-events: [none, auto, inherit] #이벤트 요소를 제어 </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default CssBasic;