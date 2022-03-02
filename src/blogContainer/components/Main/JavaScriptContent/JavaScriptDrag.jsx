import React from 'react';

const JavaScriptDrag = (props) => {

  const test = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  return (
    <div className="common_style" >
      <div className='block1'>
        <details>
          <summary> [0] Drag 관련 설명 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 태그에 설정 draggable 속성 설정 </h2>
            <div className='block4'>
              <li> {" <태그 draggable='true'>  </태그> "} </li>
              <li> {" <태그 draggable>  </태그> "} </li>
            </div>

            <h2 className='h2'> 📌 ondragstart </h2>
            <div className='block4'>
              <li> 요소를 드래그 할 때 발생 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondragover </h2>
            <div className='block4'>
              <li> 요소가 드래그 대상 위를 지나갈 경우 발생 </li>
              <li> 밀리초 단위로 실행? </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondragend </h2>
            <div className='block4'>
              <li> 드래그가 끝날 경우 발생 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondragenter </h2>
            <div className='block4'>
              <li> 요소가 다른 드래그 요소 위에 있으면 발생 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondragleave </h2>
            <div className='block4'>
              <li> 요소가 다른 드래그 요소로 들어갔다가 나올 때 발생 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondrop </h2>
            <div className='block4'>
              <li> 요소를 놓을 경우 발생 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 ondrag </h2>
            <div className='block4'>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] DataTransfer </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 e.dataTransfer.setDate </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 e.dataTransfer.getDate </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 e.dataTransfer.effectAllowed </h2>
            <div className='block4'>
              <li> dragstart에서만 할당에서 사용 가능 </li>
              <li> e.dataTransfer.effectAllowed="none" <small> 이와같이 사용 </small> </li>
              <li> "none" : 아이템을 떨굴 수 없음 </li>
              <li> "copy" : 사본을 생성 </li>
              <li> "copyLink" : 복사,링크 작업 허용 </li>
              <li> "copyMove" : 복사,이동 작업 허용 </li>
              <li> "link" : 링크,이동 조작 허용 </li>
              <li> "move" : 아이템을 새로운 위치로 이동 가능 </li>
              <li> "all" : 모든 작업 허용 </li>
              <li> "uninitialized" : 설정이 되지 않으면 기본값은 동일  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 e.dataTransfer.dropEffect </h2>
            <div className='block4'>
              <li> dragover에서 사용하는 것 같음 </li>
              <li> e.dataTransfer.effectAllowed="none" <small> 이와같이 사용 </small> </li>
              <li> "none" : 아이템을 떨굴 수 없음 </li>
              <li> "copy" : 사본을 생성 </li>
              <li> "copyLink" : 복사,링크 작업 허용 </li>
              <li> "copyMove" : 복사,이동 작업 허용 </li>
              <li> "link" : 링크,이동 조작 허용 </li>
              <li> "move" : 아이템을 새로운 위치로 이동 가능 </li>
              <li> "all" : 모든 작업 허용 </li>
              <li> "uninitialized" : 설정이 되지 않으면 기본값은 동일  </li>
              <li>  </li>
              <div>
                {
                  test.map((i) => {
                    return <p> {i.id} </p>
                  })
                }
              </div>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] Drag 기본 예시 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 dragstart_handler </h2>
            <div className='block4'>
              <li> const dragstart_handler = (e) {"=> {"}
                <li> e.dataTransfer.setData("text",e.target.id); </li>
                <li> e.dataTransfer.effectAllowed = "move"; </li>
                <li>  </li>
              </li>
              <li> {"}"} </li>
            </div>

            <h2 className='h2'> 📌 dragdrop_handler </h2>
            <div className='block4'>
              <li> const dragdrop_handler = (e) {"=> {"}
                <li> var data = e.dataTransfer.getData("text"); </li>
                <li> ㄷ.target.appendChild(document.getElementById(data)); </li>
                <li>  </li>
              </li>
              <li> {"}"} </li>
            </div>

            <h2 className='h2'> 📌 dragover_handler </h2>
            <div className='block4'>
              <li> const dragover_handler = (e) {"=> {"}
                <li> e.preventDefault(); </li>
                <li> e.dataTransfer.dropEffect = "move"; </li>
                <li>  </li>
              </li>
              <li> {"}"} </li>
            </div>

            <h2 className='h2'> 📌 코드 </h2>
            <div className='block4'>
              <li> {' <div> '}
                <li> {' <p id="source" ondragstart="dragstart_handler(event);" draggable="true"> '} </li>
                <li> {' drag </p> '} </li>
              </li>
              <li> {'  </div> '} </li>
              <li> {'  <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div> '} </li>
            </div>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default JavaScriptDrag;



