import React, { useEffect, useRef, useState } from 'react';

const MySQLStudy = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
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
                            <a href="#회사 관련">  회사 관련 </a>
                            <a href="#이름 짓기 추천 방법">  이름 짓기 추천 방법 </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">

                    <span className="mtitle"> <a name="데이터베이스 변수 이름">  데이터베이스 변수 이름  </a> </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="이름 짓기 추천 방법"> 이름 짓기 추천 방법  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <li>  </li>
                            <span className="sstitle"> snake_case 사용 </span>
                            <li> _를 사용하여 단어를 구분 , DB에서는 camelcase를 사용하지 않음 </li>
                            <span className="sstitle"> 축약어보다는 풀네임 사용을 권장 </span>
                            <li> dept_no 보다는 department_no 가 더 좋음 , 많이 알려진것은 축약해도 서로 알겠지만 개인적으로는
                                풀네임이 더 좋다고 생각 </li>
                            <li> <a href="https://www.curioustore.com/#!/util/naming" target="_blank" > 약어 참고 사이트 </a> </li>
                            <span className="sstitle"> 대문자보다는 소문자 사용 </span>
                            <li> SELECT salary FROM department; </li>
                            <span className="sstitle"> 동사보다는 단수명사 </span>
                            <li> students 보다는 student </li>
                            <span className="sstitle"> Key와 FK의 필드이름 </span>
                            <li> {"{table명}_id"} , PK 추천이름  </li>
                            <li> {"{reference_table명_컬럼이름"} , FK 추천이름  </li>
                            <span className="sstitle"> prefix 와 suffix 비추천 </span>
                            <li> employee_TB , employee_VM 등등 이렇게 해놓으면 알아보기는 쉽지만 뷰가 테이블로 전환
                                하게되면 코드를 수정해야 되는 일이 발생 </li>
                            <li> employee_name_txt , 컬럼의 타입을 변경하면 필요가 없어짐 </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="회사 관련"> 회사 관련 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 직원 </span>
                                <li> employee_no,empno : 직원 번호 </li>
                                <li> employee_name, ename : 직원 이름 </li>
                                <li> employee_email : 직원 이메일 </li>
                                <li> employee_addr1 : 직원 주소 </li>
                                <li> employee_addr2 : 직원 예비 주소 </li>
                                <li> employee_location : 직원 근무지역 </li>
                                <li> employee_phone : 직원 휴대폰 번호 </li>
                                <li> last_name : 성 </li>
                                <li> first_name : 이름 </li>
                                <li> job : 직위 </li>
                                <li> hiredate : 입사일 </li>
                                <li> salary, sal : 월급 </li>
                                <li> commision , comm : 커미션(수수료) , nvl함수와 같이 사용 </li>
                                <li> commision_percent , comm_pct : 커미션(수수료) 퍼센트  </li>
                                <li> department_no ,deptno : 부서 번호 </li>
                                <li>  </li>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li> </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">

                            </span>
                        </span>
                    </span>



                </span>
            </div>
        </>
    );
}
export default MySQLStudy;
