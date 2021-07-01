import React, { useEffect, useRef, useState } from 'react';

const HtmlDOM = (props) => {

    const [scrollY, setScrollY] = useState(0);
    // let common_height = document.getElementsByClassName('common_style')
    function logit() {
        setScrollY(window.pageYOffset);
        // console.log(new Date().getTime());
        // console.log(document.documentElement.scrollTop);
        console.log(document.getElementsByClassName('common_style')[0].scrollHeight);

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
                        <p>  </p>
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
                    <span className="mtitle"> <a name="">   </a> </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                        </span>
                    </span>
                </span>
            </div>
        </>
    );
}
export default HtmlDOM;

