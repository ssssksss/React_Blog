import React from 'react';

const TCssUse = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> 화면의 고정 높이 요소를 제외하고 나머지 100%화면 채우는 방법 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 CSS </h2>
            <li> height = calc(100vh - [고정높이]); </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 한줄(밑줄) 긋기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> {" <hr size='3' color='[black,#aeaeae]' width='[10px,10%]' align='[left,rigth,center]' noshade  /> "} </li>
              <li> {' <hr size="3" color="#aeaeae" /> '} </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 드래그 못하게 막는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 css에 작성 </h2>
            <div className='block4'>
              <li> -webkit-user-select:none;   </li>
              <li> -moz-user-select:none; </li>
              <li> -ms-user-select:none; </li>
              <li> user-select:none; </li>
            </div>

            <h2 className='h2'> 📌 부모보다 아래인 자식 요소에서 일부만 드래그 허용가능하게 하기 </h2>
            <div className='block4'>
              <li> -webkit-user-select:all;   </li>
              <li> -moz-user-select:all; </li>
              <li> -ms-user-select:all; </li>
              <li> user-select:all; </li>
            </div>

            <h2 className='h2'> 📌 부모보다 아래인 자식 요소에서 일부만 드래그 허용가능하게 하기, 텍스트만 허용 </h2>
            <div className='block4'>
              <li> -webkit-user-select:text;   </li>
              <li> -moz-user-select:text; </li>
              <li> -ms-user-select:text; </li>
              <li> user-select:text; </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> css ...처리하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> overflow:hidden;   </li>
              <li> text-overflow:ellipsis; </li>
              <li> white-space:nowrap; </li>
            </div>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default TCssUse;