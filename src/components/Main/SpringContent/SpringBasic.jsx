import React from 'react';

const SpringBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 스프링 프레임워크 코드(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#프로젝트 설정">1. 프로젝트 설정 </a>
                        <a href="#View 만들어 보기">2.  View 만들어 보기 </a>
                        <a href="#Controller 만들어 보기">3.  Controller 만들어 보기 </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 1. 프로젝트 설정 </a> </span>
                <p> 1. 자바 11 버전 , cmd창 : java -version 입력 </p>
                <p> <a href="https://www.oracle.com/kr/java/technologies/javase-downloads.html" target="_blank"> 자바 다운로드</a></p>
                <p> 2. <a href="https://start.spring.io/" target="_blank"> 스프링부트로 시작설정</a>
                    Gradle Project , java, 2.@.1 , hello, hello 입력 우측에 dependiencies 추가 Spirng web, thymeleaf ,spring boot devtools </p>
                <p> 3. 설정이 되었으면 generate 버튼 누르고 , 원하는 폴더에 압축 풀기  </p>
                <p> 4. inteliJ를 켜서 import , git에 추가하는 것 무조건 하기 </p>
                <p> 5. src - main -java - 패키지? - 클래스   , helloaplication 실행(run) 해보기 ( 10초이상 걸림)</p>
                <p> 6. 인터넷 창에 http://127.0.0.1:8080 입력 , 화이트 라벨 에러 페이지가 뜨면 정상 </p>
                <p> 7. 상단메뉴 file - settings - build, execution, deployment - build tools
                    - gradle - build and run using 과 run tests using을 gradle에서 inteliJ로 변경 </p>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="View 만들어 보기"> 2. View 만들어 보기 </a> </span>
                <p> 1. src - main - resources - static - index.html 만들고 body태그에 hello world 입력 </p>
                <p> 2. 서버를 실행하고 브라우저에 http://localhost:8080/ </p>
                <p> </p>
                <span className="mblock">
                    <p> 해석 : 첫번째로 static 위치에 index.html 파일을 찾고 없으면 index 템플릿을 찾는다 </p>
                    <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootWelcomePage.png'} /> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="Controller 만들어 보기">  </a> 3. Controller 만들어 보기 </span>
                <span className="mblock">
                    <p> 1. src - main - java - 패키지 - 패키지 만들기(controller) - 클래스 만들기(HelloController) </p>
                    <p> <img src={process.env.PUBLIC_URL + '/img/Spring_Controller_HelloController.png'} /> </p>
                </span>
                <span className="mblock">
                    <p> html thymeleaf 템플릿엔진 코드 사용하기 </p>
                    <p> 2. src - main - resources - templates - hello.html 만들기 </p>
                    <p> <img src={process.env.PUBLIC_URL + '/img/Spring_Hello_Html.png'} /> </p>
                </span>
                <span className="mblock">
                    <p> 3. run하고 브라우저에 localhost:8080/hello 입력하기 </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name=""> 4. cmd창으로 빌드하고 실행해보기 </a> </span>
                <p> 0. window에서 하는 방법 </p>
                <p> 1. cmd창 열기 </p>
                <p> 2. cd 파일경로 입력</p>
                <p> 3. gradlew.bat build 입력 </p>
                <p> 4. cd build </p>
                <p> 5. cd libs </p>
                <p> 6. java -jar 파일명-0.0.1-SNAPSHOT.jar  </p>
                <p> 이미 intelliJ에서 실행중이 였다면 끄고서 실행  </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  5. 간단한 회원 관리 만들어보기 </a> </span>
                <p> </p>
                <span className="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name=""> 6. 테스트 코드 만들어 보기 </a> </span>
                <p> </p>
                <span className="mblock">
                    <p> @Configuration </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  7. 컴포넌트 스캔 방식이 아닌 자바코드로 스캔하기 </a> </span>
                <p> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <span className="mblock">
                </span>
            </span>

        </div>
    );
}

export default SpringBasic;