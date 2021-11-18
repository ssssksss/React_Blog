import React from 'react';

const JavaScriptScroll = (props) => {
    return (
        <>
            <div className="common_style" >
                <div className='block1'>
                    <details>
                        <summary> 스크롤 제일 밑으로 내리는 방법 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> ELEMENT_NODE.scrollTop = ELEMENT_NODE.scrollHeight; </li>

                        </div>
                    </details>
                </div>
            </div>
        </>
    );
}

export default JavaScriptScroll;