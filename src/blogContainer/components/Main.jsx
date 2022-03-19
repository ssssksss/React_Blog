import React from 'react';
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
import SpringDaoDto from './Main/SpringContent/SpringDaoDto';
import SpringYml from './Main/SpringContent/SpringYml';
import SpringAPI from './Main/SpringContent/SpringAPI';
import SpringOAuth2 from './Main/SpringContent/SpringOAuth2';
import SpringController from './Main/SpringContent/SpringController';
import SpringSecurity from './Main/SpringContent/SpringSecurity';
import SpringValidator from './Main/SpringContent/SpringValidator';
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
import SpringBasicEx1 from './Main/SpringContent/SpringBasicEx1';

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
import TypeScriptConfig from './Main/TypeScriptContent/TypeScriptConfig';

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
import JavaScriptDrag from './Main/JavaScriptContent/JavaScriptDrag';

// 리액트
import ReactBasic from './Main/ReactContent/ReactBasic';
import ReactJavaScript from './Main/ReactContent/ReactJavaScript';
import ReactHooks from './Main/ReactContent/ReactHooks';
import ReactClass from './Main/ReactContent/ReactClass';
import ReactAnimation from './Main/ReactContent/ReactAnimation';
import ReactRouter from './Main/ReactContent/ReactRouter';
import ReactRedux from './Main/ReactContent/ReactRedux';
import ReactReduxSaga from './Main/ReactContent/ReactReduxSaga';
import ReactModal from './Main/ReactContent/ReactModal';
import ReactStyledComponent from './Main/ReactContent/ReactStyledComponent';
import ReactFetchAPI from './Main/ReactContent/ReactFetchAPI';
import ReactAxios from './Main/ReactContent/ReactAxios';
import ReactAjax from './Main/ReactContent/ReactAjax';
import ReactBabel from './Main/ReactContent/ReactBabel';
import ReactDrag from './Main/ReactContent/ReactDrag';
import ReactNextjs from './Main/ReactContent/ReactNextjs';
import ReactQuill from './Main/ReactContent/ReactQuill';

// 프론트 개발자
import FrontendBasic from './Main/FrontendContent/FrontendBasic';
import FrontendBrowserDevTool from './Main/FrontendContent/FrontendBrowserDevTool';
import FrontendRegex from './Main/FrontendContent/FrontendRegex';
import FrontendBuildName from './Main/FrontendContent/FrontendBuildName';
import FrontendHttp from './Main/FrontendContent/FrontendHttp';
import FrontendPrettier from './Main/FrontendContent/FrontendPrettier';

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

// 도커
import DockerBasic from './Main/DockerContent/DockerBasic';

