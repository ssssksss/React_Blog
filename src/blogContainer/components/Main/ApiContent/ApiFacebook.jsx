import React from 'react';

const ApiFacebook = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 페이스북 로그인 API </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 Facebook API 설정하기 </h2>
                        <li> 0. <a href="https://developers.facebook.com/?locale=ko_KR" target="_blank" rel="noopener noreferrer"> 페이스북 개발자 홈페이지  </a> </li>
                        <li> 1. 페이스북 개발자 홈페이지 로그인 </li>
                        <li> 2. 처음이면 우측 상단에 시작하기 아니면 내 앱 누르기 </li>
                        <li> 3. 처음이면 앱 만들기 버튼 클릭 </li>
                        <li> 4. 앱 유형 "없음" 선택 </li>
                        <li> 5. 좌측메뉴 fackbook 로그인 설정 "빠른시작" </li>
                        <li> 6. 웹 - 사이트 URL - http://localhost:8080  입력 </li>
                        <li> 7. 좌측 메뉴 설정 - 기본 설정 </li>
                        <li> 8. application.yml에 설정하기 </li>

                        <h2 className="h2"> ✔ 스프링 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className="h3"> 🎈 application.yml </h3>
                                <li> security:
                                    <li> oauth2:
                                        <li> client:
                                            <li> registration:
                                                <li> facebook:
                                                    <li> client-id: 클라이언트 ID </li>
                                                    <li> client-secret: 클라이언트 보안 비밀번호 </li>
                                                    <li> scope:
                                                        <li> - email </li>
                                                        <li> - pulic_profile </li>
                                                    </li>
                                                </li>
                                            </li>
                                        </li>
                                    </li>
                                </li> <br />

                                <h3 className="h3"> 🎈 html 코드 </h3>
                                <li> {'<a href="/oauth2/authorization/facebook"> 페이스북 로그인 </a>'} </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default ApiFacebook;