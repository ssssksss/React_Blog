import React from 'react';

const SpringError = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <span className="mtitle"> <a name=""> 스프링 오류나 에러 </a> </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> To display the conditions report re-run your application with 'debug' enabled </span>
                            <p> 1. run &gt; edit configuration</p>
                            <p> 2. enable debug output 체크해제 </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name=""> hibernate나 DB연결문제 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured </span>
                            <span className="sstitle"> org.hibernate.service.spi.ServiceException: Unable to create requested service </span>
                            <p> DB에 연결하는 설정 정보가 없어서 발생하는 에러이다. application.properties나 yml, xml 파일등에 datasource관련 코드를
                                추가하며 해결이 된다. </p>
                            <span className="mblock">
                                <p> spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver  </p>
                                <p> spring.datasource.url=jdbc:mysql://localhost:3306/스키마이름?characterEncoding=UTF-8
                                    &amp;serverTimezone=UTC  </p>
                                <p> spring.datasource.username=DB유저이름  </p>
                                <p> spring.datasource.password=DB유저비번  </p>
                            </span>
                            <span className="sstitle"> </span>
                            <p> 1. </p>
                            <span className="sstitle"> </span>
                            <p> 1. </p>
                            <span className="sstitle"> </span>
                            <p> 1. </p>
                            <span className="sstitle"> </span>
                            <p> 1. </p>
                            <span className="sstitle"> </span>
                            <p> 1. </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="인텔리제이 한글 꺠짐"> 인텔리제이 한글 꺠짐  </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 파일 설정 encoding 바꾸기 </span>
                            <p> ctrl+alt+s - settings - editor - file encodings </p>
                            <p> Global Encoding , Project Encoding , Default encoding for properties files 3곳 UTF-8로 변경</p>
                            <span className="sstitle"> 인텔리제이 VM Options 바꾸기 </span>
                            <p> Help - Edit Custom VM Options </p>
                            <p> 제일 아래에 -Dfile.encoding=UTF-8 코드 추가 </p>
                            <span className="sstitle"> 톰캣 VM Options 바꾸기 </span>
                        </span>
                    </span>
                    {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                        </span>
                    </span> */}
                </span>
            </div>
        </>
    );
}
export default SpringError;

