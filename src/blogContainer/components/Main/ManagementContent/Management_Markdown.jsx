import React, { useEffect, useRef } from 'react';

const Management_Markdown = (props) => {




  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> Markdown 이란 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 간단하다. </li>

            <h2 className='h2'> 📌 문법 </h2>
            <li> h1태그: # 제목 </li>
            <li> h2태그: ## 제목 </li>
            <li> h3태그: ### 제목 </li>
            <li> h4태그: #### 제목 </li>
            <li> h5태그: ##### 제목 </li>
            <li> h6태그: ###### 제목 </li>
            <li> i태그: *글자* , _글자_ </li>
            <li> b태그: **글자** , __글자__ </li>
            <li> i+b: **_글자_ </li>
            <li> del태그: ~~글자~~ </li>
            <li> u태그: {"<u></u>"} </li>
            <li> a태그: [글자클릭](url경로) , [글자클릭][참조경로] , [참조경로]: url경로 , {"<url경로>"} , "일반url" </li>
            <li> 줄바꿈: {"<br>"}, 띄어쓰기2번 </li>
            <li> 수평선: ---, ***, ___ </li>
            <li> 인용문: {">"}, {">>"}, {">>>"} </li>
            <li> 테이블: |값|의미|기본값| , `static(디폴트값)` , `relative` , `absolute`, `fixed` </li>
            <li> 강조: ```(html, css, javascript, bash, python, 공백) 코드 ``` </li>
            <li> 이미지: ![이미지][이미지경로] </li>
            <li> 이미지링크: [![이름](이미지경로)](링크)  </li>
            <li>  </li>

          </div>
        </details>
      </div>
    </div>
  );
}

export default Management_Markdown;