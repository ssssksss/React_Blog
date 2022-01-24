import React from 'react';

const SecurityBasic = (props) => {
    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 보안 용어 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 CORS(Cross Origin Resource Sharing) </h2>
                            <li> 최신 브라우저들은 자바스크립트 코드 XMLHttpRequest를 사용하여 현재 사이트에서 다른 사이트의 데이터를 가져오는 것을 막음   </li>
                            <li> Fetch API도 마찬가지 </li>
                            <li> CORS 헤더를 설정하여 응답가능 </li>

                            <h2 className='h2'> 📌 XSS(Cross Site Scripting) </h2>
                            <li> 악성 자바스크립트를 이용한 사용자들의 쿠키를 탈취하거나 자바스크립트 코드를 발생시킬 수 있음 </li>
                            <li> 최신 브라우저는 CORS 정책에 의해 막혀있거나 쿠키는 HttpOnly를 설정하여 막을 수 있음 </li>
                            <li> 글쓰기 화면에서 제목이나 내용에 스크립트를 작성하여 서버로 보내면 서버에서는 DB에 그대로 저장할 수도 있음 </li>
                            <li> URL에 스크립트를 심어서 보낼수도 있음 </li>

                            <h2 className='h2'> 📌 CSRF(Cross Site Request Forgery) </h2>
                            <li>  </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>


                        </div>
                    </details>
                </div>

                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 보안 참고 사이트 <a name="보안 참고 사이트" style={{ visibility: "hidden" }}> 보안 참고 사이트 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> <a href="https://www.boho.or.kr/main.do" target="_blank"> KISA인터넷 보호나라 </a> </li>
                                    <small> 가이드 및 메뉴얼 - 기술점 취약점 분석 평가 방법 상세가이드 참고 </small>
                                    <li> <a href="https://www.boho.or.kr/main.do" target="_blank">  </a> </li>
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

export default SecurityBasic;