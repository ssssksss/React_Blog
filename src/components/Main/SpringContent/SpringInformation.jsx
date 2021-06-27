import React from 'react';

const SpringInformation = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 스프링 프레임워크(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#스프링이란">1. 스프링이란 </a>
                        <a href="#스프링 프레임워크의 기본 동작원리">2. 스프링 프레임워크의 기본 동작원리 </a>
                        <a href="#스프링 프레임워크의 프로젝트 차이">3. 스프링 프레임워크의 프로젝트 차이 </a>
                        <a href="#DL 과 DI"> 4. DL 과 DI  </a>
                        <a href="#MyBastis"> 5. MyBastis  </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="스프링이란"> 1. 스프링이란 </a> </span>
                <p> 1. 스프링은 자바 플랫폼 프레임워크 , 기업을 대상으로 개발하기 위한 기능을 제공하는 솔루션</p>
                <p> 2. 객체 생성 및 소멸, 라이프사이클을 관리한다</p>
                <p> 3. 스프링은 IOC(Inversion of Control)기반의 프레임 워크이다. 기존에 프로그램은 객체 생성 부터 메소드 호출까지 직접 사용자가 제어를 하였지만
                    IOC에서는 제어를 특별한 객체에 넘긴다</p>
                <p> 4. DL(Dependency LookUp) 의존성 검색 : 컨테이너에서 객체들을 관리하기 위해 별도의 저장소에
                    빈을 저장하는데 개발자들이 컨테이너가 제공하는 API를 이용하여 빈을 검색하는 방법
                    <p> DI(Dependency Injection) 의존성 주입 : 객체가 서로 의존하는 관계가 될 때 의존성을 주입하는 것
                        의존성은 하나의 객체가 다른 객체를 사용하고 있는 것을 의미, 각 클래스 사이에 필요로 하는
                        의존관계를 빈 설정 정보를 바탕으로 컨테이너가 자동으로 연결해준다.
                    </p>
                    <p> 5. POJO : 코드가 심플해지고 테스트 하기 좋으며, 요구사항에 기술적 선택을 바꿀 수 있음</p>
                    <p> EJB는 확장이 가능하고 재사용하기 위한 로직으로 사용이 되었는데 한 가지의 기능을
                        위해 불필요한 복잡한 로직이 과도하게 들어가는 단점이 있었다. 이것을 POJO 를 사용해서
                        의존성이 없고 테스트와 유지보수가 편리한 장점을 가지게 하였다. 프레임워크를 따르지 않는
                        자바 객체를 지칭한다.
                    </p>
                    <p> 6. AOP(Aspect Oriented Programming) 관점 지향 프로그래밍 , 기존에 사용하던 프로그래밍 방법은
                        객체지향 프로그래밍을 사용하지만 중복된 코드들이 많고 확장,유지 보수를 떨어뜨린다. AOP에서는
                        핵심기능(서비스)와 공통기능(인증,필터 등)을 분리하여 유지보수가 더 좋아지며 재활용성이
                        ㄴ높아진다.
                    </p>
                    <p>
                        7. 컨테이너 : servlet 컨테이너, ejb 컨테이너 등 여러가지의 컨테이너를 볼 수 있다. 컨테이너는
                        인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다 servlet컨테이너를 개발자가 어느 정도
                        관여를 하지만 스프링 컨테이너는 개발자가 관여하지 않고 컨테이너의 영역으로 사용되는 것이다
                        대표적으로 BeanFactory와 ApplicationContext 2개의 컨테이너가 있다.
                    </p>
                </p>
                <span className="mblock">
                    {/* <h3> HTML </h3>
                    <h3> 자바 클래스 </h3> */}
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="스프링 프레임워크의 기본 동작원리"> 2. 스프링 프레임워크의 기본 동작원리 </a> </span>
                <p> 1. 클라이언트 요청 </p>
                <p> 2. DispathcerServlet 접근 </p>
                <p> 3. HandlerMapping 참조하여 Controller에 연결 </p>
                <p> 4. Controller에 연결되어 Service를 호출 DAO를 통해 DB에서 꺼내온다 </p>
                <p> 5. 모델과 뷰를 객체에 담아 DispatcherServlet 반환한다 </p>
                <p> 6. ViewResolver를 통해 View와 연결되고 화면으로 출력 </p>

                <span className="mblock">
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBasicAction.png'} /> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="스프링 프레임워크의 프로젝트 차이"> 3. 스프링 프레임워크의 프로젝트 차이 </a> </span>
                <p> 1. Spring Legacy Project : 일반적인 스프링 프레임워크 프로젝트 , 스프링 프레임워크 라이브러리 내장</p>
                <p> 1-1. Simple Projects </p>
                <p> 1-1-1. Simple Java : 최상의 패키지 없이 기본 Spring 구성 및 프로젝트로 사용하여 Java빌드를
                    사용하여 간단한 Spring 프로젝트를 작성
                </p>
                <p> 1-1-2. Simple Spring Maven : Spring 라이브러리의 기본 세트를 포함하는 Maven을 사용하여
                    간단한 Spring 프로젝트를 작성
                </p>
                <p> 1-1-3. Simple Spring Web Maven : Spring 웹 라이브러리의 기본 세트를 포함 Maven을 사용하여 간단한
                    Spring 웹 프로젝트를 생성 </p>
                <p> 1-2. Spring MVC Project : 기본적으로 MVC형태로 메이븐까지 세팅이 되어 생성 </p>
                <p> 2. Spring Starter Project : 스프링 부트 프레임워크 , 간단한 라이브러리 추가하는 것으로 프레임워크를 포함 할 수 있음 </p>
                <p> 3.  </p>
                <p>  </p>
                <p>  </p>

                <span className="mblock">
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBasicAction.png'} /> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="DL 과 DI "> 4. DL 과 DI </a> </span>
                <p> 1. DL </p>
                <p>  </p>
                <p> 2. DI(Dependency Injection) 의존성 주입 : 컨테이너가 빈 정보를 바탕으로
                    자동으로 연결해 준다. 코드가 단순해지고 컴포넌트간의 결합도가 제거된다.
                </p>
                <p> 2-1. 빈 설정파일(xml,어노테이션)에서 의존관계가 필요한 정보를 추가하면 된다. </p>
                <p> 2-2. 객체 레퍼런스를 컨테이너로부터 받아 실행시 동적으로 의존관계가 생성 </p>
                <p> 2-3. 컨테이너가 애플리케이션 코드에 의존관계를 주입해주는 것 </p>
                <p> DI의 유형 3가지 </p>
                <p> 1. Setter 메서드를 이용한 의존성 삽입 </p>
                <p> 2. 생성자를 이용한 의존성 삽입 </p>
                <p> 3. 일반 메서드를 이용한 의존성 삽입 </p>
                <p> DI Bean을 관리하는 컨테이너 = Bean Factory </p>

                <span className="mblock">
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBasicAction.png'} /> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="MyBastis"> 5. MyBastis </a> </span>
                <p> 자바의 관계형 데이터 베이스 프로그래밍 좀 더 쉽게 할 수 있는 프레임워크 </p>
                <p> 기존의 JDBC보다 더 편하게 사용하기 위해 개발 </p>
                <p> </p>
                <p> </p>
                <p> </p>

                <span className="mblock">
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBasicAction.png'} /> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="CGLIB"> 6. CGLIB </a> </span>
                <p> <a href="https://blog.naver.com/gowjr300/222377148682" target="_blank"></a></p>
                <p> CGLIB라는 바이트코드 조작 라이브러리 </p>
                <p> @Configuration이 존재해야 제대로 작동하고 만약에 없으면 여러개의 빈객체가 생성됨</p>
                <p> 하는 역할은 @Bean으로 클래스가 호출이 되었을 때 여러개를 생성하지 않고
                    기존 클래스를 기반으로 다른 클래스를 하나 만들어서 다시 호출이 되었을때
                    이미 컨테이너에 존재한다면 새로 생성하지 않고 반환을 하고 없다면 생성을
                    하는 역할을 함으로써 싱글톤이 보장이 되게하는 역할 </p>
                <p> @Autowire로 해결이 가능하다고 하는데 굳이...</p>
                <p> </p>

                <span className="mblock">
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBasicAction.png'} /> </p>
                </span>
            </span>
        </div>
    );
}

export default SpringInformation;