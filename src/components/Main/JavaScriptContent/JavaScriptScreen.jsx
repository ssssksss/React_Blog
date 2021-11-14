import React from 'react';

const JavaScriptScreen = (props) => {
    return (
        <>

            <div className="common_style" >
                <div className='block1'>
                    <details>
                        <summary> Screen Property </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> screen.availWidth : 사용자가 인터페이스를 제외한 사용 가능 화면 너비를 반환 </li>
                            <li> screen.availHeight : 사용자가 인터페이스를 제외한 사용 가능 화면 높이를 반환 </li>
                            <li> screen.colorDepth : 픽셀당 비트수를 보여준다. </li>
                            <li> screen.width : 사용자 화면의 총 너비를 반환 </li>
                            <li> screen.height : 사용자 화면의 총 높이를 반환 </li>
                            <li> screen.pixelDepth : 방문자 화면의 픽셀당 비트수를 보여준다. </li>

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
                                                <li> {' console.log(screen.availWidth); '} </li>
                                                <li> {' console.log(screen.availHeight); '} </li>
                                                <li> {' console.log(screen.colorDepth); '} </li>
                                                <li> {' console.log(screen.width); '} </li>
                                                <li> {' console.log(screen.height); '} </li>
                                                <li> {' console.log(screen.pixelDepth); '} </li>
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
            </div>
        </>
    );
}

export default JavaScriptScreen;