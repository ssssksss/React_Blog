import React, { useEffect, useRef, useState } from 'react';

const HtmlDOM = (props) => {

    const [scrollY, setScrollY] = useState(0);
    // let common_height = document.getElementsByClassName('common_style')
    function logit() {
        setScrollY(window.pageYOffset);
        // console.log(new Date().getTime());
        // console.log(document.documentElement.scrollTop);
        console.log(document.getElementsByClassName('common_style')[0].scrollWidth);

        document.documentElement.scrollTop > 800 ?
            (blockRef.current[0].style.position = 'fixed') :
            (blockRef.current[0].style.position = 'relative');
        document.documentElement.scrollTop > 800 ?
            (blockRef.current[1].style.left = '25%') :
            (blockRef.current[1].style.left = '25%');
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
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <p> HTML DOM </p>
                    </span>
                    <p className="hyperlink">
                        <details open>
                            <summary className="col_g"> test </summary>
                            <a href="#" className="col_p"> test </a>
                        </details>
                    </p>
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

