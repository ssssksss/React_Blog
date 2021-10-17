import React from 'react';

const SpringLombok = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> lombok 사이트
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> <a href="https://projectlombok.org/features/all" target="_blank"> lombok 사이트 </a> </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Getter / @Setter
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> Getter,Setter 메소드를 구현 (일반적으로 Setter는 구현을 하지 않음) </li>
                                    <li> 기본적으로 public, @Setter(AccessLevel.[PRIVATE | PROTECTED ]) </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Getter </li>
                                    <li className="col_r"> @Setter </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @NoArgsConstructor , @AllArgsConstructor , @RequiredArgsConstructor
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @NoArgsConstructor #파라미터가 없는 기본생성자 </li>
                                    <li> @AllArgsConstructor #모든 파라미터가 있는 생성자 </li>
                                    <li> @RequiredArgsConstructor #특정 파라미터만 있는 생성자 </li>
                                    <li> @NoArgsConstructor(access = AccessLevel.[ PRIVATE | PROTECTED ]) #3개다 한정자 사용가능, @AllArgsConstructor
                                        , @RequiredArgsConstructor 2개의 어노테이션은 사용 지양(주의) </li>
                                    <li> @NoArgsConstructor은 @NonNull을 무시함(주의) </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @NoArgsConstructor <small> 필드에 final 변수가 있으면 에러발생, 해결법은 @(force=true)를 사용 </small> </li>
                                    <li className="col_r"> @AllArgsConstructor </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <li className="col_r"> @RequiredArgsConstructor <small> 입력한 파라미터가 순서대로 들어오지 않으면 멤버변수의 값이 바뀌어서 들어가고, 에러가 발생하지 않음 , @Builder
                                        패턴을 사용하기 권장 , [final, @Nonnull] 필드들에 대해서 생성자를 생성 </small> </li>
                                    <li> public class User {'{'}
                                        <li> private final String id; #생성자 필드에 포함</li> <br />
                                        <li> @Nonnull private String id; #생성자 필드에 포함</li>
                                        <li> private String id; #생성자 필드에 포함되지 않음</li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @ToString
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>

                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> ToString 메소드를 구현 </li>
                                    <li>  @ToString(exclude="password") #password 필드를 toString메소드에서 제외시킨다. </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @ToString(exclude="password") </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                        <li> private String password; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Data
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @ToString + @EqualsAndHashCode + @Getter + @Setter + @RequiredArgsConstructor </li>
                                    <li> 무거워서 사용을 권장하지 않음, @AllArgsConstructor동시에 사용하면 @RequiredArgsConstructor사용불가 </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Data </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Builder
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 클래스에 사용하는 것보다 생성자메소드에 직접 사용하는 것이 더 좋다. , 접근레벨 default여서 다른 패키지에서 생성자 호출가능(주의사항) </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Builder </li>
                                    <li> public class User </li>
                                    <li> private String id; </li>
                                </div>
                                <div className='sstitle'> 예시2 - 생성자를 만들어서 사용하는것을 권장 </div>
                                <div className='mblock'>
                                    <li> public class User </li>
                                    <li> private String id; </li>
                                    <li className="col_r"> @Builder </li>
                                    <li> public User(String id) {'{'} </li>
                                    <li>  this.id = id; </li>
                                    <li> {'}'} </li>
                                </div>
                                <div className='sstitle'> build 패턴 구현 예시 </div>
                                <div className='mblock'>
                                    <li> {'public class User{'}
                                        <li> {'private String id;'} </li>
                                        <li> {'private String password;'} </li>
                                        <li> {'User() {}'} </li> <br />
                                        <li> {'public static class Builder {'}
                                            <li> {'private String id;'} </li>
                                            <li> {'private String password;'} </li> <br />

                                            <li> {'public Builder id(String id) {'}
                                                <li> {'this.id = id;'} </li>
                                            </li>
                                            <li> {'}'} </li><br />
                                            <li> {'public Builder password(String password) {'}
                                                <li> {'this.password = password;'} </li>
                                                <li> {'return this;'} </li>
                                            </li>
                                            <li> {'    } '} </li> <br />
                                            <li> {'    public User build() {'}
                                                <li> {'      User user = new User(this.id,this.password);'} </li>
                                                <li> {'      return user;'} </li>
                                            </li>
                                            <li> {'    }'} </li>
                                        </li>
                                        <li> {'    }'} </li>
                                    </li>
                                    <li> {'    }'} </li>
                                    <li> </li>
                                </div>
                                <div className='sstitle'> build 패턴 사용예시 </div>
                                <div className='mblock'>
                                    <li> User user = new User.Builder("id").password("1234").build(); </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @DynamicInsert , @DynamicUpdate
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @DynamicInsert 필드값이 null이면 insert 쿼리에서 제외 </li>
                                    <li> @DynamicUpdate 필드값이 null이면 update 쿼리에서 제외 </li>
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
                            <summary className='stitle'> @PrePersist , @PreUpdate
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> persist 되기전에 호출하는 방법 </li>
                                    <li> 메소드에 사용 </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @EqualsAndHashCode
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> equals(),hashCode() 메소드 생성 </li>
                                    <li> (of={"멤버변수1", "멤버변수2"},callSuper=false)를 추가하면
                                        멤버변수1과 멤버변수2가 같다면 같은 객체로 판단을 하여 처리하게 할 수 있다. </li>
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
                            <summary className='stitle'> @Cleanup
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 리소스를 종료되기전에 .close() 해준다. </li>
                                    <li> @Cleanup ABC abc = new FileInput() #대략적인 형식 </li>
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
                            <summary className='stitle'> @Delegate
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 한 객체의 메소드를 다른 객체로 위임한다. </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Syncronized
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Value
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 프로퍼티에서 정의한 값을 가져오는 방법  </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Slf4j @Log4j2
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



                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @NotNull @Nullable @NotEmpty
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @NotNull <small> # Null 불가능 </small> </li>
                                    <li> @NotEmpty <small> # Null, 빈문자열("") 불가능 , " " 은 가능 </small> </li>
                                    <li> @NotBlank <small> # Null, 빈문자열("") , " " 모두 불가능 </small> </li>
                                    <li> @NonNull <small> null을 허용하지 않음 </small>  </li>
                                    <li> @Nullable <small> null을 허용 </small>  </li>
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
                            <summary className='stitle'> @Entity @Table @Id @GenerateValue @Column
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @Entity : DB의  테이블과 매칭을 하게 해준다. </li>
                                    <li> @Table , @Table(name="테이블이름지정") </li>
                                    <li> @Id , JPA가 식별할 기본키를 정의</li>
                                    <li> @GenerateValue(strategy = GenerationType.[IDENTITY,ATUO,SEQUENCE,TABLE])
                                        <li> AUTO : (persistence provider)가 특정 DB에 맞게 자동 선택 </li>
                                        <li> IDENTITY : DB의 identity 컬럼을 이용 # mysql에서 사용, auto increment </li>
                                        <li> TABLE : 유일성이 보장된 데이터베이스 테이블을 이용 , @TableGenerator와 같이 사용 </li>
                                        <li> SEQUENCE : DB의 시퀸스 컬럼을 이용 , Oracle에서 사용 , @SequenceGenerator 필요
                                            <li> @SequenceGenrator(name="시퀸스생성자이름", sequenceName=""(매핑할 DB시퀸스 이름),
                                                initialValue=1(시작값), allocationSize=1(증가값) ) </li>
                                        </li>
                                    </li>
                                    <li> @Column(name="DB필드명", unique=true, nullable=false, length=10, columnDefinition="데이터타입 제약조건 '제약조건값'" ) : DB에 매핑되는 필드명 </li>
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
                            <summary className='stitle'> @Temporal @Transient @Enumerated
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @Temporal : 시간 날짜 타입을 지정하는 어노테이션 </li>
                                    <li> @Transient : 테이블의 어떤 컬럼과 매핑하지 않을 것을 나타내는 어노테이션 </li>
                                    <li> @Enumerated(EnumType.STRING : enum값을 인덱스가 아닌 문자열로 저장하는 방법 </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Order @EnableGlobalMethodSecurity @Secured @PreAuthorize @PostAuthorize @AuthenticationPrincipal
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @Order(숫자) : 순서가 낮을 수록 우선순위, 빈의 등록 순서를 결정 </li>
                                    <li> @EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true) : @Secured활성화, @perAuthorize,@PostAuthorize 활성화 </li>
                                    <li> @Secured : 특정 메소드 실행전 에 권한을 지정할 수 있다. </li>
                                    <li> @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')") : 특정 메소드에 권한을 1개이상 지정 가능하다. </li>
                                    <li> @PostAuthorize : 메소드가 끝난 뒤에 ?? </li>
                                    <li> @AuthenticationPrincipal : 1. 로그인한 사용자의 정보를 Principal 객체로 받아온다. , 2. UserDetailsService에서 Return한 객체를 파라미터로 받아 사용할 수 있다. </li>
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
                            <summary className='stitle'> @Size @Min @Max
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 어노테이션 </div>
                                <div className='mblock'>
                                    <li> @Size(min=2, max=30) </li>
                                    <li> @Min(18) </li>
                                    <li> @Max(18) </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @RequestParam @RequestBody @ModelAttribute @ReponseBody
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <div className="sstitle"> @RequestParam </div>
                                    <li> HttpServletRequest 객체 역할 </li>
                                    <li> 1개의 파라미터를 받아옴 </li>
                                    <li> http에서 파라미터가 오지 않으면 400 Error 발생 </li>
                                    <li> Controller메소드의 파라미터와 웹 요청 파라미터와 맵핑하는 용도 </li>
                                    <li> @RequestParam(value="파라미터명", required = false, defaultValue="디폴트값") 타입 변수명 <small>  </small> </li>
                                    <li> @RequestParam {'HashMap<타입,타입> map객체명'} </li>
                                    <li>  </li> <br />
                                    <div className="sstitle"> @RequestBody </div>
                                    <li> Json 형태의 http body를 자바 객체 로 변환(Reflection 사용) </li>
                                    <li> MessageConverter 나 MappingJackson2HttpMessageConverter 를 이용 </li>
                                    <li>  </li>
                                    <li>  </li> <br />
                                    <div className="sstitle"> @ModelAttribute </div>
                                    <li> multipart/form-data 형태의 http body 내용과 파라미터를 setter를 통해 1대1 매핑 </li>
                                    <li> 매핑 중에 타입일치 등 검증과정이 진행 </li>
                                    <li> setter함수가 없으면 바인딩이 되지 않음 </li>
                                    <li> @ModelAttribute("특정파라미터명") 객체타입 변수명 </li>
                                    <li>  </li>
                                    <div className="sstitle"> @ReponseBody </div>
                                    <li> http응답 데이터를 담은 공간 </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>


                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @PostMapping @GetMapping @RequestMapping @PathVariable
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <div className="sstitle"> @PostMapping </div>
                                    <li> Post방식으로 요청을 받을 때 맵핑을 처리함 </li>
                                    <li>  </li>
                                    <div className="sstitle"> @GetMapping </div>
                                    <li> Get방식으로 요청을 받을 때 맵핑을 처리함 </li>
                                    <li> public String board(Model model) {'{'}
                                        <li> board = boardRepository.findById(id).orElse(null);  </li>
                                        <li> model.addAttribute("board", board);  </li>
                                        <li> return "boardForm";  </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <div className="sstitle"> @RequestMapping </div>
                                    <li> 어떤 Controller에 어떤 메소드를 처리할지 맵핑하는 용도 </li>
                                    <li> Controller 상단에 선언 </li>
                                    <li> @RequestMapping("/경로명") </li>
                                    <li>  </li>
                                    <div className='sstitle'> @PathVariable </div>
                                    <li>  </li>
                                    <li> @어떤Mapiing("/aaa/{'{abc}'}") </li>
                                    <li> (@PathVariable(name="abc") 타입 변수명) </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Configuration @Service @Repository @Controller @RestController @Entity @Component
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <div className="sstitle"> @Configuration </div>
                                    <li> Bean으로 등록하게 해주는 어노테이션 </li>
                                    <li> 싱글톤이 되게 해준다. , CGLIB 바이트조작 라이브러리를 사용해서 임의의 클래스를 생성해서 사용하게 한다. </li>
                                    <li> 스프링컨테이너에서 관리 가능 </li>
                                    <div className="sstitle"> @Service </div>
                                    <li>  </li>
                                    <li>  </li>
                                    <div className="sstitle"> @Repository </div>
                                    <li>  </li>
                                    <li>  </li>
                                    <div className="sstitle"> @Controller </div>
                                    <li> Model 객체를 이용하여 데이터를 담고 view를 찾아 이동하는 역할 </li>
                                    <li>  </li>
                                    <div className="sstitle"> @RestController </div>
                                    <li> @Controller + @ResponseBody </li>
                                    <li>  객체로 반환하고 JSON이나 XML형식으로 http에 담아서 응답 </li>
                                    <li>  </li>
                                    <div className="sstitle"> @Entity </div>
                                    <li>  </li>
                                    <li>  </li>
                                    <div className="sstitle"> @Component </div>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>


                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @PageableDefault @SortDefault
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <div className="sstitle"> @PageableDefault </div>
                                    <li> @PageableDefault(size=1,sort="필드명",direction = Sort.Direction.ASC) Pageable pageable </li>
                                    <li> Page타입에는 pageNumber,pagesize,totalpage 등의 멤버변수가 존재한다. </li>
                                    <div className="sstitle"> @SortDefault </div>
                                    <li> @PageableDefault는 1개의 조건만 정렬이 가능하지만 SortDefault는 여러개의 조건으로 정렬이 가능하다. </li>
                                    <li> {'   @SortDefault.SortDefaults({ '}
                                        <li> {' @SortDefault(sort = "title", direction = Sort.Direction.DESC), '} </li>
                                        <li> {' @SortDefault(sort = "writer", direction = Sort.Direction.DESC) '} </li>
                                    </li>
                                    <li> {' }) '} </li>
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
                            <summary className='stitle'> 기타
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @SuppressWarnings("unchecked") :   </li>
                                    <span className="mblock">
                                        <li> value(String) : URL값으로 맵핑 조건으로 사용 </li>
                                        <li> method : HTTP Request 메소드값을 맵핑 조건으로 사용 </li>
                                        <li> params : HTTP Request 파라미터(GET,POST 등)를 맵핑 조건으로 사용 </li>
                                        <li> consumes : Content-Type request 헤더가 일치할 경우 URL이 호출됨 </li>
                                        <li> produces : 설정과 Accept request 헤더가 일치할 경우에만 URL이 호출됨 </li>
                                    </span>
                                    <li> @ModelAttribute : Controller 메소드의 파라미터나 리턴값을 Model 객체와 바인딩하기 위한 용도 </li>
                                    <li> @SessionAttributes : Model 객체를 세션에 젖아하고 사용하기 위한 용도 </li>
                                    <li> @RequestPart : Multipart 요청의 경우, 웹 요청 파라미터와 맵핑 용도 </li>
                                    <li> @CommandMap : Controller메소드의 파라미터를 Map형태로 받을 떄 웹 요청 파라미터와 맵핑하기 위한 용도 </li>
                                    <li> @ControllerAdvice : Controller에 쓰이는 공통기능을 모듈화하여 전역으로 쓰기 위한 용도 </li>
                                    <li> @Transactional : 트랜잭션 속성을 클래스 내의 모든 메서드에게 부여</li>
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

export default SpringLombok;