import HtmlList from './LsideMenu/HtmlList.jsx';
import CssList from './LsideMenu/CssList.jsx';
import JavaSciptList from './LsideMenu/JavaSciptList.jsx';
import ReactList from './LsideMenu/ReactList.jsx';
import JavaList from './LsideMenu/JavaList.jsx';
import PhpList from './LsideMenu/PhpList.jsx';
import NodeJsList from './LsideMenu/NodeJsList.jsx';
import JspServletList from './LsideMenu/JspServletList.jsx';
import SpringList from './LsideMenu/SpringList.jsx';
import DatabaseList from './LsideMenu/DatabaseList.jsx';
import WindowList from './LsideMenu/WindowList.jsx';
import TermList from './LsideMenu/TermList.jsx';
import KeyMapList from './LsideMenu/KeyMapList.jsx';
import GithubList from './LsideMenu/GithubList.jsx';
import RefBlogList from './LsideMenu/RefBlogList.jsx';
import PythonList from './LsideMenu/PythonList.jsx';

import './NavMenu2.css';


const NavMenu2 = (props) => {

    function send(page) {
        props.onChangePage(page)
    }
    function send(page2) {
        props.onChangePage(page2)
    }
    // function changeTitle(title) {
    //     document.querySelector("title").innerHTML = title;
    // }


    // NavMenu.jsx에서 선택한 목록을 보여주고 LsideMenu.jsx에서 클릭한 목록을 Main.jsx에 보여준다.
    const showpage = () => {
        // 프론트 엔드 메뉴
        if (props.page === 'html') {
            // { changeTitle('html') }
            return <HtmlList onChangePage={(page2) => { send(page2) }}> </HtmlList>;
        }
        else if (props.page === 'css') {
            return <CssList onChangePage={(page2) => { send(page2) }}> </CssList>;
        }
        else if (props.page === 'javascript') {
            return <JavaSciptList onChangePage={(page2) => { send(page2) }}> </JavaSciptList>;
        }
        else if (props.page === 'react') {
            return <ReactList onChangePage={(page2) => { send(page2) }}> </ReactList>;
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
        //기타 메뉴
        else if (props.page === 'database') {
            return <DatabaseList onChangePage={(page2) => { send(page2) }}> </DatabaseList>;
        }
        else if (props.page === 'window') {
            return <WindowList onChangePage={(page2) => { send(page2) }}> </WindowList>;
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
        else {
            return <div> </div>;
        }
    }
    return (
        <div className="navMenu2">
            <div className="menu">
                <p> {props.page} </p>
                <div>
                    {showpage()}
                </div>
            </div>
        </div>
    );
}

export default NavMenu2;