import React, { useEffect, useRef, useState } from 'react';

const SpringError = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.innerWidth);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
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
                        <a href="#" className="col_b"> <b> 스프링 오류나 에러 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';

                        }}> ❌ </button>
                    </span>
                    <p className="hyperlink">
                        <details open>
                            <summary> 에러 모음 </summary>
                            <a href="#" className="col_p"> </a>
                            {/* <a href="#" className="col_p"> </a> */}
                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
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

