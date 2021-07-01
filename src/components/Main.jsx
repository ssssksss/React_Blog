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
import ReactBasic from './Main/ReactContent/ReactBasic';
import SpringLibrary from './Main/SpringContent/SpringLibrary';
import SpringError from './Main/SpringContent/SpringError';
import SpringCode from './Main/SpringContent/SpringCode';
import SpringExCode1 from './Main/SpringContent/SpringExCode1';
import SpringExCode2 from './Main/SpringContent/SpringExCode2';
import SpringStudy from './Main/SpringContent/SpringStudy';
import SpringInitSetting from './Main/SpringContent/SpringInitSetting';
import WindowCommand from './Main/WindowContent/WindowCommand';
import KeyMap from './Main/KeyMapContent/KeyMap';
import Term from './Main/TermContent/Term';
import Github from './Main/GithubContent/GithubBasic';
import './Main.css';
import './commonStyle.css';

const Main = (props) => {
    const showpage = () => {
        switch (props.page2) {
            case 'htmlbasic':
                return <div className="common_style">
                    <h2 className="subject"> HTML기본문법 </h2>
                    <HtmlBasic> </HtmlBasic>
                </div>;
            case 'htmldom':
                return <HtmlDOM> </HtmlDOM>;
            case 'cssbasic':
                return <div className="common_style">
                    <h2 className="subject"> Css기본문법 </h2>
                    <CssBasic> </CssBasic>
                </div>;
            // React
            case 'reactbasic':
                return <div className="common_style">
                    <h2 className="subject"> React 기초 </h2>
                    <ReactBasic> </ReactBasic>
                </div>;
            //Java
            case 'javabasic':
                return <div className="common_style">
                    <h2 className="subject"> 자바 문법 </h2>
                    <JavaBasic> </JavaBasic>
                </div>;

            // JSP & Servlet
            case 'jspservletinformation':
                return <JspServletInformation> </JspServletInformation>;
            case 'jspservletbasic':
                return <div className="common_style">
                    <h2 className="subject"> JSP &amp; Servlet 문법 </h2>
                    <JspServletBasic> </JspServletBasic>
                </div>;
            case 'jspservletbulletinboard':
                return <div className="common_style">
                    <h2 className="subject"> JSP &amp; Servlet 게시판 </h2>
                    <JspServletBulletinBoard> </JspServletBulletinBoard>
                </div>;
            case 'jspservletjstl':
                return <div className="common_style">
                    <h2 className="subject"> JSP &amp; Servlet JSTL </h2>
                    <JspServletJstl> </JspServletJstl>
                </div>;
            case 'jspservletel':
                return <JspServletEl> </JspServletEl>;
            // 스프링 프레임워크

            case 'springlibrary':
                return <div className="common_style">
                    <h2 className="subject"> Spring 라이브러리 </h2>
                    <SpringLibrary> </SpringLibrary>
                </div>;

            case 'springerror':
                return <SpringError> </SpringError>;
            case 'springcode':
                return <SpringCode> </SpringCode>;
            case 'springstudy':
                return <SpringStudy> </SpringStudy>;
            case 'springinitsetting':
                return <SpringInitSetting> </SpringInitSetting>;
            case 'springexcode1':
                return <SpringExCode1> </SpringExCode1>;
            case 'springexcode2':
                return <SpringExCode2> </SpringExCode2>;

            //윈도우
            case 'windowcommand':
                return <div className="common_style">
                    <h2 className="subject"> 윈도우 명령어 </h2>
                    <WindowCommand> </WindowCommand>
                </div>;
            //용어
            case 'term':
                return <div className="common_style">
                    <h2 className="subject"> 용어 </h2>
                    <Term> </Term>
                </div>;
            //단축키
            case 'keymap':
                return <div className="common_style">
                    <h2 className="subject"> 단축키 </h2>
                    <KeyMap> </KeyMap>
                </div>;
            //github
            case 'githubbasic':
                return <div className="common_style">
                    <h2 className="subject"> 깃허브 </h2>
                    <Github> </Github>
                </div>;

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