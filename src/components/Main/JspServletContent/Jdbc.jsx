import React, { useEffect, useRef, useState } from 'react';

const Jdbc = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[1].style.left = null;
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b>  </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary>  </summary>
                            <a href="#Connection Pool">  Connection Pool </a>
                            <a href="#">   </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>

            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
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
export default Jdbc;
