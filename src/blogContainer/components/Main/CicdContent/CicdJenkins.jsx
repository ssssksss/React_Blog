import React from 'react';

const CicdJenkins = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 젠킨스란? </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
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
      <div className='block1'>
        <details>
          <summary> [1] 젠킨스 시작 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> vi /var/lib/jenkins/secrets/initialAdminPassword <small> 젠킨스 초기 비번 </small> </li>
              <li> IP주소:9090 으로 접속 </li>
              <li> 비번 입력 - Install Suggested Plugins </li>
              <li> Jenkins 관리 - Global Tool Configuration - JDK - Add JDK - Install automatically </li>
              <li> echo $JAVA_HOME 에서 나오는 빈폴더 이전 경로까지 넣기, 만약에 틀리면 경고메시지가 보임 </li>
              <li> Git - Path to Git executable에 which git 명령어에 나오는 코드 넣기 </li>
              <li> /opt/gradle/gradle-7.0.2/bin <small> echo $GRADLE_HOME에서 나오는 경로에 /bin 추가 </small> </li>
              <li> Save 클릭 </li>
              <li> ---------- </li>
              <li> Test connection 클릭 , Credentials verified for user ~ 와 같이 나오면 성공 </li>
              <li> Manage hooks 체크박스 클릭 <small> 이거는 잘 모르겠음 </small> </li>
              <li> apply 하고 저장 </li>
              <div className="h3"> 젠킨스 프로젝트 생성 </div>
              <li> 새로운 Item - jenkins_test 입력 - Freestyle project - 대시보드 - jenkins_test 클릭 - 구성
                GitHub project 클릭 - Project url에 깃허브 프로젝트 URL 넣기 - 아래쪽에 Git 클릭 - Repository URL에
                깃허브저장소.git 경로 복사해서 넣기 - Credentials에 깃허브 계정정보를 담아서 생성(깃허브 계정 아이디와
                패스워드를 넣어준다) </li>
              <li> GitHub hook trigger for GITScm polling 체크 </li>
              <li> Add build step 클릭 - Invoke Gradle script클릭 - Use Gradle Wrapper 클릭 - Make gradlew executable 클릭
                -  Tasks에 build 입력 - apply - 저장 </li>
              <li> Build Now -  </li>
              <li> /var/lib/jenkins/workspace/jenkins_test/build/libs에 뭐가 있다는데 없다..  </li>
              <li> <a href="https://galid1.tistory.com/466?category=772172" target="_blank" rel="noopener noreferrer">
                무엇인가가 잘못되었다. 다시 찾아보기 </a> </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>


      <div className='block1'>
        <details>
          <summary> [2] 젠킨스 깃허브 연동 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> Jenkins 관리 - 시스템 설정  </li>
              <div className="block3">
                <li> Jenkins URL : 젠킨스URL:9090/ </li>
                <li> Github_Server </li>
                <li> - Name : github_server </li>
                <li> - API URL : https://api.github.com </li>
                <li> - Credentials : add 클릭하고 아래 정보 입력후 none에서 jenkins로 변경
                  <div className="block3">
                    <li> Domain : Global credentials (unrestricted) </li>
                    <li> Kind : Secret text </li>
                    <li> Scope : Global (Jenkins, nodes, items, all ....) </li>
                    <li> Secret : 깃허브 토큰 값 <small> 아래 깃허브 토큰 생성하는 방법 </small> </li>
                    <div className="block3">
                      <li> github - settings - Developer settings - Personal access tokens - Generate new token </li>
                      <li> Note에 Jenkins 입력 </li>
                      <li> repo 클릭, admin:repo_hook 클릭, 토큰 생성 클릭 </li>
                      <li> Personal access tokens 값 저장해놓기(다시 확인 불가)  </li>
                    </div>
                    <li> ID : 깃허브ID </li>
                  </div>
                </li>
                <li> Test connection <small> Credentials verified for user 유저명, rate limit: 4999 </small> </li>
                <li> 저장 </li>
              </div>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] 젠킨스 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 플러그인(설치가 되어있어서 넘김) </h2>
            <div className='block4'>
              <li> Jenkins 관리 - 플러그인 관리 </li>
              <li> Deploy to container Plugin </li>
              <li> git plugin </li>
              <li> github plugin </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 설정해주기 </h2>
            <div className='block4'>
              <li> Jenkins 관리 - Global Tool Configuration </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 JDK </h2>
            <div className='block4'>
              <li> Name : jdk11.0.14 <small> 알아서 </small> </li>
              <li> JAVA_HOME : /usr/lib/jvm/java-11-openjdk-11.0.14.0.9-1.el7_9.x86_64/ <small> 자바가 설치되어있는 경로 </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Git </h2>
            <div className='block4'>
              <li> Name : git <small> 알아서 </small>) </li>
              <li> /usr/bin/git <small> Git home경로 </small> </li>
            </div>

            <h2 className='h2'> 📌 Gradle </h2>
            <div className='block4'>
              <li> name : gradle <small> 알아서 </small> </li>
              <li> GRADLE_HOME : /opt/gradle/gradle-7.0.2 <small> gradle home경로 </small> </li>
            </div>

            <h2 className='h2'> 📌 </h2>
            <div className='block4'>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] 배포할 프로젝트 item 생성(나중에 다시 수정 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> 새로운 Item </li>
              <li> Enter an item name : ssssksss_server_jenkins <small> 알아서 </small> </li>
              <li> Freestyle project </li>
              <li> GitHub project 체크 </li>
              <li> Project url : https://github.com/ssssksss/React_Blog_Server.git/ <small> .git으로 끝나는 주소 </small> </li>
              <li> Git 체크 </li>
              <li> Repository URL : https://github.com/ssssksss/React_Blog_Server.git </li>
              <li> <small> 프로젝트 내부의 gradle을 사용하는 방법 </small> </li>
              <li> Build - Invoke Gradle script, Gradle Version : gradle  </li>
              <li> <small> 서버 내부의 gradle을 사용하는 방법 </small> </li>
              <li> Use Gradle Wrapper , Make gradlew executable 체크, Wrapper location : /opt/gradle/gradle-7.0.2 <small> $GRADLE_HOME에서 나오는 경로 </small> </li>
              <li> Tasks : clean build </li>
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