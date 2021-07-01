import React, { useEffect, useRef, useState } from 'react';

const SpringCode = (props) => {

    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.innerWidth);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
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
                        <a href="#" className="col_b"> <b> Eclipse Bean Xml Injection </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <p className="hyperlink">
                        <details open>
                            <summary> 스프링 코드 정리 </summary>
                            <a href="#이클립스 applicationContext.xml"> 이클립스 applicationContext.xml </a>
                            <a href="#cmd창으로 빌드하고 실행해보기"> cmd창으로 빌드하고 실행해보기 </a>
                            <a href="#어노테이션"> 어노테이션 </a>
                            <a href="#xml과 어노테이션에서 관리할것"> xml과 어노테이션에서 관리할것 </a>
                        </details>
                    </p>
                </div>
            </div>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p> */}
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> 스프링 코드 정리 </span>
                    <p> <small>  </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="이클립스 applicationContext.xml">  이클립스 applicationContext.xml </a> </span>
                        <p> <small> 이클립스 applicationContext.xml 사용법 </small> </p>
                        <span className="sblock">
                            <p className="sstitle" ><i> &lt; bean &gt; </i>  </p>
                            <p> 기본 생성자가 필요하다. </p>
                            <p> <small> &lt; bean class="패키지.클래스명" id="사용할빈이름" init-method="메소드" destroy-method="메소드"
                                lazy-init="false(default)" scope="singleton(default)" /&gt; </small> </p>
                            <p> init-method="메소드() : 빈 객체가 생성될 떄 실행되는 메소드 </p>
                            <p> destroy-methode="메소드() : 빈 객체가 사라질 떄 실행되는 메소드 </p>
                            <p> lazy-init="false(default) : 빈 객체를 사용할 때 생성할지 말지 결정 </p>
                            <p> scope="singleton(default) : 빈 객체를 하나만 사용하게 할지 말지 결정</p>
                            <span className="lblock">
                                <p className="sstitle" ><i> &lt; constructor-arg ref="" &gt; </i>  </p>
                                <p><small> &lt; constructor-arg ref="sw" / &gt;  </small></p>
                                <p><small> &lt; bean class="coupling.AppleWatch" id="sw" lazy-init="true" / &gt;  </small></p>
                            </span>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> &lt; import &gt; </i>  </p>
                            <p><small> &lt; import resource="~~.xml" / &gt;  </small></p>
                            <p> resource : 다른 xml파일을들 불러모음(하나의 xml로 합치는 방법)  </p>
                            <p> &lt;  &gt;  </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> &lt; 어노테이션 설정 &gt; </i>  </p>
                            <p> applicationContext.xml 파일 우클릭 - open with - Spring Config Editor 그리고 appliactionContext.xml 화면에
                                하단 위쪽으로 보면  Namespaces탭에서 context 체크박스 체크
                            </p>
                            <p> 그러면 파일 내부에 xmlns:context="http://www.springframework.org/schema/context" 코드 추가된것을 확인</p>
                            <p> <i> 정의 </i> </p>
                            <p> &lt; context:component-scan base-package="패키지명" &gt;  </p>
                            <p> <i> 사용 </i> </p>
                            <p> @Componet("") 선언하고 생성자가 필요하다고 함</p>

                        </span>
                        {/* <span className="sblock">
                            <p className="sstitle" ><i> &lt; &gt; </i>  </p>
                        </span> */}
                    </span>
                    {/* 이클립스 applicationContext.xml 끝 */}
                    <span className="mblock">
                        <span className="stitle">
                            <a name="cmd창으로 빌드하고 실행해보기"> cmd창으로 빌드하고 실행해보기 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                            <p> cmd창 - cd 파일경로 - gradlew.bat build 입력 - cd build - cd libs - java -jar 파일명-0.0.1-SNAPSHOT.jar</p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="어노테이션"> 어노테이션 </a>
                        </span>
                        <p> 스프링 컨테이너가 </p>
                        <p> 1. 이름을 보고 맵핑 </p>
                        <p> 2. 타입을 보고 맵핑 </p>
                        <span className="sblock">
                            <p className="sstitle" ><i> @Autowired </i>  </p>
                            <p> 일반적으로 멤버변수에 사용 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i> @Qualifier </i>  </p>
                            <p> 주입할 대상(객체)의 이름을 알려주는 어노테이션 </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>@Controller</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>@Service</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>@Repository</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>@Configuration</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                            <p> </p>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                            <p> </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle">
                            <a name="xml과 어노테이션에서 관리할것"> xml과 어노테이션에서 관리할것 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>xml</i>  </p>
                            <p> 교체될 가능성이 있는 객체, 라이브러리, 자바소스변경x , 유지보수가능, 가독성저하
                            </p>
                            <p className="sstitle" ><i>어노테이션</i>  </p>
                            <p> 설정할필요 없음, 가독성o , 교체되지 않는 객체관리
                            </p>
                        </span>
                    </span>
                    {/* <span className="mblock">
                        <span className="stitle">
                            <a name=""> 소제목 </a>
                        </span>
                        <span className="sblock">
                            <p className="sstitle" ><i>1.</i>  </p>
                        </span>
                    </span> */}
                </span>
            </div>
        </>
    );
}

export default SpringCode;