import React, { useEffect, useRef } from 'react';

const SpringBasic = (props) => {

	return (
		<div className="common_style">

			<div className='block1'>
				<details>
					<summary> @Autowired </summary>
					<div className='block2'>

						<h2 className='h2'> 📌 설명 </h2>
						<li> 생성자, Setter, 필드에서 사용 </li>
						<li> 의존 객체 타입에 해당하는 bean을 찾아 주입하는 역할 </li>
						<li> 빈으로 등록되어 있지않는 곳에 사용하면 에러가 발생한다. </li>
						<li> @Autowired(required=false)를 사용하면 의존성주입은 안하고 인스턴스 만들어서 빈은 등록가능하다. </li>

					</div>
				</details>
			</div>

			<div className='block1'>
				<details>
					<summary> 스프링이란?</summary>
					<div className='block2'>

						<h2 className="h2"> 📌 설명 </h2>
						<li> <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer"> 스프링부트 문서 </a> </li>
						<li> 스프링은 Ioc기반의 프레임워크, 자바 플랫폼 프레임워크 </li>
						<li> 의존성 주입(Denpendency Injection) 의존성 주입: 개발자가 아닌 컨테이너가 관리하는 빈 객체를 주입하는 방법 </li>
						<li> POJO(Plain Old Java Object): 기본적인 기능만 가진 자바 객체 </li>
						<li> 컨테이너: BeanFactory와 ApplicationContext 2개의 대표적인 컨테이너가 있다.컨테이너는
							인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다. </li>

						<h2 className="h2"> 📌 컨테이너의 빈 객체 </h2>
						<li> CGLIB라는 바이트코드 조작 라이브러리를 이용하여 Bean객체를 싱글턴패턴으로 유지하게 한다.
							클래스를 복제?한 클래스객체를 따로 만들어서 컨테이너에서 만들어서 사용한다. 컨테이너에
							Bean객체가 없으면 Bean객체를 생성하고 존재한다면 기존에 Bean객체를 반환해준다. </li>

						<h2 className="h2"> 📌 스프링의 일반적인 작동과정 </h2>
						<li> 1. 클라이언트 요청 </li>
						<li> 2. Dispatcher Servlet 접근 </li>
						<li> 3. Handler Mapping 참조하여 Controller 연결 </li>
						<li> 4. Mapping된 Controller에 서비스 로직에 따라 DAO,Entity등을 통해 DB에 접근  </li>
						<li> 5. 모델과 뷰 객체를 담아 DispatcherServlet에 반환 </li>
						<li> 6. ViewResolver를 통해 View와 연결되어 화면으로 출력 </li>

					</div>
				</details>
			</div>

			<div className='block1'>
				<details>
					<summary> @Bean이란 </summary>
					<div className='block2'>

						<h2 className='h2'> 📌 설명 </h2>
						<li> 스프링 IoC 컨테이너가 관리하는 객체 </li>
						<li> ApplicationContext, BeanFactory는 IoC 컨테이너 </li>
						<li> ApplicationContext는 BeanFactory를 상속을 받는다. </li>
						<li>  </li>
					</div>
				</details>
			</div>

			<div className='block1'>
				<details>
					<summary> 의존성 주입(Dependency Injection) </summary>
					<div className='block2'>

						<h2 className="h2"> 📌 설명 </h2>
						<li> 객체를 직접 만들지 않고 주입받아 사용하는 방법 </li>
						<li> private Dependency dependency = new Dependency(); <small> // 직접 만드는 방법 </small> </li>
						<li> this.dependency = dependency; <small> // 매개 변수로 외부에서 주입받는 방법 </small> </li>

						<h2 className="h2"> 📌 1. 생성자(Constructor) 주입(스프링 팀에서 추천하는 방식) </h2>
						<li> 1. 생성자로 객체를 생성하는 시점에 인자에 있는 Bean을 호출 </li>
						<li> 2. Bean을 호출할 때(초기에 생성x) BeanFacotry에 Bean을 만들고 만든 Bean을 찾음 </li>
						<li> 3. Bean을 찾았으므로 생성자 인자에 Bean을 주입 </li>

						<h2 className="h2"> 📌 2. 수정자(Setter) 주입 </h2>
						<li> 1. {'<bean>'}을 보고 찾음, 찾으면 bean객체 생성 </li>
						<li> 2. setter호출,  </li>
						<li> 3. 이후에 주입하려는 빈 객체의 수정자를 호출하여 주입 </li>

						<h2 className="h2"> 📌 3. 필드(Field) 주입(어노테이션 사용) </h2>
						<li> 1. 빈 객체를 생성  </li>
						<li> 2. 빈 객체를 찾아서 주입하는 방법  </li>

					</div>
				</details>
			</div>

			<div className='block1'>
				<details>
					<summary> POJO(Plain Old Java Object) </summary>
					<div className='block2'>

						<h2 className="h2"> 📌 POJO가 탄생한 이유 </h2>
						<li> 자바를 개발할 때 과거에 개발자가 비즈니스로직 + 트랜잭션,보안,필터 등등을 구현해야
							했다. 그러므로 너무 많은 부담을 지게 되었고 그 부담을 덜기 위하여 기업에서 개발하기 위한
							서비스 EJB(Enterprise Java Beans)가 탄생하여 부담이 줄어들었다. 하지만 작은 서비스를 개발할때도
							거대한 EJB를 상속받아 사용해야되는 불편함이 있었고 기능을 바꾸기 위해서는 전체적으로 코드를
							수정해야되는 문제점이 발생하였다. EJB는 객체지향의 특징과 장점을 사용할 수 없었다. </li>
						<li> POJO는 이러한 문제점에서 벗어나 객체지향에 집중하고, 클래스나 라이브러리에 종속되지 않아
							원하는 대로 사용을 할 수 있게 되었다. </li>

						<h2 className="h2"> 📌 POJO 사용 이유와 장점 </h2>
						<li> 특정 환경에 종속이 되지 않는다. </li>
						<li> 객체지향(OOP)를 자유롭게 사용할 수 있다. </li>
						<li> 로우레벨은 분리하면서 필요한 로직을 작성할 수 있다. </li>
						<li> 테스트 작업 환경에 좋다. </li>
						<li> EJB의 서비스와 기술은 그대로 사용하면서 자바 객체지향도 사용을 할 수 있어 좋다. </li>

					</div>
				</details>
			</div>
		</div>
	);
}

export default SpringBasic;