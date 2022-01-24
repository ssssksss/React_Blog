import React from 'react';

const KeyMapWindow = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mtitle"> 단축키 및 설정 </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Window 단축키"> Window 단축키 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 내가 자주 사용하는 Window 단축키 </span>
                            <span className="mblock">
                                <li> F2 : 폴더이름 바꾸기  </li>
                                <li> Win + 방향키 : 화면 분할 </li>
                                <li> Win + S : 윈도우 검색창 열기 </li>
                                <li> Win + L : 화면 잠금 </li>
                                <li> Win + E : 파일 탐색기 열기 </li>
                                <li> Win + R : 실행 파일 열기 </li>
                                <li> Win + D : 모든 프로그램,브라우저 최소화 , 한번더 클릭하면 원래대로 </li>
                                <li> Win + 숫자키 : 작업 표시줄에 고정된 프로그램 실행 </li>
                                <li>  </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> Window 단축키 </span>
                            <span className="mblock">
                                <li> Win + I : 윈도우 설정창 열기 </li>
                                <li> Win + Ctrl +D : 가상 데스크탑 생성 </li>
                                <li> Win + Ctrl + 방향키 : 가상 데스크탑 이동 </li>
                                <li> Win + Tab : 모든 가상 데스크톱 보기 </li>
                                <li> Win + Ctrl + F4 : 현재 창 닫기 </li>
                                <li> Win + , : 누르고 있는 동안 바탕화면 보기 </li>
                                <li> Win + Home : 현재 보고 있는 창을 제외한 창들은 모두 최소화 </li>
                                <li> Win + '+' , Win + '-' : 브라우저 화면 확대, 축소(돋보기 용도) </li>
                                <li> Win + Shift + S : 화면 캡쳐 관리창 열기 </li>
                                <li> Win + . : 이모지 아이콘 보기 </li>
                                <li>  </li>
                            </span>
                            {/*  */}
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 부팅 후 자동으로 프로그램 실행 <a name="부팅 후 자동으로 프로그램 실행" style={{ visibility: "hidden" }}> 부팅 후 자동으로 프로그램 실행 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 윈도우 스크린샷( Win + PrintScreen )
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 윈도우 스크린샷이 되지 않을 때 , 저장 위치를 변경하고 싶을 때 </span>
                                <span className="mblock">
                                    <li> Win + S - regedit 입력  </li>
                                    <li> 컴퓨터\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders 이동  </li>
                                    <li> {' {B7BEDE81-DF94-4682-A7D8-57A52620B86F} '} 이 레지스트리가 윈도우 스크린샷과 관련
                                        <li> <span className='sstitle'> 만약에 이 레지스트리가 없다면 </span> </li>
                                        <span className='sblock'>
                                            <li> 좌측 위에 편집 - 새로만들기 - 확장 가능한 문자열 값 </li>
                                            <li> 이름 바꾸기 해서 {' {B7BEDE81-DF94-4682-A7D8-57A52620B86F} '} 복사 붙여넣기  </li>
                                            <li> 수정 - 값 데이터에 %USERPROFILE%\Pictures\Screenhots 붙여넣기  # 저장위치를 지정 할 수 있는 곳  </li>
                                        </span>
                                    </li>
                                    <li> 그리고 윈도우 재시작 </li>
                                    <li> Win + PrintScreen 누르고  </li>
                                    <li> C드라이브 - 사용자 - 계정 - Pictures - 스크린샷 에 폴더가 있는지 확인  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default KeyMapWindow;