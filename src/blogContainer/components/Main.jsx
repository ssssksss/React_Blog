import React from 'react';
import './Main.css';
import './commonStyle.css';
import { Route, Routes } from 'react-router-dom';
// ========== 백엔드 ==========
// 자바
import JavaBasic from './Main/JavaContent/JavaBasic';
import JavaBasic2 from './Main/JavaContent/JavaBasic2';
import JavaModifier from './Main/JavaContent/JavaModifier';
import JavaAnnotation from './Main/JavaContent/JavaAnnotation';


// PHP
import PhpBasic from './Main/PhpContent/PhpBasic';

// 노드JS
import NodejsBasic from './Main/NodejsContent/NodejsBasic';

// 스프링
import SpringError from './Main/SpringContent/SpringError';
import SpringJpa from './Main/SpringContent/SpringJpa';
import SpringBasic from './Main/SpringContent/SpringBasic';
import SpringThymeleaf from './Main/SpringContent/SpringThymeleaf';
import SpringLombok from './Main/SpringContent/SpringLombok';
import SpringModel from './Main/SpringContent/SpringModel';
import SpringYml from './Main/SpringContent/SpringYml';
import SpringAPI from './Main/SpringContent/SpringAPI';
import SpringOAuth2 from './Main/SpringContent/SpringOAuth2';
import SpringController from './Main/SpringContent/SpringController';
import SpringSecurity from './Main/SpringContent/SpringSecurity';
import SpringValidator from './Main/SpringContent/SpringValidator';
import SpringCors from './Main/SpringContent/SpringCors';
import SpringAop from './Main/SpringContent/SpringAop';
import SpringService from './Main/SpringContent/SpringService';
import SpringJackson from './Main/SpringContent/SpringJackson';
import SpringCommunication from './Main/SpringContent/SpringCommunication';
import SpringConverter from './Main/SpringContent/SpringConverter';
import SpringException from './Main/SpringContent/SpringException';
import SpringTestCode from './Main/SpringContent/SpringTestCode';
import SpringSecurityExCode1 from './Main/SpringContent/SpringSecurityExCode1';
import SpringSecurityExCode2 from './Main/SpringContent/SpringSecurityExCode2';
import SpringSecurityExCode3 from './Main/SpringContent/SpringSecurityExCode3';
import SpringSecurityExCode4 from './Main/SpringContent/SpringSecurityExCode4';

// JSP, Servlet
import JspServletBasic from './Main/JspServletContent/JspServletBasic';
import JspServletBulletinBoard from './Main/JspServletContent/JspServletBulletinBoard';
import JspServletJstl from './Main/JspServletContent/JspServletJstl';
import JspServletEl from './Main/JspServletContent/JspServletEl';
import JspServletJdbc from './Main/JspServletContent/JspServletJdbc';
import JspServletInformation from './Main/JspServletContent/JspServletInformation';

// 백엔드 개발자
import BackendBasic from './Main/BackendContent/BackendBasic';
import BackendSolid from './Main/BackendContent/BackendSolid';
import BackendBrowserDevTool from './Main/BackendContent/BackendBrowserDevTool';
import BackendSCTCache from './Main/BackendContent/BackendSCTCache';
import BackendCompilerInterpreter from './Main/BackendContent/BackendCompilerInterpreter';
import BackendCodingConvention from './Main/BackendContent/BackendCodingConvention';

// ========== 프론트엔드 ==========
// HTML
import HtmlBasic from './Main/HtmlContent/HtmlBasic';
import HtmlTest from './Main/HtmlContent/HtmlTest';

// CSS
import CssBasic from './Main/CssContent/CssBasic';
import CssBasic2 from './Main/CssContent/CssBasic2';
import CssScss from './Main/CssContent/CssScss';
import CssAnimation from './Main/CssContent/CssAnimation';
import CssUse from './Main/CssContent/CssUse';
import CssBlurBusinessCard from './Main/CssContent/CssBlurBusinessCard';
import CssTextAndVideo from './Main/CssContent/CssTextAndVideo';

// 부트스트랩
import BootstrapBasic from './Main/BootstrapContent/BootstrapBasic';
import BootstrapTable from './Main/BootstrapContent/BootstrapTable';

// 타입스크립트
import TypeScriptBasic from './Main/TypeScriptContent/TypeScriptBasic';

