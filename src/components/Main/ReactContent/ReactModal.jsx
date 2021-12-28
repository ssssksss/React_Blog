import React from 'react';

const ReactModal = (props) => {

	return (
		<div className="common_style">
			<div className='block1'>
				<details>
					<summary> react-modal 라이브러리 </summary>
					<div className='block2'>

						<h2 className='h2'> 📌 설치 </h2>
						<li> npm install react-modal </li>
						<li>  </li>
						<li>  </li>

						<h2 className='h2'> 📌 속성 설명 </h2>
						<li> {" <Modal isOpen={참,거짓 스테이트 넣어주기} onRequestClose={() => setModalOpen(false)}> "} <small> # 바깥(오버레이)이나 ESC를 누르면 모달창이 꺼짐 </small> </li>
						<li> {" <Modal isOpen={참,거짓 스테이트 넣어주기} shouldCloseOnOverlayClick={참,거짓} "} <small> # 바깥(오버레이)이나 누르면 모달창이 꺼지는 속성 제거 </small> </li>
						<li>  </li>
						<li>  </li>

						<h2 className='h2'> ✔ 예시 </h2>
						<li>
							<div className='block3'>
								<h3 className='h3'> 🎈  </h3>
								<div className='block4'>
									<li> import Modal from 'react-modal'; </li>
									<li> {" import React, { useState } from 'react'; "} </li>
									<li>  </li> <br />
									<li> const [modalOpen, setModalOpen] = useState(false); </li>
									<li>  </li> <br />
									<li> return (
										<li> {" <button onClick={() => setModalOpen(true)}> 팝업창 열기 </button> "} </li>
										<li> {" <Modal isOpen={modalOpen}"}
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
					<summary> React Portal(보류) </summary>
					<div className='block2'>

						<h2 className='h2'> 📌 설치 </h2>
						<li> npm install --save react react-dom </li>

						<h2 className='h2'> ✔ 예시 </h2>
						<li>
							<div className='block3'>
								<h3 className='h3'> 🎈 </h3>
								<div className='block4'>
									<li> {" import {createPortal} from 'react-dom' "} </li>
									<li>  </li> <br />
									<li>  </li>
									<li>  </li>
								</div>
							</div>
						</li>

					</div>
				</details>
			</div>
		</div>
	);
}

export default ReactModal;