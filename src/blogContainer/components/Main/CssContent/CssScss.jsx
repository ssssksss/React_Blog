import React from 'react';

const CssScss = (props) => {
	return (
		<>

			<div className="common_style" >

				<div className='block1'>
					<details>
						<summary> scss란 </summary>
						<div className='block2'>

							<h2 className='h2'> 📌 설명 </h2>
							<li> 1 </li>
							<li> 2 </li>
							<li> 3 </li>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 </h3>
									<div className='block4'>
										<li>  </li>
									</div>
								</div>
							</li>

						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> Scss 문법 </summary>
						<div className='block2'>

							<li> 🚩 주석 </li>
							<div className="block3">
								<li> /* */ 으로 사용하면된다. (Sass는 각 줄마다 *을 사용하고 *을 라인을 일치시켜주어야 한다.) </li>
								<li>  </li>
							</div>

							<li> 🚩 데이터 타입 </li>
							<div className="block3">
								<li> Numbers, Strings, Colors, Booleans, Nulls </li>
								<li> Lists
									<p> (A,B,C) <small> # 이와같이 소괄호를 사용해서 묶음 </small> </p>
								</li>
								<li> Maps
									<p> (A:a, B:b, C:c) <small> # 이와 같이 소괄호에 Key-Value 형식을 사용한다. </small> </p>
								</li>
								<li>  </li>
							</div>

							<li> 🚩 변수 사용 </li>
							<div className="block3">
								<li> $VAR: red; </li>
								<li>  </li> <br />

								<li> .CLASSNAME {'{'}
									<li> width: 100%; </li>
									<li> div {'{'}
										<li> color: $VAR; </li>
									</li>
									<li> {'}'} </li>
								</li>
								<li> {'}'} </li>
							</div>

							<li> 🚩 중첩(Nesting) </li>
							<div className="block3">
								<li> .CLASSNAME {'{'}
									<li> width: 100%; </li>
									<li> div {'{'}
										<li> color: red; </li>
									</li>
									<li> {'}'} </li>
								</li>
								<li> {'}'} </li>
							</div>

							<li> 🚩 중첩 속성 </li>
							<div className="block3">
								<li> .CLASSNAME {'{'}
									<li> margin: {'{'} </li>
									<li> top: 10px; </li>
									<li> bottom: 10px; </li>
									<li> {'}'} </li>
								</li>
								<li> {'}'} </li>
							</div>

							<li> 🚩 상위선택자참조(Ampersand) | & </li>
							<div className="block3">
								<li>  </li>
								<li> .CLASSNAME {'{'}
									<li> width: 100%; </li>
									<li> &:hover {'{'} <small> # .CLASSNAME:hover 와 같은의미 </small>
										<li> color: red; </li>
									</li>
									<li> {'}'} </li>
								</li>
								<li> {'}'} </li>
							</div>

							<li> 🚩 중첩에서 벗어나는 방법 | @at-root </li>
							<div className="block3">
								<li>  </li>
								<li> .CLASSNAME {'{'}
									<li> width: 100%; </li>
									<li> @at-root .CLASSNAME1 {'{'} <small> # .CLASSNAME .CLASSNAME1 이 아니라 그냥 .CLASSNAME1이 된다. </small>
										<li> color: red; </li>
									</li>
									<li> {'}'} </li>
								</li>
								<li> {'}'} </li>
							</div>

							<li> 🚩  </li>
							<div className="block3">
								<li>  </li>
							</div>

							<li> 🚩  </li>
							<div className="block3">
								<li>  </li>
							</div>

							<li> 🚩  </li>
							<div className="block3">
								<li>  </li>
							</div>


						</div>
					</details>
				</div>

				<div className='block1'>
					<details>
						<summary> scss 예시 </summary>
						<div className='block2'>

							<h2 className='h2'> ✔ 예시 </h2>
							<li> 소제목
								<div className='block3'>
									<h3 className='h3'> 🎈 scss 기본예시 </h3>
									<div className='block4'>
										<li> .CLASSNAME {'{'}
											<li> width: 100px; </li>
											<li> height: 100px; </li>
											<li> p {'{'}
												<li> color: red; </li>
												<li> {' &:last-child { '}
													<li> color: blue; </li>
												</li>
												<li> {'}'} </li>
											</li>
											<li> {'}'} </li>
										</li>
										<li> {'}'} </li>
									</div> <br />

									<h3 className='h3'> 🎈 scss 변수, 코드 재사용 </h3>
									<div className='block4'>
										<li> $VAR: 10px; </li>
										<li>  </li> <br />

										<li> @mixin FUNCNAME($VAR1) {'{'}
											<li> width: $VAR1; </li>
											<li> height: $VAR1; </li>
										</li>
										<li> {'}'} </li>
										<li>  </li> <br />

										<li> .CLASSNAME {'{'}
											<li> @include FUNCNAME(100px); </li>
											<li> margin: $VAR; <small> # margin: 10px;와 같음 </small> </li>
										</li>
										<li> {'}'} </li>
									</div> <br />
								</div>
							</li>

						</div>
					</details>
				</div>

			</div>
		</>
	);
}

export default CssScss;