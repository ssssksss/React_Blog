import React, { useEffect, useRef, useState } from 'react';

const Term = (props) => {
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
                            <summary> 기본 </summary>
                            <a href="#프레임워크와 라이브러리">  프레임워크와 라이브러리 </a>
                            <a href="#URL과 URI"> URL과 URI </a>
                            <a href="#Restful API"> Restful API</a>
                            <a href="#IOC와 DI,POJO">  IOC와 DI,POJO </a>
                            <a href="#TDD (테스트 주도 개발)">  TDD (테스트 주도 개발) </a>
                            <a href="#ORM(Object Relation Mapping)">  ORM(Object Relation Mapping) </a>
                            <a href="#JPA(Java Persistence API)"> JPA(Java Persistence API)   </a>
                            <a href="#Spring MVC"> Spring MVC  </a>
                            <a href="#DataSource"> DataSource  </a>
                            <a href="#Controller와 RestController"> Controller와 RestController  </a>
                            <a href="#Transaction(트랜잭션)"> Transaction(트랜잭션) </a>
                            <a href="#JWT(Json Web Token)"> JWT(Json Web Token)  </a>
                            <a href="#세션,쿠키,토큰"> 세션,쿠키,토큰  </a>
                            <a href="#서버기반, 토큰기반 인증시스템 차이">  서버기반, 토큰기반 인증시스템 차이 </a>
                            <a href="#RequestBody, ModelAttribute, RequestParam의 차이"> RequestBody, ModelAttribute, RequestParam의 차이  </a>
                            <a href="#Bean, Configuration, Component"> Bean, Configuration, Component  </a>
                            <a href="#OOP의 5가지 원칙(SOLID)"> OOP의 5가지 원칙(SOLID) </a>
                            <a href="#Spring Security"> Spring Security  </a>
                            <a href="#Cors(Cross Origin Resource Sharing)">  Cors(Cross Origin Resource Sharing) </a>
                            <a href="#">   </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="">  용어 정리  </a> </span>
                    <p> <small>   </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="프레임워크와 라이브러리"> 프레임워크와 라이브러리  </a> </span>
                        <p> 프레임워크 : 소프트웨어의 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합,
                            어플리케이션 개발할 떄 코드,자료구조,DB연결 등 기능들이 제공이 되는 소프트웨어 프로그램(Maven,Gradle 등)  </p>
                        <p> 라이브러리 : 특정 기능들과 도구들을 모아놓은 집합 </p>
                        <p>   </p>
                        <p>   </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Restful API">  Restful API </a> </span>
                        <p> 어떤 자원에 대해 CRUD 연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것 </p>
                        <p> Resource(자원,URI) + Method(행위,POST) + Representation of Resource(자원형태,JSON) = REST </p>
                        <span className="sblock">
                            <span className="sstitle"> Uniform Interface (유니폼 인터페이스) </span>
                            <p> HTTP표준이면 어떤 플랫폼에서도 사용가능 </p>
                            <span className="sstitle">Stateless (상태 정보 유지 안함) </span>
                            <p> 서버는 요청을 별개의 것으로 인식  </p>
                            <span className="sstitle"> Cacheable (캐시 가능)</span>
                            <p> http캐싱기능 적용 가능 </p>
                            <span className="sstitle"> Client-Server Architecture </span>
                            <p> 서버는 api(자원)를 제공하고 클라이언트는 인증,세션 등을 관리하여 역할을 구분시킴 </p>
                            <span className="sstitle"> Self-Descriptiveness(자체 표현 구조) </span>
                            <p> REST API 메시지만 보고도 이해할 수 있는 구조 </p>
                            <span className="sstitle"> Layerd System (계층화) </span>
                            <p> 보안, 로드 밸런싱, 암호화 등을 계층을 추가하여 구조를 변경할 수 있다. 또한 Proxy,GateWay와 같은 네트워크
                                기반의 중간매체를 사용할 수 있게 해준다. 하지만 클라이언트는 직접 통신하는지, 중간 서버와
                                통신하는지 알 수 없다. </p>
                            <span className="sstitle"> REST 규칙 </span>
                            <ul>
                                <ol> URI는 명사를 사용 </ol>
                                <ol> 슬래시로 계층 관계를 표현 </ol>
                                <ol> URI의 마지막에는 슬래시를 붙이지 않는다. </ol>
                                <ol> URI는 소문자로 구성 </ol>
                                <ol> 가독성이 떨어지는 경우 하이푼을 사용 </ol>
                            </ul>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="URL과 URI">  URL과 URI </a> </span>
                        <p> URL(Uniform Resource Locator) : 인터넷에 있는 자원의 위치 </p>
                        <p> URI(Uniform Resource Identifier) : 인터넷 상의 자원을 식별하는 문자열, URL을 포함하고 있음 </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="IOC와 DI,POJO">  IOC와 DI,POJO </a> </span>
                        <p>  </p>
                        <p> DI(의존성 주입) : 객체 의존 관계를 외부에서 넣어주는 방법 @Autowired로 스프링에서는 넣어줌 ,
                            방법은 생성자 주입,수정자(setter) 주입,필드 주입 3가지 방법중에 생성자 주입을 추천
                        </p>
                        <p>  </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="TDD (테스트 주도 개발)">  TDD (테스트 주도 개발) </a> </span>
                        <p> 단위테스트를 작성 {"->"} 구현 클래스믈 작성 {"->"} 통합테스트 {"->"} </p>
                        <p>  </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="ORM(Object Relation Mapping)"> ORM(Object Relation Mapping) </a> </span>
                        <p> 객체(Object)와 DB의 테이블을 Mapping 시켜 RDB 테이블을 객체지향적으로 사용하게 해주는 기술 </p>
                        <p> 과거에는 MyBatis라는 Object Mapping기술로 Java코드와 직접 작성한 SQL 코드를 Mapping하여
                            사용하였지만 현재는 JPA와 구현체 Hibernate로 처리를 한다. </p>
                        <p> 하지만 복잡한 쿼리를 작성하기에는 MyBatis가 더 편할 수도 있지만 생산성은 Hibernate가 더 좋다 그렇지만
                        </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="JPA(Java Persistence API)">  JPA(Java Persistence API) </a> </span>

                        <span className="sblock">
                            <p> 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스 </p>
                            <p> SQL언어가 아닌 자바 언어를 사용하여 객체지향 관점으로 관리할 수 있게 해준다.</p>
                            <p> 개발자가 DB작업에 집중을 덜 하여도 되고 CRUD를 사용하기 쉬우며 SQL을 수정하기도 쉽고
                                객체와 DB에 넣은 데이터타입의 불일치도 해결을 해준다.
                            </p>
                            <span className="sstitle"> JPQL(Java Persistence Query Language) </span>
                            <p> 자바 객체를 이용하여 SQL 쿼리를 이용할 수 있는 언어</p>
                            <p> JPA(인터페이스)의 구현체 </p>
                            <p> JPA를 사용하기 위해서 필수로 사용해야할 필요는 없다. </p>
                            <p> 다른 구현체 ( DataNucleus,EclipseLink 등) 사용 가능 혹은 사용자 정의 구현체로도 사용 가능</p>
                            <span className="sstitle"> Spring Data JPA</span>
                            <p> Repository 인터페이스로 메소드를 입력하면 적절한 쿼리를 날려준다. </p>
                            <span className="sstitle"> JDBC API </span>
                            <p> JPA를 사용하면 SQL을 보내 DB와 통신하는 API 직접적으로 사용하는 일은 없다. </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Spring MVC">  Spring MVC </a> </span>
                        <span className="sblock">
                            <p className="sstitle"> Dispatcher Servlet </p>
                            <p> 클라이언트 요청을 받고 HandlerMapping에게 찾으라고 지시  </p>
                            <p className="sstitle"> HandlerMapping </p>
                            <p> Dispatcher Servlet에게 맵핑정보를 받아 Controller를 찾아 요청   </p>
                            <p className="sstitle"> front controller </p>
                            <p> Controller의 명령에 따라 작업을 하고 View를 리턴 Dispatcher Servlet으로 보냄 </p>
                            <p className="sstitle"> ViewResolver </p>
                            <p> Controller리턴 값 View를 검색 </p>
                            <p className="sstitle"> View </p>
                            <p> 처리결과를 View에 송신하여 처리하고 그 View를 Dispatcher Servlet으로 이동하고 클라이언트에게 보냄 </p>
                            <p className="sstitle">  </p>
                            <p>  </p>
                            <p className="sstitle">  </p>
                            <p>  </p>
                            {/* <p className="sstitle">  </p>
                            <p>  </p> */}
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="DataSource"> DataSource  </a> </span>
                        <p> 자바에서는 Connection Pool을 구현하여 사용하였는데 DB연동과 관련되 로직들이 추상화 되어있다. </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Controller와 RestController">  Controller와 RestController </a> </span>
                        <a href="https://mangkyu.tistory.com/49?category=761302"> 참고 </a>
                        <p> @Controller : 클라이언트의 요청을 받아 View를 반환 </p>
                        <p> @RestController(@Controller+@ResponseBody) :
                            클라이언트의 요청을 받아 객체형태(JSON 등)로 http에 담아 반환 </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Transaction(트랜잭션)"> Transaction(트랜잭션)  </a> </span>
                        <span className="sblock">

                            <p> 장바구니에 담기 여러개 상품구매나 호텔+항공 예약 등 여러개의 쿼리를 사용하여 처리할 때 도중에 문제가 생기면 처음으로
                                돌려놓기 위한 방법   </p>
                            <span className="sstitle">  1. 트랜잭션 동기화 </span>
                            <p> Connection 객체를 특정 장소에 보관하고 필요할 떄 꺼내쓰는 방법, 작업 쓰레드마다 Connection 객체를
                                독립적으로 관리하기 떄문에, 멀티쓰레드 환경에서 충돌이 발생할 여지가 없다. JDBC와 같은 종속적인 트랜잭션 동기화 코드는
                                hibernate에서 Connection이 아닌 session객체를 사용하기 떄문에 문제를 유발한다. </p>
                            <span className="sstitle">  2. 트랜잭션 추상화</span>
                            <p> 스프링에서는 트랜잭션 기술의 공통점을 담은 추상화 기술을 제공하여 종속적인 코드를 이용하지 않고
                                일관된 트랜잭션을 처리할 수 있게 도와준다.
                            </p>
                            <span className="sstitle">  3. AOP를 이용한 트랜잭션</span>
                            <p>  트랜잭션을 담당하는 코드를 비즈니스 로직과 분리하여 처리한다.
                                <span className="mblock">
                                    <ul>
                                        <li> 트랜잭션 전파 : Propagation Requied(추가), Propagation Requires New(생성), Propagation Not Supported(별도로 동작)
                                            이외에도 처리방법이 존재 </li>
                                        <li> 격리수준 : 서버에 여러 개의 트랜잭션이 동시에 진행될 때 순차진행 방법이 아닌 동시에 여러개를 진행하기 위해 조정 </li>
                                        <li> 제한시간 : 트랜잭션을 수행하는 시간을 설정 </li>
                                        <li> 읽기전용 : 트랜잭션 내에서 데이터를 조작하는 시도를 막고, 성능이 향상될 수 있다. </li>
                                    </ul>
                                </span>
                            </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="세션,쿠키,토큰"> 세션,쿠키,토큰,캐시  </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 세션 </span>
                            <span className="mblock">
                            </span>
                            <span className="sstitle"> 쿠키 </span>
                            <span className="mblock">
                            </span>
                            <span className="sstitle"> 토큰 </span>
                            <span className="mblock">
                            </span>
                            <span className="sstitle"> 캐시 </span>
                            <small> 자주 사용하는 데이터를 복사해 놓는 임시 장소, 캐시는 저장 공간이 작고 비용이 비싸지만 빠른
                                성능을 제공한다.  </small>
                            <span className="mblock">
                                <p> 1. 접근 시간에 비해 원래 데이터를 접근하는 시간이 오래 걸리는 경우 </p>
                                <p> 2. 반복적으로 동일한 결과를 돌려주는 경우(이미지나 썸네일 등) </p>
                                <p> 3. memory에 저장하므로 DBMS의 부하를 줄일 수 있는 장점이 있다. </p>
                                <p> 4. Cache Hit는 캐시에 해당 데이터가 존재하면 반환
                                    , Cache Miss는 데이터가 캐시에 존재하지 않으면 DBMS 또는 서버에
                                    요청을 하는 경우
                                </p>
                            </span>
                            <span className="mblock">
                                <span className="sstitle"> Local Cache </span>
                                <p> Local 장비에서만 사용되는 캐시, Local 장비의 Resource를 이용 </p>
                                <p> Local에서만 작동되므로 속도가 빠름 </p>
                                <p> Local에서 작동하므로 다른 서버와 데이터 공유가 어렵다. </p>
                                <span className="sstitle"> Global Cache </span>
                                <p> 여러 서버에서 Cache Server에 접근하여 사용하는 캐시로 분산된 서버에서 데이터를 저장하고 조회할 수 있다 </p>
                                <p> 네트워크를 통해 데이터를 가져오므로, Local Cache에 비해 상대적으로 느리다  </p>
                                <p> 별도의 Cache서버를 이용하기 때문에 서버 간의 데이터 공유가 쉽다. </p>
                            </span>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="서버기반, 토큰기반 인증시스템 차이"> 서버기반, 토큰기반 인증시스템 차이  </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 서버 기반 인증 시스템  </span>
                            <p> 서버측에서 사용자의 정보를 기억하는 방식 </p>
                            <p> 서버에서 세션을 유지하는 방식 </p>
                            <p>  Sateful 서버</p>
                            <p>  하지만 세션을 저장하기 위해 메모리나 DB에 저장하는데 사용자가 많아지면 서버에 부하가 걸린다.
                                또한 세션을 분산처리하기는 어렵고 그리고 CORS를 이용하기에도 번거로움</p>
                            <span className="sstitle"> 토큰 기반 인증 시스템  </span>
                            <p> 인증받은 사용자에게 토큰을 발급하고 서버에 요청을 보낼때 헤더에 토큰을 함께
                                보내도록 하여 유효성 검사를 하는 방식 </p>
                            <p> Stateless서버 </p>
                            <p> 여러개의 서버를 작동시키고 있을 경우 한개의 서버에만 세션이 저장될 경우 다른 서버를 이용하게 되면
                                이용이 되지 않지만 토큰 방식은 클라이언트가 가지고 있으므로 서버가 변경이 되어도 어떤 서버에서
                                처리를 해도 상관이 없어지는 장점이 있다. </p>
                            <p> OAuth를 이용하게 되면 Facebook, Google 등과 같이 소셜계정을 이용하여 다른 웹서비스에 로그인을 할 수 있다.  </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="JWT(Json Web Token)"> JWT(Json Web Token)  </a> </span>
                        <small> Json 포맷을 이용하여 사용에 대한 속성을 저장하는 Web Token 기반  </small>
                        <p> 토큰 자체를 정보로 사용하는 Self-Contained 방식으로 정보를 안전하게 전달한다. </p>
                        <p> 토큰을 static변수(매번 로컬스토리지에 꺼내지 않기 위해서)와 로컬 스토리지에 저장 </p>
                        <span className="sblock">
                            <span className="sstitle"> JWT 구조 </span>
                            <small> Base64로 인코딩, 각 부분을 .구분자를 사용하여 구분 </small>
                            <ul>
                                <li> Header </li>
                                <span className="mblock">
                                    <p> typ : 토큰의 타입을 지정 </p>
                                    <p> alg : 알고리즘 방식 지정, 서명 및 토큰 검증에 사용 </p>
                                </span>
                                <li> Payload </li>
                                <small> 토큰에 사용되는 정보의 조각 클레임이 담겨있다. JSON형태로 다수의 정보를 넣는다.  </small>
                                <span className="mblock">
                                    <ul>
                                        <span className="sstitle"> 등록된 클레임(Registered Claim) </span>
                                        <ul>
                                            <li> iss : 토큰 발급자 </li>
                                            <li> sub : 토큰 제목 </li>
                                            <li> aud : 토큰 대상자 </li>
                                            <li> exp : 토큰 만료 시간(NumericDate형식으로 되야한다.) </li>
                                            <li> nbf : 토큰 활성 날짜 , 토큰이 활성되는 날짜 </li>
                                            <li> iat : 토큰 발급 시간 , 토큰 발급 경과 시간 </li>
                                            <li> jti : JWT 토큰 식별자 , 중복 방지를 위해 사용, 일회용 토큰 등에 사용  </li>
                                        </ul>
                                        <span className="sstitle"> 공개 클레임(Public Claim) </span>
                                        <p> 사용자 정의 클레임, 공개용 정보를 위해 사용, 충동 방지를 위해 URI포맷을 사용 </p>
                                        <span className="sstitle"> 비공개 클레임(Private Claim) </span>
                                        <p> 사용자 정의 클레임, 서버와 클라이언트 사이에 임의로 지정한 정보를 저장 </p>
                                    </ul>
                                </span>
                                <li> Signature(서명) </li>
                                <span className="mblock">
                                    <p> 토큰을 인코딩하거나 유효성 검증을 할 때 사용하는 고유한 암호화 코드 </p>
                                    <p> 인코딩한 값을 비밀키를 이용해 헤더에서 정의한 알고리즘으로 해싱을 하고 다시 BASE64로 인코딩하여 생성한다. </p>
                                </span>
                            </ul>
                        </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> JWT의 단점 </span>
                                <li> 토큰 자체에 정보를 담으므로 보안문제가 있을 수 있다. </li>
                                <li> 토큰에 3개로 구분이 되므로 정보가 많으면 토큰의 길이가 늘어난다. </li>
                                <li> 인코딩된 데이터는 탈취하여 디코딩하여 정보를 볼 수 있으므로 중요 데이터를 넣으면 안된다. </li>
                                <li> JWT는 Stateless이므로 토큰에 만료시간을 꼭 넣어주어야 한다. </li>
                                <li> 토큰을 클라이언트 측에서 관리해야 하기 떄문에 토큰을 저장해야 한다. </li>
                            </ul>
                        </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 로그인 </span>
                                <li> 로컬 스토리지에 토큰이 존재하는지 유무 확인 </li>
                                <li> 만일 존재한다면 로그인 </li>
                                <li> 존재하지 않는다면 서버에서 토큰 발행 응답 헤더에 담아서 클라이언트에 보냄 </li>
                                <li> 클라이언트는 로컬스토리지와 static변수에 저장 그리고 로그인 </li>
                            </ul>
                        </span>
                        <span className="sblock">
                            <span className="sstitle"> 로그아웃  </span>
                            <p> 로그아웃을 할 경우 토큰을 제거 </p>
                            <p> 실제 서비스에서는 사용한 토큰을 DB테이블에 넣어서 접근을 막아준다.  </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="RequestBody, ModelAttribute, RequestParam의 차이"> RequestBody, ModelAttribute, RequestParam의 차이  </a> </span>
                        <span className="sblock">
                            <p className="sstitle"> RequestParam </p>
                            <p> 1개의 HTTP 요청 파라미터를 받기 위해 사용 </p>
                            <p> 파라미터가 필수적으로 전송되어야 한다.(400에러 발생) </p>
                            <p className="sstitle"> RequestBody </p>
                            <p> Json형태의 HTTP  Body 데이터를 MessageConverter를 통해 변환시킴 </p>
                            <p> 바인딩이 아닌 변환이므로 Setter함수가 없어도 변수들이 저장됨 </p>
                            <p className="sstitle"> ModelAttribute </p>
                            <p>  multipart/form-data 형태의 HTTP Body 내용과 HTTP 파라미터들을 Setter를 통해 1대1로 객체에 바인딩시킴 </p>
                            <p> 변환이 아닌 바인딩 작업이므로 Setter함수가 필요(없으면 에러발생 )</p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Bean, Configuration, Component"> Bean, Configuration, Component </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> Bean </span>
                            <p> Spring (Ioc 컨테이너,DI 컨테이너)에 의해 관리되는 POJO를 Bean라고 한다. </p>
                            <ul>
                                <li> class : Bean으로 등록할 Java 클래스 </li>
                                <li> id : Bean의 고유 식별자 </li>
                                <li> scope : Bean을 생성하기 위한 방법(singleton(기본), prototype, web(request,session,application)) </li>
                                <li> constructor-arg : Bean 생성 시 생성자에 전달할 파라미터 </li>
                                <li> property : Bean 생성 시 setter에 전달할 인수 </li>
                            </ul>
                            <span className="sstitle"> Configuration </span>
                            <p> Bean을 사용하기위해 명시 </p>
                            <span className="sstitle"> Component </span>
                            <p> 개발한 클래스를 Bean으로 등록할 때 사용, Spring에서는 @Bean을 사용하면 그안에 포함이 되어있다 </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="OOP의 5가지 원칙(SOLID)"> OOP의 5가지 원칙(SOLID)  </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 단일 책임 원칙(Single responsibility principle) </span>
                                <p> 하나의 클래스는 오직 하나의 책임(기능)만을 가져야 한다는 원칙, 예를 들어 로그인 클래스면 로그인만
                                    담당을 해야지 회원가입이나 인증과 같은 기능들을 가지고 있으면 나중에 코드를 수정하거나 문제가 생길 때
                                    파악이 어려울 수 있음 </p>
                                <span className="sstitle"> 개방 폐쇄 원칙(Open/closed principle) </span>
                                <p> 클래스,모듈 함수 등은 쉽게 확장(코드 추가, 연결)이 되어야하고 수정에 대해서는 쉽게 일어나지 못하게
                                    닫혀있어야 한다는 원칙 </p>
                                <span className="sstitle"> 리스코프 치환 원칙(Liskov substitution principle) </span>
                                <p> 부모 클래스자리에 자식 클래스를 넣어도 작동이 잘 되어야 한다는 뜻, 자료형P의 객체를 자료형 C의 객체로
                                    교체되어도 문제가 없어야 한다는 원칙 </p>
                                <span className="sstitle"> 인터페이스 분리 원칙(Interface segregation principle) </span>
                                <p> 큰 덩어리의 인터페이스를 구체적이고 작은 단위들로 분리시킴으로 필요한 메서드 들만 이용한다는 원칙,
                                    필요없는 모듈이나 기능을 가지고 있지 않게 하는 의미도 있고
                                    인터페이스를 작은 단위들로 분리 시켜놓으면 리팩토링, 수정 등을 쉽게 할 수 있다. </p>
                                <span className="sstitle"> 의존관계 역전 원칙(Dependency inversion principle) </span>
                                <p> 상위 모듈이 하위 모듈에 종속되어서는 안된다는 원칙, 하위 모듈에서 상위 모듈을 객체로 만들고
                                    그 객체의 상위모듈에 영향을 주게 된다면 제일 하위 모듈에서 코드를 수정하게 되면 상위모듈에 영향을
                                    미치게 되어 수정하기 어려운 경우가 될 수도 있다. </p>
                            </ul>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Spring Security"> Spring Security </a> </span>
                        <small> 어플리케이션의 보안(인증,권한 등)을 처리하는 프레임워크  </small>
                        <p> 스프링 기반의 보안관련 프레임워크, 인증과 권한을 담당 </p>
                        <p> API서버에 특정 토큰을 Request헤더에 담아 보내면 인증이 완료되고
                            api 기능을 사용할 권한을 갖게 된다.  </p>
                        <p> 필터 기반으로 동작 </p>
                        <p> 세션-쿠키 방식으로 인증, DB에 검증이 된 회원일 경우 JSESSIONID부여한 후
                            다음 요청부터 JSESSIONID를 검증해서 유효하면 인증을 준다.
                        </p>
                        <p> 스프링 필터에는 엄청나게 많은 필터가 존재한다. </p>
                        <span className="sblock">
                            <span className="sstitle"> 인증(Authorization) </span>
                            <p> 사용자가 맞는지 확인 </p>
                            <span className="sstitle"> 인가(Authentication) </span>
                            <p> 인증 성공 후 사용자가 자원에 접근 가능한지를 결정하는 절차 </p>
                            <span className="sstitle"> Principal(접근주체) </span>
                            <p> Resource에 접근하는 대상 </p>
                            <span className="sstitle"> Credential(비밀번호) </span>
                            <p> Resource에 접근하는 대상의 비밀번호 </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <p className="stitle" > <a name="Cors(Cross Origin Resource Sharing)"> Cors(Cross Origin Resource Sharing) 교차 출처 자원 공유  </a>   </p>
                        <p> API서버에 SPA프레임워크(react,vue 등)을 사용하게 되면 스프링과SPA프레임워크의
                            포트가 다르거나 서버가 다르면 서로 자원을 공유할 수 없게 하는 보안 정책 </p>
                        <p> 스프링 시큐리티에서 특정 도메인을 열거나 닫을 수 있음 </p>
                        <p> 필터나 mvc설정 등으로 처리가능 </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <p>  </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <p>  </p>
                    </span>

                </span>
            </div>
        </>
    );
}
export default Term;
