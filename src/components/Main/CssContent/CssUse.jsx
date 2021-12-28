import React from 'react';

const TCssUse = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 화면의 고정 높이 요소를 제외하고 나머지 100%화면 채우는 방법 </summary>
                    <div className='block2'>
                        <h2 className='h2'> 📌 CSS </h2>
                        <li> height = calc(100vh - [고정높이]); </li>
                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 한줄(밑줄) 긋기 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> {" <hr size='3' color='[black,#aeaeae]' width='[10px,10%]' align='[left,rigth,center]' noshade  /> "} </li>
                            <li> {' <hr size="3" color="#aeaeae" /> '} </li>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
}

export default TCssUse;