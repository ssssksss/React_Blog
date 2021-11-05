import React, { useEffect, useRef } from 'react';

const SpringValidator = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> Validator </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 설명 </h2>
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
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> Validator 클래스 </summary>
                        <div className='block2'>

                            <h2 className="h2"> 📌 Errors 인터페이스 속성 </h2>
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

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className="block3">
                                    <li> <h3 className="h3"> validator 예시 ( 사용방법은 좀 더 알아볼 것 ) </h3>
                                        <li> 컨트롤러에서 사용하는 방법(service에서는 알아서 변경해서 사용) </li>
                                        <div className="block4">
                                            <li> {'     public String doCreateBoard(Board board, BindingResult bindingResult, Authentication authentication) { '}
                                                <li> {'         boardValidator.validate(board, bindingResult); '} </li>
                                                <li> {' '} </li> <br />
                                                <li> {'         if (bindingResult.hasErrors()) { '}
                                                    <li> {'             return "boardForm"; '} </li>
                                                </li>
                                                <li> {'         } '} </li>
                                                <li> {' '} </li> <br />
                                            </li>
                                            <li> {'     } '} </li>
                                        </div>
                                        <li> validator 클래스 사용방법 </li>
                                        <div className='block4'>
                                            <li> @Component <small> # Bean 으로 등록 </small>  </li>
                                            <li> public class ValidatorClass implements Validator {'{'}
                                                <li> <br /> @Override </li>
                                                <li> {'public boolean supprot(Class<?> clazz) { '} <small> # Validator가 해당클래스의 유효성을 지원하는지 여부확인</small>
                                                    <li> return _Entity.class.equals(clazz); </li>
                                                </li>
                                                <li> {'}'} </li> <br />

                                                <li> @Override </li>
                                                <li> void validate(Object target,Erros errors) {'{'} <small> # 유효검사를 해서 틀리면 에러 객체에 저장</small>

                                                    <li> <small> # thymeleaf util 사용</small> </li>
                                                    <li> {' if(StringUtils.isEmpty(board.getBoardTitle())) { '}
                                                        <li> {' errors.rejectValue("boardTitle","empty","empty boardTitle"); '} </li>
                                                    </li>
                                                    <li> {' } '} </li> <br />

                                                    <li> <small> # java 사용 </small> </li>
                                                    <li> {' if(board.getBoardTitle().isEmpty()) { '}
                                                        <li> {' errors.rejectValue("boardTitle","empty","empty boardTitle"); '} </li>
                                                    </li>
                                                    <li> {' } '} </li> <br />

                                                    <li> <small> #ValidationUtils를 사용하지 않는 방법 </small>    </li>
                                                    <li> Board board = Board(target); </li>
                                                    <li> {' if(board.getBoardTitle() == null) { '}
                                                        <li> errors.rejectValue("boardTitle","empty","empty boardTitle""); </li>
                                                    </li>
                                                    <li> {'}'} </li> <br />
                                                    {/*<li> # ValidationUtils를 사용하는 방법 	</li>*/}
                                                    {/*<li> ValidationUtils.rejectIfEmpty(errors,"field","defaultMessage"); </li>*/}
                                                </li>
                                                <li> {'}'} </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </div>
                                        <li> html 페이지 (일부 코드만 적어놓음) </li>
                                        <div className='block4'>
                                            <li> {' <div class="mb-3"> '}
                                                <li> {'     <label for="exampleFormControlInput1" class="form-label"> 제목 </label> '} </li>
                                                <li> {'     <input type="text" class="form-control" th:classappend="${#fields.hasErrors('}'boardTitle'{'})} ? '}'is-invalid'
                                                    {'" id="exampleFormControlInput1" th:field="*{boardTitle}">'} </li>
                                                <li> {'     <div class="invalid-feedback" th:if="${#fields.hasErrors('}'boardTitle'{')}" th:errors="{board.boardTitle}">Name Error</div> '} </li>
                                            </li>
                                        </div>
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

export default SpringValidator;