import React, { useEffect, useRef } from 'react';

const CodingConvention = (props) => {

    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> 네이밍 짓는 규칙 </summary>
                        <div className='block2'>

                            <h2> 📌 설명 </h2>
                            <li> 1. 누구나 알기 쉬운 단어 </li>
                            <li> 2. 동사보다는 명사 사용 </li>
                            <li> 3. 변수는 모두 소문자, 매개변수는 _변수명 으로 사용한다.  </li>
                            <li> 4. 클래스는 단어의 첫글자는 모두 대문자 , CamelCase 사용 </li>
                            <li> 5. URL은 '_'가 아닌 '-'를 사용 <small> # /memeber/member-information </small> </li>
                            <li> 6. 패키지명은 모두 소문자 </li>
                            <li> 7. ENUM 객체나 상수는 모두 대문자를 사용하고 , 상수에는 '_'문자로 단어를 구분가능하다. <small> # NUMBER_ONE=1; </small> </li>
                            <li> 8. 함수나 메소드명은 첫단어는 소문자 그 후에는 대문자로 만든다. <small> # getName() </small>  </li>
                            <li> 9. 객체나 클래스 이름을 함수나 메소드 등에 포함시키지 않는다. 중복해서 사용되지 않게한다. </li>
                            <li> 10. 단어의 의미가 다른 사람들이 딱 보고 볼 수 있는 단어를 사용하는 것이 좋다. </li>
                            <li> 11. 단어를 축약해서 사용할 때 다른 사람들이 보고 모른다면 풀네임을 사용하는 것이 좋다. </li>
                            <li> 12. DB컬럼은 '_'를 사용해서 단어를 구분한다.  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> 네이밍 </summary>
                        <div className='block2'>

                            <h2> 📌 디렉토리 네이밍 </h2>
                            <h3> 🎈 디렉토리 네이밍 작성법 </h3>
                            <li> 1. 소문자로 작성을 한다. </li> <br />

                            <h3> 🎈 디렉토리 종류 </h3>
                            <li> controller </li>
                            <li> service </li>
                            <li> dao </li>
                            <li> config <small> # 설정 파일들 </small> </li>
                            <li> model <small> vo(불변객체),dto(settet,getter) </small> </li>
                            <li> entity <small> DB와 매칭되는 테이블 객체 </small> </li>
                            <li> validate <small> # 검증 클래스 </small> </li>

                            <h2> 📌 클래스 네이밍 </h2>
                            <h3> 🎈 클래스 네이밍 작성법 </h3>
                            <li> 1. 클래스는 단어의 첫글자는 모두 대문자 , CamelCase 사용 </li>
                            <li> 2. [이름][클래스역할] 이와 같이 짓는다. </li> <br />
                            <h3> 🎈 클래스 네이밍 예시 </h3>
                            <li> UserApiController </li>
                            <li> UserController </li>
                            <li> UserService </li>


                            <h2> 📌 메소드,함수 네이밍 </h2>
                            <h3> 🎈 메소드 네이밍 작성법 </h3>
                            <li> 1. 단어의 첫글자는 소문자로 시작한다. </li>
                            <li> 2. 이름은 동사(역할)+명사(역할의주체) 와 같이 만든다. </li>
                            <li> 3. 메소드는  </li><br />
                            <h3> 🎈 메소드,함수 네이밍 예시 </h3>
                            <li> getUser() </li>
                            <li> createBoard() </li> <br />

                            <h2> 📌 변수 네이밍 </h2>
                            <h3> 🎈 변수,상수 네이밍 작성법 </h3>
                            <li> 1. 변수는 소문자로 작성을 한다. </li>
                            <li> 2. 변수의 단어는 축약도 가능하지만 다른 개발자가 알수 있는 단어이어야 한다. </li>
                            <li> 3. 상수는 대문자로 작성을 한다. </li>
                            <li> 4. 상수에는 '_'문자를 사용해서 단어를 구분한다. </li>
                            <li> 5. 매개변수와 내부변수를 구분할때 this나 '_' 방식이 있다. (회사마다 다른것 같다.) </li>
                            <li> 6. is를 변수명에 쓰면 뒤에는 부정명사는 사용하지 않는다. </li><br />
                            <h3> 🎈 변수,상수 네이밍 예시 </h3>
                            <li> name </li>
                            <li> credate </li>
                            <li> NUMBER_ONE = 1; </li>
                            <li> PI = 3.141592; </li> <br />

                            <h2> 📌 API 네이밍 </h2>
                            <h3> 🎈 API 네이밍 작성법 </h3>
                            <li> 1. GET,POST,PUT,DELETE 4가지 내용은 url에 포함하지 않게 해야한다. </li> <br />
                            <h3> 🎈 API 예시 </h3>
                            <li> insertMethodName <small> # 1건의 데이터 생성 </small> </li>
                            <li> insertMethodNameList <small> # 여러 건의 데이터 생성 </small> </li>
                            <li> updateMethodName <small> # 1건의 데이터 수정 </small> </li>
                            <li> updateMethodNameList <small> # 여러 건의 데이터 수정 </small> </li>
                            <li> deleteMethodName <small> # 1건의 데이터 삭제 </small> </li>
                            <li> deleteMethodNameList <small> # 여러 건의 데이터 삭제 </small> </li>
                            <li> selectMethodName <small> # 1건의 데이터 조회 </small> </li>
                            <li> selectMethodNameList <small> # 여러 건의 데이터 조회 </small> </li> <br />

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default CodingConvention;