import React from 'react';

const SpringJpa = (props) => {

    return (
        <>

            <div className="common_style">
                <span className="lblock">

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> JPA란 </div>
                                <div className='mblock'>
                                    <li> Java Persistence API </li>
                                    <li> 관계형 데이터베이스에 SQL을 작성해야 하는데 SQL을 작성하지 않고
                                        자동으로 매핑해주는 기술 </li>
                                    <li> ORM 기술 표준
                                        <div className='sblock'>
                                            <li> Object Relational Mapping </li>
                                            <li> 자바객체를 ORM에 저장  - ORM에서 SQL을 생성 - DB에 저장  </li>
                                            <li> ORM을 사용하는 이유는 객체 중심의 개발이 가능해지기 떄문에 사용 </li>
                                        </div>
                                    </li>
                                    <li> <a href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation"
                                        target="_blank" rel="noopener noreferrer"> 스프링 JPA 공식 문서</a> </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> JPA의 작동 방식 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> JPA 프레임워크 </div>
                                <div className='mblock'>
                                    <div className='sstitle'> Hibernate ( 대표적인 JPA 프레임워크 ) </div>
                                    <div className='sblock'>
                                        <li> 장점 :
                                            <li> 메서드만을 이용해서 쿼리를 수행가능 </li>
                                            <li> 특정 DB에 종속적이지 않아서 DB를 바꾸어도 잘 작동 </li>
                                            <li>  </li>
                                        </li>
                                        <li> 단점 :
                                            <li> 실제 쿼리를 사용하지않으므로 성능이 떨어질 수 있음 </li>
                                            <li> 복잡한 쿼리는 작성하기 힘듬 , JPQL 이라는 기술이 있다고함(알아봐야함) </li>
                                            <li> JPA를 사용하기 위해서는 많은 공부가 필요 </li>
                                        </li>
                                    </div>
                                    <div className='sstitle'> Mybatis </div>
                                    <div className='sblock'>
                                        <li> DAO와 테이블이 너무 의존적이여서 하나를 변경하면 다른것도 변경해야 한다는 단점이 존재
                                            (자세히 알아본것은 아니라서 대략 정리) </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'>  </div>
                                    <div className='sblock'>
                                        <li> </li>
                                        <li> </li>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA에서 Entity 사용하는 방법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Entity란 </div>
                                <div className='mblock'>
                                    <li> 관계형 데이터베이스에서 테이블을 만들듯이 JPA가 참조할 테이블을 만들어 둔것 </li>
                                </div>
                                <div className='sstitle'> Entity 코드 설명 </div>
                                <div className='mblock'>
                                    <li> @Getter: getter 메소드 </li>
                                    <li> @Setter: setter 메소드, 일반적으로 사용을 하지 않음 </li>
                                    <li> @NoArgsConstructor: 기본 생성자</li>
                                    <li> @AllArgsConstructor: </li>
                                    <li> @Entity: Entity 클래스라고 선언, DB테이블과 매칭되는 클래스, DB테이블이(aa_bb_cc)이면
                                        Entity이름은 AaBbCc와 같이 첫글자는 대문자이고 _문자를 없애고 그 뒤에 글자를 대문자로 치환한다.</li>
                                    <li>  </li>
                                    <li> @Id: PK를 뜻하는 필드를 지정, @GeneratedValue 하고 주로 같이 사용 </li> <br />
                                    <li> @GeneratedValue(strategy = GenerationType.IDENTITY) <small># MYSQL Auto_Increment</small></li>
                                    <li> @GeneratedValue(strategy = GenerationType.SEQUENCE) <small># Oracle, @SequenceGenerator 필요</small> </li>
                                    <li> @GeneratedValue(strategy = GenerationType.TABLE) <small># TABLE, @TableGenerator 필요</small> </li>
                                    <li> @GeneratedValue(strategy = GenerationType.AUTO)<small># 선택한 dialect에 따라 자동 선택(default) </small>  </li> <br />
                                    <li> @Table(name="") DB의 테이블명과 매핑을 시켜주는 어노테이션 </li>
                                    <li> @Column(name="DB 필드명", length = 10, nullable = false, unique=false,
                                        columnDefinition = "DB필드타입 제약조건 '제약조건값'", )
                                        필수로 사용할 필요는 없고 DB테이블의 필드명과 일치하면 자동으로 매핑이 된다.만약에 일치하지 않으면
                                        name="" 속성에 적어서 맞추어 줄수 있고 DB에서 사용하는 제약조건 등을 지정할 수도 있다.</li>
                                    <li>  </li>
                                    <li> @Builder: </li>
                                    <li> @NamedQuery(name="Entity명.Repository메소드명",query="사용자정의쿼리작성") </li>
                                    <li> @Temporal(TemporalType.TIMESTAMP) # 자바의 날짜 타입 사용 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> Entity 코드 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA 쿼리 메소드
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> Entity명은 DB에서 테이블을 지칭, Fieldname DB에서 필드명을 지칭, 필드명의 첫 시작은 대문자이고
                                        _로 구분되면 대문자로 시작하는것으로 기억  </li> <br />
                                    <div className='title4'> Entity명 findByFieldname(String fieldname) (대표예시) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블(Entity) m where m.fieldname = ?1 </li>
                                    </div>
                                    <div className='title4'> {' List<Entity> findAll() '}</div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m; </li>
                                    </div>
                                    <div className='title4'> findByFieldname1AndFieldname2(String fieldname1, String fieldname2) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1 and m.fieldname2 = ?2; </li>
                                    </div>
                                    <div className='title4'> findByFieldname1OrFieldname2(String fieldname1, String fieldname2) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1 or m.fieldname2 = ?2; </li>
                                    </div>
                                    <div className='title4'> findDistinctByFieldname1 </div>
                                    <div className='sblock'>
                                        <li> select m distinct from 테이블 m where m.fieldname1 = ?1; </li>
                                    </div>
                                    <div className='title4'> findByFieldnameIs(String name) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1; </li>
                                    </div>
                                    <div className='title4'> findByFieldnameEquals(String name) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1; </li>
                                    </div>
                                    <div className='title4'> findByFieldnameBetween(num start, num end) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname between ?1 and ?2 </li>
                                    </div>
                                    <div className='title4'> findByFieldnameGreaterThan(String num) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname {'>'} ?1 </li>
                                    </div>
                                    <div className='title4'> findByFieldnameGreaterThanEqual(String num) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname {'>='} ?1 </li>
                                    </div>
                                    <div className='title4'> findByFieldnameLessThan(String num) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname {'<'} ?1</li>
                                    </div>
                                    <div className='title4'> findByFieldnameLessThanEqual(String num) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname {'<='} ?1 </li>
                                    </div>
                                    <div className='title4'> findByFieldNameNotLike(String word); </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname not like '?1'  </li>
                                    </div>
                                    <div className='title4'> findByFieldNameLike(String word); </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname like '?1'  </li>
                                    </div>
                                    <div className='title4'> findByFieldNameStartingWith(String word); </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname like '%?1' </li>
                                    </div>
                                    <div className='title4'> findByFieldNameEndingWith(String word); </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname like '?1%' </li>
                                    </div>
                                    <div className='title4'> findByFieldNameContaining(String word); </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname like '%?1%' </li>
                                    </div>
                                    <div className='title4'> findByFieldname1ByFieldname2Desc(String fieldname1) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1 order by m.fieldname2 desc </li>
                                    </div>
                                    <div className='title4'> findByFieldname1ByFieldname2Asc(String fieldname1) </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m where m.fieldname1 = ?1 order by m.fieldname2 asc </li>
                                    </div>
                                    <a href="https://goodgid.github.io/Spring-Data-JPA-Query_Part_1/"
                                        target="_blank" rel="noopener noreferrer"> 좀 더 참고해서 공부하기 </a>
                                    {/*<div className='title4'>  </div>
                                    <div className='sblock'>
                                        <li> select m from 테이블 m </li>
                                    </div>*/}
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA Repository 사용하는 방법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 레포지토리 생성 </div>
                                <div className='mblock'>
                                    <li> @Repository </li>
                                    <li> public interface Repository명 extends JpaRepository{'<Entity명,필드 ID 타입> {'}
                                        <li> <small> # ID타입 : Long, Integer, String 등이 있다.</small>  </li>
                                        <li> public Entity명 findByFieldname(String fieldname); </li>
                                        <li> @Query("사용자정의쿼리작성") </li>
                                        <li> public Entity명 findByMakeQuerry(String make) </li>
                                        <li>  </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA yml(properties) 설정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> DB설정 </div>
                                <div className='mblock'>
                                    <li> spring:
                                        <li>  datasource:
                                            <li>  <br /> driver-class-name: org.h2.Driver <small># h2 DB</small> </li>
                                            <li> driver-class-name: oracle.jdbc.OracleDriver <small># 오라클,오라클 클라우드</small> </li>
                                            <li> driver-class-name: oracle.mysql.jdbc.Driver <small># 5.x 버전 이하 mysql</small> </li>
                                            <li> driver-class-name: oracle.mysql.cj.jdbc.Driver <small># 6.x 버전 이상 mysql</small> </li>  <br />
                                            <li> driver-class-name: org.mariadb.jdbc.Driver <small># mariadb </small> </li>  <br />
                                            <li> url: jdbc:h2:tcp//localhost/~/test <small># h2 확인 필요</small> </li>
                                            <li> url: jdbc:mariadb://localhost:3306/DB명 <small> mariadb 드라이버 </small> </li>
                                            <li> url: jdbc:mysql://localhost:3306/DB명?characterEncoding=UTF-8{'&'}serverTimezone=Asia/Seoul <small># mysql db 드라이버</small></li>
                                            <li> url: jdbc:oracle:thin:@localhost:1521:XE?characterEncoding=UTF-8{'&'}serverTimezone=Asia/Seoul <small># oracle db 드라이버</small></li>
                                            <li> url: jdbc:oracle:thin:@사용자_medium?TNS_ADMIN=전자지갑경로
                                                <li> 전자지갑경로 : ./src/main/resources/전자지갑명 <small># 전자지갑을 src폴더에 넣은경우</small> </li>
                                                <li>  </li>
                                            </li>  <br />
                                            <li> username: 사용자명 </li>
                                            <li> username: Admin <small># 오라클 클라우드 무료 DB사용할 때 사용하는 사용자명</small> </li>  <br />
                                            <li> password:  </li>
                                        </li>
                                        <li>  <br /> jpa:
                                            <li>  <br /> database-platform: org.hibernate.dialect.MySQL5InnoDBDialect <small> MySQL Dialect 설정 </small> </li>
                                            <li> database-platform: org.hibernate.dialect.Oracle10gDialect <small> Oracle Dialect 설정 </small> </li>
                                            <li> show-sql: true  <small> # 콘솔에 JPA 실행 쿼리를 보여줌 </small>  </li>
                                            <li> generate-ddl: true <small># hibernate에서 자동으로 ddl을 생성해서 table설정들을 자동으로 수행</small> </li>
                                            <li> hibernate: <small> # JPA프레임워크 hibernate 설정 </small>
                                                <li> format_sql: true <small># JPA실행쿼리를 가독성 있게 표현</small> </li>  <br />
                                                <li> ddl-auto: none <small># 아무것도 하지 않는다</small>. </li>
                                                <li> ddl-auto: create <small># 세션 팩토리가 시작될 때마다 테이블을 drop하고 ddl을 실행한다. , 배포서버에서 사용x, 로컬용도</small> </li>
                                                <li> ddl-auto: create-drop <small># 세션 팩토리가 시작될 때마다 테이블을 drop하고 ddl을 실행한다. 그리고
                                                    세션 팩토리가 종료될떄 테이블을 drop한다.</small> </li>
                                                <li> ddl-auto: update <small># 변경 스키마을 저장한다. , 운영DB에서도 사용x , 개발 초기 테스트 단계 사용</small>  </li>
                                                <li> ddl-auto: validate <small># 변경된 스키마를 출력하고 프로그램 종료</small> </li>
                                            </li>  <br />
                                            <li> open-in-view: false <small># Open Session In View</small> <a href="https://stackoverflow.com/questions/30549489/what-is-this-spring-jpa-open-in-view-true-property-in-spring-boot" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
                                            <li>  </li>
                                            <li>  </li>
                                        </li>
                                    </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}


                </span>
            </div >
        </>
    );
}

export default SpringJpa;