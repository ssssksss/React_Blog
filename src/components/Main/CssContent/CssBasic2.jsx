import React from 'react';

const CssBasic2 = (props) => {

  return (
    <>
      <div className="common_style">
        <div className='block1'>
          <details>
            <summary> FLEX </summary>
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
            <summary> GRID </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> <a href="http://cssgridgarden.com/#ko" target="_blank" rel="noopener noreferrer"> grid코딩 게임 </a> </li>
              <li> 2 </li>
              <li> 3 </li>

              <h2 className='h2'> 📌 grid 공간 나누기 </h2>
              <li> grid-template: rows / columns <small> # [row,columns] ,    </small>  </li>
              <li> grid-template-columns: 20% 20% 20% 20% 20%; </li>
              <li> grid-template-rows: 20% 20% 20% 20% 20%; </li>
              <li> grid-template-rows: 1fr 5fr; <small> # 공간 1칸을 1/6,5/6으로 쪼갠다 </small> </li>
              <li> grid-template-rows: 100px repeat(2(반복횟수), 1fr 2fr) 100px; <small> # 100px 1fr 2fr 1fr 2fr 100px</small> </li>

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


              <h2 className='h2'> 📌 grid 요소 순위 </h2>
              <li> order: 0 <small> # default=0 </small> </li>
              <li>  </li>

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
    </>
  );
}

export default CssBasic2;