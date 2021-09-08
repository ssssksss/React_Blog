import React from 'react';

const LinuxMobaXterm = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MobaXterm 다운로드 <a name="MobaXterm 다운로드" style={{ visibility: "hidden" }}> MobaXterm 다운로드 </a> </summary>
                            <span className="sblock">
                                <li> <a href="https://mobaxterm.mobatek.net/download.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                                <li> Home Edition - Portable edition 다운로드 </li>
                                <li> 알집파일 우측클릭 - 7-zip - ""에 풀고 폴더명을 MobaXterm으로 바꾸기   </li>
                                <li> C드라이브 - app - 새폴더로 Run과 Terminal 이라고 만들기   </li>
                                <li> Terminal 폴더안에 MobaXterm폴더를 이동시키기  </li>
                                <li> MobaXterm폴더에 들어가서 MobaXterm_Personal.exe파일 바로가기 생성하기  </li>
                                <li> 바로가기 생성한 파일을 Ctrl+X를 이용해서 잘라내기 그리고 잘라낸 파일 Ctrl+C로 복사  </li>
                                <li> 복사한 파일을 아까 만들었던 상위폴더 Run에 Ctrl+V   </li>
                                <li> 시스템 환경 변수 편집 - 고급 - 환경 변수 - 사용자 변수 Path 더블클릭   </li>
                                <li> 새로만들기 - C:\app\Run 넣어주기  </li>
                                <li> 그리고 Win + R 누르고 mob입력했을 때 실행되면 성공   </li>
                            </span>
                            {/*  */}
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MobaXterm 사용
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> ssh root@[본인의IP주소입력] </li>
                                    <li> P@ssW0rd! 입력 </li>
                                    <li>  </li>
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
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
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

export default LinuxMobaXterm;