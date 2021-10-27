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
                                    <li> ORM : Object relational mapping , 프레임 워크가 자바 객체와 데이터베이스를 분리해서 사용하게 해준다.
                                        <li> ORM을 사용하는 이유는 객체 중심의 개발이 가능해지기 떄문에 사용 </li>
                                    </li>
                                    <li> JPA : Java Persistence API
                                        <li> EJB : 과거 자바 ORM , 불편 복잡 </li>
                                        <li> Hibernate : 대표적인 ORM 프레임워크 </li>
                                        <li> JPA : 자바 쪽의 ORM 기술 표준 , JPA 인터페이스를 구현한 대표적인 ORM 프레임워크가 Hibernate, EclipseLink, DataNucleus </li>
                                        <li> JPA 실행 과정 : 개발자가 자바객체를 ORM에 저장  - ORM에서 SQL을 생성 - DB에 저장 <small> SQL생성과 실행을 개발자가 직접하지 않아도 JPA가 처리 </small>  </li>
                                        <li> 관계형 데이터베이스에 SQL을 작성해야 하는데 SQL을 작성하지 않고 자동으로 매핑해주는 기술 </li>
                                    </li>
                                    <li> JPA의 장점 : 개발자는 객체 중심의 개발에 집중할 수 있다. </li>
                                    <li> JPA의 단점 : 복잡한 쿼리를 작성하기에는 불편, 현업에서는 아직 사용 불가, 2개의 테이블간의 다대다 관계 형성 불가능 중간에 매핑 테이븡을
                                        하나 만들고 관계를 형성을 해야 한다. </li>
                                    <li> JPA에는 최적화 기능이 있다.
                                        <li> 1. 캐싱 기능 : 같은 트랜잭션에서는 똑같은 쿼리를 2번 생성하지 않고 보관하고 있다가 같은 쿼리가 발생하면 실행 </li>
                                        <li> 2. 버퍼링, 지연 기능 : SQL쿼리를 개발자가 시작할 때 바로 날리지 않고 커밋을 할 떄 까지 기다렸다가 한번에 쿼리를 날린다.
                                            batch processing 방식 사용
                                            <li> transaction.begin(); <small> 트랜잭션 시작 </small> </li>
                                            <li> transaction.commit(); <small> 트랜잭션 끝 </small> </li>
                                        </li>
                                    </li>
                                    <li> 영속성 컨텍스트(persistence context)
                                        <li> 엔티티를 저장하는 공간 </li>
                                        <li>  </li>
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
                            <summary className='stitle'> 영속성 관련 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Entity Manager Factory </div>
                                <div className='mblock'>
                                    <li> 어플리케이션에서 DB를 한개만 사용하면 1개만 만들어서 사용 </li>
                                    <li> 여러 스레드가 동시 접근 가능, 스레드끼리 공유 가능 </li>
                                    <li>  </li>
                                    <li> EntityManagerFactory emf = Persistence.createEntityManagerFactory(""); </li>
                                </div>
                                <div className='sstitle'> Entity Manager </div>
                                <div className='mblock'>
                                    <li> 여러 스레드가 동시에 접근 불가 </li>
                                    <li> 스레드가 공유 불가 </li>
                                    <li> 사용자의 요청에 1개씩 만들어짐 </li>
                                    <li> EntityManager em = emf.createEntityManger(); </li>
                                </div>
                                <div className='sstitle'> EntityTransaction </div>
                                <div className='mblock'>
                                    <li> EntityTransaction transaction = em.getTransaction(); </li>
                                    <li> transaction.begin(); <small> # 트랜잭션 시작 </small> </li>
                                    <li> 영속성 컨텍스트에 등록할 엔티티 관련 코드들 작성 ( ex) em.persist(엔티티명); ) </li>
                                    <li> transaction.commit(); <small> # 트랜잭션 커밋 </small>  </li>
                                </div>
                                <div className='sstitle'> persistence context </div>
                                <div className='mblock'>
                                    <li> em.persist(엔티티객체); <small> # EntityManager를 이용해 영속성 컨텍스트에 저장 </small> </li>
                                    <li> em.detach() <small> # 영속상태에서 분리 (삭제는 아니고 보류) </small> </li>
                                    <li> em.remove(엔티티 객체) <small> # </small> </li>
                                    <li> em.flush() <small> # 플러쉬 실행 </small> </li>
                                    <li> em.close() <small> # 영속상태를 준영속상태로 변경  </small> </li>
                                    <li> em.merge(엔티티객체) </li>
                                    <li> em.clear <small> # 영속성 컨텍스트 초기화 </small> </li>
                                    <li> 객체 객체명 = em.find(객체.class,"식별자") <small> # 1차 캐시에서 엔티티를 조회하고 없으면 DB를 조회해서 찾고 1차캐시에 저장하고 값을 반환 </small> </li>
                                </div>
                                <div className='sstitle'> JPA 진행과정, 영속성 컨텍스트 특징 </div>
                                <div className='mblock'>
                                    <li> 진행 과정 : 트랜잭션 커밋 - 엔티티 매니저 플러시 호출 - 엔티티와 스냅샷을 비교해서 변경된 엔티티를 찾음 - 변경되었으면 수정 쿼리를 생성 -
                                        쓰기 지연 SQL 저장소로 보냄 - SQL을 DB로 보냄 - 실제 DB에 트랜잭션 커밋 </li>
                                    <li> 영속 상태가 되기 위해서는 식별자(@Id)가 반드시 존재해야 한다. 없으면 예외가 발생한다. </li>
                                    <li> JPA 메소드로 DB를 요청하면 영속성 컨텍스트 내부의 캐시에서 찾고 없으면 데이터베이스에서 꺼내서 캐시에 보관하고 클라이언트에게 반환 </li>
                                    <li> JPA는 트랙잭션을 커밋하는 순간에 영속성 컨텍스트에 저장된 엔티티를 DB에 반영하고 flush() 동기화 작업을 수행한다. </li>
                                    <li> JPA는 동일한 쿼리를 기억해두었다가 재사용 ( 파싱된 쿼리를 가지고 있으므로 똑같은 쿼리를 매번 파싱할 필요가 없음) </li>
                                </div>
                                <div className='sstitle'> flush(동기화) </div>
                                <div className='mblock'>
                                    <li> 1. 직접 호출 </li>
                                    <li> 2. 트랜잭션 커밋 </li>
                                    <li> 3. JPQL 쿼리 사용 </li>
                                    <li> FlushModeType.AUTO (default값) <small> # 커밋이나 쿼리 실행할 때 flush </small> </li>
                                    <li> FlushModeType.COMMIT <small> # 커밋일 때만 플러시 </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Entity - DB 데이터 타입
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> Long
                                        <li> 오라클 : NUMBER(19,0) </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> Boolean
                                        <li> 오라클 : NUMBER(1,0) <small> # true=1 , false=0 </small> </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> String
                                        <li> 오라클 : VARCHAR2(255 CHAR) </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> Int
                                        <li> 오라클 : NUMBER(10,0) </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> LocalDateTime <small> # Java8부터 , JPA버전이 API를 지원하는지 확인 </small>
                                        <li> 오라클 : TIMESTAMP(6)  <small> # 21/10/26 10:46:46.397863000 </small> </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> LocalDate <small> #  </small>
                                        <li> 오라클 : TIMESTAMP(6) <small> # 21/10/26 </small> </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> Date <small> # JDK1.0 시절에 사용하던 문자타입, 불편 </small>
                                        <li> 오라클 : TIMESTAMP(6) <small>  </small> </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> Calender <small> # 비용이 비싸고, 이것도 불편  </small>
                                        <li>  </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li>  </li> <br />
                                    <li>  </li> <br />
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPA에서 Entity 사용하는 방법
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Entity란 </div>
                                <div className='mblock'>
                                    <li> 관계형 데이터베이스에서 테이블을 만들듯이 JPA가 참조할 테이블을 만들어 둔것 </li>
                                    <li> entity는 논리적인 모델 , 집합 정도라고 생각  </li>
                                    <li> DB의 테이블로 사용도 하지만 사용을 안할 수도 있다. </li>
                                    <li> @Entity와 @Table의 차이, @Table은 DB에 생성될 테이블의 이름을 지정하는데 사용하고, @Entity는 엔티티를 뜻한다.
                                        하지만 @Table의 이름이 명시되지 않는다면 @Entity의 name속성이 DB테이블의 이름으로 사용된다. </li>
                                </div>
                                <div className='sstitle'> Entity 관련 어노테이션 </div>
                                <div className='mblock'>
                                    <li> @Entity(name="") <small> # Entity를 명시 </small> </li>
                                    <li> @Table(name="") <small> # Table 이름 명시 </small> </li>
                                    <li> @Id <small> # JPA가 식별자로 사용, PK를 뜻하는 필드를 지정, @GeneratedValue 하고 주로 같이 사용 </small> </li>
                                    <li> @GeneratedValue(strategy = GenerationType.IDENTITY) <small># MYSQL Auto_Increment</small></li>
                                    <li> @GeneratedValue(strategy = GenerationType.SEQUENCE) <small># Oracle, @SequenceGenerator 필요</small> </li>
                                    <li> @GeneratedValue(strategy = GenerationType.TABLE) <small># TABLE, @TableGenerator 필요</small> </li>
                                    <li> @GeneratedValue(strategy = GenerationType.AUTO)<small># 선택한 dialect에 따라 자동 선택(default) </small>  </li>
                                    <li> @Column(name="DB 필드명", length = 10, nullable = false, unique=false,
                                        columnDefinition = "DB필드타입 제약조건 '제약조건값'", )
                                        <small> # 필수로 사용할 필요는 없고 DB테이블의 필드명과 일치하면 자동으로 매핑이 된다.만약에 일치하지 않으면
                                            name="" 속성에 적어서 맞추어 줄수 있고 DB에서 사용하는 제약조건 등을 지정할 수도 있다.</small></li>
                                    <li>  <small> # </small> </li>
                                    <li> implementation 'org.springframework.boot:spring-boot-starter-validation' </li>
                                    <li> @Positive @PositiveOrZero @Negative @NegativeOrZero </li>
                                    <li> @Size(min=1,max=2) @Min(1) @Max(2) </li>
                                    <li> @Null </li>
                                    <li> @NotNull # Null 불가능 </li>
                                    <li> @NotEmpty # Null, 빈문자열("") 불가능 , " " 은 가능 </li>
                                    <li> @NotBlank # Null, 빈문자열("") , " " 모두 불가능</li>
                                    <li> @Pattern(regex="이곳에 정규표현식 작성") </li>
                                    <li> @Future @FutureOrPresent @Past @PastOrPresent </li>
                                    <li> @Email </li>
                                    <li> @AssertTrue @AssertFalse # 값이 항상 true거나 false </li>
                                    <li> @Digits(integer= 최대허용되는정수자릿수 , fraction = 최대허용되는소수자릿수 ) </li>
                                    <li> @DecimalMax(value=) @DecimalMin(value=) </li>
                                    <li> 어노테이션에 추가 속성 : message="에러 날 경우 메시지 표현" </li>
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
                                    <div className='sstitle'> 제약조건 어노테이션 </div>
                                    <div className='sblock'>
                                        <li> @NotNull </li>
                                        <li> @Size(min=2, max=30) </li>
                                        <li>  </li>
                                    </div>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> @Entity <small> # entity를 명시 </small> </li>
                                    <li> @Getter<small>  </small></li>
                                    <li> @Setter<small>  </small></li>
                                    <li> @AllArgsConstructor<small>  </small> </li>
                                    <li> @NoArgsConstructor <small>  </small></li>
                                    <li> @ToString <small>  </small></li>
                                    <li> public class BoardEntity {'{'}
                                        <li>   <br />  @Id </li>
                                        <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                        <li> @Column(name="board_no") </li>
                                        <li> private Long boardNo; </li> <br />

                                        <li> @Column(name="board_title") </li>
                                        <li> private String boardTitle; </li> <br />

                                        <li> @Column(name="board_content") </li>
                                        <li> private String boardContent; </li>
                                    </li>
                                    <li> {'}'} </li>
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
                                    <div> Entity명 findByFieldname(String fieldname) (대표예시)
                                        <li> <small> select m from 테이블(Entity) m where m.fieldname = ?1 </small> </li>
                                    </div>

                                    <div> {' List<Entity> findAll() '}
                                        <li> <small> select m from 테이블 m; </small> </li>
                                    </div>

                                    <div> findByFieldname1AndFieldname2(String fieldname1, String fieldname2)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1 and m.fieldname2 = ?2; </small> </li>
                                    </div>

                                    <div> findByFieldname1OrFieldname2(String fieldname1, String fieldname2)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1 or m.fieldname2 = ?2; </small> </li>
                                    </div>

                                    <div> findDistinctByFieldname1
                                        <li> <small> select m distinct from 테이블 m where m.fieldname1 = ?1; </small> </li>
                                    </div>

                                    <div> findByFieldnameIs(String name)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1; </small> </li>
                                    </div>

                                    <div> findByFieldnameEquals(String name)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1; </small> </li>
                                    </div>

                                    <div> findByFieldnameBetween(num start, num end)
                                        <li> <small> select m from 테이블 m where m.fieldname between ?1 and ?2 </small> </li>
                                    </div>

                                    <div> findByFieldnameGreaterThan(String num)
                                        <li> <small> select m from 테이블 m where m.fieldname {'>'} ?1 </small> </li>
                                    </div>

                                    <div> findByFieldnameGreaterThanEqual(String num)
                                        <li> <small> select m from 테이블 m where m.fieldname {'>='} ?1 </small> </li>
                                    </div>

                                    <div> findByFieldnameLessThan(String num)
                                        <li> <small> select m from 테이블 m where m.fieldname {'<'} ?1</small> </li>
                                    </div>

                                    <div> findByFieldnameLessThanEqual(String num)
                                        <li> <small> select m from 테이블 m where m.fieldname {'<='} ?1 </small> </li>
                                    </div>

                                    <div> findByFieldNameNotLike(String word);
                                        <li> <small> select m from 테이블 m where m.fieldname not like '?1'  </small> </li>
                                    </div>

                                    <div> findByFieldNameLike(String word);
                                        <li> <small> select m from 테이블 m where m.fieldname like '?1'  </small> </li>
                                    </div>

                                    <div> findByFieldNameStartingWith(String word);
                                        <li> <small> select m from 테이블 m where m.fieldname like '%?1' </small> </li>
                                    </div>

                                    <div> findByFieldNameEndingWith(String word);
                                        <li> <small> select m from 테이블 m where m.fieldname like '?1%' </small> </li>
                                    </div>

                                    <div> findByFieldNameContaining(String word);
                                        <li> <small> select m from 테이블 m where m.fieldname like '%?1%' </small> </li>
                                    </div>

                                    <div> findByFieldname1ByFieldname2Desc(String fieldname1)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1 order by m.fieldname2 desc </small> </li>
                                    </div>

                                    <div> findByFieldname1ByFieldname2Asc(String fieldname1)
                                        <li> <small> select m from 테이블 m where m.fieldname1 = ?1 order by m.fieldname2 asc </small> </li>
                                    </div>

                                    <div> deleteById(String fieldname)
                                        <li> <small> delete from 테이블 where Id필드 = ?1  </small> </li>
                                    </div>

                                    <a href="https://goodgid.github.io/Spring-Data-JPA-Query_Part_1/"
                                        target="_blank" rel="noopener noreferrer"> 좀 더 참고해서 공부하기 </a>
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
                            <summary className='stitle'> @ManyToMany
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Client </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li> @Table(name="client") </li>
                                    <li> public class Client {'{'}
                                        <li>  </li> <br />
                                        <li> @Id </li>
                                        <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                        <li> private Long id; </li>
                                        <li> private String username; </li>
                                        <li> private String password; </li>
                                        <li> private Boolean enabled=true; </li> <br />
                                        <li> @ManyToMany(cascade = {'{'}
                                            <li> CascadeType.PERSIST, </li>
                                            <li> CascadeType.MERGE </li>
                                        </li>
                                        <li> {'})'} </li>
                                        <li> @JoinTable(
                                            <li> name="client_role", <small> 매핑 테이블의 테이블명 </small> </li>
                                            <li> joinColumns = @JoinColumn(name = "client_id"), <small> client테이블의 id를 외래키로 하여 현재 엔티티를 참조 </small> </li>
                                            <li> inverseJoinColumns = @JoinColumn(name = "role_id")) <small> role테이블의 id를 외래키로 하여 다른 엔티티를 참조 </small> </li>
                                        </li>
                                        <li> private Set{'<Role>'} roles = new HashSet{'<Role>'}(); </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                                <div className='sstitle'> Role </div>
                                <div className='mblock'>
                                    <li> @Table(name="role") </li>
                                    <li> public class Role {'{'}
                                        <li>  </li> <br />
                                        <li> @Id </li>
                                        <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                        <li> private Long id; </li>
                                        <li> private String name="ROLE_USER"; </li>
                                        <li>  </li> <br />
                                        <li> @ManyToMany(mappedBy="roles") <small> Client 엔티티의 roles를 참조하여 role_id 컬럼명에 Role 엔티티의 id를  매핑 </small> </li>
                                        <li> private Set{'<Client>'} clients = new HashSet{'<Client>'}(); </li>
                                    </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @NamedEntityGraph @EntityGraph
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> <div className="sstitle"> @NamedEntityGraph 속성 </div> </li>
                                    <li> 엔티티 클래스 위에 선언을 하여 사용 </li>
                                    <li> 엔티티 그래프를 둘 이상 사용할 경우 사용 </li>
                                    <li> name="엔티티클래스명.변수명" <small> # 엔티티 그래프 이름을 정의 </small> </li>
                                    <li> attributeNodes = @NamedAttributeNode("필드명") <small> # 함께 조회할 속성 선택 </small> </li>
                                    <li>  </li>
                                    <li> <div className="sstitle"> @EntityGraph 속성 </div> </li>
                                    <li> Repositoy클래스의 메소드 위에 선언하여 사용 </li>
                                    <li> EntityGraph 로딩 정책을 가져와서 적용 </li>
                                    <li> fetch가 lazy로 되어있어도 EntityGraph를 이용하면 같이 조회 가능 </li>
                                    <li> @EntityGraph(value="엔티티클래스명.변수명") </li>
                                    <li> @EntityGraph(attributePaths={'{"AttributeNode에 명시된 필드명"}'}) </li>
                                    <li> @EntityGraph("엔티티클래스명.변수명") </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> @EntityGraph(attributePaths = {'{"엔티티필드명"},'} type = EntityGraph.EntityGraphType.LOAD) </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @JoinTable @JoinColumn @ManyToOne @OneToOne @OneToMany @ManyToMany
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> <div className="sstitle"> @JoinTable 속성 </div> <small> # 조인테이블을 만들어서 연관관계를 설정하는 방법 </small>
                                        <li> name : </li>
                                        <li> joinColumns : <small> # 현재 엔티티를 참조하는 외래키 </small> </li>
                                        <li> inverseJoinColumns : <small> # 다른 엔티리를 참조하는 외래키 </small> </li>
                                        <div className='sstitle'> @JoinTable 예시 </div>
                                        <div className='sblock'>
                                            <li> @JoinTable(
                                                <li> name="client_role", <small> 매핑 테이블의 테이블명 </small> </li>
                                                <li> joinColumns = @JoinColumn(name = "client_id"), <small> 현재 엔티티의 컬럼명(default: 엔티티명_필드명) ,client테이블의 id를 외래키로 하여 현재 엔티티를 참조 </small> </li>
                                                <li> inverseJoinColumns = @JoinColumn(name = "role_id") <small> 참조 엔티티의 컬럼명(default: 엔티티명_필드명) ,role테이블의 id를 외래키로 하여 다른 엔티티를 참조 </small> </li>
                                            </li>
                                            <li> ) </li>
                                        </div>
                                    </li> <br />
                                    <li> <div className="sstitle"> @JoinColumn 속성 </div> <small> # 외래키 매핑할 때 사용 </small>
                                        <li> name : 매핑할 외래키 명 , default = 필드명_참조테이블기본키컬럼명 <small> # name_refname </small> </li>
                                        <li> referencedColumnName : 외래키가 참조하는 테이블의 컬럼명 </li>
                                        <li> foreignKey(DDL) : 외래키 제약조건을 직접 작성, 테이블생성시에만 가능? </li>
                                        <li> unique, nullable, insertable, updatable, columnDefinition, table </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> <div className="sstitle"> @ManyToOne 속성 </div> <small> # Many쪽에서 @JoinTable을 선언 </small>
                                        <li> optional=false (객체에 null이 들어갈수 있음, inner join) , optional=true(default값) (객체에 null이 들어갈 수 없음, outer join) </li>
                                        <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 떄 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                                        <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>
                                        <li>  </li>
                                    </li> <br />
                                    <li> <div className="sstitle"> @OneToOne 속성 </div>
                                        <li> optional=false (객체에 null이 들어갈수 있음) , optional=true (객체에 null이 들어갈 수 없음) </li>
                                        <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 떄 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                                        <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>
                                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                                            <li> CascadeType.MERGE : 엔티티를 합칠 떄, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                                            <li> CascadeType.REFRESH : 엔티티를 수정할 떄, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                                            <li> CascadeType.REMOVE : 엔티티를 삭제할 떄, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                                            <li> CascadeType.DETACH : 엔티티를 detach할떄 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                                        </li>
                                        <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>
                                        <li> </li>
                                    </li> <br />
                                    <li> <div className="sstitle"> @OneToMany 속성 </div>   <small> # Many쪽에서 @JoinTable을 선언 </small>
                                        <li> fetch=FetchType.EAGER : 엔티티 조회할 떄 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                                        <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
                                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                                            <li> CascadeType.MERGE : 엔티티를 합칠 떄, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                                            <li> CascadeType.REFRESH : 엔티티를 수정할 떄, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                                            <li> CascadeType.REMOVE : 엔티티를 삭제할 떄, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                                            <li> CascadeType.DETACH : 엔티티를 detach할떄 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                                        </li>
                                        <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>

                                    </li> <br />
                                    <li> <div className="sstitle"> @ManyToMany(mappedBy="") 속성 </div>  <small> # mappedBy : 참조하고 있는 다른엔티티의 필드명을 적어서 매핑 </small>
                                        <li> optional=false (외부조인) , optional=true (외부조인) </li>
                                        <li> fetch=FetchType.EAGER : 엔티티 조회할 떄 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                                        <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
                                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                                            <li> CascadeType.MERGE : 엔티티를 합칠 떄, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                                            <li> CascadeType.REFRESH : 엔티티를 수정할 떄, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                                            <li> CascadeType.REMOVE : 엔티티를 삭제할 떄, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                                            <li> CascadeType.DETACH : 엔티티를 detach할떄 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                                        </li>
                                    </li> <br />
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <div className='sstitle'> Board </div>
                                    <div className='mblock'>
                                        <li> @Table(name="board") </li>
                                        <li> public class Board {'{'}
                                            <li>     @Id </li>
                                            <li>     @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                            <li>     @Column(name="id") </li>
                                            <li>     private Long id; </li>
                                            <li>  </li> <br />
                                            <li> @ManyToOne </li>
                                            <li> @JoinColumn(name="client_id") <small> # 참조할테이블명_컬럼명 </small> </li>
                                            <li> private Client client; </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </div>
                                    <div className='sstitle'> Client </div>
                                    <div className='mblock'>
                                        <li> @Table(name="client") </li>
                                        <li> public class Client {'{'}
                                            <li>     @Id </li>
                                            <li>     @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                            <li>     private Long id; </li>
                                            <li>  </li> <br />
                                            <li>   @OneToMany(mappedBy="client") <small> # 참조할 테이블의 컬럼명 </small> </li>
                                            <li> {'private Set<Board> boards = new HashSet<Board>();'} </li>
                                            <li>  </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JPQL
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 테이블명이 아닌 엔티티명을 사용한다. </li>
                                    <li> 엔티티와 필드는 대소문자를 구분 </li>
                                    <li> JPQL 키워드는 대소문자를 구분하지 않음 </li>
                                    <li> 별칭을 사용한다 </li>
                                    <li> 파라미터 바인딩
                                        <li> query.setParameter("키",값) <small> x.test=키 </small>  </li>
                                        <li> query.setParameter(1,값) <small> x.test=?1 </small> </li>
                                    </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> 1. 어노테이션 방식(Repository JPA 쿼리 메소드 위에)
                                        <li> @Query("select m from Member m") <small> # 사용자 쿼리 작성 </small> </li>
                                    </li>
                                    <li> 2. 순수 sql 쿼리(Repository 사용자 쿼리 메소드 위에)
                                        <li> @Query(value="select * from Member m",nativeQuery = true) </li>
                                    </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> QueryDSL
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 추가적인 gradle 설정이 필요,  </li>
                                    <li> @Entity 클래스를 탐색하고 JPAAnnotationProcessor를 이용해 Q클래스를 생성 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>



                </span>
            </div >
        </>
    );
}

export default SpringJpa;