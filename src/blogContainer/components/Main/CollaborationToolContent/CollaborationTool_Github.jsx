import React from 'react';

const CollaborationTool_Github = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] git bash 계정 설정, 조회, 삭제 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 생성 </h2>
            <div className='block4'>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 조회 </h2>
            <div className='block4'>
              <li> git config user.name </li>
              <li> git config user.email </li>
            </div>

            <h2 className='h2'> 📌 변경 </h2>
            <div className='block4'>
              <li> git config --global user.name 변경하려는계정명 </li>
              <li> git config --global user.email 변경하려는이메일명 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 삭제 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 에러 관련 </h2>
            <div className='block4'>
              <li> push할때 에러가 발생하게 되면 Window 자격증명 제거 필요 </li>
              <li> 제어판 - 사용자계정 - 자격 증명 관리 - Windows 자격 증명 - github항목 삭제 후 수정 </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] 깃허브 리드미 작성방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 (1) 제목(머리글) 작성 </h2>
            <div className='block4'>
              <li> # <small> h1 태그 </small> </li>
              <li> ## <small> h2 태그 </small> </li>
              <li> ### <small> h3 태그 </small> </li>
              <li> #### <small> h4 태그 </small> </li>
              <li> ##### <small> h5 태그 </small> </li>
              <li> ###### <small> h6 태그 </small> </li>
            </div>

            <h2 className='h2'> 📌 (2) 리스트 작성 </h2>
            <div className='block4'>
              <div className="h3"> 번호없는 리스트 </div>
              <li> * 리스트1 </li>
              <li> - 리스트2 </li>
              <li> + 리스트3 </li>
              <div className="h3"> 순서있는 리스트 </div>
              <li> 1. 리스트1 </li>
              <li> 2. 리스트2 </li>
              <li> 3. 리스트3 </li>
            </div>

            <h2 className='h2'> 📌 (3) 글씨 모양 </h2>
            <div className='block4'>
              <li> *기울어진글씨* , _기울어진글씨_ </li>
              <li> **굵은글씨** , __굵은글씨__ </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 (4) 인용문 사용 방법 </h2>
            <div className='block4'>
              <li> {">"} 설명1 </li>
              <li> {"> >"} 설명2 </li>
              <li> {"> > >"} 설명3 </li>
            </div>

            <h2 className='h2'> 📌 (5) 수평 밑줄 넣기 </h2>
            <div className='block4'>
              <li> *** </li>
              <li> --- </li>
              <li> ___ </li>
            </div>

            <h2 className='h2'> 📌 (6) 링크 </h2>
            <div className='block4'>
              <li> [링크텍스트](#링크주소) </li>
              <li> #이 붙은 것들은 링크주소로 인식 </li>
              <li>  </li> <br />
              <li> [링크텍스트][참조명] </li>
              <li> [참조명]: 링크주소 </li>
            </div>

            <h2 className='h2'> 📌 (7) 코드 넣기  </h2>
            <div className='block4'>
              <li> ``` 와 ``` 사이에 코드를 작성해서 넣는다. </li>
              <li> 안에서는 띄워쓰기와 줄바꿈이 자동으로 된다. </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 (8) 표 만들기 </h2>
            <div className='block4'>
              <li> |:---|:---:|---:| </li>
              <li> |좌측|중간|우측| </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 (9) 체크박스 </h2>
            <div className='block4'>
              <li> * [x] 체크박스 x표시 </li>
              <li> * [ ] 체크박스 표시 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] 깃허브 브랜치 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 default 브랜치 변경하기 </h2>
            <div className='block4'>
              <li> 깃허브 저장소 - 설정 - 브랜치 - Default branch로 변경하면된다. </li> <br />

              {/*<li> git config --global init.defaultBranch master </li> */}
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <div className='block4'>
              <li> 장점 : </li>
              <li> 단점 : </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> =================================== </summary>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> git pull </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li>  </li>
            <li>  </li>

            <h2 className='h2'> 📌 에러 </h2>
            <li> refusing to merge unrelated histories <small> git pull origin 브런치명 --allow-unrelated-histories </small> </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 에러 모음 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 pull이나 push할때 발생하는 경고 </h2>
            <li> fatal: refusing to merge unrelated histories
              <div className="block4">
                <li> 로컬과 원격저장소의 내용이 많이 차이나서 오류가 날것을 경고 </li>
                <li> git pull origin 브런치명 --allow-unrelated-histories <small> 해결방법 </small> </li>
                <li>  </li>
              </div>
            </li>
            <li>
              <div className="block4">
                <li>  </li>
              </div>
            </li>
            <li>
              <div className="block4">
                <li>  </li>
              </div>
            </li>
            <li>
              <div className="block4">
                <li>  </li>
              </div>
            </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> *********************************** </summary>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 저장소 만들기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Repositories 클릭 </li>
            <li> New </li>
            <li> Repository name에 저장소명(프로젝트명) 입력 </li>
            <li> Public / Private 에서 이왕이면 Public </li>
            <li> Add a README file을 체크안해도 상관은 없음 </li>
            <li> 나머지는 체크 안하고 Create repository 클릭 </li>
            <li> 완료 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 저장소 삭제하기  </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Settings - Options - 스크롤 제일 밑에 - Delete this repository 클릭 </li>
            <li> Please type 이부분복사붙여넣기 to confirm </li>
            <li> 완료 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 프로젝트 인원 추가하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 원작자 </h2>
            <li> Settings - Manage access Add people </li>

            <h2 className='h2'> 📌 참가자 </h2>
            <li> 원작자의 프로젝트로 이동 </li>
            <li> View invitation 클릭 </li>
            <li> Accept invitation </li>
            <li> 상단에 you now have push access to the 원작자/저장소명 repository. 보이면 초대완료 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 다른 사람 저장소 같이 사용하기(Clone) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 VScode에서 하는 방법 </h2>
            <li> 다른 사람 깃허브 저장소 가기 </li>
            <li> 초록색 Code 버튼 클릭 - HTTPS에 있는 코드 복사 </li>
            <li> 새로운 파일 열고 Ctrl + Shift + P </li>
            <li> Git: clone 입력 </li>
            <li> 위에서 복사한 코드 붙여넣기 </li>
            <li> 컴퓨터에 저장할 로컬 저장소 선택하기  </li>
            <li> 우측 하단에 open클릭하고 체크박스 체크하고 all authors trust한다고 선택 </li>
            <li> 완료 </li>

            <h2 className='h2'> 📌 터미널에 코드 입력하기 </h2>
            <li> git clone [다른 사람 저장소에 초록색 Code눌렀을 때 나오는 HTTPS 코드 붙여넣기] [로컬저장소의 경로넣기, 넣지 않으면 현재 터미널에서 가리키는 위치에 폴더 생성] </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 로컬 저장소에서 원격저장소 위치 조회하기, 삭제하기, 연결하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 조회하기 </h2>
            <li> 터미널 창에 cd [로컬저장소폴더경로] 입력 </li>
            <li> git remote -v </li>

            <h2 className='h2'> 📌 삭제하기 </h2>
            <li> git remote -v </li>
            <li> git remote remove [위명령어에서나온제일앞에단어] </li>

            <h2 className='h2'> 📌 연결하기 </h2>
            <li> git remote add origin [깃허브저장소주소.git] </li>
            <li> git remote -v </li>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> 원격저장소에서 특정 브런치만 가져오기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git clone --branch [TAG] [REPO_URL] </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 다른 사람 깃허브에 브랜치 만들고 push 하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 다른 사람 깃허브 저장소에서 branch 생성하기 </li>
            <li> git init </li>
            <li> git remote add origin 상대방깃허브주소 </li>
            <li> git pull origin 브랜치명 </li>
            <li> 둘중 1개 입력
              <li> git checkout -b 브랜치명 <small> # 내가 사용할 브랜치 만들고? 변경 </small> </li>
              <li> git checkout 브랜치명 <small> # 내가 사용할 브랜치로 변경 </small> </li>
            </li>
            <li> git add . </li>
            <li> git commit -m "커밋내용" </li>
            <li> git push origin 브랜치명 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 브랜치 하나로 merge 시키기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git checkout 브랜치명 </li>
            <li>  </li>
            <li>  </li>

          </div>
        </details>
      </div>



      <div className='block1'>
        <details>
          <summary> 저장소의 모든 내용을 탐색하지 않고 최근 변경 코드만 가져오기(얕은 클론) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git clone --depth=1 [REPO_URL] </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 원격 저장소에 현재 작업한 내용 올리기(push) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git init </li>
            <li> git add . </li>
            <li> git commit -m "커밋내용" </li>
            <li> git remote add [원격저장소별칭,origin] [https://github.com/깃허브계정/깃허브저장소.git] <small> # 처음에만 추가하고 이후에는 코드 입력x </small> </li>
            <li> git push -u [원격저장소별칭,origin] [브랜치명,master] <small> # 이후에는 git psuh만 사용 </small> </li>
            <li> </li> <br />
            <li> git pull <small> # 원격저장소에 있는 내용을 전부 받아오는 것이다. </small></li>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> 깃허브 pull request 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 다른 사람이 push를 해도 구성원이 모두 허용하지 않는다면 push가 되지 않는다. </li>

            <li> 깃허브1 - Branches - Branch protection rules - Branch name pattern에 "master"
              - Require a pull request before merging - Require approvals(허용사람수 선택) -
              include administrators(소유주도 똑같은 정책 허용) - create  </li>
            <li> 깃허브2의 브런치 생성- commit - push - create pull request - 내용적고,create pull request버튼을 누르면 된다,
              - 우측에 reviewers  </li>
            <li> 깃허브1에 상단에 pull requests - file change - review changes클릭 - 내용하고 승인 - master branch에 merge해주기
            </li>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> 다른 사람 저장소에서 fork 해서 저장소 만들고 사용하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 다른 사람의 깃허브저장소에 가서 fork 누르기 </li>
            <li> 터미널에 입력 </li>
            <li> git rm * </li>
            <li> git init </li>
            <li> git config --global user.name "사용자이름" </li>
            <li> git config --global user.email "사용자이메일" </li>
            <li> git remote set-url origin https://깃아이디:깃비밀번호@github.com/깃허브주소.git <small> # 깃허브 주소 넣을 때 앞에 .com ~ .git 사이에 값을 넣으면 된다. </small> </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> git에서 중요하거나 큰 파일 등 제외시키기 (미완성) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> .gitgnore 파일 생성 </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 제목 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Git 설명 </h2>
            <li> 1. 버전관리 툴 </li>
            <li> 2. git은 로컬 저장소에서 버전을 관리하는 것이고 github는 원격저장소에서 버전을 관리하는 것이다. </li>
            <li> 3. 작업공간
              <li> working directory : PC에서 git을 사용하는 작업공간 </li>
              <li> local repository : 임시 버전이 올라가는 공간, 개인 전용 저장소 </li>
              <li> remote repository : 최종 버전이 올라가는 공간 </li>
            </li>
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
            <h2 className='h2'> 📌 Git 명령어 </h2>
            <li> git-version : git 버전을 확인 </li>
            <li> git init : git에 파일을 연동  <small> # 로컬에 저장소를 생성 </small>  </li>
            <li> git add . : git에 파일은 올려놓음 <small> # 임시공간에 잠시 보관 </small> </li>
            <li> git commit -m "메모" <small> # 로컬 저장소에 저장(C언어의 포인터 같이 저장된 데이터의 위치를 기억)  </small></li>
            <li> git push origin master : github 저장소에 파일을 올리기 <small> 원격저장소에 저장 </small> </li>
            <li> git remote add origin 깃허브저장소주소 <small> # 깃허브에 연결 </small> </li>
            <li> git fetch # 깃허브에서 local 저장소로 파일을 가져옴 </li>
            <li> git merge # git을 합침, 이거는 에러도 발생하는 것으로 기억 </li>
            <li> git pull # git fetch + git merge 사용 </li>
            <li> git status # git에 현재상태를 보는 방법 </li>
            <li> git clone : 깃허브에서 전체 내용을 가져옴 </li>
            <li> git branch "브랜치명" # 브랜치를 생성 </li>
            <li> git merge "브랜치명" # 마스터 브랜치에 브랜치를 합침 </li>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 깃허브 터미널로 설정하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 git 환경설정 파일 열기 </h2>
            <li> git config --global -e </li>

          </div>
        </details>
      </div>

    </div>
  );
}
export default CollaborationTool_Github;

