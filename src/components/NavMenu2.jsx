import HtmlList from './NavMenuList/HtmlList.jsx';
import CssList from './NavMenuList/CssList.jsx';
import BootstrapList from './NavMenuList/BootstrapList.jsx';
import JavaSciptList from './NavMenuList/JavaSciptList.jsx';
import ReactList from './NavMenuList/ReactList.jsx';
import JavaList from './NavMenuList/JavaList.jsx';
import PhpList from './NavMenuList/PhpList.jsx';
import NodeJsList from './NavMenuList/NodeJsList.jsx';
import JspServletList from './NavMenuList/JspServletList.jsx';
import SpringList from './NavMenuList/SpringList.jsx';
import DatabaseList from './NavMenuList/DatabaseList.jsx';
import WindowList from './NavMenuList/WindowList.jsx';
import LinuxList from './NavMenuList/LinuxList.jsx';
import NetworkList from './NavMenuList/NetworkList.jsx';
import TermList from './NavMenuList/TermList.jsx';
import KeyMapList from './NavMenuList/KeyMapList.jsx';
import GithubList from './NavMenuList/GithubList.jsx';
import RefBlogList from './NavMenuList/RefBlogList.jsx';
import PythonList from './NavMenuList/PythonList.jsx';
import AIList from './NavMenuList/AIList.jsx';
import AlgorithmList from './NavMenuList/AlgorithmList.jsx';
import FrontendList from './NavMenuList/FrontendList.jsx';
import BackendList from './NavMenuList/BackendList.jsx';
import SecurityList from './NavMenuList/SecurityList.jsx';
import BlockChainList from './NavMenuList/BlockChainList.jsx';
import DesignPatternList from './NavMenuList/DesignPatternList.jsx';
import CodingTestList from './NavMenuList/CodingTestList.jsx';
import ProgramList from './NavMenuList/ProgramList.jsx';
import CloudList from './NavMenuList/CloudList.jsx';
import FigmaList from './NavMenuList/FigmaList.jsx';
import RefactoringList from './NavMenuList/RefactoringList.jsx';

import './NavMenu2.css';
import './NavMenuListStyle.css';

const NavMenu2 = (props) => {

    function send(page) {
        props.onChangePage(page)
    }
    function send(page2) {
        props.onChangePage(page2)
    }

    // NavMenu.jsx에서 선택한 목록을 보여주고 NavMenuList.jsx에서 클릭한 목록을 Main.jsx에 보여준다.
    const showpage = () => {
        // 프론트 엔드 메뉴
        if (props.page === 'html') {
            // { changeTitle('html') }
            return <HtmlList onChangePage={(page2) => { send(page2) }}> </HtmlList>;
        }
        else if (props.page === 'css') {
            return <CssList onChangePage={(page2) => { send(page2) }}> </CssList>;
        }
        else if (props.page === 'bootstrap') {
            return <BootstrapList onChangePage={(page2) => { send(page2) }}> </BootstrapList>;
        }
        else if (props.page === 'javascript') {
            return <JavaSciptList onChangePage={(page2) => { send(page2) }}> </JavaSciptList>;
        }
        else if (props.page === 'react') {
            return <ReactList onChangePage={(page2) => { send(page2) }}> </ReactList>;
        }
        else if (props.page === 'frontend') {
            return <FrontendList onChangePage={(page2) => { send(page2) }}> </FrontendList>;
        }
        // 백엔드 메뉴
        else if (props.page === 'java') {
            return <JavaList onChangePage={(page2) => { send(page2) }}> </JavaList>;
        }
        else if (props.page === 'php') {
            return <PhpList onChangePage={(page2) => { send(page2) }}> </PhpList>;
        }
        else if (props.page === 'nodejs') {
            return <NodeJsList onChangePage={(page2) => { send(page2) }}> </NodeJsList>;
        }
        else if (props.page === 'spring') {
            return <SpringList onChangePage={(page2) => { send(page2) }}> </SpringList>;
        }
        else if (props.page === 'jspservlet') {
            return <JspServletList onChangePage={(page2) => { send(page2) }}> </JspServletList>;
        }
        else if (props.page === 'backend') {
            return <BackendList onChangePage={(page2) => { send(page2) }}> </BackendList>;
        }
        //기타 메뉴
        else if (props.page === 'database') {
            return <DatabaseList onChangePage={(page2) => { send(page2) }}> </DatabaseList>;
        }
        else if (props.page === 'network') {
            return <NetworkList onChangePage={(page2) => { send(page2) }}> </NetworkList>;
        }
        else if (props.page === 'window') {
            return <WindowList onChangePage={(page2) => { send(page2) }}> </WindowList>;
        }
        else if (props.page === 'linux') {
            return <LinuxList onChangePage={(page2) => { send(page2) }}> </LinuxList>;
        }
        else if (props.page === 'term') {
            return <TermList onChangePage={(page2) => { send(page2) }}> </TermList>;
        }
        else if (props.page === 'keymap') {
            return <KeyMapList onChangePage={(page2) => { send(page2) }}> </KeyMapList>;
        }
        else if (props.page === 'github') {
            return <GithubList onChangePage={(page2) => { send(page2) }}> </GithubList>;
        }
        else if (props.page === 'refblog') {
            return <RefBlogList onChangePage={(page2) => { send(page2) }}> </RefBlogList>;
        }
        else if (props.page === 'python') {
            return <PythonList onChangePage={(page2) => { send(page2) }}> </PythonList>;
        }
        else if (props.page === 'ai') {
            return <AIList onChangePage={(page2) => { send(page2) }}> </AIList>;
        }
        else if (props.page === 'algorithm') {
            return <AlgorithmList onChangePage={(page2) => { send(page2) }}> </AlgorithmList>;
        }
        else if (props.page === 'security') {
            return <SecurityList onChangePage={(page2) => { send(page2) }}> </SecurityList>;
        }
        else if (props.page === 'blockchain') {
            return <BlockChainList onChangePage={(page2) => { send(page2) }}> </BlockChainList>;
        }
        else if (props.page === 'designpattern') {
            return <DesignPatternList onChangePage={(page2) => { send(page2) }}> </DesignPatternList>;
        }
        else if (props.page === 'codingtest') {
            return <CodingTestList onChangePage={(page2) => { send(page2) }}> </CodingTestList>;
        }
        else if (props.page === 'program') {
            return <ProgramList onChangePage={(page2) => { send(page2) }}> </ProgramList>;
        }
        else if (props.page === 'cloud') {
            return <CloudList onChangePage={(page2) => { send(page2) }}> </CloudList>;
        }
        else if (props.page === 'figma') {
            return <FigmaList onChangePage={(page2) => { send(page2) }}> </FigmaList>;
        }
        else if (props.page === 'refactoring') {
            return <RefactoringList onChangePage={(page2) => { send(page2) }}> </RefactoringList>;
        }
        else {
            return <div> </div>;
        }
    }
    return (
        <div className="nav-menu2">
            <p> {props.page} </p>
            <div>
                {showpage()}
            </div>
        </div>
    );
}

export default NavMenu2;