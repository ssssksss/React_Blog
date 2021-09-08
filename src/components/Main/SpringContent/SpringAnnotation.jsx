import React from 'react';

const SpringAnnotation = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Entity"> @Entity </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> Entity , DB의  테이블과 매칭을 하게 해준다. ORM </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Table"> @Table </a> </span>
                        <span className="sblock">
                            <small> @Table(name="테이블이름지정") </small>
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Id"> @Id </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> JPA가 식별할 기본키를 정의 </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@GenerateValue"> @GenerateValue </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @GenerateValue(strategy = GenerationType.[IDENTITY,ATUO,SEQUENCE,TABLE]) </span>
                            <small> AUTO : (persistence provider)가 특정 DB에 맞게 자동 선택 </small> <br />
                            <small> IDENTITY : DB의 identity 컬럼을 이용 </small> <br />
                            <small> TABLE : 유일성이 보장된 데이터베이스 테이블을 이용 , @TableGenerator </small> <br />
                            <small> SEQUENCE, generator="시퀸스생성자이름" : DB의 시퀸스 컬럼을 이용 , @SequenceGenerator 필요 </small>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@SequenceGenrator"> @SequenceGenrator </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @SequenceGenrator(name="시퀸스생성자이름", sequenceName=""(매핑할 DB시퀸스 이름),
                                initialValue=1(시작값), allocationSize=1(증가값) ) </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Column"> @Column </a> </span>
                        <span className="sblock">
                            <small> 속성 : name="DB에 매핑되는 컬럼명", unique=true, nullable=true ,
                                length=num , columnDefinition="설명?" </small>
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Temporal"> @Temporal </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> 시간 날짜 타입을 지정하는 어노테이션 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Transient"> @Transient </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> 테이블의 어떤 컬럼과 매핑하지 않을 것을 나타내는 어노테이션 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Enumerated"> @Enumerated </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @Enumerated(EnumType.STRING) </span>
                            <span className="mblock">
                                <li> enum값을 인덱스가 아닌 문자열로 저장하는 방법 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@SequenceGenerator"> @SequenceGenerator </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> 데이터베이스 시퀸스를 사용하는 방법(시퀸스에 대한 추가적으로 공부 필요) </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Order(숫자)"> @Order(숫자) </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li> 순서가 낮을 수록 우선순위, 빈의 등록 순서를 결정 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@EnableGlobalMethodSecurity"> @EnableGlobalMethodSecurity </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true) </span>
                            <span className="mblock">
                                <li>  @Secured활성화, @perAuthorize,@PostAuthorize 활성화 </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Secured"> @Secured </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @Secured("ROLE_ADMIN") </span>
                            <span className="mblock">
                                <li> 특정 메소드 실행전 에 권한을 지정할 수 있다. </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@PreAuthorize"> @PreAuthorize </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')") </span>
                            <span className="mblock">
                                <li> 특정 메소드에 권한을 1개이상 지정 가능하다. </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@PostAuthorize"> @PostAuthorize </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 메소드가 끝난 뒤에 ?? </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
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
                        <span className="stitle"> <a name="@AuthenticationPrincipal"> @AuthenticationPrincipal </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 1. 로그인한 사용자의 정보를 Principal 객체로 받아온다. </span>
                            <span className="sstitle"> 2. UserDetailsService에서 Return한 객체를 파라미터로 받아 사용할 수 있다. </span>
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

export default SpringAnnotation;