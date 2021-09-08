import React from 'react';

const NetworkProtocol = (props) => {

  return (
    <>

      <div className="common_style">
        <span className="lblock">
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <li> </li>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ DNS <a name="DNS" style={{ visibility: "hidden" }}> DNS </a> </summary>
              <span className="sblock">
                <li> 도메인 주소를 IP주소로 변경해주는 곳 </li>
                <li> 어플리케이션 계층 </li>
                <li> 포트 : UDP/53(일반) , TCP/53(512B 이상, 존영역? 전달하는 경우) </li>
                <li> 도메인 구조
                  <span className="mblock">
                    <li> [ .kr .jp .cn | .net .com ... ] </li>
                    <li> [ .co .go .or |  도메인 ] </li>
                    <li> [ 도메인 | ] </li>
                  </span>
                </li>
                {/*  */}
                <li> DNS 역할
                  <span className="mblock">
                    <li> 호스트 도메인은 여러 도메인 별칭을 가질 수 있다. </li>
                    <li> 하나의 같은 도메인에 대해 여러 IP가 사용이 가능해 번갈아가면서 부하를 분산 시켜 줄 수 있다. </li>
                  </span>
                </li>
                {/*  */}
                <li> DNS 과정
                  <span className="mblock">
                    <li> 1. 클라이언트가 로컬 DNS에 도메인 주소를 요청한다. </li>
                    <li> 2. 로컬 DNS가 루트 DNS에 요청한 도메인 주소를 물어본다. </li>
                    <li> 3. 루트 DNS가 com을 인식하면 최상위 도메인 DNS서버IP를 로컬DNS에 알려준다. </li>
                    <li> 4. 로컬 DNS가 최상위 도메인 DNS서버에 주소를 요청한다. </li>
                    <li> 5. 최상위 도메인 DNS서버가 naver를 보고 책임 DNS서버IP를 로컬 DNS서버에 알려준다. </li>
                    <li> 6. 로컬 DNS서버가 책임 DNS서버에게 도메인 주소를 물어본다. </li>
                    <li> 7. 책임 DNS서버가 처음 요청한 도메인 IP를 로컬 DNS서버에 알려준다. </li>
                    <li> 8. 로컬 DNS서버가 클라이언트에게 처음 요청한 도메인 IP를 알려준다. </li>
                    <li> 9. 로컬 DNS서버가 요청한 도메인 주소를 기억하고 있는다.(DNS캐싱) </li>
                  </span>
                </li>
                {/*  */}
                <li> 도메인 자원 레코드
                  <span className="mblock">
                    <li> DNS 요청은 하나이상의 레코드를 가진 메세지로 응답 </li>
                    <li> 1. 호스트이름 , 호스트이름IP , A </li>
                    <li> 2. 도메인 주소 , 책임 DNS 서버 주소 , NS  </li>
                    <li> 3. 별칭 호스트 이름, 정식 호스트이름 , CNAME </li>
                    <li> 4. 별칭 호스트 이름, 정식 메일서버이름, MX </li>
                  </span>
                </li>
                {/*  */}
                <li>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </li>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="stitle"> 원격 접속 </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ SSH - 원격 접속 터미널 <a name="SSH" style={{ visibility: "hidden" }}> SSH </a> </summary>
              <small> Secure Shell </small>
              <span className="sblock">
                <li> 보안을 중요시한 프로토콜 , 정보가 암호화 되어 전송이 된다.</li>
                <li> 원격 접속을 하는 이유는 호스팅업체나 클라우드 서버를 사용할 때 그 장소에 갈 수는 없기 때문 </li>
                <li> public key 와 private key를 이용한다.  </li>
                <li> 포트 : 22번 </li>
                <li>  </li>
                {/*  */}
                <li> SSH 과정
                  <span className="mblock">
                    <li> 1. 클라이언트에서 ssh-keygen으로 공개키와 비밀키를 생성 </li>
                    <li> 2. 클라이언트의 공개 키를 원격 서버에 전송 </li>
                    <li> 3. 클라이언트가 서버에 접속을 요청하면 서버에서는 임의의 문자열을 생성하고, 이 문자열을
                      클라이언트의 공개 키로 암호화 해서 클라이언트에게 전송 </li>
                    <li> 4. 클라이언트는 서버에서 받은 문자열을 개인키로 복호화한다. </li>
                    <li> 5. 이제부터는 원격서버와 클라이언트가 동일한 문자열을 이용하여 해시값을 구하고 해시값을 비교
                      해서 인증을 한다. </li>
                    <li> 6. 인증이 성공하면 접속가능 </li>
                  </span>
                </li>
                {/*  */}
                <li> 클라이언트에서 ssh로 접속 방법
                  <span className="mblock">
                    <li> $ ssh UserName@HostName </li>
                    <li> $ ssh -p 포트번호 UserName@HostName , #포트번호를 따로 지정하는 방법 </li>
                    <li> $ ssh-keygen , #공개키 생성 </li>
                    <li> $ cat ~/.ssh/id_rsa.pub , #공개키 확인 하는 방법 </li>
                    <li> $ ssh -L port1:host_name:port2 server_name , #서버에 설치된 서버의 포트와 연결 , (Local Port Forwarding) </li>
                    <li> $ ssh -R port1:host_name:port2 server_name , #서버에 설치된 서버의 포트와 연결 , (Remote Port Forwarding) </li>
                    <li> $  </li>
                    <li> $  </li>
                  </span>
                </li>
                {/*  */}
                <li>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </li>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ Rlogin - 원격 접속 터미널 <a name="Rlogin" style={{ visibility: "hidden" }}> Rlogin </a> </summary>
              <span className="sblock">
                <li> </li>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ Telnet - 원격 접속 터미널<a name="Telnet" style={{ visibility: "hidden" }}> Telnet </a> </summary>
              <span className="sblock">
                <li> </li>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ FTP - 파일을 교환하기 위한 프로토콜 <a name="FTP" style={{ visibility: "hidden" }}> FTP </a> </summary>
              <span className="sblock">
                <li> 인터넷상의 컴퓨터 간에 파일을 교환하기 위한 표준 프로토콜 </li>
                <li> 포트 : TCP 20,21 </li>
                <li> 21번 포트는 제어연결로 사용 , 클라이언트와 서버의 응답과 명령에 사용 , FTP세션 동안 연결 유지 </li>
                <li> 20번 포트는 데이터연결로 사용, 파일이 전송에 사용, 파일 전송이 끝나면 연결 종료 </li>
                <li>  </li>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <li> </li>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="sstitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
              <span className="sblock">
                <li> </li>
              </span>
            </details>
          </span>
          {/*  */}
        </span>
      </div>
    </>
  );
}

export default NetworkProtocol;