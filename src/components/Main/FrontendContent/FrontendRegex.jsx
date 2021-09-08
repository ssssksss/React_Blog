import React from 'react';

const FrontendRegex = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 정규 표현식 문법
                                <a name="정규 표현식 문법" style={{ visibility: "hidden" }}> 정규 표현식 문법 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> <h4> r : 문자열 그대로 출력 </h4>
                                        <li> str = r"123\n"  </li>
                                    </li>
                                    <li> <h4> [abc] : 각각의 문자("a" "b" "c")를 뜻함 </h4>
                                        <li>  </li>
                                    </li>
                                    <li> <h4> [a-z] [A-Z] [0-9] : 문자 범위를 뜻함 </h4>
                                        <li> [a-f] </li>
                                        <li> [a-zA-Z0-9] : 모든 문자와 숫자 </li>
                                        <li>  </li>
                                    </li>
                                    <li> <h4> ^[] : 범위에 포함되는 문자들을 제외한 나머지 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> . : 모든문자(한개)를 의미 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4>  </h4>
                                        <li> </li>
                                    </li>
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

export default FrontendRegex;