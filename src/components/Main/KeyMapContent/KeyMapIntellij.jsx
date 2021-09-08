import React from 'react';

const KeyMapIntellij = (props) => {

	return (
		<>
			<div className="common_style" >
				<ul>
					<span className="lblock">
						<span className="mtitle"> 단축키 및 설정 </span>
						<span className="mblock">
							<span className="stitle"> Intellij  </span>
							<span className="sblock">
								<span className="sstitle"> <a name="Intellij 단축키"> Intellij 단축키 </a> </span>
								<li> <a href="https://gmlwjd9405.github.io/2019/05/21/intellij-shortkey.html" target="_blank"> 참고 </a></li>
								<li> Ctrl + D   : 코드 한줄 아래 복사 붙여넣기 </li>
								<li> Ctrl + R   : 내용 바꾸기 </li>
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
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="Intellij 설정"> Intellij 설정 </a> </span>
							<span className="sblock">
								<span className="sstitle"> 폰트 크기 마우스 휠로 설정하기 </span>
								<li>  File - Settings - Editor - General - Change font size with Ctrl+Mouse Wheel 체크하기 </li>
								<span className="sstitle"> 자동 저장 설정 , 저장하지 않은 파일 표시 </span>
								<li> File - Settings - Appearance &amp; Behavior - Systme Settings - Autosave탭</li>
								<li> File - Settings - Editor - General - Editor Tabs - Mark modified(*) 체크 </li>
								<span className="sstitle"> 탭 갯수 제한 설정 </span>
								<li> File - Settings - Editor - General - Editor Tabs - Tab limit: 갯수 설정하기 </li>
								<li>   </li>
								<span className="sstitle"> Gradle 사용할 경우 실행 속도를 빠르게 하기 위한 설정 </span>
								<li> File - Settings - Build,Extension,Deployment - Build Tools - Gradle - Build and run using, Run tests using
									을 둘다 Intellij IDEA 로 바꾸기 </li>
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="">  </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
					</span>
				</ul>
			</div>
		</>
	);
}

export default KeyMapIntellij;