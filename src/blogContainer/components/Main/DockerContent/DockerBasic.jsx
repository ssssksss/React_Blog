import React from 'react';

const DockerBasic = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> 도커란? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"> 도커 홈페이지 </a> </li>
              <li> 컨테이너 기술 </li>
              <li> 빌드, 배포, 실행을 도와준다. </li>
              <li> 집중되는 많은 트래픽을 처리할 수 있게 도와준다. </li>
              <li> 컨테이너를 실행,관리,상태 등을 관리하게 해준다. </li>
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

      <div className='block1'>
        <details>
          <summary> 도커 명령어 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
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
}

export default DockerBasic;