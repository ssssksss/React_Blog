import React from 'react';

const JavaScriptNavigator = (props) => {
    return (
        <>

            <div className="common_style" >
                <div className='block1'>
                    <details>
                        <summary> 제목 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> navigator.appCodeName </li>
                            <li> navigator.appName : 브라우저의 이름 </li>
                            <li> navigator.appVersion : 브라우저의 버전 정보 </li>
                            <li> navigator.cookieEnabled : 브라우저의 쿠키를 허용할지 판단 </li>
                            <li> navigator.language : 브라우저의 언어 </li>
                            <li> navigator.onLine : 브라우저가 온라인인지 아닌지 판단 </li>
                            <li> navigator.platform : 브라우저의 컴파일 플랫폼 반환 </li>
                            <li> navigator.userAgent : 브라우저에서 서버로 보낸 user-agent 헤더를 반환  </li>
                            <li> navigator.javaEnabled() : 브라우저에서 자바가 사용 가능한지를 판단  </li>

                            <h2 className='h2'> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
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
            </div>
        </>
    );
}

export default JavaScriptNavigator;