import React from 'react';

const SpringExCode1 = (props) => {

    return (
        <>
            <div className="lblocknav_container">
                <div className="lblocknav">
                    <span className="mtitle">
                        <p> SpringExcode1 </p>
                    </span>
                    <p className="hyperlink">
                        <details>
                            <summary> demo </summary>
                            <details>
                                <summary> src</summary>
                                <details>
                                    <summary className="col_r"> main </summary>
                                    <details>
                                        <summary> java</summary>
                                        <details>
                                            <summary> 패키지명 </summary>
                                            <details>
                                                <summary className="col_g"> controller </summary>
                                                <a href="#UserController" className="col_p"> UserController </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> entity </summary>
                                                <a href="#User" className="col_p"> User </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> repository </summary>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                            <details>
                                                <summary className="col_g"> service </summary>
                                                <details>
                                                    <summary className="col_g"> serviceImpl </summary>
                                                    <a href="#UserService" className="col_p"> UserService</a>
                                                </details>
                                                <a href="#UserRepository" className="col_p"> UserRepository </a>
                                            </details>
                                            <p> <a href="#DemoApplication" className="col_p"> DemoApplication </a> </p>
                                        </details>
                                    </details>
                                    <details>
                                        <summary> resources </summary>
                                        <details>
                                            <summary className="col_g"> static </summary>
                                        </details>
                                        <details>
                                            <summary className="col_g"> templates </summary>
                                        </details>
                                        <p> <a className="col_p" href="#"> application.properties </a> </p>
                                    </details>
                                    <a href="#build.gradle" className="col_p"> build.gradle </a>
                                </details>
                                <details>
                                    <summary className="col_r"> test </summary>
                                    <details>
                                        <summary> java </summary>
                                    </details>
                                </details>
                            </details>
                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" >
                <span className="lblock">
                    <span className="mtitle"> <a name="">  Spring-Gradle-JPA-MySQL </a> </span>
                    <p> <small> 스프링 Gradel을 이용하여 MySQL에 넣어보는 예제 Postman을 사용하여 파라미터를 입력하여
                        MySQL에 저장하고 삭제하는 것 까지
                    </small> </p>
                    <span className="mblock">
                        <span className="stitle"> <a name="Directory">  Directory </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Directory_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserController">  controller/UserController.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserController_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Users">  entity/Users.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/Users_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserRepository">  repository/UserRepository.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserRepository_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserServiceImpl">  service/serviceImpl/UserServiceImpl.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserServiceImpl_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="UserService">  service/UserService.java </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserService_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="application.properties">  resources/application.properties </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/UserRepository_1.PNG'} /> </p>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="build.gradle">  build.gradle </a> </span>
                        <p> <img src={process.env.PUBLIC_URL + '/img/SpringExCode1/build.gradle_1.PNG'} /> </p>
                    </span>
                </span>
            </div>
        </>
    );
}
export default SpringExCode1;


{/* <div className="lblocknav_container">
<div className="lblocknav">
    <span className="mtitle">
        <p> SpringExcode1 </p>
    </span>
    <p className="hyperlink">
        <details>
            <summary> demo </summary>
            <details>
                <summary> src</summary>
                <details>
                    <summary className="col_r"> main </summary>
                    <details>
                        <summary> java</summary>
                        <details>
                            <summary> 패키지명 </summary>
                            <details>
                                <summary className="col_g"> controller </summary>
                            </details>
                            <details>
                                <summary className="col_g"> entity </summary>
                            </details>
                            <details>
                                <summary className="col_g"> repository </summary>
                            </details>
                            <details>
                                <summary className="col_g"> service </summary>
                            </details>
                            <p> <a className="col_p" href="#"> DemoApplication </a> </p>
                        </details>
                    </details>
                    <details>
                        <summary> resources </summary>
                        <details>
                            <summary className="col_g"> static </summary>
                        </details>
                        <details>
                            <summary className="col_g"> templates </summary>
                        </details>
                        <p> <a className="col_p" href="#"> application.properties </a> </p>
                    </details>
                </details>
                <details>
                    <summary className="col_r"> test </summary>
                    <details>
                        <summary> java </summary>
                    </details>
                </details>
            </details>
        </details>
    </p>
</div>
</div> */}