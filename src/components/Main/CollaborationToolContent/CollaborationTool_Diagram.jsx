import React from 'react';

const CollaborationTool_Diagram = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> ERD 설명 </summary>
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
          <summary> UML 설명 </summary>
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
          <summary> Flowchart </summary>
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
          <summary> GitMind(2022.01.05기준 비추천) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 삼발이 표시가 어려움 </li>
            <li> 무료, 부분유료(파일갯수 무제한, 모든 플랫폼, 고객지원, 월9달러이하) </li>
            <li> Web, Window, Mac OS </li>
            <li> 실시간 협업 가능(비번설정가능, 유효기간 설정가능) </li>
            <li> 한국어 지원 </li>
            <li> 이전에 작업하던 버전 복원 가능 </li>
            <li> ERD, UML, Diagram, Flowchart 등 지원 </li>
            <li> 여러 분야의 마인드맵, 테마, 레이아웃 등 지원 </li>
            <li> Hot Key(단축키) 지원 </li>
            <li> 노드 단위로 이동 가능 </li>
            <li> JPG,PNG,PDF,SVG,(유료: WORD,TXT,GITMIND) 내보내기 가능(무료는 갯수 제한있음????, 설명과 왜 다르지..) </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> StarUML </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> c++,java,c# 등 플러그인으로 사용가능 (좀더 알아볼것) </li>
            <li> ERD를 작성하기 쉬움, 여러 대기업에서 사용하는 프로그램 </li>
            <li> 무료, 유료 있음 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> dbdiagram.io </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> <a href="https://dbdiagram.io/d" target="_blank" rel="noopener noreferrer"> 링크 </a> </li>
            <li> ERD 용도 </li>
            <li> 협업x </li>
            <li> 코드로 테이블을 만들수 있음 </li>
            <li> 잘 사용하려면 러닝커브가 있음 </li>
            <li> 웹 프레임워크에서 데이터베이스 스키마 업로드가 가능한듯 싶다. </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> AqueryTool </summary>

          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 사람들이 많이 사용하는 툴 </li>
            <li> 개인적으로는 불편.. </li>

          </div>
        </details>
      </div>

    </div>
  );
}

export default CollaborationTool_Diagram;