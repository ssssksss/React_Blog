import React, { useEffect, useRef, useState } from 'react';

const NetworkStudy = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 목록 </summary>
                            <details open>
                                <summary className="col_g"> 세부 목록 </summary>
                                <a href="#네크워크란?" className="col_p"> 네크워크란? </a>
                                <a href="#MAC, IP, PORT" className="col_p"> MAC, IP, PORT </a>
                                <a href="#서버의 종류" className="col_p"> 서버의 종류 </a>
                                <a href="#인터넷이란?" className="col_p"> 인터넷이란? </a>
                                <a href="#WWW란?" className="col_p"> WWW란? </a>
                                <a href="#OSI 7 Layer" className="col_p"> OSI 7 Layer </a>
                                <a href="#프로토콜(protocol)이란?" className="col_p"> 프로토콜(protocol)이란? </a>
                                <a href="#TCP/IP 프로토콜" className="col_p"> TCP/IP 프로토콜 </a>
                                <a href="#3Way Handshake" className="col_p"> 3Way Handshake </a>
                                <a href="#4Way Handshake" className="col_p"> 4Way Handshake </a>
                                <a href="#UDP/IP 프로토콜" className="col_p"> UDP/IP 프로토콜 </a>
                                <a href="#RIP 프로토콜" className="col_p"> RIP 프로토콜 </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#케이블 종류" className="col_p"> 케이블 종류 </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 네크워크란? <a name="네크워크란?" style={{ visibility: "hidden" }}> 네크워크란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 설명 : 노드(네트워크에 속한 컴퓨터,통신장비)와 노드간에 통신망을 통하여 DATA를 주고 받는 방식, 환경 </span>
                                <span className="mblock">
                                    <li> 파일공유, 스트리밍, 여러 PC에서 1대의 프린터 사용, 온라인 게임 등등  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 네트워크 분류(크기) </span>
                                <span className="mblock">
                                    <li> PAN(Personal Area Network) : 가장 작은 규모 네트워크 #블루투스 , IEE 802.15 </li>
                                    <li> LAN(Local Area Network) : 단거리 전송 방식, 지역 네트워크, IEE 802.11 #집(공유기), 강의실, 사무실 등 한 공간정도 </li>
                                    <li> MAN(Metropolitan Area Network) : 도시 영역 네트워크 , IEE 802.16  </li>
                                    <li> WAN(Widw Area Network) : 광대역 네트워크 , 802.20 # 지역, 지방, 나라, 대륙  </li>
                                    <li> VLAN  </li>
                                    <li> CAN </li>
                                    <li> PAN </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> LAN 네트워크 분류(모양) , 토폴로지(Topology) </span>
                                <small> 노드와 노드 사이의 연결 상태에 대한 배치 </small>
                                <span className="mblock">
                                    <li className="sstitle"> Mesh : 여러 노드들끼리 그물처럼 연결 </li>
                                    <li className="sstitle"> 혼합형 : 실제 인터넷은 여러 모양의 방식으로 연결되어 있음 </li>
                                    <li className="sstitle"> Bus : 단일 케이블에 네트워크의 모든 컴퓨터를 연결, 버스 끝에는 Terminator를 달아 신호 반사 방지 </li>
                                    <span className="sblock">
                                        <li className="tab_4 col_be"> 트래픽 제어 간단, 비용 적음, 확장이 쉬움 </li>
                                        <li className="tab_4 col_r"> 노드수가 증가하면 충돌하여 통신효율 절감, 문제 발생하면 찾기 힘듬, 고장나면 전체 다운 </li>
                                    </span>
                                    <li className="sstitle"> Ring : 고리 구조의 형태 </li>
                                    <span className="sblock">
                                        <li className="tab_4 col_be"> 데이터 안정적 전송,  </li>
                                        <li className="tab_4 col_r"> 한 노드가 고장나면 전체 고장, 네트워크 확장,변경 어려움 </li>
                                    </span>
                                    <li className="sstitle"> Star : 허브나 스위치를 통해 중앙 집중 형태로 연결 </li>
                                    <span className="sblock">
                                        <li className="tab_4 col_be"> 중앙 집중식 관리 가능, 확장과 관리가 편함 , 일부 오류가 발생하여도 나머지는 정상작동 # 가정집 공유기 </li>
                                        <li className="tab_4 col_r"> 노드 수가 증가하면 패킷 충돌이 증가 하여 효율 하락, 허브나 스위치 고장 전체 다운 </li>
                                    </span>
                                    {/* <li>  :  </li>
                                    <li className="tab_4 col_be">  </li>
                                    <li className="tab_4 col_r">  </li> */}
                                </span>
                                {/*  */}
                                <span className="sstitle"> 네트워크 통신 방식 </span>
                                <span className="mblock">
                                    <li> 1:1(유니 캐스트) : # 1:1 통신 </li>
                                    <li> 1:N(멀티 캐스트) : 한번에 데이터를 여러대에 송신하지만 수신하는 곳에서 원하는 것만 수신 가능 ( ex) IPTV 채널 ) </li>
                                    <li> 1:모두(브로드 캐스트) : 한번에 데이터를 같은 대역에 있는 여러기기에 송신하지만 수신하는 곳에서는 거부하는 권한이 없음, 차단은 가능 </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MAC, IP, PORT <a name="MAC, IP, PORT?" style={{ visibility: "hidden" }}> MAC, IP, PORT </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> MAC </span>
                                <span className="mblock">
                                    <li> 공유기에 여러대의 컴퓨터와 휴대폰 등이 연결되어 있다고 하면
                                        컴퓨터는(0001) , 휴대폰(0002) 을 구분하여 더 빠르게 통신한다. 만약에 같은 종류의 컴퓨터라면
                                        같은 MAC주소를 가지고 있을수도있다. <br /> ※ MAC주소가 fff.fff.fff.fff로 수신되면 무조건 열어본다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> IP </span>
                                <span className="mblock">
                                    <li> MAC주소가 같을경우 IP주소를 이용하여서 구분한다. IP주소는 컴퓨터의 종류가 같아도 각기 다른 IP주소를 가지고 있다.
                                        <br /> ※IP주소가 255.255.255.255로 수신되면 무조건 열어본다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> PORT </span>
                                <span className="mblock">
                                    <li> PORT번호는 프린터,마우스 등과 브라우저에서 여러개의 창(블로그,뉴스,유튜브 등)을 열었을때 구분을 해주는 번호이다.
                                        <br /> ※0~65536까지 가능하지만 0~1023의 포트번호는 이미 정해져 있으므로 건들지 않는다. ex) 80은 웹페이지를 뜻하는 포트번호이다. </li>
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
                            <summary className="stitle"> ▶ 서버의 종류 <a name="서버의 종류" style={{ visibility: "hidden" }}> 서버의 종류 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> DNS 서버 </span>
                                <span className="mblock">
                                    <li> 도메인 주소(www.naver.com)를 IP주소(111.111.111.111)로 변경해 줌 , UDP 프로토콜 사용 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> TFTP 서버 </span>
                                <span className="mblock">
                                    <li> 파일을 공유하는 서버 </li>
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
                            <summary className="stitle"> ▶ 인터넷이란? <a name="인터넷이란?" style={{ visibility: "hidden" }}> 인터넷이란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 여러가지 데이터를 공유할 수 있는 통신망 , 여러가지 통신망 중 가장 큰 통신망 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ WWW란? <a name="WWW란?" style={{ visibility: "hidden" }}> WWW란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 인터넷을 통해서 웹과 관련된 데이터를 공유하는 것 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ OSI 7 Layer <a name="OSI 7 Layer" style={{ visibility: "hidden" }}> OSI 7 Layer  </a> </summary>
                            <small> Open Systems Interconnection Reference Model , 프로토콜 디자인과 통신을 계층별로 나누어 설명하는 것 </small>
                            <span className="sblock">
                                <span className="sstitle"> 7 계층 , Application 응용 계층 </span>
                                <small> 편지지 위에다가 글을 작성 </small>
                                <span className="mblock">
                                    <li> 인터페이스와 네트워크 서비스를 제공 #브라우저  </li>
                                    <li> 사용자가 데이터를 생성하는 계층 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 6 계층 , Presentation 표현 계층 </span>
                                <small> 작성한 편지지를 편지봉투에 넣음  </small>
                                <span className="mblock">
                                    <li> 사용자가 입력한 데이터를 컴퓨터가 알 수 있게 해주는 확장자나 (html,css등)표현 방식을 알려주는 계층 </li>
                                    <li> 암호화와 압축화를 지원하는 계층 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 5 계층 Session , 세션 계층 </span>
                                <span> 우체국이 하는지 안하는지 판단 </span>
                                <span className="mblock">
                                    <li> 네트워크 간에 연결을 하거나 끊거나, 유지 , 상태를 담당 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 4 계층 Transport , 전송 계층 </span>
                                <small> 빠른편지인지 일반편지인지 설정, 어느 나라로 보낼것인지 설정(이해하는 언어가 다름)  </small>
                                <span className="mblock">
                                    <li> 데이터의 전송방식을 설정(TCP, UDP)  </li>
                                    <li> 서비스의 포트번호를 구별 : HTTP(80) , Telnet(23) , FTP(20,21)  </li>
                                    <li> 장비 : L4 스위치 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 3 계층 Network , 네트워크 계층 </span>
                                <small> 편지가 도착할 목적지를 적음 </small>
                                <span className="mblock">
                                    <li> 논리적인 주소를 기반으로 출발지에서 목적지까지 경로를 설정하는 계층, 대표적으로 IP주소 </li>
                                    <li> 장비 : 라우터, L3 스위치 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 2 계층 DataLink , 데이터 링크 계층 </span>
                                <small> 편지가 이동되는 운송수단 </small>
                                <span className="mblock">
                                    <li> MAC주소를 이용, 즉 노드와 노드의 전송 형태(기기마다 고유한 주소가 존재) </li>
                                    <li> 1계층에서 보내는 방식에 따라서 달라짐 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 1 계층 Physical , 물리 계층</span>
                                <small> 편지가 실제 이동 되는 구간 </small>
                                <span className="mblock">
                                    <li> 2계층까지 만들어진 데이터를 이진수로 변환하여 실질적으로 이동되는 계층 </li>
                                    <li> 장비 : 케이블, 커넥터, 리피터 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 프로토콜(protocol)이란? <a name="프로토콜(protocol)이란?" style={{ visibility: "hidden" }}> 프로토콜(protocol)이란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 통신하는 기기들 간의 통신 규약(규칙) #프로토콜이 서로 다르면 통신이 불가능하므로 만들어짐 </span>
                                <span className="sstitle"> 프로토콜의 기능  </span>
                                <span className="mblock">
                                    <li> 세분화와 재합성 , 캡슐화, 연결제어, 오류제어, 흐름제어, 동기화, 순서결정, 주소설정, 다중화, 전송서비스 </li>
                                    <li> 오류제어 : 통신이 문제가 발생하면 프로토콜을 보고 알 수 있음 </li>
                                    <li> 흐름제어 : 데이터 전달 과정에 대한 흐름을 알 수 있음 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">   </span>
                                <span className="mblock">
                                    <li> 가까운 곳 : Ethernet #MAC 주소 </li>
                                    <li> 멀리있는 곳 : ICMP , IPv4 , IPv6 , ARP #IP주소 </li>
                                    <li> 특정 프로그램 통신 : TCP , UDP #포트번호 </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ TCP/IP 프로토콜 <a name="TCP/IP 프로토콜" style={{ visibility: "hidden" }}> TCP/IP 프로토콜 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> TCP/IP : 기기과 기기간의 신뢰성있는 데이터를 주고 받기 위한 방식, IP는 기기의 주소 , TCP는 프로토콜 </span>
                                <span className="mblock">
                                    <li> 1. 3Way Handshake를 실행 </li>
                                    <li> 2. </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 3Way Handshake <a name="3Way Handshake" style={{ visibility: "hidden" }}> 3Way Handshake </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> TCP 통신을 할 때 프로세스와 프로세스를 연결하기 위해 수행하는 과정, TCP연결 초기화 </span>
                                <small> 서버와 클라이언트가 서로 데이터를 전송할 수 있는 준비환경이 되었다는 것을 확인 </small>
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
                            <summary className="stitle"> ▶ 4Way Handshake <a name="4Way Handshake" style={{ visibility: "hidden" }}> 4Way Handshake </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 세션을 종료하기 위해 수행하는 과정 </span>
                                <small> 3Way Handshake가 먼저 일어난 뒤에 일어난다? </small>
                                <span className="mblock">
                                    <li> 1. 클라이언트 → 서버 <br /> 초기에 클라이언트는 ESTABLISHE 상태 , FIN플래그 발송 , 클라이언트는 FIN-WAIT1 상태 </li>
                                    <li> 2. 서버 → 클라이언트 <br /> ACK 발송 , 서버는 서버 통신이 끝날때 까지 기다리는 TIME_WAIT 상태 </li>
                                    <li> 2-1. → 클라이언트 <br /> 클라이언트는 FIN-WAIT2 상태 </li>
                                    <li> 3. 서버 → 클라이언트 <br /> 서버가 통신이 끝나면 FIN 플래그를 발송 , 서버는 LAST-ACK 상태 </li> <br />
                                    <li> 4. 클라이언트 → 서버 <br /> 클라이언트는 TIME-WAIT 상태 , ACK 발송  </li>
                                    <li> 5.  → 서버 <br /> CLOSED 상태  </li> <br />
                                    <li> ※ TIME-WAIT 상태 : 서버에서 뒤늦게 온 패킷 놓치지 않고 받기 위해 (default 240second) 동안 세션을 남기고 기다리는 행위  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ UDP/IP 프로토콜 <a name="UDP/IP 프로토콜" style={{ visibility: "hidden" }}> UDP/IP 프로토콜</a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> UDP/IP : 기기과 기기간의 신뢰성을 보장하지 않는 데이터를 주고 받는 방식, IP는 기기의 주소 , UDP는 프로토콜 </span>
                                <span className="sstitle"> 사용자 데이터그램 프로토콜(User Datagram Protocol, UDP) </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> UDP 프로토콜 구조 </span>
                                <span className="mblock">
                                    <li> | Source Port = 2Byte | Destination Port = 2Byte | #출발지 포트번호, 도착지 포트번호 </li>
                                    <li> | Length = 2Byte | Checksum = 2Byte | #(헤더+페이로드)길이 , 프로토콜이 문제가 있는지 확인하는 값 </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ RIP 프로토콜 <a name="RIP 프로토콜" style={{ visibility: "hidden" }}> RIP 프로토콜 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 라우터 끼리 정보를 공유하는 프로토콜 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                <span className="sstitle">  </span>
                                <span className="mblock">
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
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 케이블 종류 <a name="케이블 종류" style={{ visibility: "hidden" }}> 케이블 종류 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> TP(Twisted Pair Cable) </span>
                                <small> 한 쌍으로 꼬아놓음 </small>
                                <span className="mblock">
                                    <li> STP(Shielded twisted pair) </li>
                                    <li> UTP(Unshielded twisted pair) </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Coaxial Cable </span>
                                <small> 동축케이블, BNC 케이블, TP Cable 보다 더 멀고 좋음</small>
                                <span className="mblock">
                                    <li> 외부 도체에서 방해 전파를 차단 잡음에 강함 # 케이블 TV선, 안테나 선 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Optical Fiber </span>
                                <small> 광섬유 재질, 빛으로 통신, 인터넷 케이블에 사용 </small>
                                <span className="mblock">
                                    <li className="color_be"> 빠르다 </li>
                                    <li className="color_r"> 충격에 약함, 수리 어려움 , 설치 어려움  </li>
                                </span>
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

export default NetworkStudy;