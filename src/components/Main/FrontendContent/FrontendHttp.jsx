import React from 'react';

const FrontendHttp = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> General Header </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 요청/응답에 대한 일반적인 정보를 담은 헤더 </li>

                        <h2 className='h2'> 📌 Date </h2>
                        <li> 현재시간을 알려준다. </li>

                        <h2 className='h2'> 📌 Pragma </h2>
                        <li> 캐시제어 , HTTP/1.0 버전에서 사용했던것 </li>

                        <h2 className='h2'> 📌 Cache-Control </h2>
                        <li> 캐시제어 </li>
                        <li> 옵션
                            <div className="block4">
                                <li> no-store : 캐시 저장 사용안함 </li>
                                <li> no-cache : 유효한 캐시인지 서버에 매번 확인 </li>
                                <li> must-revalidate : 만료된 캐시이면 서버에 확인하겠다. </li>
                                <li> public : 공유 캐시공간에 저장 허용 </li>
                                <li> private : 브라우저 같은 사용자 환경에 저장 </li>
                                <li> max-age : 캐시의 유효시간 </li>
                            </div>
                        </li>

                        <h2 className='h2'> 📌 Transfer-Encoding </h2>
                        <li> body 내용 압축 방식 지정 </li>
                        <li> 옵션
                            <div className="block4">
                                <li> chunked 이면 분할해서 데이터를 받아온다. </li>
                            </div>
                        </li>

                        <h2 className='h2'> 📌 Upgrade </h2>
                        <li> 프로토콜 변경시 사용, HTTP/2.0 </li>

                        <h2 className='h2'> 📌 Via </h2>
                        <li> 프록시(중간) 서버 이름, 버전, 호스트명 </li>

                        <h2 className='h2'> 📌 Content-Encoding </h2>
                        <li> 본문 리소스 압축 방식 </li>

                        <h2 className='h2'> 📌 Content-type </h2>
                        <li> 본문 타입 , application/json </li>

                        <h2 className='h2'> 📌 Content-Length </h2>
                        <li> 본문 길이 </li>

                        <h2 className='h2'> 📌 Content-language </h2>
                        <li> 본문 언어 </li>

                        <h2 className='h2'> 📌 Expires </h2>
                        <li> 만료 날짜 </li>

                        <h2 className='h2'> 📌 Allow </h2>
                        <li> 사용 가능한 메소드 방식, GET,POST </li>

                        <h2 className='h2'> 📌 Last-Modified </h2>
                        <li> 최근 수정 날짜 </li>

                        <h2 className='h2'> 📌 ETag </h2>
                        <li> 캐시가 최신버전인지 알기 위한 식별자 </li>

                        <h2 className='h2'> 📌 Connection </h2>
                        <li> 서버와 클라이언트 연결 방식, keep-alive </li>

                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> Request/Response Header(정리중) </summary>
                    <div className='block2'>
                        <a href="https://hazel-developer.tistory.com/145" target="_blank" rel="noopener noreferrer"> 헤더 정리 참고 </a>
                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
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
            <div className='block1'>
                <details>
                    <summary> Entity Header(정리중) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
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
            <div className='block1'>
                <details>
                    <summary> HTTP Body(정리중) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
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
            <div className='block1'>
                <details>
                    <summary> http상태코드(미정리) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> <a href="https://www.whatap.io/ko/blog/40/" target="_blank" rel="noopener noreferrer"> http 상태 코드 </a> </li>
                        <li> 2 </li>
                        <li> 3 </li>

                    </div>
                </details>
            </div>
            {/* 끝 */}
        </div>
    );
}

export default FrontendHttp;