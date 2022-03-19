import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 5;
`;
const PopupClose = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 2rem;
`;
const PopupNav = styled.div`
  position: relative;
  height: 40px;
`;

const CustomModal = ({ header, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.StrictMode>
      <button onClick={() => setModalOpen(true)}> {header} </button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <Container>
          <PopupNav>
            <PopupClose onClick={() => setModalOpen(false)}> 닫기 </PopupClose>
          </PopupNav>
          {children}
        </Container>
      </Modal>
    </React.StrictMode>
  );
};

export default CustomModal;