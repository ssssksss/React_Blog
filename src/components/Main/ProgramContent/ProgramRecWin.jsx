import React from 'react';

const ProgramRecWin = (props) => {
    return (
        <>

            <div className="common_style" >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> QTTabar - 윈도우 폴더 탭키를 생성해줌
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>

                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> <a href="http://qttabbar.wikidot.com/" target="_blank" rel="noopener noreferrer">
                                        QTTabBar 사이트 </a> </li>
                                    <li> <a href={process.env.PUBLIC_URL + '/Download/QTTabBar_1043.zip'}
                                        download="QTTabBar_1043.zip"> QTTabBar.exe </a> </li>
                                    <li> QTT 설치후 폴더 열고 - 보기 - 옵션 - QTTabBar 클릭 </li>
                                    <li> 폴더 상단에 탭 공간 비어있는 곳에 우측클릭 QTTabBar Options </li>
                                    <li> Download update now.. 클릭 - 한국어 더블클릭 - 원하는 위치에저장  </li>
                                    <li> language file 우측에 ... 클릭 - Apply 하고 폴더 전부 닫기  </li>
                                    <li> 폴더 열고 탭 공간 비어있는 곳에 우측클릭 QTTabBar Options </li>
                                    <li> 이벤트 - 폴더 뷰 - 여백 더블클릭 - 없음으로 변경 </li>
                                    <li> 하위폴더 메뉴 - 하위폴더 메뉴 사용 체크해제 </li>
                                    <li> 미리보기 - 미리보기 표시 - ~~~ 체크해제 </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> Qick Startup - 윈도우 자동 실행 프로그램 관리
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>

                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle">
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>

                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle">
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>

                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default ProgramRecWin;