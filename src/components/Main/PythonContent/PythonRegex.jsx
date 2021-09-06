import React, { useEffect, useRef } from 'react';

const PythonRegex = (props) => {

    function logit() {

        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            document.documentElement.scrollTop < elementHeight1 ?
                blockRef.current[0].style.top = elementHeight1 + "px" :
                blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight2 + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
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
                        <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 목록 </summary>
                            <details open>
                                <summary className="col_g"> 세부 목록 </summary>
                                <a href="#" className="col_p">  </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 정규 표현식 문법
                                <a name="정규 표현식 문법" style={{ visibility: "hidden" }}> 정규 표현식 문법 </a> </summary>
                            <span className="sblock">
                                <span className="mblock">
                                    <span className="sstitle"> import re </span>
                                    <li> re.match('패턴','문자열') #문자열에서 패턴을 처음부터 일치해야 match객체 반환 </li>
                                    <li> re.search('패턴','문자열') #문자열에서 패턴이 일치하면 match객체 반환  </li>
                                    <li> re.findall('패턴','문자열') #문자열에서 패턴이 일치하면 리스트로 반환(겹치는값은x) </li>
                                    <li> re.finditer('패턴','문자열') #문자열에서 패턴이 일치하면 iterator로 반환(겹치는값은x)  </li>
                                    <li> re.fullmatch('패턴','문자열') #시작부터 끝까지 모두 일치하면 match객체 반환 </li>
                                    <li> re.split('패턴','문자열',split횟수) </li>
                                    <li> re.sub('패턴','바꿀문자열','문자열','바꿀횟수') #바꾸어진 문자열 반환 </li>
                                    <li> re.subn('패턴','바꿀문자열','문자열') # (문자열,바뀐횟수)로 반환 </li>
                                    <li> re객체명 = re.compile('패턴') #패턴이 반복되면 공통적으로 적용시킴
                                        <li> re객체명.match('문자열') #이와 같이 패턴을 쓰지 않고 사용 </li>
                                    </li>
                                    <li> re.purge() #compile은 캐시에 100개가 넘어가면 초기화 그것을 방지 하는 용도 </li>
                                    <li> re.escape('특수문자') #모든 특수문자 앞쪽에 백슬래쉬(\)를 붙여서 반환 </li>
                                    <li> match객체
                                        <li> match객체명.group() #일치하는 패턴 문자열  </li>
                                        <li> match객체명.start() #일치한 패턴 시작 위치 인덱스</li>
                                        <li> match객체명.end() #일치한 패턴 끝 위치 인덱스 </li>
                                        <li> match객체명.span() #일치한 패턴이 어디부터 어디까지인지 인덱스 </li>
                                        <li> match객체명.groups() #일치한 패턴들을 반환 </li>
                                        <li> match객체명.group(인덱스) #일치한 패턴들의 인덱스 값을 반환 </li>
                                    </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 정규표현식 </span>
                                <span className="mblock">
                                    <li> <h4> r : 문자열 그대로 출력 </h4>
                                        <li> str = r"123\n"  </li>
                                    </li>
                                    <li> <h4> 패턴{'{숫자}'} : 패턴을 숫자만큼 반복 </h4>
                                        <li> a{'{1,3}'} # a가 1~3번 반복  </li>
                                        <li>   </li>
                                    </li>
                                    <li> <h4> [abc] : 각각의 문자("a" "b" "c")를 뜻함 </h4>
                                        <li>  </li>
                                    </li>
                                    <li> <h4> [a-z] [A-Z] [0-9] : 문자 범위를 뜻함 </h4>
                                        <li> a...f # a~f까지의 문자매칭 </li>
                                        <li> [a-zA-Z0-9] : 모든 문자와 숫자 </li>
                                        <li>  </li>
                                    </li>
                                    <li> <h4> ^[] : 범위에 포함되는 문자들을 제외한 나머지 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> . : 모든문자(한개)를 의미 (\n은제외) </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> 패턴+ : 1번이상의패턴 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> 패턴* : 0번 이상의 패턴</h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> 패턴? : 0~1번의 패턴 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \d : 0-9와 동일 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \D : [^0-9] 와동일 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \s : 공백문자(띄어쓰기,탭 등) </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \S : 공백이아닌문자 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \w : [0-9a-zA-Z]와 동일 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> \W : [^0-9a-zA-Z]와 동일 </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4>  </h4>
                                        <li> </li>
                                    </li>
                                    <li> <h4> 옵션 : re.IGNORECASE  # 대소문자를 무시 </h4>
                                        <li> re.IGNORECASE  # 대소문자를 무시 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </li>
                                    <li> <h4>  </h4>
                                        <li> </li>
                                    </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default PythonRegex;