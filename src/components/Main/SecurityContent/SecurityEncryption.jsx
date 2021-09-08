import React from 'react';

const SecurityEncryption = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 암호란? <a name="암호" style={{ visibility: "hidden" }}> 암호 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 평문을 암호문으로 만들거나 암호문을 평문으로 만드는것 </span>
                                <span className="mblock">
                                    <li> 평문 : 사람이 해독 가능한 텍스트 형태 </li>
                                    <li> 암호문 : 사람이 해독 불가능한 텍스트 형태 </li>
                                    <li> 암호화(Encryption) : 평문을 암호문으로 변환 </li>
                                    <li> 복호화(Decryption) : 암호문을 평문으로 변환 </li>
                                    <li> 단방향 암호화 : 암호화 후에 복호화가 불가능하다. , 암호문으로 평문을 구할 수 없음  </li>
                                    <small> DB에 사용자 비밀번호를 저장하는 방식, 개발자도 볼 수 없음 </small>
                                    <li> 양방향 암호화 : 암호화, 복호화 둘 다 가능하다. </li>
                                    <li> - 대칭키 : 데이터 통신 </li>
                                    <li> - 공개키 : 인증 </li>
                                    <li> 레인보우 테이블 : 여러 평문을 암호화시켜 놓은 다이제스트 목록 , 해커들이 미리
                                        만들어놓고 대입해서 과거에는 레인보우 공격을 하였음 </li>
                                    <li> 다이제스트 : 평문을 암호화 시켜놓은 비밀번호 </li>
                                    <li>  </li>
                                </span>
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

export default SecurityEncryption;