// CI/CD
import CicdJenkins from './Main/CicdContent/CicdJenkins';
import CicdGithubAction from './Main/CicdContent/CicdGithubAction';

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
import ManagementContent_Github from './Main/ManagementContent/Management_Github';
import ManagementContent_Slack from './Main/ManagementContent/Management_Slack';
import ManagementContent_Diagram from './Main/ManagementContent/Management_Diagram';
import ManagementContent_Markdown from './Main/ManagementContent/Management_Markdown';

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
        <Route path="/java/java_basic" element={<JavaBasic />} />
        <Route path="/java/java_basic2" element={<JavaBasic2 />} />
        <Route path="/java/java_modifier" element={<JavaModifier />} />
        <Route path="/java/java_annotation" element={<JavaAnnotation />} />

        {/* PHP */}
        <Route path="/php/php_basic" element={<PhpBasic />} />

        {/* 노드JS */}
        <Route path="/nodejs/nodejs_basic" element={<NodejsBasic />} />

        {/* 스프링 */}
        <Route path="/spring/spring_error" element={<SpringError />} />
        <Route path="/spring/spring_jpa" element={<SpringJpa />} />
        <Route path="/spring/spring_basic" element={<SpringBasic />} />
        <Route path="/spring/spring_thymeleaf" element={<SpringThymeleaf />} />
        <Route path="/spring/spring_dao_dto" element={<SpringDaoDto />} />
        <Route path="/spring/spring_lombok" element={<SpringLombok />} />
        <Route path="/spring/spring_yml" element={<SpringYml />} />
        <Route path="/spring/spring_api" element={<SpringAPI />} />
        <Route path="/spring/spring_oauth2" element={<SpringOAuth2 />} />
        <Route path="/spring/spring_security" element={<SpringSecurity />} />
        <Route path="/spring/spring_controller" element={<SpringController />} />
        <Route path="/spring/spring_validator" element={<SpringValidator />} />
        <Route path="/spring/spring_aop" element={<SpringAop />} />
        <Route path="/spring/spring_service" element={<SpringService />} />
        <Route path="/spring/spring_jackson" element={<SpringJackson />} />
        <Route path="/spring/spring_communication" element={<SpringCommunication />} />
        <Route path="/spring/spring_converter" element={<SpringConverter />} />
        <Route path="/spring/spring_exception" element={<SpringException />} />
        <Route path="/spring/spring_testcode" element={<SpringTestCode />} />
        <Route path="/spring/spring_securityexcode1" element={<SpringSecurityExCode1 />} />
        <Route path="/spring/spring_securityexcode2" element={<SpringSecurityExCode2 />} />
        <Route path="/spring/spring_securityexcode3" element={<SpringSecurityExCode3 />} />
        <Route path="/spring/spring_basic_ex1" element={<SpringBasicEx1 />} />

        {/* JSP , Servlet */}
        <Route path="/jspservlet/jspservlet_information" element={<JspServletInformation />} />
        <Route path="/jspservlet/jspservlet_basic" element={<JspServletBasic />} />
        <Route path="/jspservlet/jspservlet_bulletinboard" element={<JspServletBulletinBoard />} />
        <Route path="/jspservlet/jspservlet_jstl" element={<JspServletJstl />} />
        <Route path="/jspservlet/jspservlet_el" element={<JspServletEl />} />
        <Route path="/jspservlet/jspservlet_jdbc" element={<JspServletJdbc />} />

        {/* 백엔드 개발자 */}
        <Route path="/backend/backend_basic" element={<BackendBasic />} />
        <Route path="/backend/backend_solid" element={<BackendSolid />} />
        <Route path="/backend/backend_sctcache" element={<BackendSCTCache />} />
        <Route path="/backend/backend_browserdevtool" element={<BackendBrowserDevTool />} />
        <Route path="/backend/backend_compiler_interpreter" element={<BackendCompilerInterpreter />} />
        <Route path="/backend/backend_codingconvention" element={<BackendCodingConvention />} />

        {/*========== 프론트엔드 ==========*/}

        {/* HTML */}
        <Route path="/html/html_basic" element={<HtmlBasic />} />
        <Route path="/html/html_test" element={<HtmlTest />} />

        {/* CSS */}
        <Route path="/css/css_basic" element={<CssBasic />} />
        <Route path="/css/css_basic2" element={<CssBasic2 />} />
        <Route path="/css/css_scss" element={<CssScss />} />
        <Route path="/css/css_use" element={<CssUse />} />
        <Route path="/css/css_animation" element={<CssAnimation />} />
        <Route path="/css/css_blur business card" element={<CssBlurBusinessCard />} />
        <Route path="/css/css_text and video" element={<CssTextAndVideo />} />

        {/* Bootstrap */}
        <Route path="/bootstrap/bootstrap_basic" element={<BootstrapBasic />} />
        <Route path="/bootstrap/bootstrap_table" element={<BootstrapTable />} />

        {/* 타입스크립트 */}
        <Route path="/typescript/typescript_basic" element={<TypeScriptBasic />} />
        <Route path="/typescript/typescript_config" element={<TypeScriptConfig />} />

        {/* 자바스크립트  */}
        <Route path="/javascript/javascript_basic" element={<JavaScriptBasic />} />
        <Route path="/javascript/javascript_basic2" element={<JavaScriptBasic2 />} />
        <Route path="/javascript/javascript_document" element={<JavaScriptDocument />} />
        <Route path="/javascript/javascript_element" element={<JavaScriptElement />} />
        <Route path="/javascript/javascript_event" element={<JavaScriptEvent />} />
        <Route path="/javascript/javascript_event_object" element={<JavaScriptEventObject />} />
        <Route path="/javascript/javascript_ajax" element={<JavaScriptAjax />} />
        <Route path="/javascript/javascript_attribute" element={<JavaScriptAttribute />} />
        <Route path="/javascript/javascript_location" element={<JavaScriptLocation />} />
        <Route path="/javascript/javascript_style" element={<JavaScriptStyle />} />
        <Route path="/javascript/javascript_window" element={<JavaScriptWindow />} />
        <Route path="/javascript/javascript_table" element={<JavaScriptTable />} />
        <Route path="/javascript/javascript_scroll" element={<JavaScriptScroll />} />
        <Route path="/javascript/javascript_drag" element={<JavaScriptDrag />} />

        {/* 리액트 */}
        <Route path="/react/react_basic" element={<ReactBasic />} />
        <Route path="/react/react_javascript" element={<ReactJavaScript />} />
        <Route path="/react/react_hooks" element={<ReactHooks />} />
        <Route path="/react/react_class" element={<ReactClass />} />
        <Route path="/react/react_animation" element={<ReactAnimation />} />
        <Route path="/react/react_router" element={<ReactRouter />} />
        <Route path="/react/react_modal" element={<ReactModal />} />
        <Route path="/react/react_redux" element={<ReactRedux />} />
        <Route path="/react/react_redux_saga" element={<ReactReduxSaga />} />
        <Route path="/react/react_styledcomponent" element={<ReactStyledComponent />} />
        <Route path="/react/react_fetchapi" element={<ReactFetchAPI />} />
        <Route path="/react/react_ajax" element={<ReactAjax />} />
        <Route path="/react/react_axios" element={<ReactAxios />} />
        <Route path="/react/react_babel" element={<ReactBabel />} />
        <Route path="/react/react_drag" element={<ReactDrag />} />
        <Route path="/react/react_nextjs" element={<ReactNextjs />} />
        <Route path="/react/react_quill" element={<ReactQuill />} />

        {/* 프론트 개발자 */}
        <Route path="/frontend/frontend_basic" element={<FrontendBasic />} />
        <Route path="/frontend/frontend_browserdevtool" element={<FrontendBrowserDevTool />} />
        <Route path="/frontend/frontend_regex" element={<FrontendRegex />} />
        <Route path="/frontend/frontend_buildname" element={<FrontendBuildName />} />
        <Route path="/frontend/frontend_http" element={<FrontendHttp />} />
        <Route path="/frontend/frontend_prettier" element={<FrontendPrettier />} />

        {/*========== 기타 ==========*/}

        {/* 데이터 베이스 */}
        <Route path="/database/db_oraclebasic" element={<DBOracleBasic />} />
        <Route path="/database/db_mysqlbasic" element={<DBMySQLBasic />} />
        <Route path="/database/db_namingconvention" element={<DBNamingConvention />} />
        <Route path="/database/db_mariabasic" element={<DBMariaBasic />} />
        <Route path="/database/db_error" element={<DBError />} />
        <Route path="/database/db_table" element={<DBTable />} />
        <Route path="/database/db_erd" element={<DBErd />} />

        {/* 디자인 패턴 */}
        <Route path="/designpattern/dp_gof" element={<DPGof />} />
        <Route path="/designpattern/dp_mvc2" element={<DPMvc2 />} />
        <Route path="/designpattern/dp_mvp" element={<DPMvp />} />
        <Route path="/designpattern/dp_mvvm" element={<DPMvvm />} />

        {/* 보안 */}
        <Route path="/security/security_basic" element={<SecurityBasic />} />
        <Route path="/security/security_jwt" element={<SecurityJwt />} />
        <Route path="/security/security_hmac" element={<SecurityHmac />} />
        <Route path="/security/security_hash" element={<SecurityHash />} />
        <Route path="/security/security_encryption" element={<SecurityEncryption />} />
        <Route path="/security/security_hackingattack" element={<SecurityHackingAttack />} />
        <Route path="/security/security_ipspoofing" element={<SecurityIpSpoofing />} />

        {/* 네트워크 */}
        <Route path="/networ/network_basic" element={<NetworkBasic />} />
        <Route path="/networ/network_command" element={<NetworkCommand />} />
        <Route path="/networ/network_arpprotocol" element={<NetworkArpprotocol />} />
        <Route path="/networ/network_osi7layer" element={<NetworkOSI7Layer />} />
        <Route path="/networ/network_threewayhandshake" element={<NetworkThreeWayHandshake />} />
        <Route path="/networ/network_device" element={<NetworkDevice />} />
        <Route path="/networ/network_wireshark" element={<NetworkWireshark />} />
        <Route path="/networ/network_protocol" element={<NetworkProtocol />} />

        {/* 알고리즘 */}
        <Route path="/algorithm/algorithm_backtracking" element={<Algorithm_Backtracking />} />
        <Route path="/algorithm/algorithm_divide_conquer" element={<Algorithm_Divide_Conquer />} />
        <Route path="/algorithm/algorithm_dynamic" element={<Algorithm_Dynamic />} />
        <Route path="/algorithm/algorithm_graph" element={<Algorithm_Graph />} />
        <Route path="/algorithm/algorithm_greedy" element={<Algorithm_Greedy />} />
        <Route path="/algorithm/algorithm_hash" element={<Algorithm_Hash />} />
        <Route path="/algorithm/algorithm_recursive" element={<Algorithm_Recursive />} />
        <Route path="/algorithm/algorithm_search" element={<Algorithm_Search />} />
        <Route path="/algorithm/algorithm_sort" element={<Algorithm_Sort />} />
        <Route path="/algorithm/algorithm_basic" element={<Algorithm_Basic />} />

        {/* api */}
        <Route path="/api/api_naver" element={<ApiNaver />} />
        <Route path="/api/api_kakao" element={<ApiKakao />} />
        <Route path="/api/api_google" element={<ApiGoogle />} />
        <Route path="/api/api_facebook" element={<ApiFacebook />} />

        {/* 자료구조 */}

        {/* 클라우드 */}
        <Route path="/cloud/cloud_oracle" element={<CloudOracle />} />

        {/* 도커 */}
        <Route path="/docker/docker_basic" element={<DockerBasic />} />

        {/* CI/CD */}
        <Route path="/cicd/cicd_jenkins" element={<CicdJenkins />} />
        <Route path="/cicd/cicd_github_action" element={<CicdGithubAction />} />

        {/* 윈도우 */}
        <Route path="/window/window_command" element={<WindowCommand />} />
        <Route path="/window/window_system" element={<WindowSystem />} />

        {/* 리눅스 */}
        <Route path="/linux/linux_basic" element={<LinuxBasic />} />
        <Route path="/linux/linux_command" element={<LinuxCommand />} />
        <Route path="/linux/linux_mobaxterm" element={<LinuxMobaXterm />} />
        <Route path="/linux/linux_vimeditor" element={<LinuxVimEditor />} />
        <Route path="/linux/linux_directory" element={<LinuxDirectory />} />
        <Route path="/linux/linux_ubuntu" element={<LinuxUbuntu />} />
        <Route path="/linux/linux_centos7" element={<LinuxCentOS7 />} />
        <Route path="/linux/linux_shell" element={<LinuxShell />} />
        <Route path="/linux/linux_shellscript" element={<LinuxShellScript />} />
        <Route path="/linux/linux_server" element={<LinuxServer />} />
        <Route path="/linux/linux_network" element={<LinuxNetwork />} />
        <Route path="/linux/linux_account_command" element={<LinuxAccountCommand />} />

        {/* 용어 */}
        <Route path="/term/term" element={<Term />} />

        {/* 단축키,설정 */}
        <Route path="/keymap/keymap_intellij" element={<KeyMapIntellij />} />
        <Route path="/keymap/keymap_vscode" element={<KeyMapVscode />} />
        <Route path="/keymap/keymap_eclipse" element={<KeyMapEclipse />} />
        <Route path="/keymap/keymap_window" element={<KeyMapWindow />} />
        <Route path="/keymap/keymap_browser" element={<KeyMapBrowser />} />
        <Route path="/keymap/keymap_sublimetext" element={<KeyMapSublimeText />} />

        {/* 협업 도구 */}
        <Route path="/management/management_github" element={<ManagementContent_Github />} />
        <Route path="/management/management_slack" element={<ManagementContent_Slack />} />
        <Route path="/management/management_diagram" element={<ManagementContent_Diagram />} />
        <Route path="/management/management_markdown" element={<ManagementContent_Markdown />} />

        {/* 참고 사이트 */}
        <Route path="/refblog/ref_blog" element={<RefBlog />} />

        {/* 파이썬 */}
        <Route path="/python/python_basic" element={<PythonBasic />} />
        <Route path="/python/python_regex" element={<PythonRegex />} />

        {/* 인공지능 */}
        <Route path="/ai/ai_basic" element={<AiBasic />} />

        {/* 블록체인 */}
        <Route path="/blockchain/blockchain_pow" element={<BlockChainPow />} />

        {/* 코딩테스트 */}
        <Route path="/codingtest/codingtest_baekjoon" element={<CTBaekJoon />} />

        {/* 추천 프로그램 */}
        <Route path="/program/program_recdev" element={<ProgramRecDev />} />
        <Route path="/program/program_recwin" element={<ProgramRecWin />} />

        {/* 피그마 */}
        <Route path="/figma/figma_basic" element={<FigmaBasic />} />

      </Routes>
    </div>
  );
}

export default Main;