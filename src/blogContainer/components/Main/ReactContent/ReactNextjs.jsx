import React from 'react';

const ReactNextjs = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] Nextjs 설치하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> npx create-next-app --typescript 프로젝트명 <small> 아래 파일들 설치 </small> </li>
              <li> <small> react, react-dom, next, eslint, eslint-config-next, typescript, @types/react, @types/node </small> </li>
              <li> cd 프로젝트명 </li>
              <li> npm run dev </li>
              <li> http://localhost:3000/ 으로 이동 </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] Nextjs에 대한 이해 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 SSR(서버 사이드 렌더링) </h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 SEO </h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 정적,동적 라우팅 </h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 오토 코드 스플리팅 </h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 css관련 라이브러리 지원 </h2>
            <div className='block4'>
              <li> css,sass,css-in-js </li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 서버리스 함수, API 엔드 포인트 </h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 히스토리 지원 </h2>
            <div className='block4'>
              <li> next/link를 사용하게 되면 location.history를 사용 </li>
              <li> 그러므로 추가적인 과정이 필요없음 </li>
            </div>

            <h2 className='h2'> 📌 클라이언트 사이드 </h2>
            <div className='block4'>
              <li> 서버의 요청 없이 클라이언트 사이드(브라우저)에서 페이지 이동이 가능</li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] nextjs 라우터, 페이지 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> router.push는 seo에서 다른 페이지로 이동하는 것을 인식하지 못한다. </li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌 속성 </h2>
            <div className='block4'>
              <li> pathname </li>
              <li> query </li>
              <li> asPath </li>
              <li> isFallback </li>
              <li> basePath </li>
              <li> locale </li>
              <li> locales </li>
              <li> defaultLocale </li>
              <li> domainLocales </li>
              <li> isReady </li>
              <li> isPreview </li>
              <li></li>
            </div>


            <h2 className='h2'> 📌 router.push </h2>
            <div className='block4'>
              <li> router.push(url,as,options) </li>
              <li> {' import { useRouter } from "next/router" '} </li>
              <li> const router = useRouter() </li>
              <li> router.push(경로) </li>
            </div>


            <h2 className='h2'> 📌 초기 페이지 </h2>
            <div className='block4'>
              <li> <small> 경로에 들어갈 내용은 root 디렉토리의 pages폴더가 "/" 경로이고 "/폴더/page.tsx" 처럼 폴더로 구분지어진다. </small> </li>
              <li> import Link from "next/link"; <small> 상단에 설정 </small> </li>
              <li> {' <Link href={"/index1"}> '}
                <li> {' <a> 링크 </a> '} </li>
              </li>
              <li> {' </Link> '} </li>
            </div>

            <h2 className='h2'> 📌 이동할 페이지 생성 </h2>
            <div className='block4'>
              <li> <small> index1.tsx로 pages폴더에 생성을 하였다. </small> </li>
              <li> <small> 컴포넌트의 첫글자는 대문자로 한다. </small> </li>
              <li> {' const Temp = () => { '}
                <li> {' return <div></div>; '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default Temp; '} </li>
            </div>

            <h2 className='h2'> 📌 동적 라우터 설정 </h2>
            <div className='block4'>
              <li> <small> href=는 경로, as는 브라우저에 보여줄 URL </small> </li>
              <li> import Link from "next/link"; <small> 상단에 설정 </small> </li>
              <li> {' <Link href={"/index1/[id]" as={`/index1/${props.id}}`}> '}
                <li> {' <a> 링크 </a> '} </li>
              </li>
              <li> {' </Link> '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] nextjs 리덕스 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm install redux react-redux next-redux-wrapper </li>
              <li> npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux</li>
              <li> <a href="chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related" target="_blank" rel="noopener noreferrer">
                리덕스 크롬 익스텐션 </a> </li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] nextjs stylecomponent 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> npm i styled-components </li>
              <li> npm i -D @types/styled-components </li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] nextjs github pages 배포 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 pakage.json </h2>
            <div className='block4'>
              <li> "name" 위쪽에 아래 내용 추가 </li>
              <li> "homepage": "http://사용자명.github.io/저장소이름", </li>
              <li> "scripts" - "build" 아래 쪽에 아래 내용 추가 </li>
              <li> "export": "next export", </li>
            </div>

            <h2 className='h2'> 📌 next.config.js </h2>
            <div className='block4'>
              <li> css 적용, /invitation은 css파일 경로 위치일것 같은데 아직은 잘 모르겠다. </li>
              <li> {' module.exports = { '}
                <li> {' assetPrefix: '}
                  <li> {' process.env.NODE_ENV === "production" '}
                    <li> {' ? "https://사용자명.github.io/invitation" '} </li>
                    <li> {' : "", '} </li>
                  </li>
                </li>
              </li>
              <li> {' }; '} </li>
            </div>

            <h2 className='h2'> 📌 config/config.js </h2>
            <div className='block4'>
              <li> img 적용, 아직 잘 모르겠다.. </li>
              <li> {' export const prefix = '}
                <li> {' process.env.NODE_ENV === "production" '}
                  <li> {' ? "https://사용자명.github.io/저장소명" '} </li>
                  <li> {' : ""; '} </li>
                </li>
              </li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li> <a href="https://hhyemi.github.io/2021/05/26/nextGit.html#heavy_check_mark-contextcontextjs"
                target="_blank" rel="noopener noreferrer"> 하다 말음 </a> </li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [6] NextJS 관련 에러 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 스타일 컴포넌트 </h2>
            <div className='block4'>
              <li> Prop `className` did not match <small> srr(서버)와 csr(클라이언트)와의 클래스명 불일치로 발생 </small> </li>
              <li> npm i babel-plugin-styled-components </li>
              <li> .babelrc 생성, 아래 내용 추가 </li>
              <div className="block3">
                <li> {' { '}
                  <li> {' "presets": ["next/babel"], '} </li>
                  <li> {' "plugins": [ '}
                    <li> {' [ '}
                      <li> {' "babel-plugin-styled-components", '}
                        <li> {' { '}
                          <li> {' "ssr": true, '} </li>
                          <li> {' "displayName": true, '} </li>
                          <li> {' "preprocess": false '} </li>
                        </li>
                      </li>
                      <li> {' } '} </li>
                    </li>
                    <li> {' ] '} </li>
                  </li>
                  <li> {' ] '} </li>
                </li>
                <li> {' } '} </li>
              </div>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [7] react-quill 에디터(포기... 커스텀이 어려움) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm install react-quill </li>
              <li> npm install react-quill@beta <small> 설치 에러날 경우 버전의 차이임으로 이것을 사용 </small> </li>
            </div>

            <h2 className='h2'> 📌 index.tsx </h2>
            <div className='block4'>
              <li> {' import type { NextPage } from "next"; '} </li>
              <li> {' import Head from "next/head"; '} </li>
              <li> {' import styles from "../styles/Home.module.css"; '} </li>
              <li> {' import React, { useState } from "react"; '} </li>
              <li> {' import "react-quill/dist/quill.snow.css"; '} </li>
              <li> {' import dynamic from "next/dynamic"; '} </li>
              <li> {' const Home: NextPage = () => { '}
                <li> {' const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); '} </li>
                <li> {' const [value, setValue] = useState(""); '} </li>
                <li> return (
                  <li> {' <ReactQuill value={value} onChange={setValue} /> '} </li>
                </li>
                <li> ); </li>
              </li>
              <li> {' }; '} </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [8] draft-js </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm i react-draft-wysiwyg draft-js </li>
              <li> npm install --save @types/react-draft-wysiwyg @types/draft-js </li>
              <li> npm i draftjs-to-html </li>
              <li> npm i @types/draftjs-to-html </li>
              <li> npm i html-to-draftjs </li>
              <li> npm i @types/html-to-draftjs </li>
            </div>

            <h2 className='h2'> 📌 테스트 코드(아직 확실하게 이해 못함) </h2>
            <div className='block4'>
              <li> {' import { EditorState } from "draft-js"; '} </li>
              <li> {' import { Editor } from "react-draft-wysiwyg"; '} </li>
              <li> {' const [editorState, setEditorState] = useState<EditorState>( '}
                <li> {' EditorState.createEmpty() '} </li>
              </li>
              <li> {' ); '} </li>
              <li> {' const onEditorStateChange = (editorState: any) => { '}
                <li> {' // editorState에 값 설정 '} </li>
                <li> {' setEditorState(editorState); '} </li>
              </li>
              <li> {' }; '} </li> <br />
              <li> {'<MyBlock> '}
                <li> {' <SubmitButton onClick={submitHandler}> 제출 </SubmitButton> '} </li>
                <li> {' <Link href={router.asPath.substring(0, router.asPath.lastIndexOf("/"))}> '}
                  <li> {' <CancelButton> 취소 </CancelButton> '} </li>
                </li>
                <li> {' </Link> '} </li>
                <li> {' <Editor '}
                  <li> {' // 에디터와 툴바 모두에 적용되는 클래스 '} </li>
                  <li> {' wrapperClassName="wrapper-class" '} </li>
                  <li> {' // 에디터 주변에 적용된 클래스 '} </li>
                  <li> {' editorClassName="editor" '} </li>
                  <li> {' // 툴바 주위에 적용된 클래스 '} </li>
                  <li> {' toolbarClassName="toolbar-class" '} </li>
                  <li> {' // 툴바 설정 '} </li>
                  <li> {' toolbar={{ '}
                    <li> {' // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지 '} </li>
                    <li> {' list: { inDropdown: true }, '} </li>
                    <li> {' textAlign: { inDropdown: true }, '} </li>
                    <li> {' link: { inDropdown: true }, '} </li>
                    <li> {' history: { inDropdown: false }, '} </li>
                  </li>
                  <li> {' }} '} </li>
                  <li> {' placeholder="내용을 작성해주세요." '} </li>
                  <li> {' // 한국어 설정 '} </li>
                  <li> {' localization={{ '}
                    <li> {' locale: "ko", '} </li>
                  </li>
                  <li> {' }} '} </li>
                  <li> {' // 초기값 설정 '} </li>
                  <li> {' editorState={editorState} '} </li>
                  <li> {' // 에디터의 값이 변경될 때마다 onEditorStateChange 호출 '} </li>
                  <li> {' onEditorStateChange={onEditorStateChange} '} </li>
                </li>
                <li> {' /> '} </li>
              </li>
              <li> {' </MyBlock> '} </li>
            </div>

            <h2 className='h2'> 📌 입력한 내용을 html코드로 반환하는 방법 </h2>
            <div className='block4'>
              <li> {' import draftToHtml from "draftjs-to-html"; '} </li>
              <li> {' import { EditorState, convertToRaw } from "draft-js"; '} </li>
              <li> {' const editorToHtml = draftToHtml( '}
                <li> {'convertToRaw(editorState.getCurrentContent()) '} </li>
              </li>
              <li> {' ); '} </li>
              <li> {' //html로 값이 나온다. '} </li>
              <li> {' console.log(editorToHtml); '} </li>
            </div>

            <h2 className='h2'> 📌 html코드를 draftjs에 맞게 변환 </h2>
            <div className='block4'>
              <li> {' import { convertToRaw, ContentState } from "draft-js"; '} </li>
              <li> {' import htmlToDraft from "html-to-draftjs"; '} </li>
              <li> {' const blocksFromHtml = htmlToDraft(editorToHtml); '} </li>
              <li> {' if (blocksFromHtml) { '}
                <li> {' const { contentBlocks, entityMap } = blocksFromHtml; '} </li>
                <li> {' const contentState = ContentState.createFromBlockArray( '}
                  <li> {' contentBlocks, '} </li>
                  <li> {' entityMap '} </li>
                </li>
                <li> {' ); '} </li>
                <li> {' const editorState1 = EditorState.createWithContent(contentState); '} </li>
              </li>
              <li> {' } '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [9] Nextjs 공식문서 읽어보기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 next/link </h2>
            <div className='block4'>
              <li> pages 폴더에 .js .tsx 와 같은 파일을 넣어놓으면 알아서 경로로 변경된다. </li>
              <li> pages/index.js <small> / </small> </li>
              <li> pages/blog/index.js <small> /blog </small> </li>
              <li> pages/blog/post.js <small> /blog/post </small> </li>
              <li> <small> [temp]는 폴더로 만들어야 한다. 그리고 index.js 파일을 만들어 두면 된다. </small> </li>
              <li> pages/blog/[temp] <small> /blog/:모든경로 , 1개의 파일로 여러개의 페이지를 보여줌 </small> </li>
              <li> pages/blog/[...temp] <small> /blog/* , 1개의 파일로 여러개의 페이지를 보여줌 </small> </li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [10] Nextjs 렌더링 관련? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <a href="https://suk9.tistory.com/84" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
              <li> getStaticProps <small> 서버에서 빌드할 때 딱 한번만 작동 </small> </li>
              <li> getStaticPaths </li>
              <li> getServerSideProps </li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 보류 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <a href="https://garve32.tistory.com/35?category=473361"
                target="_blank" rel="noopener noreferrer"> 테일윈드 css 적용 </a> </li>
              <li></li>
              <li></li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [11] nextjs dynamic </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> import dynamic from "next/dynamic"; </li>
              <li> {' const DynamicComponent = dynamic( '}
                <li> {' () => import("@/components/blog/Post/PostView"), '} <small> 컴포넌트의 경로가 들어가면된다. </small> </li>
                <li> {' { '}
                  <li> {' ssr: false, '} </li>
                </li>
                <li> {' } '} </li>
              </li>
              <li> {' ); '} </li>
              <li> {' const Index = () => { '}
                <li> {' return ( '}
                  <li> {' <div> '}
                    <li> {' <DynamicComponent /> '} </li>
                  </li>
                  <li> {' </div> '} </li>
                </li>
                <li> {' ); '} </li>
              </li>
              <li> {' }; '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [12] nextjs vercel에 배포 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> https://vercel.com/new </li>
              <li> github 계정으로 로그인 </li>
              <li> add github account </li>
              <li> 권한 허락하고 import 버튼 누르기 </li>
              <li> Build and Output Settings 클릭 </li>
              <li> 우측에 Override 클릭하고 아래와 같이 입력 </li>
              <li> BUILD COMMAND : next build </li>
            </div>

            <h2 className='h2'> 📌 에러 </h2>
            <div className='block4'>
              <li> 아래처럼 에러가 발생하였을 때, 에러페이지에 대한 페이지가 없어서 발생하는 것으로 추정 </li>
              <li> nextjs Error occurred prerendering page "/404" </li>
              <li> nextjs Error occurred prerendering page "/500" </li>
              <li> 페이지 루트 디렉토리에 _error.tsx 생성하고 아래 코드 추가 </li>
              <div className="block3">
                <li> {' import Error from "next/error"; '} </li>
                <li> {' function Page({ statusCode }: any) { '}
                  <li> {'   return <Error statusCode={statusCode}></Error>; '} </li>
                </li>
                <li> {' } '} </li>
                <li> {' Page.getInitialProps = ({ res, err }: any) => { '}
                  <li> {'   const statusCode = res ? res.statusCode : err ? err.statusCode : 404; '} </li>
                  <li> {'   return { statusCode }; '} </li>
                </li>
                <li> {' }; '} </li>
                <li> {' export default Page; '} </li>
              </div>
            </div>


          </div>
        </details>
      </div>

      {/* 끝 */}
    </div>
  );
}

export default ReactNextjs;