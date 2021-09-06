import React, { useEffect, useRef, useState } from 'react';

const JavaAnnotation = (props) => {

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
                                <a href="#" className="col_p">  </a>
                                {/* <a href="#" className="col_p"> </a> */}
                            </details>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 자바 어노테이션 종류
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> @Override </span>
                                    <span className="mblock">
                                        <li> 메서드 위에 선언하여 부모클래스로부터 상속받은 메소드라는 것을 표시 </li>
                                        <li> 상속받는 메소드가 존재하지 않으면 컴파일 에러를 발생한다. </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> @Deprecated </span>
                                    <span className="mblock">
                                        <li> 해당 메서드를 사용하지 않는다는 표시 </li>
                                        <li> 사용을 하게되면 컴파일 경고 표시 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> @SuppressWarnings </span>
                                    <span className="mblock">
                                        <li> 선언된 위치에 컴파일 경고를 무시를 하게 한다. </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> @SafeVarargs </span>
                                    <span className="mblock">
                                        <li> 자바 7부터 지원 </li>
                                        <li> 제너릭 같은 가변인자의 매개변수를 사용할 때 경고를 무시 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> @FunctionalInterface </span>
                                    <span className="mblock">
                                        <li> 자바 8부터 지원 </li>
                                        <li> 함수형 인터페이스를 지정 </li>
                                        <li> 메서드가 존재하지 않거나, 1개 이상의 메서드(default 메서드는 제외)가 존재할 경우 컴파일
                                            오류 발생 </li>
                                        <li> 자바 컴파일러가 컴파일할 때 오류를 검사 </li>
                                        <li> <h4> 함수형 인터페이스 사용법 </h4>
                                            <li> @FunctionalInterface </li>
                                            <li> interface I_name {'{'} # 함수형 인터페이스 선언 및 정의
                                                <li> public int M_name(int x, int y); </li>
                                            </li>
                                            <li> {'}'} </li> <br />

                                            <li> I_name I_instance = {' (x, y) -> x < y ? x : y; '} # 인터페이스 추상메소드 구현  </li>
                                            <li> I_name I_instance = {' (x, y) -> x+y '}  # 인터페이스 추상메소드 구현 </li>
                                            <li> System.out.println(I_instance.M_name(1, 1)); # 사용 </li>
                                        </li>
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
                                <summary className="stitle"> ▶ 메타 어노테이션
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 설명 </span>
                                    <span className="mblock">
                                        <li> JEE5 부터 추가된 요소 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 메타 어노테이션 종류 </span>
                                    <span className="mblock">
                                        <li> <h3> @Retention : 자바 컴파일러가 어노테이션을 어떻게 다룰지 설정</h3>
                                            <span className="sblock">
                                                <li> @Retention(RetentionPolicy.SOURCE)
                                                    <li> 컴파일 전까지만 생존 </li>
                                                </li>
                                                <li> @Retention(RetentionPolicy.CLASS)
                                                    <li> 컴파일러가 클래스를 참조할때 까지 생존 </li>
                                                </li>
                                                <li> @Retention(RetentionPolicy.RUNTIME)
                                                    <li> 컴파일 이후에도 생존 , JVM에서 참조가능 </li>
                                                </li>
                                            </span>
                                        </li>
                                        {/*  */}
                                        <li> <h3> @Target : 어노테이션을 적용할 위치를 선택 </h3>
                                            <span className="sblock">
                                                <li> @Target(ElementType.PACKAGE)
                                                    <li> 패키지 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.TYPE)
                                                    <li> 타입 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.ANNOTATION_TYPE)
                                                    <li> 어노테이션 타입 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.CONSTRUCTOR)
                                                    <li> 생성자 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.FIELD)
                                                    <li> 멤버 변수 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.LOCAL_VARIABLE)
                                                    <li> 지역 변수 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.METHOD)
                                                    <li> 메서드 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.PARAMETER)
                                                    <li> 전달인자 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.TYPE_PARAMETER)
                                                    <li> 전달인자 타입 선언 </li>
                                                </li>
                                                <li> @Target(ElementType.TYPE_USE)
                                                    <li> 타입 선언 </li>
                                                </li>
                                            </span>
                                        </li>
                                        {/*  */}
                                        <li> <h3> @Documented </h3>
                                            <span className="sblock">
                                                <li> 어노테이션을 Javadoc에 포함 </li>
                                            </span>
                                        </li>
                                        {/*  */}
                                        <li> <h3> @Inherited </h3>
                                            <span className="sblock">
                                                <li> 어노테이션을 상속이 가능하게 만듬 </li>
                                            </span>
                                        </li>
                                        {/*  */}
                                        <li> <h3> @Repeatable </h3>
                                            <span className="sblock">
                                                <li> Java8 부터 지원 </li>
                                                <li> 연속적으로 어노테이션을 선언 가능하게 함 </li>
                                            </span>
                                        </li>
                                        {/*  */}
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 커스텀 어노테이션
                                    <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 멤버 변수 </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li> int ElementName() default 0; # 정수형</li>
                                                <li> String ElementName1() default "str"; # 문자열</li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li> @CustomAnnotaionName(ElementName = 10) </li>
                                                <li> private int num1 </li> <br />
                                                <li> @CustomAnnotaionName  #디폴트값 0이 들어감 </li>
                                                <li> private int num2 </li>
                                                <li> @CustomAnnotaionName1(ElementName = "str1") </li>
                                                <li> private String str1 </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li> <h3>  어노테이션 인터페이스 </h3>
                                            <li> @Target(ElementType.FIELD) </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME) </li>
                                            <li> public @interface CustomAnnotaionName {'{'}
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </li>
                                        <li> <h3>  커스텀 어노테이션을 사용할 클래스 </h3>
                                            <li> public class ClassName {'{'}
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                                <li>  </li>
                                            </li>
                                            <li> {'}'} </li>
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
                </ul>
            </div>
        </>
    );
}

export default JavaAnnotation;