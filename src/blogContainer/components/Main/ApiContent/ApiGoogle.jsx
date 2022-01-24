import React from 'react';

const ApiGoogle = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 구글 로그인 API </summary>
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

                        <h2 className="h2"> ✔ 스프링 예시 </h2>
                        <li>
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
        </div>
    );
}

export default ApiGoogle;