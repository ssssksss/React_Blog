import React from 'react';

const ReactRouter = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> react-router-dom version 5 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 React Router 설치 </h2>
            <li> npm install react-router-dom </li>
            <li> yarn add react-router-dom </li>

            <h2 className='h2'> ✔ React Router 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> import React, {'{ Component }'} from 'react'; </li>
                  <li> import {'{ BrowserRouter, Route, Switch, Link }'} from 'react-router-dom'; </li>
                  <li> import Home from './inc/home.js' </li>
                  <li> import Home1 from './inc/Home1.js' </li> <br />
                  <li> const App = () {'=> {'}
                    <li> return(
                      <li> {' <div className="App">'}
                        <li> {' <BrowserRouter> '}
                          <li> {'<p> <Link to="/">Home</Link> </p>'} </li>
                          <li> {'<p> <Link to="/home1">Home1</Link> </p>'} </li>
                          <li> {' <Switch> '}
                            <li> {' <Route path="/" exact component={Home}></Route> '} </li>
                            <li> {' <Route path="/home1" component={Home1}></Route> '} </li>
                          </li>
                          <li> {' </Switch> '} </li>
                        </li>
                        <li> {' </BrowserRouter> '} </li>
                      </li>
                      <li> {'     </div> '} </li>
                    </li>
                    <li> ); </li>
                  </li>
                  <li> {'}'} </li>
                  <li> export default App; </li>
                </div>
              </div>
            </li>


          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> react-router-dom history(정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li>  </li>

            <h2 className='h2'> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { useHistory } from 'react-router-dom'; "} </li>
                  <li> history = useHistory(); </li>
                  <li> 메소드() {"{"}
                    <li> this.history.push("/경로"); </li>
                  </li>
                  <li> {"}"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) react-router-dom </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <li> npm install react-router-dom --save </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Link는 a태그의 속성을 가지고 있다. (css에서 a태그로 인식) </li>
            <li> Route 컴포넌트를 이용하면 props 속성으로 match,location,history 3개를 같이 보내준다. </li>
            <li> Route path 속성에 "":속성명"을 넣어 주면 경로가 변경</li>
            <li> useParams()를 사용하면 경로에 있는 변수들을 가져올 수 있다. </li>

            <h2 className='h2'> ✔ react-router-dom version 6 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 react-router-dom version 6 예시 </h3>
                <div className='block4'>
                  <li> {" import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom'; "} </li>
                  <li> </li> <br />
                  <li> const a = useParams(); </li>
                  <li> console.log(a);  </li>
                  <li> </li> <br />
                  <li> return (
                    <li> {' <BrowserRouter> '} <small> 어플리케이션에서 오직 1개만 존재 </small>
                      <li> {' <Link to="/경로> 경로클릭 </Link>  '} </li>
                      <li>  </li> <br />
                      <li> {' <Routes> '} <small> Route를 사용하기 위해서는 무조건 감싸주어야 한다. </small>
                        <li> {' <Route path="/경로/:속성명" element={<컴포넌트/>} />'} </li>
                        <li> {' <Route path="/경로1" element={<컴포넌트1/>} />'} <small> 1개의 컴포넌트에 다중경로 설정 여러번 쓰기 </small> </li>
                        <li> {' <Route path="/" element={<컴포넌트1/>} />'} <small> 1개의 컴포넌트에 다중경로 설정 여러번 쓰기 </small> </li>
                        <li> {' <Route path="/경로/*" element={<컴포넌트2/>} />'} <small> 와일드카드를 사용한 depth 경로 구성 </small>
                          <div className="block4">
                            <li> <small> 컴포넌트2.js </small> </li>
                            <li> {' <Routes> '}
                              <li> {' <Route path="경로" element={<컴포넌트2-1/>} />'} <small> 경로에 '/'를 붙이지 않아야 한다. </small> </li>
                            </li>
                            <li> {' </Routes> '} </li>
                          </div>
                        </li>
                      </li>
                      <li> {' </Routes> '} </li>
                    </li>
                    <li> {' </BrowserRouter> '} </li>
                  </li>
                  <li> ); </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) BrowserRouter HashRouter MemoryRouter NativeRouter StaticRouter</summary>
          <div className='block2'>

            <h2 className='h2'> 📌 HashRouter </h2>
            <div className='block4'>
              <li> 현재 사용하지 않음 </li>
              <li> 경로에 #이 붙는다. </li>
              <li> SEO가 읽지 못한다. </li>
              <li> 해시 히스토리가 지원되지 않는다. </li>
              <li> 서버에서 해시 URL을 읽을수 없다. </li>
            </div>

            <h2 className='h2'> 📌 BrowserRouter </h2>
            <div className='block4'>
              <li> Link와 같이 사용된다. </li>
              <li> 새로고침하면 에러가 발생한다. </li>
              <li> 컴포넌트 매핑을 사용한다. </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
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
          <summary> (v6) react-router history </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className="block4">
              <li> props로 받아서 처리 </li>
              <li> 페이지를 동적으로 이동하는 방법 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { createBrowserHistory } from 'history'; "} </li>
                  <li> const history = createBrowserHistory(); </li>
                  <li> {" <Router history={history} "} </li>
                </div>
                <h3 className='h3'> 🎈 예시1 </h3>
                <div className='block4'>
                  <li> move() {"{"}
                    <li> this.props.history.push("/경로") </li>
                  </li>
                  <li> {"}"} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) Navigate </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 페이지를 이동시켜준다. </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import {Navigate} from 'react-router-dom'; "} </li>
                  <li> {" const [test, setTest] = React.useState(false); "} </li>
                  <li> {" const Test = () => { "}
                    <li> {" setTest(true); "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li> {" return ( "}
                    <li> {" <> "}
                      <li> {" <button onClick={Test}> 버튼 </button> "} </li>
                      <li> {" { "}
                        <li> {" test && <Navigate to='/' replace={true}/> "} </li>
                      </li>
                      <li> {" } "} </li>
                    </li>
                    <li> {" </> "} </li>
                  </li>
                  <li> {" ); "} </li>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) useNavigate() </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 현재페이지에서 뒤로가기, 이동가능 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { useNavigate } from 'react-router-dom'; "} </li>
                  <li> {" const navigate = useNavigate(); "} </li>
                  <li> {" const num = 1; "} </li>
                  <li> {" const Test = () => { "}
                    <li> {" navigate('/'); //경로로 이동 "} </li>
                    <li> {" navigate(-1); //back "} </li>
                    <li> {" navigate(-2); //go?? "} </li>
                    <li> {" navigate(`/user/${num}`); "} </li>
                  </li>
                  <li> {" } "} </li>
                  <li> {" return ( "}
                    <li> {" <> "}
                      <li> {" <button onClick={Test}> 버튼 </button> "} </li>
                    </li>
                    <li> {" </> "} </li>
                  </li>
                  <li> {" ); "} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) Outlet </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 부모 요소에 경로를 선언하고 사용이 가능하게 하는것 </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 App.js </h3>
                <div className='block4'>
                  <li> {" <Route path='/a' element={<A />}> "}
                    <li> {"   <Route path='b' element={<B />} /> "} </li>
                    <li> {"   <Route path='c' element={<C />} /> "} </li>
                  </li>
                  <li> {" </Route> "} </li>
                </div>
                <h3 className='h3'> 🎈 A.js  </h3>
                <div className='block4'>
                  <li> {" import { Outlet } from 'react-router-dom'; "} </li>
                  <li> return( {"<>"}
                  </li>
                  <li> {" <Outlet /> "} </li>
                  <li> {"</>"}); </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) useLocation() </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 현재 경로를 알 수 있다. </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li> {" import { useLocation } from 'react-router-dom'; "} </li>
                  <li> {" 	const location = useLocation(); "} </li>
                  <li> {" 	const Test = () => { "}
                    <li> {" 		console.log(location.hash); // '' "} </li>
                    <li> {" 		console.log(location.key); // 11y106f0 "} </li>
                    <li> {" 		console.log(location.pathname); //user-details , 경로가 나온다. "} </li>
                    <li> {" 		console.log(location.search); // '' "} </li>
                    <li> {" 		console.log(location.state); //null "} </li>
                  </li>
                  <li> {" 	} "} </li>
                  <li> {" 	return ( "}
                    <li> {" 		<> "}
                      <li> {" 			<button onClick={Test}> 버튼 </button> "} </li>
                    </li>
                    <li> {" 		</> "} </li>
                  </li>
                  <li> {" 	); "} </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> (v6) useParams() </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 App.js  </h3>
                <div className='block4'>
                  <li> {" <Route path='/user-details/:num' element={<UserDetailsPage />} /> "} </li>
                </div>
                <h3 className='h3'> 🎈 경로입력  </h3>
                <div className='block4'>
                  <li> http://localhost:3000/user-details/123 </li>
                </div>
                <h3 className='h3'> 🎈 UserDetailsPage.js </h3>
                <div className='block4'>
                  <li> {" 	const { num } = useParams(); "} </li>
                  <li> {" 	return ( "}
                    <li> {" 		<> "}
                      <li> {" 			{num} "} </li>
                      <li> {" 			<button onClick={Test}> 버튼 </button> "} </li>
                    </li>
                    <li> {" 		</> "} </li>
                  </li>
                  <li> {" 	); "} </li>
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

export default ReactRouter;