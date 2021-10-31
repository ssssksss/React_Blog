import React, { useEffect, useRef } from 'react';

const HtmlTest = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> JPA 설명 (내용 보충 필요) </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1. Java Persistence Aplication , 자바 쪽의 ORM 표준 기술 , 자바에서 제공하는 API
                                <div className="block4">
                                    <h3> 🎈 ORM : Object Relational Mapping , 객체 관계 매핑 </h3>
                                    <li> ORM 프레임 워크가 자바 객체와 데이터베이스를 분리해서 사용하게 해준다. </li>
                                    <li> ORM 프레임 워크가 SQL을 생성해서 DB에 객체를 저장해준다. </li>
                                    <li> EJB(과거 자바 ORM) , Hibernate(JPA의 기반 ORM) , Mybatis </li>
                                </div>
                            </li>
                            <li> 2. DB SQL문을 작성하지 않고 JPA가 대신 SQL문을 만들어서 DB에 레코드를 넣어준다. </li>
                            <li> 3. JPA는 JDBC API를 이용하는데 개발자가 직접 사용하면 불편하다. (DB연결,쿼리작성, DB종료 등 DB와 관련된 불편) </li>
                            <li> 4. 영속성 컨텍스트를 이용한다.
                                <div className="block4">
                                    <h3> 🎈 Persistence Context </h3>
                                    <li> 1. Entity를 영구 저장하는 환경 </li>
                                    <li> 2. Entity 매니저를 이용해서 Entity를 영속성컨텍스트에 저장하거나 조회한다.  </li>
                                    <li> 3. 실제 DB에 저장되기 전에 보관된는 가상의 DB라고 생각하면 된다. </li>
                                    <li> 4. 영속성 컨텍스트는 Entity를 식별자로 구분한다. ( 그러므로 식별자를 필수로 넣어주어야 한다.) </li>
                                    <li> 5. 영속성 컨텍스트는 Entity의 동일성을 보장한다. ( DB에서 똑같은 레코드를 2번 조회하였을 떄 똑같은 인스턴스로 인식
                                        , Mybatis에서는 이와 같이 하면 다르다고 인식하는것 같다.   ) </li>
                                    <li> 6. 트랜잭션을 커밋할 때 실제 DB에 반영되는 flush()를 실행 </li>
                                    <li> 7. 캐시 기능이 있어서 JPA는 1차캐시 공간에서 Entity를 먼저 조회하고 없으면 DB에서 조회한다 그리고 그 값을 1차캐시에 저장한다. ( em.find(ENTITY.class,"식별자") )  </li>
                                    <li> 8. 지연 기능이 있어서 JPA는 트랜잭션 커밋 전까지 쿼리를 내부 쿼리 저장소에 모아두고 커밋할 떄 실제 DB에 반영한다.
                                        <div className="block4">
                                            <li> transaction.begin(); <small> 트랜잭션 시작 </small> </li>
                                            <li> transaction.commit(); <small> 트랜잭션 끝 </small> </li>
                                        </div>
                                    </li>
                                    <li> 9. 트랜잭션이 커밋 되기전에 먼저 flush()로 이전 스냅샷과 변경 Entity를 비교하고 쓰기 지연 저장소에 SQL을 보관하였다가 flush()를 하고
                                        DB 트랜잭션 커밋을 수행한다. </li>  <br />

                                    <h3> 🎈 Persistence Context의 Entity 상태 </h3>
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

                            <h2> 📌 JPA 실행과정(대략적인 설명, 완벽하지는 않음)  </h2>
                            <li> 1. 자바 Entity 클래스를 생성 </li>
                            <li> 2. Entity를 영속성 컨텍스트에 등록 </li>
                            <li> 3. Entity에 값을 넣어서 insert를 트랜잭션에 넣고 커밋을 실행 </li>
                            <li> 4. 영속성 컨테스트는 이전 스냅샷과 변경되는 Entity를 비교(flush)하고
                                SQL을 쓰기 지연 저장소에 보관하였다가 쿼리를 실행하여 실제 DB에 저장 </li>

                            <h2> 📌 장점, 단점 </h2>
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
                        <summary> Entity (내용 보충 필요) </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> DB와 매핑되는 클래스 객체 </li>
                            <li> DB테이블에 들어간 컬럼들을 작성 </li>
                            <li> DB테이블하고 매핑이 되므로 변경이 되지 않게 해야한다. </li>
                            <li> Setter 메소드를 사용하지 말고 Builder로 생성자를 만들어서 사용한다. </li>
                            <li>  </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
                                        <li>  </li>
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

                            <h2> 📌 설명 </h2>
                            <li> Layer와 Layer사이에서 데이터를 교환하는 객체(DB Layer에서만 사용x)   </li>
                            <li> 로직을 가지지 않고 getter , setter로 운반만 하는 역할 </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
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

                            <h2> 📌 설명 </h2>
                            <li> Value Object </li>
                            <li> VO는 메모리 주소 참조와 관련이 있는데   </li>
                            <li> equals() 와 hashcode() 메소드를 사용 </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
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

                            <h2> 📌 설명 </h2>
                            <li> 직접 JDBC를 Connection으로 연결하고 쿼리를 작성해서 넣어주고 excute를 재주고 연결도 끊어주어야 하는 방법(불편) </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 코드 설명 </h2>
                            <li>  </li>
                            <li> sql = "쿼리작성"; </li>
                            <li> pstmt.executeUpdate(sql); </li>
                            <li> ResultSet rs = stmt.executeQuery(sql); <small> #  </small> </li>
                            <li>  </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
                                        <li>  </li>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> JPA </summary>
                        <div className='block2'>

                            <h2> 📌 EntityManagerFactory </h2>
                            <li> 비용이 비싸서 어플리케이션에서 1개만 만들어서 사용 </li>
                            <li> 여러 스레드가 동시에 접근이 가능, 스레드끼리 공유가 가능 </li>
                            <li> 어플리케이션이 종료되기전에 닫아주어야 한다. </li>
                            <li>  </li>
                            <div className="block4">
                                <li> EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpabook"); </li>
                                <li>  </li>
                            </div>

                            <h2> 📌 EntityManager </h2>
                            <li> 여러 스레드가 동시에 접근이 불가능 </li>
                            <li> 스레드간 공유 불가능 </li>
                            <li> 사용자의 요청에 1개씩 만들어짐 </li>
                            <li> 만들어지는 비용이 비싸지는 않지만 닫아주어야 한다. </li>
                            <div className="block4">
                                <li> EntityManager em = emf.createEntityManager(); </li>
                                <li>  </li>
                            </div>

                            <h2> 📌 Persistence Context  </h2>
                            <li> Entity를 저장하는 환경 </li>
                            <li> 논리적인 개념에 가까움   </li>
                            <li> Persistence Context에 EntityManager가 접근하여 Entity를 관리한다.  </li>
                            <div className="block4">
                                <li> em.persist(ENTITY_INSTANCE) <small> # 영속성 상태로 만듬 </small> </li>
                                <li> em.detach(ENTITY_INSTANCE) <small> # 영속상태를 준영속상태로 만듬 </small> </li>
                                <li> em.clear() <small> # Persistence Context 초기화 </small> </li>
                                <li> em.close() <small> # Persistence Context 닫음 </small> </li>
                                <li> em.merge() </li>
                                <li> em.remove(ENTITY_INSTANCE) <small> # 비영속 상태로 만듬 - flush() - DB에서 삭제 </small> </li>
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
                                <li> em.createQuery("SQL_QUERY").getResultList(); </li>
                                <li> em.getTransaction().commit(); </li>
                            </div>

                            <h2> 📌  </h2>
                            <li>  </li>

                            <h2> 📌  </h2>
                            <li>  </li>

                            <h2> 📌  </h2>
                            <li>  </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
                                        <li>  </li>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> JPQL(알아볼 것) </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
                                        <li>  </li>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Spring Data JPA </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                            <h2> 📌 장점, 단점 </h2>
                            <li> 장점 : </li>
                            <li> 단점 : </li>

                            <h2> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <li> <h3> 🎈 </h3>
                                        <li>  </li>
                                    </li> <br />
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default HtmlTest;