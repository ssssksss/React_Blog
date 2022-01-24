import React from 'react';

const SecurityHmac = (props) => {

    return (
        <>

            <div className="common_style" >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ HMAC 알고리즘이란? <a name="HMAC 알고리즘이란?" style={{ visibility: "hidden" }}> HMAC 알고리즘이란? </a> </summary>
                            <small> Keyed-Hash Message Authentication Code , Key를 조합하여 Hash함수를 구하는 방식 </small> <br />
                            <span className="sblock">
                                <span className="sstitle"> MAC 정의 </span>
                                <span className="mblock">
                                    <li> 데이터를 보내는 사람과 받는 사람만이 공유하고 있는 Key와 Message를 혼합하여 Hash 값을 만드는 것 </li>
                                    <small> 메시지가 훼손 되었는지 여부를 확인 , MAC특성상 역산이 불가능 하므로,  </small>
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

export default SecurityHmac;