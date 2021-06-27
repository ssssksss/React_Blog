import React from 'react';

const JavaBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 자바 문법(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#Optional">Optional</a>
                        <a href="#Stream">Stream</a>
                        <a href="#함수의 종류">함수의 종류</a>
                        <a href="#Assertion">Assertion</a>
                        <a href="#자료구조 map">자료구조 map</a>
                    </p>
                </span>
            </span>
            {/* <p> <a href="https://dev.w3.org/html5/html-author/charref" target="_blank"> Entity Code </a> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="Optional"> Optional </a> </span>
                <p> <a href="https://jdm.kr/blog/234"> 참고 </a></p>
                <p> java.util.Optional{"<T>"} 클래스 : T타입의 객체를 포장해주는 래퍼 클래스 </p>
                <span className="mblock">
                    <span className="mblock">
                        <p> <i> {" opt.isEmpty() "} </i> : 값이 존재하는지 boolean값 리턴 </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.orElseGet() "} </i> : 저장된 값이 존재하면 값을 반환 값이 없으면 인수로 전달된
                            람다 표현식 결과값 반환 </p>
                    </span>
                    <p> 시작 처리 : 옵셔널 객체 생성 메소드 </p>
                    <span className="mblock">
                        <p> <i> {"Optional.of()"} </i> : 저장된 값이 존재하면 입력된 값을 반환 없으면
                            인수로 전달된 예외를 발생 </p>
                        <p>  Optional&lt;String&gt; opt = Optional.of("result"); </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {"Optional.ofNullable()"} </i> : value가 null인 경우 Optional 반환</p>
                        <p> Optional&lt;String&gt; opt = Optional.ofNullable(객체); </p>
                        <p> 객체가 존재하지 않으면 return Optional.empty + 에러발생</p>
                        <p> 객체가 존재하면 return Optional객체 </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {"Optional.empty()"} </i> : 비어있는 Optional 객체 생성, Optional을 null로 초기화하기도 함 </p>
                        <p> Optional&lt;String&gt; opt = Optional.empty(); </p>
                    </span>
                    <p> 중간 처리 , 옵셔널 객체가 생성된 후 사용가능, 아래 메서드는 옵셔널 객체를 반환 </p>
                    <span className="mblock">
                        <p> <i> {" opt.ifPresent() "} </i> : </p>
                        <p> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</p>
                        <p> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</p>
                    </span>
                    <p> 종단 처리 , 옵셔널 객체의 체이닝을 끝냄 </p>
                    <span className="mblock">
                        <p> <i> {" opt.ifPresent() "} </i> : </p>
                        <p> Optional.of("객체").ifPresent((value) {"->"} {"{"} {"}"} );</p>
                        <p> Optional.ofNullable(null).ifPresent((value) {"->"} {"{"} {"}"} );</p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.isPresent() "} </i> : 객체가 존재하는지 여부 판단, 있으면 true </p>
                        <p>  {" Optional.ofNullable(객체).isPresent(); "} : 객체가 존재하는지 여부 판단, 있으면 true </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.get() "} </i> : 객체를 꺼냄, 비어있는 옵셔널 객체면 예외 발생 </p>
                        <p>  {" Optional.ofNullable(null).get(); "}  </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.orElse() "} </i> : 옵셔널 객체가 비어있든,아니든 실행 기본값으로 제공할 객체를 지정 </p>
                        <p>  {" Optional.ofNullable(null).orElse(객체);"} </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.orElseGet() "} </i> : 옵셔널 객체가 비어있을때만 실행 , 기본갑으로 제공할 공급자함수 지정 </p>
                    </span>
                    <span className="mblock">
                        <p> <i> {" opt.orElseThrow() "} </i> : (자바10)옵셔널 객체가 비어있으면 , 예외 공급자함수를 통해 예외 발생 </p>
                    </span>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="Stream"> Stream </a> </span>
                <p> 스트림은 배열 또는 컬렉션 인스턴스를 이용해서 사용 가능</p>
                <span className="mblock">
                    <p> 배열 스트림</p>
                    <p> {"Stream<String> stream = Arrays.stream(arr)"} </p>
                    <p> {"Stream<String> streamOfArrayPart = Arrays.stream(arr,1,3)"} </p>
                </span>
                <span className="mblock">
                    <p> 컬렉션 스트림</p>
                    <p> {"public interface Collection<E> extends Iterable<E>"} </p>
                    <p> {"default Stream<E> stream() "} </p>
                    <p> {" return StreamSupport.strea(spliterator(),false);"} </p>
                    <p> {" "}</p>
                    <p> {" Stream<String> stream = list.stream(); "}</p>
                    <p> {" Stream<String> parallelStream = list.parallelStream(); "}</p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="함수의 종류"> 함수의 종류</a> </span>
                <p> <a href="https://moreget.github.io/dev-00000061-Java-Consumer_Supplier/" target="_blank"> 참고 사이트 </a> </p>
                <p> Consumer : 매개값은 있고 리턴값은 없음 </p>
                <span className="mblock">
                </span>
                <p> Supplier : 매개값은 없고, 리턴값은 있음</p>
                <span className="mblock">
                </span>
                <p> Function : 매개값을 (주로)리턴값으로 반환 </p>
                <span className="mblock">
                </span>
                <p> Operator : 매개값으로 연산하고 리턴 반환</p>
                <span className="mblock">
                </span>
                <p> Predicate : 매개값은 있고 리턴은 boolean반환 </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="Assertion"> Assertion </a> </span>
                <p> 코드가 잘 작성되었는지 확인하는데 돕는 기능이다. 예외 처리와 비슷하기는
                    하지만 예외처리는 개발자가 생각하지 못한 에러에 대한 처리를 담당하는 것이다.
                </p>
                <p> Assertion은 개발자가 정한 조건을 만족시키면 코드가 실행되고 그 외에는 실행되지
                    못하게 하는 차이가 있다.
                </p>
                <p> Assertion을 적당한 위치에 배치시켜 사용하면 좋은 동작을 수행할 수 있다. 반대로
                    모든 상황에 적용시키면 좋지 않다.
                </p>
                <span className="mblock">
                    <p> </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="자료구조 map"> 자료구조 map </a> </span>
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
                <span className="mblock">
                    <p> </p>
                </span>
            </span>
            {/* <span className="lblock">
                <span className="mtitle"> <a name=""> </a> </span>
                <span className="mblock">
                    <p> </p>
                </span>
            </span> */}
        </div>
    );
}

export default JavaBasic;