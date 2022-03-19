import HtmlList from './NavMenuList/HtmlList.jsx';
import CssList from './NavMenuList/CssList.jsx';
import BootstrapList from './NavMenuList/BootstrapList.jsx';
import JavaScriptList from './NavMenuList/JavaScriptList.jsx';
import TypeScriptList from './NavMenuList/TypeScriptList.jsx';
import ReactList from './NavMenuList/ReactList.jsx';
import JavaList from './NavMenuList/JavaList.jsx';
//import PhpList from './NavMenuList/PhpList.jsx';
//import NodeJsList from './NavMenuList/NodeJsList.jsx';
import JspServletList from './NavMenuList/JspServletList.jsx';
import SpringList from './NavMenuList/SpringList.jsx';
import DatabaseList from './NavMenuList/DatabaseList.jsx';
import WindowList from './NavMenuList/WindowList.jsx';
import LinuxList from './NavMenuList/LinuxList.jsx';
import NetworkList from './NavMenuList/NetworkList.jsx';
import TermList from './NavMenuList/TermList.jsx';
import KeyMapList from './NavMenuList/KeyMapList.jsx';
import ManagementList from './NavMenuList/ManagementList.jsx';
import RefBlogList from './NavMenuList/RefBlogList.jsx';
//import PythonList from './NavMenuList/PythonList.jsx';
//import AIList from './NavMenuList/AIList.jsx';
//import AlgorithmList from './NavMenuList/AlgorithmList.jsx';
import ApiList from './NavMenuList/ApiList.jsx';
import FrontendList from './NavMenuList/FrontendList.jsx';
import BackendList from './NavMenuList/BackendList.jsx';
import SecurityList from './NavMenuList/SecurityList.jsx';
//import BlockChainList from './NavMenuList/BlockChainList.jsx';
import DesignPatternList from './NavMenuList/DesignPatternList.jsx';
import CodingTestList from './NavMenuList/CodingTestList.jsx';
import ProgramList from './NavMenuList/ProgramList.jsx';
import CloudList from './NavMenuList/CloudList.jsx';
import FigmaList from './NavMenuList/FigmaList.jsx';
import RefactoringList from './NavMenuList/RefactoringList.jsx';
import DockerList from './NavMenuList/DockerList.jsx';
import CicdList from './NavMenuList/CicdList.jsx';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const Container = styled.div`
  margin: 6px 0px;
  width: 100%;
  background: #ffbb6d;
  border-radius: 10px;
`;

const BlogCategory2Links = () => {

  return (
    <Container>
      <Routes>
        {/* 프론트엔드 */}
        <Route path="/html/*" element={<HtmlList />}>  </Route>
        <Route path="/css/*" element={<CssList />}>  </Route>
        <Route path="/bootstrap/*" element={<BootstrapList />}>  </Route>
        <Route path="/javascript/*" element={<JavaScriptList />}>  </Route>
        <Route path="/typescript/*" element={<TypeScriptList />}>  </Route>
        <Route path="/react/*" element={<ReactList />}>  </Route>
        <Route path="/frontend/*" element={<FrontendList />}>  </Route>
        {/* 백엔드 */}
        <Route path="/java/*" element={<JavaList />}>  </Route>
        {/*<Route path="/php/*" element={<PhpList  />}>  </Route>*/}
        {/*<Route path="/nodejs/*" element={<NodeJsList  />}>  </Route>*/}
        <Route path="/spring/*" element={<SpringList />}>  </Route>
        <Route path="/jspservlet/*" element={<JspServletList />}>  </Route>
        <Route path="/api/*" element={<ApiList />}>  </Route>
        <Route path="/backend/*" element={<BackendList />}>  </Route>

        {/* 서버, DB */}
        <Route path="/database/*" element={<DatabaseList />}>  </Route>
        <Route path="/cloud/*" element={<CloudList />}>  </Route>
        <Route path="/linux/*" element={<LinuxList />}>  </Route>
        <Route path="/management/*" element={<ManagementList />}>  </Route>
        <Route path="/docker/*" element={<DockerList />}>  </Route>
        <Route path="/cicd/*" element={<CicdList />}>  </Route>
        {/* 기타 */}
        <Route path="/window/*" element={<WindowList />}>  </Route>
        <Route path="/keymap/*" element={<KeyMapList />}>  </Route>
        <Route path="/network/*" element={<NetworkList />}>  </Route>
        <Route path="/term/*" element={<TermList />}>  </Route>
        <Route path="/refblog/*" element={<RefBlogList />}>  </Route>
        {/*<Route path="/python/*" element={<PythonList />}>  </Route>*/}
        {/*<Route path="/ai/*" element={<AIList />}>  </Route>*/}
        {/*<Route path="/algorithm/*" element={<AlgorithmList />}>  </Route>*/}
        {/*<Route path="/blockchain/*" element={<BlockChainList />}>  </Route>*/}
        <Route path="/security/*" element={<SecurityList />}>  </Route>
        <Route path="/designpattern/*" element={<DesignPatternList />}>  </Route>
        <Route path="/codingtest/*" element={<CodingTestList />}>  </Route>
        <Route path="/program/*" element={<ProgramList />}>  </Route>
        <Route path="/figma/*" element={<FigmaList />}>  </Route>
        <Route path="/refactoring/*" element={<RefactoringList />}>  </Route>
      </Routes>
    </Container>
  );
}

export default BlogCategory2Links;