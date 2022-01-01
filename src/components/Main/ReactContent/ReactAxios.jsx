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
                                <h3 className='h3'> 🎈 예시3 - naver search api 일부, cors적용 </h3>
                                <div className='block4'>
                                    <li> import axios from 'axios'; </li>
                                    <li></li> <br />
                                    <li> {" const response = await axios.get('/v1/search/local.json'"}
                                        <li> {" , { "}
                                            <li> {" params: { "}
                                                <li> {" query: word, "} </li>
                                                <li> {" display: 1 "} </li>
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