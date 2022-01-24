import React from 'react';

const NetworkThreeWayHandshake = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 3Way Handshake란? <a name="3Way Handshake란?" style={{ visibility: "hidden" }}> 3Way Handshake란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 서버와 클라이언트가 서로 데이터를 전송할 수 있는 준비환경이 되었다는 것을 확인하는 방법 </span>
                                <span className="mblock">
                                    <li> TCP 통신을 할 때 프로세스와 프로세스를 연결하기 위해 수행하는 과정, TCP연결 초기화 </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 3Way Handshake 실행 과정 <a name="3Way Handshake 실행 과정" style={{ visibility: "hidden" }}> 3Way Handshake 실행 과정 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> 1. 클라이언트 → 서버 <br /> 클라이언트는 SYN 패킷 발송하고 SYN/ACK를 기다리는 SYN_SENT 상태로 변경 </li>
                                    <li> 1-1.  → 서버 <br /> 서버는 초기에 LISTEN 상태, 클라이언트에게 SYN 요청을 받음 , SYN flag 설정을 바꿈  </li>
                                    <li> 2. 서버 → 클라이언트 <br /> ACK와 SYN 발송, 서버는 SYN_RECEIVED 상태 </li>
                                    <li> 3. 클라이언트 → 서버 <br /> 클라이언트 ACK 발송 , 클라이언트 ESTABLISHED 상태 </li> <br />
                                    <li> 3-1. → 서버 <br /> 서버는 ESTABLISHE 상태 </li> <br />
                                    <li> TCP :  </li>
                                    <li> SYN(Synchronize Sequence Numbers) : 접속 요청 패킷 </li>
                                    <li> ACK(Acknowledgment) : </li>
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

export default NetworkThreeWayHandshake;