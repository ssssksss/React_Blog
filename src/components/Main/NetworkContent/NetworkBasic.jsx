import React, { useEffect, useRef } from 'react';

const NetworkBasic = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 네크워크란? </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 노드(네트워크에 속한 컴퓨터,통신장비)와 노드간에 통신망을 통하여 DATA를 주고 받는 방식, 환경 </li>
                            <li> 파일공유, 스트리밍, 여러 PC에서 1대의 프린터 사용, 온라인 게임 등등 네트워크를 사용한다. </li>
                            <li> 3 </li>

                            <h2 className='h2'> 📌 네트워크 분류(크기) </h2>
                            <li> PAN(Personal Area Network) : 가장 작은 규모 네트워크 #블루투스 , IEE 802.15 </li>
                            <li> LAN(Local Area Network) : 단거리 전송 방식, 지역 네트워크, IEE 802.11 #집(공유기), 강의실, 사무실 등 한 공간정도 </li>
                            <li> MAN(Metropolitan Area Network) : 도시 영역 네트워크 , IEE 802.16  </li>
                            <li> WAN(Widw Area Network) : 광대역 네트워크 , 802.20 # 지역, 지방, 나라, 대륙  </li>
                            <li> VLAN  </li>
                            <li> CAN </li>
                            <li> PAN </li>

                            <h2 className='h2'> 📌 LAN 네트워크 분류(모양) , 토폴로지(Topology) </h2>
                            <li> Mesh : 여러 노드들끼리 그물처럼 연결 </li>
                            <li> 혼합형 : 실제 인터넷은 여러 모양의 방식으로 연결되어 있음 </li>
                            <li> Bus : 단일 케이블에 네트워크의 모든 컴퓨터를 연결, 버스 끝에는 Terminator를 달아 신호 반사 방지 </li>
                            <div className="block4">
                                <li> 트래픽 제어 간단, 비용 적음, 확장이 쉬움 </li>
                                <li> 노드수가 증가하면 충돌하여 통신효율 절감, 문제 발생하면 찾기 힘듬, 고장나면 전체 다운 </li>
                            </div>
                            <li > Ring : 고리 구조의 형태 </li>
                            <div className="block4">
                                <li > 데이터 안정적 전송,  </li>
                                <li> 한 노드가 고장나면 전체 고장, 네트워크 확장,변경 어려움 </li>
                            </div>
                            <li > Star : 허브나 스위치를 통해 중앙 집중 형태로 연결 </li>
                            <div className="block4">
                                <li > 중앙 집중식 관리 가능, 확장과 관리가 편함 , 일부 오류가 발생하여도 나머지는 정상작동 # 가정집 공유기 </li>
                                <li> 노드 수가 증가하면 패킷 충돌이 증가 하여 효율 하락, 허브나 스위치 고장 전체 다운 </li>
                            </div>

                            <h2 className='h2'> 📌 네트워크 통신 방식 </h2>
                            <li> 1:1(유니 캐스트) : # 1:1 통신 </li>
                            <li> 1:N(멀티 캐스트) : 한번에 데이터를 여러대에 송신하지만 수신하는 곳에서 원하는 것만 수신 가능 ( ex) IPTV 채널 ) </li>
                            <li> 1:모두(브로드 캐스트) : 한번에 데이터를 같은 대역에 있는 여러기기에 송신하지만 수신하는 곳에서는 거부하는 권한이 없음, 차단은 가능 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 인터넷 관련 용어 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 인터넷이란? </h2>
                            <li> 여러가지 데이터를 공유할 수 있는 통신망 , 여러가지 통신망 중 가장 큰 통신망 </li>

                            <h2 className='h2'> 📌 WWW란 </h2>
                            <li> 인터넷을 통해서 웹과 관련된 데이터를 공유하는 것 </li>

                            <h2 className='h2'> 📌 프로토콜(protocol)이란? </h2>
                            <li> 통신하는 기기들 간의 통신 규약(규칙) </li>
                            <li> 세분화와 재합성 , 캡슐화, 연결제어, 오류제어, 흐름제어, 동기화, 순서결정, 주소설정, 다중화, 전송서비스 </li>
                            <li> 오류제어 : 통신이 문제가 발생하면 프로토콜을 보고 알 수 있음 </li>
                            <li> 흐름제어 : 데이터 전달 과정에 대한 흐름을 알 수 있음 </li>

                            <h2 className='h2'> 📌 프로토콜 종류 </h2>
                            <li> 가까운 곳 : Ethernet #MAC 주소 </li>
                            <li> 멀리있는 곳 : ICMP , IPv4 , IPv6 , ARP #IP주소 </li>
                            <li> 특정 프로그램 통신 : TCP , UDP #포트번호 </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

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

                <div className='block1'>
                    <details>
                        <summary> Mac,Ip,Port </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 MAC </h2>
                            <li> 공유기에 여러대의 컴퓨터와 휴대폰 등이 연결되어 있다고 하면
                                컴퓨터는(0001) , 휴대폰(0002) 을 구분하여 더 빠르게 통신한다. 만약에 같은 종류의 컴퓨터라면
                                같은 MAC주소를 가지고 있을수도있다. <br /> ※ MAC주소가 fff.fff.fff.fff로 수신되면 무조건 열어본다. </li>

                            <h2 className='h2'> 📌 IP </h2>
                            <li> MAC주소가 같을경우 IP주소를 이용하여서 구분한다. IP주소는 컴퓨터의 종류가 같아도 각기 다른 IP주소를 가지고 있다.
                                <br /> ※IP주소가 255.255.255.255로 수신되면 무조건 열어본다. </li>

                            <h2 className='h2'> 📌 PORT </h2>
                            <li> PORT번호는 프린터,마우스 등과 브라우저에서 여러개의 창(블로그,뉴스,유튜브 등)을 열었을때 구분을 해주는 번호이다.
                                <br /> ※0~65536까지 가능하지만 0~1023의 포트번호는 이미 정해져 있으므로 건들지 않는다. ex) 80은 웹페이지를 뜻하는 포트번호이다. </li>

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
                        <summary> IPv4 </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 네트워크에서 컴퓨터 장치들이 서로 통신하는데 사용하기 위한 네트워크 주소  </li>
                            <li> 최근에는 일반적으로 IP주소만으로 구성되어있지 않고 IP+S/M으로 구성이 되어있다.  </li>
                            <li> 네트워크 장비에 IP를 줄떄는 IP + S/M 으로 주는데 192.168.2.0/28 과 같이 주면 서브넷마스크 28개를 지정 했으므로 1개의 네트워크의 호스트 대역을 16개의 크기로 할당을 하겠다라는 것을 알 수 있음
                                <div className="block4">
                                    <p> 192.168.2.0/28 </p>
                                    <p> 10000000.10101000.00000010.00000000 / 11111111.11111111.11111111.11110000 </p>
                                    <p> 네트워크 주소 갯수는 255*255*255*16 </p>
                                    <p> 호스트 주소 갯수는 16 </p>
                                </div>
                            </li>
                            <li> 32bit 이진수로 된 네트워크 주소 </li>
                            <li> 사람이 볼떄는 십진수인 255.255.255.255로 표현됨 </li>
                            <li> 2^32개 = 40억 개의 정도의 주소가 존재 </li>
                            <li> 현재는 A,B,C,D,E클래스로 구분해서 사용하지 않음, 현재는 IPv4주소가 부족해서 IPv6로 옮겨야 하지만
                                장비 변경, 코드 변경 등등 엄청난 문제가 발생할 것으로 예상된다. </li>

                            <h2> 📌 용어 </h2>
                            <li> 옥텟(Octet) : IP주소의 8bit단위를 뜻하는 용어로 IPv4는 4개의 옥텟으로 구성되어있다. </li>
                            <li> 서브넷 마스크 : IP주소를 네트워크 주소와 호스트주소로 구분해준다.(매핑을 해서 구분을 시켜주는 용도) </li>
                            <li> Broadcast : 네트워크 주소 안에 모든 호스팅 주소를 가리킴 <small> # 아파트 1동의 모든 집에 방송하는 것을 생각하면 된다. </small>  </li>

                            <h2> 📌 IP에 대해 기본적으로 알아야할 사실 </h2>
                            <li> 특정 IP주소는 정해진 기능이 존재한다. </li>
                            <li> 127.0.0.0 ~ 127.255.255.254 (자기자신을 가리키는 IP , loopback IP) </li>
                            <li> 0.0.0.0 ( 읽어보아도 100% 이해가 되지 않으므로 패스.. )
                                <div className="block4">
                                    <p> 1. 컴퓨터에서는 TCP/IP에 연결되어 있지 않으면 일반적으로 0.0.0.0 주소로 되어있고, 컴퓨터 IP주소를 0.0.0.0주소로 변경을 하게되면 모든 IP주소 차단기능 역할.  </p>
                                    <p> 2. 서버에서는 로컬 호스팅의 모든 IP를 의미한다는 것 같음 </p>
                                </div>
                            </li>
                            <li> @.255.255.255  </li>
                            <li>  </li>

                            <h2> 📌 A 클래스 </h2>
                            <li> 1xxxxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx </li>
                            <li> 서브넷 마스크 주소 : 255.0.0.0 </li>
                            <li> IP 주소 : 128.0.0.0 ~ 255.255.255.255 </li>
                            <li> IP 주소는 1개의 네트워크 옥텟 + 3개의 호스트 옥텟으로 구성 </li>
                            <li> A클래스의 사설 IP : 10.0.0.0 ~ 10.255.255.255 </li>
                            <li> ?.255.255.255 <small> # ?로 시작되는 네트워크 주소의 모든 호스트를 가리키는 방법(broadcast) </small> </li>
                            <li>  </li>

                            <h2> 📌 B 클래스 </h2>
                            <li> 10xxxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx </li>
                            <li> 서브넷 마스크 주소 : 255.255.0.0 </li>
                            <li> IP 주소 : 128.0.0.0 ~ 191.255.255.255 </li>
                            <li> IP 주소는 2개의 네트워크 옥텟 + 2개의 호스트 옥텟으로 구성 </li>
                            <li> B클래스의 사설 IP : 172.16.0.0 ~ 172.31.255.255 </li>
                            <li> B클래스의 할당 불가 IP : 169.254.0.0 ~ 169.254.255.255 </li>
                            <li>  </li>

                            <h2> 📌 C 클래스 </h2>
                            <li> 110xxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx  </li>
                            <li> 서브넷 마스크 주소 : 255.255.255.0 </li>
                            <li> IP 주소 : 192.0.0.0 ~ 223.255.255.255 </li>
                            <li> IP 주소는 3개의 네트워크 옥텟 + 1개의 호스트 옥텟으로 구성 </li>
                            <li> C클래스의 사설 IP : 192.168.0.0 ~ 192.168.255.255 </li>

                            <h2> 📌 D 클래스 </h2>
                            <li> 1110xxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx  </li>
                            <li> 서브넷 마스크 주소 : 255.0.0.0 </li>
                            <li> IP 주소 : 224.0.0.0 ~ 239.255.255.255 </li>
                            <li> IP 주소는 1개의 네트워크 옥텟 + 3개의 호스트 옥텟으로 구성 </li>
                            <li> 멀티캐스트 용도로 사용 </li>

                            <h2> 📌 E 클래스 </h2>
                            <li> 1111xxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx  </li>
                            <li> 서브넷 마스크 주소 : 255.0.0.0 </li>
                            <li> IP 주소 : 240.0.0.0 ~ 255.255.255.255 </li>
                            <li> IP 주소는 1개의 네트워크 옥텟 + 3개의 호스트 옥텟으로 구성 </li>
                            <li> 연구용, 기타 목적으로 사용 </li>
                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Subnetting </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 호스트 주소를 나누어서 다수의 네트워크로 분리하여 관리하는 방법 </li>
                            <li> 회사의 부서가 다르고 인원이 다르면 IP의 호스트 주소를 쪼개서어 분배하여 사용할 수 있다. </li>
                            <li> ex) 50명의 회사 부서가 있다면 서브넷마스크는 255.255.255.192 를 주면 64개의 대역 4개로 나뉘고 3개를 제외한 각 대역당 61개를 사용할 수 있다. </li>
                            <li> ex) A부서 50 , B부서 5 , C부서 60 이면 , 네트워크를 192.168.2.1/26 192.168.2.64/27 192.168.2.96/29 이렇게 3개로 분리해서 줄 수 있다. </li>

                            <h2 className='h2'> 📌 사용 이유 </h2>
                            <li> IP주소 자원을 효율적으로 사용가능 </li>
                            <li> 네트워크의 브로드캐스트의 크기를 줄여서 트래픽을 낮출수 있음 </li>
                            <li> 네트워크를 분리하여 보안성을 높일 수 있음 </li>


                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> TCP/IP 와 UDP/IP </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 TCP/IP </h2>
                            <li> 기기과 기기간의 신뢰성있는 데이터를 주고 받기 위한 방식, IP는 기기의 주소 , TCP는 프로토콜 </li>

                            <h2 className='h2'> 📌 TCP/IP 구조 </h2>
                            <li>  </li>

                            <h2 className='h2'> 📌 UDP/IP 프로토콜 </h2>
                            <li> 사용자 데이터그램 프로토콜(User Datagram Protocol, UDP) </li>
                            <li>기기과 기기간의 신뢰성을 보장하지 않는 데이터를 주고 받는 방식, IP는 기기의 주소 , UDP는 프로토콜   </li>

                            <h2 className='h2'> 📌 UDP/IP 구조 </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 3Way Handshake </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

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

                <div className='block1'>
                    <details>
                        <summary> 4Way Handshake </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 세션을 종료하기 위해 수행하는 과정  </li>

                            <h2 className='h2'> 📌 순서 </h2>
                            <li> 1. 클라이언트 → 서버 <br /> 초기에 클라이언트는 ESTABLISHE 상태 , FIN플래그 발송 , 클라이언트는 FIN-WAIT1 상태 </li>
                            <li> 2. 서버 → 클라이언트 <br /> ACK 발송 , 서버는 서버 통신이 끝날때 까지 기다리는 TIME_WAIT 상태 </li>
                            <li> 2-1. → 클라이언트 <br /> 클라이언트는 FIN-WAIT2 상태 </li>
                            <li> 3. 서버 → 클라이언트 <br /> 서버가 통신이 끝나면 FIN 플래그를 발송 , 서버는 LAST-ACK 상태 </li> <br />
                            <li> 4. 클라이언트 → 서버 <br /> 클라이언트는 TIME-WAIT 상태 , ACK 발송  </li>
                            <li> 5.  → 서버 <br /> CLOSED 상태  </li> <br />
                            <li> ※ TIME-WAIT 상태 : 서버에서 뒤늦게 온 패킷 놓치지 않고 받기 위해 (default 240second) 동안 세션을 남기고 기다리는 행위  </li>

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

export default NetworkBasic;