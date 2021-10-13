import React from 'react';

const SettingFile = (props) => {

    return (
        <>

            <div className="common_style" >
                <span className="lblock">

                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> yml 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> <a href="https://velog.io/@max9106/Spring-Boot-%EC%99%B8%EB%B6%80%EC%84%A4%EC%A0%95-uik69crax3" target="_blank"> 설정파일 우선순위 </a></li>
                                    <li> <a href="https://blog.voidmainvoid.net/40" target="_blank"> application.properties 설명, 너무많음.. </a></li>
                                    <li> application.properties : 개발과 서버 두 환경에서 필요한 코드 작성 </li>
                                    <li> application-dev.properties : 개발에 필요한 코드 작성 , spring.profiles.active=dev로 개발용 설정파일 사용 </li>
                                    <li> application-prod.properties : 서버 운영에 필요한 코드 작성 , spring.profiles.active=prod로 서버 운영 설정파일 사용 </li>
                                </div>
                            </div>
                        </details>
                    </div>


                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> yml 기본 문법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> id: ssssksss <small> # 변수명 = 변수값 </small> </li>
                                    <li> {'${id}'} <small> # 변수값 사용하기 </small> </li>
                                    <li> {'${random.int}'} <small> # 랜덤값 사용하기 </small> </li>
                                    <li> <small> # </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Server
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> server.address=localhost <small> # 서버 경로 설정 </small> </li>
                                    <li> server.port=8080 <small> # 서버 포트 설정 </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> DataSource
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> spring:
                                        <li>  datasource:
                                            <li> driver-class-name: org.h2.Driver <small># h2 DB</small> </li>
                                            <li> driver-class-name: oracle.jdbc.OracleDriver <small># 오라클,오라클 클라우드</small> </li>
                                            <li> driver-class-name: oracle.mysql.jdbc.Driver <small># 5.x 버전 이하 mysql</small> </li>
                                            <li> driver-class-name: oracle.mysql.cj.jdbc.Driver <small># 6.x 버전 이상 mysql</small> </li>  <br />
                                            <li> driver-class-name: org.mariadb.jdbc.Driver <small># mariadb </small> </li>  <br />
                                            <li> url: jdbc:h2:tcp//localhost/~/test <small># h2 확인 필요</small> </li>
                                            <li> url: jdbc:mariadb://localhost:3306/DB명 <small> mariadb 드라이버 </small> </li>
                                            <li> url: jdbc:mysql://localhost:3306/DB명?characterEncoding=UTF-8{'&'}serverTimezone=Asia/Seoul <small># mysql db 드라이버</small></li>
                                            <li> url: jdbc:oracle:thin:@localhost:1521:XE?characterEncoding=UTF-8{'&'}serverTimezone=Asia/Seoul <small># oracle db 드라이버</small></li>
                                            <li> url: jdbc:oracle:thin:@사용자_medium?TNS_ADMIN=전자지갑경로
                                                <li> <small> 전자지갑경로 : ./src/main/resources/전자지갑명 # 전자지갑을 src폴더에 넣은경우</small> </li>
                                            </li>
                                            <li>  </li> <br />
                                            <li> username: 사용자명 </li>
                                            <li> username: Admin <small> # 오라클 클라우드 무료 DB사용할 때 사용하는 사용자명</small> </li>
                                            <li> password:  </li>
                                        </li>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> spring:
                                        <li>  jpa:
                                            <li> database-platform: org.hibernate.dialect.MySQL5InnoDBDialect <small> MySQL Dialect 설정 </small> </li>
                                            <li> database-platform: org.hibernate.dialect.Oracle10gDialect <small> Oracle Dialect 설정 </small> </li>
                                            <li> show-sql: true  <small> # 콘솔에 JPA 실행 쿼리를 보여줌 </small>  </li>
                                            <li> generate-ddl: true <small># hibernate에서 @Entity가 붙은 클래스를 자동으로 ddl을 실행해서 table설정들을 자동으로 수행</small> </li>
                                            <li> hibernate: <small> # JPA프레임워크 hibernate 설정 </small>
                                                <li> format_sql: true <small># JPA실행쿼리를 가독성 있게 표현</small> </li>  <br />
                                                <li> ddl-auto: none <small># 아무것도 하지 않는다</small>. </li>
                                                <li> ddl-auto: create <small># 세션 팩토리가 시작될 때마다 테이블을 drop하고 ddl을 실행한다. , 배포서버에서 사용x, 로컬용도</small> </li>
                                                <li> ddl-auto: create-drop <small># 세션 팩토리가 시작될 때마다 테이블을 drop하고 ddl을 실행한다. 그리고
                                                    세션 팩토리가 종료될떄 테이블을 drop한다.</small> </li>
                                                <li> ddl-auto: update <small># 변경 스키마을 저장한다. , 운영DB에서도 사용x , 개발 초기 테스트 단계 사용</small>  </li>
                                                <li> ddl-auto: validate <small># 변경된 스키마를 출력하고 프로그램 종료</small> </li>
                                                <li> use_sql_comments=true <small> # 디버깅 정보 출력 </small> </li>
                                                <li> naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl <small> db의 속성 이름이 camel-case일 경우 설정이 필요, default는 snake-case </small> </li>
                                            </li>  <br />
                                            <li> open-in-view: false <small># Open Session In View</small> <a href="https://stackoverflow.com/questions/30549489/what-is-this-spring-jpa-open-in-view-true-property-in-spring-boot" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
                                            <li> <small> 웹 요청이 완료될 때까지 동일한 EntityManager를 갖도록 해줍니다., 성능과 확장에 좋지 않다고 하는데 정확하게는 아직 모름 </small> </li>
                                            <li>  </li>
                                        </li>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Logging
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> logging.level.org.hibernate=[error, warn, info, debug] <small> # sql쿼리문 레벨에 맞는 메시지 출력(default=info) </small> </li>
                                    <li> logging.level.패키지~.클래스=[error, warn, info, debug] <small> # 아래의 경로로 설정된 파일에 대해서 로그 레벨을 설정 </small> </li>
                                    <li> logging.level.org.hibernate.type.descriptor.sql.BasicBinder = TRACE <small> # sql 파라미터로 전달되는 값을 출력, trace등급의 메시지 출력 </small> </li>
                                    <li> logging.config=[설정파일.xml 등] <small> # 로그 설정 파일 위치 </small> </li>
                                    <li> logging.path=[경로] <small> # 로그 파일 위치 </small> </li>
                                    <li> logging.file.name=[../파일명].log <small> # 로그 파일 이름 </small> </li>
                                    <li> logging.file.max-size=100MB <small> # 로그 파일 용량 설정 </small> </li>
                                    <li> logging.pattern.rolling-file-name={'${LOG_FILE}.%d{yyyy-MM-dd}-%i.log'} <small> # 설정하지 않으면 .gz 포맷을 가짐 </small> </li>
                                    <li> logging.pattern.console= <small> # 어떤 로그메시도 출력하지 않음, 개발이 끝난뒤에 서버 운영할때 설정 </small> </li>
                                    <li> loggin.pattern.console <small> # 콘솔 로깅에 붙일 패턴 </small> </li>
                                    <li> loggin.pattern.file <small> # 파일 로깅에 붙일 패턴 </small> </li>
                                    <li> loggin.pattern.level <small> # 로그 레벨에 붙일 패턴 </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Thymeleaf
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> spring.thymeleaf.cache=false <small> # 바꾼 데이터를 실시간 반영하기 위해서 설정 </small> </li>
                                    <li> spring.thymeleaf.prefix=classpath:/templates/ <small> # thymeleaf 참조 경로 설정 </small> </li>
                                    <li> spring.thymeleaf.suffix=.html <small> # return할 때 .html 생략가능 </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> livereload
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> <small> # 1. build.gradle에 developmentOnly 'org.springframework.boot:spring-boot-devtools' 추가 </small> </li>
                                    <li> <small> # 2. Ctrl + Shift + A - regi 입력 Registry... - compiler.automake.allow.when.app.running 체크 </small> </li>
                                    <li> <small> # 3. Ctrl + Alt + S - Build, Execution, Deployment - Compiler - Build project automatically 체크 </small> </li>
                                    <li> <small> # 4. Browser Extension인 Live Reload 설치 </small> </li>
                                    <li> <small> # 5. 마지막으로 주의 : 서버 배포시 라이브 서버 관련내용들은 반드시 삭제해야함 </small> </li>
                                    <li> spring:
                                        <li>   devtools:
                                            <li>     livereload:
                                                <li>       enabled: true </li>
                                            </li>
                                        </li>
                                    </li>
                                    <li> spring.devtools.livereload.enabled=true <small> # 정적리소스에 변화가 있을 때 화면 렌더링 </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </span>
            </div>
        </>
    );
}

export default SettingFile;