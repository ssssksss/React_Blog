import React from 'react';

const BackendBrowserDevTool = (props) => {

  return (
    <>
      <div className="common_style" >
        <ul>
          <span className="lblock">
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ Elements 항목 <a name="Elements 항목" style={{ visibility: "hidden" }}> Elements 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Console 항목 <a name="Console 항목" style={{ visibility: "hidden" }}> Console 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Sources 항목 <a name="Sources 항목" style={{ visibility: "hidden" }}> Sources 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Network 항목 <a name="Network 항목" style={{ visibility: "hidden" }}> Network 항목 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> Headers </span>
                  <span className="mblock">
                    <details>
                      <summary className="sstitle"> ▶ General </summary>
                      <span className="sblock">
                        <li> Request URL : 사용자가 요청한 주소 </li>
                        <li> Request Method: [GET, POST] #메소드 </li>
                        <li> Status Code : [200,302]  </li>
                        <li> Remote Address : ?? </li>
                        <details>
                          <summary> Referrer Policy :  전달되는 주소의 노출정도를 정책으로 정함  </summary>
                          <small> HTTP referer : 하이퍼링크를 통해 다른 사이트로 이동시에 남는 흔적,
                            다른 사이트로 이동하면 이전의 사이트의 주소를 전달 </small>
                          <span className="mblock">
                            <small> {'<meta name="referrer" content="" /> '} </small>
                            <span className="sstitle"> content="no-referrer" </span>
                            <li> refere을 남기지 않음 </li>
                            <span className="sstitle"> content="unsafe-url" </span>
                            <li> 주소를 전체를 남김 </li>
                            <span className="sstitle"> content="origin" </span>
                            <li> 주소 전체가 아닌 도메인 주소만을 남김 </li>
                            <span className="sstitle"> content="no-referrer-when-downgrade" </span>
                            <li> 이동하는 주소가 https일 때 주소를 남김 </li>
                            <span className="sstitle"> content="strict-origin" </span>
                            <li> 이동하는 주소가 https일 때 도메인 주소를 남김 </li>
                            <span className="sstitle"> content="same-origin" </span>
                            <li> 같은 웹사이트 주소로 이동할 때만 주소를 남김 </li>
                            <span className="sstitle"> content="origin-when-cross-origin" </span>
                            <li> 웹사이트가 같을 떄는 전체주소, 다를 떄는 도메인 주소만을 남김 </li>
                            <span className="sstitle"> content="strict-origin-when-cross-origin" </span>
                            <li> https를 사용하고 웹사이트가 같으면 전체주소, 다르면 도메인주소 그리고 http
                              를 사용하면 웹사이트 주소를 남기지 않음 </li>
                          </span>
                        </details>
                      </span>
                    </details>
                    {/*  */}
                    <details>
                      <summary className="sstitle"> ▶ Response Headers </summary>
                      <span className="sblock">
                        <li> ache-Control: no-cache, no-store, max-age=0, must-revalidate </li>
                        <li> Connection: keep-alive </li>
                        <li> Content-Length: 0 </li>
                        <li> Date: Thu, 12 Aug 2021 15:46:38 GMT #날짜 </li>
                        <li> Expires: 0 </li>
                        <li> Keep-Alive: timeout=60  </li>
                        <li> Location: http://localhost:8080/ </li>
                        <li> Pragma: no-cache </li>
                        <li> Set-Cookie: JSESSIONID=4D435E9D3AF6BCCAA188BE74B8D1167D; Path=/; HttpOnly </li>
                        <li> X-Content-Type-Options: nosniff </li>
                        <li> X-Frame-Options: DENY </li>
                        <li> X-XSS-Protection: 1; mode=block </li>
                      </span>
                    </details>
                    {/*  */}
                    <details>
                      <summary className="sstitle"> ▶ Request Headers </summary>
                      <span className="sblock">
                        <li> Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9 </li>
                        <li> Accept-Encoding: gzip, deflate, br </li>
                        <li> Accept-Language: ko,en-US;q=0.9,en;q=0.8 </li>
                        <li> Cache-Control: max-age=0 </li>
                        <li> Connection: keep-alive </li>
                        <li> Content-Length: 28 </li>
                        <li> Content-Type: application/x-www-form-urlencoded </li>
                        <li> Cookie: JSESSIONID=8853C84951CDCDE9026D41B7770FB10B </li>
                        <li> Host: localhost:8080 </li>
                        <li> Origin: http://localhost:8080 </li>
                        <li> Referer: http://localhost:8080/loginForm </li>
                        <li> Sec-Fetch-Dest: document </li>
                        <li> Sec-Fetch-Mode: navigate </li>
                        <li> Sec-Fetch-Site: same-origin </li>
                        <li> Sec-Fetch-User: ?1 </li>
                        <li> Sec-GPC: 1 </li>
                        <li> Upgrade-Insecure-Requests: 1 </li>
                        <li> User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 </li>
                      </span>
                    </details>
                    {/*  */}
                    <details>
                      <summary className="sstitle"> ▶ Form Data </summary>
                      <span className="sblock">
                        <li>  </li>
                        <li>  </li>
                      </span>
                    </details>
                    {/*  */}
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle"> Preview </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle"> Response </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle"> Initiator </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle"> Timing </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle"> Cookies </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ Performance 항목 <a name="Performance 항목" style={{ visibility: "hidden" }}> Performance 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Memory 항목 <a name="Memory 항목" style={{ visibility: "hidden" }}> Memory 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Application 항목 <a name="Application 항목" style={{ visibility: "hidden" }}> Application 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Security 항목 <a name="Security 항목" style={{ visibility: "hidden" }}> Security 항목 </a> </summary>
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
                <summary className="stitle"> ▶ Lighthouse 항목 <a name="Lighthouse 항목" style={{ visibility: "hidden" }}> Lighthouse 항목 </a> </summary>
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

export default BackendBrowserDevTool;