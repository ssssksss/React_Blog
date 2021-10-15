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
                                            <li>  </li>
                                            <li> transaction.commit(); <small> 트랜잭션 끝 </small> </li>
                                        </li>
                                        <li>  </li>
                                    </li>
                                    <li>  </li>
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
                                    <div className='title4'> deleteById(String fieldname) </div>
                                    <div className='sblock'>
                                        <li> delete from 테이블 where Id필드 = ?1  </li>
                                    </div>
                                    <div className='title4'>  </div>
                                    <div className='sblock'>
                                        <li>  </li>
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
                                            <li> name="client_role", <small> 매핑 테이블의 컬럼명 </small> </li>
                                            <li> joinColumns = @JoinColumn(name = "client_id"), </li>
                                            <li> inverseJoinColumns = @JoinColumn(name = "role_id")) </li>
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
                                        <li> @ManyToMany(mappedBy="roles") </li>
                                        <li> private Set{'<Client>'} clients = new HashSet{'<Client>'}(); </li>
                                    </li>
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