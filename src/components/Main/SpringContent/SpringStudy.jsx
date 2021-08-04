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
							<details open>
								<summary className="col_g"> 설명 </summary>
								<a href="#스프링이란?" className="col_p"> 스프링이란? </a>
								<a href="#스프링 프레임워크의 기본 동작 원리" className="col_p"> 스프링 프레임워크의 기본 동작 원리 </a>
								<a href="#의존성 주입(Dependency Injection)" className="col_p"> 의존성 주입(Dependency Injection) </a>
								<a href="#AOP(Aspect Oriented Programming)" className="col_p"> AOP(Aspect Oriented Programming) </a>
								<a href="#컨테이너" className="col_p"> 컨테이너 </a>
								<a href="#MVC" className="col_p"> MVC </a>
								<a href="#JPA(Java Persistence API)" className="col_p"> JPA(Java Persistence API) </a>
								<a href="#application.properties" className="col_p"> application.properties </a>
								<a href="#application.yml" className="col_p"> application.yml </a>
								<a href="#xml" className="col_p"> xml </a>
								<a href="#lombok 어노테이션" className="col_p"> lombok 어노테이션 </a>
								<a href="#Spring Security" className="col_p"> Spring Security </a>
								<a href="#Spring Security Filter" className="col_p"> Spring Security Filter </a>
								<a href="#OAuth" className="col_p"> OAuth </a>
								<a href="#" className="col_p">  </a>
								{/* <a href="#" className="col_p"> </a> */}
							</details>
						</details>
					</div>
				</div>
			</div>
			{/* <li> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </li> */}
			<div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
				<ul>
					<span className="lblock">
						<span className="mtitle"> <a name="main"> 스프링 공부 </a> </span>
						<span className="mblock">
							<span className="stitle">
								<a name="스프링이란?"> 스프링이란? </a>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> 스프링</i>  </li>
								<li> 스프링은 Ioc기반의 프레임워크 , 자바 플랫폼 프레임워크 </li>
								<li> 의존성 주입(Denpendency Injection) 의존성 주입 : 개발자가 아닌 컨테이너가 관리하는 빈 객체를 주입하는 방법 </li>
								<li> POJO(Plain Old Java Object) : 기본적인 기능만 가진 자바 객체 </li>
								<li> AOP(Aspect Oriented Programming) : 관점 지향 프로그래밍 ,기존에 사용하던
									프로그래밍 방법은 객체지향 프로그래밍을 사용하지만 중복된 코드들이 많고
									확장,유지 보수를 떨어뜨린다. AOP에서는 핵심기능(서비스)와 공통기능(인증,필터 등)을
									분리하여 유지보수가 더 좋아지며 재활용성이 높아진다.
								</li>
								<li> 컨테이너 : BeanFactory와 ApplicationContext 2개의 대표적인 컨테이너가 있다. 컨테이너는
									인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다. </li>
							</span>
						</span>
						{/*  */}
						<span className="sblock">
							<li className="sstitle"> 스프링의 일반적인 작동과정 </li>
							<li> 1. 유저가 서버에 요청 </li>
							<li>  </li>
							<li>  </li>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="의존성 주입(Dependency Injection)">  의존성 주입(Dependency Injection)</a> </span>
							<li> <small> 객체를 직접 만들지 않고 주입받아 사용하는 방법 </small> </li>
							<span className="sblock">
								<li className="sstitle"><i> 사용하는 이유 </i> </li>
								<li> 1. </li>
								<li> 1. </li>
								<li> 1. </li>
							</span>
							<li className="stitle"> 의존성 주입하는 방법 3가지 </li>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i> 생성자(Constructor) 주입(스프링 팀에서 추천하는 방식) </li>
								<li>  </li>
								<li> 1. 생성자로 객체를 생성하는 시점에 인자에 있는 Bean을 호출 </li>
								<li> 2. Bean을 호출할 때(초기에 생성x) BeanFacotry에 Bean을 만들고 만든 Bean을 찾음 </li>
								<li> 3. Bean을 찾았으므로 생성자 인자에 Bean을 주입 </li>
								<li> </li>
							</span>
							<span className="sblock">
								<li className="sstitle"><i>2.</i> 수정자(Setter) 주입</li>
								<li> 주입 과정 </li>
								<li> 1. &lt;bean&gt;을 보고 찾음, 찾으면 bean객체 생성 </li>
								<li> 2. setter호출,  </li>
								<li> 3. 이후에 주입하려는 빈 객체의 수정자를 호출하여 주입 </li>

							</span>
							<span className="sblock">
								<li className="sstitle"><i>3.</i> 필드(Field) 주입(어노테이션 사용)</li>
								<li> 주입 과정  </li>
								<li> 1. 빈 객체를 생성  </li>
								<li> 2. 빈 객체를 찾아서 주입하는 방법  </li>
								<li>  </li>
							</span>
						</span>
						<span className="mblock">
							<span className="stitle">
								<a name="POJO(Plain Old Java Object)">  POJO(Plain Old Java Object) </a>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> POJO가 탄생한 이유 </i>  </li>
								<li> 자바를 개발할 떄 과거에 개발자가 비즈니스로직 + 트랜잭션,보안,필터 등등을 구현해야
									했다. 그러므로 너무 많은 부담을 지게 되었고 그 부담을 덜기 위하여 기업에서 개발하기 위한
									서비스 EJB(Enterprise Java Beans)가 탄생하여 부담이 줄어들었다. 하지만 작은 서비스를 개발할떄도
									거대한 EJB를 상속받아 사용해야되는 불편함이 있었고 기능을 바꾸기 위해서는 전체적으로 코드를
									수정해야되는 문제점이 발생하였다. EJB는 객체지향의 특징과 장점을 사용할 수 없었다. </li>
								<li> POJO는 이러한 문제점에서 벗어나 객체지향에 집중하고, 클래스나 라이브러리에 종속되지 않아
									원하는 대로 사용을 할 수 있게 되었다. </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> POJO 사용 이유와 장점 </i> </li>
								<li> 특정 환경에 종속이 되지 않는다. </li>
								<li> 객체지향(OOP)를 자유롭게 사용할 수 있다. </li>
								<li> 로우레벨은 분리하면서 필요한 로직을 작성할 수 있다. </li>
								<li> 테스트 작업 환경에 좋다. </li>
								<li> EJB의 서비스와 기술은 그대로 사용하면서 자바 객체지향도 사용을 할 수 있어 좋다. </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle">
								<a name="AOP(Aspect Oriented Programming)">  AOP(Aspect Oriented Programming) </a>
							</span>
							<small> Aspect를 모아서 모듈화 하는 방법 , 각 클래스마다 비슷한 메소드 등을 따로 처리하는 방법 </small>
							<li> 자바에서는 다중상속이 불가능하여 공통기능을 부여하기에 한계가 있다. </li>
							<li> 로그처리, 보안처리, DB 트랜잭션 처리 등 , 코드의 중복을 줄이고 로직을 분리 할 수 있음 </li>
							<li> 관정을 횡단으로 보는 횡단 관심 사항, Cross Cutting Concern(부가적인로직) , Core Concern(비즈니스로직) </li>
							<li> proxy 방법을 이용한다. client - proxy(공통기능) - target(핵심기능) </li>
							<span className="sblock">
								<li className="sstitle"> 관련 용어 </li>

								<li> Aspect : Advice와 Pointcut로 이루어져 있다.  </li>
								<li> Advice : Aspect 해야할 일, 기능 </li>
								<li> Pointcut : 어디에 적용할 지 </li>
								<li> Target : Pointcut에서 적용이 되는 대상  </li>
								<li> Join point : Advice를 사용할 지점(메서드 실행, 필드에서 값을 가져갈 떄 등)  </li>
								<li> Weaving : Advice를 핵심기능에 적용하는 행위  </li>

							</span>
							<span className="sblock">
								<li className="sstitle"> 관련 태그? 메소드? </li>

								<li> aop:before : 메소드 실행전에 advice실행 </li>
								<li> aop:after-returning : 정상적으로 메소드 실행 후에 advice 실행  </li>
								<li> aop:after-throwing : 메소드 실행중 exception 발생시 advice 실행 </li>
								<li> aop:after : 메소드 실행중 exception이 발생해도 advice 실행 </li>
								<li> aop:around : 메소드 실행 전/후 및 exception 발생시 advice 실행 </li>

							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i>  </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i>  </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i>  </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle">
								<a name="컨테이너">  컨테이너 </a>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> 컨테이너의 빈 객체 </i>  </li>
								<li> CGLIB라는 바이트코드 조작 라이브러리를 이용하여 Bean객체를 싱글턴패턴으로 유지하게 한다.
									클래스를 복제?한 클래스객체를 따로 만들어서 컨테이너에서 만들어서 사용한다. 컨테이너에
									Bean객체가 없으면 Bean객체를 생성하고 존재한다면 기존에 Bean객체를 반환해준다. </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i>  </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1.</i>  </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle">
								<a name="MVC">  MVC </a>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>DAO(Data Access Object)</i>  </li>
								<li> DB에 제일 가까이서 접근하는 객체 </li>
								<li> DB와 Service 구간사이에서 DB데이터를 보내고 받는다.</li>
								<li> 스프링에서는 직접 구현하지않고 CrudRepositoy나 JpaReposioty를 상속해서 처리한다. </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>DTO(Data Transfer Object) </i>  </li>
								<li> controller와 service사이에서 사용할 데이터를 주고 받는 객체 </li>
								<li> Entity와 비슷하지만 Entity는 DB와 데이터를 주고 받는 용도로 사용하고
									다른 곳에서 데이터를 주고 받는 용도로는 dto를 사용하는 것을 추천
								</li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>VO(Value Object)</i>  </li>
								<li> VO는 DTO와 비슷하지만 오직 읽는 용도로만 사용하는 것이다. </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>Entity</i>  </li>
								<li> Entity </li>
								<li> toEntity() 메소드를 통해서 DTO에 필요한 부분만을 사용해서 Entity로 만들어서 사용 </li>
								<li> 실제 DB 테이블과 일치되는 클래스 </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> Controller </i>  </li>
								<small> URL을 맵핑하고 service 로직을 처리 , 반환 값으로 템플릿(view)을 응답한다. </small>
								<span className='mblock'>
									<li>  @Controller </li>
									<li>  public class 클래스명 {'{'} </li>
									<li>  {'@GetMapping("/URL경로") public String 메소드명() { return "html파일명"; } '}</li>
									<li>  {'@PostMapping("/URL경로") public String 메소드명(Model model) {  '} </li>
									<li>  {' model.addAttribute("key","value"); 서비스로직 + return "html파일명"; } '} </li>
									<li>  {'}'} </li>
								</span>
								<li>  </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> Restcontroller </i>  </li>
								<small> URL을 맵핑하고 service 로직을 처리 , 반환 값으로 JSON과 같은 객체를 응답한다. </small>
								<li>  </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> service </i>  </li>
								<li> 비즈니스 로직을 구현 </li>
								<li> DB에 저장하거나 비즈니스 로직을 처리 </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> enity </i>  </li>
								<li> DB테이블과 연결되는 객체  </li>
								<li> JPA에서는 Entity객체를 사용 </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> repository </i>  </li>
								<li> 데이터를 가져오거나 조작하는 함수를 정의 </li>
								<li> JpaRepository&lt;Entity클래스,@Id타입&gt;나 CrudRepository 상속하여 그 안에 함수를 사용 </li>
								<li> <a href="https://docs.spring.io/spring-data/jpa/docs/1.10.1.
                            RELEASE/reference/html/#jpa.sample-app.finders.strategies"> 참고 사이트 </a></li>
								<span className="mblock">
									<li className="sstitle"> JPA 메소드 종류 </li>
									<li> save() : 레코드 저장(insert, update) </li>
									<li> findOne() : primary key로 레코드 한건 찾기 </li>
									<li> findAll() : 전체 레코드 불러오기, sort기능, pageable기능 </li>
									<li> count() : 레코드 갯수</li>
									<li> delete() : 레코드 삭제 </li>
									<li className="sstitle"> 쿼리 메소드 종류 </li>
									<li> findBy : 쿼리를 요청하는 메서드 </li>
									<li> countBy : 쿼리 결과 레코드 수를 요청하는 메서드 </li>
									<li className="sstitle"> 쿼리 메소드 키워드 종류 </li>
									<li> And : 여러필드를 검색 ( findByUserIdAndUserPwd(String userid,String userpwd)) </li>
									<li> Or : 여러필드를 검색 ( findByUserIdOrUserPwd(String userid,String userpwd)) </li>
									<li> Between : 필드의 두 값 사이의 항목 검색 findByCreatedAtBetween() </li>
									<li> LessThan : 작은 항목 검색 (findByAgeLessThanEqual(int)) </li>
									<li> GreaterThanEqual : 크거나 같은 항목 (findByAgeGraterThanEqual(int)) </li>
									<li> Like : like 사용 (findByNameLike(String)) </li>
									<li> IsNull : null인 항목 검색 (findByJoblsNull()) </li>
									<li> In : 여러 값 중에 하나의 항목 (findByJob(String...)) </li>
									<li> OrderBy : 검색 결과를 정렬하여 전달 (findByEmailOrderByNameAsc(String)) </li>
								</span>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> static </i>  </li>
								<li> css,js,img 등 자원을 모아놓는 공간 </li>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i> templates </i>  </li>
								<li> 템플릿을 모아놓는 공간 </li>
							</span>
						</span>
						<span className="mblock">
							<span className="stitle">
								<a name="스프링 프레임워크의 기본 동작 원리"> 스프링 프레임워크의 기본 동작 원리 </a>
							</span>
							<span className="sblock">
								<li className="sstitle" ><i>1. </i>  </li>
								<li> 1. 클라이언트 요청 </li>
								<li> 2. Dispatcher Servlet 접근 </li>
								<li> 3. Handler Mapping 참조하여 Controller 연결 </li>
								<li> 4. Mapping된 Controller에 서비스 로직에 따라 DAO,Entity등을 통해 DB에 접근  </li>
								<li> 5. 모델과 뷰 객체를 담아 DispatcherServlet에 반환 </li>
								<li> 6. ViewResolver를 통해 View와 연결되어 화면으로 출력 </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="JPA(Java Persistence API)"> JPA(Java Persistence API) </a> </span>

							<li> <small> 자바의 영속성 관리와 ORM을 위한 표준 기술  </small> </li>
							<li> <small> DBMS가 바뀌어도 타입 등을 변경할 필요가 없다는 장점이 있지만 쿼리문에 대한
								사용법을 자세히 알지 못하면 사용하기 어렵다. </small> </li>
							<li> <small> JPA의 구현체 Hibernate,EclipseLink,DataNucleus  </small> </li>
							{/* <li> <small>   </small> </li> */}

							<span className="sblock">
								<span className="stitle"> 쿼리 메소드 </span>

								<li> <small> 컬럼은 대문자로 시작 </small> </li>
								<span className="sstitle"> 레포지토리.findByAll() </span>
								<li> select * from 테이블 </li>
								<span className="sstitle">  findBy컬럼1(String 컬럼) </span>
								<li> select *  from 테이블 where 컬럼1 = 'userid' </li>
								<span className="sstitle">  findBy컬럼1And컬럼2(String 컬럼,String 컬럼) </span>
								<li> select * from 테이블 where 컬럼1='userid' and 컬럼2='userpwd';   </li>
								<span className="sstitle">  findBy컬럼1Or컬럼2 </span>
								<li> select * from 테이블 where 컬럼1='userid' or 컬럼2='userpwd';  </li>
								<span className="sstitle">   </span>
								<li>  </li>
								<span className="sstitle">   </span>
								<li>  </li>
								<span className="sstitle">   </span>
								<li>  </li>

							</span>

						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle" > <a name="application.properties"> application.properties</a> </span>
							<span className="sblock">
								<span className="mblock">
									{/*  */}
									<span className="sstitle"> Server </span>
									<span className="sblock">

										<span className="sstitle"> server.address=localhost </span>
										<li> 서버 경로 설정 </li>
										<span className="sstitle"> server.port=8080 </span>
										<li> 서버 포트 설정 </li>
										{/* <span className="sstitle"> </span>
                                        <li>  </li> */}

									</span>
									{/*  */}
									<span className="sstitle"> DataSource </span>
									<span className="sblock">
										<span className="sstitle"> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver  </span>
										<li> DB 드라이버 설정 </li>
										<span className="sstitle"> spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8&amp;serverTimezone=UTC  </span>
										<li> DB 저장소 경로와 스키마, 인코딩 , 시간 등 설정 </li>
										<span className="sstitle"> spring.datasource.username=DB유저이름  </span>
										<li> DB 유저 아이디 설정 </li>
										<span className="sstitle"> spring.datasource.password=DB유저비번  </span>
										<li> DB 유저 비번 설정 </li>
										{/* <span className="sstitle">   </span>
                                            <li>  </li> */}
									</span>
									{/*  */}
									<span className="sstitle"> JPA </span>
									<span className="sblock">

										<span className="sstitle"> spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.MySQL5InnoDBDialect  </span>
										<li> dialect 설정 </li>
										<span className="sstitle"> spring.jpa.properties.hibernate.show-sql=true  </span>
										<li> hibernate가 실행하는 SQL문을 로그로 확인 가능 </li>
										<span className="sstitle"> spring.jpa.hibernate.ddl-auto=[none,create-drop,create,update,validate]  </span>
										<li> none : 아무것도 실행x </li>
										<li> create-drop : SessionFactory가 시작될 떄 drop실행하고 종료될떄 drop실행 </li>
										<li> create : SeesionFactory 시작될 떄 drop실행하고 생성된 DDL 실행 </li>
										<li> update : 변경된 스키마를 적용 </li>
										<li> validate : 변경된 스키마가 있으면 변경점 출력, 어플리케이션 종료 </li>
										<span className="sstitle"> spring.jpa.properties.hibernate.format_sql=true  </span>
										<li> 콘솔에 출력되는 JPA 실행 쿼리를 가독성 있게 보여준다. </li>
										<span className="sstitle"> spring.jpa.properties.hibernate.use_sql_comments=true  </span>
										<li> 디버깅 정보 출력 </li>
										<span className="sstitle"> spring.jpa.generate-ddl  </span>
										<li> @Entity붙은 클래스를 찾아 ddl을 생성하고 실행  </li>
										<span className="sstitle">   </span>
										<li>  </li>

									</span>
									{/*  */}
									<span className="sstitle"> 로깅 레벨 </span>
									<span className="sblock">
										<span className="sstitle"> logging.level.org.hibernate=info </span>
										<li>  </li>
									</span>
									{/*  */}
									<span className="sstitle"> Thymeleaf </span>
									<span className="sblock">
										<span className="sstitle"> spring.thymeleaf.cache=false </span>
										<li> 바꾼 데이터를 실시간 반영하기 위해서 설정 </li>
										<span className="sstitle"> spring.thymeleaf.prefix=classpath:/templates/ </span>
										<li> thymeleaf 참조 경로 설정 </li>
										<span className="sstitle"> spring.thymeleaf.suffix=.html </span>
										<li> return할 때 .html 생략가능 </li>
									</span>
									{/*  */}
									<span className="sstitle"> livereload? </span>
									<span className="sblock">
										<span className="sstitle"> spring.devtools.livereload.enabled=true </span>
										<li> 정적리소스에 변화가 있을 때 화면 렌더링 </li>
									</span>
									{/*  */}
									<span className="sstitle">  </span>
									<span className="sblock">
										<span className="sstitle"> </span>
										<li>  </li>
									</span>
									{/*  */}
								</span>
							</span>
						</span>

						<span className="mblock">
							<span className="stitle"> <a name="application.yml"> application.yml  </a> </span>
							<span className="sblock">

								<span className="sstitle"> DataSource </span>
								<span className="mblock">
									<li> spring: </li>
									<li> &nbsp;datasource: </li>
									<li> &nbsp;&nbsp;driver-class-name: com.mysql.cj.jdbc.Driver </li>
									<li> &nbsp;&nbsp;url: jdbc:mysql://localhost:3306/스키마이름?serverTimezone=UTC&amp;characterEncoding=UTF-8 </li>
									<li> &nbsp;&nbsp;username: DB유저이름 </li>
									<li> &nbsp;&nbsp;password: DB유저비번 </li>
								</span>
								<span className="sstitle"> JPA </span>
								<span className="mblock">
									<li> <small> JPA 데이터베이스 플랫폼을 지정, MysQL InnoDB사용 </small> </li>
									<li> &nbsp;database-platform: org.hibernate.dialect.MySQL5InnoDBDialect </li>
									<li> <small> 웹 요청이 완료될 때까지 동일한 EntityManager를 갖도록 해줍니다., 성능과 확장에 좋지 않다고 하는데 정확하게는 아직 모름 </small> </li>
									<li> &nbsp;open-in-view: false </li>
									<li> <small> 콘솔에 JPA 쿼리를 출력 </small> </li>
									<li> &nbsp;show-sql: true </li>
									<li> &nbsp;hibernate: </li>
									<li> &nbsp;&nbsp;format_sql: true </li>
									<li> <small> none, create(기존테이블을삭제후다시생성), create-drop, update(변경된 스키마만 반영), validate(엔티티와 테이블이 정상적으로 매칭이 되었는지 확인, 운영을 할 떄 사용한다고 함) </small> </li>
									<li> &nbsp;&nbsp;ddl-auto: update </li>
									{/* <li> <li> <small> </small> </li> </li>
                                    <li>  </li> */}
								</span>
								{/* <span className="sstitle"> </span>
                                <li>  </li> */}

							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle">
								<a name="lombok 어노테이션"> lombok 어노테이션  </a>
							</span>
							<small>  어노테이션으로 코드를 자동으로 만들어주는 라이브러리 </small>
							<li> 가독성, 유지보수, 자동생성으로 생산성 향상 </li>
							<span className="sblock">
								<details>
									<summary className="sstitle" ><i> 어노테이션의 종류 </i> </summary>
									<ol>
										<li> @Value : 프로퍼티에서 정의한 값을 가져오는 방법 </li>
										<li> @Controller : Model 객체를 이용하여 데이터를 담고 view를 찾아 이동하는 역할 </li>
										<li> @PostMapping : Post방식으로 요청을 받을 때 맵핑을 처리함 </li>
										<li> @GetMapping :  Get방식으로 요청을 받을 때 맵핑을 처리함 </li>
										<li> @RequestBody : http요청 데이터를 담은 공간 </li>
										<li> @ReponseBody : http응답 데이터를 담은 공간 </li>
										<li> @RestController(@Controller + @ResponseBody) : 객체로 반환하고 JSON이나 XML형식으로 http에 담아서 응답  </li>
										<li> @RequestMapping("") : 어떤 Controller에 어떤 메소드를 처리할지 맵핑하는 용도  </li>
										<li> @SuppressWarnings("unchecked") :   </li>
										<span className="mblock">

											<li> value(String) : URL값으로 맵핑 조건으로 사용 </li>
											<li> method : HTTP Request 메소드값을 맵핑 조건으로 사용 </li>
											<li> params : HTTP Request 파라미터(GET,POST 등)를 맵핑 조건으로 사용 </li>
											<li> consumes : Content-Type request 헤더가 일치할 경우 URL이 호출됨 </li>
											<li> produces : 설정과 Accept request 헤더가 일치할 경우에만 URL이 호출됨 </li>

										</span>
										<li> @RequestParam : Controller메소드의 파라미터와 웹 요청 파라미터와 맵핑하는 용도 </li>
										<li> @ModelAttribute : Controller 메소드의 파라미터나 리턴값을 Model 객체와 바인딩하기 위한 용도 </li>
										<li> @SessionAttributes : Model 객체를 세션에 젖아하고 사용하기 위한 용도 </li>
										<li> @RequestPart : Multipart 요청의 경우, 웹 요청 파라미터와 맵핑 용도 </li>
										<li> @CommandMap : Controller메소드의 파라미터를 Map형태로 받을 떄 웹 요청 파라미터와 맵핑하기 위한 용도 </li>
										<li> @ControllerAdvice : Controller에 쓰이는 공통기능을 모듈화하여 전역으로 쓰기 위한 용도 </li>
										<li> @Transactional : 트랜잭션 속성을 클래스 내의 모든 메서드에게 부여</li>
										<li> @NonNUll : null을 허용하지 않을 경우 </li>
										<li> @Nullable : null을 허용할 경우 </li>
										<li>  </li>
									</ol>
								</details>
								<details>
									<summary className="sstitle" ><i> lombok 어노테이션의 종류 </i> </summary>
									<ul>
										<li> @Getter : getter </li>
										<li> @Settter : setter</li>
										<li> @Entity : Entity객체 ,DB테이블과 맵핑되는 객체 </li>
										<li> @Table(name="테이블이름지정") : Entity가 맵핑될 테이블을 지정 </li>
										<li> @Id : JPA가 식별할 기본키를 정의 </li>
										<li> @GenerateValue(strategy = GenerationType.{"["}IDENTITY,ATUO,SEQUENCE,TABLE{"]"}) </li>
										<li> <small> 정의 : 기본키를 자동생성하는 방법 ( 종류 4가지 ) </small> </li>
										<li> <small> AUTO : (persistence provider)가 특정 DB에 맞게 자동 선택 </small> </li>
										<li> <small> IDENTITY : DB의 identity 컬럼을 이용 </small> </li>
										<li> <small> TABLE : 유일성이 보장된 데이터베이스 테이블을 이용 , @TableGenerator </small> </li>
										<li>  </li>
										<li> <small> SEQUENCE, generator="시퀸스생성자이름" : DB의 시퀸스 컬럼을 이용 , @SequenceGenerator 필요 </small> </li>
										<li> @SequenceGenrator(name="시퀸스생성자이름", sequenceName=""(매핑할 DB시퀸스 이름), initialValue=1(시작값), allocationSize=1(증가값) )</li>
										<li> @Column : DB필드 <br />속성 : name="DB에 매핑되는 컬럼명", unique=true, nullable=true , length=num , columnDefinition="설명?"</li>
										<li> @Temporal : 시간 날짜 타입을 지정하는 어노테이션 </li>
										<li> @Transient : 테이블의 어떤 컬럼과 매핑하지 않을 것을 나타내는 어노테이션 </li>
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
										<li> @Order(숫자) : 순서가 낮을 수록 우선순위, 빈의 등록 순서를 결정  </li>
										<li> @EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true) : @Secured활성화, @perAuthorize,@PostAuthorize 활성화 </li>
										<li> @Secured("ROLE_ADMIN") : 특정 메소드 실행전 에 권한을 지정할 수 있다. </li>
										<li> @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')") : 특정 메소드에 권한을 1개이상 지정 가능하다.  </li>
										<li> @PostAuthorize : 메소드가 끝난 뒤에 ?? </li>
										<li> </li>
									</ul>
								</details>
							</span>
						</span>
						{/*  */}

						<span className="mblock">
							<span className="stitle"> <a name="Spring Security"> Spring Security </a> </span>
							<small> 사용자의 인증,권한,보안 처리를 간단하게 구현 </small>
							<li> <small> 인증방식 : credential방식(사용자명,비번) , 이중인증(개인정보인증+추가인증(OTP) , ) </small> </li>
							<span className="sblock">
								<span className="sstitle"> 용어 </span>
								<li> Principal(접근주체) : 보호된 대상에 접근하는 대상 </li>
								<li> Credential(비밀번호) : Resource에 접근하는 대상의 비밀번호 </li>
								<li> Authentication(인증) : 현재 유저가 누구인지 확인, 작업을 수행할 수 있는지 여부를 판단 </li>
								<li> Authorize(인가) : 현재 유저가 어떤 서비스,페이지에 접근할 수 있는 권한이 있는지 검사 </li>
								<li> Authority(권한) : 특정 작어에 수행 권한이 있는지 판단 (GUEST,USER,MEMBER,ADMIN) </li>

								<span className="sstitle"> 스프링 시큐리티 메소드,객체 </span>
								<span className="mblock">
									<details>
										<summary> {' '} </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle">
												<li>  </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> {' '} </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle">
												<li>  </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AbstractAuthenticationToken [AC] </summary>
										<small> implements Authentication, CredentialsContainer  </small>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> {'private final Collection<GrantedAuthority> authorities;'} </li>
												<li> private Object details; </li>
												<li> private boolean authenticated = false; </li>
											</span>
											<span className="sstitle"> {'public AbstractAuthenticationToken(Collection<? extends GrantedAuthority> authorities)'} </span>
											<span className="mblock">
												<li> {' if (authorities == null) {  '} </li>
												<li> {'     this.authorities = AuthorityUtils.NO_AUTHORITIES;  '} </li>
												<li> {'     return;  '} </li>
												<li> {' }  '} </li>
												<li> {' for (GrantedAuthority a : authorities) {  '} </li>
												<li> {'     Assert.notNull(a, "Authorities collection cannot contain any null elements");  '} </li>
												<li> {' }  '} </li>
												<li> {' this.authorities = Collections.unmodifiableList(new ArrayList<>(authorities));  '} </li>
											</span>
											<span className="sstitle"> {'public Collection<GrantedAuthority> getAuthorities()'} </span>
											<span className="mblock">
												<li> return this.authorities; </li>
											</span>
											<span className="sstitle"> public String getName() </span>
											<span className="mblock">
												<li> {' if (this.getPrincipal() instanceof UserDetails) { '} </li>
												<li> {' 			return ((UserDetails) this.getPrincipal()).getUsername(); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		if (this.getPrincipal() instanceof AuthenticatedPrincipal) { '} </li>
												<li> {' 			return ((AuthenticatedPrincipal) this.getPrincipal()).getName(); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		if (this.getPrincipal() instanceof Principal) { '} </li>
												<li> {' 			return ((Principal) this.getPrincipal()).getName(); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		return (this.getPrincipal() == null) ? "" : this.getPrincipal().toString(); '} </li>
											</span>
											<span className="sstitle"> public boolean isAuthenticated() </span>
											<span className="mblock">
												<li> return this.authenticated; </li>
											</span>
											<span className="sstitle"> public void setAuthenticated(boolean authenticated) </span>
											<span className="mblock">
												<li> this.authenticated = authenticated; </li>
											</span>
											<span className="sstitle"> public Object getDetails() </span>
											<span className="mblock">
												<li> return this.details; </li>
											</span>
											<span className="sstitle"> public void setDetails(Object details) </span>
											<span className="mblock">
												<li> this.details = details;  </li>
											</span>
											<span className="sstitle"> public void eraseCredentials() </span>
											<span className="mblock">
												<li> eraseSecret(getCredentials()); </li>
												<li> 		eraseSecret(getPrincipal()); </li>
												<li> 		eraseSecret(this.details); </li>
											</span>
											<span className="sstitle"> private void eraseSecret(Object secret) </span>
											<span className="mblock">
												<li> {'if (secret instanceof CredentialsContainer) { '} </li>
												<li> {'    ((CredentialsContainer) secret).eraseCredentials(); '} </li>
												<li> {'} '} </li>
											</span>
											<span className="sstitle"> public boolean equals(Object obj) </span>
											<span className="mblock">
												<li> {' if (!(obj instanceof AbstractAuthenticationToken)) { return false; } '} </li>
												<li> {' AbstractAuthenticationToken test = (AbstractAuthenticationToken) obj; '} </li>
												<li> {' if (!this.authorities.equals(test.authorities)) { return false; } '} </li>
												<li> {' if ((this.details == null) && (test.getDetails() != null)) { return false; } '} </li>
												<li> {' if ((this.details != null) && (test.getDetails() == null)) return false;} '} </li>
												<li> {' if ((this.details != null) && (!this.details.equals(test.getDetails()))) {return false;} '} </li>
												<li> {' if ((this.getCredentials() == null) && (test.getCredentials() != null)) {return false;} '} </li>
												<li> {' if ((this.getCredentials() != null) && !this.getCredentials().equals(test.getCredentials())) {return false;} '} </li>
												<li> {' if (this.getPrincipal() == null && test.getPrincipal() != null) {return false;} '} </li>
												<li> {' if (this.getPrincipal() != null && !this.getPrincipal().equals(test.getPrincipal())) {return false;} '} </li>
												<li> {' return this.isAuthenticated() == test.isAuthenticated(); '} </li>
											</span>
											<span className="sstitle"> public int hashCode() </span>
											<span className="mblock">
												<li> {'int code = 31;int code = 31; '} </li>
												<li> {'for (GrantedAuthority authority : this.authorities) {code ^= authority.hashCode();}for (GrantedAuthority authority : this.authorities) {code ^= authority.hashCode();} '} </li>
												<li> {'if (this.getPrincipal() != null) {code ^= this.getPrincipal().hashCode();}if (this.getPrincipal() != null) {code ^= this.getPrincipal().hashCode();} '} </li>
												<li> {'if (this.getCredentials() != null) {code ^= this.getCredentials().hashCode();}if (this.getCredentials() != null) {code ^= this.getCredentials().hashCode();} '} </li>
												<li> {'if (this.getDetails() != null) {code ^= this.getDetails().hashCode();}if (this.getDetails() != null) {code ^= this.getDetails().hashCode();} '} </li>
												<li> {'if (this.isAuthenticated()) {code ^= -37;}if (this.isAuthenticated()) {code ^= -37;} '} </li>
												<li> {'return code;return code; '} </li>
											</span>
											<span className="sstitle"> public String toString() </span>
											<span className="mblock">
												<li> {' 		StringBuilder sb = new StringBuilder(); '} </li>
												<li> {' 		sb.append(getClass().getSimpleName()).append(" ["); '} </li>
												<li> {' 		sb.append("Principal=").append(getPrincipal()).append(", "); '} </li>
												<li> {' 		sb.append("Credentials=[PROTECTED], "); '} </li>
												<li> {' 		sb.append("Authenticated=").append(isAuthenticated()).append(", "); '} </li>
												<li> {' 		sb.append("Details=").append(getDetails()).append(", "); '} </li>
												<li> {' 		sb.append("Granted Authorities=").append(this.authorities); '} </li>
												<li> {' 		sb.append("]"); '} </li>
												<li> {' 		return sb.toString(); '} </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> {' AbstractDaoAuthenticationConfigurer<B extends ProviderManagerBuilder<B>, C extends AbstractDaoAuthenticationConfigurer<B, C, U>, U extends UserDetailsService> '}  [AC]</summary>
										<small> {'extends UserDetailsAwareConfigurer<B, U>'}  </small>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private DaoAuthenticationProvider provider = new DaoAuthenticationProvider(); </li>
												<li> private final U userDetailsService; </li>
											</span>
											<span className="sstitle"> AbstractDaoAuthenticationConfigurer(U userDetailsService) </span>
											<span className="mblock">
												<li> {' this.userDetailsService = userDetailsService; '} </li>
												<li> {' this.provider.setUserDetailsService(userDetailsService); '} </li>
												<li> {' if (userDetailsService instanceof UserDetailsPasswordService) { '} </li>
												<li> {' 	this.provider.setUserDetailsPasswordService((UserDetailsPasswordService) userDetailsService); '} </li>
												<li> {' } '} </li>
											</span>
											<span className="sstitle"> {'public C withObjectPostProcessor(ObjectPostProcessor<?> objectPostProcessor)'} </span>
											<span className="mblock">
												<li> addObjectPostProcessor(objectPostProcessor); </li>
												<li> return (C) this; </li>
											</span>
											<span className="sstitle"> public C passwordEncoder(PasswordEncoder passwordEncoder) </span>
											<span className="mblock">
												<li> this.provider.setPasswordEncoder(passwordEncoder); </li>
												<li> return (C) this; </li>
											</span>
											<span className="sstitle"> public C userDetailsPasswordManager(UserDetailsPasswordService passwordManager </span>
											<span className="mblock">
												<li> this.provider.setUserDetailsPasswordService(passwordManager); </li>
												<li> return (C) this; </li>
											</span>
											<span className="sstitle"> public void configure(B builder) throws Exception </span>
											<span className="mblock">
												<li> this.provider = postProcess(this.provider); </li>
												<li> builder.authenticationProvider(this.provider); </li>
											</span>
											<span className="sstitle"> public U getUserDetailsService() </span>
											<span className="mblock">
												<li> return this.userDetailsService; </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AbstractConfiguredSecurityBuilder{"<O, B extends SecurityBuilder<O>>"} [AC] </summary>
										<span className="sblock">
											<li> <small> extends AbstractSecurityBuilder{"<O>"} </small> </li>
											<span className="sstitle"> 멤버변수 </span>
											<span className="mblock">

												<li> private final Log logger = LogFactory.getLog(getClass()); </li>
												<li> private final LinkedHashMap&lt;Class&lt;? extends SecurityConfigurer&lt;O, B&gt;&gt;, List&lt;SecurityConfigurer&lt;O, B&gt;&gt;&gt; </li>
												<li> private final List&lt;SecurityConfigurer&lt;O, B&gt;&gt; configurersAddedInInitializing = new ArrayList&lt;&gt;(); </li>
												<li> private final Map&lt;Class&lt;?&gt;, Object&gt; sharedObjects = new HashMap&lt;&gt;(); </li>
												<li> private final boolean allowConfigurersOfSameType; </li>
												<li> private BuildState buildState = BuildState.UNBUILT; </li>
												<li> private ObjectPostProcessor&lt;Object&gt; objectPostProcessor; </li>
											</span>
											<span className="sstitle"> protected AbstractConfiguredSecurityBuilder(ObjectPostProcessor&lt;Object&gt; objectPostProcessor) </span>
											<span className="mblock">
												<li> this(objectPostProcessor, false); </li>
											</span>
											<span className="sstitle"> protected AbstractConfiguredSecurityBuilder(ObjectPostProcessor&lt;Object&gt; objectPostProcessor,
												boolean allowConfigurersOfSameType) </span>
											<span className="mblock">
												<li> Assert.notNull(objectPostProcessor, "objectPostProcessor cannot be null"); </li>
												<li> this.objectPostProcessor = objectPostProcessor; </li>
												<li> this.allowConfigurersOfSameType = allowConfigurersOfSameType; </li>
											</span>
											<span className="sstitle"> public O getOrBuild() </span>
											<span className="mblock">
												<li> {' if (!isUnbuilt()) { return getObject(); } '} </li>
												<li> {' try { return build(); } '} </li>
												<li> {' catch (Exception ex) { '} </li>
												<li> {' this.logger.debug("Failed to perform build. Returning null", ex); '} </li>
												<li> {' return null; } '} </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurerAdapter&lt;O, B&gt;&gt; C apply(C configurer) throws Exception </span>
											<span className="mblock">
												<li> configurer.addObjectPostProcessor(this.objectPostProcessor); </li>
												<li> configurer.setBuilder((B) this); </li>
												<li> add(configurer); </li>
												<li> return configurer; </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; C apply(C configurer) throws Exception </span>
											<span className="mblock">
												<li> add(configurer); </li>
												<li> return configurer; </li>
											</span>
											<span className="sstitle"> ublic &lt;C&gt; void setSharedObject(Class&lt;C&gt; sharedType, C object) </span>
											<span className="mblock">
												<li> this.sharedObjects.put(sharedType, object); </li>
											</span>
											<span className="sstitle"> public &lt;C&gt; C getSharedObject(Class&lt;C&gt; sharedType) </span>
											<span className="mblock">
												<li> return (C) this.sharedObjects.get(sharedType); </li>
											</span>
											<span className="sstitle"> public Map&lt;Class&lt;?&gt;, Object&gt; getSharedObjects() </span>
											<span className="mblock">
												<li> return Collections.unmodifiableMap(this.sharedObjects); </li>
											</span>
											<span className="sstitle"> private &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; void add(C configurer) </span>
											<span className="mblock">
												<li> {'Assert.notNull(configurer, "configurer cannot be null"); '} </li>
												<li> {'Class&lt;? extends SecurityConfigurer&lt;O, B&gt;&gt; clazz  '} </li>
												<li> {'= (Class&lt;? extends SecurityConfigurer&lt;O, B&gt;&gt;) configurer.getClass(); '} </li>
												<li> {'synchronized (this.configurers) { '} </li>
												<li> {'	if (this.buildState.isConfigured()) {  '} </li>
												<li> {'        throw new IllegalStateException("Cannot apply " + configurer + " to already built object"); } '} </li>
												<li> {'	List&lt;SecurityConfigurer&lt;O, B&gt;&gt; configs = null; '} </li>
												<li> {'	if (this.allowConfigurersOfSameType) { configs = this.configurers.get(clazz); } '} </li>
												<li> {'	configs = (configs != null) ? configs : new ArrayList&lt;&gt;(1); '} </li>
												<li> {'	configs.add(configurer); '} </li>
												<li> {'	this.configurers.put(clazz, configs); '} </li>
												<li> {'	if (this.buildState.isInitializing()) { this.configurersAddedInInitializing.add(configurer); } '} </li>
												<li> {'} '} </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; List&lt;C&gt; getConfigurers(Class&lt;C&gt; clazz) </span>
											<span className="mblock">
												<li> {' List&lt;C&gt; configs = (List&lt;C&gt;) this.configurers.get(clazz); '} </li>
												<li> {' if (configs == null) { return new ArrayList&lt;&gt;(); } '} </li>
												<li> {' return new ArrayList&lt;&gt;(configs); '} </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; List&lt;C&gt; removeConfigurers(Class&lt;C&gt; clazz) </span>
											<span className="mblock">
												<li> {'List&lt;C&gt; configs = (List&lt;C&gt;) this.configurers.remove(clazz); '} </li>
												<li> {'if (configs == null) { return new ArrayList&lt;&gt;(); } '} </li>
												<li> {'return new ArrayList&lt;&gt;(configs); '} </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; C getConfigurer(Class&lt;C&gt; clazz) </span>
											<span className="mblock">
												<li> {'List&lt;SecurityConfigurer&lt;O, B&gt;&gt; configs = this.configurers.get(clazz); '} </li>
												<li> {'if (configs == null) { return null; } '} </li>
												<li> {'Assert.state(configs.size() == 1, '} </li>
												<li> {'		() -&gt; "Only one configurer expected for type " + clazz + ", but got " + configs); '} </li>
												<li> {'return (C) configs.get(0); '} </li>
											</span>
											<span className="sstitle"> public &lt;C extends SecurityConfigurer&lt;O, B&gt;&gt; C removeConfigurer(Class&lt;C&gt; clazz) </span>
											<span className="mblock">
												<li> {'List&lt;SecurityConfigurer&lt;O, B&gt;&gt; configs = this.configurers.remove(clazz);'} </li>
												<li> {'if (configs == null) { return null; }'} </li>
												<li> {'Assert.state(configs.size() == 1,'} </li>
												<li> {'		() -&gt; "Only one configurer expected for type " + clazz + ", but got " + configs);'} </li>
												<li> {'return (C) configs.get(0);'} </li>
											</span>
											<span className="sstitle"> public B objectPostProcessor(ObjectPostProcessor&lt;Object&gt; objectPostProcessor) </span>
											<span className="mblock">
												<li> {'Assert.notNull(objectPostProcessor, "objectPostProcessor cannot be null");'} </li>
												<li> {'this.objectPostProcessor = objectPostProcessor;'} </li>
												<li> {'return (B) this;'} </li>
											</span>
											<span className="sstitle"> protected &lt;P&gt; P postProcess(P object) </span>
											<span className="mblock">
												<li> return this.objectPostProcessor.postProcess(object); </li>
											</span>
											<span className="sstitle"> protected final O doBuild() throws Exception </span>
											<span className="mblock">
												<li> {'synchronized (this.configurers) {'} </li>
												<li> {'	this.buildState = BuildState.INITIALIZING;'} </li>
												<li> {'	beforeInit();'} </li>
												<li> {'	init();'} </li>
												<li> {'	this.buildState = BuildState.CONFIGURING;'} </li>
												<li> {'	beforeConfigure();'} </li>
												<li> {'	configure();'} </li>
												<li> {'	this.buildState = BuildState.BUILDING;'} </li>
												<li> {'	O result = performBuild();'} </li>
												<li> {'	this.buildState = BuildState.BUILT;'} </li>
												<li> {'	return result;'} </li>
												<li> {'}'} </li>
											</span>
											<span className="sstitle"> protected void beforeInit() throws Exception { } </span>
											<span className="sstitle"> protected void beforeConfigure() throws Exception { } </span>
											<span className="sstitle"> protected abstract O performBuild() throws Exception; </span>
											<span className="sstitle"> </span>

											<span className="sstitle"> private void init() throws Exception </span>
											<span className="mblock">
												<li> {'Collection&lt;SecurityConfigurer&lt;O, B&gt;&gt; configurers = getConfigurers();'} </li>
												<li> {'for (SecurityConfigurer&lt;O, B&gt; configurer : configurers) {'} </li>
												<li> {'	configurer.init((B) this); }'} </li>
												<li> {'for (SecurityConfigurer&lt;O, B&gt; configurer : this.configurersAddedInInitializing) {'} </li>
												<li> {'	configurer.init((B) this); }'} </li>
											</span>
											<span className="sstitle"> private void configure() throws Exception </span>
											<span className="mblock">
												<li> {'Collection&lt;SecurityConfigurer&lt;O, B&gt;&gt; configurers = getConfigurers();'} </li>
												<li> {'for (SecurityConfigurer&lt;O, B&gt; configurer : configurers) {'} </li>
												<li> {'	configurer.configure((B) this); }'} </li>
											</span>
											<span className="sstitle"> private Collection&lt;SecurityConfigurer&lt;O, B&gt;&gt; getConfigurers() </span>
											<span className="mblock">
												<li> {'List&lt;SecurityConfigurer&lt;O, B&gt;&gt; result = new ArrayList&lt;&gt;();'} </li>
												<li> {'for (List&lt;SecurityConfigurer&lt;O, B&gt;&gt; configs : this.configurers.values()) {'} </li>
												<li> {'	result.addAll(configs); }'} </li>
												<li> {'return result;'} </li>
											</span>
											<span className="sstitle"> private boolean isUnbuilt() </span>
											<span className="mblock">
												<li> {'synchronized (this.configurers) {'} </li>
												<li> {'	return this.buildState == BuildState.UNBUILT; }'} </li>
											</span>
											<span className="sstitle"> private enum BuildState </span>
											<span className="mblock">
												<li> {'UNBUILT(0),'} </li>
												<li> {'INITIALIZING(1),'} </li>
												<li> {'CONFIGURING(2),'} </li>
												<li> {'BUILDING(3),'} </li>
												<li> {'BUILT(4);'} </li>
												<li> {'private final int order;'} </li>
												<li> {'BuildState(int order) { this.order = order; }'} </li>
												<li> {'public boolean isInitializing() { return INITIALIZING.order == this.order; }'} </li>
												<li> {'public boolean isConfigured() { return this.order &gt;= CONFIGURING.order; }'} </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AbstractSecurityBuilder{"<O>"} [AC] </summary>
										<span className="sblock">
											<li> <small> implements SecurityBuilder{"<O>"} </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private AtomicBoolean building = new AtomicBoolean(); </li>
												<li> private O object; </li>
											</span>
											<span className="sstitle"> public final O build() throws Exception </span>
											<span className="mblock">
												<li> if (this.building.compareAndSet(false, true)) {"{"} </li>
												<li> this.object = doBuild(); </li>
												<li> return this.object; {"}"} </li>
												<li> throw new AlreadyBuiltException("This object has already been built"); </li>
											</span>
											<span className="sstitle"> public final O getObject() </span>
											<span className="mblock">
												<li> if (!this.building.get()) {"{"} </li>
												<li> throw new IllegalStateException("This object has not been built"); {"}"} </li>
												<li> return this.object; </li>
											</span>
											<span className="sstitle"> protected abstract O doBuild() throws Exception; </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> Authentication [I] <small> 유저(접근하는 주체)의 정보와 권한을 담은 인터페이스, Security Context에 저장 </small> </summary>
										<small> 인증 요청 관련 정보를 저장, 인증 과정에 사용되는 핵심 객체 </small>
										<small> 사용자 아이디,패스워드,인증요청 컨텍스트에 대한 정보를 가지고 있음 </small>
										<span className="sblock">
											<small> extends Principal, Serializable </small>
											<li> <small> </small> </li>
											<span className="sstitle"> {'Collection<? extends GrantedAuthority> getAuthorities();'} </span>
											<span className="sstitle"> {'Object getCredentials();'} </span>
											<span className="sstitle"> {'Object getDetails();'} </span>
											<span className="sstitle"> {'Object getPrincipal();'} </span>
											<span className="sstitle"> {'boolean isAuthenticated();'} </span>
											<span className="sstitle"> {'void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException;'} </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationManager(인증관리자) [I] <small> 인증 요청을 받고서 Authentication을 채워준다. </small> </summary>
										<span className="sblock">
											<small> Authentication 객체를 받아 인증하고 인증되었다면 Authentication 객체를 돌려주는 인터페이스</small>
											<span className="sstitle"> Authentication authenticate(Authentication authentication) throws AuthenticationException; </span>
											<li> </li>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationProvider [I] <small> 실제 인증이 되고, 인증 성공시 Authentication객체 인증을 true로 바꾸어줌 </small> </summary>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> Authentication authenticate(Authentication authentication) throws AuthenticationException; </span>
											<span className="sstitle"> boolean supports{"(Class<?> authentication);"} </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationManagerBuilder [C] <small>  &nbsp;&nbsp;스프링 시큐리티가 사용자를 인증하는 방법을 담은 클래스 </small>  </summary>
										<li> <small> 스프링 시큐리티가 사용자를 인증하는 방법을 담은 클래스 </small> </li>
										<li> <small> extends AbstractConfiguredSecurityBuilder&lt;AuthenticationManager, AuthenticationManagerBuilder&gt; </small> </li>
										<li> <small> implements ProviderManagerBuilder&lt;AuthenticationManagerBuilder&gt; </small> </li>
										<span className="sblock">
											<li> <small> DB, In-memory 등 인증 방식 설정 </small> </li>
											<li> <small> AuthenticationProvider 객체를 리스트로 보관 </small> </li>
											<span className="sstitle"> 멤버변수 </span>
											<span className="mlbock">
												<li> private final Log logger = LogFactory.getLog(getClass()); </li>
												<li> private AuthenticationManager parentAuthenticationManager; </li>
												<li className="col_r"> private List&lt;AuthenticationProvider&gt; authenticationProviders = new ArrayList&lt;&gt;() </li>
												<li> private UserDetailsService defaultUserDetailsService; </li>
												<li> private Boolean eraseCredentials; </li>
												<li> private AuthenticationEventPublisher eventPublisher; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public AuthenticationManagerBuilder parentAuthenticationManager(AuthenticationManager authenticationManager) </span>
											<span className="mlbock">
												<li> if (authenticationManager instanceof ProviderManager) {"{"} </li>
												<li> eraseCredentials(((ProviderManager) authenticationManager).isEraseCredentialsAfterAuthentication()); {"}"} </li>
												<li> this.parentAuthenticationManager = authenticationManager; </li>
												<li> return this; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public AuthenticationManagerBuilder authenticationEventPublisher(AuthenticationEventPublisher eventPublisher) </span>
											<span className="mlbock">
												<li> Assert.notNull(eventPublisher, "AuthenticationEventPublisher cannot be null"); </li>
												<li> this.eventPublisher = eventPublisher; </li>
												<li> return this; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public AuthenticationManagerBuilder eraseCredentials(boolean eraseCredentials) </span>
											<span className="mlbock">
												<li> this.eraseCredentials = eraseCredentials; </li>
												<li> return this; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public InMemoryUserDetailsManagerConfigurer&lt;AuthenticationManagerBuilder&gt; inMemoryAuthentication()
												throws Exception <br /> <small> InMemory 방식으로 인증 설정 </small> </span>
											<span className="mlbock">
												<li> return apply(new InMemoryUserDetailsManagerConfigurer&lt;&gt;());  </li>
											</span>
											{/*  */}
											<span className="sstitle"> public JdbcUserDetailsManagerConfigurer&lt;AuthenticationManagerBuilder&gt; jdbcAuthentication() throws Exception
												<br /> <small> Jdbc 방식으로 인증 설정 </small> </span>
											<span className="mlbock">
												<li> return apply(new JdbcUserDetailsManagerConfigurer&lt;&gt;()); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public &lt;T extends UserDetailsService&gt; DaoAuthenticationConfigurer&lt;AuthenticationManagerBuilder, T&gt; userDetailsService(
												T userDetailsService) throws Exception </span>
											<span className="mlbock">
												<li> this.defaultUserDetailsService = userDetailsService; </li>
												<li> return apply(new DaoAuthenticationConfigurer&lt;&gt;(userDetailsService)); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public LdapAuthenticationProviderConfigurer&lt;AuthenticationManagerBuilder&gt; ldapAuthentication()
												throws Exception <br /> <small> Ldap 방식으로 인증 설정 </small> </span>
											<span className="mlbock">
												<li> return apply(new LdapAuthenticationProviderConfigurer&lt;&gt;()); </li>
											</span>
											{/*  */}
											<span className="sstitle col_r"> public AuthenticationManagerBuilder authenticationProvider(AuthenticationProvider authenticationProvider)
												<br /> <small> AuthenticationManagerBuilder멤버변수 리스트에 AuthenticationProvider 추가하고 반환 </small> </span>
											<span className="mlbock">
												<li> this.authenticationProviders.add(authenticationProvider); </li>
												<li> return this; </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected ProviderManager performBuild() throws Exception </span>
											<span className="mlbock">
												<li> if (!isConfigured()) {"{"} </li>
												<li> 	this.logger.debug("No authenticationProviders and no parentAuthenticationManager defined. Returning null."); </li>
												<li> 	return null; {"}"} </li>
												<li> ProviderManager providerManager = new ProviderManager(this.authenticationProviders, </li>
												<li> 		this.parentAuthenticationManager); </li>
												<li> if (this.eraseCredentials != null) {"{"} </li>
												<li> 	providerManager.setEraseCredentialsAfterAuthentication(this.eraseCredentials); {"}"} </li>
												<li> if (this.eventPublisher != null) {"{"} </li>
												<li> 	providerManager.setAuthenticationEventPublisher(this.eventPublisher); {"}"} </li>
												<li> providerManager = postProcess(providerManager); </li>
												<li> return providerManager; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public boolean isConfigured()  </span>
											<span className="mlbock">
												<li> return !this.authenticationProviders.isEmpty() || this.parentAuthenticationManager != null; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public UserDetailsService getDefaultUserDetailsService() </span>
											<span className="mlbock">
												<li> return this.defaultUserDetailsService; </li>
											</span>
											{/*  */}
											<span className="sstitle"> private &lt;C extends UserDetailsAwareConfigurer&lt;AuthenticationManagerBuilder, ? extends UserDetailsService&gt;&gt; C apply(
												C configurer) throws Exception </span>
											<span className="mlbock">
												<li> this.defaultUserDetailsService = configurer.getUserDetailsService(); </li>
												<li> return super.apply(configurer); </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationEntryPoint  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationSuccessHandler </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AuthenticationFailureHandler </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AccessDeniedHandler  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AccessDecisionManager  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> AffirmativeBased  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> CredentialsContainer [I] </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> void eraseCredentials(); </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> DaoAuthenticationConfigurer{'<B extends ProviderManagerBuilder<B>, U extends UserDetailsService>'} [C] </summary>
										<small> {'extends AbstractDaoAuthenticationConfigurer<B, DaoAuthenticationConfigurer<B, U>, U>'} </small>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> public DaoAuthenticationConfigurer(U userDetailsService) </span>
											<span className="mblock">
												super(userDetailsService);
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> DaoAuthenticationProvider [C] </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private static final String USER_NOT_FOUND_PASSWORD = "userNotFoundPassword"; </li>
												<li> private PasswordEncoder passwordEncoder; </li>
												<li> private volatile String userNotFoundEncodedPassword; </li>
												<li> private UserDetailsService userDetailsService; </li>
												<li> private UserDetailsPasswordService userDetailsPasswordService; </li>
												<li>  </li>
											</span>
											<span className="sstitle"> public DaoAuthenticationProvider() </span>
											<span className="mblock">
												<li> setPasswordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder()); </li>
											</span>
											<span className="sstitle"> protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException </span>
											<span className="mblock">
												<li> {'if (authentication.getCredentials() == null) { '} </li>
												<li> {'			this.logger.debug("Failed to authenticate since no credentials provided"); '} </li>
												<li> {'			throw new BadCredentialsException(this.messages '} </li>
												<li> {'					.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials")); '} </li>
												<li> {'} '} </li>
												<li> {'String presentedPassword = authentication.getCredentials().toString(); '} </li>
												<li> {'if (!this.passwordEncoder.matches(presentedPassword, userDetails.getPassword())) { '} </li>
												<li> {'    this.logger.debug("Failed to authenticate since password does not match stored value"); '} </li>
												<li> {'    throw new BadCredentialsException(this.messages '} </li>
												<li> {'            .getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials")); '} </li>
												<li> {'} '} </li>
											</span>
											<span className="sstitle"> protected void doAfterPropertiesSet() </span>
											<span className="mblock">
												<li> Assert.notNull(this.userDetailsService, "A UserDetailsService must be set"); </li>
											</span>
											<span className="sstitle"> protected final UserDetails retrieveUser(String username,
												UsernamePasswordAuthenticationToken authentication) throws AuthenticationException </span>
											<span className="mblock">
												<li> {' prepareTimingAttackProtection(); '} </li>
												<li> {' try { '} </li>
												<li> {'     UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username); '} </li>
												<li> {'     if (loadedUser == null) { '} </li>
												<li> {'         throw new InternalAuthenticationServiceException( '} </li>
												<li> {'                 "UserDetailsService returned null, which is an interface contract violation"); '} </li>
												<li> {'     } '} </li>
												<li> {'     return loadedUser; '} </li>
												<li> {' } '} </li>
												<li> {' catch (UsernameNotFoundException ex) { '} </li>
												<li> {'     mitigateAgainstTimingAttack(authentication); '} </li>
												<li> {'     throw ex; '} </li>
												<li> {' } '} </li>
												<li> {' catch (InternalAuthenticationServiceException ex) { '} </li>
												<li> {'     throw ex; '} </li>
												<li> {' } '} </li>
												<li> {' catch (Exception ex) { '} </li>
												<li> {'     throw new InternalAuthenticationServiceException(ex.getMessage(), ex); '} </li>
												<li> {' } '} </li>
											</span>
											<span className="sstitle"> protected Authentication createSuccessAuthentication
												(Object principal, Authentication authentication,UserDetails user) </span>
											<span className="mblock">
												<li> {'boolean upgradeEncoding = this.userDetailsPasswordService != null '} </li>
												<li> {'        && this.passwordEncoder.upgradeEncoding(user.getPassword()); '} </li>
												<li> {'if (upgradeEncoding) { '} </li>
												<li> {'    String presentedPassword = authentication.getCredentials().toString(); '} </li>
												<li> {'    String newPassword = this.passwordEncoder.encode(presentedPassword); '} </li>
												<li> {'    user = this.userDetailsPasswordService.updatePassword(user, newPassword); '} </li>
												<li> {'} '} </li>
												<li> {'return super.createSuccessAuthentication(principal, authentication, user); '} </li>
											</span>
											<span className="sstitle"> private void prepareTimingAttackProtection() </span>
											<span className="mblock">
												<li> if (this.userNotFoundEncodedPassword == null) </li>
												<li> this.userNotFoundEncodedPassword = this.passwordEncoder.encode(USER_NOT_FOUND_PASSWORD); </li>
											</span>
											<span className="sstitle"> private void mitigateAgainstTimingAttack(UsernamePasswordAuthenticationToken authentication) </span>
											<span className="mblock">
												<li> {' if (authentication.getCredentials() != null) { '} </li>
												<li> {'     String presentedPassword = authentication.getCredentials().toString(); '} </li>
												<li> {'     this.passwordEncoder.matches(presentedPassword, this.userNotFoundEncodedPassword); '} </li>
												<li> {' } '} </li>
											</span>
											<span className="sstitle"> public void setPasswordEncoder(PasswordEncoder passwordEncoder) </span>
											<span className="mblock">
												<li> 		Assert.notNull(passwordEncoder, "passwordEncoder cannot be null"); </li>
												<li> 		this.passwordEncoder = passwordEncoder; </li>
												<li> 		this.userNotFoundEncodedPassword = null; </li>
											</span>
											<span className="sstitle"> protected PasswordEncoder getPasswordEncoder() </span>
											<span className="mblock">
												<li> return this.passwordEncoder; </li>
											</span>
											<span className="sstitle"> public void setUserDetailsService(UserDetailsService userDetailsService) </span>
											<span className="mblock">
												<li> this.userDetailsService = userDetailsService; </li>
											</span>
											<span className="sstitle"> protected UserDetailsService getUserDetailsService() </span>
											<span className="mblock">
												<li> return this.userDetailsService; </li>
											</span>
											<span className="sstitle"> public void setUserDetailsPasswordService(UserDetailsPasswordService userDetailsPasswordService) </span>
											<span className="mblock">
												<li> this.userDetailsPasswordService = userDetailsPasswordService; </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> DecisionVoters </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> GrantedAuthority [I] </summary>
										<span className="sblock">
											<small> extends Serializable </small>
											<li> <small> </small> </li>
											<span className="sstitle"> String getAuthority(); </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> LogoutSuccessHandler </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> ProviderManager [C] </summary>
										<small> AuthenticationManager의 구현체로 사용 </small>
										<span className="sblock">
											<li> <small> 스프링에서 인증을 담당하는 클래스 </small> </li>
											<li> <small> 직접 구현할 필요없이 시큐리티가 등록하고 관리 </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> PasswordEncoder [I] </summary>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> </span>
											<span className="mblock">
												<li> String encode(CharSequence rawPassword);  </li>
												<li> boolean matches(CharSequence rawPassword, String encodedPassword);  </li>
												<span className="sstitle"> default boolean upgradeEncoding(String encodedPassword) </span>
												<span className="sblock">
													<li> return false; </li>
												</span>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> ProviderManagerBuilder{"<B extends ProviderManagerBuilder<B>>"} [I] </summary>
										<span className="sblock">
											<li> <small> extends SecurityBuilder{"<AuthenticationManager>"}  </small> </li>
											<span className="sstitle">  B authenticationProvider(AuthenticationProvider authenticationProvider); </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> Principal [I]  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> public boolean equals(Object another); </span>
											<span className="sstitle"> public String toString(); </span>
											<span className="sstitle"> public int hashCode(); </span>
											<span className="sstitle"> public String getName(); </span>
											<span className="sstitle"> public default boolean implies(Subject subject) </span>
											<span className="mblock">
												<li> if (subject == null) return false; </li>
												<li> return subject.getPrincipals().contains(this); </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> RequestCache  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  RoleVoter </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  Serializable </summary>
										<span className="sblock">
											<li> <small> 아무것도 정의 되있지 않음.. </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> {'SecurityConfigurer<O, B extends SecurityBuilder<O>>'} [I] </summary>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> void init(B builder) throws Exception; </span>
											<span className="sstitle"> void configure(B builder) throws Exception; </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> SecurityConfigurerAdapter{'<O, B extends SecurityBuilder<O>>'} [AC] </summary>
										<small> SecurityConfigurer{'<O, B>'} </small>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private B securityBuilder; </li>
												<li> private CompositeObjectPostProcessor objectPostProcessor = new CompositeObjectPostProcessor(); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void init(B builder) throws Exception </span>
											<span className="sstitle"> public void configure(B builder) throws Exception </span>
											<span className="sstitle"> public B and() </span>
											<span className="mblock">
												<li> return getBuilder(); </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected final B getBuilder() </span>
											<span className="mblock">
												<li> Assert.state(this.securityBuilder != null, "securityBuilder cannot be null"); </li>
												<li> return this.securityBuilder; </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected {'<T>'} T postProcess(T object) </span>
											<span className="mblock">
												<li> return (T) this.objectPostProcessor.postProcess(object);  </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void addObjectPostProcessor(ObjectPostProcessor{'<?>'} objectPostProcessor) </span>
											<span className="mblock">
												<li> this.objectPostProcessor.addObjectPostProcessor(objectPostProcessor); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void setBuilder(B builder) </span>
											<span className="mblock">
												<li> this.securityBuilder = builder; </li>
											</span>
											{/*  */}
											<span className="sstitle"> private static final class CompositeObjectPostProcessor </span>
											<small> implements ObjectPostProcessor{'<Object>'} </small>
											<span className="mblock">
												<li> {'private List<ObjectPostProcessor<?>> postProcessors = new ArrayList<>();'} </li>
												<li> {'	@Override '} </li>
												<li> {'		@SuppressWarnings({ "rawtypes", "unchecked" }) '} </li>
												<li> {'		public Object postProcess(Object object) { '} </li>
												<li> {'			for (ObjectPostProcessor opp : this.postProcessors) { '} </li>
												<li> {'				Class<?> oppClass = opp.getClass(); '} </li>
												<li> {'				Class<?> oppType = GenericTypeResolver.resolveTypeArgument(oppClass, ObjectPostProcessor.class); '} </li>
												<li> {'				if (oppType == null || oppType.isAssignableFrom(object.getClass())) { '} </li>
												<li> {'					object = opp.postProcess(object); '} </li>
												<li> {'				} '} </li>
												<li> {'			} '} </li>
												<li> {'			return object; '} </li>
												<li> {'		} '} </li>
												<li> {'		private boolean addObjectPostProcessor(ObjectPostProcessor<?> objectPostProcessor) { '} </li>
												<li> {'			boolean result = this.postProcessors.add(objectPostProcessor); '} </li>
												<li> {'			this.postProcessors.sort(AnnotationAwareOrderComparator.INSTANCE); '} </li>
												<li> {'			return result; '} </li>
												<li> {'		} '} </li>
												<li> {'	} '} </li>
											</span>
											{/*  */}
										</span>
									</details>
									{/*  */}
									<details>
										<summary> SecurityContextRepository </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> SecurityContextHolder [C] <small> Security Context를 clear,set,get,createEmpty + 기타기능 </small> </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> public static final String MODE_THREADLOCAL = "MODE_THREADLOCAL"; </li>
												<li> public static final String MODE_INHERITABLETHREADLOCAL = "MODE_INHERITABLETHREADLOCAL"; </li>
												<li> public static final String MODE_GLOBAL = "MODE_GLOBAL"; </li>
												<li> public static final String SYSTEM_PROPERTY = "spring.security.strategy"; </li>
												<li> private static String strategyName = System.getProperty(SYSTEM_PROPERTY); </li>
												<li> private static SecurityContextHolderStrategy strategy; </li>
												<li> private static int initializeCount = 0; </li>
												<li> {' static {initialize();}  '} </li>
											</span>
											<span className="sstitle"> private static void initialize() </span>
											<li> {'if (!StringUtils.hasText(strategyName)) { '} </li>
											<li> {'			strategyName = MODE_THREADLOCAL; } '} </li>
											<li> {'		if (strategyName.equals(MODE_THREADLOCAL)) { '} </li>
											<li> {'			strategy = new ThreadLocalSecurityContextHolderStrategy(); } '} </li>
											<li> {'		else if (strategyName.equals(MODE_INHERITABLETHREADLOCAL)) { '} </li>
											<li> {'			strategy = new InheritableThreadLocalSecurityContextHolderStrategy(); } '} </li>
											<li> {'		else if (strategyName.equals(MODE_GLOBAL)) { '} </li>
											<li> {'			strategy = new GlobalSecurityContextHolderStrategy(); } '} </li>
											<li> {'		else { '} </li>
											<li> {'			try { '} </li>
											<li> {'				Class<?> clazz = Class.forName(strategyName); '} </li>
											<li> {'				Constructor<?> customStrategy = clazz.getConstructor(); '} </li>
											<li> {'				strategy = (SecurityContextHolderStrategy) customStrategy.newInstance(); } '} </li>
											<li> {'			catch (Exception ex) { '} </li>
											<li> {'				ReflectionUtils.handleReflectionException(ex); } '} </li>
											<li> {'		} '} </li>
											<li> {'		initializeCount++; '} </li>
											<span className="sstitle"> public static void clearContext() </span>
											<span className="mblock">
												<li> strategy.clearContext(); </li>
											</span>
											<span className="sstitle"> public static SecurityContext getContext() </span>
											<span className="mblock">
												<li> return strategy.getContext(); </li>
											</span>
											<span className="sstitle"> public static int getInitializeCount() </span>
											<span className="mblock">
												<li> return initializeCount; </li>
											</span>
											<span className="sstitle"> public static void setContext(SecurityContext context) </span>
											<span className="mblock">
												<li> strategy.setContext(context); </li>
											</span>
											<span className="sstitle"> public static void setStrategyName(String strategyName) </span>
											<span className="mblock">
												<li> SecurityContextHolder.strategyName = strategyName; </li>
												<li> initialize(); </li>
											</span>
											<span className="sstitle"> public static SecurityContextHolderStrategy getContextHolderStrategy() </span>
											<span className="mblock">
												<li> return strategy; </li>
											</span>
											<span className="sstitle"> public static SecurityContext createEmptyContext() </span>
											<span className="mblock">
												<li> return strategy.createEmptyContext(); </li>
											</span>
											<span className="sstitle"> public String toString() </span>
											<span className="mblock">
												<li> return "SecurityContextHolder[strategy='" + strategyName + "'; initializeCount=" + initializeCount + "]"; </li>
											</span>

										</span>
									</details>
									{/*  */}
									<details>
										<summary> SecurityContext [I] <small> Authentication 객체를 보관하거나 꺼내는 역할 </small> </summary>
										<small> extends Serializable </small>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> </span>
											<span className="mblcok">
												<li> Authentication getAuthentication(); </li>
												<li> void setAuthentication(Authentication authentication); </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> SecurityContextHolderStrategy [I]  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
											<span className="mblock">
												<li> void clearContext();  </li>
												<li> SecurityContext getContext();  </li>
												<li> void setContext(SecurityContext context);  </li>
												<li> SecurityContext createEmptyContext();  </li>
											</span>
										</span>
									</details>
									{/*  */}
									{/*  */}
									<details>
										<summary>  SecurityMetadataSource </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> SessionAuthenticationStrategy  </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  SessionRegistry </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  SecurityBuilder{"<O>"} [I] </summary>
										<li> <small> 개체는 빌드 하려는 목적을 가지고 있고?? , 반환값은 개체 or null을 반환  </small> </li>
										<span className="sblock">
											<span className="sstitle"> O build() throws Exception; </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> UserDetailService [I] <small> CustomUserService를 만들어서 사용 </small> </summary>
										{/* <li> <small> 인증 방식(In-memory,jdbc 등)을 커스텀으로 코드를 작성해서 사용  </small> </li> */}
										<li> <small> 유저의 정보를 불러오기 위해 구현하는 인터페이스  </small> </li>
										<span className="sblock">
											<span className="sstitle"> UserDetails loadUserByUsername(String username) throws UsernameNotFoundException; </span>
											<small> 유저의 정보를 불러와서 UserDetails로 리턴 </small>
										</span>

									</details>
									{/*  */}
									<details>
										<summary> UserDetails [I] <small> 이름,비번 등 사용자 정보를 저장하는 기능 </small> </summary>
										<small> extends Serializable </small>
										<li> <small> </small> </li>
										<span className="sblock">
											<span className="sstitle"> {'Collection<? extends GrantedAuthority> getAuthorities(); '} </span>
											<small> 계정의 권한 목록 리턴 </small>
											<span className="sstitle"> {'String getPassword(); '} </span>
											<small> 계정의 비번 리턴 </small>
											<span className="sstitle"> {'String getUsername(); '} </span>
											<small> 계정의 PK값 리턴 , name파라미터를 넘겨줄 필요 없음, 이메일은 SSO서버에서 중복되어 사용자제 </small>
											<span className="sstitle"> {'boolean isAccountNonExpired(); '} </span>
											<small> 계정의 만료 여부 리턴</small>
											<span className="sstitle"> {'boolean isAccountNonLocked(); '} </span>
											<small> 계정의 잠김 여부 리턴</small>
											<span className="sstitle"> {'boolean isCredentialsNonExpired(); '} </span>
											<small> 계정의 비번 만료 여부 리턴</small>
											<span className="sstitle"> {'boolean isEnabled(); '} </span>
											<small> 계정의 활성화 여부 리턴</small>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> UserDetailsAwareConfigurer{'<B extends ProviderManagerBuilder<B>, U extends UserDetailsService>'} [AC]  </summary>
										<small>  extends SecurityConfigurerAdapter{'<AuthenticationManager, B>'} </small>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> public abstract U getUserDetailsService(); </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> UsernamePasswordAuthenticationToken [C] <small> 인증용 객체, 로그인시 유저가 입력한 내용을 가지고 있음 </small> </summary>
										<small> extends AbstractAuthenticationToken </small> <br />
										<small>  </small>
										<span className="sblock">
											<li> <small>  </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID; </li>
												<li> private final Object principal; </li>
												<li> private Object credentials; </li>
											</span>
											<span className="sstitle"> public UsernamePasswordAuthenticationToken(Object principal, Object credentials) </span>
											<small> 인증 완료 전의 객체를 생성 </small>
											<span className="mblock">
												<li>  super(null); </li>
												<li>  this.principal = principal; </li>
												<li>  this.credentials = credentials; </li>
												<li>  setAuthenticated(false); </li>
											</span>
											<span className="sstitle"> {'public UsernamePasswordAuthenticationToken(Object principal, Object credentials,'}
												{'Collection<? extends GrantedAuthority> authorities) '} </span>
											<small> 인증 완료 후의 객체를 생성 </small>
											<span className="mblock">
												<li> super(authorities); </li>
												<li> this.principal = principal; </li>
												<li> this.credentials = credentials; </li>
												<li> super.setAuthenticated(true); </li>
											</span>
											<span className="sstitle"> public Object getCredentials() </span>
											<span className="mblock">
												<li> return this.credentials; </li>
											</span>
											<span className="sstitle"> public Object getPrincipal() </span>
											<span className="mblock">
												<li> return this.principal; </li>
											</span>
											<span className="sstitle"> public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException </span>
											<span className="mblock">
												<li> Assert.isTrue(!isAuthenticated,"Cannot set this token to trusted - use constructor which takes a GrantedAuthority list instead");  </li>
												<li> super.setAuthenticated(false); </li>
											</span>
											<span className="sstitle"> public void eraseCredentials() </span>
											<span className="mblock">
												<li> super.eraseCredentials(); </li>
												<li> this.credentials = null; </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> WebSecurityConfigurerAdapter [AC] </summary>
										<small>  </small>
										<span className="sblock">
											<li> <small> implements WebSecurityConfigurer{"<WebSecurity>"} </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> private final Log logger = LogFactory.getLog(WebSecurityConfigurerAdapter.class); </li>
												<li> private ApplicationContext context; </li>
												<li> private ContentNegotiationStrategy contentNegotiationStrategy = new HeaderContentNegotiationStrategy(); </li>
												<li> private ObjectPostProcessor{'<Object>'} objectPostProcessor = new ObjectPostProcessor{'<Object>'}()
													<span className="sblock">
														{'{'}  @Override {'public <T> T postProcess(T object) {'}
														throw new IllegalStateException(ObjectPostProcessor.class.getName()
														+ " is a required bean. Ensure you have used @EnableWebSecurity and @Configuration"); {'}'} {'}'}
													</span>
												</li>
												<li> private AuthenticationConfiguration authenticationConfiguration; </li>
												<li> private AuthenticationManagerBuilder authenticationBuilder; </li>
												<li> private AuthenticationManagerBuilder localConfigureAuthenticationBldr; </li>
												<li> private boolean disableLocalConfigureAuthenticationBldr; </li>
												<li> private boolean authenticationManagerInitialized; </li>
												<li> private AuthenticationManager authenticationManager; </li>
												<li> private AuthenticationTrustResolver trustResolver = new AuthenticationTrustResolverImpl(); </li>
												<li> private HttpSecurity http; </li>
												<li> private boolean disableDefaults; </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected WebSecurityConfigurerAdapter() </span>
											<span className="mblock">
												<li> this(false); </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected WebSecurityConfigurerAdapter(boolean disableDefaults) </span>
											<span className="mblock">
												<li> this.disableDefaults = disableDefaults; </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected void configure(AuthenticationManagerBuilder auth) throws Exception </span>
											<span className="mblock">
												<li> this.disableLocalConfigureAuthenticationBldr = true; </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected final HttpSecurity getHttp() throws Exception </span>
											<span className="mblock">
												<li> {' if (this.http != null) { return this.http; } '} </li>
												<li> {' AuthenticationEventPublisher eventPublisher = getAuthenticationEventPublisher(); '} </li>
												<li> {' this.localConfigureAuthenticationBldr.authenticationEventPublisher(eventPublisher); '} </li>
												<li> {' AuthenticationManager authenticationManager = authenticationManager(); '} </li>
												<li> {' this.authenticationBuilder.parentAuthenticationManager(authenticationManager); '} </li>
												<li> {' Map&lt;;Class&lt;;?&gt;, Object&gt; sharedObjects = createSharedObjects(); '} </li>
												<li> {' this.http = new HttpSecurity(this.objectPostProcessor, this.authenticationBuilder, sharedObjects); '} </li>
												<li> {' if (!this.disableDefaults) { '} </li>
												<li> {'     applyDefaultConfiguration(this.http); '} </li>
												<li> {'     ClassLoader classLoader = this.context.getClassLoader(); '} </li>
												<li> {'     List&lt;;AbstractHttpConfigurer&gt; defaultHttpConfigurers = SpringFactoriesLoader '} </li>
												<li> {'             .loadFactories(AbstractHttpConfigurer.class, classLoader); '} </li>
												<li> {'     for (AbstractHttpConfigurer configurer : defaultHttpConfigurers) { this.http.apply(configurer); } '} </li>
												<li> {' } '} </li>
												<li> {' configure(this.http); '} </li>
												<li> {' return this.http; '} </li>
											</span>
											{/*  */}
											<span className="sstitle"> private void applyDefaultConfiguration(HttpSecurity http) throws Exception </span>
											<span className="mblock">
												<li> http.csrf(); </li>
												<li> http.addFilter(new WebAsyncManagerIntegrationFilter()); </li>
												<li> http.exceptionHandling(); </li>
												<li> http.headers(); </li>
												<li> http.sessionManagement(); </li>
												<li> http.securityContext(); </li>
												<li> http.requestCache(); </li>
												<li> http.anonymous(); </li>
												<li> http.servletApi(); </li>
												<li> http.apply(new DefaultLoginPageConfigurer{'<>'}()); </li>
												<li> http.logout(); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public AuthenticationManager authenticationManagerBean() throws Exception </span>
											<span className="mblock">
												<li> return new AuthenticationManagerDelegator(this.authenticationBuilder, this.context); </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected AuthenticationManager authenticationManager() throws Exception </span>
											<span className="mblock">
												<li> {' if (!this.authenticationManagerInitialized) { '} </li>
												<li> {' 	configure(this.localConfigureAuthenticationBldr); '} </li>
												<li> {' 	if (this.disableLocalConfigureAuthenticationBldr) {  '} </li>
												<li> {'         this.authenticationManager = this.authenticationConfiguration.getAuthenticationManager();} '} </li>
												<li> {' 	else { this.authenticationManager = this.localConfigureAuthenticationBldr.build(); } '} </li>
												<li> {' 	this.authenticationManagerInitialized = true; '} </li>
												<li> {' } '} </li>
												<li> {' return this.authenticationManager; '} </li>
											</span>
											{/*  */}
											<span className="sstitle"> public UserDetailsService userDetailsServiceBean() throws Exception </span>
											<span className="mblock">
												<li> AuthenticationManagerBuilder globalAuthBuilder = this.context.getBean(AuthenticationManagerBuilder.class); </li>
												<li> return new UserDetailsServiceDelegator(Arrays.asList(this.localConfigureAuthenticationBldr, globalAuthBuilder)); </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected UserDetailsService userDetailsService() </span>
											<span className="mblock">
												<li> AuthenticationManagerBuilder globalAuthBuilder = this.context.getBean(AuthenticationManagerBuilder.class); </li>
												<li> return new UserDetailsServiceDelegator(Arrays.asList(this.localConfigureAuthenticationBldr, globalAuthBuilder)); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void init(WebSecurity web) throws Exception </span>
											<span className="mblock">
												<li> HttpSecurity http = getHttp(); </li>
												<li> web.addSecurityFilterChainBuilder(http).postBuildAction(() -&gt; {'{'} </li>
												<li> 	FilterSecurityInterceptor securityInterceptor = http.getSharedObject(FilterSecurityInterceptor.class); </li>
												<li> 	web.securityInterceptor(securityInterceptor); </li>
												<li> {'}'}); </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void configure(WebSecurity web) throws Exception </span>
											<span className="mblock">
												<li>  </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected void configure(HttpSecurity http) throws Exception </span>
											<span className="mblock">
												<li> this.logger.debug("Using default configure(HttpSecurity). " </li>
												<li> 		+ "If subclassed this will potentially override subclass configure(HttpSecurity)."); </li>
												<li> http.authorizeRequests((requests) -&gt; requests.anyRequest().authenticated()); </li>
												<li> http.formLogin(); </li>
												<li> http.httpBasic(); </li>
											</span>
											{/*  */}
											<span className="sstitle"> protected final ApplicationContext getApplicationContext() </span>
											<span className="mblock">
												<li> return this.context; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void setApplicationContext(ApplicationContext context) </span>
											<span className="mblock">
												<li> {'this.context = context;'} </li>
												<li> {'ObjectPostProcessor<Object> objectPostProcessor = context.getBean(ObjectPostProcessor.class);'} </li>
												<li> {'LazyPasswordEncoder passwordEncoder = new LazyPasswordEncoder(context);'} </li>
												<li> {'this.authenticationBuilder = new DefaultPasswordEncoderAuthenticationManagerBuilder(objectPostProcessor,'} </li>
												<li> {'		passwordEncoder);'} </li>
												<li> {'this.localConfigureAuthenticationBldr = new DefaultPasswordEncoderAuthenticationManagerBuilder('} </li>
												<li> {'		objectPostProcessor, passwordEncoder) {'} </li>
												<li> {'	@Override'} </li>
												<li> {'	public AuthenticationManagerBuilder eraseCredentials(boolean eraseCredentials) {'} </li>
												<li> {'		WebSecurityConfigurerAdapter.this.authenticationBuilder.eraseCredentials(eraseCredentials);'} </li>
												<li> {'		return super.eraseCredentials(eraseCredentials);'} </li>
												<li> {'	}'} </li>
												<li> {'	@Override'} </li>
												<li> {'	public AuthenticationManagerBuilder authenticationEventPublisher('} </li>
												<li> {'			AuthenticationEventPublisher eventPublisher) {'} </li>
												<li> {'		WebSecurityConfigurerAdapter.this.authenticationBuilder.authenticationEventPublisher(eventPublisher);'} </li>
												<li> {'		return super.authenticationEventPublisher(eventPublisher);'} </li>
												<li> {'	}'} </li>
												<li> {'};'} </li>

											</span>
											{/*  */}
											<span className="sstitle"> public void setTrustResolver(AuthenticationTrustResolver trustResolver) </span>
											<span className="mblock">
												<li> this.trustResolver = trustResolver; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void setContentNegotationStrategy(ContentNegotiationStrategy contentNegotiationStrategy) </span>
											<span className="mblock">
												<li> this.contentNegotiationStrategy = contentNegotiationStrategy; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void setObjectPostProcessor(ObjectPostProcessor{'<Object>'} objectPostProcessor) </span>
											<span className="mblock">
												<li> this.objectPostProcessor = objectPostProcessor; </li>
											</span>
											{/*  */}
											<span className="sstitle"> public void setAuthenticationConfiguration(AuthenticationConfiguration authenticationConfiguration) </span>
											<span className="mblock">
												<li> this.authenticationConfiguration = authenticationConfiguration; </li>
											</span>
											{/*  */}
											<span className="sstitle"> private AuthenticationEventPublisher getAuthenticationEventPublisher() </span>
											<span className="mblock">
												<li> {'if (this.context.getBeanNamesForType(AuthenticationEventPublisher.class).length > 0) {'} </li>
												<li> {'	return this.context.getBean(AuthenticationEventPublisher.class);'} </li>
												<li> {'}'} </li>
												<li> {'return this.objectPostProcessor.postProcess(new DefaultAuthenticationEventPublisher());'} </li>
											</span>
											{/*  */}
											<span className="sstitle"> {'private Map<Class<?>, Object> createSharedObjects()'} </span>
											<span className="mblock">
												<li> {' Map<Class<?>, Object> sharedObjects = new HashMap<>(); '} </li>
												<li> {' sharedObjects.putAll(this.localConfigureAuthenticationBldr.getSharedObjects()); '} </li>
												<li> {' sharedObjects.put(UserDetailsService.class, userDetailsService()); '} </li>
												<li> {' sharedObjects.put(ApplicationContext.class, this.context); '} </li>
												<li> {' sharedObjects.put(ContentNegotiationStrategy.class, this.contentNegotiationStrategy); '} </li>
												<li> {' sharedObjects.put(AuthenticationTrustResolver.class, this.trustResolver); '} </li>
												<li> {' return sharedObjects; '} </li>
											</span>
											{/*  */}
											<span className="sstitle"> static final class UserDetailsServiceDelegator implements UserDetailsService </span>
											<span className="mblock">
												<li> {' private List<AuthenticationManagerBuilder> delegateBuilders; '} </li>
												<li> {' private UserDetailsService delegate; '} </li>
												<li> {' private final Object delegateMonitor = new Object(); '} </li>
												<li> {' UserDetailsServiceDelegator(List<AuthenticationManagerBuilder> delegateBuilders) { '} </li>
												<li> {' 	Assert.isTrue(!delegateBuilders.contains(null), '} </li>
												<li> {' 			() -> "delegateBuilders cannot contain null values. Got " + delegateBuilders); '} </li>
												<li> {' 	this.delegateBuilders = delegateBuilders; '} </li>
												<li> {' } '} </li>
												<li> {' @Override '} </li>
												<li> {' public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { '} </li>
												<li> {' 	if (this.delegate != null) { '} </li>
												<li> {' 		return this.delegate.loadUserByUsername(username); '} </li>
												<li> {' 	} '} </li>
												<li> {' 	synchronized (this.delegateMonitor) { '} </li>
												<li> {' 		if (this.delegate == null) { '} </li>
												<li> {' 			for (AuthenticationManagerBuilder delegateBuilder : this.delegateBuilders) { '} </li>
												<li> {' 				this.delegate = delegateBuilder.getDefaultUserDetailsService(); '} </li>
												<li> {' 				if (this.delegate != null) { '} </li>
												<li> {' 					break; '} </li>
												<li> {' 				} '} </li>
												<li> {' 			} '} </li>
												<li> {' 			if (this.delegate == null) { '} </li>
												<li> {' 				throw new IllegalStateException("UserDetailsService is required."); '} </li>
												<li> {' 			} '} </li>
												<li> {' 			this.delegateBuilders = null; '} </li>
												<li> {' 		} '} </li>
												<li> {' 	} '} </li>
												<li> {' 	return this.delegate.loadUserByUsername(username); '} </li>
												<li> {' } '} </li>
											</span>
											{/*  */}
											<span className="sstitle"> static final class AuthenticationManagerDelegator implements AuthenticationManager </span>
											<span className="mblock">
												<li> {'private AuthenticationManagerBuilder delegateBuilder;'} </li>
												<li> {'		private AuthenticationManager delegate;'} </li>
												<li> {'		private final Object delegateMonitor = new Object();'} </li>
												<li> {'		private Set<String> beanNames;'} </li>
												<li> {'		AuthenticationManagerDelegator(AuthenticationManagerBuilder delegateBuilder, ApplicationContext context) {'} </li>
												<li> {'			Assert.notNull(delegateBuilder, "delegateBuilder cannot be null");'} </li>
												<li> {'			Field parentAuthMgrField = ReflectionUtils.findField(AuthenticationManagerBuilder.class,'} </li>
												<li> {'					"parentAuthenticationManager");'} </li>
												<li> {'			ReflectionUtils.makeAccessible(parentAuthMgrField);'} </li>
												<li> {'			this.beanNames = getAuthenticationManagerBeanNames(context);'} </li>
												<li> {'			validateBeanCycle(ReflectionUtils.getField(parentAuthMgrField, delegateBuilder), this.beanNames);'} </li>
												<li> {'			this.delegateBuilder = delegateBuilder;'} </li>
												<li> {'		}'} </li>
												<li> {'		@Override'} </li>
												<li> {'		public Authentication authenticate(Authentication authentication) throws AuthenticationException {'} </li>
												<li> {'			if (this.delegate != null) { return this.delegate.authenticate(authentication); }'} </li>
												<li> {'			synchronized (this.delegateMonitor) {'} </li>
												<li> {'				if (this.delegate == null) {'} </li>
												<li> {'					this.delegate = this.delegateBuilder.getObject();'} </li>
												<li> {'					this.delegateBuilder = null; } }'} </li>
												<li> {'			return this.delegate.authenticate(authentication);'} </li>
												<li> {'		}'} </li>
												<li> {'		private static Set<String> getAuthenticationManagerBeanNames(ApplicationContext applicationContext) {'} </li>
												<li> {'			String[] beanNamesForType = BeanFactoryUtils.beanNamesForTypeIncludingAncestors('} </li>
												<li> {'                applicationContext, AuthenticationManager.class);'} </li>
												<li> {'			return new HashSet<>(Arrays.asList(beanNamesForType)); '} </li>
												<li> {'        }'} </li>
												<li> {'		private static void validateBeanCycle(Object auth, Set<String> beanNames) {'} </li>
												<li> {'			if (auth == null || beanNames.isEmpty() || !(auth instanceof Advised)) { return; }'} </li>
												<li> {'			TargetSource targetSource = ((Advised) auth).getTargetSource();'} </li>
												<li> {'			if (!(targetSource instanceof LazyInitTargetSource)) { return; }'} </li>
												<li> {'			LazyInitTargetSource lits = (LazyInitTargetSource) targetSource;'} </li>
												<li> {'			if (beanNames.contains(lits.getTargetBeanName())) {'} </li>
												<li> {'				throw new FatalBeanException( "A dependency cycle was detected when trying to resolve the AuthenticationManager. "'} </li>
												<li> {'                + "Please ensure you have configured authentication."); }'} </li>
												<li> {'		}'} </li>
											</span>
											{/*  */}
											<span className="sstitle"> static class DefaultPasswordEncoderAuthenticationManagerBuilder extends AuthenticationManagerBuilder </span>
											<span className="mblock">
												<li> {'         private PasswordEncoder defaultPasswordEncoder; '} </li>
												<li> {' 		DefaultPasswordEncoderAuthenticationManagerBuilder(ObjectPostProcessor<Object> objectPostProcessor, '} </li>
												<li> {' 				PasswordEncoder defaultPasswordEncoder) { '} </li>
												<li> {' 			super(objectPostProcessor); '} </li>
												<li> {' 			this.defaultPasswordEncoder = defaultPasswordEncoder; '} </li>
												<li> {' 		} '} </li>
												<li>  		@Override  </li>
												<li>  		public InMemoryUserDetailsManagerConfigurer{'<AuthenticationManagerBuilder>'} inMemoryAuthentication()  </li>
												<li>  				throws Exception  {'{'} </li>
												<li>  			return super.inMemoryAuthentication().passwordEncoder(this.defaultPasswordEncoder);  </li>
												<li>  		{'}'}  </li>
												<li>  		@Override </li>
												<li>  		public JdbcUserDetailsManagerConfigurer{'<AuthenticationManagerBuilder>'} jdbcAuthentication() throws Exception  {'{'} </li>
												<li>  			return super.jdbcAuthentication().passwordEncoder(this.defaultPasswordEncoder); </li>
												<li>  		{'}'}  </li>
												<li>  		@Override  </li>
												<li>  		public {'<T extends UserDetailsService>'} DaoAuthenticationConfigurer{'<AuthenticationManagerBuilder, T>'} userDetailsService(  </li>
												<li>  				T userDetailsService) throws Exception {'{'}  </li>
												<li>  			return super.userDetailsService(userDetailsService).passwordEncoder(this.defaultPasswordEncoder);  </li>
												<li>  		{'}'}  </li>
											</span>
											{/*  */}
											<span className="sstitle"> static class LazyPasswordEncoder implements PasswordEncoder </span>
											<span className="mblock">
												<li> {'         private ApplicationContext applicationContext; '} </li>
												<li> {' 		private PasswordEncoder passwordEncoder; '} </li>
												<li> {' 		LazyPasswordEncoder(ApplicationContext applicationContext) { '} </li>
												<li> {' 			this.applicationContext = applicationContext; '} </li>
												<li> {' 		} '} </li>
												<li> {' 		@Override '} </li>
												<li> {' 		public String encode(CharSequence rawPassword) { '} </li>
												<li> {' 			return getPasswordEncoder().encode(rawPassword); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		@Override '} </li>
												<li> {' 		public boolean matches(CharSequence rawPassword, String encodedPassword) { '} </li>
												<li> {' 			return getPasswordEncoder().matches(rawPassword, encodedPassword); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		@Override '} </li>
												<li> {' 		public boolean upgradeEncoding(String encodedPassword) { '} </li>
												<li> {' 			return getPasswordEncoder().upgradeEncoding(encodedPassword); '} </li>
												<li> {' 		} '} </li>
												<li> {' 		private PasswordEncoder getPasswordEncoder() { '} </li>
												<li> {' 			if (this.passwordEncoder != null) { '} </li>
												<li> {' 				return this.passwordEncoder; '} </li>
												<li> {' 			} '} </li>
												<li> {' 			PasswordEncoder passwordEncoder = getBeanOrNull(PasswordEncoder.class); '} </li>
												<li> {' 			if (passwordEncoder == null) { '} </li>
												<li> {' 				passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder(); '} </li>
												<li> {' 			} '} </li>
												<li> {' 			this.passwordEncoder = passwordEncoder; '} </li>
												<li> {' 			return passwordEncoder; '} </li>
												<li> {' 		} '} </li>
												<li> {' 		private <T> T getBeanOrNull(Class<T> type) { '} </li>
												<li> {' 			try { '} </li>
												<li> {' 				return this.applicationContext.getBean(type); '} </li>
												<li> {' 			} '} </li>
												<li> {' 			catch (NoSuchBeanDefinitionException ex) { '} </li>
												<li> {' 				return null; '} </li>
												<li> {' 			} '} </li>
												<li> {' 		} '} </li>
												<li> {' 		@Override '} </li>
												<li> {' 		public String toString() { '} </li>
												<li> {' 			return getPasswordEncoder().toString(); '} </li>
												<li> {' 		} '} </li>
											</span>
											{/*  */}
										</span>
									</details>
									{/*  */}
									<details>
										<summary> CustomWebSecurityConfig [Custom,C] </summary>
										<span className="sblock">
											<li> <small> @EnableWebSecurity , @Configuration </small> </li>
											<li> <small> extedns WebSecurityConfigureAdapter </small> </li>
											<li> <small>  </small> </li>
											<span className="sstitle"> @Bean public BCryptPasswordEncoder bCryptPasswordEncoder </span>
											<span className="mblock">
												<li>  return new BCryptPasswordEncoder(); </li>
												<small> 비번 인코딩을 사용하기 위해 정의 </small>
											</span>
											<span className="sstitle"> @Overrride protected void configure(AuthenticationManagerBuilder auth) </span>
											<small>  </small>
											<span className="mblock">
												<li> super.configure(auth); <small> 기본으로 제공되는 인증 처리방식 </small> </li>
												<li>  </li>
												<li>  </li>
											</span>
											<span className="sstitle"> @Override public void configure(WebSecurity web) </span>
											<small> spring security에서 인증을 제외 할 대상을 설정 </small>
											<span className="mblock">
												<li> <small> css,js와 같은 자원들을 인증을 거치지 않고 사용할 수 있게 설정 </small> </li>
												<li> <small> static 하위 폴더 접근 가능하게 설정 </small> </li>
												<li>  web.ignoring().antMatchers("/css/**","/js/**","/img/**","/lib/**","/favicon/**","/resources/**") </li>
											</span>
											<span className="sstitle"> @Override protected void configure(HttpSecurity http) </span>
											<small> 시큐리티가 http로 처리할 csrf,인증,권한,경로 등등 설정 </small>
											<small> super.configure(http); 를 사용하는 순간 시큐리티가 제공하는 로그인페이지가 사라짐 </small>
											<span className="mblock">
												<li>  </li>
												<li> http </li>
												<li> .csrf().disable() , csrf(보안방법) 비활성화 , 사용하기 위해서는 front에서 csrf토큰을 같이 보내주어야 한다. </li>
												<li> .authorizeRequests() , 아래에 작성하는 URL경로에는 권한이나 인증이 필요 </li>
												<li> .antMatchers("/경로").authenticated() , 인증된 사용자만 접근가능 </li>
												<li> .antMatchers("/**").permitAll() ,모든 경로 인증없이 허용 </li>
												<li> .antMatchers("/경로").hasRole("[GUEST,USER,MEMER,ADMIN]") , 권한이 있어야 경로로 접속가능 </li>
												<li> .antMatchers("/경로").hasAnyRole("[GUEST,USER,MEMER,ADMIN]") , 권한 중 1개를 가지고있어야 접속가능 </li>
												<li> .antMatchers("/경로").hasAuthority("ROLE_[GUEST,USER,MEMER,ADMIN]") , 권한이 있어야 경로로 접속가능 </li>
												<li> .antMatchers("/경로").hasAnyAuthority("ROLE_[GUEST,USER,MEMER,ADMIN]") , 권한 중 1개를 가지고있어야 접속가능 </li>
												<li> .antMatchers("/경로").access("hasRole('ADMIN')") , SpEL 표현식 결과에 따라 접근 </li>
												<li> .antMatchers("/경로").hasIpAddress() , 특정 IP 주소를 가지는 사용자만 접근 할 수 있다. </li>
												<li> .antMatcher("/경로").denyAll , 모두 접근 불가 </li>
												<li> .antMatcher("/경로").isAnonymous() , 권한이 없는 사용자 접근 가능 </li>
												<li> .antMatcher("/경로").isRememberMe() , Remember-me기능으로 로그인한 사용자 접근 가능  </li>
												<li> .antMatcher("/경로").isAuthenticated() , 인증된 사용자만 접근 가능   </li>
												<li> .antMatcher("/경로").isFullyAuthenticated() , 익명의 사용자가 아니고 Remember-me로 로그인하지 않은 사용자 접근 가능 </li>
												<li> .anyRequest().authenticated() , 이외에 다른 요청들은 모두 권한이 필요 </li>
												<li> .and() </li>
												<li> .formLogin() , 로그인 설정 </li>
												<li> .loginPage("/경로")  , 커스텀 로그인 페이지 경로와 로그인 인증 경로 등록</li>
												<li> .loginProcessingUrl("/do경로") , 로그인 처리할 경로, default /login  </li>
												<li> .defaultSuccessUrl("/경로") , 로그인이 성공할 경우 리다이렉트 주소 </li>
												<li> .usernameParameter("파라미터명") , 유저의 이름 파라미터   </li>
												<li> .passwordParameter("파라미터명") , 유저의 비번 파라미터   </li>
												<li> .and() </li>
												<li> .logout() , 로그아웃 설정 </li>
												<li> .logoutUrl("/do경로") , 로그아웃을 요청할 경로, 기본값은 ("/logout")? </li>
												<li> .logoutSuccessUrl("/경로") , 로그아웃이 성공할 경우 이동할 경로 , 기본값은 ("/login?logout")? </li>
												<li> .invalidateHttpSession(true) , 로그아웃 성공 시 세션을 제거 </li>
												<li> .and() </li>
												<li> .exceptionHandling() </li>
												<li> .accessDeniedPage("/경로" 혹은 커스텀메소드) , 예외처리가 발생하면 이동할 경로?? </li>
												<li> .authenticationEntryPoint(커스텀메소드) </li>
												<li> .and() </li>
												<li> .addFilter(커스텀필터메소드) , 필터 구현체를 등록하여 필터 처리 </li>
												<li>  </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  CustomWebMvcConfig [Custom, C] </summary>
										<small> 받아온 URL 경로를 Controller에 맞게 맵핑 해주는 역할 </small>
										<span className="sblock">
											<li> <small> implements WebMvcConfigurer </small> </li>
											<span className="sstitle"> public void configureViewResolvers(ViewResolverRegistry registry) </span>
											<span className="mblock">
												<small> 아래 내용이 굳이 필요한지는 의문(없어도 잘됨) </small>
												<li> ThymeleafViewResolver thymeleafViewResolver = new ThymeleafViewResolver(); </li>
												<li> thymeleafViewResolver.setContentType("text/html; charset=UTF-8"); </li>
												<li> thymeleafViewResolver.setCharacterEncoding("UTF-8"); </li>
											</span>
											{/* <span className="sstitle">  </span>
											<span className="mblock">
												<li>  </li>
											</span> */}
										</span>
									</details>
									{/*  */}
									<details>
										<summary> CustomUserEntity [Custom,C] </summary>
										<li> <small> 스프링 시큐리티에서는 User 가 인증 정보와 권한을 가진 객체 , username,passsword는 시큐리티에서
											사용하는 파라미터  </small> </li>
										<li> <small> @Entity(name="엔티티명") , Entity 클래스 지정, default값 = 클래스명 </small> </li>
										<li> <small> @Table(name="테이블이름") , entity가 맵핑될 테이블 이름 지정  </small> </li>
										<li> <small> @Getter @Setter @AllargsConstructor @NoArgsConstructor @ToString </small> </li>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> <small> @Id , 식별자 역할을 하는 컬럼명과 맵핑 </small> </li>
												<li> <small> @GeneratedValue(strategy = GenerationType.IDENTITY)  </small> </li>
												<li> private Long혹은int id; </li>
												<li> <small> @Column(length=20, nullable=false) </small> </li>
												<li> private String username; </li>
												<li> private String password;  </li>
												<li> private String email; </li>
												<li> private String role;  </li>
												{/* <li>  </li> */}
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> CustomUserDetails [Custom,C] </summary>
										<small> 시큐리티 인증을 위한 유저의 권한,인증을 설정 </small>
										<span className="sblock">
											<li> <small> implements UserDetails  </small> </li>
											{/* <li> <small>   </small> </li> */}
											<span className="sstitle"> 멤버변수 </span>
											<li> <small> private UserEntity userEntity; </small> </li>
											{/*  */}
											<span className="sstitle"> public CustomUserDetails(UserEntity userEntity) </span>
											<span className="mblock">
												<li> this.userEntity = userEntity; </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public Collection&lt;? extends GrantedAuthority&gt; getAuthorities() </span>
											<li> <small> 사용자의 권한을 콜렉션 형태로 반환 </small> </li>
											<span className="mblock">
												<li> {'Collection<GrantedAuthority> authorities = new ArrayList<>();'} </li>
												<li> {'        authorities.add(new GrantedAuthority() {'} </li>
												<li> {'            @Override'} </li>
												<li> {'            public String getAuthority() {'} </li>
												<li> {'                return user.getRole();'} </li>
												<li> {'            }'} </li>
												<li> {'        });'} </li>
												<li> {'        return authorities;'} </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public String getUsername() </span>
											<li> <small> 사용자의 id를 반환 </small> </li>
											<span className="mblock">
												<li> return userEntity.getUsername(); </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public String getPassword() </span>
											<li> <small> 사용자의 패스워드를 반환 </small> </li>
											<span className="mblock">
												<li> return userEntity.getPassword() </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public boolean isAccountNonExpired() </span>
											<li> <small> 계정 만료 여부 반환 </small> </li>
											<span className="mblock">
												<li> return true; </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public boolean isAccountNonLocked() </span>
											<li> <small> 계정 잠금 여부 반환 </small> </li>
											<span className="mblock">
												<li> return true; </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override public boolean isCredentialsNonExpired() </span>
											<li> <small> 패스워드의 만료 여부 반환 </small> </li>
											<span className="mblock">
												<li> return true; </li>
											</span>
											{/*  */}
											<span className="sstitle"> @Override  public boolean isEnabled() </span>
											<li> <small> 계정 사용 가능 여부 반환 </small> </li>
											<span className="mblock">
												<li> return true; </li>
											</span>
											{/*  */}
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  CustomUserDetailsService [Custom,C] </summary>
										<small>  UserDetails구현체를 리턴 , 인증을 처리하기 위해 작성  </small> <br />
										<span className="sblock">
											<li> <small> @Service  </small> </li>
											<li> <small> implements UserDetailService </small> </li>
											<span className="sstitle"> 멤버 변수  </span>
											<li> @Autowired private UserRepository userRepository </li>
											<span className="sstitle"> public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException </span>
											<span className="mblock">
												<li> UserEntity userEntity = userRepository.findByUsername(username); </li>
												<li> if(userEntity!=null) {'{ return new CustomUserDetails(userEntity) }'} </li>
												<li> return null; </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  CustomUserRepository [Custom,I] </summary>
										<small>  DB와 Entity를 이어주는 인터페이스 , 인터페이스를 @Autowired 해서 사용 </small>
										<span className="sblock">
											<li> <small> {' extends JpaRepository<User,Integer> '} </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> public UserEntity findByUsername(String username) </li>
												<li> <small> 쿼리 메소드 : SELECT * FROM user_entity where username = 1?;  </small> </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  UserController [Custom,C] </summary>
										<span className="sblock">
											<li> <small> @Controller </small> </li>
											<span className="sstitle"> 멤버 변수 </span>
											<span className="mblock">
												<li> @Autowired BCryptPasswordEncoder bCryptPasswordEncoder; </li>
												<li> @Autowired UserRepository userRepository; </li>
											</span>
											<span className="sstitle"> @GetMapping("/URL경로")</span>
											<span className="mblock">
												<li> public String 메소드명() {'{ return "html파일명"; }'} </li>
											</span>
											<span className="sstitle"> @PostMapping("/URL경로")</span>
											<span className="mblock">
												<li> public String 메소드명(UserEntity userEntity) {'{ 서비스로직 + return "html파일명"; }'} </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>   </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
											<span className="mblock">
												<li>  </li>
											</span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>   </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
											<span className="mblock">
												<li>  </li>
											</span>
										</span>
									</details>
									{/*  */}
								</span>

								<span className="sstitle"> <a name="Spring Security Filter"> Spring Security Filter </a> </span>
								<span className="mblock">
									{/*  */}
									<details>
										<summary> 1. SecurityContextPersistence Filter </summary>
										<span className="sblock">
											<small> SecurityContextRepository에서 SecurityContext를 로드하고 받아온 정보를 SecurityContext에 저장 </small>
											<small> 관련 : SecurityContextRepository, SecurityContextHolder, SecurityContext, Authentication </small>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 2. LogoutFilter </summary>
										<span className="sblock">
											<small> 로그아웃 URL로 지정된 URL 요청을 감시하고 매칭되는 요청이 있으면 주체(Principal)의 로그아웃처리를 한다. </small>
											<small> 관련 : LogoutSuccessHandler </small>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 3. UsernamePasswordAuthenticationFilter  </summary>
										<span className="sblock">
											<li> <small> 사용자명,비밀번호로 이루어진 폼 기반 인증에 사용되는 URL 요청을 감시하고 사용자의 인증을 처리 </small> </li>
											<li> <small> 관련 : AuthenticationManager, AuthenticationProvider, UserDetailService, UserDetails, GrantedAuthority </small> </li>
											<li> <small> 관련 : AuthenticationSuccessHandler </small> </li>
											<li> <small> 관련 : AuthenticationFailureHandler </small> </li>
											<li> <small> 관련 : SessionAuthenticationStrategy,SeesionRegistry </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  4. DefaultLoginPageGeneratingFilter </summary>
										<span className="sblock">
											<li> <small> 폼기반 또는 OpenID 기반 인증에 사용하는 URL에 대한 요청을 감시하고 로그인 폼 기능을 수행하는데
												필요한 HTML을 생성, 사용자가 별도 로그인 페이지를 구현하지 않았으면 스프링에서 기본적으로 설정한
												로그인 페이지를 처리 </small> </li>
											<li> <small> 관련 :  </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  5. BasicAuthenticationFilter </summary>
										<span className="sblock">
											<small> HTTP 기본 (BASIC)인증 헤더를 감시하고 처리하여 SecurityContextHolder에 저장 </small>
											<li> <small> 관련 : AuthenticationManager, AuthenticationProvider   </small> </li>
											<li> <small> 관련 : AuthenticationEntryPoint   </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 6.RememberMeAuthenticationFilter  </summary>
										<span className="sblock">
											<small> SecurityContext에 인증(Authentication) 객체가 있는지 확인하고 RememberMeServices를 구현한
												객체의 요청이 있을 경우, RememberMe를 인증토큰으로 컨텍스트에 주입  </small>
											<li> <small> 관련 : RequestCache </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>  RequestCacheAwareFilter </summary>
										<span className="sblock">
											<small> 로그인 성공 이후 인증 요청에 의해 가로채어진 사용자의 원래 요청을 재구성하는데 사용,
												인증 후 원래 Request 정보로 재구성하는 필터 </small>
											<li> <small> 관련 :  </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 7. SecurityContextHolderAwareRequestFilter  </summary>
										<span className="sblock">
											<small> HttpServletRequest를 HttpServletRequestWrapper를 상속하는
												하위클래스(SecurityContextHolderAwareRequestWrapper)로 감싸서 필터 체인상 하단에 위치한 요청
												프로세서에 추가 컨텍스트를 제공함 </small>
											<li> <small> 관련 :  </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 8. AnonymousAuthenticationFilter </summary>
										<span className="sblock">
											<small> 이 필터가 호출되는 시점까지 사용자가 인증을 받지 못했다면 요청 관련
												인증 토큰에서 사용자가 익명 사용자로 판단, SecurityContextHolder에 인증 객체가
												있는지 확인하고, 필요한 경우 Authentication 객체를 주입, Authentication 객체를 새로 생성함
												(AnonymousAuthenticationToken) </small>
											<li> <small> 관련 :  </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 9. SeeionManagementFilter </summary>
										<span className="sblock">
											<small> 인증된 주체를 바탕으로 세션 트래킹을 처리해 단일 주체와 관련한 모든 세션들이 트래킹되도록 도움,
												요청 이후 인증된 사용자인지 확인하고, 인증된 사용자일 경우 SeesionAuthenticationStrategy를 호출하여
												세션 고정 보호 메커니즘을 활성화 하거나 여러 동시 로그인을 확인하는 것과 같은 세션 관련 활동을 수행 </small>
											<li> <small> 세션 변조 공격 방지(SessionId를 계속 변경), 최대 세션 수(동시 접속) 설정, 유효하지 않은 세션으로
												접근 했을떄 URL 핸들링 </small> </li>
											<li> <small> 관련 : SecurityContextRepository, SecurityContextHolder, SecurityContext, Authentication </small> </li>
											<li> <small> 관련 : AuthenticationFilter </small> </li>
											<li> <small> 관련 : SessionAuthenticationStrategy, SessionRegistry </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 10. ExceptionTranslationFilter </summary>
										<span className="sblock">
											<small> 이 필터는 보호된 요청을 처리하는 동안 발생할 수 있는 기대한 예외의 기본 라우팅과 위임을 처리 </small>
											<li> <small> 관련 : AuthenticationEntryPoint </small> </li>
											<li> <small> 관련 : AccessDeniedHandler </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> 11. FilterSerucityInterceptor  </summary>
										<span className="sblock">
											<small> 이 필터는 권한부여와 관련한 결정을 AccessDecisionManager에게 위임해 권한부여 결정
												및 접근 제어 결정을 쉽게 만들어 줌, HTTP 리소스의 보안 처리를 수행 </small>
											<li> <small> 관련 : AuthenticationManager, AuthenticationProvider </small> </li>
											<li> <small> 관련 : AccessDecisionManager, DecisionVoters </small> </li>
											<li> <small> 관련 : SecurityMetadataSource  </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> WebAsyncManagerIntegrationFilter  </summary>
										<span className="sblock">
											<small> SpringSecurityContextHolder는 ThreadLocal기반(하나의 쓰레드에서 SecurityContext 공유하는 방식)
												으로 동작하는데, 비동기(Async)와 관련된 기능을 쓸 때에도 SecurityContext를 사용할 수 있도록
												만들어주는 필터 </small>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> HeaderWriterFilter  </summary>
										<span className="sblock">
											<small> 응답(Response)에 Security와 관련된 헤더 값을 설정해주는 필터 </small>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary> CsrfFilter </summary>
										<span className="sblock">
											<small> CSRF 공격을 방어하는 필터 </small>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>   </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>   </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}
									<details>
										<summary>   </summary>
										<span className="sblock">
											<li> <small> </small> </li>
											<span className="sstitle"> </span>
										</span>
									</details>
									{/*  */}

								</span>
								<span className="sstitle"> </span>
								<li>  </li>
								<span className="sstitle"> </span>
								<li>  </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="OAuth"> OAuth </a> </span>
							<span className="sblock">
								<span className="sstitle"> Google </span>
								<span className="mblock">
									<li> 1.  <a href="https://console.cloud.google.com/"> google console api </a> </li>
									<li> 2. 좌측 메뉴 API 및 서비스 클릭 </li>
									<li> 3. 상단에 육각형 모양 3개를 클릭해서 새프로젝트 생성  </li>
									<li> 4. 좌측 메뉴에 "OAuth 동의 화면" 클릭하고 User Type 체크하기  </li>
									<li> 5. 그다음 화면에서 앱 이름만 적기(test-oauth)  </li>
									<li> 6. 좌측 메뉴 "사용자 인증 정보" - "사용자 인증 정보 만들기" 클릭 - OAuth 클라이언트 ID 클릭
										- 애플리케이션 유형에서 웹 어플리케이션 선택 - 이름* 바꾸기(test-oauth) -
										승인된 리디렉션 URI 추가(http://localhost:8080/login/oauth2/code/google) </li>
									<li> 7.  </li>
									<li>  </li>
								</span>
								<span className="sstitle"> Naver </span>
								<span className="mblock">
									<li>  </li>
								</span>
								<span className="sstitle"> Kakao </span>
								<span className="mblock">
									<li>  </li>
								</span>
								<span className="sstitle"> Facebook </span>
								<span className="mblock">
									<li>  </li>
								</span>
								<span className="sstitle"> Github </span>
								<span className="mblock">
									<li>  </li>
								</span>
							</span>
						</span>
						{/*  */}
						{/* <span className="mblock">
							<span className="stitle"> <a name="">  </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<span className="mblock">
									<li>  </li>
								</span>
							</span>
						</span> */}
						{/*  */}
					</span>
				</ul>
			</div>
		</>
	);
}

export default SpringStudy;