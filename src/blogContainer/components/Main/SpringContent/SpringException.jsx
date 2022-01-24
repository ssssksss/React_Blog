import React from 'react';

const SpringException = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> 예외 처리 설명 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 모든 예외의 부모는 Exception이다. </li>
                        <li> Exception은 Throwable을 상속한다. </li>
                        <li> e.printStackTrace(); 메소드는 예외가 발생했을때 어디에서 발생했는지 알려준다. 기본적으로 작동 </li>

                        <h2 className='h2'> 📌 예외가 발생하는 부분 </h2>
                        <li> 1. Dispatcher Servlet 전 Filter에서 발생하는 예외 </li>
                        <li> 2. Controller, Service, Repository 에서 발생하는 예외 - HandlerExceptionResolver를 이용
                            <div className="block4">
                                <li> 스프링 컨트롤러 - @ExceptionHandler
                                    <div className="block4">
                                        <li> {'     @ExceptionHandler(value = TestException.class) '} </li>
                                        <li> {'     public String controllerExceptionHandler(Exception e) { '}
                                            <li> {'         logger.error(e.getMessage()); '} </li>
                                            <li> {'         return "/error/404"; '} </li>
                                        </li>
                                        <li> {'     } '} </li>
                                    </div>
                                </li>
                                <li> 스프링 컨트롤러 - @RestControllerAdvice, @ControllerAdvice
                                    <div className="block4">
                                        <li> 커스텀 Handler를 만들어서 사용 </li>
                                    </div>
                                </li>
                                <li> 전역 처리 - @ControllerAdvice </li>
                                <li> 메서드 단위 - try/catch </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> try-catch-throw (미정리) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <h3 className='h3'> 🎈 </h3>
                            <div className='block4'>
                                <li> try {"{"}
                                    <li> 코드작성 </li>
                                </li>
                                <li> {"} catch(Exception e) {"}
                                    <li> 내용 </li>
                                </li>
                                <li> {"}finally{"}
                                    <li> 예외와 상관없이 무조건 실행 </li>
                                </li>
                                <li> {"}"} </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> throw </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 예외처리를 다른곳에서 처리하겠다는 의미 </li>

                        <h2 className='h2'> 📌 강제로 예외발생시키기 </h2>
                        <li> throw new 예외종류();  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 사용예시 </h3>
                                <div className='block4'>
                                    <li> public void 메소드() throws 예외종류 {"{"}
                                        <li> 코드 작성 </li>
                                    </li>
                                    <li> {"}"} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> 예외 종류 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> ArithmeticException : 수학적인 문제 </li>
                        <li> SignatureException : 받아온 서명 메시지에 문제가 있을경우 에러  </li>
                        <li>  </li>
                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> @ExceptionHandler </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> @Controller, @RestController에서 1개의 예외처리가능 </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <h3 className='h3'> 🎈 </h3>
                            <div className='block4'>
                                <li> @ExceptionHandler(예외.class) </li>
                                <li> 메소드 </li>
                                <li>  </li>
                            </div>
                        </li>


                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> @ControllerAdvice </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                    </div>
                </details>
            </div>
            <div className='block1'>
                <details>
                    <summary> @RestControllerAdvice </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                    </div>
                </details>
            </div>
            {/* 끝 */}
        </div>
    );
}

export default SpringException;