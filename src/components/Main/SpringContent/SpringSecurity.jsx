import React, { useEffect, useRef } from 'react';

const HtmlTest = (props) => {

  return (
    <>
      <div className="common_style">



        <div className='block1'>
          <details>
            <summary> Spring Security 설명 </summary>
            <div className='block2'>

              <h2 className="h2"> 📌 설명 </h2>
              <li> 서버가 시작되면 Spring Security 초기화 및 보안 설정 발생 </li>
              <li> 모든 요청이 인증이 되어야 자원에 접근이 가능 </li>
              <li> form로그인 방식과 httpbasic로그인 방식을 제공한다. </li>
              <li> 기본적인 로그인 페이지를 제공한다. </li>
              <li> 기본 계정 user와 비번 제공 </li>
              <li> application.properties에 설정이 가능하다. </li>
              <li> 계정추가, 권한추가, DB연동등 하지 않으면 사용을 할 수 없게 만듬 </li>
              <li> 사용자의 인증,권한,보안 처리를 간단하게 구현 </li>
              <li> 인증방식 : credential방식(사용자명,비번) , 이중인증(개인정보인증+추가인증(OTP) , ) </li>
              <li> 1. 스프링 시큐리티에서 인증이 된 객체인지 일단 확인한다. </li>
              <li> 2. 인증이 된 객체라면 그 다음 어떤 경로에 접근 권한이 있는 객체인지를 확인한다. </li>
              <li> 3. 권한이 있다면 동작을 할 수 있게 하고, 없다면 동작을 할 수 없게 막는다. </li>
              <li> 필터 방식으로 작동 </li>
              <h2 className="h2"> 📌 관련 용어 </h2>
              <li> Principal(접근주체): 보호된 대상에 접근하는 대상 </li>
              <li> Credential(비밀번호): Resource에 접근하는 대상의 비밀번호 </li>
              <li> Authentication(인증): 현재 유저가 누구인지 확인, 작업을 수행할 수 있는지 여부를 판단 </li>
              <li> Authorize(인가): 현재 유저가 어떤 서비스,페이지에 접근할 수 있는 권한이 있는지 검사 </li>
              <li> Authority(권한): 특정 작어에 수행 권한이 있는지 판단 (GUEST,USER,MEMBER,ADMIN)
                <li> 웹 권한, 메소드호출, 도메인 인스턴스 </li>
              </li>

              <h2 className="h2"> 📌 스프링 부트 시큐리티 추가 </h2>
              <li> gradle
                <li> implementation 'org.springframework.boot:spring-boot-starter-security' </li>
                <li> implementation 'org.springframework.security:spring-security-test' </li>
              </li>

            </div>
          </details>
        </div>


        <div className='block1'>
          <details>
            <summary> Spring Security 설정 클래스 </summary>
            <div className='block2'>

              <h2 className="h2"> 📌 설명 </h2>
              <li> security관련 설정을 하는 곳 </li>
              <li> 2 </li>
              <li> 3 </li>

              <h2 className="h2"> ✔ 설정코드설명 {'&'} 예시 </h2>
              <li> 소제목
                <div className="block3">
                  <li> <h3 className="h3">  </h3>
                    <li> WebSecurityConfig [Custom] </li>
                    <li> @Configuration </li>
                    <li> @EnableWebSecurity  <small> # springSecurityFilterChain에 등록 , 스프링 시큐리티 활성화 </small> </li>
                    <li> @EnableGlobalMethodSecurity(prePostEnabled = true) <small> # Controller에서 @PreAuthorize 를 사용해서 특정 페이지에 권한 설정을 할 수 있음 </small>  </li>
                    <li> public class WebSecurityConfig extends WebSecurityConfigurerAdapter {'{'}

                      <li> </li> <br />
                      <h3 className="h3"> 🎈 시큐리티 필터 체인 관련 설정, 리소스 접근 제외할 경로 설정 </h3>
                      <div className="block4">
                        <li> @Override </li>
                        <li> public void configure(WebSecurity web) throws Exception {'{'}
                          <li> web.ignoring().antMatchers("/.css/**","/.js/**","/.img/**","/.lib/**");  </li>
                        </li>
                        <li> {'}'} </li>
                      </div>

                      <li> </li> <br />
                      <h3 className="h3"> 🎈 인증, 로그인, 로그아웃 등 설정 , securityconfig 파일에 대부분 설정을 여기에서 한다. </h3>
                      <div className="block4">


                        <li> protected void configure(HttpSecurity http) throws Exception {'{'}

                          <li> </li> <br />
                          <li> http.csrf().disable() <small> # csrf(보안) 비활성화 </small> </li>

                          <li> </li> <br />
                          <li> <h4> 🔍 세션 관련 (좀더 알아 볼것) </h4> </li>
                          <li> http.sessionManagement() <small> # 세션 관리 </small>
                            <li> .maximumSessions(1) <small> # 최대 세션 갯수 </small> </li>
                            <li> .maxSessionsPreventsLogin(true) </li>
                            <li> .expiredUrl("/경로") <small> # 세션이 만료되었을 경우 </small> </li>
                            <li> .sessionRegistry(sessionRegistry) </li>
                            <li> .sessionFixation().changeSessionId() </li>
                            <li>.invalidSessionUrl("/경로")</li>
                            <li>  </li>
                          </li> <br />

                          <li> <h4> 🔍 요청한 경로에 대해서 인증과 접근 권한이 있는지 설정하는 곳 </h4> </li>
                          <li> http.authorizeRequests() <small> # 요청에 대한 권한 설정 </small>
                            <li> .antMatchers("/경로").authenticated() <small> # 인증된 사용자만 접근가능 </small> </li>
                            <li> .antMatchers("/**").permitAll() <small> # 모든 경로 인증없이 허용 </small> </li>
                            <li> .antMatchers(HttpMethod.POST,"/**").permitAll() <small> # POST방식으로 접근할 때 모든 경로 인증없이 허용 </small> </li>
                            <li> .antMatchers("/경로").hasRole("[GUEST,USER,MEMER,ADMIN]") <small> # 권한이 있어야 경로로 접속가능 </small> </li>
                            <li> .antMatchers("/경로").hasAnyRole("[GUEST,USER,MEMER,ADMIN]") <small> # 권한 중 1개를 가지고있어야 접속가능 </small> </li>
                            <li> .antMatchers("/경로").hasAuthority("ROLE_[GUEST,USER,MEMER,ADMIN]") <small> # 권한이 있어야 경로로 접속가능 </small> </li>
                            <li> .antMatchers("/경로").hasAnyAuthority("ROLE_[GUEST,USER,MEMER,ADMIN]") <small> # 권한 중 1개를 가지고있어야 접속가능 </small> </li>
                            <li> .antMatchers("/경로").access("hasRole('ADMIN')") <small> # SpEL 표현식 결과에 따라 접근 </small> </li>
                            <li> .antMatchers("/경로").hasIpAddress() <small> # 특정 IP 주소를 가지는 사용자만 접근 할 수 있다. </small> </li>
                            <li> .antMatcher("/경로").denyAll <small> # 모두 접근 불가 </small> </li>
                            <li> .antMatcher("/경로").anonymous() <small> # 인증이 없는 사용자 접근 가능 </small> </li>
                            <li> .antMatcher("/경로").isRememberMe() <small> # Remember-me기능으로 로그인한 사용자 접근 가능 </small> </li>
                            <li> .antMatcher("/경로").isAuthenticated() <small> # 인증된 사용자만 접근 가능 </small> </li>
                            <li> .antMatcher("/경로").isFullyAuthenticated() <small> # 익명의 사용자가 아니고 Remember-me로 로그인하지 않은 사용자 접근 가능 </small> </li>
                            <li> .anyRequest().authenticated(); <small> # 이외에 다른 요청들은 모두 인증이 필요 </small> </li>
                          </li>
                          <li>  </li> <br />

                          <li> <h4> 🔍 spring security login관련 보안 설정이다. (완벽하게 어떤 과정을 거치는지는 공부를 더 해보아야 한다.) </h4> </li>
                          <li> http.formLogin() <smll> # 로그인 설정 </smll>
                            <li> .loginPage("/경로")  <small> # 커스텀 로그인 페이지 경로와 로그인 인증 경로 등록, default=/login</small> </li>
                            <li> .loginProcessingUrl("/do경로") <small> # 로그인 처리할 경로, default=/login</small>   </li>
                            <li> .defaultSuccessUrl("/경로") <small> # 로그인이 성공할 경우 리다이렉트 주소, default=/ </small>  </li>
                            <li> .usernameParameter("파라미터명") <small> # 유저의 이름 파라미터 , default=username </small> </li>
                            <li> .passwordParameter("파라미터명") <small> # 유저의 비번 파라미터 , default=password </small> </li>
                            <li> .successHandler(new SuccessHandler() {'{'} <small> # 로그인 성공시 내부 클래스를 이용해서 처리 메소드를 작성, 따로 클래스를 만들고 상속 후 메소드를 처리해도 된다. </small>
                              <li> .failureUrl() <small> # default=/login?error  </small> </li>
                              <li> @Override </li>
                              <li> public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {'{'}
                                <li> response.sendRedirect("/"); </li>
                              </li>
                              <li> {'}'} </li>
                            </li>
                            <li> {'})'} </li>
                            <li> .failureHandler(new failureHandler() {'{'} <small> # 로그인 실패시 내부 클래스를 이용해서 처리 메소드를 작성, 따로 클래스를 만들고 상속 후 메소드를 처리해도 된다. </small>
                              <li> @Override </li>
                              <li> public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {'{'}
                                <li> response.sendRedirect("/"); </li>
                              </li>
                              <li> {'}'} </li>
                            </li>
                            <li> {'})'} </li>
                            <li> .permitAll(); <small> # 꼭 있어도 되는것은 아닌것으로 기억 </small> </li>
                          </li>
                          <li>  </li> <br />

                          <li> <h4> 🔍 spring security logout관련 보안 설정이다. </h4> </li>
                          <li> http.logout() <small> # </small> 로그아웃 설정
                            <li> .logoutUrl("/do경로") <small> # 로그아웃을 요청할 경로  ,기본값은 ("/logout")</small>   </li>
                            <li> .logoutRequestMatcher(new AntPathRequestMatcher("/logout")) <small> # 로그아웃 경로를 지정합니다. </small>  </li>
                            <li> .logoutSuccessUrl("/경로") <small> # 로그아웃이 성공할 경우 이동할 경로 , 기본값은 ("/login?logout")? </small>  </li>
                            <li> .invalidateHttpSession(true) <small> # 로그아웃 성공 시 세션을 제거 </small>  </li>
                            <li> .deleteCookies("JSESSIONID","SOME","OTHER","COOKIES") <small> # 로그아웃시 쿠키 제거 </small> </li>
                          </li>
                          <li>  </li> <br />

                          <li> <h4> 🔍 아래는 나중에 정리 </h4> </li>
                          <li> http.exceptionHandling() <small> # </small>
                            <li> .accessDeniedPage("/경로" 혹은 커스텀메소드) <small> # 권한이 없는 사용자가 접근하면 이동할 경로 지정 </small>  </li>
                            <li> .authenticationEntryPoint(커스텀메소드) <small> # </small> </li>
                          </li>
                          <li> .and() </li>
                          <li> .addFilter(커스텀필터메소드) <small> # 필터 구현체를 등록하여 필터 처리 </small>  </li>
                          <li> .and() </li>
                          <li> .oauth2Login() <small> # Oauth 로그인 설정 </small>
                            <li> .loginPage("/loginForm") <small> # </small> </li>
                            <li> .userInfoEndpoint() <small> # </small> </li>
                            <li> .userService(customOAuth2UserService); <small> # Oauth 로그인 커스텀 서비스 처리 설정 </small> </li>
                          </li> <br />

                          <li> <h4> 🔍 rememberme 사용 ( 방법은 좀더 알아보기 ) </h4> </li>
                          <li> http.rememberMe().tokenValiditySeconds(60 * 60 * 24); <small> # rememberMe 사용 ,html form에 remember-me라는 담아서 필드를 보내면된다. , default=2주 </small> </li>
                        </li>
                      </div>


                      <li> </li> <br />
                      <h3 className="h3"> 아래는 security 인증을 처리하는 방식을 설정하는 2가지 방법이다. (~~방식 인증이라고 말한것은 대략 지어놓은 말이다.) </h3>
                      <div className="block4">

                        <h3 className="h3"> 🎈 1. InMemory 방식 인증 <small> # 안 써봐서 잘 모르지만 내부에 저장을 해놓고서 인증을 처리하는 방식으로 기억 </small> </h3>
                        <li>  @Bean </li>
                        <li> 	@Override </li>
                        <li> 	public UserDetailsService userDetailsService() {'{'}
                          <li> 	UserDetails user = </li>
                          <li> 	User.withDefaultPasswordEncoder()
                            <li>  .username("user") </li>
                            <li>  .password("password") </li>
                            <li>  .roles("USER") </li>
                            <li>  .build(); </li>
                          </li>
                          <li>  </li>
                          <li> 		return new InMemoryUserDetailsManager(user); </li>
                        </li>
                        <li> 	{'}'} </li> <br />

                        <li> </li> <br />
                        <h3 className="h3"> 🎈 2. jdbcAuthentication() 방식 인증 <small> # security로 인증을 처리하는 방법 </small> </h3>
                        <li> @Autowired </li>
                        <li> DataSource dataSource; </li> <br />
                        <li> @Bean </li>
                        <li> public BCryptPasswordEncoder bCryptPasswordEncoder() {'{'} return new BCryptPasswordEncoder(); {'}'} </li> <br />
                        <li> public PasswordEncoder passEncoder() {'{'} return PasswordEncoderFactories.createDelegatingPasswordEncoder() {'}'}
                          <small> # BCryptPasswordEncoder하고 다른점은 정보에 어떤 암호문을 사용헀는지가 추가된다. , 사용을 안해봐서 언제 사용하는지는 잘 모르겠다. </small>  </li>
                        <br />
                        <li> @Override </li>
                        <li> protected void configure(AuthenticationManagerBuilder auth) throws Exception {'{'}
                          <li> auth.jdbcAuthentication()
                            <li> {' .dataSource(dataSource) '} </li>
                            <li> {' .passwordEncoder(bCryptPasswordEncoder()) '} </li>
                            <li> {' .usersByUsernameQuery("select username,password,enabled " '}
                              <li> {' + "from client where username=?") '} </li>
                            </li>
                            <li> {' .authoritiesByUsernameQuery("select c.username, r.name " '}
                              <li> {' + "from client_role cr inner join client c on cr.client_id = c.id " '} </li>
                              <li> {' + "inner join role r on cr.role_id = r.id " '} </li>
                              <li> {' + "where c.username = ?"); '} </li>
                            </li>
                          </li>
                        </li>
                        <li> 	{'}'} </li>

                      </div>
                    </li>
                    <li> {'}'} </li>
                  </li> <br />

                </div>
              </li>

            </div>
          </details>
        </div>


        <div className='block1'>
          <details>
            <summary> Spring Security 권한을 이용해서 Method 접근 설정 ( 정리 필요 ) </summary>
            <div className='block2'>

              <h2 className="h2"> 📌 설명 </h2>
              <li> 메소드를 호출할 때, security권한을 이용해서 접근 유무 설정가능 </li>
              <li> 2 </li>
              <li> 3 </li>

              <h2 className="h2"> 📌 장점, 단점 </h2>
              <li> 장점 : </li>
              <li> 단점 : </li>

              <h2 className="h2"> ✔ 예시 </h2>
              <li> MethodSecurityConfig [Custom]
                <div className="block3">
                  <li> <h3 className="h3">  </h3>
                    <li> {' @Configuration '} </li>
                    <li> {' @EnableGlobalMethodSecurity( '}
                      <li> {'         prePostEnabled = true, '} </li>
                      <li> {'         securedEnabled = true, '} </li>
                      <li> {'         jsr250Enabled = true) '} </li>
                    </li>
                    <li> {' public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration { '} </li>
                    <li> {' } '} </li>
                  </li>
                </div>
              </li>

            </div>
          </details>
        </div>


        <div className='block1'>
          <details>
            <summary> Security FiletrChain (제대로 된 정리가 되있지 않음) </summary>
            <div className='block2'>

              <h2 className="h2"> 📌 설명 </h2>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>

              <h2 className="h2"> 📌 필터 체인 종류 및 설명 </h2>
              <li> <i> 1. ChannelProcessingFilter </i> </li>
              <li> <i> 2. SecurityContextPersistenceFilter(필수) </i>
                SecurityContextRepository에서 SecurityContext를 로드하고 저장하는 일을 담당 </li>
              <li> <i> 3. ConcurrentSessionFilter </i> </li>
              <li> <i> 4. HEADERS_FILTER </i> </li>
              <li> <i> 5. CSRF_FILTER </i> </li>
              <li> <i> 6. LogoutFilter(필수) </i>
                로그아웃 URL로 지정된 가상URL에 대한 요청을 감시하고 매칭되는 요청이 있으면 사용자를
                로그아웃시킴</li>
              <li> <i> 7. UsernamePasswordAuthenticationFilter(필수) </i>
                사용자명과 비밀번호로 이뤄진 폼기반 인증에 사용하는 가상 URL요청을 감시하고 요청이
                있으면 사용자의 인증을 진행함</li>
              <li> <i> 8. DefaultLoginPageGeneratingFilter </i> 폼기반 또는 OpenID 기반 인증에
                사용하는 가상URL에 대한 요청을 감시하고 로그인 폼 기능을 수행하는데 필요한 HTML을 생성함</li>
              <li> <i> 9. CasAuthenticationFilter </i> </li>
              <li> <i> 10. BasicAuthenticationFilter(필수) </i> HTTP 기본 인증 헤더를 감시하고 이를 처리함 </li>
              <li> <i> 11.RequestCacheAwareFilter </i> 로그인 성공 이후 인증 요청에 의해 가로채어진 사용자의
                원래 요청을 재구성하는데 사용됨</li>
              <li> <i> 12. SecurityContextHolderAwareRequestFilter </i> </li>
              <li> <i> 13. JaasApiIntegrationFilter </i> </li>
              <li> <i> 14. RememberMeAuthenticationFilter </i> </li>
              <li> <i> 15. AnonymousAuthenticationFilter </i>
                이 필터가 호출되는 시점까지 사용자가 아직 인증을 받지 못했다면 요청 관련 인증
                토큰에서 사용자가 익명 사용자로 나타나게 됨</li>
              <li> <i> 16. SessionManagementFilter </i>
                인증된 주체를 바탕으로 세션 트래킹을 처리해 단일 주체와 관련한 모든 세션들이 트래킹되도록 도움</li>
              <li> <i> 17. ExceptionTranslationFilter(필수) </i>
                이 필터는 보호된 요청을 처리하는 동안 발생할 수 있는 기대한 예외의 기본
                라우팅과 위임을 처리함</li>
              <li> <i> 18. FilterSecurityInterceptor(필수) </i>
                이 필터는 권한부여와 관련한 결정을 AccessDecisionManager에게 위임해 권한부여
                결정 및 접근 제어 결정을 쉽게 만들어 줌</li>



              <h2 className="h2"> 📌 장점, 단점 </h2>
              <li> 장점 : </li>
              <li> 단점 : </li>

              <h2 className="h2"> ✔ 예시 </h2>
              <li> 소제목
                <div className="block3">
                  <li> <h3 className="h3">  </h3>
                    <li>  </li>
                    <div className='block4'>
                      <li> </li>
                    </div>
                  </li> <br />
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

      </div>
    </>
  );
}

export default HtmlTest;