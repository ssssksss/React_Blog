import React from 'react';

const DBMariaBasic = (props) => {
    return (
        <>
            <div className="common_style">
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ GRANT(권한) <small>  </small>
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> GRANT ALL PRIVILEGES ON DB명.* TO 유저명@localhost IDENTIFIED BY '비번'; </span>
                                    <li> 유저에게 DB명의 모든 테이블 권한을 준다. </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ Database <small>  </small>
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> show databases; </span>
                                    <li>  </li>
                                    <span className="sstitle"> create database DB명; </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶  <small>  </small>
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶  <small>  </small>
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶  <small>  </small>
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
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

export default DBMariaBasic;