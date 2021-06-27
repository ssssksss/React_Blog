import React from 'react';

const Blank = (props) => {

    return (
        <>
            <div className="lblocknav_container">
                <div className="lblocknav">
                    <span className="mtitle"> 0. JSP EL (하이퍼링크) </span>
                    <span className="mblock">
                        <p className="hyperlink">
                            <details className="list_style">
                                <summary className="list_style"> 123123123 </summary>
                                <p> 123123123 </p>
                                <details>
                                    <summary> 123123123 </summary>
                                    <p> 123123123 </p>
                                </details>
                            </details>
                            <details className="list_style">
                                <summary className="list_style"> 123123123 </summary>
                                <p> 123123123 </p>
                                <details>
                                    <summary> 123123123 </summary>
                                    <p> 123123123 </p>
                                </details>
                            </details>
                            {/* <a href="#"> </a> */}
                        </p>
                    </span>
                </div>
            </div>
            <div className="common_style" >
                {/* <a href="https://gangzzang.tistory.com/entry/JSP-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%83%9C%EA%B7%B8Custom-Tag" target="_blank"> 참고사이트</a> */}
                <span className="lblock">
                    <span className="mtitle"> <a name="">  </a> </span>
                    <span className="lblock">
                        <span className="sblock">
                        </span>
                    </span>
                </span>
                {/* <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <span className="lblock">
                    <span className="sblock">
                    </span>
                </span>
            </span> */}
            </div>
        </ >
    );
}

export default Blank;