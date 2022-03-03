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
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 SEO </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 정적,동적 라우팅 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 오토 코드 스플리팅 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 css관련 라이브러리 지원 </h2>
            <div className='block4'>
              <li> css,sass,css-in-js </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 서버리스 함수, API 엔드 포인트 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 히스토리 지원 </h2>
            <div className='block4'>
              <li> next/link를 사용하게 되면 location.history를 사용 </li>
              <li> 그러므로 추가적인 과정이 필요없음 </li>
            </div>

            <h2 className='h2'> 📌 클라이언트 사이드 </h2>
            <div className='block4'>
              <li> 서버의 요청 없이 클라이언트 사이드(브라우저)에서 페이지 이동이 가능  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] nextjs 경로 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 초기 페이지 </h2>
            <div className='block4'>
              <li> <small> 경로에 들어갈 내용은 root 디렉토리의 pages폴더가 "/" 경로이고 "/폴더/page.tsx" 처럼 폴더로 구분지어진다. </small> </li>
              <li> import Link from "next/link"; <small> 상단에 설정 </small> </li>
              <li> {' <Link href={"/index1"}> '}
                <li> {'   <a> 링크 </a> '} </li>
              </li>
              <li> {' </Link> '} </li>
            </div>

            <h2 className='h2'> 📌 이동할 페이지 생성 </h2>
            <div className='block4'>
              <li> <small> index1.tsx로 pages폴더에 생성을 하였다. </small> </li>
              <li> {' import type { NextPage } from "next"; '} </li>
              <li> {' const temp: NextPage = () => { '}
                <li> {'   return <div></div>; '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default temp; '} </li>
            </div>

            <h2 className='h2'> 📌 동적 라우터 설정 </h2>
            <div className='block4'>
              <li> <small> href=는 경로, as는 브라우저에 보여줄 URL </small> </li>
              <li> import Link from "next/link"; <small> 상단에 설정 </small> </li>
              <li> {' <Link href={"/index1/[id]" as={`/index1/${props.id}}`}> '}
                <li> {'   <a> 링크 </a> '} </li>
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
              <li> npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux  </li>
              <li> <a href="chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related" target="_blank" rel="noopener noreferrer">
                리덕스 크롬 익스텐션 </a> </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
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
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <div className='block4'>
              <li> 장점 : </li>
              <li> 단점 : </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
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
          <summary> next 기본 라이브러리? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 import Head from "next/head"; </h2>
            <div className='block4'>
              <li> 헤더와 관련된 내용을 내부에 적으면 된다. </li>
              <li> {" <Head> </Head> "} </li>
            </div>

            <h2 className='h2'> 📌 import Image from "next/image"; </h2>
            <div className='block4'>
              <li> {' <Image src="/" alt="" width={10} height={10}> </Image> '} </li>
            </div>

            <h2 className='h2'> 📌 {" import { useRouter } from 'next/router' "} </h2>
            <div className='block4'>
              <li> const router = useRoute() </li>
              <li> {" {route.query.매개변수명} "} 을 이용하여 URL의 매개변수를 가지고 올 수 있다. </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
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

export default ReactNextjs;