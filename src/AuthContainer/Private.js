import React from 'react';
import { useSelector } from 'react-redux';

const Private = ({ children }) => {

  const auth = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      {
        auth.isLogin ? <> {children} </> : <p> 로그인이 필요합니다. </p>
      }
    </React.Fragment>
  );
};

export default Private;