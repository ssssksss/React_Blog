import React from 'react';

const JavaScriptAttribute = (props) => {
    return (
        <>

            <div className="common_style" >

                <div className='block1'>
                    <details>
                        <summary> 자바스크립트 요소 속성 </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 속성 타입 반환 </h2>
                            <li> ELEMENT.attributes[0] : 요소의 0번째 속성 타입 반환 </li>
                            <li> ELEMENT.attributes.item(0) : 요소의 0번째 속성 타입 반환 </li>
                            <li> ELEMENT.attributes.getNamedItem("ATTRIBUTE_NAME") : 요소에서 선택한 속성이름의 속성 타입 반환 </li>

                            <h2 className='h2'> 📌 속성 이름 반환 </h2>
                            <li> ELEMENT.attributes[0].name : 요소의 0번째 속성 이름 반환 </li>
                            <li> ELEMENT.attributes.item(0).name : 요소의 0번째 속성 이름 반환 </li>
                            <li> ELEMENT.attributes.item(0).nodeName : 요소의 0번째 속성 이름 반환 </li>

                            <h2 className='h2'> 📌 속성 값 이름 반환 </h2>
                            <li> ELEMENT.attributes[0].value : 요소의 0번째 속성 값 이름 반환 </li>
                            <li> ELEMENT.attributes.item(0).value : 요소의 0번째 속성 값 이름 반환 </li>

                            <h2 className='h2'> 📌 기타 </h2>
                            <li> ELEMENT.attributes.length : 요소의 속성 갯수 반환 </li>
                            <li> ELEMENT.removeNamedItem("ATTRIBUTE_NAME"); </li>

                            <h2 className='h2'> 📌 요소에 속성과 값을 추가하는 방법 </h2>
                            <li> var x = document.createAttribute("ATTRIBUTE_NAME"); </li>
                            <li> x.value = "ATTRIBUTE_VALUE"; </li>
                            <li> ELEMENT.attributes.setNamedItem(x); </li>
                            <li>  </li>

                            <h2 className='h2'> 📌  </h2>
                            <li>  </li>

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

export default JavaScriptAttribute;