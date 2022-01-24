import React from 'react';

const DPGof = (props) => {
    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> 디자인 패턴 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 생성 패턴(5가지) </h2>
                        <li> 싱글톤 패턴(Singleton) </li>
                        <div className="block4">
                            <li> 사용 예시 : 설정파일, 다크모드,  </li>
                            <li> 인스턴스를 오직 1개만 생성(불필요한 자원의 낭비를 줄일수 있음) </li>
                            <li> 멀티쓰레드 환경에서는 잘 생성할 필요가 있음 </li>
                            <li> Synchronized, eagar initialization, DCL, Enum </li>
                        </div>
                        <li> 빌더 패턴(Builder) </li>
                        <div className="block4">
                            <li> 객체를 생성할 때 매개변수의 순서,갯수 등을 고려하지 않게 만들어주는 패턴 </li>
                            <li> (param1,param2,param3)를 객체.param2(2).param1(1).param3(3).build(); </li>
                        </div>
                        <li> 프로토타입(Prototype) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 추상 팩토리(Abstract Factory) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 팩토리 메소드(Factory Method) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>

                        <h2 className='h2'> 📌 구조 패턴(7가지) </h2>
                        <li> 어댑터 패턴(Adapter) </li>
                        <div className="block4">
                            <li> 어댑터란 A와 C가 바로 연결되지 않는데 A와 C사이에 B를 넣어서 연결해주는것 </li>
                            <li> 인터페이스를 이용해서 만들어준다. </li>
                            <li>  </li>
                        </div>
                        <li> 브리지 패턴(Bridege) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 컴포지트 패턴(Composite) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 데코레이터 패턴(Decorator) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 파사드 패턴(Facade) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 플라이웨이트 패턴(Flyweight) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 프록시 패턴(Proxy) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <h2 className='h2'> 📌 행동 패턴(10가지) </h2>
                        <li> 책임 연쇄 패턴(Chain or Responsibility) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 커맨드 패턴(Command) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 인터프리터 패턴(Interpreter) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 이터레이터 패턴(Iterator) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 중재자 패턴(Mediator) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 메멘토 패턴(Memento) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 옵저버 패턴(Observer) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 상태 패턴(State) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 스트래터지, 전략 패턴(Strategy) </li>
                        <div className="block4">
                            <li> 인스턴스1, 인터페이스1+클래스여러개상속 </li>
                            <li> 인스턴스의 멤버변수에 캐스팅을 해서 생성자를 바꾸고 메소드를 실행한다. </li>
                            <li> ex) 사람에게 오른손(인터페이스)을 주고 오른손에 들 수 있는 물건들을
                                전부 오른손에 상속시킵니다. </li>
                            <li> 사용할 때는 생성자만 코드에 추가하면 되고, 새로운 물건이 늘어나면
                                인터페이스를 상속만 하면되니 참 쉽네 </li>
                        </div>
                        <li> 템플릿 메소드 패턴(Template Methods) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>
                        <li> 방문자 패턴(Visitor) </li>
                        <div className="block4">
                            <li>  </li>
                            <li>  </li>
                        </div>


                    </div>
                </details>
            </div>
        </div>
    );
}

export default DPGof;