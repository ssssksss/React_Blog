import React from 'react';

const JspServletInformation = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <span className="mtitle"> <a name="Servlet이란"> 1. Servlet이란</a> </span>
                    <p> 서블릿은 자바언어를 사용하여 클라이언트의 요청을 동적으로 처리하는 자바 클래스입니다. </p>
                    <p> 현재는 클라이언트의 요청을 받아 어떤 작업을 해야할지 관리해주는 Controller의 역할을 한다</p>
                    <p> CGI(Common GateWay Interface) 웹서버와 프로그램사이에서 주고 받는 방법, 구현된 언어와 체계가 다르기
                        때문에 맞추어주는 하나의 규약 , Servlet은 자바에서 사용되는 CGI이다 </p>
                    <p> 기존에 CGI는 멀티프로세스 방식으로 다수의 요청처리에 부하가 심하지만 Servlet은 멀티쓰레드
                        방식으로 부하가 덜하다.
                    </p>
                    <span className="mblock">
                        <p> <img src={process.env.PUBLIC_URL + '/img/Servlet.png'} /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="Servlet Lifecycle"> 2. Servlet Lifecycle</a> </span>
                    <p> 클라이언트가 요청을 하게 되면 서블릿의 생성에서 소멸되기 까지의 과정이다. </p>
                    <p> Init() , Service() , Destroy()  3가지의 메서드로 구성된다. </p>
                    <p> Init() : Servlet객체가 처음 생성될 때 실행된다 </p>
                    <p> Service() : 클라이언트가 Servlet을 요청할 때 마다 실행된다 </p>
                    <p> Destroy() : 서블릿객체가 소멸될 때는 더이상 사용하지 않을 때라고 되어있는데
                        서버가 종료되거나 기존에 있던 서블릿객체의 내용이 새로 갱신되었을 경우 </p>
                    <span className="mblock">
                        <p> 1. 클라이언트 요청 </p>
                        <p> 2. 웹 컨테이너에서 클라이언트가 요청한 서블릿 객체가 있는지 확인 </p>
                        <p> 3. 없으면 서블릿 객체를 생성</p>
                        <p> 4. 서블릿 객체에 service()메소드를 실행 , 일반적으로 사용할 때는 HttpServlet클래스를
                            상속받기 때문에 요청된 방식에 따라 doGet(), doPost() 메소드로 사용한다
                        </p>
                        <p> 5. 그 다음 DAO,DB,JSP 등 다른 과정을 거치고 사용자에게 응답한다.</p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/Servlet_Lifecycle.png'} /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="Servlet 장점"> 3. Servlet 장점 </a> </span>
                    <p> 1. 자바기반으로 Java API를 사용이 가능하다 </p>
                    <p> 2. 쓰레드를 이용하기 때문에 클라이언트의 요청에 대해 자원을 효율적으로 사용가능한다 </p>
                    <p> 다수의 클라이언트가 요청하면 서블릿 객체를 여러개를 만드는 것이 아니라 한개의 서블릿 객체만을 만들고
                        쓰레드를 이용하여 객체가 접근하므로 효율적으로 작동이 가능하다 </p>
                    <p> 3. 비즈니스 로직(서비스) 과 프레젠테이션(클라이언트가 보는 화면)의 분리가 가능하다 </p>
                    <p> 4. 업무분담이 좋아지고 , 유지보수가 수월하며 , 기능확장도 좋다  </p>
                    <p> 단점 : 서블릿에는 HTML 코드가 섞여있어 불편함 -&gt; JSP로 어느정도 해결</p>
                    <span className="mblock">
                        <p>  </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="JSP란"> 4. JSP란 </a> </span>
                    <p> Java Servet Page로 자바환경에서 HTML을 처리  </p>
                    <p> JSP파일은 Servlet파일로 변환이 되어서 사용  </p>
                    <p> 과거의 서블릿은 HTML + Java 혼합, 보기도 불편하고,
                        로직도 작성하기 힘들고,
                        HTML코드 때문에 매번 컴파일 과정을 거쳐야함</p>
                    <p> HTML(프레젠테이션 로직,사용자가보는화면)은 JSP가 처리</p>
                    <p> Java(비즈니스 로직, 서비스처리 과정)은 Servlet가 처리</p>
                    <span className="mblock">
                        <p>  </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="JSP변환과정"> 5. JSP변환과정 </a> </span>
                    <p> 1. 웹 컨이너가 Servlet객체가 있는지 판단(변환된 JSP객체) </p>
                    <p> 2. Jsp를 Java소스파일로 변환 </p>
                    <p> 3. Java소스파일을 컴파일 하여 Servlet클래스로 변환 </p>
                    <p> 4. Servlet클래스를 사용 </p>
                    <span className="mblock">
                        <p> JSP 또한 서블릿이므로 LifeCycle을 가진다</p>
                        <p> JSP의 장점으로 JSP의 파일 내부의 값이 자동으로 변환이 된다 </p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/JSP_Lifecycle.png'} /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="서블릿컨테이너의역할"> 6. 서블릿컨테이너의역할 </a> </span>
                    <p> 서블릿 컨테이너의 역할 </p>
                    <p> 1. 서블릿 생명주기 관리</p>
                    <p> 2. 웹 서버와의 통신 지원</p>
                    <p> 3. 멀티쓰레드 지원 및 관리</p>
                    <p> 4. xml 파일 등 관리 </p>
                    <span className="mblock">
                        <p> 클라이언트가 요청할 때 서블릿컨테이너가 하는 역할</p>
                        <p> 아래의 순서는 약간 차이가 있을 수 있지만 과정은 아래와 같습니다</p>
                        <p> 1. HttpServletRequest객체, HttpServletResponse객체 생성</p>
                        <p> 2. 쓰레드 생성 </p>
                        <p> 3. 생성된 객체를 쓰레드에게 전달</p>
                        <p> 4. xml 파일을 참조하여 URL을 분석하고 어느 서블릿을 요청할지 찾음</p>
                        <p> 5. 사용자가 요청한 서블릿 호출</p>
                        <p> 6. 쓰레드가 서블릿에서 doGet(),doPost() 실행시켜 동적페이지를 Response()객체에 보관</p>
                        <p> 7. Responser() 객체를 HttpResponse()형태로 전환하고 쓰레드와 응답,요청 객체 소멸</p>
                        <p> 8. 클라이언트 응답을 보냄( WAS -&gt; 웹서버로 이동 )</p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/ServletContainer.png'} /> </p>
                    </span>
                </span>
                <span className="lblock">
                    <span className="mtitle"> <a name="JSP변환과정"> 7. Servlet사용하기 </a> </span>
                    <p> 1. 웹 컨이너가 Servlet객체가 있는지 판단(변환된 JSP객체) </p>
                    <p> 2. Jsp를 Java소스파일로 변환 </p>
                    <p> 3. Java소스파일을 컴파일 하여 Servlet클래스로 변환 </p>
                    <p> 4. Servlet클래스를 사용 </p>
                    <span className="mblock">
                        <p> JSP 또한 서블릿이므로 LifeCycle을 가진다</p>
                        <p> JSP의 장점으로 JSP의 파일 내부의 값이 자동으로 변환이 된다 </p>
                        <p> <img src={process.env.PUBLIC_URL + '/img/JSP_Lifecycle.png'} /> </p>
                    </span>
                </span>
            </div>
        </>
    );
}

export default JspServletInformation;