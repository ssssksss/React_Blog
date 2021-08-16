import React, { useEffect, useRef, useState } from 'react';

const GithubBasic = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);


        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            document.documentElement.scrollTop < elementHeight1 ?
                blockRef.current[0].style.top = elementHeight1 + "px" :
                blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight2 + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
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
                        <a href="#" className="col_b"> <b> 깃허브 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';

                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary>  </summary>
                            <a href="#깃허브와 관련된 용어 및 명령어" className="col_p"> 깃허브와 관련된 용어 및 명령어 </a>
                            <a href="#깃허브에 파일 올리는 방법" className="col_p"> 깃허브에 파일 올리는 방법 </a>
                            <a href="#" className="col_p"> </a>
                            {/* <a href="#" className="col_p"> </a> */}
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <ul>
                    <span className="lblock">
                        <span className="mtitle"> 깃허브 </span>
                        <small> 분산형 저장소, 형상관리 Tool </small>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="깃허브와 관련된 용어"> 깃허브와 관련된 용어 및 명령어 </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> Git 명령어 </span>
                                <span className="mblock">
                                    <li> git-version : git 버전을 확인 </li>
                                    <li> git init : git에 파일을 연동</li>
                                    <li> git add . : git에 파일은 올려놓음 </li>
                                    <li> git remote add origin 깃허브저장소주소 : 깃허브 저장소에 연결 </li>
                                    <li> git push origin master : github 저장소에 파일을 올리기 </li>
                                    <li> git fetch : github에서 local 저장소로 파일을 가져옴 </li>
                                    <li> git merge : git을 합침, 이거는 에러도 발생하는 것으로 기억 </li>
                                    <li> git pull : git fetch + git merge 사용 </li>
                                    <li> git status : git에 현재상태를 보는 방법 </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="깃허브에 파일 올리는 방법"> 깃허브에 파일 올리는 방법 </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> Git Bash를 이용하여 파일 업로드 </span>
                                <small> <a href="https://www.git-scm.com/download" target="_blank"> Git Bash 다운로드 링크 </a> </small>
                                <span className="mblock">
                                    <li> 1. cd 폴더주소 : 연결할 폴더로 이동 </li>
                                    <li> 2. git init : git에 파일을 연동 </li>
                                    <li> 3. git remote add origin 깃허브저장소주소 </li>
                                    <li> 4. git add . </li>
                                    <li> 5. git commit -m "커밋내용" </li>
                                    <small> error: src refspec main does not match any 에러가 날때 해결가능 </small>
                                    <li> 6. git push origin master </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name=""> </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name=""> </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                    </span>
                </ul>
            </div>
        </>
    );
}
export default GithubBasic;

