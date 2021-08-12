import React, { useEffect, useRef, useState } from 'react';

const Term2 = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 목록 </summary>
                            <details open>
                                <summary className="col_g"> 세부 목록 </summary>
                                <a href="#@Entity" className="col_p"> @Entity </a>
                                <a href="#@Table" className="col_p"> @Table </a>
                                <a href="#@Id" className="col_p"> @Id </a>
                                <a href="#@GenerateValue" className="col_p"> @GenerateValue </a>
                                <a href="#@SequenceGenrator" className="col_p"> @SequenceGenrator </a>
                                <a href="#@Column" className="col_p"> @Column </a>
                                <a href="#@Temporal" className="col_p"> @Temporal </a>
                                <a href="#@Transient" className="col_p"> @Transient </a>
                                <a href="#@Enumerated" className="col_p"> @Enumerated </a>
                                <a href="#@SequenceGenerator" className="col_p"> @SequenceGenerator </a>
                                <a href="#@Order(숫자)" className="col_p"> @Order(숫자) </a>
                                <a href="#@EnableGlobalMethodSecurity" className="col_p"> @EnableGlobalMethodSecurity </a>
                                <a href="#@Secured" className="col_p"> @Secured </a>
                                <a href="#@PreAuthorize" className="col_p"> @PreAuthorize </a>
                                <a href="#@PostAuthorize" className="col_p">@PostAuthorize  </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#" className="col_p">  </a>
                                <a href="#@AuthenticationPrincipal" className="col_p">@AuthenticationPrincipal  </a>
                                <a href="#" className="col_p">  </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
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

export default Term2;