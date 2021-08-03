import React, { useEffect, useRef, useState } from 'react';

const CssBasic = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[1].style.left = null;
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
                                <a href="#flex" className="col_p"> flex </a>
                                <a href="#aspect-ratio(화면 비율 조정)" className="col_p"> aspect-ratio(화면 비율 조정) </a>
                                <a href="#" className="col_p">  </a>
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
                            <span className="sstitle"> box-sizing </span>
                            <small> 요소 박스의 크기를 지정할때의 크기를 각각 따로 구분을 할지 안할지의 차이</small>
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
                            <small> 요소를 유저의 스크롤을 따라오게 할수 있음 </small>
                            <span className="mblock">
                                <li> 원하는 요소 {'postion:sticky;'} #그러면 부모의 요소의 끝까지 따라온다. </li>
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
                        <span className="stitle"> <a name="flex"> flex </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> display: flex; </li>
                                <li> gap: 10px 5px; #flex요소들 사이에 간격을 조정할 수 있음 margin사용을 하지 않아도 됨 </li>
                                <li>  </li>
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
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
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