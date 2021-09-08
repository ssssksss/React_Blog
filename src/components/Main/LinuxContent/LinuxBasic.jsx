import React from 'react';

const LinuxBasic = (props) => {


  return (
    <>
      <div className="common_style">
        <span className="lblock">
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 다운로드 <a name="" style={{ visibility: "hidden" }}> 리눅스 다운로드 </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 7-zip 다운로드 </span>
                <span className="mblock">
                  <li> <a href="https://www.7-zip.org/download.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                  <li> .exe 64-bit x64 다운로드하기 </li>
                  <li> 실행해서 설치하기 </li>
                </span>
                {/*  */}
                <span className="sstitle"> VMware Workstation Pro 다운로드 </span>
                <span className="mblock">
                  <li> <a href="https://www.vmware.com/kr/products/workstation-pro/workstation-pro-evaluation.html" target="_blank" rel="noreferrer"> 다운로드 페이지 </a> </li>
                  <li> Windows용 Workstation 16 Pro 지금 다운로드 </li>
                  <li> Custom Setup 2개다 체크해제 </li>
                  <li> User Experience Settings 2개다 체크해제 </li>
                  <li> 인증 키 넣어주기 #개인이 알아서 찾아보기를... </li>
                  <li>  </li>
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스의 탄생과 역사 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 리눅스의 탄생 </span>
                <span className="mblock">
                  <li>  1970년도 이전의 컴퓨터는 공장에 맞는 고유의 운영체제를 가지고 있어서
                    하나의 운영체제로 운영이 불가능 그래서 벨 연구소에서 유닉스라는 운영체제를 개발하기 시작 후에 C언어도 개발 </li>
                  <li> 리눅스는 1991년 핀란드 헬싱키 대학의 리누스 토발즈(Linus Benedict Torvalds)라는 학생에 의해 만들어진 운영체제  </li>
                  <li> 리눅스의 첫 시작은 유닉스 호환 운영체제를 목표로 하는 GNU 프로젝트(모두가 공유할 수 있는 소프트웨어) </li>
                  <li> 유닉스 운영체제로 학교에서 하나의 컴퓨터를 놓고 여러사람이 입력장치와 출력장치를 연결해서 사용하고
                    복제,변경,소스코드사용제한에 불만을 가져 리눅스를 만들어버림(레드햇이나 우분투같은 배포판 OS가 아닌
                    커널만 존재하는 초기의 리눅스)  </li>
                  <li>   </li>
                  <li>   </li>
                </span>
                {/*  */}
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 구조 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                {/*  */}
                <span className="sstitle"> 1. Hardware(CPU,RAM) </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 2. 커널 </span>
                <span className="mblock">
                  <li> 하드웨어와 소프트웨어 사이에서 제어 역할을 해주는 곳 </li>
                  <li> <span className="sstitle"> 커널의 기능 </span>
                    <li> 1. 메모리가 어디에서 무엇을 저장하는 데 얼마나 사용되는지를 확인 </li>
                    <li> 2. 프로세스가 CPU를 언제 얼마나 사용할지 결정 </li>
                    <li> 3. 하드웨어와 프로세스 사이에서 중재자의 역할 </li>
                    <li> 4. 프로세스의 서비스 요청을 수신 </li>
                    <li>  </li>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 1. Task 관리  </span>
                      <li> 물리적인 자원을 task라는 추상적인 자원으로 제공 </li>
                      <li> task의 생성, 실행, 스케줄링, 프로세스간 통신등의 서비스를 제공 </li>
                      <li> Task : 컴퓨터 상에서 하나의 작업 </li>
                      <li> Process : 컴퓨터 상에서 하나의 작업을 이루는 과정 </li>
                      <li> Thread : 프로세스를 이루는 하나 하나의 개별 작업 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 2. 메모리 관리 </span>
                      <li> 메모리를 세그먼트나 페이지라는 개념으로 제공 </li>
                      <li> 물리 메모리 관리, 가상메모리 관리 그리고 이들을 위한 세그멘테이션, 페이징,
                        페이지 부재 결함 처리등의 서비스를 제공 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 3. 파일시스템관리 </span>
                      <li> 디스크를 파일이라는 개념으로 제공 </li>
                      <li> 파일의 생성, 접근 제어, inode관리? , 디렉토리 관리, 수퍼 블록 관리 등의
                        서비스를 제공 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 4. 디바이스 관리 </span>
                      <li> 각종 장치를 디바이스 드라이버를 통해 일관되게 접속하도록 해줌 </li>
                      <li> 디스크 터미널, CD, 네트워크 카드 등과 같은 주변 장치를 구동하는 드라이버들로 구성 </li>
                    </p>
                    {/*  */}
                    <p className="sblock">  <span className="sstitle"> 5. 네트워크 관리 </span>
                      <li> 네트워크 장치를 소켓이라는 개념으로 제공해줌 </li>
                      <li> 소켓 인터페이스, TCP/IP 같은 통신 프로토콜 등의 서비스를 제공함 </li>
                    </p>
                    {/*  */}
                  </li>
                  <li> <span className="sstitle"> 커널의 종류? </span>
                    <li> 모놀리식 커널(단일형커널) </li>
                    <li> 마이크로 커널 </li>
                    <li> 하이브리드 커널(혼합형커널) </li>
                    <li> 나노 커널 </li>
                    <li> 엑소 커널 </li>
                  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 3. 쉘(sh, csh, bash) </span>
                <small> sh : 최초의 쉘 , bash : 현재 리눅스에서 표준으로 채택된 쉘 , csh : C언어 기반으로 만들어진 쉘 </small>
                <span className="mblock">
                  <li> 사용자가 컴퓨터에게 명령하는 것을 해석하는 곳 , 명령어 해석기, 명령어와 커널의 대화 통로 </li>
                  <li> bash 셀의 특징
                    <span className="sblock">
                      <li> Alias기능(명령어 단축 기능) </li>
                      <li> History 기능(위/아래 화살표 키) </li>
                      <li> 연산 기능 </li>
                      <li> Job Control 기능 </li>
                      <li> 자동 이름 완성 기능(탭키) </li>
                      <li> 프롬프트 제어 기능 </li>
                      <li> 명령 편집 기능 </li>
                    </span>
                  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle"> 4. 응용프로그램 </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 파일의 종류와 특징 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 1. 일반 파일 </span>
                <span className="mblock">
                  <li> 데이터를 저장하는 데 주로 사용, 텍스트파일, 실행파일, 이미지파일 등 대다수 파일 </li>
                  <li> 실행파일이나 이미지 파일은 바이너리 형태로 저장이 된다. 그리고 보려면은 응용프로그램이 필요 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 2. 디렉터리 </span>
                <span className="mblock">
                  <li> 해당 디렉터리에 저장된 파일이나 하위 디렉터리에 대한 정보를 저장 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 3. 심볼릭 링크 </span>
                <span className="mblock">
                  <li> 윈도우의 바로가기와 비슷 </li>
                </span>
                {/*  */}
                <span className="sstitle"> 장치 파일 </span>
                <span className="mblock">
                  <li> 하드디스크나 키보드 같은 장치도 파일로 취급 </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶리눅스 용어 공부 <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> 하이퍼바이저 : 호스트 컴퓨터에서 다수의 OS를 사용하기 위한 플랫폼(가상) </li>
                  <li> native방식의 하이퍼바이저 : 이미 설치가 되어있는 윈도우나 리눅스가 바로 운영체제가 클릭이 되는것 </li>
                  <li> hosted방식의 하이퍼바이저 : 일반 프로그램처럼 VM으로 운영을 하는 방식 </li>
                  <li> KVM :  </li>
                  <li> XEN </li>
                  <li> Vmware : </li>
                  <li> HyperV : ms에서 제공하는 상용 하이퍼바이저 , window를 실행하는데 가장 우수함 </li>
                  <li> Docker </li>
                  <li> 커널 : </li>
                  <li> 쉘 : </li>
                  <li> 레드햇 리눅스 :  </li>
                  <li> CentOs 리눅스 : </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 압축 파일 종류
                <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle"> 종류 </span>
                <span className="mblock">
                  <li> tar 압축 : 압축률 x , 파일을 모아줌, 압축시간이 빠름 </li>
                  <li> bz 압축 : 압축률 중간, 압축시간도 중간 </li>
                  <li> gz 압축 : 압축률 높음 , 압축시간이 느림 </li>
                  <li> unzip 압축 :  </li>
                  <li> xz 압축 :  </li>
                  <li>  </li>
                </span>
                {/*  */}
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                </span>
                {/*  */}
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ 리눅스 사용자 정의 패키지 배포
                <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li> rpm file build toold install  </li>
                  <li> yum -y install rpm - build rpm-sign </li>
                  <li> # rgnd  # 랜덤한 값을 생성해주는 툴? </li>
                  <li> mk </li>
                  <li> mktemp XXXXX # 랜덤한 파일 생성</li>
                  <li> /dev/random # 랜덤한 값을 가지고 있는곳? </li>
                  <li> kill -9 'ps -ef | grep rnge | grep -v grep | awk '{'{print $2}'}'' </li>
                  <li> ps -ef | grep gpg-agent </li>
                  <li> rngd -r /dev/urandom </li>
                  <li> gpg-agent --use-standard-socket --daemon </li>
                  <li> cd /app/script </li>
                  <li> vim keymemo
                    <li> %echo Generating a Standard key </li>
                    <li> Key-Type: default </li>
                    <li> Key-Length: 2048 </li>
                    <li> Subkey-Type: default </li>
                    <li> Subkey-Length: 2048 </li>
                    <li> Name-Real: ssssksss </li>
                    <li> Expire-Date: 0 </li>
                    <li> Passphrase: P@ssw0rd! </li>
                    <li> %commit </li>
                    <li> %echo done </li>
                  </li>
                  <li> gpg2 --batch --no-tty --gen-key keymemo </li>
                  <li> gpg --fingerprint #지금까지 서명한 것을 보여줌 </li>
                  <li>  </li>
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
          <span className="mblock">
            <details>
              <summary className="stitle"> ▶ <a name="" style={{ visibility: "hidden" }}> </a> </summary>
              <span className="sblock">
                <span className="sstitle">  </span>
                <span className="mblock">
                  <li>  </li>
                </span>
              </span>
            </details>
          </span>
          {/*  */}
        </span>
      </div>
    </>
  );
}

export default LinuxBasic;