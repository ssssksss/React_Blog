import React, { useEffect, useRef, useState } from 'react';

const SpringStudy = (props) => {

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
		if (window.innerWidth < 1024) {
			blockRef.current[0].style.position = 'fixed';
			document.documentElement.scrollTop < elementHeight ?
				blockRef.current[0].style.top = (elementHeight + 30) + "px" :
				blockRef.current[0].style.top = "10px";
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
								<a href="#lombok 어노테이션" className="col_p"> lombok 어노테이션 </a>
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
							</span>
						</span>
						{/*  */}


					</span>
				</ul>
			</div>
		</>
	);
}

export default SpringStudy;