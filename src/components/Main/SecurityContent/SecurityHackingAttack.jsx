import React from 'react';

const SecurityHackingAttack = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 브루트 포스 공격 <a name="브루트 포스 공격" style={{ visibility: "hidden" }}> 브루트 포스 공격 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 무차별 대입 공격 </span>
                                <span className="mblock">
                                    <li> 일일히 무작위로 대입을 해서 비밀번호를 알아내는 방법 , 요즘 시대에는 성공하기 힘듬 </li>
                                    <li> 사용자가 자주 사용하는 비밀번호들을 리스트로 만들어서 대입을 해보는 방법 , 공격이 성공하기 좋음 </li>
                                    <small> password dictionary file 구글에 검색하면 비밀번호 리스트가 나온다 </small>
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 세션 하이재킹 공격 <a name="세션 하이재킹 공격" style={{ visibility: "hidden" }}> 세션 하이재킹 공격 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 다른 사람의 세션을 가로채서 인증 별도의 인증 작업 없이 통신을 게속 하는 것 </span>
                                <span className="mblock">
                                    <li> OTP , Challenge/Response 기법 무력화 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> TCP Connection Hijacking </span>
                                <span className="mblock">
                                    <li> TCP연결을 가로채는 방법 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Sequence Number Prediction Hijacking </span>
                                <span className="mblock">
                                    <li> TCP를 연결하는 과정에서 서버가 일정한 규칙을 가지고서 설정을 하게되면
                                        추론을 하여 알아내는 방법 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 서비스 거부 공격(Dos) <a name="서비스 거부 공격(Dos)" style={{ visibility: "hidden" }}> 서비스 거부 공격(Dos) </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 합법적인 사용자가 서비스를 이용하지 못하게 방해하는 방법 </span>
                                <span className="mblock">
                                    <li> 막대한 트래픽을 발생시켜 과부하를 준다. </li>
                                    <li> 악의적인 요청을 보내 리소스가 오작동을 일으키게 하여 정지시키는 방법 </li>
                                    {/*  */}
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ Buffer Overflow Attack(Dos) <a name="Buffer Overflow Attack" style={{ visibility: "hidden" }}> Buffer Overflow Attack </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 개발자들이 설계한 시스템 처리 능력보다 더 많은 트래픽을 보내서 마비시킴 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ ICMP Flood Attack , Smurf Attack, the ping of death(Dos) <a name="ICMP Flood Attack" style={{ visibility: "hidden" }}> ICMP Flood Attack </a> </summary>
                            <small> ICMP(Internet Control Messsage Protocol) </small>
                            <span className="sblock">
                                <span className="sstitle"> 네트워크의 브로드캐스트 주소를 통해 모든 컴퓨터로 패킷을 보내는 공격 방식 </span>
                                <span className="mblock">
                                    <li> Ping Flooding : 막대한 양의 ICMP 에코 요청 패킷을 보내는 방법 , 상대 네트워크 대역폭보다 더 많은 양을 보내면 과부하 시킬 수 있음 </li>
                                    <li> Ping of Death : 사아대 시스템의 취약점이 있으면 변형된 패킷을 보내서 시스템을 비정상적으로 만드는 방법 </li>
                                    <li> 일반적인 정상 패킷은 56바이트,84바이트(+IP) 이다. 시스템에 인식할 수 있는 패킷의 데이터 크기를 넘어서 버퍼 오버플로우를 발생시켜 시스템을
                                        비정상적으로 작동시키게 하고 악성코드를 주입한다. </li>
                                    <li> SYN Flooding : 막대한 양의 TCP SYN 패킷을 보내 시스템을 마비시키는 공격, 3Way Handshake에서 SYN을 요청하는것을 이용하는 방식인데
                                        해커는 사용자의 SYN패킷을 탈취해서 IP주소를 알아내고 사용자의 IP주소를 이용해서 서버에 계속 요청을 보내면
                                        서버에서는 SYN을 받았으니 SYN+ACK요청을 사용자IP주소로 보내게 되지만 응답이 되돌아오지 않고 프로세스를 생성하고 기다린다.
                                        그러므로 막대한양의 요청을 보내 프로세스를 늘려 다른 사용자는 이용할 수 없게 만드는 방법이다. </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ (DDos) <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 많은 장치들이 여러곳에서 한 리소스를 타깃으로 잡고 공격을 하는 방법 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 무작위 스캔 공격 <a name="무작위 스캔 공격" style={{ visibility: "hidden" }}> 무작위 스캔 공격 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 여러 컴퓨터를 탐색하여 열려있는 포트, 서비스, OS버전 등 취약한 정보를 가져온다. </span>
                                <span className="mblock">
                                    <li> 해킹 공격을 하기전에 사전 답사를 하는 행동 </li>
                                </span>
                                <span className="sstitle"> ARP Scan </span>
                                <span className="mblock">
                                    <li> ARP 프로토콜을 이용한 탐샌 방법 ,  </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> ICMP Scan </span>
                                <span className="mblock">
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> TCP/UDP Scan </span>
                                <span className="mblock">
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> Stealth Scan </span>
                                <span className="mblock">
                                    <li>  </li>
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

export default SecurityHackingAttack;