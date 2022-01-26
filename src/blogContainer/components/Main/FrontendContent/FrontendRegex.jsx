import React from 'react';

const FrontendRegex = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> 정규 표현식 문법(정리중) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 🎈 범위
              <div className="block4">
                <li> [a-z] : 소문자 </li>
                <li> [A-Z] : 대문자 </li>
                <li> [0-9] : 숫자 </li>
                <li> [ㄱ-힣] : 한글 </li>
                <li> [~`!@#$%\^&*()-+=] : 특수문자 </li>
                <li> [커스텀글자조합] : 특정글자들을 지정 가능 <small> [abc] : a,b,c중에 한글자 일치 </small> </li>
                <li> [a-zA-Z0-9] : 이와같이 여러개의 조합가능 </li>
                <li> [^0-9] : 패턴 문자들을 제외한 나머지 <small> a[^0-9] = ab ac a@ aㄱ </small> </li>
                <li> {" 패턴{n} "} : 패턴과 일치하는 문자의 갯수가 n개  </li>
                <li> {" 패턴{n,} "} : 패턴과 일치하는 문자의 갯수가 n개 이상  </li>
                <li> {" 패턴{n,m} "} : 패턴과 일치하는 문자의 갯수가 n개 이상 m개 이하  </li>
                <li> () : 하나로 묶어준다. </li>
                <li>  </li>
              </div>
            </li>
            <li> 🎈 메타문자(이미 정해놓은 문자 규칙)
              <div className="block4">
                <li> \v \n \f \r \t [\b] : 수직 탭, 개행, 폼 피드, 캐리지 리턴, 탭, 백스페이스 </li>
                <li> \d \D \w \W : [0-9] [^0-9] [a-zA-Z0-9_] [^a-zA-Z0-9_]  </li>
                <li> \s \S : [\f\n\r\t\v] [^\f\n\r\t\v] </li>
                <li> \x \o : 16진수일치 8진수일치 </li>
              </div>
            </li>
            <li> 🎈 부호
              <div className="block4">
                <li> . : 어떠한 문자 1개가 들어갈 수 있다는 것을 의미합니다. 연달아서 .. 으로도 사용가능합니다.
                  또한 공백도 인식합니다. .이라는 문자를 표현하고 싶다면 \. 을 사용합니다.
                  <small> x. = xa ab xb x@ </small> </li>
                <li> + : 1개이상의 문자를 탐색 <small> a[0-9]+ : a0 a123 a는 안됨 , 1개이상의 숫자만 오면 만족 </small> </li>
                <li> * : 0개이상의 문자를 탐색 <small> a[0-9]* : a a0 a1  </small> </li>
                <li> ? : 0~1개일때 일치 <small> a[0-9]? : a a0 a9 </small> </li>
                <li> ^ : 문장의 제일 처음에 오면 문자열의 시작에 특정 문자가 오게지정 가능 <small> ^[0-9] , 반드시 문자첫글자는 0~9로 시작한다 </small> </li>
                <li> [^패턴] : 패턴과 일치하는 문자들을 제외한경우 일치 <small>  </small> </li>
                <li> +? *? {"{n,}?"} : 가장 최소 단위로 일치하는 값들을 찾게하는 기호(게으른 수량자) <small> [a-zA-Z]{"{2,4}?"} , 2글자가 일치하는게 우선순위를 가짐 </small> </li>
                <li> \숫자 : 하위 표현식으로 묶어서 임시 버퍼에 저장된 값을 불러온다. 임시 버퍼에 저장된값은
                  앞에서 사용한값을 그대로 불러온다.(역참조)
                  <small> ([a-z])\1 = [a-z][a-z] = aa bb ab틀림 </small> </li>
                <li> <small> 아래 ?를 사용하는 정규표현식은 그냥 칸막이 같은 역할을 한다고 보면된다. </small> </li>
                <li> ?=패턴 : (뒤쪽에서사용)찾는 조건에서 패턴을 제외한고 찾는다. <small> .*(?=@) , @기호가 나오기전까지 모든 문자를 일치시킨다.. </small> </li>
                <li> (?!) : (뒤쪽에서사용)패턴으로 끝나는 값들을 포함해서 찾는다. <small>  </small> </li>
                <li> {" ?<=패턴 "} : (앞쪽에서사용)찾기전에 패턴으로 시작되는 값을 찾고 시작한다. <small> (?=@).* , @기호가 나온 이후에 모든 문자를 일치시킨다. </small> </li>
                <li> {" (?<!패턴) "} : (앞쪽에서사용)패턴으로 시작되는 값들은 제외하고 검색한다. <small>  </small> </li>
              </div>
            </li>

            <li>  r : 문자열 그대로 출력 , str = r"123\n" </li>
            <li> /g : 문자열내에서 모든 패턴 검색 </li>
            <li> /i : 대소문자 식별x </li>
            <li> /m : 다중 라인의 문자열에서도 검색 </li>
            <li> $ : 문자열의 끝을 표시 </li>
            <li> \b : 단어의 경계 , test\b는 test1,test2 불가능 </li>
            <li> \B : 단어가 공백이 아닌것으로 표시 , test\B는 test1,test2 가능  </li>
            <li> \ : 문자그대로를 표시해주는 기능  </li>
            <li> | :  test|code , test와 code둘다 가능  </li>
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