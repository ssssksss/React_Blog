import React from 'react';
import Main from './components/Main.jsx';
import BlogCategory1Links from './components/BlogCategory1Links';
import BlogCategory2Links from './components/BlogCategory2Links';
import FootterMenu from './components/FootterMenu';
import styled from 'styled-components';

const BlogContainer = () => {
  const Container3 = styled.div`
  margin: 6px 0px;
  width: 100%;
  min-height: 200px;
  background: #e3ffd3;
  border-radius: 10px;
  `;

  return (
    <div>
      <BlogCategory1Links />
      <BlogCategory2Links />
      <Main />
      <Container3>
      </Container3>
      <FootterMenu />
    </div>
  );
};

export default BlogContainer;