// 자바스크립트
import JavaScriptBasic from './Main/JavaScriptContent/JavaScriptBasic';
import JavaScriptBasic2 from './Main/JavaScriptContent/JavaScriptBasic2';
import JavaScriptDocument from './Main/JavaScriptContent/JavaScriptDocument';
import JavaScriptElement from './Main/JavaScriptContent/JavaScriptElement';
import JavaScriptEvent from './Main/JavaScriptContent/JavaScriptEvent';
import JavaScriptEventObject from './Main/JavaScriptContent/JavaScriptEventObject';
import JavaScriptAjax from './Main/JavaScriptContent/JavaScriptAjax';
import JavaScriptAttribute from './Main/JavaScriptContent/JavaScriptAttribute';
import JavaScriptLocation from './Main/JavaScriptContent/JavaScriptLocation';
import JavaScriptStyle from './Main/JavaScriptContent/JavaScriptStyle';
import JavaScriptWindow from './Main/JavaScriptContent/JavaScriptWindow';
import JavaScriptTable from './Main/JavaScriptContent/JavaScriptTable';
import JavaScriptScroll from './Main/JavaScriptContent/JavaScriptScroll';

// 리액트
import ReactBasic from './Main/ReactContent/ReactBasic';
import ReactJavaScript from './Main/ReactContent/ReactJavaScript';
import ReactHooks from './Main/ReactContent/ReactHooks';
import ReactClass from './Main/ReactContent/ReactClass';
import ReactAnimation from './Main/ReactContent/ReactAnimation';
import ReactVscode from './Main/ReactContent/ReactVscode';
import ReactRouter from './Main/ReactContent/ReactRouter';
import ReactRedux from './Main/ReactContent/ReactRedux';
import ReactReduxSaga from './Main/ReactContent/ReactReduxSaga';
import ReactModal from './Main/ReactContent/ReactModal';
import ReactStyledComponent from './Main/ReactContent/ReactStyledComponent';
import ReactFetchAPI from './Main/ReactContent/ReactFetchAPI';
import ReactAxios from './Main/ReactContent/ReactAxios';
import ReactAjax from './Main/ReactContent/ReactAjax';

// 프론트 개발자
import FrontendBasic from './Main/FrontendContent/FrontendBasic';
import FrontendBrowserDevTool from './Main/FrontendContent/FrontendBrowserDevTool';
import FrontendRegex from './Main/FrontendContent/FrontendRegex';
import FrontendBuildName from './Main/FrontendContent/FrontendBuildName';
import FrontendHttp from './Main/FrontendContent/FrontendHttp';

// ========== 기타 ==========
// 데이터 베이스
import DBOracleBasic from './Main/DatabaseContent/DBOracleBasic';
import DBMySQLBasic from './Main/DatabaseContent/DBMySQLBasic';
import DBNamingConvention from './Main/DatabaseContent/DBNamingConvention';
import DBMariaBasic from './Main/DatabaseContent/DBMariaBasic';
import DBError from './Main/DatabaseContent/DBError';
import DBTable from './Main/DatabaseContent/DBTable';
import DBErd from './Main/DatabaseContent/DBErd';

// 디자인 패턴
import DPMvc2 from './Main/DesignPatternContent/DPMvc2';
import DPMvp from './Main/DesignPatternContent/DPMvp';
import DPMvvm from './Main/DesignPatternContent/DPMvvm';
import DPGof from './Main/DesignPatternContent/DPGof';

// 보안
import SecurityBasic from './Main/SecurityContent/SecurityBasic';
import SecurityJwt from './Main/SecurityContent/SecurityJwt';
import SecurityHmac from './Main/SecurityContent/SecurityHmac';
import SecurityHash from './Main/SecurityContent/SecurityHash';
import SecurityEncryption from './Main/SecurityContent/SecurityEncryption';
import SecurityHackingAttack from './Main/SecurityContent/SecurityHackingAttack';
import SecurityIpSpoofing from './Main/SecurityContent/SecurityIpSpoofing';

// 네트워크
import NetworkBasic from './Main/NetworkContent/NetworkBasic';
import NetworkCommand from './Main/NetworkContent/NetworkCommand';
import NetworkArpprotocol from './Main/NetworkContent/NetworkArpprotocol';
import NetworkOSI7Layer from './Main/NetworkContent/NetworkOSI7Layer';
import NetworkThreeWayHandshake from './Main/NetworkContent/NetworkThreeWayHandshake';
import NetworkDevice from './Main/NetworkContent/NetworkDevice';
import NetworkWireshark from './Main/NetworkContent/NetworkWireshark';
import NetworkProtocol from './Main/NetworkContent/NetworkProtocol';

