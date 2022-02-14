import React from 'react';

const KeyMapIntellij = (props) => {

  return (
    <div className="common_style" >
      <div className='block1'>
        <details>
          <summary> 인텔리제이 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 주석 </h2>
            <li> 주석 색깔 변경하는 방법
              <div className="block4">
                <li> File - Settings - todo 검색( Editor - TODO) </li>
                <li> + 클릭하고 아래와 같이 입력  </li>
                <li> Pattern : \b(키워드|fixme)\b.* </li>
                <li> Use color scheme TODO default colors 체크 해제 </li>
                <li> 원하는 색깔 지정 </li>
                <li> OK 누르기 </li>
                <li> //키워드 주석입력 , 이와 같이 이제 사용하면 주석색깔이 변경되어 사용가능 </li>
              </div>
            </li>
            <li>  </li>
            <li>  </li>

            <h2 className='h2'> 📌  </h2>
            <li> 주석 색깔 변경하는 방법 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 인텔리제이 파일 생성때 자동 주석 생성 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> Ctrl+Alt+S - File and Code Templates </li>
              <div className="block3">
                <li> {" /** "} </li>
                <li> {"     * PackageName : ${PACKAGE_NAME} "} </li>
                <li> {"     * FileName : ${NAME} "} </li>
                <li> {"     * Author : 이 름 "} </li>
                <li> {"     * Date : ${DATE} "} </li>
                <li> {"     * Description :  "} </li>
                <li> {" */ "} </li>
              </div>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>


      <ul>
        <span className="lblock">


          <div className='mblock'>
            <details>
              <summary className='stitle'> Intellij 단축키
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'> Intellij 단축키 </div>
                <div className='mblock'>
                  <li> <a href="https://gmlwjd9405.github.io/2019/05/21/intellij-shortkey.html" target="_blank"> 참고 </a></li>
                  <li> Ctrl + D   : 코드 한줄 아래 복사 붙여넣기 </li>
                  <li> Ctrl + R   : 내용 바꾸기 </li>
                  <li> Ctrl + Shift + R   : 모든 파일 내용 바꾸기 </li>
                  <li> Alt + Insert   : 생성자, getter,setter 등 </li>
                  <li> Ctrl + O : 오버라이딩 메소드 선택 </li>
                  <li> Ctrl + X   : 코드 한줄 지우기 </li>
                  <li> Ctrl + Alt + l   : 코드 정리 </li>
                  <li> Alt + Shift + 방향키   :  코드 라인 위치 옮기기 </li>
                  <li> Ctrl + /   : 해당 줄 주석 처리 </li>
                  <li> Ctrl + E   : 최근 실행 파일 확인 </li>
                  <li> </li>
                  <li> Alt + 1  : Project View 열고 닫기 </li>
                  <li> Ctrl + Shift + T   : 테스트 코드 작성 </li>
                  <li> Shift + F6   : 이름 변경(동일이름 전부 변경) </li>
                  <li> Ctrl + A   : 코드 전체 드래그 </li>
                  <li> Alt + Enter   :  코드 수정 제안 </li>
                  <li> Ctrl + B   : 코드에서 선택된 필드 코드로 이동 </li>
                  <li> Alt + F7   : 항목이 사용된 위치를 모두 표시 </li>
                  <li> Ctrl + W   : 코드 주위 영역 드래그 확대 </li>
                  <li> Ctrl + Shift + W   : 코드 주위 영역 드래그 축소 </li>
                  <li> Shift + Ctrl + A   : 모든 액션을 검색 가능  </li>
                  <li> Ctrl + Alt +Shift + T : 무엇인가를 실행할 때 윈도우용 단축키를 보는 방법(미확인) </li>
                  <li> </li>
                </div>
              </div>
            </details>
          </div>

          <div className='mblock'>
            <details>
              <summary className='stitle'> Intellij 설정
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className="sblock">
                <div className="sstitle"> 폰트 크기 마우스 휠로 설정하기 </div>
                <li>  File - Settings - Editor - General - Change font size with Ctrl+Mouse Wheel 체크하기 </li>
                <div className="sstitle"> 자동 저장 설정 , 저장하지 않은 파일 표시 </div>
                <li> File - Settings - Appearance &amp; Behavior - Systme Settings - Autosave탭</li>
                <li> File - Settings - Editor - General - Editor Tabs - Mark modified(*) 체크 </li>
                <div className="sstitle"> 탭 갯수 제한 설정 </div>
                <li> File - Settings - Editor - General - Editor Tabs - Tab limit: 갯수 설정하기 </li>
                <li>   </li>
                <div className="sstitle"> Gradle 사용할 경우 실행 속도를 빠르게 하기 위한 설정 </div>
                <li> File - Settings - Build,Extension,Deployment - Build Tools - Gradle - Build and run using, Run tests using
                  을 둘다 Intellij IDEA 로 바꾸기 </li>
                <div className="sstitle"> 콘솔창 가로 스크롤 생성하지 않게 하는 방법 </div>
                <li> 아래 아이콘들 중에 메뉴바3개에 줄바꿈을 표시하는 soft-wrap 아이콘을 클릭하면 된다. </li>
                <div className='sstitle'> 인텔리 제이 한글 깨짐 </div>
                <div className='mblock'>
                  <li> [1] 파일 설정 encoding 바꾸기
                    <li> ctrl+alt+s - settings - editor - file encodings </li>
                    <li> Global Encoding , Project Encoding , Default encoding for properties files 3곳 UTF-8로 변경 </li>
                  </li>
                  <li> [2] 인텔리제이 VM Options 바꾸기
                    <li> Help - Edit Custom VM Options </li>
                    <li> 제일 아래에 -Dfile.encoding=UTF-8 코드 추가 </li>
                  </li>
                  <li> [3] 1,2을 하고서 인텔리제이 종료하고 재실행해보기 </li>
                </div>
              </div>
            </details>
          </div>

          <div className='mblock'>
            <details>
              <summary className='stitle'> 깃허브에 올리는 방법(좀 더 확인 필요)
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'>  </div>
                <div className='mblock'>
                  <li> VCS - Enable Version Control Integration - Git </li>
                  <li> VCS - Git - commit - 모두체크하고 commit </li>
                  <li> VCS - Git - remote - github 연결 </li>
                  <li> VCS - Git - push </li>
                </div>
              </div>
            </details>
          </div>
          {/*  */}

        </span>
      </ul>
    </div>
  );
}

export default KeyMapIntellij;