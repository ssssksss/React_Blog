import React from 'react';

const JavaScriptEvent = (props) => {
	return (
		<>
			<div className="common_style" >

				<div className='block1'>
					<details>
						<summary> 이벤트 설명 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 JS Event를 사용하는 방법 3가지 </h2>
							<li> 1. html에 event메소드를 붙여 사용 </li>
							<div className="block4">
								<li> {' <button onclick=()=>{alert("hi")}> 버튼 </button> '} </li>
							</div>
							<li> 2. JS애 .on 메소드?를 이용해서 사용 </li>
							<div className="block4">
								<li> {' ELEMENT.onclick = ()=> { alert("hi") } '} </li>
								<li> {' ELEMENT.onclick = FUNCTION; '} </li>
							</div>
							<li> 3. addEventListener를 이용해서 사용 </li>
							<div className="block4">
								<li> {' ELEMENT.addEventListener(EVENT,()=>{alert("hi")}) '} </li>
								<li> {' ELEMENT.addEventListener(EVENT,FUNCTION) '} </li>
								<li> {' ELEMENT.addEventListener(EVENT,FUNCTION,true) '} <small> # 이벤트 캡처링 </small> </li>
							</div>

							<h2 className='h2'> 📌 JS 이벤트 전달단계 </h2>
							<li> 조상요소에서 Capturing가 시작되어 target요소(이벤트발생요소)까지 갔다가 그때 부터
								bubbling이 발생하여 조상요소까지 도달한다. </li>

							<h2 className='h2'> 📌 이벤트 전파를 차단하는 방법 4가지(사용 비추천, 페이지에서 사용자 행동패턴 분석가능) </h2>
							<li> event.preventDefault() : 현재 이벤트의 기본 동작 중지  </li>
							<li> event.stopPropagation() : 현재 이벤트가 상위로 전파되지 못하도록 막음 </li>
							<li> event.stopImmediatePropagation() : 현재 이벤트가 상위로 전파되지 못하도록 막음 {'&'} 현재 다른 이벤트도 모두 중지 </li>
							<li> return false  </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> defaultPrevented : preventDefault()가 이벤트에서 호출되었는지를 반환 </li>
							<li> target : 이벤트를 발생시킨 요소 반환 </li>
							<li> currentTarget : 이벤트의 부모 요소를 반환 </li>
							<li> type : 이벤트 이름 반환 </li>
							<li> view :  </li>
							<li> document.createEvent("EVENT_TYPE") : 이벤트 개체를 생성, 딱히 사용할 필요가 있는지 몰라서 일단 넘어간다...  </li>
							<li>  </li>

							<h2 className='h2'> 📌 Event Bubbling </h2>
							<li> 하위 태그에서 상위 태그로 이벤트를 발생시키는 것 </li>
							<li> 자바스크립트는 이벤트가 발생한 요소부터 상위 요소들로 거슬러 올라가 이벤트를 전파시킨다. </li>

							<h2 className='h2'> 📌 Event Capture </h2>
							<li> 하위 태그에서 상위 태그로 이벤트를 발생시키는 것 </li>
							<li> 자바스크립트는 이벤트가 발생한 요소부터 상위 요소들로 거슬러 올라가 이벤트를 전파시킨다. </li>

							<h2 className='h2'> ✔ 예시(예시 나중에 수정할 것) </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 </h3>
									<div className='block4'>
										<li> {' <body> '}
											<li> {' 	<h2> 이벤트 버블링 </h2> '} </li>
											<li> {' 	<span class="span1"> span1 '}
												<li> {' 		<span class="span2"> span2 '}
													<li> {' 			<span class="span3"> span3 </span> '} </li>
												</li>
												<li> {' 		</span> '} </li>
											</li>
											<li> {' 	</span> '} </li>
											<li> {'  '} </li>
											<li> {' 	<h2> 이벤트 캡처 </h2> '} </li>
											<li> {' 	<div class="div1"> div1 '}
												<li> {' 		<div class="div2"> div2 '}
													<li> {' 			<div class="div3"> div3 </div> '} </li>
												</li>
												<li> {' 		</div> '} </li>
											</li>
											<li> {' 	</div> '} </li>
											<li> {'  '} </li>
										</li>
										<li> {' </body> '} </li>
										<li> {' <script> '}
											<li> {' 	var elements1 = document.querySelectorAll("span"); '} </li>
											<li> {' 	elements1.forEach((x) => { '}
												<li> {' 		x.addEventListener("click", () => { alert(x.className); }) '} </li>
											</li>
											<li> {' 	}) '} </li>
											<li> {'  '} </li>
											<li> {' 	var divs = document.querySelectorAll("div"); '} </li>
											<li> {' 	divs.forEach(function (div) { '}
												<li> {' 		div.addEventListener("click", logEvent, { '}
													<li> {' 			capture: true // default 값은 false입니다. '} </li>
												</li>
												<li> {' 		}); '} </li>
											</li>
											<li> {' 	}); '} </li>
											<li> {'  '} </li>
											<li> {' 	function logEvent(event) { '}
												<li> {' 		alert(event.currentTarget.className); '} </li>
											</li>
											<li> {' 	} '} </li>
										</li>
										<li> {' </script> '} </li>
									</div>
								</div>
							</li>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 마우스 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 마우스 이벤트 </h2>
							<li> click : 요소에 마우스를 클릭하고 떼었을 때 이벤트 발생 </li>
							<li> dbclick : 요소에 마우스를 더블클릭하였을 때 이벤트 발생 </li>
							<li> mousedown : 요소에 안에서 마우스를 클릭하였을 때 이벤트 발생 </li>
							<li> mouseup : 요소에 마우스 클릭을 떼었을 때 </li>
							<li> mouseover : 요소에 마우스를 올려놓았을 때 이벤트 발생 </li>
							<li> mouseout : 요소에서 마우스가 벗어났을 때 이벤트 발생 </li>
							<li> mousemove : 요소 위에서 마우스를 움직였을 때 이벤트 발생 </li>
							<li> contextmenu : 요소에서 마우스 우측클릭 메뉴가 나올때 이벤트 발생 </li>
							<li> mousewheel : 마우스 휠을 사용할 때 이벤트 발생 </li>
							<li> scroll : 스크롤바를 움직였을 때 이벤트 발생  </li>
							<li> wheel : 마우스 휠을 움직일 때 이벤트 발생 </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> event.which : 마우스 어떤 버튼이 눌렸는지 </li>
							<li> event.deltaX : 마우스 휠의 x축(가로) 스크롤 양 반환 , ???</li>
							<li> event.deltaY : 마우스 휠의 y축(세로) 스크롤 양 반환 , ???</li>
							<li> event.deltaZ : 마우스 휠의 z축 스크롤 양 반환 , ???</li>
							<li> event.detail : 마우스 클릭 횟수 반환 </li>
							<li> relatedTarget : 마우스,포커스 이벤트를 트리거한 요소와 관련된 요소를 반환합니다. </li>
							<li> MovementX :  mousemove 이벤트의 마지막 가로 좌표 반환 </li>
							<li> MovementY :  mousemove 이벤트의 마지막 세로 좌표 반환 </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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
						<summary> 키보드, 스크롤, 터치 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> 이벤트 : MouserEvent,  </li>
							<li> keydown : 요소(input)위에서 키보드를 눌렀을 때 이벤트 발생 <small> # 어떤 요소에서 되는지는 확인이 필요 </small> </li>
							<li> keypress : 요소를 눌렀을 때 이벤트 발생(누르고 있으면 계속 이벤트 발생) , 방향키 등 입력이 되지 않는
								키보드의 입력에는 이벤트가 발생하지 않는다. </li>
							<li> keyup : 요소(input)위에서 키보드를 눌렀다가 떼었을 때 이벤트 발생 </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> event.altKey : 마우스,키보드 이벤트에서 Alt 키가 눌렸는지 여부 반환 </li>
							<li> event.ctrlKey : 마우스,키보드 이벤트에서 Ctrl 키가 눌렸는지 여부 반환 </li>
							<li> event.shiftKey : 마우스,키보드 이벤트에서 shift 키가 눌렸는지 여부 반환 </li>
							<li> event.button : 마우스가 눌렸으면 0반환 , 아니면 undefined </li>
							<li> event.buttons : 마우스가 어떤 버튼이 눌렸는지 반환 좌측0,우측2,스크롤4 , 아니면 undefined , 작동하는 것에 대해서는
								좀더 알아볼 필요가 있다. </li>

							<li> event.cancelable : 취소 가능한 이벤트인지 여부 , 어떻게 사용하는지 모르겠다. </li>
							<li> offsetX : 이벤트가 발생하는 요소를 기준 </li>
							<li> offsetY : 이벤트가 발생하는 요소를 기준 </li>
							<li> pageX : 전체 문서를 기준 </li>
							<li> pageY : 전체 문서를 기준 </li>
							<li> screenX : 사용자 모니터 좌측 상단 기준 </li>
							<li> screenY : 사용자 모니터 좌측 상단 기준 </li>
							<li> event.clientX : 브라우저에서 사용자에게 보이는 화면 기준 </li>
							<li> event.clientY : 브라우저에서 사용자에게 보이는 화면 기준 </li>
							<li> event.code : 키보드로 입력한 키 코드 반환 </li>
							<li> event.composed : 이벤트가 작성되었는지 여부 반환, 무슨 의미인지 모르겠다. </li>
							<li> event.deltaMode : 델타 값을 반환 , ??? </li>
							<li> isComposing : 이벤트 상태인지 아닌지 여부 판단 </li>
							<li> event.key : 이벤트가 보여주는 키의 값 반환 </li>
							<li> event.keyCode : 키보드 이벤트에서 유니코드 문자나 유니코드 키코드를 반환 </li>
							<li> event.location : 키보드의 키의 위치?구역? 을 0~4로 반환 ( 0: standard key, 1: left key, 2: right key, 3: keypad ) </li>
							<li> metakey : metakey가 눌렸을 때의 여부 반환, 메타키가 특정키보드나 운영체제에 있나보다(Mac,MIT기계 등등) </li>
							<li> region :  </li>
							<li> repeat : 키보드가 반복적으로 눌렸는지 판단 여부 </li>
							<li> targetTouches : 현재 대상 요소에서 터치 이벤트가 발생한 모든 터치 객체 목록 반환 </li>
							<li> touches : 표면에 접촉하고 있는 모든 터치 객체 목록 반환 </li>
							<li> getModifierState([Alt,AltGraph,Control,Meta,Shift,CapsLock,NumLock,ScrollLock]) : 특정 키가 활성화 되었는지 판단 여부  </li>
							<li> event.inputType : input태그에 키보드로 입력했을 때 어떤 행동을 취했는지를 알려줌 </li>
							<details>
								<summary> inputType 행동 목록 </summary>
								<div className="bloack4">
									<li> "insertText" </li>
									<li> "insertReplacementText" </li>
									<li> "insertLineBreak" </li>
									<li> "insertParagraph" </li>
									<li> "insertOrderedList" </li>
									<li> "insertUnorderedList" </li>
									<li> "insertHorizontalRule" </li>
									<li> "insertFromYank" </li>
									<li> "insertFromDrop" </li>
									<li> "insertFromPaste" </li>
									<li> "insertTranspose" </li>
									<li> "insertCompositionText" </li>
									<li> "insertFromComposition" </li>
									<li> "insertLink" </li>
									<li> "deleteByComposition" </li>
									<li> "deleteCompositionText" </li>
									<li> "deleteWordBackward" </li>
									<li> "deleteWordForward" </li>
									<li> "deleteSoftLineBackward" </li>
									<li> "deleteSoftLineForward" </li>
									<li> "deleteEntireSoftLine" </li>
									<li> "deleteHardLineBackward" </li>
									<li> "deleteHardLineForward" </li>
									<li> "deleteByDrag" </li>
									<li> "deleteByCut" </li>
									<li> "deleteByContent" </li>
									<li> "deleteContentBackward" </li>
									<li> "deleteContentForward" </li>
									<li> "historyUndo" </li>
									<li> "historyRedo" </li>
									<li> "formatBold" </li>
									<li> "formatItalic" </li>
									<li> "formatUnderline" </li>
									<li> "formatStrikethrough" </li>
									<li> "formatSuperscript" </li>
									<li> "formatSubscript" </li>
									<li> "formatJustifyFull" </li>
									<li> "formatJustifyCenter" </li>
									<li> "formatJustifyRight" </li>
									<li> "formatJustifyLeft" </li>
									<li> "formatIndent" </li>
									<li> "formatOutdent" </li>
									<li> "formatRemove" </li>
									<li> "formatSetBlockTextDirection" </li>
									<li> "formatSetInlineTextDirection" </li>
									<li> "formatBackColor" </li>
									<li> "formatFontColor" </li>
									<li> "formatFontName" </li>
								</div>
							</details>
							<li>  </li>
							<li>  </li>


						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 폼, 포커스 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<div className="block4">
								<li> 이벤트 : ClipboardEvent, FocusEvent,  </li>
								<li> focus : 요소에 포커스가 되었을 때 이벤트 발생 <small> # 포커스가 되려는 요소에 이벤트가 바인딩이 되있어야 작동하는것 같다. </small> </li>
								<li> focusin : 요소에 포커스가 집중되었을 때 이벤트 발생  </li>
								<li> focusout : 요소가 포커스에서 벗어날 때 이벤트 발생  </li>
								<li> blur : 요소에 포커스가 없어졌을 때 이벤트 발생 <small> # 포커스가 되려는 요소에 이벤트가 바인딩이 되있어야 작동하는것 같다. </small> </li>
								<li> change : 요소에 값이 변경 되었을 때 이벤트 발생 <small> # input(type=text,radio,checkbox), textarea, select,  더 찾아보는중 </small> </li>
								<li> cut : 폼 필드의 요소에 텍스트를 잘라낼 때 이벤트 발생 </li>
								<li> copy : 폼 필드의 요소에 텍스트를 복사할 때 이벤트 발생 </li>
								<li> paste : 폼 필드의 요소에 텍스트를 붙여넣기할 때 이벤트 발생 </li>
								<li> submit : submit 버튼을 눌렀을 때 이벤트 발생 <small> # form태그에 이벤트가 바인딩 되어있어야 작동을 하는 것 같다. </small> </li>
								<li> reset : reset 버튼을 눌렀을 때 이벤트 발생 <small> # type="reset" 해봤는데 작동이 안됨, 나중에 찾아보기 </small> </li>
								<li> select : input이나 textarea 요소 안의 텍스트를 드래그하여 선택했을 때 이벤트 발생  </li>
								<li> input : input태그 내부에 입력할 때 이벤트 발생 </li>
								<li> search : input:search에 입력하고 Enter를 눌렀을 때 이벤트가 발생 </li>
								<li> show : 메뉴 태그와 관련이 있는데  나중에 알아보기  </li>
							</div>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> clipboardData : 클립보드 객체 반환 , 어떻게 쓰는지 모르겠다. </li>
							<li> data : input이벤트를 사용할 때 사용되기는 하는데 용도는 나중에 알아봐야겠다. </li>
							<li> dataTransfer : 드래그,드롭,삽입,삭제 데이터 포함 객체 반환, 나중에 알아보기 </li>
							<li> getTargetRanges() : 삽입/삭제 영향을 받을 대상 범위를 포함하는 배열을 반환합니다. </li>
							<li>   </li>
							<li>   </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 예시
								<div className='block3'>
									<h3 className='h3'> 🎈 </h3>
									<div className='block4'>
										<li> {' <body>  '}
											<li> {' <form action="" id="form">  '}
												<li> {' <input type="text" id="input"> '} </li>
												<li> {' <input id="test1" type="text" />  <br />'} </li>
												<li> {' <input type="reset">  <br />'} </li>
												<li> {' <input type="submit">  <br />'} </li>
												<li> {' <input type="text" placeholder="change" />  <br />'} </li>
												<li> {' <input type="text" placeholder="blur" id="blur" />  <br />'} </li>
												<li> {' <input type="text" placeholder="focus" id="focus" />  <br />'} </li>
												<li> {' <input type="text" placeholder="focusin" id="focusin" /> <br />'} </li>
												<li> {' <input type="text" placeholder="focusout" id="focusout" /> <br />'} </li>
												<li> {' <input type="text" placeholder="select" id="select" /> <br /> '} </li>
												<li> {' <input type="text" id="invalid" required> '} </li>
												<li> {' <button type="submit"> 제출 </button> '} </li>
											</li>
											<li> {' </form>  '} </li>
										</li>
										<li> {' </body>  '} </li>
										<li> {' <script>  '}
											<li> {' var focus = () => {  '}
												<li> {' alert("focus");  '} </li>
												<li> {' document.getElementById("focus").removeEventListener("focus", focus);  '} </li>
											</li>
											<li> {' };  '} </li>
											<li> {' var focusin = () => {  '}
												<li> {' alert("focusin");  '} </li>
												<li> {' document.getElementById("focusin").removeEventListener("focusin", focusin);  '} </li>
											</li>
											<li> {' };  '} </li>
											<li> {' var select = () => {  '}
												<li> {' alert("select");  '} </li>
												<li> {' document.getElementById("select").removeEventListener("select", select);  '} </li>
											</li>
											<li> {' };  '} </li>
											<li> {' document.getElementById("focus").addEventListener("focus", focus);  '} </li>
											<li> {' document.getElementById("focusin").addEventListener("focusin", focusin); '} </li>
											<li> {' document.getElementById("focusout").addEventListener("focusout", () => { '}
												<li> {' alert("focusout"); '} </li>
											</li>
											<li> {' }); '} </li>
											<li> {' document.getElementById("blur").addEventListener("blur", () => {  '}
												<li> {' alert("blur");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("form").addEventListener("change", () => {  '}
												<li> {' alert("change");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("test1").addEventListener("cut", () => {  '}
												<li> {' alert("cut");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("test1").addEventListener("copy", () => {  '}
												<li> {' alert("copy");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("test1").addEventListener("paste", () => {  '}
												<li> {' alert("paste");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("form").addEventListener("reset", () => {  '}
												<li> {' alert("reset");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("form").addEventListener("submit", () => {  '}
												<li> {' alert("submit");  '} </li>
											</li>
											<li> {' });  '} </li>
											<li> {' document.getElementById("select").addEventListener("select", select);  '} </li>
											<li> {' document.getElementById("input").addEventListener("input", () => { alert("input") }); '} </li>
											<li> {' document.getElementById("invalid").addEventListener("invalid", () => { alert("invalid") }); '} </li>
										</li>
										<li> {' </script>  '} </li>
									</div>
								</div>
							</li>


						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 페이지, 로딩, 스토리지 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<div className="block4">
								<li> 이벤트 : UIEvent,  </li>
								<li> load : 페이지의 로딩이 완료되었을 때 이벤트 발생 </li>
								<li> loadeddata : </li>
								<li> loadedmetadata : </li>
								<li> loadstart :  </li>
								<li> unload : 페이지가 다른 곳으로 이동될 때 이벤트 발생 </li>
								<li> abort : 이미지의 로딩이 중단되었을 때 이벤트 발생</li>
								<li> resize : 요소에 사이즈가 변경되었을 때 이벤트 발생 </li>
								<li> afterprint : 페이지 인쇄가 시작되거나 인쇄창이 닫힐 때 이벤트 발생 </li>
								<li> beforeprint : 페이지가 인쇄될 때 이벤트 발생 </li>
								<li> beforeunload : 문서가 호출되기 전에 이벤트 발생 </li>
								<li> storage : 웹 저장소가 업데이트 될 때 발생 </li>
								<li> storageArea : 영향을 받는 스토리지 개체를 나타내는 개체를 반환합니다. </li>
								<li> error : 외부 파일 로드하는중에 에러가 생기면 이벤트 발생 </li>
								<li> fullscreenchange : 전체 화면 모드 표시될 때 이벤트 발생 </li>
								<li> fullscreenerror : 전체 화면 모드로 표시가 될 수 없으면 이벤트 발생 </li>
								<li> hashchange : URL 앵커 부분에 변경이 있을 때 이벤트 발생 </li>
								<li> pagehide : 사용자가 페이지에서 벗어날 때 </li>
								<li> pageshow : 사용자가 페이지로 이동할 때 </li>
								<li> popstate : 윈도우 히스토리가 변경될 때 이벤트 발생 </li>
								<li> resize : 문서 뷰의 크기가 변경될 때 이벤트 발생 </li>
								<li> state : 기록 항목의 복사본을 포함하는 개체를 반환합니다. </li>
								<li>  </li>
							</div>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> persisted : 웹 페이지가 브라우저에 의해 캐시되었는지 여부를 반환합니다. </li>
							<li> url :  </li>
							<li>  </li>
							<li>  </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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
						<summary> 미디어 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> canplay : 미디어가 재생될 정도가 될 때 이벤트 발생 </li>
							<li> pause : 사용자가 미디어를 일시중지 시킬 때 발생 </li>
							<li> play : 미디어가 플레이 중일 떄 이벤트 발생 </li>
							<li> playing : 미디어가 버퍼링 때문에 일시중지 될 때 이벤트 발생 </li>
							<li> seeked : 사용자가 미디어 이벤트의 새 위치로 이동, 건너뛰기를 마칠 때 </li>
							<li> seeking : 사용자가 미디어 이벤트의 새 위치로 이동, 건너뛰기를 시작할 때 </li>
							<li> stalled : 미디어 데이터를 가져오려다 데이터를 사용할 수 없을 떄 발생 </li>
							<li> canplaythrough :  </li>
							<li> durationchange :  </li>
							<li> timeupdate :  </li>
							<li> suspend : 브라우저가 미디어 데이터를 가져오지 않을 때 발생 </li>
							<li> ended : 미디어 마지막에 도착하면 이벤트 발생 </li>
							<li> progress : 브라우저가 미디어 데이터를 가져오거나 다운중일때 이벤트 발생 </li>
							<li> ratechange : 미디어의 재생속도가 변경될 떄 이벤트 발생 </li>
							<li> volumechange : 미디어의 볼륨이 변경되면 이벤트 발생 </li>
							<li> waiting :  </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> onemptied : 잘못된 일이 발생하여 미디어 파일을 사용할 수 없는 경우(예상치 않게 연결이 끊기는 경우) 이벤트가 발생합니다.  </li>
							<li>   </li>
							<li>   </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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
						<summary> 애니메이션, 트랜지션 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> 이벤트 : AnimationEvent </li>
							<li> animationend : 애니메이션이 끝날 때 이벤트 발생 </li>
							<li> animationiteration : 애니메이션이 반복될 때 이벤트 발생 </li>
							<li> animationstart : 애니메이션 시작될 때 이벤트 발생 </li>
							<li> 3 </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> animationName : 애니메이션 이름 반환  </li>
							<li> elapsedTime : 애니메이션,트랜지션 실행시간(초) 반환  </li>
							<li> propertyName : 애니메이션 또는 전환과 관련된 CSS 속성의 이름을 반환합니다. </li>
							<li> pseudoElement : 애니메이션 또는 전환의 유사 요소의 이름을 반환합니다.  </li>
							<li> transitionend : CSS 전환이 완료 될 때 이벤트 발생  </li>
							<li>   </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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
						<summary> 드래그 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> 이벤트 : DragEvent,  </li>
							<li> 태그에 draggable="true"를 주어야 작동?이 되는것 같다. (그러면 드래그가 안되는데... 나중에 필요할때 찾아봐야겠다.) </li>
							<li> drag : 드래그하면 이벤트 발생  </li>
							<li> dragend : 드래그 끝나면 이벤트 발생 </li>
							<li> dragenter : 드래그 한 요소가 이벤트 요소 내부에 들어갈 때 발생 </li>
							<li> dragleave : 드래그 한 요소가 이벤트 요소 내부에 들어갔다가 나올 때 발생 </li>
							<li> dragover : 드래그 한 요소가 이벤트 요소 내부에 들어갔다가 나올 때 발생 </li>
							<li> dragstart : 요소를 드래그 할 때 이벤트 발생 </li>
							<li> drop : 드래그 한 요소가 이벤트 요소 내부에 들어갈 때 이벤트 발생(사용 실패... 나중에 찾아보기) </li>
							<li> 3 </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 </h3>
									<div className='block4'>
										<li> {' <body> '}
											<li> {' <div> '}
												<li> {' <p id="drag" draggable="true"> drag </p> '} </li>
												<li> {' <p id="dragend" draggable="true"> dragend </p> '} </li>
												<li> {' <div id="dragenter" draggable="true" style="width: 500px; height:200px; border:solid black 1px;"> dragenter </div> '} </li>
												<li> {' <div id="dragleave" draggable="true" style="width: 500px; height:200px; border:solid black 1px;"> dragleave </div> '} </li>
												<li> {' <div id="dragover" draggable="true" style="width: 500px; height:200px; border:solid black 1px;"> dragover </div> '} </li>
												<li> {' <div id="dragstart" draggable="true"> dragstart </div> '} </li>
											</li>
											<li> {' </div> '} </li>
										</li>
										<li> {' </body> '} </li>
										<li> {' <script> '}
											<li> {' document.getElementById("drag").addEventListener("drag", () => { alert("drag"); }); '} </li>
											<li> {' document.getElementById("dragend").addEventListener("dragend", () => { alert("dragend"); }); '} </li>
											<li> {' document.getElementById("dragenter").addEventListener("dragenter", () => { alert("dragenter"); }); '} </li>
											<li> {' document.getElementById("dragleave").addEventListener("dragleave", () => { alert("dragleave"); }); '} </li>
											<li> {' document.getElementById("dragover").addEventListener("dragover", () => { alert("dragover"); }); '} </li>
											<li> {' document.getElementById("dragstart").addEventListener("dragstart", () => { alert("dragstart"); }); '} </li>
										</li>
										<li> {' </script> '} </li>
									</div>
								</div>
							</li>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 메시지, 연결 상태  </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> message :  </li>
							<li> offline : 브라우저가 오프라인일 때 </li>
							<li> online :  브라우저가 온라인일 때 </li>
							<li> open </li>
							<li>  </li>

							<h2 className='h2'> 📌 장점, 단점 </h2>
							<li> 장점 : </li>
							<li> 단점 : </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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
						<summary> 기타 </summary>

						<div className='block2'>

							<h2 className='h2'> 📌 이벤트 설명 </h2>
							<li> toggle : details태그 열거나 닫을때 이벤트가 발생  </li>
							<li> touchcancel : 터치가 끝나면 이벤트 발생 </li>
							<li> touchend : 화면에서 터치를 땔 때 발생 </li>
							<li> touchmove : 화면을 터치 후 이동하면 이벤트 발생 </li>
							<li> touchstart : 화면을 터치하면 이벤트가 발생 </li>
							<li> transitionend : css가 완료될 때 이벤트 발생 </li>
							<li>  </li>

							<h2 className='h2'> 📌 속성 및 메소드 </h2>
							<li> bubbles : 버블링 이벤트 여부 반환  </li>
							<li> cancelable :   </li>
							<li> event.charCode : 입력을 하면 유니(아스키?) 코드 문자 반환 </li>
							<li> changeTouches : 이전 터치와 현재 터치 사이에 상태가 변경된 객체의 목록 반환  </li>
							<li> createEvent() : 이벤트를 생성  </li>
							<li> event.currentTarget: 현재 이벤트를 실행한 요소 반환 </li>
							<li> eventPhase : 현재 평가중인 이벤트 흐름의 단계를 나타내는 숫자를 반환, 무슨소리인지 모르겠음 </li>
							<li> isTrusted : 이벤트가 신뢰 여부 반환? </li>
							<li> lengthComputable : 진행 길이를 계산할 수 있는지 여부를 반환합니다. </li>
							<li> loaded : 로드된 작업량을 반환합니다. </li>
							<li> newValue :  </li>
							<li> oldValue :  </li>
							<li> newURL :  </li>
							<li> oldURL :   </li>
							<li> timeStamp : 이벤트가 작성된 시간(밀리초) </li>
							<li> total : 로드할 총 작업량 반환 </li>

							<li>  </li>
							<li>  </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
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

			</div>
		</>
	);
}

export default JavaScriptEvent;