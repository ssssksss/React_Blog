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
            <li>  </li>
            <li>  </li>
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
          <summary> @Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @Test </h2>
            <li> 테스트를 표현 </li>

            <h2 className='h2'> 📌 @BeforeEach </h2>
            <li> 모든 메소드 시작전에 실행되야 하는 메소드 </li>

            <h2 className='h2'> 📌 @AfterEach </h2>
            <li> 모든 메소드 시작후에 실행되야 하는 메소드 </li>

            <h2 className='h2'> 📌 @BeforeAll </h2>
            <li> 테스트 시작전에 실행되야 하는 메소드(static 처리) </li>

            <h2 className='h2'> 📌 @AfterAll </h2>
            <li> 테스트 시작후에 실행되야 하는 메소드(static 처리) </li>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> @SpringBootTest, @ExtendWith </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @SpringBootTest </h2>
            <li> Test Application Context를 생성 </li>
            <li>  </li>

            <h2 className='h2'> 📌 @ExtendWith </h2>
            <li> JUnit4에 @RunWith가 JUnit5에서는 @ExtendWith로 사용되고 있음 </li>
            <li>  </li>

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

            <h2 className='h2'> 📌 @ </h2>
            <li>  </li>


          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default SpringTestCode;