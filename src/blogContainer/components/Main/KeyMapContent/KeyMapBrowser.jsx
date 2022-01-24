import React from 'react';

const KeyMapBrowser = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> 네이버 웨일 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 단축키 </h2>
                        <li>  </li>
                        <li> 우측 상단 - 설정 - 단축키 <small> # 웨일 브라우저 단축키 보는 방법 </small> </li>
                        <li> alt+1 , alt+2 , alt+3 , alt+4 <small> # 캡처 </small> </li>
                        <li> ctrl + tab <small> # 탭 전환 </small> </li>
                        <li> ctrl + shift + m <small> # 모바일 창  </small> </li>
                        <li> ctrl + t <small> # 새로운 탭 열기 </small> </li>
                        <li> ctrl + k <small> # 현재 탭 복사하고 열기 </small> </li>
                        <li> ctrl + n <small> # 새로운 창으로 새화면 열기  </small> </li>
                        <li> alt+r <small> # 읽기모드  </small> </li>

                        <h2 className='h2'> 📌 네이버 웨일 캐시 파일 모여있는 공간 </h2>
                        <li> 브라우저에서 whale://version/ 입력하고 프로필 경로 복사해서 폴더경로에 붙여넣기 </li>
                        <li> 그리고 cache폴더 들어가기 </li>

                        <h2 className='h2'> 📌 네이버 브라우저 쿠키 모여있는 공간 </h2>
                        <li> 우측상단 점 3개 - 설정 - 개인정보 보호 - 쿠키 및 기타 사이트 데이터 - 모든 쿠키 및 사이트 데이터 보기 </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

        </div>
    );
}

export default KeyMapBrowser;