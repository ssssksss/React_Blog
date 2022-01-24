import React from 'react';

const SpringBasic = (props) => {

  return (
    <div className="common_style">


      <div className='block1'>
        <details>
          <summary> @Autowired </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 스프링 컨테이너에 등록되어 있는 빈 객체들을 자동으로 주입해주는 방식, 만약에 스프링 컨테이너에 빈 객체가
              존재하지 않는다면 에러가 발생을 하게된다. 만약에 에러를 발생시키지 않게 하려면 @Autowired(required=false)를
              사용하는 방법이 존재한다.  </li>
            <li> @Autowired(required=false)를 사용하면 의존성주입은 안하고 인스턴스 만들어서 빈은 등록가능하다.???? </li>
            <li> 생성자, Setter, 필드에서 사용 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 의존성 주입(Dependency Injection) </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 설명 </h2>
            <li> 객체를 직접 만들지 않고 주입받아 사용하는 방법 </li>
            <div className="block4">
              <li> private Dependency dependency = new Dependency(); <small> // 직접 만드는 방법 </small> </li>
              <li> this.dependency = dependency; <small> // 매개 변수로 외부에서 주입받는 방법 </small> </li>
            </div>

            <h2 className="h2"> 📌 1. 생성자(Constructor) 주입(스프링 팀에서 추천하는 방식) </h2>
            <li> 1. 생성자로 객체를 생성하는 시점에 인자에 있는 Bean을 호출 </li>
            <li> 2. Bean을 호출할 때(초기에 생성x) BeanFacotry에 Bean을 만들고 만든 Bean을 찾음 </li>
            <li> 3. Bean을 찾았으므로 생성자 인자에 Bean을 주입 </li>
            <div className="block4">
              <li> private Obj obj; </li>
              <li> public void class(Obj obj) {"{"}
                <li> this.obj = obj; </li>
              </li>
              <li> {"}"} </li>
            </div>
            <li> 생성자가 1개일 때 스프링에서 지원하는 방식, 위의 예시와 같다. </li>
            <div className="block4">
              <li> <small> @Autowire를 안붙여도 스프링 4.3부터 생성자가 1개이면 알아서 지원을 해준다. </small> </li>
              <li> private final Obj obj; </li>
            </div>

            <h2 className="h2"> 📌 2. 수정자(Setter) 주입 </h2>
            <li> 빈 객체를 찾거나 빈 팩토리에 등록한후에 주입하려는 매개변수에 넣을 인자를 찾거나 생성, 그리고 주입을 한다.  </li>
            <div className="block4">
              <li> private Obj obj; </li>
              <li> @Autowired </li>
              <li> public void class(Obj obj) {"{"}
                <li> this.obj = obj; </li>
              </li>
              <li> {"}"} </li>
            </div>

            <h2 className="h2"> 📌 3. 필드(Field) 주입(어노테이션 사용) </h2>
            <li> 빈을 먼저 생성하고 주입을 해준다.  </li>
            <li> 편리하지만 값을 변경하거나 하는 등 유연하게 대처할 수가 없다는 단점이 있다. </li>
            <li> (단점) A가 B를, B가 A를 참조하는 순환참조를 방지할 수가 없다. </li>
            <div className="block">
              <li> @Autowired </li>
              <li> private Obj obj; </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 스프링이란?</summary>
          <div className='block2'>

            <h2 className="h2"> 📌 설명 </h2>
            <li> <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer"> 스프링부트 문서 </a> </li>
            <li> 스프링은 Ioc기반의 프레임워크, 자바 플랫폼 프레임워크 </li>
            <li> 의존성 주입(Denpendency Injection) 의존성 주입: 개발자가 아닌 컨테이너가 관리하는 빈 객체를 주입하는 방법 </li>
            <li> POJO(Plain Old Java Object): 기본적인 기능만 가진 자바 객체 </li>
            <li> 컨테이너: BeanFactory와 ApplicationContext 2개의 대표적인 컨테이너가 있다.컨테이너는
              인스턴스의 주기와 추가적인 기능을 관리하는 역할을 한다. </li>

            <h2 className="h2"> 📌 컨테이너의 빈 객체 </h2>
            <li> CGLIB라는 바이트코드 조작 라이브러리를 이용하여 Bean객체를 싱글턴패턴으로 유지하게 한다.
              클래스를 복제?한 클래스객체를 따로 만들어서 컨테이너에서 만들어서 사용한다. 컨테이너에
              Bean객체가 없으면 Bean객체를 생성하고 존재한다면 기존에 Bean객체를 반환해준다. </li>

            <h2 className="h2"> 📌 스프링의 일반적인 작동과정 </h2>
            <li> 1. 클라이언트 요청 </li>
            <li> 2. Dispatcher Servlet 접근 </li>
            <li> 3. Handler Mapping 참조하여 Controller 연결 </li>
            <li> 4. Mapping된 Controller에 서비스 로직에 따라 DAO,Entity등을 통해 DB에 접근  </li>
            <li> 5. 모델과 뷰 객체를 담아 DispatcherServlet에 반환 </li>
            <li> 6. ViewResolver를 통해 View와 연결되어 화면으로 출력 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @Bean이란(좀더 보충 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 스프링 IoC 컨테이너가 관리하는 객체를 말합니다.  </li>
            <li> ApplicationContext, BeanFactory는 IoC 컨테이너 </li>
            <li> ApplicationContext는 BeanFactory를 상속을 받는다. </li>
            <li>  </li>
          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> POJO(Plain Old Java Object) </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 POJO가 탄생한 이유 </h2>
            <li> 자바를 개발할 때 과거에 개발자가 비즈니스로직 + 트랜잭션,보안,필터 등등을 구현해야
              했다. 그러므로 너무 많은 부담을 지게 되었고 그 부담을 덜기 위하여 기업에서 개발하기 위한
              서비스 EJB(Enterprise Java Beans)가 탄생하여 부담이 줄어들었다. 하지만 작은 서비스를 개발할때도
              거대한 EJB를 상속받아 사용해야되는 불편함이 있었고 기능을 바꾸기 위해서는 전체적으로 코드를
              수정해야되는 문제점이 발생하였다. EJB는 객체지향의 특징과 장점을 사용할 수 없었다. </li>
            <li> POJO는 이러한 문제점에서 벗어나 객체지향에 집중하고, 클래스나 라이브러리에 종속되지 않아
              원하는 대로 사용을 할 수 있게 되었다. </li>

            <h2 className="h2"> 📌 POJO 사용 이유와 장점 </h2>
            <li> 특정 환경에 종속이 되지 않는다. </li>
            <li> 객체지향(OOP)를 자유롭게 사용할 수 있다. </li>
            <li> 로우레벨은 분리하면서 필요한 로직을 작성할 수 있다. </li>
            <li> 테스트 작업 환경에 좋다. </li>
            <li> EJB의 서비스와 기술은 그대로 사용하면서 자바 객체지향도 사용을 할 수 있어 좋다. </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> 테스트 코드 작성 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 테스트코드에서는 순서를 보장하지 않아서 Clear를 해줘야 한다.
              <div className="block4">
                <li> @AfterEach </li>
                <li> public void afterEach() {"{"}
                  <li> 이곳에 객체들이 저장되었으면 값을 비워주거나 하는 코드를 작성을 해야한다. </li>
                </li>
                <li> {"}"} </li>
              </div>
            </li>
            <li> 메소드 위에 @Test를 붙인다. </li>
            <li> Assertions.assertEquals(A,B) <small> A,B가 같으면 검증완료 </small> </li>
            <li> Assertions.assertThat(A).isEqualTo(B) <small> A,B가 같으면 검증완료 </small> </li>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 윈도우에 빌드하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> gradlew.bat?? build  </li>
            <li> cd bulid</li>
            <li> cd libs </li>
            <li> ls -arlth </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      {/* 끝 */}
    </div>
  );
}

export default SpringBasic;