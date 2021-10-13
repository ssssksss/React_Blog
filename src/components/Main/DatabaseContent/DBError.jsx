import React, { useEffect, useRef } from 'react';

const DBError = (props) => {

    return (
        <>
            <div className="common_style">
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> 오라클 DB 에러
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <li>  <div className="sstitle"> ORA-12560: TNS:프로토콜 어댑터 오류 </div>
                                        <div className="mblock">
                                            <li> 설명 : 오라클 DB에 접속이 불가능할 경우 </li>
                                            <li> 해결 : 프로세스를 재시작하면 된다.  </li>
                                        </div>
                                    </li>
                                    <li> <div className="sstitle"> ORA-28009: SYS(SYSDBA 또는 SYSOPER)로 접속해야 합니다. </div>
                                        <div className="mblock">
                                            <li> 설명 : 사용자명을 sys로 로그인을 하면 안되는 경우 </li>
                                            <li> 해결 : sys as sysdba를 사용해서 로그인을 해야한다. </li>
                                        </div>
                                    </li>
                                    <li> <div className="sstitle"> ORA-00988: 비밀번호가 틀립니다. </div>
                                        <div className="mblock">
                                            <li> 설명 : 비밀번호 입력이 틀린 경우 </li>
                                            <li> 해결 : 비밀번호가 틀렸거나 혹은 ""로 비밀번호를 감싸주지 않을 경우 발생 </li>
                                        </div>
                                    </li>
                                    <li> <div className="sstitle"> ORA-65096: 공통 사용자 또는 롤 이름이 부적합합니다. </div>
                                        <div className="mblock">
                                            <li> 설명 : 사용자명이 틀린 경우 </li>
                                            <li> 해결 : 오라클 c12부터 사용자명에 c##을 앞에 붙여서 사용을 해야한다. </li>
                                        </div>
                                    </li>
                                    <li> <div className="sstitle"> ORA-00903: 테이블명이 부적합합니다 </div>
                                        <div className="mblock">
                                            <li> 설명 : 오라클에서 예약어로 user 를 사용?하고 있어서 DB를 생성하는데 생성이 안된 케이스 </li>
                                            <li> 해결 : 이름을 바꾸면 된다..</li>
                                        </div>
                                    </li>

                                    <li> <div className="sstitle"> ORA-00923: FROM 키워드가 필요한 위치에 없습니다 </div>
                                        <div className="mblock">
                                            <li> 설명 : sql문을 잘못 작성하여서 from 키워드 인식 위치를 잘못판단해서 발생하는 에러 </li>
                                            <li> 해결 : sql문 from 앞쪽을 보면 틀린 문법이 존재할 것이다. </li>
                                        </div>
                                    </li>

                                    <li> <div className="sstitle">  </div>
                                        <div className="mblock">
                                            <li> 설명 : </li>
                                            <li> 해결 : </li>
                                        </div>
                                    </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> MySQL DB 에러
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
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
                </ul>
            </div>
        </>
    );
}

export default DBError;