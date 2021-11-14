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

							<h2 className='h2'> 📌 DOM 요소 컬렉션 종류 </h2>
							<div className="block3">
								<li> 컬렌션내부의 값이 바뀌면 실시간으로 DOM트리에 반영해서 반복문을 사용할 때 주의 </li>
								<li> 🔸 HTMLCollection </li>
								<li> 🔸 NodeList </li>
								<li> 🔸 classList </li>
							</div>


						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> Document Property </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 anchors - document에 있는 name속성을 가진 요소 노드를 찾는다. </h2>
							<li> document.anchors : document에서 a태그에 name속성을 가진 요소들을 HTML_COLLECTION으로 반환 </li>
							<li> document.anchors[INDEX] : HTML_COLLECTION에서 인덱스에 맞는 요소 노드를 반환, 존재하지 않으면 null반환 </li>
							<li> document.anchors.item(INDEX) : HTML_COLLECTION에서 인덱스에 맞는 요소 노드를 반환, 존재하지 않으면 null반환 </li>
							<li> document.anchors.namedItem(ID) : HTML_COLLECTION에서 특정 ID를 가진 요소 노드를 반환, 존재하지 않으면 null반환  </li>

							<h2 className='h2'> 📌 document내부의 HTML태그 관련 속성  </h2>
							<li> document.doctype : document의 doctype을 반환 </li>
							<li> document.documentElement : document의 html 노드를 반환 </li>
							<li> document.body : document의 body 노드를 반환 </li>
							<li> document.title : document의 title 노드를 반환  </li>
							<li> document.scripts.length : 스크립트의 갯수를 반환하는데 코드가 사용되는 위치에 따라 갯수가 달라진다. </li>
							<li> document.referrer : document의 referrer을 반환 </li>
							<li> document.links[.length] : document의 link(a)태그 컬렉션을 반환 , 단 href속성을 가지고 있어야 한다. </li>
							<li> document.embeds[.length] : document의 embed태그 컬렉션을 반환 </li>
							<li> document.forms[.length] : document의 form태그 컬렉션을 반환 </li>
							<li> document.head : document의 form태그 반환 </li>
							<li> document.images[.length] : document의 image태그 컬렉션을 반환 </li>
							<li> 1 </li>

							<h2 className='h2'> 📌 Element </h2>
							<li> document.createElement("HTML_TAG") : document에 요소 노드를 생성한다. </li>

							<h2 className='h2'> 📌 document의 내부 정보 </h2>
							<li> document.cookie : document의 cookie를 반환 </li>
							<li> document.characterSet : document의 문자 인코딩을 반환 </li>
							<li> document.inputEncoding : document의 parsing될때의 문자 인코딩 값을 반환 </li>
							<li> document.defaultView : document의 window객체 반환 </li>
							<li> document.implementation : // TODO: 확인 필요, 무슨 말인지 모르겠음 </li>
							<li>  </li>

							<h2 className='h2'> 📌 document의 상태 </h2>
							<li> document.readyState : document의 loading 상태를 반환, [uninitialized, loading, interactive, complete] </li>
							<li> document.fullscreenElement : document가 전체화면이면 요소반환 아니면 null반환, 다른메소드
								(requestFullscreen(), exitFullscreen())와 같이 사용 브라우저 버전 확인 필요 </li>
							<li> document.fullscreenEnabled() : 전체 화면이 가능한지를 판단 </li>
							<li> document.lastModified : document가 마지막으로 수정된 날짜를 반환 <small> # 11/13/2021 05:58:54 </small> </li>
							<li>  </li>

							<h2 className='h2'> 📌 document관련 주소 </h2>
							<li> document.baseURI : HTML document의 base URI를 반환 <small> # html head태그 제일 위쪽에 base태그를 선언해서 사용 </small> </li>
							<li> document.documentURI : HTML document의 URI를 반환 </li>
							<li> document.URL : HTML document의 URL을 반환 </li>
							<li> document.domain : 문서를 로드한 domain을 반환 <small> # // TODO: 나중에 써봐야할 속성 </small> </li>

							<h2 className='h2'> 📌 designMode </h2>
							<li> document.designMode = "on"; : document 전체를 editable하게 만든다.(default="off") <small> # 전체 쓰기 가능은.. 쓸일이 없을것 같다. </small> </li>
							<li> document.execCommand("") : 선택 영역에 입력 인자를 받은 명령을 통해서 스타일 등을 바꾸어준다. , 브라우저 버전들을 확인해볼것 </li>
							// TODO: 이거는 쓸 내용이 많으니 최대한 빨리 정리 필요 그리고 이 명령은 텍스트 편집기를 만드는데 사용을 한다.
							<li> 1 </li>

							<h2 className='h2'> 📌 기타 - 잘안사용하는 것들 기록 </h2>
							<li> document.documentMode : document를 렌더링한 브라우저 모드를 알려주는데 IE만 지원을 한다.. <small> # 그냥 사용하기는 그렇다.. </small> </li>
							<li> document.strictErrorChecking : 모든 브라우저가 지원을 하지 않아 공부하지 않음 </li>
							<li> document.renameNode : 모든 브라우저가 지원을 하지 않아 공부하지 않음 </li>
							<li> document.normalizeDocument() : 모든 브라우저가 지원을 하지 않아 공부하지 않음 </li>
							<li> document.domConfig : 구식 </li>
							<li>  </li>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> Document Method </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 normalize() </h2>
							<li> 🔸 document.normalize() : 이웃해 있는 텍스트 노드를 모두 합쳐서 하나의 텍스트 노드로 만듬
								<small> # createTextNode를 사용하면 텍스트 노드가 2개로 분리가 된다.
									만약에 합치지 않고 결과만 얻고 싶다면 wholeText을 사용하면 된다. </small> </li>

							<h2 className='h2'> 📌 hasFocus() </h2>
							<li> document.hasFocus() : document가 focus가 되어있는지 판단 </li>

							<h2 className='h2'> 📌 importNode() </h2>
							<li> document.importNode(OTHER_DOCUMENT_NODE, [true,false]) : 다른 document에서 node를 가져온다. true이면 자식노드까지 모드 가져옴 </li>

							<h2 className='h2'> 📌  </h2>
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
						<summary> activeElement - focus된 요소를 반환 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> var a = document.activeElement  </li>
							<li> document에서 focus된 요소를 반환해준다.  </li>

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
						<summary> addEventListener(), removeEventListener() - 요소에 이벤트를 추가하고 삭제하는 방법 </summary>
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

				<div className='block1'>
					<details>
						<summary> createDocumentFragment() - DOM Fragment, 비어있는 노드 임시 공간 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 document.createDocumentFragment() </h2>
							<li> var d = document.createDocumentFragment() </li>
							<li> 문서의 일부를 추출하거나 일부 내용을 변경,추가,삭제 후 문서에 다시 삽입해서 사용을 할 수 있다. </li>
							<li> 비어있는 노드라고 생각하면 되고 parentNode는 존재하지 않는다. 대신 자손 노드를 생성해서 사용하면 된다. </li>
							<li> fragment 노드를 다른 노드에 추가하거나 삽입을 하면 fragment 노드는 초기화가 된다. </li>

							<h2 className='h2'> 📌 예시 </h2>
							<li> var d = document.createDocumentFragment() : fragment 노드 생성 </li>
							<li> d.appendChild(NODE) : fragment 노드에 노드를 넣는 방법 </li>
							<li> ELEMENT_NODE.appendChild(d) : 요소 노드 자식으로 fragment 노드 삽입 </li>
							<li> NODE.appendChild(d) : 이미 존재하는 노드에 삽입을 하면 기존 노드는 사라지고 fragment 노드 바뀐다. </li>

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
						<summary> open(), close() </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> 출력스트림을 open() 문서를 작성하고 close()로 닫으면 문서를 지운다.  </li>
							<li> window.open()을 사용하면 새로운 창으로 바꿔서 문서를 작성할 수 있다. </li>

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

export default JavaScriptDocument;