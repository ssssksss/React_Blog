import React from 'react';

const JavaScriptLocation = (props) => {
    return (
        <div className="common_style" >
            <div className='block1'>
                <details>
                    <summary> Location Property </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 속성 </h2>
                        <li> document.location.hash : URL의 앵커 부분을 #기호를 이용하여 설정하거나 반환 및 설정 </li>
                        <li> location.host : URL의 호스트 이름과 포트를 설정 하거나 반환 및 설정 </li>
                        <li> location.hostname : URL의 호스트 이름 반환 및 설정 </li>
                        <li> document.location.href : 전체 URL 반환 및 설정 </li>
                        <li> location.origin : URL의 프로토콜, 호스트이름, 포트 번호 반환 </li>
                        <li> location.pathname : URL의 경로 이름 반환 및 설정 </li>
                        <li> location.port : URL의 포트 번호 반환 및 설정 </li>
                        <li> location.protocol : URL의 프로토콜 반환 및 설정 </li>
                        <li> location.search : URL의 쿼리스트링 반환 및 설정 </li>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Location Method </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 메소드 </h2>
                        <li> location.assign("URL") : 새로운 문서를 로드 </li>
                        <li> location.replace("URL") : 현재 문서의 URL을 제거하고 새로운 문서를 로드, 뒤로가기를 사용할 수 없다. </li>
                        <li> location.reload("URL") : 현재 문서를 리로드 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {' <body> '}
                                        <li> {' <button onClick=assign()> assign </button> '} </li>
                                        <li> {' <button onClick=replace()> replace </button> '} </li>
                                        <li> {' <button onClick=reload()> reload </button> '} </li>
                                        <li> {'  '} </li>
                                        <li> {' <script> '}
                                            <li> {' function assign() { '}
                                                <li> {' location.assign("https://www.naver.com"); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' function freplace() { '}
                                                <li> {' location.replace("https://www.naver.com"); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' function reload() { '}
                                                <li> {' location.reload(); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                        </li>
                                        <li> {' </script> '} </li>
                                    </li>
                                    <li> {' </body> '} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> history(정리 필요) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 함수 </h2>
                        <li> window.history.back() </li>
                        <li> window.history.pushState(null,null,"/경로") </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
            {/* 끝 */}
        </div>
    );
}

export default JavaScriptLocation;