// 알고리즘
import Algorithm_Backtracking from './Main/AlgorithmContent/Algorithm_Backtracking';
import Algorithm_Divide_Conquer from './Main/AlgorithmContent/Algorithm_Divide_Conquer';
import Algorithm_Dynamic from './Main/AlgorithmContent/Algorithm_Dynamic';
import Algorithm_Graph from './Main/AlgorithmContent/Algorithm_Graph';
import Algorithm_Greedy from './Main/AlgorithmContent/Algorithm_Greedy';
import Algorithm_Hash from './Main/AlgorithmContent/Algorithm_Hash';
import Algorithm_Recursive from './Main/AlgorithmContent/Algorithm_Recursive';
import Algorithm_Search from './Main/AlgorithmContent/Algorithm_Search';
import Algorithm_Sort from './Main/AlgorithmContent/Algorithm_Sort';
import Algorithm_Basic from './Main/AlgorithmContent/Algorithm_Basic';

// API
import ApiNaver from './Main/ApiContent/ApiNaver';
import ApiGoogle from './Main/ApiContent/ApiGoogle';
import ApiKakao from './Main/ApiContent/ApiKakao';
import ApiFacebook from './Main/ApiContent/ApiFacebook';

// 자료구조

// 클라우드
import CloudOracle from './Main/CloudContent/CloudOracle';

// 윈도우
import WindowCommand from './Main/WindowContent/WindowCommand';
import WindowSystem from './Main/WindowContent/WindowSystem';

// 리눅스
import LinuxBasic from './Main/LinuxContent/LinuxBasic';
import LinuxCommand from './Main/LinuxContent/LinuxCommand';
import LinuxMobaXterm from './Main/LinuxContent/LinuxMobaXterm';
import LinuxVimEditor from './Main/LinuxContent/LinuxVimEditor';
import LinuxDirectory from './Main/LinuxContent/LinuxDirectory';
import LinuxUbuntu from './Main/LinuxContent/LinuxUbuntu';
import LinuxCentOS7 from './Main/LinuxContent/LinuxCentOS7';
import LinuxShell from './Main/LinuxContent/LinuxShell';
import LinuxShellScript from './Main/LinuxContent/LinuxShellScript';
import LinuxServer from './Main/LinuxContent/LinuxServer';
import LinuxProgramInstall from './Main/LinuxContent/LinuxProgramInstall';
import LinuxNetwork from './Main/LinuxContent/LinuxNetwork';
import LinuxAccountCommand from './Main/LinuxContent/LinuxAccountCommand';

// 용어
import Term from './Main/TermContent/Term';

// 단축키, 설정
import KeyMapVscode from './Main/KeyMapContent/KeyMapVscode';
import KeyMapIntellij from './Main/KeyMapContent/KeyMapIntellij';
import KeyMapEclipse from './Main/KeyMapContent/KeyMapEclipse';
import KeyMapWindow from './Main/KeyMapContent/KeyMapWindow';
import KeyMapBrowser from './Main/KeyMapContent/KeyMapBrowser';
import KeyMapSublimeText from './Main/KeyMapContent/KeyMapSublimeText';

// 협업도구
import CollaborationTool_Github from './Main/CollaborationToolContent/CollaborationTool_Github';
import CollaborationTool_Slack from './Main/CollaborationToolContent/CollaborationTool_Slack';
import CollaborationTool_Diagram from './Main/CollaborationToolContent/CollaborationTool_Diagram';
import CollaborationTool_Markdown from './Main/CollaborationToolContent/CollaborationTool_Markdown';

//  참고사이트
import RefBlog from './Main/RefBlogContent/RefBlog';

// 파이썬
import PythonBasic from './Main/PythonContent/PythonBasic';
import PythonRegex from './Main/PythonContent/PythonRegex';

// 인공지능
import AiBasic from './Main/AIContent/AiBasic';

// 블록체인
import BlockChainPow from './Main/BlockChainContent/BlockChainPow';

// 코딩테스트
import CTBaekJoon from './Main/CodingTestContent/CTBaekJoon';

// 추천 프로그램
import ProgramRecDev from './Main/ProgramContent/ProgramRecDev';
import ProgramRecWin from './Main/ProgramContent/ProgramRecWin';

