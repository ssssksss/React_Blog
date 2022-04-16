import React from 'react';

const JavaScriptDocument = (props) => {
  return (
    <>
      <div className="common_style" >

        <div className='block1'>
          <details>
            <summary> [1] Selection, Range </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 참고 사이트 </h2>
              <div className='block4'>
                <li> <a href="https://jungpaeng.tistory.com/86" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
              </div>

              <h2 className='h2'> 📌 Selection </h2>
              <div className='block4'>
                <li> const selection = document.getSelection(); </li>
                <li> anchor : 텍스트를 선택한 지점 </li>
                <li> focus : 선택이 종료된 지점 </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 Selection 속성 </h2>
              <div className='block4'>
                <li> {' interface Selection { '}
                  <li> {' readonly anchorNode: Node | null; '} <small> 선택이 시작된 지점에 있는 노드를 반환한다. 사용할일이 있을지.. </small> </li>
                  <li> {' readonly anchorOffset: number; '} <small> 선택된 노드에서 시작된 텍스트의 시작 위치 </small> </li>
                  <li> {' readonly focusOffset: number; '} <small> 선택된 노드에서 종료된 텍스트의 종료 위치 </small> </li>
                  <li> {' readonly focusNode: Node | null; '} <small> 선택이 종료된 지점에 있는 노드를 반환 , 사용할일이 있을지..</small> </li>
                  <li> {' readonly isCollapsed: boolean; '} <small> anchor, focus가 같은 위치에 있는지 확인 </small> </li>
                  <li> {' readonly rangeCount: number; '} <small> 현재 브라우저 context에 존재하는 range의 수를 반환한다. 잘모르겠다. 빈공간 클릭하면 0 </small> </li>
                  <li> {' readonly type: string; '} <small> caret: 클릭되거나 입력할 때 , range : 드래그했을때, none : 아무런 이벤트가 발생되지 않은 경우 </small> </li>
                </li>
                <li> {' } '} </li>
              </div>

              <h2 className='h2'> 📌 Selection 메소드 </h2>
              <div className='block4'>
                <li> {' interface Selection { '}
                  <li> {' addRange(range: Range): void; '} <small> 현재 Selection에 Range를 추가한다는데..?  </small> </li>
                  <li> {' collapse(node: Node | null, offset?: number): void; '} <small> offset 0으로 놓으니 커서가 처음으로 이동, offset 1로 놓으니 커서가 마지막으로 이동, 넘겨진 노드와 offset으로
                    Range를 접는 다는데 무슨말이지 이해가 안된다. </small> </li>
                  <li> {' collapseToStart(): void; '} <small> 드래그 하고나서 마우스를 떼면 처음으로 커서이동 </small> </li>
                  <li> {' collapseToEnd(): void; '} <small> 드래그 하고나서 마우스를 떼면 마지막으로 커서이동 </small> </li>
                  <li> {' containsNode(node: Node, allowPartialContainment?: boolean): boolean; '} <small>
                    주어진 노드가 선택된 범위에 존재하면 true 아니면 false </small> </li>
                  <li> {' deleteFromDocument(): void; '} <small> 선택된 범위를 document에서 지운다. 드래그 할 때 시간을 조금 주어야 하고 잘못하면 에러가 발생하기도 한다. </small> </li>
                  <li> {' empty(): void; '}<small> Selection을 비우는것 같다. </small>  </li>
                  <li> {' removeAllRanges(): void; '} <small> Selection에 모든 Range객체를 지운다. </small> </li>
                  <li> {' removeRange(range: Range): void; '} <small> Selection에서 특정 Range를 제거한다. </small> </li>
                  <li> {' getRangeAt(index: number): Range; '}<small> Range객체를 반환, 클릭하면 한줄에 위치를 반환하기는 한다. 어따쓰는지는.. </small>  </li>
                  <li> {' selectAllChildren(node: Node): void; '} <small> 부모 노드를 주면 모든 자식노드를 선택하게 한다. </small> </li>
                  <li> {' extend(node: Node, offset?: number): void; '} <small> anchor는 그대로고 focus만 주어진 노드와 offset으로 이동 시킨다. </small> </li>
                  <li> {' setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void; '}
                    <small> 노드의 시작과 끝을 지정할 수 있다. </small> </li>
                  <li> {' setPosition(node: Node | null, offset?: number): void; '} <small> collapse메소드와 같다고 한다. </small> </li>
                  <li> {' toString(): string; '} </li>
                </li>
                <li> {' } '} </li>
              </div>

              <h2 className='h2'> 📌 Selection 이벤트 </h2>
              <div className='block4'>
                <li> selectStart <small> 드래그나 클릭할 때 새로운 Range객체가 있을 때 발생 </small> </li>
                <li> selectionchange <small> 새로운 range객체가 추가되거나, 현재 range객체의 경계가 바뀔 때 발생 </small> </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 Range 속성 </h2>
              <div className='block4'>
                <li> readonly collapsed: boolean; <small> 시작점과 끝점이 같은지 boolean값 반환 </small> </li>
                <li> readonly startContainer: Node; <small> 범위가 시작하는 부분의 노드 </small>  </li>
                <li> readonly endContainer: Node; <small> 범위가 끝나는 부분의 노드 </small>  </li>
                <li> readonly startOffset: number; <small> 시작하는 지점의 offset인데 텍스트노드면 위치값이고 요소노드라면 자식노드의 인덱스 </small>  </li>
                <li> readonly endOffset: number; <small> 끝나는 지점의 offset인데 텍스트노드면 위치값이고 요소노드라면 자식노드의 인덱스 </small>  </li>
                <li> readonly commonAncestorContainer: Node; <small> startContainer와 endContainer가 포함된 최상위 노드를 반환 </small> </li>
              </div>

              <h2 className='h2'> 📌 Range 메소드 </h2>
              <div className='block4'>
                <li> {' cloneContents(): DocumentFragment; '} <small>  </small> </li>
                <li> {' cloneRange(): Range; '} <small>  </small> </li>
                <li> {' collapse(toStart?: boolean): void; '} <small>  </small> </li>
                <li> {' compareBoundaryPoints(how: number, sourceRange: Range): number; '} <small>  </small> </li>
                <li> {' comparePoint(node: Node, offset: number): number; '} <small>  </small> </li>
                <li> {' createContextualFragment(fragment: string): DocumentFragment; '} <small>  </small> </li>
                <li> {' deleteContents(): void; '} <small>  </small> </li>
                <li> {' detach(): void; '} <small>  </small> </li>
                <li> {' extractContents(): DocumentFragment; '} <small>  </small> </li>
                <li> {' getBoundingClientRect(): DOMRect; '} <small>  </small> </li>
                <li> {' getClientRects(): DOMRectList; '} <small>  </small> </li>
                <li> {' insertNode(node: Node): void; '} <small>  </small> </li>
                <li> {' intersectsNode(node: Node): boolean; '} <small>  </small> </li>
                <li> {' isPointInRange(node: Node, offset: number): boolean; '} <small>  </small> </li>
                <li> {' selectNode(node: Node): void; '} <small>  </small> </li>
                <li> {' selectNodeContents(node: Node): void; '} <small>  </small> </li>
                <li> {' setEnd(node: Node, offset: number): void; '} <small>  </small> </li>
                <li> {' setEndAfter(node: Node): void; '} <small>  </small> </li>
                <li> {' setEndBefore(node: Node): void; '} <small>  </small> </li>
                <li> {' setStart(node: Node, offset: number): void; '} <small>  </small> </li>
                <li> {' setStartAfter(node: Node): void; '} <small>  </small> </li>
                <li> {' setStartBefore(node: Node): void; '} <small>  </small> </li>
                <li> {' surroundContents(newParent: Node): void; '} <small>  </small> </li>
                <li> {' toString(): string; '} <small>  </small> </li>
              </div>

              <h2 className='h2'> 📌 Range How  </h2>
              <div className='block4'>
                <li> readonly END_TO_END: number; </li>
                <li> readonly END_TO_START: number; </li>
                <li> readonly START_TO_END: number; </li>
                <li> readonly START_TO_START: number; </li>
              </div>

            </div>
          </details>
        </div>

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