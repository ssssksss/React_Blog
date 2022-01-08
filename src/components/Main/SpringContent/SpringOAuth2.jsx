import React, { useEffect, useRef } from 'react';

const SpringOAuth2 = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> OAuth 2.0 </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 OAuth 2.0의 정의 </h2>
                            <li> 1. 외부 서비스에서도 인증과 권한을 얻고, 서비스의 API를 사용할 수 있게 해주는 것 </li>
                            <li> 2. 산업 표준 프로토콜 , 인증 및 허가를 얻기 위한 프로토콜 </li>

                            <h2 className="h2"> 📌 OAuth 2.0의 배경 </h2>
                            <li> 1. 아이디와 비밀번호는 제공하지 않으면서 인증과 권한을 부여하는 방식을 만들기 시작, twitter에서 OAuth 1.0버전을 탄생 </li>
                            <li> 2. OAuth 1.0의 문제점 : 구현 복잡, 웹 이외의 어플리케이션 미지원, 암호화 번거로움, 인증토큰 만료되지 않음 </li>
                            <li> 3. https 필수, 표준 프로세스로 만들어짐, 다양한 인증방식, 확장성과 단순화, 인증서버분리 등 2.0으로 발전 </li>

                            <h2 className="h2"> 📌 OAuth 2.0의 요소 </h2>
                            <li> 1. client , 자원을 사용하는 어플리케이션 </li>
                            <li> 2. resource owner : 사용자 </li>
                            <li> 3. resource server(API Server) : 자원을 호스팅하는 서버 </li>
                            <li> 4. authorization server : 사용자의 동의를 받아 권한을 부여하는 서버 </li>

                            <h2 className="h2"> 📌OAuth 2.0의 사용 과정(좀 더 알아볼것)  </h2>
                            <ol>
                                <li> 로그인 요청 </li>
                                <li> 로그인 페이지 제공 </li>
                                <li> 로그인 정보를 보내기 </li>
                                <li> 인증 코드(Authoriation Code) 발급 </li>
                                <li> Callback URL로 다시 바로 정보를 보냄(바로 보낼 수 있게 처리가 됨) </li>
                                <li> Access Token 요청 </li>
                                <li> Access Token 발급 </li>
                                <li> 인증 완료, 로그인 성공 </li>
                                <li> 서비스 요청 </li>
                                <li> Access Token을 이용하여 검증하고 서비스를 제공하게 해준다. </li>
                            </ol>

                            <h2 className="h2"> 📌 OAuth 2.0의 인증 종류(4가지) </h2>
                            <div className='block4'>
                                <h3 className="h3"> 🎈 1. Authorization Code Grant </h3>
                                <li> 권한 서버에서 인증하는 방식 , 클라이언트 - 리소스서버 사이의 존재 </li>
                                <li> Access Token을 바로 클라이언트에 넘기지 않음 #???? </li>
                                <li> 로그인시에 페이지 URL에 response_type=code 로 넘김 </li>

                                <h3 className="h3"> 🎈 2. Implicit Grant</h3>
                                <li> 가장 많이 사용되는 방식 </li>
                                <li> 권한 코드 없이 바로 Access Token 발급이 되어 보안에 취약 </li>
                                <li> Public Client인 브라우저 기반의 어플리케이션이나 모바일 어플리케이션에서 이 방식을 사용하면 된다. #??? </li>
                                <li> 주로 Read only 서비스에 사용 </li>
                                <li> 로그인시에 페이지 URL에 response_type=token 로 넘김 </li>

                                <h3 className="h3"> 🎈 3. Resource Owner Password Credentials Grant </h3>
                                <li> Clinet에 아이디,비번을 저장하고 아이디,비번으로 직접 access token을 받아오는 방식 </li>
                                <li> 위험한 방식, 믿을 수 있는 API 서비스에서만 사용 </li>
                                <li> 로그인시에 API에 POST로 grant_type=password 로 넘김 </li>

                                <h3 className="h3"> 🎈 4. Client Credentials Grant </h3>
                                <li> 어플리케이션이 Confidential Client일 때 id,secret을 가지고 인증하는 방식 </li>
                                <li> 로그인시에 API에 POST로 grant_type=client_credentials 로 넘김 </li>

                            </div> <br />

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default SpringOAuth2;