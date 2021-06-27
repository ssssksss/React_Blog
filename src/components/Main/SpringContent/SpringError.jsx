import React from 'react';

const SpringBasic = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 스프링 프레임워크 코드(하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#bootJar 에러">1. bootJar </a>
                        <a href="#intellij 실행시 파일에 빨간 글씨">2. intellij 실행시 파일에 빨간 글씨 </a>
                        <a href="#intellij gradle프로젝트 작동 안될 때">3. intellij gradle프로젝트 작동 안될 때 </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="bootJar 에러"> 1. bootJar </a> </span>
                <p> 윈도우에서 cmd 명령어로 gradlew.bat build을 하였을 때 발생</p>
                <p> <i> 오류코드 : </i> </p>
                <span className="mblock">
                    <p>
                        <p>C:\Users\sk\Desktop\git_ssssksss\CODE\IntelliJ\demo&gt;gradlew.bat build&gt; Task :bootJar FAILED</p>
                        <p>FAILURE: Build failed with an exception.</p>
                        <p>* What went wrong:</p>
                        <p>Execution failed for task ':bootJar'.</p>
                        <p>&gt; Failed to calculate the value of task ':bootJar' property 'mainClass'.</p>
                        <p>&gt; Main class name has not been configured and it could not be resolved</p>
                        <p>* Try:</p>
                        <p>Run with --stacktrace option to get the stack trace. Run with --info</p>
                        <p>or --debug option to get more log output. Run with --scan to get full insights.</p>
                        <p>* Get more help at https://help.gradle.org</p>
                        <p>BUILD FAILED in 6s</p>
                        <p>4 actionable tasks: 1 executed, 3 up-to-date</p>

                    </p>
                </span>
                <p> <i> 원인 : </i> </p>
                <p> 1. Main class name이 지정되지 않았다. -&gt; 빌드시 진입 지점을 찾지 못함   </p>
                <p> <i> 해결 방법 :</i> </p>
                <p> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="intellij 실행시 파일에 빨간 글씨"> 2. intellij 실행시 파일에 빨간 글씨 </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : 깃경로에 포함이 되지 않아서 발생 </i> </p>
                <p> <i> 해결 방법 : </i> 처음에 깃 경로에 파일 전부를 추가 </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="intellij gradle프로젝트 작동 안될 때"> 3. intellij gradle프로젝트 작동 안될 때 </a> </span>
                <p> 1. 프로젝트 파일에 .idea 폴더(설정파일)를 삭제하고 intellij 재시작하기 </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="">  </a> </span>
                <p> </p>
                <p> <i> 오류코드 : </i> </p>
                <p> <i> 원인 : </i> </p>
                <p> <i> 해결 방법 :</i> </p>
                <span className="mblock">
                </span>
            </span>



        </div>
    );
}

export default SpringBasic;