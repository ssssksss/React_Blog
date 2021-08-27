import React, { useEffect, useRef, useState } from 'react';

const JavaSerializable = (props) => {

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
                                <a href="#자바에서 Serializable 인터페이스란?" className="col_p"> 자바에서 Serializable 인터페이스란? </a>
                                <a href="#직렬화란?" className="col_p"> 직렬화란? </a>
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
                            <summary className="stitle"> ▶ 자바에서 Serializable 인터페이스란? <a name="자바에서 Serializable 인터페이스란?" style={{ visibility: "hidden" }}> 자바에서 Serializable 인터페이스란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 유저가 만든 클래스 파일을 읽기,쓰기,다른서버송신,수신 하는 용도 </span>
                                <span className="mblock">
                                    <li> 자바코드로 Serializable 인터페이스를 찾아보면 아무런 코드가 없다. 그래서 이게 뭐지 라는 생각이 든다면 당연한
                                        것이다. 인터페이스를 구현한 클래스가 특정능력을 가진다는 의미로 마커 인터페이스라고도 한다. </li>
                                    <li> JVM에서 이 인터페이스를 구현한 객체를 인식해서 저장하거나 보내거나 하는 일을 하게 만든다. </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 직렬화란? <a name="직렬화란?" style={{ visibility: "hidden" }}> 직렬화란? </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 외부 자바 시스템에서도 사용가능하게 2진수 형태(바이트스트림)로 데이터를 변환/역변환 하는 기술 </span>
                                <span className="mblock">
                                    <li> 양쪽의 자바시스템의 소스버전이 다르면 직렬화를 주고받는 데이터가 변할 수 있으므로 버전이 같아야함  </li>
                                    <li> private static final long serialVersionUID = 1L; </li>
                                    <small> 클래스1을 직렬화, 그리고 클래스1을 수정해서 클래스2라고 지칭 , 클래스 1을 직렬화
                                        했던것을 클래스2로 역직렬화를 하게 되면 에러가 발생, 2개의 클래스를 다르다고 인식,
                                        이때 serialVersionUID 로 식별자를 사용하게 되면 같다고 여겨서 에러가 발생 하지 않음 </small>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 자바 직렬화 인코딩 코드  <a name="자바 직렬화 인코딩 코드" style={{ visibility: "hidden" }}> 자바 직렬화 인코딩 코드 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <p> {'private static String serialize() {'} </p>
                                    <p> &nbsp;{'Member member = new Member("홍길동","활빈당",20);'} </p>
                                    <p> &nbsp;{'byte[] serializedMember;'} </p>
                                    <p> &nbsp;{'String serializedMemberStr = ""; '} </p>
                                    <p> &nbsp;{'try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {'} </p>
                                    <p> &nbsp;&nbsp;{'try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {'} </p>
                                    <p> &nbsp;&nbsp;&nbsp;{'oos.writeObject(member);'} </p>
                                    <p> &nbsp;&nbsp;&nbsp;{'serializedMember = baos.toByteArray();'} </p>
                                    <p> &nbsp;&nbsp;&nbsp;{'serializedMemberStr = Base64.getEncoder().encodeToString(serializedMember);'} </p>
                                    <p> &nbsp;&nbsp;{'}'} </p>
                                    <p> &nbsp;{'}'} </p>
                                    <p> &nbsp;{'return serializedMemberStr;'} </p>
                                    <p> {'}'} </p>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 자바 직렬화 디코딩 코드  <a name="자바 직렬화 디코딩 코드" style={{ visibility: "hidden" }}> 자바 직렬화 디코딩 코드 </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> {'private static void deserialize(byte[] serializedMember) { '} </li>
                                    <li> &nbsp;{'try (ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)) { '} </li>
                                    <li> &nbsp;&nbsp;{'try (ObjectInputStream ois = new ObjectInputStream(bais)) { '} </li>
                                    <li> &nbsp;&nbsp;&nbsp;{'Object o = ois.readObject(); '} </li>
                                    <li> &nbsp;&nbsp;&nbsp;{'Member o1 = (Member) o; '} </li>
                                    <li> &nbsp;&nbsp;&nbsp;{'System.out.println(o1); '} </li>
                                    <li> &nbsp;&nbsp;{'} '} </li>
                                    <li> &nbsp;{'} '} </li>
                                    <li> {'} '} </li>
                                </span>
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

export default JavaSerializable;