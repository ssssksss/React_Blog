import React, { useEffect, useRef } from 'react';

const DBErd = (props) => {




    return (
        <>
            <div className="common_style">
                <div className="lblock">
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> Entity Relationship Diagram </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 기호 및 표기법 </div>
                                <div className='mblock'>
                                    <li> | : 1개와 연결 </li>
                                    <li> ⪪ : 여러개와 연결  </li>
                                    <li> ○ : 0개 </li>
                                    <li>  </li>
                                    <li> 실선 : 부모 테이블의 기본키를 자식테이블이 사용하는 경우 </li>
                                    <li> 점선 : 부모 테이블의 기본키를 자식테이블이 사용하지 않는 경우 </li>
                                    <li> 직사각형 : Entity </li>
                                    <li> 타원 : Attribute </li>
                                    <li> 마름모 : Relationship </li>
                                    <li>  </li>
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

export default DBErd;