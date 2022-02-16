import React from 'react';

const CicdGithubAction = (props) => {
  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> [0] 깃허브 액션이란(정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> Workflow : yml로 작성되서 사용되는 프로세스, 프로젝트의 .github/workflows 폴더에 저장해서 사용 </li>
              <li> Event : Workflow가 작동이 되는 규칙 </li>
              <li> Job : Workflow에서 작업의 단위라고 보면된다. , Job은 여러개의 Step으로 이루어져 있다. </li>
              <li> Step : Job에서 여러 단계로 진행되는 단위 </li>
              <li> Action :  </li>
              <li> Runner :  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 Secret 레포지토리 설정 </h2>
            <div className='block4'>
              <li> Settings - Secrets - New repository Secret </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 git 토큰 설정하기 </h2>
            <div className='block4'>
              <li> Settings - Developer settings - personal access tokens에서 토큰 생성 </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 작업 시작? </h2>
            <div className='block4'>
              <li> 깃허브 - Actions - New workflow - set up a workflow yourself 클릭 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 yml 파일 설정하기 </h2>
            <div className='block4'>
              <li> {" .github > workflow > main.yml "} 로 프로젝트에 폴더 만들기  </li>
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
          <summary> [1] 깃허브 액션 관련 명령어 (정리 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 예시 </h3>
                <div className='block4'>
                  <li> name: 워크플로우 이름 </li>
                  <li> on:
                    <li> push: <small> push가 되었을 때 이벤트 발생 </small>
                      <li> branches: [master] <small> 작업할 브랜치 설정 </small> </li>
                    </li>
                  </li>
                  <li> jobs:
                    <li> build:
                      <li> runs-on: ubuntu-latest <small> 어떤 OS에서 사용할지 설정 </small> </li>
                      <li> steps:
                        <li> - name: 스텝의 이름 </li>
                        <li> uses: 다른사람의액션을 가져와서 사용가능, 깃허브마켓플레이스action사용가능 </li>
                        <li> run: <small> 명령을 아래와 같이 적을 수 있음 </small>
                          <li> npm install </li>
                          <li> npm test </li>
                          <li> npm build </li>
                          <li>  </li>
                        </li>
                      </li>
                    </li>
                  </li>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] 깃허브 액션 클라우드 인스턴스에 폴더 생성해보기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 yml 설정 </h2>
            <li> 아래 파일은 프로젝트에 .github/workflows/main.yml로 만든다. </li>
            <div className='block4'>
              <li> {" name: remote ssh command "} </li>
              <li> {" on: [push] "} </li>
              <li> {" jobs: "}
                <li> {"   build: "}
                  <li> {"     name: Build "}
                    <li> {"     runs-on: ubuntu-latest "} </li>
                    <li> {"     steps: "}
                      <li> {"       - name: executing remote ssh commands using password "}
                        <li> {"         uses: appleboy/ssh-action@master "} </li>
                        <li> {"         with: "}
                          <li> {"           host: ${{ secrets.HOST }} "} </li>
                          <li> {"           username: ${{ secrets.USERNAME }} "} </li>
                          <li> {"           key: ${{ secrets.KEY }} "} </li>
                          <li> {"           port: ${{ secrets.PORT }} "} </li>
                          <li> {"           script: | "}
                            <li> {"             sudo mkdir /app   "} </li>
                          </li>
                        </li>
                      </li>
                    </li>
                  </li>
                </li>
              </li>
            </div>

            <h2 className='h2'> 📌 github secret 설정 </h2>
            <div className='block4'>
              <li> 프로젝트 저장소 - Settings - Secrets - Actions - New repository secret </li>
              <li> Name : HOST , Value : 공인IP주소 </li>
              <li> Name : USERNAME , Value : opc 혹은 ubuntu 혹은 본인이 설정해놓은 인스턴스 사용자명 </li>
              <li> Name : KEY , Value : .ppk 파일에 내용을 넣으면 되는데 -----BEGIN RSA PRIVATE KEY----- ~ -----END RSA PRIVATE KEY----- 까지 전부 복사해서 넣어주어야 한다. </li>
              <li> Name : PORT , Value : 22 (ssh 포트가 다르다면 알아서 바꾸기) </li>
            </div>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default CicdGithubAction;