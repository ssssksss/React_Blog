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
                                <span className="sstitle"> Git 설명 </span>
                                <span className="mblock">
                                    <li> 깃을 사용하는 이유
                                        <li> 이전 버전의 코드 불러오기 </li>
                                        <li> 개발자들과의 협업에서 잘못된 코드 복원 용도 </li>
                                        <li> 개발자들끼리의 코드(작업 상황) 공유  </li>
                                        <li> 새로운 버전 백업  </li>
                                    </li>
                                    <li> git은 로컬과 원격저장소(Github)에서 관리가 가능하다. </li>
                                    <li> git은 CLI(터미널)을 이용하여 명령어로 작업을 수행  </li>
                                    <li> Source Tree라는 GUI 어플리케이션이 있음 </li>
                                    <li> git은 작업을 따로 하다가 하나로 합칠수도 있다. </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> Git 명령어 </span>
                                <span className="mblock">
                                    <li> git-version : git 버전을 확인 </li>
                                    <li> git init : git에 파일을 연동 # 로컬에 저장소를 생성 </li>
                                    <li> git add . : git에 파일은 올려놓음(임시공간에 잠시 보관) </li>
                                    <li> git remote add origin 깃허브저장소주소 # 깃허브에 연결 </li>
                                    <li> git push origin master : github 저장소에 파일을 올리기 </li>
                                    <li> git fetch # 깃허브에서 local 저장소로 파일을 가져옴 </li>
                                    <li> git merge # git을 합침, 이거는 에러도 발생하는 것으로 기억 </li>
                                    <li> git pull # git fetch + git merge 사용 </li>
                                    <li> git status # git에 현재상태를 보는 방법 </li>
                                    <li> git clone # 깃허브에서 전체 내용을 가져옴 </li>
                                    <li> git commit -m "메모" # 로컬 저장소에 저장(C언어의 포인터 같이 저장된 데이터의 위치를 기억) </li>
                                    <li> git branch "브랜치명" # 브랜치를 생성 </li>
                                    <li> git merge "브랜치명" # 마스터 브랜치에 브랜치를 합침 </li>
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
                            <span className="stitle"> <a name=""> 깃허브에 폴더 올리는 방법 </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> 처음일때 </span>
                                <span className="mblock">
                                    <li> 1. git에 저장소를 생성 </li>
                                    <li> 2. git bash 명령어 사용 (터미널)
                                        <li> C/AA/BB , BB라는 폴더를 깃에 올리고 싶다면 C/AA 경로에서 git bash 명령어 입력 </li>
                                    </li>
                                    <li> git status </li>
                                    <li> git add 폴더명(BB) </li>
                                    <li> git commit -m "메모" </li>
                                    <li> git remote add origin https://github.com/깃허브리포지토리명
                                        <li> 상위 폴더에 깃이 연결되어 있다면 git remote -v </li>
                                    </li>
                                    <li> git push origin master </li>
                                </span>
                                <span className="sstitle"> 처음이 아닐때 </span>
                                <span className="mblock">
                                    <li> git add 폴더명(BB) </li>
                                    <li> git commit -m "메모" </li>
                                    <li> git push origin master </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name=""> 깃허브 리포지토리 삭제하는 방법 </a> </span>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> git remote remove origin # 기존 리포지토리에 연결되어 있는 것을 제거 </li>
                                    <li> git remote add origin https://github.com/깃허브아이디/리포지토리 </li>
                                </span>
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

