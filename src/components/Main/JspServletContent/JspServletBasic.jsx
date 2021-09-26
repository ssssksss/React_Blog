import React from 'react';

const JspServletBasic = (props) => {

    return (
        <>
            <div className="common_style">
                <div className='lblock'>
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JSP 탄생원리
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> servlet으로 html을 표현하기 불편하여 탄생 # 비즈니스와 프레젠테이션 로직이 분리되지 않는 불편함 </li>
                                    <li> servlet을 컴파일을 매번 해야되는 과정이 있었는데 사라짐 </li>
                                    <li> 초기에는 비즈니스로직과 프레젠테이션 로직 분리가 어려움 </li>
                                    <li> MVC 패턴 탄생해서 해결 </li>
                                    <li> 더 나아가 AJAX,JS 등 여러 스크립트 기술이 등잘 </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Servlet
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Servlet API </div>
                                <div className='mblock'>
                                    <li> 모든 Servlet은 javax.servelt.Servlet 인터페이스를 구현해서 사용한다. </li>
                                    <li> 대체적으로 HttpServlet 클래스를 상속해서 사용한다. # GenericServlet도 있음 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> Get,Post </div>
                                <div className='mblock'>
                                    <li> request.getParameter를 이용해서 get,post 파라미터를 받아온다 </li>
                                    <li> GET,POST를 구분할 필요가 없으면 각각요청을 처리하는 방법의 코딩이 있다.  </li>
                                    <li> GET는 공개되도 상관없는 정보, 페이지수,이미지 등등 , 최대 240byte  </li>
                                    <li> POST는 사용자로부터 받는 정보로 보안이 필요한 정보 </li>
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
                            <summary className='stitle'> Jsp-Servlet 변환 과정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> JSP 파일 </li>
                                    <li> 변환 </li>
                                    <li> Java 파일 </li>
                                    <li> 컴파일 </li>
                                    <li> 클래스(servlet) 파일 </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Servlet 동작 과정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 동작과정과 생명주기 </div>
                                <div className='mblock'>
                                    <li> init() : Servlet객체가 메모리에 처음 로드될 때 1번만 실행 # 처음생성 혹은 수정될 때
                                        <li> Servlet 인스턴스 생성 </li>
                                    </li>
                                    <li> service() : Servlet객체가 요청될 때 마다 호출되는 메소드
                                        <li> 인스턴스가 스레드 doGet(), doPost() 메소드 호출 </li>
                                    </li>
                                    <li> destroy() : Servlet객체가 소멸될 때 호출되는 메소드 </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Servlet 장단점
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 장점 </div>
                                <div className='mblock'>
                                    <li> Java API를 사용할 수 있음 </li>
                                    <li> 쓰레드 기반 </li>
                                    <li> 디자인 패턴을 이용한 프레젠테이션 로직과 비즈니스 로직이 분리 가능 </li>
                                    <li> 로직의 분리로 프론트와 백엔드의 업무 분담이 좋아짐 </li>
                                    <li> 기능확장과 유지보수가 좋아졌다. </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 단점 </div>
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
                            <summary className='stitle'> 클라이언트가 서버에 JSP 요청시 변환 과정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> 클라이언트가 서버에 JSP파일 요청 </li>
                                    <li> Jsp - java - class 파일 변환 </li>
                                    <li> class 파일 전송 </li>
                                    <li> 만약 서버에서 JSP 수정 후 클라이언트가 JSP파일 요청하면 </li>
                                    <li> 서버에서 기존 Class 파일과 수정한 Jsp파일의 시간을 비교하여 더 최신것을 기준으로
                                        파일을 보냄 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 웹 어플리케이션 폴더 구조
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> src </div>
                                <div className='mblock'>
                                    <li> controller, model
                                        <li> java,dao,service,vo,dto </li>
                                    </li>
                                    <li> common
                                        <li> template </li>
                                    </li>
                                    <li> config
                                        <li> properties </li>
                                    </li>
                                </div>
                                <div className='sstitle'> webapps </div>
                                <div className='mblock'>
                                    <li> meta-inf
                                        <li> context.xml </li>
                                    </li>
                                    <li> resources
                                        <li> css,images,js </li>
                                    </li>
                                    <li> views
                                        <li>  </li>
                                    </li>
                                    <li> web-inf # 클라이언트는 접근 불가
                                        <li> classes # servlet,java beans 등 여러클래스가 위치한 폴더 </li>
                                        <li> lib # jar,jdbc등 파일이 위치하는 공간 </li>
                                        <li> tld # 태그라이브러리 </li>
                                        <li> web.xml # 설정,servlet정의,맵핑,파라미터 설정 등등 하는 공간 </li>
                                    </li>
                                    <li> index.jsp </li>
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
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Sevlet web.xml 설정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> URL 맵핑을 하여 Servlet 클래스 실행 </div>
                                <div className='mblock'>
                                    <li> {'<servlet>'}
                                        <li> {'<servlet-name>'} Servlet 이름(아래것과일치) {'</servlet-name>'}   </li>
                                        <li> {'<servlet-class>'} 클래스 이름 {'</servlet-class>'} </li>
                                    </li>
                                    <li> {'</servlet>'} </li> <br />
                                    <li> {'<servlet-mapping>'}
                                        <li> {'<servlet-name>'} Servlet 이름(위의것과일치) {'</servlet-name>'}   </li>
                                        <li> {'<url-pattern>'} /URL경로 {'</url-pattern>'} </li>
                                    </li>
                                    <li> {'</servlet-mapping>'} </li>
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
                </div>
            </div>
            {/*<span className="lblock">
                <span className="mtitle"> <a name="JSP커스텀태그"> JSP 커스텀태그 </a> </span>
                <a href="https://gangzzang.tistory.com/entry/JSP-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%83%9C%EA%B7%B8Custom-Tag" target="_blank"> 참고사이트</a>
                <p> 1. WEB-INF - tags 폴더 - 태그파일명.tag파일 </p>
                <p> 2. .tag에서 커스텀태그 정의 </p>
                <span className="mblock">
                    <p> <i> &lt;%@tag language="java" pageEncoding="UTF-8" body-content="empty"%&gt;</i> : 태그 파일의 정보 명시</p>
                    <span className="sblock">
                        <p> <i> body-content = </i>  empty: 몸체가 없음 , scriptless: (스트립틀릿,스크립팅,선언문)은 올수없음, tagdependent: 태그를 몸체로 사용
                            ,JSP: JSP에 들어가는 내용이면 모두 가능
                        </p>
                    </span>
                    <p> <i> &lt;%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%&gt; </i>
                        :  태그파일에서 사용할 태그라이브러리 명시</p>
                    <p> <i> &lt;%@ tag import ="java.util.Arraylist" %&gt;</i> : 자바 클래스 임포트 </p>
                    <p> <i> &lt;%@ attribute name="매개변수"%&gt;</i> : JSP에서 매개변수로 받아와 {"${매개변수}"}와 같이 사용 </p>
                    <p> 나머지는 HTML 코드 작성 </p>
                </span>
                <p> 3. JSP에서 커스텀태그 사용 </p>
                <span className="mblock">
                    <p> &lt;%@ prefix="사용할커스텀태그이름 taglib tagdir="/WEB-INF/tags""%&gt; </p>
                    <p> &lt;사용할커스텀태그이름:태그파일명 매개변수="값"/&gt; </p>
                </span>
            </span>
            <span className="lblock">
                <span className="mtitle"> <a name="JSP커스텀태그2 tld방식">JSP커스텀태그2 tld방식 </a> </span>
                <p> 1. WEB-INF - tld 폴더 - 태그파일명.tld파일 </p>
                <p> 2. .tld에서 커스텀태그 참고 </p>
                <span className="mblock">
                    <p> {"<taglib>"} </p>
                    <p> {"<tag>"} </p>
                    <p> &nbsp;&nbsp;{"<name>student</name>"} </p>
                    <p> &nbsp;&nbsp;{"<tag-class>패키지.TagHandler클래스</tag-class>"} </p>
                    <p> &nbsp;&nbsp;{"<body-content>scriptless</body-content>"} </p>
                    <p> &nbsp;&nbsp;{"<attribute>"} </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;{"<name>border</name>"} </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;{"<required>true</required>"} </p>
                    <p> &nbsp;&nbsp;{"</attribute>"} </p>
                    <p> {"</tag>"} </p>
                    <p> {"/taglib"} </p>
                </span>
                <p> 3. jsp에서 커스텀태그 사용 </p>
                <span className="mblock">
                    <p> <i> &lt;taglib uri="/WEB-INF/tld/stutag.tld" prefix="mytag"%&gt; </i>
                        :  태그파일에서 사용할 태그라이브러리 명시</p>
                    <p> <i> &lt;mytag:student border="10"&gt;학생 목록&lt;/mytag:student&gt;</i> : 자바 클래스 임포트 </p>
                </span>
                <p> 4. .java 정의 </p>
                <p> 파일명은 TagHandler 처럼 사용하는 것 같다</p>
                <span className="mblock">
                    <p> SimpleTagSupport 클래스 상속</p>
                    <p> public void doTag()에 정의하고 사용</p>
                    <p> 추가 사용방법은 나중에 인터넷 참고 </p>
                </span>
            </span>*/}
        </>
    );
}

export default JspServletBasic;