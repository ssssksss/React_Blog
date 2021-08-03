import React from 'react';
import HtmlBasic from './Main/HtmlContent/HtmlBasic';
import HtmlDOM from './Main/HtmlContent/HtmlDOM';
import CssBasic from './Main/CssContent/CssBasic';
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
import SpringSecurityExCode1 from './Main/SpringContent/SpringSecurityExCode1';
import SpringSecurityExCode2 from './Main/SpringContent/SpringSecurityExCode2';
import SpringSecurityExCode3 from './Main/SpringContent/SpringSecurityExCode3';
// import SpringSecurityExCode4 from './Main/SpringContent/SpringSecurityExCode4';
import SpringInitSetting from './Main/SpringContent/SpringInitSetting';
import WindowCommand from './Main/WindowContent/WindowCommand';
import OracleDBStudy from './Main/DatabaseContent/OracleDBStudy';
import MySQLStudy from './Main/DatabaseContent/MySQLStudy';
import DatabaseName from './Main/DatabaseContent/DatabaseName';
import KeyMap from './Main/KeyMapContent/KeyMap';
import Term from './Main/TermContent/Term';
import Github from './Main/GithubContent/GithubBasic';
import RefBlog from './Main/RefBlogContent/RefBlog';
import PythonStudy from './Main/PythonContent/PythonStudy';
import AIStudy from './Main/AIContent/AIStudy';
import AlgorithmStudy from './Main/AlgorithmContent/AlgorithmStudy';
import './Main.css';
import './commonStyle.css';

const Main = (props) => {
    const showpage = () => {
        switch (props.page2) {
            case 'htmlbasic':
                return <HtmlBasic> </HtmlBasic>;
            case 'htmldom':
                return <HtmlDOM> </HtmlDOM>;
            case 'cssbasic':
                return <CssBasic> </CssBasic>;
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
            case 'springinitsetting':
                return <SpringInitSetting> </SpringInitSetting>;
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
            case 'oracledbstudy':
                return <OracleDBStudy> </OracleDBStudy>;
            case 'mysqlstudy':
                return <MySQLStudy> </MySQLStudy>;
            case 'databasename':
                return <DatabaseName> </DatabaseName>;
            //알고리즘
            case 'algorithmstudy':
                return <AlgorithmStudy> </AlgorithmStudy>;
            //윈도우
            case 'windowcommand':
                return <WindowCommand> </WindowCommand>;
            //용어
            case 'term':
                return <Term> </Term>;
            //단축키
            case 'keymap':
                return <KeyMap> </KeyMap>;
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