// Figma
import FigmaBasic from './Main/FigmaContent/FigmaBasic';

const Main = (props) => {
  return (
    <div className="main">
      <Routes>
        {/*========== 백엔드 ========== */}
        {/* 자바 */}
        <Route path="/java_basic" element={<JavaBasic />} />
        <Route path="/java_basic2" element={<JavaBasic2 />} />
        <Route path="/java_modifier" element={<JavaModifier />} />
        <Route path="/java_annotation" element={<JavaAnnotation />} />

        {/* PHP */}
        <Route path="/php_basic" element={<PhpBasic />} />

        {/* 노드JS */}
        <Route path="/nodejs_basic" element={<NodejsBasic />} />

        {/* 스프링 */}
        <Route path="/spring_error" element={<SpringError />} />
        <Route path="/spring_jpa" element={<SpringJpa />} />
        <Route path="/spring_basic" element={<SpringBasic />} />
        <Route path="/spring_thymeleaf" element={<SpringThymeleaf />} />
        <Route path="/spring_model" element={<SpringModel />} />
        <Route path="/spring_lombok" element={<SpringLombok />} />
        <Route path="/spring_yml" element={<SpringYml />} />
        <Route path="/spring_api" element={<SpringAPI />} />
        <Route path="/spring_oauth2" element={<SpringOAuth2 />} />
        <Route path="/spring_security" element={<SpringSecurity />} />
        <Route path="/spring_controller" element={<SpringController />} />
        <Route path="/spring_validator" element={<SpringValidator />} />
        <Route path="/spring_cors" element={<SpringCors />} />
        <Route path="/spring_aop" element={<SpringAop />} />
        <Route path="/spring_service" element={<SpringService />} />
        <Route path="/spring_jackson" element={<SpringJackson />} />
        <Route path="/spring_communication" element={<SpringCommunication />} />
        <Route path="/spring_converter" element={<SpringConverter />} />
        <Route path="/spring_exception" element={<SpringException />} />
        <Route path="/spring_testcode" element={<SpringTestCode />} />
        <Route path="/spring_securityexcode1" element={<SpringSecurityExCode1 />} />
        <Route path="/spring_securityexcode2" element={<SpringSecurityExCode2 />} />
        <Route path="/spring_securityexcode3" element={<SpringSecurityExCode3 />} />
        <Route path="/spring_securityexcode4" element={<SpringSecurityExCode4 />} />

        {/* JSP , Servlet */}
        <Route path="/jspservlet_information" element={<JspServletInformation />} />
        <Route path="/jspservlet_basic" element={<JspServletBasic />} />
        <Route path="/jspservlet_bulletinboard" element={<JspServletBulletinBoard />} />
        <Route path="/jspservlet_jstl" element={<JspServletJstl />} />
        <Route path="/jspservlet_el" element={<JspServletEl />} />
        <Route path="/jspservlet_jdbc" element={<JspServletJdbc />} />

        {/* 백엔드 개발자 */}
        <Route path="/backend_basic" element={<BackendBasic />} />
        <Route path="/backend_solid" element={<BackendSolid />} />
        <Route path="/backend_sctcache" element={<BackendSCTCache />} />
        <Route path="/backend_browserdevtool" element={<BackendBrowserDevTool />} />
        <Route path="/backend_compiler_interpreter" element={<BackendCompilerInterpreter />} />
        <Route path="/backend_codingconvention" element={<BackendCodingConvention />} />

        {/*========== 프론트엔드 ==========*/}

        {/* HTML */}
        <Route path="/html_basic" element={<HtmlBasic />} />
        <Route path="/html_test" element={<HtmlTest />} />

        {/* CSS */}
        <Route path="/css_basic" element={<CssBasic />} />
        <Route path="/css_basic2" element={<CssBasic2 />} />
        <Route path="/css_scss" element={<CssScss />} />
        <Route path="/css_use" element={<CssUse />} />
        <Route path="/css_animation" element={<CssAnimation />} />
        <Route path="/css_blur business card" element={<CssBlurBusinessCard />} />
        <Route path="/css_text and video" element={<CssTextAndVideo />} />

        {/* Bootstrap */}
        <Route path="/bootstrap_basic" element={<BootstrapBasic />} />
        <Route path="/bootstrap_table" element={<BootstrapTable />} />

        {/* 타입스크립트 */}
        <Route path="/typescript_basic" element={<TypeScriptBasic />} />

        {/* 자바스크립트  */}
        <Route path="/javascript_basic" element={<JavaScriptBasic />} />
        <Route path="/javascript_basic2" element={<JavaScriptBasic2 />} />
        <Route path="/javascript_document" element={<JavaScriptDocument />} />
        <Route path="/javascript_element" element={<JavaScriptElement />} />
        <Route path="/javascript_event" element={<JavaScriptEvent />} />
        <Route path="/javascript_event_object" element={<JavaScriptEventObject />} />
        <Route path="/javascript_ajax" element={<JavaScriptAjax />} />
        <Route path="/javascript_attribute" element={<JavaScriptAttribute />} />
        <Route path="/javascript_location" element={<JavaScriptLocation />} />
        <Route path="/javascript_style" element={<JavaScriptStyle />} />
        <Route path="/javascript_window" element={<JavaScriptWindow />} />

        <Route path="/javascript_table" element={<JavaScriptTable />} />
        <Route path="/javascript_scroll" element={<JavaScriptScroll />} />

        {/* 리액트 */}
        <Route path="/react_basic" element={<ReactBasic />} />
        <Route path="/react_javascript" element={<ReactJavaScript />} />
        <Route path="/react_hooks" element={<ReactHooks />} />
        <Route path="/react_class" element={<ReactClass />} />
        <Route path="/react_animation" element={<ReactAnimation />} />
        <Route path="/react_vscode" element={<ReactVscode />} />
        <Route path="/react_router" element={<ReactRouter />} />
        <Route path="/react_modal" element={<ReactModal />} />
        <Route path="/react_redux" element={<ReactRedux />} />
        <Route path="/react_redux_saga" element={<ReactReduxSaga />} />
        <Route path="/react_styledcomponent" element={<ReactStyledComponent />} />
        <Route path="/react_fetchapi" element={<ReactFetchAPI />} />
        <Route path="/react_ajax" element={<ReactAjax />} />
        <Route path="/react_axios" element={<ReactAxios />} />

        {/* 프론트 개발자 */}
        <Route path="/frontend_basic" element={<FrontendBasic />} />
        <Route path="/frontend_browserdevtool" element={<FrontendBrowserDevTool />} />
        <Route path="/frontend_regex" element={<FrontendRegex />} />
        <Route path="/frontend_buildname" element={<FrontendBuildName />} />
        <Route path="/frontend_http" element={<FrontendHttp />} />

        {/*========== 기타 ==========*/}

        {/* 데이터 베이스 */}
        <Route path="/db_oraclebasic" element={<DBOracleBasic />} />
        <Route path="/db_mysqlbasic" element={<DBMySQLBasic />} />
        <Route path="/db_namingconvention" element={<DBNamingConvention />} />
        <Route path="/db_mariabasic" element={<DBMariaBasic />} />
        <Route path="/db_error" element={<DBError />} />
        <Route path="/db_table" element={<DBTable />} />
        <Route path="/db_erd" element={<DBErd />} />

        {/* 디자인 패턴 */}
        <Route path="/dp_gof" element={<DPGof />} />
        <Route path="/dp_mvc2" element={<DPMvc2 />} />
        <Route path="/dp_mvp" element={<DPMvp />} />
        <Route path="/dp_mvvm" element={<DPMvvm />} />

        {/* 보안 */}
        <Route path="/security_basic" element={<SecurityBasic />} />
        <Route path="/security_jwt" element={<SecurityJwt />} />
        <Route path="/security_hmac" element={<SecurityHmac />} />
        <Route path="/security_hash" element={<SecurityHash />} />
        <Route path="/security_encryption" element={<SecurityEncryption />} />
        <Route path="/security_hackingattack" element={<SecurityHackingAttack />} />
        <Route path="/security_ipspoofing" element={<SecurityIpSpoofing />} />

        {/* 네트워크 */}
        <Route path="/network_basic" element={<NetworkBasic />} />
        <Route path="/network_command" element={<NetworkCommand />} />
        <Route path="/network_arpprotocol" element={<NetworkArpprotocol />} />
        <Route path="/network_osi7layer" element={<NetworkOSI7Layer />} />
        <Route path="/network_threewayhandshake" element={<NetworkThreeWayHandshake />} />
        <Route path="/network_device" element={<NetworkDevice />} />
        <Route path="/network_wireshark" element={<NetworkWireshark />} />
        <Route path="/network_protocol" element={<NetworkProtocol />} />

        {/* 알고리즘 */}
        <Route path="/algorithm_backtracking" element={<Algorithm_Backtracking />} />
        <Route path="/algorithm_divide_conquer" element={<Algorithm_Divide_Conquer />} />
        <Route path="/algorithm_dynamic" element={<Algorithm_Dynamic />} />
        <Route path="/algorithm_graph" element={<Algorithm_Graph />} />
        <Route path="/algorithm_greedy" element={<Algorithm_Greedy />} />
        <Route path="/algorithm_hash" element={<Algorithm_Hash />} />
        <Route path="/algorithm_recursive" element={<Algorithm_Recursive />} />
        <Route path="/algorithm_search" element={<Algorithm_Search />} />
        <Route path="/algorithm_sort" element={<Algorithm_Sort />} />
        <Route path="/algorithm_basic" element={<Algorithm_Basic />} />

        {/* 자료구조 */}
        <Route path="/api_naver" element={<ApiNaver />} />
        <Route path="/api_kakao" element={<ApiKakao />} />
        <Route path="/api_google" element={<ApiGoogle />} />
        <Route path="/api_facebook" element={<ApiFacebook />} />

        {/* 자료구조 */}

        {/* 클라우드 */}
        <Route path="/cloud_oracle" element={<CloudOracle />} />

        {/* 윈도우 */}
        <Route path="/window_command" element={<WindowCommand />} />
        <Route path="/window_system" element={<WindowSystem />} />

        {/* 리눅스 */}
        <Route path="/linux_basic" element={<LinuxBasic />} />
        <Route path="/linux_command" element={<LinuxCommand />} />
        <Route path="/linux_mobaxterm" element={<LinuxMobaXterm />} />
        <Route path="/linux_vimeditor" element={<LinuxVimEditor />} />
        <Route path="/linux_directory" element={<LinuxDirectory />} />
        <Route path="/linux_ubuntu" element={<LinuxUbuntu />} />
        <Route path="/linux_centos7" element={<LinuxCentOS7 />} />
        <Route path="/linux_shell" element={<LinuxShell />} />
        <Route path="/linux_shellscript" element={<LinuxShellScript />} />
        <Route path="/linux_server" element={<LinuxServer />} />
        <Route path="/linux_programinstall" element={<LinuxProgramInstall />} />
        <Route path="/linux_network" element={<LinuxNetwork />} />
        <Route path="/linux_account_command" element={<LinuxAccountCommand />} />

        {/* 용어 */}
        <Route path="/term" element={<Term />} />

        {/* 단축키,설정 */}
        <Route path="/keymap_intellij" element={<KeyMapIntellij />} />
        <Route path="/keymap_vscode" element={<KeyMapVscode />} />
        <Route path="/keymap_eclipse" element={<KeyMapEclipse />} />
        <Route path="/keymap_window" element={<KeyMapWindow />} />
        <Route path="/keymap_browser" element={<KeyMapBrowser />} />
        <Route path="/keymap_sublimetext" element={<KeyMapSublimeText />} />

        {/* 협업 도구 */}
        <Route path="/collaboration_github" element={<CollaborationTool_Github />} />
        <Route path="/collaboration_slack" element={<CollaborationTool_Slack />} />
        <Route path="/collaboration_diagram" element={<CollaborationTool_Diagram />} />
        <Route path="/collaboration_markdown" element={<CollaborationTool_Markdown />} />

        {/* 참고 사이트 */}
        <Route path="/ref_blog" element={<RefBlog />} />

        {/* 파이썬 */}
        <Route path="/python_basic" element={<PythonBasic />} />
        <Route path="/python_regex" element={<PythonRegex />} />

        {/* 인공지능 */}
        <Route path="/ai_basic" element={<AiBasic />} />

        {/* 블록체인 */}
        <Route path="/blockchain_pow" element={<BlockChainPow />} />

        {/* 코딩테스트 */}
        <Route path="/codingtest_baekjoon" element={<CTBaekJoon />} />

        {/* 추천 프로그램 */}
        <Route path="/program_recdev" element={<ProgramRecDev />} />
        <Route path="/program_recwin" element={<ProgramRecWin />} />

        {/* 피그마 */}
        <Route path="/figma_basic" element={<FigmaBasic />} />

      </Routes>
    </div>
  );
}

export default Main;