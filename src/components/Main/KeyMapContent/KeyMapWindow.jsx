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
                                <span className="sstitle"> shell:startup 폴더 </span>
                                <span className="mblock">
                                    <li> 실행창 - shell:startup 검색 - 이 파일에 원하는 프로그램 넣기 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 작업 스케줄러 </span>
                                <span className="mblock">
                                    <li> 작업 스케줄러 - 작업만들기 - 이름 작성 후 트리거 클릭 - 작업 시작 - "시작할 때"로 변경 </li>
                                    <li> 그리고 동작 클릭 - 새로만들기 - 찾아보기 - 원하는 프로그램 클릭 </li>
                                </span>
                                {/*  */}
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