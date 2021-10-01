import React from 'react';

const KeyMapVscode = (props) => {

  return (
    <>
      <div className="common_style">
        <ul>
          <span className="lblock">
            <span className="mtitle"> 단축키 및 설정 </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  VS Code 단축키 <a name="VS Code 단축키" style={{ visibility: "hidden" }}> VS Code 단축키 </a> </summary>
                <span className="sblock">
                  <span className="sstitle">  </span>
                  <li> Ctrl + , : 설정창 이동 </li>
                  <li> Alt + Shift + F : 포맷팅 단축키 </li>
                  <li>  </li>
                  <li>  </li>
                  <li>  </li>
                  <li>  </li>
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  VS Code 설정 <a name="VS Code 설정" style={{ visibility: "hidden" }}> VS Code 설정 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 탭 설정 </span>
                  <li> 아래 파란색 줄 Tab Size: 4 를 변경하기 </li>
                  <li> Indent Using Spaces : 들여쓰기를 공백으로 설정, Indent Using Tabs : 들여쓰기를 탭으로 설정 </li>
                  <li> </li>
                  <span className="sstitle">  </span>
                  <li> </li>
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  VS Code Prettier 설정  <a name="VS Code Prettier 설정" style={{ visibility: "hidden" }}> VS Code Prettier 설정 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설정창으로 설정하는 방법 </span>
                  <li> File - Preferences - settings - Extensions - Prettier </li>
                  <li> File - Preferences - settings - 우측 상단에 -
                    Open Settings(JSON) 아이콘 클릭 - 구버전 방식의 Prettier 코드  추가적으로 입력 </li>
                  <span className="mblock">
                    <li> prettier.printWidth (default: 80) <small> 한 줄의 글자수를 설정 </small> </li>
                    <li> prettier.tabWidth (default: 2) <small> 탭을 눌렀을 때 간격 </small>  </li>
                    <li> prettier.singleQuote (default: false) <small> 객체, 배열, 함수 등 줄 뒤에 쉼표를 사용할지 선택 </small>  </li>
                    <li> <small> none : 사용x , es5 : ES5에서 유효한 후행 쉼표 , all : 가능하면 후행 쉼표 </small>  </li>
                    <li> prettier.bracketSpacing (default: true) <small> 객체 내부의 공백을 제어 </small></li>
                    <li> prettier.jsxBracketSameLine (default: false) <small> jsx 요소 마지막 다음 줄에 닫기 &gt; 표시 </small> </li>
                    <li> prettier.parser (default: 'babylon') <small> javascript에서만 사용됨, 파서를 설정 </small>  </li>
                    <li> prettier.semi (default: true) <small> 문장 뒤에 세미콜론 설정 여부 </small>  </li>
                    <li> prettier.useTabs (default: false) <small> 탭이 있는 줄은 들여쓰기를 사용 여부 </small>  </li>
                    <li> prettier.proseWrap (default: 'preserve') <small> 여러 줄에 걸쳐 산문을 랩핑 ??? </small>  </li>
                    <li> prettier.arrowParens (default: 'avoid') <small> 화살표 함수의 매개변수 주위에 괄호를 자동으로 붙힘 </small>  </li>
                    <li> prettier.jsxSingleQuote (default: false)  <small> 큰 따옴표대신 작은 따옴표를 사용한다는 의미 </small>  </li>
                    <li> prettier.htmlWhitespaceSensitivity (default: 'css') <small> HTML 파일의 공백 감도 지정 ??? </small>  </li>
                    <li> prettier.endOfLine (default: 'auto') <small> ? </small>  </li>
                    <li> prettier.quoteProps (default: 'as-needed') <small> 객체의 속성이 인용될 때 변경 </small>  </li>
                    <li> prettier.requireConfig (default: false) <small> prettierconfig 파일 적용 선택 </small>  </li>
                    <li> prettier.ignorePath (default: 파일명) <small> 파일명(.prettierignore)에 prettier이 적용 안되게함 </small>  </li>
                    <li> prettier.disableLanguages (default: ["vue"]) <small> 확장 기능을 비활성화 할 언어 ID 목록 </small>  </li>
                  </span>
                  <li> </li>
                  <span className="sstitle">  </span>
                  <li> </li>
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  워크스페이스 관련 <a name="워크스페이스 관련" style={{ visibility: "hidden" }}> 워크스페이스 관련 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 워크스페이스 계단식으로 만들기 </span>
                  <span className="mblock">
                    <li> File - Preferences - Settings - Features - Explorer - Compact Folders 체크 해제 </li>
                  </span>
                </span>
                {/*  */}
                <span className="sblock">
                  <span className="sstitle">  </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                </span>
                {/*  */}
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  탭키가 작동하지 않을 때 <a name="탭키가 작동하지 않을 때" style={{ visibility: "hidden" }}> 탭키가 작동하지 않을 때 </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> Ctrl + M을 누르면 해결 </span>
                  <span className="mblock">
                    <li> Ctrl + M을 누르면 포커스 이동으로 바뀜 </li>
                  </span>
                </span>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle">  VS Code Extension 추천
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> Auto Rename Tag </span>
                  <span className="mblock">
                    <li> HTML 여는태그와 닫는태그를 동시에 수정 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Auto Close Tag </span>
                  <span className="mblock">
                    <li> HTML 여는태그만 입력해도 닫는태그가 자동으로 생성 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Bracket Pair Colorizer 2 </span>
                  <span className="mblock">
                    <li> 괄호에 맞춰 색상을 변경 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> colorize , Color Highlight </span>
                  <span className="mblock">
                    <li> css에서 색을 입력하면 css코드에서 색을 보여줌 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Prettier </span>
                  <span className="mblock">
                    <li> 코드를 정렬해주고 양식에 맞게 설정해줌 , 추가적인 코드가 필요하다. </li>
                    <li> 필요하다면 인터넷에 검색 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Css Peek </span>
                  <span className="mblock">
                    <li> Ctrl 버튼을 누르고 마우스 왼쪽을 클릭하면 참조된 위치로 이동이 가능하다. </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Highlight Matching Tag </span>
                  <span className="mblock">
                    <li> 현재 태그의 쌍이 어디인지를 알려준다. </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> vscode-icons , Material Icon Theme </span>
                  <span className="mblock">
                    <li> 기존 vscode의 파일 아이콘을 변경하는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> npm Intellisense </span>
                  <span className="mblock">
                    <li> 라이브러리의 이름이 일부 일치하면 코드를 추천해주는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Bookmarks </span>
                  <span className="mblock">
                    <li> ctrl + alt + k 를 코드 줄에서 누르면 좌측 북마크 목록에 기록이 된다. </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Korean Language Pack for Visual Studio Code </span>
                  <span className="mblock">
                    <li> 한국어 팩 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Settings Sync </span>
                  <span className="mblock">
                    <li> 기존에 개발환경 세팅을 GitHub gist에 업로드 해놓고서 사용 </li>
                    <li> settings.json도 동기화 가능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Theme 종류 </span>
                  <span className="mblock">
                    <li> 코드의 태그,클래스, 등등의 색깔을 바꾸거나 배경의 색, 테두리 색등을 바꾸는 기능 </li>
                    <li> 너무 많아서 본인에게 맞는 것을 찾아서 사용 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Indent Rainbow </span>
                  <span className="mblock">
                    <li> 탭 간격을 색깔로 구분지어서 보여주는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Html Css Support </span>
                  <span className="mblock">
                    <li> html에서 css를 추천해주는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Live Server </span>
                  <span className="mblock">
                    <li> 코드를 작성하면 바로 브라우저에서 적용해서 보여주는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Todo Tree </span>
                  <span className="mblock">
                    <li> 주석으로 내가 무엇을 하려고 했는지 표시를 해주고 기록해주는 기능 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Better Comments </span>
                  <span className="mblock">
                    <li> 주석에 색을 입히는 것이 가능하다 </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> REST Client </span>
                  <span className="mblock">
                    <li>  </li>
                  </span>
                  {/*  */}
                  <span className="sstitle"> Sort Lines </span>
                  <span className="mblock">
                    <li> 드래그를 한 후에 설정을 하면 코드가 알파벳 순서로 정렬이 되게 하는 기능 </li>
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
            <span className="mblock">
              <details>
                <summary className="stitle">  VS Code Snippet
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <span className="sblock">
                  <span className="sstitle"> 설정 </span>
                  <span className="mblock">
                    <li> File - Preferences - User Snippets </li>
                    <li> New Global Snippets File </li>
                    <li> 아래와 같이 스니펫 정의하기 </li>
                    <div className="sblock">
                      <li> {'{'}
                        <li>	"스니펫이름": {'{'} </li>
                        <li> "scope:" "사용언어", </li>
                        <li> "prefix": "스니펫약어, 코드에서 쓰는 약어" </li>
                        <li>
                          <li> "body": [ </li>
                          <li> "내용1", </li>
                          <li> "내용2", </li>
                        </li>
                        <li> ], </li>
                        <li> "description": "스니펫설명" </li>
                        <li> {'}'} </li>
                      </li>
                      <li> {'}'} </li>
                    </div>
                    <li> https://code.visualstudio.com/docs/editor/userdefinedsnippets 참고 </li>
                    <li> 이미 extension으로 스니펫이 있으니 기존에 있는 것을 사용하는 것을 추천 </li>
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
            <div className="mblock">
              <details>
                <summary className="stitle"> VS Code Java
                  <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                <div className='sblock'>
                  <div className='sstitle'> VS Code Java 설치방법 </div>
                  <div> <a href="https://code.visualstudio.com/docs/java/java-spring-boot"
                    target="_blank" rel="noopener noreferrer"> VS Code 자바 문서 </a> </div>

                  <div className='mblock'>
                    <li> VS Code Extension에서 Java Extension Pack 설치 </li>
                    <li> VS Code 재시작 </li>
                    <li> File - Preperences - Settings - java.home 검색 - edit in settings.json - "java.home": "" 에 자바
                      설치된 경로를 넣어준다.
                      <li> C:/Program Files/Java/jdk-11.0.10  # 경로 기호 /로 변경해서 넣어야 함</li>
                    </li>
                    <li> VS Code에서 자바로 시작해서 실행을 하면 작동이 되는 것을 볼 수 있다. </li>
                  </div>

                  <div className='sstitle'> VS Code Maven 설치방법 </div>
                  <div className='mblock'>
                    <li> Ctrl + Shift + P - Java:Overview 검색 </li>
                    <li> Create a Maven project </li>
                    <li> maven-archetype-quickstart </li>
                    <li> 버전 선택(1.4) </li>
                    <li> groupId : 프로젝트 식별자 # com.test.maven</li>
                    <li> artifactId : 패키지이름 </li>
                    <li> version : 버전 정보 </li>
                    <li> package : 기본 패키지 정보 </li>
                    <li> 자바11을 설치해서 maven버전을 3.8이상으로 바꾸려고 했는데
                      버전을 보니 4.0.0이 되어있어서 건드릴 필요는 없는것 같다. </li>
                    <li>  </li>
                  </div>

                  <div className='sstitle'> VS Code Gradle 설치방법 </div>
                  <div className='mblock'>
                    <li> </li>
                    <li> </li>
                  </div>

                  <div className='sstitle'> VS Code Spring Boot 설치방법 </div>
                  <div className='mblock'>
                    <li> VS Code Extension에서 Spring Boot Extension Pack 설치 </li>
                    <li> Ctrl + Shift + P - Java:Overview 검색 </li>
                    <li> Create Spring Boot Project.. 클릭 </li>
                    <li> Maven, Gradle 설정  </li>
                    <li> Spring Boot Version 설정 </li>
                    <li> Java , Kotlin , Groovy </li>
                  </div>

                  <div className='sstitle'>  </div>
                  <div className='mblock'>
                    <li> </li>
                    <li> </li>
                  </div>

                </div>
              </details>
            </div>

            <div className='mblock'>
              <details>
                <summary className='stitle'> django html 자동변환 되는것을 .html로 바꾸는 방법
                  <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                <div className='sblock'>
                  <div className='sstitle'>  </div>
                  <div className='mblock'>
                    <li> Ctrl +, - settings.json 검색 - settings.json 파일 열기 - 아래 코드 추가
                      <li> {'     "files.associations": {  '} </li>
                      <li> {'         "*.html": "html"  '} </li>
                      <li> {'     },  '} </li>
                    </li>
                  </div>
                </div>
              </details>
            </div>

            <div className='mblock'>
              <details>
                <summary className='stitle'>
                  <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                <div className='sblock'>
                  <div className='sstitle'>  </div>
                  <div className='mblock'>
                    <li> </li>
                    <li> </li>
                  </div>
                </div>
              </details>
            </div>

          </span>
        </ul>
      </div>
    </>
  );
}

export default KeyMapVscode;