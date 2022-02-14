import React from 'react';

const CicdGithubAction = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 깃허브 액션이란(정리 필요) </summary>
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

      <div className='block1'>
        <details>
          <summary> [1] 깃허브 액션(정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> sudo yum install ruby </li>
              <li>  </li>
              <li> 가정 </li>
              <li> 깃허브 - Actions - New workflow - set up a workflow yourself 클릭 </li>
              <div className="block3">
                <li> name : workflow 이름 </li>
                <li> on : workflow가 언제 작동하는지 설정 가능 </li>
                <li> on - workflow_dispatch : 수동으로 workflow를 실행하겠다는 의미 </li>
                <li> jobs, steps : workflow는 여러개의 job을 가질 수 있고, job은 여러개의 단계를 가질 수 있다 </li>
                <li> runs-on: 어느 OS환경에서 실행할지 설정 가능  </li>
                <li>  </li>
              </div>
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
}

export default CicdGithubAction;