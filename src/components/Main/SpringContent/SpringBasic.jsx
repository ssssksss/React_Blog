import React from 'react';

const SpringBasic = (props) => {

	return (
		<>
			<div className="common_style">
				<ul>
					<span className="lblock">
						<span className="mtitle"> <a name="main"> 스프링 기초 </a> </span>

						<div className='mblock'>
							<details>
								<summary className='stitle'> 스프링이란?
									<a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
								<div className='sblock'>
									<div className='mblock'>
										<a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer"> 스프링부트 문서 </a> <br />
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
											인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다.
											<li>
												{/* 아래 내용은 일단 옮겨놓음 */}
												<span className="sblock">
													<li className="sstitle" ><i> 컨테이너의 빈 객체 </i>  </li>
													<li> CGLIB라는 바이트코드 조작 라이브러리를 이용하여 Bean객체를 싱글턴패턴으로 유지하게 한다.
														클래스를 복제?한 클래스객체를 따로 만들어서 컨테이너에서 만들어서 사용한다. 컨테이너에
														Bean객체가 없으면 Bean객체를 생성하고 존재한다면 기존에 Bean객체를 반환해준다. </li>
												</span>
											</li>
										</li>
									</div>
								</div>

								<div className='sstitle'> 스프링의 일반적인 작동과정 </div>
								<div className='sblock'>
									<li> 1. 클라이언트 요청 </li>
									<li> 2. Dispatcher Servlet 접근 </li>
									<li> 3. Handler Mapping 참조하여 Controller 연결 </li>
									<li> 4. Mapping된 Controller에 서비스 로직에 따라 DAO,Entity등을 통해 DB에 접근  </li>
									<li> 5. 모델과 뷰 객체를 담아 DispatcherServlet에 반환 </li>
									<li> 6. ViewResolver를 통해 View와 연결되어 화면으로 출력 </li>
								</div>
							</details>
						</div>
						{/*  */}
						<div className='mblock'>
							<details>
								<summary className='stitle'> 의존성 주입(Dependency Injection)
									<a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
								<div className='sblock'>
									<div className='sstitle'> 의존성 주입(Dependency Injection) </div>
									<div className='mblock'>
										<li> 객체를 직접 만들지 않고 주입받아 사용하는 방법 </li>
										<li>  </li>
									</div>
									<div className='sstitle'> 의존성 주입하는 방법 3가지  </div>
									<div className='mblock'>
										<li> 생성자(Constructor) 주입(스프링 팀에서 추천하는 방식)
											<li> 1. 생성자로 객체를 생성하는 시점에 인자에 있는 Bean을 호출 </li>
											<li> 2. Bean을 호출할 때(초기에 생성x) BeanFacotry에 Bean을 만들고 만든 Bean을 찾음 </li>
											<li> 3. Bean을 찾았으므로 생성자 인자에 Bean을 주입 </li>
										</li> <br />
										<li> 수정자(Setter) 주입
											<li> 1. &lt;bean&gt;을 보고 찾음, 찾으면 bean객체 생성 </li>
											<li> 2. setter호출,  </li>
											<li> 3. 이후에 주입하려는 빈 객체의 수정자를 호출하여 주입 </li>
										</li> <br />
										<li> 필드(Field) 주입(어노테이션 사용)
											<li> 1. 빈 객체를 생성  </li>
											<li> 2. 빈 객체를 찾아서 주입하는 방법  </li>
										</li> <br />
									</div>
									<div className='sstitle'>  </div>
									<div className='mblock'>
										<li>  </li>
										<li>  </li>
									</div>
								</div>
							</details>
						</div>
						{/*  */}

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
						</span>
						{/*  */}


					</span>
				</ul>
			</div>
		</>
	);
}

export default SpringBasic;