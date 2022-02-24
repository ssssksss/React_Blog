import React from 'react';

const FrontendPrettier = (props) => {

  return (
    <>
      <div className="common_style">
        <div className='block1'>
          <details>
            <summary> [0] prettier 설치 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <div className='block4'>
                <li>  </li>
                <li> Ctrl + , </li>
                <li> editor format on save 입력 </li>
                <li> Editor: Format On Save 체크 </li>
                <li> editor Default Formatter 입력 </li>
                <li> Editor: Default Formatter를 esbenp.prettier-vscode로 변경 <small> 이렇게 보이지 않아서 아래와 같이 사용 </small> </li>
                <li> Editor: Default Formatter를 Prettier-Code formatter 로 변경 <small> 혹시나 몰라서 User, Workspace 둘다 바꾸어주었다. </small> </li>
                <li> Eslint Format: Enable 입력 후 체크해제 <small> ESLint와의 충돌 방지 </small> </li>
                <li> ctrl + shift + p </li>
                <li> format document with </li>
                <li> config default formatter </li>
                <li> prettier 선택 </li>
                <li> .prettierrc.js 파일 생성 <small> 주석을 사용하기 위해서 </small> </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 저장시 자동 포맷팅 </h2>
              <div className='block4'>
                <li> ctrl + , </li>
                <li> eslint Code Action On Save: Mode 입력 , all </li>
                <li> format on save 입력 , 체크 </li>
                <li>  </li>
              </div>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary> [1] Prettier 명령어 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 .prettierrc.js </h2>
              <div className='block4'>
                <li> module.exports = {"{"}
                  <li> singleQuote: true, <small> 문자열은 홀따옴표 </small> </li>
                  <li> semi: true, <small> 마지막 세미콜론 사용 </small> </li>
                  <li> useTabs: false, <small> 탭 사용금지 스페이스로 대체 </small> </li>
                  <li> tabWidth: 2, <small> 들여쓰기 너비 2칸 </small> </li>
                  <li> trailingComma: "all", <small> 키:값 뒤에 항상 콤마 사용 </small> </li>
                  <li> printWidth: 80, <small> 코드 한줄 최대 80 </small> </li>
                  <li> arrowParens: "avoid", <small> 화살표 함수 사용할 때 파라미터 1개이면 괄호 생략가능 </small> </li>
                  <li> endOfLine: "auto", <small> delete cr에러 해결 </small> </li>
                  <li>  </li>
                  <li>  </li>
                </li>
                <li> {"};"} </li>
              </div>

            </div>
          </details>
        </div>
        {/* 끝 */}
      </div>
    </>
  );
}

export default FrontendPrettier;