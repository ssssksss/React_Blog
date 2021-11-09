import React from 'react';

const JavaScriptDocument = (props) => {
	return (
		<>
			<div className="common_style" >

				<div className='block1'>
					<details>
						<summary> DOM(Document Object Model) </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<div className="block3">
								<li> 브라우저가 html,css 파일들을 이해할 수 있게 만들어 놓은 구조 </li>
								<li> 요소,속성,텍스트를 객체로 만들어서 DOM Tree 구조로 만들어 놓는다.  </li>
								<li> DOM Tree에서 HTML의 root객체는 document이다. </li>
								<li> 요소,속성(어튜리뷰트),텍스트는 모두 노드 단위로 구분되어 있어서
									JS(DOM API를 사용)를 사용해서 메모리를 변경할 수 있는것이다. </li>
							</div>

							<h2 className='h2'> 📌 노드의 종류 </h2>
							<div className="block3">
								<li> 🔸 문서(document) 노드 : HTML의 root 노드, 아래 3가지 노드에 접근하려면 document노드로 부터 시작된다. </li>
								<li> 🔸 요소(element) 노드 : 일반적으로 html에서 알고 있는 태그를 뜻한다.(div,span,p 등등) </li>
								<li> 🔸 속성(attribute) 노드 : html태그 내부에 있는 class,id,onclick 등등, 태그가 가지고 있는 속성을 뜻한다. </li>
								<li> 🔸 텍스트(text) 노드 : 태그가 가지고 있는 텍스트 값을 뜻하는데 "{' <div> 텍스트는 나야나 </div> '}"를 예시를 들면 텍스트노드는 "텍스트는 나야나"라고 보면된다.
									텍스트 노드는 자식노드를 가질 수 없고 최하단 노드이다. </li>
							</div>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> DOM 노드에 접근하는 방법 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 요소,노드에 접근하는 방법 </h2>
							<div className="block3">
								<li> 🔸 document.getElementById("ID") : 해당 아이디 요소를 선택, return HTML.ELEMENT </li>
								<li> 🔸document.getElementsByTagName("TAG") : 해당 태그이름의 요소를 모두 선택, return HTML.Collection(live) </li>
								<li>  🔸document.getElementsByClassName("CLASSNAME") : 해당 클래스 요소를 모두 선택, 노드 상태 변경이
									바로 되므로 반복문 사용할 때 주의(while,for역방향,배열로변경,querySelectorAll사용),return HTML.Collection(live) </li>
								<li> 🔸 document.getElementsByName("NAME") : 해당 name 요소를 모두 선택, return HTML.Collection(live) </li>
								<li> 🔸 document.querySelector([HTML선택자, CSS선택자]) : 선택자에 해당되는 제일 첫번째 요소 반환 , return HTML.ELEMENT </li>
								<li> 🔸 document.querySelectorAll([HTML선택자, CSS선택자]) : 선택자에 해당되는 요소 객체 반환, return NodeList </li>
								<div className="block4">
									<li> document.querySelectorAll("#ID") <small> # querySelectorAll("#div1") </small> </li>
									<li> document.querySelectorAll(".CLASSNAME") <small> # querySelectorAll(".btn1") </small> </li>
									<li> document.querySelectorAll("TAG") <small> # querySelectorAll("div") </small> </li>
									<li> document.querySelectorAll("TAG.CLASSNAME") <small> # querySelectorAll("div.btn1") </small> </li>
									<li> document.querySelectorAll("CSS.SELECTOR") <small> # querySelectorAll("ul{'>'}li:last-child") </small> </li>
								</div>
							</div>

							<h2 className='h2'> 📌 JQuery DOM Traversing </h2>
							<div className="block3">
								<li> 🔸 ELEMENT.parentNode : 부모 노드 , return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.firstChild : 1번째 자식 노드, return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.lastChild : 마지막 자식 노드, return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.firstElementChild : 1번째 자식 노드, return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.lastElementChild : 마지막 자식 노드, return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.hasChildNodes() : 자식 노드 여부 판단, return boolean </li>
								<li> 🔸 ELEMENT.childNodes : 모든 자식 요소 반환, return NodeList </li>
								<li> 🔸 ELEMENT.children : 자식 노드 중 ELEMENT TYPE만 컬렉션으로 반환, return HTML.Collection(live) </li>
								<li> 🔸 ELEMENT.previousSibling : 이전 형제 노드, return HTML.ELEMENT</li>
								<li> 🔸 ELEMENT.nextSibling : 다음 형제 노드, return HTML.ELEMENT </li>
								<li> 🔸 ELEMENT.previousElementSibling : 이전 형제 요소 노드, return HTML.ELEMENT</li>
								<li> 🔸 ELEMENT.nextElementSibling : 다음 형제 요소 노드, return HTML.ELEMENT </li>
							</div>

							<h2 className='h2'> 📌 요소,노드 값을 수정하거나 조회하는 방법  </h2>
							<div className="block3">
								<li> 🔸 ELEMENT.nodeValue = "" : 노드 값을 수정 </li>
								<li> 🔸 ELEMENT.nodeValue  : 노드 값을 조회 </li>
								<li> 🔸 NodeList.ClassList </li>
								<div className="block4">
									<li> NodeList.ClassList.add() </li>
									<li> NodeList.ClassList.remove() </li>
									<li> NodeList.ClassList.item </li>
									<li> NodeList.ClassList.toggle </li>
									<li> NodeList.ClassList.contains </li>
									<li> NodeList.ClassList.replace("OLD_VALUE","NEW_VALUE") </li>
								</div>
								<li> 🔸 ELEMENT.id </li>
								<li> 🔸 ELEMENT.hasAttribute("ATTRIRUBTE"): 요소가 속성을 가지고 있는지 여부, return boolean </li>
								<li> 🔸 ELEMENT.getAttribute("ATTRIBUTE") : 요소의 속성 이름 반환, return string </li>
								<li> 🔸 ELEMENT.setAttribute("ATTRIBUTE","VALUE") : 요소에 속성 추가 </li>
								<li> 🔸 ELEMENT.removeAttribute("ATTRIBUTE") : 요소에 속성 제거 </li>
								<li> 🔸 ELEMENT.textContent </li>
								<li> 🔸 ELEMENT.innerHTML : 해당 요소와 자식 요소의 모든 HTML내용을 마크업을 포함한 문자열로 반환
									, XSS공격에 취약 HTML에 몰래 코드를 추가할 수 있음 , HTML을 재파싱함(비효율)</li>
								<div className="block4">
									<li> 1. XSS공격에 취약 HTML에 몰래 코드를 추가할 수 있음 <small> # {' document.getElementById("test").innerHTML = "<p> 나는 해커다 </p>"; '} </small> </li>
									<li> 2. 내용을 덮어쓰고 HTML을 재파싱함(비효율) </li>
									<li> 3. DOM 객체에 접근해서 사용하는 방법보다는 빠르고 편하지만 위의 2가지 문제로 비추천한다. </li>
								</div>
								<li> 🔸 ELEMENT.insertAdjacentHTML(POSITION, TEXT); </li>
								<div className="block4">
									<li> POSITION = [ beforebegin(요소전), afterbegin(요소첫번째자식보다앞), beforeend(요소마지막자식보다뒤), afterend(요소보다뒤) ] </li>
									<li> innertHTML과는 다르게 덮어쓰기를 하지않고 파싱을해서 위치에 추가를 해준다. </li>
									<li> innertHTML과 마찬가지로 XSS 공격에 취약하므로 사용해 주의해야 한다. </li>
								</div>
							</div>

							<h2 className='h2'> 📌 요소를 수정하거나 추가,삭제 하는 방법 </h2>
							<div className="block3">
								<li> var x = document.createElement("TAG"); : 요소 노드 생성 </li>
								<li> var x = document.createTextNode("TEXT"); : 텍스트 노드 생성 </li>
								<li> ELEMENT.appendChild(x); : 요소의 마지막 자식노드로 추가  </li>
								<li> ELEMENT:removeChild(x) : 요소 자식의 x노드를 제거  </li>
								<li>  </li>
							</div>

							<h2 className='h2'> 📌 요소 css스타일 설정 </h2>
							<div className="block3">
								<li> ELEMENT.style.STYLE = "STYLE_VALUE"; <small> # 요소에 스타일을 바꾸는 방법 </small> </li>
								<li> window.getComputedStyle(ELEMENT,null).getPropertyValue("STYLE") <small> # 요소의 스타일 값을 가져오는 방법 </small>  </li>
								<li>  </li>
							</div>


							<h2 className='h2'> ✔ 예시 </h2>
							<div className="block3">
								<h3 className="h3"> html </h3>
								<div className="block4">
									<li> {' <body> '}
										<li> {' 	<button class="class1"> class="class1" </button> '}  </li>
										<li> {' 	<button id="id1"> id="id1" </button> '}  </li>
										<li> {' 	<button> <span> &lt;span&gt; &lt;/span&gt; </span> </button> '}  </li>
										<li> {' 	<button name="name1"> name="name1" </button> '}  </li>
									</li>
									<li> {' </body> '}  </li>
									<li> {'  '}  </li> <br />
									<li> {' <script> '}
										<li> {' 	function switchBackground() { '}
											<li> {' 		return function () { '}
												<li> {' 			document.body.style.backgroundColor = "blue"; '}  </li>
											</li>
											<li> {' 		}; '}  </li>
										</li>
										<li> {' 	} '}  </li>
										<li> {' 	var f1 = switchBackground(); '}  </li>
										<li> {' 	document.getElementsByClassName("class1")[0].onclick = f1; '}  </li>
										<li> {' 	document.getElementById("id1").onclick = f1; '}  </li>
										<li> {' 	document.getElementsByTagName("span")[0].onclick = f1; '}  </li>
										<li> {' 	document.getElementsByName("name1")[0].onclick = f1; '}  </li>
									</li>
									<li> {' </script> '}  </li>
								</div>
							</div>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> activeElement - focus된 요소 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌  </h2>
							<li> 1 </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 activeElement 예시 </h3>
									<div className='block4'>
										<li> {' <body> '}
											<li> {' 	<button onclick="f1()">클릭</button> '} </li>
											<li> {' 	<p id="f1"></p> '} </li>
										</li>
										<li> {' </body> '} </li>
										<li> {' <script> '}
											<li> {' 	function f1() { '}
												<li> {' 		var x = document.activeElement.tagName; '} </li>
												<li> {' 		document.getElementById("f1").innerHTML = x; '} </li>
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
						<summary> addEventListener, removeEventListener - 요소에 이벤트를 추가하고 삭제하는 방법 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 document.addEventListener </h2>
							<li> document.addEventListener(EVENT,FUNCTION,[useCapture]); </li>
							<li> EVENT : 작동할 이벤트 종류 </li>
							<li> FUNCTION : 이벤트 함수 종류 </li>
							<li> userCapture : 디폴트는 false, 무엇인지는 나중에 다시 알아보기 </li>

							<h2 className='h2'> 📌 document.removeEventListener </h2>
							<li> document.removeEventListener(EVENT,FUNCTION,[useCapture]); </li>
							<li> EVENT : 작동할 이벤트 종류 </li>
							<li> FUNCTION : 이벤트 함수 종류 </li>
							<li> userCapture : 디폴트는 false, 무엇인지는 나중에 다시 알아보기 </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 </h3>
									<div className='block4'>
										<li> {' <body> '}
											<li> {' 	<button id="addBtn"> add </button> '} </li>
											<li> {' 	<button id="removeBtn"> remove </button> '} </li>
										</li>
										<li> {' </body> '} </li>
										<li> {' <script> '}
											<li> {' 	var addBtn = document.getElementById("addBtn"); '} </li>
											<li> {' 	var createfunc = function () { '}
												<li> {' 		alert("!!!!!"); '} </li>
											</li>
											<li> {' 	}; '} </li>
											<li> {' 	addBtn.addEventListener("click", createfunc); '} </li>
											<li> {'  '} </li> <br />
											<li> {' 	var removeBtn = document.getElementById("removeBtn"); '} </li>
											<li> {' 	removeBtn.addEventListener("click", function () { '}
												<li> {' 		addBtn.removeEventListener("click", createfunc); '} </li>
											</li>
											<li> {' 	}); '} </li>
										</li>
										<li> {' </script> '} </li>
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

export default JavaScriptDocument;