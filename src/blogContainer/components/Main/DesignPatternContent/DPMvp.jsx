import React from 'react';

const DPMvp = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVP란? <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Model + View + Presenter로 이루어진 패턴 </span>
                                <span className="mblock">
                                    <li> 안드로이드 프로젝트에서 사용을 하는 패턴인 것 같음.. </li>
                                    <li> MVC와의 차이는 View에게 표시할 방법을 주는 것이 아니라 데이터 만을 View에게 준다? </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVP 구조 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Model </span>
                                <span className="mblock">
                                    <li> 어플리케이션에서 사용되는 데이터와 데이터를 처리하는 곳 </li>
                                </span>
                                <span className="sstitle"> View </span>
                                <span className="mblock">
                                    <li> 사용자의 화면 , UI를 처리하는 부분 </li>
                                </span>
                                <span className="sstitle"> Presenter </span>
                                <span className="mblock">
                                    <li> View에서 요청한 정보를 받아서 Model을 가공하여 다시 VIew에 전달해 주는 부분 </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVP 장단점 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 장점 </span>
                                <span className="mblock">
                                    <li className="col_be"> 유닛 테스트로 활용 시 테스트 화면만 그려서 할 수 있다는 장점 </li>
                                </span>
                                <span className="sstitle"> 단점 </span>
                                <span className="mblock">
                                    <li className="col_r"> 화면을 생성시 View , Model, Presenter, Interface 를 생성해야함 </li>
                                    <li className="col_r"> 프로젝트의 크기가 커지면 Presenter가 감당해야할 부분이 많아짐 </li>
                                    <li className="col_r">  </li>
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

export default DPMvp;