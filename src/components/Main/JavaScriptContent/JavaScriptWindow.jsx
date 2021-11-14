import React from 'react';

const JavaScriptWindow = (props) => {
    return (
        <>

            <div className="common_style" >

                <div className='block1'>
                    <details>
                        <summary> Window Method </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 open() , close() </h2>
                            <li> window.open() : 새로운 창을 열때 사용, 팝업창을 만들 때 대체적으로 사용 </li>
                            <div className="block3">
                                <li> window.open("", "MsgWindow", "width=200, height=100") : 이와 같이 표 </li>
                            </div>
                            <li> window.close() : 새로 열은 창을 닫을때 사용 </li>

                            <h2 className='h2'> 📌 write(), writeln() </h2>
                            <li> HTML document에 text를 작성한다. </li>
                            <li> document가 완전히 로드된후에 메소드를 사용하게 되면 기존에 있던 모든 내용을 삭제한다. </li>
                            <li> write(), writeln()은 줄바꿈의 차이이다. </li>
                            <li> window.open() 이후에 HTML 마크업 언어를 메소드를 이용해서 넣어줄 수도 있다.  </li>
                            <div className="block3">
                                <li> {' document.open(); '} </li>
                                <li> {' document.write("<h1>Hello World</h1>"); '} </li>
                                <li> {' document.close(); '} </li>
                            </div>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>

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

                <div className='block1'>
                    <details>
                        <summary> Window Property </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 속성 </h2>
                            <li> window.location : </li>

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

export default JavaScriptWindow;