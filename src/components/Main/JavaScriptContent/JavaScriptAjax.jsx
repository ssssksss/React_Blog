import React from 'react';

const JavaScriptAjax = (props) => {
    return (
        <>
            <div className="common_style">
                <div className="lblock">
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Ajax
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> Asynchronous JavaScript And Xml </li>
                                    <li> 비동기식 자바스크립트 xml </li>
                                    <li> 웹페이지를 재로딩 하지 않고 화면의 객체를 움직일 수 있다. </li>
                                    <li> 클라이언트가 서버와 작은양의 데이터를 교환 </li>
                                    <li> 사용예시 : 키워드 검색,  </li>
                                    <li> 메소드를 ajax에 넣어서 보내도 인식을 하지 못한다. </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> ajax 관련 속성과 사용방법 예시
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> <a href="https://api.jquery.com/jQuery.ajax/" target="_blank" rel="noopener noreferrer"> ajax 문서 참조 </a> </li>
                                    <li> type: [GET,POST,DELETE,PUT] <small> # 통신타입을 설정 </small> </li>
                                    <li> url : /main/test1 <small> # 서버에 요청할 주소 </small> </li>
                                    <li> data: <small> # 서버에 보낼 데이터 </small>   </li>
                                    <li> dataType : [xml,html,json,jsonp,script,text] <small> # 보낼 데이터 타입, 적지 않는다면 자동으로 판단 </small> </li>
                                    <li> async : [true,false] <small> # 동기(false), 비동기(true) 처리 여부 </small> </li>
                                    <li> statusCode : <small> #  </small> </li>
                                    <li> jsonp : <small> # jsonp를 사용할 떄 파라미터명 설정 </small> </li>
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
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> {' <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> '} <small> # jquery 추가해주기 </small> </li>
                                    <li> {'<script>'}
                                        <li> function getBoard(id) {'{'}
                                            <li>  $.ajax({'{'}
                                                <li> {' url: "/api/boards/" + id, '} </li>
                                                <li> {' type: "GET", '} </li>
                                                <li> {' cache: , '} </li>
                                                <li> {' dataType: "", '} </li>
                                                <li> {' data: "", '} <small> # 키와 값으로 이루어진 형태의 객체를 넣거나 ""으로 만들어주어야 한다.  </small> </li>
                                                <li> {' success: function(data) { '}
                                                    <li> console.log("조회",data); </li>
                                                    <li> alert("조회 완료") </li>
                                                </li>
                                                <li> {' }, '} </li>
                                                <li> {' error: function (request, status, error) { '} </li>
                                                <li> {' } '} </li>
                                                <li> {' }); '} </li>
                                            </li>
                                            <li> {'  '} </li>
                                        </li>
                                        <li> {'}'} </li>
                                    </li>
                                    <li> {'</script> '} </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default JavaScriptAjax;