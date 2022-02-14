import React from 'react';

const SpringTestCode = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> 설명 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 통합 테스트 : 한번에 테스트를 진행해서 오래걸린다. </li>
            <li> 단위 테스트 : 부분적으로 테스트 코드를 작동한다.
              <div className="block4">
                <li> Fast : 빨라야 한다. </li>
                <li> Independent : 독립적이어야 한다. </li>
                <li> Repeatable : 같은 결과를 내야 한다. </li>
                <li> Self-Validating : 테스트만으로 결과를 볼 수 있어야 한다. </li>
                <li> Timely : 코드가 완성되기전에 테스트가 되야한다. </li>
              </div>
            </li>
            <h2 className='h2'> 📌 테스트 코드 단축키 </h2>
            <div className="block4">
              <li> 클래스명 위에 마우스 놓고 Alt + Enter </li>
              <li> 테스트 메소드 생성? 테스트 코드에서 alt + insert </li>
            </div>
            <h2 className='h2'> 📌 Live Templates를 이용하여 미리 코드 만들어놓기 </h2>
            <div className="block4">
              <li> Ctrl+Alt+S - Editor - Live Templates - 우측상단 + 클릭, 자바공간에 넣어주어야한다. 아래보면 Change에서 자바클릭 그리고 위에 체크박스는
                자바 안으로 드래그해서 옮기기 </li>
              <div className="block3">
                <li> @Test </li>
                <li> public void name() throws Exception {"{"}
                  <li>     //given, 테스트코드에서 주어지는 값들 </li>
                  <li>     //when, 값을 통해 조건을 주는 부분 </li>
                  <li>     //then, 테스트를 하는 부분 </li>
                </li>
                <li> {"}"} </li>
              </div>
            </div>
            <li>  </li>

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
          <summary> 테스트 관련 어노테이션 1 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @Test </h2>
            <li> 테스트를 표현 </li>

            <h2 className='h2'> 📌 @Before(Junit4) @BeforeEach(Junit5) </h2>
            <li> 모든 메소드 시작전에 실행되야 하는 메소드 </li>

            <h2 className='h2'> 📌 @After(Junit4) @AfterEach(Junit5) </h2>
            <li> 모든 메소드 시작후에 실행되야 하는 메소드 </li>

            <h2 className='h2'> 📌 @BeforeClass(Junit4) @BeforeAll(Junit5) </h2>
            <li> 테스트 시작전에 실행되야 하는 메소드(static 처리) </li>

            <h2 className='h2'> 📌 @AfterClass(Junit4) @AfterAll(Junit5) </h2>
            <li> 테스트 시작후에 실행되야 하는 메소드(static 처리) </li>

            <h2 className='h2'> 📌 @DisplayName , @DisplayNameGeneration </h2>
            <li> @DisplayName("설명") : 테스트코드의 이름을 설정 </li>
            <li> @DisplayNameGeneration :  </li>


          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> 테스트 관련 어노테이션 2 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @SpringBootTest </h2>
            <li> Test Application Context를 생성 </li>
            <li> 어플리케이션의 모든 빈을 Ioc Container에 등록해서 느려짐 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @RunWith(Junit4) @ExtendWith(Junit5) </h2>
            <li> JUnit4에 @RunWith(MockitoJUnitRunner.class)가 JUnit5에서는 @ExtendWith(MockitoExtension.class)로 사용되고 있음 </li>
            <li> Mock과 JUnit을 같이 사용할 때 사용된다. </li>

            <h2 className='h2'> 📌 @WebMvcTest </h2>
            <li> Controller와 관련된 빈들이 로드된다. </li>
            <li>  </li>

            <h2 className='h2'> 📌 @Autowired about Mockbean </h2>
            <li> API 테스트하는 용도인 MockMvc를 주입받아서 사용가능 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @MockBean </h2>
            <li> 테스트 클래스에서 주입받는 가짜 객체를 생성해줌  </li>
            <li> 가짜 객체는 실제 작동하지 않음 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @AutoConfigureMockMvc </h2>
            <li> MockMvc의 의존성을 자동으로 주입해준다 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @Import </h2>
            <li> 클래스들을 Configuration으로 만들어줄수 있다. </li>

            <h2 className='h2'> 📌 @TestMethodOrder</h2>
            <li> Order를 붙여서 사용할 때 선언 </li>
            <li> @TestMethodOrder(MethodOrderer.MethodName.class) : 메소드명으로 오름차순 </li>
            <li> @TestMethodOrder(MethodOrderer.DisplayName.class) : DisplayName으로 오름차순 </li>
            <li> @TestMethodOrder(MethodOrderer.OrderAnnotation.class) : Order으로 오름차순 </li>
            <li> @TestMethodOrder(MethodOrderer.Random.class) : 랜덤으로 순서 </li>
            <li> implements MethodOrderer을 해서 커스텀클래스를 만들고 사용할 수도 있다. </li>
            <li> @TestMethodOrder(커스텀클래스명.class) : 커스텀한 방식대로 작동 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @Order(숫자) </h2>
            <li> 메소드 위에 선언 </li>

            <h2 className='h2'> 📌 @AutoConfigureTestDatabase </h2>
            <li> 진짜 데이터베이스를 이용해서 테스트 </li>


            <h2 className='h2'> 📌 @Ignore(Junit4) @Disabled(Junit5) </h2>
            <li> 실행되지 않아야 되는 메소드에 사용 </li>
            <li> @EnableJUnit4MigrationSupport ????? </li>

            <h2 className='h2'> 📌 @ </h2>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> assert 함수 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 assertEquals </h2>
            <div className='block4'>
              <li> assertEquals(A,B,ErrorMsg) : A와 B가 일치하는지 알려주는 메소드 </li>
              <li> assertEquals(A,B,{" new Supplier<String>() "}) : A와 B가 일치하는지 알려주는 메소드 </li>
              <li> assertEquals(A,B,{" ()->'ErrorMsg' "}) : A와 B가 일치하는지 알려주는 메소드 </li>
            </div>

            <h2 className='h2'> 📌 assertNotNull </h2>
            <div className='block4'>
              <li> 값이 null인지 확인 </li>
              <li> assertNotNull(A) </li>
            </div>

            <h2 className='h2'> 📌 assertTrue </h2>
            <div className='block4'>
              <li> 조건이 참인지 아닌지 확인 </li>
              <li> assertTrue(조건) : 조건이 맞는지 확인 </li>
              <li> assertTrue(조건,"") : 조건이 맞는지 확인 </li>
            </div>

            <h2 className='h2'> 📌 assertAll </h2>
            <div className='block4'>
              <li> assertAll( <small> 오류가 나도 assert함수 여러개 사용가능 </small>
                <li> {" ()-> assert함수, "} </li>
                <li> {" ()-> assert함수 "} </li>
              </li>
              <li> ) </li>
            </div>

            <h2 className='h2'> 📌 assertThrows() </h2>
            <div className='block4'>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 assertTimeout() </h2>
            <div className='block4'>
              <li> 특정 시간에 처리가 완료되는지 확인 </li>
              <li> assertTimeout(Duration.ofMillis(100), {" ()->{}; "}) </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 assertThat() </h2>
            <div className='block4'>
              <li> AssertJ에서 사용 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 특정환경에서만 테스트 가능하게 해주는 메소드,어노테이션 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 assumeTrue </h2>
            <div className='block4'>
              <li> 특정 환경에서만 테스트를 실행 가능하게 해준다. </li>
              <li> assumeTrue("LOCAL".equalsIgnoreCase(A)) <small>  </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌assumingThat   </h2>
            <div className='block4'>
              <li> assumingThat("LOCAL".equalsIgnoreCase(A)) <small>  </small> </li>
              <li> assumingThat("TEST".equalsIgnoreCase(A)) <small>  </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @EnabledIfEnvironmentVariable </h2>
            <div className='block4'>
              <li> 특정 환경에서만 테스트 가능 </li>
              <li> @EnabledIfEnvironmentVariable(named = "", matches = "local") </li>
              <li> @EnabledIfEnvironmentVariable(named = "", matches = "test") </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @EnabledOnOs, @EnabledOnJre </h2>
            <div className='block4'>
              <li> 운영체제나 버전에 따라서 테스트를 다르게 해줄 수 있다. </li>
              <li> {" @EnabledOnOs({OS.MAC, OS.LINUX}) "} </li>
              <li> {" @EnabledOnJre({JRE.JAVA_8, JRE.JAVA_9, JRE.JAVA_10}) "} </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 특정 그룹만 선택해서 테스트 진행하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @Category(Junit4) @Tag(Junit5) </h2>
            <div className='block4'>
              <li> 메소드에 선언, 여러개의 태그 선언 가능 </li>
              <li> @Tag("") </li>
              <li> Run - Edit configuration에서 Test Kind를 Tag로 변경해서 사용하면된다는데 나중에 다시 알아보기 </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 관련 (정리x) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> @DataJpaTest </li>
              <li> @Mock </li>
              <li> @InjectMocks </li>
              <li> @Transactional </li>
              <li> @Rollback </li>
              <li> @MockBean </li>
              <li> Assertions.assertThat </li>
              <li> assertThat </li>
              <li> MockMvc </li>
              <li> @ParameterizedTest </li>
              <li> @RepeatedTest </li>
              <li> @TestFactory </li>
              <li> @Retention </li>
              <div className="block3">
                <li> 언제까지 살아있을지를 정하는 어노테이션 </li>
                <li> @Retention(RetentionPolicy.SOURCE) : 소스 코드까지 생존(컴파일 전) </li>
                <li> @Retention(RetentionPolicy.CLASS) : 클래스 파일까지 생존 </li>
                <li> @Retention(RetentionPolicy.RUNTIME) : 런타임까지 생존 </li>
              </div>
              <li> {" @RepeatedTest(value = 10, name = 'displayName}, {currentRepetitions}/{totalRepetitions}' ) "} </li>
              <li> @ParameterizedTest </li>
              <li> @ValueSource, @NullSource, @EmptySource, @NullAndEmptySource </li>
              <li> @EnumSource, @MethodSource, @CsvSource, @CsvFileSource, @ArgumentSource </li>
              <li> @ConverWith, @AggregateWith </li>
              <li> @IndicativeSentencesGeneration, @Nested </li>
              <li> @FastTest, @SlowTest </li>
            </div>

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
          <summary> Mockito </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 가짜 객체를 지원, 사용할 필요가 없다면 사용하지 않는 것을 추천 </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 어노테이션 </h2>
            <div className='block4'>
              <li> @Mock : Mock 객체를 반환 </li>
              <li> @Spy : 실제 메소드로 동작되는 어노테이션 </li>
              <li> @InjectMocks : @Mock와 @Spy로 만들어진 가짜 객체를 자동으로 주입해준다. </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Mock 객체 반환 </h2>
            <div className='block4'>
              <li> doReturn() : Mock 객체가 특정 값을 반환할 때 </li>
              <li> doNothing() : Mock 객체가 아무것도 반환하지 않을 때 </li>
              <li> doThrow() : Mock 객체가 예외를 발생시킬 때 </li>
            </div>

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
          <summary> JUnit5 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 의존성 추가 </h2>
            <div className='block4'>
              <li> testRuntimeOnly("org.junit.platform:junit-platform-launcher:1.7.0") </li>
              <li> testImplementation('org.junit.jupiter:junit-jupiter:5.7.0') </li>
              <li> testRuntimeOnly("org.junit.vintage:junit-vintage-engine:5.7.0") </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> @ExtendWith를 사용하여 Mock과 같이 사용된다. </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <div className='block4'>
              <li> 장점 : </li>
              <li> 단점 : </li>
            </div>

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

export default SpringTestCode;