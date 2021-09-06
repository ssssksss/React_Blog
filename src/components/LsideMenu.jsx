import React, { useState, useEffect } from 'react';
import './NavMenuList.css';
import HtmlList from './NavMenuList/HtmlList.jsx';
import CssList from './NavMenuList/CssList.jsx';
import JavaSciptList from './NavMenuList/JavaSciptList.jsx';
import ReactList from './NavMenuList/ReactList.jsx';
import JavaList from './NavMenuList/JavaList.jsx';
import PhpList from './NavMenuList/PhpList.jsx';
import NodeJsList from './NavMenuList/NodeJsList.jsx';
import JspServletList from './NavMenuList/JspServletList.jsx';
import SpringList from './NavMenuList/SpringList.jsx';
import WindowList from './NavMenuList/WindowList.jsx';
import TermList from './NavMenuList/TermList.jsx';
import KeyMapList from './NavMenuList/KeyMapList.jsx';
import GithubList from './NavMenuList/GithubList.jsx';

const NavMenuList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }
    function changeTitle(title) {
        document.querySelector("title").innerHTML = title;
    }

    // NavMenu.jsx에서 선택한 목록을 보여주고 NavMenuList.jsx에서 클릭한 목록을 Main.jsx에 보여준다.
    const showpage = () => {
        // 프론트 엔드 메뉴
        if (props.page === 'html') {
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
        else {
            return <div> </div>;
        }
    }
    return (
        <div className="lsideMenu">
            {showpage()}
        </div>
    );
}

export default NavMenuList;