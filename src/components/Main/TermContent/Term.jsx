import React from 'react';

const Term = (props) => {

  return (
    <>
      <div className="common_style">

        <div className='block1'>
          <details>
            <summary> 컴퓨터 구성 및 작동 방법 </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 1. CPU(중앙 처리 장치) - 사람의 두뇌 </h2>
              <div className="block3">
                <h3 className='h3'> 🎈 CPU의 3가지 기능 </h3>
                <li> 1. 제어장치 </li>
                <div className="block4">
                  <li className='h4'> 제어장치 구성요소 </li>
                  <li> 명령해독기(Decoder) : 명령 레지스터에 있는 명령을 해독하는 회로 </li>
                  <li> 부호기(Encoder) : 해독된 명령에 따라 각 장치로 보낼 제어신호를 생성하는 회로 </li>
                  <li> 제어 주소 레지스터(CAR) : 다음에 실행할 마이크로명령어의 주소를 저장하는 레지스터 </li>
                  <li> 제어 버퍼 레지스터 : 제어 기억장치로부터 읽혀진 마이크로 명령어 비트들을 일시적으로 저장하는 레지스터 </li>
                  <li> 제어 기억장치 : 마이크로 명령어들로 이루어진 마이크로 프로그램을 저장하는 내부 기억장치 </li>
                  <li> 순서 제어 모듈 : 마이크로 명령어의 실행순서를 결정하는 회로들의 집합 </li>
                  <li>  </li>
                  <h4 className='h4'>  </h4>
                </div>
                <li> 2. 연산장치(ALU) </li>
                <div className="block4">
                  <li className='h4'> 연산장치 구성요소 </li>
                  <li> 산술,논리,관계,이동 등의 연산 </li>
                  <li> 가산기,누산기,보수기,데이터레지스터,어버플로검출기, 쉬프트 레지스터 </li>
                </div>
                <li> 3. 레지스터(임시 기억장치) </li>
                <li> CPU 내부에서 처리할 명령어나 연산의 중간 결과값 등을 일시적으로 기억하는 임시 기억장소 </li>
                <div className="block4">
                  <li className="h4">  </li>
                  <li> Program Counter : 다음에 수행할 명령어 주소를 기억하는 레지스터 </li>
                  <li> Memory Address Register : 주소를 기억하는 레지스터 </li>
                  <li>  </li>
                </div>
                <div className="block4">
                  <li className="h4"> 레지스터간의 자료 전송 </li>
                  <li> 직렬전송 : 직렬 시프트 마이크로 오퍼레이션, 병렬전송보다 속도가 느림 </li>
                  <li> 병렬전송 : 하나의 클록 펄스 동안 레지스터 내의 모든 비트가 동시에 전송되는 방식 </li>
                  <li> 버스전송 : 모든 레지스터들이 이용하는 경로로 결선의 수를 줄일 수 있다는 장점을 가진다. </li>
                </div> <br />

                <h3 className="h3"> 📌 CPU 성능 평가 단위 </h3>
                <li> MIPS(Million Instruction Per Second) : 명령갯수/1초 (단위 1000000) </li>
                <li> FLOPS(FLoating-point Operations Per Second) : 부동소수점연산횟수/1초 </li>
                <li> Clock : 클럭주파수발생횟수/1초 , 1초마다 얼마나 많은 작업이 가능한지 알려줌, 높을수록 비싸고 좋다.  </li>
                <li> Hz : 클럭속도의 단위, 요즘에는 GHz </li> <br />

                <h3 className="h3"> 📌 CPU Core, Process, Thread, Cache, Process Control Block</h3>
                <li> Core : 물리적으로 존재하고 핵심적인 연산을 처리하는 역할,
                  코어가 많으면 여러 프로그램을 작동하여도 속도가 느려지지 않는다. </li>
                <li> Cache : 자주 사용하는 변수나 참조 값들을 보관하는 공간  </li>
                <li> Process : 실행중인 프로그램을 뜻한다.  </li>
                <div className="block4">
                  <li className="h4"> Inter Process Communication </li>
                  <li> 프로세스 간의 통신을 하는 것 </li>
                  <li> <a href="https://doitnow-man.tistory.com/110" target="_blank" rel="noopener noreferrer"> 필요할 때 공부할 사이트 </a> </li>
                </div>
                <li> Thread : 논리적으로 존재하여 process 작업을 처리해주는 역할 </li>
                <div className="block4">
                  <li className="h4"> Multi Thread </li>
                  <li> 1개의 process를 논리적인 방법으로 쓰레드를 번갈아가면서 작업하는 방법
                    , 인텔에서는 하이퍼스레딩, AMD에서는 SMT라는 기술로 불리운다.
                    process의 resource를 여러 Thread가 공유가 가능하다.
                    단 Thread의 Stack은 각각 가지고 있고 공유되지 않는다.  </li>
                  <li> 사용하는 이유 : Single Thread를 사용하면 병목 현상(다른 작업을
                    처리하기 위해서 기다려야하는 현상)이 발생하고 처리속도도 더 늦기 때문이다. </li>
                </div>
                <div className="block4">
                  <li className="h4"> Context Switch </li>
                  <li> 멀티프로세스 환경에서 실행중인 Process가 Interrupt에 의해서 잠시 중단이 될 때
                    기존 실행중인 Process 정보를 실행중인 Process PCB에 저장하고 Interrupt에서 다음 실행될
                    Process를 PCB를 참조하여 실행을 시키는 것, 간단하게 말하면 Process를 교체하는 것  </li>
                  <li> Context Switch가 많이 발생하면 CPU가 작업을 하지를 못해서 문제가 발생하므로
                    멀티프로세스 환경에서 사용을 할 때 고려를 잘 해야된다. </li>
                  <li>  </li>
                </div>
                <div className="block4">
                  <li className="h4"> Interrupt </li>
                  <li> 인터럽트는 현재 작업중인것을 일시적으로 중단을 시키고 이벤트를 발생시켜
                    작업을 처리해주는 역할을 한다.  </li>
                  <li>  </li>
                </div>
                <div className="block4">
                  <li className="h4"> </li>
                  <li>  </li>
                </div>
                <li> Process Control Block : 여러 Process를 관리하는 정보를 가지고 있는 공간(CPU에 존재?) </li>
              </div>

              <div className='block1'>
                <details>
                  <summary> 병렬 프로그래밍 </summary>
                  <div className='block2'>

                    <h2 className='h2'> 📌 Message Passing </h2>
                    <li> 하나의 프로그램을 여러개의 프로세스에서 처리를 할 때 서로
                      통신이 필요한데 메시지들의 송신과 수신으로 구현하는 기법 </li>
                    <li> 프로세스끼리 메모리를 서로 공유가 가능하지만
                      직접적으로 공유하지 않는 것 </li>
                    <li>  </li>

                    <h2 className='h2'> 📌 설명 </h2>
                    <li> 1 </li>

                  </div>
                </details>
              </div>

              {/* ======================================================================== */}

              <h2 className='h2'> 📌 RAM </h2>
              <li>  </li>
              <li> data area </li>
              <div className="block4">
                <li> 전역변수, Static 변수 </li>
                <li>  </li>
              </div>
              <li> Stack </li>
              <div className="block4">
                <li> 지역변수, 매개변수(컴파일 타임 크기에 결정) </li>
                <li>  </li>
              </div>
              <li> Heap </li>
              <div className="block4">
                <li> 프로그래머가 할당 (런타임 크기에 결정) </li>
                <li> Object 값들을 보관한다.(스택 영역에서 heap을 참조) </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 Harddisk(SSD, HDD) </h2>
              <li> cell로 구성되어 있다. (1cell = 1byte) </li>
              <li> 1개의 하드디스크에 여러개의 운영체제를 설치할 수 있는 이유가 파티션을 나눌 수 있기 때문이다. </li>
              <li> 4개의 공간 구성(Partition) </li>
              <div className="block4">
                <li> 1. MBR(Master Boot Recoder): Harddisk에서 가장 먼저 읽는 부분 </li>
                <li> 2. Primary Drive : 파티션 앞에 부트 섹터가 있어서 운영체제를 설치할 수 있다.
                  Primary는 3개정도까지 되고 활성되는 Primary는 1개만 존재할 수 있다.
                </li>
                <li> 3. Exteded Drive : Exteded은 1개만 설정가능하고 Logical Drive를 구분해주는 역할? </li>
                <li> 4. Logical Drive : 데이터를 저장하는 공간(운영체제 설치를 할 수 없는 공간) </li>
              </div>
              <li> 가상 메모리(Swap) : RAM공간이 부족할 때 하드에 RAM처럼 사용할 수 있는 공간이 있다.
                이런 공간에 존재하는 파일을 paging file이나 swap file이라고 하고 이런 파일을
                사용하는 것을 Hard swap(Disk thrashing)이라고 칭한다.
              </li>
              <li> 2 </li>

              <h2 className='h2'> 📌 가상 메모리 </h2>
              <li> 2 </li>
              <li> 2 </li>

              <h2 className='h2'> 📌 Process </h2>
              <li> 운영체제로부터 자원을 할당받는 작업의 단위 </li>
              <li> 1개의 어플리케이션에는 1개이상의 process가 작업  </li>
              <li> 각각의 Process는 서로 자원을 공유할 수 없다. </li>
              <li> Multi Process </li>
              <div className="block4">
                <li> 1개의 어플리케이션을 여러개의 process로 나누어서 처리를 하는 방법 </li>
                <li> process 1개가 고장나도 어플리케이션은 동작한다. </li>
                <li>  </li>
              </div>

              <h2 className='h2'> 📌 Thread </h2>
              <li> process에 할당 받은 자원을 이용하는 실행 단위 </li>
              <li> 1개의 process는 1개이상의 쓰레드를 이용하여 작업을 한다. </li>
              <li> 쓰레드가 포함되어 있는 process의 메모리에 대해서는 접근이 가능하다. </li>
              <li> 2 </li>

              <h2 className='h2'> 📌 Context Switching </h2>
              <li> 현재 진행하고 있는 Process,Thread의 상태를 저장하고 다음 진행할
                Process,Thread 상태값을 읽어 적용하는 과정 </li>
              <li> Process,Thread는 Register에 저장되고 Process Control Block에 관리된다. </li>
              <li>  </li>

              <h2 className='h2'> 📌  </h2>
              <li> 1 </li>
              <li> 2 </li>

            </div>
          </details>
        </div>

        <div className='block1'>
          <details>
            <summary>  </summary>
            <div className='block2'>

              <h2 className='h2'> 📌 설명 </h2>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>

              <h2 className='h2'> 📌 장점, 단점 </h2>
              <li> 장점 : </li>
              <li> 단점 : </li>

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


        <div className="lblock">

          <div className='mblock'>
            <details>
              <summary className='stitle'> 개발 관련 용어 </summary>
              <div className='sblock'>
                <div className='sstitle'> API </div>
                <div className='mblock'>
                  <li> Application Programming Interface  </li>
                  <li> 서버가 클라이언트에게 리소스를 주고 받는 방식 </li>
                  <li>  </li>
                  <li>  </li>
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

          <div className='mblock'>
            <details>
              <summary className='stitle'> 서버,네트워크  </summary>
              <div className='sblock'>
                <div className='sstitle'> 설명 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
                <div className='sstitle'> 예시 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
              </div>
            </details>
          </div>

          <div className='mblock'>
            <details>
              <summary className='stitle'> </summary>
              <div className='sblock'>
                <div className='sstitle'> 설명 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
                <div className='sstitle'> 예시 </div>
                <div className='mblock'>
                  <li>  </li>
                  <li>  </li>
                </div>
              </div>
            </details>
          </div>

          <div className="mtitle">   용어 정리  </div>
          <li> <small>   </small> </li>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  프론트엔드 관련용어 <small> </small>
                <a name="프론트엔드 관련용어" style={{ visibility: "hidden" }}> 프론트엔드 관련용어 </a> </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  MIME(Multipurpose Internet Mail Extensions) </summary>
                  <div className="mblock">
                    <li> 과거에 이메일에 파일을 텍스트문자로 변환하여 같이 보냈는데 MIME가 변환 역할을 함 </li>
                    <li> 현재는 웹을 통해 여러형태의 파일을 변환(인코딩)해서 전달하는 역할 </li>
                    <li> 웹에서 Content-Type 정보를 파일의 앞부분에 담음 </li>
                    <li> <div className="sstitle">  MIME 형식 [파일종류/파일포맷]  </div>
                      <small> 바이너리파일은 8비트, 텍스트파일은 7비트 데이터 </small>
                      <div className="sblock">
                        <li> text/plain </li>
                        <li> text/html </li>
                        <li> text/css </li>
                        <li> text/javascript </li>
                        <li> text/xml </li>
                        <li> Application/xml </li>
                        <li> Application/pdf </li>
                        <li> Application/json </li>
                        <li> Application/javascript </li>
                        <li> Application/ogg </li>
                        <li> Application/octet-stream </li>
                        <li> Application/ </li>
                        <li> Application/x-www-form-urlencode </li>
                        <li> multipart/formed-data : 브라우저에서 서버로 HTML Form 내용 전송시 사용</li>
                        <li> image/jpeg </li>
                        <li> image/gif </li>
                        <li> image/png </li>
                        <li> image/svg+xml </li>
                        <li> audio/midi </li>
                        <li> audio/mpeg </li>
                        <li> audio/webm </li>
                        <li> audio/x-ms-wma </li>
                        <li> audio/ogg </li>
                        <li> audio/wav </li>
                        <li> video/webm </li>
                        <li> video/ogg </li>
                        <li> application/msword </li>
                        <li> application/pdf </li>
                        <li> application/zip </li>
                        <li> application/x-javascript </li>
                        <li> application/ </li>
                        <li> application/ </li>
                        <li>  </li>
                      </div>
                    </li>
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  백엔드 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  네트워크 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle"> URL(Uniform Resource Locator) </summary>
                  <div className="mblock">
                    <li> <h3> URL 구조 </h3>
                      <li> <div className="sstitle"> http://www.naver.com:80/webtoon_folder/webtoon.jsp?id=123 </div> </li>
                      <li> http : 통신 프로토콜(http, https, ftp, file 등)  </li>
                      <li> www : 호스트 이름 </li>
                      <li> naver : 2차도메인 / 메인도메인  </li>
                      <li> .com : 1차도메인 / 최상위도메인  </li>
                      <li> 80 : 포트번호  </li>
                      <li> webtoon_folder : 디렉토리 </li>
                      <li> webtoon.jsp : 파일명과파일형식  </li>
                      <li> id=123 : 쿼리,매개변수 (get방식)  </li>
                    </li>
                    <li>  </li>
                  </div>
                  {/*  */}
                  <div className="mblock">
                    <li>  </li>
                  </div>
                  {/*  */}
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  서버 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                {/*  */}
                <details>
                  <summary className="sstitle">  호스팅, 클라우드 서버 </summary>
                  <div className="mblock">
                    <li> <h3> 호스팅 서버 </h3>  : 서버 공간을 돈받고 빌려주는 서버 , 24시간 켜져있는 서버 </li>
                    <li> <h3> 공유 호스팅 </h3> : 서버1개를 여러명이서 사용, 가격이 저렴(개인), 하나의 서버를
                      여러명의 사용자가 나누어씀, 한명의 사용자에 트래픽이 급격하게 발생하면 같은 서버를 사용하는 다른
                      사용자들에게 문제가 발생  </li>
                    <li> <h3> 전용 호스팅 </h3> : 서버1개를 통째로 빌려서 관리,권한 등을 가짐, 가격이 비쌈(개인이 부담하기에는 부담스러움) </li>
                    <li> <h3> VPS(Vitual Private Server) 호스팅 </h3> : 서버 1개를 여러개의 구역으로 나눔 그리고 각 사용자들이
                      구역을 사용하게 하는 방식, 서로에게 간섭이 되지 않음, 단 직접 서버를 구축해야함으로 리눅스에 대한 지식이 필요 </li>
                    <li> <h3> 클라우드 </h3> : IaaS(하드웨어) , PaaS(IaaS+가상서버) , SaaS(PaaS+소프트웨어) </li>
                    <li> <h3> IaaS 업체 </h3> 아마존, 구글, Azure, 네이버 클라우드 (1년간 무료제공)  </li>
                    <li> <h3> StasS 업체 </h3>  </li>
                    <li> <h3> PaaS 업체 </h3>  heroku , netlify  </li>
                    <li> <h3> DaaS 업체 </h3>  </li>
                    <li> <h3> FaaS 업체 </h3>  </li>
                    <li> <h3> SaaS 업체 </h3>   </li>
                  </div>
                  {/*  */}
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  DNS 서버(네임서버) </summary>
                  <div className="mblock">
                    <div className="sstitle"> 설명 </div>
                    <li> 과거에는 URL과 IP주소를 hosts파일에 기록해서 가지고 있었음(수동적, 실시간반영이 안됨) </li>
                    <li> 클라이언트가 naver.com이라는 주소를 입력하면 DNS서버에서 naver.com이라는 도메인 주소에 맞는지
                      IP주소(호스팅서버의주소)를 찾아서 클라이언트에게 보내준다. </li>
                    <li> DNS서버는 1개로 구성되어있지 않고 단계적으로 구성되어 있음
                      <li> Root DNS 서버(com,org,net 등) : ICANN이라는 비영리 기관이 관리 , TLD DNS서버 IP들을 가지고 있음 </li>
                      <li> 최상위 도메인(TLD) DNS 서버(A.com,B.net 등) : 도메인 등록기관이 관리 , 권한 DNS서버 IP들을 가지고 있음 </li>
                      <li> 권한(Authoriatative) DNS 서버() : 개인도메인과 IP주소의 관계(기록,저장,변경)가 있는 서버,
                        도메인/호스팅 업체의 네임서버 , 개인 DNS서버가 여기에 속한다. </li>
                      <li> 캐싱 서버(recursive server) : 클라이언트가 제일 먼저 접근하는 DNS서버, 일정기간동안 도메인과 맞는 IP를 캐시라는
                        형태로 저장하는 DNS서버(ISP(통신사),google,Cloudflare 등) , 이 요청하는 서버는 개인이
                        바꿀 수 있음(일반적으로 ISP(통신사) 캐싱 DNS 서버로 지정되어 있음) </li>
                      <li> <a href="https://www.dnsperf.com/#!dns-providers,Asia" target="_blank">
                        해외 DNS 서버 속도 비교사이트 </a>  </li>
                      <li>  </li>
                    </li>
                    <li>  </li>
                    <div className="sstitle"> DNS 서버 종류 </div>
                    <li> <h3> 주 서버(Primary)  </h3>
                      <li> 도메인 등록기관에 DNS서버를 등록할 때 주 DNS서버를 사용 </li>
                      <li> 도메인을 IP로 바꾸는 역할을 한다. </li>
                      <li> 클라이언트의 질의에 대한 응답 , 클라이언트에게 보낼
                        질의에 대한 응답이 없으면 상위 도메인 서버에 다시 질의 </li>
                    </li>
                    <li> <h3> 보조 서버(Secondary) </h3>
                      <li> 주 서버의 정보를 가지고 있다가 주 서버의 문제가 생기면 역할을 대신함 </li>
                      <li>  </li>
                    </li>
                    <li> <h3> 캐싱 서버(Cacging)  </h3>
                      <li>  </li>
                    </li>
                    <div className="sstitle">  </div>
                    <li>  </li>
                    <div className="sstitle">  </div>
                    <li>  </li>
                    {/*  */}
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  아키텍처 관련용어 <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  DB 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  보안 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <details>
              <summary className="stitle">  회사 관련용어  <small> </small>
              </summary>
              <div className="sblock">
                <details>
                  <summary className="sstitle">  직위, 담당 업무,  </summary>
                  <div className="mblock">
                    <li> FE	：프론트 엔드	</li>
                    <li> BE	：백 엔드	</li>
                    <li> DB : 데이터베이스 </li>
                    <li> 개발자 : 프로그램 개발 , DB 지식 필요	</li>
                    <li> PL(Project Leader) : 프로젝트의 프레임워크,DB,개발 가이드 등을 설계/작성하는 역할(핵심인력) </li>
                    <li> PM(Project Manager) : 고객의 요구사항을 듣고 프로젝트 전체적인 기획, 일정, 인력 등을 관리하는 업무	</li>
                    <li> 실무 담당자 : 시스템의 실제 업무를 담당하는 사람	</li>
                    <li> 현업 담당자 : 고객사의 모든 업무 담당자를 말함	</li>
                    <li> 	</li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  마케팅? 업무 </summary>
                  <div className="mblock">
                    <li> B2B(Business To Business) : 기업대 기업  </li>
                    <li> B2C(Business To Customer) : 기업대 고객  </li>
                    <li> 리뉴얼 : 시스템을 새로 만듬(소규모) </li>
                    <li> SI(System Integration) : 아무것도 없는 상태에서 새로 만드는 업체 </li>
                    <li> SM(System Management) : 시스템 유지 보수 업체 </li>
                    <li>  </li>
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  계약 관련 </summary>
                  <div className="mblock">
                    <li>  </li>
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle">  </summary>
                  <div className="mblock">
                    <li>  </li>
                  </div>
                </details>
                {/*  */}
              </div>
            </details>
          </div>
          {/*  */}
          <div className="mblock">
            <div className="stitle"> <a name="프레임워크와 라이브러리"> 프레임워크와 라이브러리  </a> </div>
            <li> 프레임워크 : 소프트웨어의 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합,
              어플리케이션 개발할 때 코드,자료구조,DB연결 등 기능들이 제공이 되는 소프트웨어 프로그램(Maven,Gradle 등)  </li>
            <li> 라이브러리 : 특정 기능들과 도구들을 모아놓은 집합 </li>
            <li>   </li>
            <li>   </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Restful API">  Restful API </a> </div>
            <li> 어떤 자원에 대해 CRUD 연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것 </li>
            <li> Resource(자원,URI) + Method(행위,POST) + Representation of Resource(자원형태,JSON) = REST </li>
            <div className="sblock">
              <div className="sstitle"> Uniform Interface (유니폼 인터페이스) </div>
              <li> HTTP표준이면 어떤 플랫폼에서도 사용가능 </li>
              <div className="sstitle">Stateless (상태 정보 유지 안함) </div>
              <li> 서버는 요청을 별개의 것으로 인식  </li>
              <div className="sstitle"> Cacheable (캐시 가능)</div>
              <li> http캐싱기능 적용 가능 </li>
              <div className="sstitle"> Client-Server Architecture </div>
              <li> 서버는 api(자원)를 제공하고 클라이언트는 인증,세션 등을 관리하여 역할을 구분시킴 </li>
              <div className="sstitle"> Self-Descriptiveness(자체 표현 구조) </div>
              <li> REST API 메시지만 보고도 이해할 수 있는 구조 </li>
              <div className="sstitle"> Layerd System (계층화) </div>
              <li> 보안, 로드 밸런싱, 암호화 등을 계층을 추가하여 구조를 변경할 수 있다. 또한 Proxy,GateWay와 같은 네트워크
                기반의 중간매체를 사용할 수 있게 해준다. 하지만 클라이언트는 직접 통신하는지, 중간 서버와
                통신하는지 알 수 없다. </li>
              <div className="sstitle"> REST 규칙 </div>

              <ol> URI는 명사를 사용 </ol>
              <ol> 슬래시로 계층 관계를 표현 </ol>
              <ol> URI의 마지막에는 슬래시를 붙이지 않는다. </ol>
              <ol> URI는 소문자로 구성 </ol>
              <ol> 가독성이 떨어지는 경우 하이푼을 사용 </ol>

            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="URL과 URI">  URL과 URI </a> </div>
            <li> URL(Uniform Resource Locator) : 인터넷에 있는 자원의 위치 </li>
            <li> URI(Uniform Resource Identifier) : 인터넷 상의 자원을 식별하는 문자열, URL을 포함하고 있음 </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="IOC와 DI,POJO">  IOC와 DI,POJO </a> </div>
            <li>  </li>
            <li> DI(의존성 주입) : 객체 의존 관계를 외부에서 넣어주는 방법 @Autowired로 스프링에서는 넣어줌 ,
              방법은 생성자 주입,수정자(setter) 주입,필드 주입 3가지 방법중에 생성자 주입을 추천
            </li>
            <li>  </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="TDD (테스트 주도 개발)">  TDD (테스트 주도 개발) </a> </div>
            <li> 단위테스트를 작성 {"->"} 구현 클래스믈 작성 {"->"} 통합테스트 {"->"} </li>
            <li>  </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="ORM(Object Relation Mapping)"> ORM(Object Relation Mapping) </a> </div>
            <li> 객체(Object)와 DB의 테이블을 Mapping 시켜 RDB 테이블을 객체지향적으로 사용하게 해주는 기술 </li>
            <li> 과거에는 MyBatis라는 Object Mapping기술로 Java코드와 직접 작성한 SQL 코드를 Mapping하여
              사용하였지만 현재는 JPA와 구현체 Hibernate로 처리를 한다. </li>
            <li> 하지만 복잡한 쿼리를 작성하기에는 MyBatis가 더 편할 수도 있지만 생산성은 Hibernate가 더 좋다 그렇지만
            </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="JPA(Java Persistence API)">  JPA(Java Persistence API) </a> </div>

            <div className="sblock">
              <li> 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스 </li>
              <li> SQL언어가 아닌 자바 언어를 사용하여 객체지향 관점으로 관리할 수 있게 해준다.</li>
              <li> 개발자가 DB작업에 집중을 덜 하여도 되고 CRUD를 사용하기 쉬우며 SQL을 수정하기도 쉽고
                객체와 DB에 넣은 데이터타입의 불일치도 해결을 해준다.
              </li>
              <div className="sstitle"> JPQL(Java Persistence Query Language) </div>
              <li> 자바 객체를 이용하여 SQL 쿼리를 이용할 수 있는 언어</li>
              <li> JPA(인터페이스)의 구현체 </li>
              <li> JPA를 사용하기 위해서 필수로 사용해야할 필요는 없다. </li>
              <li> 다른 구현체 ( DataNucleus,EclipseLink 등) 사용 가능 혹은 사용자 정의 구현체로도 사용 가능</li>
              <div className="sstitle"> Spring Data JPA</div>
              <li> Repository 인터페이스로 메소드를 입력하면 적절한 쿼리를 날려준다. </li>
              <div className="sstitle"> JDBC API </div>
              <li> JPA를 사용하면 SQL을 보내 DB와 통신하는 API 직접적으로 사용하는 일은 없다. </li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Spring MVC">  Spring MVC </a> </div>
            <div className="sblock">
              <li className="sstitle"> Dispatcher Servlet </li>
              <li> 클라이언트 요청을 받고 HandlerMapping에게 찾으라고 지시  </li>
              <li className="sstitle"> HandlerMapping </li>
              <li> Dispatcher Servlet에게 맵핑정보를 받아 Controller를 찾아 요청   </li>
              <li className="sstitle"> front controller </li>
              <li> Controller의 명령에 따라 작업을 하고 View를 리턴 Dispatcher Servlet으로 보냄 </li>
              <li className="sstitle"> ViewResolver </li>
              <li> Controller리턴 값 View를 검색 </li>
              <li className="sstitle"> View </li>
              <li> 처리결과를 View에 송신하여 처리하고 그 View를 Dispatcher Servlet으로 이동하고 클라이언트에게 보냄 </li>
              <li className="sstitle">  </li>
              <li>  </li>
              <li className="sstitle">  </li>
              <li>  </li>
              {/* <li className="sstitle">  </li>
                            <li>  </li> */}
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="DataSource"> DataSource  </a> </div>
            <li> 자바에서는 Connection Pool을 구현하여 사용하였는데 DB연동과 관련되 로직들이 추상화 되어있다. </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Controller와 RestController">  Controller와 RestController </a> </div>
            <a href="https://mangkyu.tistory.com/49?category=761302"> 참고 </a>
            <li> @Controller : 클라이언트의 요청을 받아 View를 반환 </li>
            <li> @RestController(@Controller+@ResponseBody) :
              클라이언트의 요청을 받아 객체형태(JSON 등)로 http에 담아 반환 </li>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Transaction(트랜잭션)"> Transaction(트랜잭션)  </a> </div>
            <div className="sblock">

              <li> 장바구니에 담기 여러개 상품구매나 호텔+항공 예약 등 여러개의 쿼리를 사용하여 처리할 때 도중에 문제가 생기면 처음으로
                돌려놓기 위한 방법   </li>
              <div className="sstitle">  1. 트랜잭션 동기화 </div>
              <li> Connection 객체를 특정 장소에 보관하고 필요할 때 꺼내쓰는 방법, 작업 쓰레드마다 Connection 객체를
                독립적으로 관리하기 때문에, 멀티쓰레드 환경에서 충돌이 발생할 여지가 없다. JDBC와 같은 종속적인 트랜잭션 동기화 코드는
                hibernate에서 Connection이 아닌 session객체를 사용하기 때문에 문제를 유발한다. </li>
              <div className="sstitle">  2. 트랜잭션 추상화</div>
              <li> 스프링에서는 트랜잭션 기술의 공통점을 담은 추상화 기술을 제공하여 종속적인 코드를 이용하지 않고
                일관된 트랜잭션을 처리할 수 있게 도와준다.
              </li>
              <div className="sstitle">  3. AOP를 이용한 트랜잭션</div>
              <li>  트랜잭션을 담당하는 코드를 비즈니스 로직과 분리하여 처리한다.
                <div className="mblock">

                  <li> 트랜잭션 전파 : Propagation Requied(추가), Propagation Requires New(생성), Propagation Not Supported(별도로 동작)
                    이외에도 처리방법이 존재 </li>
                  <li> 격리수준 : 서버에 여러 개의 트랜잭션이 동시에 진행될 때 순차진행 방법이 아닌 동시에 여러개를 진행하기 위해 조정 </li>
                  <li> 제한시간 : 트랜잭션을 수행하는 시간을 설정 </li>
                  <li> 읽기전용 : 트랜잭션 내에서 데이터를 조작하는 시도를 막고, 성능이 향상될 수 있다. </li>

                </div>
              </li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="세션,쿠키,토큰"> 세션,쿠키,토큰,캐시  </a> </div>
            <div className="sblock">
              <div className="sstitle"> 세션 </div>
              <div className="mblock">
              </div>
              <div className="sstitle"> 쿠키 </div>
              <div className="mblock">
              </div>
              <div className="sstitle"> 토큰 </div>
              <div className="mblock">
              </div>
              <div className="sstitle"> 캐시 </div>
              <small> 자주 사용하는 데이터를 복사해 놓는 임시 장소, 캐시는 저장 공간이 작고 비용이 비싸지만 빠른
                성능을 제공한다.  </small>
              <div className="mblock">
                <li> 1. 접근 시간에 비해 원래 데이터를 접근하는 시간이 오래 걸리는 경우 </li>
                <li> 2. 반복적으로 동일한 결과를 돌려주는 경우(이미지나 썸네일 등) </li>
                <li> 3. memory에 저장하므로 DBMS의 부하를 줄일 수 있는 장점이 있다. </li>
                <li> 4. Cache Hit는 캐시에 해당 데이터가 존재하면 반환
                  , Cache Miss는 데이터가 캐시에 존재하지 않으면 DBMS 또는 서버에
                  요청을 하는 경우
                </li>
              </div>
              <div className="mblock">
                <div className="sstitle"> Local Cache </div>
                <li> Local 장비에서만 사용되는 캐시, Local 장비의 Resource를 이용 </li>
                <li> Local에서만 작동되므로 속도가 빠름 </li>
                <li> Local에서 작동하므로 다른 서버와 데이터 공유가 어렵다. </li>
                <div className="sstitle"> Global Cache </div>
                <li> 여러 서버에서 Cache Server에 접근하여 사용하는 캐시로 분산된 서버에서 데이터를 저장하고 조회할 수 있다 </li>
                <li> 네트워크를 통해 데이터를 가져오므로, Local Cache에 비해 상대적으로 느리다  </li>
                <li> 별도의 Cache서버를 이용하기 때문에 서버 간의 데이터 공유가 쉽다. </li>
              </div>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="서버기반, 토큰기반 인증시스템 차이"> 서버기반, 토큰기반 인증시스템 차이  </a> </div>
            <div className="sblock">
              <div className="sstitle"> 서버 기반 인증 시스템  </div>
              <li> 서버측에서 사용자의 정보를 기억하는 방식 </li>
              <li> 서버에서 세션을 유지하는 방식 </li>
              <li>  Sateful 서버</li>
              <li>  하지만 세션을 저장하기 위해 메모리나 DB에 저장하는데 사용자가 많아지면 서버에 부하가 걸린다.
                또한 세션을 분산처리하기는 어렵고 그리고 CORS를 이용하기에도 번거로움</li>
              <div className="sstitle"> 토큰 기반 인증 시스템  </div>
              <li> 인증받은 사용자에게 토큰을 발급하고 서버에 요청을 보낼때 헤더에 토큰을 함께
                보내도록 하여 유효성 검사를 하는 방식 </li>
              <li> Stateless서버 </li>
              <li> 여러개의 서버를 작동시키고 있을 경우 한개의 서버에만 세션이 저장될 경우 다른 서버를 이용하게 되면
                이용이 되지 않지만 토큰 방식은 클라이언트가 가지고 있으므로 서버가 변경이 되어도 어떤 서버에서
                처리를 해도 상관이 없어지는 장점이 있다. </li>
              <li> OAuth를 이용하게 되면 Facebook, Google 등과 같이 소셜계정을 이용하여 다른 웹서비스에 로그인을 할 수 있다.  </li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="JWT(Json Web Token)"> JWT(Json Web Token)  </a> </div>
            <small> Json 포맷을 이용하여 사용에 대한 속성을 저장하는 Web Token 기반  </small>
            <li> 토큰 자체를 정보로 사용하는 Self-Contained 방식으로 정보를 안전하게 전달한다. </li>
            <li> 토큰을 static변수(매번 로컬스토리지에 꺼내지 않기 위해서)와 로컬 스토리지에 저장 </li>
            <div className="sblock">
              <div className="sstitle"> JWT 구조 </div>
              <small> Base64로 인코딩, 각 부분을 .구분자를 사용하여 구분 </small>

              <li> Header </li>
              <div className="mblock">
                <li> typ : 토큰의 타입을 지정 </li>
                <li> alg : 알고리즘 방식 지정, 서명 및 토큰 검증에 사용 </li>
              </div>
              <li> Payload </li>
              <small> 토큰에 사용되는 정보의 조각 클레임이 담겨있다. JSON형태로 다수의 정보를 넣는다.  </small>
              <div className="mblock">

                <div className="sstitle"> 등록된 클레임(Registered Claim) </div>

                <li> iss : 토큰 발급자 </li>
                <li> sub : 토큰 제목 </li>
                <li> aud : 토큰 대상자 </li>
                <li> exp : 토큰 만료 시간(NumericDate형식으로 되야한다.) </li>
                <li> nbf : 토큰 활성 날짜 , 토큰이 활성되는 날짜 </li>
                <li> iat : 토큰 발급 시간 , 토큰 발급 경과 시간 </li>
                <li> jti : JWT 토큰 식별자 , 중복 방지를 위해 사용, 일회용 토큰 등에 사용  </li>

                <div className="sstitle"> 공개 클레임(Public Claim) </div>
                <li> 사용자 정의 클레임, 공개용 정보를 위해 사용, 충동 방지를 위해 URI포맷을 사용 </li>
                <div className="sstitle"> 비공개 클레임(Private Claim) </div>
                <li> 사용자 정의 클레임, 서버와 클라이언트 사이에 임의로 지정한 정보를 저장 </li>

              </div>
              <li> Signature(서명) </li>
              <div className="mblock">
                <li> 토큰을 인코딩하거나 유효성 검증을 할 때 사용하는 고유한 암호화 코드 </li>
                <li> 인코딩한 값을 비밀키를 이용해 헤더에서 정의한 알고리즘으로 해싱을 하고 다시 BASE64로 인코딩하여 생성한다. </li>
              </div>

            </div>
            <div className="sblock">

              <div className="sstitle"> JWT의 단점 </div>
              <li> 토큰 자체에 정보를 담으므로 보안문제가 있을 수 있다. </li>
              <li> 토큰에 3개로 구분이 되므로 정보가 많으면 토큰의 길이가 늘어난다. </li>
              <li> 인코딩된 데이터는 탈취하여 디코딩하여 정보를 볼 수 있으므로 중요 데이터를 넣으면 안된다. </li>
              <li> JWT는 Stateless이므로 토큰에 만료시간을 꼭 넣어주어야 한다. </li>
              <li> 토큰을 클라이언트 측에서 관리해야 하기 때문에 토큰을 저장해야 한다. </li>

            </div>
            <div className="sblock">

              <div className="sstitle"> 로그인 </div>
              <li> 로컬 스토리지에 토큰이 존재하는지 유무 확인 </li>
              <li> 만일 존재한다면 로그인 </li>
              <li> 존재하지 않는다면 서버에서 토큰 발행 응답 헤더에 담아서 클라이언트에 보냄 </li>
              <li> 클라이언트는 로컬스토리지와 static변수에 저장 그리고 로그인 </li>

            </div>
            <div className="sblock">
              <div className="sstitle"> 로그아웃  </div>
              <li> 로그아웃을 할 경우 토큰을 제거 </li>
              <li> 실제 서비스에서는 사용한 토큰을 DB테이블에 넣어서 접근을 막아준다.  </li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="RequestBody, ModelAttribute, RequestParam의 차이"> RequestBody, ModelAttribute, RequestParam의 차이  </a> </div>
            <div className="sblock">
              <li className="sstitle"> RequestParam </li>
              <li> 1개의 HTTP 요청 파라미터를 받기 위해 사용 </li>
              <li> 파라미터가 필수적으로 전송되어야 한다.(400에러 발생) </li>
              <li className="sstitle"> RequestBody </li>
              <li> Json형태의 HTTP  Body 데이터를 MessageConverter를 통해 변환시킴 </li>
              <li> 바인딩이 아닌 변환이므로 Setter함수가 없어도 변수들이 저장됨 </li>
              <li className="sstitle"> ModelAttribute </li>
              <li>  multipart/form-data 형태의 HTTP Body 내용과 HTTP 파라미터들을 Setter를 통해 1대1로 객체에 바인딩시킴 </li>
              <li> 변환이 아닌 바인딩 작업이므로 Setter함수가 필요(없으면 에러발생 )</li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Bean, Configuration, Component"> Bean, Configuration, Component </a> </div>
            <div className="sblock">
              <div className="sstitle"> Bean </div>
              <li> Spring (Ioc 컨테이너,DI 컨테이너)에 의해 관리되는 POJO를 Bean라고 한다. </li>

              <li> class : Bean으로 등록할 Java 클래스 </li>
              <li> id : Bean의 고유 식별자 </li>
              <li> scope : Bean을 생성하기 위한 방법(singleton(기본), prototype, web(request,session,application)) </li>
              <li> constructor-arg : Bean 생성 시 생성자에 전달할 파라미터 </li>
              <li> property : Bean 생성 시 setter에 전달할 인수 </li>

              <div className="sstitle"> Configuration </div>
              <li> Bean을 사용하기위해 명시 </li>
              <div className="sstitle"> Component </div>
              <li> 개발한 클래스를 Bean으로 등록할 때 사용, Spring에서는 @Bean을 사용하면 그안에 포함이 되어있다 </li>
            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="OOP의 5가지 원칙(SOLID)"> OOP의 5가지 원칙(SOLID)  </a> </div>
            <div className="sblock">

              <div className="sstitle"> 단일 책임 원칙(Single responsibility principle) </div>
              <li> 하나의 클래스는 오직 하나의 책임(기능)만을 가져야 한다는 원칙, 예를 들어 로그인 클래스면 로그인만
                담당을 해야지 회원가입이나 인증과 같은 기능들을 가지고 있으면 나중에 코드를 수정하거나 문제가 생길 때
                파악이 어려울 수 있음 </li>
              <div className="sstitle"> 개방 폐쇄 원칙(Open/closed principle) </div>
              <li> 클래스,모듈 함수 등은 쉽게 확장(코드 추가, 연결)이 되어야하고 수정에 대해서는 쉽게 일어나지 못하게
                닫혀있어야 한다는 원칙 </li>
              <div className="sstitle"> 리스코프 치환 원칙(Liskov substitution principle) </div>
              <li> 부모 클래스자리에 자식 클래스를 넣어도 작동이 잘 되어야 한다는 뜻, 자료형P의 객체를 자료형 C의 객체로
                교체되어도 문제가 없어야 한다는 원칙 </li>
              <div className="sstitle"> 인터페이스 분리 원칙(Interface segregation principle) </div>
              <li> 큰 덩어리의 인터페이스를 구체적이고 작은 단위들로 분리시킴으로 필요한 메서드 들만 이용한다는 원칙,
                필요없는 모듈이나 기능을 가지고 있지 않게 하는 의미도 있고
                인터페이스를 작은 단위들로 분리 시켜놓으면 리팩토링, 수정 등을 쉽게 할 수 있다. </li>
              <div className="sstitle"> 의존관계 역전 원칙(Dependency inversion principle) </div>
              <li> 상위 모듈이 하위 모듈에 종속되어서는 안된다는 원칙, 하위 모듈에서 상위 모듈을 객체로 만들고
                그 객체의 상위모듈에 영향을 주게 된다면 제일 하위 모듈에서 코드를 수정하게 되면 상위모듈에 영향을
                미치게 되어 수정하기 어려운 경우가 될 수도 있다. </li>

            </div>
          </div>
          <div className="mblock">
            <div className="stitle"> <a name="Spring Security"> Spring Security </a> </div>
            <small> 어플리케이션의 보안(인증,권한 등)을 처리하는 프레임워크  </small>
            <li> 스프링 기반의 보안관련 프레임워크, 인증과 권한을 담당 </li>
            <li> API서버에 특정 토큰을 Request헤더에 담아 보내면 인증이 완료되고
              api 기능을 사용할 권한을 갖게 된다.  </li>
            <li> 필터 기반으로 동작 </li>
            <li> 세션-쿠키 방식으로 인증, DB에 검증이 된 회원일 경우 JSESSIONID부여한 후
              다음 요청부터 JSESSIONID를 검증해서 유효하면 인증을 준다.
            </li>
            <li> 스프링 필터에는 엄청나게 많은 필터가 존재한다. </li>
            <div className="sblock">
              <div className="sstitle"> 인증(Authorization) </div>
              <li> 사용자가 맞는지 확인 </li>
              <div className="sstitle"> 인가(Authentication) </div>
              <li> 인증 성공 후 사용자가 자원에 접근 가능한지를 결정하는 절차 </li>
              <div className="sstitle"> Principal(접근주체) </div>
              <li> Resource에 접근하는 대상 </li>
              <div className="sstitle"> Credential(비밀번호) </div>
              <li> Resource에 접근하는 대상의 비밀번호 </li>
            </div>
          </div>
          <div className="mblock">
            <li className="stitle" > <a name="Cors(Cross Origin Resource Sharing)"> Cors(Cross Origin Resource Sharing) 교차 출처 자원 공유  </a>   </li>
            <li> API서버에 SPA프레임워크(react,vue 등)을 사용하게 되면 스프링과SPA프레임워크의
              포트가 다르거나 서버가 다르면 서로 자원을 공유할 수 없게 하는 보안 정책 </li>
            <li> 스프링 시큐리티에서 특정 도메인을 열거나 닫을 수 있음 </li>
            <li> 필터나 mvc설정 등으로 처리가능 </li>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="도메인"> 도메인  </a> </div>
            <a href="https://krnic.or.kr/jsp/popup/agencyFeePop.jsp"> 도메인 비용 참고 </a>

            <li> IP(255.255.255.1)이 아닌 문자로 사용하는 방식 </li>
            <li> 서버의 확장 준비  </li>
            <li> 서버를 분리하여 서버 기능의 명확성 과 문제발생시 빠른 문제점을 파악  </li>

            <div className="sblock">

              <div className="sstitle"> 도메인이란? </div>
              <li> www.naver.com </li>
              <div className="sstitle"> 서브 도메인 </div>
              <li> m.naver.com </li>
              <li> cafe.naver.com </li>

            </div>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="인증서"> 인증서  </a> </div>
            <div className="sblock">

              <div className="sstitle"> SSL 인증서 </div>
              <small> 인증서 등급 : OV </small>
              <li> 도메인 * 서브도메인 갯수 만큼 받아야함 </li>
              <li> *.naver.com 와 같이 사용하면 도메인 갯수 만큼 받아야함 </li>
              <div className="sstitle"> SAN 인증서 </div>
              <small> 인증서 등급 : OV </small>
              <li> 대표 도메인을 하나 두고 250개 까지 붙여서 사용 가능 </li>
              <div className="sstitle"> </div>
              <li>  </li>

            </div>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="WWW(World Wide Web)">  WWW(World Wide Web) </a> </div>

            <li> 인터넷에 연결된 컴퓨터를 이용해 사람들과 정보를 공유하는 공간 </li>
            <li> HTTP프로토콜을 기반으로 HTML 작성된 하이퍼텍스트 페이지를 웹브라우저에서 읽을 수 있는곳 </li>
            <li>  </li>

            <div className="sblock">

              <div className="sstitle">  </div>
              <li>  </li>
              <div className="sstitle"> </div>
              <li>  </li>
              <div className="sstitle"> </div>
              <li>  </li>

            </div>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="서버"> 서버 </a> </div>
            <div className="sblock">

              <div className="sstitle"> 서버의 종류 </div>
              <li> Web, FTP(파일전송), DB, File(이미지,음악,동영상 등), WAS, Proxy , DNS(도메인-&gt;IP로 변경)
                MTA(메일 서버), TELNET(원격제어)    </li>
              <div className="sstitle"> Web 서버 </div>
              <li> 정적 페이지 처리 </li>
              <li> Apache , Nginx(추천) , IIS(비추)  </li>
              <div className="sstitle"> AWS 서버 </div>
              <li> 동적 페이지 처리 </li>
              <div className="sstitle"> Proxy 서버 </div>
              <li> 요청된 내용들을 캐시로 저장 </li>
              <li> 원격서버에 접근해서 직접적으로 가져올 필요가 없음 , 시간 절약 </li>
              <div className="sstitle">  </div>
              <li>  </li>
              <div className="sstitle"> 서버 운영 방식 </div>
              <div> 웹 호스팅 , 호스팅(외부) 업체에서 1개의 서버의 일부분을 빌려 사용, 월 결제 </div>
              <li> 장점 : 비용부담적음 , 단점 : 서버 리모델링,제약조건 등에 불리 </li>
              <div> 서버 호스팅 , 호스팅(외부) 업체에서 1개의 서버를 임대나 구매하여 운영 </div>
              <li> 장점 : 리모델링, 높은 성능, , 단점 : 비용 증가 </li>
              <div> 클라우드 </div>
              <li> 서버 여러대를 호스팅으로 운영이 가능하다. </li>
              <li> 장점 : 사용자 폭증해도 대응 가능, 단점 : 비용이 사용하는 만큼 나감 </li>
              {/* <div className="sstitle">  </div>
                                <li>  </li> */}

            </div>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="Dto, Dao, Vo, Entity"> Dto, Dao, Vo, Entity </a> </div>
            <div className="sblock">

              <div className="sstitle">  </div>
              <li>  </li>
              <div className="sstitle"> </div>
              <li>  </li>
              <div className="sstitle"> </div>
              <li>  </li>

            </div>
          </div>

          <div className="mblock">
            <div className="stitle"> <a name="업무 용어"> 업무 용어 </a> </div>
            <div className="sblock">
              <div className="sstitle"> 스타트업 관련 용어</div>
              <li> Wrap-up : 전에 것을 다시 보다 </li>
              <li> Silo : 팀간에 협조하지 않음 </li>
              <li> Issue : 문제 </li>
              <li> R&amp;R : 역할과 책임 </li>
              <li> Squad : 독립적인 조직(10명 내외) </li>
              <li> Agile : 업무환경에 바로 반응하고 적극적으로 소통 </li>
              <li> MVP(Minimum Viable Product) : 최소한의 요건이 충족되는 제품 </li>
              <li> Launching : 시장에 출시 </li>
              <li> Daily Scrum : 짧은 회의(진행상황, 문제, 진행율, 도움원조 등 공유하는 시간) </li>
              <li> Pivot : 사업 방향 전환 </li>
              <li> Sprint : 짧은 시간에 완료하는 프로젝트 </li>
              <li> Demo day : 스타트 업에서 사업제품, 방향 등을 모델을 공개하는 행사 </li>
              <li> Accelerator : 스타트업을 지원해주는 단체 </li>
              <li> Incubating : 하드웨어나 장비 등을 지원해주는 공간 </li>
              <li> Milestone : 과정 중에 해야할 중간 목표 </li>
              <li> Series A B C : 초기시장진입투자 , 진출단계투자 , 확대투자 </li>
              <li> Angel Investor : 스타트업에 직접 투자하는 개인,소수 투자자 </li>
              <li> Venture Capital : 투자 전문 회사나 자본 </li>
              <li> Exit(엑싯) : 상장이나 매각을 통해 투자자들에게 수익을 주는것 </li>
              <li>  </li>
              <div className="sstitle">  </div>
              <li>  </li>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Term;
