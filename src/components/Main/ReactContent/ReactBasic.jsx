import React from 'react';

const ReactBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 리액트 기초(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#프로젝트 설정">1. 프로젝트 설정 </a>
                        <a href="#리액트 깃허브에 올리기">2. 리액트 깃허브에 올리기 </a>
                        <a href="#리액트의 구조">3. 리액트의 구조 </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 1. 프로젝트 설정 </a> </span>
                <p> <i> 1. </i>  Node.js 설치를하고 cmd에서 설치되었는지 확인, node -v , npm -v </p>
                <p> <i> 2. </i> Vscode 설치 </p>
                <p> <i> 3. </i> cmd에서 cd React시작할폴더명 </p>
                <p> <i> 4. </i> yarn create react-app 리액트폴더 혹은 npm create react-app 리액트폴더명 (폴더생성됨)</p>
                <p> <i> 4.1 </i> 만약에 yarn이 설치되지 않는다면 npm install -g yarn </p>
                <p> <i> 5. </i> cd 리액트폴더명 </p>
                <p> <i> 6. </i> npm start  입력하여서 잘 작동되나 확인 </p>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="리액트 깃허브에 올리기"> 2. 리액트 깃허브에 올리기 </a> </span>
                <p><i>1.</i> github에 가서 저장소를 하나 만들기 (read.me 파일없이만들기)</p>
                <p><i>2.</i> 만든 상태로 창을 가만히 놔두기( 복붙할 내용이 존재함)</p>
                <p><i>3.</i> 리액트로 돌아와서 npm install gh-pages --save-dev 입력 </p>
                <p><i>4.</i> 리액트 폴더에 pakage.json 파일을 열어서 아래와 같이 넣어주기</p>
                <p><i>5.</i> 위쪽에 name위에 "homepage": "http://깃허브유저명.github.io/저장소이름"</p>
                <p><i>6.</i> "scripts: 부분 안에 "predeploy": "npm run build",  "deploy": "gh-pages -d build",</p>
                <p><i>7.</i> 터미널 창에 git init 입력 (깃폴더 생성됨)</p>
                <p><i>8.</i> 깃허브 창에서 git remote ~ 부분을 복붙해서 붙여넣기 </p>
                <p><i>9.</i> npm run deploy <small> build 하는 과정 </small> </p>
                <p><i>10.</i> git add . <small> 깃허브에 올릴 깃을 만드는 과정? </small> </p>
                <p><i>11.</i> git commit -m "커밋내용" <small>커밋</small> </p>
                <p><i>12.</i> git push -u origin master <small> 깃허브에 master 브랜치에 push </small> </p>
                <p> 다음부터는 9~12 번만 반복하여서 사용</p>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="리액트의 구조"> 3. 리액트 기초 설명 </a> </span>
                <p><i>1.</i> JSX파일로 JS파일과는 차이가 있다. </p>
                <p><i>2.</i> 페이스북에서 만든 오픈 소스 자바스크립트 UI라이브러리 </p>
                <p><i>3.</i> 컴포넌트 형태로 사용이된다. </p>
                <p><i>4.</i> HTML class를 className , for을  htmlFor 와 같이 약간의 차이가 있다. </p>
                <p><i>5.</i> lower Camel Case 방식을 사용한다. </p>
                <p><i>6.</i> .jsx파일은 대문자로 시작한다. </p>
                <p><i>7.</i> {"{"}{"}"} 중괄호를 이용하면 변수들을 처리한다. </p>
                <p><i>8.</i> 컴포넌트에서 사용한 리소스를 회수하는 것이 중요하다. </p>
                <p><i>9.</i> 싱글 페이지이므로 렌더링을 부분적으로 일어나게 해야한다.</p>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 4. 리액트 코드 돌려보기 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 5. css적용 방법 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 6. 함수 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 7. 조건문 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 8. 반복문 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 9. 컴포넌트 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 10. Props </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 11. useState </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 12. useRef </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 13. useEffect </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 14. ReactHook </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 15. ReactRouter </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 16. React에 Emmet추가하는법 </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="프로젝트 설정"> 17. React Redux </a> </span>
                <span clsssName="mblock">

                </span>
            </span>
        </div>
    );
}

export default ReactBasic;