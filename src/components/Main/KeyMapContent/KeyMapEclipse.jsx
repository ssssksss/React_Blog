import React from 'react';

const KeyMapEclipse = (props) => {

	return (
		<>
			<div className="common_style">
				<ul>
					<span className="lblock">
						<span className="mtitle"> 단축키 및 설정 </span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="Eclipse 단축키"> Eclipse 단축키 </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<li>  </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="Eclipse Spring 설정"> Eclipse Spring 설정 </a> </span>
							<span className="sblock">
								<li> <i> 초기 설정 </i> </li>
								<li> <i>1.</i> Window - Preferencs - enc 입력 - Workspace, Css Files, HTML Files, JSP Files 인코딩
									UTF-8로 모두 바꾸어 주기  </li>
								<li> <i>2.</i> Help - Eclipse MarketPlace - Spring Tools 3(Standalone Edition) 설치 </li>
								<li> <i>3.</i> Help - Eclipse MarketPlace - Spring Tools 3(Add-On for Spring Tools)) 설치?? </li>
								<li> <i>4.</i> Help - Install New Software - Add - Name에 STS ,
									Location에 https://dist.springsource.com/snapshot/TOOLS/nightly/e4.18 입력
									그리고 Add버튼 클릭
								</li>
								<li> <i>5.</i> 체크박스 모드 체크 그리고 Next 버튼 클릭 그리고 모두 동의 및 Next </li>
								<li> <i>6.</i> File - New - Other - spring 입력 - Spring Legacy Project - 프로젝트 이름 입력-
									templates에서 Spring MVC Project로 선택 하고 다음 - com.spring.app 와 같이 3단계 이상으로
									이름 입력
								</li>
								<li> <i>7.</i> 프로젝트 우클릭 - Properties - Project Facets - 자바버전 맞추어주기
									(cmd창에서 java -version 으로 확인가능) - 우측에 runtimes 탭에 가서 - 아파치톰캣버전 선택하고 apply </li>
								<li> <i>8.</i> src/main/resources 에서 log4j.xml만 남기고 다 삭제 </li>
								<li> <i>9.</i> src - main - webapp - WEB-INF - spring과 views 파일 삭제 그리고 web.xml에 &lt;web-app&gt; 상단
									부분 뺴고 내부에 맵핑코드 삭제 </li>
								<li> <i>10.</i> pom.xml에 springframework버전을 4.2.4로 수정을 하고 강제 업데이트 하기</li>
								<li> <i>11.</i> 프로젝트 우클릭 - Maven - Update Project - 확인</li>
								<li> <i>12.</i> 제대로 설치되었으면 Java Resources - Libraries - Maven Dependencies 에서 버전 확인 </li>
								<li> <i>13.</i> 혹시 포로젝트 익스프롤러에 빨간줄이 보이면 버전이 자바버전이 틀려서 그럴수 있음
									pom.xml에거서 java-version, 아래쪽에 maven.plugins에 source,target 버전을 11(본인버전)으로 변경하고
									강제 업데이트 </li>
								<li> </li>
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
						<span className="stitle">  </span>
						<span className="mblock">
							<span className="stitle"> <a name="">  </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<li> </li>
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
						<span className="mblock">
							<span className="stitle"> <a name="">  </a> </span>
							<span className="sblock">
								<span className="sstitle">  </span>
								<li> </li>
							</span>
						</span>
						{/*  */}
					</span>
				</ul>
			</div>
		</>
	);
}

export default KeyMapEclipse;