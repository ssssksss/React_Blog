import React from 'react';

const KeyMapVscode = (props) => {

  return (
    <>
      <div className="common_style">

        <div className='block1'>
          <details>
            <summary> Extension - 자동완성 및 유용한 기능 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>

              <li> 🚩 Turbo Console Log </li>
              <div className="block3">
                <li> 콘솔로그를 생성하고 주석처리 삭제 등 유용한 콘솔로그 기능 탑재 </li>
                <li> Ctrl + K , Ctrl + S - "turbo" 입력(turbo 키워드 설정) </li>
                <li> Ctrl + , - turbo 입력 (turbo 설정) </li>
                <div className="block4">
                  <li> Ctrl + Alt + L : (js,html script내부) console.log 생성 </li>
                  <li> Shift + Alt + C : 이 익스텐션으로 사용된 console.log 모두 주석처리 </li>
                  <li> Shift + Alt + U : 이 익스텐션으로 사용된 console.log 모두 주석해제 </li>
                  <li> Shift + Alt + D : 이 익스텐션으로 사용된 console.log 모두 주석삭제 </li>
                </div>
              </div>

              <li> 🚩 Visual Studio IntelliCode </li>
              <div className="block3">
                <li> AI 보조 도구로 알맞은 API나 코드를 추천해준다. </li>
              </div>

              <li> 🚩 vscode-icons , Material Icon Theme </li>
              <div className="block3">
                <li> 기존 vscode의 파일 아이콘을 변경하는 기능 </li>
              </div>

              <li> 🚩 npm Intellisense (사용한적 없음) </li>
              <div className="block3">
                <li> 라이브러리의 이름이 일부 일치하면 코드를 추천해주는 기능 </li>
              </div>

              <li> 🚩 Bookmarks </li>
              <div className="block3">
                <li> ctrl + alt + k 를 코드 줄에서 누르면 좌측 북마크 목록에 기록이 된다. </li>
              </div>

              <li> 🚩 Korean Language Pack for Visual Studio Code </li>
              <div className="block3">
                <li> 한국어 팩 </li>
              </div>

              <li> 🚩 Settings Sync (사용해본적은 없지만 나중에 참고) </li>
              <div className="block3">
                <li> 기존에 개발환경 세팅을 GitHub gist에 업로드 해놓고서 사용 </li>
                <li> settings.json도 동기화 가능 </li>
              </div>

              <li> 🚩 Live Server </li>
              <div className="block3">
                <li> 코드를 작성하면 바로 브라우저에서 적용해서 보여주는 기능 </li>
              </div>

              <li> 🚩 Todo Tree ( 나중에 사용해보기 ) </li>
              <div className="block3">
                <li>  주석으로 내가 무엇을 하려고 했는지 표시를 해주고 기록해주는 기능 </li>
              </div>

              <li> 🚩 REST Client ( 좀더 알아볼 것) </li>
              <div className="block3">
                <li> Postman에서 사용하는 Rest API 기능을 사용할 수 있다. </li>
                <li> 본인 Project Workspace에 확장자를 .http 혹은 .rest로 파일을 만든다. </li>
                <div className="block4">
                  <li> GET http://주소  </li>
                  <li>  </li>
                </div>
                <div className="block4">
                  <li> POST http://주소 </li>
                  <li> Content-Type: application/json </li>
                  <li> {'{'}
                    <li> "id": 123, </li>
                    <li> "pasword": 123, </li>
                  </li>
                  <li>  </li>
                  <li> {'}'} </li>
                </div>
                <div className="block4">
                  <li> DELETE http://주소 </li>
                  <li>  </li>
                </div>
                <div className="block4">
                  <li> PUT http://주소 </li>
                  <li>  </li>
                  <li>  </li>
                </div>
              </div>

              <li> 🚩 Sort Lines ( 나중에 사용해보기 ) </li>
              <div className="block3">
                <li> 드래그를 한 후에 설정을 하면 코드가 알파벳 순서로 정렬이 되게 하는 기능 </li>
              </div>

              <li> 🚩  </li>
              <div className="block3">
                <li>  </li>
              </div>

              <li> 🚩  </li>
              <div className="block3">
                <li>  </li>
              </div>

              <li> 🚩 TODO Highlight </li>
              <div className="block3">
                <li> TODO와 FIXME 주석 기능을 사용할 수 있게 해준다.  </li>
                <div className="block4">
                  <li> Ctrl + Shift + P - "todo-highlight" 입력 - todo-highlight: List highlighted annotations 클릭 </li>
                  <li> {'//'} TODO: todo 사용 <small> # {' "//" 문자뒤에 한칸을 띄어쓰기 해야한다. '} </small> </li>
                  <li> {'//'} FIXME: todo 사용 <small> # {' "//" 문자뒤에 한칸을 띄어쓰기 해야한다. '} </small> </li>
                  <li>  </li>
                </div>
              </div>

              <li> 🚩 advanced-new-file </li>
              <div className="block3">
                <li> 새 파일을 만들 때 코드를 입력하고 저장하고 폴더이름을 입력하는 방법을 생략하고 바로 파일이름하고 만들어짐 </li>
                <li> Ctrl + Shift + P - Advanced New File - 파일 만들 경로 선택 - "파일명.확장자명" 입력 </li>
                <li> 기존 새로운 파일 만들기 변경해서 사용하기 : Ctrl + K , Ctrl + S - "new file" 입력 - Advanced New File에 Key Binding 변경하기  </li>
                <li>  </li>
              </div>

              <li> 🚩 Prettier </li>
              <div className="block3">
                <li> 사용자가 설정하여 코드의 통일성을 부여하는 기능  </li>
                <li> File - Preferences - settings - Extensions - Prettier </li>
                <li> File - Preferences - settings - 우측 상단에 -
                  Open Settings(JSON) 아이콘 클릭 - 구버전 방식의 Prettier 코드  추가적으로 입력 </li>
                <div className="block4">
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
                </div>
              </div>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> Extension - 색깔, 디자인 ,이펙트 등 </summary>
            <div className='block2'>

              <li> 🚩 indent-rainbow </li>
              <div className="block3">
                <li> 공백 탭 공간을 색깔로 구분하여 구분하기 쉽게 해준다. </li>
              </div>

              <li> 🚩 Bracket Pari Colorizer, Bracket Pair Colorizer 2 </li>
              <div className="block3">
                <li> 각 태그의 영역을 색깔로 구분지어 보기 쉽게해준다.  </li>
              </div>

              <li> 🚩 Theme 종류 (현재 Panda Theme 사용) </li>
              <div className="block3">
                <li> 코드의 태그,클래스, 등등의 색깔을 바꾸거나 배경의 색, 테두리 색등을 바꾸는 기능 </li>
                <li> 너무 많아서 본인에게 맞는 것을 찾아서 사용 </li>
              </div>

              <li> 🚩 Better Comments </li>
              <div className="block3">
                <li>  주석에 색을 입히는 것이 가능하다 </li>
              </div>


              <li> 🚩 open in browser </li>
              <div className="block3">
                <li> browser로 열어서 바로 볼 수 있게 해준다. </li>
                <li> 우측 클릭 - open in Default Browser </li>
              </div>

              <li> 🚩 Polacode  </li>
              <div className="block3">
                <li> 입력한 코드를 이미지로 바꾸어주는 기능 </li>
              </div>

              <li> 🚩 </li>
              <div className="block3">
                <li>  </li>
              </div>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> Extension - HTML/CSS/JS </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>

              <li> 🚩 Auto Rename Tag 👍 </li>
              <div className="block3">
                <li> 태그를 변경할 시 마감태그가 자동으로 변경되게 해준다. </li>
              </div>

              <li> 🚩 Auto Close Tag 👍 </li>
              <div className="block3">
                <li> HTML 여는태그만 입력해도 닫는태그 코드가 자동으로 생성 </li>
              </div>

              <li> 🚩 HTML to CSS autocompletion </li>
              <div className="block3">
                <li> html에서 작성한 클래스나 아이디명을 css파일에서 자동으로 완성을 해주는 기능 </li>
              </div>

              <li> 🚩 Html Css Support </li>
              <div className="block3">
                <li> html에서 css를 추천해주는 기능 </li>
              </div>

              <li> 🚩 CSS Peek </li>
              <div className="block3">
                <li> html에서 클래스나 아이디를 클릭하여 css내용을 쉽게 찾아볼 수 있게 해준다.  </li>
                <li> Ctrl 버튼을 누르고 마우스 왼쪽을 클릭하면 참조된 위치로 이동이 가능하다. </li>
              </div>

              <li> 🚩 colorize , Color Highlight </li>
              <div className="block3">
                <li> css 파일에서 색을 입력하면 css코드에서 색을 보여줌 </li>
              </div>

              <li> 🚩 Highlight Matching Tag </li>
              <div className="block3">
                <li> 현재 태그의 쌍이 어디인지를 알려준다. </li>
              </div>

              <li> 🚩 Live Sass Compiler </li>
              <div className="block3">
                <li> sass,scss 컴파일을 자동으로 해준다. </li>
                <li> 설치하고 코드를 입력후에 아래에 Watch Sass를 클릭하면 자동으로 코드가 생성 </li>
                <a href="https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md" target="_blank" rel="noopener noreferrer">
                  sass 파일 설정은 이 곳을 참고
                </a>
                <li> 만들어진 map,css 파일에 주석을 만들지 않는 설정 방법 : Ctrl + , - "live sass compile" 입력 -
                  Live Sass Compile {'>'} Settings: Generate Map - settings.json - "liveSassCompile.settings.generateMap": false로 변경
                </li>
                <li> 만들어지는 css파일 저장 경로 지정하기 : 만들어진 map,css 파일에 주석을 만들지 않는 설정 방법 : Ctrl + , - "live sass compile" 입력 -
                  Live Sass Compile {'>'} Settings: Generate Map - settings.json - "liveSassCompile.settings.formats"의 "savaPath"를 변경해주면된다.  </li>
                <li>  </li>
              </div>

              <li> 🚩 scss-lint </li>
              <div className="block3">
                <li> scss 문법 검사를 해준다. </li>
              </div>

              <li> 🚩 JavaScript code snippets </li>
              <div className="block3">
                <li> 자바스크립트 코드 스니펫이다. </li>
                <li> 약간의 암기가 필요하다. </li>
              </div>

              <li> 🚩 Quokka.js </li>
              <div className="block3">
                <li> 노드를 실행하지 안혹서도 결과를 알 수 있다. </li>
                <li> Ctrl + Shift + P - Start on Current File </li>
              </div>

              <li> 🚩  </li>
              <div className="block3">
                <li>  </li>
              </div>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> VScode 단축키 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>

              <li> 🚩 새로운 윈도우 창 열기 <span className="col_keymap">  Ctrl + Shift + N  </span> </li>
              <li> 🚩 새로운 탭 열기 <span className="col_keymap"> Ctrl + N </span> </li>
              <li> 🚩 파일 열기 <span className="col_keymap"> Ctrl + O </span> </li>
              <li> 🚩 현재 탭 닫기 <span className="col_keymap"> Ctrl + F4, Ctrl + W </span> </li>
              <li> 🚩 왼쪽에 익스플로러 창 열기 <span className="col_keymap"> Ctrl + Shift + E </span> </li>
              <li> 🚩 왼쪽에 익스텐션 창 열기 <span className="col_keymap"> Ctrl + K +S </span> </li>
              <li> 🚩 이전에 닫힌 창 다시 열기 <span className="col_keymap"> Ctrl + Shift + T </span> </li>
              <li> 🚩 화면 창 분할 <span className="col_keymap"> Ctrl + \, Ctrl + 2 </span> </li>
              <li> 🚩 분할된 화면 창 포커싱 이동하기 <span className="col_keymap"> Ctrl + 번호 </span> </li>
              <li> 🚩 들여쓰기 <span className="col_keymap"> Tab </span> </li>
              <li> 🚩 코드 줄 이동 <span className="col_keymap"> Alt + 👆 , Alt + 👇 </span> </li>
              <li> 🚩 코드 줄 복사 <span className="col_keymap"> Shift + Alt + 👆 </span> </li>
              <li> 🚩 코드 잘라내기,삭제하기 <span className="col_keymap"> Ctrl + X </span> </li>
              <li> 🚩 코드 줄 번호로 이동하기 <span className="col_keymap"> Ctrl + g </span> </li>
              <li> 🚩 이전에 작성하던 코드 줄로 이동하기 <span className="col_keymap"> Alt + 👈,Alt + 👉 </span> </li>
              <li> 🚩 코드 영역 접고 펼치기 <span className="col_keymap"> Ctrl + Shift + [, Ctrl + Shift + ] </span> </li>
              <li> 🚩 드래그된 코드 자동 정렬하기 <span className="col_keymap"> Ctrl + K + F </span> </li>
              <li> 🚩 한 줄 전체 드래그 <span className="col_keymap"> Ctrl + L </span> </li>
              <li> 🚩 한 줄 주석처리하기 <span className="col_keymap"> Ctrl + / </span> </li>
              <li> 🚩 세로 줄로 코드 수정하기 <span className="col_keymap"> Ctrl + Shift + 마우스 왼쪽 버튼 </span> </li>
              <li> 🚩 코드 화면 이동하기 <span className="col_keymap"> Ctrl + 👆 , Ctrl + 👇 </span> </li>
              <li> 🚩 코드에서 단어 검색하기 <span className="col_keymap"> Ctrl + F </span> </li>
              <li> 🚩 코드에서 단어 변경하기 <span className="col_keymap"> Ctrl + H </span> </li>
              <li> 🚩 모든 파일 코드에서 단어 검색하기 <span className="col_keymap"> Ctrl + Shift + F </span> </li>
              <li> 🚩 모든 파일 코드에서 단어 변경하기 <span className="col_keymap"> Ctrl + Shift + H </span> </li>
              <li> 🚩 파일 찾기 <span className="col_keymap"> Ctrl + P  </span> </li>
              <li> 🚩 명령어 검색하는 창 열기 <span className="col_keymap"> Ctrl + Shift + P, F1 </span> </li>
              <li> 🚩 VScode 설정 창 이동 <span className="col_keymap"> Ctrl + , </span> </li>
              <li> 🚩 VScode Keymap창 이동 <span className="col_keymap"> Ctrl + K , Ctrl + S  </span> </li>
              <li> 🚩  <span className="col_keymap">  </span> </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> VScode 설정 </summary>
            <div className='block2'>

              <li> 🚩 워크스페이스 계단식으로 만들기 </li>
              <div className="block3">
                <li> File - Preferences - Settings - Features - Explorer - Compact Folders 체크 해제 </li>
              </div>

              <li> 🚩 탭키가 안 먹힐때 </li>
              <div className="block3">
                <li> Ctrl + M을 누르면 포커스 이동으로 바뀜 </li>
              </div>

              <li> 🚩 django html 자동변환 되는것을 .html로 바꾸는 방법 </li>
              <div className="block3">
                <li> Ctrl +, - settings.json 검색 - settings.json 파일 열기 - 아래 코드 추가
                  <li> {'     "files.associations": {  '} </li>
                  <li> {'         "*.html": "html"  '} </li>
                  <li> {'     },  '} </li>
                </li>
              </div>

              <li> 🚩 공백문자 표기 설정하기 (공백 문자열을 설정하는 것이 아니라 그닥 의미는 없다.) </li>
              <div className="block3">
                <li> 1. File - Preferences - Settings - User - Text Editor - Render Whitespace  </li>
                <div className="block4">
                  <li> none : 공백을 표시하지 않음 </li>
                  <li> boundary : 공백이 2글자이상부터 표시 </li>
                  <li> selection(default) : 선택된 텍스트만 공백문자를 표시 </li>
                  <li> all : 공백을 모두 표시 </li>
                </div> <br />

                <li> 2. Ctrl + Shift + P - "settings.json" 클릭 - "editor.renderWhitespace": "[none,boundary,selection,all]" 4개중에 하나 선택해서 입력하기 </li>
              </div>

              <li> 🚩 좌측 Workspace에서 보고 싶지 않은 확장자 파일들 숨기기 </li>
              <div className="block3">
                <li> Ctrl + , - "Files: Exclude" - Add Pattern 누르고 확장자명 입력 </li>
              </div>

              <li> 🚩  </li>
              <div className="block3">
                <li>  </li>
              </div>

              <li> 🚩  </li>
              <div className="block3">
                <li>  </li>
              </div>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> VScode Snippet </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설정 </h2>
              <li> 1. File - Preferences - User Snippets - New Global Snippets File </li>
              <li> 2. Ctrl + Shift + P - "snippets" 입력 -New Global Snippets File </li>
              <li> extension 스니펫이 존재 </li>

              <h2 className='h2'> ✔ 예시 </h2>
              <li> 소제목
                <div className='block3'>
                  <h3 className='h3'> 🎈 스니펫 코드 예시 </h3>
                  <div className='block4'>
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
                </div>
              </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> VScode에서 Java사용하는 방법 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1 </li>
              <li> VS Code Extension에서 Java Extension Pack 설치 </li>
              <li> VS Code 재시작 </li>
              <li> File - Preperences - Settings - java.home 검색 - edit in settings.json - "java.home": "" 에 자바
                설치된 경로를 넣어준다.
                <li> C:/Program Files/Java/jdk-11.0.10  # 경로 기호 /로 변경해서 넣어야 함</li>
              </li>
              <li> VS Code에서 자바로 시작해서 실행을 하면 작동이 되는 것을 볼 수 있다. </li>

              <h2 className='h2'> 📌 VS COde에서 Spring Boot Project 시작하기 </h2>
              <li> VS Code Extension에서 Spring Boot Extension Pack 설치 </li>
              <li> Ctrl + Shift + P - Java:Overview 검색 </li>
              <li> Create Spring Boot Project.. 클릭 </li>
              <li> Gradle  </li>
              <li> Spring Boot Version 설정 </li>
              <li> groupId : 프로젝트 식별자 <small> # com.example </small> </li>
              <li> artifactId : 패키지이름 </li>
              <li> version : 버전 정보 </li>
              <li> package : 기본 패키지 정보 </li>

              <h2 className='h2'> 📌 VS COde에서 Maven Project 시작하기 </h2>
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
          </details>
        </div>

      </div>
    </>
  );
}

export default KeyMapVscode;