import React, { useEffect, useRef } from 'react';

const HtmlBasic = (props) => {

  return (
    <>
      <div className="common_style">

        <div className='block1'>
          <details>
            <summary> HTML 기본구조 </summary>
            <div className='block2'>
              <div className="block4" style={{ listStyle: "none" }}>
                <li> {'  <!DOCTYPE html>  '} </li>
                <li> {'  <html>  '}
                  <li> {'    <head>  '}
                    <li> {'      <title> 제목 </title>  '} </li>
                    <li> {'      <meta charset = "utf-8">  '} </li>
                    <li> {'      <link rel="stylesheet" href="css/styles.css">  '} </li>
                  </li>
                  <li> {'    </head>     '} </li>
                  <li> {'    <body>  '} </li>
                  <li> {'    </body>  '} </li>
                </li>
                <li> {'  </html>  '} </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> HTML 주석 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 주석은 컴퓨터는 인식하지 못하고 사람만 인식이 가능한 설명문이다. </li>
              <li> {' <!-- 여기는 주석을 적는 공간입니다 -->'} </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> 특수문자 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> <a href="https://dev.w3.org/html5/html-author/charref" target="_blank"> Entity Code </a> </li>
              <li> 아래 문자들은 HTML문법과 동일한 문자들이 있어서 사용하려면 겹쳐서 에러가 발생하게 된다 그래서 사용하려면 다른 문자의 결합으로 작성해야 한다.</li>
              <li> &lt; , &gt; , &amp; , &quot; , &copy; , &nbsp; </li>
              <div className="block4" style={{ listStyle: "none" }}>
                <li> &lt; : &amp;lt; , 좌측 화살표</li>
                <li> &gt; : &amp;gt; , 우측 화살표</li>
                <li> &amp; : &amp;amp; , and문자 </li>
                <li> &quot; : &amp;quot; , 쌍따옴표</li>
                <li> &copy; : &amp;copy; , 카피라이터 문자</li>
                <li> &nbsp; : &amp;nbsp; , 띄어쓰기</li>
              </div>
            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> div태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> block이라는 속성만 가지며 아무런 특징이 없다. </li>
              <li> block이란 가로 공간을 전부 차지하는 것이다. </li>
              <li> 블록속성을 가지고 있어 빨갛게 길게 칠해지는것을 볼 수 있다.</li>
              <li> &lt; div style="background-color:red"&gt; &lt; /div &gt; </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 div 태그 예시 </h3>
                  <div style={{ backgroundColor: 'red' }}> {' <div style="background-color:red">  </div> '} </div>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> span태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> inline이라는 속성만 가지며 아무런 특징이 없다. </li>
              <li> inline이란 글자가 있는 공간만 차지하는 것이다. </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 span 태그 예시 </h3>
                  <span style={{ backgroundColor: 'red' }}> {' <span style="background-color:red">  </span> '} </span>
                </div>
              </li>
            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> h태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. block 속성 </li>
              <li> 2. 글자 크기에 맞추어 폰트의 크기가 정해져 있음 </li>
              <li> 3. 글자 크기가 정해져 있으므로 css스타일로 폰트크기를 바꾸는 것을 권장하지 않음 </li>
              <li> 4. h1태그 부터 h6태그 까지 존재함 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 h 태그 예시 </h3>
                  <h1 style={{ backgroundColor: 'red' }}> {' <h1 style="background-color:red">  </h1> '} </h1>
                  <h2 style={{ backgroundColor: 'red' }}> {' <h2 style="background-color:red">  </h2> '} </h2>
                  <h3 style={{ backgroundColor: 'red' }}> {' <h3 style="background-color:red">  </h3> '} </h3>
                  <h4 style={{ backgroundColor: 'red' }}> {' <h4 style="background-color:red">  </h4> '} </h4>
                  <h5 style={{ backgroundColor: 'red' }}> {' <h5 style="background-color:red">  </h5> '} </h5>
                  <h6 style={{ backgroundColor: 'red' }}> {' <h6 style="background-color:red">  </h6> '} </h6>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> p태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. block 속성 </li>
              <li> 2. 한 줄 띄어쓰기의 특성을 가짐 </li>
              <li> 3. 문단 태그라고도 불리며 자주 사용되는 태그 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 p태그 예시 </h3>
                  <p style={{ backgroundColor: 'red' }}> {' <p style="background-color:red">  </p> '} </p>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> 글자 스타일 관련 태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. 인라인 속성 </li>
              <li> 2. css스타일을 사용하지 않고도 사용됨 </li>
              <li> 3. 솔직히 b, br태그 외에는 다른것은 가끔 사용하는것 같다</li>
              <li> 4. css에서만 스타일을 적용해야 된다는 논쟁이 있는것으로 알고 있어서 저는 css에서만 스타일을 적용합니다</li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 글자 스타일 관련 태그 예시 </h3>
                  <b> b태그 : 굵은 글씨 </b> <small> #시각적으로만 사용 </small>  <br />
                  <strong> strong태그 : 굵은 글씨 </strong> <small> #스크린 리더로 읽게 되면 강조 </small><br />
                  <i> i태그 : 이탤릭체 #시각적으로만 사용 </i> <br />
                  <em> em태그 : 이탤릭체 글씨</em> <small> #스크린 리더로 읽게 되면 강조 </small> <br />
                  <ins> ins태그 : 글씨아래 밑줄 </ins> <br />
                  <del> del태그 : 중간에 줄</del> <br />
                  <mark style={{ backgroundColor: 'skyblue' }}> mark태그 : 형광펜 </mark> <br />
                  <sub> sub태그 : 아래 첨자</sub> <br />
                  <sup> sup태그 : 위 첨자</sup> <br />
                  <big> big태그 : 큰 글씨</big> <br />
                  <small> small태그 : 작은 글씨 </small> <small> # 초록색 속성은 없음 </small> <br />
                  br태그 : 띄어쓰기 태그({'<br/>'};) 태그가 1개임 <br />
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> 시멘틱태그 ( 좀 더 정리할 것 ) </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. block 속성 </li>
              <li> 2. div태그와 동일하다 </li>
              <li> 3. 사용하는 이유는 태그의 이름을 이용하여 시멘틱태그안에는 정해진 내용을 넣겠다라는 의미이다 </li>
              <li> header : 상단 구역 </li>
              <li> nav : 상단 구역에 메뉴 </li>
              <li> section : 메인 영역 </li>
              <li> aside : 사이드 영역 </li>
              <li> article : 신문,기사,글 영역 </li>
              <li> footer : 하단 구역, 저작권, 회사명, 주소, SNS 등등 </li>
              <li> 시멘틱 태그가 몇개 더 있는것으로 기억하지만 일단 기억나는대로만 작성하였다. </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 </h3>
                  <li>  </li>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> a태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. inline 속성 </li>
              <li> 2. 주소로 이동시켜는 태그 </li>
              <li> 3. href속성이 있으면 클릭이 된다 </li>
              <li> 4. 밑줄을 그어주는 속성이 존재한다.  </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 a 태그의 예시 </h3>
                  <li> {' <a href="#"> href="#" 속성을 가진 a태그를 클릭하면 페이지 최상단으로 이동 </a> '} </li>
                  <li> {' <a href="#" style="text-decoration=none"> a태그의 속성인 밑줄을 제거해준다. </a> '} </li>
                  <li> {' <a href="https://www.naver.com/"> 클릭하면 기본 탭창이 입력한 url 주소로 이동 </a> '} </li>
                  <li> {' <a href="https://www.naver.com/" target="_blank"> 클릭하면 새 탭창을 열어서 입력한 url 주소로 이동 </a> '} </li>
                  <li> 페이지 내부의 원하는 위치로 이동하는 방법(내부 하이퍼링킁)
                    <div className="block4">
                      <li> {' <a name="top"> 하이퍼링크 이동 목적지 </a> '} </li>
                      <li> {' <a href="#top"> 이동할 태그의 속성 name을 href의 넣는다. </a> '} </li>

                      <a name="top"> 내부 a태그 주소(하이퍼링크)로 이동 </a>
                    </div>
                  </li>
                  <li>  </li>
                  <li>  </li>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> link태그 </summary>
            <div className='block2'>
              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. 비어있는 태그 </li>
              <li> 2. 속성만 넣을 수 있음  </li>
              <li> 3. 외부 소스를 불러주는 태그 </li>
              <li> 4. HTML에서 css파일을 불러서 사용할 때 일반적으로 사용 </li>

              <h2 className='h2'> 📌 속성 </h2>
              <li> link태그는 head태그 안에 넣는다. </li>
              <li> {' <link rel="stylesheet" type="text/css" href="style.css"> '} <small> # 외부 css파일을 불러오는 방법 </small>   </li>
              <li> rel: 필수 속성으로, 현재 문서에 어떤 리소스 인지 알려준다 </li>
              <li> type: 외부 리소스의 미디어 타입 </li>
              <li> href: 외부 리소스의 URL </li>
            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> img태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. 이미지 태그 </li>
              <li> 2. src 속성 : 이미지의 주소입력 , null값이면 에러발생  </li>
              <li> 3. alt 속성 : 이미지의 설명 </li>
              <li> {' img태그는 <img alt="" src="URL주소 혹은 경로.확장자명(.jpg , .png)" alt="이미지설명" width="100px"> '} </li>

              <h2 className='h2'> 📌 이미지 태그 중간에 배치하는 방법1 </h2>
              <li> display: block; </li>
              <li> margin-left: auto; </li>
              <li> margin-right: auto; </li>

              <h2 className='h2'> 📌 이미지 태그 중간에 배치하는 방법2 </h2>
              <li> 이미지 태그 상위 태그에 text-align: center </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 이미지 예시 </h3>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/mountain_and_sea.jpg'} alt="산과바다" width="100px" />
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> input태그 form태그 textarea태그 label태그 fieldset태그 legend태그</summary>
            <div className='block2'>

              <h2 className='h2'> 📌 input태그 설명 </h2>
              <li> 사용자가 입력을 할 수 있는 태그 </li>
              <li> 아이디,회원가입 등에서 사용하는 태그로 form태그 내부에 같이 사용된다.  </li>
              <li> input태그는 type속성을 이용하여 여러가지의 데이터를 입력할 수 있다. </li>
              <li> input태그의 대표적 속성 required, placeholder </li>
              <li> required 속성을 사용한 input태그는 제출시 제출이 불가능 </li>
              <li> placeholder 속성을 사용하면 무엇을 입력할지 설명을 넣을 수 있다. </li>


              <h2 className='h2'> 📌 input태그 속성 </h2>
              <li> {' <input type="number"/> '} <small> # 텍스트를 숫자로 입력 </small> </li>
              <li> {' <input type="password"/> '} <small> # 텍스트 입력시 * 처리, 비밀번호를 입력할 때 사용 </small> </li>
              <li> {' <input type="radio" name="gender" value="man"/> '} <small> # radio는 남/녀 , 내국인/외국인 버튼 처럼 n중 택1을 할때 사용 </small> </li>
              <li> {' <input type="radio" name="gender" value="woman"/> '} <small> # radio는 남/녀 , 내국인/외국인 버튼 처럼 n중 택1을 할때 사용 </small> </li>
              <li> {' <input type="checkbox" name="hooby" value="music"/> 음악 '} <small> # name이라는 필드 배열이 만들어지는 것으로 기억</small> </li>
              <li> {' <input type="checkbox" name="hooby" value="sport"/> 운동 '} <small> # </small> </li>
              <li> {' <input type="checkbox" name="hooby" value="game"/> 게임'} <small> # </small> </li>
              <li> {' <input type="text" name="text" placeholder="텍스트를 입력하세요" /> '} <small> # 텍스트를 입력할 때 </small> </li>
              <li> {' <input type="email"/> '} <small> # 이메일 형식 자동 검사 </small> </li>
              <li> {' <input type="url"/> '} <small> # 유효한 url 주소인지 검사 </small> </li>
              <li> {' <input type="tel"/> '} <small> # 전화번호 입력 </small> </li>
              <li> {' <input type="search"/> '} <small> # 검색 </small> </li>
              <li> {' <input type="range" min="1" max="2" /> '} <small> # 범위 </small> </li>
              <li> {' <input type="color" value="#ffffff"/> '} <small> #  </small> </li>
              <li> {' <input type="keygen"/> '} <small> # 암호화하여 서버로 전송(사용방법찾아보기) </small> </li>
              <li> {' <input type="output"/> '} <small> # 스크립트로 실행된 결과를 바로 보여줌 </small> </li>
              <li> {' <input type=""/> '} <small> #  </small> </li>
              <li> {' <input type=""/> '} <small> #  </small> </li>
              <li> {' <input type="date"/> '} <small> # 년월일 </small> </li>
              <li> {' <input type="time"/> '} <small> # [오전,오후] 24:60 </small> </li>
              <li> {' <input type="datetime-local"/> '} <small> # 년-월-일 [오전,오후] 24:60  </small> </li>
              <li> {' <input type="month"/> '} <small> # 년월 </small> </li>
              <li> {' <input type="week"/> '} <small> # 년, 몇번째 주 </small> </li>
              <li> value(초깃값) , readonly(읽기전용), disabled(아무것도안됨,전송도안됨) </li>
              <li> maxlenght(최대길이), size(input요소 크기 지정) </li>

              <h2 className='h2'> 📌 form태그 설명 </h2>
              <li> 프론트엔드에서 사용자가 입력을 하고 백엔드 서버에 데이터를 보낼 때 사용  </li>
              <li> form으로 보내는 방식에는 get,post 방식 등이 있다. </li>
              <li> form태그 안에 여러가지 input 태그가 존재한다. </li>
              <li> form태그 자체로는 아무런 특성이 없다. </li>
              <li> input태그에서 자주 사용되는 속성</li>
              <li> GET방식은 빠르지만 보안이 좋지 않아 사생활 정보가 필요없을 때 사용, 검색 등</li>
              <li> POST방식은 상대적으로 느리지만 보안이 좋아 사생활 정보가 필요할 때, 로그인,회원가입 등 </li>
              <li> {'<form method="POST"혹은"GET" action="양식을보낼주소"> 이곳에 input태그들을 작성한다 </form> '} </li>

              <h2 className='h2'> 📌 textarea태그 설명 </h2>
              <li> 여러줄의 텍스트를 입력할 때 사용한다. </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오"/> '} </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" disabled/> '} # 아무것도 할 수 없음</li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" autofocus/> '} # 자동 포커싱 </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" maxlength/> '} </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" minlength/> '} </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" readonly/> '} # 클릭은 되나 입력불가 </li>
              <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" required/> '} # 필수적으로 입력</li>
              <li> {' <textarea cols="20" rows="5" style={{ resize: "none", border: "none", overflow: "auto" }} /> '} </li>
              <div className="block4">
                <h3 className='h3'> 📌 textarea태그 css </h3>
                <li> textarea {'{'}
                  <li> resize: none; </li>
                  <li> overflox : scroll; # 디폴트값, overflox-x는 먹히지 않음 </li>
                </li>
                <li> {'}'} </li>
              </div>

              <h2 className='h2'> 📌 label태그 설명 </h2>
              <li> label태그의 텍스트를 클릭하면 매핑되는 input태그에 focus를 줄수있다.  </li>
              <li> {' <input type="radio" name="gender" id="gender" value="man"> '} </li>
              <li> {' <label for="gender"> 남 </label> <br> '} </li>

              <h2 className='h2'> 📌 fieldset태그+legend태그 설명 </h2>
              <li> form태그 내부에 사용하는 태그 </li>
              <li> form태그의 범위를 볼 수 있고 테두리를 감싸 줌 </li>
              <li> fieldset태그에서 제목을 담당 </li>
              <div className="block4" style={{ listStyle: "none" }} >
                <li> {' <form> '}
                  <li> {' <fieldset> '}
                    <li> {' <legend> form제목 </legend> '} </li>
                    <li> {' <input type="radio" name="gender" id="gender" value="man"> '} </li>
                    <li> {' <label for="gender"> 남 </label> <br> '} </li>
                  </li>
                  <li> {' </fieldset> '} </li>
                </li>
                <li> {' </form> '} </li>
              </div>

              <h2 className='h2'> 📌  </h2>
              <li>  </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 input태그 form태그 textarea태그 예시 </h3>
                  <li> 리액트라서 예시가 제대로 먹히지 않는것 같음 </li>
                  <li> {'<form> method="GET" action="#">'}
                    <li> {' <input type="text" placeholder="아이디를 입력해주세요" required /> '} </li>
                    <li> {' <input type="password" placeholder="비밀번호를 입력해주세요" required /> '} </li>
                    <li> {' <input type="text" placeholder="오토포커스" required autofocus / '} </li>
                    <li> {' <input type="text" value="1+1=2" required /> '} </li>
                    <li> {' <input type="text" size="40" placeholder="사이즈가 늘어남" required /> '} </li>
                    <li> {' <input type="text" maxLength="30" placeholder="글자수를 제한" required /> '} </li>
                    <li> {' <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오"/> '} </li>
                    <li> {' <button type="submit"> 제출 </button> '} </li>
                  </li>
                  <li> {'</form> '} </li>
                  <div className="block4">
                    <form method="GET" action="#">
                      <fieldset>
                        <legend> 소제목 </legend>
                        <li> <input type="text" placeholder="아이디를 입력해주세요" required /> </li>
                        <li> <input type="password" placeholder="비밀번호를 입력해주세요" required /> </li>
                        <li> <input type="text" placeholder="오토포커스" required autofocus /> </li>
                        <li> <input type="text" value="1+1=2" required /> </li>
                        <li> <input type="text" size="40" placeholder="사이즈가 늘어남" required /> </li>
                        <li> <input type="text" maxLength="30" placeholder="글자수를 제한" required /> </li>
                        <li> <textarea id="" cols="10" rows="10" placeholder="내용을 입력하시오" /> </li>
                        <li> <button type="submit"> 제출 </button>  </li>
                      </fieldset>
                    </form>
                  </div>


                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> select태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> form태그 내부에 사용가능 </li>
              <li> 여러개의 값중에 선택을 할 수 있는 드롭 메뉴 </li>

              <h2 className='h2'> 📌 속성 </h2>
              <li> selected(처음 선택되어 있는 옵션) , disabled(옵션으로 선택 불가능) </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 select태그 예시  </h3>
                  <li> {' <select name="area"> '}
                    <li> {'   <option value="" selected disabled> </option> '} </li>
                    <li> {'   <option value="국어"> 국어 </option> '} </li>
                    <li> {'   <option value="수학"> 수학 </option> '} </li>
                    <li> {'   <option value="영어"> 영어 </option> '} </li>
                    <li> {'  <optgroup label="제2외국어"> '}
                      <li> {'   <option value="중국어"> 중국어 </option> '} </li>
                      <li> {'   <option value="일본어"> 일본어 </option> '} </li>
                    </li>
                    <li> {'  </optgroup> '} </li>
                  </li>
                  <li> {' </select> '} </li>
                  <div className="block4">
                    <select name="area">
                      <option value="과목" selected disabled> 과목 </option>
                      <option value="국어"> 국어 </option>
                      <option value="수학"> 수학 </option>
                      <option value="영어"> 영어 </option>
                      <optgroup label="제2외국어">
                        <option value="중국어"> 중국어 </option>
                        <option value="일본어"> 일본어 </option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> list태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. 리스트 형식으로 나열될 때 사용  </li>
              <li> 2. 실제로는 세로로 나열보다는 css를 이용하여 가로로 배열하는데 사용하는것 같다. </li>
              <li> 3. 리스트 태그에는 순서가 있는(ul)태그와 순서가 없는(ol)태그가 있다. </li>
              <li> 그냥 ul만 써도 충분한것 같다. </li>
              <li> 4. 리스트태그는 왼쪽에 원판(disc) 원(circle) 등 list-style-type 속성을 가지고있다. </li>
              <li> 왠만하면 그냥 list-style-type="none" 으로 사용할 것 같다. </li>
              <li> 5. 인라인 태그 요소 </li>

              <h2 className='h2'> 📌 리스트 태그 종류 </h2>
              <li>  ul + li : li태그에 점으로 구분 , 목록형 태그 </li>
              <li>  ol + li : li태그에 숫자 순서로 구분 , 목록형 태그</li>
              <li>  dl + dt + dd : 정의형 몰록 태그 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 ul + li 태그 </h3>
                  <li> {' <ul> '}
                    <li> {' <li> '} ● 첫번째 {' </li> '} </li>
                    <li> {' <li> '} ● 두번째 {' </li> '} </li>
                  </li>
                  <li> {' </ul> '} </li>
                  <h3 className='h3'> 🎈 ol + li 태그 </h3>
                  <li> {' <ol> '}
                    <li> {' <li> '} 1. 첫번째 {' </li> '} </li>
                    <li> {' <li> '} 2. 두번째 {' </li> '} </li>
                  </li>
                  <li> {' </ol> '} </li>
                  <h3 className='h3'> 🎈 dl + dt + dd 태그 </h3>
                  <li> {' <dl> '}
                    <li> {' <dt> '} 정의 제목 {' </dt> '} </li>
                    <li> {' <dd> '} 정의 설명 {' </dd> '} </li>
                  </li>
                  <li> {' </dl> '} </li>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> table태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 표를 만들 때 사용하는 태그 </li>
              <li> 알고 있어야 되는 개념이지만 자주 사용되지 않아 그냥 기억만 하고 있다. </li>
              <li> 테이블과 관련된 태그의 종류 및 속성 , 많지만 필요한것만 정리</li>

              <h2 className='h2'> 📌 table 관련 태그 </h2>
              <li> table(표) (th(표의제목) tr(가로줄) td(셸,한칸))
                (colgroup col)(표의 길이나 색상등을 지정할 수 있음)
                thead(테이블상단구역) tbody(테이블중간구역) tfoot(테이블하단구역) </li>
              <li> colspan="2"(셸의 가로줄을 합치는 갯수), rowspan="2"(셸의 세로줄을 합치는갯수) </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 </h3>
                  <li> {' <table border="1"> '}
                    <li> {'  <colgroup> '}
                      <li> {'  <col width="50px" style="background:red"/> '} </li>
                      <li> {'  <col width="150px" style="background:green" /> '} </li>
                      <li> {'  <col width="250px" style="background:blue" /> '} </li>
                    </li>
                    <li> {'  </colgroup> '} </li>
                    <li> {'  <thead> '}
                      <li> {'   <tr> '}
                        <li> {'    <th colSpan="2"> 제목 </th> '} </li>
                        <li> {'    <th rowSpan="3"> 번호번호번호 </th> '} </li>
                      </li>
                      <li> {'  </tr> '} </li>
                    </li>
                    <li> {'  </thead> '} </li>
                    <li> {'   <tbody> '}
                      <li> {'    <tr> '}
                        <li> {'     <td> 1번 </td> '} </li>
                        <li> {'     <td> 1 </td> '} </li>
                        <li> {'     <td> 1 </td> '} </li>
                      </li>
                      <li> {'   </tr> '} </li>
                    </li>
                    <li> {'   </tbody> '} </li>
                    <li> {'  <tfoot> '}
                      <li> {'    <tr> '}
                        <li> {'     <td> 2번 </td> '} </li>
                        <li> {'     <td> 2 </td> '} </li>
                        <li> {'     <td> 2 </td> '} </li>
                      </li>
                      <li> {'    </tr> '} </li>
                    </li>
                    <li> {'   </tfoot> '} </li>
                  </li>
                  <li> {' </table> '} </li> <br />

                  <div className="block4">
                    <table border="1">
                      <colgroup>
                        <col width="50px" style={{ backgroundColor: "red" }} />
                        <col width="150px" style={{ backgroundColor: "green" }} />
                        <col width="250px" style={{ backgroundColor: "blue" }} />
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
                  </div>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> details태그 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1. block속성 </li>
              <li> 2. 메뉴를 펼치고 접는 것을 하는 태그 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 details태그 예시 </h3>
                  <li> {' < details > '}
                    <li> {'   <summary> 접고 펼칠때 보일 텍스트 </summary>'} </li>
                    <li> {' <li> 내용 </li> '} </li>
                    <li> {' <li> 내용 </li> '} </li>
                  </li>
                  <li> {' < /details > '} </li> <br />

                  <div className="block4">
                    <details>
                      <summary> 접고 펼칠때 보일 텍스트 </summary>
                      <li> 내용 </li>
                      <li> 내용 </li>
                    </details>
                  </div>

                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> 뷰포트(Viewport) </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> {'<meta name="viewport" content="widht=device-width,initial-scale=1,minimum-scale=1'}
                {',maximum-scale=1, user-scalable=no'} </li>
              <li> width : 뷰포트 너비 </li>
              <li> height : 뷰포트 높이 </li>
              <li> initial-scale : 초기배율 </li>
              <li> minimum-scale: 최소 축소배율 설정(default=0.25) </li>
              <li> maximum-scale: 최대 확대배율 설정(default=5.0) </li>
              <li> user-scalable: 확대/축소 여부 설정 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 </h3>
                  <li>  </li>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> 파일 다운로드, 업로드 (다시 알아볼 것) </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 파일 다운로드 경로에 공백은 제거됨 </li>
              <li> accept 속성 : 허용하는 파일 유형을 나타내는 지정자
                <li> accept=".img , .doc , .jpg , .pdf , image/* , audio/* , video/*" </li>
              </li>
              <li> mutiple 옵션속성 : 복수의 파일을 선택가능하게 함
                <p> {' <input type="file" id="file" name="file" accept="image/*" multiple> </input> '} </p>
              </li>

              <h2 className='h2'> 📌 파일 다운로드 예시 </h2>
              <div className="block4" style={{ listStyle: "none" }}>
                <li> {' <a href="파일 경로" download="파일명.확장자"> 파일 다운로드 </a> '} </li>
                <li> {' <a href={process.env.PUBLIC_URL + "파일경로"} download="파일명.확장자"> 파일 다운로드 </a> '} </li>
              </div>

              <h2 className='h2'> 📌 파일 업로드 예시 </h2>
              <div className="block4" style={{ listStyle: "none" }}>
                <li> {' <label for="forname">  </label> '} </li>
                <li> {' <form> '}
                  <li> {' <input type="file" name="filename" id="forname" accept="image/*" /> '} </li>
                </li>
                <li> {' </form> '} </li>
              </div>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈  </h3>
                  <li>  </li>
                  <h3 className='h3'> 🎈 </h3>
                  <li>  </li>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> html 요소 Width, Height (나중에 좀 더 알아볼 것)  </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 Width </h2>
              <li> ELEMENT.offsetWidth : element.width + padding + border + scrollbar (margin 제외) </li>
              <li> ELEMENT.clientWidth : element.width + padding - scrollbar (margin, border 제외)  </li>
              <li> ELEMENT.scrollWidth : element.width + padding - scrollbar, scrollbar로 감싸진 공간(margin, border 제외)  </li>
              <li> ELEMENT.getBoundingClientRect() 속성 : (margin 제외) , 랜더링 크기에 비례해서 스케일을 키우면 갑이 변한다.
                <div className="block4">
                  <li> x : 좌측 상단 x위치 </li>
                  <li> y : 좌측 상단 y위치</li>
                  <li> top : (margin-top) y위치 </li>
                  <li> bottom : (margin-top + border + padding + element.height) y위치 </li>
                  <li> left : (margin-left) x위치 </li>
                  <li> right : (margin-left + border + padding + element.width) x위치</li>
                  <li> width : border + padding + element.width </li>
                  <li> height : border + padding + element.height </li>
                </div>
              </li>
              <li> 1 </li>

              <h2 className='h2'> 📌 Height </h2>
              <li> ELEMENT.offsetHeight : element.height + padding + border + scrollbar (margin 제외) </li>
              <li> ELEMENT.clientHeight : element.height + padding - scrollbar (margin, border 제외)  </li>
              <li> ELEMENT.scrollHeight : element.height + padding - scrollbar, scrollbar로 감싸진 공간(margin, border 제외) </li>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1 </li>



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

export default HtmlBasic;