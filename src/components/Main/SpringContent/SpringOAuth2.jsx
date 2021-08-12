import React, { useEffect, useRef, useState } from 'react';

const SpringOAuth2 = (props) => {

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
                                <a href="#" className="col_p"> OAuth 2.0 이란? </a>
                                <a href="#Google API" className="col_p"> Google API </a>
                                <a href="#Facebook API" className="col_p"> Facebook API </a>
                                <a href="#Naver API" className="col_p"> Naver API </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#에러" className="col_p"> 에러 </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> OAuth </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ OAuth 2.0 이란? <a name="OAuth 2.0 이란?" style={{ visibility: "hidden" }}> OAuth 2.0 이란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> OAuth 2.0의 정의 </span>
                                <span className="mblock">
                                    <li> 1. 외부 서비스에서도 인증과 권한을 얻고, 서비스의 API를 사용할 수 있게 해주는 것 </li>
                                    <li> 2. 산업 표준 프로토콜 , 인증 및 허가를 얻기 위한 프로토콜 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> OAuth 2.0의 배경 </span>
                                <span className="mblock">
                                    <li> 1. 아이디와 비밀번호는 제공하지 않으면서 인증과 권한을 부여하는 방식을 만들기 시작, twitter에서 OAuth 1.0버전을 탄생 </li>
                                    <li> 2. OAuth 1.0의 문제점 : 구현 복잡, 웹 이외의 어플리케이션 미지원, 암호화 번거로움, 인증토큰 만료되지 않음 </li>
                                    <li> 3. https 필수, 표준 프로세스로 만들어짐, 다양한 인증방식, 확장성과 단순화, 인증서버분리 등 2.0으로 발전 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> OAuth 2.0의 요소 </span>
                                <span className="mblock">
                                    <li> 1. client , 자원을 사용하는 어플리케이션 </li>
                                    <li> 2. resource owner : 사용자 </li>
                                    <li> 3. resource server(API Server) : 자원을 호스팅하는 서버 </li>
                                    <li> 4. authorization server : 사용자의 동의를 받아 권한을 부여하는 서버 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> OAuth 2.0의 사용 과정(약간의 차이는 있을 수 있음) </span>
                                <span className="mblock">
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
                                </span>
                                {/*  */}
                                <span className="sstitle"> OAuth 2.0의 인증 종류(4가지) </span>
                                <span className="mblock">
                                    <li className="sstitle"> 1. Authorization Code Grant </li>
                                    <span className="sblock">
                                        <li> 권한 서버에서 인증하는 방식 , 클라이언트 - 리소스서버 사이의 존재 </li>
                                        <li> Access Token을 바로 클라이언트에 넘기지 않음 #???? </li>
                                        <li> 로그인시에 페이지 URL에 response_type=code 로 넘김 </li>
                                    </span>
                                    <li className="sstitle"> 2. Implicit Grant </li>
                                    <span className="sblock">
                                        <li> 가장 많이 사용되는 방식 </li>
                                        <li> 권한 코드 없이 바로 Access Token 발급이 되어 보안에 취약 </li>
                                        <li> Public Client인 브라우저 기반의 어플리케이션이나 모바일 어플리케이션에서 이 방식을 사용하면 된다. #??? </li>
                                        <li> 주로 Read only 서비스에 사용 </li>
                                        <li> 로그인시에 페이지 URL에 response_type=token 로 넘김 </li>
                                    </span>
                                    <li className="sstitle"> 3. Resource Owner Password Credentials Grant </li>
                                    <span className="sblock">
                                        <li> Clinet에 아이디,비번을 저장하고 아이디,비번으로 직접 access token을 받아오는 방식 </li>
                                        <li> 위험한 방식, 믿을 수 있는 API 서비스에서만 사용 </li>
                                        <li> 로그인시에 API에 POST로 grant_type=password 로 넘김 </li>
                                        <li>  </li>
                                    </span>
                                    <li className="sstitle"> 4. Client Credentials Grant </li>
                                    <span className="sblock">
                                        <li> 어플리케이션이 Confidential Client일 떄 id,secret을 가지고 인증하는 방식 </li>
                                        <li> 로그인시에 API에 POST로 grant_type=client_credentials 로 넘김 </li>
                                    </span>
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
                            <summary className="stitle"> ▶ Google API <a name="Google API" style={{ visibility: "hidden" }}> Google API </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Google API 설정하기 </span>
                                <span className="mblock">
                                    <li> 1.  <a href="https://console.cloud.google.com/" target="_blank"> Google API 설정하기 </a> </li>
                                    <li> 2. 좌측 메뉴 API 및 서비스 클릭 </li>
                                    <li> 3. 상단에 육각형 모양 3개를 클릭해서 새프로젝트 생성  </li>
                                    <li> 4. 좌측 메뉴에 "OAuth 동의 화면" 클릭하고 User Type 체크하기  </li>
                                    <li> 5. 그다음 화면에서 앱 이름만 적기(test-oauth)  </li>
                                    <li> 6. 좌측 메뉴 "사용자 인증 정보" - "사용자 인증 정보 만들기" 클릭 - OAuth 클라이언트 ID 클릭
                                        - 애플리케이션 유형에서 웹 어플리케이션 선택 - 이름* 바꾸기(test-oauth) -
                                        승인된 리디렉션 URI 추가(http://localhost:8080/login/oauth2/code/google) </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>security: </li>
                                    <li>&nbsp;oauth2: </li>
                                    <li>&nbsp;&nbsp;client: </li>
                                    <li>&nbsp;&nbsp;&nbsp;registration: </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;google:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-id: 클라이언트 ID  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-secret: 클라이언트 보안 비밀번호  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scope:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- email  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- profile  </li>
                                </span>
                            </span>

                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 코드 작성 </span>
                                <span className="mblock">
                                    <details>
                                        <summary> html 코드 </summary>
                                        <span className="sblock">
                                            <span className="sstitle">  </span>
                                            <span className="mblock">
                                                <li> {'<a href="/oauth2/authorization/google"> 구글 로그인 </a>'} </li>
                                                <small> oauth2를 사용할 경우 경로가 정해져 있으므로 변경하지 않고 그대로 사용 </small>
                                            </span>
                                        </span>
                                        {/*  */}
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary> @Service public class CustomOAuth2UserService <small> extends DefaultOAuth2UserService </small> </summary>
                                        <span className="sblock">
                                            <span className="sstitle"> @Override <br /> public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException </span>
                                            <span className="mblock">
                                                <li> System.out.println("1: "+ userRequest); </li>
                                                <li> System.out.println("2: "+userRequest.getAccessToken().getTokenValue()); </li>
                                                <li> System.out.println("3: "+userRequest.getAdditionalParameters()); </li>
                                                <li> System.out.println("4: "+userRequest.getClientRegistration()); //유저의 아이디 등등 </li>
                                                <li> System.out.println("5: "+super.loadUser(userRequest).getAttributes()); </li>
                                                <li> return super.loadUser(userRequest);  </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary> @EnableWebSecurity @Configuration public class CustomWebSecurityConfig <small> extends WebSecurityConfigurerAdapter </small> </summary>
                                        <small>  </small>
                                        <span className="sblock">
                                            <span className="sstitle"> @Override protected void configure(HttpSecurity http) throws Exception </span>
                                            <span className="mblock">
                                                <li> .oauth2Login() </li>
                                                <li> .loginPage("/loginForm")  </li>
                                                <li> .userInfoEndpoint()  </li>
                                                <li> .userService(customOAuth2UserService); //로그인 후에 처리할 서비스 작성 </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary>  </summary>
                                        <small>  </small> <br />
                                        <small>  </small>
                                        <span className="sblock">
                                            <span className="sstitle">  </span>
                                            <span className="mblock">
                                                <li>  </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle">  </span>
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
                            <summary className="stitle"> ▶ Facebook API <a name="Facebook API" style={{ visibility: "hidden" }}>  Facebook API </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Facebook API 설정하기 </span>
                                <span className="mblock">
                                    <li> 0. <a href="https://developers.facebook.com/?locale=ko_KR" target="_blank"> 페이스북 개발자 홈페이지 </a> </li>
                                    <li> 1. 페이스북 개발자 홈페이지 로그인 </li>
                                    <li> 2. 처음이면 우측 상단에 시작하기 아니면 내 앱 누르기 </li>
                                    <li> 3. 처음이면 앱 만들기 버튼 클릭 </li>
                                    <li> 4. 앱 유형 "없음" 선택 </li>
                                    <li> 5. 좌측메뉴 fackbook 로그인 설정 "빠른시작" </li>
                                    <li> 6. 웹 - 사이트 URL - http://localhost:8080  입력 </li>
                                    <li> 7. 좌측 메뉴 설정 - 기본 설정 </li>
                                    <li> 8. application.yml에 설정하기 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>security: </li>
                                    <li>&nbsp;oauth2: </li>
                                    <li>&nbsp;&nbsp;client: </li>
                                    <li>&nbsp;&nbsp;&nbsp;registration: </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;facebook:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-id: 앱ID  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-secret: 앱 시크릿 코드  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scope:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- email  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pulic_profile  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 코드 작성 </span>
                                <span className="mblock">
                                    <li> html : {'<a href="/oauth2/authorization/facebook"> 페이스북 로그인 </a>'} </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ Naver API <a name="Naver API" style={{ visibility: "hidden" }}> Naver API </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Naver API 설정하기 </span>
                                <a href="https://developers.naver.com/docs/login/api/api.md" target="_blank"> 네이버 API 문서 </a>
                                <span className="mblock">
                                    <li> <a href="https://developers.naver.com/main/" target="_blank"> https://developers.naver.com/main/ </a> </li>
                                    <li> 상단 메뉴 Application 클릭 </li>
                                    <li> 애플리케이션 등록 </li>
                                    <li> 애플리케이션 이름 : 아무거나 </li>
                                    <li> 사용 API : 네아로 , 필요한거 체크 </li>
                                    <li> 환경 추가 : PC 웹 , 서비스 URL을 사용할것입력 , 콜백 URL을 아무거나입력  </li>
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>security: </li>
                                    <li>&nbsp;oauth2: </li>
                                    <li>&nbsp;&nbsp;client: </li>
                                    <li>&nbsp;&nbsp;&nbsp;registration: </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;naver:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-id: Client ID  #애플리케이션 등록시 발급받은 Client ID 값 </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-secret: Client Secret #애플리케이션 등록 시 발급받은 Client secret 값 </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scope:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- email  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-name: Naver  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;authorization-grant-type: [authorization_code,refresh_token,delete] #발급,갱신,삭제 </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;redirect-uri: 네이버아이디로 로그인 Callback URL  #html 로그인폼에서 사용하는 경로 </li>
                                    <li>  </li>
                                    <li>&nbsp;&nbsp;&nbsp;provider:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;naver:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;authorization-uri: https://nid.naver.com/ouath2.0/authorize  #네이버 로그인창이 뜨게 만듬</li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token-uri: https://nid.naver.com/oauth2.0/token #토큰을 받기 위해 사용  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user-info-uri: https://openapi.naver.com/v1/nid/me #프로필 API를 호출할 떄 사용  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user-name-attribute: response #응답을 받을 때   </li>
                                    <li>  </li>
                                </span>
                            </span>
                            {/*  */}
                            <span className="sblock">
                                <span className="sstitle"> 코드 작성 </span>
                                <span className="mblock">
                                    <details>
                                        <summary> html 코드 </summary>
                                        <span className="sblock">
                                            <span className="sstitle">  </span>
                                            <span className="mblock">
                                                <li> {'<a href="네이버아이디로 로그인 Callback URL 경로"> 네이버 로그인 </a>'} </li>
                                                <small> 네이버는 경로를 본인이 적기 때문에 경로 설정을 잘 해주어야 한다. #localhost:8080 은 빼고 사용 </small>
                                            </span>
                                        </span>
                                        {/*  */}
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary> @Service public class CustomOAuth2UserService <small> extends DefaultOAuth2UserService </small> </summary>
                                        <span className="sblock">
                                            <span className="sstitle"> @Override <br /> public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException </span>
                                            <span className="mblock">
                                                <li> System.out.println("1: "+ userRequest); </li>
                                                <li> System.out.println("2: "+userRequest.getAccessToken().getTokenValue()); </li>
                                                <li> System.out.println("3: "+userRequest.getAdditionalParameters()); </li>
                                                <li> System.out.println("4: "+userRequest.getClientRegistration()); //유저의 아이디 등등 </li>
                                                <li> System.out.println("5: "+super.loadUser(userRequest).getAttributes()); </li>
                                                <li> return super.loadUser(userRequest);  </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary> @EnableWebSecurity @Configuration public class CustomWebSecurityConfig <small> extends WebSecurityConfigurerAdapter </small> </summary>
                                        <small>  </small>
                                        <span className="sblock">
                                            <span className="sstitle"> @Override protected void configure(HttpSecurity http) throws Exception </span>
                                            <span className="mblock">
                                                <li> .oauth2Login() </li>
                                                <li> .loginPage("/loginForm")  </li>
                                                <li> .userInfoEndpoint()  </li>
                                                <li> .userService(customOAuth2UserService); //로그인 후에 처리할 서비스 작성 </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary>  </summary>
                                        <small>  </small> <br />
                                        <small>  </small>
                                        <span className="sblock">
                                            <span className="sstitle">  </span>
                                            <span className="mblock">
                                                <li>  </li>
                                            </span>
                                        </span>
                                    </details>
                                    {/*  */}
                                </span>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶   API <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> API 설정하기 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>security: </li>
                                    <li>&nbsp;oauth2: </li>
                                    <li>&nbsp;&nbsp;client: </li>
                                    <li>&nbsp;&nbsp;&nbsp;registration: </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;facebook:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-id: 앱ID  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client-secret: 앱 시크릿 코드  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scope:  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- email  </li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pulic_profile  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 코드 작성 </span>
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
                            <summary className="stitle"> ▶   API <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> API 설정하기 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 코드 작성 </span>
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
                            <summary className="stitle"> ▶   API <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> API 설정하기 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> application.yml </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 코드 작성 </span>
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
                            <summary className="stitle"> ▶ 에러  <a name="에러" style={{ visibility: "hidden" }}> 에러 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> You don't have permission to access /ouath2.0/authorize on this server. </span>
                                <span className="mblock">
                                    <li> authorization-uri: https://nid.naver.com/ouath2.0/authorize 부분에서 ouath2.0를 잘못 입력 </li>
                                    <li> ouath2.0를 oauth2.0으로 수정함...^_^;; </li>
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
                </span>
            </div>
        </>
    );
}

export default SpringOAuth2;