import React from 'react';

const NetworkArpprotocol = (props) => {
  return (
    <>
      <div className="common_style">
        <span className="lblock">
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ ARP 프로토콜이란? <a name="ARP 프로토콜이란?" style={{ visibility: "hidden" }}> ARP 프로토콜이란? </a> </summary>
              <small> Address Resolution Protocol </small>
              <span className="sblock">
                <span className="sstitle"> IP주소를 이용하여 MAC주소를 알아내는 프로토콜 </span>
                <span className="mblock">
                  <li> 실제 IP, MAC주소를 이용하여 전송할 위치를 사용하기 때문에 MAC주소가 필요 </li>
                  <li> 3계층 IP주소를 2계층 MAC주소와 이어주는 프로토콜 </li>
                  <li> IPv4에서만 사용, IPv6에서는 NDP를 사용 </li>
                  <li> 24bit(제조업체 식별 정보) + 24bit(NIC제조업체에서 정한 시리얼 넘버) , aa:bb:cc:dd:ee:ff </li>
                  <li> 반대로 MAC주소로 IP주소를 알아오는 RARP라는 프로토콜도 있음 </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ ARP 작동원리 <a name="ARP 작동원리" style={{ visibility: "hidden" }}> ARP 작동원리 </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 같은 네트워크 일때 </span>
                <span className="mblock">
                  <ol>
                    <li> A에서 모든 단말기로 ARP요청을 같은 도메인 영역에 있는 브로드캐스트방식으로 보낸다. </li>
                    <li> ARP Request패킷을 받은 다른 단말기 들은 본인의 IP주소가 맞는지 패킷에서 확인한다. </li>
                    <li> 아니라면 무시하고 맞는다면 ARP Reply패킷을 만들어 응답을 한다. </li>
                    <li> A단말기는 일치하는 단말기의 MAC주소를 기억한다. </li>
                    <li>  </li>
                  </ol>
                </span>
                {/*  */}
                <span className="sstitle"> 다른 네트워크 일때 </span>
                <span className="mblock">
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ ARP 패킷 구조 <a name="ARP 패킷 구조" style={{ visibility: "hidden" }}> ARP 패킷 구조 </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <table border="1" width="380">
                    <tbody>
                      <tr>
                        <th colSpan="2"> Hardware Type(16) </th>
                        <th colSpan="1"> Protocol Type(16) </th>
                      </tr>
                      <tr>
                        <th colSpan="1"> Hardware Address Len(8) </th>
                        <th colSpan="1"> Protocol Address Len(8) </th>
                        <th colSpan="1"> Operation Code(16) </th>
                      </tr>
                      <tr>
                        <th colSpan="3"> Source Hardware Address() </th>
                      </tr>
                      <tr>
                        <th colSpan="3"> Source Protocol Address() </th>
                      </tr>
                      <tr>
                        <th colSpan="3"> Destination Hardware Address() </th>
                      </tr>
                      <tr>
                        <th colSpan="3"> Destination Protocol Address() </th>
                      </tr>
                    </tbody>
                  </table>
                  {/*  */}
                  <span className="sstitle">  </span>
                  <li> Hardware Type : 네트워크의 유형, 이더넷 통신시 값은 항상 1 </li>
                  <li> Protocol Type : 매핑 대상의 프로토콜 주소 유형, IPv4=0x0800</li>
                  <li> Hardware Address Len : MAC주소의 길이 , 이더넷 통신시 6</li>
                  <li> Protocol Address Len : 프로토콜 주소의 길이 , 이더넷일때 4 </li>
                  <li> Operation Code : ARP의 동작을 나타냄 <br /> [ARP Request , ARP Reply , RARP Request , RARP Reply]=1,2,3,4</li>
                  <li> Source Hardware Address : 송신자의 MAC주소 </li>
                  <li> Source Protocol Address : 송신자의 IP 주소 </li>
                  <li> Destination Hardware Address : 수신자의 MAC주소 , ARP Request일때 0 </li>
                  <li> Destination Protocol Address : 수신자의 IP주소 </li>
                  {/*  */}
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

export default NetworkArpprotocol;