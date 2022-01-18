import React from 'react';

const FrontendRegex = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 정규 표현식 문법(정리중) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  r : 문자열 그대로 출력 , str = r"123\n" </li>
                        <li> [abc] : 각각의 문자("a" "b" "c")를 뜻함 </li>
                        <li> [a-z] [A-Z] [0-9] [ㄱ-힣] [~`!@#$%\^&*()-+=] : 문자 범위를 뜻함 </li>
                        <li> [a-f] </li>
                        <li> [a-zA-Z0-9] : 모든 문자와 숫자 </li>
                        <li> ^ : 문자열의 시작을 표현 </li>
                        <li> [^패턴] : 패턴 문자들을 제외한 나머지 </li>
                        <li> .x : 모든문자(한개)를 의미, 공백도 가능 </li>
                        <li> /g : 문자열내에서 모든 패턴 검색 </li>
                        <li> /i : 대소문자 식별x </li>
                        <li> /m : 다중 라인의 문자열에서도 검색 </li>
                        <li> $ : 문자열의 끝을 표시 </li>
                        <li> \b : 단어의 경계 , test\b는 test1,test2 불가능 </li>
                        <li> \B : 단어가 공백이 아닌것으로 표시 , test\B는 test1,test2 가능  </li>
                        <li> \s : 공백문자, 탭문자 매치  </li>
                        <li> \S : 공백문자가 아닌 한글자와 매치  </li>
                        <li> \d : 숫자 매치  </li>
                        <li> \D : 숫자가 아닌 문자 매치  </li>
                        <li> \w : [A-Za-z0-9_] 문자 매치  </li>
                        <li> \W : \w가 아닌 문자 매치  </li>
                        <li> \n : 개행문자  </li>
                        <li> \ : 문자그대로를 표시해주는 기능  </li>
                        <li> | :  test|code , test와 code둘다 가능  </li>
                        <li> [] : 대괄호내부의 문자중 하나 매치  </li>
                        <li> - : 범위를 표현 가능  </li>
                        <li> x? : x가 1개 혹은 0개이다  </li>
                        <li> x* : x가 0개이상이다(반복가능)  </li>
                        <li> x+ : 글자가 1개이상이다.(반복가능) </li>
                        <li> 글자{"{값}"} : 글자가 수 만큼 있다.  </li>
                        <li> 글자{"{값,}"} : 글자가 수 이상만큼 있다.  </li>
                        <li> 글자{"{값1,값2}"} : 글자가 값1~값2 만큼 있다.  </li>
                        <li> () : 감싸주기  </li>
                        <li> x(?=y) , y조건에 만족하는 값만 x에 대응  </li>
                        <li> x(?!y) , x뒤에 y가 없을경우 허용  </li>
                        <li> (?=.*조건글자넣기{"{a,b}"}) , 조건글자 a~b자리  </li>
                        <li>   </li>

                        <h2 className='h2'> 📌 자바스크립트 정규표현식 사용 </h2>
                        <li> 정규표현식.test(값); , boolean값으로 출력 </li>


                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 정규표현식 예시 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 이메일 </h2>
                        <li> {" /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i "} </li>
                        <li> {" /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ "} </li>
                        <li> {"^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$"} , </li>

                        <h2 className='h2'> 📌 전화 </h2>
                        <li> {" /^\d{3}-\d{3,4}-\d{4}$/ "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 휴대폰 </h2>
                        <li> {" /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/ "} </li>
                        <li> {" /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/u "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 URL </h2>
                        <li> {" ^(https?):\/\/([^:\/\s]+)(:([^\/]*))?((\/[^\s/\/]+)*)?\/?([^#\s\?]*)(\?([^#\s]*))?(#(\w*))?$ "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 단어 </h2>
                        <li> /단어/g </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 단어 제외 </h2>
                        <li> {" \b(?!\bto\b)\w+\b "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 우편번호 </h2>
                        <li> {" /^\d{3}-?\d{3}$/u "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 아이디 </h2>
                        <li> {" /^[a-zA-Z]\w{2,7}$/u "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 주민등록번호 </h2>
                        <li> {" /^\d{2}[0-1]\d[0-3]\d-?[1-6]\d{6}$/u "} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 패스워드 </h2>
                        <li> {" ^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$ "} , 8자리숫1문1특1</li>
                        <li> {"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"} , 8자리대1소1숫1</li>
                        <li> {"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}"} , 8자리대1소1숫1특1 </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 IP주소 </h2>
                        <li> {"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"} </li>
                        <li>  </li>

                        <h2 className='h2'> 📌  </h2>
                        <li>  </li>
                        <li>  </li>

                    </div>
                </details>
            </div>
            {/* 끝 */}
        </div>
    );
}

export default FrontendRegex;