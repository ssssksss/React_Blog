import React from 'react';

const BootstrapBasic = (props) => {
    return (
        <div className="common_style">



        <div className='block1'>
            <details>
                <summary> 설치 </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 react에 설치방법 </h2>
                    <li> yarn add react-bootstrap bootstrap 혹은 npm install react-bootstrap bootstrap </li>
                    <li> import 'bootstrap/dist/css/bootstrap.css' 를 최상단 컴포넌트인 index.js에 추가를 해준다. </li>
                    <li> {' <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" '}
                        {' integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/> '}  </li>
                    <li> 위의 코드를 index.html 의 head 부분안에 넣어준다.  </li>

                    <h2 className='h2'> 📌 intellij gradle에서 사용 ( 기억이 잘 안나서 나중에 다시 사용할 때 추가하기) </h2>
                    <li> {' <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"> '}
                        head 태그 내부에 추가해주기 </li>

                    <h2 className='h2'> 📌 js 추가 </h2>
                    <li> {' <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" '}
                        {' integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" '}
                        {' crossorigin="anonymous"></script> '} </li>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li>  </li>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> CONTAINERS </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 1. 중앙 배치 </li>
                    <li> 2. 중단점에서 알아서 크기 변경 </li>
                    <li> 3. 인라인 속성 </li>
                    <table border="1" width="100%" style={{ background: "#ffffff" }}>
                        <colgroup>
                            <col />
                            <col style={{ background: "#eaeaea" }} />
                            <col />
                            <col style={{ background: "#eaeaea" }} />
                            <col />
                            <col style={{ background: "#eaeaea" }} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan="1">  </th>
                                <th colSpan="1"> {'<576px'} </th>
                                <th colSpan="1"> {'≥576px'} </th>
                                <th colSpan="1"> {'≥768px '} </th>
                                <th colSpan="1"> {'≥992px '} </th>
                                <th colSpan="1"> {'≥1200px '} </th>
                                <th colSpan="1"> {'≥1400px '} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>.container</td>
                                <td> <b> 100% </b></td>
                                <td>540px</td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-sm</td>
                                <td> <b> 100% </b></td>

                                <td>540px</td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-md</td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-lg</td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-xl</td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-xxl</td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td>.container-fluid</td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                                <td> <b> 100% </b></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> NAV </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> .nav <small> # nav 컨테이너 </small> </li>
                    <li> .nav nav-tabs <small> # nav 탭 컨테이너 </small> </li>
                    <li> .nav  nav-pills <small> # nav 탭 컨테이너 </small> </li>
                    <li> .nav  nav-pills  nav-fill <small> # nav 탭 컨테이너 </small> </li>
                    <li> .nav-itme  </li>
                    <li> .nav-link active <small> # 현재 요소 선택 </small> </li>
                    <li> .nav-link disabled <small> # 현재 요소 비활성화 </small> </li>

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

        <div className='block1'>
            <details>
                <summary> BORDER </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 border 방향 </h2>
                    <li> .border : 전체 방향 </li>
                    <li> .border-[top, end, bottom, start] : 상 우 하 좌  </li>

                    <h2 className='h2'> 📌 border 색깔 </h2>
                    <li> .border .border-[primary, secondary, success, danger, warning, info, light, dark, white] : 경계선의 색깔 선택</li>

                    <h2 className='h2'> 📌 border 두께 </h2>
                    <li> .border .border-[top, end, bottom, start]-[0~5] : 0이면 경계선을 제거 </li>

                    <h2 className='h2'> 📌 border radius </h2>
                    <li> .rounded-[0~3] </li>
                    <li> .rounded-[top, end, bottom, start, circle, pill] : 상 우 하 좌 원형 양쪽원형 </li>

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
                <summary> BREAKPOINTS - 반응형 </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 요소의 </li>
                    <li> sm : 576이상 </li>
                    <li> md : 768이상 </li>
                    <li> lg : 992이상 </li>
                    <li> xl : 1200이상 </li>
                    <li> xxl : 1400이상 </li>

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
                <summary> ACCORDION </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> .accordion <small> # 아코디언 컨테이너 </small> </li>
                    <li> .accordion-flush </li>
                    <li> .accordion-item </li>
                    <li> .accordion-header </li>
                    <li> .accordion-button </li>
                    <li> .accordion-body </li>
                    <li> .accordion-collapse collapse </li>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <div className='block4'>
                                <li> {' <div class="accordion" id="accordionExample"> '}
                                    <li> {' <div class="accordion-item"> '}
                                        <li> {' <h2> '}
                                            <li> {' <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-ex1" '}
                                                {' aria-expanded="true" aria-controls="collapse-ex1"> '} </li>
                                            <li> {' 아코디언 1번 '} </li>
                                            <li> {' </button> '} </li>
                                        </li>
                                        <li> {' </h2> '} </li>
                                        <li> {' <div id="collapse-ex1" class="accordion-collapse collapse" data-bs-parent="#accordionExample"> '}
                                            <li> {' <div class="accordion-body"> '}
                                                <li> {' 텍스트 '} </li>
                                            </li>
                                            <li> {' </div> '} </li>
                                        </li>
                                        <li> {' </div> '} </li>
                                    </li>
                                    <li> {' </div> '} </li>
                                </li>
                                <li> {' </div> '} </li>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> COLLAPSE </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> .collapse : 내용을 숨김 </li>
                    <li> .collapsing : 트랜지션 동안 적용? </li>

                    <h2 className='h2'> 📌 collapse a  </h2>
                    <li> data-bs-toggle="collapse" : </li>
                    <li> data-bs-target="#ID_NAME" </li>

                    <h2 className='h2'> 📌 collapse button  </h2>
                    <li> data-bs-toggle="collapse" </li>
                    <li> data-bs-target="#ID_NAME" </li>
                    <li> data-bs-target=".multi-collapse" <small> # 여러개의 요소를 한번에 닫을 때 클래스 사용 </small> </li>

                    <h2 className='h2'> 📌 collapse   </h2>
                    <li>  </li>

                    <h2 className='h2'> 📌 적용시킬 요소 </h2>
                    <li> .collapse </li>
                    <li> .collapse-horizontal <small> # 수평에서 나오게 하기 </small> </li>
                    <li> id="ID_NAME" </li>
                    <li> class="multi-collapse" <small> # 1개의 버튼으로 모두 닫을 요소 설정 </small> </li>
                    <li> .show : 내용을 처음에 보여주는 설정 </li>

                    <h2 className='h2'> 📌 collapse method </h2>
                    <li> toggle </li>
                    <li> show </li>
                    <li> hide </li>
                    <li> dispose </li>
                    <li> getInstance </li>
                    <li> getOrCreateInstance </li>

                    <h2 className='h2'> 📌 collapse event </h2>
                    <li> show.bs.collapse </li>
                    <li> shown.bs.collapse </li>
                    <li> hide.bs.collapse </li>
                    <li> hidden.bs.collapse </li>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <div className='block4'>
                                <li> {' <div> '}
                                    <li> {' <button data-bs-toggle="collapse" data-bs-target="#collapse-ex1"> 버튼1 </button> '} </li>
                                </li>
                                <li> {' </div> '} </li>
                                <li> {' <div> '}
                                    <li> {' <p class="collapse show" id="collapse-ex1"> 테스트1 </p> '} </li>
                                </li>
                                <li> {' </div> '} </li>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> align-items </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> .align-items-start : </li>
                    <li> .align-items-center : </li>
                    <li> .align-items-end :  </li>

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
                <summary> button </summary>
                <div className='block2'>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> bootstrap 버튼 예시
                        <div className='block3'>
                            <h3 className='h3'> 🎈 버튼 예시 </h3>
                            <li> {' <button type="button" class="btn btn-primary">Primary</button> '} </li>
                            <li> {' <button type="button" class="btn btn-secondary">Secondary</button> '} </li>
                            <li> {' <button type="button" class="btn btn-success">Success</button> '} </li>
                            <li> {' <button type="button" class="btn btn-danger">Danger</button> '} </li>
                            <li> {' <button type="button" class="btn btn-warning">Warning</button> '} </li>
                            <li> {' <button type="button" class="btn btn-info">Info</button> '} </li>
                            <li> {' <button type="button" class="btn btn-light">Light</button> '} </li>
                            <li> {' <button type="button" class="btn btn-dark">Dark</button> '} </li>
                            <li> {' <button type="button" class="btn btn-link">Link</button> '} </li> <br />

                            <div className="block4">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>
                                <button type="button" class="btn btn-link">Link</button>
                            </div> <br />
                            <li> {' <a class="btn btn-primary" href="#" role="button">Link</a> '} </li>
                            <li> {' <button class="btn btn-primary" type="submit">Button</button> '} </li>
                            <li> {' <input class="btn btn-primary" type="button" value="Input"> '} </li>
                            <li> {' <input class="btn btn-primary" type="submit" value="Submit"> '} </li>
                            <li> {' <input class="btn btn-primary" type="reset" value="Reset"> '} </li> <br />
                            <div className="block4">
                                <a class="btn btn-primary" href="#" role="button">Link</a>
                                <button class="btn btn-primary" type="submit">Button</button>
                                <input class="btn btn-primary" type="button" value="Input" />
                                <input class="btn btn-primary" type="submit" value="Submit" />
                                <input class="btn btn-primary" type="reset" value="Reset" />
                            </div> <br />

                            <li> {' <button type="button" class="btn btn-outline-primary">Primary</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-secondary">Secondary</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-success">Success</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-danger">Danger</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-warning">Warning</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-info">Info</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-light">Light</button> '} </li>
                            <li> {' <button type="button" class="btn btn-outline-dark">Dark</button> '} </li> <br />
                            <div className="block4">
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                                <button type="button" class="btn btn-outline-success">Success</button>
                                <button type="button" class="btn btn-outline-danger">Danger</button>
                                <button type="button" class="btn btn-outline-warning">Warning</button>
                                <button type="button" class="btn btn-outline-info">Info</button>
                                <button type="button" class="btn btn-outline-light">Light</button>
                                <button type="button" class="btn btn-outline-dark">Dark</button>
                            </div> <br />

                            <li> {' <button type="button" class="btn btn-primary btn-lg">Large button</button> '} </li>
                            <li> {' <button type="button" class="btn btn-secondary btn-lg">Large button</button> '} </li>
                            <li> {' <button type="button" class="btn btn-primary btn-sm">Small button</button> '} </li>
                            <li> {' <button type="button" class="btn btn-secondary btn-sm">Small button</button> '} </li>
                            <li> {' <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button> '} </li>
                            <li> {' <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button> '} </li>
                            <li> {' <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a> '} </li>
                            <li> {' <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a> '} </li> <br />
                            <div className="block4">
                                <button type="button" class="btn btn-primary btn-lg">Large button</button>
                                <button type="button" class="btn btn-secondary btn-lg">Large button</button>
                                <button type="button" class="btn btn-primary btn-sm">Small button</button>
                                <button type="button" class="btn btn-secondary btn-sm">Small button</button>
                                <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
                                <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
                                <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
                                <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                            </div> <br />
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> Form </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 1 </li>
                    <li> 2 </li>
                    <li> 3 </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li> {' <div class="mb-1"> '}
                                <li> {'  <label for="exampleFormControlInput1" class="form-label">Email address</label> '} </li>
                                <li> {'  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="default" /> <br /> '} </li>
                                <li> {'  <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="large" /> <br /> '} </li>
                                <li> {'  <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="small" /> '} </li>
                            </li>
                            <li> {' </div> '} </li>
                            <div className="block4">
                                <div class="mb-1">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="default" /> <br />
                                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="large" /> <br />
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="small" />
                                </div>
                            </div>
                            <li> {'<div class="mb-3 row"> '}
                                <li> {'<label for="staticEmail" class="col-sm-2 col-form-label">Email</label> '} </li>
                                <li> {'<div class="col-sm-10"> '}
                                    <li> {'<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" /> '} </li>
                                </li>
                                <li> {'</div> '} </li>
                            </li>
                            <li> {'</div> '} </li>
                            <div className="block4">
                                <div class="mb-3 row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                    </div>
                                </div>
                            </div>
                            <li> {'  <div class="mb-3 row"> '}
                                <li> {'<label for="inputPassword" class="col-sm-2 col-form-label">Password</label> '} </li>
                                <li> {'<div class="col-sm-10"> '}
                                    <li> {' <input type="password" class="form-control" id="inputPassword" /> '} </li>
                                </li>
                                <li> {'</div> '} </li>
                            </li>
                            <li> {'  </div> '} </li>
                            <div className="block4">
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> Margin, Padding, Spacing </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 중심으로 배치되는 것은 block 요소일 때만 가능한것 같다 </li>

                    <h2 className='h2'> 📌 속성 </h2>
                    <li> @의 범위는 0~5 </li>
                    <li> class="m-@" <small> # margin: @px </small> </li>
                    <li> class="p-@" <small> # padding: @px </small> </li> <br />
                    <li> class="mt-@ mb-@ ms-@ me-@" <small> # margin-[top,bottom,left,right]: @px </small> </li>
                    <li> class="pt-@ pb-@ ps-@ pe-@" <small> # padding-[top,bottom,left,right]: @px </small> </li> <br />
                    <li> class="mx-auto mx-@" <small> #margin-[left and right]: @px  </small> </li>
                    <li> class="px-auto px-@" <small> #padding-[left and right]: @px  </small> </li> <br />
                    <li> class="my-auto my-@" <small> #margin-[top and bottom]: @px  </small> </li>
                    <li> class="py-auto py-@" <small> #padding-[top and bottom]: @px  </small> </li> <br />

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li>  </li>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary>  width, height </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 속성 </h2>
                    <li> class="width: 25%" , class="w-25", class="w-auto", style="width: 100px" </li>
                    <li> class="height: 25%", class="h-25", class="h-auto", style="height: 100px"  </li>
                    <li> class="mw-100 mh-100 min-vw-100 min-vh-100 vw-100 vh-100" <small> # 너비 높이 최대 최소 길이 지정 </small> </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li> {' <div className="block4"> '} </li>
                            <li> {'     <div class="w-25 p-1" style={{ backgroundColor: "#f00" }}>class="w-25 p-1"</div> '} </li>
                            <li> {'     <div class="w-50 p-1" style={{ backgroundColor: "#f00" }}>class="w-50 p-1"</div> '} </li>
                            <li> {'     <div class="w-75 p-1" style={{ backgroundColor: "#f00" }}>class="w-75 p-1"</div> '} </li>
                            <li> {'     <div class="w-100 p-1" style={{ backgroundColor: "#f00" }}>class="w-100 p-1"</div> '} </li>
                            <li> {'     <div class="w-auto p-1" style={{ backgroundColor: "#f00" }}>class="w-auto p-1"</div> '} </li>
                            <li> {' </div> '} </li>
                            <div className="block4">
                                <div class="w-25 p-1" style={{ backgroundColor: "#f00" }}>class="w-25 p-1"</div>
                                <div class="w-50 p-1" style={{ backgroundColor: "#f00" }}>class="w-50 p-1"</div>
                                <div class="w-75 p-1" style={{ backgroundColor: "#f00" }}>class="w-75 p-1"</div>
                                <div class="w-100 p-1" style={{ backgroundColor: "#f00" }}>class="w-100 p-1"</div>
                                <div class="w-auto p-1" style={{ backgroundColor: "#f00" }}>class="w-auto p-1"</div>
                            </div>
                            <li> {' <div style={{ height: "300px" }}> '} </li>
                            <li> {'     <div class="h-25 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-25"</div> '} </li>
                            <li> {'     <div class="h-50 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-50"</div> '} </li>
                            <li> {'     <div class="h-75 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-75"</div> '} </li>
                            <li> {'     <div class="h-100 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-100"</div> '} </li>
                            <li> {'     <div class="h-auto d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="auto"</div> '} </li>
                            <li> {' </div> '} </li>
                            <div className="block4">
                                <div style={{ height: "300px" }}>
                                    <div class="h-25 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-25"</div>
                                    <div class="h-50 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-50"</div>
                                    <div class="h-75 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-75"</div>
                                    <div class="h-100 d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="h-100"</div>
                                    <div class="h-auto d-inline-block width: 100px" style={{ backgroundColor: "#f00" }}>class="auto"</div>
                                </div>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> row, col 배치 </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 속성 </h2>
                    <li> col은 12칸을 기준으로 한다. </li>
                    <li> .row-@ <small> # 행으로 분할(세로배치) </small> </li>
                    <li> .col-@ <small> # 열로 분할(가로배치) </small> </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li>  </li>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> DISPLAY </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 속성 </h2>
                    <li> .d-inline-block </li>
                    <li> .d-block </li>
                    <li> .d-inline </li>
                    <li> .d-[BREAKPOINT]-[VALUE] </li>

                    <h2 className='h2'> 📌 display hidden </h2>
                    <li> .d-none <small> # all 숨김 </small> </li>
                    <li> .d-sm-block  <small> # xs이상에서 숨김 </small> </li>
                    <li> .d-md-block  <small> # sm이상에서 숨김 </small> </li>
                    <li> .d-lg-block  <small> # md이상에서 숨김 </small> </li>
                    <li> .d-xl-block  <small> # lg이상에서 숨김 </small> </li>
                    <li> .d-xxl-block <small> # xl이상에서 숨김 </small> </li>

                    <h2 className='h2'> 📌 display only hidden </h2>
                    <li> .d-none <small> # all에서만 숨김 </small> </li>
                    <li> .d-none .d-sm-block     <small> # xs에서만 숨김 </small> </li>
                    <li> .d-sm-none .d-md-block  <small> # sm에서만 숨김 </small> </li>
                    <li> .d-md-none .d-lg-block  <small> # md에서만 숨김 </small> </li>
                    <li> .d-lg-none .d-xl-block  <small> # lg에서만 숨김 </small> </li>
                    <li> .d-xl-none .d-xxl-block <small> # xl에서만 숨김 </small> </li>
                    <li> .d-xxl-none <small> # xxl에서 숨김 </small> </li>

                    <h2 className='h2'> 📌 display only visible </h2>
                    <li> .d-block <small> # all 보임 </small> </li>
                    <li> .d-block .d-sm-none <small> # xs에서만 보임 </small> </li>
                    <li> .d-none .d-sm-block .d-md-none <small> # sm에서만 보임 </small> </li>
                    <li> .d-none .d-md-block .d-lg-none <small> # md에서만 보임 </small> </li>
                    <li> .d-none .d-lg-block .d-xl-none <small> # lg에서만 보임 </small> </li>
                    <li> .d-none .d-xl-block .d-xxl-none <small> # xl에서만 보임 </small> </li>
                    <li> .d-none .d-xxl-block <small> # xxl에서만 보임 </small> </li>

                    <h2 className='h2'> 📌  </h2>
                    <li>  </li>

                    <h2 className='h2'> 📌  </h2>
                    <li>  </li>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li>  </li>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> color </summary>
                <div className='block2'>

                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li> 1{' <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div> '} </li>
                            <li> 2{' <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div> '} </li>
                            <li> 3{' <div class="p-3 mb-2 bg-success text-white">.bg-success</div> '} </li>
                            <li> 4{' <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div> '} </li>
                            <li> 5{' <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div> '} </li>
                            <li> 6{' <div class="p-3 mb-2 bg-info text-white">.bg-info</div> '} </li>
                            <li> 7{' <div class="p-3 mb-2 bg-light text-dark">.bg-light</div> '} </li>
                            <li> 8{' <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div> '} </li>
                            <li> 9{' <div class="p-3 mb-2 bg-white text-dark">.bg-white</div> '} </li> <br />
                            <div className="block4">
                                <div class="p-1 mb-2 bg-primary text-white">1 .bg-primary</div>
                                <div class="p-1 mb-2 bg-secondary text-white">2 .bg-secondary</div>
                                <div class="p-1 mb-2 bg-success text-white">3 .bg-success</div>
                                <div class="p-1 mb-2 bg-danger text-white">4 .bg-danger</div>
                                <div class="p-1 mb-2 bg-warning text-dark">5 .bg-warning</div>
                                <div class="p-1 mb-2 bg-info text-white">6 .bg-info</div>
                                <div class="p-1 mb-2 bg-light text-dark">7 .bg-light</div>
                                <div class="p-1 mb-2 bg-dark text-white">8 .bg-dark</div>
                                <div class="p-1 mb-2 bg-white text-dark">9 .bg-white</div>
                            </div> <br />

                            <li>
                                <li> 1{' <p class="text-primary">.text-primary</p> '} </li>
                                <li> 2{' <p class="text-secondary">.text-secondary</p> '} </li>
                                <li> 3{' <p class="text-success">.text-success</p> '} </li>
                                <li> 4{' <p class="text-danger">.text-danger</p> '} </li>
                                <li> 5{' <p class="text-warning bg-dark">.text-warning</p> '} </li>
                                <li> 6{' <p class="text-info bg-dark">.text-info</p> '} </li>
                                <li> 7{' <p class="text-light bg-dark">.text-light</p> '} </li>
                                <li> 8{' <p class="text-dark">.text-dark</p> '} </li>
                                <li> 9{' <p class="text-body">.text-body</p> '} </li>
                                <li> 10{' <p class="text-muted">.text-muted</p> '} </li>
                                <li> 11{' <p class="text-white bg-dark">.text-white</p> '} </li>
                                <li> 12{' <p class="text-black-50">.text-black-50</p> '} </li>
                                <li> 13{' <p class="text-white-50 bg-dark">.text-white-50</p> '} </li>
                            </li> <br />
                            <div className="block4">
                                <li class="text-primary">1 .text-primary</li>
                                <li class="text-secondary">2 .text-secondary</li>
                                <li class="text-success">3 .text-success</li>
                                <li class="text-danger">4 .text-danger</li>
                                <li class="text-warning bg-dark">5 .text-warning</li>
                                <li class="text-info bg-dark">6 .text-info</li>
                                <li class="text-light bg-dark">7.text-light</li>
                                <li class="text-dark">8 .text-dark</li>
                                <li class="text-body">9 .text-body</li>
                                <li class="text-muted">10 .text-muted</li>
                                <li class="text-white bg-dark">11 .text-white</li>
                                <li class="text-black-50">12 .text-black-50</li>
                                <li class="text-white-50 bg-dark">13 .text-white-50</li>
                            </div> <br />
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> FLEX </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>


                    <h2 className='h2'> 📌 flex display 설정 </h2>
                    <div className="block4">
                        <li> .d-[sm,md,lg,xl,xxl]-flex <small> # flex block 컨테이너 설정 </small> </li>
                        <li> .d-[sm,md,lg,xl,xxl]-inline-flex <small> # flex inline 컨테이너 설정 </small> </li>
                    </div>


                    <h2 className='h2'> 📌 flex-direction(정렬 배치 방식) </h2>
                    <div className="block4">
                        <li> flex-[sm,md,lg,xl,xxl]-row <small> # 가로줄로 배치(default) </small> </li>
                        <li> flex-[sm,md,lg,xl,xxl]-column <small> # 세로줄로 배치 </small> </li>
                        <li> flex-[sm,md,lg,xl,xxl]-row-reverse <small> # 가로줄 역순으로 배치 </small> </li>
                        <li> flex-[sm,md,lg,xl,xxl]-column-reverse <small> # 세로줄 역순으로 배치 </small> </li>
                    </div>

                    <h2 className='h2'> 📌 justify-content (1줄에서의 요소끼리의 간격) </h2>
                    <div className="block4">
                        <li> flex-line을 기준으로 아이템을 정렬, flex-direction으로 세로줄로 변경되면 세로줄을 기준으로 배치 </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-start <small> #요소를 앞쪽에서부터 배치 </small> </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-end <small> #요소를 뒤쪽에서부터 배치 </small> </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-center <small> #요소를 중간에서부터 배치 </small> </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-between <small> # 양끝에 간격없이, 동일간격 </small> </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-around <small> # 양끝에 간격있고, 동일간격 </small> </li>
                        <li> .justify-content-[sm,md,lg,xl,xxl]-evenly <small> # 양끝에서 부터 모든 간격 동일 </small> </li>
                    </div>

                    <h2 className='h2'> 📌 align-items (세로 1줄에서의 요소끼리의 간격) </h2>
                    <div className="block4">
                        <li> .align-items-[sm,md,lg,xl,xxl]-center <small> #요소를 가운데에서부터 배치 </small> </li>
                        <li> .align-items-[sm,md,lg,xl,xxl]-start <small> #요소를 위쪽에서부터 배치 </small>  </li>
                        <li> .align-items-[sm,md,lg,xl,xxl]-end  <small> #요소를 아래쪽에서부터 배치 </small>  </li>
                        <li> .align-items-[sm,md,lg,xl,xxl]-baseline <small> #요소를 컨테이너의 기준선(글자기준)에 배치 </small> </li>
                        <li> .align-items-[sm,md,lg,xl,xxl]-stretch <small> #기본값, 컨테이너와 높이가 같게 변경뒤 배치 </small></li>
                    </div>

                    <h2 className='h2'> 📌 align-self (개별 align-items 설정) </h2>
                    <div className="block4">
                        <li> 플렉스 요소에서 설정 , align-items보다 우선 순위 </li>
                        <li> .align-self-[sm,md,lg,xl,xxl]-center <small> #  </small> </li>
                        <li> .align-self-[sm,md,lg,xl,xxl]-flex-start <small> #  </small> </li>
                        <li> .align-self-[sm,md,lg,xl,xxl]-flex-end <small> #  </small>  </li>
                        <li> .align-self-[sm,md,lg,xl,xxl]-baseline <small> #  </small>  </li>
                        <li> .align-self-[sm,md,lg,xl,xxl]-stretch <small> # default </small>  </li>
                    </div>

                    <h2 className='h2'> 📌 flex-fill </h2>
                    <div className="block4">
                        <li> 사용 가능한 공간을 모두 차지하면서 컨테츠와 동일한 너비로 만든다고 하는데 잘 모르겠다. </li>
                        <li> .flex-[sm,md,lg,xl,xxl]-fill <small> #  </small> </li>
                    </div>

                    <h2 className='h2'> 📌 align-content (줄 끼리의 간격) </h2>
                    <div className="block4">
                        <li> flex박스나 grid에서 사용하는 배치 방법 , F,G의 줄끼리의 간격을 설정  </li>
                        <li> 1줄만 있으면 소용이 없음, flex-wrap: nowrap과 사용하면 무의미  </li>
                        <li> align-content-[sm,md,lg,xl,xxl]-start; <small> # 여러줄을 앞쪽에 붙여서 정렬 </small>  </li>
                        <li> align-content-[sm,md,lg,xl,xxl]-end;  <small> # 여러줄을 뒤쪽에 붙여서 정렬 </small></li>
                        <li> align-content-[sm,md,lg,xl,xxl]-center; <small> # 여러줄을 가운데에 붙여서 정렬 </small></li>
                        <li> align-content-[sm,md,lg,xl,xxl]-between; <small> # 양끝에 간격없이, 동일간격 </small>  </li>
                        <li> align-content-[sm,md,lg,xl,xxl]-around; <small> # 양끝에 간격있고, 동일간격 </small>  </li>
                        <li> align-content-[sm,md,lg,xl,xxl]-evenly; <small> # 양끝에서 부터 모든 간격 동일 </small>  </li>
                        <li> align-content-[sm,md,lg,xl,xxl]-stretch; <small> # 컨테이너 전체를 n등분하여 배치 </small>  </li>
                    </div>

                    <h2 className='h2'> 📌 flex-wrap (정렬 라인 배치 설정) </h2>
                    <div className="block4">
                        <li> flex-[sm,md,lg,xl,xxl]-nowrap <small> # default, 1줄배치 </small> </li>
                        <li> flex-[sm,md,lg,xl,xxl]-wrap <small> # 여러 줄배치 </small> </li>
                        <li> flex-[sm,md,lg,xl,xxl]-reverse; <small> # 요소의 시작점과 끝점의 기준이 반대로 배치 , 좌측아래를 기준으로 배치되고
                            행이 넘어가면 위로 배치 </small> </li>
                    </div>

                    <h2 className='h2'> 📌 flex-grow, flex-shrink </h2>
                    <div className="block4">
                        <li> .flex-[sm,md,lg,xl,xxl]-grow-[0,1] <small> # 플렉스 요소 확장비율 </small> </li>
                        <li> .flex-[sm,md,lg,xl,xxl]-shrink-[0,1] <small> # 플렉스 요소 축소비율 </small> </li>
                    </div>


                    <h2 className='h2'> 📌 order </h2>
                    <div className="block4">
                        <li> .order-[sm,md,lg,xl,xxl]-[0~5] </li>
                        <li> .order-[sm,md,lg,xl,xxl]-first </li>
                        <li> .order-[sm,md,lg,xl,xxl]-last </li>
                    </div>
                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> flex </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 속성 </h2>
                    <li> justify-content-[[],sm,md,lg,xl,xxl]-[start,end,center,between,around,evenly] <small>  </small> </li>
                    <li> align-items-[start,end,center,baseline,stretch] <small>  </small> </li>
                    <li> align-self-[[],sm,md,lg,xl,xxl]-[start,end,center,baseline,stretch] <small>  </small> </li>
                    <li> flex-[grow,shrink]-[0,1] <small>  </small> </li>
                    <li> me-auto<small> # me-auto는 첫번째 요소에 선언하고 선언한 요소를 왼쪽에 놓고 나머지는 오른쪽으로 보냄 </small> </li>
                    <li> ms-auto<small> # ms-auto는 마지막 요소에 선언하고 선언한 요소를 우측에 놓고 나머지는 왼쪽으로 보냄 </small> </li>
                    <li> mb-auto<small> # mb-auto는 제일 윗 요소에 선언하고 선언한 요소를 위에 놓고 나머지는 아래쪽으로 보냄 </small> </li>
                    <li> mt-auto<small> # mt-auto는 제일 아랫 요소에 선언하고 선언한 요소를 아래에 놓고 나머지는 위쪽으로 보냄 </small> </li>
                    <li> flex-[[],sm,md,lg,xl,xxl]-[nowrap,-wrap,wrap-reverse] <small> # </small> </li>
                    <li> order-[[],sm,md,lg,xl,xxl]-[first,0,1,2,3,4,5,last] <small> # 순서 변경 </small> </li>
                    <li> align-content-[[],sm,md,lg,xl,xxl]-[start,end,center,around,stretch] <small> # 내용 정렬 </small> </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li> {'  <div class="d-flex bd-highlight mb-3"> '}
                                <li> {' <div class="me-auto p-2 bd-highlight">Flex item<2/div> '} </li>
                                <li> {' <div class="p-2 bd-highlight">Flex item3</div> '} </li>
                                <li> {' <div class="p-2 bd-highlight">Flex item4</div> '} </li>
                            </li>
                            <li> {'  </div> '} </li>

                            <li> {'  <div class="d-flex bd-highlight mb-3"> '}
                                <li> {'<div class="p-2 bd-highlight">Flex item1</div> '} </li>
                                <li> {'<div class="p-2 bd-highlight">Flex item2</div> '} </li>
                                <li> {'<div class="ms-auto p-2 bd-highlight">Flex item3</div> '} </li>
                            </li>
                            <li> {'  </div> '} </li> <br />
                            <div className="block4">

                                <div class="d-flex bd-highlight mb-3">
                                    <div class="me-auto p-2 bd-highlight">Flex item2</div>
                                    <div class="p-2 bd-highlight">Flex item3</div>
                                    <div class="p-2 bd-highlight">Flex item4</div>
                                </div>

                                <div class="d-flex bd-highlight mb-3">
                                    <div class="p-2 bd-highlight">Flex item1</div>
                                    <div class="p-2 bd-highlight">Flex item2</div>
                                    <div class="ms-auto p-2 bd-highlight">Flex item3</div>
                                </div>
                            </div>

                            <li> {'  <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{ height: "150px" }}> '}
                                <li> {' <div class="mb-auto p-2 bd-highlight">Flex item1</div> '} </li>
                                <li> {' <div class="p-2 bd-highlight">Flex item2</div> '} </li>
                                <li> {' <div class="p-2 bd-highlight">Flex item3</div> '} </li>
                            </li>
                            <li> {'  </div> '} </li>
                            <li> {'  '} </li>
                            <li> {'  <div class="d-flex align-items-end flex-column bd-highlight mb-3" style={{ height: "150px" }}> '}
                                <li> {' <div class="p-2 bd-highlight">Flex item4</div> '} </li>
                                <li> {' <div class="p-2 bd-highlight">Flex item5</div> '} </li>
                                <li> {' <div class="mt-auto p-2 bd-highlight">Flex item6</div> '} </li>
                            </li>
                            <li> {'  </div> '} </li> <br />

                            <div className="block4">
                                <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{ height: "150px" }}>
                                    <div class="mb-auto p-2 bd-highlight">Flex item1</div>
                                    <div class="p-2 bd-highlight">Flex item2</div>
                                    <div class="p-2 bd-highlight">Flex item3</div>
                                </div>

                                <div class="d-flex align-items-end flex-column bd-highlight mb-3" style={{ height: "150px" }}>
                                    <div class="p-2 bd-highlight">Flex item4</div>
                                    <div class="p-2 bd-highlight">Flex item5</div>
                                    <div class="mt-auto p-2 bd-highlight">Flex item6</div>
                                </div>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> position </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> position-[static,relative,absolute,fixed,sticky] </li>
                    <li> [top,start,bottom,end]-[0,50,100] <small> # top,left,bottom,right </small> </li>
                    <li> translate-middle-[x,y] <small> # absolute에서 요소에 translate X,Y 50%를 준다 </small> </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 </h3>
                            <li> {'<div class="position-relative" style={{ height: "300px" }}> '}
                                <li> {'    <div class="position-absolute top-0 start-0">1</div> '} </li>
                                <li> {'    <div class="position-absolute top-0 end-0">2</div> '} </li>
                                <li> {'    <div class="position-absolute top-50 start-50">3</div> '} </li>
                                <li> {'    <div class="position-absolute bottom-50 end-50">4</div> '} </li>
                                <li> {'    <div class="position-absolute bottom-0 start-0">5</div> '} </li>
                                <li> {'    <div class="position-absolute bottom-0 end-0">6</div> '} </li>
                            </li>
                            <li> {'</div> '} </li> <br />
                            <div className="block4">
                                <div class="position-relative" style={{ height: "300px" }}>
                                    <div class="position-absolute top-0 start-0">1</div>
                                    <div class="position-absolute top-0 end-0">2</div>
                                    <div class="position-absolute top-50 start-50">3</div>
                                    <div class="position-absolute bottom-50 end-50">4</div>
                                    <div class="position-absolute bottom-0 start-0">5</div>
                                    <div class="position-absolute bottom-0 end-0">6</div>
                                </div>
                            </div>
                            <li> {' <button type="button" class="btn btn-primary position-relative mx-5"> '}
                                <li> {'     Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span> '} </li>
                            </li>
                            <li> {' </button> '} </li> <br />
                            <li> {' <button type="button" class="btn btn-dark position-relative  mx-5"> '}
                                <li> {'     Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg> '} </li>
                            </li>
                            <li> {' </button> '} </li> <br />
                            <li> {' <button type="button" class="btn btn-primary position-relative mx-5"> '}
                                <li> {'     Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span> '} </li>
                            </li>
                            <li> {' </button> '} </li> <br />
                            <li>  </li> <br />
                            <div className="block4">
                                <button type="button" class="btn btn-primary position-relative mx-5">
                                    Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
                                </button>

                                <button type="button" class="btn btn-dark position-relative  mx-5">
                                    Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>
                                </button>

                                <button type="button" class="btn btn-primary position-relative mx-5">
                                    Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                                </button>
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

        <div className='block1'>
            <details>
                <summary> progress , 막대 진행바 </summary>
                <div className='block2'>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 1. {' class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" '} </li>
                    <li> 2.  class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" </li>
                    <li> 3. {' class="progress" style={{ height: "30px" }} '} <small> # 막대 진행바의 높이는 이와 같이 사용하면 된다. </small>  </li> <br />
                    <li> 4. 막대바에 색깔 넣는 방법 </li>
                    <div className="block4" style={{ listStyle: "none" }}>
                        <li> {' <div class="progress-bar w-25 bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                        <li> {' <div class="progress-bar w-25 bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                        <li> {' <div class="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                    </div>
                    <li> 5. class="progress-bar progress-bar-striped w-25 bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" </li>
                    <li> 6. class="progress-bar progress-bar-striped progress-bar-animated w-75" </li>


                    <h2 className='h2'> ✔ 예시 </h2>
                    <li> 소제목
                        <div className='block3'>
                            <h3 className='h3'> 🎈 react 기준이므로 style은 바꾸어야 한다. </h3>
                            <li> {' <div class="progress"> '}
                                <li> {'   <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 2</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1 2</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">1 2</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">1 2</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 2</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress" style={{ height: "30px" }}> '}
                                <li> {'   <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">3</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar w-25 bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div> '} </li>
                                <li> {'   <div class="progress-bar w-25 bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div> '} </li>
                                <li> {'   <div class="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar progress-bar-striped w-25 bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">5</div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <li> {'     <div class="progress"> '}
                                <li> {'   <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> 6 </div> '} </li>
                            </li>
                            <li> {'     </div> <br /> '} </li>
                            <div className="block4">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 2</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1 2</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">1 2</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">1 2</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 2</div>
                                </div> <br />
                                <div class="progress" style={{ height: "30px" }}>
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">3</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar w-25 bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div>
                                    <div class="progress-bar w-25 bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div>
                                    <div class="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped w-25 bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">5</div>
                                </div> <br />
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> 6 </div>
                                </div> <br />
                            </div>
                        </div>
                    </li>

                </div>
            </details>
        </div>

    </div>
    );
}

export default BootstrapBasic;