import React, { useEffect, useRef } from 'react';

const CodingConvention = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 네이밍 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1. 이름은 짧으면 좋다. 하지만 축약해서 사용을 해서 신입사원이 읽지 못한다면
                                잘못된 네이밍이다. 그럴떄는 그냥 단어가 길더라도 쓰느게 좋을 수 있다. </li>
                            <li> 2. 단어 조합은 3개이하 정도가 적당한것 같다. 4개까지는 허용이 가능하지만
                                5개는 다시 만들어야 할 것 같다.. </li>
                            <li> 3. 좁은 범위에서 변수의 이름을 길게 할 필요는 없다. </li>
                            <li> 4. 클래스는 CamelCase 모든 단어는 대문자, 변수나 메소드는 camelCase 첫단어는 소문자 </li>
                            <li> 5.  </li>
                            <li> 3.  </li>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 - 변수, 상수 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 기본 설명 </h2>
                            <li> 1. 변수의 첫글자는 소문자로 작성하고 camelCase를 사용한다. </li>
                            <li> 2. 상수는 모두 대문자로 표기하고 "_"을 사용해서 단어를 구분한다. </li>

                            <h2 className='h2'> 📌 단위, 크기를 뜻하는 변수 </h2>
                            <li> 명확한 의미를 가진 네이밍을 써야한다. </li>
                            <li>  </li>
                            <div className="block4">
                                <li> length, number, size, time (x) </li>
                                <li> userNameLength, boardContentSizeKB, maxFileTitleByte (o) </li>
                            </div>

                            <h2 className='h2'> 📌 어떠한 처리를 거쳐야 하는 변수 </h2>
                            <li> password (x) </li>
                            <li> plainPassword, encodePassword </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 - 함수, 메소드 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 기능을 잘게 쪼개서 사용하는 것이 좋다. </li>
                            <li> 이름은 동사에 어떠한 기능이 있는지 잘 알수 있는 단어이어야 한다. </li>

                            <h2 className='h2'> 📌 예시 </h2>
                            <li> 무엇인가를 전환할 때
                                <div className="block4">
                                    <li> convertTo@ </li>
                                    <li>  </li>
                                </div>
                            </li>
                            <li>
                                <div className="block4">

                                </div>
                            </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 - 클래스 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 - DB </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 - html,css,js </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> "-" 문자를 사용해서 단어를 구분짓는다. <small> # home-main </small> </li>
                            <li> "__" 문자를 사용해서 하위 요소들을 작성하다 <small> # main__title </small> </li>
                            <li> "_","--"(2중택1) 수정이 가능한 단어를 적는다. <small> # main_red , main_blue </small> </li>
                            <li> "js-","camelCase" (2중택1) javascript와 관련있는 클래스라는 것을 표기한다. <small> # js-btn </small> </li>
                            <li> 3 </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 가독성을 높이는 방법 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 1. 코드의 줄을 바꾸어서 동일하게 맞추어 준다. </li>
                            <li> 2. 연산자를 많이 사용하는 것보다 함수를 만들어서 처리하는 것이 좋다. </li>
                            <li> 3. 변수는 변수끼리 함수는 함수끼리 배치를 하는 것이 좋다. </li>
                            <li> 4. 코드에도 글을 읽기 좋게 큰제목, 중간제목, 소제목이 있듯이 구분하여 작성하는 것이 좋다.
                                모든 기준은 큰것에서 작은 순으로 작성하는 것이 좋다. </li>
                            <li> 5. 사용자 경험처럼 개발자들의 자주 사용하는 경험들이 있다.
                                <div className="block4">
                                    <li> isNotEmpty나 != 처럼 부정적인 것보다 isEmpty나 == 처럼 긍정적인 것을 사용 </li>
                                    <li> {' if(num>2) '} 보다는 {' if(num<2) '} 이와 같이 사용한다.  </li>
                                    <li>  </li>
                                </div>
                            </li>
                            <li> 6. 중복되는 변수나 중복되는 함수들은 하나로 만들어서 사용을 한다.  </li>
                            <li> 7. 모든 기능을 잘게 쪼개서 사용을하고 보관해야 한다.  </li>
                            <li> 8. 하나의 클래스,함수,변수 등에 여러개의 기능이나 의미를 가지고 있지 않아야 한다. </li>
                            <li> 9.   </li>
                            <li> 3  </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default CodingConvention;