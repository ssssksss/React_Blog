import React from 'react';
import HtmlBasic from './Main/HtmlContent/HtmlBasic';
import HtmlDOM from './Main/HtmlContent/HtmlDOM';
import JspServletInformation from './Main/JspServletContent/JspServletInformation';
//자바
import JavaBasic from './Main/JavaContent/JavaBasic';
import Serializable from './Main/JavaContent/Serializable';
import Modifier from './Main/JavaContent/Modifier';
//JSP
import JspServletBasic from './Main/JspServletContent/JspServletBasic';
import JspServletBulletinBoard from './Main/JspServletContent/JspServletBulletinBoard';
import JspServletJstl from './Main/JspServletContent/JspServletJstl';
import JspServletEl from './Main/JspServletContent/JspServletEl';
import Jdbc from './Main/JspServletContent/Jdbc';
// 리액트
import ReactBasic from './Main/ReactContent/ReactBasic';
import ReactJavaScript from './Main/ReactContent/ReactJavaScript';
// 스프링
import SpringError from './Main/SpringContent/SpringError';
import SpringCode from './Main/SpringContent/SpringCode';
import SpringStudy from './Main/SpringContent/SpringStudy';
import Thymeleaf from './Main/SpringContent/Thymeleaf';
import Lombok from './Main/SpringContent/Lombok';
import Annotation from './Main/SpringContent/Annotation';
import SpringJpa from './Main/SpringContent/SpringJpa';
import SpringSetting from './Main/SpringContent/SpringSetting';
import SpringAPI from './Main/SpringContent/SpringAPI';
import SpringOAuth2 from './Main/SpringContent/SpringOAuth2';
import SpringSecurity from './Main/SpringContent/SpringSecurity';
import SpringSecurityExCode1 from './Main/SpringContent/SpringSecurityExCode1';
import SpringSecurityExCode2 from './Main/SpringContent/SpringSecurityExCode2';
import SpringSecurityExCode3 from './Main/SpringContent/SpringSecurityExCode3';
import SpringSecurityExCode4 from './Main/SpringContent/SpringSecurityExCode4';
// import SpringSecurityExCode5 from './Main/SpringContent/SpringSecurityExCode5';
// window
import WindowCommand from './Main/WindowContent/WindowCommand';
import WindowSystem from './Main/WindowContent/WindowSystem';
// 리눅스
import LinuxStudy from './Main/LinuxContent/LinuxStudy';
import LinuxCommand from './Main/LinuxContent/LinuxCommand';
import MobaXterm from './Main/LinuxContent/MobaXterm';
import LinuxVimEditor from './Main/LinuxContent/LinuxVimEditor';
import LinuxDirectory from './Main/LinuxContent/LinuxDirectory';
import LinuxUbuntu from './Main/LinuxContent/LinuxUbuntu';
import LinuxCentOS7 from './Main/LinuxContent/LinuxCentOS7';
import LinuxShell from './Main/LinuxContent/LinuxShell';
import LinuxShellScript from './Main/LinuxContent/LinuxShellScript';
// DB
import OracleDBStudy from './Main/DatabaseContent/OracleDBStudy';
import MySQLStudy from './Main/DatabaseContent/MySQLStudy';
import DatabaseName from './Main/DatabaseContent/DatabaseName';
// 디자인 패턴
import MVC2 from './Main/DesignPatternContent/MVC2';
import MVP from './Main/DesignPatternContent/MVP';
import MVVM from './Main/DesignPatternContent/MVVM';
// 단축키 및 설정
import VscodeKeyMap from './Main/KeyMapContent/VscodeKeyMap';
import IntellijKeyMap from './Main/KeyMapContent/IntellijKeyMap';
import EclipseKeyMap from './Main/KeyMapContent/EclipseKeyMap';
import WindowKeyMap from './Main/KeyMapContent/WindowKeyMap';
import BrowserKeyMap from './Main/KeyMapContent/BrowserKeyMap';
// 용어
import Term from './Main/TermContent/Term';
// 깃허브
import Github from './Main/GithubContent/GithubBasic';
// 참고 블로그 및 사이트
import RefBlog from './Main/RefBlogContent/RefBlog';
import PythonStudy from './Main/PythonContent/PythonStudy';
import AIStudy from './Main/AIContent/AIStudy';
import AlgorithmStudy from './Main/AlgorithmContent/AlgorithmStudy';
// 백엔드
import Backend from './Main/BackendContent/Backend';
import Solid from './Main/BackendContent/Solid';
import BackendBrowserDevTool from './Main/BackendContent/BackendBrowserDevTool';
// 프론트엔드
import Frontend from './Main/FrontendContent/Frontend';
import FrontendBrowserDevTool from './Main/FrontendContent/FrontendBrowserDevTool';
// 보안
import Jwt from './Main/SecurityContent/Jwt';
import Hmac from './Main/SecurityContent/Hmac';
import Hash from './Main/SecurityContent/Hash';
import EncodingDecoding from './Main/SecurityContent/EncodingDecoding';
import HackingAttack from './Main/SecurityContent/HackingAttack';
import IpSpoofing from './Main/SecurityContent/IpSpoofing';
// 자바스크립트
import JavaScriptStudy from './Main/JavaScriptContent/JavaScriptStudy';
// CSS
import CssBasic from './Main/CssContent/CssBasic';
import ExBlurBusinessCard from './Main/CssContent/ExBlurBusinessCard';
//  네트워크
import NetworkStudy from './Main/NetworkContent/NetworkStudy';
import NetworkCommand from './Main/NetworkContent/NetworkCommand';
import SCTCache from './Main/BackendContent/SCTCache';
import ArpProtocol from './Main/NetworkContent/ArpProtocol';
import OSI7Layer from './Main/NetworkContent/OSI7Layer';
import ThreeWayHandshake from './Main/NetworkContent/ThreeWayHandshake';
import NetworkDevice from './Main/NetworkContent/NetworkDevice';
import Network3 from './Main/NetworkContent/Network3';
import Network4 from './Main/NetworkContent/Network4';
import Wireshark from './Main/NetworkContent/Wireshark';
import NetworkProtocol from './Main/NetworkContent/NetworkProtocol';
//블록체인
import Pow from './Main/BlockChainContent/Pow';
// 
import './Main.css';
import './commonStyle.css';

