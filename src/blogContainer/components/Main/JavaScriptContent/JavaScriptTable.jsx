import React from 'react';

const JavaScriptTable = (props) => {
    return (
        <>

            <div className="common_style" >
                <div className='block1'>
                    <details>
                        <summary> 테이블에 행 추가하는 방법 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> var TABLE_ROW = TABLE_ELEMENT.insertRow([n]) : 테이블 요소에 n번째에 행 추가, n이 없으면 마지막 행에 추가 </li>
                            <li> var TABLE_CELL = TABLE_ROW.insertCell(n) : row에 n번째 열을 추가 </li>
                            <li> TABLE_CELL = VALUE : 테이블 열 요소에 값 넣기 </li>
                            <li> TABLE_ELEMENT.deleteRow(n) : n번째 행을 삭제, -1이면 마지막 행을 삭제  </li>

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
        </>
    );
}

export default JavaScriptTable;