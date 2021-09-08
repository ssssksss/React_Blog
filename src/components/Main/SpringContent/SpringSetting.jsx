import React from 'react';

const SettingFile = (props) => {

    return (
        <>

            <div className="common_style" >
                <span className="lblock">
                    <a href="https://velog.io/@max9106/Spring-Boot-%EC%99%B8%EB%B6%80%EC%84%A4%EC%A0%95-uik69crax3" target="_blank"> 설정파일 우선순위 </a>
                    <a href="https://blog.voidmainvoid.net/40" target="_blank"> application.properties 설명, 너무많음.. </a>
                    {/*  */}
                    <span className="mtitle" > <a name="application.properties"> application.properties</a> </span>
                    <li> application.properties : 개발과 서버 두 환경에서 필요한 코드 작성 </li>
                    <li> application-dev.properties : 개발에 필요한 코드 작성 , spring.profiles.active=dev로 개발용 설정파일 사용 </li>
                    <li> application-prod.properties : 서버 운영에 필요한 코드 작성 , spring.profiles.active=prod로 서버 운영 설정파일 사용 </li>
                    <span className="mblock">
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ Server  </summary>
                            <span className="sblock">
                                <span className="sstitle"> server.address=localhost </span>
                                <li> 서버 경로 설정 </li>
                                <span className="sstitle"> server.port=8080 </span>
                                <li> 서버 포트 설정 </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ DataSource  </summary>
                            <span className="sblock">
                                <span className="sstitle"> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver  </span>
                                <li> DB 드라이버 설정 </li>
                                <span className="sstitle"> spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8&amp;serverTimezone=UTC  </span>
                                <li> DB 저장소 경로와 스키마, 인코딩 , 시간 등 설정 </li>
                                <span className="sstitle"> spring.datasource.username=DB유저이름  </span>
                                <li> DB 유저 아이디 설정 </li>
                                <span className="sstitle"> spring.datasource.password=DB유저비번  </span>
                                <li> DB 유저 비번 설정 </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ JPA  </summary>
                            <span className="sblock">
                                <span className="sstitle"> spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.MySQL5InnoDBDialect  </span>
                                <li> dialect 설정 </li>
                                <span className="sstitle"> spring.jpa.properties.hibernate.show-sql=true  </span>
                                <li> hibernate가 실행하는 SQL문을 로그로 확인 가능 </li>
                                <span className="sstitle"> spring.jpa.hibernate.ddl-auto=[none,create-drop,create,update,validate]  </span>
                                <li> none : 아무것도 실행x </li>
                                <li> create-drop : SessionFactory가 시작될 떄 drop실행하고 종료될떄 drop실행 </li>
                                <li> create : SeesionFactory 시작될 떄 drop실행하고 생성된 DDL 실행 </li>
                                <li> update : 변경된 스키마를 적용 </li>
                                <li> validate : 변경된 스키마가 있으면 변경점 출력, 어플리케이션 종료 </li>
                                <span className="sstitle"> spring.jpa.properties.hibernate.format_sql=true  </span>
                                <li> 콘솔에 출력되는 JPA 실행 쿼리를 가독성 있게 보여준다. </li>
                                <span className="sstitle"> spring.jpa.properties.hibernate.use_sql_comments=true  </span>
                                <li> 디버깅 정보 출력 </li>
                                <span className="sstitle"> spring.jpa.generate-ddl  </span>
                                <li> @Entity붙은 클래스를 찾아 ddl을 생성하고 실행  </li>
                                <span className="sstitle"> spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl</span>
                                <li> db의 속성 이름이 camel-case일 경우 설정이 필요, default는 snake-case  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ Logging  </summary>
                            <span className="sblock">
                                <span className="sstitle"> logging.level.org.hibernate=[error, warn, info, debug] </span>
                                <li> sql쿼리문 레벨에 맞는 메시지 출력(default=info) </li>
                                <span className="sstitle"> logging.level.패키지~.클래스=[error, warn, info, debug] </span>
                                <li> 아래의 경로로 설정된 파일에 대해서 로그 레벨을 설정 </li>
                                <span className="sstitle"> logging.level.org.hibernate.type.descriptor.sql.BasicBinder = TRACE </span>
                                <li> sql 파라미터로 전달되는 값을 출력, trace등급의 메시지 출력 </li>
                                <span className="sstitle"> logging.config=[설정파일.xml 등] </span>
                                <li> 로그 설정 파일 위치 </li>
                                <span className="sstitle"> logging.path=[경로] </span>
                                <li> 로그 파일 위치 </li>
                                <span className="sstitle"> logging.file.name=[../파일명].log </span>
                                <li> 로그 파일 이름 </li>
                                <span className="sstitle"> logging.file.max-size=100MB </span>
                                <li> 로그 파일 용량 설정 </li>
                                <span className="sstitle"> logging.pattern.rolling-file-name=${'{LOG_FILE}'}.%d{'{yyyy-MM-dd}'}-%i.log </span>
                                <li> 설정하지 않으면 .gz 포맷을 가짐 </li>
                                <span className="sstitle"> logging.pattern.console= </span>
                                <li> 어떤 로그메시도 출력하지 않음, 개발이 끝난뒤에 서버 운영할때 설정 </li>
                                <span className="sstitle"> loggin.pattern.console </span>
                                <li> 콘솔 로깅에 붙일 패턴 </li>
                                <span className="sstitle"> loggin.pattern.file </span>
                                <li> 파일 로깅에 붙일 패턴 </li>
                                <span className="sstitle"> loggin.pattern.level </span>
                                <li> 로그 레벨에 붙일 패턴 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ Thymeleaf  </summary>
                            <span className="sblock">
                                <span className="sstitle"> spring.thymeleaf.cache=false </span>
                                <li> 바꾼 데이터를 실시간 반영하기 위해서 설정 </li>
                                <span className="sstitle"> spring.thymeleaf.prefix=classpath:/templates/ </span>
                                <li> thymeleaf 참조 경로 설정 </li>
                                <span className="sstitle"> spring.thymeleaf.suffix=.html </span>
                                <li> return할 때 .html 생략가능 </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ livereload?  </summary>
                            <span className="sblock">
                                <span className="sstitle"> spring.devtools.livereload.enabled=true </span>
                                <li> 정적리소스에 변화가 있을 때 화면 렌더링 </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶ properties에서 변수 사용 </summary>
                            <span className="sblock">
                                <span className="sstitle"> firstname = hong </span>
                                <li> 설정파일로 변수 이용하기 </li>
                                <span className="sstitle"> fullname = ${'{firstname}'} gildong  </span>
                                <li>  </li>
                                <span className="sstitle"> 변수이름 = ${'{random.int}'} </span>
                                <li> 랜덤값을 이용하기 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="stitle"> ▶  </summary>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </span>
                        </details>
                        {/*  */}
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="application.yml"> application.yml  </a> </span>
                        <span className="sblock">

                            <span className="sstitle"> DataSource </span>
                            <span className="mblock">
                                <li> spring: </li>
                                <li> &nbsp;datasource: </li>
                                <li> &nbsp;&nbsp;driver-class-name: com.mysql.cj.jdbc.Driver </li>
                                <li> &nbsp;&nbsp;url: jdbc:mysql://localhost:3306/스키마이름?serverTimezone=UTC&amp;characterEncoding=UTF-8 </li>
                                <li> &nbsp;&nbsp;username: DB유저이름 </li>
                                <li> &nbsp;&nbsp;password: DB유저비번 </li>
                            </span>
                            <span className="sstitle"> JPA </span>
                            <span className="mblock">
                                <li> <small> JPA 데이터베이스 플랫폼을 지정, MysQL InnoDB사용 </small> </li>
                                <li> &nbsp;database-platform: org.hibernate.dialect.MySQL5InnoDBDialect </li>
                                <li> <small> 웹 요청이 완료될 때까지 동일한 EntityManager를 갖도록 해줍니다., 성능과 확장에 좋지 않다고 하는데 정확하게는 아직 모름 </small> </li>
                                <li> &nbsp;open-in-view: false </li>
                                <li> <small> 콘솔에 JPA 쿼리를 출력 </small> </li>
                                <li> &nbsp;show-sql: true </li>
                                <li> &nbsp;hibernate: </li>
                                <li> &nbsp;&nbsp;format_sql: true </li>
                                <li> <small> none, create(기존테이블을삭제후다시생성), create-drop, update(변경된 스키마만 반영), validate(엔티티와 테이블이 정상적으로 매칭이 되었는지 확인, 운영을 할 떄 사용한다고 함) </small> </li>
                                <li> &nbsp;&nbsp;ddl-auto: update </li>
                                {/* <li> <li> <small> </small> </li> </li>
                                    <li>  </li> */}
                            </span>
                            {/* <span className="sstitle"> </span>
                                <li>  </li> */}

                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default SettingFile;