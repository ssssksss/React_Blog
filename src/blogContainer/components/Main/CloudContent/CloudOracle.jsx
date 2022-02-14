import React from 'react';

const CloudOracle = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [0] 오라클 클라우드 설명(정리 x) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <div className='sstitle'> OCI에서 사용하는 용어 </div>
              <div className='mblock'>
                <li> 리전(Region) : 데이터 센터가 운영되는 지리적 영역 </li>
                <li> AD(Availability) : 리전에서 실제 서비스가 운영되는 데이터센터,
                  각 AD 독립적인 영역 </li>
                <li> VCN(Virtual Cloud Network) : 가상 네트워크에서 통신 규칙 등을 설정할 수 있음 </li>
                <li> CIDR(Classless Inter-Domain Routing) 블록 : IP주소 할당 방법
                  사이더라고 불림, 123.123.123.123/24 "/" 문자 뒤에 숫자는 IP주소처럼
                  네트워크 주소와 호스트 주소를 나누듯이 "/"문자 뒤에 숫자는 사이더의 접두어
                  길이이고 그 뒤에 남은 비트는 IP주소 이다. </li>
                <li>  </li>
              </div>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [1] 오라클 회원가입 하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <a href="https://www.oracle.com/kr/cloud/free/" target="_blank" rel="noopener noreferrer"> 오라클 클라우드 사이트 </a> </li>
              <li> 국가/지역 </li>
              <li> 이름 </li>
              <li> 성 </li>
              <li> <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%98%81%EB%AC%B8%EC%A3%BC%EC%86%8C+%EB%B3%80%ED%99%98" target="_blank" rel="noopener noreferrer"> 네이버 영문 주소 변환기 </a> </li>
              <li> 전자메일 : 이메일 인증 </li>
              <li> 상세주소 </li>
              <li> 시군구 </li>
              <li> 도 : 서울이면 서울특별시 </li>
              <li> Visa나 Master카드 필요, 2달러 정도 결제되었다가 반환 </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] 오라클 클라우드 (CentOS7)인스턴스 생성하고 설정하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 오라클 구획 생성하기(필수는 아님) </h2>
            <div className="block4">
              <li> 중간에 뭔가 뺸것이 있을 수도 있어서 나중에 다시 할때 정리하기 </li>
              <li> 검색하다보니 초기 세팅이 나쁘지 않아서 올려놓기 </li>
              <li> <a href="https://eazymanual.com/oracle-cloud-compartment-and-network-settings/"
                target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
            </div>

            <h2 className='h2'> 📌 오라클 구획 생성하기(필수는 아님) </h2>
            <div className="block4">
              <li> 메뉴 - ID {'&'} 보안 - 구획 - 구획 생성  </li>
              <li> 메뉴 - 네트워킹 - 가상클라우드네트워크 - 좌측에 구획 선택 - VCN 마법사 생성
                <li> 이름 작성 , IPv4 CIDR 블록 10.0.0.0/16 입력 </li>
              </li>
            </div>

            <h2 className='h2'> 📌 서브넷 생성 </h2>
            <div className="block4">
              <li> 서브넷 생성
                <li> 이름 작성 , CIDR 블록 10.0.0.0/24 입력 </li>
              </li>
            </div>

            <h2 className='h2'> 📌 수신 규칙(인스턴스에 접근할 수 있는 포트 설정) </h2>
            <div className="block4">
              <li> 서브넷 - 만든 서브넷 이름 클릭 - 디폴트 클릭 - 수신 규칙 추가
                <li> <small> 소스 범위에는 입력하지 말것! , 입력하게되면 나중에 nginx설치하고 IP접속해도 무용지물 </small> </li>
                <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 80,443 , 설명 : HTTP, HTTPS </li>
                <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 3306,33060 , 설명 : mysql </li>
                <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 1521 , 설명 : oracle </li>
              </li>
            </div>

            <h2 className='h2'> 📌 인스턴스 생성 </h2>
            <div className="block4">
              <li> 메뉴 - 컴퓨트 - 인스턴스 - 인스턴스 생성
                <li> 이름 작성 , 이미지 및 구성 - 이미지 변경 - 원하는 운영체제(CentOS7)    </li>
                <li> 전용키는 .ppk 확장자로 공개키는 .pub확장자로 저장하고 공개키 붙여넣기 </li>
              </li>
            </div>

            <h2 className='h2'> 📌 공용 IP주소 생성하고 인스턴스에 연결해주기 </h2>
            <div className="block4">
              <li> <small> 오라클 무료라면 공용 IP주소를 2개를 만들어놓고 인스턴스 2개를 생성해서 각각 연결해야한다.
                30일이 지나면 공용 IP주소를 더 이상 생성을 할 수 없다!!!
              </small> </li>
              <li> 메뉴 - 네트워킹 - IP관리 - 공용IP - 예약된 공용 IP주소 생성 </li>
              <li> 메뉴 - 컴퓨트 - 인스턴스 클릭 - 내 VM - 연결된 VNIC 클릭  - 내 VNIC 클릭 - IPv4 주소 클릭 -
                우측 점 3개에서 편집 - 공용 IP 없음 체크 그리고 업데이트 - 편집 - 예약된 공용IP 체크 -
                -  위에서 생성한 IP 넣기 </li>
              <li>  메뉴 - 컴퓨트 - 인스턴스 - 내 인스턴스 , 공용 IP 주소 복사 (opc , 146.56.171.3) </li>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] MobaXterm, Private Key로 오라클 클라우드 (CentOS7)인스턴스에 접속 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <li> 1. MobaXterm을 실행 시키고 좌측상단 Sessions 클릭 </li>
            <li> 2. New Session 클릭 </li>
            <li> 3. SSH 클릭 </li>
            <li> 4. Remote host에 VM 공용IP주소 적고, Specify username 체크하고 opc 입력 </li>
            <li> 5. 그리고 아래쪽에 Advanced SSH settings 클릭 </li>
            <li> 6. Use private key 체크하고 우측 파일 아이콘 클릭해서 저장해둔 pkk파일 불러오기 </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] ssh 명령어로 오라클 클라우드 인스턴스에 접속하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 1. .ppk파일을 저장한다. (인스턴스를 생성한 사람이 가지고 있을 것이다.) </li>
            <li> 2. cd 명령어를 이용해서 .ppk파일이 있는 폴더로 이동한다. </li>
            <li> 3. ssh -i 파일.ppk opc@공인IP주소 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 오라클 클라우드로 웹서버 httpd 아파치 서버에 React 배포하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> Package.json에 homepage속성을 도메인주소로 변경해야한다. </li>
            <li> React를 실행시키고 npm run build 명령어를 입력 </li>
            <li> 입력하면 폴더에 build 폴더가 생성 </li>
            <li> build 폴더에 index.html 등 모든 파일을 리눅스에 웹서버가 실행되는 폴더에 옮겨 넣으면 된다. </li>
            <li> vi /etc/httpd/conf/httpd.conf <small> document주소를 리액트 폴더주소와 맞춰준다. </small> </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 클라우드로 만든 리눅스 centos7에 mysql 만들고 mysql workbench와 연결하기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> mysql을 리눅스에 설치했다고 가정하에 진행 </li>
            <li> 방화벽 22포트 열어주고 </li>
            <li> mysql 사용자 localhost 권한이 있어야 한다. </li>
            <li> mysql workbench에 들어가서 +버튼 누르고 </li>
            <li> Connection Method를 Standard TCP/IP over SSH로 변경 </li>
            <li> SSH Hostname: 클라우드IP주소:22  </li>
            <li> SSH Username : 클라우드인스턴스사용자명(오라클은 opc) </li>
            <li> SSH Password - Store in Vault ... : 본인이 각자 알아서 입력 </li>
            <li> SSH Key File : pkk 파일을 경로 지정하기(만약 설정했다면 사용) </li>
            <li> mysql hostname : 원격접속한리눅스이후부터의 IP경로 이므로 127.0.0.1 </li>
            <li> mysql server port : 3306 </li>
            <li> username : root(원하는 사용자) </li>
            <li> password - Store in Vault ... : mysql사용자 비밀번호 </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 리눅스에 스프링 배포하는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> git에 대한 사용법은 아직 모르니 일단 패스 </li>
            <li> jdk 설치 </li>
            <li> git clone github저장소 </li>
            <li> sudo chmod 777 ./gradlew </li>
            <li> .gradlew build </li>
            <li> sudo chmod 664 ./gradlew </li>
            <li> build/libs 폴더에 java -jar jar파일 실행(plain 말고) </li>
            <li> (포트설정은 조사해보기) </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <ul>
        <span className="lblock">

          <div className='mblock'>
            <details>
              <summary className='stitle'> 오라클 클라우드 생성 및 연결하기
                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
              <div className='sblock'>
                <div className='sstitle'> 클라우드 공간에 DB생성하기 </div>
                <div className='mblock'>
                  <li> 메뉴 - Oracle Database - 자율운영 데이터베이스 - 자율운영 데이터베이스 생성 </li>
                  <li> 구획, 표시이름, 데이터베이스 이름 적고, 트랜잭션 처리 클릭 , 항상 무료 구성 옵션만 표시 사용 - 생성완료 </li>
                  <li> 프로비전 중 - 사용가능으로 변경될때 까지 대기  </li>
                  <li> DB 접속 - 인스턴스 전자 지갑 다운로드 </li>
                  <li>  </li>
                </div>
                <div className='sstitle'> sql developer에 연결하기 </div>
                <div className='mblock'>
                  <li> 좌측상단 초록색 + 버튼 클릭  </li>
                  <li> DB이름, 사용자 이름 : Admin , 비밀번호는 설정한 비밀번호 # Admin은 변경이 되지 않는것 같음 </li>
                  <li> 접속 유형을 클라우드 전자 지갑으로 변경 </li>
                  <li> 구성 파일에 오라클 클라우드 DB에서 받은 전자지갑 파일을 넣기 </li>
                  <li> 일단 연결 </li>
                  <li>  </li>
                </div>
                <div className='sstitle'> JDBC 연결하기(미확인) </div>
                <div className='mblock'>
                  <li> 전자지갑 파일 압축 해제를 하고 tnsnames.ora 파일을 보면 오라클클라우드DB명_high 와같은 문구를 볼 수 있다. </li>
                  <li> url: jdbc:oracle:thin:@오라클클라우드DB명_high?TNS_ADMIN=전자지갑경로(D:/Wallet) </li>
                  <li> application.yml <small> 아래 내용들 확인 </small>
                    <div className="sblock">
                      <li> spring:
                        <li> datasource:
                          <li> {' driver-class-name: oracle.jdbc.OracleDriver '} </li>
                          <li> {' url: jdbc:oracle:thin:@ssssksss_medium?TNS_ADMIN=${./src/main/resources/Wallet_ssssksss} '} </li>
                          <li> {' username: ${ssssksss.dbinfo.id} '} </li>
                          <li> {' password: ${ssssksss.dbinfo.password} '} </li>
                        </li>
                      </li> <br />
                      <li> jpa:
                        <li> properties:
                          <li> hibernate:
                            <li> dialect: org.hibernate.dialect.Oracle10gDialect </li>
                          </li>
                        </li>
                      </li>
                    </div>
                  </li> <br />
                  <li> build.gradle <small> #아래와 같이 되어 있는지 확인 </small>
                    <div className="sblock">
                      <li> 	implementation 'com.oracle.database.security:oraclepki' </li>
                      <li> 	implementation 'com.oracle.database.security:osdt_core' </li>
                      <li> 	implementation 'com.oracle.database.security:osdt_cert' </li>
                      <li> runtimeOnly 'com.oracle.database.jdbc:ojdbc8' </li>
                    </div>
                  </li>
                  <li>  </li>
                </div>
              </div>
            </details>
          </div>
          {/*  */}
        </span>
      </ul>
    </div>
  );
}

export default CloudOracle;