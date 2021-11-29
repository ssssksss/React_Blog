import React from 'react';

const ReactClass = (props) => {

    'use strict';

    var a = React.createElement(
        "div",
        null,
        "Welcome to",
        React.createElement(
            "b",
            null,
            "React.js CodeLab"
        )
    );

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> React Class Components </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1. 클래스명은 대문자로 시작 </li>
                        <li> 2. React.Component로 상속받아야 한다. </li>
                        <li> 3. render()를 사용해서 렌더링을 해야한다. </li>
                        <li> 4. 컴포넌트를 사용하는 방법은 대문자로 시작하는 태그를 사용해야 한다. </li>
                        <li> 5. 컴포넌트를 사용하기 위해서는 꼭 1개의 태그로 코드를 감싸주어야 한다. </li>
                        <li>  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> React Class Component 기본 형태 </summary>
                    <div className='block2'>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> Class COMPONENT extends React.Component {'{'}
                                        <li> render() {' { '}
                                            <li> return (
                                                <li> {'<div>'}
                                                    <li> <small> # 이곳에 코드 작성 </small> </li>
                                                </li>
                                                <li> {'</div>'} </li>
                                            </li>
                                            <li> ); </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> React Class Component Props, defaultProps, propTypes </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> Props : 상위 컴포넌트에서 1단계 아래인 하위 컴포넌트에만 데이터를 넘겨줄 때 사용한다. </li>
                        <li> 만약에 어떤 컴포넌트에서 100번째 자식 컴포넌트에 Props를 보낸다고 한다면 미친짓일 것이다. 해결 방안으로는 Redux나 Recoil을 검색 </li>
                        <li> defaultProps : Props에 default 값을 설정할 수도 있다. </li>
                        <li> propTypes : Props에 default 값을 설정할 수도 있다. , 콘솔창에 경고가 발생한다. </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 상위 컴포넌트 </h3>
                                <div className='block4'>
                                    <li> Class PARENT_COMPONENT extends React.Component {'{'}
                                        <li> render() {' { '}
                                            <li> return (
                                                <li> {'<div>'}
                                                    <li> {' <Child name="children">  </Child> '} </li>
                                                </li>
                                                <li> {'</div>'} </li>
                                            </li>
                                            <li> ); </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li> <br />

                                    <li> <small> // default 값을 설정 </small> </li>
                                    <li> PARENT_COMPONENT.defaultProps = {'{'}
                                        <li> value: 123 </li>
                                    </li>
                                    <li> {'};'} </li> <br />

                                    <li> <small> // 데이터 타입을 설정 </small> </li>
                                    <li> PARENT_COMPONENT.propTypes = {'{'}
                                        <li> name: React.PropTypes.string, </li>
                                        <li> value : React.PropType.number </li>
                                        <li> @ : React.PropTypes.any.isRequired <small> # 어떤 타입이든 상관 없지만, 필수로 입력해야한다. </small> </li>
                                    </li>
                                    <li> {'};'} </li>
                                </div>
                                <h3 className='h3'> 🎈 하위 컴포넌트 </h3>
                                <div className='block4'>
                                    <li> Class CHILD_COMPONENT extends React.Component {'{'}
                                        <li> render() {' { '}
                                            <li> return (
                                                <li> {'<div>'}
                                                    <li> {' {this.props.name} '} <small> # children 출력  </small> </li>
                                                    <li> {' {this.props.value} '} <small> # 123 출력  </small> </li>
                                                </li>
                                                <li> {'</div>'} </li>
                                            </li>
                                            <li> ); </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> React Class Component State </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 값이 동적으로 변하는 데이터 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> Class COMPONENT extends React.Component {'{'}
                                        <li> constructor(props) {'{'}
                                            <li> <small> super(props)는 부모 생성자 메소드를 실행시키는 것이고
                                                , 실행을 시켜야 this.state를 사용할 수 있다. // TODO: 좀더 공부가 필요 </small> </li>
                                            <li> super(props); </li>
                                            <li> this.state = {'{'}
                                                <li> value: 0 </li>
                                            </li>
                                            <li> <small> .bind(this) 의미는 render()의 this와 같다는 의미 </small> </li>
                                            <li> this.btnClick = this.btnClick.bind(this); </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> btnClick() {'{'}
                                            <li> this.setState{'({'}
                                                <li> value: this.state.value + 1 </li>
                                            </li>
                                            <li> {'})'} </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> render() {' { '}
                                            <li> return (
                                                <li> {'<div>'}
                                                    <li> {' {this.state.value} '} <small> # 버튼을 누를때 마다 1씩 증가 </small> </li>
                                                    <li> {' <button onClick={this.btnClick}> 버튼 </button> '}   </li>
                                                </li>
                                                <li> {'</div>'} </li>
                                            </li>
                                            <li> ); </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li> <br />

                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>



        </div>
    );
}

export default ReactClass;