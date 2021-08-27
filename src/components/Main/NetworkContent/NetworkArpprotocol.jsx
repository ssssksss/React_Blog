import React, { useEffect, useRef, useState } from 'react';

const NetworkArpprotocol = (props) => {

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);

    //위치 계산
    let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
    let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
      document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
    let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
    let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
      - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
    // console.log(window.outerHeight);


    // 좌측 메뉴 이동 + 작은 버튼
    if (window.innerWidth < 1024) {
      blockRef.current[0].style.position = 'fixed';
      document.documentElement.scrollTop < elementHeight1 ?
        blockRef.current[0].style.top = elementHeight1 + "px" :
        blockRef.current[0].style.top = "10px";
      blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
      blockRef.current[0].style.maxWidth = '420px';
      blockRef.current[1].style.left = '25%';
      blockRef.current[0].style.height = window.outerHeight;
      blockRef.current[0].style.display === 'inline-block' ?
        document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
        document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
    }
    // 좌측 메뉴 이동
    else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
      // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
      blockRef.current[0].style.position = 'fixed';
      blockRef.current[0].style.top = elementHeight2 + "px";
      blockRef.current[0].style.display = 'inline-block';
      blockRef.current[0].style.maxWidth = testdis + "px";
      blockRef.current[0].style.height = window.outerHeight;
      blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
      // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
      blockRef.current[1].style.left = '25%';
      document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
    }
    else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
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
                <a href="#" className="col_p">  </a>
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