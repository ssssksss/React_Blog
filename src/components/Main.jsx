import React from 'react';
import './Main.css';
import './commonStyle.css';
import { Route, Switch } from 'react-router-dom';
// ========== 백엔드 ==========
// 자바
import JavaBasic from './Main/JavaContent/JavaBasic';
import JavaBasic2 from './Main/JavaContent/JavaBasic2';
import JavaSerializable from './Main/JavaContent/JavaSerializable';
import JavaModifier from './Main/JavaContent/JavaModifier';
import JavaAnnotation from './Main/JavaContent/JavaAnnotation';


// PHP
import PhpBasic from './Main/PhpContent/PhpBasic';

// 노드JS
import NodejsBasic from './Main/NodejsContent/NodejsBasic';

// 스프링
import SpringError from './Main/SpringContent/SpringError';
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

// ========== 기타 ==========
// 데이터 베이스
import DBOracleBasic from './Main/DatabaseContent/DBOracleBasic';
import DBMySQLBasic from './Main/DatabaseContent/DBMySQLBasic';
import DBVariableName from './Main/DatabaseContent/DBVariableName';
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
            <Switch>
                {/*========== 백엔드 ========== */}
                {/* 자바 */}
                <Route path="/java_basic" component={JavaBasic}></Route>
                <Route path="/java_basic2" component={JavaBasic2}></Route>
                <Route path="/java_serializable" component={JavaSerializable}></Route>
                <Route path="/java_modifier" component={JavaModifier}></Route>
                <Route path="/java_annotation" component={JavaAnnotation}></Route>

                {/* PHP */}
                <Route path="/php_basic" component={PhpBasic}></Route>

                {/* 노드JS */}
                <Route path="/nodejs_basic" component={NodejsBasic}></Route>

                {/* 스프링 */}
                <Route path="/spring_error" component={SpringError}></Route>
                <Route path="/spring_basic" component={SpringBasic}></Route>
                <Route path="/spring_thymeleaf" component={SpringThymeleaf}></Route>
                <Route path="/spring_model" component={SpringModel}></Route>
                <Route path="/spring_lombok" component={SpringLombok}></Route>
                <Route path="/spring_yml" component={SpringYml}></Route>
                <Route path="/spring_api" component={SpringAPI}></Route>
                <Route path="/spring_oauth2" component={SpringOAuth2}></Route>
                <Route path="/spring_security" component={SpringSecurity}></Route>
                <Route path="/spring_controller" component={SpringController}></Route>
                <Route path="/spring_validator" component={SpringValidator}></Route>
                <Route path="/spring_cors" component={SpringCors}></Route>
                <Route path="/spring_aop" component={SpringAop}></Route>
                <Route path="/spring_service" component={SpringService}></Route>
                <Route path="/spring_jackson" component={SpringJackson}></Route>
                <Route path="/spring_securityexcode1" component={SpringSecurityExCode1}></Route>
                <Route path="/spring_securityexcode2" component={SpringSecurityExCode2}></Route>
                <Route path="/spring_securityexcode3" component={SpringSecurityExCode3}></Route>
                <Route path="/spring_securityexcode4" component={SpringSecurityExCode4}></Route>

                {/* JSP , Servlet */}
                <Route path="/jspservlet_information" component={JspServletInformation}></Route>
                <Route path="/jspservlet_basic" component={JspServletBasic}></Route>
                <Route path="/jspservlet_bulletinboard" component={JspServletBulletinBoard}></Route>
                <Route path="/jspservlet_jstl" component={JspServletJstl}></Route>
                <Route path="/jspservlet_el" component={JspServletEl}></Route>
                <Route path="/jspservlet_jdbc" component={JspServletJdbc}></Route>

                {/* 백엔드 개발자 */}
                <Route path="/backend_basic" component={BackendBasic}></Route>
                <Route path="/backend_solid" component={BackendSolid}></Route>
                <Route path="/backend_sctcache" component={BackendSCTCache}></Route>
                <Route path="/backend_browserdevtool" component={BackendBrowserDevTool}></Route>
                <Route path="/backend_compiler_interpreter" component={BackendCompilerInterpreter}></Route>
                <Route path="/backend_codingconvention" component={BackendCodingConvention}></Route>

                {/*========== 프론트엔드 ==========*/}

                {/* HTML */}
                <Route path="/html_basic" component={HtmlBasic}></Route>
                <Route path="/html_test" component={HtmlTest}></Route>

                {/* CSS */}
                <Route path="/css_basic" component={CssBasic}></Route>
                <Route path="/css_basic2" component={CssBasic2}></Route>
                <Route path="/css_scss" component={CssScss}></Route>
                <Route path="/css_use" component={CssUse}></Route>
                <Route path="/css_animation" component={CssAnimation}></Route>
                <Route path="/css_blur business card" component={CssBlurBusinessCard}></Route>
                <Route path="/css_text and video" component={CssTextAndVideo}></Route>

                {/* Bootstrap */}
                <Route path="/bootstrap_basic" component={BootstrapBasic}></Route>
                <Route path="/bootstrap_table" component={BootstrapTable}></Route>

                {/* 타입스크립트 */}
                <Route path="/typescript_basic" component={TypeScriptBasic}></Route>

                {/* 자바스크립트  */}
                <Route path="/javascript_basic" component={JavaScriptBasic}></Route>
                <Route path="/javascript_basic2" component={JavaScriptBasic2}></Route>
                <Route path="/javascript_document" component={JavaScriptDocument}></Route>
                <Route path="/javascript_element" component={JavaScriptElement}></Route>
                <Route path="/javascript_event" component={JavaScriptEvent}></Route>
                <Route path="/javascript_event_object" component={JavaScriptEventObject}></Route>
                <Route path="/javascript_ajax" component={JavaScriptAjax}></Route>
                <Route path="/javascript_attribute" component={JavaScriptAttribute}></Route>
                <Route path="/javascript_location" component={JavaScriptLocation}></Route>
                <Route path="/javascript_style" component={JavaScriptStyle}></Route>
                <Route path="/javascript_window" component={JavaScriptWindow}></Route>

                <Route path="/javascript_table" component={JavaScriptTable}></Route>
                <Route path="/javascript_scroll" component={JavaScriptScroll}></Route>

                {/* 리액트 */}
                <Route path="/react_basic" component={ReactBasic}></Route>
                <Route path="/react_javascript" component={ReactJavaScript}></Route>
                <Route path="/react_hooks" component={ReactHooks}></Route>
                <Route path="/react_class" component={ReactClass}></Route>
                <Route path="/react_animation" component={ReactAnimation}></Route>
                <Route path="/react_vscode" component={ReactVscode}></Route>
                <Route path="/react_router" component={ReactRouter}></Route>
                <Route path="/react_modal" component={ReactModal}></Route>
                <Route path="/react_redux" component={ReactRedux}></Route>
                <Route path="/react_stylecomponent" component={ReactStyledComponent}></Route>
                <Route path="/react_fetchapi" component={ReactFetchAPI}></Route>
                <Route path="/react_ajax" component={ReactAjax}></Route>
                <Route path="/react_axios" component={ReactAxios}></Route>

                {/* 프론트 개발자 */}
                <Route path="/frontend_basic" component={FrontendBasic}></Route>
                <Route path="/frontend_browserdevtool" component={FrontendBrowserDevTool}></Route>
                <Route path="/frontend_regex" component={FrontendRegex}></Route>
                <Route path="/frontend_buildname" component={FrontendBuildName}></Route>

                {/*========== 기타 ==========*/}

                {/* 데이터 베이스 */}
                <Route path="/db_oraclebasic" component={DBOracleBasic}></Route>
                <Route path="/db_mysqlbasic" component={DBMySQLBasic}></Route>
                <Route path="/db_variablename" component={DBVariableName}></Route>
                <Route path="/db_mariabasic" component={DBMariaBasic}></Route>
                <Route path="/db_error" component={DBError}></Route>
                <Route path="/db_table" component={DBTable}></Route>
                <Route path="/db_erd" component={DBErd}></Route>

                {/* 디자인 패턴 */}
                <Route path="/dp_gof" component={DPGof}></Route>
                <Route path="/dp_mvc2" component={DPMvc2}></Route>
                <Route path="/dp_mvp" component={DPMvp}></Route>
                <Route path="/dp_mvvm" component={DPMvvm}></Route>

                {/* 보안 */}
                <Route path="/security_basic" component={SecurityBasic}></Route>
                <Route path="/security_jwt" component={SecurityJwt}></Route>
                <Route path="/security_hmac" component={SecurityHmac}></Route>
                <Route path="/security_hash" component={SecurityHash}></Route>
                <Route path="/security_encryption" component={SecurityEncryption}></Route>
                <Route path="/security_hackingattack" component={SecurityHackingAttack}></Route>
                <Route path="/security_ipspoofing" component={SecurityIpSpoofing}></Route>

                {/* 네트워크 */}
                <Route path="/network_basic" component={NetworkBasic}></Route>
                <Route path="/network_command" component={NetworkCommand}></Route>
                <Route path="/network_arpprotocol" component={NetworkArpprotocol}></Route>
                <Route path="/network_osi7layer" component={NetworkOSI7Layer}></Route>
                <Route path="/network_threewayhandshake" component={NetworkThreeWayHandshake}></Route>
                <Route path="/network_device" component={NetworkDevice}></Route>
                <Route path="/network_wireshark" component={NetworkWireshark}></Route>
                <Route path="/network_protocol" component={NetworkProtocol}></Route>

                {/* 알고리즘 */}
                <Route path="/algorithm_backtracking" component={Algorithm_Backtracking}></Route>
                <Route path="/algorithm_divide_conquer" component={Algorithm_Divide_Conquer}></Route>
                <Route path="/algorithm_dynamic" component={Algorithm_Dynamic}></Route>
                <Route path="/algorithm_graph" component={Algorithm_Graph}></Route>
                <Route path="/algorithm_greedy" component={Algorithm_Greedy}></Route>
                <Route path="/algorithm_hash" component={Algorithm_Hash}></Route>
                <Route path="/algorithm_recursive" component={Algorithm_Recursive}></Route>
                <Route path="/algorithm_search" component={Algorithm_Search}></Route>
                <Route path="/algorithm_sort" component={Algorithm_Sort}></Route>
                <Route path="/algorithm_basic" component={Algorithm_Basic}></Route>

                {/* 자료구조 */}
                <Route path="/api_naver" component={ApiNaver}></Route>
                <Route path="/api_kakao" component={ApiKakao}></Route>
                <Route path="/api_google" component={ApiGoogle}></Route>

                {/* 자료구조 */}

                {/* 클라우드 */}
                <Route path="/cloud_oracle" component={CloudOracle}></Route>

                {/* 윈도우 */}
                <Route path="/window_command" component={WindowCommand}></Route>
                <Route path="/window_system" component={WindowSystem}></Route>

                {/* 리눅스 */}
                <Route path="/linux_basic" component={LinuxBasic}></Route>
                <Route path="/linux_command" component={LinuxCommand}></Route>
                <Route path="/linux_mobaxterm" component={LinuxMobaXterm}></Route>
                <Route path="/linux_vimeditor" component={LinuxVimEditor}></Route>
                <Route path="/linux_directory" component={LinuxDirectory}></Route>
                <Route path="/linux_ubuntu" component={LinuxUbuntu}></Route>
                <Route path="/linux_centos7" component={LinuxCentOS7}></Route>
                <Route path="/linux_shell" component={LinuxShell}></Route>
                <Route path="/linux_shellscript" component={LinuxShellScript}></Route>
                <Route path="/linux_server" component={LinuxServer}></Route>
                <Route path="/linux_programinstall" component={LinuxProgramInstall}></Route>
                <Route path="/linux_network" component={LinuxNetwork}></Route>
                <Route path="/linux_account_command" component={LinuxAccountCommand}></Route>

                {/* 용어 */}
                <Route path="/term" component={Term}></Route>

                {/* 단축키,설정 */}
                <Route path="/keymap_intellij" component={KeyMapIntellij}></Route>
                <Route path="/keymap_vscode" component={KeyMapVscode}></Route>
                <Route path="/keymap_eclipse" component={KeyMapEclipse}></Route>
                <Route path="/keymap_window" component={KeyMapWindow}></Route>
                <Route path="/keymap_browser" component={KeyMapBrowser}></Route>
                <Route path="/keymap_sublimetext" component={KeyMapSublimeText}></Route>

                {/* 협업 도구 */}
                <Route path="/collaboration_github" component={CollaborationTool_Github}></Route>
                <Route path="/collaboration_slack" component={CollaborationTool_Slack}></Route>
                <Route path="/collaboration_diagram" component={CollaborationTool_Diagram}></Route>

                {/* 참고 사이트 */}
                <Route path="/ref_blog" component={RefBlog}></Route>

                {/* 파이썬 */}
                <Route path="/python_basic" component={PythonBasic}></Route>
                <Route path="/python_regex" component={PythonRegex}></Route>

                {/* 인공지능 */}
                <Route path="/ai_basic" component={AiBasic}></Route>

                {/* 블록체인 */}
                <Route path="/blockchain_pow" component={BlockChainPow}></Route>

                {/* 코딩테스트 */}
                <Route path="/codingtest_baekjoon" component={CTBaekJoon}></Route>

                {/* 추천 프로그램 */}
                <Route path="/program_recdev" component={ProgramRecDev}></Route>
                <Route path="/program_recwin" component={ProgramRecWin}></Route>

                {/* 피그마 */}
                <Route path="/figma_basic" component={FigmaBasic}></Route>

            </Switch>
        </div>
    );
}

export default Main;