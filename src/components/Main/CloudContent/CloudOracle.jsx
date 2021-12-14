import React from 'react';

const CloudOracle = (props) => {
    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> MobaXterm, Private Key로 오라클 클라우드 접속 </summary>
                    <div className='block2'>
                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1. MobaXterm을 실행 시키고 좌측상단 Sessions 클릭 </li>
                        <li> 2. SSH 클릭 </li>
                        <li> 3. Remote host에 VM 공용IP주소 적고, Specify username 체크하고 opc 입력 </li>
                        <li> 4. 그리고 아래쪽에 Advanced SSH settings 클릭 </li>
                        <li> 5. Use private key 체크하고 우측 파일 아이콘 클릭해서 저장해둔 pkk파일 불러오기 </li>
                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 오라클 클라우드로 웹서버 tomcat 만들고 React 배포하기 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>
                        <li>  </li>
                        <li>  </li>
                        <li>  </li>
                        <li> React를 실행시키고 npm run build 명령어를 입력 </li>
                        <li> 입력하면 폴더에 build 폴더가 생성 </li>
                        <li> build 폴더에 index.html 등 모든 파일을 리눅스에 웹서버가 실행되는 폴더에 옮겨 넣으면 된다. </li>
                        <li> <small> # httpd.conf 파일에 가면 build파일을 참조하는 곳을 바꿀 수 있는 것 같다. </small> </li>
                        <li>  </li>
                        <li>  </li>

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

            <ul>
                <span className="lblock">
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 오라클 클라우드 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
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
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> <a href="http://taewan.kim/oci_docs/00_oci/terminologies/" target="_blank"
                                        rel="noopener noreferrer"> 오라클 용어 </a> </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 오라클 클라우드 무료 시작하기
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 사이트 </div>
                                <div className='mblock'>
                                    <li> <a href="https://www.oracle.com/kr/cloud/free/" target="_blank"
                                        rel="noopener noreferrer"> 오라클 클라우드 무료 이용 주소 </a> </li>
                                    <li> 영어로 입력해서 가입하기 </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
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
                                <div className='sstitle'> 오라클에 VM과 네트워크 생성하기 </div>
                                <div className='mblock'>
                                    <li> 메뉴 - ID {'&'} 보안 - 구획 - 구획 생성  </li>
                                    <li> 메뉴 - 네트워킹 - 가상클라우드네트워크 - 좌측에 구획 선택 - VCN 마법사 생성
                                        <li> 이름 작성 , IPv4 CIDR 블록 10.0.0.0/16 입력 </li>
                                    </li>
                                    <li> 서브넷 생성
                                        <li> 이름 작성 , CIDR 블록 10.0.0.0/24 입력 </li>
                                    </li>
                                    <li> 서브넷 - 만든 서브넷 이름 클릭 - 디폴트 클릭 - 수신 규칙 추가
                                        <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 80,443 , 설명 : HTTP, HTTPS </li>
                                        <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 3306,33060 , 설명 : mysql </li>
                                        <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 1521 , 설명 : oracle </li>
                                    </li>
                                    <li> 메뉴 - 컴퓨트 - 인스턴스 - 인스턴스 생성
                                        <li> 이름 작성 , 이미지 및 구성 - 이미지 변경 - 원하는 운영체제(CentOS7)    </li>
                                        <li> 전용키는 .ppk 확장자로 공개키는 .pub확장자로 저장하고 공개키 붙여넣기 </li>
                                    </li>
                                    <li> 메뉴 - 네트워킹 - IP관리 - 공용IP - 예약된 공용 IP주소 생성 </li>
                                    <li> 메뉴 - 컴퓨트 - 인스턴스 클릭 - 내 VM - 연결된 VNIC 클릭  - 내 VNIC 클릭 - IPv4 주소 클릭 -
                                        우측 점 3개에서 편집 - 공용 IP 없음 체크 그리고 업데이트 - 편집 - 예약된 공용IP 체크 -
                                        -  위에서 생성한 IP 넣기 </li>
                                    <li>  메뉴 - 컴퓨트 - 인스턴스 - 내 인스턴스 , 공용 IP 주소 복사 (opc , 146.56.171.3) </li>
                                    <li>   </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
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