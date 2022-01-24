import React, { useEffect, useRef } from 'react';

const SpringModel = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> 자바스크립트와 스프링 데이터 비교 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 자바스크립트 Axios 👉 스프링  </li>
                        <li> new Date() 👉 String <small> "Thu Jan 06 2022 02:54:07 GMT+0900 (한국 표준시)" </small>  </li>
                        <li> new Date() 👉 LocalDate ❌ </li>
                        <li> new Date() 👉 LocalTime ❌ </li>
                        <li> "11.11.11" 👉 LocalDate ❌ </li>
                        <li> "[11.11.11]" 👉 LocalDate ❌ </li>
                        <li> "11:11:11" 👉 LocalTime ❌ </li>
                        <li> String 👉 String ✅ , String으로 주면 알아서 변환하기, 빌더패턴 이용해서 스프링에서 바꾸어줘도 된다.(테스트완료) </li>
                        <li> "2020-11-11 12:12:12" 👉 @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") ❌ </li>
                        <li> "2020-11-11 12:12:12" 👉 @DateTimeFormat(pattern="yyyy-MM-ddTHH:mm:ss") ❌ </li>
                        <li> "2020-11-11 12:12:12" 👉 @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") ✅
                            <small> 주의: 생성자,빌더,set으로 받아오는 매개변수에 선언해야한다. , @RequestBody에서 사용 </small> </li>
                        <li> "2020-11-11 12:12:12" 👉  </li>
                        <li> "2020-11-11 12:12:12" 👉  </li>
                        <li>  </li>
                        <li>  </li>
                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> mysql과 스프링 데이터 비교 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 스프링 👉 mysql </li>
                        <li> String 👉 varchar(255) </li>
                        <li> LocalDate 👉 date </li>
                        <li> Boolean 👉 bit(1) </li>
                        <li> 👉 </li>
                        <li> 👉 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @NoArgsConstructor </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 기본 생성자의 접근제어자 설정 </h2>
                        <li> public으로 해놓으면 좋지않음 </li>
                        <li> @NoArgsConstructor(force=true) <small> 초기값이 필요한 final 변수에 null,0 등 기본값을 초기화해준다. </small> </li>
                        <li> @NoArgsConstructor는 @NonNull을 무시 </li>
                        <li> @NoArgsConstructor(AccessLevel.PROTECTED) </li>
                        <li> @NoArgsConstructor(AccessLevel.PUBLIC) </li>
                        <li> @NoArgsConstructor(AccessLevel.PRIVATE) </li>
                        <li> 기본 생성자가 만들어지고 빌더 패턴이 작동 </li>
                        <li> @Builder를 사용하게 되면 기본생성자외에 다른 생성자가 없어서 에러가 발생한다. </li>
                        <div className="block4">
                            <li> 1. @AllArgsConstructor을 같이 사용한다. </li>
                            <li> 2. @Builder를 생성자에 설정한다. </li>
                            <div className="block4">
                                <li> @Builder </li>
                                <li> public 메소드(데이터타입 매개변수명) {"{"}
                                    <li> this.필드명 = 값; </li>
                                </li>
                                <li> {"}"} </li>
                            </div>
                            <li>  </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @AllArgsConstructor </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 모든 필드에 파라미터로 값을 넣는 생성자를 만들어준다. </li>
                        <li> public class User {'{'}
                            <li> private final String id; #생성자 필드에 포함</li> <br />
                            <li> @Nonnull private String id; #생성자 필드에 포함</li>
                            <li> private String id; #생성자 필드에 포함되지 않음</li>
                        </li>
                        <li> {'}'} </li> <br />

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @RequiredArgsConstructor </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> final 이나 @NonNull 필드만 파라미터로 받는 생성자 선언 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> serialVersionUID </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> private static final long serialVersionUID = 1L; </li>
                        <li> Version을 일치시켜주어 Serialize와 Deserialize를 맞춰준다. </li>
                        <li> 컴파일러가 계산한 값을 부여하는데 Serializable Class , Outer Class가 변경되면
                            serialVersionUID값이 변하게 된다. 값이 다르게 되면 InvalidClassExceptions가 발생한다 </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> DTO </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> Layer와 Layer사이에서 데이터를 교환하는 객체(DB Layer에서만 사용x)</li>
                        <li> 로직이 없는 순수한 객체, 생성자를 만드는데만 사용 </li>
                        <li> 로직을 가지지 않고 getter,setter 운반만 하는 역할 </li>
                        <li> 근데 setter를 사용하지 않고도 사용하는 경우가 많으므로 setter는 없애도 될것같다.  </li>
                        <li>  </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 : </li>
                        <li> 단점 : </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈 </h3>
                                    <li>  </li>
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @CreationTimestamp @UpdateTimestamp  </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> hibernate 어노테이션 </li>

                        <h2 className='h2'> 📌 @CreationTimestamp </h2>
                        <li> INSERT 쿼리가 발생할 때 현재의 시간을 넣어준다. </li>

                        <h2 className='h2'> 📌 @UpdateTimestamp </h2>
                        <li> UPDATE 쿼리가 발생할 때 현재의 시간을 넣어준다. </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>     @CreationTimestamp </li>
                                    <li>     @Column(name = "created_at") </li>
                                    <li>     private LocalDateTime createdAt; </li>
                                    <li>  </li>
                                    <li>     @Column(name = "updated_at") </li>
                                    <li>     @UpdateTimestamp </li>
                                    <li>     private LocalDateTime updatedAt; </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> ----------------------------------------------------- </summary>
                    <div className='block2'>
                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @Id, @Column </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 @Id 설명 </h2>
                        <li> 식별자로 사용할 변수 위에 선언 </li>
                        <li> 엔티티 식별자로 사용, DB테이블의 PK로도 사용이 된다. </li>

                        <h2 className='h2'> 📌 @Column 설명 </h2>
                        <li> nullable = false 를 사용하면 엔티티 필드에는 들어감 (@Notnull 추천)   </li>

                        <h2 className='h2'> 📌 속성 </h2>
                        <li> @Column(name="이름") </li>
                        <li> @Column(nullable = false) , false(null비허용), true(null허용,기본값) </li>
                        <li> @Column(unique=true) , unique 속성 설정 </li>
                        <li> @Column(length=10) , 길이 10글자까지 </li>
                        <li> @Column(columnDefinition="데이터타입 제약조건 '제약조건값'") </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <h3 className='h3'> 🎈 </h3>
                            <div className='block4'>
                                <li> @Id </li>
                                <li> @Column(name="DB필드명", unique=true, nullable=false, length=10, columnDefinition="데이터타입 제약조건 '제약조건값'" )</li>
                                <li> private String id; </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Entity (정리할 필요 있음) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> 관계형 데이터베이스에서 테이블을 만들듯이 JPA가 참조할 테이블을 만들어 둔것 </li>
                        <li> DB와 매핑되는 클래스 객체 </li>
                        <li> DB테이블에 들어간 컬럼들을 작성 </li>
                        <li> DB테이블하고 매핑이 되므로 변경이 되지 않게 해야한다. </li>
                        <li> Setter 메소드를 사용하지 말고 Builder로 생성자를 만들어서 사용한다. </li>
                        <li>  </li>

                        <h2 className="h2"> 📌 Entity 관련 어노테이션 </h2>
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
                        <li> @Id: 식별자를 지정, @GeneratedValue 하고 주로 같이 사용 </li>
                        <div className="block4">
                            <li> @GeneratedValue(strategy = GenerationType.IDENTITY) <small># MYSQL Auto_Increment</small></li>
                            <li> @GeneratedValue(strategy = GenerationType.SEQUENCE) <small># Oracle, @SequenceGenerator 필요</small> </li>
                            <li> @GeneratedValue(strategy = GenerationType.TABLE) <small># TABLE, @TableGenerator 필요</small> </li>
                            <li> @GeneratedValue(strategy = GenerationType.AUTO)<small># 선택한 dialect에 따라 자동 선택(default) </small>  </li> <br />
                        </div>
                        <li> @Table(name="") DB의 테이블명과 매핑을 시켜주는 어노테이션 </li>
                        <li> @Column(name="DB 필드명", length = 10, nullable = false, unique=false,
                            columnDefinition = "DB필드타입 제약조건 '제약조건값'", )
                            필수로 사용할 필요는 없고 DB테이블의 필드명과 일치하면 자동으로 매핑이 된다.만약에 일치하지 않으면
                            name="" 속성에 적어서 맞추어 줄수 있고 DB에서 사용하는 제약조건 등을 지정할 수도 있다.</li>
                        <li> @Builder: </li>
                        <li> @org.hibernate.annotations.DynamicUpdate : 엔티티에 선언하며 레코드를 전체 업데이트 하지않고
                            일부만 업데이트를 하게 해준다.  </li>
                        <li> @NamedQuery(name="ENTITY.Repository메소드명",query="사용자정의쿼리작성") </li>
                        <li> @Temporal(TemporalType.TIMESTAMP) # 자바의 날짜 타입 사용 </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈 Entity 클래스 </h3>
                                    <div className="block4">
                                        <li> @Entity <small> # entity를 명시 </small> </li>
                                        <li> @Getter<small>  </small></li>
                                        <li> @Setter<small>  </small></li>
                                        <li> @AllArgsConstructor<small>  </small> </li>
                                        <li> @NoArgsConstructor <small>  </small></li>
                                        <li> @ToString <small>  </small></li>
                                        <li> public class BoardEntity {'{'}
                                            <li> </li> <br />
                                            <li> @Id <small> # 식별 지정자 </small> </li>
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
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>



            <div className='block1'>
                <details>
                    <summary> VO (내용 보충 필요) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> Value Object </li>
                        <li> VO는 메모리 주소 참조와 관련이 있는데</li>
                        <li> equals() 와 hashcode() 메소드를 사용 </li>
                        <li> 3 </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 : </li>
                        <li> 단점 : </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈 </h3>
                                    <li>  </li>
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <br />
            </div>

            <div className='block1'>
                <details>
                    <summary> JDBC API ( 나중에 천천히 정리 , 정리 x ) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> 직접 JDBC를 Connection으로 연결하고 쿼리를 작성해서 넣어주고 excute를 재주고 연결도 끊어주어야 하는 방법(불편) </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className="h2"> 📌 코드 설명 </h2>
                        <li>  </li>
                        <li> sql = "쿼리작성"; </li>
                        <li> pstmt.executeUpdate(sql); </li>
                        <li> ResultSet rs = stmt.executeQuery(sql); <small> #  </small> </li>
                        <li>  </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈 </h3>
                                    <li>  </li>
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> JPQL </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> Java Persistence Query Language </li>
                        <li> DB쿼리가 아닌 객체지향 쿼리 </li>
                        <li> 특정 SQL에 의존하지 않는 쿼리 </li>
                        <li> SQL과 쿼리 구조는 비슷해서 사용하기 쉬움 </li>
                        <li> SQL쿼리와는 다르게 JPQL는 별칭을 필수로 사용함 </li>
                        <li> JPQL 실행 시 쿼리객체(TypedQuery , Query) 생성 필요 </li>

                        <h2 className="h2"> 📌 EntityManagerFactory </h2>
                        <li> 비용이 비싸서 어플리케이션에서 1개만 만들어서 사용 </li>
                        <li> 여러 스레드가 동시에 접근이 가능, 스레드끼리 공유가 가능 </li>
                        <li> 어플리케이션이 종료되기전에 닫아주어야 한다. </li>
                        <div className="block4">
                            <li> EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpabook"); </li>
                        </div>

                        <h2 className="h2"> 📌 EntityManager </h2>
                        <li> 여러 스레드가 동시에 접근이 불가능 </li>
                        <li> 스레드간 공유 불가능 </li>
                        <li> 사용자의 요청에 1개씩 만들어짐 </li>
                        <li> 만들어지는 비용이 비싸지는 않지만 닫아주어야 한다. </li>
                        <div className="block4">
                            <li> EntityManager em = emf.createEntityManager(); </li>
                        </div>

                        <h2 className="h2"> 📌 Persistence Context  </h2>
                        <li> Entity를 저장하는 환경 </li>
                        <li> 논리적인 개념에 가까움</li>
                        <li> Persistence Context에 EntityManager가 접근하여 Entity를 관리한다.  </li>
                        <div className="block4">
                            <img style={{ width: "60%" }} src={process.env.PUBLIC_URL + '/img/SpringModel/EntityManager.svg'} alt="" />
                            <li> em.persist(ENTITY_INSTANCE) <small> # 영속성 상태로 만듬 </small> </li>
                            <li> em.detach(ENTITY_INSTANCE) <small> # 영속상태를 준영속상태로 만듬 </small> </li>
                            <li> em.clear() <small> # Persistence Context 초기화 </small> </li>
                            <li> em.close() <small> # Persistence Context 닫음 </small> </li>
                            <li> em.merge() </li>
                            <li> em.remove(ENTITY_INSTANCE) <small> # 커밋을 해야 비영속 상태로 만듬 - flush() - DB에서 삭제 </small> </li>
                            <li> em.flush()
                                <div className="block4">
                                    <p> em.setFlushMode(javax.persistence.FlushModeType.AUTO) <small> # 기본값, 커밋이나 쿼리 실행할 때 flush() </small> </p>
                                    <p> em.setFlushMode(javax.persistence.FlushModeType.COMMIT) <small> # 커밋할 때만 flush() </small> </p>
                                </div>
                            </li>
                            <li> em.find(ENTITY.class, ENTITY_INSTANCE.getId()); <small> # EntityManager에서 Entity의 식별자로 조회 </small> </li>
                            <li> EntityTransaction et = em.getTransaction(); <small> #  </small> </li>
                            <li> et.begin(); </li>
                            <li> et.commit(); </li>
                            <li> em.close() <small> # EntityManager를 종료해주어야 한다. </small> </li>
                            <li> em.createQuery()
                                <div className="block4" style={{ listStyle: "none" }}>
                                    <li> TypedQuery{"<ENTITY>"} query = em.createQuery("JPQL_QUERY", ENTITY.class); <small> # 반환 타입이 명확함, 1종류의 엔티티 타입을 반활할 때 </small> </li>
                                    <li> Query{"<ENTITY>"} query = em.createQuery("JPQL_QUERY"); <small> # 여러 엔티티나 컬럼을 반환할 때 </small> </li>
                                    <li> List{'<ENTITY>'} resultList = query.getResultList(); <small> # 결과가 없으면 빈 컬렉션 반환 </small> </li>
                                    <li> ENTITY result = query.getSingleResult(); <small> # 결과가 없거나 결과가 2개이상이면 에러 발생 </small> </li>
                                </div>
                            </li>
                            <li> em.getTransaction().commit(); </li>
                        </div>


                        <h2 className="h2"> 📌 Select </h2>
                        <li> SELECT m FROM User m WHERE m.name =: name <small> # name이라는 파라미터를 넣을 때 </small> </li>
                        <li> SELECT m FROM User m where m.name = ?1 <small> # 첫번째 파라미터에 name을 넣을 때 </small> </li>
                        <li> SELECT u.name FROM User u <small> # 프로젝션으로 반환값은 {'List<String> name'} 처럼 컬럼값을 반환한다. </small> </li>

                        <h2 className="h2"> 📌 Insert </h2>
                        <li>  </li>
                        <li>  </li>

                        <h2 className="h2"> 📌  </h2>
                        <li>  </li>
                        <li>  </li>

                        <h2 className="h2"> 📌 Delete </h2>
                        <li>  </li>
                        <li>  </li>


                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈 </h3>
                                    <li>  </li>
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> QueryDSL (설명x) </summary>
                    <div className='block2'>

                        {/*<h2 className="h2"> 📌 설명 </h2> 
                         <li> 1 </li> 
                         <li> 2 </li> 
                         <li> 3 </li> 
                  
                         <h2 className="h2"> 📌 장점, 단점 </h2> 
                         <li> 장점 : </li> 
                         <li> 단점 : </li> 
                  
                         <h2 className="h2"> ✔ 예시 </h2> 
                         <li> 소제목 
                             <div className='block3'> 
                                <h3 className="h3"> 🎈 </h3> 
                                    <div className='block4'> 
                                    <li>  </li> 
                                    </div> 
                             </div> 
                         </li> */}

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Entity와 DB컬럼 타입 </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> Long
                            <div className="block4">
                                <p> 오라클 : NUMBER(19,0) </p>
                            </div>
                        </li> <br />
                        <li> Boolean
                            <div className="block4">
                                <p> 오라클 : NUMBER(1,0) <small> # true=1 , false=0 </small> </p>
                            </div>
                        </li> <br />
                        <li> String
                            <div className="block4">
                                <p> 오라클 : VARCHAR2(255 CHAR) </p>
                            </div>
                        </li> <br />
                        <li> Int
                            <div className="block4">
                                <p> 오라클 : NUMBER(10,0) </p>
                            </div>
                        </li> <br />
                        <li> LocalDateTime <small> # Java8부터 , JPA버전이 API를 지원하는지 확인 </small>
                            <div className="block4">
                                <p> 오라클 : TIMESTAMP(6)  <small> # 21/10/26 10:46:46.397863000 </small> </p>
                            </div>
                        </li> <br />
                        <li> LocalDate <small> #  </small>
                            <div className="block4">
                                <p> 오라클 : TIMESTAMP(6) <small> # 21/10/26 </small> </p>
                            </div>
                        </li> <br />
                        <li> Date <small> # JDK1.0 시절에 사용하던 문자타입, 불편 </small>
                            <div className="block4">
                                <p> 오라클 : TIMESTAMP(6) <small>  </small> </p>
                            </div>
                        </li> <br />
                        <li> Calender <small> # 비용이 비싸고, 이것도 불편  </small>
                            <div className="block4">
                                <p>  </p>
                            </div>
                        </li> <br />

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @JoinTable @JoinColumn @ManyToOne @OneToOne @OneToMany @ManyToMany </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 @JoinTable 속성  </h2>
                        <li> 조인테이블을 만들어서 연관관계를 설정하는 방법 </li>
                        <li> name : </li>
                        <li> joinColumns : <small> # 현재 엔티티를 참조하는 외래키 </small> </li>
                        <li> inverseJoinColumns : <small> # 다른 엔티리를 참조하는 외래키 </small> </li>
                        <div className="block4">
                            <li> @JoinTable(
                                <li> name="client_role", <small> 매핑 테이블의 테이블명 </small> </li>
                                <li> joinColumns = @JoinColumn(name = "client_id"), <small> 현재 엔티티의 컬럼명(default: 엔티티명_필드명) ,client테이블의 id를 외래키로 하여 현재 엔티티를 참조 </small> </li>
                                <li> inverseJoinColumns = @JoinColumn(name = "role_id") <small> 참조 엔티티의 컬럼명(default: 엔티티명_필드명) ,role테이블의 id를 외래키로 하여 다른 엔티티를 참조 </small> </li>
                            </li>
                        </div>

                        <h2 className="h2"> 📌 @JoinColumn 속성 </h2>
                        <li> 외래키 매핑할 때 사용 </li>
                        <li> name : 매핑할 외래키 명 , default = 필드명_참조테이블기본키컬럼명 <small> # name_refname </small> </li>
                        <li> referencedColumnName : 외래키가 참조하는 테이블의 컬럼명 </li>
                        <li> foreignKey(DDL) : 외래키 제약조건을 직접 작성, 테이블생성시에만 가능? </li>
                        <li> unique, nullable, insertable, updatable, columnDefinition, table </li>

                        <h2 className="h2"> 📌 @ManyToOne 속성 </h2>
                        <li> Many쪽에서 @JoinTable을 선언 </li>
                        <li> optional=false (객체에 null이 들어갈수 있음, inner join) , optional=true(default값) (객체에 null이 들어갈 수 없음, outer join) </li>
                        <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                        <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>

                        <h2 className="h2"> 📌 @ManyToOne 속성 </h2>
                        <li> Many쪽에서 @JoinTable을 선언 </li>
                        <li> optional=false (객체에 null이 들어갈수 있음, inner join) , optional=true(default값) (객체에 null이 들어갈 수 없음, outer join) </li>
                        <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                        <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>

                        <h2 className="h2"> 📌 @OneToOne 속성 </h2>
                        <li> optional=false (객체에 null이 들어갈수 있음) , optional=true (객체에 null이 들어갈 수 없음) </li>
                        <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                        <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>
                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                            <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                            <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                            <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                            <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                        </li>
                        <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>

                        <h2 className="h2"> 📌 @OneToMany 속성 </h2>
                        <li> Many쪽에서 @JoinTable을 선언 </li>
                        <li> fetch=FetchType.EAGER : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                        <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                            <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                            <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                            <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                            <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                        </li>
                        <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>


                        <h2 className="h2"> 📌 @ManyToMany(mappedBy="") 속성 </h2>
                        <li> mappedBy : 참조하고 있는 다른엔티티의 필드명을 적어서 매핑 </li>
                        <li> optional=false (외부조인) , optional=true (외부조인) </li>
                        <li> fetch=FetchType.EAGER : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                            반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
                        <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
                        <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                            <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
                            <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                            <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                            <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
                            <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                            <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                        </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className="h3"> 🎈 Board </h3>
                                <div className='block4'>
                                    <li> @Table(name="board") </li>
                                    <li> public class Board {'{'}
                                        <li>  @Id </li>
                                        <li>  @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                        <li>  @Column(name="id") </li>
                                        <li>  private Long id; </li>
                                        <li>  </li> <br />
                                        <li> @ManyToOne </li>
                                        <li> @JoinColumn(name="client_id") <small> # 참조할테이블명_컬럼명 </small> </li>
                                        <li> private Client client; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                                <h3 className="h3"> 🎈 Client </h3>
                                <div className='block4'>
                                    <li> @Table(name="client") </li>
                                    <li> public class Client {'{'}
                                        <li>  @Id </li>
                                        <li>  @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                        <li>  private Long id; </li>
                                        <li>  </li> <br />

                                        <li> {'  @ManyToMany(fetch=FetchType.LAZY, cascade = { '}
                                            <li> {'CascadeType.PERSIST, '} </li>
                                            <li> {'CascadeType.MERGE '} </li>
                                        </li>
                                        <li> {'  }) '} </li>
                                        <li> {'  @JoinTable( '}
                                            <li> {'name="client_role", '} </li>
                                            <li> {'joinColumns = @JoinColumn(name = "client_id"), '} </li>
                                            <li> {'inverseJoinColumns = @JoinColumn(name = "role_id")) '} </li>
                                        </li>
                                        <li> {'  private Set<Role> roles = new HashSet<Role>(); '} </li>
                                        <li>  </li> <br />

                                        <li> {'  @OneToMany(mappedBy="client") '} </li>
                                        <li> {'  private Set<Board> boards = new HashSet<Board>(); '} </li>
                                        <li>  </li> <br />
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                                <h3 className="h3"> 🎈 Role </h3>
                                <div className='block4'>
                                    <li> @Id </li>
                                    <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                    <li> private Long id; </li>
                                    <li> private String name; </li>
                                    <li>  </li> <br />

                                    <li> {' @ManyToMany(mappedBy = "roles") '} </li>
                                    <li> {' private Set<Client> clients = new HashSet<Client>(); '} </li>
                                    <li>  </li> <br />

                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @ManyToMany </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> 다대다 관계 매핑 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 : </li>
                        <li> 단점 : </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> Client와 Role을 다대다 매핑한 예시
                            <div className='block3'>
                                <h3 className="h3"> 🎈 Client </h3>
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
                                <h3 className="h3"> 🎈 Role </h3>
                                <li> @Table(name="role") </li>
                                <li> public class Role {'{'}
                                    <li>  </li> <br />
                                    <li> @Id </li>
                                    <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                                    <li> private Long id; </li>
                                    <li> private String name="ROLE_USER"; </li>
                                    <li>  </li> <br />
                                    <li> @ManyToMany(mappedBy="roles") <small> Client(Entity)의 field roles를 참조하여 role_id 컬럼명에 Role 엔티티의 id를  매핑 </small> </li>
                                    <li> private Set{'<Client>'} clients = new HashSet{'<Client>'}(); </li>
                                </li>
                                <li> {'}'} </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @NamedEntityGraph @EntityGraph (좀더 알아볼것) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 @NamedEntityGraph 속성 </h2>
                        <li> 엔티티 클래스 위에 선언을 하여 사용 </li>
                        <li> 엔티티 그래프를 둘 이상 사용할 경우 사용 </li>
                        <li> name="엔티티클래스명.변수명" <small> # 엔티티 그래프 이름을 정의 </small> </li>
                        <li> attributeNodes = @NamedAttributeNode("필드명") <small> # 함께 조회할 속성 선택 </small> </li>
                        <li>  </li>
                        <h2 className="h2"> 📌 @EntityGraph 속성 </h2>
                        <li> Repositoy클래스의 메소드 위에 선언하여 사용 </li>
                        <li> EntityGraph 로딩 정책을 가져와서 적용 </li>
                        <li> fetch가 lazy로 되어있어도 EntityGraph를 이용하면 같이 조회 가능 </li>
                        <li> @EntityGraph(value="엔티티클래스명.변수명") </li>
                        <li> @EntityGraph(attributePaths={'{"AttributeNode에 명시된 필드명"}'}) </li>
                        <li> @EntityGraph("엔티티클래스명.변수명") </li>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className="h3"> 🎈 </h3>
                                <li> @EntityGraph(attributePaths = {'{"엔티티필드명"},'} type = EntityGraph.EntityGraphType.LOAD) </li>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

        </div>
    );
}

export default SpringModel;