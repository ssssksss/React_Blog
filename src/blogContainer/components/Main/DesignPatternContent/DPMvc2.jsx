import React from 'react';

const DPMvc2 = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVC2란? <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Model + View + Controller으로 역할을 나누어서 코드를 설계하는 방식 </span>
                                <span className="mblock">
                                    <li> 역할을 분리하여 코드를 작성하면 유지보수, 개발효율, 개발자가 보기에 쉬워진다. </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVC2 구조 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <span className="sstitle"> Model </span>
                                <span className="mblock">
                                    <li> 데이터를 담당하는 역할, DB와의 상호작용, 비즈니스 로직의 처리되는 데이터 등을 담당  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Controller </span>
                                <span className="mblock">
                                    <li> Model 과 View를 이어주는 역할, View에서 어떤 명령을 하면 Controller에서 실행할 비즈니스 로직을 Model쪽에서 담당하게 함
                                    </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> View </span>
                                <span className="mblock">
                                    <li> 사용자에게 보여주는 화면, UI를 담당 , 사용자 인터페이스 </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ MVC2의 장단점 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 장점 </span>
                                <span className="mblock">
                                    <li className="col_be"> MVC2로 역할을 분담하여 처리를 하기 때문에 유지보수나 개발효율이 좋다. </li>
                                </span>
                                <span className="sstitle"> 단점 </span>
                                <span className="mblock">
                                    <li className="col_r"> 대규모 MVC2를 처리하기에는 복잡하고 Controller에 비중이 커지고 , 복잡해지기 때문에
                                        큰 규모에서는 어울리지 않음 </li>
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

export default DPMvc2;