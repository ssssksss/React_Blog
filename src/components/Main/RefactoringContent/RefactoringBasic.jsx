import React from 'react';

const RefactoringBasic = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 리팩토링 기초 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1. 함수는 단 1개만의 기능을 가지게 한다.(형변환 되는 함수로 따로 만듬) </li>
                        <li> 2. 추상화를 한다.(기존에 있던 isEmpty()같은 함수를 쓰더라도 따로 함수를 정의할 것) </li>
                        <li> 3. else를 사용하는 것 대신에 return등으로 처리할 것 </li>
                        <li> 4. 변수를 굳이 선언할 필요가 없다면 줄일 것 </li>
                        <li> 5.  </li>

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
        </div>
    );
}

export default RefactoringBasic;