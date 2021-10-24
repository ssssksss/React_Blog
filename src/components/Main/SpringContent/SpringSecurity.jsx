import React from 'react';

const Term2 = (props) => {

  return (
    <>
      <div className="common_style">
        <span className="lblock">

          <div className='mblock'>
            <details>
              <summary className='stitle'> Security 기초
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'> 설명 </div>
                <div className='mblock'>
                  <li> 사용자의 인증,권한,보안 처리를 간단하게 구현 </li>
                  <li> 인증방식 : credential방식(사용자명,비번) , 이중인증(개인정보인증+추가인증(OTP) , ) </li>
                  <li> 1. 스프링 시큐리티에서 인증이 된 객체인지 일단 확인한다. </li>
                  <li> 2. 인증이 된 객체라면 그 다음 어떤 경로에 접근 권한이 있는 객체인지를 확인한다. </li>
                  <li> 3. 권한이 있다면 동작을 할 수 있게 하고, 없다면 동작을 할 수 없게 막는다. </li>
                  <li> 필터 방식으로 작동 </li>
                  <li>  </li>
                  <li>  </li>
                  <li> Principal(접근주체): 보호된 대상에 접근하는 대상 </li>
                  <li> Credential(비밀번호): Resource에 접근하는 대상의 비밀번호 </li>
                  <li> Authentication(인증): 현재 유저가 누구인지 확인, 작업을 수행할 수 있는지 여부를 판단 </li>
                  <li> Authorize(인가): 현재 유저가 어떤 서비스,페이지에 접근할 수 있는 권한이 있는지 검사 </li>
                  <li> Authority(권한): 특정 작어에 수행 권한이 있는지 판단 (GUEST,USER,MEMBER,ADMIN)
                    <li> 웹권환, 메소드호출, 도메인 인스턴스 </li>
                  </li>
                </div>
                <div className='sstitle'> 스프링 부트 시큐리티 </div>
                <div className='mblock'>
                  <li> gradle
                    <li> implementation 'org.springframework.boot:spring-boot-starter-security' </li>
                    <li> implementation 'org.springframework.security:spring-security-test' </li>
                  </li>
                  <li>  </li>
                </div>
              </div>
            </details>
          </div>

          <div className='mblock'>
            <details>
              <summary className='stitle'> WebSecurityConfig [Custom]
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'> 예시 </div>
                <div className='mblock'>
                  <li> @Configuration </li>
                  <li> @EnableWebSecurity  <small> # springSecurityFilterChain에 등록 , 스프링 시큐리티 활성화 </small> </li>
                  <li> @EnableGlobalMethodSecurity(prePostEnabled = true) <small> # Controller에서 @PreAuthorize 를 사용해서 특정 페이지에 권한 설정을 할 수 있음 </small>  </li>
                  <li> public class WebSecurityConfig extends WebSecurityConfigurerAdapter
                    <li> </li> <br />
                    <li>  <small>  </small> </li>
                    <li> </li> <br />
                    <li> @Override <small>  </small> </li>
                    <li> public void configure(WebSecurity web) throws Exception {'{'} <small> # 시큐리티 필터 체인 관련 설정, 리소스 제외할 경로 설정 </small>
                      <li> web.ignoring().antMatchers("/.css/**","/.js/**","/.img/**","/.lib/**"); <small>  </small> </li>
                    </li>
                    <li> {'}'} </li> <br />
                    <li> @Override </li>
                    <li> protected void configure(HttpSecurity http) throws Exception {'{'} <small> 인증, 로그인, 로그아웃 등 설정 </small>
                      <li> http.csrf().disable() <small> # csrf(보안) 비활성화 </small> </li>

                      <li> http.sessionManagement() <small> # 세션 관리 </small>
                        <li> .maximumSessions(1) <small> # 최대 세션 갯수 </small> </li>
                        <li> .maxSessionsPreventsLogin(true) </li>
                        <li> .expiredUrl("/경로") <small> # 세션이 만료되었을 경우 </small> </li>
                        <li> .sessionRegistry(sessionRegistry) </li>
                        <li> .sessionFixation().changeSessionId() </li>
                        <li>.invalidSessionUrl("/경로")</li>
                        <li>  </li>
                      </li> <br />

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

                      <li> http.formLogin() <smll> # 로그인 설정 </smll>
                        <li> .loginPage("/경로")  <small> # 커스텀 로그인 페이지 경로와 로그인 인증 경로 등록, default=/login</small> </li>
                        <li> .loginProcessingUrl("/do경로") <small> # 로그인 처리할 경로, default=/login</small>   </li>
                        <li> .defaultSuccessUrl("/경로") <small> # 로그인이 성공할 경우 리다이렉트 주소, default=/ </small>  </li>
                        <li> .usernameParameter("파라미터명") <small> # 유저의 이름 파라미터 , default=username </small> </li>
                        <li> .passwordParameter("파라미터명") <small> # 유저의 비번 파라미터 , default=password </small> </li>
                        <li> .successHandler(new SuccessHandler() {'{'} <small> # </small>
                          <li> .failureUrl() <small> # default=/login?error  </small> </li>
                          <li> @Override </li>
                          <li> public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {'{'}
                            <li> response.sendRedirect("/"); </li>
                          </li>
                          <li> {'}'} </li>
                        </li>
                        <li> {'})'} </li>
                        <li> .failureHandler(new failureHandler() {'{'} <small> #  </small>
                          <li> @Override </li>
                          <li> public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {'{'}
                            <li> response.sendRedirect("/"); </li>
                          </li>
                          <li> {'}'} </li>
                        </li>
                        <li> {'})'} </li>
                        <li> .permitAll(); <small> # </small> </li>
                      </li>
                      <li>  </li> <br />

                      <li> http.logout() <small> # </small> 로그아웃 설정
                        <li> .logoutUrl("/do경로") <small> # 로그아웃을 요청할 경로  ,기본값은 ("/logout")</small>   </li>
                        <li> .logoutRequestMatcher(new AntPathRequestMatcher("/logout")) <small> # 로그아웃 경로를 지정합니다. </small>  </li>
                        <li> .logoutSuccessUrl("/경로") <small> # 로그아웃이 성공할 경우 이동할 경로 , 기본값은 ("/login?logout")? </small>  </li>
                        <li> .invalidateHttpSession(true) <small> # 로그아웃 성공 시 세션을 제거 </small>  </li>
                        <li> .deleteCookies("JSESSIONID","SOME","OTHER","COOKIES") <small> # 로그아웃시 쿠키 제거 </small> </li>
                      </li>
                      <li>  </li> <br />

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

                      <li> http.rememberMe().tokenValiditySeconds(60 * 60 * 24);
                        <small> rememberMe 사용 ,html form에 remember-me라는 담아서 필드를 보내면된다. , default=2주 </small> </li>
                    </li>
                    <li> {'}'} </li>
                    <li>  </li> <br />


                    <li className="sstitle"> 1. InMemory 방식 인증  </li>
                    <div className="sblock">
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
                    </div>

                    <li className="sstitle"> 2. jdbcAuthentication() 방식 인증 <small> security로 인증을 처리하는 방법 </small> </li>
                    <div className="sblock">
                      <li> @Autowired </li>
                      <li> DataSource dataSource; </li> <br />
                      <li> @Bean </li>
                      <li> public BCryptPasswordEncoder bCryptPasswordEncoder() {'{'} return new BCryptPasswordEncoder(); {'}'} </li> <br />
                      <li> public PasswordEncoder passEncoder() {'{'} return PasswordEncoderFactories.createDelegatingPasswordEncoder() {'}'} </li>
                      <small> # BCryptPasswordEncoder하고 다른점은 정보에 어떤 암호문을 사용헀는지가 추가된다. </small>  <br />
                      <li> @Override </li>
                      <li> protected void configure(AuthenticationManagerBuilder auth) throws Exception {'{'}
                        <li> auth.jdbcAuthentication()
                          <li> .dataSource(dataSource) </li>
                          <li> .passwordEncoder(bCryptPasswordEncoder()) </li>
                          <li> .usersByUsernameQuery("select username ,password ,enabled from client where username=?") </li>
                          <li> .authoritiesByUsernameQuery("select c.username, r.name from client_role cr inner join client c on cr.client_id = c.id inner join role r on cr.role_id = r.id where c.username = ?"); </li>
                        </li>
                      </li>
                      <li> 	{'}'} </li>
                    </div>

                  </li>
                </div>

              </div>
            </details>
          </div>

          <div className='mblock'>
            <details>
              <summary className='stitle'> Handler
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'> 설명 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
                <div className='sstitle'> 예시 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
              </div>
            </details>
          </div>

        </span>
      </div>
    </>
  );
}

export default Term2;