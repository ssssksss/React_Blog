import React, { useEffect, useRef, useState } from 'react';

const VscodeKeyMap = (props) => {
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
						<a href="#main" className="col_b"> <b> 스프링 공부 </b> </a>
						<button className="lblocknav_btn2" onClick={() => {
							document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
							document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
						}}> ❌ </button>
					</span>
					<div className="hyperlink">
						<details open>
							<summary>  </summary>
							<a href="#VS Code Prettier 설정"> VS Code Prettier 설정  </a>
							<a href="#VS Code 단축키"> VS Code 단축키  </a>
							<a href="#VS Code 설정"> VS Code 설정 </a>
						</details>
					</div>
				</div>
			</div>
			<div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
				<ul>
					<span className="lblock">
						<span className="mtitle"> 단축키 및 설정 </span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="VS Code 단축키"> VS Code 단축키 </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<li> Ctrl + , : 설정창 이동 </li>
								<li> Alt + Shift + F : 포맷팅 단축키 </li>
								<li>  </li>
								<li>  </li>
								<li>  </li>
								<li>  </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="VS Code 설정"> VS Code 설정 </a> </span>
							<span className="sblock">
								<span className="sstitle"> 탭 설정 </span>
								<li> 아래 파란색 줄 Tab Size: 4 를 변경하기 </li>
								<li> Indent Using Spaces : 들여쓰기를 공백으로 설정, Indent Using Tabs : 들여쓰기를 탭으로 설정 </li>
								<li> </li>
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
						<span className="stitle"> Visual Studio Code </span>
						<span className="mblock">
							<span className="stitle"> <a name="VS Code Prettier 설정"> VS Code Prettier 설정 </a> </span>
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

export default VscodeKeyMap;