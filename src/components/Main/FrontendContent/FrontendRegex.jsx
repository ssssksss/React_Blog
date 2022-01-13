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
                        <li>  [abc] : 각각의 문자("a" "b" "c")를 뜻함 </li>
                        <li>  [a-z] [A-Z] [0-9] : 문자 범위를 뜻함 </li>
                        <li> [a-f] </li>
                        <li> [a-zA-Z0-9] : 모든 문자와 숫자 </li>
                        <li>  ^[] : 범위에 포함되는 문자들을 제외한 나머지 </li>
                        <li>  . : 모든문자(한개)를 의미 </li>
                        <li>  /g : 전역에서 검색 </li>

                        <h2 className='h2'> 📌 자바스크립트 예시 모아놓기 </h2>
                        <li>  </li>

                        <h2 className='h2'> 📌 자바스크립트 정규표현식 사용 </h2>
                        <li> 정규표현식.test(값); , boolean값으로 출력 </li>


                    </div>
                </details>
            </div>
            {/* 끝 */}
        </div>
    );
}

export default FrontendRegex;