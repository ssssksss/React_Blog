import React from 'react';

const SpringJpa = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [1] @Query(쿼리작성,nativeQuery = true) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 select </h2>
            <div className='block4'>
              <li> select</li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 Update, Insert </h2>
            <div className='block4'>
              <li> {` @Modifying `} </li>
              <li> {`  @Query(value = "insert into first_category (id,name,href,line,position) VALUES (0,:name,:href,:line," + `}
                <li> {` "(select count(temp.position)+1 from (select * from first_category where line = :line) as temp))", nativeQuery = true) `} </li>
              </li>
              <li> {`  @Transactional `} </li>
              <li> {`  void saveFirstCategory( `}
                <li> {`  @Param("name") String name, `} </li>
                <li> {`  @Param("href") String href, `} </li>
                <li> {`  @Param("line") int line `} </li>
              </li>
              <li> {` ); `} </li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] @Query(쿼리작성) - JPQL </summary>
          <div className='block2'>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 Read </h2>
            <div className='block4'>
              <li> @Query("select t from table명 t"); <small> 모든 필드 조회 </small> </li>
              <li> {' List<User> 커스텀메소드명(); '} </li>
              <li> @Query("select t from table명 t where t.name = %?1%"); <small> 매개변수 위치와 일치하는 모든 필드 조회(비추천) </small> </li>
              <li> {' List<User> 커스텀메소드명(String name); '} </li>
              <li> @Query("select t from table명 t where t.name = :=name"); <small> 매개변수 이름과 일치하는 모든 필드 조회(추천) </small> </li>
              <li> {' List<User> 커스텀메소드명(@Param("name") String name); '} </li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 쿼리 메소드(나중에 수정) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Create </h2>
            <div className="block4">
              <li></li>
              <li> </li>
            </div>

            <h2 className='h2'> 📌 Read </h2>
            <div className="block4">
              <li> 엔티티 한개를 조회 <small> null예외 발생하지않음, eager-loading, 파라미터는 null이 아니어야 한다. , EntityManager.find()를 호출</small> </li>
              <li className='command'> 엔티티객체 findOne(String fieldname)</li>
              <li> 엔티티를 프록시로 조회 <small> null예외 발생, lazy-loading, 파라미터는 null이 아니어야 한다. , EntityManager.getReference()를 호출</small> </li>
              <li className='command'> 엔티티객체 getOne(String fieldname) </li>
              <li> 1개의 조건을 만족하는 필드 조회 </li>
              <li className='command'> 엔티티객체 findByFieldname(String fieldname) </li>
              <li> 2개의 조건을 만족하는 필드 조회 </li>
              <li className='command'> findByFieldname1AndFieldname2(String fieldname1, String fieldname2) </li>
              <li> 2개중 1개의 조건을 만족하는 필드 조회 </li>
              <li className='command'> findByFieldname1OrFieldname2(String fieldname1, String fieldname2) </li>
              <li> 모든 필드 조회 </li>
              <li className='command'> {" List<엔티티객체> findAll() "} </li>
              <li> 중복제거해서 조회 </li>
              <li className='command'> findDistinctByFieldname1 </li>
              <li> 객체가 없어도 에러 발생하지 않음</li>
              <li className='command'> {"Optional<User> findByEmail(String email); "} </li>
              <li> 값을 조회해서 불린값으로 리턴 </li>
              <li className='command'> Boolean existsByEmail(String email);</li>
              <li></li>
            </div>
            <h2 className='h2'> 📌 Update </h2>
            <div className="block4">
              <li> 업데이트는 sava() 함수를 사용하면 된다. </li>
              <li></li>
              <li></li>
            </div>
            <h2 className='h2'> 📌 Delete </h2>
            <div className="block4">
              <li> </li>
              <li> </li>
            </div>
            <h2 className='h2'> 📌 authority Create </h2>
            <div className="block4">
              <li> </li>
              <li> </li>
            </div>
            <h2 className='h2'> 📌 authority Read </h2>
            <div className="block4">
              <li> </li>
              <li> </li>
            </div>
            <h2 className='h2'> 📌 authority Update </h2>
            <div className="block4">
              <li> </li>
              <li> </li>
            </div>
            <h2 className='h2'> 📌 authority Delete </h2>
            <div className="block4">
              <li> </li>
              <li> </li>
            </div>

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
              <li> <small> select m from ENTITY m where m.FIELDNAME not like '?1'</small> </li>
            </div>

            <div> findByFieldNameLike(String word);
              <li> <small> select m from ENTITY m where m.FIELDNAME like '?1'</small> </li>
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
              <li> <small> delete from ENTITY where FIELDNAME = ?1</small> </li>
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
                      <li> <small> # ID타입 : Long, Integer, String 등이 있다.</small></li>
                      <li> public User findByName(String name); </li> <br />

                      <li> @Query("select m from User m where m.username = ?1") </li>
                      <li> public User findByUsername(String username) </li>
                      <li></li>
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
                <li> 2. Entity 매니저를 이용해서 Entity를 영속성컨텍스트에 저장하거나 조회한다.</li>
                <li> 3. 실제 DB에 저장되기 전에 보관된는 가상의 DB라고 생각하면 된다. </li>
                <li> 4. 영속성 컨텍스트는 Entity를 식별자로 구분한다. ( 그러므로 식별자를 필수로 넣어주어야 한다.) </li>
                <li> 5. 영속성 컨텍스트는 Entity의 동일성을 보장한다. ( DB에서 똑같은 레코드를 2번 조회하였을 때 똑같은 인스턴스로 인식
                  , Mybatis에서는 이와 같이 하면 다르다고 인식하는것 같다.) </li>
                <li> 6. 트랜잭션을 커밋할 때 실제 DB에 반영되는 flush()를 실행 </li>
                <li> 7. 캐시 기능이 있어서 JPA는 1차캐시 공간에서 Entity를 먼저 조회하고 없으면 DB에서 조회한다 그리고 그 값을 1차캐시에 저장한다. ( em.find(ENTITY.class,"식별자") )</li>
                <li> 8. 지연 기능이 있어서 JPA는 트랜잭션 커밋 전까지 쿼리를 내부 쿼리 저장소에 모아두고 커밋할 때 실제 DB에 반영한다.
                  <div className="block4">
                    <li> transaction.begin(); <small> 트랜잭션 시작 </small> </li>
                    <li> transaction.commit(); <small> 트랜잭션 끝 </small> </li>
                  </div>
                </li>
                <li> 9. 트랜잭션이 커밋 되기전에 먼저 flush()로 이전 스냅샷과 변경 Entity를 비교하고 쓰기 지연 저장소에 SQL을 보관하였다가 flush()를 하고
                  DB 트랜잭션 커밋을 수행한다. </li><br />

                <h3 className="h3"> 🎈 Persistence Context의 Entity 상태 </h3>
                <li> 1. 영속 : 영속성 컨텍스트에 Entity가 저장된 상태 ( em.persist(ENTITY명) ) </li>
                <li> 2. 비영속 : 영속성 컨텍스트와 Entity가 상관이 없는 상태 </li>
                <li> 3. 준영속 : 영속성 컨텍스트에서 잠깐 분리되어 있는 상태, 식별자는 존재 그러나 어떠한 행위도 할 수 없음 ( em.detach(ENTITY명) , em.clear() , em.close() ) </li>
                <li> 4. 삭제 : 영속성 컨텍스트와 DB에서 삭제 ( em.remove(ENTITY명) )</li>
              </div>
            </li>
            <li> 5. JPA는 JDBC API를 사용해서 SQL을 이용해 DB의 데이터를 조회한다 </li>
            <li> 6. 쿼리를 사용하는 방법은 JPQL, 네이티브 SQL, JDBC API, MyBatis , QuertDSL , JPA Criteria 등이 있다. </li>
            <li> 7. JPA를 사용하면 특정 DB에 쿼리가 종속되지 않는다는 점이 있다. </li>
            <li> 8. JPA에서는 DB의 레코드의 필드값을 EntityManager를 이용해서 1개만 수정하면
              1개만 수정하는 것이 아니라 레코드 전체를 업데이트하는 쿼리를 작성해서 보낸다(기본) </li>

            <h2 className="h2"> 📌 JPA 실행과정(대략적인 설명, 완벽하지는 않음)</h2>
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
                <li> 3. 쿼리를 직접 입력하지 않으니 쿼리 작성 실수가 줄어들고 , 객체와 메소드만 보아도 알 수 있어서 가독성이 좋아진다.</li>
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
                <li> 4. 코드를 잘못 작성하면 속도</li>
                <li> 2.</li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Spring Data JPA Repository 설명(정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className='h2'> 📌 메서드 정의 </h2>
            <li> 리턴타입 접두어|도입부By프로퍼티표현식|조건식|And,Or|프로퍼티표현식|조건식|정렬조건|매개변수 </li>
            <div className="block4">
              <li> find, get, query. count </li>
              <li> Distinct, First, Top </li>
              <li> Persion, Address, ZipCode </li>
              <li> IgnoreCase, Between, LessThan, GreaterThan, Like, Contains </li>
              <li> OrderBy프로퍼티(Asc,Desc) </li>
              <li> Pageable, Sort </li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @JoinColumn, @JoinColumns, @JoinTable</summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @JoinColumn 속성 </h2>
            <li> name: 매핑할 FK <small> 참조할테이블명_참조테이블의PK </small> </li>
            <li> referencedColumnName : 참조테이블의 기본키 컬럼명 </li>
            <li> foreignKey :</li>
            <li> unique, nullable insertable updatable columnDefinition table </li>

            <h2 className='h2'> 📌 @JoinColumns </h2>
            <li> JoinColumn을 여러개 사용할 경우 사용방법 </li>
            <li> @JoinColumns{"({"}
              <li> @JoinColumn(), </li>
              <li> @JoinColumn() </li>
            </li>
            <li> {"})"} </li>

            <h2 className='h2'> 📌 @JoinTable </h2>
            <li> 중간 테이블을 만듬, 한곳에서만 선언하면 다른 쪽에서는 mappedBy같이 추가적으로 정의할 필요가 없다. </li>
            <li> @OneToMany에서 정의하고 반대 테이블에서 @ManyToOne 사용 , 반대의 경우 @OneToMany사용하지 않음</li>
            <li> @JoinTable(name="현재테이블_참조테이블", joinColumns = @JoinColumn(name="현재테이블_PK",
              inverseJoinColumns = @JoinColumn(name="참조테이블_PK"))) </li>
            <li></li>

            <h2 className='h2'> 📌</h2>
            <li></li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <h3 className='h3'> 🎈 </h3>
              <div className='block4'>
                <li></li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @OneToOne </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li></li>

            <h2 className="h2"> 📌 @OneToOne 속성 </h2>
            <div className="block4">
              <li> optional=false(내부조인, 객체에 null이 들어갈수 있음) , optional=true(외부조인, 객체에 null이 들어갈 수 없음, default) </li>
              <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
                반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
              <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>
              <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                <div className="block4">
                  <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장<small> # 좀더 알아볼것 </small> </li>
                  <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
                  <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
                  <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.<small> # </small> </li>
                  <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
                  <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
                </div>
              </li>
              <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 Table1 </h3>
                <div className='block4'>
                  <li> @OneToOne </li>
                  <li> @JoinColumn(name="참조할테이블명_컬럼명") <small> FK필드로 다른테이블의 참조키 </small></li>
                  <li> private Table2 table2</li>
                </div>
                <h3 className='h3'> 🎈 Table2 </h3>
                <div className='block4'>
                  <li> @OneToOne(mappedBy="table2") <small> 다른 테이블에 JoinColumn한 변수명을 적어주면된다. </small> </li>
                  <li> private Table1 table1 </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @OneToMany </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className="h2"> 📌 @OneToMany 속성 </h2>
            <li> Many쪽에서 @JoinTable을 선언 </li>
            <li> fetch=FetchType.EAGER : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
              반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
            <li> optional=false(외부조인, 객체에 null이 들어갈수 있음, default) , optional=true(외부조인, 객체에 null이 들어갈 수 없음) </li>
            <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
            <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
              <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장<small> # 좀더 알아볼것 </small> </li>
              <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
              <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
              <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.<small> # </small> </li>
              <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
              <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
            </li>
            <li> orphanRemoval = [true, false] : true로 하면 엔티티의 연관관계가 끊어졌을때 끊어진 고아 엔티티를 삭제 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 Table1 </h3>
                <div className='block4'>
                  <li> @OneToMany </li>
                  <li> @JoinColumn(name="참조할테이블명_컬럼명") </li>
                  <li> {" private List<Team> team = new ArrayList<>(); "} </li>
                </div>
                <h3 className='h3'> 🎈 Table2 </h3>
                <div className='block4'>
                  <li></li>
                  <li></li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> @ManyToOne </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li></li>

            <h2 className='h2'> 📌 @ManyToOne 속성 </h2>
            <li> optional=false(내부조인, 객체에 null이 들어갈수 있음) , optional=true(외부조인, 객체에 null이 들어갈 수 없음, default) </li>
            <li> fetch : FetchType.EAGER(default) <small> FetchType.EAGER, FetchType.LAZY </small> </li>
            <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
              <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장<small> # 좀더 알아볼것 </small> </li>
              <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
              <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
              <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.<small> # </small> </li>
              <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
              <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
            </li>
            <li> targetEntity : 연관된 엔티티의 타입 정보를 설정?? 뭐지? </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li></li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      {/* 끝 */}


    </div>
  );
}

export default SpringJpa;