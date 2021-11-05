import React, { useEffect, useRef } from 'react';

const SpringLombok = (props) => {

    return (
        <>
            <div className="common_style">



                <div className='block1'>
                    <details>
                        <summary> @Getter @Setter @Data @ToString </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @Getter @Setter </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> Getter,Setter 메소드를 구현 </li>
                            <li> 기본적으로 public, @Setter(AccessLevel.[PRIVATE | PROTECTED ]) </li>

                            <h2 className="h2"> 📌 @Data </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> @ToString + @EqualsAndHashCode + @Getter + @Setter + @RequiredArgsConstructor </li>
                            <li> 무거워서 사용을 권장하지 않음, @AllArgsConstructor동시에 사용하면 @RequiredArgsConstructor사용불가 </li>

                            <h2 className="h2"> 📌 @ToString </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> ToString 메소드를 구현 </li>
                            <li> @ToString(exclude="password") #password 필드를 toString메소드에서 제외시킨다. </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className="block3">
                                    <li> <h3 className="h3"> 🎈 @Getter @Setter </h3>
                                        <li > @Getter </li>
                                        <li > @Setter </li>
                                        <li> public class User {'{'}
                                            <li> private String id; </li>
                                        </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 @Data </h3>
                                        <li > @Data </li>
                                        <li> public class User {'{'}
                                            <li> private String id; </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 @ToString </h3>
                                        <li > @ToString(exclude="password") </li>
                                        <li> public class User {'{'}
                                            <li> private String id; </li>
                                            <li> private String password; </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @NoArgsConstructor , @AllArgsConstructor , @RequiredArgsConstructor @Builder </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @NoArgsConstructor </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> 파라미터가 없는 기본생성자 </li>
                            <li> @NoArgsConstructor(access = AccessLevel.[ PRIVATE | PROTECTED ]) #3개다 한정자 사용가능 </li>
                            <li> @NoArgsConstructor은 @NonNull을 무시함(주의) </li>
                            <li> 필드에 final 변수가 있으면 에러발생, 해결법은 @(force=true)를 사용 </li>

                            <h2 className="h2"> 📌 @AllArgsConstructor </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> 모든 파라미터가 있는 생성자 </li>

                            <h2 className="h2"> 📌 @RequiredArgsConstructor </h2>
                            <li> Model 관련 클래스 위에 선언 </li>
                            <li> 특정 파라미터만 있는 생성자 </li>
                            <li> 파라미터가 순서대로 들어가지 않아도 에러가 발생하지 않음 </li>
                            <li> @Builder 사용하기 권장 </li>

                            <h2 className="h2"> 📌 @Builder </h2>
                            <li> Model 관련 클래스 위나 메소드위에 선언 </li>
                            <li> 클래스 위에 보다 생성자 메소드에 직접 선언하여 사용하는 것을 추천 </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 @NoArgsConstructor, @AllArgsConstructor </h3>
                                    <li > @NoArgsConstructor <small> 필드에 final 변수가 있으면 에러발생, 해결법은 @(force=true)를 사용 </small> </li>
                                    <li > @AllArgsConstructor </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li> <br />

                                    <h3 className="h3"> 🎈 @RequiredArgsConstructor </h3>
                                    <li > @RequiredArgsConstructor <small> [final, @Nonnull] 필드들에 대해서 생성자를 생성 </small> </li>
                                    <li> public class User {'{'}
                                        <li> private final String id; #생성자 필드에 포함</li> <br />
                                        <li> @Nonnull private String id; #생성자 필드에 포함</li>
                                        <li> private String id; #생성자 필드에 포함되지 않음</li>
                                    </li>
                                    <li> {'}'} </li> <br />

                                    <h3 className="h3"> 🎈 @Builder - 클래스 위에 선언  </h3>
                                    <li > @Builder </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li> <br />

                                    <h3 className="h3"> 🎈 @Builder - 메소드 위에 선언 </h3>
                                    <li>  </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                        <li> private String password; </li>
                                        <li> @Builder </li>
                                        <li> public User(String id,String password) {'{'}
                                            <li>  this.id = id; </li>
                                            <li>  this.password = password; </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li> <br />

                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @NonNull @Nullable @NotNull @NotEmpty @NotBlank @Size @Min @Max @Length </summary>
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

                            <h2 className="h2"> 📌 @NotEmpty </h2>
                            <li> 변수 위에 선언 </li>
                            <li> Null, 빈문자열("") 불가능 , " " 은 가능 </li>
                            <li> String과 Collection 타입에만 적용이 가능하다고 한다. (boolean에는 @NotNull) </li>

                            <h2 className="h2"> 📌 @NotBlank </h2>
                            <li> 변수 위에 선언 </li>
                            <li> Null, 빈문자열("") , " " 모두 불가능 </li>


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

                            <h2 className="h2"> 📌 설명 </h2>
                            <li> 1 </li>


                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @Entity @Table @Id @GenerateValue @Column </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @Entity </h2>
                            <li> 클래스 위에 선언 </li>
                            <li> 엔티티로 사용한다고 선언 </li>

                            <h2 className="h2"> 📌 @Table </h2>
                            <li> 클래스 위에 선언 </li>
                            <li> DB의 테이블과 매핑되는 테이블이름을 지정할 수 있음 </li>
                            <li> @Table(name="테이블이름지정")</li>

                            <h2 className="h2"> 📌 @Id </h2>
                            <li> 변수 위에 선언 </li>
                            <li> 엔티티 식별자로 사용, DB테이블의 PK로도 사용이 된다. </li>

                            <h2 className="h2"> 📌 @GenerateValue </h2>
                            <li> 변수위에 선언 </li>
                            <li> PK의 값을 자동 생성하는 방법 </li>
                            <li> @GenerateValue(strategy = GenerationType.[IDENTITY,ATUO,SEQUENCE,TABLE])
                                <div className="block4">
                                    <p> AUTO : (persistence provider)가 특정 DB에 맞게 자동 선택 </p>
                                    <p> IDENTITY : DB의 identity 컬럼을 이용 # mysql에서 사용, auto increment </p>
                                    <p> TABLE : 유일성이 보장된 데이터베이스 테이블을 이용 , @TableGenerator와 같이 사용 </p>
                                    <p> SEQUENCE : DB의 시퀸스 컬럼을 이용 , Oracle에서 사용 , @SequenceGenerator 필요
                                        <li> @SequenceGenrator(name="시퀸스생성자이름", sequenceName=""(매핑할 DB시퀸스 이름),
                                            initialValue=1(시작값), allocationSize=1(증가값) ) </li>
                                    </p>
                                </div>
                            </li>

                            <h2 className="h2"> 📌 @Column </h2>
                            <li> 변수 위에 선언 </li>
                            <li> @Column(name="DB필드명", unique=true, nullable=false,
                                length=10, columnDefinition="데이터타입 제약조건 '제약조건값'" ) : DB에 매핑되는 필드명 </li>


                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @RequestParam @RequestBody @ModelAttribute @ReponseBody </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @RequestParam </h2>
                            <li> HttpServletRequest 객체 역할 </li>
                            <li> 1개의 파라미터를 받아옴 </li>
                            <li> http에서 파라미터가 오지 않으면 400 Error 발생 </li>
                            <li> Controller메소드의 파라미터와 웹 요청 파라미터와 맵핑하는 용도 </li>
                            <li> @RequestParam(value="파라미터명", required = false, defaultValue="디폴트값") 타입 변수명 <small>  </small> </li>
                            <li> @RequestParam {'HashMap<타입,타입> map객체명'} </li>
                            <li>  </li> <br />

                            <h2 className="h2"> 📌 @RequestBody </h2>
                            <li> Json 형태의 http body를 자바 객체 로 변환(Reflection 사용) </li>
                            <li> MessageConverter 나 MappingJackson2HttpMessageConverter 를 이용 </li>

                            <h2 className="h2"> 📌 @ModelAttribute </h2>
                            <li> multipart/form-data 형태의 http body 내용과 파라미터를 setter를 통해 1대1 매핑 </li>
                            <li> 매핑 중에 타입일치 등 검증과정이 진행 </li>
                            <li> setter함수가 없으면 바인딩이 되지 않음 </li>
                            <li> @ModelAttribute("특정파라미터명") 객체타입 변수명 </li>

                            <h2 className="h2"> 📌 @ReponseBody </h2>
                            <li> http응답 데이터를 담은 공간 </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @PostMapping @GetMapping @RequestMapping @PathVariable </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @PostMapping </h2>
                            <li> Post방식으로 요청을 받을 때 맵핑을 처리함 </li>

                            <h2 className="h2"> 📌 @GetMapping </h2>
                            <li> Get방식으로 요청을 받을 때 맵핑을 처리함 </li>
                            <li> public String board(Model model) {'{'}
                                <li> board = boardRepository.findById(id).orElse(null);  </li>
                                <li> model.addAttribute("board", board);  </li>
                                <li> return "boardForm";  </li>
                            </li>
                            <li> {'}'} </li>

                            <h2 className="h2"> 📌 @RequestMapping </h2>
                            <li> 어떤 Controller에 어떤 메소드를 처리할지 맵핑하는 용도 </li>
                            <li> Controller 상단에 선언 </li>
                            <li> @RequestMapping("/경로명") </li>

                            <h2 className="h2"> 📌 @PathVariable </h2>
                            <li> 매핑경로에 있는 변수를 사용할 수 있게 해준다. </li>
                            <li> @GetMapiing("/aaa/{'{abc}'}") </li>
                            <li> (@PathVariable(name="abc") 타입 변수명) </li>



                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @Configuration @Service @Repository @Controller @RestController @Entity @Component </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @Configuration </h2>
                            <li> Bean으로 등록하게 해주는 어노테이션 </li>
                            <li> 싱글톤이 되게 해준다. , CGLIB 바이트조작 라이브러리를 사용해서 임의의 클래스를 생성해서 사용하게 한다. </li>
                            <li> 스프링컨테이너에서 관리 가능 </li>

                            <h2 className="h2"> 📌 @Service </h2>
                            <li> 1 </li>

                            <h2 className="h2"> 📌 @Repository </h2>
                            <li> 1 </li>

                            <h2 className="h2"> 📌 @Controller </h2>
                            <li> Model 객체를 이용하여 데이터를 담고 view를 찾아 이동하는 역할 </li>

                            <h2 className="h2"> 📌 @RestController </h2>
                            <li> @Controller + @ResponseBody </li>
                            <li>  객체로 반환하고 JSON이나 XML형식으로 http에 담아서 응답 </li>

                            <h2 className="h2"> 📌 @Entity </h2>
                            <li> 1 </li>

                            <h2 className="h2"> 📌 @Component </h2>
                            <li> 1 </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @PageableDefault @SortDefault </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌  @PageableDefault </h2>
                            <li> 컨트롤러 클래스의 매핑 메소드에 변수에 선언 </li>
                            <li> @PageableDefault(size=1,sort="필드명",direction = Sort.Direction.ASC) Pageable pageable </li>
                            <li> Page타입에는 pageNumber,pagesize,totalpage 등의 멤버변수가 존재한다. </li>

                            <h2 className="h2"> 📌 @SortDefault </h2>
                            <li> @PageableDefault는 1개의 조건만 정렬이 가능하지만 SortDefault는 여러개의 조건으로 정렬이 가능하다. </li>
                            <div className="block4">
                                <p> {'   @SortDefault.SortDefaults({ '}
                                    <p> {' @SortDefault(sort = "title", direction = Sort.Direction.DESC), '} </p>
                                    <p> {' @SortDefault(sort = "writer", direction = Sort.Direction.DESC) '} </p>
                                </p>
                                <p> {' }) '} </p>
                            </div>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className="h3"> 🎈 </h3>
                                    <div className='block4'>
                                        <li>  </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>


                <div className='block1'>
                    <details>
                        <summary> @Temporal @Transient @Enumerated </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 @Temporal </h2>
                            <li> 기본값은 timestamp  </li>
                            <li> @Temporal(TemporalType.DATE) : 년-월-일 </li>
                            <li> @Temporal(TemporalType.TIME) : 시:분:초 </li>
                            <li> @Temporal(TemporalType.TIMESTAMP) : timestamp 타입(date+time) </li>

                            <h2 className="h2"> 📌 @Transient </h2>
                            <li> 테이블의 어떤 컬럼과 매핑하지 않을 것을 나타내는 어노테이션 </li>

                            <h2 className="h2"> 📌 @Eumerated </h2>
                            <li> @Eumerated([EnumType.ORDINAL , EnumType.STRING])
                                <small> # ENUM의 값과 매칭되는 값을 ORDINAL은 번호로 DB에 저장, STRING은 문자열로 DB에 저장 </small> </li>

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
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> @Slf4j @Log4j2 @Syncronized @Value @Delegate @Cleanup @EqualsAndHashCode
                            @PrePersist , @PreUpdate @DynamicInsert , @DynamicUpdate @Transactional @ControllerAdvice
                            @CommandMap @RequestPart @SessionAttribute(보류) </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 설명 </h2>
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
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default SpringLombok;