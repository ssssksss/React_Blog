import React from 'react';

const BackendBasic = (props) => {

    return (
        <>


            <div className="common_style">
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="로그"> 로그 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 로그를 사용하는 이유와 고려할 점 </span>
                            <span className="mblock">
                                <li> 1. 시스템 서비스 장애 , 동작 상태, 알람(시스템 로그) </li>
                                <li> 2. 이벤트에 대한 유저 기록 수집(서비스 로그) </li>
                                <li> 3. 필요한 정보를 편리하게 얻을 수 있다. </li>
                                <li> 4. 로그를 남기지 않아서 필요한 정보를 얻지 못할 수 있다.  </li>
                                <li> 5. 로그의 의미를 파악하기 어렵다.  </li>
                                <li> 6. 로그 한줄에 여러 데이터가 있으므로 필요한 데이터를 수집하기 위해서는 가공처리가 필요하다.  </li>
                                <li> 7. 로그를 수정하려고 한다면 그 전에 있었던 모든 로그데이터를 수정해야 하므로 비용이 많이 든다. </li>
                                <li> 8. 로그로 데이터를 얻어야 한다면 추후에 사용을 할 수 있게 설계를 제대로 해야한다.
                                    예를 들어 사용자가 페이지를 접속하고 다시 접속을 하면 왜 이사람이 접속을 했는지에 대해 생각을 해보고
                                    어떤 데이터를 얻어야 할지에 대해 생각이 필요하다. </li>
                                <li> 9. 로그데이터를 얻을 때 같은 객체에 대해서 일관성있는 항목 구성을 해야한다. </li>
                                <li> 10. 로그의 데이터가 의도하지 않은 곳에서 들어오거나 다른 데이터가 들어오지 않는 믿을 수 있는 로그여야 한다.  </li>
                                <li> 11. 로그 데이터를 수집하기 위해서 헷갈리지 않는 이름과 구체적으로 받아들일수 있는 이름을 사용해야 한다. </li>
                                <li> 12. 항목이름, 이벤트 이름, 구성요소 등을 네이밍 컨벤션을 구분하여 작성한다. </li>
                                <li> 13. 로그 데이터의 이름은 축약하지말고 구체적으로 작성 </li>
                                <li> 14. 로그 데이터의 값이 비어있다면 명확하게  </li>
                                <li> 15. 로그의 정적데이터가 많으면 메타데이터에 매핑하여 이용, 하지만 매번 참조해야 하므로 고민이 필요 </li>
                                <li> 16. 메타데이터가 많아지면 보기 어려움, 자주 참조하는 로그 데이터들은 로그로 남기는 것을 추천 </li>
                                <li> 17. 무분별한 로그데이터를 수집하는 것은 낭비가 심하므로 필요한 데이터만 수집해야 한다. </li>
                                <li> 18. 점점 발전이 되가면서 로그의 품질에 대해서 생각을 해볼 필요성이 있다. </li>
                                <li> 14.  </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 로그 레벨 </span>
                            <small> 로그 라이브러리나 시스템 마다 약간의 차이는 존재 할 수 있음 </small>
                            <span className="mblock">
                                <small> 실제 운영할 때에는 error, warn, info 3개만 사용해서 모니터링 </small>
                                <li> FATAL : 시스템에 치명적인 문제가 발생 </li>
                                <li> ERROR : 프로그램 동작에 큰 문제가 발생한 경우 ,[DB사용금지, NPE] , 예상하지못한 오류 </li>
                                <li> WARN : 프로그램이 진행은 가능하지만 주의를 주는 경우 , 명확한 문제와 잠재적인 문제로
                                    나뉘어 진다. [데이터 사용불가, 캐쉬값 사용 | 개발모드로 프로그램 시작, 관리자 콘솔
                                    비밀번호 보호되지 않고 접속 ] </li>
                                <li> INFO : [시작, 종료, 서버연결 등] 중요한 메시지를 출력, 로그를 통해 내용을 파악할 때 일반적으로 사용 </li>
                                <li> DEBUG : 개발자가 기록할만한 가지가 있는 종류의 정보를 남기기 위해 사용, 버그를 찾기 위해 출력 </li>
                                <li> TRACE : 사소한 정보를 출력 </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 로깅 라이브러리 </span>
                            <span className="mblock">
                                <li> slf4j #logback을 사용하기 위한 인터페이스 </li>
                                <li> logback #log4j보다 더 성능이 우수 </li>
                                <li> log4j #일반적으로 많이 사용 </li>
                                <li> nlog </li>
                                <li> JCL #facade역할 다른 로깅 lib를 사용하게 하는 역할 </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 로그 시스템(로그 분석 도구) </span>
                            <span className="mblock">
                                <li> Sentry </li>
                                <li> ElasticSearch + Kibana + X-Pack #로그 수집, 저장, 분석, 알림까지 지원가능</li>
                                <li> Splunk </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 로그 사용시 주의사항 </span>
                            <span className="mblock">
                                <li> 1. 저장 용량 </li>
                                <li> 2. 개인 정보 </li>
                                <li> 3. 시스템 보안이나 시스템 계정 정보 </li>
                                <li> 4. 생명주기 </li>
                            </span>
                            {/*  */}
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="Dev Ops"> Dev Ops </a> </span>
                        <span className="sblock">
                            <small> IT프로세스를 미세하게 조정하는 것을 지향하는 사고방식 </small>
                            <span className="sstitle"> Dev Ops Tools </span>
                            <span className="mblock">
                                <li> Jenkins(젠킨스) :  </li>
                                <li> Splunk(스플렁크) : </li>
                                <li> Terraform(테라폼) : </li>
                                <li> Nagios(나기오스) :  </li>
                                <li> Grafana(그라파나) :  </li>
                                <li> Prometheus(프로메테우스) :  </li>
                            </span>
                            {/*  */}
                            <span className="sstitle"> 중앙 집중식 인프라 구축 </span>
                            <span className="mblock">
                                <li> 1. 작업방식을 집중화 </li>
                                <li> 2. 권한설정 이나 보안 </li>
                                <li>  </li>
                            </span>
                            {/*  */}
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                            {/*  */}
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="개발 방법론"> 개발 방법론 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 애자일(Agile) 방법론 </span>
                            <small> 계획을 여러번에 나누어서 하는 방법으로 클라이언트의 요구사항에 대처하기 쉽고 결과물을 바로 보여줄 수
                                있다. 하지만 정해진 기간안에 해야하고 짧은 시간에 처리를 해야한다는 부담이 있다.  </small>
                            <span className="mblock">
                                <span className="sstitle"> 백로그 </span>
                                <span className="sblock">
                                    <li> 제품 백로그 : 사용자를 조사하여 구현해야 할 사항을 정의한 문서 , 제품책임자가 작성 <br />
                                        Idea Time : 한 사람이 사용가능한 시간의 양 <br />
                                        Calender Time : 작업 시간을 예상하여 측정하는 방식 </li>
                                    <li> 스프린트 백로그 : 작업과 작업량을 기록? </li>
                                </span>
                                <span className="sstitle"> 스크럼 구성원 </span>
                                <span className="sblock">
                                    <li> 제품책임자 : 클라이언트와 스크럼 팀 사이의 의견을 취합 ,  제품의 특성과 기능을 정의하여 백로그 작성, 출시일자와 내용 결정 </li>
                                    <li> 스크럼 마스터 : 스크럼 팀장 , 스크럼 프로세스가 잘 진행되도록 한다.  </li>
                                    <li> 이해관계자 : 제품에 관련되어 있으나 직접적으로 관여하지 않는 사람 </li>
                                    <li> 스크럼 팀 : 개발자, 디자이너 등 , 제품의 생산을 맡음 </li>
                                </span>
                                <span className="sstitle"> 스프린트 원칙 </span>
                                <span className="sblock">
                                    <li> 요구사항을 변경하지 않는다. </li>
                                    <li> 팀원들이 정보를 공유해야 한다. </li>
                                    <li> 정해진 시간안에 끝내야 한다. </li>
                                    <li> 규칙적이여야 한다. </li>
                                    <li> 보통 2~4주 정도를 잡는다.  </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                        <span className="sblock">
                            <span className="sstitle"> 폭포수(waterfall) 방법론 </span>
                            <small> 요구 - 설계 - 구현 - 테스트 - 출시 - (재요구 그러면 다시 처음으로) , 한번의 단계가 너무 길다는 단점 </small>
                            <span className="mblock">
                                <li> 계획 - 디자인 - 설계 - 코딩 - 배포 순으로 이루어져 결과물까지 확인하기 오래걸린다. </li>
                                <li> 구현시 설계가 달라지고 클라이언트의 대응에 반응하기 어려움 </li>
                                <li> 예산 초과나 앞쪽에서 딜레이가 되면 뒤에 파트를 담당하는 사람들을 감당하기 어려움 </li>
                            </span>
                        </span>
                        {/*  */}
                        <span className="sblock">
                            <span className="sstitle"> Dev Ops 방법론 </span>
                            <small> 개발,운영,검증을 하나로 통합하는 방법론 , 여러 부서가 하나의 부서처럼 움직이게 함, 자동화
                                시스템이 해결을 해주는 방법론 </small>
                            <span className="mblock">
                                <span className="sstitle">  </span>
                                <span className="sblock">
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> Dev Ops Tools </span>
                                <span className="sblock">
                                    <li> Jenkins(젠킨스) :  </li>
                                    <li> Splunk(스플렁크) : </li>
                                    <li> Terraform(테라폼) : </li>
                                    <li> Nagios(나기오스) :  </li>
                                    <li> Grafana(그라파나) :  </li>
                                    <li> Prometheus(프로메테우스) :  </li>
                                </span>
                            </span>
                        </span>
                        {/*  */}
                    </span>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Apache 와 Nginix
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Apache </div>
                                <div className='mblock'>
                                    <div className='sstitle'> 설명 </div>
                                    <div className='sblock'>
                                        <li> MPM(Multi Processing Modeul) 방식으로 처리
                                            <li> Prefork MPM
                                                <li> 1개의 프로세를 자식 프로세스로 복제하여 1개의 쓰레드를 이용하여 사용 </li>
                                                <li> 안정적이나 자원을 많이 잡아먹음 </li>
                                            </li>
                                            <li> Worker MPM
                                                <li> 1개의 프로세를 자식 프로세스로 복제하여 여래개의 쓰레드를 이용하여 사용 </li>
                                                <li> 자원 공유 </li>
                                                <li>  </li>
                                            </li>
                                            <li>  </li>
                                        </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'> 장점 </div>
                                    <div className='sblock'>
                                        <li> 여러 운영체제 등에 호환이 좋음 </li>
                                        <li> 모듈이 다양함 </li>
                                        <li> 안정적이고 확장성이 좋음 </li>
                                    </div>
                                    <div className='sstitle'> 단점 </div>
                                    <div className='sblock'>
                                        <li> 프로세스나 스레드를 생성하여 처리하므로 요청이 많으면 처리 불가 </li>
                                        <li> 동시에 몇만의 접속자가 들어온다면 자원을 사용하는 CPU,메모리 증가하여 대용량에는 한계 </li>
                                        <li>  </li>
                                    </div>

                                </div>
                                <div className='sstitle'> Nginix </div>
                                <div className='mblock'>
                                    <div className='sstitle'> 설명 </div>
                                    <div className='sblock'>
                                        <li> 비동기식 이벤트 처리 중심의 아키텍처를 목표 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'> 장점 </div>
                                    <div className='sblock'>
                                        <li> 이벤트 처리 방식 </li>
                                        <li> 비동기 방식 </li>
                                        <li> 논블로킹 방식 </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'> 단점 </div>
                                    <div className='sblock'>
                                        <li> 동적인처리는 불가 </li>
                                        <li>  </li>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> DB 처리
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> DB에서 대용량 처리하는 방법
                                        <li> batch processing (일괄 처리 방법)
                                            <li> 쿼리들을 묶어서 처리하는 방법 , 쿼리를 1번씩 끊어서 처리하게 되면  </li>
                                            <li> batch를 이용하여 한번에 처리할 수 있지만 너무 많으면 에러가 발생하므로 적절한 양의 쿼리가 중요 </li>
                                            <li>  </li>
                                            <li>  </li>
                                        </li>
                                        <li>  </li>
                                    </li>
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
                            <summary className='stitle'> 쓰레드, 싱글톤, 자원
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> eager initialization(이른 초기화) : 인스턴스를 미리 생성해서 고유한 인스턴스를 만드는 방법
                                        <li> private static final 객체 INSTANCE = new 객체(); </li>
                                        <li class="col_be"> 장점 : 싱글톤을 유지할 수 있다. </li>
                                        <li class="col_r"> 단점 : 미리 인스턴스를 생성하였는데 사용을 하지 않게되면 손해, 자원이 커서 리소스 비용이
                                            크다면 더 손해 </li>
                                    </li> <br />
                                    <li> synchronized(동기화) : 동기화 처리를 하여서 처리를 하는 방법
                                        <li class="col_be"> 장점 : 싱글톤을 유지를 할 수 있음 </li>
                                        <li class="col_r"> 단점 : 동기화 처리를 함으로 처리속도에 문제 </li>
                                    </li> <br />
                                    <li> double checked locking : 인스턴스가 없는 경우에 우연히 겹쳐서 들어오면 synchronized로 처리를 해서 방지를 해주고
                                        인스턴스가 이미 있다면 새로 만들지 않게하는 방법
                                        <li class="col_be">  </li>
                                        <li class="col_r">  </li>
                                    </li> <br />
                                    <li> static inner :
                                        <li>  </li>
                                        <li class="col_be">  </li>
                                        <li class="col_r">  </li>
                                        <div className="sblock">
                                            <li> public class 클래스  {'{'}

                                                <li> private 클래스() {'{}'}</li> <br />
                                                <li> private static class 내부클래스명 {'{'}
                                                    <li> private static final 킄래스 INSTANCE = new 클래스(); </li>
                                                </li>
                                                <li> {'}'} </li> <br />
                                                <li> public static 클래스 메소드명() {'{'}
                                                    <li> return 내부클래스명.INSTANCE; </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </li>
                                            <li> {'}'} </li>
                                        </div>
                                    </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                </span>

            </div>
        </>
    );
}

export default BackendBasic;