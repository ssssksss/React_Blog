import React from 'react';

const SpringError = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> spring boot 어플리케이션 실행 중 문제
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> To display the conditions report re-run your application with 'debug' enabled </div>
                                <div className='mblock'>
                                    <li> {' 1. run > edit configuration '} </li>
                                    <li> 2. enable debug output 체크해제 </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='sstitle'> HTTP 응답 상태 코드 </div>
                    <div className='mblock'>
                        <li> 200 : 정상적 수행  </li>
                        <li> 201 : 클라이언트가 리소스 생성 요청, 리소스가 성공적으로 생성(Post) </li>
                        <li> 301 : 클라이언트가 요청한 리소스에 대한 URI가 변경이 된 경우  </li>
                        <li> 400 : 클라이언트의 요청이 부적절한 경우   </li>
                        <li> 401 : 클라이언트가 인증되지 않을 떄 보호된 리소스에 접근했을 때 발생하는 에러  </li>
                        <li> 403 : 클라이언트가 응답하고 싶지 않은 리소스를 요청할 때 ( 권장x )  </li>
                        <li> 405 : 클라이언트가 사용불가능한 Method를 이용해서 리소스를 요청할 때  </li>
                        <li> 500 : 서버에 문제가 있을 경우 발생하는 코드  </li>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 에러
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured </div>
                                <div className="sstitle"> org.hibernate.service.spi.ServiceException: Unable to create requested service </div>
                                <div className='mblock'>
                                    <li> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver </li>
                                    <li> {' spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8&serverTimezone=UTC '} </li>
                                    <li> spring.datasource.username=DB유저이름 </li>
                                    <li> spring.datasource.password=DB유저비번 </li>
                                </div>
                                <div className='sstitle'> detached entity passed to persist </div>
                                <div className='mblock'>
                                    <li> ManyToMany, ManyToOne 등에서 발생 </li>
                                    <li> A와 B가 있을때 A의 a1,a2이 B의 b1과 관계가 있다면 a1이 저장이되면서 b1이 저장이되고
                                        a2를 저장하게될때 b1이 다시 저장이 되어 b1 키가 충돌할 때 발생  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
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
export default SpringError;

