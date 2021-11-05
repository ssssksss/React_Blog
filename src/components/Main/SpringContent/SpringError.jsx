import React, { useEffect, useRef } from 'react';

const SpringError = (props) => {

    return (
        <>
            <div className="common_style">
                <div className='block1'>
                    <details>
                        <summary> 에러 (어떤 방법으로 정리할지 고민) </summary>
                        <div className='block2'>
                            <h2 className="h2"> 📌 HTTP 응답 상태 코드 </h2>
                            <li> 200 : 정상적 수행  </li>
                            <li> 201 : 클라이언트가 리소스 생성 요청, 리소스가 성공적으로 생성(Post) </li>
                            <li> 301 : 클라이언트가 요청한 리소스에 대한 URI가 변경이 된 경우  </li>
                            <li> 400 : 클라이언트의 요청이 부적절한 경우   </li>
                            <li> 401 : 클라이언트가 인증되지 않을 떄 보호된 리소스에 접근했을 때 발생하는 에러  </li>
                            <li> 403 : 클라이언트가 응답하고 싶지 않은 리소스를 요청할 때 ( 권장x )  </li>
                            <li> 405 : 클라이언트가 사용불가능한 Method를 이용해서 리소스를 요청할 때  </li>
                            <li> 500 : 서버에 문제가 있을 경우 발생하는 코드  </li>

                            <h2 className="h2"> ✔ 예시 </h2>
                            <li> 소제목
                                <div className="block3">
                                    <li> <h3 className="h3"> 🎈 To display the conditions report re-run your application with 'debug' enabled </h3>
                                        <li> {' 1. run > edit configuration '} </li>
                                        <li> 2. enable debug output 체크해제 </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured </h3>
                                        <li> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver </li>
                                        <li> {' spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8&serverTimezone=UTC '} </li>
                                        <li> spring.datasource.username=DB유저이름 </li>
                                        <li> spring.datasource.password=DB유저비번 </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 detached entity passed to persist </h3>
                                        <li> ManyToMany, ManyToOne 등에서 발생 </li>
                                        <li> A와 B가 있을때 A의 a1,a2이 B의 b1과 관계가 있다면 a1이 저장이되면서 b1이 저장이되고
                                            a2를 저장하게될때 b1이 다시 저장이 되어 b1 키가 충돌할 때 발생  </li>
                                    </li> <br />

                                    <li> <h3 className="h3"> 🎈 </h3>
                                        <li>  </li>
                                        <li>  </li>
                                    </li> <br />

                                </div>
                            </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default SpringError;