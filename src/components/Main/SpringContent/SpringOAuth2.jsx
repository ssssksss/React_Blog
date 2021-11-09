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


                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className="block3">
                                    <li> <h3 className="h3">  </h3>
                                        <li>  </li>
                                        <div className='block4'>
                                            <li> </li>
                                        </div>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Google API </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 Google API 설정하기 </h2>
                            <li> 1. <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer"> Google API 설정하기 </a> </li>
                            <li> 2. 좌측 메뉴 API 및 서비스 클릭 </li>
                            <li> 3. 상단에 육각형 모양 3개를 클릭해서 새프로젝트 생성  </li>
                            <li> 4. 좌측 메뉴에 "OAuth 동의 화면" 클릭하고 User Type 체크하기  </li>
                            <li> 5. 그다음 화면에서 앱 이름만 적기(test-oauth)  </li>
                            <li> 6. 좌측 메뉴 "사용자 인증 정보" - "사용자 인증 정보 만들기" 클릭 - OAuth 클라이언트 ID 클릭
                                - 애플리케이션 유형에서 웹 어플리케이션 선택 - 이름* 바꾸기(test-oauth) -
                                승인된 리디렉션 URI 추가(http://localhost:8080/login/oauth2/code/google) </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3' style={{ listStyle: "none" }}>
                                    <h3 className="h3"> 🎈 application.yml </h3>
                                    <li> security:
                                        <li> oauth2:
                                            <li> client:
                                                <li> registration:
                                                    <li> google:
                                                        <li> client-id: 클라이언트 ID </li>
                                                        <li> client-secret: 클라이언트 보안 비밀번호 </li>
                                                        <li> scope:
                                                            <li> - email </li>
                                                            <li> - profile </li>
                                                        </li>
                                                    </li>
                                                </li>
                                            </li>
                                        </li>
                                    </li> <br />

                                    <h3 className="h3"> 🎈 html 코드 </h3>
                                    <li> {'<a href="/oauth2/authorization/google"> 구글 로그인 </a>'}
                                        <small> oauth2를 사용할 경우 경로가 정해져 있으므로 변경하지 않고 그대로 사용 </small> </li>
                                    <li> </li> <br />

                                    <h3 className="h3"> 🎈 CustomOAuth2UserService </h3>
                                    <li> @Service public class CustomOAuth2UserService extends DefaultOAuth2UserService {'{'}
                                        <li> @Override public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {'{'}
                                            <li> System.out.println("1: "+ userRequest); </li>
                                            <li> System.out.println("2: "+userRequest.getAccessToken().getTokenValue()); </li>
                                            <li> System.out.println("3: "+userRequest.getAdditionalParameters()); </li>
                                            <li> System.out.println("4: "+userRequest.getClientRegistration()); //유저의 아이디 등등 </li>
                                            <li> System.out.println("5: "+super.loadUser(userRequest).getAttributes()); </li>
                                            <li> return super.loadUser(userRequest);  </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <li> </li> <br />

                                    <h3 className="h3"> 🎈 CustomWebSecurityConfig </h3>
                                    <li> @EnableWebSecurity @Configuration public class CustomWebSecurityConfig extends WebSecurityConfigurerAdapter {'{'}
                                        <li> @Override protected void configure(HttpSecurity http) throws Exception {'{'}
                                            <li> .oauth2Login() </li>
                                            <li> .loginPage("/loginForm")  </li>
                                            <li> .userInfoEndpoint()  </li>
                                            <li> .userService(customOAuth2UserService); //로그인 후에 처리할 서비스 작성 </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <li> </li> <br />

                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Facebook API </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 Facebook API 설정하기 </h2>
                            <li> 0. <a href="https://developers.facebook.com/?locale=ko_KR" target="_blank" rel="noopener noreferrer"> 페이스북 개발자 홈페이지  </a> </li>
                            <li> 1. 페이스북 개발자 홈페이지 로그인 </li>
                            <li> 2. 처음이면 우측 상단에 시작하기 아니면 내 앱 누르기 </li>
                            <li> 3. 처음이면 앱 만들기 버튼 클릭 </li>
                            <li> 4. 앱 유형 "없음" 선택 </li>
                            <li> 5. 좌측메뉴 fackbook 로그인 설정 "빠른시작" </li>
                            <li> 6. 웹 - 사이트 URL - http://localhost:8080  입력 </li>
                            <li> 7. 좌측 메뉴 설정 - 기본 설정 </li>
                            <li> 8. application.yml에 설정하기 </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 application.yml </h3>
                                    <li> security:
                                        <li> oauth2:
                                            <li> client:
                                                <li> registration:
                                                    <li> facebook:
                                                        <li> client-id: 클라이언트 ID </li>
                                                        <li> client-secret: 클라이언트 보안 비밀번호 </li>
                                                        <li> scope:
                                                            <li> - email </li>
                                                            <li> - pulic_profile </li>
                                                        </li>
                                                    </li>
                                                </li>
                                            </li>
                                        </li>
                                    </li> <br />

                                    <h3 className="h3"> 🎈 html 코드 </h3>
                                    <li> {'<a href="/oauth2/authorization/facebook"> 페이스북 로그인 </a>'} </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Naver API </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 Naver API 설정하기 </h2>
                            <li> <a href="https://developers.naver.com/main/" target="_blank" rel="noopener noreferrer"> 네이버 개발자 센터 </a> </li>
                            <li> <a href="https://developers.naver.com/docs/login/api/api.md" target="_blank" rel="noopener noreferrer"> 네이버 API 문서 </a> </li>
                            <li> 상단 메뉴 Application 클릭 </li>
                            <li> 애플리케이션 등록 </li>
                            <li> 애플리케이션 이름 : 아무거나 </li>
                            <li> 사용 API : 네아로 , 필요한거 체크 </li>
                            <li> 환경 추가 : PC 웹 , 서비스 URL을 사용할것입력 , 콜백 URL을 아무거나입력  </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 application.yml </h3>
                                    <li> security:
                                        <li> oauth2:
                                            <li> client:
                                                <li> registration:
                                                    <li> naver:
                                                        <li> client-id: 클라이언트 ID </li>
                                                        <li> client-secret: 클라이언트 보안 비밀번호 </li>
                                                        <li> scope:
                                                            <li> - email </li>
                                                            <li> - pulic_profile </li>
                                                        </li>
                                                        <li> client-name: Naver </li>
                                                        <li> authorization-grant-type: [authorization_code,refresh_token,delete] #발급,갱신,삭제 </li>
                                                        <li> redirect-uri: 네이버아이디로 로그인 Callback URL  #html 로그인폼에서 사용하는 경로 </li>
                                                    </li>
                                                </li>
                                                <li> provider:
                                                    <li> naver:
                                                        <li> authorization-uri: https://nid.naver.com/ouath2.0/authorize <small> # 네이버 로그인창이 뜨게 만듬 </small> </li>
                                                        <li> token-uri: https://nid.naver.com/oauth2.0/toke <small> # 토큰을 받기 위해 사용</small> </li>
                                                        <li> user-info-uri: https://openapi.naver.com/v1/nid/me <small> # 프로필 API를 호출할 때 사용 </small> </li>
                                                        <li> user-name-attribute: response <small> # 응답을 받을 때</small> </li>
                                                    </li>
                                                </li>
                                            </li>
                                        </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 html </h3>
                                        <li> {'<a href="네이버아이디로 로그인 Callback URL 경로"> 네이버 로그인 </a>'} </li>
                                        <small> 네이버는 경로를 본인이 적기 때문에 경로 설정을 잘 해주어야 한다. #localhost:8080 은 빼고 사용 </small>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 CustomOAuth2UserService </h3>
                                        <li> @Service public class CustomOAuth2UserService extends DefaultOAuth2UserService {'{'}
                                            <li> @Override public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException
                                                <li> System.out.println("1: "+ userRequest); </li>
                                                <li> System.out.println("2: "+userRequest.getAccessToken().getTokenValue()); </li>
                                                <li> System.out.println("3: "+userRequest.getAdditionalParameters()); </li>
                                                <li> System.out.println("4: "+userRequest.getClientRegistration()); //유저의 아이디 등등 </li>
                                                <li> System.out.println("5: "+super.loadUser(userRequest).getAttributes()); </li>
                                                <li> return super.loadUser(userRequest);  </li>
                                            </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>

                                    <li> <h3 className="h3"> 🎈 CustomWebSecurityConfig </h3>
                                        <li> @EnableWebSecurity </li>
                                        <li> @Configuration  </li>
                                        <li> public class CustomWebSecurityConfig extends WebSecurityConfigurerAdapter {'{'}
                                            <li> @Override </li>
                                            <li> protected void configure(HttpSecurity http) throws Exception {'{'}
                                                <li> .oauth2Login() </li>
                                                <li> .loginPage("/loginForm")  </li>
                                                <li> .userInfoEndpoint()  </li>
                                                <li> .userService(customOAuth2UserService); //로그인 후에 처리할 서비스 작성 </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>


                                </div>
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default SpringOAuth2;