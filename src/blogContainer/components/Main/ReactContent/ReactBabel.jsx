import React from 'react';

const ReactBabel = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 바벨 디렉토리 구조 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> build </li>
              <li> src </li>
              <li> .babelrc <small> babel 설정 파일 </small> </li>
              <li> .package.json <small> package 관리 파일 </small> </li>
              <li> .tsconfig.json <small> typescript 설정 파일 </small> </li>
            </div>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <div className='block4'>
              <li> 장점 : </li>
              <li> 단점 : </li>
            </div>

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
    </div>
  );
}

export default ReactBabel;