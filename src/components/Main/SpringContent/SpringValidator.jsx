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
        <li> validator를 사용할 때는 ValidationUtils를 사용하는 방법과 사용하지 않는 2가지 방법이 있다. </li>
        <li> 사용자의 정보를 검증하는 단계는 컨트롤러 즉 사용자의 정보를 처음에 받는 곳에서 처리를 해야한다. </li>
       </li>
       <li> <a href="https://docs.spring.io/spring-framework/docs/4.1.x/spring-framework-reference/html/validation.html"
        target="_blank" rel="noopener noreferrer"> 공식 문서 </a>
        <li> Validator 인터페이스는 Errors객체를 사용하여 유효성 실패를 보고할 수 있다. </li>
        <li> support메소드는 Validator가 제공된 클래스 객체를 유효 검사할 수 있는지 판단</li>
        <li> validate메소드는 주어진 객체가 오류 객체인 경우 Error객체로 등록한다. </li>
        <li> Validator 구현은 간단하고 , 스프링 프레임워크는 ValidationUtils 제공한다.
         하지만 스프링 Validation API를 사용하면 편리하다. </li>
       </li>

      </div>
     </details>
    </div>

    <div className='block1'>
     <details>
      <summary> Validator 클래스와 bindingResult 사용방법 </summary>
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
       <li></li>

       <h2 className='h2'> ✔ 예시 </h2>
       <li>
        <h3 className='h3'> 🎈 Controller </h3>
        <div className='block4'>
         <li> {' @RestController '} </li>
         <li> {' public class UserController { '}
          <li> {'@RequestMapping(value="/auth/signup", method=RequestMethod.POST) '} </li>
          <li> {'public UserDto Signup(@RequestBody UserDto data,BindingResult bindingResult) { '}
           <li> {'new UserValidator().validate(data,bindingResult); '} </li>
           <li> {'System.out.println(bindingResult.getFieldError("uid")); '} </li>
           <li> {'return data; '} </li>
          </li>
          <li> {'} '} </li>
         </li>
         <li> {' } '} </li>
        </div>
        <h3 className='h3'> 🎈 커스텀 Validator 클래스</h3>
        <div className='block4'>
         <li> Validator 인터페이스는 자바가 아닌 스프링을 사용해야한다!!!!!! </li>
         <li> @Component <small> 선언 안해도 사용은 가능해서 좀 더 알아봐야 할것 같다. </small> </li>
         <li> {' public class UserValidator implements Validator { '}
          <li> {' @Override '} </li>
          <li> {' public boolean supports(Class<?> clazz) { '}
           <li> {' return userDto.class.equals(clazz); '} </li>
          </li>
          <li> {' } '} </li>
          <li> {' @Override '} </li>
          <li> {' public void validate(Object target, Errors errors) { '}
           <li> {' UserDto userDto = (UserDto) target; '} </li>
           <li> {' if(userDto.getUid().length() > 5) { '}
            <li> {' errors.rejectValue("uid","uid에 문제가 있다."); '} </li>
           </li>
           <li> {' } '} </li>
          </li>
          <li> {' } '} </li>
         </li>
         <li> {' } '} </li>
        </div>
       </li>

      </div>
     </details>
    </div>
    <div className='block1'>
     <details>
      <summary>@Valid에 사용하는 어노테이션 </summary>
      <div className='block2'>

       <h2 className="h2"> 📌 설명</h2>
       <li> 스프링에서 사용 </li>
       <li> hibernate 관련? </li>

       <h2 className="h2"> 📌 @NonNull</h2>
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
       <li> DB에 SQL쿼리를 보내기전에 엔티티에 값이 잘못 들어가면 ConstraintViolationException예외 발생</li>
       <li> SQL쿼리에는 not null 생성 </li>

       <h2 className="h2"> 📌 @NotEmpty </h2>
       <li> 변수 위에 선언 </li>
       <li> Null, 빈문자열("") 불가능 , " " 은 가능 </li>
       <li> 문자열 검증 용도 </li>
       <li> String과 Collection 타입에만 적용이 가능하다고 한다. (boolean에는 @NotNull) </li>
       <li> SQL쿼리에는 not null을 붙여주지 않음 </li>

       <h2 className="h2"> 📌 @NotBlank </h2>
       <li> 변수 위에 선언 </li>
       <li> 문자열 검증 용도 </li>
       <li> Null, 빈문자열("") , " " 모두 불가능 </li>
       <li> SQL쿼리에는 not null을 붙여주지 않음 </li>


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

       <h2 className="h2"> 📌 @Past </h2>
       <li> 과거 날짜 </li>
       <li></li>

       <h2 className="h2"> 📌 @PastOrPresent </h2>
       <li> @Past + 오늘 날짜 </li>
       <li></li>

       <h2 className="h2"> 📌 @Future </h2>
       <li> 미래 날짜 </li>
       <li></li>

       <h2 className="h2"> 📌 @FutureOrPresent </h2>
       <li> @Future + 오늘 날짜 </li>
       <li></li>

       <h2 className="h2"> 📌 @AssertTrue @AssertFalse </h2>
       <li> 참,거짓 조건 설정 </li>
       <li></li>

       <h2 className="h2"> 📌</h2>
       <li></li>

      </div>
     </details>
    </div>

    <div className='block1'>
     <details>
      <summary>@Valid 사용 예시 </summary>
      <div className='block2'>

       <h2 className='h2'> ✔ 예시 </h2>
       <li>
        <div className='block3'>
         <h3 className='h3'> 🎈 Controller </h3>
         <div className='block4'>
          <li> {'@RequestMapping(value="/auth/signup", method=RequestMethod.POST) '} </li>
          <li> {'public HashMap<String,Object> Signup(@Valid @RequestBody UserDto data,BindingResult bindingResult) { '}
           <li> {'HashMap<String,Object> userDto = new HashMap<String,Object>(); '} </li>
           <li> {'System.out.println(bindingResult.getFieldErrorCount()); '} </li>
           <li> // bindingResult.getAllErrors() 에러 객체를 리스트로 받음 </li>
           <li> {' List<ObjectError> list = bindingResult.getAllErrors(); '} </li>
           <li> {' for(ObjectError e : list) { '}
            <li> {'  System.out.println(e.getDefaultMessage()); '} </li>
           </li>
           <li> {' } '} </li>
           <li> {'return userDto; '} </li>
          </li>
          <li> {'} '} </li>
         </div>
         <h3 className='h3'> 🎈 Entity나 Dto</h3>
         <div className='block4'>
          <li> {' public class UserDto { '}
           <li> {' private static final long serialVersionUID = 1L; '} </li>
           <li> {' private String uid; // 로컬 유저 식별자 '} </li>
           <li> {' @Size(min=1, max=5, message = "글자크기 문제") '} </li>
           <li> {' private String uaid; // 유저 api 식별자 '} </li>
           <li> {' private String nickname; // 유저 닉네임 '} </li>
           <li> {' private String email; // 유저 이메일 '} </li>
           <li> {' private String password; // 유저 비밀번호 '} </li>
          </li>
          <li> {' } '} </li>
         </div>
        </div>
       </li>

      </div>
     </details>
    </div>

    {/* 끝 */}
   </div>
  </>
 );
}

export default SpringValidator;