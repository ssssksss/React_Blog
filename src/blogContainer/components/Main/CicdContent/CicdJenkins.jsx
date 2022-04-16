import React from 'react';

const CicdJenkins = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 젠킨스 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 환경설정 </h2>
            <div className='block4'>
              <li> <a href="https://www.lesstif.com/continuous-integration/%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-31850999.html"
                target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
              <li> # of executors <small> 동시에 build 가능한 갯수 </small> </li>
              <li>  </li>
            </div>



          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> [1] 젠킨스 시작 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> vi /var/lib/jenkins/secrets/initialAdminPassword <small> 젠킨스 초기 비번 </small> </li>
              <li> IP주소:9090 으로 접속 </li>
              <li> 비번 입력 </li>
              <li> Install Suggested Plugins </li>
              <li> 회원가입 </li>
            </div>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> [2] 젠킨스 JDK, Git, Gradle 연결 </summary>
          <div className='block2'>
            <div className="block4">
              <li> Jenkins 관리 - Global Tool Configuration </li>
              <li> <h2> 📌 JDK </h2> </li>
              <li> JDK installations 클릭 </li>
              <li> Name : jdk </li>
              <li> JAVA_HOME : /usr/lib/jvm/java-11-openjdk-11.0.14.0.9-1.el7_9.x86_64 <small> echo $JAVA_HOME 나오는 경로 </small> </li>
              <li> Install automatically 체크 해제 </li>
              <li> <h2> 📌 Git </h2> </li>
              <li> Name : git </li>
              <li> Path to Git executable : /usr/bin/git <small> which git 명령어로 나오는 경로 </small> </li>
              <li> <h2> 📌 Gradle </h2> </li>
              <li> Gradle installations 클릭 </li>
              <li> name : gradle </li>
              <li> GRADLE_HOME : /opt/gradle/gradle-7.0.2/bin <small> echo $GRADLE_HOME 명령어로 나오는 경로 + /bin </small> </li>
              <li> Install automatically 체크 해제 </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 젠킨스 깃허브 연결 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <h2> 깃허브 토큰 생성하는 방법(참고) </h2> </li>
              <div className="block3">
                <li> github - settings - Developer settings - Personal access tokens - Generate new token </li>
                <li> Note에 Jenkins 입력 </li>
                <li> repo 클릭, admin:repo_hook 클릭, 토큰 생성 클릭 </li>
                <li> Personal access tokens 값 저장해놓기(다시 확인 불가)  </li>
              </div>
              <li> Jenkins 관리 - 시스템 설정 </li>
              <li> <h2> 📌 Jenkins Location </h2> </li>
              <li> Jenkins URL : http://152.70.234.5:9090/ <small> 젠킨스 공유 IP URL </small> </li>
              <li> <h2> 📌 GitHub </h2> </li>
              <li> GitHub Server </li>
              <li> Name : github_server </li>
              <li> API URL : https://api.github.com </li>
              <li> Add - Jenkins 클릭 </li>
              <li> Kind : Secret text </li>
              <li> Scope : Global (Jenkins, nodes, items, all child items, etc) </li>
              <li> Secret : 깃허브토큰값 </li>
              <li> ID : Credentials를 구분하기 위한 이름 </li>
              <li> Description : 설명 </li>
              <li> Add </li>
              <li> Test connection </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] 젠킨스 프로젝트 생성 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 새로운 Item </li>
              <li> Enter an item name : ssssksss_server <small> 알아서 </small> </li>
              <li> Freestyle project 클릭하고 OK 클릭 </li>
              <li> Github project 클릭 </li>
              <li> Project url : https://github.com/ssssksss/React_Blog_Server <small> 깃허브 프로젝트 주소 </small> </li>
              <li> <h2> 📌 소스 코드 관리 </h2> </li>
              <li> Git 체크 </li>
              <li> Repository URL : https://github.com/ssssksss/React_Blog_Server.git <small> 깃허브 저장소 URL </small>  </li>
              <li> Credentials </li>
              <li> Add 클릭 - Jenkins 클릭 </li>
              <li> Kind : Username with password </li>
              <li> Scope : Global (Jenkins, nodes, items, all child items, etc)  </li>
              <li> Username : 깃허브 ID <small> Username or Email </small> </li>
              <li> Password : <small> 깃허브 password </small> </li>
              <li> ID : github_account <small> 굳이 입력할 필요는 없다. </small> </li>
              <li> <h2> 📌 빌드 유발 </h2> </li>
              <li> GitHub hook trigger for GITScm polling </li>
              <li> <h2> 📌 Build </h2> </li>
              <li> Add build step 클릭 </li>
              <li> Invoke Gradle script </li>
              <li> Use Gradle Wrapper 체크 </li>
              <li> Make gradlew executable 체크 </li>
              {/*<li> Wrapper location : /opt/gradle/gradle-7.0.2 <small> $GRADLE_HOME에서 나오는 경로 </small> </li>*/}
              <li> Tasks : clean build </li>
              <li> Apply하고 저장 </li>
              <li> Build Now 해서 성공이 되는지 확인 </li>
              <li> 성공하면 /var/lib/jenkins/workspace/젠킨스프로젝트명(ssssksss_server)/build/libs 에서 war파일 확인 </li>
              <li> ln -s /var/lib/jenkins/workspace/ssssksss_server/build/libs/ssssksss_server.war /usr/local/tomcat8/webapps/ssssksss_server.war </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] springboot gradle war 파일 만들기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Application.java </h2>
            <div className='block4'>
              <li> package com.ssssksss.ssssksss_server; </li>
              <li> import org.springframework.boot.SpringApplication; </li>
              <li> import org.springframework.boot.autoconfigure.SpringBootApplication; </li>
              <li> import org.springframework.boot.builder.SpringApplicationBuilder; </li>
              <li> import org.springframework.boot.web.servlet.support.SpringBootServletInitializer; </li>
              <li> @SpringBootApplication </li>
              <li> public class SsssksssServerApplication extends SpringBootServletInitializer {"{"}
                <li> 	public static void main(String[] args) {"{"}
                  <li> 		SpringApplication.run(SsssksssServerApplication.class, args); </li>
                </li>
                <li> 	{"}"} </li>
                <li> 	@Override </li>
                <li> 	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {"{"}
                  <li> 		return super.configure(builder); </li>
                </li>
                <li> 	{"}"} </li>
              </li>
              <li> {"}"} </li>
            </div>


            <h2 className='h2'> 📌 build.gradle </h2>
            <div className='block4'>
              <div className="block3">
                <li> plugins {"{"} <small> 추가 작성 </small>
                  <li> id 'war' </li>
                </li>
                <li> {"}"} </li>
              </div>
              <div className="block3">
                <li> apply plugin:'war' <small> 새로 작성 </small> </li>
                <li> bootWar {"{"}
                  <li> 	archiveBaseName='파일명' </li>
                  <li> 	archiveFileName='파일명.war' </li>
                  <li> 	archiveVersion = "0.0.0" </li>
                </li>
                <li> {"}"} </li>
                <li> war.enabled = true </li>
              </div>
              <div className="block3">
                <li> bootWar.enabled = false </li>
                <li> war.enabled = true </li>
              </div>
              <div className="block3">
                <li> dependencies {"{"} <small> 추가 작성 </small>
                  <li> providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat' <small> 외부 톰캣 사용? </small> </li>
                </li>
                <li> {"}"} </li>
              </div>
            </div>

            <h2 className='h2'> 📌 build하고 자동으로 tomcat 재시작 </h2>
            <div className='block4'>
              <li> <h2> 📌 Build </h2> </li>
              <li> Add build step </li>
              <li> Excute shell <small> 쉘 스크립트 이용하기 </small> </li>
              <li> Command에 아래와 같이 입력 </li>
              <li> sleep 20 </li>
              <li> sudo systemctl stop tomcat8.service </li>
              <li> sleep 10 </li>
              <li> sudo systemctl start tomcat8.service </li>
              <li> <h2> 📌 리눅스에서 jenkins가 sudo 를 사용할 수 있게 설정해주기 </h2> </li>
              <li> sudo vi /etc/sudoers </li>
              <li> sudo visudo </li>
              <li> 100번째 줄정도 root 아래에 아래 줄 추가 </li>
              <li> jenkins         ALL=(ALL)       NOPASSWD:ALL </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Jenkins 프로젝트 생성 ( 미정리 ) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 빌드 후 조치 추가 클릭 - deploy war/ear to a container </li>
              <li> add container - tomcat 8.x </li>
              <li> credentials 클릭 - add - jenkins </li>
              <li> kind : username with password </li>
              <li> username : 톰캣 conf/tomcat-users.xml 파일에 설정해놓은 username </li>
              <li> password : 톰캣 conf/tomcat-users.xml 파일에 설정해놓은 password </li>
              <li> id : 대충 </li>
              <li> description : 대충 </li>
              <li> ok 클릭 </li>
              <li> tomcat url : http:~~~:8080 <small> 알아서 작성 </small> </li>
              <li> war/ear files : **/*.war </li>
              <li> apply하고 저장 </li>
              <li> /var/lib/jenkins/workspace/ssssksss_server_jenkins/build/libs <small> 이러한 경로에 가면 war파일이 존재 </small> </li>
              <li> Execute shell - Command : java -jar ~~~.war </li>
              <li> ln -s /var/lib/jenkins/workspace/ssssksss_server_jenkins/build/libs/ssssksss_server.war /usr/local/tomcat8/webapps/ssssksss-server.war </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      {/* 끝 */}
    </div>
  );
}

export default CicdJenkins;