import React, { useEffect, useRef, useState } from 'react';

const HtmlBasic = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);


        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            document.documentElement.scrollTop < elementHeight1 ?
                blockRef.current[0].style.top = elementHeight1 + "px" :
                blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight2 + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
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
                        <a href="#main" className="col_b"> <b>  </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary>  </summary>
                            <a href="#주석">주석</a>
                            <a href="#특수문자">특수문자</a>
                            <a href="#div태그">div태그</a>
                            <a href="#span태그">span태그</a>
                            <a href="#h태그">h태그</a>
                            <a href="#p태그">p태그</a>
                            <a href="#글자 스타일 관련 태그">글자 스타일 관련 태그</a>
                            <a href="#시멘틱 태그">시멘틱 태그</a>
                            <a href="#a태그">a태그</a>
                            <a href="#link태그">link태그</a>
                            <a href="#img태그">img태그</a>
                            <a href="#input태그">input태그</a>
                            <a href="#form태그">form태그</a>
                            <a href="#label태그">label태그</a>
                            <a href="#select태그">select태그</a>
                            <a href="#list태그">list태그</a>
                            <a href="#table태그">table태그</a>
                            <a href="#details태그">details태그</a>
                            <a href="#뷰포트(Viewport)"> 뷰포트(Viewport)  </a>
                            <a href="#">   </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <ul>
                        <span className="mtitle"> <a name="">  Html Study  </a> </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="HTML 기본구조"> HTML 기본구조 </a> </span>
                            <span className="sblock">
                                <li> {'  <!DOCTYPE html>  '} </li>
                                <li> {'  <html>  '} </li>
                                <li> {'    <head>  '} </li>
                                <li> {'      <title> 제목 </title>  '} </li>
                                <li> {'      <meta charset = "utf-8">  '} </li>
                                <li> {'      <link rel="stylesheet" href="css/styles.css">  '} </li>
                                <li> {'    </head>     '} </li>
                                <li> {'    <body>  '} </li>
                                <li> {'    </body>  '} </li>
                                <li> {'  </html>  '} </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="주석"> HTML 주석 </a> </span>
                            <li> 특징 : </li>
                            <li> 1. 주석은 컴퓨터는 인식하지 못하고 사람만 인식이 가능한 설명문이다. </li>
                            <span className="sblock">
                                <li> &lt; !-- 설명문 작성 -- &gt; </li>
                                <span> &lt; !-- 여기는 주석을 적는 공간입니다 -- &gt; </span>
                                <li> 현재는 리액트를 사용하여 보이지만 HTML에서는 보이지 않는다. </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="특수문자"> 특수문자 </a> </span>
                            <li> 특징 : </li>
                            <li> &lt; , &gt; , &amp; , &quot; , &copy; , &nbsp; </li>
                            <li> 위에 있는 문자들은 HTML문법과 동일한 문자들이 있어서 사용하려면 겹쳐서 에러가 발생하게 된다</li>
                            <li> 그래서 사용하려면 다른 문자의 결합으로 작성해야 한다.</li>
                            <li> <a href="https://dev.w3.org/html5/html-author/charref" target="_blank"> Entity Code </a> </li>
                            <span className="sblock">
                                <li> &lt; : &amp;lt; , 좌측 화살표</li>
                                <li> &gt; : &amp;gt; , 우측 화살표</li>
                                <li> &amp; : &amp;amp; , and문자 </li>
                                <li> &quot; : &amp;quot; , 쌍따옴표</li>
                                <li> &copy; : &amp;copy; , 카피라이터 문자</li>
                                <li> &nbsp; : &amp;nbsp; , 띄어쓰기</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="div태그"> div태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. block이라는 속성만 가지며 아무런 특징이 없다. </li>
                            <li> block이란 가로 공간을 전부 차지하는 것이다. </li>
                            <span className="sblock">
                                <li> &lt; div style="background-color:red"&gt; &lt; /div &gt; </li>
                                <div style={{ backgroundColor: 'red' }}> div태그의 예시 </div>
                                <li> 블록속성을 가지고 있어 빨갛게 길게 칠해지는것을 볼 수 있다.</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="span태그"> span태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. inline이라는 속성만 가지며 아무런 특징이 없다. </li>
                            <li> inline이란 글자가 있는 공간만 차지하는 것이다. </li>
                            <span className="sblock">
                                <li> &lt; span style="background-color:red"&gt; &lt; /span &gt; </li>
                                <span style={{ backgroundColor: 'red' }}> span태그의 예시 </span>
                                <li> 인라인속성을 가지고 있어 글자만 빨간 것을 볼 수 있다.</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="h태그"> h태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. block 속성 </li>
                            <li> 2. 글자 크기에 맞추어 폰트의 크기가 정해져 있음 </li>
                            <li> 3. 글자 크기가 정해져 있으므로 css스타일로 폰트크기를 바꾸는 것을 권장하지 않음 </li>
                            <li> 4. h1태그 부터 h6태그 까지 존재함 </li>
                            <span className="sblock">
                                <li> &lt; h1 style="background-color:red"&gt; &lt; /h1 &gt; </li>
                                <h1 style={{ backgroundColor: 'red' }}> h1태그의 예시 </h1>
                                <li> &lt; h2 style="background-color:skyblue"&gt; &lt; /h2 &gt; </li>
                                <h2 style={{ backgroundColor: 'skyblue' }}> h2태그의 예시 </h2>
                                <li> &lt; h3 style="background-color:red"&gt; &lt; /h3 &gt; </li>
                                <h3 style={{ backgroundColor: 'red' }}> h3태그의 예시 </h3>
                                <li> &lt; h4 style="background-color:skyblue"&gt; &lt; /h4 &gt; </li>
                                <h4 style={{ backgroundColor: 'skyblue' }}> h4태그의 예시 </h4>
                                <li> &lt; h5 style="background-color:red"&gt; &lt; /h5 &gt; </li>
                                <h5 style={{ backgroundColor: 'red' }}> h5태그의 예시 </h5>
                                <li> &lt; h6 style="background-color:skyblue"&gt; &lt; /h6 &gt; </li>
                                <h6 style={{ backgroundColor: 'skyblue' }}> h6태그의 예시 </h6>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="p태그"> p태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. block 속성 </li>
                            <li> 2. 한 줄 띄어쓰기의 특성을 가짐 </li>
                            <li> 3. 문단 태그라고도 불리며 자주 사용되는 태그 </li>
                            <span className="sblock">
                                <li> &lt; span style="background-color:red"&gt; &lt; /span &gt; </li>
                                <li style={{ backgroundColor: 'red' }}> p태그의 예시 </li>
                                <li> 블록속성을 가지고 있어 빨갛게 길게 칠해지는것을 볼 수 있다.</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="글자 스타일 관련 태그"> 글자 스타일 관련 태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. 인라인 속성 </li>
                            <li> 2. css스타일을 사용하지 않고도 사용됨 </li>
                            <li> 3. 솔직히 b, br태그 외에는 다른것은 가끔 사용하는것 같다</li>
                            <li> 4. css에서만 스타일을 적용해야 된다는 논쟁이 있는것으로 알고 있어서 저는 css에서만 스타일을 적용합니다</li>
                            <span className="sblock">
                                <b> b태그 : 굵은 글씨 </b> #시각적으로만 사용<br />
                                <strong> strong태그 : 굵은 글씨 </strong> #스크린 리더로 읽게 되면 강조<br />
                                <i> i태그 : 이탤릭체 #시각적으로만 사용 </i> <br />
                                <em> em태그 : 이탤릭체 글씨</em> #스크린 리더로 읽게 되면 강조 <br />
                                <ins> ins태그 : 글씨아래 밑줄 </ins> <br />
                                <del> del태그 : 중간에 줄</del> <br />
                                <mark style={{ backgroundColor: 'skyblue' }}> mark태그 : 형광펜 </mark> <br />
                                <sub> sub태그 : 아래 첨자</sub> <br />
                                <sup> sup태그 : 위 첨자</sup> <br />
                                <big> big태그 : 큰 글씨</big> <br />
                                <small> small태그 : 작은 글씨</small> <br />
                                br태그 : 띄어쓰기 태그(&lt;br/&gt;) 태그가 1개임 <br />
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="시멘틱 태그"> 시멘틱태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. block 속성 </li>
                            <li> 2. div태그와 동일하다 </li>
                            <li> 3. 사용하는 이유는 태그의 이름을 이용하여 시멘틱태그안에는 정해진 내용을 넣겠다라는 의미이다 </li>
                            <li> header : 상단 구역 </li>
                            <li> nav : 상단 구역에 메뉴 </li>
                            <li> aside : 사이드 영역 </li>
                            <li> section : 메인 영역 </li>
                            <li> article : 신문,기사,글 영역 </li>
                            <li> footer : 하단 구역, 저작권, 회사명, 주소, SNS 등등 </li>
                            <li> 시멘틱 태그가 몇개 더 있는것으로 기억하지만 일단 기억나는대로만 작성하였다. </li>

                            <span className="sblock">
                                <header className="sstitle"> header태그의 예시 </header>
                                <nav className="sstitle tab_4"> nav태그의 예시 </nav>
                                <main className="sstitle"> main태그의 예시 </main>
                                <aside className="sstitle tab_4"> aside태그의 예시 </aside>
                                <article className="sstitle tab_4"> article태그의 예시 , 독립적 </article>
                                <section className="sstitle tab_4"> section태그의 예시 , 연관된 내용을 묶음 </section>
                                <footer className="sstitle"> footer태그의 예시 </footer>
                                <div> 시멘틱 태그는 div태그이지만 이름만 다른 태그인 것을 알 수 있다. </div>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="a태그"> a태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. inline 속성 </li>
                            <li> 2. 주소로 이동시켜는 태그 </li>
                            <li> 3. href속성이 있으면 클릭이 된다 </li>
                            <span className="sblock">
                                <li> &lt; a href="#" &gt; a태그의 예시1 &lt; /a &gt; </li>
                                <a href="#"> href="#" 은 글씨가 클릭되고 제일 최상단으로 이동한다. </a>
                                <li> &lt; a href="#" style="text-decoration=none"&gt; a태그의 예시2 &lt; /a &gt; </li>
                                <a href="#" style={{ textDecoration: 'none' }}> text-decoration 속성은 밑줄을 없애준다 </a>
                                <li> &lt; a href="https://www.naver.com/" &gt; a태그의 예시3 &lt; /a &gt; </li>
                                <a href="https://www.naver.com/" > 네이버 주소로 이동 </a>
                                <li> &lt; a href="https://www.naver.com/" target="_blank" &gt; a태그의 예시4 &lt; /a &gt; </li>
                                <a href="https://www.naver.com/" target="_blank" > 새탭을 이용하여 네이버 주소로 이동 </a>
                                <span className="mblock">
                                    <li> 홈페이지에 보면 맨 위로 이동할 때 아래와 같이 사용한다. 만약에 아래와 같이 작성을하고 버튼을 눌렀는데
                                        이동하지 않았다면 2개의 태그가 너무 가까워서 움직이지 않은 것처럼 보였을 것이다.
                                        그러므로 저 위로 이동하여 놓고 해보면 작동할 것이다.
                                        그리고 반드시 a태그를 이용하여야만 작동이 된다.
                                    </li>
                                    <li> &lt; a name="top" &gt; a태그의 예시5 목적지 주소&lt; /a &gt; </li>
                                    <a name="top"> 내부 a태그 주소(하이퍼링크)로 이동 </a>
                                    <li> &lt; a href="#top" &gt; a태그의 예시5 이동할 주소&lt; /a &gt; </li>
                                    <a href="#top"> 내부 a태그 주소(하이퍼링크)로 이동 </a>
                                </span>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="link태그"> link태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. 비어있는 태그 </li>
                            <li> 2. 속성만 넣을 수 있음  </li>
                            <li> 3. 외부 소스를 불러주는 태그 </li>
                            <li> 4. HTML에서 css파일을 불러서 사용할 떄 일반적으로 사용 </li>
                            <span className="sblock">
                                <li> link태그는 &lt;head&gt; HTML head태그 안에 넣는다 &lt;/head&gt;</li>
                                <li> 아래 코드는 style.css 이름을 가진 css 파일을 불러오는 방법</li>
                                <li> &lt;link rel="stylesheet" type="text/css" href="style.css"&gt;</li>
                                <li> rel: 필수 속성으로, 현재 문서에 어떤 리소스 인지 알려준다 </li>
                                <li> type: 외부 리소스의 미디어 타입 </li>
                                <li> href: 외부 리소스의 URL </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="img태그"> img태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. 이미지 태그 </li>
                            <li> 2. src 속성 : 이미지의 주소입력 , null값이면 에러발생  </li>
                            <li> 3. alt 속성 : 이미지의 설명 </li>
                            <span className="sblock">
                                <li> img태그는 &lt;img src="URL주소" alt="이미지설명" width="100px" &gt; </li>
                                <img src={process.env.PUBLIC_URL + '/img/mountain_and_sea.jpg'} alt="산과바다" width="100px" />
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="input태그"> input태그 </a></span>
                            <li> 특징 : </li>
                            <ol>
                                <li> 사용자가 입력을 할 수 있는 태그 </li>
                                <li> 아이디,회원가입 등에서 사용하는 태그로 form태그와 같이 사용된다.  </li>
                                <li> input태그는 type속성을 이용하여 여러가지의 데이터를 입력할 수 있다. </li>
                                <li> input태그의 대표적 속성 required, placeholder </li>
                                <li> required 속성을 사용한 input태그는 제출시 제출이 불가능 </li>
                                <li> placeholder 속성을 사용하면 무엇을 입력할지 설명을 넣을 수 있다. </li>
                            </ol>
                            <span className="sblock">
                                <li> input태그의 예시 </li>
                                <li> &lt;form&gt; method="GET" action="#"&gt;</li>
                                <li> &lt;p&gt; &lt;input type="text" placeholder="아이디를 입력해주세요" required /&gt; &lt;/p&gt;</li>
                                <li> &lt;p&gt; &lt;input type="password" placeholder="비밀번호를 입력해주세요" required /&gt; &lt;/p&gt;</li>
                                <li> &lt;p&gt; &lt;button&gt; type="submit"&gt; 제출 &lt;/button&gt;  &lt;/p&gt;</li>
                                <li> &lt;/form&gt;</li>
                                <form method="GET" action="#">
                                    <li> <input type="text" placeholder="아이디를 입력해주세요" required /> </li>
                                    <li> <input type="password" placeholder="비밀번호를 입력해주세요" required /> </li>
                                    <li> <button type="submit"> 제출 </button>  </li>
                                </form>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="form태그"> form태그 </a></span>
                            <li> 특징 : </li>
                            <ol>
                                <li> 프론트엔드에서 사용자가 입력을 하고 백엔드 서버에 데이터를 보낼 때 사용  </li>
                                <li> form으로 보내는 방식에는 get,post 방식 등이 있다. </li>
                                <li> form태그 안에 여러가지 input 태그가 존재한다. </li>
                                <li> form태그 자체로는 아무런 특성이 없다. </li>
                                <li> input태그에서 자주 사용되는 속성</li>
                            </ol>
                            <span className="sblock">
                                <li> form태그 </li>
                                <li> GET방식은 빠르지만 보안이 좋지 않아 사생활 정보가 필요없을 때 사용, 검색 등</li>
                                <li> POST방식은 상대적으로 느리지만 보안이 좋아 사생활 정보가 필요할 때, 로그인,회원가입 등 </li>
                                <li> &lt; form method="POST"혹은"GET" action="양식을보낼주소" &gt; 이곳에 input태그들을 작성한다 &lt; /form &gt;</li>
                            </span>
                            <span className="sblock">
                                <li> fieldset태그 </li>
                                <li> form태그와 같이 사용할 수 있는 태그</li>
                                <li> form태그의 범위를 볼 수 있고 테두리를 감싸 줌 </li>
                                <li> &lt;form&gt;  &lt;fieldset&gt; 123123 &lt;/fieldset&gt; &lt;/form&gt; </li>
                                <li> <form>  <fieldset> 123123 </fieldset> </form> </li>
                            </span>
                            <span className="sstitle"> form에서 사용하는 input 태그의 종류 </span>
                            <span className="sblock">
                                <li className="sstitle"> 텍스트 입력시 숫자로 입력 </li>
                                <li> &lt;input type="number"/&gt;</li>
                                <li> <input type="number" /> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 텍스트 입력시 * 처리, 비밀번호를 입력할 때 사용</li>
                                <li> &lt;input type="password"/&gt;</li>
                                <li> <input type="password" /> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 라디오 버튼 , 여러개의 선택지 중에서 한 개를 선택할 때 사용</li>
                                <li> &lt;input type="radio" name="gender" value="man"/&gt; </li>
                                <li> &lt;input type="radio" name="gender" value="woman"/&gt; </li>
                                <li> <input type="radio" name="gender" value="man" /> 남 </li>
                                <li> <input type="radio" name="gender" value="woman" /> 녀 </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 체크박스, 여러개의 선택지 중에서 여러개 를 선택할 때 사용 </li>
                                <li> &lt;input type="checkbox" name="hooby" value="music"/&gt; 음악</li>
                                <li> &lt;input type="checkbox" name="hooby" value="sport" /&gt; 운동 </li>
                                <li> &lt;input type="checkbox" name="hooby" value="game"/&gt; 게임 </li>
                                <li> 좋아하는 취미를 고르세요 </li>
                                <li> <input type="checkbox" name="hooby" value="music" /> 음악 </li>
                                <li> <input type="checkbox" name="hooby" value="sport" /> 운동</li>
                                <li> <input type="checkbox" name="hooby" value="game" /> 게임</li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> <a name="label태그"> label태그 </a> </li>
                                <li> 체크박스나 라디오 버튼을 사용할 떄 자주 사용되는 태그 </li>
                                <li> 체크박스를 클릭하지 않아도 글자를 클릭하면 클릭할 수 있다. </li>
                                <li> 체크박스를 안보이게 하고 라벨 글자만 클릭하여 css 애니메이션을 만들기도 한다 </li>
                                <li> label태그의 for="" 하고 input태그의 id="" 값하고 연결된다 </li>
                                <li> &lt; label for="music" &gt; 음악 클릭 &lt; /label &gt;  </li>
                                <li> &lt; input type="checkbox" id="music" &gt; &lt;/input &gt;  </li>
                                <li> <label htmlFor="music"> <mark> 음악 클릭 </mark> </label> </li>
                                <li> <input type="checkbox" id="music" ></input>  </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 텍스트 , 텍스트를 입력할 때 </li>
                                <li> placeholder는 흐릿하게 무엇을 적을지 보여주는 값이다. 입력되면 사라진다. </li>
                                <li> &lt;input type="text" name="text" placeholder="텍스트를 입력하세요"/&gt; </li>
                                <li> <input type="text" name="text" placeholder="텍스트를 입력하세요" />  </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 텍스트 영역 , 블로그나 문의사항 메일 등 긴 장문의 텍스트를 입력할 때 사용</li>
                                <li> 속성 설명 : cols(가로길이) , rows(세로줄) , resize(크기조절) , border(테두리) , overflow(글자가넘칠때) </li>
                                <li> &lt;textarea cols="20" rows="5" style="resize:none; border:none; overflow:auto"/&gt; </li>
                                <li> <textarea cols="20" rows="5" style={{ resize: 'none', border: 'none', overflow: 'auto' }} />  </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> <a name="select태그"> select태그 </a> , 여러개의 조건 중에 선택을 할 수 있음</li>
                                <li> 속성 설명 : selected(처음 선택되어 있는 옵션) , disabled(옵션으로 선택 불가능)</li>
                                <li> &lt;select name="area"&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="" selected disabled&gt; &lt;/option&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="서울"&gt; 서울 &lt;/option&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="부산"&gt; 부산 &lt;/option&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="경기"&gt; 경기 &lt;/option&gt; </li>
                                <li> &nbsp;&lt;optgroup label="한국"&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="대구"&gt; 대구 &lt;/option&gt; </li>
                                <li> &nbsp;&nbsp;&lt;option value="대전"&gt; 대전 &lt;/option&gt; </li>
                                <li> &nbsp;&lt;/optgroup&gt; </li>
                                <li> &lt;/select&gt; </li>
                                <select name="area">
                                    <option value="" selected disabled> 선택 </option>
                                    <option value="서울"> 서울 </option>
                                    <option value="부산"> 부산 </option>
                                    <option value="경기"> 경기 </option>
                                    <optgroup label="한국">
                                        <option value="대구"> 대구 </option>
                                        <option value="대전"> 대전 </option>
                                    </optgroup>
                                </select>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 제출 , form 태그에 작성된 양식을 action으로 보낼 때 사용</li>
                                <li> 각 input태그에 name속성과 value속성을 이용하여 백엔드 서버로 보냄 </li>
                                <li> 백엔드 서버에서는 name이라는 값을 참조하여 value값을 사용할 수 있음 </li>
                                <li> 예를들어 어떤 input태그에 name="gender" value="man" 이라고 한다면
                                    백엔드에서 String sex = request.getParameter("gender"); //sex = man으로 사용됨
                                </li>
                                <li> &lt;button type="submit"&gt; 제출 &lt;/button&gt; </li>
                                <li> <button type="submit">  제출  </button> </li>
                                <li> &lt;input type="submit" value="제출"/&gt; </li>
                                <li> <input type="submit" value="제출" /> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle"> 기타 등등 나중에 시간나면 추가로 적을 계획 </li>
                                <li> range(좌우스크롤바), reset(초기화), search(검색창),
                                    tel(전화번호), time(시간), week(날짜), datetime(날짜?),
                                    email(이메일양식), month(달력) </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="list태그"> list태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. 리스트 형식으로 나열될 때 사용  </li>
                            <li> 2. 실제로는 세로로 나열보다는 css를 이용하여 가로로 배열하는데 사용하는것 같다. </li>
                            <li> 3. 리스트 태그에는 순서가 있는(ul)태그와 순서가 없는(ol)태그가 있다. </li>
                            <li> 그냥 ul만 써도 충분한것 같다. </li>
                            <li> 4. 리스트태그는 왼쪽에 원판(disc) 원(circle) 등 list-style-type 속성을 가지고있다. </li>
                            <li> 왠만하면 그냥 list-style-type="none" 으로 사용할 것 같다. </li>
                            <span className="sblock">
                                <li> &lt; ul &gt; </li>
                                <li> &nbsp;&nbsp;&lt; li &gt; 첫번째 &lt; /li &gt; </li>
                                <li> &nbsp;&nbsp;&lt; li &gt; 두번째 &lt; /li &gt; </li>
                                <li> &lt; /ul &gt; </li>
                                <li>
                                    <ul>
                                        <li style={{ marginLeft: "20px" }}>첫번째</li>
                                        <li style={{ marginLeft: "20px" }}>두번째</li>
                                    </ul>
                                </li>
                            </span>
                            <span className="sblock">
                                <li> &lt; ol &gt; </li>
                                <li> &nbsp;&nbsp;&lt; li &gt; 첫번째 &lt; /li &gt; </li>
                                <li> &nbsp;&nbsp;&lt; li &gt; 두번째 &lt; /li &gt; </li>
                                <li> &lt; /ol &gt; </li>
                                <li>
                                    <ol>
                                        <li style={{ marginLeft: "20px" }}>첫번째</li>
                                        <li style={{ marginLeft: "20px" }}>두번째</li>
                                    </ol>
                                </li>
                            </span>
                            <span className="sblock">
                                <li> &lt; dl &gt; </li>
                                <li className="tab_4"> &lt; dt &gt; 단어제목 &lt; /dt &gt; </li>
                                <li className="tab_4"> &lt; dd &gt; 단어설명 &lt; /dd &gt; </li>
                                <li> &lt; /dl &gt; </li>
                                <dl>
                                    <dt> 단어 </dt>
                                    <dd style={{ marginLeft: "20px" }}> 설명 </dd>
                                </dl>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="table태그"> table태그 </a></span>
                            <li> 특징 : </li>
                            <li> 표를 만들 때 사용하는 태그 </li>
                            <li> 알고 있어야 되는 개념이지만 자주 사용되지 않아 그냥 기억만 하고 있다. </li>
                            <li> 테이블과 관련된 태그의 종류 및 속성 , 많지만 필요한것만 정리</li>
                            <span className="sblock">
                                <li> table(표) (th(표의제목) tr(가로줄) td(셸,한칸))
                                    (colgroup col)(표의 길이나 색상등을 지정할 수 있음)
                                    thead(테이블상단구역) tbody(테이블중간구역) tfoot(테이블하단구역)
                                </li>
                                <li>
                                    colspan="2"(셸의 가로줄을 합치는 갯수), rowspan="2"(셸의 세로줄을 합치는갯수)
                                </li>
                            </span>
                            <li> 테이블 태그의 예시 </li>
                            <span className="sblock">
                                <li>
                                    <li> &lt;table border="1"&gt; </li>
                                    <li> &nbsp;&lt;colgroup&gt; </li>
                                    <li> &nbsp;&nbsp;&lt;col width="50px" style="background:red"/&gt; </li>
                                    <li> &nbsp;&nbsp;&lt;col width="150px" style="background:green" /&gt;</li>
                                    <li> &nbsp;&lt;col width="250px" style="background:blue" /&gt;</li>
                                    <li> &nbsp;&lt;/colgroup&gt;</li>
                                    <li> &nbsp;&lt;thead&gt;</li>
                                    <li> &nbsp;&nbsp;&lt;tr&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp;&lt;th colSpan="2"&gt; 제목 &lt;/th&gt; </li>
                                    <li> &nbsp;&nbsp;&nbsp;&lt;th rowSpan="3"&gt; 번호번호번호 &lt;/th&gt; </li>
                                    <li> &nbsp;&lt;/tr&gt;</li>
                                    <li> &nbsp;&lt;/thead&gt;</li>
                                    <li> &nbsp; &lt;tbody&gt;</li>
                                    <li> &nbsp;&nbsp; &lt;tr&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp; &lt;td&gt; 1번 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp; &lt;td&gt; 1 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp; &lt;td&gt; 1 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp;&lt;/tr&gt;</li>
                                    <li> &nbsp; &lt;/tbody&gt;</li>
                                    <li> &nbsp;&lt;tfoot&gt;</li>
                                    <li> &nbsp;&nbsp; &lt;tr&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp;  &lt;td&gt; 2번 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp; &lt;td&gt; 2 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp;&nbsp; &lt;td&gt; 2 &lt;/td&gt;</li>
                                    <li> &nbsp;&nbsp; &lt;/tr&gt;</li>
                                    <li> &nbsp; &lt;/tfoot&gt;</li>
                                    <li> &lt;/table&gt;</li>
                                </li>

                                <table border="1">
                                    <colgroup>
                                        <col width="50px" style={{ background: "red" }} />
                                        <col width="150px" style={{ background: "green" }} />
                                        <col width="250px" style={{ background: "blue" }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"> 제목 </th>
                                            <th rowSpan="3"> 번호번호번호 </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1번 </td>
                                            <td> 1 </td>
                                            <td> 1 </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td> 2번 </td>
                                            <td> 2 </td>
                                            <td> 2 </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="details태그"> details태그 </a></span>
                            <li> 특징 : </li>
                            <li> 1. block속성 </li>
                            <li> 2. 메뉴를 펼치고 접는 것을 하는 태그 </li>
                            <li> 속성 </li>
                            <span className="sblock">
                                <li className="sstitle"> 1. open : html에서는 펼쳐진 상태로 , css에서는 펼쳐졌을때 details[open]</li>
                                <li> &lt; details &gt; </li>
                                <li> &nbsp;&nbsp;&lt; summary &gt; </li>
                                <li> &nbsp;&nbsp;안에 내용적고 details를 써서 여러번 사용 가능</li>
                                <li> &nbsp;&nbsp;&lt; /summary &gt; </li>
                                <li> &lt; /details &gt; </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="뷰포트(Viewport)"> 뷰포트(Viewport) </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> 뷰포트 설정 </span>
                                <span className="mblock">
                                    <li> {'<meta name="viewport" content="widht=device-width,initial-scale=1,minimum-scale=1'}
                                        {',maximum-scale=1, user-scalable=no'} </li>
                                    <li> width : 뷰포트 너비 </li>
                                    <li> height : 뷰포트 높이 </li>
                                    <li> initial-scale : 초기배율 </li>
                                    <li> minimum-scale: 최소 축소배율 설정(default=0.25) </li>
                                    <li> maximum-scale: 최대 확대배율 설정(default=5.0) </li>
                                    <li> user-scalable: 확대/축소 여부 설정 </li>
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
                    </ul>
                </span>
            </div>




        </>
    );
}

export default HtmlBasic;