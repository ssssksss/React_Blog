import React from 'react';

const NetworkOSI7Layer = (props) => {


    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ OSI 7 Layer <a name="OSI 7 Layer" style={{ visibility: "hidden" }}> OSI 7 Layer  </a> </summary>
                            <small> Open Systems Interconnection Reference Model , 프로토콜 디자인과 통신을 계층별로 나누어 설명하는 것 </small>
                            <span className="sblock">
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 7 계층 , Application 응용 계층<a name="7 계층 , Application 응용 계층" style={{ visibility: "hidden" }}> 7 계층 , Application 응용 계층 </a> </summary>
                                    <small> 편지지 위에다가 글을 작성 </small>
                                    <span className="mblock">
                                        <li> 인터페이스와 네트워크 서비스를 제공 #브라우저  </li>
                                        <li> 사용자가 데이터를 생성하는 계층 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 6 계층 , Presentation 표현 계층 <a name="6 계층 , Presentation 표현 계층" style={{ visibility: "hidden" }}> 6 계층 , Presentation 표현 계층 </a> </summary>
                                    <small> 작성한 편지지를 편지봉투에 넣음  </small>
                                    <span className="mblock">
                                        <li> 사용자가 입력한 데이터를 컴퓨터가 알 수 있게 해주는 확장자나 (html,css등)표현 방식을 알려주는 계층 </li>
                                        <li> 암호화와 압축화를 지원하는 계층 </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 5 계층 Session , 세션 계층 <a name="5 계층 Session , 세션 계층" style={{ visibility: "hidden" }}> 5 계층 Session , 세션 계층 </a> </summary>
                                    <span> 우체국이 하는지 안하는지 판단 </span>
                                    <span className="mblock">
                                        <li> 네트워크 간에 연결을 하거나 끊거나, 유지 , 상태를 담당 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 4 계층 Transport , 전송 계층 <a name="4 계층 Transport , 전송 계층" style={{ visibility: "hidden" }}> 4 계층 Transport , 전송 계층 </a> </summary>
                                    <small> 빠른편지인지 일반편지인지 설정, 어느 나라로 보낼것인지 설정(이해하는 언어가 다름)  </small>
                                    <span className="mblock">
                                        <li> 데이터의 전송방식을 설정(TCP, UDP)  </li>
                                        <li> 서비스의 포트번호를 구별 : HTTP(80) , Telnet(23) , FTP(20,21)  </li>
                                        <li> 장비 : L4 스위치 </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 3 계층 Network , 네트워크 계층 <a name="3 계층 Network , 네트워크 계층" style={{ visibility: "hidden" }}> 3 계층 Network , 네트워크 계층 </a> </summary>
                                    <small> 편지가 도착할 목적지를 적음 </small>
                                    <span className="mblock">
                                        <li> 논리적인 주소를 기반으로 출발지에서 목적지까지 경로를 설정하는 계층, 대표적으로 IP주소 </li>
                                        <li> 장비 : 라우터, L3 스위치 </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 2 계층 DataLink , 데이터 링크 계층 <a name="2 계층 DataLink , 데이터 링크 계층" style={{ visibility: "hidden" }}> 2 계층 DataLink , 데이터 링크 계층 </a> </summary>
                                    <small> 편지가 이동되는 운송수단 </small>
                                    <span className="mblock">
                                        <li> MAC주소를 이용, 즉 노드와 노드의 전송 형태(기기마다 고유한 주소가 존재) </li>
                                        <li> 1계층에서 보내는 방식에 따라서 달라짐 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 1 계층 Physical , 물리 계층 <a name="1 계층 Physical , 물리 계층" style={{ visibility: "hidden" }}> 1 계층 Physical , 물리 계층 </a> </summary>
                                    <small> 편지가 실제 이동 되는 구간 </small>
                                    <span className="mblock">
                                        <li> 2계층까지 만들어진 데이터를 이진수로 변환하여 실질적으로 이동되는 계층 </li>
                                        <li> 장비 : 케이블, 커넥터, 리피터 </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
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

export default NetworkOSI7Layer;