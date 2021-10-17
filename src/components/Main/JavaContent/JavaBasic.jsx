import React from 'react';

const JavaBasic = (props) => {

    return (
        <>
            <div className="common_style">
                <ul>
                    <div className="lblock">
                        <div className="mtitle"> <a name="자바 문법"> 자바 문법 </a> </div>
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="출력메소드">  출력메소드 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> System.out.println(""); #줄바꿈</li>
                                    <li> System.out.print(""); </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="자료형">  자료형 </a> </summary>
                                <div className="sblock">
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
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="입력메소드">  입력메소드 </a> </summary>
                                <div className="sblock">
                                    <small> import java.util.Scanner; </small>
                                    <li> Scanner scanner = new Scanner(System.in); </li>
                                    <li> scanner.nextlnt(); #숫자입력</li>
                                    <li> scanner.next(); #문자열입력</li>
                                    <li>  </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="문자열">  문자열 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> 문자열.toLowerCase() #모두 소문자로 </li>
                                    <li> 문자열.toUpperCase() #모두 대문자로 </li>
                                    <li> 문자열1.equals(문자열2) #2개의 문자열을 비교 </li>
                                    {/* 기억이 잘안나서 다시 봐야 된다. */}
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="배열">  배열 </a> </summary>
                                <div className="sblock">
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
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="반복문">  반복문 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> for ( int i : 배열) {'{ 코드작성 }'} </li>
                                    <li> for ( String name : 배열) {'{ 코드작성 }'} </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="상속">  상속 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> @Override #굳이 선언을 해줄 필요는 없지만 개발자들이 보기 편함 </li>
                                    <li> extends 부모클래스 </li>
                                    <li> implements 인터페이스 </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="랜덤">  랜덤 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> rand.nextInt() #랜덤함수 사용 </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="인터페이스">  인터페이스 </a> </summary>
                                <div className="sblock">
                                    <small> 인터페이스를 상속받은 클래스는 무조건 메소드를 선언해주어야 한다. </small>
                                    <li> public interface 인터페이스명 {'{'} </li>
                                    <li> &nbsp;자료형 메소드명(); </li>
                                    <li> {'}'} </li> <br />
                                    <li> public class 클래스명 implements 인터페이스명 </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="캐스팅">  캐스팅 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li>  </li>
                                </div>
                            </details></div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="형변환">  형변환 </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li>  </li>
                                </div>
                            </details></div>
                        {/*  */}

                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> Optional
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'> 설명 </div>
                                    <div className='mblock'>
                                        <li> T타입의 객체를 포장해주는 래퍼 클래스 </li>
                                        <li> Null을 예외처리하지 않고 처리가 가능하다는 장점이 있다. </li>
                                    </div>
                                    <div className='sstitle'> 설명 </div>
                                    <div className='mblock'>
                                        <li> opt.isEmpty() <small> # 값이 존재하는지 boolean값 리턴  </small> </li>
                                        <li> opt.orElseGet() <small> # 저장된 값이 존재하면 값을 반환 값이 없으면 인수로 전달된
                                            람다 표현식 결과값 반환 </small> </li>
                                    </div>
                                    <div className='sstitle'>  시작 처리 : 옵셔널 객체 생성 메소드 </div>
                                    <div className='mblock'>
                                        <li> Optional.of() <small> # 저장된 값이 존재하면 입력된 값을 반환 없으면 인수로 전달된 예외를 발생 </small>
                                            <li> Optional{'<String>'} opt = Optional.of("result"); </li>
                                        </li> <br />
                                        <li> Optional.ofNullable() <small> # value가 null인 경우 Optional 반환 </small>
                                            <li> {' Optional<String> opt = Optional.ofNullable(객체); '} </li>
                                            <li> 객체가 존재하지 않으면 return Optional.empty + 에러발생 </li>
                                            <li> 객체가 존재하면 return Optional객체 </li>
                                        </li> <br />
                                        <li> Optional.empty() <small> # 비어있는 Optional 객체 생성, Optional을 null로 초기화하기도 함 </small>
                                            <li> {' Optional<String> opt = Optional.empty(); '} </li>
                                        </li> <br />
                                    </div>
                                    <div className='sstitle'> 중간 처리 , 옵셔널 객체가 생성된 후 사용가능, 아래 메서드는 옵셔널 객체를 반환 </div>
                                    <div className='mblock'>
                                        <li> {' opt.ifPresent() : '} <small> # </small> </li>
                                        <li> {' Optional.of("객체").ifPresent((value) -> { } ); '} <small> # </small> </li>
                                        <li> {' Optional.ofNullable(null).ifPresent((value) -> { } ); '} <small> # </small> </li>
                                    </div>
                                    <div className='sstitle'> 종단 처리 , 옵셔널 객체의 체이닝을 끝냄 </div>
                                    <div className='mblock'>
                                        <li> opt.isPresent()  <small> # 객체가 존재하는지 여부 판단, 있으면 true </small> </li>
                                        <li> Optional.ofNullable(객체).isPresent();  <small> # 객체가 존재하는지 여부 판단, 있으면 true </small> </li> <br />
                                        <li> opt.get()  <small> # 객체를 꺼냄, 비어있는 옵셔널 객체면 예외 발생</small>
                                            <li> Optional.ofNullable(null).get(); </li>
                                        </li> <br />
                                        <li> opt.orElse()  <small> # 옵셔널 객체가 null이든 아니든 실행 기본값으로 제공할 객체를 지정 </small>
                                            <li> Optional.ofNullable(객체).orElse(객체,문자열); <small> # 객체값이 Null일때 사용할 문자열이나 객체를 지정  </small> </li>
                                        </li> <br />
                                        <li> opt.orElseGet()  <small> # 옵셔널 객체가 null일 때만 실행 , 기본값으로 제공할 공급자함수 지정 </small>
                                            <li>  {' Optional.ofNullable(username).orElseGet(() -> "" ); '}  </li>
                                        </li> <br />
                                        <li> opt.orElseThrow()  <small> # 옵셔널 객체가 비어있으면 , 예외 공급자함수를 통해 예외 발생 </small> </li>
                                        <li> {' opt.ifPresent() : '}  <small> # </small> </li>
                                        <li> {' Optional.of("객체").ifPresent((value) -> { } ); '}  <small> # </small> </li>
                                        <li> {' Optional.ofNullable(null).ifPresent((value) -> { } ); '}  <small> # </small> </li>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="Stream">  Stream </a> </summary>
                                <li> 스트림은 배열 또는 컬렉션 인스턴스를 이용해서 사용 가능</li>
                                <div className="sblock">
                                    <li> 배열 스트림</li>
                                    <li> {"Stream<String> stream = Arrays.stream(arr)"} </li>
                                    <li> {"Stream<String> streamOfArrayPart = Arrays.stream(arr,1,3)"} </li>
                                </div>
                                <div className="sblock">
                                    <li> 컬렉션 스트림</li>
                                    <li> {"public interface Collection<E> extends Iterable<E>"} </li>
                                    <li> {"default Stream<E> stream() "} </li>
                                    <li> {" return StreamSupport.strea(spliterator(),false);"} </li>
                                    <li> {" "}</li>
                                    <li> {" Stream<String> stream = list.stream(); "}</li>
                                    <li> {" Stream<String> parallelStream = list.parallelStream(); "}</li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="함수의 종류">  함수의 종류</a> </summary>
                                <div className="sblock">

                                    <li> <a href="https://moreget.github.io/dev-00000061-Java-Consumer_Supplier/" target="_blank"> 참고 사이트 </a> </li>
                                    <li> Consumer : 매개값은 있고 리턴값은 없음 </li>

                                    <li> Supplier : 매개값은 없고, 리턴값은 있음</li>

                                    <li> Function : 매개값을 (주로)리턴값으로 반환 </li>

                                    <li> Operator : 매개값으로 연산하고 리턴 반환</li>

                                    <li> Predicate : 매개값은 있고 리턴은 boolean반환 </li>
                                </div>
                            </details>
                        </div>
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="Assertion">  Assertion </a> </summary>
                                <div className="sblock">
                                    <li> 코드가 잘 작성되었는지 확인하는데 돕는 기능이다. 예외 처리와 비슷하기는
                                        하지만 예외처리는 개발자가 생각하지 못한 에러에 대한 처리를 담당하는 것이다.
                                    </li>
                                    <li> Assertion은 개발자가 정한 조건을 만족시키면 코드가 실행되고 그 외에는 실행되지
                                        못하게 하는 차이가 있다.
                                    </li>
                                    <li> Assertion을 적당한 위치에 배치시켜 사용하면 좋은 동작을 수행할 수 있다. 반대로
                                        모든 상황에 적용시키면 좋지 않다.
                                    </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="자료구조">  자료구조 </a> </summary>
                                <div className="sblock">
                                    <li> {"Map<자료형,자료형> Map객체명 = new HashMap<>(); "}</li>
                                    <li> 메서드 종류 </li>
                                    <li>  Map객체.put(키,값)  : 맵객체에 추가 </li>
                                    <li>  Map객체.keys()  : 객체의 키만 담은 배열 반환 </li>
                                    <li>  Map객체.values()  : 객체의 값만 담은 배열 반환 </li>
                                    <li> {"Collection<String> values = map.values();"}</li>
                                    <li> {"String[] arr = values.toArray(new String[0]);"}</li>
                                    <li> {"List<String> list = new ArrayList<>(values);"}</li>
                                    <li> {"Set<String> set = new HashSet<>(values);"}</li>
                                    <li>  Map객체.entries()  : 객체의 [키,값] 담은 배열 반환 </li>
                                    <li> ArrayList{'<String>'} array = new ArrayList{'<String>();'} #초기에 지정하지 않아도 사용이 가능</li>
                                    <li> HashMap{'<string>'} hashmap = new HashMap{'<>();'} </li>
                                    <li>  </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="Enum">  Enum </a> </summary>
                                <div className="sblock">
                                    <small> 상수들로 만들어진 집합, 열거형 클래스</small>
                                    <li> enum 클래스를 만들고 사용할 때는 enum클래스.값 , enum클래스[인덱스] 처럼 사용</li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="Generic">  Generic </a> </summary>
                                <small> 자료형 타입을 정해서 사용하는 메소드 </small>
                                <div className="sblock">
                                    <div className="sstitle"> 설명 </div>
                                    <div className="mblock">
                                        <li> JDK1.5 , Java5에 도입 </li>
                                        <li>  </li>
                                        <li> Java SE 7 부터 {'<>'}타입변수가 추측이 가능하면 아래와 같이 생략가능
                                            <div className="sblock">
                                                <li> {'Test<Integer> test = new Test<>(Integer); '} # Java SE 7 이전 </li>
                                                <li> {'Test<Integer> test = new Test<>(); '} # Java SE 7 이후 </li>
                                            </div>
                                        </li>
                                        <li> 자바 컴파일시에 클래스나 메소드에서 사용할 내부 데이터 타입을 지정 </li>
                                        <li> 자바 컴파일시 제너릭 타입은 타입 변환이 되고 선언되었던 모든 제너릭타입은 제거가 된다. </li>
                                        <li className="col_be"> 사용되는 객체의 타입 안정성 증가</li>
                                        <li className="col_be"> 반환값에 대한 Object객체 타입변환 및 변환검사에 드는 비용을 아낄 수 있음 </li>
                                        <li>  </li>
                                    </div>
                                    <div className="sstitle"> 제너릭 클래스 </div>
                                    <div className="mblock">
                                        <li> public class 클래스명{'<T>'}  </li>
                                        <li> public class 클래스명{'<T extends 클래스명>'} # 특정 타입만 사용하게 제한   </li>
                                        <li> public class 클래스명{'<T extends 인터페이스명>'} # 특정 타입만 사용하게 제한   </li>
                                        <li> public class 클래스명{'<T extends 클래스명 & 인터페이스명>'}    </li>
                                        <li> 클래스명{'<T>'} 객체명 = new 클래스{'<>'}() </li>
                                    </div>
                                    <div className="sstitle"> 제너릭 메소드 </div>
                                    <div className="mblock">
                                        <li> <h3> 설명 : </h3>
                                            <li> 제너릭 클래스의 타입변수와 메소드의 타입변수는 다른 타입변수임  </li>
                                            <li> 타입변수의 ?(와일드카드) 는 모든 타입 사용 가능 </li>
                                            <li>  </li>
                                        </li>
                                        <li> public static {'<T>'} void 메소드명(T array)  </li>
                                        <li> public static {'<?>'} void 메소드명(T array) </li>
                                        <li> public static {'<? extends T>'} void 메소드명(T array) # T타입을 상속받는 것만 가능 </li>
                                        <li> public static {'<? super T>'} void 메소드명(T array) # T타입이 상속받은 조상클래스 타입만 사용가능 </li>
                                        <li>   </li>
                                        <li>   </li>
                                        <li>   </li>
                                    </div>

                                    <div className="sstitle"> </div>
                                    <li>  </li>
                                </div>
                                <div className="sblock">
                                    <div className="sstitle"> 제너릭 타입변수(임의의 참조형 타입) 종류 </div>

                                    <li> E : 요소(Element, 자바 컬렉션)  </li>
                                    <li> K : 키  </li>
                                    <li> N : 숫자  </li>
                                    <li> T : 타입  </li>
                                    <li> V : 값  </li>

                                </div>
                                <div className="sblock">
                                    <div className="sstitle"> 시큐리티에서 사용하는 제너릭 타입 종류 </div>

                                    <li> O : 빌드 하려는 개체의 유형?  </li>
                                    <li> B : SecurityBuilder의 타입  </li>
                                    <li>  </li>

                                </div>
                                <div className="sblock">
                                    <div className="sstitle"> Generic WildCard </div>
                                    <li> {'<?>'} : 모든 타입의 인자를 받을 수 있음  </li>
                                    <li> {'<? extends 부모클래스>'} : 부모 클래스의 자식 클래스를 인자로 받음,
                                        하지만 부모클래스의 정의된 기능만 사용가능하다?  </li>
                                    <li> {'<? super 자식클래스>'} : 자식클래스의 부모클래스를 인자로 받음  </li>
                                </div>
                                <div className="sblock">
                                    <div className="sstitle"> Generic example </div>
                                    <li> ArrayList{'<T>'} array = new ArrayList{'<>'}(); </li>
                                    <li> 클래스{'<T extends 부모클래스>'} </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="람다식">  람다식 </a> </summary>
                                <div className="sblock">
                                    <li> <h3> 설명 : </h3>
                                        <li> 기존 메소드 표현을 간단하게 표현한 방식 </li>
                                        <li>   </li>
                                        <li>  </li>
                                    </li>
                                    {/*  */}
                                    <li> <h3>  메소드 예시 1</h3>
                                        <div className="mblock">
                                            <li> <h4> 기존 메소드 방식 </h4>
                                                <li> {'for(int i=0; i<10; i++) { '}
                                                    <li> System.out.println(i); </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </li>
                                            <li> <h4> 람다 메소드 방식 </h4>
                                                <li> IntStream.range(0,10).foreach((int i){'->'} )
                                                    <li> System.out.println(i) </li>
                                                </li>
                                                <li> ); </li>
                                            </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> 메소드  예시 2</h3>
                                        <div className="mblock">
                                            <li> <h4> 기존 메소드 방식 </h4>
                                                <li> int add(int x,int y) {'{'}
                                                    <li> return x+y; </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </li>
                                            <li> <h4> 람다 메소드 방식 </h4>
                                                <li> {'(x,y)-> x < y ? x : y; '} </li>
                                            </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> 1회용 클래스 예시 </h3>
                                        <div className="mblock">
                                            <li> <h4> 람다 클래스 방식 </h4>
                                                <li> {'new 클래스명(()-> {'}
                                                    <li> System.out.println(""); </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li>  </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="">  </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className="mblock">
                            <details> <summary className="stitle"> <a name="">   </a> </summary>
                                <div className="sblock">
                                    <small>  </small>
                                    <li> </li>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                    </div>
                </ul>
            </div>
        </>
    );
}
export default JavaBasic;

