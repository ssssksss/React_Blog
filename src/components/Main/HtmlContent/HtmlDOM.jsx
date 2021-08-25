import React, { useEffect, useRef, useState } from 'react';

const HtmlDOM = (props) => {
    function logit() {

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
                            <summary className="col_g"> test </summary>
                            <a href="#" className="col_p"> test </a>
                        </details>
                    </div>
                </div>
            </div>

            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name=""> HTML DOM  </a> </span>
                    <span className="mblock">
                        <span className="stitle"> <a name=""> element 위치관련 </a> </span>
                        <span className="sblock">
                            <p> <i> offsetWidth </i> 엘리먼트의 너비 </p>
                            <p> <i> offsetHeight </i> 엘리먼트의 높이 </p>
                            <p> <i> offsetLeft </i> 엘리먼트의 x위치  </p>
                            <p> <i> offsetTop </i> 엘리먼트의  y위치 </p>
                            <p> <i> scrollWidth </i> 엘리먼트의 너비 </p>
                            <p> <i> scrollHeight </i> 엘리먼트의 높이 </p>
                            <p> <i> scrollLeft </i> 엘리먼트의 x위치 </p>
                            <p> <i> scrollTop </i> 엘리먼트의 y위치 </p>
                            <p> <i> clientWidth </i> </p>
                            <p> <i> clientHeight </i> </p>
                            <p> <i> clientLeft </i> </p>
                            <p> <i> clientTop </i> </p>
                            <p> <i> window.pageXOffset</i> </p>
                            <p> <i> window.pageYOffset</i> </p>
                            <p> <i> element.getBoundingClientRect().top</i> </p>
                            <p> <i> element.getBoundingClientRect().bottom</i> </p>
                            <p> <i> element.getBoundingClientRect().left</i> </p>
                            <p> <i> element.getBoundingClientRect().right</i> </p>
                            <p> <i> clientX </i> </p>
                            <p> <i> pageX </i> </p>
                            <p> <i> offsetX </i> </p>
                            <p> <i> screenX </i> </p>
                            <p> <i> offsetParent </i> </p>
                            <p> <i> window.innerWidth </i> 뷰포트 값 </p>
                            <p> <i> window.outerHeight </i> 전체화면(툴바,스크롤 포함) </p>
                            <p> <i> screen.width</i> 사용자의 해상도 </p>
                            <p> <i> </i> </p>
                            <p> <i> </i> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name=""> element 요소  </a> </span>
                        <p> <i> document.getElemenById('id태그 이름') </i> </p>
                        <p> <i> document.getElemenById('id태그 이름') </i> </p>
                        <span className="sblock">
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name=""> element 위치 </a> </span>
                        <span className="sblock">
                        </span>
                    </span>
                </span>
            </div>
        </>
    );
}
export default HtmlDOM;

