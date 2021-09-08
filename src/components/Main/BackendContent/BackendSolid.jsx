import React from 'react';

const BackendSolid = (props) => {


    return (
        <>
            <div className="common_style" >
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ Solid 5대 원칙 <a name="Solid 5대 원칙" style={{ visibility: "hidden" }}> Solid 5대 원칙 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 유지보수, 확장이 쉬운 소프트웨어를 만드는 방식 </span>
                                    <span className="mblock">
                                        <span className="sblock">
                                            <span className="sstitle"> SRP(Single Responsibility Principle) , 단일 책임 원칙 </span>
                                            <li> 모든 클래스는 하나의 책임만 가진다. , 여러기능을 가지는 것은 좋지 않음 </li>
                                            <li> 한개의 관심사만을 갖는다. </li>
                                            <li> 여러개의 기능이 모여 있을 경우 한개의 기능을 수정하였을 때 다른 기능까지 망가질 수 있음 </li>
                                            <li>  </li>
                                        </span>
                                        {/*  */}
                                        <span className="sblock">
                                            <span className="sstitle"> OCP(Open-Close Principle) , 개방 폐쇄 원칙 </span>
                                            <li> 소프트웨어 개체는 확장에 개방적이고, 수정에 대해서는 폐쇄적이어야 함 </li>
                                            <li> 개체 하나를 수정하였는데 그 개체와 관계된 개체들을 모두 수정하게 되는것을 잘못된 방식 </li>
                                            <li> 추상화(인터페이스)를 이용하여 확장에는 개방적으로 접근할 수 있음 </li>
                                        </span>
                                        {/*  */}
                                        <span className="sblock">
                                            <span className="sstitle"> LSP(Liskov Substitution Principle) , 리스코프 치환 원칙 </span>
                                            <li> 참조되는 기반클래스는 파생클래스의 객체를 상세히 알지 못해도 사용할 수 있어야 한다. </li>
                                            <li>  </li>
                                        </span>
                                        {/*  */}
                                        <span className="sblock">
                                            <span className="sstitle"> DIP(Dependency Inversion Principle) , 의존 역전 원칙 </span>
                                            <li> 상위 모듈이 하위 모듈에 의존해서는 안되는 방식 </li>
                                            <li>  </li>
                                        </span>
                                        {/*  */}
                                        <span className="sblock">
                                            <span className="sstitle"> ISP(Interface Segregation Principle) , 인터페이스 분리 원칙 </span>
                                            <li> 역할을 하나의 인터페이스가 모두 담당하는 것이 아니라 역할을 여러 작은 단위의 인터페이스
                                                로 분리하여 사용하는 방식 </li>
                                            <li> 모두 추상화에 의존해야 한다. </li>
                                        </span>
                                        {/*  */}
                                    </span>
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
                </ul>
            </div>
        </>
    );
}

export default BackendSolid;