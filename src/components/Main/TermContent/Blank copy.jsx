import React, { useEffect, useRef, useState } from 'react';

const Term2 = (props) => {

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
            }}> &gt; </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#" className="col_b"> <b> Intellij-Gradle-JPA-MySQL </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';

                        }}> ❌ </button>
                    </span>
                    {/* <a href="#UserController" className="col_p"> UserController </a> */}
                    <p className="hyperlink">
                        <details open>
                            <summary> framework </summary>
                            {/* <a href="#UserController" className="col_p"> UserController </a> */}
                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mtitle"> <a name="">   </a> </span>
                    <p> <small>
                    </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="">  프레임워크 </a> </span>
                        <p> 어플리케이션의 구조를 결정하는 뼈대코드를 제공한다. </p>
                        <p> 개발자들의 역량 획일화  </p>
                        <p> 개발자들이 비즈니스 로직에만 집중 가능 </p>
                        <p> 개발자들이 유지보수 과정에서 일관성을 유지하게 해줌 </p>
                        {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p> */}
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="">  스프링 프레임워크 </a> </span>
                        <p> Ioc와 AOP를 지원하는 경량 컨테이너 프레임워크 </p>
                        <p> POJO 형태의 객체를 사용 가능하다 </p>
                        <span className="sblock">
                            <p> <i> IoC(Inversion of Control) </i> </p>
                            <p> 낮은 결합도를 유지하는 것 </p>
                            <p> 스프링 컨테이너가 Bean객체(개발자가 정의해야할 객체)를 대신 만들어준다. </p>
                            <p> 객체를 개발자가 직접 소스코드로 입력하여 생성하지 않아 의존관계가 적고
                                유지보수가 편리 -&gt; 결합도가 낮아짐
                            </p>
                            <p> 객체를 클래스 내부가 아닌 외부에서 생성하고 호출을 하여 사용을 한다.</p>
                        </span>
                        <span className="sblock">
                            <p> <i> 의존성관리 </i> </p>
                            <p> IoC의 핵심 </p>
                            <p> Dependency Lookup </p>
                            <p> Dependency Injection </p>
                            <p> 객체들간의 의존관계를 스프링설정파일에 등록 </p>
                            <p> 등록된 정보를 확인 </p>
                            <p> 생성자주입, 수정자(setter)주입 , 필드(어노테이션)주입</p>
                            <p> <i> 1. 생성자 주입 </i> </p>
                            <p> <i> 2. 수정자 주입 </i> </p>
                            <p> <i> 3. 필드 주입</i> 각 클래스 파일마다 객체를 생성하는 것이 아닌 스프링 설정 파일에
                                객체를 생성하게 함으로써 스프링 컨테이너가 알아서 객체를 주입해
                                주는 방식
                            </p>
                        </span>
                        <span className="sblock">
                            <p> <i> AOP(Aspect Oriented Programming) </i> </p>
                            <p> 객체지향 관점이 아닌 관점지향에서의 프로그래밍 </p>
                            <p> 각 로직마다 공통적으로 되는 기능들을 독립적으로 분리하고
                                서비스로직에만 집중을 하는 것이다. </p>
                            <p>공통된 로직으로 필터나 보안 등이 있다.</p>
                        </span>
                        {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} alt='' /> </p> */}
                    </span>
                </span>
            </div>
        </>
    );
}

export default Term2;