import React from 'react';

const ReactQuill = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [1] 설명 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 에디터이다 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] nextjs 테스트 코드 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Editor.tsx <small> 편한대로 만들기 </small> </h2>
            <div className='block4'>
              <li> <small> 완벽하지 않아서 수정 필요 </small> </li>
              <li> {' import dynamic from "next/dynamic"; '} </li>
              <li> {' import React, { useState, useMemo } from "react"; '} </li>
              <li> {' const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); '} </li>
              <li> {' import "react-quill/dist/quill.snow.css"; '} </li>
              <li> {' import "quill/dist/quill.bubble.css"; '} </li>
              <li> {' const Editor = () => { '}
                <li> {'const [contents, setContents] = useState(""); '} </li>

                <li> {'const modules = useMemo( '}
                  <li> {'() => ({ '}
                    <li> {' toolbar: { '}
                      <li> {'container: [ '}
                        <li> {'["bold", "italic", "underline", "strike"], // toggled buttons '} </li>
                        <li> {'[{ size: ["small", false, "large", "huge"] }], // custom dropdown '} </li>
                        <li> {'[{ header: [1, 2, 3, 4, 5, 6, false] }], '} </li>
                        <li> {'[{ font: [] }], '} </li>
                        <li> {'[{ align: [] }], '} </li>
                        <li> {'[{ color: [] }, { background: [] }], // dropdown with defaults from theme '} </li>
                        <li> {'[{ header: 1 }, { header: 2 }], // custom button values '} </li>
                        <li> {'[{ list: "ordered" }, { list: "bullet" }], '} </li>
                        <li> {'[{ script: "sub" }, { script: "super" }], // superscript/subscript '} </li>
                        <li> {'[{ indent: "-1" }, { indent: "+1" }], // outdent/indent '} </li>
                        <li> {'[{ direction: "rtl" }], // text direction '} </li>
                        <li> {'["clean"], // remove formatting button '} </li>
                        <li> {'["blockquote", "link", "code-block", "formula", "image", "video"], // media '} </li>
                      </li>
                      <li> {'], '} </li>
                      <li> {'handlers: { '}
                        <li> {'image: imageHandler, '} </li>
                      </li>
                      <li> {'}, '} </li>
                    </li>
                    <li> {' }, '} </li>
                    <li> {'}), '} </li>
                  </li>
                  <li> {'[] '} </li>
                </li>
                <li> {'); '} </li>

                <li> {'return ( '}
                  <li> {'<div> '}
                    <li> {' <ReactQuill '}
                      <li> {'id="editor" '} </li>
                      <li> {'value={contents} '} </li>
                      <li> {'onChange={setContents} '} </li>
                      <li> {'modules={modules} '} </li>
                      <li> {'theme="bubble" '} </li>
                      <li> {'placeholder="내용을 입력해주세요." '} </li>
                    </li>
                    <li> {' /> '} </li>
                    <li> {' {contents} '} </li>
                  </li>
                  <li> {'</div> '} </li>
                </li>
                <li> {'); '} </li>
              </li>
              <li> {' }; '} </li>
            </div>

            <h2 className='h2'> 📌 사용 </h2>
            <div className='block4'>
              <li></li>
              <li> {' <Editor /> '} </li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 strong, italic 문제 해결 </h2>
            <div className='block4'>
              <li> 어플리케이션의 전체 css파일에 아래와 같이 추가 작성 </li>
              <li> {' strong { '}
                <li> {' font-weight: bold; '} </li>
              </li>
              <li> {' } '} </li>
              <li> {' em { '}
                <li> {' font-style: italic; '} </li>
              </li>
              <li> {' } '} </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 코드 설정하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 퀼 객체 속성 </h2>
            <div className='block4'>
              <li> {'  id="editor" '} </li>
              <li> {'  value={contents} '} <small> 내용을 담는 공간 </small> </li>
              <li> {'  modules={modules} '} <small> toolbar 등 설정하는 공간 </small> </li>
              <li> {'  onChange={setContents} '} <small> 내용이 변경되었을 때 담기는 공간 </small> </li>
              <li> {'  theme="snow" '} <small> "core" , "bubble" </small> </li>
              <li> {'  placeholder="내용을 입력해주세요." '} <small> placeholder 공간 </small> </li>
              <li> {'  readOnly '} <small> readOnly로 만들어줌 </small> </li>
              <li> {'  debug '} <small> debug 관련, 나중에 필요하면 다시 찾아보기 </small> </li>
            </div>

            <h2 className='h2'> 📌 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>
      {/* 끝 */}
      <div className='block1'>
        <details>
          <summary> [4] toast ui 설치하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 문서 </h2>
            <div className='block4'>
              <li> <a href="https://nhn.github.io/tui.editor/latest/ToastUIEditorCore"
                target="_blank" rel="noopener noreferrer"> 문서1 </a> </li>
              <li> <a href="https://github.com/nhn/toast-ui.doc"
                target="_blank" rel="noopener noreferrer"> 문서2 </a> </li>
            </div>


            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm i --save @toast-ui/react-editor </li>
              <li> npm i --save @toast-ui/editor-plugin-chart  </li>
              <li> npm i --save @toast-ui/editor-plugin-code-syntax-highlight  </li>
              <li> npm i --save @toast-ui/editor-plugin-color-syntax  </li>
              <li> npm i --save @toast-ui/editor-plugin-table-merged-cell  </li>
              <li> npm i --save @toast-ui/editor-plugin-uml </li>
            </div>

            <h2 className='h2'> 📌 Editor 예시 </h2>
            <div className='block4'>
              <li> {' import "@toast-ui/editor/dist/toastui-editor.css"; '} </li>
              <li> {' import { Editor } from "@toast-ui/react-editor"; '} </li> <br />
              <li> {' import "tui-chart/dist/tui-chart.css"; '} </li>
              <li> {' import chart from "@toast-ui/editor-plugin-chart"; '} </li>
              <li> {' import "highlight.js/styles/github.css"; '} </li>
              <li> {' import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"; '} </li>
              <li> {' import "tui-color-picker/dist/tui-color-picker.css"; '} </li>
              <li> {' import colorSyntax from "@toast-ui/editor-plugin-color-syntax"; '} </li>
              <li> {' import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell"; '} </li>
              <li> {' import uml from "@toast-ui/editor-plugin-uml"; '} </li> <br />
              <li> {' const editorRef = useRef<Editor>(null); '} </li>
              <li> {' const HandlerChange = () => { '}
                <li> {' const editorInstance = editorRef.current?.getInstance(); '} </li>
                <li> {' const getContent_md = editorInstance?.getMarkdown(); '} </li>
                <li> {' console.log(getContent_md); '} </li>
                <li> {' const getContent_html = editorInstance?.getHtml(); '} </li>
                <li> {' console.log(getContent_HTML); '} </li>
              </li>
              <li> {'   }; '} </li>
              <li> {'  '} </li> <br />
              <li> {' <Editor '}
                <li> {' initialValue={areaTextContent} '} <small> 초기값 알아서 넣어주기 </small> </li>
                <li> {' previewStyle="vertical" '} <small> tab | vertical , 미리보기 스타일 </small> </li>
                <li> {' height="600px" '} <small> 100px | auto </small> </li>
                <li> {' initialEditType="markdown" '} <small> markdown | wysiwyg </small> </li>
                <li> {' useCommandShortcut={true} '} <small> true | false ,  </small> </li>
                <li> {' onChange={() => HandlerChange()} '} </li>
                <li> {' ref={editorRef} '} </li>
                <li> {' plugins={[chart, codeSyntaxHighlight, colorSyntax, tableMergedCell, uml]} '} </li>
              </li>
              <li> {'       /> '} </li>
            </div>

            <h2 className='h2'> 📌 Viewer 예시 </h2>
            <div className='block4'>
              <li> {' import React, { useState, useEffect, useRef } from "react"; '} </li>
              <li> {' import "@toast-ui/editor/dist/toastui-editor.css"; '} </li>
              <li> {' import { Viewer } from "@toast-ui/react-editor"; '} </li> <br />
              <li> {' const viewerInstance = editorRef.current?.getInstance(); '} </li>
              <li> {' viewerInstance?.setMarkdown(res.content); '}
                <small> res.content는 markdown형식으로 저장된 코드여야 한다. </small> </li> <br />
              <li> {' <Viewer initialValue={post?.content} theme="black" ref={editorRef} /> '} </li>
            </div>



          </div>
        </details>
      </div>
    </div>
  );
}

export default ReactQuill;