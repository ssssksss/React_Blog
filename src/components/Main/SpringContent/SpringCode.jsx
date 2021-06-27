import React from 'react';

const SpringCode = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 스프링 프레임워크 코드(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#어노테이션">1. 어노테이션 </a>
                        <a href="#객체">2. 객체 </a>
                        <a href="#파라미터">3. 파라미터 </a>
                        <a href="#API">4. API </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="어노테이션"> 1. 어노테이션</a> </span>
                <span className="mblock">
                    <span className="stitle"> <a name="IoC컨테이너가 관리하는 객체"> 1. IoC컨테이너가 관리하는 객체 </a> </span>
                    <span className="sblock">
                        <p> <i> @Componet 인터페이스선언 </i> : @Controller @Service @Repository등에 사용되어있음</p>
                        <p> <i> 기능 : </i> 스프링 빈에 자동으로 등록이 된게 한다 </p>
                        <p> 컴포넌트 스캔이라는 말이 나오면 이것과 관련이 있음 </p>
                        <p> @Component </p>
                        <p> public @interface Repository {"{"} </p>
                        <p> {"}"} </p>
                    </span>
                    <span className="sblock">
                        <p> <i> @Controller 클래스선언</i> : 컨트롤러로 선언</p>
                        <p> @Controller </p>
                        <p> public class HelloController  {"{"} </p>
                        <p> {"}"} </p>
                    </span>
                    <span className="sblock">
                        <p> <i> @Service 클래스선언</i> : 서비스 선언</p>
                        <p> @Service </p>
                        <p> public class HelloController  {"{"} </p>
                        <p> {"}"} </p>
                    </span>
                    <span> </span>
                    <span className="sblock">
                        <p> <i> @Repository 클래스선언 </i> : 저장소로 선언</p>
                        <p> @Repository </p>
                        <p> public class MemoryMemberRepository {"{"} </p>
                        <p> {"}"} </p>
                    </span>
                    <span className="sblock">
                        <p> <i> @Configuration 클래스선언</i> : </p>
                        <p> 빈 객체의 싱글톤을 보장해줌 </p>
                        <p> Config.class를 상속받은 CGLIB프로시 빈을 생성 </p>
                        <p> @Configuration </p>
                        <p> public class SpringConfig{"{"}</p>
                        <p> {"}"}</p>
                    </span>
                    <span className="sblock">
                        <span className="sstitle">
                            <p> <i> @Bean 메소드선언</i> : Ioc컨테이너가 관리하는 객체 </p>
                            <p> <small> 메소드가 호출되면 구현체를 생성하고 반환함 </small></p>
                        </span>
                        <p> 클래스 객체 = applicationContext.getBean(클래스.class);</p>
                        <p> 위 코드의 클래스를 보면 </p>
                        <p> public 클래스(클래스변수자료형1 매개변수,클래스변수자료형2 매개변수) {"{"}</p>
                        <p> this.클래스변수명1 = 매개변수(상속관계에 있는 클래스 객체); </p>
                        <p> this.클래스변수명2 = 매개변수(클래스변수명); </p>
                        <p> {"}"} </p>
                        <p> <small>  or </small></p>
                        <p> @Configuration </p>
                        <p> @Bean</p>
                        <p> public MemberService memberService() {"{"}</p>
                        <p> return new MemberService(memberRepository()); </p>
                        <p> {"}"}</p>
                    </span>
                    <span className="stitle"> <a name="IoC컨테이너 등록된것 꺼내쓰기"> 2.  IoC컨테이너 등록된것 꺼내쓰기 </a> </span>
                    <span className="sblock">
                        <p> <i> @Autowired 생성자선언?</i> : (DI)</p>
                        <p> 스프링이 관리하는 객체에서만 사용이 가능하다 </p>
                        <p> @Autowired </p>
                        <p> public MemberController(MemberService memberService)  {"{"} </p>
                        <p> &nbsp;&nbsp; this.memberService = memberService </p>
                        <p> {"}"} </p>
                    </span>
                </span>
                <p> </p>
                <span className="mtitle"> <a name=""> </a> </span>
                <span className="mblock">
                    <span className="sblock">
                        <p> <i> @GetMapping 메소드선언</i> : URL에 있는 값을 맵핑해서 호출해준다.</p>
                        <p>Get방식이다.</p>
                        <p>@GetMapping("hello")</p>
                        <p>public String hello(Model model) {"{"}</p>
                        <p>&nbsp;&nbsp;model.addAttribute("data", "hello");</p>
                        <p>&nbsp;&nbsp;return "hello"; <small> 리턴은 View 파일명</small></p>
                        <p> {"}"}</p>
                    </span>
                    <span className="sblock">
                        <p> <i> @PostMapping 메소드선언</i> : URL에 있는 값을 맵핑해서 호출해준다.</p>
                        <p>Post방식이다.</p>
                        <p>@PostMapping("hello")</p>
                        <p>public String createFrom(MemberForm form) {"{"}</p>
                        <p>&nbsp;&nbsp;Member member = new Member();</p>
                        <p>&nbsp;&nbsp;member.setName(form.getName());</p>
                        <p>&nbsp;&nbsp;memberService.join(member);</p>
                        <p>&nbsp;&nbsp;return "redirect:/";</p>
                        <p> {"}"}</p>
                    </span>
                </span>
                <span className="mtitle"> <a name=""> </a> </span>
                <span className="mblock">
                    <p> <i> @Transactional (테스트)클래스선언</i> : </p>
                    <p> DB테스트를 하고나서 롤백이 되게함 </p>
                    <span className="sblock">
                        <p> @Transactional </p>
                        <p> class Test클래스 {"{"}</p>
                        <p> {"}"}</p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="객체"> 2. JUnit API </a> </span>
                    <span className="mblock">
                        <p> 실행 순서 :</p>
                        <p> BeforeClass {"->"} Before {"->"} Test코드 {"->"} After {"->"} AfterClass</p>
                        <span className="sblock">
                            <p> <i> @BeforeClass(Junit4) , @BeforeAll(JUnit5) </i> :  </p>
                            <p> 전체 테스트에서 한번 실행 , 전체 </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @Before(Junit4) , @BeforeEach(Juni5) </i> :  </p>
                            <p> 모든 테스트가 있을 떄마다 실행 </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @After (Junit4) , @AfterEach (JUnit5) </i> :  </p>
                            <p>  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @AfterClass(Junit4) , @AfterAll(JUnit5) </i> :  </p>
                            <p>  </p>
                        </span>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="객체"> 2. 객체 </a> </span>
                    <span className="mblock">
                        <span className="sblock">
                            <p> <i> Model </i> : 서블릿에서 request에 값을 담아 보내주었는데 이러한 역할을 담당한다.  </p>
                        </span>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="파라미터"> 3. 파라미터 </a> </span>
                    <span className="mblock">
                        <span className="sblock">
                            <p> <i> @RequestParam </i> :</p>
                            <p>  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @ModelAttribute </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @PathVariable </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @CookieValue </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @RequestHeader </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @RequestHeader </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @RequestBody </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @Value </i> : 서  </p>
                        </span>
                        <span className="sblock">
                            <p> <i> @Valid </i> : 서  </p>
                        </span>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="API"> 4. API</a> </span>
                    <span className="mblock">
                        <span className="sblock">
                            <p> <i> @ResponseBody 메소드선언</i> : http통신의 body부분에 직접 보낸다.
                                HTML형식이 아닌 text형식 </p>
                            <p> @ResponserBody를 컨테이너가 보면 viewResolver로 보내지 않고
                                HttpMessageConverter로 보내면 JsonConveter와 StringConveter방식으로 구분
                            </p>
                            <p>@GetMapping("hello-string")</p>
                            <p>@ResponseBody</p>
                            <p>public String helloString(@RequestParam("name") String name) {"{"}</p>
                            <p>&nbsp;&nbsp;return "hello" + name;</p>
                            <p> {"}"} </p>
                            <br />
                            <p> 아래와 같은 방식으로 리턴값을 객체로 주면 키와값으로 나와 json방식으로 사용이
                                가능할것 같다 , 겟터셋터방식 ,프로퍼티 방식이라고 불린다?
                            </p>
                            <p>@GetMapping("hello-string")</p>
                            <p>@ResponseBody</p>
                            <p>public String helloString(@RequestParam("name") String name) {"{"}</p>
                            <p>&nbsp;&nbsp; 클래스 객체 = new 클래스(); </p>
                            <p>&nbsp;&nbsp; 클래스.setName(name); </p>
                            <p>&nbsp;&nbsp; return 객체</p>
                            <p> {"}"} </p>
                        </span>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="메소드"> 5. 메소드 </a> </span>
                    <span className="mblock">
                        <p> <i> AnnotationConfigApplicationContext(Config클래스명.class) </i> :
                            @Test 테스트 코드에서 @Configuration 객체를 불러오는 것 같다.</p>
                        <span className="sblock">
                            <p> ApplicationContext ac = new AnnotionConfigApplicationCOntext(Config클래스명.class); </p>
                            <p> ac.getBean("",.class); </p>
                        </span>

                    </span>
                </span>
            </span>
        </div>
    );
}

export default SpringCode;