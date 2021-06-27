import React from 'react';

const WindowCommand = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 윈도우 명령어 (하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#톰캣 라이브러리">1. </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootLibrary.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name=""> 1.cmd 명령어  </a> </span>
                <p> <i> cd 폴더 </i>  : 폴더로 이동 </p>
                <p> <i> cd.. </i>  : 이전 폴더로 돌아가기 </p>
                <p> <i> dir </i>  : 폴더가 포함하고 있는 파일 목록 보여주기 </p>
                <p> <i> 파일명 tasks </i>  : 파일로 실행할 수 있는 명령어 보여주기 </p>
                <span className="mblock">
                    {/* <h3> HTML </h3>
                    <h3> 자바 클래스 </h3> */}
                </span>

            </span>
        </div >
    );
}

export default WindowCommand;