const Main = (props) => {
    const showpage = () => {
        switch (props.page2) {
            // HTML
            case 'htmlbasic':
                return <HtmlBasic> </HtmlBasic>;
            case 'htmldom':
                return <HtmlDOM> </HtmlDOM>;

            // CSS 
            case 'cssbasic':
                return <CssBasic> </CssBasic>;
            case 'ex blur business card':
                return <ExBlurBusinessCard> </ExBlurBusinessCard>;

            // React
            case 'reactbasic':
                return <ReactBasic> </ReactBasic>;
            case 'reactjavascript':
                return <ReactJavaScript> </ReactJavaScript>;

            // JavaScript
            case 'javascriptstudy':
                return <JavaScriptStudy> </JavaScriptStudy>;

            //Java
            case 'javabasic':
                return <JavaBasic> </JavaBasic>;
            case 'serializable':
                return <Serializable> </Serializable>;
            case 'modifier':
                return <Modifier> </Modifier>;

            // JSP & Servlet
            case 'jspservletinformation':
                return <JspServletInformation> </JspServletInformation>;
            case 'jspservletbasic':
                return <JspServletBasic> </JspServletBasic>;
            case 'jspservletbulletinboard':
                return <JspServletBulletinBoard> </JspServletBulletinBoard>;
            case 'jspservletjstl':
                return <JspServletJstl> </JspServletJstl>;
            case 'jspservletel':
                return <JspServletEl> </JspServletEl>;
            case 'jdbc':
                return <Jdbc> </Jdbc>;

            // 스프링 프레임워크
            case 'springerror':
                return <SpringError> </SpringError>;
            case 'springcode':
                return <SpringCode> </SpringCode>;
            case 'springstudy':
                return <SpringStudy> </SpringStudy>;
            case 'thymeleaf':
                return <Thymeleaf> </Thymeleaf>;
            case 'springjpa':
                return <SpringJpa> </SpringJpa>;
            case 'lombok':
                return <Lombok> </Lombok>;
            case 'annotation':
                return <Annotation> </Annotation>;
            case 'springsetting':
                return <SpringSetting> </SpringSetting>;
            case 'springapi':
                return <SpringAPI> </SpringAPI>;
            case 'springoauth2':
                return <SpringOAuth2> </SpringOAuth2>;
            case 'springsecurity':
                return <SpringSecurity> </SpringSecurity>;
            case 'springsecurityexcode1':
                return <SpringSecurityExCode1> </SpringSecurityExCode1>;
            case 'springsecurityexcode2':
                return <SpringSecurityExCode2> </SpringSecurityExCode2>;
            case 'springsecurityexcode3':
                return <SpringSecurityExCode3> </SpringSecurityExCode3>;
            case 'springsecurityexcode4':
                return <SpringSecurityExCode4> </SpringSecurityExCode4>;
            // case 'springsecurityexcode5':
            // return <SpringSecurityExCode5> </SpringSecurityExCode5>;
            // case 'springsecurityexcode6':
            // return <SpringSecurityExCode6> </SpringSecurityExCode6>;
            // DATA BASE

            // 백엔드 개발
            case 'backend':
                return <Backend> </Backend>;
            case 'solid':
                return <Solid> </Solid>;
            case 'sctcache':
                return <SCTCache> </SCTCache>;
            case 'backendbrowserdevtool':
                return <BackendBrowserDevTool> </BackendBrowserDevTool>;

            // 프론트 엔드 개발
            case 'frontend':
                return <Frontend> </Frontend>;

            // DB
            case 'oracledbstudy':
                return <OracleDBStudy> </OracleDBStudy>;
            case 'mysqlstudy':
                return <MySQLStudy> </MySQLStudy>;
            case 'databasename':
                return <DatabaseName> </DatabaseName>;

            // 디자인 패턴
            case 'mvc2':
                return <MVC2> </MVC2>;
            case 'mvp':
                return <MVP> </MVP>;
            case 'mvvm':
                return <MVVM> </MVVM>;

            //보안
            case 'jwt':
                return <Jwt> </Jwt>;
            case 'hmac':
                return <Hmac> </Hmac>;
            case 'hash':
                return <Hash> </Hash>;
            case 'encodingdecoding':
                return <EncodingDecoding> </EncodingDecoding>;
            case 'hackingattack':
                return <HackingAttack> </HackingAttack>;
            case 'ipspoofing':
                return <IpSpoofing> </IpSpoofing>;

            //알고리즘
            case 'algorithmstudy':
                return <AlgorithmStudy> </AlgorithmStudy>;

            //네트워크
            case 'networkstudy':
                return <NetworkStudy> </NetworkStudy>;
            case 'networkcommand':
                return <NetworkCommand> </NetworkCommand>;
            case 'arpprotocol':
                return <ArpProtocol> </ArpProtocol>;
            case 'osi7layer':
                return <OSI7Layer> </OSI7Layer>;
            case 'threewayhandshake':
                return <ThreeWayHandshake> </ThreeWayHandshake>;
            case 'networkdevice':
                return <NetworkDevice> </NetworkDevice>;
            case 'network3':
                return <Network3> </Network3>;
            case 'network4':
                return <Network4> </Network4>;
            case 'wireshark':
                return <Wireshark> </Wireshark>;
            case 'networkprotocol':
                return <NetworkProtocol> </NetworkProtocol>;

            //윈도우
            case 'windowcommand':
                return <WindowCommand> </WindowCommand>;
            case 'windowsystem':
                return <WindowSystem> </WindowSystem>;

            //리눅스
            case 'linuxstudy':
                return <LinuxStudy> </LinuxStudy>;
            case 'linuxcommand':
                return <LinuxCommand> </LinuxCommand>;
            case 'mobaxterm':
                return <MobaXterm> </MobaXterm>;
            case 'linuxvimeditor':
                return <LinuxVimEditor> </LinuxVimEditor>;
            case 'linuxdirectory':
                return <LinuxDirectory> </LinuxDirectory>;
            case 'linuxubuntu':
                return <LinuxUbuntu> </LinuxUbuntu>;
            case 'linuxcentos7':
                return <LinuxCentOS7> </LinuxCentOS7>;
            case 'linuxshell':
                return <LinuxShell> </LinuxShell>;
            case 'linuxshellscript':
                return <LinuxShellScript> </LinuxShellScript>;

            //용어
            case 'term':
                return <Term> </Term>;

            //단축키
            case 'intellijkeymap':
                return <IntellijKeyMap> </IntellijKeyMap>;
            case 'vscodekeymap':
                return <VscodeKeyMap> </VscodeKeyMap>;
            case 'eclipsekeymap':
                return <EclipseKeyMap> </EclipseKeyMap>;
            case 'windowkeymap':
                return <WindowKeyMap> </WindowKeyMap>;
            case 'browserkeymap':
                return <BrowserKeyMap> </BrowserKeyMap>;

            //github
            case 'githubbasic':
                return <Github> </Github>;

            //참고 블로그
            case 'refblog':
                return <RefBlog> </RefBlog>;

            //파이썬
            case 'pythonstudy':
                return <PythonStudy> </PythonStudy>;

            //인공지능
            case 'aistudy':
                return <AIStudy> </AIStudy>;

            //블록체인
            case 'pow':
                return <Pow> </Pow>;

            default:
                break;
        }
    }
    return (
        <div className="main">
            {showpage()}
        </div>);
}

export default Main;