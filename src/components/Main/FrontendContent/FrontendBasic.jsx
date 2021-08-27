import React, { useEffect, useRef, useState } from 'react';

const FrontendBasic = (props) => {

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
                                <a href="#검색 엔진 최적화(SEO)" className="col_p"> 검색 엔진 최적화(SEO) </a>
                                <a href="#robot.txt" className="col_p"> robot.txt </a>
                                <a href="#브라우저의 랜더링 과정" className="col_p"> 브라우저의 랜더링 과정 </a>
                                <a href="#HTML, CSS 좋은 습관" className="col_p"> HTML, CSS 좋은 습관 </a>
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
                        <details>
                            <summary className="stitle"> ▶ 검색 엔진 최적화(SEO) <a name="검색 엔진 최적화(SEO)" style={{ visibility: "hidden" }}> 검색 엔진 최적화(SEO) </a> </summary>
                            <span className="sblock">
                                {/* 
                                테크니컬 SEO , 콘텐츠 SEO , 자체 평가 알고리즘, 크롤링 , 인덱싱
                            */}
                                <span className="sstitle"> 키워드 관리 </span>
                                <span className="mblock">
                                    <li> 특정 키워드의 위치나 갯수가 SEO 평가 알고리즘에서 중요한 부분 </li>
                                    <li> 검색이 잘 되지만 경쟁사와 겹치지 않는 키워드 그리고 롱테일(3개의 이상 단어 조합)을 사용하여
                                        노출 효과를 올린다. </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> title </span>
                                <span className="mblock">
                                    <li> 검색엔진의 제목 부분에 표시 될 수 있는 정보 </li>
                                    <li> 다른 경쟁사와 독창적이며 명확한 키워드가 필요 </li>
                                    <li> 사이트 내부 페이지 마다 구별 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> URL </span>
                                <span className="mblock">
                                    <li> 컨텐츠와 연관된 단어가 들어가는 것이 좋고, 매개변수가 들어가 있는 것은 좋지 않음 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> canonical 태그 </span>
                                <span className="mblock">
                                    <li> rel="canonical" 를 html 링크태그에 추가해서 사용 , head태그 내부에 위치 </li>
                                    <li> 검색엔진 크롤러에게 대표 URL이 무엇인지 명시하는 역할 </li>
                                    <li> 중복되는 콘텐츠 페이지가 있어서 패널티를 받아야 하지만 캐노니컬을 사용하여 방지를 할 수 있다. </li>
                                    <li> 웹, 모바일을 구분하여 도메인을 나눠놓을경우 점수가 분산이 되고 패널티도 받을 수 있는 것을 방지 </li>
                                    <li> + ref="nofollow" 페이지의 인지도를 링크된 페이지로 전달하지 말라는 속성 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ robot.txt <a name="robot.txt" style={{ visibility: "hidden" }}> robot.txt </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 사이트 위치 안내, 크롤러가 웹페이지의 정보를 수집하는 것을 차단 </span>
                                <span className="mblock">
                                    <li> 정보 수집을 차단하는 이유는 검색 엔진의 평가에 부정적인 영향을 끼칠 수 가 있음
                                        중복된 컨텐츠를 크롤러가 부정적으로 판단하여 SEO에서의 평가가 낮아짐
                                    </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 브라우저의 랜더링 과정 <a name="브라우저의 랜더링 과정" style={{ visibility: "hidden" }}> 브라우저의 랜더링 과정 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 렌더링 : 브라우저의 화면에 표시해주는 역할 </span>
                                <span className="mblock">
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
                                        <span className="sblock">
                                            <ul>
                                                <span className="sstitle"> 렌더링 일어나는 경우 </span>
                                                <li> 페이지 초기 렌더링 시 </li>
                                                <li> 브라우저 뷰포트 변경될 때 </li>
                                                <li> 노드가 추가되거나 제거 될 때 </li>
                                                <li> 요소의 위치나 크기가 변경 될 때 </li>
                                                <li> 폰트 변경이나 이미지 크기가 변경 될 때 </li>
                                            </ul>
                                        </span>
                                        <span className="sblock">
                                            <ul>
                                                <span className="sstitle"> 렌더링을 최소화 하는 방법</span>
                                                <small> Reflow가 발생하면 Repaint 무조건 발생 </small>
                                                <li> Reflow 속성 </li>
                                                <span className="mblock">
                                                    <li> position, width, height, left, top, right, bottom, margin, padding, border,
                                                        border-width, clear, display, float, font-family, font-size, font-weight,
                                                        line-height, min-height, overflow, text-align, vertical-align, white-space... </li>
                                                </span>
                                                <li> Repaint 속성 </li>
                                                <span className="mblock">
                                                    <li> background, background-image, background-position, background-repeat,
                                                        background-size, border-radius, border-style, box-shadow, color, line-style,
                                                        outline, outline-color, outline-style, outline-width, text-decoration,
                                                        visibilty... </li>
                                                </span>
                                                <li> 레이아웃의 변화가 많은 요소는 absolute, fixed를 사용하여 주변 노드들의 영향을 최소화하여
                                                    렌더링을 비교적 덜 발생하게 만든다. </li>
                                                <li> 애니메이션에서 이동 거리를 작게 여러번 움직이면 부드럽지만 성능이 안좋아지고
                                                    이동 거리를 크게 몇번에 움직이면 덜 부드럽지만 성능이 개선된다.  </li>
                                            </ul>
                                        </span>
                                    </ol>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ HTML, CSS 좋은 습관 <a name="HTML, CSS 좋은 습관" style={{ visibility: "hidden" }}> HTML, CSS 좋은 습관 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> CSS를 잘 사용하는 방법 </span>
                                <span className="mblock">
                                    <ol>
                                        <li> * 와일드 카드안에 margin, box-sizing 정도만 사용한다. (왠만하면 사용x)  </li>
                                        <li> 각 스타일 마다 기본 속성을 파괴하지 않는다.  </li>
                                        <small> h1태그의 글자크기 변경x, span태그의 속성을 block으로 변경x </small>
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
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default FrontendBasic;