import React from 'react';
import './Main.css';
import './commonStyle.css';
import { Route, Switch } from 'react-router-dom';
// ========== 백엔드 ==========
// 자바
import JavaBasic from './Main/JavaContent/JavaBasic';
import JavaSerializable from './Main/JavaContent/JavaSerializable';
import JavaModifier from './Main/JavaContent/JavaModifier';
import JavaAnnotation from './Main/JavaContent/JavaAnnotation';


// PHP
import PhpBasic from './Main/PhpContent/PhpBasic';

// 노드JS
import NodejsBasic from './Main/NodejsContent/NodejsBasic';

// 스프링
import SpringError from './Main/SpringContent/SpringError';
import SpringCode from './Main/SpringContent/SpringCode';
import SpringBasic from './Main/SpringContent/SpringBasic';
import SpringThymeleaf from './Main/SpringContent/SpringThymeleaf';
import SpringLombok from './Main/SpringContent/SpringLombok';
import SpringJpa from './Main/SpringContent/SpringJpa';
import SpringSetting from './Main/SpringContent/SpringSetting';
import SpringAPI from './Main/SpringContent/SpringAPI';
import SpringOAuth2 from './Main/SpringContent/SpringOAuth2';
import SpringSecurity from './Main/SpringContent/SpringSecurity';
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

// ========== 프론트엔드 ==========
// HTML
import HtmlBasic from './Main/HtmlContent/HtmlBasic';
import HtmlDOM from './Main/HtmlContent/HtmlDOM';
import HtmlError from './Main/HtmlContent/HtmlError';

// CSS
import CssBasic from './Main/CssContent/CssBasic';
import CssBootStrap from './Main/CssContent/CssBootStrap';
import CssBlurBusinessCard from './Main/CssContent/CssBlurBusinessCard';
import CssTextAndVideo from './Main/CssContent/CssTextAndVideo';

// 타입스크립트

// 자바스크립트
import JavaScriptBasic from './Main/JavaScriptContent/JavaScriptBasic';

// 리액트
import ReactBasic from './Main/ReactContent/ReactBasic';
import ReactJavaScript from './Main/ReactContent/ReactJavaScript';
import ReactVscode from './Main/ReactContent/ReactVscode';

// 프론트 개발자
import FrontendBasic from './Main/FrontendContent/FrontendBasic';
import FrontendBrowserDevTool from './Main/FrontendContent/FrontendBrowserDevTool';
import FrontendRegex from './Main/FrontendContent/FrontendRegex';

// ========== 기타 ==========
// 데이터 베이스
import DBOracleBasic from './Main/DatabaseContent/DBOracleBasic';
import DBMySQLBasic from './Main/DatabaseContent/DBMySQLBasic';
import DBVariableName from './Main/DatabaseContent/DBVariableName';
import DBMariaBasic from './Main/DatabaseContent/DBMariaBasic';
import DBError from './Main/DatabaseContent/DBError';
import DBTable from './Main/DatabaseContent/DBTable';

// 디자인 패턴
import DPMvc2 from './Main/DesignPatternContent/DPMvc2';
import DPMvp from './Main/DesignPatternContent/DPMvp';
import DPMvvm from './Main/DesignPatternContent/DPMvvm';

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

// 용어
import Term from './Main/TermContent/Term';

// 단축키, 설정
import KeyMapVscode from './Main/KeyMapContent/KeyMapVscode';
import KeyMapIntellij from './Main/KeyMapContent/KeyMapIntellij';
import KeyMapEclipse from './Main/KeyMapContent/KeyMapEclipse';
import KeyMapWindow from './Main/KeyMapContent/KeyMapWindow';
import KeyMapBrowser from './Main/KeyMapContent/KeyMapBrowser';

// 깃허브
import GithubBasic from './Main/GithubContent/GithubBasic';

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

const Main = (props) => {
    return (
        <div className="main">
            <Switch>
                {/*========== 백엔드 ========== */}
                {/* 자바 */}
                <Route path="/java_basic" component={JavaBasic}></Route>
                <Route path="/java_serializable" component={JavaSerializable}></Route>
                <Route path="/java_modifier" component={JavaModifier}></Route>
                <Route path="/java_annotation" component={JavaAnnotation}></Route>

                {/* PHP */}
                <Route path="/php_basic" component={PhpBasic}></Route>

                {/* 노드JS */}
                <Route path="/nodejs_basic" component={NodejsBasic}></Route>

                {/* 스프링 */}
                <Route path="/spring_error" component={SpringError}></Route>
                <Route path="/spring_code" component={SpringCode}></Route>
                <Route path="/spring_basic" component={SpringBasic}></Route>
                <Route path="/spring_thymeleaf" component={SpringThymeleaf}></Route>
                <Route path="/spring_jpa" component={SpringJpa}></Route>
                <Route path="/spring_lombok" component={SpringLombok}></Route>
                <Route path="/spring_setting" component={SpringSetting}></Route>
                <Route path="/spring_api" component={SpringAPI}></Route>
                <Route path="/spring_oauth2" component={SpringOAuth2}></Route>
                <Route path="/spring_security" component={SpringSecurity}></Route>
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

                {/*========== 프론트엔드 ==========*/}

                {/* HTML */}
                <Route path="/html_basic" component={HtmlBasic}></Route>
                <Route path="/html_dom" component={HtmlDOM}></Route>
                <Route path="/html_error" component={HtmlError}></Route>

                {/* CSS */}
                <Route path="/css_basic" component={CssBasic}></Route>
                <Route path="/css_bootstrap" component={CssBootStrap}></Route>
                <Route path="/css_blur business card" component={CssBlurBusinessCard}></Route>
                <Route path="/css_text and video" component={CssTextAndVideo}></Route>

                {/* 타입스크립트 */}

                {/* 자바스크립트  */}
                <Route path="/javascript_basic" component={JavaScriptBasic}></Route>

                {/* 리액트 */}
                <Route path="/react_basic" component={ReactBasic}></Route>
                <Route path="/react_javascript" component={ReactJavaScript}></Route>
                <Route path="/react_vscode" component={ReactVscode}></Route>

                {/* 프론트 개발자 */}
                <Route path="/frontend_basic" component={FrontendBasic}></Route>
                <Route path="/frontend_browserdevtool" component={FrontendBrowserDevTool}></Route>
                <Route path="/frontend_regex" component={FrontendRegex}></Route>

                {/*========== 기타 ==========*/}

                {/* 데이터 베이스 */}
                <Route path="/db_oraclebasic" component={DBOracleBasic}></Route>
                <Route path="/db_mysqlbasic" component={DBMySQLBasic}></Route>
                <Route path="/db_variablename" component={DBVariableName}></Route>
                <Route path="/db_mariabasic" component={DBMariaBasic}></Route>
                <Route path="/db_error" component={DBError}></Route>
                <Route path="/db_table" component={DBTable}></Route>

                {/* 디자인 패턴 */}
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

                {/* 용어 */}
                <Route path="/term" component={Term}></Route>

                {/* 단축키,설정 */}
                <Route path="/keymap_intellij" component={KeyMapIntellij}></Route>
                <Route path="/keymap_vscode" component={KeyMapVscode}></Route>
                <Route path="/keymap_eclipse" component={KeyMapEclipse}></Route>
                <Route path="/keymap_window" component={KeyMapWindow}></Route>
                <Route path="/keymap_browser" component={KeyMapBrowser}></Route>

                {/* 깃허브 */}
                <Route path="/github_basic" component={GithubBasic}></Route>

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

            </Switch>
        </div>
    );
}

export default Main;