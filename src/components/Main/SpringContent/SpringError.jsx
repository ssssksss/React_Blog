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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> hibernate나 DB연결문제
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

