import React from 'react';

const JavaAnnotation = (props) => {


    return (
        <>
            <div className="common_style" >
                <div className="lblock">
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle">  자바 어노테이션 종류
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> @Override </div>
                                <div className="mblock">
                                    <li> 메서드 위에 선언하여 부모클래스로부터 상속받은 메소드라는 것을 표시 </li>
                                    <li> 상속받는 메소드가 존재하지 않으면 컴파일 에러를 발생한다. </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> @Deprecated </div>
                                <div className="mblock">
                                    <li> 해당 메서드를 사용하지 않는다는 표시 </li>
                                    <li> 사용을 하게되면 컴파일 경고 표시 </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> @SuppressWarnings </div>
                                <div className="mblock">
                                    <li> 선언된 위치에 컴파일 경고를 무시를 하게 한다. </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> @SafeVarargs </div>
                                <div className="mblock">
                                    <li> 자바 7부터 지원 </li>
                                    <li> 제너릭 같은 가변인자의 매개변수를 사용할 때 경고를 무시 </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> @FunctionalInterface </div>
                                <div className="mblock">
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
                                </div>
                                {/*  */}
                                <div className="sstitle">  </div>
                                <div className="mblock">
                                    <li>  </li>
                                </div>
                                {/*  */}
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle">  메타 어노테이션
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> 설명 </div>
                                <div className="mblock">
                                    <li> JEE5 부터 추가된 요소 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                {/*  */}
                                <div className="sstitle"> 메타 어노테이션 종류 </div>
                                <div className="mblock">
                                    <li> <h3> @Retention : 자바 컴파일러가 어노테이션을 어떻게 다룰지 설정</h3>
                                        <div className="sblock">
                                            <li> @Retention(RetentionPolicy.SOURCE)
                                                <li> 컴파일 전까지만 생존 </li>
                                            </li>
                                            <li> @Retention(RetentionPolicy.CLASS)
                                                <li> 컴파일러가 클래스를 참조할때 까지 생존 </li>
                                            </li>
                                            <li> @Retention(RetentionPolicy.RUNTIME)
                                                <li> 컴파일 이후에도 생존 , JVM에서 참조가능 </li>
                                            </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> @Target : 어노테이션을 적용할 위치를 선택 </h3>
                                        <div className="sblock">
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
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> @Documented </h3>
                                        <div className="sblock">
                                            <li> 어노테이션을 Javadoc에 포함 </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> @Inherited </h3>
                                        <div className="sblock">
                                            <li> 어노테이션을 상속이 가능하게 만듬 </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li> <h3> @Repeatable </h3>
                                        <div className="sblock">
                                            <li> Java8 부터 지원 </li>
                                            <li> 연속적으로 어노테이션을 선언 가능하게 함 </li>
                                        </div>
                                    </li>
                                    {/*  */}
                                    <li>  </li>
                                </div>
                                {/*  */}
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className="mblock">
                        <details>
                            <summary className="stitle">  커스텀 어노테이션
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <div className="sblock">
                                <div className="sstitle"> 멤버 변수 </div>
                                <div className="mblock">
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
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @SuppressWarning <small> # JDK1.5 </small>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 1. 컴파일러가 경고하는 내용을 제외할 때 사용 </li>
                                    <li> 2. 너무 많은 불필요한 경고를 줄일 때 사용한다. </li>
                                    <li> @SuppressWarnings("[all,cast,dep-ann,deprecation,fallthrough,...]") <small> # 2개이상은 {'{"","",...} 이와 같이 사용하면 된다'} </small>
                                        <li> all : 모든 경고 제외 </li>
                                        <li> cast : 캐스팅(형변환) 연산자 관련 제외 </li>
                                        <li> dep-ann : 사용하지 말아야 하는 주석 관련 경고 제외 </li>
                                        <li> deprecation : 사용하지 말아야 하는 메소드 경고 제외 </li>
                                        <li> fallthrough : switch에서 break 관련 경고 제외 </li>
                                        <li> finally : 반환하지 않는 finally 블럭 관련 경고 제외 </li>
                                        <li> null : null 관련 경고 제외 </li>
                                        <li> rawtypes : 제네릭을 사용하는 클래스의 매개변수가 불분명할때 경고 제외  </li>
                                        <li> unchecked : 검증되지 않은 연산자 경고 제외 </li>
                                        <li> unused : 사용하지 않는 코드 관련 경고 제외 </li>
                                        <li> boxing : boxing,unboxing 오퍼레이션과 관련된 경고를 제외 </li>
                                        <li> hiding : 변수를 숨기는 로컬과 관련된 경고 제외 </li>
                                        <li> incomplete-switch : switch 문에서 누락된 항목과 관련된 경고 제외 </li>
                                        <li> javadoc : javadoc 경고와 괸련된 경고 제외 </li>
                                        <li> nls : 비 nls문자열 리터럴과 관련된 경고 제외 </li>
                                        <li> resource : 닫기가 가능한 유형의 자원 사용 관련 경고 제외 </li>
                                        <li> restriction : 잘못된 문법이나 금지된 참조 사용법과 관련된 경고 제외 </li>
                                        <li> serial : 직렬화 가능 클래스에 누락된 serialVersionUID 필드와 관련되 경고 제외 </li>
                                        <li> <a href="" target="_blank" rel="noopener noreferrer"></a> </li>
                                    </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </div>

            </div>
        </>
    );
}

export default JavaAnnotation;