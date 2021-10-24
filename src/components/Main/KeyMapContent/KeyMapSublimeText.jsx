import React from 'react';

const KeyMapSublimeText = (props) => {
    return (
        <>

            <div className="common_style" >
                <span className="lblock">

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 단축키
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 단축키 설명 </div>
                                <div className='mblock'>
                                    <li> Alt + V : 상단 메뉴바 보기 </li>
                                    <li>   </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 단축키 커스텀 설정하는 방법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> 상단 메뉴 - Preferences - Key Bindings - User </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </span>
            </div>
        </>
    );
}

export default KeyMapSublimeText;