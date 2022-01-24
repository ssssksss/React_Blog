import React from 'react';

const FrontendBasic = (props) => {

    return (
        <>

            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 보안 관련 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 노드에 값을 추가하는 방법 3가지 - innerHTML, DOM, insertAdjacentHTML </h2>
                            <li> innerHTML : XSS 보안공격에 취약 </li>
                            <li> DOM :  </li>
                            <li> insertAdjacentHTML : XSS 보안공격에 취약 </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> JS 관련 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 이벤트 버블링과 이벤트 캡처 </h2>
                            <li> 이벤트 버블링 : 특정 요소에서 이벤트가 발생하였을 때 상위 요소들로 이벤트를 전달하는 방법 </li>
                            <li> 버블링 사용 이유 1 : 버블링은 DOM으로 추가할 때 추가한 요소에도 이벤트를 주기 위해 사용 </li>
                            <div className="block3">
                                <div className="block4">
                                    <h4 className="h4"> 기존에 버튼 요소 2개가 있고, 버튼 요소를 추가로 1개를 넣었을 때 이벤트가 작동되지 않는 예시 </h4>
                                    <li> {' <body> '}
                                        <li> {' <div id="btn_container"> '}
                                            <li> {' <button> 버튼1 </button> '} </li>
                                            <li> {' <button> 버튼2 </button> '} </li>
                                        </li>
                                        <li> {' </div> '} </li>
                                    </li>
                                    <li> {' </body> '} </li>
                                    <li> {'  '} </li>
                                    <li> {' <script> '}
                                        <li> {' var buttons = document.querySelectorAll("button"); '} </li>
                                        <li> {' buttons.forEach((x) => { '}
                                            <li> {' x.addEventListener("click", () => { '}
                                                <li> {' alert(x.innerText); '} </li>
                                            </li>
                                            <li> {' }); '} </li>
                                        </li>
                                        <li> {' }); '} </li>
                                        <li> {'  '} </li>
                                        <li> {' var btn_container = document.getElementById("btn_container"); '} </li>
                                        <li> {' var doc = document.createElement("button"); '} </li>
                                        <li> {' doc.appendChild(document.createTextNode("버튼3")); '} </li>
                                        <li> {' btn_container.appendChild(doc); '} </li>
                                    </li>
                                    <li> {' </script> '} </li>
                                </div>
                                <div className="block4">
                                    <h4 className="h4"> 위의 예시 때문에 버블링을 사용하는 이유 </h4>
                                    <li> {' <body> '}
                                        <li> {' <div id="btn_container"> '}
                                            <li> {' <button value="버튼1"> 버튼1 </button> '} </li>
                                            <li> {' <button value="버튼2"> 버튼2 </button> '} </li>
                                        </li>
                                        <li> {' </div> '} </li>
                                    </li>
                                    <li> {' </body> '} </li>
                                    <li> {'  '} </li>
                                    <li> {' <script> '}
                                        <li> {' var btn_container = document.getElementById("btn_container"); '} </li>
                                        <li> {' btn_container.addEventListener("click", (e) => { '}
                                            <li> {' alert(e.target.value); '} </li>
                                        </li>
                                        <li> {' }); '} </li>
                                        <li> {'  '} </li>
                                        <li> {' var doc = document.createElement("button"); '} </li>
                                        <li> {' doc.appendChild(document.createTextNode("버튼3")); '} </li>
                                        <li> {' doc.setAttribute("value", "버튼3"); '} </li>
                                        <li> {' btn_container.appendChild(doc); '} </li>
                                    </li>
                                    <li> {' </script> '} </li>
                                </div>
                            </div>
                            <li> 이벤트 캡처 : 이벤트 버블링과 반대로 하위 요소로 이동하면서 이벤트가 전달되는 방법 </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Cors </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 Cors의 종류 </h2>
                            <li> Simple Request </li>
                            <li> Preflight Request </li>
                            <li> Credential Request </li>
                            <li> Non-Credential Request </li>

                            <h2 className='h2'> 📌 1. Simple Request </h2>
                            <li> GET,HEAD,POST 중 하나 </li>
                            <li> POST일 때는 application/x-www-form-urlencoded, multipart
                                /form-data, text/plain 중 하나 </li>
                            <li> 커스텀 헤더 전송x </li>

                            <h2 className='h2'> 📌 2. Preflight Request </h2>
                            <li> 예비로 먼저 보내보고 그다음 통신하는 방법 </li>
                            <li> Simple Request의 조건 외에서 가능 </li>

                            <h2 className='h2'> 📌 3. Credential Request </h2>
                            <li> HTTP Cookie와 HTTP Authentication을 알 수 있음 </li>
                            <li> @.withCredentials = true <small> # 이와 같이 요청전에 지정 필요 </small> </li>
                            <li>  </li>

                            <h2 className='h2'> 📌 4. Non-Credential Request </h2>
                            <li> @.withCredentials = false , 원래 디폴트 값 </li>

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


                <div className="lblock">
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 검색 엔진 최적화(SEO) <a name="검색 엔진 최적화(SEO)" style={{ visibility: "hidden" }}> 검색 엔진 최적화(SEO) </a> </summary>
                            <div className="sblock">
                                {/* 
                                테크니컬 SEO , 콘텐츠 SEO , 자체 평가 알고리즘, 크롤링 , 인덱싱
                            */}
                                <div className="sstitle"> 키워드 관리 </div>
                                <div className="mblock">
                                    <li> 특정 키워드의 위치나 갯수가 SEO 평가 알고리즘에서 중요한 부분 </li>
                                    <li> 검색이 잘 되지만 경쟁사와 겹치지 않는 키워드 그리고 롱테일(3개의 이상 단어 조합)을 사용하여
                                        노출 효과를 올린다. </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> title </div>
                                <div className="mblock">
                                    <li> 검색엔진의 제목 부분에 표시 될 수 있는 정보 </li>
                                    <li> 다른 경쟁사와 독창적이며 명확한 키워드가 필요 </li>
                                    <li> 사이트 내부 페이지 마다 구별 </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> URL </div>
                                <div className="mblock">
                                    <li> 컨텐츠와 연관된 단어가 들어가는 것이 좋고, 매개변수가 들어가 있는 것은 좋지 않음 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> canonical 태그 </div>
                                <div className="mblock">
                                    <li> rel="canonical" 를 html 링크태그에 추가해서 사용 , head태그 내부에 위치 </li>
                                    <li> 검색엔진 크롤러에게 대표 URL이 무엇인지 명시하는 역할 </li>
                                    <li> 중복되는 콘텐츠 페이지가 있어서 패널티를 받아야 하지만 캐노니컬을 사용하여 방지를 할 수 있다. </li>
                                    <li> 웹, 모바일을 구분하여 도메인을 나눠놓을경우 점수가 분산이 되고 패널티도 받을 수 있는 것을 방지 </li>
                                    <li> + ref="nofollow" 페이지의 인지도를 링크된 페이지로 전달하지 말라는 속성 </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle">  </div>
                                <div className="mblock">
                                    <li>  </li>
                                </div>
                                {/*  */}
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle"> ▶ robot.txt <a name="robot.txt" style={{ visibility: "hidden" }}> robot.txt </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> 사이트 위치 안내, 크롤러가 웹페이지의 정보를 수집하는 것을 차단 </div>
                                <div className="mblock">
                                    <li> 정보 수집을 차단하는 이유는 검색 엔진의 평가에 부정적인 영향을 끼칠 수 가 있음
                                        중복된 컨텐츠를 크롤러가 부정적으로 판단하여 SEO에서의 평가가 낮아짐
                                    </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 브라우저의 랜더링 과정 <a name="브라우저의 랜더링 과정" style={{ visibility: "hidden" }}> 브라우저의 랜더링 과정 </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> 렌더링 : 브라우저의 화면에 표시해주는 역할 </div>
                                <div className="mblock">
                                    <ol>
                                        <li> 브라우저가 렌더링할 문서(html,css)를 나누어서 읽음  </li>
                                        <li> 브라우저가 문서를 파싱(분석하고 변환)을 함  </li>
                                        <li> html은 DOM tree 구조로 변환하고 css는 CSSOM tree 구조로 변환 </li>
                                        <li> 렌더 트리 구축 : 생성된 DOM tree와 CSSOM tree를 Attachment 과정을 통해 Render tree(텍스트와 스타일로 구성된트리)로 만든다. </li>
                                        <small> display:none 속성은 Render tree에 포함되지 않는다. </small>
                                        <li> 렌더 트리 배치(Layout,Reflow) : 각 노드들의 위치와 크기를 계산하고 px단위로 변환 </li>
                                        <li> 렌더 트리 그리기(Paint) : 브라우저 실제 화면에 그림 </li>
                                        <small> 복잡한 스타일(그라데이션, 그림자효과)은 시간이 오래 걸림 </small>
                                        <li> 렌더링 최적화 : 특정 액션이나 이벤트에 따라 요소 값이 변하면 영향을 받는 모든 노드들은
                                            렌더 트리 배치 과정(Reflow)을 다시 수행하고 다시 화면에 그려준다.(Repaint) </li>
                                        <div className="sblock">
                                            <ul>
                                                <div className="sstitle"> 렌더링 일어나는 경우 </div>
                                                <li> 페이지 초기 렌더링 시 </li>
                                                <li> 브라우저 뷰포트 변경될 때 </li>
                                                <li> 노드가 추가되거나 제거 될 때 </li>
                                                <li> 요소의 위치나 크기가 변경 될 때 </li>
                                                <li> 폰트 변경이나 이미지 크기가 변경 될 때 </li>
                                            </ul>
                                        </div>
                                        <div className="sblock">
                                            <ul>
                                                <div className="sstitle"> 렌더링을 최소화 하는 방법</div>
                                                <small> Reflow가 발생하면 Repaint 무조건 발생 </small>
                                                <li> Reflow 속성 </li>
                                                <div className="mblock">
                                                    <li> position, width, height, left, top, right, bottom, margin, padding, border,
                                                        border-width, clear, display, float, font-family, font-size, font-weight,
                                                        line-height, min-height, overflow, text-align, vertical-align, white-space... </li>
                                                </div>
                                                <li> Repaint 속성 </li>
                                                <div className="mblock">
                                                    <li> background, background-image, background-position, background-repeat,
                                                        background-size, border-radius, border-style, box-shadow, color, line-style,
                                                        outline, outline-color, outline-style, outline-width, text-decoration,
                                                        visibilty... </li>
                                                </div>
                                                <li> 레이아웃의 변화가 많은 요소는 absolute, fixed를 사용하여 주변 노드들의 영향을 최소화하여
                                                    렌더링을 비교적 덜 발생하게 만든다. </li>
                                                <li> 애니메이션에서 이동 거리를 작게 여러번 움직이면 부드럽지만 성능이 안좋아지고
                                                    이동 거리를 크게 몇번에 움직이면 덜 부드럽지만 성능이 개선된다.  </li>
                                            </ul>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle"> ▶ HTML, CSS 좋은 습관 <a name="HTML, CSS 좋은 습관" style={{ visibility: "hidden" }}> HTML, CSS 좋은 습관 </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> CSS를 잘 사용하는 방법 </div>
                                <div className="mblock">
                                    <ol>
                                        <li> * 와일드 카드안에 margin, box-sizing 정도만 사용한다. (왠만하면 사용x)  </li>
                                        <li> 각 스타일 마다 기본 속성을 파괴하지 않는다.  </li>
                                        <small> h1태그의 글자크기 변경x, div태그의 속성을 block으로 변경x </small>
                                        <li> 시멘틱 태그를 사용하기 </li>
                                        <small> - 개발자가 유지보수하기 좋고, 가독성이 올라간다.  </small> <br />
                                        <small> - SEO가 판단하기 좋다 </small> <br />
                                        <small> - 스크린 리더 활용에 좋다고 한다. </small> <br />
                                        <li> h1,h2 태그를 잘 작성하는 것은 SEO의 판단에 좋은 영향을 준다. </li>
                                        <li> 사람들이 많이 사용하는 css라이브러리, 애니메이션 라이브러리를 사용해서 통일성을 줄것 </li>
                                        <small> 슬라이더, 아코디언, 체크박스, 인풋, 네비게이션 바 </small>
                                        <li> img 태그에 width를 변경하는 것이 아니라 figure 태그 등으로 감싸고 그 사이즈에 맞게 디자인 하기 </li>
                                        <small> img태그를 사용하는 것 보다 div태그에 background-image를 사용해주는 것을 추천  </small>
                                        <li> !important 사용 자제하기, 나중되면 !important 끼리 충돌하게 되면... 전체적으로 수정을 해야 할 수도 있다. </li>
                                        <li> before, after 사용하기 </li>
                                        <li> flex , grid 사용하기 </li>
                                        <li> 인터렉션 효과 사용하기 </li>
                                        <li> 전처리도구(SASS, SCSS, Less , Stylus) 사용하기  </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </ol>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> GET, POST
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> get </div>
                                <div className='mblock'>
                                    <li> 1. URL주소 뒤에 ?Name=Value 와 같이 변수명=값으로 사용한다. (쿼리스트링) </li>
                                    <li> 2. get요청은 캐시를 사용할 수 있다. </li>
                                    <li> 3. get은 브라우저 히스토리에 남는다. </li>
                                    <li> 4. get의 쿼리스트링은 길이의 제한이 있다. </li>
                                    <li> 5. get에는 사용자의 정보와 관련된 내용을 보내면 안된다. 그래서 게시판,웹툰등의 페이지 위치를 보낸다. </li>
                                    <li> 6.  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> post </div>
                                <div className='mblock'>
                                    <li> 1. 클라이언트가 서버에 요청을 보내 데이터를 저장하거나 업데이트 할 때 사용 </li>
                                    <li> 2. 로그인이나 회원가입등 외부의 사람들은 보이지 않게하면서 중요한 정보들을 보낼 때 사용 </li>
                                    <li> 3. http body의 부분에 내용을 담아서 보낸다.( body의 타입은 content-type의 의해서 결정) </li>
                                    <li> 4. 용량이 큰 데이터를 보낼경우 get방식이 아닌 post방식을 사용한다. </li>
                                    <li> 5. post는 캐시를 사용할수 없고 브라우저 히스토리에도 남지 않는다. </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </div>
            </div>
        </>
    );
}

export default FrontendBasic;