import React from 'react';

const CssBasic2 = (props) => {

  return (
    <>
      <div className="common_style">
        <div className='block1'>
          <details>
            <summary> [1] FLEX </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> <a href="https://flexboxfroggy.com/#ko" target="_blank" rel="noopener noreferrer"> flex코딩 게임 </a> </li>
              <li> display: flex; </li>
              <li> gap: 10px 5px; #flex요소들 사이에 간격을 조정할 수 있음 margin사용을 하지 않아도 됨 </li>

              <h2 className='h2'> 📌 flex-wrap (정렬 라인 배치 설정) </h2>
              <div className="block4">

                <li> flex-wrap : nowrap; <small> default, 여러 줄배치 </small> </li>
                <li> flex-wrap : wrap; <small> # 1줄배치 </small> </li>
                <li> flex-wrap : wrap-reverse; # 요소의 시작점과 끝점의 기준이 반대로 배치 , 좌측아래를 기준으로 배치되고
                  행이 넘어가면 위로 배치 </li>
              </div>

              <h2 className='h2'> 📌 flex-direction(정렬 배치 방식) </h2>
              <div className="block4">
                <li> flex-direction: column; #플렉스요소들을 세로로 배치 </li>
                <li> flex-direction: column-reverse; #플렉스요소들을 세로로 역순으로 배치 </li>
                <li> flex-direction: row; #기본값??, 플렉스요소들을 가로로 배치 </li>
                <li> flex-direction: row-reverse; #플렉스요소들을 가로로 역순으로 배치 </li>
              </div>

              <h2 className='h2'> 📌 flex-flow(flex-wrap + flex-direction) </h2>
              <div className="block4">
                <li> flex-flow : [ wrap | nowrap | wrap-reverse ] [ column | row | column-reverse | row-reverse ]; </li>
              </div>

              <h2 className='h2'> 📌 align-content (줄 끼리의 간격) </h2>
              <div className="block4">
                <li> flex박스나 grid에서 사용하는 배치 방법 , F,G의 줄끼리의 간격을 설정  </li>
                <li> 1줄만 있으면 소용이 없음, flex-wrap: nowrap과 사용하면 무의미  </li>
                <li> align-content: flex-start; <small> # 여러줄을 앞쪽에 붙여서 정렬 </small>  </li>
                <li> align-content: flex-end;  <small> # 여러줄을 뒤쪽에 붙여서 정렬 </small></li>
                <li> align-content: center; <small> # 여러줄을 가운데에 붙여서 정렬 </small></li>
                <li> align-content: space-between; <small> # 양끝에 간격없이, 동일간격 </small>  </li>
                <li> align-content: space-around; <small> # 양끝에 간격있고, 동일간격 </small>  </li>
                <li> align-content: space-evenly; <small> # 양끝에서 부터 모든 간격 동일 </small>  </li>
                <li> align-content: stretch; <small> # 컨테이너 전체를 n등분하여 배치 </small>  </li>
              </div>

              <h2 className='h2'> 📌 justify-content (가로 1줄에서의 요소끼리의 간격) </h2>
              <div className="block4">
                <li> flex-line을 기준으로 아이템을 정렬 </li>
                <li> justify-content: center; <small> #요소를 중간에서부터 배치 </small>  </li>
                <li> justify-content: flex-start,left; <small> #요소를 앞쪽에서부터 배치 </small>  </li>
                <li> justify-content: flex-end,right; <small> #요소를 뒤쪽에서부터 배치 </small></li>
                <li> justify-content: space-between; <small> # 양끝에 간격없이, 동일간격 </small> </li>
                <li> justify-content: space-around; <small> # 양끝에 간격있고, 동일간격 </small> </li>
                <li> justify-content: space-evenly; <small> # 양끝에서 부터 모든 간격 동일  </small> </li>
              </div>

              <h2 className='h2'> 📌 align-items (세로 1줄에서의 요소끼리의 간격) </h2>
              <div className="block4">
                <li> align-items: center; <small> #요소를 가운데에서부터 배치 </small> </li>
                <li> align-items: flex-start; <small> #요소를 위쪽에서부터 배치 </small>  </li>
                <li> align-items: flex-end;  <small> #요소를 아래쪽에서부터 배치 </small>  </li>
                <li> align-items: baseline; <small> #요소를 컨테이너의 기준선(글자기준)에 배치 </small> </li>
                <li> align-items: stretch; <small> #기본값, 컨테이너와 높이가 같게 변경뒤 배치 </small></li>
              </div>

              <h2 className='h2'> 📌 align-self (개별 align-items 설정) </h2>
              <div className="block4">
                <li> 플렉스 요소에서 설정 , align-items보다 우선 순위 </li>
                <li> align-self: center;</li>
                <li> align-self: flex-start;</li>
                <li> align-self: flex-end;  </li>
                <li> align-self: baseline;  </li>
                <li> align-self: stretch; <small> # default </small>  </li>
              </div>

              <h2 className='h2'> 📌 flex요소 순서와 크기 </h2>
              <div className="block4">
                <li> flex : flex-grow flex-shrink flex-basis 이와 같이 입력해서 사용 가능</li>
                <li> order : 값# 플렉스요소들의 배열 순서를 바꿀 수 있음  </li>
                <li> flex-grow : 플렉스요소 너비 증가 비율 </li>
                <li> flex-shrink :  플렉스요소 너비 감소 비율 </li>
                <li> flex-basis : 플렉스 요소를 길이를 지정 </li>
              </div>
            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> [2] GRID </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> <a href="http://cssgridgarden.com/#ko" target="_blank" rel="noopener noreferrer"> grid코딩 게임 </a> </li>

              <h2 className='h2'> 📌 grid 사용 </h2>
              <li> display: grid; </li>

              <h2 className='h2'> 📌 grid 공간 나누기 </h2>
              <li> grid-template: rows / columns <small> # [row,columns] ,    </small>  </li>
              <li> grid-template-columns: 20% 20% 20% 20% 20%; </li>
              <li> grid-template-columns: repeat(4, 1fr); <small> (반복횟수,간격) </small> </li>
              <li> grid-template-columns: repeat(4, 1fr 5fr 10fr); </li>
              <li> grid-template-rows: 20% 20% 20% 20% 20%; </li>
              <li> grid-template-rows: 1fr 5fr; <small> # 공간 1칸을 1/6,5/6으로 쪼갠다 </small> </li>
              <li> grid-template-rows: 100px repeat(2, 1fr 2fr) 100px; <small> # 100px 1fr 2fr 1fr 2fr 100px</small> </li>
              <li> grid-auto-rows: 100px; </li>
              <li> grid-auto-rows: minmax(50px, auto) <small> (최소크기, 최대크기) </small> </li>

              <h2 className='h2'> 📌 grid 요소 위치 </h2>
              <li> grid-column,grid-row 2개만 사용해도 충분하다.  </li>
              <li> grid-column: n/m; <small> # 요소가 위치할 곳이 (n ~ m-1)번째 열 </small> </li>
              <li> grid-area: n/m/o/p; <small> # 요소가 위치할 곳이 (m ~ p-1)번째 열, (n ~ o-1)번째 행 </small> </li>
              <li> grid-row: n/m; <small> # 요소가 위치할 곳이 (n ~ m-1)번째 행 </small> </li>
              <li> grid-column-start: n; <small> # 요소가 위치할 곳이 n번째 열 </small> </li>
              <li> grid-column-start: n; grid-column-end: m; <small> # 요소가 위치할 곳이 (n ~ m-1)번째 열 </small> </li>
              <li> grid-column-start: n; grid-column-end: span m; <small> # 요소가 위치할 곳이 n번째 열부터 m너비 </small> </li>
              <li> grid-row-start: n; <small> # 요소가 위치할 곳이 n번째 행 </small> </li>
              <li> grid-row-start: n; grid-row-end: m; <small> # 요소가 위치할 곳이 (n ~ m-1)번째 행 </small> </li>
              <li> grid-row-start: n; grid-row-end: span m; <small> # 요소가 위치할 곳이 n번째 행부터 m너비 </small> </li>


              <h2 className='h2'> 📌 grid 간격 </h2>
              <li> grid-gap: 5px; </li>
              <li> grid-column: 1/3 <small> 자식요소, 가로  </small> </li>
              <li> grid-row: 1/3 <small> 자식요소, 세로  </small> </li>
              <li> grid-area 2/2/3/4 <small> 자식요소, rowStart/columnStart/rowEnd/columnEnd  </small> </li>
              <li> grid-area: 명칭; <small> 자식요소 </small> </li>
              <li> grid-template-areas: <small> 점으로 공간차지 있는것을 표시, t대신에 grid-area요소 명칭 넣기 </small>
                <li> ". t t ." </li>
                <li> "t t t t" </li>
                <li> "t t t t" </li>
                <li> ". t t ." </li>
              </li>

              <h2 className='h2'> 📌 grid 요소 순위 </h2>
              <li> order: 0 <small> # default=0 </small> </li>
              <li>  </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li>
                <div className='block3'>
                  <h3 className='h3'> 🎈 </h3>
                  <div className='block4'>
                    <li> display: grid; </li>
                    <li> grid-template-columns: 1fr 1fr 1fr 1fr; </li>
                    <li> grid-template-rows: 50px 50px; </li>
                  </div>
                  <div className='block4'>
                    <li> display: grid; </li>
                    <li> grid-template-columns: repeat(12, 1fr) </li>
                  </div>
                  <div className='block4'>
                    <li> display: grid; </li>
                    <li> grid-template-columns: repeat(4, 1fr 5fr 10fr); </li>
                  </div>
                  <div className='block4'>
                    <li> display: grid; </li>
                    <li> grid: '. . .'; </li>
                    <li> gap: 16px; </li>
                    <li> column-gap: 20%; </li>
                  </div>
                  <div className='block4'>
                    <li> display: inline-grid; </li>
                    <li>  </li>
                  </div>
                  <div className='block4'>
                    <li> display: grid; </li>
                    <li> grid-template-columns: repeat(4, 1fr); </li>
                    <li> grid-auto-rows: 100px; </li>
                  </div>
                  <div className='block4'>
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>
                  </div>
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> [3] Font </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 폰트 사용 </h2>
              <div className='block4'>
                <li> App.css 처럼 최상단 파일에 아래와 같이 입력 </li>
                <li> 사용하려는 css에 font-family: '폰트패밀리명'; 과 같이 입력해서 폰트 사용 </li>
              </div>

              <h2 className='h2'> 📌 폰트 속성 </h2>
              <div className='block4'>
                <li> font-weight: 10; <small> 폰트굵기 설정 </small> </li>
                <li> font-size: 10px, 1em, 1rem, 10%; <small> 폰트크기 설정 </small>  </li>
                <li> color: red, #ffffff , rgba(255,255,255); <small> 폰트색깔 설정 </small> </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 폰트 확장자 </h2>
              <div className='block4'>
                <li>  </li>
                <li>  </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 URL </h2>
              <div className='block4'>
                <li> @font-face {"{"}
                  <li> font-family: "Cafe24Ssurround"; </li>
                  <li> src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");</li>
                  <li> font-weight: normal; </li>
                  <li> font-style: normal; </li>
                </li>
                <li> {"}"} </li>
              </div>

              <h2 className='h2'> 📌 로컬 </h2>
              <div className='block4'>
                <li> @font-face {"{"}
                  <li> font-family: "Cafe24Ssurround"; </li>
                  <li> src: url("../src/static/font/Cafe24Ssurround.woff") format("woff"); </li>
                  <li> font-weight: normal; </li>
                  <li> font-style: normal; </li>
                </li>
                <li> {"}"} </li>
              </div>

            </div>
          </details>
        </div>
        {/* 끝 */}
      </div>
    </>
  );
}

export default CssBasic2;