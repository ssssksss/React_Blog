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
    </div>
  );
}

export default ReactQuill;