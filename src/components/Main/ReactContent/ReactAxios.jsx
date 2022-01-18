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
                        <li> 액시오스 인스턴스? 를 만드는 방법이다 </li>

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
                        <li> axios.get(url,[,config]) </li>

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
                    <summary> Axios Post (미완성) </summary>
                    <div className='block2'>

                        <h2 className="h2"> 🎈 설명 </h2>
                        <li> {' axios.post("url주소",{ '}
                            <li> {' data객체 '} </li>
                        </li>
                        <li> {' },[,config]) '} </li>

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
        </div>
    );
}

export default ReactAxios;