import React, { useEffect, useRef, useState } from 'react';

const SpringError = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
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
            blockRef.current[0].style.height = window.outerHeight;
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
            blockRef.current[0].style.height = window.outerHeight;
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
                        <a href="#main" className="col_b"> <b> 스프링 공부 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 자바 문법 </summary>
                            <a href="#Optional" className="col_p"> Optional </a>
                            <a href="#Stream" className="col_p">Stream </a>
                            <a href="#함수의 종류" className="col_p">함수의 종류</a>
                            <a href="#Assertion" className="col_p">Assertion </a>
                            <a href="#자료구조 map" className="col_p">자료구조 map </a>
                            <a href="#Enum" className="col_p">Enum </a>
                            <a href="#Generic" className="col_p">Generic </a>
                            <a href="#" className="col_p"> </a>
                            {/* <a href="#" className="col_p"> </a> */}
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <span className="mblock">
                        <span className="stitle"> <a name="자바 문법"> 자바 문법 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> Optional </span>
                            <p> T타입의 객체를 포장해주는 래퍼 클래스 </p>
                            <p> Null을 예외처리하지 않고 처리가 가능하다는 장점이 있다. </p>
                            <span className="mblock">
                                <span className="sblock">
                                    <p> <i> {" opt.isEmpty() "} </i> : 값이 존재하는지 boolean값 리턴 </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.orElseGet() "} </i> : 저장된 값이 존재하면 값을 반환 값이 없으면 인수로 전달된
                                        람다 표현식 결과값 반환 </p>
                                </span>
                                <p> 시작 처리 : 옵셔널 객체 생성 메소드 </p>
                                <span className="sblock">
                                    <p> <i> {"Optional.of()"} </i> : 저장된 값이 존재하면 입력된 값을 반환 없으면
                                        인수로 전달된 예외를 발생 </p>
                                    <p>  Optional&lt;String&gt; opt = Optional.of("result"); </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {"Optional.ofNullable()"} </i> : value가 null인 경우 Optional 반환</p>
                                    <p> Optional&lt;String&gt; opt = Optional.ofNullable(객체); </p>
                                    <p> 객체가 존재하지 않으면 return Optional.empty + 에러발생</p>
                                    <p> 객체가 존재하면 return Optional객체 </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {"Optional.empty()"} </i> : 비어있는 Optional 객체 생성, Optional을 null로 초기화하기도 함 </p>
                                    <p> Optional&lt;String&gt; opt = Optional.empty(); </p>
                                </span>
                                <p> 중간 처리 , 옵셔널 객체가 생성된 후 사용가능, 아래 메서드는 옵셔널 객체를 반환 </p>
                                <span className="sblock">
                                    <p> <i> {" opt.ifPresent() "} </i> : </p>
                                    <p> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</p>
                                    <p> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</p>
                                </span>
                                <p> 종단 처리 , 옵셔널 객체의 체이닝을 끝냄 </p>
                                <span className="sblock">
                                    <p> <i> {" opt.ifPresent() "} </i> : </p>
                                    <p> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</p>
                                    <p> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.isPresent() "} </i> : 객체가 존재하는지 여부 판단, 있으면 true </p>
                                    <p>  {" Optional.ofNullable(객체).isPresent(); "} : 객체가 존재하는지 여부 판단, 있으면 true </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.get() "} </i> : 객체를 꺼냄, 비어있는 옵셔널 객체면 예외 발생 </p>
                                    <p>  {" Optional.ofNullable(null).get(); "}  </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.orElse() "} </i> : 옵셔널 객체가 비어있든,아니든 실행 기본값으로 제공할 객체를 지정 </p>
                                    <p>  {" Optional.ofNullable(null).orElse(객체);"} </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.orElseGet() "} </i> : 옵셔널 객체가 비어있을때만 실행 , 기본갑으로 제공할 공급자함수 지정 </p>
                                </span>
                                <span className="sblock">
                                    <p> <i> {" opt.orElseThrow() "} </i> : (자바10)옵셔널 객체가 비어있으면 , 예외 공급자함수를 통해 예외 발생 </p>
                                </span>
                            </span>
                        </span>
                    </span>
                    {/* <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> </span>
                        </span>
                    </span> */}
                    <span className="mblock">
                        <span className="sstitle"> <a name="Stream"> Stream </a> </span>
                        <p> 스트림은 배열 또는 컬렉션 인스턴스를 이용해서 사용 가능</p>
                        <span className="sblock">
                            <p> 배열 스트림</p>
                            <p> {"Stream<String> stream = Arrays.stream(arr)"} </p>
                            <p> {"Stream<String> streamOfArrayPart = Arrays.stream(arr,1,3)"} </p>
                        </span>
                        <span className="sblock">
                            <p> 컬렉션 스트림</p>
                            <p> {"public interface Collection<E> extends Iterable<E>"} </p>
                            <p> {"default Stream<E> stream() "} </p>
                            <p> {" return StreamSupport.strea(spliterator(),false);"} </p>
                            <p> {" "}</p>
                            <p> {" Stream<String> stream = list.stream(); "}</p>
                            <p> {" Stream<String> parallelStream = list.parallelStream(); "}</p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="sstitle"> <a name="함수의 종류"> 함수의 종류</a> </span>
                        <span className="sblock">

                            <p> <a href="https://moreget.github.io/dev-00000061-Java-Consumer_Supplier/" target="_blank"> 참고 사이트 </a> </p>
                            <p> Consumer : 매개값은 있고 리턴값은 없음 </p>

                            <p> Supplier : 매개값은 없고, 리턴값은 있음</p>

                            <p> Function : 매개값을 (주로)리턴값으로 반환 </p>

                            <p> Operator : 매개값으로 연산하고 리턴 반환</p>

                            <p> Predicate : 매개값은 있고 리턴은 boolean반환 </p>
                        </span>

                    </span>
                    <span className="mblock">
                        <span className="sstitle"> <a name="Assertion"> Assertion </a> </span>
                        <span className="sblock">
                            <p> 코드가 잘 작성되었는지 확인하는데 돕는 기능이다. 예외 처리와 비슷하기는
                                하지만 예외처리는 개발자가 생각하지 못한 에러에 대한 처리를 담당하는 것이다.
                            </p>
                            <p> Assertion은 개발자가 정한 조건을 만족시키면 코드가 실행되고 그 외에는 실행되지
                                못하게 하는 차이가 있다.
                            </p>
                            <p> Assertion을 적당한 위치에 배치시켜 사용하면 좋은 동작을 수행할 수 있다. 반대로
                                모든 상황에 적용시키면 좋지 않다.
                            </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="sstitle"> <a name="자료구조 map"> 자료구조 map </a> </span>
                        <span className="sblock">
                            <p> {"Map<자료형,자료형> Map객체명 = new HashMap<>(); "}</p>
                            <p> 메서드 종류 </p>
                            <p> <i> Map객체.put(키,값) </i> : 맵객체에 추가 </p>
                            <p> <i> Map객체.keys() </i> : 객체의 키만 담은 배열 반환 </p>
                            <p> <i> Map객체.values() </i> : 객체의 값만 담은 배열 반환 </p>
                            <p> {"Collection<String> values = map.values();"}</p>
                            <p> {"String[] arr = values.toArray(new String[0]);"}</p>
                            <p> {"List<String> list = new ArrayList<>(values);"}</p>
                            <p> {"Set<String> set = new HashSet<>(values);"}</p>
                            <p> <i> Map객체.entries() </i> : 객체의 [키,값] 담은 배열 반환 </p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="sstitle"> <a name="Enum"> Enum </a> </span>
                        <span className="sblock">
                            <small> 상수들로 만들어진 집합, 열거형 클래스</small>
                            <p> enum 클래스를 만들고 사용할 때는 enum클래스.값 , enum클래스[인덱스] 처럼 사용</p>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="sstitle"> <a name="Generic"> Generic </a> </span>
                        <small> 자료형 타입을 정해서 사용하는 메소드 </small>
                        <span className="sblock">
                            <span className="sstitle"> Generic </span>
                            <ul>
                                <span className="sstitle"> Generic Class</span>
                                <p> public class 클래스명{'<T>'}  </p>
                                <p> 클래스명{'<T>'} 객체명 = new 클래스{'<>'}() </p>
                                <span className="sstitle"> Generic Method </span>
                                <p> public static {'<T>'} void 메소드명(T array)  </p>
                                <span className="sstitle"> </span>
                                <p>  </p>

                            </ul>
                        </span>
                        <span className="sblock">
                            <span className="sstitle"> 제너릭 타입 이름 정하기 </span>
                            <ul>
                                <li> E : 요소(Element, 자바 컬렉션)  </li>
                                <li> K : 키  </li>
                                <li> N : 숫자  </li>
                                <li> T : 타입  </li>
                                <li> V : 값  </li>
                            </ul>
                        </span>
                        <span className="sblock">
                            <span className="sstitle"> Generic WildCard </span>
                            <p> {'<?>'} : 모든 타입의 인자를 받을 수 있음  </p>
                            <p> {'<? extends 부모클래스>'} : 부모 클래스의 자식 클래스를 인자로 받음,
                                하지만 부모클래스의 정의된 기능만 사용가능하다?  </p>
                            <p> {'<? super 자식클래스>'} : 자식클래스의 부모클래스를 인자로 받음  </p>
                        </span>
                        <span className="sblock">
                            <span className="sstitle"> Generic example </span>
                            <p> ArrayList{'<T>'} array = new ArrayList{'<>'}(); </p>
                            <p> 클래스{'<T extends 부모클래스>'} </p>
                        </span>

                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="sstitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <small>  </small>
                            <p> </p>
                        </span>
                    </span>
                    {/*  */}
                    {/* <span className="mblock">
                        <span className="sstitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <small>  </small>
                            <p> </p>
                        </span>
                    </span> */}
                </span>
            </div>
        </>
    );
}
export default SpringError;

