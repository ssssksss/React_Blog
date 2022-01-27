import React from 'react';

const ReactAxios = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> React Axios 란? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <li> npm i axios </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Promise API를 사용하는 비동기 통신 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Create </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> axios 인스턴스 를 만드는 방법이다 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 Axios Crate 선언 </h3>
                <div className='block4'>
                  <li> import axios from "axios" </li>
                  <li>  </li> <br />
                  <li> const API = axios.create({"{"}
                    <li> baseURL: "http://localhost:8080", </li>
                    <li> headers: {"{"}
                      <li> "Content-Type": "application/json", </li>
                    </li>
                    <li> {"},"} </li>
                    <li> withCredentials: true, </li>
                  </li>
                  <li> {"});"} </li>
                  <li> export default API; </li>
                </div>
                <h3 className='h3'> 🎈 Axios Crate 사용 </h3>
                <div className='block4'>
                  <li> import API from "경로" </li>
                  <li>  </li> <br />
                  <li> const login = async(code) {"=> {"}
                    <li> const {"{data}"} = await API.post(
                      <li> "/경로", </li>
                      <li> JSON.stringify(code) </li>
                    </li>
                    <li> ); </li>
                    <li> return data; </li>
                  </li>
                  <li> {"};"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Get </summary>
          <div className='block2'>

            <h2 className="h2"> 🎈 설명 </h2>
            <li> 1번 방법 :axios.get(url,[,config]) </li>
            <li> 2번 방법
              <div className="block4">
                <li> {" axios({ "}
                  <li> {"   method:'get', "} </li>
                  <li> {"   url:'', "} </li>
                  <li> {"   responseType:'stream' "} </li>
                </li>
                <li> {" }) "} </li>
              </div>
            </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 예시1 </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li></li> <br />
                  <li> axios.get("url경로"); </li>
                </div>
                <h3 className='h3'> 🎈 예시2 </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li></li> <br />
                  <li> {' axios.get("url경로").then((response)=>{ '}
                    <li> console.log(response.data); </li>
                  </li>
                  <li> {' }).catch((Error)=>{ '}
                    <li> console.log(Error); </li>
                  </li>
                  <li> {' }) '} </li>
                </div>
                <h3 className='h3'> 🎈 예시3 </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li></li> <br />
                  <li> {" const response = await axios.get('/v1/search/local.json'"}
                    <li> {" , { "}
                      <li> {" params 혹은 data: { "}
                        <li> query: word, </li>
                        <li> display: 1 </li>
                      </li>
                      <li> {" }, "} </li>
                      <li> {" headers: { "}
                        <li> {" 'X-Naver-Client-Id': 사용자ID, "} </li>
                        <li> {" 'X-Naver-Client-Secret': 사용자비번 "} </li>
                      </li>
                      <li> {" } "} </li>
                    </li>
                  </li>
                  <li> {" }); "} </li>
                  <li> {" const res = { response }; "} </li>
                  <li> {" console.log(res); "} </li>
                </div>
                <h3 className='h3'> 🎈 예시4 - 스프링 RestController에 보내는 예제(테스트확인) </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li></li> <br />
                  <li> {" const testAxios2 = async () => { "}
                    <li> {" await axios( "}
                      <li> {" { "}
                        <li> {" url: '/api/get2', "} </li>
                        <li> {" method: 'GET', "} </li>
                        <li> {" data: { "}
                          <li> {" id: 1, name: 'aaa222' "} </li>
                        </li>
                        <li> {" }, "} </li>
                        <li> {" baseURL: 'http://localhost:8080', "} </li>
                        <li> {" withCredentials: true, "} </li>
                      </li>
                      <li> {" } "} </li>
                    </li>
                    <li> {" ).then(function (response) { "}
                      <li> {" console.log('응답 왔음'); "} </li>
                    </li>
                    <li> {" }).catch(function (error) { "}
                      <li> {" console.log(error); "} </li>
                    </li>
                    <li> {" }); "} </li>
                  </li>
                  <li> {" } "} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Post </summary>
          <div className='block2'>

            <h2 className="h2"> 🎈 설명 </h2>
            <li> 1번 방법 </li>
            <div className="block4">
              <li> {' axios.post("url주소",{ '}
                <li> {' data객체 '} </li>
              </li>
              <li> {' },[,config]) '} </li>
            </div>
            <li> 2번 방법 </li>
            <div className="block4">
              <li> {" axios({ "}
                <li> {"   method:'post', "} </li>
                <li> key: "값", </li>
              </li>
              <li> {" }); "} </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 예시1</h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li> </li> <br />
                  <li> axios.post("url경로",{'{'})
                    <li> key: "값", </li>
                  </li>
                  <li> {'});'} </li>
                </div>
                <h3 className='h3'> 🎈 예시2 </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li> </li> <br />
                  <li> {' axios.post("url경로").then((response)=>{ '}
                    <li> console.log(response.data); </li>
                  </li>
                  <li> {' }).catch((Error)=>{ '}
                    <li> console.log(Error); </li>
                  </li>
                  <li> {' }) '} </li>
                </div>
                <h3 className='h3'> 🎈 예시3 - form 데이터 전송(Content-Type: multipart/form-data) </h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li> </li> <br />
                  <li>{" const testAxios4 = async () => { "}
                    <li>{" const frm = new FormData(); "}  </li>
                    <li>{" frm.append('data', '123'); "}  </li>
                    <li>{" frm.append( "}
                      <li>{" 'data1', ['123', '456', '789'] "}  </li>
                    </li>
                    <li> frm.append('id', 1);  </li>
                    <li> frm.append('name', "name");  </li>
                    <li>{" ); "}  </li>
                    <li>{" await axios.post(`http://localhost:8080/api/post2`, frm) "}
                      <li>{" .then(response => { "}
                        <li>{" console.log('data', JSON.stringify(response, null, 2)); "}  </li>
                      </li>
                      <li>{" }).catch(error => { "}
                        <li>{" console.log(error); "}  </li>
                      </li>
                      <li>{" }); "}  </li>
                    </li>
                  </li>
                  <li>{" } "}  </li>
                  <li>  </li> <br />
                  <li> 스프링에선 매개변수로(String data1)으로 했을 때 데이터 받아짐 </li>
                  <li> 스프링에서 매개변수로(User user)이고 user.id,user.name일 때 id,name으로 보내면 받아짐 </li>
                </div>
                <h3 className='h3'> 🎈 예시4 - Content-Type: application/json(검증완료) </h3>
                <div className='block4'>
                  <li> {" axios({ "}
                    <li> {" url: '/auth/signup', "} </li>
                    <li> {" method: 'POST', "} </li>
                    <li> {" data: { "}
                      <li> {" nickname: '12345678', "} </li>
                      <li> {" email: 'example@test.com', "} </li>
                      <li> {" password: '12345678' "} </li>
                      <li> {" } "} </li>
                    </li>
                    <li> {" }) "} </li>
                  </li>
                  <li> {" .then(response => { "}
                    <li> {" console.log(response.data); "} </li>
                  </li>
                  <li> {" }).catch(error => { "}
                    <li> {" console.log(error); "} </li>
                  </li>
                  <li> {" }); "} </li>
                </div>
                <h3 className='h3'> 🎈 예시5- Content-Type: application/json(검증완료)  </h3>
                <div className='block4'>
                  <li> const initValues = </li>
                  <li> [
                    <li> {"{"}
                      <li> accessToken: "", </li>
                      <li> refreshToken: "", </li>
                      <li> msg: "123", </li>
                      <li> statusCode: "", </li>
                      <li> successFlag: false </li>
                    </li>
                    <li> {"}"}, </li>
                  </li>
                  <li> ] </li>
                  <li> {" const [userData, setUserData] = useState(initValues); "} </li>
                  <li> {" const navigate = useNavigate(); "} </li>
                  <li> {" const handleSubmit = () => { "}
                    <li> {" axios({ "}
                      <li> {" url: 'http://localhost:8080/auth/signin', "} </li>
                      <li> {" method: 'POST', "} </li>
                      <li> {" data: { "}
                        <li> {" email: 'example@test.com', "} </li>
                        <li> {" password: '12345678' "} </li>
                      </li>
                      <li> {" } "} </li>
                    </li>
                    <li> {" }) "} </li>
                    <li> {" .then(response => { "}
                      <li> {" console.log(response); "} </li>
                      <li> {" const { accessToken, refreshToken } = response.data; "} </li>
                      <li> {" localStorage.setItem('accessToken', accessToken); "} </li>
                      <li> {" localStorage.setItem('refreshToken', refreshToken); "} </li>
                      <li> {" window.confirm('성공이다'); "} </li>
                      <li> {" navigate('/login1'); "} </li>
                    </li>
                    <li> {" }).catch(error => { "}
                      <li> {" console.log(error); "} </li>
                    </li>
                    <li> {" }); "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li>  </li> <br />
                  <li> {" {[userData].map(test => { "}
                    <li> {" return (<div key='accessToken'> {test.msg} </div>); "} </li>
                  </li>
                  <li> {" })} "} </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Delete </summary>
          <div className='block2'>
            <h2 className="h2"> 🎈 설명 </h2>
            <li> axios.delete(URL,[,config]); </li>
            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈</h3>
                <div className='block4'>
                  <li> import axios from 'axios'; </li>
                  <li></li> <br />
                  <li> {' axios.delete("url경로").then((response)=>{ '}
                    <li> console.log(response.data); </li>
                  </li>
                  <li> {' }).catch((Error)=>{ '}
                    <li> console.log(Error); </li>
                  </li>
                  <li> {' }) '} </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Put </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <li> axios.put(url[, data[, config]]) </li>
            <h2 className='h2'> ✔ 예시 </h2>
            <li> 소제목
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
          <summary> Axios Header </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 받는곳에서는 헤더의 키값(Authorization)을 이용하여 받으면된다. </li>
            <li> 1번 방법 </li>
            <div className="block4">
              <li> axios.head(url[, config]) </li>
            </div>
            <li> 2번 방법 </li>
            <div className="block4">
              <li> {" headers: { "}
                <li> {" Authorization: `${accessToken}` "} </li>
              </li>
              <li> {" } "} </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" const accessToken = localStorage.getItem('accessToken'); "} </li>
                  <li> {" axios({ "}
                    <li> {" url: 'http://localhost:8080/auth/signin', "} </li>
                    <li> {" method: 'POST', "} </li>
                    <li> {" data: { "}
                      <li> {" email: 'example@test.com', "} </li>
                      <li> {" password: '12345678'; "} </li>
                    </li>
                    <li> {" }, "} </li>
                    <li> {" headers: { "}
                      <li> {" Authorization: `${accessToken}` "} </li>
                    </li>
                    <li> {" } "} </li>
                  </li>
                  <li> {" }) "} </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios Config </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> axios.defaults.baseURL = 'https://www.example.com'; </li>
              <li> axios.defaults.headers.common['Authorization'] = 토큰; <small> 기본으로 설정 </small> </li>
              <li> axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; <small> post의 컨텐트 타입을 설정 </small> </li>
              <li> 커스텀axios객체.defaults.headers.common['Authorization'] = AUTH_TOKEN; </li>
              <li> 커스텀axios객체.defaults.timeout = ms단위; <small> 처리하는데 시간이 ms만큼 걸리면 아웃 </small> </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios 서버 응답 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> data: 서버에서 보내준 데이터 </li>
            <li> status: 서버에서 보내준 HTTP 상태 코드 </li>
            <li> statusText: 서버에서 보내준 HTTP 상태 메시지 </li>
            <li> headers : 서버에서 보내준 헤더 </li>
            <li> config : axios가 요청했을때 설정값을 보내준다? </li>
            <li> request: ? </li>
            <li> params: 키:값 <small> URL 매개변수 </small> </li>
            <li> withCredentials: false <small> cross-site Access-Control </small> </li>
            <li>  </li>
            <li>  </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Axios 동시에 작업(필요할때 알아보기) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> axios.all(iterable) </li>
            <li> axios.spread(callback) </li>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default ReactAxios;