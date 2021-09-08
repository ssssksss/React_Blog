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
								<summary className="stitle"> ▶ VS Code 단축키 <a name="VS Code 단축키" style={{ visibility: "hidden" }}> VS Code 단축키 </a> </summary>
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
								<summary className="stitle"> ▶ VS Code 설정 <a name="VS Code 설정" style={{ visibility: "hidden" }}> VS Code 설정 </a> </summary>
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
								<summary className="stitle"> ▶ VS Code Prettier 설정  <a name="VS Code Prettier 설정" style={{ visibility: "hidden" }}> VS Code Prettier 설정 </a> </summary>
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
								<summary className="stitle"> ▶ 워크스페이스 관련 <a name="워크스페이스 관련" style={{ visibility: "hidden" }}> 워크스페이스 관련 </a> </summary>
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
								<summary className="stitle"> ▶ 탭키가 작동하지 않을 때 <a name="탭키가 작동하지 않을 때" style={{ visibility: "hidden" }}> 탭키가 작동하지 않을 때 </a> </summary>
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
								<summary className="stitle"> ▶ VS Code Extension 추천
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
								<summary className="stitle"> ▶ VS Code Snippet
									<a name="" style={{ visibility: "hidden" }}>  </a> </summary>
								<span className="sblock">
									<span className="sstitle"> 설정 </span>
									<span className="mblock">
										<li> File - Preferences - User Snippets </li>
										<li> 맞는 언어 선택 </li>
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
						<span className="mblock">
							<details>
								<summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
								<span className="sblock">
									<span className="sstitle">  </span>
									<span className="mblock">
										<li>  </li>
									</span>
									{/*  */}
								</span>
							</details>
						</span>
						{/*  */}
					</span>
				</ul>
			</div>
		</>
	);
}

export default KeyMapVscode;