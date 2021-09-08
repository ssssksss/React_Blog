import React from 'react';

const SpringCode = (props) => {

    return (
        <>
            <div className="common_style">
                <ul>
                    <span className="lblock">
                        <span className="mtitle"> 스프링 코드 정리 </span>
                        <li> <small>  </small> </li>
                        <span className="mblock">
                            <span className="stitle"> <a name="이클립스 applicationContext.xml">  이클립스 applicationContext.xml </a> </span>
                            <li> <small> 이클립스 applicationContext.xml 사용법 </small> </li>
                            <span className="sblock">
                                <li className="sstitle" ><i> &lt; bean &gt; </i>  </li>
                                <li> 기본 생성자가 필요하다. </li>
                                <li> <small> &lt; bean class="패키지.클래스명" id="사용할빈이름" init-method="메소드" destroy-method="메소드"
                                    lazy-init="false(default)" scope="singleton(default)" /&gt; </small> </li>
                                <li> init-method="메소드() : 빈 객체가 생성될 떄 실행되는 메소드 </li>
                                <li> destroy-methode="메소드() : 빈 객체가 사라질 떄 실행되는 메소드 </li>
                                <li> lazy-init="false(default) : 빈 객체를 사용할 때 생성할지 말지 결정 </li>
                                <li> scope="singleton(default) : 빈 객체를 하나만 사용하게 할지 말지 결정</li>
                                <span className="lblock">
                                    <li className="sstitle" ><i> &lt; constructor-arg ref="" &gt; </i>  </li>
                                    <li><small> &lt; constructor-arg ref="sw" / &gt;  </small></li>
                                    <li><small> &lt; bean class="coupling.AppleWatch" id="sw" lazy-init="true" / &gt;  </small></li>
                                </span>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i> &lt; import &gt; </i>  </li>
                                <li><small> &lt; import resource="~~.xml" / &gt;  </small></li>
                                <li> resource : 다른 xml파일을들 불러모음(하나의 xml로 합치는 방법)  </li>
                                <li> &lt;  &gt;  </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i> &lt; 어노테이션 설정 &gt; </i>  </li>
                                <li> applicationContext.xml 파일 우클릭 - open with - Spring Config Editor 그리고 appliactionContext.xml 화면에
                                    하단 위쪽으로 보면  Namespaces탭에서 context 체크박스 체크
                                </li>
                                <li> 그러면 파일 내부에 xmlns:context="http://www.springframework.org/schema/context" 코드 추가된것을 확인</li>
                                <li> <i> 정의 </i> </li>
                                <li> &lt; context:component-scan base-package="패키지명" &gt;  </li>
                                <li> <i> 사용 </i> </li>
                                <li> @Componet("") 선언하고 생성자가 필요하다고 함</li>

                            </span>
                            {/* <span className="sblock">
                            <li className="sstitle" ><i> &lt; &gt; </i>  </li>
                        </span> */}
                        </span>
                        {/* 이클립스 applicationContext.xml 끝 */}
                        <span className="mblock">
                            <span className="stitle">
                                <a name="cmd창으로 빌드하고 실행해보기"> cmd창으로 빌드하고 실행해보기 </a>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>1.</i>  </li>
                                <li> cmd창 - cd 파일경로 - gradlew.bat build 입력 - cd build - cd libs - java -jar 파일명-0.0.1-SNAPSHOT.jar</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle">
                                <a name="어노테이션"> 어노테이션 </a>
                            </span>
                            <li> 스프링 컨테이너가 </li>
                            <li> 1. 이름을 보고 맵핑 </li>
                            <li> 2. 타입을 보고 맵핑 </li>
                            <span className="sblock">
                                <li className="sstitle" ><i> @Autowired </i>  </li>
                                <li> 일반적으로 멤버변수에 사용 </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i> @Qualifier </i>  </li>
                                <li> 주입할 대상(객체)의 이름을 알려주는 어노테이션 </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>@Controller</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>@Service</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>@Repository</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>@Configuration</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>1.</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>1.</i>  </li>
                                <li> </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>1.</i>  </li>
                                <li> </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle">
                                <a name="xml과 어노테이션에서 관리할것"> xml과 어노테이션에서 관리할것 </a>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>xml</i>  </li>
                                <li> 교체될 가능성이 있는 객체, 라이브러리, 자바소스변경x , 유지보수가능, 가독성저하
                                </li>
                                <li className="sstitle" ><i>어노테이션</i>  </li>
                                <li> 설정할필요 없음, 가독성o , 교체되지 않는 객체관리
                                </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle">
                                <a name="Spring Security"> Spring Security </a>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i> <a href="https://docs.spring.io/spring-security/site/docs/3.2.4.RELEASE/reference/htmlsingle/#ns-web-advanced" target="_blank"> 필터의 종류 </a> </i>  </li>
                                <li> DelegatingFilterProxy </li>
                                <li> FilterChainProxy </li>
                                <li className="mblock">
                                    <li className="sstitle" ><i> SecurityFiletrChain 종류 </i>  </li>
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
                                    {/* <li> <i>  </i> </li> */}
                                </li>
                                <li className="mblock">
                                    요청에담긴권한 -
                                    AuthenticationManager구현체인 ProviderManager가 처리 -
                                    AuthenticationManager가 AuthenticationProvider를 통해
                                    UserDetailsService를 거쳐 인증을 받아 -
                                    UserDetails에 SercurityUser를 등록한다.
                                </li>
                                <li className="mblock">
                                    <li className="sstitle" ><i> 스프링 시큐리티 권한설정 </i>  </li>
                                    <li> &lt; http &gt;  </li>
                                    <li> auto-config="true" </li>
                                    <li> use-expressions="true" <small>(4부터는 default="true")</small> : SpEL문법을 사용하게 해준다. </li>
                                    <li className="sblock">
                                        <li> intercept-url 태그를 사용할 떄는 위에서 아래로 순서로 설정된다</li>
                                        <li> &lt; intercept-url <i>pattern="" access="" </i> &gt;  </li>
                                        <li> pattern="/경로/**" </li>
                                        <li> access="@1('@2')" </li>
                                        <li> @1 : hasAnyRole(권한아무거나1개가지고 있을때), hasRole(권한1개가지고 있을 때) </li>
                                        <li> @2 : ROLE_(GUEST,USER,MEMBER,ADMIN) : 유저 권한 주기 </li>
                                        <li> premitAll : 모두 접근 가능 </li>
                                        <li> denyAll : 모두 접근 불가 </li>
                                        <li> isAnonymous() : Anonymous 사용자(인증x 사용자) </li>
                                        <li> isRememberMe() : Remember-me기능으로 로그인한 사용자 </li>
                                        <li> isAuthenticated() : Anonymous 사용자가 아닌경우(인증된 사용자) </li>
                                        <li> isFullyAuthenticated() : Anonymous사용자x 이고 Remember-me으로 로그인하지 않은 사용자 </li>
                                        <li> </li>
                                    </li>
                                </li>
                            </span>
                            <span className="sblock">
                                <span className="stitle">
                                    <a name="Spring Security Filter xml 설정"> Spring Security Filter xml 설정 </a>
                                </span>
                                <span className="mblock">
                                    <li className="sstitle" ><i>web.xml 기본설정</i>  </li>
                                    <a href="https://to-dy.tistory.com/70?category=720806" target="_blank"> </a>
                                    <li>&lt;filter&gt;</li>
                                    <li>&lt;&nbsp;&nbsp;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;</li>
                                    <li>&lt;&nbsp;&nbsp;filter-class&gt;org.springframework.web.filter.DelegatingFilterProxy&lt;/filter-class&gt;</li>
                                    <li>&lt;/filter&gt;</li>
                                    <li>&lt;filter-mapping&gt;</li>
                                    <li>&lt;&nbsp;&nbsp;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;</li>
                                    <li>&lt;&nbsp;&nbsp;url-pattern&gt;/*&lt;/url-pattern&gt;</li>
                                    <li>&lt;/filter-mapping&gt;</li>
                                </span>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle">
                                <a name="Spring Security Gradle 설정"> Spring Security Gradle 설정  </a>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" > Spring Security 의존성 추가하면 발생하는 일  </li>
                                <li> 서버가 시작되면 Spring Security 초기화 및 보안 설정 발생 </li>
                                <li> 모든 요청이 인증이 되어야 자원에 접근이 가능 </li>
                                <li> form로그인 방식과 httpbasic로그인 방식을 제공한다. </li>
                                <li> 기본적인 로그인 페이지를 제공한다. </li>
                                <li> 기본 계정 user와 비번 제공 </li>
                                <li> application.properties에 설정이 가능하다. </li>
                                <li> 계정추가, 권한추가, DB연동등 하지 않으면 사용을 할 수 없게 만듬 </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>spring security build.gradle</i>  </li>
                                <li>    implementation 'org.springframework.boot:spring-boot-starter-security'</li>
                                <li>    testImplementation 'org.springframework.security:spring-security-test'</li>
                                <li>//  https://mvnrepository.com/artifact/org.thymeleaf.extras/thymeleaf-extras-springsecurity5</li>
                                <li>    compileOnly group: 'org.thymeleaf.extras', name: 'thymeleaf-extras-springsecurity5', version: '3.0.4.RELEASE'</li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" > java - configuration - SecurityConfig </li>
                                <li> WebSecurityConfigurerAdapter(상속) </li>
                                <li> configure(WebSecurity web) , configure(HttpSecurity http) 오버라이딩 </li>
                                <li> 기초 sercurity 설정 및 구현하는 클래스 </li>
                                <li> HttpSecurity 라는 세부적인 보안기능을 설정할 수 있는 API를 제공하는 클래스를 생성한다. </li>
                                <li> =================================== </li>
                                <li>  </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                            <span className="sblock">
                                <li className="sstitle" ><i>1.</i>  </li>
                            </span>
                        </span>

                        {/* <span className="mblock">
                        <span className="stitle">
                            <a name=""> 소제목 </a>
                        </span>
                        <span className="sblock">
                            <li className="sstitle" ><i>1.</i>  </li>
                        </span>
                    </span> */}
                    </span>
                </ul>
            </div>
        </>
    );
}

export default SpringCode;