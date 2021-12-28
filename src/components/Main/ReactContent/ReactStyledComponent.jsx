import React from 'react';

const ReactStyledComponent = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> styled-components 설치 및 설정 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> css 파일을 이용하지 않고 jsx파일에서 태그나 컴포넌트에 스타일을 주는 방법 </li>
                            <li> Css in Js </li>
                            <li> ` (Back quoto) 기호 사용 </li>
                        </div>

                        <h2 className='h2'> 📌 설치 </h2>
                        <li> npm i styled-components </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> import styled from 'styled-components'; <small> # vscode 스니펫 명령어 imsc </small> </li>
                            <li>  </li>
                            <li>  </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 요소 컴포넌트에 css 주는 방법 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> const 컴포넌트명 = styled.태그명`
                                <li> width: 100px; </li>
                                <li> css스타일 코드 작성 </li>
                            </li>
                            <li> `;` </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 다른 컴포넌트 스타일 상속받고 css 주는 방법 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> const 컴포넌트명 = styled(스타일상속할컴포넌트명)`
                                <li> width: 100px; </li>
                                <li> css스타일 코드 작성 </li>
                            </li>
                            <li> 1; </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> css 속성을 가진 컴포넌트 만드는 방법 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> import {"{css}"} from 'styled-components'; <small> # import 필요 </small> </li>
                            <li>  </li> <br />
                            <li> const 컴포넌트명 = css`
                                <li> width: 100px; </li>
                                <li> css스타일 코드 작성 </li>
                            </li>
                            <li> `; </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 컴포넌트의 props속성에 따라 css스타일 주기 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 이벤트를 발생시켜서 랜더링 필요 </li>
                        <li> true,false로 버튼 클릭 on/off하는데는 유용하게 보인다. </li>
                        <li>  </li>
                        <div className="block4">
                            <li> const 컴포넌트명 = styled.컴포넌트`
                                <li> width: 100px; </li>
                                <li> css스타일 코드 작성 </li>
                                <li> {" ${(props) => (props.props속성명 ? css속성을가진컴포넌트 : css속성을가진컴포넌트) }"} </li>
                            </li>
                            <li> `; </li>
                        </div>


                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 조상 컴포넌트에서 하위 컴포넌트에 모두 적용하기 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> {" import { createGlobalStyle } from 'styled-components'; "} </li>
                            <li>  </li> <br />
                            <li> const 컴포넌트명 = createGlobalStyle`
                                <li> *{" {  "}
                                    <li> css스타일 코드 작성 </li>
                                </li>
                                <li> {" } "} </li>
                            </li>
                            <li> `; </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary>  </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                        <li>  </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> styled-components - React library </summary>
                    <div className='block2'>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {' import React from "react"; '} </li>
                                    <li> {' import styled from "styled-components"; '} </li>
                                    <li> {' import 컴포넌트 from "./경로"; '} </li> <br />
                                    <li> const App = (props) {'=> {'}
                                        <li> return(
                                            <li> {'<> '}
                                                <li>  {' <컴포넌트> </컴포넌트> '} </li>
                                            </li>
                                            <li> {'</> '} </li>
                                        </li>
                                        <li> ); </li>
                                    </li>
                                    <li> {'}'} </li> <br />
                                    <li> const 컴포넌트 = styled.태그`
                                        <li> width: 100%; </li>
                                        <li> height: 100%; </li>
                                        <li> color: {'${(props) => props.color || "red" }; '} </li>
                                        <small> props로 color값을 받아오면 받아온 색을 아니면 정해놓은 색을 사용 </small> <br />
                                        <li> {' ${(props) => props.color && css` '}
                                            <li> color: white; </li>
                                            <li> background: white; </li>
                                        </li>
                                        <li> {' `}`; '} </li>
                                    </li>
                                    <li> `; </li>
                                    <li> const 컴포넌트 = styled(컴포넌트)`
                                        <li> width: 100%; </li>
                                        <li> height: 100%; </li>
                                    </li>
                                    <li> `; </li>
                                    <li> styled.태그명`
                                        <li> width: 100%; </li>
                                        <li> height: 100%; </li>
                                    </li>
                                    <li> `; </li>
                                    <li> export default App; </li>
                                </div>
                            </div>
                        </li>
                    </div>
                </details>
            </div>
        </div>
    );
}

export default ReactStyledComponent;