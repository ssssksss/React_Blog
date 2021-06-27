import React from 'react';

const SpringLibrary = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 스프링 라이브러리(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#톰캣 라이브러리">1-1. 톰캣 라이브러리 </a>
                        <a href="#MVC 라이브러리">1-2. MVC 라이브러리 </a>
                        <a href="#스프링부트 라이브러리">2-1. 스프링부트 라이브러리 </a>
                        <a href="#스프링부트 로그 라이브러리">2-2. 스프링부트 로그 라이브러리 </a>
                        <a href="#스프링부트 테스트 라이브러리">3-1. 스프링부트 테스트 라이브러리 </a>
                        <a href="#스프링부트 데브툴스 라이브러리">4-1. 스프링부트 데브툴스 라이브러리 </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}

            <span className="lblock">
                <span className="mtitle"> <a name="spring-boot-starter-web.lib"> 1. spring-boot-starter-web.lib </a> </span>
                <span className="mblock">
                    <span className="stitle"> <a name="톰캣 라이브러리"> 1-1. 톰캣 라이브러리 </a> </span>
                    <p> tomcat : 웹서버를 실행할 때 사용하는 톰캣 라이브러리 </p>
                    <span className="sblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringTomcatLibrary.png'} /> </p>
                    </span>
                    <p> mvc : 스프링에서 mvc패턴을 이용할 때 필요한 라이브러리 </p>
                    <span className="stitle"> <a name="MVC 라이브러리"> 1-2. MVC 라이브러리 </a> </span>
                    <span className="sblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringMvcLibrary.png'} /> </p>
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="spring-boot-starter-thymeleaf.lib"> 2. spring-boot-starter-thymeleaf.lib </a> </span>
                <p> thymeleaf : 템플릿 엔진(View) </p>
                <span className="mblock">
                    <span className="stitle"> <a name="스프링부트 라이브러리"> 2-1. 스프링부트 라이브러리 </a> </span>
                    <span className="sblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootLibrary.png'} /> </p>
                    </span>
                    <span className="stitle"> <a name="스프링부트 로그 라이브러리"> 2-2. 스프링부트 로그 라이브러리 </a> </span>
                    <p> slf4j : </p>
                    <p> logback(추천) : </p>
                    <span className="sblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringLogLibrary.png'} /> </p>
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="spring-boot-starter-test.lib"> 3. spring-boot-starter-test.lib </a> </span>
                <span className="mblock">
                    <span className="stitle"> <a name="스프링부트 테스트 라이브러리"> 3-1. 스프링부트 테스트 라이브러리 </a> </span>
                    <p> Junit : 테스트 프레임워크 </p>
                    <p> mockito : 목 라이브러리 </p>
                    <p> assertj : 테스트 코드를 편하게 작성하는 것을 도와주는 라이브러리 </p>
                    <p> spring-test : 스프링 통합 테스트 지원 라이브러리 </p>
                    <span className="sblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootTestLibrary.png'} /> </p>
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="spring-boot-devtools.lib"> 4. spring-boot-devtools.lib </a> </span>
                <span className="mblock">
                    <p> base classloader 과  restart classloader 2개의 클래스로더를 통해 프로그램을 실행 </p>
                    <p> base classloader: 값을 직접 변경하지 않고 참조만 하는 파일들을 실행하는 역할 </p>
                    <p> restart classloader : 개발자가 작업하고 있는 클래스 파일을 실행하는 역할 </p>
                    <p> devtools는 classpaht에 class파일의 변화를 감지하여 서버를 재시작하는 원리이다. </p>
                    <p> 라이브러리 기능 </p>
                    <p> 1. property dafaults : 속성을 기본값으로 설정, 개발 옵션을 비활성화 </p>
                    <p> 2. automatic restart : 클래스의 경로가 변경될 때마다 자동 재시작 </p>
                    <p> 3. live leload : 웹 브라우저 변경시 자동 새로고침 </p>
                    <p> 4. global settings : dev 프로퍼티 관리 가능</p>
                    <p> 5. remote applications : 원격 개발 지원</p>
                    <span className="stitle"> <a name="스프링부트 데브툴스 라이브러리"> 4-3. 스프링부트 데브툴스 라이브러리 </a> </span>
                    <span className="sblock">
                        <p> 1. bulid.gradle 에 의존성 추가</p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootDevtoolsLibrary_addGradle.png'} /> </p>
                        <p> 2. ctrl + shift + a 를 눌러 registry 입력하고 들어가서 compiler.automake.allow.when.app.running 체크</p>
                        <p> 3. ctrl + shift + s (설정) - complier - build project automatically 체크 </p>
                        <p> 위와 같이 하였지만 수정하고 새로고침하면 바뀌기는 하는데.. 그다음은 자동으로 되지 않음</p>
                        <p> </p>
                    </span>
                </span>
            </span>
        </div>
    );
}

export default SpringLibrary;

