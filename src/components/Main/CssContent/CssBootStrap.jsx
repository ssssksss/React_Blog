import React from 'react';
//import { Button } from 'react-bootstrap';

const CssBootStrap = (props) => {


    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 설치
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> react bootstrap </div>
                                <div className='mblock'>
                                    <li> yarn add react-bootstrap bootstrap 혹은 npm install react-bootstrap bootstrap </li>
                                    <li> import 'bootstrap/dist/css/bootstrap.css' 를 최상단 컴포넌트인 index.js에 추가를 해준다. </li>
                                    <li> {' <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" '}  </li>
                                    <li> {' integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/> '}  </li>
                                    <li> 위의 2줄 내용을 index.html 의 head 부분안에 넣어준다.  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> button
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 버튼 </div>
                                <div className="mblock">
                                    <li> {' <button type="button" class="btn btn-primary">Primary</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-secondary">Secondary</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-success">Success</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-danger">Danger</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-warning">Warning</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-info">Info</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-light">Light</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-dark">Dark</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-link">Link</button> '} </li> <br />

                                    <li>
                                        <button type="button" class="btn btn-primary">Primary</button>
                                        <button type="button" class="btn btn-secondary">Secondary</button>
                                        <button type="button" class="btn btn-success">Success</button>
                                        <button type="button" class="btn btn-danger">Danger</button>
                                        <button type="button" class="btn btn-warning">Warning</button>
                                        <button type="button" class="btn btn-info">Info</button>
                                        <button type="button" class="btn btn-light">Light</button>
                                        <button type="button" class="btn btn-dark">Dark</button>
                                        <button type="button" class="btn btn-link">Link</button>
                                    </li> <br />
                                    <li> {' <a class="btn btn-primary" href="#" role="button">Link</a> '} </li>
                                    <li> {' <button class="btn btn-primary" type="submit">Button</button> '} </li>
                                    <li> {' <input class="btn btn-primary" type="button" value="Input"> '} </li>
                                    <li> {' <input class="btn btn-primary" type="submit" value="Submit"> '} </li>
                                    <li> {' <input class="btn btn-primary" type="reset" value="Reset"> '} </li> <br />
                                    <li>
                                        <a class="btn btn-primary" href="#" role="button">Link</a>
                                        <button class="btn btn-primary" type="submit">Button</button>
                                        <input class="btn btn-primary" type="button" value="Input" />
                                        <input class="btn btn-primary" type="submit" value="Submit" />
                                        <input class="btn btn-primary" type="reset" value="Reset" />
                                    </li> <br />

                                    <li> {' <button type="button" class="btn btn-outline-primary">Primary</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-secondary">Secondary</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-success">Success</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-danger">Danger</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-warning">Warning</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-info">Info</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-light">Light</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-outline-dark">Dark</button> '} </li> <br />
                                    <li>
                                        <button type="button" class="btn btn-outline-primary">Primary</button>
                                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                                        <button type="button" class="btn btn-outline-success">Success</button>
                                        <button type="button" class="btn btn-outline-danger">Danger</button>
                                        <button type="button" class="btn btn-outline-warning">Warning</button>
                                        <button type="button" class="btn btn-outline-info">Info</button>
                                        <button type="button" class="btn btn-outline-light">Light</button>
                                        <button type="button" class="btn btn-outline-dark">Dark</button>
                                    </li> <br />

                                    <li> {' <button type="button" class="btn btn-primary btn-lg">Large button</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-secondary btn-lg">Large button</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-primary btn-sm">Small button</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-secondary btn-sm">Small button</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button> '} </li>
                                    <li> {' <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button> '} </li>
                                    <li> {' <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a> '} </li>
                                    <li> {' <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a> '} </li> <br />
                                    <li>
                                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                                        <button type="button" class="btn btn-secondary btn-lg">Large button</button>
                                        <button type="button" class="btn btn-primary btn-sm">Small button</button>
                                        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
                                        <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
                                        <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
                                        <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
                                        <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                                    </li> <br />
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Form
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>
                                        <div class="mb-1">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="default" /> <br />
                                            <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="large" /> <br />
                                            <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="small" />
                                        </div>
                                    </li> <br />
                                    <li>
                                        <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="inputPassword" />
                                            </div>
                                        </div>
                                    </li> <br />
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Margin , Padding, Spacing
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> margin padding spacing </div>
                                <div className='mblock'>
                                    <li> <small> 중심으로 배치되는 것은 block 요소일 떄만 가능한것 같다 </small> </li>
                                    <li> @의 범위는 0~5 </li>
                                    <li> class="m-@" <small> # margin: @px </small> </li>
                                    <li> class="p-@" <small> # padding: @px </small> </li> <br />
                                    <li> class="mt-@ mb-@ ms-@ me-@" <small> # margin-[top,bottom,left,right]: @px </small> </li>
                                    <li> class="pt-@ pb-@ ps-@ pe-@" <small> # padding-[top,bottom,left,right]: @px </small> </li> <br />
                                    <li> class="mx-auto mx-@" <small> #margin-[left and right]: @px  </small> </li>
                                    <li> class="px-auto px-@" <small> #padding-[left and right]: @px  </small> </li> <br />
                                    <li> class="my-auto my-@" <small> #margin-[top and bottom]: @px  </small> </li>
                                    <li> class="py-auto py-@" <small> #padding-[top and bottom]: @px  </small> </li> <br />
                                    <li> <small> # </small> </li>
                                    <li> <small> # </small> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> width, height
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> width, height </div>
                                <div className='mblock'>
                                    <li> class="width: 25%" , class="w-25", class="w-auto", style="width: 100px" </li>
                                    <li> class="height: 25%", class="h-25", class="h-auto", style="height: 100px"  </li>
                                    <li> class="mw-100 mh-100 min-vw-100 min-vh-100 vw-100 vh-100" <small> # 너비 높이 최대 최소 길이 지정 </small> </li>
                                    <li>  </li> <br />
                                    <li>
                                        <div class="w-25 p-1" style={{ backgroundColor: '#eee' }}>class="w-25 p-1"</div>
                                        <div class="w-50 p-1" style={{ backgroundColor: '#eee' }}>class="w-50 p-1"</div>
                                        <div class="w-75 p-1" style={{ backgroundColor: '#eee' }}>class="w-75 p-1"</div>
                                        <div class="w-100 p-1" style={{ backgroundColor: '#eee' }}>class="w-100 p-1"</div>
                                        <div class="w-auto p-1" style={{ backgroundColor: '#eee' }}>class="w-auto p-1"</div>
                                    </li> <br />
                                    <li>
                                        <div style={{ height: '300px' }}>
                                            <div class="h-25 d-inline-block width: 100px" style={{ backgroundColor: '#eee' }}>class="h-25"</div>
                                            <div class="h-50 d-inline-block width: 100px" style={{ backgroundColor: '#eee' }}>class="h-50"</div>
                                            <div class="h-75 d-inline-block width: 100px" style={{ backgroundColor: '#eee' }}>class="h-75"</div>
                                            <div class="h-100 d-inline-block width: 100px" style={{ backgroundColor: '#eee' }}>class="h-100"</div>
                                            <div class="h-auto d-inline-block width: 100px" style={{ backgroundColor: '#eee' }}>class="auto"</div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> row, col 배치
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> class="row" <small> # 행으로 분할(세로배치) </small> </li>
                                    <li> class="col" <small> # 열로 분할(가로배치) </small> </li>
                                    <li>  </li> <br />
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> display
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> class="d-inline-block" </li>
                                    <li> class="d-block" </li>
                                    <li> class="d-inline" </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> color
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> background-color, text-color </div>
                                <div className='mblock'>
                                    <li> 1{' <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div> '} </li>
                                    <li> 2{' <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div> '} </li>
                                    <li> 3{' <div class="p-3 mb-2 bg-success text-white">.bg-success</div> '} </li>
                                    <li> 4{' <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div> '} </li>
                                    <li> 5{' <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div> '} </li>
                                    <li> 6{' <div class="p-3 mb-2 bg-info text-white">.bg-info</div> '} </li>
                                    <li> 7{' <div class="p-3 mb-2 bg-light text-dark">.bg-light</div> '} </li>
                                    <li> 8{' <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div> '} </li>
                                    <li> 9{' <div class="p-3 mb-2 bg-white text-dark">.bg-white</div> '} </li> <br />
                                    <li>
                                        <div class="p-1 mb-2 bg-primary text-white">1 .bg-primary</div>
                                        <div class="p-1 mb-2 bg-secondary text-white">2 .bg-secondary</div>
                                        <div class="p-1 mb-2 bg-success text-white">3 .bg-success</div>
                                        <div class="p-1 mb-2 bg-danger text-white">4 .bg-danger</div>
                                        <div class="p-1 mb-2 bg-warning text-dark">5 .bg-warning</div>
                                        <div class="p-1 mb-2 bg-info text-white">6 .bg-info</div>
                                        <div class="p-1 mb-2 bg-light text-dark">7 .bg-light</div>
                                        <div class="p-1 mb-2 bg-dark text-white">8 .bg-dark</div>
                                        <div class="p-1 mb-2 bg-white text-dark">9 .bg-white</div>
                                    </li> <br />

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
                                    <li>
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
                                    </li> <br />

                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> flex
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> flex </div>
                                <div className='mblock'>
                                    <div className="sblock">
                                        <li> d-flex d-inline-flex <small> # flex를 사용하겠다 , 부모요소에 클래스 선언 </small> </li>
                                        <li> flex-[[],sm,md,lg,xl,xxl]-[row,row-reverse,column,column-reverse] <small> flex의 크기와 방향 설정 </small> </li>
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
                                        <li>  <small> # </small> </li>
                                    </div>
                                    <li>  <small>  </small> </li> <br />
                                    <div className="sblock">
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
                                        <div className="mblock">

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
                                    </div>  <br />

                                    <div className='sblock'>
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

                                        <div className="mblock">
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

                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Spacing
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> position
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> position-[static,relative,absolute,fixed,sticky] </li>
                                    <li> [top,start,bottom,end]-[0,50,100] <small> # top,left,bottom,right </small> </li>
                                    <li> translate-middle-[x,y] <small> # absolute에서 요소에 translate X,Y 50%를 준다 </small> </li>
                                    <li>  <small> #  </small> </li>
                                </div>
                                <div className="mblock">
                                    <li> {'<div class="position-relative" style={{ height: "300px" }}> '}
                                        <li> {'    <div class="position-absolute top-0 start-0">1</div> '} </li>
                                        <li> {'    <div class="position-absolute top-0 end-0">2</div> '} </li>
                                        <li> {'    <div class="position-absolute top-50 start-50">3</div> '} </li>
                                        <li> {'    <div class="position-absolute bottom-50 end-50">4</div> '} </li>
                                        <li> {'    <div class="position-absolute bottom-0 start-0">5</div> '} </li>
                                        <li> {'    <div class="position-absolute bottom-0 end-0">6</div> '} </li>
                                    </li>
                                    <li> {'</div> '} </li> <br />
                                    <div class="position-relative" style={{ height: "300px" }}>
                                        <div class="position-absolute top-0 start-0">1</div>
                                        <div class="position-absolute top-0 end-0">2</div>
                                        <div class="position-absolute top-50 start-50">3</div>
                                        <div class="position-absolute bottom-50 end-50">4</div>
                                        <div class="position-absolute bottom-0 start-0">5</div>
                                        <div class="position-absolute bottom-0 end-0">6</div>
                                    </div>
                                </div>
                                <div className="mblock">
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

                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> progress , 막대 진행바
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 1. {' class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" '} </li>
                                    <li> 2.  class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" </li>
                                    <li> 3. {' class="progress" style={{ height: "30px" }} '} <small> # 막대 진행바의 높이는 이와 같이 사용하면 된다. </small>  </li> <br />
                                    <li> 4. <small> # 막대바에 색깔 넣는 방법 </small>
                                        <li> {' <div class="progress-bar w-25 bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                                        <li> {' <div class="progress-bar w-25 bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                                        <li> {' <div class="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> '} </li>
                                    </li>
                                    <li>  </li> <br />
                                    <li> 5. class="progress-bar progress-bar-striped w-25 bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" </li>
                                    <li> 6. class="progress-bar progress-bar-striped progress-bar-animated w-75" </li>
                                    <li>  </li> <br />
                                    <li>
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
                                    </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </span>
            </div>


        </>
    );
}

export default CssBootStrap;