import React from 'react';

const BootstrapTable = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 테이블 </summary>
                    <div className='block2'>

                        <h2 className='h2'> ✔ 기본 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈기본형식 </h3>
                                <div className="block4">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NO</th>
                                                <th scope="col">NAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>이름2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='block4'>
                                    <li> {' <table class="table"> '}
                                        <li> {'   <thead> '}
                                            <li> {'     <tr> '}
                                                <li> {'       <th scope="col">NO</th> '} </li>
                                                <li> {'       <th scope="col">NAME</th> '} </li>
                                            </li>
                                            <li> {'     </tr> '} </li>
                                        </li>
                                        <li> {'   </thead> '} </li>
                                        <li> {'   <tbody> '}
                                            <li> {'     <tr> '}
                                                <li> {'       <th scope="row">1</th> '} </li>
                                                <li> {'       <td>이름2</td> '} </li>
                                            </li>
                                            <li> {'     </tr> '} </li>
                                        </li>
                                        <li> {'   </tbody> '} </li>
                                    </li>
                                    <li> {' </table> '} </li>
                                </div>
                            </div>
                        </li>

                        <h2 className='h2'> 📌 테이블 배경색 </h2>
                        <div className="block3">
                            <li> table,tr,td 태그에 선언  </li>
                            <li> 1.  class="table-primary" </li>
                            <li> 2.  class="table-secondary" </li>
                            <li> 3.  class="table-success" </li>
                            <li> 4.  class="table-danger" </li>
                            <li> 5.  class="table-warning" </li>
                            <li> 6.  class="table-info" </li>
                            <li> 7.  class="table-light" </li>
                            <li> 8.  class="table-dark" </li> <br />
                            <details>
                                <summary> 테이블 배경색 예시</summary>
                                <div className="block4">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NO</th>
                                                <th scope="col">NAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td class="table-primary">.table-primary</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td class="table-secondary">.table-secondary</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td class="table-success">.table-success</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td class="table-danger">.table-danger</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td class="table-warning">.table-warning</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td class="table-info">.table-info</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td class="table-light">.table-light</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td class="table-dark">.table-dark</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </details>
                        </div>


                        <h2 className='h2'> 📌 테이블 줄무늬 </h2>
                        <div className="block3">
                            <li> table태그에 선언, 아래 태그 혼합 가능 </li>
                            <li> class="table [table-striped] [table-dark, table-success]" </li>
                            <li> class="table table-hover" </li>
                            <li>  </li>
                            <li>  </li>
                        </div>

                        <h2 className='h2'> 📌 일부 행이나 열에 강조표시 </h2>
                        <li> tr이나 td태그에 선언해서 사용 </li>
                        <li> class="table-active" </li>

                        <h2 className='h2'> 📌 테이블 border </h2>
                        <li> class="table table-bordered" </li>
                        <li> class="table table-bordered border-primary <small> # border에서 색 효과를 준다. </small> </li>
                        <li> class="table table-borderless" <small> # 모든 선을 제거 </small> </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 테이블 셀에 패딩 간격 줄이기 </h2>
                        <li> class="table table-sm" </li>

                        <div className="block3"> </div>
                        <h2 className='h2'> 📌 테이블 셀의 줄의 위치 변경 </h2>
                        <li> table-responsive에서만 사용되는 것인지는 모르지만 table,tr,td태그에 선언하여 사용(상속?이 되는것 같다) </li>
                        <li> 셀에서의 내용들의 y축의 위치를 잡는 방법 </li>
                        <li> class="align-middle" </li>
                        <li> class="align-bottom" </li>
                        <li> class="align-top" </li>

                        <h2 className='h2'> 📌 테이블 thead와 테이블 tfoot </h2>
                        <div className="block3">
                            <li> thead class="table-light" </li>
                            <li> thead class="table-dark" </li>
                        </div>

                        <h2 className='h2'> 📌 테이블 caption </h2>
                        <div className="block3">
                            <li> table class="table caption-top" <small> # caption을 상단으로, 기본값 하단 </small> </li>
                        </div>

                        <h2 className='h2'> 📌 테이블 responsive  </h2>
                        <div className="block3">
                            <li> 테이블 태그의 부모 요소에 선언 </li>
                            <li> class="table-responsive-[sm-md-lg-xl-xxl]" </li>
                        </div>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default BootstrapTable;

