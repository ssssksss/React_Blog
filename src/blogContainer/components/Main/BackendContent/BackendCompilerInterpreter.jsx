import React from 'react';

const BackendCompilerInterpreter = (props) => {

    return (
        <>
            <div className="common_style">
                <div className="lblock">

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 컴파일 언어
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 대표적인 언어 : C , C++ , Java 등 </li>
                                    <li> 소스코드 - 컴파일러 - 목적파일(오브젝트코드, .obj파일) - 링커(라이브러리 코드) - 실행파일(.exe) </li>
                                    <li> 인터프리터에 비해 초반에는 느림 하지만 파일이 존재하므로 2번이상부터는 빠르다 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 인터프리터
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 대표적인 언어 : Python 등 </li>
                                    <li> 소스코드 - 인터프리터 - 실행 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </div>
            </div>
        </>
    );
}

export default BackendCompilerInterpreter;