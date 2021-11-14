import React from 'react';

const JavaScriptError = (props) => {
    return (
        <>

            <div className="common_style" >

                <div className='block1'>
                    <details>
                        <summary> TypeError: Cannot read properties of undefined </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> JS가 참조하는 프로퍼티가 존재하지 않아서 발생 </li>

                        </div>
                    </details>
                </div>

            </div>
        </>
    );
}

export default JavaScriptError;