import React, { useEffect, useRef, useState } from 'react';

const JspServletJdbc = (props) => {


    return (
        <>
            <div className="common_style" >
                <span className="lblock">
                    <ul>
                        <span className="mtitle"> <a name="JDBC">  JDBC </a> </span>

                        <span className="mblock">
                            <span className="stitle"> <a name=""> JDBC 이클립스 초기 설정  </a> </span>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <p>   1. jdbc 빌드 패스 추가 2.빨간줄 예외처리 </p>
                                <li> String url = "jdbc:oracle:thin:@localhost:1521/xepdb1";</li>
                                <li> String sql = "SELECT * FROM MEMBER";</li>
                                <li> Class.forName("oracle.jdbc.driver.OracleDriver"); //드라이버 클래스 호출</li>
                                <li> Connection con = DriverManager.getConnection(url,"TEST","1234"); //데이터 원본과 연결</li>
                                <li> Statement st = con.createStatement(); /쿼리완성?, 질의문장을 담아 인자로 전달</li>
                                <li> PreparedStatement st = con.prepareStatement(sql); //쿼리미완성? 위치값이 있을때? insert</li>
                                <li> ResultSet cursor = st.executeQuery(sql); , st.Set자료형(콜럼,넣을값) , st.executeUpdate();</li>
                                <li> //resultset은 그릇 , executeQuery : 래코드를 가리키는 커서</li>
                                <li> //executeQuery는 selec에서 데이터타입 전달 , executeUpdate는 DML에서 int타입 전달 </li>
                                <li> //오류가 날경우 SQL문법이 틀리거나, 패러미터 값이 틀리거나, 이클과SQL 인코딩 방식이 틀렸을떄</li>
                                <li> while(cursor.next()) {'String id = cursor.getString(“ID”);'}</li>
                                <li> {'System.out.println(id);'}</li>
                                <li> try-resouce문으로 처리하면 안적어도됨</li>
                                <li> rs.close();</li>
                                <li> st.close();</li>
                                <li> con.close();</li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Connection Pool"> Connection Pool </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> context.xml </span>
                                <li>&lt;Context&gt;</li>
                                <li>  &nbsp;&nbsp;&lt;Resource auth="Container" type="javax.sql.DataSource"</li>
                                <li>  &nbsp;&nbsp;name="jdbc/orcl"</li>
                                <li>  &nbsp;&nbsp;url="jdbc:oracle:thin@localhost:1521:xe"</li>
                                <li>  &nbsp;&nbsp;usernamte="coin666"</li>
                                <li>  &nbsp;&nbsp;password="1234"</li>
                                <li>  &nbsp;&nbsp;maxActive="10" maxIdle="5"/&gt;</li>
                                <li>&lt;/Context&gt;</li>
                                <span className="sstitle"> web.xml </span>
                                <li>&lt;resource-ref&gt; </li>
                                <li>&nbsp;&nbsp;&lt;ref-ref-name&gt;jdbc/orcl&lt;/res-ref-name&gt; </li>
                                <li>&nbsp;&nbsp;&lt;res-type&gt;javax.sql.DataSource&lt;/res-type&gt; </li>
                                <li>&nbsp;&nbsp;&lt;ref-auth&gt;Container&lt;/res-auth&gt; </li>
                                <li>&lt;/resource-ref&gt;</li>
                                {/* <span className="sstitle">  </span>
                                <li>  </li> */}
                            </span>
                        </span>


                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">

                                </span>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">

                                </span>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">

                                </span>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">

                                </span>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> </span>
                                <span className="mblock">

                                </span>
                            </span>
                        </span>

                        {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span> */}




                    </ul>
                </span>
            </div>
        </>
    );
}
export default JspServletJdbc;
