import React from 'react';

const ApiNaver = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 네이버 map api 시작 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> https://www.ncloud.com/?language=ko-KR </li>
                        <li> 우측 상단에 콘솔로 들어간다. </li>
                        <li> 좌측에 product &amp; services 클릭하면 결제 등록하라는 내용이 작은 글씨로 보일것이다. 그거 하고 다시 해서 결제까지 완료하기 </li>
                        <li> 홈 메뉴로 가서 우측상단에 메뉴 - 서비스 - Aplication Service - Maps - 이용 신청하기  </li>
                        <li> Web 서비스 URL은 http://localhost:3000 와 같이 코드를 작성해서 사용할 URL 등록 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 네이버 지도 API v3 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> <a href="https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html"
                            target="_blank" rel="noopener noreferrer"> 네이버 지도 JS API v3 </a> </li>
                        <li>  </li>
                        <li>  </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default ApiNaver;