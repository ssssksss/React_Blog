import React, { useEffect, useRef, useState } from 'react';

const JavaModifier = (props) => {

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
                                <a href="#제어자란?" className="col_p"> 제어자란? </a>
                                <a href="#제어자의 종류" className="col_p"> 제어자의 종류 </a>
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
                            <summary className="stitle"> ▶ 제어자란? <a name="제어자란?" style={{ visibility: "hidden" }}> 제어자란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 제어자의 종류 <a name="제어자의 종류" style={{ visibility: "hidden" }}> 제어자의 종류 </a> </summary>
                            <span className="sblock">
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ public </summary>
                                    <span className="mblock">
                                        <li> 접근 제어자 : 같은 패키지, 다른 패키지 전부 허용 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ protected </summary>
                                    <span className="mblock">
                                        <li> 접근 제어자 :  같은 패키지 안에서는 모두 접근 허용, 다른 패키지에서는 자식클래스일 때만 접근 허용 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ default </summary>
                                    <span className="mblock">
                                        <li> 접근 제어자 : 같은 패키지 안에서만 접근 허용 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ private </summary>
                                    <span className="mblock">
                                        <li> 접근 제어자 : 같은 클래스 안에서만 접근 허용 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ static </summary>
                                    <span className="mblock">
                                        <li> static 멤버변수 : 모든 인스턴스가 공통적으로 사용하는 값, 클래스가 메모리에 생성될 때 같이 생성
                                            , static 멤버변수(클래스변수)는 인스턴스를 생성하지 않고서도 사용이 가능하다. </li>
                                        <li> static 메소드 : 인스턴스를 생성하지 않고도 사용이 가능한 메소드 , static 메서드 내에서는
                                            인스턴스의 멤버변수를 직접 사용을 할 수 없다. , 인스턴스 멤버변수를 사용하지 않는
                                            메서드에는 static 사용을 하는 것을 고려해 봐야 한다. </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ final </summary>
                                    <span className="mblock">
                                        <li> final 클래스 : 변경할수 없고 확장할 수 없는 클래스 , 다른 클래스의 조상클래스가 될 수 없다. </li>
                                        <li> final 메서드 : 오버라이딩으로 재정의 될 수 없다. </li>
                                        <li> final 멤버변수, final 변수 : 값을 변경할 수 없는 상수로 변경 , 생성자를 통해 값을 넣어주어야
                                            인스턴스마다 다른 값을 가지게 해줄 수 있다. </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ abstract </summary>
                                    <span className="mblock">
                                        <li> abstract 클래스 : 추상클래스로 정의, 인스턴스를 생성할 수 없다. 추상클래스도 클래스이므로
                                            상속을 받으면 일부 메서드만 오버라이딩을 해서 사용이 가능하다는 장점이 있음 </li>
                                        <li> abstract 메서드 : 인터페이스에서 메서드를 선언하는 것처럼 구현이 되있지는 않지만
                                            상속을 받아서 구현을 할 수 있음 </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ native </summary>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ transient </summary>
                                    <span className="mblock">
                                        <li> private transient String 멤버변수; </li>
                                        <li> 위와 같이 사용을 하면 직렬화를 하였을 때 , 직렬화 과정에서 예외로 처리
                                            , 직렬화를 하고 다시 역직렬화를 하였을 때 필드는 남아있지만 멤버변수 값은 null로 처리된다. </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ synchronized </summary>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ volatile </summary>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ strictfp </summary>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▷ 클래스, 메서드, 멤버변수, 지역변수</summary>
                                    <span className="mblock">
                                        <li> 클래스 : public , default, final, abstract </li>
                                        <li> 메서드 : public , default, private, protected, final, abstract, static </li>
                                        <li> 멤버변수 : public , default, private, protected, final, static  </li>
                                        <li> 지역변수 : final </li>
                                    </span>
                                </details>
                                {/*  */}
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 제어자 사용 주의 <a name="제어자 사용 주의" style={{ visibility: "hidden" }}> 제어자 사용 주의 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 메서드에 static + abstract 사용 불가 </span>
                                <span className="mblock">
                                    <li> abstract클래스는 직접적으로 객체가 될 수 없으므로 static메서드 또한
                                        사용이 불가능하다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> 클래스에 abstract + final 사용불가 </span>
                                <span className="mblock">
                                    <li> abstract 클래스는 구현이 되어야 사용이 가능한데 final로 정의함으로써
                                        사용이 불가능해진다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> abstract 메서드에 private 사용불가 </span>
                                <span className="mblock">
                                    <li> abstract 메서드는 구현된 인스턴스에서 사용이 가능한데 private를 사용하면
                                        자식 클래스에서 접근이 불가능하게 만들어서 사용할 수 없다. </li>
                                </span>
                                {/*  */}
                                <span className="sstitle"> private + final 같이 사용 불필요 </span>
                                <span className="mblock">
                                    <li> private로 하나 final로 하나 자식클래스에서는 사용이 불가능하다. </li>
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

export default JavaModifier;