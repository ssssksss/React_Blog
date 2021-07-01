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
        // console.log(window.innerWidth);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
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
                    <p className="hyperlink">
                        <a href="#스프링이란?" className="col_p"> 스프링이란? </a>
                        <a href="#스프링 프레임워크의 기본 동작 원리" className="col_p"> 스프링 프레임워크의 기본 동작 원리 </a>
                        <a href="#의존성 주입(Dependency Injection)" className="col_p"> 의존성 주입(Dependency Injection) </a>
                        <a href="#AOP(Aspect Oriented Programming)" className="col_p"> AOP(Aspect Oriented Programming) </a>
                        <a href="#컨테이너" className="col_p"> 컨테이너 </a>
                        <a href="#스프링 Security" className="col_p"> 스프링 Security </a>
                    </p>
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
                            <a name="스프링 Security">  스프링 Security </a>
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
                            <a name="">  소제목 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
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
                    {/*  */}
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

                </span>
            </div>
        </>
    );
}

export default SpringStudy;