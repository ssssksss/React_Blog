import React from 'react';

const GithubBasic = (props) => {

    return (
        <>
            <div className="common_style">
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

