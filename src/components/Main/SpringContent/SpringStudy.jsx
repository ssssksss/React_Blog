import React, { useEffect, useRef, useState } from 'react';

const SpringStudy = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[1].style.left = null;
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
                        <a href="#main" className="col_b"> <b> 스프링 공부 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> Spring </summary>
                            <details>
                                <summary className="col_g"> 설명 </summary>
                                <a href="#스프링이란?" className="col_p"> 스프링이란? </a>
                                <a href="#스프링 프레임워크의 기본 동작 원리" className="col_p"> 스프링 프레임워크의 기본 동작 원리 </a>
                                <a href="#의존성 주입(Dependency Injection)" className="col_p"> 의존성 주입(Dependency Injection) </a>
                                <a href="#AOP(Aspect Oriented Programming)" className="col_p"> AOP(Aspect Oriented Programming) </a>
                                <a href="#컨테이너" className="col_p"> 컨테이너 </a>
                                <a href="#파일 디렉토리" className="col_p"> 파일 디렉토리 </a>
                                <a href="#템플릿 엔진" className="col_p"> 템플릿 엔진 </a>
                                <a href="#JPA(Java Persistence API)" className="col_p"> JPA(Java Persistence API) </a>
                                <a href="#application.properties" className="col_p"> application.properties </a>
                                <a href="#application.yml" className="col_p"> application.yml </a>
                                <a href="#xml" className="col_p"> xml </a>
                                <a href="#lombok" className="col_p"> lombok </a>
                            </details>
                        </details>
                        <details open>
                            <summary> SpringSecurity  </summary>
                            <details>
                                <summary className="col_g"> 스프링 시큐리티 </summary>
                                <a href="#스프링 시큐리티 정의" className="col_p"> 스프링 시큐리티 정의 </a>
                                <a href="#Cors(Cross Origin Resource Sharing)" className="col_p"> Cors(Cross Origin Resource Sharing) </a>
                                <a href="#스프링 시큐리티 관련 객체" className="col_p"> 스프링 시큐리티 관련 객체 </a>
                                <a href="#커스텀 스프링 시큐리티 관련 객체" className="col_p"> 커스텀 스프링 시큐리티 관련 객체 </a>
                                <a href="#스프링 시큐리티 처리 필터 순서" className="col_p"> 스프링 시큐리티 처리 필터 순서 </a>
                                {/* <a href="" className="col_p">  </a> */}
                                {/* <a href="" className="col_p">  </a> */}
                                {/* <a href="" className="col_p">  </a> */}
                                {/* <a href="" className="col_p">  </a> */}
                                <a href="#스프링 시큐리티 config" className="col_p"> 스프링 시큐리티 config </a>
                                <a href="#csrf()" className="col_p"> csrf() </a>
                                <a href="#sessionManagement()" className="col_p"> sessionManagement() </a>
                                <a href="#authorizeRequests()" className="col_p"> authorizeRequests() </a>
                                <a href="#formLogin()" className="col_p"> formLogin() </a>
                                <a href="#" className="col_p">  </a>
                                {/* <a href="" className="col_p">  </a> */}
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p> */}
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="main"> 스프링 공부 </a> </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="스프링이란?"> 스프링이란? </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> 스프링</i>  </p>
                            <p> 스프링은 Ioc기반의 프레임워크 , 자바 플랫폼 프레임워크 </p>
                            <p> 의존성 주입(Denpendency Injection) 의존성 주입 : 개발자가 아닌 컨테이너가 관리하는 빈 객체를 주입하는 방법 </p>
                            <p> POJO(Plain Old Java Object) : 기본적인 기능만 가진 자바 객체 </p>
                            <p> AOP(Aspect Oriented Programming) : 관점 지향 프로그래밍 ,기존에 사용하던
                                프로그래밍 방법은 객체지향 프로그래밍을 사용하지만 중복된 코드들이 많고
                                확장,유지 보수를 떨어뜨린다. AOP에서는 핵심기능(서비스)와 공통기능(인증,필터 등)을
                                분리하여 유지보수가 더 좋아지며 재활용성이 높아진다.
                            </p>
                            <p> 컨테이너 : BeanFactory와 ApplicationContext 2개의 대표적인 컨테이너가 있다. 컨테이너는
                                인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다. </p>
                        </span>

                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="의존성 주입(Dependency Injection)">  의존성 주입(Dependency Injection)</a> </span>
                        <p> <small> 객체를 직접 만들지 않고 주입받아 사용하는 방법 </small> </p>
                        <span className="sblock">
                            <p className="sstitle"><i> 사용하는 이유 </i> </p>
                            <p> 1. </p>
                            <p> 1. </p>
                            <p> 1. </p>
                        </span>
                        <p className="stitle"> 의존성 주입하는 방법 3가지 </p>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i> 생성자(Constructor) 주입(스프링 팀에서 추천하는 방식) </p>
                            <p>  </p>
                            <p> 1. 생성자로 객체를 생성하는 시점에 인자에 있는 Bean을 호출 </p>
                            <p> 2. Bean을 호출할 때(초기에 생성x) BeanFacotry에 Bean을 만들고 만든 Bean을 찾음 </p>
                            <p> 3. Bean을 찾았으므로 생성자 인자에 Bean을 주입 </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle"><i>2.</i> 수정자(Setter) 주입</p>
                            <p> 주입 과정 </p>
                            <p> 1. &lt;bean&gt;을 보고 찾음, 찾으면 bean객체 생성 </p>
                            <p> 2. setter호출,  </p>
                            <p> 3. 이후에 주입하려는 빈 객체의 수정자를 호출하여 주입 </p>

                        </span>
                        <span className="sblock">
                            <p className="sstitle"><i>3.</i> 필드(Field) 주입(어노테이션 사용)</p>
                            <p> 주입 과정  </p>
                            <p> 1. 빈 객체를 생성  </p>
                            <p> 2. 빈 객체를 찾아서 주입하는 방법  </p>
                            <p>  </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="POJO(Plain Old Java Object)">  POJO(Plain Old Java Object) </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> POJO가 탄생한 이유 </i>  </p>
                            <p> 자바를 개발할 떄 과거에 개발자가 비즈니스로직 + 트랜잭션,보안,필터 등등을 구현해야
                                했다. 그러므로 너무 많은 부담을 지게 되었고 그 부담을 덜기 위하여 기업에서 개발하기 위한
                                서비스 EJB(Enterprise Java Beans)가 탄생하여 부담이 줄어들었다. 하지만 작은 서비스를 개발할떄도
                                거대한 EJB를 상속받아 사용해야되는 불편함이 있었고 기능을 바꾸기 위해서는 전체적으로 코드를
                                수정해야되는 문제점이 발생하였다. EJB는 객체지향의 특징과 장점을 사용할 수 없었다. </p>
                            <p> POJO는 이러한 문제점에서 벗어나 객체지향에 집중하고, 클래스나 라이브러리에 종속되지 않아
                                원하는 대로 사용을 할 수 있게 되었다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> POJO 사용 이유와 장점 </i> </p>
                            <p> 특정 환경에 종속이 되지 않는다. </p>
                            <p> 객체지향(OOP)를 자유롭게 사용할 수 있다. </p>
                            <p> 로우레벨은 분리하면서 필요한 로직을 작성할 수 있다. </p>
                            <p> 테스트 작업 환경에 좋다. </p>
                            <p> EJB의 서비스와 기술은 그대로 사용하면서 자바 객체지향도 사용을 할 수 있어 좋다. </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="AOP(Aspect Oriented Programming)">  AOP(Aspect Oriented Programming) </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="컨테이너">  컨테이너 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> 컨테이너의 빈 객체 </i>  </p>
                            <p> CGLIB라는 바이트코드 조작 라이브러리를 이용하여 Bean객체를 싱글턴패턴으로 유지하게 한다.
                                클래스를 복제?한 클래스객체를 따로 만들어서 컨테이너에서 만들어서 사용한다. 컨테이너에
                                Bean객체가 없으면 Bean객체를 생성하고 존재한다면 기존에 Bean객체를 반환해준다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="파일 디렉토리">  파일 디렉토리 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>DAO(Data Access Object)</i>  </p>
                            <p> DB에 제일 가까이서 접근하는 객체 </p>
                            <p> DB와 Service 구간사이에서 DB데이터를 보내고 받는다.</p>
                            <p> 스프링에서는 직접 구현하지않고 CrudRepositoy나 JpaReposioty를 상속해서 처리한다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>DTO(Data Transfer Object) </i>  </p>
                            <p> controller와 service사이에서 사용할 데이터를 주고 받는 객체 </p>
                            <p> Entity와 비슷하지만 Entity는 DB와 데이터를 주고 받는 용도로 사용하고
                                다른 곳에서 데이터를 주고 받는 용도로는 dto를 사용하는 것을 추천
                            </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>VO(Value Object)</i>  </p>
                            <p> VO는 DTO와 비슷하지만 오직 읽는 용도로만 사용하는 것이다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>Entity</i>  </p>
                            <p> Entity </p>
                            <p> toEntity() 메소드를 통해서 DTO에 필요한 부분만을 사용해서 Entity로 만들어서 사용 </p>
                            <p> 실제 DB 테이블과 일치되는 클래스 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> controller </i>  </p>
                            <p> URL을 맵핑하고 service 로직을 처리 </p>
                            <p> 반환 값으로 템플릿(view)나 JSON 등으로 응답한다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> service </i>  </p>
                            <p> 비즈니스 로직을 구현 </p>
                            <p> DB에 저장하거나 비즈니스 로직을 처리 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> enity </i>  </p>
                            <p> DB테이블과 연결되는 객체  </p>
                            <p> JPA에서는 Entity객체를 사용 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> repository </i>  </p>
                            <p> 데이터를 가져오거나 조작하는 함수를 정의 </p>
                            <p> JpaRepository&lt;Entity클래스,@Id타입&gt;나 CrudRepository 상속하여 그 안에 함수를 사용 </p>
                            <p> <a href="https://docs.spring.io/spring-data/jpa/docs/1.10.1.
                            RELEASE/reference/html/#jpa.sample-app.finders.strategies"> 참고 사이트 </a></p>
                            <span className="mblock">
                                <p className="sstitle"> JPA 메소드 종류 </p>
                                <p> save() : 레코드 저장(insert, update) </p>
                                <p> findOne() : primary key로 레코드 한건 찾기 </p>
                                <p> findAll() : 전체 레코드 불러오기, sort기능, pageable기능 </p>
                                <p> count() : 레코드 갯수</p>
                                <p> delete() : 레코드 삭제 </p>
                                <p className="sstitle"> 쿼리 메소드 종류 </p>
                                <p> findBy : 쿼리를 요청하는 메서드 </p>
                                <p> countBy : 쿼리 결과 레코드 수를 요청하는 메서드 </p>
                                <p className="sstitle"> 쿼리 메소드 키워드 종류 </p>
                                <p> And : 여러필드를 검색 ( findByUserIdAndUserPwd(String userid,String userpwd)) </p>
                                <p> Or : 여러필드를 검색 ( findByUserIdOrUserPwd(String userid,String userpwd)) </p>
                                <p> Between : 필드의 두 값 사이의 항목 검색 findByCreatedAtBetween() </p>
                                <p> LessThan : 작은 항목 검색 (findByAgeLessThanEqual(int)) </p>
                                <p> GreaterThanEqual : 크거나 같은 항목 (findByAgeGraterThanEqual(int)) </p>
                                <p> Like : like 사용 (findByNameLike(String)) </p>
                                <p> IsNull : null인 항목 검색 (findByJoblsNull()) </p>
                                <p> In : 여러 값 중에 하나의 항목 (findByJob(String...)) </p>
                                <p> OrderBy : 검색 결과를 정렬하여 전달 (findByEmailOrderByNameAsc(String)) </p>
                            </span>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> static </i>  </p>
                            <p> css,js,img 등 자원을 모아놓는 공간 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> templates </i>  </p>
                            <p> 템플릿을 모아놓는 공간 </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="스프링 프레임워크의 기본 동작 원리"> 스프링 프레임워크의 기본 동작 원리 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1. </i>  </p>
                            <p> 1. 클라이언트 요청 </p>
                            <p> 2. Dispatcher Servlet 접근 </p>
                            <p> 3. Handler Mapping 참조하여 Controller 연결 </p>
                            <p> 4. Mapping된 Controller에 서비스 로직에 따라 DAO,Entity등을 통해 DB에 접근  </p>
                            <p> 5. 모델과 뷰 객체를 담아 DispatcherServlet에 반환 </p>
                            <p> 6. ViewResolver를 통해 View와 연결되어 화면으로 출력 </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="템플릿 엔진">  템플릿 엔진 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>thymeleaf </i> <a href="https://cyberx.tistory.com/132"> 참고 </a>  </p>
                            <p className="sstitle"> 기본 문법 </p>
                            <p> 변수 : ${"{"}{"}"} </p>
                            <p> 객체 변수값 : *{"{"}{"}"} </p>
                            <p> 메시지 : #{"{"}{"}"} , message properites에 문자열이 존재하면 사용 </p>
                            <p> 링크 : @{"{"}{"}"} </p>
                            <p> 삼항연산자(Elivs operator) : 참 ?: 거짓(default값)</p>
                            <p> 속성값(css) : th:attr="src=@{"{"}/경로.png{"}"}"  </p>
                            <p> 조건문 </p>
                            <p> &nbsp;&nbsp;th:if(if)="${"{"}파라미터{"}"}==조건</p>
                            <p> &nbsp;&nbsp;th:unless(else)="${"{"}파라미터{"}"}==조건</p>
                            <p className="sstitle"> 예시 </p>
                            <p> html 파일을 만들고 상단에 &lt;html xmlns:th="http://www.thymeleaf.org"&gt; 선언 </p>
                            <span className="mblock">
                                <p> &lt;tr th:each="반복변수명 : ${"{"}파라미터{"}"}"&gt;</p>
                                <p> &nbsp; &lt;td th:text="${"{"}반복변수명.파라미터{"}"}"&gt;</p>
                                <p> &lt;/tr&gt;</p>
                            </span>
                            <span className="mblock">
                                <p> &lt;tr th:object="${"{"}파라미터(객체){"}"}"&gt;</p>
                                <p> &nbsp; &lt;td th:text="*{"{"}파라미터멤버변수{"}"}"&gt;</p>
                                <p> &nbsp; &lt;td th:text="*{"{"}파라미터멤버변수{"}"}"&gt;</p>
                                <p> &lt;/tr&gt;</p>
                            </span>
                        </span>
                        {/* <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span> */}

                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="JPA(Java Persistence API)">  JPA(Java Persistence API) </a>
                        </span>
                        <p> JPA의 구현체 Hibernate,EclipseLink,DataNucleus </p>
                        <span className="sblock">
                            <p className="sstitle" ><i> Hibernate </i>  </p>
                            <p className="sstitle" ><i> EclipseLink</i>  </p>
                            <p className="sstitle" ><i> DataNucleus </i>  </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="코드 환경 설정"> 코드 환경 설정  </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> <a name="application.properties"> application.properties</a>  </i>
                                <span className="mblock">
                                    <p> DB설정 </p>
                                    <span className="sblock">
                                        <p> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver </p>
                                        <p> spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8&amp;serverTimezone=UTC </p>
                                        <p> spring.datasource.username=DB유저이름 </p>
                                        <p> spring.datasource.password=DB유저비번 </p>
                                    </span>
                                    <p> JPA </p>
                                    <span className="sblock">
                                        <p> spring.jpa.hibernate.ddl-auto=update </p>
                                        <p> spring.jpa.properties.hibernate.format_sql=true </p>
                                    </span>
                                </span>
                            </p>
                            <p className="sstitle" ><i> <a name="application.yml">application.yml</a> </i>
                                <span className="mblock">
                                    <p> DB설정 </p>
                                    <span className="sblock">
                                        <p>
                                            spring: <br />
                                            &nbsp;datasource: <br />
                                            &nbsp;&nbsp;driver-class-name: com.mysql.cj.jdbc.Driver <br />
                                            &nbsp;&nbsp;url: jdbc:mysql://localhost:3306/스키마이름?serverTimezone=UTC&amp;characterEncoding=UTF-8 <br />
                                            &nbsp;&nbsp;username: DB유저이름 <br />
                                            &nbsp;&nbsp;password: DB유저비번 <br />
                                        </p>
                                    </span>
                                    <p> JPA </p>
                                    <span className="sblock">
                                        <p>
                                            spring: <br />
                                            <small> JPA 데이터베이스 플랫폼을 지정, MysQL InnoDB사용 </small> <br />
                                            &nbsp;database-platform: org.hibernate.dialect.MySQL5InnoDBDialect <br />
                                            <small> 웹 요청이 완료될 때까지 동일한 EntityManager를 갖도록 해줍니다., 성능과 확장에 좋지 않다고 하는데 정확하게는 아직 모름 </small> <br />
                                            &nbsp;open-in-view: false <br />
                                            <small> 콘솔에 JPA 쿼리를 출력 </small> <br />
                                            &nbsp;show-sql: true <br />
                                            &nbsp;hibernate: <br />
                                            &nbsp;&nbsp;format_sql: true <br />
                                            <small> none, create(기존테이블을삭제후다시생성), create-drop, update(변경된 스키마만 반영), validate(엔티티와 테이블이 정상적으로 매칭이 되었는지 확인, 운영을 할 떄 사용한다고 함) </small> <br />
                                            &nbsp;&nbsp;ddl-auto: update <br />
                                        </p>
                                    </span>
                                </span>
                            </p>
                            <p className="sstitle" ><i><a name="xml">xml</a>  </i>
                                <span className="mblock">

                                </span>
                            </p>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="lombok"> lombok  </a>
                        </span>
                        <small>  어노테이션으로 코드를 자동으로 만들어주는 라이브러리 </small>
                        <p> 가독성, 유지보수, 자동생성으로 생산성 향상 </p>
                        <span className="sblock">
                            <details>
                                <summary className="sstitle" ><i> 어노테이션의 종류 </i> </summary>
                                <ol>
                                    <li> @Value : 프로퍼티에서 정의한 값을 가져오는 방법 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </ol>
                            </details>
                            <details>
                                <summary className="sstitle" ><i> lombok 어노테이션의 종류 </i> </summary>
                                <ol type='1'>
                                    <li> @Getter : getter </li>
                                    <li> @Settter : setter</li>
                                    <li> @Entity : Entity객체 ,DB테이블과 맵핑되는 객체 </li>
                                    <li> @Table(name="테이블이름지정") : Entity가 맵핑될 테이블을 지정 </li>
                                    <li> @Id : JPA가 식별할 기본키 </li>
                                    <li> @GenerateValue(strategy = GenerationType.{"["}IDENTITY,ATUO,SEAUENCE{"]"}) </li>
                                    <li> @Column : DB필드 <br />속성 : name, unique=boolean , nullable=boolean , length=num , columnDefinition="설명?"</li>
                                    <li> @Enumerated(EnumType.STRING) : enum값을 인덱스가 아닌 문자열로 저장하는 방법 </li>
                                    <li> @AllArgsConstructor : 모든 변수를 사용하는 생성자 </li>
                                    <li> @NoArgsConstructor : 기본생성자 </li>
                                    <li> @RequiredArgsConstructor : 특정변수만을 사용하는 생성자, @NonNull이나 final을 이용하여 의존성을 주입할 수 있다. </li>
                                    <li> @EqualsAndHashCode : equals(),hashCode() 메소드 생성 <br />
                                        (of={"{"}"멤버변수1","멤버변수2"{"}"},callSuper=false)를 추가하면 멤버변수1과 멤버변수2가 같다면
                                        같은 객체로 판단을 하여 처리하게 할 수 있다. </li>
                                    <li> @ToString : tostring <br /> 원하지 않는 변수에는 @ToString(exclude="멤버변수") 를 사용하면 제외를 시킬 수 있다. </li>
                                    <li> @Data : @ToString,@EqualsAndHashCode,@Getter,@Setter,@RequiredArgsConstructor 를 만들어준다.
                                        하지만 실무에서는 무거워서 사용을 하지 않는다. </li>
                                    <li> @Builder : 해당 클래스에 빌드 패턴을 만들어 준다. <br /> 특정 변수만을 만드려면 생성자를 정의하고
                                        그위에 @Builder를 붙여서 사용하면 된다. </li>
                                    <li> @Delegate : 한 객체의 메소드를 다른 객체로 위임한다. </li>
                                    <li> @Log4j2 : 로그를 사용 </li>
                                    <li> @SequenceGenerator : 데이터베이스 시퀸스를 사용하는 방법(시퀸스에 대한 추가적으로 공부 필요)</li>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                </ol>
                            </details>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="">  소제목 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                    </span>

                </span>
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                {/* 스프링 시큐리티 */}
                <span className="lblock">
                    <span className="mtitle"> <a name="SpringSecurity "> SpringSecurity  </a> </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="스프링 Security">  스프링 Security </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" > <a name="스프링 시큐리티 정의"> 스프링 시큐리티 정의 </a>  </p>
                            <p> 스프링 기반의 보안관련 프레임워크, 인증과 권한을 담당 </p>
                            <p> API서버에 특정 토큰을 Request헤더에 담아 보내면 인증이 완료되고
                                api 기능을 사용할 권한을 갖게 된다.  </p>
                            <p> 필터 기반으로 동작</p>
                            <p> 세션-쿠키 방식으로 인증, DB에 검증이 된 회원일 경우 JSESSIONID부여한 후
                                다음 요청부터 JSESSIONID를 검증해서 유효하면 인증을 준다.
                            </p>
                            <p> 스프링 필터에는 엄청나게 많은 필터가 존재한다. </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" > <a name="Cors(Cross Origin Resource Sharing)"> Cors(Cross Origin Resource Sharing) 교차 출처 자원 공유  </a>   </p>
                            <p> API서버에 SPA프레임워크(react,vue 등)을 사용하게 되면 스프링과SPA프레임워크의
                                포트가 다르거나 서버가 다르면 서로 자원을 공유할 수 없게 하는 보안 정책 </p>
                            <p> 스프링 시큐리티에서 특정 도메인을 열거나 닫을 수 있음 </p>
                            <p> 필터나 mvc설정 등으로 처리가능 </p>
                            {/* <p>  </p> */}
                        </span>
                        <span className="sblock">
                            <p className="sstitle" > <a name="스프링 시큐리티 관련 객체"> 스프링 시큐리티 관련 객체 </a>  </p>
                            <p> 접근주체(Principal) : 보호된 대상에 접근하는 대상 </p>
                            <p> 비밀번호(Credential) : Resource에 접근하는 대상의 비밀번호 </p>
                            <p> 인증(Authentication) : 현재 유저가 누구인지 확인, 작업을 수행할 수 있는지 여부를 판단 </p>
                            <p> 인가(Authorize) : 현재 유저가 어떤 서비스,페이지에 접근할 수 있는 권한이 있는지 검사 </p>
                            <p> 권한 : 인증된 사람이 작업을 수행하는 권한이 있는지 판단 (GUEST,USER,MEMBER,ADMIN) </p>
                            {/* <p>  </p> */}
                            <span className="mblock">
                                <details>
                                    <summary className="col_g"> 인증관리자(Authentication Manager) :  </summary>
                                    <p> <small>  </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> 접근경정관리자(Access Decision Manager) : </summary>
                                    <p> <small>  </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> AuthenticationFilter </summary>
                                    <p> <small>  </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> AuthenticationManager </summary>
                                    <p> <small> 인증은 부분은 Security의 AuthenticationManager를 통해서 처리하게 되는데
                                        실제로는 AuthenticationManager에 등록된 AuthenticationProvider에 의해 처리가 된다.
                                        인증이 성공하면 isAuthenticated=true 객체를 생성해서 SecurityContext에 저장한다. </small> </p>
                                    <p> Authentication authenticate(Authentication) </p> {/* 멤버 변수 */}
                                    <p>  </p> {/* 멤버 변수 */}
                                </details>
                                <details>
                                    <summary className="col_g"> AuthenticationProvider </summary>
                                    <p> <small> 인증 전의 객체를 받아서 인증이 완료된 객체를 반환하는 역할 </small> </p>   {/* 설명 */}
                                    <p> 커스텀 구현체 필요 </p> {/* 멤버 변수 */}
                                    <p> Authentication authenticate(Authentication) </p> {/* 멤버 변수 */}
                                    <p> boolean supports(Class&lt;?&gt;) </p> {/* 멤버 변수 */}
                                </details>
                                <details>
                                    <summary className="col_g"> UserDetailsService </summary>
                                    <p> <small>  </small> </p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드 </p>
                                        <p> UserDetails loadUserByUsername(String var1) throws UsernameNotFoundException; </p>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> UserDetails </summary>
                                    <p> <small> 인증에 성공하여 생성된 UserDetails객체는 UsernamePasswordAuthenticationToken을 생성하기 위해
                                        사용된다. </small> </p>
                                    <p> 커스텀 구현체 필요(UserDto??)</p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드 </p>
                                        <p> Collection&lt;? extends GrantedAuthority&gt; getAuthorities(); </p>
                                        <p> String getPassword(); </p>
                                        <p> String getUsername(); </p>
                                        <p> boolean isAccountNonExpired(); </p>
                                        <p> boolean isAccountNonLocked(); </p>
                                        <p> boolean isCredentialsNonExpired(); </p>
                                        <p> boolean isEnabled(); </p>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> ProviderManager </summary>
                                    <p> <small> 첫번쨰 생성자는 인증전 객체를 생성하고 두번쨰 생성자는 인증이 완성된 객체를 생성 </small> </p>
                                    <p> <small> AuthenticationManager, MessageSourceAware, InitializingBean 상속 </small> </p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드  </p>
                                        <p> List&lt;AuthenticationProvider&gt; getProviders() {"{"} return providers; {"}"} </p>
                                        <span className="mblock">
                                            <p className="col_r"> Authentication authenticate(Authentication) {"{"}</p>
                                            <p> ... </p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p className="col_r"> public UsernamePasswordAuthenticationToken(Object principal,
                                                Object credentials, Collection&lt;? extends GrantedAuthority&gt; authorities) {"{"}</p>
                                            <p> &nbsp;&nbsp;super(authorties); </p>
                                            <p> &nbsp;&nbsp;this.principal=principal; </p>
                                            <p> &nbsp;&nbsp;this.credentials=credentials; </p>
                                            <p> &nbsp;&nbsp;super.setAuthenticated(true); </p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p className="col_r"> public abstract class AbstractAuthenticationToken implements Authentication,
                                                CredentialsContainer {"{"}</p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> SecurityContextHolder </summary>
                                    <p> <small> 보안 주체의 세부 정보 + 응용프로그램의 현재 보안 컨텍스트 세부 정보를 저장,
                                        스프링 시큐리티의 인메모리 세션저장소 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> SecurityContext </summary>
                                    <p> <small> Authentication을 보관하는 역할 그리고 SecurityContext를 통해
                                        Authentication 객체를 꺼내올 수도 있음 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> Authentication </summary>
                                    <p> <small> 현재 접근하는 주체의 정보와 권한을 담는 인터페이스 , SecurityContext에 저장됨 ,
                                        SecurityContextHolder를 통해 SecurityContext에 접근하고 SecurityContext를
                                        통해 Authentication에 접근 가능하다. </small> </p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드  </p>
                                        <p> getCredentials() : credentials의 비밀번호를 가져온다. </p>
                                        <p> getDetails() :  </p>
                                        <p> getPrincipal() : Principal객체를 가져온다. </p>
                                        <p> isAuthenticated() : 인증 여부를 가져온다. </p>
                                        <p> setAuthenticated() : 인증여부를 설정 </p>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> UsernamePasswordAuthenticationToken </summary>
                                    <p> <small> 첫번쨰 생성자는 인증전 객체를 생성하고 두번쨰 생성자는 인증이 완성된 객체를 생성 </small> </p>
                                    <p> <small> AbstractAuthenticationToken 상속 </small> </p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드  </p>
                                        <p> private final Object principal : 사용자의 ID에 해당 </p>
                                        <p> private Object credentials : 사용자의 PW에 해당 </p>
                                        <span className="mblock">
                                            <p className="col_r"> public UsernamePasswordAuthenticationToken(Object principal, Object credentials) {"{"}</p>
                                            <p> &nbsp;&nbsp;super(null); </p>
                                            <p> &nbsp;&nbsp;this.principal=principal; </p>
                                            <p> &nbsp;&nbsp;this.credentials=credentials; </p>
                                            <p> &nbsp;&nbsp;setAuthenticated(false); </p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p className="col_r"> public UsernamePasswordAuthenticationToken(Object principal,
                                                Object credentials, Collection&lt;? extends GrantedAuthority&gt; authorities) {"{"}</p>
                                            <p> &nbsp;&nbsp;super(authorties); </p>
                                            <p> &nbsp;&nbsp;this.principal=principal; </p>
                                            <p> &nbsp;&nbsp;this.credentials=credentials; </p>
                                            <p> &nbsp;&nbsp;super.setAuthenticated(true); </p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p className="col_r"> public abstract class AbstractAuthenticationToken implements Authentication,
                                                CredentialsContainer {"{"}</p>
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> GrantedAuthority </summary>
                                    <p> <small> 현재 사용자(principal)이 가지고 있는 권한을 의미 , ROLE_* 형태와 같이 사용하며 보통 roles로 칭함
                                        , UserDetailsService에 의해 불러올 수 있고 특정 자원에 권한이 있는지를 검사하여 접근 허용 여부를 결정을</small> </p>   {/* 설명 */}
                                    <p>  </p> {/* 멤버 변수 */}
                                    <span className="mblock">
                                        {/* 메소드 */}
                                        <p className="col_r"> {"{"}</p>
                                        <p>  </p> {/* 코드 */}
                                        <p className="col_r"> {"}"} </p>
                                    </span>
                                </details>
                                {/*  */}
                            </span>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" > <a name="커스텀 스프링 시큐리티 관련 객체"> 커스텀 스프링 시큐리티 관련 객체  </a>  </p>
                            <span className="mblock">
                                <details>
                                    <summary className="col_g"> WebSecurityConfig </summary>
                                    <p> <small> WebSecurityConfigurerAdapter 상속, @Configuration, @EnableWebSecurity </small> </p>
                                    <span className="sblock">
                                        <p className="sstitle"> 코드 </p>
                                        <span className="mblock">
                                            <p> @Override , 권한이 필요없는 자원을 허용하게 해주는 메소드</p>
                                            <p className="col_r"> configure(WebSecurity web) {"{"}</p>
                                            <p> web.ignoring().antMatchers("/css/**",
                                                "/js/**", "/img/**"); </p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p> @Override </p>
                                            <p className="col_r"> void configure(HttpSecurity http) {"{"}</p>
                                            {/* 이 아랫부분 수정하고 정리 필요 */}
                                            <span className="sblock">
                                                <span className="sstitle"> <a name="cors()"> cors() :</a> </span>
                                                <p> CorsFilter를 활성화 </p>
                                                <span className="sstitle"> <a name="csrf()"></a> csrf()(Cross site request forgery) </span>
                                                <p> 가짜로 페이지를 만들고 사용자가 입력하게 만들어서 그 값을 받고
                                                    사용자의 쿠키를 이용해 대신 다른 정보를 입력하게 하는 방법이
                                                    간단한 공격방법인데 막기위한 방법중 하나</p>
                                                <p> 서버에 들어온 요청이 실제 서버에서 허용한 요청이 맞는지 확인하기 위한 토큰,
                                                    서버에서 뷰페이지를 보낼 떄 랜덤으로 세션토큰을 하나 보내고, 사용자가 다시
                                                    서버로 전송할 때 같이 토큰이 포함되어 서버가 사용자에게 보낸 토큰과
                                                    사용자가 서버에 보낸 토큰이 일치하는지를 확인  </p>
                                                <p> 스프링 버전과 스프링 시큐리티 버전이 일치해야 한다. </p>
                                                <p> <img src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/CSRF_1.PNG'} alt='' /> </p>
                                                <p> <i>.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()) </i> </p>
                                                <p> <i> .disable()</i> : csrf토큰을 사용하지 않는다.  </p>
                                                <span className="sstitle"> <a name="sessionManagement()"> sessionManagement() </a> </span>
                                                <p> <i>.sessionCreationPolicy(SessionCreationPolicy.STATELESS) </i> : 스프링시큐리티에서 세션을 관리하지 않음</p>
                                                <span className="sstitle"> <a name="authorizeRequests()"> authorizeRequests() : 인증 절차에 대한 설정  </a> </span>
                                                <p> <i>.antMatchers("/**")  </i>: 특정 URL에 대해서 어떻게 처리할지 설정 </p>
                                                <p> <i>+ .permitAll()  </i>: 모든 인증에 대해서 통과</p>
                                                <p> <i>+ .denyAll() </i> : 모두 접근 불가 </p>
                                                <p> <i>+ .hasAnyRole("ROLE_GUEST","ROLE_USER","ROLE_MEMBER","ROLE_ADMIN") </i> : 4개중 맞는 권한이 있어야 허용 </p>
                                                <p> <i>+ .hasRole("ROLE_GUEST","ROLE_USER","ROLE_MEMBER","ROLE_ADMIN")  </i>: 1개의 선택한 권한이상이면 허용 </p>
                                                <p> <i>anyRequest().authenticated()  </i>: 나머지 요청은 권한이 있어야 접근이 가능 </p>
                                                <p> <i>.anonymous()  </i>: 인증이 된 유저는 접근이 불가능하게 한다. </p>
                                                <p> <i> </i> </p>
                                                <p> <i> </i> </p>
                                                <span className="sstitle"> <a name="formLogin()"> formLogin() </a> </span>
                                                <p> <i>.loginpage("/경로")  </i>: 로그인페이지로 선택 </p>
                                                <p><i> .defaultSuccessUrl("/경로")  </i>: 로그인 성공시 이동할 경로 </p>
                                                <p>  <i> .disable()</i> :  사용을 하지 않음</p>
                                                <span className="sstitle"> <a name="logout()"> logout() </a> </span>
                                                <p><i> .logoutSuccessUrl("/경로")  </i>: 로그아웃 성공시 이동할 경로 </p>
                                                <p><i> .invalidateHttpSession(true)  </i>: 세션 날리기  </p>
                                                <p><i> .disable()</i> :  사용을 하지 않음</p>
                                                <span className="sstitle"> addFilterBefore(securityAuthenticationFilter(),
                                                    UsernamePasswordAuthenticationFilter.class)  </span>
                                                <p> 커스텀한 securityAuthenticationFilter() 필터를  </p>
                                                <p>  <i> </i></p>
                                                <p>  <i> </i></p>
                                                <p>  <i> </i></p>
                                                <span className="sstitle"> <a name=""></a> </span>
                                                <p> </p>
                                                {/* <span className="sstitle">   </span>
                                    <p> </p> */}

                                            </span>
                                            <p>  </p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p> @Override </p>
                                            <p className="col_r"> configure(AuthenticationManagerBuilder auth) {"{"}</p>
                                            <p> auth.authenticationProvider(customAuthenticationProvider()); </p> {/* 코드 */}
                                            <p> auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder()); </p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p> @Bean 커스텀 </p>
                                            <p className="col_r"> AuthenticationManager getAuthenticationManager() {"{"}</p>
                                            <p> return super.authenticationManagerBean();</p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p> @Bean 커스텀 </p>
                                            <p className="col_r"> CustomAuthenticationProvider customAuthenticationProvider() {"{"}</p>
                                            <p> return new CustomAuthenticationProvider(); </p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                        <span className="mblock">
                                            <p> @Bean 커스텀 </p>
                                            <p className="col_r"> PasswordEncoder passwordEncoder() {"{"}</p>
                                            <p> return new BCryptPasswordEncoder(); </p> {/* 코드 */}
                                            <p className="col_r"> {"}"} </p>
                                        </span>
                                    </span>
                                </details>
                                <details>
                                    <summary className="col_g"> UserEntity </summary>
                                    <p> <small> UserDetails 상속 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> UserService </summary>
                                    <p> <small> UserDetailService 인터페이스 상속 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g">  </summary>
                                    <p> <small> </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g">  </summary>
                                    <p> <small> </small> </p>
                                </details>
                                {/* <details>
                                    <summary className="col_g">  </summary>
                                    <p> <small> </small> </p>
                                </details> */}
                            </span>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" > <a name="스프링 시큐리티 처리 필터 순서"> 스프링 시큐리티 처리 필터 순서 </a>  </p>
                            <span className="mblock">
                                <details>
                                    <summary className="col_g"> SecurityContextPersistenceFilter </summary>
                                    <p> <small> SecurityContextRepository에서 SecurityContext를 로드하고 저장하는 일을 담당함 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> LogoutFilter </summary>
                                    <p> <small> 로그아웃 URL로 지정된 가상URL에 대한 요청을 감시하고 매칭되는 요청이 있으면 사용자를 로그아웃시킴 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> UsernamePasswordAuthenticationFilter(필수?) </summary>
                                    <p> <small> 사용자명과 비밀번호로 이뤄진 폼기반 인증에 사용하는 가상 URL요청을 감시하고 요청이 있으면 사용자의 인증을 진행함 </small> </p>
                                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringStudy/SpringSecurity/UsernamePasswordAuthenticationFilter_1.PNG'} alt='' /> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> DefaultLoginPageGeneratingFilter </summary>
                                    <p> <small> 폼기반 또는 OpenID 기반 인증에 사용하는 가상URL에 대한 요청을 감시하고 로그인 폼 기능을 수행하는데 필요한 HTML을 생성함 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> BasicAuthenticationFilter </summary>
                                    <p> <small> HTTP 기본 인증 헤더를 감시하고 이를 처리함 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> SecurityContextHolderAwareRequestFilter </summary>
                                    <p> <small>로그인 성공 이후 인증 요청에 의해 가로채어진 사용자의 원래 요청을 재구성하는데 사용됨
                                        SecurityContextHolderAwareRequestFilter HttpServletRequest를 HttpServletRequestWrapper를
                                        상속하는 하위 클래스(SecurityContextHolderAwareRequestWrapper)로 감싸서 필터 체인상 하단에
                                        위치한 요청 프로세서에 추가 컨텍스트를 제공함  </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> AnonymoutAuthenticationFilter </summary>
                                    <p> <small> 이 필터가 호출되는 시점까지 사용자가 아직 인증을 받지 못했다면 요청 관련 인증 토큰에서
                                        사용자가 익명 사용자로 나타나게 됨 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> RequestCacheAwareFilter </summary>
                                    <p> <small> 인증된 주체를 바탕으로 세션 트래킹을 처리해 단일 주체와 관련한 모든 세션들이 트래킹되도록 도움 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> ExceptionTranslationFilter </summary>
                                    <p> <small> 이 필터는 보호된 요청을 처리하는 동안 발생할 수 있는 기대한 예외의 기본 라우팅과 위임을 처리함 </small> </p>
                                </details>
                                <details>
                                    <summary className="col_g"> FilterSecurityInterceptor </summary>
                                    <p> <small> 이 필터는 권한부여와 관련한 결정을 AccessDecisionManager에게
                                        위임해 권한부여 결정 및 접근 제어 결정을 쉽게 만들어 줌 </small> </p>
                                </details>
                            </span>
                        </span>
                        {/* <span className="sblock">
                            <p className="sstitle" > <a name="">   </a>   </p>
                            <p>  </p>
                            <p>  </p>
                        </span> */}
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                        </span>
                    </span>
                    {/*  */}


                    {/*  */}

                    {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                        </span>
                    </span> */}

                    {/*  */}

                    {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                        </span>
                    </span> */}
                    {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                        </span>
                    </span> */}

                </span>
            </div>
        </>
    );
}

export default SpringStudy;