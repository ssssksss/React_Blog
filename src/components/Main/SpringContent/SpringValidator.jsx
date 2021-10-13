import React from 'react';

const SpringValidator = (props) => {
    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Validator
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 유효성 검사를 해주는 클래스 </li>
                                    <li> <a href="https://beanvalidation.org/" target="_blank" rel="noopener noreferrer">
                                        Jakarta Bean Validation </a>
                                        <a href="https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/#validator-gettingstarted-createproject" target="_blank" rel="noopener noreferrer">
                                            Hibernate Validator </a>
                                        <li> validator를 사용할 떄는 ValidationUtils를 사용하는 방법과 사용하지 않는 2가지 방법이 있다. </li>
                                        <li> 사용자의 정보를 검증하는 단계는 컨트롤러 즉 사용자의 정보를 처음에 받는 곳에서 처리를 해야한다. </li>
                                    </li>
                                    <li> <a href="https://docs.spring.io/spring-framework/docs/4.1.x/spring-framework-reference/html/validation.html"
                                        target="_blank" rel="noopener noreferrer"> 공식 문서 </a>
                                        <li> Validator 인터페이스는 Errors객체를 사용하여 유효성 실패를 보고할 수 있다. </li>
                                        <li> support메소드는 Validator가 제공된 클래스 객체를 유효 검사할 수 있는지 판단  </li>
                                        <li> validate메소드는 주어진 객체가 오류 객체인 경우 Error객체로 등록한다. </li>
                                        <li> Validator 구현은 간단하고 , 스프링 프레임워크는 ValidationUtils 제공한다.
                                            하지만 스프링 Validation API를 사용하면 편리하다. </li>
                                    </li>
                                </div>
                                <div className='sstitle'> Validator 클래스 </div>
                                <div className='mblock'>
                                    <li> @Component <small> # Bean 으로 등록 </small>  </li>
                                    <li> public class ValidatorClass implements Validator {'{'}
                                        <li> <br /> @Override </li>
                                        <li> {'public boolean supprot(Class<?> clazz) { '} <small> # Validator가 해당클래스의 유효성을 지원하는지 여부확인</small>
                                            <li> return _Entity.class.equals(clazz); </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> @Override </li>
                                        <li> void validate(Object target,Erros errors) {'{'} <small> # 유효검사를 해서 틀리면 에러 객체에 저장</small>
                                            <li> <br /> #ValidationUtils를 사용하지 않는 방법  </li>
                                            <li> <span className="col_r"> Entity </span> entity = (<span className="col_r"> Entity </span>)target; </li>
                                            <li> {' if(entity.'}<span className="col_r">get필드명 </span>{'() == null) {'}
                                                <li> errors.rejectValue("<span className="col_r"> Entity필드명 </span> ","errorCode","에러가발생할경우보여줄메시지작성"); </li>
                                            </li>
                                            <li> {'}'} </li> <br />
                                            {/*<li> # ValidationUtils를 사용하는 방법 	</li>*/}
                                            {/*<li> ValidationUtils.rejectIfEmpty(errors,"field","defaultMessage"); </li>*/}
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                                <div className='sstitle'> Errors 인터페이스 </div>
                                <div className='mblock'>
                                    <li> reject(String errorCode) # 모든 객체에 대해서 에러 코드를 추가 </li>
                                    <li> reject(String errorCode, String defaultMessage) </li>
                                    <li> reject(String errorCode, Object[] errorArgs, String defaultMessage) # errorArgs 에러 메세지를 전달함 </li>
                                    <li> rejectValue(String field, String errorCode) # 필드에 대한 에러 코드 추가</li>
                                    <li> rejectValue(String field, String errorCode, String defaultMessage) </li>
                                    <li> rejectValue(String field, String errorCode, Object[] errorArgs, String defaultMessage) </li> <br />
                                    <li> boolean hasError() # 에러 발생 여부 </li>
                                    <li> int getErrorCount() # 에러 갯수 리턴 </li>
                                    <li> boolean hasGlobalErrors() # reject() 에러 발생 여부 </li>
                                    <li> int getGlobalErrorCount() # reject() 에러 갯수 리턴 </li>
                                    <li> boolean hasFieldErrors() # rejectValue() 에러 발생 여부 </li>
                                    <li> int getFieldErrorCount() # rejectValue() 에러 갯수 리턴 </li>
                                    <li> boolean hasFieldErrors() # rejectValue() 를 사용한 특정 필드 에러 발생 여부 </li>
                                    <li> int getFieldErrorCount(String field) # rejectValue() 를 사용한 특정 필드 에러 갯수 리턴 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <div className='sstitle'> Controller </div>
                                    <div className='sblock'>
                                        <li> {'     @PostMapping("/doCreateUpdateBoard") '} </li>
                                        <li> {'     public String doCreateBoard( BoardEntity boardEntity, BindingResult bindingResult) { '}
                                            <li> {'         boardValidator.validate(boardEntity, bindingResult); '} </li> <br />

                                            <li> {'         if(bindingResult.hasErrors()) { '}
                                                <li> {'             return "boardForm"; '} </li>
                                            </li>
                                            <li> {'         } '} </li>
                                            <li> {'         boardRepository.save(boardEntity); '} </li>
                                            <li> {'         return "redirect:/boardMainpage"; '} </li>
                                        </li>
                                        <li> {'     } '} </li>
                                    </div>
                                    <div className='sstitle'> BoardEntity </div>
                                    <div className='sblock'>
                                        <li> @Entity </li>
                                        <li> @Getter </li>
                                        <li> @Setter </li>
                                        <li> @AllArgsConstructor </li>
                                        <li> @NoArgsConstructor </li>
                                        <li> @ToString </li>
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
                                    <div className='sstitle'> BoardValidator </div>
                                    <div className='sblock'>
                                        <li> {' @Component '} </li>
                                        <li> {' public class BoardValidator implements Validator { '}
                                            <li> {' '} </li> <br />
                                            <li> {' @Override '} </li>
                                            <li> {' public boolean supports(Class<?> clazz) { '}
                                                <li> {' return BoardEntity.class.equals(clazz); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' '} </li> <br />
                                            <li> {' @Override '} </li>
                                            <li> {' public void validate(Object target, Errors errors) { '}
                                                <li> {' BoardEntity boardEntity = (BoardEntity)target; '} </li>
                                                <li> {' '} </li>
                                                <li> <small> # thymeleaf util 사용</small> </li>
                                                <li> {' if(StringUtils.isEmpty(boardEntity.getBoardTitle())) { '}
                                                    <li> {' errors.rejectValue("boardTitle","empty","empty boardTitle"); '} </li>
                                                </li>
                                                <li> {' } '} </li>
                                                <li> <small> # java 사용 </small> </li>
                                                <li> {' if(boardEntity.getBoardTitle().isEmpty()) { '}
                                                    <li> {' errors.rejectValue("boardTitle","empty","empty boardTitle"); '} </li>
                                                </li>
                                                <li> {' } '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                        </li>
                                        <li> {' } '} </li>
                                    </div>
                                    <div className='sstitle'> boardForm.html </div>
                                    <div className='sblock'>
                                        <li> <small> # thymeleaf + bootstrap을 이용하여 작성 </small> </li>
                                        <li> {' <form action="/doCreateUpdateBoard" method="post" th:object="${boardEntity}"> '}
                                            <li> {' <input th:if="*{boardNo != null}" type="hidden" th:field="*{boardNo}"/> '} </li>
                                            <li> {'  '} </li> <br />
                                            <li> {' <div class="mb-3"> '}
                                                <li> {'     <label for="exampleFormControlInput1" class="form-label"> 제목 </label> '} </li>
                                                <li> {'     <input type="text" class="form-control" th:classappend="${#fields.hasErrors('}'boardTitle'{'})} ? '}'is-invalid'
                                                    {'" id="exampleFormControlInput1" th:field="*{boardTitle}">'} </li>
                                                <li> {'     <div class="invalid-feedback" th:if="${#fields.hasErrors('}'boardTitle'{')}" th:errors="*{boardTitle}">Name Error</div> '} </li>
                                            </li>
                                            <li> {' </div> '} </li>
                                            <li> {'  '} </li> <br />
                                            <li> {' <div class="mb-3"> '}
                                                <li> {' <label for="exampleFormControlTextarea1" class="form-label"> 내용 </label> '} </li>
                                                <li> {' <textarea class="form-control" th:classappend="${#fields.hasErrors('}'boardContent'{')} ? '}'is-invalid'
                                                    {'" id="exampleFormControlTextarea1" rows="3" th:field="*{boardContent}"> </textarea>'} </li>
                                                <li> {' <div class="invalid-feedback" th:if="${#fields.hasErrors('}'boardContent'{')}" th:errors="*{boardContent}">Name Error</div> '} </li>
                                            </li>
                                            <li> {' </div> '} </li>
                                            <li> {'  '} </li> <br />
                                            <li> {' <button type="submit" class="btn btn-primary"> 제출 </button> '} </li>
                                        </li>
                                        <li> {' </form> '} </li>
                                    </div>
                                    {/*  */}
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

export default SpringValidator;