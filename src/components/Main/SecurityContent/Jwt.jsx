import React, { useEffect, useRef, useState } from 'react';

const Term2 = (props) => {

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
                                <a href="#JWT 토큰 구성 = Header + Payload + Signature" className="col_p"> JWT 토큰 구성 = Header + Payload + Signature </a>
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
                            <summary className="stitle"> ▶ JWT <a name="JWT" style={{ visibility: "hidden" }}> JWT </a> </summary>
                            <small> JSON 객체로 만들어진 토큰 , 웹표준(RFC 7519) </small> <br />
                            <a href="https://jwt.io/" target="_blank"> https://jwt.io/ </a> #jwt 토큰 만들어주는 곳
                            <span className="sblock">
                                <span className="sstitle"> JWT가 만들어진 이유 </span>
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
                            <summary className="stitle"> ▶ JWT 토큰 구성 = Header + Payload + Signature  <a name="JWT 토큰 구성 = Header + Payload + Signature" style={{ visibility: "hidden" }}> JWT 토큰 구성 = Header + Payload + Signature </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Header </span>
                                <span className="mblock">
                                    <li> "alg" , "typ"  #해시알고리즘(SHA256,HMAC,RSA)과 타입(JWT)을 명시 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Payload </span>
                                <span className="mblock">
                                    <li> 사용자의 정보나 추가 데이터에 대한 설명 </li>
                                    <li> registered , private, public 클레임들이 존재 </li>
                                    <li> registered claim : iss(토큰발행자) , exp(토큰만료시간) , sub(토큰제목) , aud(토큰대상자) ,
                                        nbf(토큰활성날짜) , jti(고유식별자) </li>
                                    <li> private claim : 서버와 클라이언트 협의 간의 사용되는 클레임 </li>
                                    <li> public claim : 사용자 정의 클레임 </li>
                                    <small> {'{'} </small> <br />
                                    <small> "iss": "http://naver.com", </small> <br />
                                    <small> "aud": "https://user.com", </small> <br />
                                    <small> "exp": "1234567890", </small> <br />
                                    <small>  </small> <br />
                                    <small> {'}'} </small> <br />
                                </span>
                                {/*  */}
                                <span className="sstitle"> Signature </span>
                                <span className="mblock">
                                    <li> 시크릿 키를 포함하여 암호화 되어 있음 </li>
                                    <li> {' HMACSHA256( '} </li>
                                    <li className="tab_4"> {' base64UrlEncode(header) + "." + '} </li>
                                    <li className="tab_4"> {' base64UrlEncode(payload). '} </li>
                                    <li className="tab_4"> {' secret) '} </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ JWT 토큰 작동 방식 <a name="JWT 토큰 작동 방식" style={{ visibility: "hidden" }}> JWT 토큰 작동 방식 </a> </summary>
                            <span className="sblock">
                                <ol>
                                    <li> 사용자가 로그인 정보 입력 </li>
                                    <li> 서버에 로그인 정보를 보냄 </li>
                                    <li> 서버는 로그인 정보를 받아서 사용자의 고유 ID 값을 설정하고 Payload에 기타 정보를 넣고
                                        JWT토큰의 유효기간을 설정하고 Secret Key로 암호화하고 토큰을 발급 </li>
                                    <small> JWT토큰은 static변수(바로사용)와 local stroage에 저장, 로그아웃시 local stroage에서 삭제  </small>
                                    <li> 클라이언트는 서버에 요청할 떄 Authorization header나 URL에 JWT토큰을 담아서 전달 </li>
                                    <li> 서버는 JWT Signature을 Secret Key로 복호화해서 사용자 정보와 유효기간을 확인  </li>
                                    <li> Payload에서 사용자의 정보에 맞는 데이터를 가져온다.  </li>
                                </ol>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ JWT의 장단점 <a name="JWT의 장단점" style={{ visibility: "hidden" }}> JWT의 장단점 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 장점 </span>
                                <span className="mblock">
                                    <li> 서버에 인증 저장소를 만들어 둘 필요가 없어 서버 자원과 비용을 절감 , 트래픽 부담이 적음 </li>
                                    <li> 수평 스케일이 용이? , 디버깅 및 관리가 용이? </li>
                                    <li> REST 서비스로 제공이 가능? </li>
                                    <li> 정보가 조작이 되었는지 검증을 함으로써 안정성이 보장 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 단점 </span>
                                <span className="mblock">
                                    <li> 토큰이 클라이언트에게 있으므로 DB에서 클라이언트 정보를 바꾸어도 토큰까지 바꿀 수는 없음 </li>
                                    <li> 필드가 많이 추가되면 토큰의 크기가 커질 수 있음 </li>
                                    <li>  </li>
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

export default Term2;