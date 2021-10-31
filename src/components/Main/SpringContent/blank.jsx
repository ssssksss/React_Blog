import React, { useEffect, useRef } from 'react';

const Blank = (props) => {

    return (
        <>
            <div className='block1'>
                <details>
                    <summary> 제목 </summary>
                    <div className='block2'>

                        <h2> 📌 설명 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> 1 </li>
                                <li> 2 </li>
                                <li> 3 </li>
                            </div>
                        </li>

                        <h2> 📌 장점, 단점, 사용이유 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> 1 </li>
                                <li> 2 </li>
                                <li> 3 </li>
                            </div>
                        </li>

                        <h2> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <li> 1 </li>
                                <li> 2 </li>
                                <li> 3 </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </>
    );
}

export default Blank;