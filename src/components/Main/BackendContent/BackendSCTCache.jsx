import React from 'react';

const BackendSCTCache = (props) => {
    return (
        <>

            <div className="common_style" >
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 세션 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 서버가 가지고 있는 사용자 정보 </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 보관이 되는곳 </span>
                                    <span className="mblock">
                                        <li> 서버에서 지정한 세션 저장소 </li>
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
                                <summary className="stitle"> ▶ 쿠키 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 클라이언트가 서버에서 발급된 세션을 이용하기 위한 키값을 가지고 있음 (세션 ID) </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 보관이 되는곳 </span>
                                    <span className="mblock">
                                        <li> 브라우저에서 설정한 클라이언트 저장소 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 장단점 </span>
                                    <span className="mblock">
                                        <li className="col_be"> 서버의 자원을 사용하지 않음, 회원정보를 일일히 확인하지 않고 쿠기만 보고
                                            사용자가 누구인지 파악할 수 있으므로 보안에 상관없는 설정에는 유용하게 사용( ex:자동로그인) </li>
                                        <li className="col_r"> 보안에 취약,  </li>
                                        <li className="">  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 토큰 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 설명 </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 보관이 되는곳 </span>
                                    <span className="mblock">
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
                                <summary className="stitle"> ▶ 캐시 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 설명 </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 보관이 되는곳 </span>
                                    <span className="mblock">
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
                    </span>
                </ul>
            </div>
        </>
    );
}

export default BackendSCTCache;