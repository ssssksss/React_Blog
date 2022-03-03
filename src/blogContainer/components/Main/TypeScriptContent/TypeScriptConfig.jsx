import React from 'react';

const TypeScriptConfig = () => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 디렉토리 경로 설정(테스트 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <small> path를 저렇게 설정하면 import 받을 때 절대경로로 사용가능 </small> </li>
              <li> <small> ex{")"} "../store/index.js" 처럼 이동하지 않고 "store/index.js" 처럼 사용가능하게 해준다.  </small> </li>
              <li> {' "compilerOptions": { '}
                <li> {' "target": "es5", '} </li>
                <li> {' "baseUrl": ".", '} </li>
                <li> {' "paths": { '}
                  <li> {' "@/components/*": ["components/*"], '} </li>
                  <li> {' "@/store/*": ["store/*"], '} </li>
                  <li> {' "@/utils/*": ["utils/*"], '} </li>
                  <li> {' "@/api/*": ["api/*"], '} </li>
                  <li> {' "@/config/*": ["config/*"], '} </li>
                  <li> {' "@/styles/*": ["styles/*"], '} </li>
                </li>
                <li> {'     }, '} </li>
              </li>
              <li> {' }, '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 제목 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
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
      {/* 끝 */}
    </div>
  );
};

export default TypeScriptConfig;