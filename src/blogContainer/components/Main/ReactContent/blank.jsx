import React from 'react';

const Blank = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> 제목 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> 📌 장점, 단점 </h2>
                        <li> 장점 : </li>
                        <li> 단점 : </li>

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

export default Blank;