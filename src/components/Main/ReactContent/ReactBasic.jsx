import React, { useEffect, useRef, useState } from 'react';

const ReactBasic = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[1].style.left = null;
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b>  </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <span className="mtitle"> 리액트 공부 </span>
                            <summary>  </summary>
                            <a href="#프로젝트 설정">1. 프로젝트 설정 </a>
                            <a href="#리액트 깃허브에 올리기">2. 리액트 깃허브에 올리기 </a>
                            <a href="#리액트의 구조">3. 리액트의 구조 </a>
                            <a href="#">   </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>

            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="">  리액트 공부  </a> </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 1. 프로젝트 설정 </a> </span>
                        <p> <i> 1. </i>  Node.js 설치를하고 cmd에서 설치되었는지 확인, node -v , npm -v </p>
                        <p> <i> 2. </i> Vscode 설치 </p>
                        <p> <i> 3. </i> cmd에서 cd React시작할폴더명 </p>
                        <p> <i> 4. </i> yarn create react-app 리액트폴더 혹은 npm create react-app 리액트폴더명 (폴더생성됨)</p>
                        <p> <i> 4.1 </i> 만약에 yarn이 설치되지 않는다면 npm install -g yarn </p>
                        <p> <i> 5. </i> cd 리액트폴더명 </p>
                        <p> <i> 6. </i> npm start  입력하여서 잘 작동되나 확인 </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="리액트 깃허브에 올리기"> 2. 리액트 깃허브에 올리기 </a> </span>
                        <ol>

                            <li> github에 가서 저장소를 하나 만들기 (read.me 파일없이만들기)</li>
                            <li> 만든 상태로 창을 가만히 놔두기( 복붙할 내용이 존재함)</li>
                            <li> 리액트로 돌아와서 npm install gh-pages --save-dev 입력 </li>
                            <li> 리액트 폴더에 pakage.json 파일을 열어서 아래와 같이 넣어주기</li>
                            <li> 위쪽에 name위에 "homepage": "http://깃허브유저명.github.io/저장소이름"</li>
                            <li> "scripts: 부분 안에 "predeploy": "npm run build",  "deploy": "gh-pages -d build",</li>
                            <li className="col_r"> 터미널 창에 git init 입력 (깃폴더 생성됨)</li>
                            <li> 깃허브 창에서 git remote ~ 부분을 복붙해서 붙여넣기 </li>
                            <li className="col_r"> npm run deploy <small> build 하는 과정 </small> </li>
                            <li className="col_r">  git add . <small> 깃허브에 올릴 깃을 만드는 과정? </small> </li>
                            <li className="col_r">  git commit -m "커밋내용" <small>커밋</small> </li>
                            <li className="col_r">  git push -u origin master <small> 깃허브에 master 브랜치에 push </small> </li>
                            <p> 다음부터는 7,9~12 번만 반복하여서 사용</p>
                        </ol>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="리액트의 구조"> 3. 리액트 기초 설명 </a> </span>
                        <ol>
                            <li> JSX파일로 JS파일과는 차이가 있다. </li>
                            <li> 페이스북에서 만든 오픈 소스 자바스크립트 UI라이브러리 </li>
                            <li> 컴포넌트 형태로 사용이된다. </li>
                            <li> HTML class를 className , for을  htmlFor 와 같이 약간의 차이가 있다. </li>
                            <li> lower Camel Case 방식을 사용한다. </li>
                            <li> .jsx파일은 대문자로 시작한다. </li>
                            <li> {"{"}{"}"} 중괄호를 이용하면 변수들을 처리한다. </li>
                            <li> 컴포넌트에서 사용한 리소스를 회수하는 것이 중요하다. </li>
                            <li> 싱글 페이지이므로 렌더링을 부분적으로 일어나게 해야한다.</li>
                        </ol>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 4. 리액트 코드 돌려보기 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 5. css적용 방법 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 6. 함수 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 7. 조건문 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 8. 반복문 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 9. 컴포넌트 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 10. Props </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 11. useState </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 12. useRef </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 13. useEffect </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 14. ReactHook </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 15. ReactRouter </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 16. React에 Emmet추가하는법 </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="프로젝트 설정"> 17. React Redux </a> </span>
                        <span clsssName="sblock">

                        </span>
                    </span>
                </span>
            </div>
        </>
    );
}

export default ReactBasic;