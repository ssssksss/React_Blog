import React from 'react';

const BackendSCTCache = (props) => {
 return (
  <>
   <div className="common_style">
    <div className='block1'>
     <details>
      <summary> 토큰 </summary>
      <div className='block2'>

       <h2 className='h2'> 📌 JWT토큰 </h2>
       <li> 헤더
        <div className="block4">
         <li> "alg" : "HS256" 👉 알고리즘 설정 </li>
         <li> "typ" : "JWT" 👉 토큰의 종류 </li>
         <li>  </li>
        </div>
       </li>
       <li> 페이로드
        <div className="block4">
         <li> 1. 등록된 클레임
          <div className="block4">
           <li> "iss" : "발급자이름" </li>
           <li> "sub" : "토큰 제목" </li>
           <li> "aud" : "토큰 대상자" </li>
           <li> "exp" : "토큰 만료 시간" 👉 NumericDate 형식(13자리숫자) </li>
           <li> "nbf" : "토큰 활설 날짜" 👉 </li>
           <li> "iat" : "토큰 발급 시간"  👉 </li>
           <li> "jti" : "토큰 식별자 ID" 👉 </li>
          </div>
         </li>
         <li> 2. 공개 클레임
          <div className="block4">
           <li> "URI주소" : "값" </li>
          </div>
         </li>
         <li> 3. 비공개 클레임
          <div className="block4">
           <li> "키" : "값" </li>
          </div>
         </li>
        </div>
       </li>
       <li> 서명
        <div className="block4">
         <li> (헤더+페이로드)를 Base64로 인코딩 </li>
         <li> 인코딩한 값을 비밀키를 이용해서 헤더에서 정의한 알고리즘으로 암호화 </li>
         <li> 암호화한 값을 다시 Base64로 인코딩 </li>
        </div>
       </li>

      </div>
     </details>
    </div>
   </div>

  </>
 );
}

export default BackendSCTCache;