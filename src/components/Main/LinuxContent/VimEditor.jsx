import React, { useEffect, useRef } from 'react';

const VimEditor = (props) => {

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
                            <summary className="stitle"> ▶ vim 에디터 명령어 <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <details>

                                    <summary className="sstitle"> ▶ vim 실행방법 </summary>
                                    <span className="mblock">
                                        <li> vi text.txt </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 명령모드 </summary>
                                    <span className="mblock">
                                        <li> u :실행한것 되돌리기 </li>
                                        <li> x :  문자 삭제하기 </li>
                                        <li> dd : 커서가 위치한곳 문장 삭제가능 </li>
                                        <li> dw : 커서가 위치한곳 단어 삭제가능 </li>
                                        <li> d$ : 커서가 위치한곳에서 문장 끝까지 삭제가능 </li>
                                        <li> d^ : 커서가 위치한곳에서 문장 앞까지 삭제가능 </li>
                                        <li> ndd : 커서가 위치한곳에서 n숫자를 입력한 만큼 문장을 삭제 </li>
                                        <li> yy : 커서가 위치한곳의 줄을 복사 </li>
                                        <li> nyy : 커서가 위치한곳의 줄을 n번째까지의 줄을 복사 </li>
                                        <li> p : 복사한 내용을 붙여넣기 </li>
                                        <li> G : 가장 마지막 줄로 이동 </li>
                                        <li> gg : 가장 첫번째 줄로 이동 </li>
                                        <li> ngg : n번째에 해당하는 줄로 이동 </li>
                                        <li> esc : 명령모드로 돌아가기 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 삽입모드 </summary>
                                    <span className="mblock">
                                        <small> 명령모드에서 삽입모드로 변경 [i,I,a,A,o] </small>
                                        <li> i : 현재커서가 위치한 곳에서 입력가능 </li>
                                        <li> I : 현재커서가 위치한 곳에 가장 첫문장부터 입력가능 </li>
                                        <li> a : 현재커서가 위치한 다음 부터 입력가능 </li>
                                        <li> A : 현재커서가 위치한 가장 끝문장부터 입력가능 </li>
                                        <li> o : 다음줄 부터 문자를 입력가능 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 실행모드 </summary>
                                    <span className="mblock">
                                        <li> : : 명령모드에서 실행모드로 변경</li>
                                        <li> w : 현재 파일 내용을 저장 </li>
                                        <li> q : 현재 파일에서 빠져나옴 </li>
                                        <li> wq : 현재 파일 내용을 저장하고 빠져나옴 </li>
                                        <li> q! : 현재 파일을 저장하지 않고 빠져나옴 </li>
                                        <li> set nu : 에디터에 줄번호 표시 </li>
                                        <li> set nonu : 에디터에 줄번호 표시를 제거 </li>
                                        <li> %s/[변경하려는단어]/[변경할단어]/g : 모든 문장의 단어 바꾸기 </li>
                                        <li> ns/[변경하려는단어]/[변경할단어]/g : n번째 문장의 단어 바꾸기 </li>
                                        <li> n,ms/[변경하려는단어]/[변경할단어]/g : n~m번째 문장의 단어 바꾸기 </li>
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 검색모드 </summary>
                                    <span className="mblock">
                                        <li> / : 명령모드에서 검색모드로 변경 </li>
                                        <li> /[검색할내용] : 검색모드일 때 </li>
                                        <li> n : 검색모드일 때 , 검색한 문자열을 아래로 계속 찾음</li>
                                        <li> N : 검색모드일 때 , 검색한 문자열을 위로 계속 찾음</li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 기타 </summary>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <summary className="sstitle">  </summary>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <summary className="sstitle">  </summary>
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

export default VimEditor;