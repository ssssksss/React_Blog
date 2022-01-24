import React from 'react';

const SpringAop = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> AOP란 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> AOP(Aspect Oriented Programming): 관점 지향 프로그래밍,기존에 사용하던
                            프로그래밍 방법은 객체지향 프로그래밍을 사용하지만 중복된 코드들이 많고
                            확장,유지 보수를 떨어뜨린다.AOP에서는 핵심기능(서비스)와 공통기능(인증,필터 등)을
                            분리하여 유지보수가 더 좋아지며 재활용성이 높아진다.
                        </li>
                        <li> 자바에서는 다중상속이 불가능하여 공통기능을 부여하기에 한계가 있다. </li>
                        <li> 로그처리, 보안처리, DB 트랜잭션 처리 등 , 코드의 중복을 줄이고 로직을 분리 할 수 있음 </li>
                        <li> 관정을 횡단으로 보는 횡단 관심 사항, Cross Cutting Concern(부가적인로직) , Core Concern(비즈니스로직) </li>
                        <li> proxy 방법을 이용한다. client - proxy(공통기능) - target(핵심기능) </li>
                        <li> /aop 폴더를 만들어서 사용 </li>
                        <li> 스프링에서는 Proxy로 제공, Target이 이용되는 프록시는 런타임에 생성 </li>
                        <li> 일반적으로 전처리 어드바이스를 행하지만 후처리 어드바이스도 가능 </li>

                        <h2 className="h2"> 📌 관련 용어 </h2>
                        <li> Aspect : Advice + Pointcut , 싱글톤으로 존재 </li>
                        <li> Advisor : Advice + Pointcut , 스프링AOP에서만 사용하는 용어 </li>
                        <li> Weaving : Pointcut에 결정된 Target에 Advice를 삽입하는 과정  </li>
                        <li>  </li> <br />
                        <li> Target : 핵심기능, Pointcut에서 적용이 되는 대상  </li>
                        <li> Advice : 부가기능(보안, 필터 등), Aspect 해야할 일 </li>
                        <li> Join point : Advice가 적용될 지점(타겟이 구현한 메소드,필드,객체,생성자)  </li>
                        <li> Pointcut : Advice를 적용할 Target메서드를 선별, execution으로 시작하고, signature를 이용, 정규표현식 </li>

                        <h2 className="h2"> 📌 관련 태그? 메소드? </h2>
                        <li> aop:before : 메소드 실행전에 advice실행 </li>
                        <li> aop:after-returning : 정상적으로 메소드 실행 후에 advice 실행  </li>
                        <li> aop:after-throwing : 메소드 실행중 exception 발생시 advice 실행 </li>
                        <li> aop:after : 메소드 실행중 exception이 발생해도 advice 실행 </li>
                        <li> aop:around : 메소드 실행 전/후 및 exception 발생시 advice 실행 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> AOP 예시 </summary>
                    <div className='block2'>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 일반 메소드 </h3>
                                <div className='block4'>
                                    <li> @커스텀어노테이션 </li>
                                    <li> public 메소드() {"{"}
                                        <li> 메소드 내부 코드 작성 </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                                <h3 className='h3'> 🎈 @커스텀어노테이션 </h3>
                                <div className='block4'>
                                    <li> @Target (ElementType.METHOD) </li>
                                    <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                    <li> public @Interface 커스텀어노테이션 {"{"}
                                        <li>  </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                                <h3 className='h3'> 🎈 Aspect 생성(스프링 AOP) </h3>
                                <div className='block4'>
                                    <li> @Component<small> // 빈으로 등록</small> </li>
                                    <li> @Aspect </li>
                                    <li> public class 클래스명 {"{"}
                                        <li> Logger logger = LoggerFactory.getLogger(LogAspect.class); </li>
                                        <li> @Around("execution(* 패키지명..*(..))") <small> //타겟팅 지정 </small> </li>
                                        <li> public Object 메소드명(ProceedingJoinPoint joinPoint) throw Throwable {"{"}
                                            <li> StoepWatch stopWatch = new StopWatch(); </li>
                                            <li> stopWatch.start(); </li>
                                            <li> Object proceed = joinPotin.proceed(); </li>
                                            <li> stopWatch.stop(); </li>
                                            <li> logger.info(stopWatch.prettyPrint()); </li>
                                            <li> return proceed; </li>
                                        </li>
                                        <li> {"}"} </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Spring AOP , AspectJ </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 Spring AOP </h2>
                        <li> 간단한 AOP 제공 </li>
                        <li> join point : 메서드 레벨만 지원 </li>
                        <li> Weaving : 런타임 시에만 가능 </li>
                        <li> 대상 : Spring Container Bean만 가능 </li>

                        <h2 className='h2'> 📌 Aspect J </h2>
                        <li> 완벽한 AOP 제공 </li>
                        <li> join point : 생성자, 필드, 메서드 다양하게 지원 </li>
                        <li> Weaving : 런타임 제공x, 컴파일, 포스트 컴파일, 로드 타임 제공 </li>
                        <li> 대상 : 모든 자바 객체 가능 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 스프링AOP 메소드 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 JointPoint 메소드 </h2>
                        <li> getArgs() : 메서드 인자 반환 </li>
                        <li> getThis() : 프록시 객체 반환 </li>
                        <li> getTarget() : 대상 객체 반환 </li>
                        <li> getSignature() : 어드바이즈,메서드 설명 반환 </li>
                        <li> toString() : 어드바이즈,메서드 설명 출력 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @Aspect </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> Aop로 처리할 클래스 상단에 선언 </li>
                        <li> 자동으로 빈으로 등록이되지 않음, 대신 @Component 사용 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @Around </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                        <li>  </li>
                        <li>  </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default SpringAop;