import React from 'react';

const JavaScriptElement = (props) => {
	return (
		<>

			<div className="common_style" >

				<div className='block1'>
					<details>
						<summary> 요소 노드 조회 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 요소 노드 조회 </h2>
							<div className="block3">
								<li> 🔸 document.getElementById("ID") : 해당되는 아이디를 가진 요소 노드를 선택  </li>
								<li> 🔸 document.getElementsByTagName("HTML_TAG") :  해당되는 HTML태그 요소 노드를 모두 선택 </li>
								<li> 🔸 document.getElementsByName("NAME") : 해당되는 name속성을 가진 요소 노드를 모두 선택</li>
								<li> 🔸 document.getElementsByClassName("CLASSNAME") : 해당되는 클래스 이름을 가진 요소 노드를 모두 선택 </li>
								<li> 🔸 HTML_COLLECTION_NODE.item(n) : n번째 요소 노드를 반환 </li>
								<div className="block4">
									<li> 노드 상태 변경이 바로 되므로 반복문 사용할 때 주의(while,for역방향,배열로변경,querySelectorAll사용) </li>
								</div>
								<li> 🔸 document.querySelector([HTML선택자, CSS선택자]) : 선택자에 해당되는 제일 첫번째 요소 반환 </li>
								<li> 🔸 document.querySelectorAll([HTML선택자, CSS선택자]) : 선택자에 해당되는 요소를 모두 선택 </li>
								<div className="block4">
									<li> document.querySelectorAll("#ID_NAME") <small> # querySelectorAll("#div1") </small> </li>
									<li> document.querySelectorAll(".CLASS_NAME") <small> # querySelectorAll(".btn1") </small> </li>
									<li> document.querySelectorAll("HTML_TAG_NAME") <small> # querySelectorAll("div") </small> </li>
									<li> document.querySelectorAll("HTML_TAG.CLASSNAME") <small> # querySelectorAll("div.btn1") </small> </li>
									<li> document.querySelectorAll("CSS.SELECTOR") <small> # querySelectorAll("ul{'>'}li:last-child") </small> </li>
								</div>
								<li> 🔸 document.documentElement : HTML태그 요소 노드  </li>
								<li> 🔸 document.ownerDocument : 루트 요소 반환 </li>
							</div>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 요소 노드 부모,형제,자식 조회 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 요소 노드의 부모,형제,자식 </h2>
							<div className="block3">
								<li> 🔸 ELEMENT_NODE.parentNode : 부모 노드  </li>
								<li> 🔸 ELEMENT_NODE.parentElement : 부모 노드가 요소 노드일 때만 부모노드 반환 </li>
								<li> 🔸 ELEMENT_NODE.firstChild : 1번째 자식 요소 반환</li>
								<li> 🔸 ELEMENT_NODE.lastChild : 마지막 자식 요소 반환 </li>
								<li> 🔸 ELEMENT_NODE.firstElementChild : 1번째 자식 요소 노드 반환</li>
								<li> 🔸 ELEMENT_NODE.lastElementChild : 마지막 자식 요소 노드 반환</li>
								<li> 🔸 ELEMENT_NODE.hasChildNodes() : 자식 노드 여부 판단, return boolean </li>
								<li> 🔸 ELEMENT_NODE.childNodes : 자식 요소 노드 리스트 반환 </li>
								<li> 🔸 ELEMENT_NODE.children : 자식 노드 중 ELEMENT_NODE TYPE만 컬렉션으로 반환 </li>
								<li> 🔸 ELEMENT_NODE.previousSibling : 이전 형제 노드</li>
								<li> 🔸 ELEMENT_NODE.previousElementSibling : 이전 형제 요소 노드</li>
								<li> 🔸 ELEMENT_NODE.nextSibling : 다음 형제 노드 </li>
								<li> 🔸 ELEMENT_NODE.nextElementSibling : 다음 형제 요소 노드 </li>
								<li> 🔸 ELEMENT_NODE.childElementCount : 자식 요소 노드만 카운트 값 리턴  </li>
								<li> 🔸 ELEMENT_NODE.childNodes : 자식 노드 리스트 리턴 <small> # #text 노드(주석 노드?)의 정확한 의미는 잘 모르겠다. </small>  </li>
								<li> 🔸 ELEMENT_NODE.children : 자식 요소 노드만 리스트로 리턴  </li>
								<li> 🔸 ELEMENT_NODE.  </li>
							</div>
						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 여러 노드 생성,추가,삭제 등 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 여러 노드 생성,추가,삭제 등 </h2>
							<div className="block3">
								<li> 🔸 var ELEMENT_NODE = document.createElement("HTML_TAG"); : document에 요소 노드 생성 </li>
								<li> 🔸 var TEXT_NODE = document.createTextNode("TEXT"); : 텍스트 노드 생성 </li>
								<li> 🔸 ELEMENT_NODE.appendChild(NODE); : 요소 노드의 마지막에 자식노드로 추가  </li>
								<li> 🔸 ELEMENT_NODE.removeChild(NODE) : 요소 노드의 자식 노드를 제거  </li>
								<li> 🔸 ELEMENT_NODE.replaceChild(OLD_NODE, NEW_NODE) : 요소 노드의 자식 노드를 대체함  </li>
								<li> 🔸 ELEMENT_NODE.remove() : 요소 노드 제거  </li>
								<li> 🔸 ELEMENT_NODE.cloneNode(true) : 요소 노드를 복사 </li>
								<li> 🔸 ELEMENT_NODE1.insertBefore(ELEMENT_NODE2,ELEMENT_NODE3) : NODE1의 자식 NODE3의 앞쪽에 새로운 NODE2를 추가한다. </li>
								<li> 🔸 HTML_COLLECTION.length : 컬렉션에 있는 노드의 갯수를 반환   </li>
								<li>  </li>
							</div>
						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 여러 노드의 값 생성,복사,추가,삭제 등 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 ELEMENT_NODE  </h2>
							<div className="block3">
								<li> 🔸 HTML_COLLECTION.namedItem("NAME 이나 ID") : HTML콜렉션에서 name이나id를 찾아서 요소를 반환한다. </li>
								<li> 🔸 ELEMENT_NODE.nodeValue : undefined </li>
								<li> 🔸 ATTRIBUTE_NODE.nodeValue : 속성 노드 속성값을 반환? 하거나 수정 <small> //TODO: 속성을 어떻게 처리해야할지 찾아봐야겠다. </small> </li>
								<li> 🔸 TEXT_NODE.nodeValue : 텍스트 노드 문자열을 반환 하거나 수정 </li>
								<li> 🔸 NODE.nodeName : (요소,속성 등등) 노드의 이름을 반환 <small> # tagName과는 다르게 태그를 반환하는 것이 아님 </small> </li>
								<li> 🔸 NODE.typename : 노드의 타입을 매핑 값으로 반환(1:요소노드, 2:속성 노드, 3:텍스트 노드, 8:주석 노드) </li>
								<li> 🔸 ELEMENT_NODE.id : 요소 노드의 아이디 속성 값 </li>
								<li> 🔸 ELEMENT_NODE.TEXT_NODE.wholeText : createTextNode를 사용해서 노드를 추가하면 각각 분리가 되는데 결과 값으로 이웃한 텍스트 노드를
									합쳐서 보여준다.  </li>
								<li> 🔸 NODE.textContent : 해당 요소 노드와 자식 노드의 텍스트를 포함한 모든 텍스트 출력, display:none도 출력 </li>
								<li> 🔸 ELEMENT_NODE.innerText : 해당 요소 노드와 자식 노드의 텍스트를 포함한 모든 텍스트 출력, display:none도 출력, 개행 </li>
								<li> 🔸 ELEMENT_NODE.innerHTML : 지정 요소 노드를 제외한 내부의 내용 모두를 HTML 마크업 텍스트로 출력 </li>
								<div className="block4">
									<li> 1. XSS공격에 취약 HTML에 몰래 코드를 추가할 수 있음 <small> # {' document.getElementById("test").innerHTML = "<p> 나는 해커다 </p>"; '} </small> </li>
									<li> 2. 내용을 덮어쓰고 HTML을 재파싱함(비효율) </li>
									<li> 3. DOM 객체에 접근해서 사용하는 방법보다는 빠르고 편하지만 위의 2가지 문제로 비추천한다. </li>
								</div>
								<li> 🔸 ELEMENT_NODE.outerText : 해당 요소 노드와 자식 노드의 텍스트를 포함한 모든 텍스트 출력, 개행 </li>
								<li> 🔸 ELEMENT_NODE.outerHTML : 지정 요소 노드를 포함한 내용 모두를 HTML 마크업 텍스트로 출력 </li>
								<li> 🔸 ELEMENT_NODE.insertAdjacentElement(POSITION, TEXT) : 요소를 특정 요소의 위치에 추가한다. </li>
								<li> 🔸 ELEMENT_NODE.insertAdjacentText(POSITION, TEXT) : Text형식을 특정 요소의 위치에 추가한다. </li>
								<li> 🔸 ELEMENT_NODE.insertAdjacentHTML(POSITION, TEXT) : HTML형식을 특정 요소의 위치에 추가한다. </li>
								<li> <small> # POSITION = beforebegin(요소전), afterbegin(요소첫번째자식보다앞), beforeend(요소마지막자식보다뒤), afterend(요소보다뒤) </small> </li>
								<div className="block4">
									<li> 1. innertHTML과는 다르게 덮어쓰기를 하지않고 파싱을해서 POSITION 위치에 추가를 해준다. </li>
									<li> 2. innertHTML과 마찬가지로 XSS 공격에 취약하므로 사용해 주의해야 한다. </li>
								</div>
								<li> 🔸 NodeList.ClassList (미정리) </li>
								<div className="block4">
									<li> NodeList.ClassList.add() </li>
									<li> NodeList.ClassList.remove() </li>
									<li> NodeList.ClassList.item </li>
									<li> NodeList.ClassList.toggle </li>
									<li> NodeList.ClassList.contains </li>
									<li> NodeList.ClassList.replace("OLD_VALUE","NEW_VALUE") </li>
								</div>

							</div>

						</div>
					</details>
				</div>


				<div className='block1'>
					<details>
						<summary> 요소 속성  </summary>
						<div className='block2'>

							<div className="block3">
								<h2 className='h2'> 📌 설명 </h2>
								<li> 🔸 ELEMENT_NODE.hasAttribute("ATTRIRUBTE"): 요소가 속성을 가지고 있는지 여부, return boolean </li>
								<li> 🔸 ELEMENT_NODE.getAttribute("ATTRIBUTE") : 요소노드의 해당 속성 값 반환, return string </li>
								<li> 🔸 ELEMENT_NODE.getAttributeNode("ATTRIBUTE") : 속성 노드를 가져온다. </li>
								<li> 🔸 ELEMENT_NODE.setAttribute("ATTRIBUTE","VALUE") : 요소에 속성,속성 값 추가, createAttribute로 만들지 않아도 속성 추가 가능 </li>
								<li> 🔸 ELEMENT_NODE.setAttributeNode(ATTRIBUTE_NODE) : 요소에 속성노드를 추가 </li>
								<li> 🔸 document.createAttribute("ATTRIBUTE") : document에 속성을 생성, setAttribute를 사용을 권함 </li>
								<li> 🔸 document.createComment("COMMENT") : document에 주석 노드를 생성 </li>
								<li> 🔸 ELEMENT_NODE.removeAttribute("ATTRIBUTE") : 요소에 속성 제거 </li>
								<li> 🔸 ELEMENT_NODE.removeAttributeNode(ATTRIBUTE_NODE) : 요소에 속성 제거, 그리고 속성 반환 </li>
								<li> 🔸 ELEMENT_NODE.classList : 요소의 클래스 속성 값들을 리스트로 반환  </li>
								<li> 🔸 ELEMENT_NODE.className : 요소의 클래스 속성 값들을 문자열?로 리턴  </li>
								<li> 🔸 ELEMENT_NODE.closest("CSS_SELECTOR") : 요소 노드가 속성을 가지고 있는지 판단, 있으면 노드를리턴 없으면 null  </li>
								<li> 🔸 ELEMENT_NODE.contentEditable="true" : 요소 노드에 텍스트를 입력할 수 있게 한다. </li>
								<li> 🔸 ELEMENT_NODE.isContentEditable : 요소 노드가 contentEditable="true"인지 boolean값 리턴 </li>
								<li> 🔸 ELEMENT_NODE.dir=["ltr","rtl","auto"] : 요소 노드에 dir을 설정 <small> # //TODO: dir을 잘 몰라서 일단 패스.. </small> </li>
								<li> 🔸 ELEMENT_NODE.id : 요소 노드의 id값을 반환 </li>
								<li> 🔸 ELEMENT_NODE.lang : 요소 노드의 lang속성 값을 반환 </li>
								<li> 🔸 ELEMENT_NODE.firstElementChild : 요소 노드의 첫번째 자식 요소 노드 반환 </li>
								<li> 🔸 ELEMENT_NODE.lastElementChild : 요소 노드의 마지막 자식 요소 노드 반환 </li>
								<li> 🔸 ELEMENT_NODE.matches("CSS_SELECTOR") : id,class 처럼 css선택자가 요소 노드의 속성으로 존재하면 true, 없으면 false</li>
								<li> 🔸 document.documentElement.namespaceURI : namespace의 값을 반환한다. <small> # "http://www.w3.org/1999/xhtml"  </small> </li>
								<li> 🔸 ELEMENT_NODE.tabIndex = "VALUE" : TabIndex 속성을 지정하는 건데, 탭 순서가 꼬일수 있으므로 사용을 안하는 것 같다. </li>
								<li> 🔸 ELEMENT_NODE.title : title 속성 </li>
							</div>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 요소 노드 스타일 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 요소 css스타일 설정 </h2>
							<div className="block3">
								<li> ELEMENT_NODE.style.CSS_STYLE = "STYLE_VALUE"; <small> # 요소에 스타일을 바꾸는 방법 </small> </li>
								<li> window.getComputedStyle(ELEMENT_NODE,null).getPropertyValue("STYLE") <small> # 요소의 스타일 값을 가져오는 방법 </small>  </li>
								<li>  </li>
							</div>

							<h2 className='h2'> 📌 요소 css 스타일 조회 </h2>
							<div className="block3">
								<li> 🔸 ELEMENT_NODE.clientWidth : 요소 노드의 너비 <small> # width+padding </small> </li>
								<li> 🔸 ELEMENT_NODE.clientHeight : 요소 노드의 높이 </li>
								<li> 🔸 ELEMENT_NODE.clientLeft : 요소 노드의 테두리 좌측 너비 </li>
								<li> 🔸 ELEMENT_NODE.clientTop : 요소 노드의 테두리 상단 너비 </li>
								<li> 🔸 ELEMENT_NODE.offsetWidth : 요소 노드의 너비 <small> # width+padding+border </small> </li>
								<li> 🔸 ELEMENT_NODE.offsetHeight : 요소 노드의 높이 <small> # width+padding+border </small> </li>
								<li> 🔸 ELEMENT_NODE.offsetLeft </li>
								<li> 🔸 ELEMENT_NODE.offsetTop </li>
								<li> 🔸 ELEMENT_NODE.scrollHeight </li>
								<li> 🔸 ELEMENT_NODE.scrollWidth </li>
								<li> 🔸 ELEMENT_NODE.scrollLeft </li>
								<li> 🔸 ELEMENT_NODE.scrollTop </li>
								<li> 🔸 ELEMENT_NODE. </li>
								<li>  </li>
							</div>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> 요소 메소드 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> 🔸 ELEMENT_NODE.focus() : 요소 노드에 focus를 준다. </li>
							<li> 🔸 ELEMENT_NODE.blur() : 요소 노드에 focus를 해제한다. </li>
							<li> 🔸 ELEMENT_NODE1.compareDocumentPosition(ELEMENT_NODE2) : 2개의 요소 노드를 비교하여 리턴 값을 반환  </li>
							<div className="block3">
								<li> 주의 : 리턴 값은 해당되는 값들이 모두 더해져서 나온다. </li>
								<li> return 1 : NODE1과 NODE2가 같은 문서가 아닐 때 <small> # 해보지는 않음 </small> </li>
								<li> return 2 : NODE1이 NODE2보다 뒤쪽에 위치할 때 </li>
								<li> return 4 : NODE1이 NODE2보다 앞쪽에 위치할 때</li>
								<li> return 8 : NODE1의 부모(상위) 노드가 NODE2일 때 </li>
								<li> return 16: NODE1의 자식(하위) 노드가 NODE2일 때 </li>
								<li> return 32: NODE1과 NODE2가 관계가 없거나, 같은 요소 노드의 속성 노드일 때 <small> # 잘모르겠음 </small> </li>
								<details>
									<summary> 예시 </summary>
									<div className="block4">
										<li>  {' <body> '}
											<li>  {' 	<div id="n1" value="123"> '}
												<li>  {' 		<button value="버튼1" id="n2"> 버튼1 </button> '} </li>
												<li>  {' 		<button value="버튼2" id="n3"> 버튼2 </button> '} </li>
											</li>
											<li>  {' 	</div> '} </li>
										</li>
										<li>  {' </body> '} </li>
										<li>  {'  '} </li>
										<li>  {' <script> '}
											<li>  {'  '} </li>
											<li>  {' 	var n1 = document.getElementById("n1"); '} </li>
											<li>  {' 	var n2 = document.getElementById("n2"); '} </li>
											<li>  {' 	var n3 = document.getElementById("n3"); '} </li>
											<li>  {'  '} </li>
											<li>  {' 	var a2 = n3.compareDocumentPosition(n2); // 2 = 2(after) '} </li>
											<li>  {' 	var a4 = n2.compareDocumentPosition(n3); // 4 = 4(before) '} </li>
											<li>  {' 	var a8 = n2.compareDocumentPosition(n1); // 10 = 8(parent) + 2(after)  '} </li>
											<li>  {' 	var a16 = n1.compareDocumentPosition(n2); // 20 = 16(child) + 4(before) '} </li>
											<li>  {'  '} </li>
											<li>  {' 	console.log(a2, a4, a8, a16); '} </li>
											<li>  {'  '} </li>
										</li>
										<li>  {' </script> '} </li>
									</div>
								</details>
							</div>
							<li> 🔸 ELEMENT_NODE1.contains(ELEMENT_NODE2) : NODE1에 NODE2가 포함이 되었는지 boolean값 반환 </li>
							<li> 🔸 DOCUMENT_NODE.requestFullscreen() , DOCUMENT_NODE.exitFullscreen() : 웹 페이지 화면 최대화,이전 크기로 만들기 </li>
							<div className="block3">
								<li> DOCUMENT_NODE = document.documentElement; </li>
								<div className="block4">
									<li> if (DOCUMENT_NODE.requestFullscreen) DOCUMENT_NODE.requestFullscreen(); </li>
									<li> if (DOCUMENT_NODE.webkitRequestFullscreen) DOCUMENT_NODE.webkitRequestFullscreen(); <small> # safari </small> </li>
									<li> if (DOCUMENT_NODE.msRequestFullscreen) DOCUMENT_NODE.msRequestFullscreen(); <small> # IE 11 </small> </li>
								</div>
								<div className="block4">
									<li> if(document.requestFullscreen) document.exitFullscreen(); </li>
									<li> if(document.webkitExitFullscreen) document.webkitExitFullscreen(); <small> # safari </small> </li>
									<li> if(document.msExitFullscreen) document.msExitFullscreen(); <small> # IE 11 </small> </li>
								</div>
							</div>
							<li> 🔸 ELEMENT_NODE.getBoundingClientRect().[left,top,width,height] : viewport에서 요소의 상대적인 위치와 너비,높이를 알 수 있다. </li>
							<li> 🔸 document.documentElement.isDefaultNamespace("NAMESPACE") : 디폴트 namespace(xml에서 사용)가 맞는지 여부, boolean값 리턴 </li>
							<li> 🔸 ELEMENT_NODE1.isEqualNode(ELEMENT_NODE2) : NODE1이 NODE2와 같은지 여부, boolean값 리턴 </li>
							<div className="block4">
								<li> 1. 노드 타입이 같아야 한다. </li>
								<li> 2. 노드 name,value,namespaceURI, prefix, localname 이 같아야 한다. </li>
								<li> 3. 같은 childNode 이어야 한다. </li>
								<li> 4. 같은 속성, 속성 값이어야 한다. </li>
							</div>
							<li> 🔸 ELEMENT_NODE1.isSameNode(ELEMENT_NODE2) : NODE1 과 NODE2가 완전 일치해야한다. </li>
							<li> 🔸 ELEMENT_NODE.isSupported("","") : 지원되는 버전이면 true반환이라는데, 현재는 사용을 안하는 추세라서 패스~ </li>
							<li> 🔸 ELEMENT_NODE.normalize() : 이웃해 있는 텍스트 노드를 모두 합쳐서 하나의 텍스트 노드로 만듬 <small> # createTextNode를 사용하면
								텍스트 노드가 2개로 분리가 된다. 만약에 합치지 않고 결과만 얻고 싶다면 wholeText을 사용하면 된다. </small> </li>
							<details>
								<summary> 예시 </summary>
								<div className="block3">
									<li> {' <body> '}
										<li> {' 	<div id="test"> '}
											<li> {' 		<div id="test1"> 1 </div> '} </li>
										</li>
										<li> {' 	</div> '} </li>
										<li> {' 	<button id="btn"> createTextNode(" hello ") </button> '} </li>
										<li> {' 	<button id="btn1"> normalize() </button> '} </li>
									</li>
									<li> {' </body> '} </li>
									<li> {'  '} </li>
									<li> {' <script> '}
										<li> {' 	var test = document.getElementById("test"); '} </li>
										<li> {' 	var test1 = document.getElementById("test1"); '} </li>
										<li> {' 	document.getElementById("btn").addEventListener("click", () => { '}
											<li> {' 		var x = document.createTextNode(" hello "); '} </li>
											<li> {' 		test1.appendChild(x); '} </li>
											<li> {' 		console.log(test1); '} </li>
											<li> {' 		console.log(test1.childNodes[0].wholeText); '} </li>
											<li> {' 		console.log(test1.childNodes.length); '} </li>
										</li>
										<li> {' 	}) '} </li>
										<li> {' 	document.getElementById("btn1").addEventListener("click", () => { '}
											<li> {' 		test1.normalize(); '} </li>
											<li> {' 		console.log(test1); '} </li>
											<li> {' 		console.log(test1.childNodes.length); '} </li>
										</li>
										<li> {' 	}) '} </li>
									</li>
									<li> {' </script> '} </li>
								</div>
							</details>
							<li> 🔸 ELEMENT_NODE. </li>

							<li> 3 </li>

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
						<summary> EventListener - 요소 노드에 이벤트를 추가,삭제 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> [document, ELEMENT_NODE].addEventListener("EVENT",FUNCTION) : 문서나 요소 노드에 이벤트를 추가하는 방법 </li>
							<li> 2 </li>
							<li> 3 </li>

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
						<summary> aptNode, importNode, cloneNode - 다른 문서에서 노드를 가져오거나 복사 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> document.adoptNode(ELEMENT_NODE) : 문서 노드에 다른 문서에서 가져온 노드를 추가한다? </li>
							<li> 2 </li>
							<li> 3 </li>

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
						<summary> 노드 이벤트 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 마우스 이벤트 </h2>
							<li> ELEMENT_NODE.click() : 요소 노드를 클릭한다. </li>
							<li>  </li>
							<li> 3 </li>

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
						<summary>  </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> 1 </li>
							<li> 2 </li>
							<li> 3 </li>

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

			</div>
		</>
	);
}

export default JavaScriptElement;