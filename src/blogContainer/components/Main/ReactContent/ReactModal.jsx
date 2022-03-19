import React from 'react';

const ReactModal = (props) => {

  return (
    <div className="common_style">
      <div className='block1'>
        <details>
          <summary> react-modal </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설치 </h2>
            <div className='block4'>
              <li> npm install react-modal </li>
            </div>

            <h2 className='h2'> 📌 속성 </h2>
            <div className='block4'>
              <li> {' isOpen={modalIsOpen} '} </li>
              <li> {' onAfterOpen={afterOpenModal} '} </li>
              <li> {' onRequestClose={closeModal} '} </li>
              <li> {' style={customStyles} '} </li>
              <li> {' contentLabel="Example Modal" '} </li>
            </div>

            <h2 className='h2'> 📌 modalIsOpen </h2>
            <div className='block4'>
              <li> const [modalIsOpen, setIsOpen] = React.useState(false); </li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li> {' const customStyles = { '}
                <li> {' content: { '}
                  <li> {' top: "50%", '} </li>
                  <li> {' left: "50%", '} </li>
                  <li> {' right: "auto", '} </li>
                  <li> {' bottom: "auto", '} </li>
                  <li> {' marginRight: "-50%", '} </li>
                  <li> {' transform: "translate(-50%, -50%)", '} </li>
                </li>
                <li> {' }, '} </li>
              </li>
              <li> {' }; '} </li>
            </div>


            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>

            <h2 className='h2'> 📌</h2>
            <div className='block4'>
              <li></li>
              <li></li>
              <li></li>
            </div>



            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈</h3>
                <div className='block4'>
                  <li> import Modal from 'react-modal'; </li>
                  <li> {" import React, { useState } from 'react'; "} </li>
                  <li></li> <br />
                  <li> const [modalOpen, setModalOpen] = useState(false); </li>
                  <li></li> <br />
                  <li> return (
                    <li> {" <button onClick={() => setModalOpen(true)}> 팝업창 열기 </button> "} </li>
                    <li> {" <Modal isOpen={modalOpen}> "}
                      <li> {" <button onClick={() => setModalOpen(false)}> 팝업창 닫기 </button> "} </li>
                    </li>
                    <li> {" </Modal> "} </li>
                  </li>
                  <li> ); </li>
                </div>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 커스텀한 모달창 - 타입스크립트, 형태만 만들어놓아서 재사용용도 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Component.tsx </h2>
            <div className='block4'>
              <li> import ModalFrame from "../Modal/ModalFrame"; </li>
              <li> const [modalOpen, setModalOpen] = useState(false); </li>
              <li> {' const modalHandler = () => { '}
                <li> {' setModalOpen(modalOpen ? false : true); '} </li>
              </li>
              <li> {' }; '} </li>
              <li></li> <br />
              <li> return (
                <li> {' {modalOpen && <ModalFrame modalHandler={modalHandler} />} '} </li>
              </li>
              <li> ); </li>
            </div>

            <h2 className='h2'> 📌 ModalFrame.tsx </h2>
            <div className='block4'>
              <li> {' import styled from "styled-components"; '} </li> <br />
              <li> {' const Overlay = styled.div` '}
                <li> {' position: fixed; '} </li>
                <li> {' width: 100%; '} </li>
                <li> {' height: 100%; '} </li>
                <li> {' left: 0; '} </li>
                <li> {' top: 0; '} </li>
                <li> {' background: rgba(174, 174, 174, 0.8); '} </li>
                <li> {' cursor: pointer; '} </li>
                <li> {' border: 0px; '} </li>
              </li>
              <li> {' `; '} </li>
              <li> {' const Container = styled.button` '}
                <li> {' position: absolute; '} </li>
                <li> {' top: 50%; '} </li>
                <li> {' left: 50%; '} </li>
                <li> {' background: white; '} </li>
                <li> {' width: 60%; '} </li>
                <li> {' height: calc(100% - 100px); '} </li>
                <li> {' transform: translate(-50%, -50%); '} </li>
                <li> {' border: 0px; '} </li>
              </li>
              <li> {' `; '} </li>
              <li> {' const Exit = styled.button` '}
                <li> {' position: absolute; '} </li>
                <li> {' right: 10px; '} </li>
                <li> {' top: 10px; '} </li>
                <li> {' border: 0px; '} </li>
                <li> {' width: 40px; '} </li>
                <li> {' height: 40px; '} </li>
                <li> {' background: #aeaeae; '} </li>
                <li> {' cursor: pointer; '} </li>
              </li>
              <li> {' `; '} </li> <br />
              <li> {' const ModalFrame = (modalHandler: any) => { '}
                <li> {' return ( '}
                  <li> {' <Overlay onClick={() => modalHandler.modalHandler()}> '}
                    <li> {' <Container> '}
                      <li> {' <Exit onClick={() => modalHandler.modalHandler()}>X</Exit> '} </li>
                    </li>
                    <li> {' </Container> '} </li>
                  </li>
                  <li> {' </Overlay> '} </li>
                </li>
                <li> {' ); '} </li>
              </li>
              <li> {' }; '} </li>
              <li> {' export default ModalFrame; '} </li>
            </div>


          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default ReactModal;