import React from 'react';


const ReactJavaScript = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 리액트에서 자바스크립트 사용하는 방법 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> react-script-tag 사용 </span>
                                <span className="mblock">
                                    <li> import ScriptTag from 'react-script-tag'; </li>
                                    <li> const Demo = props =&gt; ( </li>
                                    <li> {'<ScriptTag type=text/javascript" src="/path/to/resource.js" /> '} </li>
                                    <li> ) </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Helmet 사용 </span>
                                <small>  react-script-tag보다 무거움 </small>
                                <span className="mblock">
                                    <li> {' import {Helmet} from "react-helmet"; '} </li>
                                    <li> const Demo = props =&gt; ( </li>
                                    <li> {' <div className="application"> '} </li>
                                    <li> &nbsp; {'<Helmet>'} </li>
                                    <li> &nbsp; {'<ScriptTag type=text/javascript" src="/path/to/resource.js" />'} </li>
                                    <li> &nbsp; {'</Helmet>'} </li>
                                    <li> &nbsp; {'</div>'} </li>
                                    <li> &nbsp; </li>
                                    <li> ); </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
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
                </span>
            </div>
        </>
    );
}

export default ReactJavaScript;