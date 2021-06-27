import React from 'react';

const GithubBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. (하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#"> </a>
                        {/* <a href="#"> </a> */}
                    </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <span className="lblock">
                    <span className="sblock">
                    </span>
                </span>
            </span>
            {/* <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <span className="lblock">
                    <span className="sblock">
                    </span>
                </span>
            </span> */}
        </div>
    );
}

export default GithubBasic;