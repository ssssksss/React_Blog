import React, { useEffect, useRef, useState } from 'react';

const SecurityHash = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);


        //위치 계산
        let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
        let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
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
                                <a href="#Hash란?" className="col_p"> Hash란? </a>
                                <a href="#단뱡향 해시 함수" className="col_p"> 단뱡향 해시 함수 </a>
                                <a href="#" className="col_p"> </a>
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
                            <summary className="stitle"> ▶ Hash란? <a name="Hash란?" style={{ visibility: "hidden" }}> Hash란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> Hash의 정의 </span>
                                <span className="mblock">
                                    <li> 단방향 암호화 기법, 임의의 크기를 가진 데이터(Key)를 고정된 크기의 데이터(value)로 바꾸는 것 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Hasing의 정의 </span>
                                <span className="mblock">
                                    <li> 키에 대한 해시값을 구하는 과정 , 이때 사용하는 알고리즘을 해시 알고리즘(해시함수)라고 한다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Hash 함수의 특징 </span>
                                <span className="mblock">
                                    <li> 해시함수는 원래 패스워드 저장용도가 아닌 짧은 시간에 데이터를 검색하기 위해 설계됨 </li>
                                    <li> 빠른 처리 속도를 가지고 있음 </li>
                                    <li className="col_r"> 빠른 처리속도를 가지고 있지만 특정 장비를 이용하여 더 빠르게 처리하여
                                        다이제스트를 만들어 대입하여 해킹을 시도가 가능 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 좋은 Hash함수란? </span>
                                <span className="mblock">
                                    <li> 해시값들이 많이 충돌하지 않고, 계산이 복잡하지 않는 함수 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Hash 값 충돌을 방지하는 방법 </span>
                                <span className="mblock">
                                    <li> Chaining : 키값을 링크드 리스트 형태로 연결하여 사용 , 키값이 많이 중복되면 비효율 </li>
                                    <li> Open Addressing : 모든 데이터를 테이블에 저장하는 방법 , 테이블의 크기가 커지면 장점이 사라짐? </li>
                                    <li> Linear Probing : 충돌이 발생하면 다음 인덱스에 데이터를 저장하는 방식 </li>
                                    <li> Quadratic Probing : 충돌시 제곱만큼 이동(효율적) </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 사용하면 안되는 해쉬 함수 종류 </span>
                                <span className="mblock">
                                    <li> MD5 , SHA-1 HAS-180  #보안이 뚤림 </li>
                                    <li> SHA-256 , SHA-512 권고  </li>
                                </span>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 단뱡향 해시 함수 <a name="단뱡향 해시 함수" style={{ visibility: "hidden" }}> 단뱡향 해시 함수 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 단방향 해시 함수 강화하는 방법 </span>
                                <span className="mblock">
                                    <li> 스트레칭 : 복잡한 연산을 수만번이상 반복하는 방법, 다이제스트를 만드는 시간을 길게 하는방법, 사용자는
                                        로그인 하는데 1초이상이 걸려도 크게 불편함을 느끼지 않는다. </li>
                                    <li> 솔트 : 32비트 이상의 문자열로 사용자마다 값이 다르며, 비밀번호 앞뒤에 Salt(아무 문자열,아이디 등)
                                        를 붙여서 다이제스트(해쉬함수를 사용한 값)를 생성한다. </li>
                                    <li> - 패스워드 처럼 문자의 수와 종류가 제한된 경우 추측이 가능해져 솔트를 사용하면 좋다. </li>
                                    <li> 직접 만들는 것은 위험함으로 검증된 암호화 시스템을 사용할 것  </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> Adaptive Key Derivation Functions </span>
                                <span className="mblock">
                                    <li> 솔트 + 스트레칭을 반복하고 이외에도 입력 갑을 추가하여 보안의 강도를 높이는 방법 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> PBKDF2 </span>
                                <small> Password-Based Key Derivation Function </small>
                                <span className="mblock">
                                    <li> 솔트를 적용한 후에 해시 함수의 반복 회수를 임의로 선택 가능 </li>
                                    <li> DIGEST = PBKDF2(PRF, Password, Salt , c, DLen) #난수 , 패스퉈드, 솔트, iteration반복수, 원하는다이제스트길이 </li>
                                    <li> 미국 정부 시스템에서도 다이제스트를 생성할 때 사용 </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> bcrypt </span>
                                <span className="mblock">
                                    <li> 패스워드 저장을 목적으로 설계 </li>
                                    <li> workfactor 파라미터는 한개의 다이제스트를 생성하는데 처리 과정을 몇 번이나 수행을 할지 선택 </li>
                                    <li> BCrypt.hashpw(password, BCrypt.gensalt(11)); #default salt 값은 10번 </li>
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> scrypt </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                                {/*  */}
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
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

export default SecurityHash;