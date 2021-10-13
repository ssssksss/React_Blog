import React from 'react';

const SpringEntity = (props) => {
    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Entity
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> entity는 논리적인 모델 , 집합 정도라고 생각  </li>
                                    <li> DB의 테이블로 사용도 하지만 사용을 안할 수도 있다. </li>
                                    <li> @Entity와 @Table의 차이, @Table은 DB에 생성될 테이블의 이름을 지정하는데 사용하고, @Entity는 엔티티를 뜻한다.
                                        하지만 @Table의 이름이 명시되지 않는다면 @Entity의 name속성이 DB테이블의 이름으로 사용된다. </li>
                                    <li>  </li>
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
                            </div>
                        </details>
                    </div>

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
                                            <li> name="client_role", </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
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
            </div>
        </>
    );
}

export default SpringEntity;