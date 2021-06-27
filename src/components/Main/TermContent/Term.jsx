import React from 'react';

const CssBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. (하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#"> </a>
                        {/* <a href="#"> </a> */}
                    </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> 개발 방식 </p>
                <span className="mblock">
                    <p> <i> TDD (테스트 주도 개발) </i>: 단위테스트를 작성 {"->"} 구현 클래스믈 작성 {"->"} 통합테스트 {"->"} </p>
                </span>
                <p> 스프링 </p>
                <span className="mblock">
                    <p> <i> DI(의존성 주입) </i> : 객체 의존 관계를 외부에서 넣어주는 방법 @Autowired로 스프링에서는 넣어줌 </p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> Component 스캔 </i> : @Controller @Service @Repository 등에서 @Component를 가지고 있어
                        Component스캔 이라고 불린다 @Component는 스프링 빈에 자동 등록이 된다</p>
                </span>
                <p> 웹 </p>
                <span className="mblock">
                    <p> <i> URL 과 URI </i> </p>
                    <p> URL : 자원 접근 </p>
                    <p> URI : 식별자 접근 </p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> REST API(Represetational State Transfe) </i> </p>
                    <p> REST </p>
                    <p> <i> Uniform Interface (유니폼 인터페이스) </i> HTTP표준이면 어떤 플랫폼에서도 사용가능</p>
                    <p> <i> Stateless (상태 정보 유지 안함) </i> Stateless 방식</p>
                    <p> <i> Cacheable (캐시 가능) </i> http캐싱기능 적용 가능</p>
                    <p> <i> Self-descriptiveness (자체 표현 구조) </i> rest api 메시지만 보고도 이해할 수 있는 구조</p>
                    <p> <i> Client-Server </i> 서버는 api(자원)를 제공하고 클라이언트는 사용만 함</p>
                    <p> <i> Layerd System (계층화) </i>  </p>
                    <p> <i> REST API 설계 규칙 </i></p>
                    <p> 웹(서버)에 존재하는 자원에 URI를 주고 자원을 정의</p>
                    <p> http method(get,put 등)으로 표현 </p>
                    <p> <i> RESTFUL API </i></p>
                    <p> 개발자들이 비공식적으로 의견을 제시한 거라 명확한 정의는 없다?? </p>
                    <p> 개인적인 느낌은 좀더 보기 편하게 만든 듯한 느낌 :id 와 같이 나중에 자세히 알아보기</p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> JPA(Java Persistence API) </i> </p>
                    <p> 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스 </p>
                    <p> SQL언어가 아닌 자바 언어를 사용하여 객체지향 관점으로 관리할 수 있게 해준다.</p>
                    <p> 개발자가 DB작업에 집중을 덜 하여도 되고 CRUD를 사용하기 쉬우며 SQL을 수정하기도 쉽고
                        객체와 DB에 넣은 데이터타입의 불일치도 해결을 해준다.
                    </p>
                    <span className="sblock">
                        <p> <i> JPQL(Java Persistence Query Language)</i> </p>
                        <p> 자바 객체를 이용하여 SQL 쿼리를 이용할 수 있는 언어</p>
                        <p> <i> Hibernate</i> </p>
                        <p> JPA(인터페이스)의 구현체 </p>
                        <p> JPA를 사용하기 위해서 필수로 사용해야할 필요는 없다. </p>
                        <p> 다른 구현체 ( DataNucleus,EclipseLink 등) 사용 가능 혹은 사용자 정의 구현체로도 사용 가능</p>
                        <p> <i> Spring Data JPA</i></p>
                        <p> Repository 인터페이스로 메소드를 입력하면 적절한 쿼리를 날려준다. </p>
                        <p> <i> JDBC API </i></p>
                        <p> JPA를 사용하면 SQL을 보내 DB와 통신하는 API 직접적으로 사용하는 일은 없다. </p>
                    </span>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> </i> </p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> </i> </p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> </i> </p>
                </span>
                <p> </p>
                <span className="mblock">
                    <p> <i> </i> </p>
                </span>

            </span>
            {/* <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <span className="lblock">
                    <span className="sblock">
                    </span>
                </span>
            </span> */}
        </div>
    );
}

export default CssBasic;