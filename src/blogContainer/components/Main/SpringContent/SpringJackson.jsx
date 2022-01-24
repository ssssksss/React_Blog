import React from 'react';

const SpringJackson = (props) => {

 return (
  <div className="common_style">
   <div className='block1'>
    <details>
     <summary> Jackson 이란? </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> Java Object {" <---> "} JSON 변환 </li>
      <li> POJO 기반 자바 객체 JSON 변환 가능 </li>
      <li> Node형태 처럼 데이터를 다룰수 있음 </li>
      <li> 스트림 형식으로 데이터를 분석 및 생성 </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li>
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> JSON Serialization </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> ObjectMapper </li>
      <li> module </li>
      <li> customSerializer </li>
      <li> 객체맵퍼에 모듈을 등록, 모듈에 커스텀시리얼라이저를 등록 </li>

      <h2 className='h2'> 📌 설명 </h2>
      <li> ObjectMapper().registerModeul(모듈) </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li> 소제목
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> 모듈 </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> JavaTimeModule() : </li>
      <li>  </li>
      <li>  </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> @Around </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> 대상 객체 메서드 전,후 예외 발생 시점에 공통 기능 수행 </li>
      <li> 2 </li>
      <li> 3 </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li> 소제목
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>
  </div>
 );
}

export default SpringJackson;