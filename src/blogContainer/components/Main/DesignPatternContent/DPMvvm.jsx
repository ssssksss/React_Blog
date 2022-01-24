import React from 'react';

const DPMvvm = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVVM란? <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Model + View + ViewModel로 이루어진 패턴 </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVVM 구조 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Model </span>
                                <span className="mblock">
                                    <li>  어플리케이션에서 사용되는 데이터와 데이터를 처리하는 곳 </li>
                                </span>
                                <span className="sstitle"> View </span>
                                <span className="mblock">
                                    <li> 사용자의 화면 , UI를 처리하는 부분 </li>
                                </span>
                                <span className="sstitle"> ViewModel </span>
                                <span className="mblock">
                                    <li> View가 사용할 메서드와 필드를 구현하고 View에게 상태 변화를 알리는 부분 </li>
                                    <li> View에서 2개의 모델에서의 데이터가 필요하다고 하면 2개의 데이터를 받아서 View에서
                                        처리하는 것이 아니라 ViewModel에서 처리를 하고 View에게 보내준다.  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVVM 장단점 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 장점 </span>
                                <span className="mblock">
                                    <li className="col_be">  </li>
                                </span>
                                <span className="sstitle"> 단점 </span>
                                <span className="mblock">
                                    <li className="col_r"> 앱이 커지면 데이터 바인딩을 하는데 많은 메모리를 사용해야 한다. </li>
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

export default DPMvvm;