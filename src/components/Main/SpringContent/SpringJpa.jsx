import React from 'react';

const SpringJpa = (props) => {

    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ JPA(Java Persistence API) <a name="JPA(Java Persistence API)" style={{ visibility: "hidden" }}> JPA(Java Persistence API) </a> </summary>
                            <span className="sblock">
                                <li> <small> 자바의 영속성 관리와 ORM을 위한 표준 기술  </small> </li>
                                <li> <small> DBMS가 바뀌어도 타입 등을 변경할 필요가 없다는 장점이 있지만 쿼리문에 대한
                                    사용법을 자세히 알지 못하면 사용하기 어렵다. </small> </li>
                                <li> <small> JPA의 구현체 Hibernate,EclipseLink,DataNucleus  </small> </li>
                                {/* <li> <small>   </small> </li> */}
                                <span className="mblock">
                                    <span className="sstitle"> 쿼리 메소드 </span> <small> 컬럼은 대문자로 시작 </small>
                                    <li> <h4>  레포지토리.findByAll() </h4>
                                        <li> select * from 테이블 </li>
                                    </li>
                                    <li> <h4>  findBy컬럼1(String 컬럼) </h4>
                                        <li> select *  from 테이블 where 컬럼1 = 'userid' </li>
                                    </li>
                                    <li> <h4>  findBy컬럼1And컬럼2(String 컬럼,String 컬럼) </h4>
                                        <li> select * from 테이블 where 컬럼1='userid' and 컬럼2='userpwd';  </li>
                                    </li>
                                    <li> <h4>  findBy컬럼1Or컬럼2 </h4>
                                        <li> select * from 테이블 where 컬럼1='userid' or 컬럼2='userpwd'; </li>
                                    </li>
                                    <li> <h4>     </h4>
                                        <li>  </li>
                                    </li>
                                    <li> <h4>     </h4>
                                        <li>  </li>
                                    </li>
                                    <li> <h4>     </h4>
                                        <li>  </li>
                                    </li>
                                    <li> <h4>     </h4>
                                        <li>  </li>
                                    </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default SpringJpa;