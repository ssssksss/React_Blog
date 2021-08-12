import React, { useEffect, useRef, useState } from 'react';

const SpringError = (props) => {
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
                        <a href="#main" className="col_b"> <b> 스프링 공부 </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary> 자바 문법 </summary>
                            <a href="#출력메소드" className="col_p"> 출력메소드</a>
                            <a href="#자료형" className="col_p"> 자료형</a>
                            <a href="#입력메소드" className="col_p"> 입력메소드</a>
                            <a href="#문자열" className="col_p"> 문자열 </a>
                            <a href="#배열" className="col_p"> 배열</a>
                            <a href="#반복문" className="col_p"> 반복문</a>
                            <a href="#상속" className="col_p"> 상속</a>
                            <a href="#랜덤" className="col_p"> 랜덤 </a>
                            <a href="#인터페이스" className="col_p"> 인터페이스 </a>
                            <a href="#캐스팅" className="col_p"> 캐스팅 </a>
                            <a href="#형변환" className="col_p"> 형변환 </a>
                            <a href="#Optional" className="col_p"> Optional </a>
                            <a href="#Stream" className="col_p">Stream </a>
                            <a href="#함수의 종류" className="col_p">함수의 종류</a>
                            <a href="#Assertion" className="col_p">Assertion </a>
                            <a href="#자료구조" className="col_p">자료구조 </a>
                            <a href="#Enum" className="col_p">Enum </a>
                            <a href="#Generic" className="col_p">Generic </a>
                            <a href="#" className="col_p">  </a>
                            {/* <a href="#" className="col_p"> </a> */}
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">
                    <ul>
                        <span className="stitle"> <a name="자바 문법"> 자바 문법 </a> </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="출력메소드"> 출력메소드 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> System.out.println(""); #줄바꿈</li>
                                <li> System.out.print(""); </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="자료형"> 자료형 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> byte : 정수형</li>
                                <li> short : 정수형 </li>
                                <li> int : 정수형 </li>
                                <li> long : : 정수형</li>
                                <li> float : 실수형</li>
                                <li> double : 실수형</li>
                                <li> char : 문자형</li>
                                <li> boolean : 참거짓</li>
                                <li> string : 문자열</li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="입력메소드"> 입력메소드 </a> </span>
                            <span className="sblock">
                                <small> import java.util.Scanner; </small>
                                <li> Scanner scanner = new Scanner(System.in); </li>
                                <li> scanner.nextlnt(); #숫자입력</li>
                                <li> scanner.next(); #문자열입력</li>
                                <li>  </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="문자열"> 문자열 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> 문자열.toLowerCase() #모두 소문자로 </li>
                                <li> 문자열.toUpperCase() #모두 대문자로 </li>
                                <li> 문자열1.equals(문자열2) #2개의 문자열을 비교 </li>
                                {/* 기억이 잘안나서 다시 봐야 된다. */}
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="배열"> 배열 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> int arr[] = {'{1,2,3}'} </li>
                                <li> int arr[][] = {'{1,2,3},{4,5,6}'} </li>
                                <li> int arr[][] = new int[2][2]; #배열 선언</li>
                                <li> 배열.length #배열의 길이 </li>
                                <li> 배열1 = 배열2 #얕은복사 , 원본이 바뀌면 같이 변함 </li>
                                <li> 배열.clone() #배열복사 , 깊은복사(원본과 공유x) </li>
                                <li> 배열1 = Arrays.copyOf(배열2, 배열2.length) #깊은복사 </li>
                                <li> 배열1 = Arrays.copyOfRange(배열2, 시작인덱스, 원하는인덱스) #일정 배열을 깊은복사 </li>
                                <li> 2차원 배열을 복사하는 방법은 반복문을 통해서 작업한다. </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="반복문"> 반복문 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> for ( int i : 배열) {'{ 코드작성 }'} </li>
                                <li> for ( String name : 배열) {'{ 코드작성 }'} </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="상속"> 상속 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> @Override #굳이 선언을 해줄 필요는 없지만 개발자들이 보기 편함 </li>
                                <li> extends 부모클래스 </li>
                                <li> implements 인터페이스 </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="랜덤"> 랜덤 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> rand.nextInt() #랜덤함수 사용 </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="인터페이스"> 인터페이스 </a> </span>
                            <span className="sblock">
                                <small> 인터페이스를 상속받은 클래스는 무조건 메소드를 선언해주어야 한다. </small>
                                <li> public interface 인터페이스명 {'{'} </li>
                                <li> &nbsp;자료형 메소드명(); </li>
                                <li> {'}'} </li> <br />
                                <li> public class 클래스명 implements 인터페이스명 </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="캐스팅"> 캐스팅 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li>  </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="형변환"> 형변환 </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li>  </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sblock">
                                <span className="sstitle"> Optional </span>
                                <li> T타입의 객체를 포장해주는 래퍼 클래스 </li>
                                <li> Null을 예외처리하지 않고 처리가 가능하다는 장점이 있다. </li>
                                <span className="mblock">
                                    <span className="sblock">
                                        <li> <i> {" opt.isEmpty() "} </i> : 값이 존재하는지 boolean값 리턴 </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.orElseGet() "} </i> : 저장된 값이 존재하면 값을 반환 값이 없으면 인수로 전달된
                                            람다 표현식 결과값 반환 </li>
                                    </span>
                                    <li> 시작 처리 : 옵셔널 객체 생성 메소드 </li>
                                    <span className="sblock">
                                        <li> <i> {"Optional.of()"} </i> : 저장된 값이 존재하면 입력된 값을 반환 없으면
                                            인수로 전달된 예외를 발생 </li>
                                        <li>  Optional&lt;String&gt; opt = Optional.of("result"); </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {"Optional.ofNullable()"} </i> : value가 null인 경우 Optional 반환</li>
                                        <li> Optional&lt;String&gt; opt = Optional.ofNullable(객체); </li>
                                        <li> 객체가 존재하지 않으면 return Optional.empty + 에러발생</li>
                                        <li> 객체가 존재하면 return Optional객체 </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {"Optional.empty()"} </i> : 비어있는 Optional 객체 생성, Optional을 null로 초기화하기도 함 </li>
                                        <li> Optional&lt;String&gt; opt = Optional.empty(); </li>
                                    </span>
                                    <li> 중간 처리 , 옵셔널 객체가 생성된 후 사용가능, 아래 메서드는 옵셔널 객체를 반환 </li>
                                    <span className="sblock">
                                        <li> <i> {" opt.ifPresent() "} </i> : </li>
                                        <li> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</li>
                                        <li> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</li>
                                    </span>
                                    <li> 종단 처리 , 옵셔널 객체의 체이닝을 끝냄 </li>
                                    <span className="sblock">
                                        <li> <i> {" opt.ifPresent() "} </i> : </li>
                                        <li> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</li>
                                        <li> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.isPresent() "} </i> : 객체가 존재하는지 여부 판단, 있으면 true </li>
                                        <li>  {" Optional.ofNullable(객체).isPresent(); "} : 객체가 존재하는지 여부 판단, 있으면 true </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.get() "} </i> : 객체를 꺼냄, 비어있는 옵셔널 객체면 예외 발생 </li>
                                        <li>  {" Optional.ofNullable(null).get(); "}  </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.orElse() "} </i> : 옵셔널 객체가 비어있든,아니든 실행 기본값으로 제공할 객체를 지정 </li>
                                        <li>  {" Optional.ofNullable(null).orElse(객체);"} </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.orElseGet() "} </i> : 옵셔널 객체가 비어있을때만 실행 , 기본갑으로 제공할 공급자함수 지정 </li>
                                    </span>
                                    <span className="sblock">
                                        <li> <i> {" opt.orElseThrow() "} </i> : (자바10)옵셔널 객체가 비어있으면 , 예외 공급자함수를 통해 예외 발생 </li>
                                    </span>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="Stream"> Stream </a> </span>
                            <li> 스트림은 배열 또는 컬렉션 인스턴스를 이용해서 사용 가능</li>
                            <span className="sblock">
                                <li> 배열 스트림</li>
                                <li> {"Stream<String> stream = Arrays.stream(arr)"} </li>
                                <li> {"Stream<String> streamOfArrayPart = Arrays.stream(arr,1,3)"} </li>
                            </span>
                            <span className="sblock">
                                <li> 컬렉션 스트림</li>
                                <li> {"public interface Collection<E> extends Iterable<E>"} </li>
                                <li> {"default Stream<E> stream() "} </li>
                                <li> {" return StreamSupport.strea(spliterator(),false);"} </li>
                                <li> {" "}</li>
                                <li> {" Stream<String> stream = list.stream(); "}</li>
                                <li> {" Stream<String> parallelStream = list.parallelStream(); "}</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="함수의 종류"> 함수의 종류</a> </span>
                            <span className="sblock">

                                <li> <a href="https://moreget.github.io/dev-00000061-Java-Consumer_Supplier/" target="_blank"> 참고 사이트 </a> </li>
                                <li> Consumer : 매개값은 있고 리턴값은 없음 </li>

                                <li> Supplier : 매개값은 없고, 리턴값은 있음</li>

                                <li> Function : 매개값을 (주로)리턴값으로 반환 </li>

                                <li> Operator : 매개값으로 연산하고 리턴 반환</li>

                                <li> Predicate : 매개값은 있고 리턴은 boolean반환 </li>
                            </span>

                        </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="Assertion"> Assertion </a> </span>
                            <span className="sblock">
                                <li> 코드가 잘 작성되었는지 확인하는데 돕는 기능이다. 예외 처리와 비슷하기는
                                    하지만 예외처리는 개발자가 생각하지 못한 에러에 대한 처리를 담당하는 것이다.
                                </li>
                                <li> Assertion은 개발자가 정한 조건을 만족시키면 코드가 실행되고 그 외에는 실행되지
                                    못하게 하는 차이가 있다.
                                </li>
                                <li> Assertion을 적당한 위치에 배치시켜 사용하면 좋은 동작을 수행할 수 있다. 반대로
                                    모든 상황에 적용시키면 좋지 않다.
                                </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="자료구조"> 자료구조 </a> </span>
                            <span className="sblock">
                                <li> {"Map<자료형,자료형> Map객체명 = new HashMap<>(); "}</li>
                                <li> 메서드 종류 </li>
                                <li> <i> Map객체.put(키,값) </i> : 맵객체에 추가 </li>
                                <li> <i> Map객체.keys() </i> : 객체의 키만 담은 배열 반환 </li>
                                <li> <i> Map객체.values() </i> : 객체의 값만 담은 배열 반환 </li>
                                <li> {"Collection<String> values = map.values();"}</li>
                                <li> {"String[] arr = values.toArray(new String[0]);"}</li>
                                <li> {"List<String> list = new ArrayList<>(values);"}</li>
                                <li> {"Set<String> set = new HashSet<>(values);"}</li>
                                <li> <i> Map객체.entries() </i> : 객체의 [키,값] 담은 배열 반환 </li>
                                <li> ArrayList{'<String>'} array = new ArrayList{'<String>();'} #초기에 지정하지 않아도 사용이 가능</li>
                                <li> HashMap{'<string>'} hashmap = new HashMap{'<>();'} </li>
                                <li>  </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="Enum"> Enum </a> </span>
                            <span className="sblock">
                                <small> 상수들로 만들어진 집합, 열거형 클래스</small>
                                <li> enum 클래스를 만들고 사용할 때는 enum클래스.값 , enum클래스[인덱스] 처럼 사용</li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="sstitle"> <a name="Generic"> Generic </a> </span>
                            <small> 자료형 타입을 정해서 사용하는 메소드 </small>
                            <span className="sblock">
                                <span className="sstitle"> Generic </span>
                                <ul>
                                    <span className="sstitle"> Generic Class</span>
                                    <li> public class 클래스명{'<T>'}  </li>
                                    <li> 클래스명{'<T>'} 객체명 = new 클래스{'<>'}() </li>
                                    <span className="sstitle"> Generic Method </span>
                                    <li> public static {'<T>'} void 메소드명(T array)  </li>
                                    <span className="sstitle"> </span>
                                    <li>  </li>

                                </ul>
                            </span>
                            <span className="sblock">
                                <span className="sstitle"> 제너릭 타입 이름 종류 </span>
                                <ul>
                                    <li> E : 요소(Element, 자바 컬렉션)  </li>
                                    <li> K : 키  </li>
                                    <li> N : 숫자  </li>
                                    <li> T : 타입  </li>
                                    <li> V : 값  </li>
                                </ul>
                            </span>
                            <span className="sblock">
                                <span className="sstitle"> 시큐리티에서 사용하는 제너릭 타입 종류 </span>
                                <ul>
                                    <li> O : 빌드 하려는 개체의 유형?  </li>
                                    <li> B : SecurityBuilder의 타입  </li>
                                    <li>  </li>
                                </ul>
                            </span>
                            <span className="sblock">
                                <span className="sstitle"> Generic WildCard </span>
                                <li> {'<?>'} : 모든 타입의 인자를 받을 수 있음  </li>
                                <li> {'<? extends 부모클래스>'} : 부모 클래스의 자식 클래스를 인자로 받음,
                                    하지만 부모클래스의 정의된 기능만 사용가능하다?  </li>
                                <li> {'<? super 자식클래스>'} : 자식클래스의 부모클래스를 인자로 받음  </li>
                            </span>
                            <span className="sblock">
                                <span className="sstitle"> Generic example </span>
                                <li> ArrayList{'<T>'} array = new ArrayList{'<>'}(); </li>
                                <li> 클래스{'<T extends 부모클래스>'} </li>
                            </span>

                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <span className="sblock">
                                <small>  </small>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <span className="sstitle"> <a name="">  </a> </span>
                            <span className="sblock">
                                <small>  </small>
                                <li> </li>
                            </span>
                        </span>
                        {/*  */}

                    </ul>
                </span>
            </div>
        </>
    );
}
export default SpringError;

