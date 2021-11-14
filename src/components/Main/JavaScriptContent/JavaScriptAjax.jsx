import React from 'react';

const JavaScriptAjax = (props) => {
    return (
        <>
            <div className="common_style">

                <div className='block1'>
                    <details>
                        <summary> Ajax </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> Asynchronous JavaScript And Xml </li>
                            <li> 비동기식 자바스크립트 xml </li>
                            <li> 웹페이지를 재로딩 하지 않고 화면의 객체를 움직일 수 있다. </li>
                            <li> 클라이언트가 서버와 작은양의 데이터를 교환 </li>
                            <li> 사용예시 : 키워드 검색,  </li>
                            <li> 메소드를 ajax에 넣어서 보내도 인식을 하지 못한다. </li>
                            <li>  </li>

                        </div>
                    </details>
                </div>

                <div className='block1'>
                    <details>
                        <summary> ajax 관련 속성과 사용방법 예시 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> <a href="https://api.jquery.com/jQuery.ajax/" target="_blank" rel="noopener noreferrer"> ajax 문서 참조 </a> </li>
                            <li> type: [GET,POST,DELETE,PUT] <small> # 통신타입을 설정 </small> </li>
                            <li> url : /main/test1 <small> # 서버에 요청할 주소 </small> </li>
                            <li> data: <small> # 서버에 보낼 데이터 </small>   </li>
                            <li> dataType : [xml,html,json,jsonp,script,text] <small> # 보낼 데이터 타입, 적지 않는다면 자동으로 판단 </small> </li>
                            <li> async : [true,false] <small> # 동기(false), 비동기(true) 처리 여부 </small> </li>
                            <li> statusCode : <small> #  </small> </li>
                            <li> jsonp : <small> # jsonp를 사용할 때 파라미터명 설정 </small> </li>
                            <li> contentType : [application/json, text/plain, text/html] <small> # 서버로 요청할 데이터 방식 설정 </small> </li>
                            <li> timeout : <small> # http 요청에 대한 제한시간 지정 (ms) </small> </li>
                            <li> headers :  </li>
                            <li> success : <small> # 요청에 성공하였을 때 어떻게 처리할지 설정 </small> </li>
                            <li> error : <small> # 응답에 실패했을 때 처리하는 방법 설정 </small> </li>
                            <li> complete : <small> # 모든작업을 처리한 후 처리 설정 </small>  </li>
                            <li> beforeSend : <small> # ajax요청을 하기전에 실행하는 콜백함수 </small>  </li>
                            <li>  </li>
                            <li>  </li> <br />

                            <li> .done(함수) <small> # 요청 성공 시 호출되는 함수 </small> </li>
                            <li> .fail(함수) <small> # 요청 실패 시 호출되는 함수 </small> </li>
                            <li> .always(함수) <small> # 항상 호출되는 함수 </small> </li>

                            <h2 className='h2'> ✔ 예시 </h2>
                            <li> 소제목
                                <div className='block3'>
                                    <h3 className='h3'> 🎈 </h3>
                                    <div className='block4'>
                                        <li> 경우에 따라 약간의 차이는 있을 수 있으므로 안된다면 다시 찾아보기 </li> <br />
                                        <li> {'     <script src="//code.jquery.com/jquery-3.2.1.min.js"> </script> '} </li>
                                        <li> {'  '} </li> <br />
                                        <li> {' <script> '}
                                            <li> {' function deleteBoard(id) { '}
                                                <li> {' $.ajax({ '}
                                                    <li> {' url: "/api/board/remove/" + id, '} </li>
                                                    <li> {' type: "DELETE", '} </li>
                                                    <li> {' success: function (results) { '}
                                                        <li> {' console.log("results", results); '} </li>
                                                        <li> {' alert("삭제되었습니다."); '} </li>
                                                        <li> {' location.href = "/board/boardMainpage"; '} </li>
                                                    </li>
                                                    <li> {' }, '} </li>
                                                    <li> {' error: function (data) { '}
                                                        <li> {' alert("에러 발생. " + data); '} </li>
                                                    </li>
                                                    <li> {' } '} </li>
                                                </li>
                                                <li> {' }) '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                        </li>
                                        <li> {' </script> '} </li>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default JavaScriptAjax;