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
                        <li> "11.11.11" 👉 LocalDate ❌ </li>
                        <li> "[11.11.11]" 👉 LocalDate ❌ </li>
                        <li> new Date() 👉 LocalTime ❌ </li>
                        <li> "11:11:11" 👉 LocalTime ❌ </li>
                        <li> String 👉 String ✅ , String으로 주면 알아서 변환하기, 빌더패턴 이용해서 스프링에서 바꾸어줘도 된다.(테스트완료) </li>
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
                    <summary> @NonNull @Nullable @NotNull @NotEmpty @NotBlank @Size @Min @Max @Length (미완성)  </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 @NonNull  </h2>
                        <li> 변수 위에 선언 </li>
                        <li> Null을 허용하지 않음 </li>
                        <li> Null이면 NullPointerException발생 </li>

                        <h2 className="h2"> 📌 @Nullable </h2>
                        <li> 변수 위에 선언 </li>
                        <li> null을 허용 </li>

                        <h2 className="h2"> 📌 @NotNull </h2>
                        <li> 변수 위에 선언 </li>
                        <li> Null만 허용하지 않음 </li>
                        <li> Null이면 NullPointerException발생 </li>
                        <li> DB에 SQL쿼리를 보내기전에 엔티티에 값이 잘못 들어가면 ConstraintViolationException예외 발생  </li>
                        <li> SQL쿼리에는 not null 생성 </li>

                        <h2 className="h2"> 📌 @NotEmpty </h2>
                        <li> 변수 위에 선언 </li>
                        <li> Null, 빈문자열("") 불가능 , " " 은 가능 </li>
                        <li> 문자열 검증 용도 </li>
                        <li> String과 Collection 타입에만 적용이 가능하다고 한다. (boolean에는 @NotNull) </li>
                        <li> SQL쿼리에는 not null을 붙여주지 않음 </li>

                        <h2 className="h2"> 📌 @NotBlank </h2>
                        <li> 변수 위에 선언 </li>
                        <li> 문자열 검증 용도 </li>
                        <li> Null, 빈문자열("") , " " 모두 불가능 </li>
                        <li> SQL쿼리에는 not null을 붙여주지 않음 </li>


                        <h2 className="h2"> 📌 @Size </h2>
                        <li> 변수 위에 선언 </li>
                        <li> 최소 최대 지정 </li>
                        <li> 문자열, 배열등의 크기 판단 </li>
                        <li> Bean Validation annotation </li>
                        <div className="block4">
                            <li> @Size(min=1, max=20, message="null에러") </li>
                            <li> private String name; </li>
                        </div>

                        <h2 className="h2"> 📌 @Min @Max </h2>
                        <li> 변수 위에 선언 </li>
                        <li> 최소 최대 지정 </li>
                        <div className="block4">
                            <li> @Min(1) </li>
                            <li> @Max(20) </li>
                            <li> private String name; </li>
                        </div>

                        <h2 className="h2"> 📌 @Length </h2>
                        <li> 변수 위에 선언 </li>
                        <li> 문자열의 길이 판단 </li>
                        <li> Hibernate-specific annotation </li>
                        <div className="block4">
                            <li> @Length(min=5,max=10,message="") </li>
                            <li> private String name; </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> JPA 설명 (내용 보충 필요) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> 1. Java Persistence Aplication , 자바 쪽의 ORM 표준 기술 , 자바에서 제공하는 API
                            <div className="block4">
                                <h3 className="h3"> 🎈 ORM : Object Relational Mapping , 객체 관계 매핑 </h3>
                                <li> ORM 프레임 워크가 자바 객체와 데이터베이스를 분리해서 사용하게 해준다. </li>
                                <li> ORM 프레임 워크가 SQL을 생성해서 DB에 객체를 저장해준다. </li>
                                <li> EJB(과거 자바 ORM) , Hibernate(JPA의 기반 ORM) , Mybatis </li>
                            </div>
                        </li>
                        <li> 2. DB SQL문을 작성하지 않고 JPA가 대신 SQL문을 만들어서 DB에 레코드를 넣어준다. </li>
                        <li> 3. JPA는 JDBC API를 이용하는데 개발자가 직접 사용하면 불편하다. (DB연결,쿼리작성, DB종료 등 DB와 관련된 불편) </li>
                        <li> 4. 영속성 컨텍스트를 이용한다.
                            <div className="block4">
                                <h3 className="h3"> 🎈 Persistence Context </h3>
                                <li> 0. 쓰기지연 SQL 공간 + 1차 캐시 공간(엔티티 저장 공간) </li>
                                <li> 1. Entity를 영구 저장하는 환경 </li>
                                <li> 2. Entity 매니저를 이용해서 Entity를 영속성컨텍스트에 저장하거나 조회한다.  </li>
                                <li> 3. 실제 DB에 저장되기 전에 보관된는 가상의 DB라고 생각하면 된다. </li>
                                <li> 4. 영속성 컨텍스트는 Entity를 식별자로 구분한다. ( 그러므로 식별자를 필수로 넣어주어야 한다.) </li>
                                <li> 5. 영속성 컨텍스트는 Entity의 동일성을 보장한다. ( DB에서 똑같은 레코드를 2번 조회하였을 때 똑같은 인스턴스로 인식
                                    , Mybatis에서는 이와 같이 하면 다르다고 인식하는것 같다.) </li>
                                <li> 6. 트랜잭션을 커밋할 때 실제 DB에 반영되는 flush()를 실행 </li>
                                <li> 7. 캐시 기능이 있어서 JPA는 1차캐시 공간에서 Entity를 먼저 조회하고 없으면 DB에서 조회한다 그리고 그 값을 1차캐시에 저장한다. ( em.find(ENTITY.class,"식별자") )  </li>
                                <li> 8. 지연 기능이 있어서 JPA는 트랜잭션 커밋 전까지 쿼리를 내부 쿼리 저장소에 모아두고 커밋할 때 실제 DB에 반영한다.
                                    <div className="block4">
                                        <li> transaction.begin(); <small> 트랜잭션 시작 </small> </li>
                                        <li> transaction.commit(); <small> 트랜잭션 끝 </small> </li>
                                    </div>
                                </li>
                                <li> 9. 트랜잭션이 커밋 되기전에 먼저 flush()로 이전 스냅샷과 변경 Entity를 비교하고 쓰기 지연 저장소에 SQL을 보관하였다가 flush()를 하고
                                    DB 트랜잭션 커밋을 수행한다. </li>  <br />

                                <h3 className="h3"> 🎈 Persistence Context의 Entity 상태 </h3>
                                <li> 1. 영속 : 영속성 컨텍스트에 Entity가 저장된 상태 ( em.persist(ENTITY명) ) </li>
                                <li> 2. 비영속 : 영속성 컨텍스트와 Entity가 상관이 없는 상태 </li>
                                <li> 3. 준영속 : 영속성 컨텍스트에서 잠깐 분리되어 있는 상태, 식별자는 존재 그러나 어떠한 행위도 할 수 없음 ( em.detach(ENTITY명) , em.clear() , em.close() ) </li>
                                <li> 4. 삭제 : 영속성 컨텍스트와 DB에서 삭제 ( em.remove(ENTITY명) )  </li>
                            </div>
                        </li>
                        <li> 5. JPA는 JDBC API를 사용해서 SQL을 이용해 DB의 데이터를 조회한다 </li>
                        <li> 6. 쿼리를 사용하는 방법은 JPQL, 네이티브 SQL, JDBC API, MyBatis , QuertDSL , JPA Criteria 등이 있다. </li>
                        <li> 7. JPA를 사용하면 특정 DB에 쿼리가 종속되지 않는다는 점이 있다. </li>
                        <li> 8. JPA에서는 DB의 레코드의 필드값을 EntityManager를 이용해서 1개만 수정하면
                            1개만 수정하는 것이 아니라 레코드 전체를 업데이트하는 쿼리를 작성해서 보낸다(기본) </li>

                        <h2 className="h2"> 📌 JPA 실행과정(대략적인 설명, 완벽하지는 않음)  </h2>
                        <li> 1. 자바 Entity 클래스를 생성 </li>
                        <li> 2. Entity를 영속성 컨텍스트에 등록 </li>
                        <li> 3. Entity에 값을 넣어서 insert를 트랜잭션에 넣고 커밋을 실행 </li>
                        <li> 4. 영속성 컨테스트는 이전 스냅샷과 변경되는 Entity를 비교(flush)하고
                            SQL을 쓰기 지연 저장소에 보관하였다가 쿼리를 실행하여 실제 DB에 저장 </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 :
                            <div className="block4">
                                <li> 1. DB쿼리를 작성하지 않아도 된다는 점이 좋다. ( 생산성 증가 ) </li>
                                <li> 2. 개발자가 DB개발이 아닌 어플리케이션 개발에 집중을 할 수 있도록 도와준다. </li>
                                <li> 3. 쿼리를 직접 입력하지 않으니 쿼리 작성 실수가 줄어들고 , 객체와 메소드만 보아도 알 수 있어서 가독성이 좋아진다.  </li>
                                <li> 4. Mysql, OracleDB 등 여러 DB를 사용해도 기존 Entity객체를 변경할 필요가 없기 때문에 객체 재사용성도 좋다. </li>
                                <li> 5. 캐싱 기능이 존재하여 똑같은 쿼리를 기억하고 있다가 다시 생성하지 않고 재사용을 한다. </li>
                                <li> 6. 지연 기능이 존재하여 쿼리를 잠시 보관하고 있다가 나중에 한꺼번에 쿼리를 실행할 수 있다. </li>
                                <li> 7. 특정 DB에 쿼리가 종속되지 않아서 좋다. </li>
                            </div>
                        </li>
                        <li> 단점 :
                            <div className="block4">
                                <li> 1. JPA 문법을 익히는데 시간이 걸린다. </li>
                                <li> 2. 실제 업무에서는 JPA만을 이용해서 코드를 작성하기 어렵다. (JPQL이라는 쿼리를 작성해서 사용하는 방법이 존재) </li>
                                <li> 3. JPA가 단순한 내용은 쉽지만 복잡한 쿼리 작성등 큰 프로젝트에서는 오히려 쿼리를 작성하는 것보다 어려울수 있따. </li>
                                <li> 4. 코드를 잘못 작성하면 속도  </li>
                                <li> 2.  </li>
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
                    <summary> DTO (내용 보충 필요) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> Layer와 Layer사이에서 데이터를 교환하는 객체(DB Layer에서만 사용x)</li>
                        <li> 로직을 가지지 않고 getter , setter로 운반만 하는 역할 </li>
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
                    <summary> Spring Data JPA </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <div> ENTITY findByFieldname(String FIELDNAME) (대표예시)
                            <li> <small> select m from ENTITY m where m.FIELDNAME = ?1 </small> </li>
                        </div>

                        <div> {' List<ENTITY> findAll() '}
                            <li> <small> select m from ENTITY m; </small> </li>
                        </div>

                        <div> findByFieldname1AndFieldname2(String FIELDNAME1, String FIELDNAME2)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1 and m.FIELDNAME2 = ?2; </small> </li>
                        </div>

                        <div> findByFieldname1OrFieldname2(String FIELDNAME1, String FIELDNAME2)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1 or m.FIELDNAME2 = ?2; </small> </li>
                        </div>

                        <div> findDistinctByFieldname1
                            <li> <small> select m distinct from ENTITY m where m.FIELDNAME1 = ?1; </small> </li>
                        </div>

                        <div> findByFieldnameIs(String name)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1; </small> </li>
                        </div>

                        <div> findByFieldnameEquals(String name)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1; </small> </li>
                        </div>

                        <div> findByFieldnameBetween(num start, num end)
                            <li> <small> select m from ENTITY m where m.FIELDNAME between ?1 and ?2 </small> </li>
                        </div>

                        <div> findByFieldnameGreaterThan(String num)
                            <li> <small> select m from ENTITY m where m.FIELDNAME {'>'} ?1 </small> </li>
                        </div>

                        <div> findByFieldnameGreaterThanEqual(String num)
                            <li> <small> select m from ENTITY m where m.FIELDNAME {'>='} ?1 </small> </li>
                        </div>

                        <div> findByFieldnameLessThan(String num)
                            <li> <small> select m from ENTITY m where m.FIELDNAME {'<'} ?1</small> </li>
                        </div>

                        <div> findByFieldnameLessThanEqual(String num)
                            <li> <small> select m from ENTITY m where m.FIELDNAME {'<='} ?1 </small> </li>
                        </div>

                        <div> findByFieldNameNotLike(String word);
                            <li> <small> select m from ENTITY m where m.FIELDNAME not like '?1'  </small> </li>
                        </div>

                        <div> findByFieldNameLike(String word);
                            <li> <small> select m from ENTITY m where m.FIELDNAME like '?1'  </small> </li>
                        </div>

                        <div> findByFieldNameStartingWith(String word);
                            <li> <small> select m from ENTITY m where m.FIELDNAME like '%?1' </small> </li>
                        </div>

                        <div> findByFieldNameEndingWith(String word);
                            <li> <small> select m from ENTITY m where m.FIELDNAME like '?1%' </small> </li>
                        </div>

                        <div> findByFieldNameContaining(String word);
                            <li> <small> select m from ENTITY m where m.FIELDNAME like '%?1%' </small> </li>
                        </div>

                        <div> findByFieldname1ByFieldname2Desc(String FIELDNAME1)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1 order by m.FIELDNAME2 desc </small> </li>
                        </div>

                        <div> findByFieldname1ByFieldname2Asc(String FIELDNAME1)
                            <li> <small> select m from ENTITY m where m.FIELDNAME1 = ?1 order by m.FIELDNAME2 asc </small> </li>
                        </div>

                        <div> deleteById(String FIELDNAME)
                            <li> <small> delete from ENTITY where FIELDNAME = ?1  </small> </li>
                        </div>

                        <div> 1. 어노테이션 방식(Repository JPA 쿼리 메소드 위에)
                            <li> @Query("select m from Member m") <small> # 사용자 쿼리 작성 </small> </li>
                        </div>

                        <div> 2. 순수 sql 쿼리(Repository JPA 사용자 쿼리 메소드 위에)
                            <li> @Query(value="select * from Member m",nativeQuery = true) </li>
                        </div>

                        <h2 className="h2"> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈Repository 클래스 예시 </h3>
                                    <div className="block4" style={{ listStyle: "none" }}>
                                        <li> @Repository </li>
                                        <li> public interface Repository명 extends JpaRepository{'<User,Long> {'}
                                            <li> <small> # ID타입 : Long, Integer, String 등이 있다.</small>  </li>
                                            <li> public User findByName(String name); </li> <br />

                                            <li> @Query("select m from User m where m.username = ?1") </li>
                                            <li> public User findByUsername(String username) </li>
                                            <li>  </li>
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