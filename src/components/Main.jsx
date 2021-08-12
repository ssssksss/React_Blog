import React from 'react';
import HtmlBasic from './Main/HtmlContent/HtmlBasic';
import HtmlDOM from './Main/HtmlContent/HtmlDOM';
import JspServletInformation from './Main/JspServletContent/JspServletInformation';
import JavaBasic from './Main/JavaContent/JavaBasic';
import JspServletBasic from './Main/JspServletContent/JspServletBasic';
import JspServletBulletinBoard from './Main/JspServletContent/JspServletBulletinBoard';
import JspServletJstl from './Main/JspServletContent/JspServletJstl';
import JspServletEl from './Main/JspServletContent/JspServletEl';
import Jdbc from './Main/JspServletContent/Jdbc';
import ReactBasic from './Main/ReactContent/ReactBasic';
import SpringError from './Main/SpringContent/SpringError';
import SpringCode from './Main/SpringContent/SpringCode';
import SpringStudy from './Main/SpringContent/SpringStudy';
import Thymeleaf from './Main/SpringContent/Thymeleaf';
import Lombok from './Main/SpringContent/Lombok';
import Annotation from './Main/SpringContent/Annotation';
import SpringSetting from './Main/SpringContent/SpringSetting';
import SpringAPI from './Main/SpringContent/SpringAPI';
import SpringOAuth2 from './Main/SpringContent/SpringOAuth2';
import SpringSecurity from './Main/SpringContent/SpringSecurity';
import SpringSecurityExCode1 from './Main/SpringContent/SpringSecurityExCode1';
import SpringSecurityExCode2 from './Main/SpringContent/SpringSecurityExCode2';
import SpringSecurityExCode3 from './Main/SpringContent/SpringSecurityExCode3';
// import SpringSecurityExCode4 from './Main/SpringContent/SpringSecurityExCode4';
// window
import WindowCommand from './Main/WindowContent/WindowCommand';
import WindowSystem from './Main/WindowContent/WindowSystem';
// rinux
import RinuxStudy from './Main/RinuxContent/RinuxStudy';
import OracleDBStudy from './Main/DatabaseContent/OracleDBStudy';
import MySQLStudy from './Main/DatabaseContent/MySQLStudy';
import DatabaseName from './Main/DatabaseContent/DatabaseName';
import VscodeKeyMap from './Main/KeyMapContent/VscodeKeyMap';
import IntellijKeyMap from './Main/KeyMapContent/IntellijKeyMap';
import EclipseKeyMap from './Main/KeyMapContent/EclipseKeyMap';
import WindowKeyMap from './Main/KeyMapContent/WindowKeyMap';
import Term from './Main/TermContent/Term';
import Github from './Main/GithubContent/GithubBasic';
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
// CSS
import CssBasic from './Main/CssContent/CssBasic';
import ExBlurBusinessCard from './Main/CssContent/ExBlurBusinessCard';
//  네트워크
import NetworkStudy from './Main/NetworkContent/NetworkStudy';
import NetworkWireshark from './Main/NetworkContent/NetworkWireshark';
import NetworkCommand from './Main/NetworkContent/NetworkCommand';
import SCTCache from './Main/BackendContent/SCTCache';
//블록체인
import Pow from './Main/BlockChainContent/Pow';
// 
import './Main.css';
import './commonStyle.css';

const Main = (props) => {
    const showpage = () => {
        switch (props.page2) {
            case 'htmlbasic':
                return <HtmlBasic> </HtmlBasic>;
            case 'htmldom':
                return <HtmlDOM> </HtmlDOM>;
            // Css 
            case 'cssbasic':
                return <CssBasic> </CssBasic>;
            case 'ex blur business card':
                return <ExBlurBusinessCard> </ExBlurBusinessCard>;
            // React
            case 'reactbasic':
                return <ReactBasic> </ReactBasic>;
            //Java
            case 'javabasic':
                return <JavaBasic> </JavaBasic>;

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
            // case 'springsecurityexcode4':
            // return <SpringSecurityExCode4> </SpringSecurityExCode4>;
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
            case 'oracledbstudy':
                return <OracleDBStudy> </OracleDBStudy>;
            case 'mysqlstudy':
                return <MySQLStudy> </MySQLStudy>;
            case 'databasename':
                return <DatabaseName> </DatabaseName>;
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
            case 'networkwireshark':
                return <NetworkWireshark> </NetworkWireshark>;
            case 'networkcommand':
                return <NetworkCommand> </NetworkCommand>;
            //윈도우
            case 'windowcommand':
                return <WindowCommand> </WindowCommand>;
            case 'windowsystem':
                return <WindowSystem> </WindowSystem>;
            //리눅스
            case 'rinuxstudy':
                return <RinuxStudy> </RinuxStudy>;
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